from kart import Kart
from kart import miners, mappers, renderers, modifiers

from bs4 import BeautifulSoup
import json
import os

kart = Kart()


class lunr_renderer:
    def render(self, map, site, build_location):
        index = {
            "config": {
                "lang": ["en"],
                "min_search_length": 3,
                "prebuild_index": False,
                "separator": "[\\s\\-]+",
            },
            "docs": [],
        }
        for page in map.values():
            index["docs"].append(
                {
                    "location": page["url"][1:],
                    "text": (
                        "".join(
                            BeautifulSoup(
                                page["data"]["content"], features="lxml"
                            ).findAll(text=True)
                        ).replace("\n", " ")
                    ),
                    "title": page["data"]["title"],
                }
            )
        os.makedirs(os.path.join(build_location, "search"), exist_ok=True)
        filepath = os.path.join(build_location, "search", "search_index.json")
        with open(filepath, "w") as f:
            json.dump(index, f)


kart.miners = [
    miners.DefaultCollectionMiner("documentation"),
    miners.DefaultCollectionMiner("examples"),
    miners.DefaultCollectionMiner("getting_started"),
    miners.DefaultCollectionMiner("step_by_step"),
    miners.DefaultCollectionMiner("versions"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]

kart.modifiers = [
    modifiers.CollectionSorter("versions", "title", True),
    modifiers.CollectionSorter("getting_started", "index"),
    modifiers.TocModifier("getting_started"),
    modifiers.TocModifier("pages"),
]

kart.mappers = [
    mappers.DefaultPageMapper(template="default.html"),
    mappers.DefaultCollectionMapper(
        collection_name="documentation", template="default.html"
    ),
    mappers.DefaultCollectionMapper(
        collection_name="examples", template="default.html", base_url="/tutorials"
    ),
    mappers.DefaultCollectionMapper(
        collection_name="getting_started",
        template="default.html",
        base_url="/tutorials",
    ),
    mappers.DefaultCollectionMapper(
        collection_name="step_by_step", template="default.html", base_url="/tutorials"
    ),
]

kart.renderers = [
    renderers.DefaultSiteRenderer(),
    renderers.DefaultSitemapRenderer(),
    renderers.DefaultStaticFilesRenderer(),
    renderers.DefaultRootDirRenderer(),
    lunr_renderer(),
]

kart.config["name"] = "Kart"
kart.config["icon"] = "/favicon-32x32.png"
kart.config["theme_repo_type"] = "github"
kart.config["theme_repo_url"] = "https://github.com/giacomocaironi/Kart"
kart.config["theme_repo_name"] = "giacomocaironi/Kart"
kart.config["base_url"] = "https://giacomocaironi.github.io/Kart"

kart.run()
