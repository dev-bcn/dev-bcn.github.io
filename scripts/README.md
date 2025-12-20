# DevBcn scripts

This directory contains Python scripts for generating conference story images
for speakers and sessions.

## Setup instructions

### Setting up a virtual environment

It's recommended to use a virtual environment to isolate the dependencies for
these scripts.

```shell
python3 -m venv venv

source venv/bin/activate
```

### Installing dependencies

Once your virtual environment is activated, install the required dependencies
using the requirements.txt file:

```bash
pip install -r requirements.txt
```

## Usage

The main script is `generate-story-images.py`, which generates story images for
conference speakers and sessions.

```bash
# Navigate to the scripts directory
cd scripts

# Run the script with default settings
python generate-story-images.py

# Run with custom settings
python generate-story-images.py --output-dir custom_output --max-workers 5 --timeout 15
```

### Available Options

- `--output-dir`: directory to save generated images (default: 'output')
- `--max-workers`: maximum number of worker threads (default: 10)
- `--timeout`: timeout for HTTP requests in seconds (default: 10)

## Project structure

- `config.py`: configuration settings for story image generation
- `data_fetcher.py`: module for fetching data from APIs and local resources
- `file_utils.py`: utilities for file operations
- `image_processor.py`: image processing utilities
- `story_generator.py`: story image generator module
- `text_renderer.py`: module for text rendering operations
- `tests/`: unit tests for the modules

## Deactivating the virtual environment

When you're done working with the scripts, you can deactivate the virtual
environment:

```bash
deactivate
```
