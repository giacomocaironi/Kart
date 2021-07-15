import json
import subprocess
from pathlib import Path

import requests
from kart import renderers


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
        command = f"npx webpack-dev-server --mode development --port {self.port}"
        self.p = subprocess.Popen(command.split(" "), stdout=subprocess.PIPE)

    def serve(self, http_handler, page, map, site):
        new_location = f"http://localhost:{self.port}" + http_handler.path
        try:
            raw = requests.get(new_location)
            http_handler.send_response(200)
            if "Content-Type" in raw.headers.keys():
                http_handler.send_header("Content-type", raw.headers["Content-type"])
            http_handler.end_headers()
            http_handler.wfile.write(raw.content)
        except Exception:
            http_handler.send_response(404)
            http_handler.end_headers()

    def stop_serving(self):
        self.p.stdout.close()
