"""
Tests for file utility functions
"""
import os
import tempfile
import unittest
from unittest.mock import patch, MagicMock

from PIL import Image

import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from file_utils import slugify, save_image


class TestSlugify(unittest.TestCase):
    """Tests for the slugify function"""
    
    def test_lowercase_conversion(self):
        """Test that text is converted to lowercase"""
        self.assertEqual(slugify("HELLO WORLD"), "hello-world")
    
    def test_whitespace_handling(self):
        """Test that whitespace is replaced with hyphens"""
        self.assertEqual(slugify("hello world"), "hello-world")
        self.assertEqual(slugify("  hello  world  "), "hello-world")
    
    def test_special_character_removal(self):
        """Test that special characters are removed"""
        self.assertEqual(slugify("hello@world!"), "helloworld")
        self.assertEqual(slugify("hello-world"), "hello-world")
        self.assertEqual(slugify("hello_world"), "hello_world")
    
    def test_consecutive_separators(self):
        """Test that consecutive separators are collapsed"""
        self.assertEqual(slugify("hello - - world"), "hello-world")
        self.assertEqual(slugify("hello---world"), "hello-world")


class TestSaveImage(unittest.TestCase):
    """Tests for the save_image function"""
    
    def setUp(self):
        """Set up test fixtures"""
        self.temp_dir = tempfile.mkdtemp()
        self.mock_image = MagicMock(spec=Image.Image)
    
    def tearDown(self):
        """Clean up test fixtures"""
        for file in os.listdir(self.temp_dir):
            os.remove(os.path.join(self.temp_dir, file))
        os.rmdir(self.temp_dir)
    
    def test_directory_creation(self):
        """Test that the directory is created if it doesn't exist"""
        new_dir = os.path.join(self.temp_dir, "new_dir")
        
        with patch('os.makedirs') as mock_makedirs:
            save_image(self.mock_image, new_dir, "test")
            mock_makedirs.assert_called_once_with(new_dir, exist_ok=True)
    
    def test_filename_slugification(self):
        """Test that the filename is correctly slugified"""
        with patch('file_utils.slugify', return_value="slugified") as mock_slugify:
            path = save_image(self.mock_image, self.temp_dir, "Test File Name!")
            mock_slugify.assert_called_once_with("Test File Name!")
            self.assertEqual(path, os.path.join(self.temp_dir, "slugified.png"))
    
    def test_image_saving(self):
        """Test that the image is saved correctly"""
        save_image(self.mock_image, self.temp_dir, "test")
        self.mock_image.save.assert_called_once()
        # Verify the save path argument
        args, _ = self.mock_image.save.call_args
        self.assertEqual(args[0], os.path.join(self.temp_dir, "test.png"))
    
    @patch('file_utils.logger')
    def test_save_exception_logging(self, mock_logger):
        """Test that exceptions during save are logged"""
        self.mock_image.save.side_effect = Exception("Save error")
        
        with self.assertRaises(Exception):
            save_image(self.mock_image, self.temp_dir, "test")
        
        mock_logger.error.assert_called_once()
        self.assertIn("Failed to save image", mock_logger.error.call_args[0][0])


if __name__ == '__main__':
    unittest.main()
