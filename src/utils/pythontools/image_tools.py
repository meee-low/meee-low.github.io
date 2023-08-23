from PIL import Image
from pathlib import Path
import argparse

CROPPED_SUFFIX = "_cropped.png"
SHRUNK_SUFFIX = "_shrunk.png"


def generate_output_path(input_path: Path, in_place: bool, suffix: str) -> Path:
    if in_place:
        return input_path
    output_filename: str = input_path.stem + suffix
    return input_path.with_name(output_filename)


def trim(input_path: Path, in_place: bool = False) -> None:
    with Image.open(input_path) as image:
        bbox = image.getbbox()
        trimmed_image: Image.Image = image.crop(bbox)

        output_path: Path = generate_output_path(
            input_path=input_path, in_place=in_place, suffix=CROPPED_SUFFIX)

        trimmed_image.save(output_path)


def shrink(input_path: Path, max_size: int = 128, in_place: bool = False) -> None:
    with Image.open(input_path) as image:
        width, height = image.size
        # print(width, height)

        while width > max_size and height > max_size:
            width = width // 2
            height = height // 2
            # print(width, height)

        resized_image = image.resize((width, height), Image.Resampling.LANCZOS)

        output_path: Path = generate_output_path(
            input_path=input_path, in_place=in_place, suffix=SHRUNK_SUFFIX)

        resized_image.save(output_path)


def main() -> None:
    parser = argparse.ArgumentParser()

    parser.add_argument("target_path")
    actiongroup = parser.add_mutually_exclusive_group()

    actiongroup.add_argument("--trim", action="store_true")
    shrink_group = actiongroup.add_argument_group()
    actiongroup.add_argument("--shrink", action="store_true")
    shrink_group.add_argument("--max-size", type=int, default=128)

    parser.add_argument("--in-place", action="store_true")

    args = parser.parse_args()

    target_directory: Path = Path(args.target_path)
    for input_path in target_directory.glob("**/*.png"):
        if args.trim:
            if not input_path.name.endswith(CROPPED_SUFFIX):
                print(input_path)
                trim(input_path, args.in_place)
        elif args.shrink:
            if not input_path.name.endswith(SHRUNK_SUFFIX):
                print(input_path)
                shrink(input_path, args.max_size, args.in_place)


if __name__ == "__main__":
    # with current folder structure:
    # ..\..\..\public\img
    main()
