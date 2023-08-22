from PIL import Image
from pathlib import Path
import argparse

CROPPED_SUFFIX = "_cropped.png"


def trim(image: Image.Image) -> Image.Image:
    bbox = image.getbbox()
    cropped_image: Image.Image = image.crop(bbox)

    return cropped_image


def process_image(input_path: Path) -> None:
    with Image.open(input_path) as image:
        trimmed_image: Image.Image = trim(image)
        output_filename: str = input_path.stem + CROPPED_SUFFIX
        output_path: Path = input_path.with_name(output_filename)
        trimmed_image.save(output_path)


def main(target_directory: Path) -> None:
    for input_path in target_directory.glob("**/*.png"):
        if not input_path.name.endswith(CROPPED_SUFFIX):
            print(input_path)
            process_image(input_path)


if __name__ == "__main__":
    this_directory = Path(__file__).resolve().parent
    target_directory = this_directory.parent.parent / "public" / "img"

    print(target_directory)

    main(target_directory)
