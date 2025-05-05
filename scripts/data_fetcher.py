"""
Module for fetching data from APIs and local resources
"""
import logging
import requests
from io import BytesIO
from typing import Dict, List, Any, Optional
from PIL import Image

logger = logging.getLogger(__name__)


class DataFetcher:
    """Class for fetching data from various sources"""

    def __init__(self, request_timeout: int = 10):
        self.request_timeout = request_timeout

    def fetch_json(self, url: str) -> Any:
        """Fetch JSON data from a URL
        
        Args:
            url: The URL to fetch data from
            
        Returns:
            Parsed JSON data
            
        Raises:
            requests.RequestException: If the request fails
        """
        try:
            response = requests.get(url, timeout=self.request_timeout)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            logger.error(f"Failed to fetch JSON from {url}: {e}")
            raise

    def fetch_image(self, url: str) -> Image.Image:
        """Fetch an image from a URL
        
        Args:
            url: The URL to fetch the image from
            
        Returns:
            PIL Image object
            
        Raises:
            requests.RequestException: If the request fails
            IOError: If the image cannot be processed
        """
        try:
            response = requests.get(url, timeout=self.request_timeout)
            response.raise_for_status()
            return Image.open(BytesIO(response.content)).convert("RGBA")
        except requests.RequestException as e:
            logger.error(f"Failed to fetch image from {url}: {e}")
            raise
        except IOError as e:
            logger.error(f"Failed to process image from {url}: {e}")
            raise

    def load_local_image(self, path: str) -> Image.Image:
        """Load an image from a local file
        
        Args:
            path: Path to the image file
            
        Returns:
            PIL Image object
            
        Raises:
            FileNotFoundError: If the file does not exist
            IOError: If the image cannot be processed
        """
        try:
            return Image.open(path).convert("RGBA")
        except (FileNotFoundError, IOError) as e:
            logger.error(f"Failed to load image from {path}: {e}")
            raise

    def fetch_speakers(self, api_url: str) -> Dict[str, Dict]:
        """Fetch speaker data and index by ID
        
        Args:
            api_url: URL for the speakers API
            
        Returns:
            Dictionary of speakers indexed by ID
        """
        speakers_data = self.fetch_json(api_url)
        return {s['id']: s for s in speakers_data}

    def fetch_sessions_by_track(self, api_url: str) -> Dict[str, List[Dict]]:
        """Fetch session data grouped by track
        
        Args:
            api_url: URL for the sessions API
            
        Returns:
            Dictionary of sessions grouped by track name
        """
        sessions_grouped = self.fetch_json(api_url)
        tracks = {}
        
        for group in sessions_grouped:
            track_name = group.get("title", "No Track")
            for session in group.get("sessions", []):
                tracks.setdefault(track_name, []).append(session)
                
        return tracks
