from kart import Kart
from kart import miners, mappers, renderers, modifiers

from bs4 import BeautifulSoup
import json
import os
from subprocess import Popen, PIPE
import requests

kart = Kart()


class lunr_renderer(renderers.Renderer):
    name = "lunr_renderer"

    def render_single(self, page, map, site):
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
            if page["renderer"] != "default_site_renderer":
                continue
            index["docs"].append(
                {
                    "location": page["url"][1:],
                    "text": (
                        "".join(
                            BeautifulSoup(
                                page["data"]["content"].html, features="lxml"
                            ).findAll(text=True)
                        ).replace("\n", " ")
                    ),
                    "title": page["data"]["title"],
                }
            )
        return json.dumps(index)

    def render(self, map, site, build_location="_site"):
        for page in map.values():
            if page["renderer"] != self.name:
                continue
            rendered_file = self.render_single(page, map, site)
            if rendered_file:
                os.makedirs(os.path.join(build_location, "search"), exist_ok=True)
                with open(build_location + page["url"], "w") as f:
                    f.write(rendered_file)

    def serve(self, http_handler, page, map, site):
        data = bytes(self.render_single(page, map, site), "utf-8")
        http_handler.send_response(200)
        http_handler.send_header("Content-type", "application/json")
        http_handler.end_headers()
        http_handler.wfile.write(data)


class WebpackRenderer(renderers.Renderer):
    def __init__(self, name="webpack_renderer"):
        self.name = name
        self.port = 15000

    def render(self, map, site, build_location="_site"):
        os.system("npx webpack --mode development")

    def start_serving(self):
        self.p = Popen(
            f"npx webpack-dev-server --mode development --port {self.port}".split(" "),
            stdout=PIPE,
        )

    def serve(self, http_handler, page, map, site):
        new_location = f"http://localhost:{self.port}" + http_handler.path
        try:
            data = requests.get(new_location).content
            http_handler.send_response(200)
            http_handler.end_headers()
            http_handler.wfile.write(data)
        except:
            http_handler.send_response(404)
            http_handler.end_headers()

    def stop_serving(self):
        self.p.stdout.close()


kart.miners = [
    miners.DefaultCollectionMiner("documentation"),
    miners.DefaultCollectionMiner("examples"),
    miners.DefaultCollectionMiner("getting_started"),
    miners.DefaultCollectionMiner("step_by_step"),
    miners.DefaultCollectionMiner("versions"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]

kart.content_modifiers = [
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
    mappers.ManualMapper(
        {
            "lunr_data": {
                "url": "/search/search_index.json",
                "data": {},
                "template": "",
                "renderer": "lunr_renderer",
            },
            "sitemap": {
                "url": "/sitemap.xml",
                "data": {},
                "template": "",
                "renderer": "default_sitemap_renderer",
            },
            "static": {
                "url": "/static/*",
                "data": {},
                "template": "",
                "renderer": "webpack_renderer",
            },
            "root": {
                "url": "/*",
                "data": {},
                "template": "",
                "renderer": "default_root_dir_renderer",
            },
        }
    ),
]

kart.map_modifiers = []

kart.renderers = [
    renderers.DefaultSiteRenderer(),
    renderers.DefaultSitemapRenderer(),
    WebpackRenderer(),
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
