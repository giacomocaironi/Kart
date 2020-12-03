import json
import os
from glob import glob
from subprocess import PIPE, Popen

import requests
from utils import markdown

from kart import renderers


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
        for slug, page in map.items():
            if page["renderer"] == "default_site_renderer":
                if slug == "changelog":
                    text = ""
                    for x in site["versions"].values():
                        text += markdown(x["content"]) + "\n"
                else:
                    text = markdown(page["data"]["content"])
                index["docs"].append(
                    {
                        "location": page["url"][1:],
                        "text": text,
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
            raw = requests.get(new_location)
            data = raw.content
            http_handler.send_response(200)
            if "Content-Type" in raw.headers.keys():
                http_handler.send_header("Content-type", raw.headers["Content-type"])
            http_handler.end_headers()
            http_handler.wfile.write(data)
        except Exception:
            http_handler.send_response(404)
            http_handler.end_headers()

    def stop_serving(self):
        self.p.stdout.close()
