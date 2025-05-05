"""
Module for image processing operations
"""
import logging
from typing import Tuple
from PIL import Image, ImageDraw, ImageFilter

logger = logging.getLogger(__name__)


class ImageProcessor:
    """Class for image processing operations"""

    def crop_to_square(self, image: Image.Image) -> Image.Image:
        """Crop an image to a square shape, centered

        Args:
            image: The image to crop

        Returns:
            Cropped square image
        """
        width, height = image.size
        size = min(width, height)
        left = (width - size) // 2
        top = (height - size) // 2
        right = left + size
        bottom = top + size

        return image.crop((left, top, right, bottom))

    def resize_image(self, image: Image.Image, size: Tuple[int, int]) -> Image.Image:
        """Resize an image

        Args:
            image: The image to resize
            size: Target size (width, height)

        Returns:
            Resized image
        """
        return image.resize(size)

    def apply_gradient_fade(self, image: Image.Image, fade_height: int) -> Image.Image:
        """Apply a gradient fade to the bottom of an image

        Args:
            image: The image to process
            fade_height: Height of the fade effect in pixels

        Returns:
            Image with applied fade effect
        """
        width, height = image.size
        fade = Image.new("L", (width, height), color=255)

        for y in range(height - fade_height, height):
            opacity = int(255 * (1 - (y - (height - fade_height)) / fade_height))
            for x in range(width):
                fade.putpixel((x, y), opacity)

        result = image.copy()
        result.putalpha(fade)
        return result

    def create_background(self, size: Tuple[int, int], top_color: str, bottom_color: str) -> Image.Image:
        """Create a gradient background

        Args:
            size: Image size (width, height)
            top_color: Hex color code for the top of the gradient
            bottom_color: Hex color code for the bottom of the gradient

        Returns:
            Image with gradient background
        """
        try:
            bg = Image.new("RGBA", size, top_color)
            gradient = Image.new("RGBA", size)
            draw = ImageDraw.Draw(gradient)

            for y in range(size[1]):
                ratio = y / size[1]
                r = int(int(top_color[1:3], 16) * (1 - ratio) + int(bottom_color[1:3], 16) * ratio)
                g = int(int(top_color[3:5], 16) * (1 - ratio) + int(bottom_color[3:5], 16) * ratio)
                b = int(int(top_color[5:7], 16) * (1 - ratio) + int(bottom_color[5:7], 16) * ratio)
                draw.line([(0, y), (size[0], y)], fill=(r, g, b, 255))

            bg.alpha_composite(gradient)
            return bg
        except ValueError as e:
            logger.error(f"Error creating background: {e}")
            # Fallback to solid color if gradient fails
            # Use a default color (#000000) instead of the potentially invalid top_color
            return Image.new("RGBA", size, "#000000")

    def position_logo(self, base_image: Image.Image, logo: Image.Image, 
                      margin: int, logo_width_percentage: float = 0.2) -> Image.Image:
        """Position a logo on the top right of the base image

        Args:
            base_image: The base image
            logo: The logo image
            margin: Margin from the edges
            logo_width_percentage: Width of the logo as a percentage of the base image width

        Returns:
            Image with logo placed on it
        """
        base_width = base_image.width
        logo_width = int(base_width * logo_width_percentage)
        logo_height = int(logo.height * logo_width / logo.width)

        logo_resized = logo.resize((logo_width, logo_height))

        result = base_image.copy()
        result.paste(logo_resized, (base_width - logo_width - margin, margin), logo_resized)

        return result
