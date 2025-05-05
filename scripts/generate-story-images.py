#!/usr/bin/env python3
"""
Generate conference story images for speakers and sessions.

This script uses the refactored modules to generate story images for the conference,
following SOLID principles for better maintainability and testability.
"""
import argparse
import logging
from concurrent.futures import ThreadPoolExecutor
from typing import Dict, Any, List, Tuple

from config import Config
from data_fetcher import DataFetcher
from story_generator import StoryGenerator

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


def parse_arguments():
    """Parse command line arguments"""
    parser = argparse.ArgumentParser(
        description='Generate story images for conference speakers and sessions')
    parser.add_argument('--max-workers', type=int, default=10,
                        help='Maximum number of worker threads')
    parser.add_argument('--timeout', type=int, default=10,
                        help='Timeout for HTTP requests in seconds')
    parser.add_argument('--output-dir', type=str, default='output',
                        help='Directory to save generated images')
    return parser.parse_args()


def process_session(generator: StoryGenerator, session: Dict[str, Any],
                    speaker: Dict[str, Any], track_name: str) -> str:
    """Process a single session and generate its story image
    
    Args:
        generator: StoryGenerator instance
        session: Session data
        speaker: Speaker data
        track_name: Name of the track
        
    Returns:
        Path to the generated image file
    """
    try:
        return generator.generate_story(speaker, session, track_name)
    except Exception as e:
        logger.error(
            f"Failed to process session {session.get('title', 'Unknown')}: {e}")
        raise


def main():
    """Main entry point"""
    args = parse_arguments()

    # Initialize configuration
    config = Config()
    # Override output directory from command line if provided
    if args.output_dir:
        config.OUTPUT_DIR = args.output_dir

    # Ensure output directory exists
    config.ensure_output_dir()

    # Initialize components
    data_fetcher = DataFetcher(request_timeout=args.timeout)
    story_generator = StoryGenerator(config, data_fetcher)

    logger.info("Fetching speakers and sessions...")

    try:
        # Fetch data
        speakers_lookup = data_fetcher.fetch_speakers(config.SPEAKERS_API)
        tracks = data_fetcher.fetch_sessions_by_track(config.SESSIONS_API)

        # Process all sessions
        with ThreadPoolExecutor(max_workers=args.max_workers) as executor:
            futures = []

            for track_name, sessions in tracks.items():
                logger.info(
                    f"Processing track: {track_name} with {len(sessions)} sessions")

                for session in sessions:
                    speaker_ids = session.get('speakers', [])
                    speaker_id = speaker_ids[0]['id'] if speaker_ids else None

                    if speaker_id and speaker_id in speakers_lookup:
                        speaker = speakers_lookup[speaker_id]
                        futures.append(
                            executor.submit(
                                process_session,
                                story_generator,
                                session,
                                speaker,
                                track_name
                            )
                        )

            # Wait for all tasks to complete
            completed = 0
            for future in futures:
                future.result()
                completed += 1
                if completed % 5 == 0:
                    logger.info(
                        f"Processed {completed}/{len(futures)} sessions")

        logger.info("✅ All stories generated!")

    except Exception as e:
        logger.error(f"Error processing stories: {e}")
        return 1

    return 0


if __name__ == "__main__":
    exit(main())
