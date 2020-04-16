import os
import sys
import shutil
import kart_quickstart


def build_quickstart():
    base = os.path.join("/".join(kart_quickstart.__file__.split("/")[:-1]))
    for i in os.listdir(base):
        if i[:2] != "__":
            if os.path.isdir(os.path.join(base, i)):
                shutil.copytree(os.path.join(base, i), i)
            else:
                shutil.copyfile(os.path.join(base, i), i)
    os.makedirs("collections/posts", exist_ok=True)
    os.makedirs("collections/tags", exist_ok=True)
    os.makedirs("data", exist_ok=True)
    os.makedirs("pages", exist_ok=True)


if __name__ == "__main__":
    if sys.argv[1] == "init":
        build_quickstart()
