import json
import subprocess
from pathlib import Path

import requests
from utils import markdown_to_text

from kart import modifiers, renderers


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
                text = markdown_to_text(page["data"]["content"])
                index["docs"].append(
                    {
                        "location": page["url"][1:],
                        "text": text,
                        "title": page["data"]["title"],
                    }
                )
        return json.dumps(index)

    def render(self, map, site, build_location):
        for page in map.values():
            if page["renderer"] != self.name:
                continue
            rendered_file = self.render_single(page, map, site)
            if rendered_file:
                path = Path(build_location) / Path(page["url"]).relative_to(
                    "/"
                )  # TODO: should not use relative_to, must remove all trailing slashes from urls
                path.parent.mkdir(parents=True, exist_ok=True)
                with path.open("w") as f:
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

    def render(self, map, site, build_location):
        for page in map.values():
            if page["renderer"] != self.name:
                continue
            subprocess.run("npx webpack --mode production".split())
            manifest = Path(build_location).joinpath("static/manifest.json")
            with manifest.open() as json_file:
                data = json.load(json_file)
                files = Path(build_location).rglob("*.html")
                for file in files:
                    with file.open("r+") as f:
                        text = f.read()
                        for previous, next in data.items():
                            text = text.replace(previous, next)
                        f.seek(0)
                        f.write(text)
                        f.truncate()

    def start_serving(self):
        self.p = subprocess.Popen(
            f"npx webpack-dev-server --mode development --port {self.port}".split(" "),
            stdout=subprocess.PIPE,
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
                for x in site[data["link"]].values():
                    page = map[data["link"] + "." + x["slug"]]
                    title = page["data"]["title"]
                    url = page["url"]
                    global_map.append({"url": url, "title": title})
                    partial_toc.append({"url": url, "title": title, "index": i})
                    page["data"]["global_map_index"] = i
                    i += 1
                global_toc.append([data["name"]] + partial_toc)
        site["global_map"] = global_map
        site["global_map_size"] = len(global_map)
        site["global_toc"] = global_toc