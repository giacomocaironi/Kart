import json
import re
from pathlib import Path

from bs4 import BeautifulSoup
from kart import renderers


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
        content = "".join(str(x) for x in soup.find_all(class_="content")[0].contents)

        sections = [x.strip() for x in re.split("<h[0-9].*</h[0-9]>", content)]
        ids = [""] + re.findall('<h[0-9].*id="(.*)".*>.*</h[0-9]>', content)
        names = [""] + re.findall("<h[0-9].*>(.*)</h[0-9]>", content)

        title = soup.title.text
        location = str(file.parent.relative_to(root_dir))
        if location == ".":
            location = ""
        location += "/" if location else ""

        index["docs"].append({"location": location, "text": content, "title": title})

        for id, name, section in zip(ids, names, sections):

            if not section:
                continue

            index["docs"].append(
                {
                    "location": location + "#" + id,
                    "text": section,
                    "title": name,
                }
            )

    dest = Path(kwargs["config"]["site_dir"]) / Path("search", "search_index.json")
    dest.parent.mkdir(parents=True, exist_ok=True)

    json.dump(index, dest.open("w"))
