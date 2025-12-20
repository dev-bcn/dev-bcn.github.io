"""
Configuration settings for story image generation
"""
import os
from dataclasses import dataclass, field
from typing import Dict, Tuple


@dataclass
class Config:
    # Paths
    LOGO_PATH: str = "../public/images/logo.webp"
    FONT_PRIMARY: str = "../src/fonts/DejaVu Sans Bold.ttf"
    FONT_SECONDARY: str = "../src/fonts/Square 721 Regular.otf"
    OUTPUT_DIR: str = "output"

    # Image settings
    STORY_SIZE: Tuple[int, int] = (1080, 1920)
    SAFE_MARGIN: int = 100
    BLUR_PERCENTAGE: float = 0.3

    # Colors
    BG_COLOR: str = "#002454"
    BG_GRADIENT_BOTTOM: str = "#00152E"
    COLOR_WHITE: str = "#FFFFFF"
    COLOR_YELLOW: str = "#FFCC00"
    COLOR_GREEN: str = "#00FFAA"

    # Font sizes
    FONT_SIZE_NAME: int = 60
    FONT_SIZE_ROLE: int = 40
    FONT_SIZE_SESSION: int = 60
    FONT_SIZE_EVENT: int = 30
    ROLE_OFFSET_Y: int = 60

    # API endpoints
    SPEAKERS_API: str = "https://sessionize.com/api/v2/xhudniix/view/Speakers"
    SESSIONS_API: str = "https://sessionize.com/api/v2/xhudniix/view/Sessions"

    # Event details
    EVENT_DETAILS: str = "July 8–10, 2025 — La Farga, Barcelona"

    # Track gradients
    TRACK_GRADIENTS: Dict[str, Tuple[str, str]] = field(
        default_factory=lambda: {
            "Java | JVM | Cloud": ("#003366", "#001122"),
            "DevOps, VMs, Kubernetes": ("#004422", "#001911"),
            "Frontend, JS, WASM": ("#223366", "#111122"),
            "Leadership, Agile, Diversity": ("#662244", "#221122"),
            "Big Data, ML, AI, Python": ("#222244", "#111122"),
            "No Track": ("#002454", "#00152E"),
        })

    def get_track_gradient(self, track_name: str) -> Tuple[str, str]:
        """Get gradient colors for a specific track"""
        return self.TRACK_GRADIENTS.get(track_name, (self.BG_COLOR,
                                                     self.BG_GRADIENT_BOTTOM))

    def ensure_output_dir(self) -> None:
        """Create output directory if it doesn't exist"""
        os.makedirs(self.OUTPUT_DIR, exist_ok=True)
