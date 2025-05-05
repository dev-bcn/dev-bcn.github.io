"""
Tests for the ImageProcessor class
"""
import os
import unittest
from unittest.mock import patch

from PIL import Image, ImageDraw

import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from image_processor import ImageProcessor


class TestImageProcessor(unittest.TestCase):
    """Tests for the ImageProcessor class"""

    def setUp(self):
        """Set up test fixtures"""
        self.processor = ImageProcessor()

        # Create test images of different dimensions
        self.square_image = Image.new('RGBA', (100, 100), (255, 0, 0, 255))
        self.wide_image = Image.new('RGBA', (200, 100), (0, 255, 0, 255))
        self.tall_image = Image.new('RGBA', (100, 200), (0, 0, 255, 255))

    def test_crop_to_square_already_square(self):
        """Test cropping an already square image"""
        result = self.processor.crop_to_square(self.square_image)
        self.assertEqual(result.size, (100, 100))

    def test_crop_to_square_wide_image(self):
        """Test cropping a wide image to square"""
        result = self.processor.crop_to_square(self.wide_image)
        self.assertEqual(result.size, (100, 100))

    def test_crop_to_square_tall_image(self):
        """Test cropping a tall image to square"""
        result = self.processor.crop_to_square(self.tall_image)
        self.assertEqual(result.size, (100, 100))

    def test_resize_image(self):
        """Test resizing an image"""
        result = self.processor.resize_image(self.square_image, (50, 50))
        self.assertEqual(result.size, (50, 50))

    def test_apply_gradient_fade(self):
        """Test applying gradient fade"""
        # Create a test image
        image = Image.new('RGBA', (100, 100), (255, 255, 255, 255))

        # Apply fade to bottom 20 pixels
        result = self.processor.apply_gradient_fade(image, 20)

        # Check size hasn't changed
        self.assertEqual(result.size, (100, 100))

        # Check that alpha channel has been modified
        # Top part should still be fully opaque
        self.assertEqual(result.getpixel((50, 10))[3], 255)

        # Bottom part should have reduced opacity
        self.assertLess(result.getpixel((50, 90))[3], 255)

    def test_create_background(self):
        """Test creating a gradient background"""
        # Create a simple gradient
        result = self.processor.create_background((100, 100), "#FF0000",
                                                  "#0000FF")

        # Check size
        self.assertEqual(result.size, (100, 100))

        # Check gradient - top should be reddish, bottom should be bluish
        r, _, b, _ = result.getpixel((50, 10))
        self.assertGreater(r, b)

        r, _, b, _ = result.getpixel((50, 90))
        self.assertGreater(b, r)

    @patch('image_processor.logger')
    def test_create_background_with_error(self, mock_logger):
        """Test creating a background with invalid color values"""
        # Create a background with invalid color
        result = self.processor.create_background((100, 100), "invalid",
                                                  "#0000FF")

        # Should fall back to solid color
        self.assertEqual(result.size, (100, 100))

        # Logger should have recorded the error
        mock_logger.error.assert_called_once()

    def test_position_logo(self):
        """Test positioning a logo on an image"""

        base_image = Image.new('RGBA', (200, 200), (255, 255, 255, 255))
        logo = Image.new('RGBA', (50, 25), (0, 0, 0, 255))

        result = self.processor.position_logo(base_image, logo, 10, 0.25)

        self.assertEqual(result.size, (200, 200))

        # Logo should be in top-right corner
        # Base image is white, logo is black, so checking for non-white pixels
        # at the expected logo position

        # Logo width should be 25% of base image width = 50px
        # Logo should be at position (200 - 50 - 10, 10) = (140, 10)
        # Check pixel near the logo center
        r, g, b, _ = result.getpixel((150, 15))
        self.assertLess(r + g + b, 100)


if __name__ == '__main__':
    unittest.main()
