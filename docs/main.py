import json
import os
from glob import glob
from subprocess import PIPE, Popen

import requests
from bs4 import BeautifulSoup

from kart import Kart, mappers, miners, modifiers, renderers
from kart.utils import markdown


class LunrRenderer(renderers.Renderer):
    name = "lunr_renderer"

    def render_single(self, page, map, site):
        config = {
            "lang": ["en"],
            "min_search_length": 3,
            "prebuild_index": False,
            "separator": "[\\s\\-]+",
        }
        index = {"config": config, "docs": []}
        for page in map.values():
            if page["renderer"] != "default_site_renderer":
                continue
            soup = BeautifulSoup(markdown(page["data"]["content"]), features="lxml")
            stripped_text = "".join(soup.findAll(text=True)).replace("\n", " ")
            index["docs"].append(
                {
                    "location": page["url"][1:],
                    "text": stripped_text,
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
    def __init__(self, port=15000, name="webpack_renderer"):
        self.name = name
        self.port = port

    def render(self, map, site, build_location="_site"):
        os.system("npx webpack --mode production")
        with open("_site/static/manifest.json") as json_file:
            data = json.load(json_file)
            files = [
                y for x in os.walk("_site") for y in glob(os.path.join(x[0], "*.html"))
            ]
            for file in files:
                with open(file, "r+") as f:
                    text = f.read()
                    for previous, next in data.items():
                        text = text.replace(previous, next)
                    f.seek(0)
                    f.write(text)
                    f.truncate()

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


class GlobalMapModifier(modifiers.MapModifier):
    def modify(self, map, site):
        global_map = []
        global_toc = []
        i = 0
        for data in site["data"]["navigation"]:
            if data["link"] in site["pages"].keys():
                page = map[data["link"]]
                title = page["data"]["title"]
                url = page["url"]
                global_map.append({"url": url, "title": title})
                global_toc.append({"url": url, "title": title, "index": i})
                page["data"]["global_map_index"] = i
                i += 1
            elif data["link"] in site.keys():
                partial_toc = []
                for x in site[data["link"]]:
                    page = map[data["link"] + "." + x["slug"]]
                    title = x["title"]
                    url = page["url"]
                    global_map.append({"url": url, "title": title})
                    partial_toc.append({"url": url, "title": title, "index": i})
                    page["data"]["global_map_index"] = i
                    i += 1
                global_toc.append([data["name"]] + partial_toc)
        site["global_map"] = global_map
        site["global_map_size"] = len(global_map)
        site["global_toc"] = global_toc


kart = Kart()

kart.miners = [
    miners.DefaultCollectionMiner("documentation"),
    miners.DefaultCollectionMiner("examples"),
    miners.DefaultCollectionMiner("step_by_step"),
    miners.DefaultCollectionMiner("versions"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]

kart.content_modifiers = [modifiers.CollectionSorter("versions", "title", True)]

kart.mappers = [
    mappers.DefaultPageMapper(template="default.html"),
    mappers.DefaultCollectionMapper(
        collection_name="documentation", template="default.html"
    ),
    mappers.DefaultCollectionMapper(
        collection_name="examples", template="default.html", base_url="/tutorials"
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

kart.map_modifiers = [GlobalMapModifier()]

kart.renderers = [
    renderers.DefaultSiteRenderer(),
    renderers.DefaultSitemapRenderer(),
    WebpackRenderer(),
    renderers.DefaultRootDirRenderer(),
    LunrRenderer(),
]

kart.config["name"] = "Kart"
kart.config["icon"] = "/favicon-32x32.png"
kart.config["theme_repo_type"] = "github"
kart.config["theme_repo_url"] = "https://github.com/giacomocaironi/Kart"
kart.config["theme_repo_name"] = "giacomocaironi/Kart"
kart.config["base_url"] = "https://giacomocaironi.github.io/Kart"

kart.run()
