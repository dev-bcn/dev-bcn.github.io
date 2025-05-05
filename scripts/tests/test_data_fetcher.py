"""
Tests for the DataFetcher class
"""
import os
import unittest
from unittest.mock import patch, MagicMock, Mock

import requests
from PIL import Image, UnidentifiedImageError

import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from data_fetcher import DataFetcher


class TestDataFetcher(unittest.TestCase):
    """Tests for the DataFetcher class"""

    def setUp(self):
        """Set up test fixtures"""
        self.fetcher = DataFetcher(request_timeout=5)

    @patch('requests.get')
    def test_fetch_json_success(self, mock_get):
        """Test successful JSON fetch"""
        # Mock response
        mock_response = Mock()
        mock_response.json.return_value = {"key": "value"}
        mock_get.return_value = mock_response

        # Test
        result = self.fetcher.fetch_json("http://example.com/api")

        # Verify
        mock_get.assert_called_once_with("http://example.com/api", timeout=5)
        mock_response.raise_for_status.assert_called_once()
        self.assertEqual(result, {"key": "value"})

    @patch('requests.get')
    def test_fetch_json_error(self, mock_get):
        """Test JSON fetch with request error"""
        # Mock response
        mock_get.side_effect = requests.RequestException("Connection error")

        # Test
        with self.assertRaises(requests.RequestException):
            self.fetcher.fetch_json("http://example.com/api")

    @patch('requests.get')
    @patch('PIL.Image.open')
    def test_fetch_image_success(self, mock_open, mock_get):
        """Test successful image fetch"""
        # Mock response
        mock_response = Mock()
        mock_response.content = b'fake_image_content'
        mock_get.return_value = mock_response

        # Mock image
        mock_image = MagicMock(spec=Image.Image)
        mock_image.convert.return_value = mock_image
        mock_open.return_value = mock_image

        # Test
        result = self.fetcher.fetch_image("http://example.com/image.jpg")

        # Verify
        mock_get.assert_called_once_with("http://example.com/image.jpg", timeout=5)
        mock_response.raise_for_status.assert_called_once()
        mock_image.convert.assert_called_once_with("RGBA")
        self.assertEqual(result, mock_image)

    @patch('requests.get')
    def test_fetch_image_request_error(self, mock_get):
        """Test image fetch with request error"""
        # Mock response
        mock_get.side_effect = requests.RequestException("Connection error")

        # Test
        with self.assertRaises(requests.RequestException):
            self.fetcher.fetch_image("http://example.com/image.jpg")

    @patch('requests.get')
    @patch('PIL.Image.open')
    def test_fetch_image_processing_error(self, mock_open, mock_get):
        """Test image fetch with image processing error"""
        # Mock response
        mock_response = Mock()
        mock_response.content = b'invalid_image_content'
        mock_get.return_value = mock_response

        # Mock image open error
        mock_open.side_effect = UnidentifiedImageError("invalid image")

        # Test
        with self.assertRaises(IOError):
            self.fetcher.fetch_image("http://example.com/image.jpg")

    @patch('PIL.Image.open')
    def test_load_local_image_success(self, mock_open):
        """Test successful local image load"""
        # Mock image
        mock_image = MagicMock(spec=Image.Image)
        mock_image.convert.return_value = mock_image
        mock_open.return_value = mock_image

        # Test
        result = self.fetcher.load_local_image("path/to/image.png")

        # Verify
        mock_open.assert_called_once_with("path/to/image.png")
        mock_image.convert.assert_called_once_with("RGBA")
        self.assertEqual(result, mock_image)

    @patch('PIL.Image.open')
    def test_load_local_image_file_not_found(self, mock_open):
        """Test local image load with file not found"""
        # Mock error
        mock_open.side_effect = FileNotFoundError("File not found")

        # Test
        with self.assertRaises(FileNotFoundError):
            self.fetcher.load_local_image("path/to/nonexistent.png")

    @patch('PIL.Image.open')
    def test_load_local_image_processing_error(self, mock_open):
        """Test local image load with processing error"""
        # Mock error
        mock_open.side_effect = IOError("Invalid image")

        # Test
        with self.assertRaises(IOError):
            self.fetcher.load_local_image("path/to/invalid.png")

    @patch.object(DataFetcher, 'fetch_json')
    def test_fetch_speakers(self, mock_fetch_json):
        """Test fetching speakers"""
        # Mock data
        mock_fetch_json.return_value = [
            {"id": "1", "name": "Speaker 1"},
            {"id": "2", "name": "Speaker 2"}
        ]

        # Test
        result = self.fetcher.fetch_speakers("http://example.com/speakers")

        # Verify
        mock_fetch_json.assert_called_once_with("http://example.com/speakers")
        self.assertEqual(result, {
            "1": {"id": "1", "name": "Speaker 1"},
            "2": {"id": "2", "name": "Speaker 2"}
        })

    @patch.object(DataFetcher, 'fetch_json')
    def test_fetch_sessions_by_track(self, mock_fetch_json):
        """Test fetching sessions by track"""
        # Mock data
        mock_fetch_json.return_value = [
            {
                "title": "Track 1",
                "sessions": [
                    {"id": "1", "title": "Session 1"},
                    {"id": "2", "title": "Session 2"}
                ]
            },
            {
                "title": "Track 2",
                "sessions": [
                    {"id": "3", "title": "Session 3"}
                ]
            }
        ]

        # Test
        result = self.fetcher.fetch_sessions_by_track("http://example.com/sessions")

        # Verify
        mock_fetch_json.assert_called_once_with("http://example.com/sessions")
        self.assertEqual(result, {
            "Track 1": [
                {"id": "1", "title": "Session 1"},
                {"id": "2", "title": "Session 2"}
            ],
            "Track 2": [
                {"id": "3", "title": "Session 3"}
            ]
        })

    @patch.object(DataFetcher, 'fetch_json')
    def test_fetch_sessions_by_track_empty(self, mock_fetch_json):
        """Test fetching sessions by track with empty data"""
        # Mock data
        mock_fetch_json.return_value = []

        # Test
        result = self.fetcher.fetch_sessions_by_track("http://example.com/sessions")

        # Verify
        mock_fetch_json.assert_called_once_with("http://example.com/sessions")
        self.assertEqual(result, {})


if __name__ == '__main__':
    unittest.main()
