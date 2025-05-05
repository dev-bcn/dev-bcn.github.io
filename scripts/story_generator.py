"""
Story image generator module
"""
import logging
from typing import Dict, Any, Tuple
from PIL import Image, ImageDraw

from config import Config
from data_fetcher import DataFetcher
from image_processor import ImageProcessor
from text_renderer import TextRenderer
from file_utils import save_image, slugify

logger = logging.getLogger(__name__)


class StoryGenerator:
    """Class for generating story images"""

    def __init__(self, config: Config, data_fetcher: DataFetcher):
        """
        Initialize the story generator
        
        Args:
            config: Configuration object
            data_fetcher: Data fetcher for retrieving images and data
        """
        self.config = config
        self.data_fetcher = data_fetcher
        self.image_processor = ImageProcessor()

    def generate_story(self, speaker: Dict[str, Any], session: Dict[str, Any], 
                      track_name: str) -> str:
        """
        Generate a story image for a speaker and session
        
        Args:
            speaker: Speaker data
            session: Session data
            track_name: Name of the track
            
        Returns:
            Path to the saved image file
        """
        try:
            # Create background with appropriate gradient for the track
            bg_top, bg_bottom = self.config.get_track_gradient(track_name)
            background = self.image_processor.create_background(
                self.config.STORY_SIZE, bg_top, bg_bottom
            )
            
            # Process speaker image
            speaker_img = self._prepare_speaker_image(speaker['profilePicture'])
            
            # Combine images
            story = background.copy()
            story.paste(speaker_img, (0, 0), speaker_img)
            
            # Add logo
            logo = self.data_fetcher.load_local_image(self.config.LOGO_PATH)
            story = self.image_processor.position_logo(
                story, logo, self.config.SAFE_MARGIN
            )
            
            # Add text
            self._add_text_elements(story, speaker, session)
            
            # Save the image
            filename = f"{speaker['fullName']}-{session['title']}"
            return save_image(story, self.config.OUTPUT_DIR, filename)
            
        except Exception as e:
            logger.error(f"Failed to generate story for {speaker['fullName']}: {e}")
            raise

    def _prepare_speaker_image(self, image_url: str) -> Image.Image:
        """
        Prepare the speaker image (download, crop, resize, fade)
        
        Args:
            image_url: URL of the speaker's profile picture
            
        Returns:
            Processed speaker image
        """
        try:
            # Fetch and process speaker image
            speaker_img = self.data_fetcher.fetch_image(image_url)
            speaker_img = self.image_processor.crop_to_square(speaker_img)
            speaker_img_resized = self.image_processor.resize_image(
                speaker_img, (self.config.STORY_SIZE[0], self.config.STORY_SIZE[0])
            )
            
            # Apply gradient fade to bottom of image
            fade_height = int(self.config.STORY_SIZE[0] * self.config.BLUR_PERCENTAGE)
            return self.image_processor.apply_gradient_fade(speaker_img_resized, fade_height)
        except Exception as e:
            logger.error(f"Failed to prepare speaker image from {image_url}: {e}")
            raise

    def _add_text_elements(self, image: Image.Image, speaker: Dict[str, Any], 
                          session: Dict[str, Any]) -> None:
        """
        Add all text elements to the image
        
        Args:
            image: Base image to add text to
            speaker: Speaker data
            session: Session data
        """
        draw = ImageDraw.Draw(image)
        text_renderer = TextRenderer(
            draw, self.config.STORY_SIZE[0] - 2 * self.config.SAFE_MARGIN
        )
        
        # Calculate text starting Y position
        text_start_y = self.config.STORY_SIZE[0] - 300
        
        # Draw speaker name
        name_end_y = text_renderer.draw_text_left(
            speaker['fullName'],
            (self.config.SAFE_MARGIN, text_start_y),
            self.config.FONT_PRIMARY,
            self.config.COLOR_WHITE,
            self.config.FONT_SIZE_NAME,
            shadow=True
        )
        
        # Draw speaker role
        text_renderer.draw_text_left(
            speaker['tagLine'],
            (self.config.SAFE_MARGIN, name_end_y + self.config.ROLE_OFFSET_Y),
            self.config.FONT_SECONDARY,
            self.config.COLOR_GREEN,
            self.config.FONT_SIZE_ROLE,
            shadow=True
        )
        
        # Draw session title
        text_renderer.draw_text_left(
            session['title'],
            (self.config.SAFE_MARGIN, self.config.STORY_SIZE[0] + self.config.SAFE_MARGIN),
            self.config.FONT_SECONDARY,
            self.config.COLOR_YELLOW,
            self.config.FONT_SIZE_SESSION
        )
        
        # Draw event details at bottom
        event_y = self.config.STORY_SIZE[1] - self.config.SAFE_MARGIN - 50
        text_renderer.draw_text_centered(
            self.config.EVENT_DETAILS,
            event_y,
            self.config.FONT_PRIMARY,
            self.config.COLOR_WHITE,
            self.config.FONT_SIZE_EVENT,
            self.config.STORY_SIZE[0]
        )
