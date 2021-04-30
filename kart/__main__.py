import shutil
import sys
from pathlib import Path

import kart_quickstart


def build_quickstart():
    base = Path(kart_quickstart.__file__).parent
    for path in filter(lambda name: name[:2] != "__", base.iterdir()):
        if path.is_dir():
            shutil.copytree(path, path.name)
        elif path.is_file():
            shutil.copyfile(path, path.name)
    Path("collections/posts").mkdir(parents=True, exist_ok=True)
    Path("taxonomies/tags").mkdir(parents=True, exist_ok=True)
    Path("data").mkdir(parents=True, exist_ok=True)
    Path("pages").mkdir(parents=True, exist_ok=True)
    Path("root").mkdir(parents=True, exist_ok=True)


if __name__ == "__main__":
    if sys.argv[1] == "init":
        build_quickstart()
