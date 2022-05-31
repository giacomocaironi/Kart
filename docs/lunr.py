from pathlib import Path
from kart import renderers
from bs4 import BeautifulSoup
import json


def build_search_index(*args, **kwargs):

    config = {
        "indexing": "full",
        "lang": ["en"],
        "min_search_length": 3,
        "prebuild_index": False,
        "separator": "[\\s\\-]+",
    }
    index = {"config": config, "docs": []}

    root_dir = Path(kwargs["config"]["site_dir"]).parent.parent / "public"

    for file in root_dir.glob("**/*.html"):

        soup = BeautifulSoup(file.open().read(), "html.parser")
        content = soup.find_all(class_="content")[0]

        title = soup.title.text
        location = str(file.parent.relative_to(root_dir))
        if location == ".":
            location = ""
        id = ""

        index["docs"].append(
            {
                "location": location + ('/' if location else '')  + ("#" if id else '') + id ,
                "text": str(content),
                "title": title,
            }
        )

    dest = Path(kwargs["config"]["site_dir"]) / Path("search/search_index.json")

    json.dump(index, dest.open("w"))
