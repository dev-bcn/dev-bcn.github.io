"""
Utility functions for file operations
"""
import os
import logging
import re
from typing import Optional
from PIL import Image

logger = logging.getLogger(__name__)


def slugify(value: str) -> str:
    """
    Convert a string to a URL-friendly slug
    
    Args:
        value: String to convert
        
    Returns:
        Slugified string
    """
    # Remove special characters
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    # Replace whitespace with hyphens
    return re.sub(r'[-\s]+', '-', value)


def save_image(image: Image.Image, directory: str, filename: str) -> str:
    """
    Save an image to a file
    
    Args:
        image: PIL Image to save
        directory: Directory to save in
        filename: Base filename (will be slugified)
        
    Returns:
        Path to the saved file
    """
    os.makedirs(directory, exist_ok=True)
    
    # Ensure the filename is safe
    safe_filename = f"{slugify(filename)}.png"
    output_path = os.path.join(directory, safe_filename)
    
    try:
        image.save(output_path)
        logger.info(f"Saved image to {output_path}")
        return output_path
    except Exception as e:
        logger.error(f"Failed to save image to {output_path}: {e}")
        raise
