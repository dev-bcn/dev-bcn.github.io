"""
Module for text rendering operations
"""
import logging
import textwrap
from typing import Tuple, Optional
from PIL import ImageDraw, ImageFont

logger = logging.getLogger(__name__)


class TextRenderer:
    """Class for rendering text on images"""

    def __init__(self, draw: ImageDraw.ImageDraw, max_width: int):
        """
        Initialize the text renderer
        
        Args:
            draw: ImageDraw object to draw on
            max_width: Maximum width for text wrapping
        """
        self.draw = draw
        self.max_width = max_width

    def get_font(self, font_path: str, font_size: int) -> ImageFont.FreeTypeFont:
        """Get a font object
        
        Args:
            font_path: Path to the font file
            font_size: Font size in points
            
        Returns:
            Font object
        """
        try:
            return ImageFont.truetype(font_path, font_size)
        except OSError as e:
            logger.error(f"Failed to load font {font_path}: {e}")
            # Fall back to default font
            return ImageFont.load_default()

    def calculate_wrap_width(self, font: ImageFont.FreeTypeFont) -> int:
        """Calculate the wrap width in characters based on font metrics
        
        Args:
            font: Font to use for calculations
            
        Returns:
            Wrap width in characters
        """
        avg_char_width = font.getlength("A")
        return max(10, int(self.max_width / avg_char_width))

    def draw_text_left(self, text: str, position: Tuple[int, int], font_path: str, 
                      fill: str, font_size: int, shadow: bool = False, 
                      line_spacing: int = 10) -> int:
        """Draw left-aligned text, possibly with shadow
        
        Args:
            text: Text to draw
            position: (x, y) position to start drawing
            font_path: Path to the font file
            fill: Text color
            font_size: Font size in points
            shadow: Whether to draw a shadow
            line_spacing: Spacing between lines
            
        Returns:
            Y position after the last line of text
        """
        font = self.get_font(font_path, font_size)
        wrap_width = self.calculate_wrap_width(font)
        lines = textwrap.wrap(text, width=wrap_width)
        
        x, y = position
        for line in lines:
            if shadow:
                self.draw.text((x + 2, y + 2), line, font=font, fill="#000000")
            self.draw.text((x, y), line, font=font, fill=fill)
            
            bbox = self.draw.textbbox((x, y), line, font=font)
            h = bbox[3] - bbox[1]
            y += h + line_spacing
            
        return y

    def draw_text_centered(self, text: str, position_y: int, font_path: str, 
                          fill: str, font_size: int, image_width: int, 
                          line_spacing: int = 10) -> int:
        """Draw center-aligned text
        
        Args:
            text: Text to draw
            position_y: Y position to start drawing
            font_path: Path to the font file
            fill: Text color
            font_size: Font size in points
            image_width: Width of the image for centering
            line_spacing: Spacing between lines
            
        Returns:
            Y position after the last line of text
        """
        font = self.get_font(font_path, font_size)
        wrap_width = self.calculate_wrap_width(font)
        lines = textwrap.wrap(text, width=wrap_width)
        
        y = position_y
        for line in lines:
            bbox = self.draw.textbbox((0, 0), line, font=font)
            line_width = bbox[2] - bbox[0]
            x = (image_width - line_width) // 2
            
            self.draw.text((x, y), line, font=font, fill=fill)
            
            h = bbox[3] - bbox[1]
            y += h + line_spacing
            
        return y
