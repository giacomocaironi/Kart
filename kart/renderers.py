from jinja2 import Environment, FileSystemLoader, Template
from feedgen.feed import FeedGenerator
import os
from datetime import timezone, time, datetime
import xml.etree.ElementTree as xml
import shutil
from http.server import SimpleHTTPRequestHandler
from multiprocessing import Process


class Renderer:
    def render(self, map, site, build_location="_site"):
        pass

    def start_serving(self):
        pass

    def serve(self, http_handler, page, map, site):
        pass

    def stop_serving(self):
        pass


class DefaultSiteRenderer(Renderer):
    def __init__(self, name="default_site_renderer", template_folder="templates"):
        self.name = name
        self.template_folder = template_folder
        self.env = Environment(loader=FileSystemLoader(self.template_folder))

    def date_to_string(self, date):
        return date.strftime("%b %d, %Y")

    def render_single(self, page, map, site):
        if self.name != page["renderer"]:
            return
        template = ""
        if "template" in page["data"].keys():
            template = page["data"]["template"]
        if not template:
            template = page["template"]
        jinja_template = self.env.get_template(template)
        page["data"]["url"] = page["url"]

        jinja_template.globals.update(url=map.url, date_to_string=self.date_to_string)
        if "content" in page["data"].keys():
            page["data"]["content"].data = Template(
                page["data"]["content"].data
            ).render(site=site, url=map.url, date_to_string=self.date_to_string)

        return jinja_template.render(page=page["data"], site=site)

    def _render(self, partial_map, map, site, build_location):
        for page in partial_map.values():
            if page["renderer"] != self.name:
                continue
            rendered_file = self.render_single(page, map, site)
            if rendered_file:
                os.makedirs(build_location + page["url"], exist_ok=True)
                with open(build_location + page["url"] + "index.html", "w") as f:
                    f.write(rendered_file)

    def render(self, map, site, build_location="_site"):
        map1 = dict(list(map.items())[len(map) // 2 :])
        map2 = dict(list(map.items())[: len(map) // 2])
        p1 = Process(target=self._render, args=(map1, map, site, build_location))
        p2 = Process(target=self._render, args=(map2, map, site, build_location))
        p1.start()
        p2.start()
        p1.join()
        p2.join()

    def serve(self, http_handler, page, map, site):
        http_handler.send_response(200)
        http_handler.send_header("Content-type", "text/html")
        http_handler.end_headers()
        http_handler.wfile.write(bytes(self.render_single(page, map, site), "utf-8"))


class DefaultFeedRenderer(Renderer):
    def __init__(self, name="default_feed_renderer"):
        self.name = name

    def render_single(self, page, map, site):
        base_url = site["config"]["base_url"]
        fg = FeedGenerator()
        fg.title(site["config"]["name"])
        if not base_url:
            fg.id("base_url/")
        else:
            fg.id(base_url)
        fg.link({"href": base_url})
        fg.link({"href": base_url + "/atom.xml", "rel": "self"})
        feed_entries = []
        for collection in page["data"]["collections"]:
            for object in site[collection]:
                feed_entries.append([collection, object])
        feed_entries.sort(key=lambda x: x[1]["date"])
        for collection, entry in feed_entries:
            fe = fg.add_entry()
            if "title" in entry.keys():
                fe.title(entry["title"])
            elif "name" in entry.keys():
                fe.title(entry["name"])
            if "description" in entry.keys():
                fe.description(entry["description"])
            fe.updated(datetime.combine(entry["date"], time(12), tzinfo=timezone.utc))
            fe.id(map.url(collection, entry["slug"]))
            fe.link({"href": map.url(collection, entry["slug"])})
        return fg.atom_str().decode()

    def render(self, map, site, build_location="_site"):
        for page in map.values():
            if page["renderer"] != self.name:
                continue
            with open(build_location + page["url"], "w") as f:
                f.write(self.render_single(page, map, site))

    def serve(self, http_handler, page, map, site):
        http_handler.send_response(200)
        http_handler.send_header("Content-type", "application/xml")
        http_handler.end_headers()
        http_handler.wfile.write(bytes(self.render_single(page, map, site), "utf-8"))


class DefaultSitemapRenderer(Renderer):
    def __init__(self, name="default_sitemap_renderer"):
        self.name = name

    def render_single(self, page, map, site):
        base_url = site["config"]["base_url"]
        root = xml.Element("urlset")
        root.set("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9")
        for x in [
            x["url"] for x in map.values() if x["renderer"] == "default_site_renderer"
        ]:
            url = xml.SubElement(root, "url")
            loc = xml.SubElement(url, "loc")
            loc.text = base_url + x
        return '<?xml version="1.0" encoding="UTF-8"?>' + xml.tostring(root).decode()

    def render(self, map, site, build_location="_site"):
        for page in map.values():
            if page["renderer"] != self.name:
                continue
            with open(build_location + page["url"], "w") as f:
                f.write(self.render_single(page, map, site))

    def serve(self, http_handler, page, map, site):
        http_handler.send_response(200)
        http_handler.send_header("Content-type", "application/xml")
        http_handler.end_headers()
        http_handler.wfile.write(bytes(self.render_single(page, map, site), "utf-8"))


class DefaultStaticFilesRenderer(Renderer):
    def __init__(self, name="default_static_files_renderer"):
        self.name = name

    def render(self, map, site, build_location="_site"):
        shutil.copytree("static", os.path.join(build_location, "static"))

    def serve(self, http_handler, page, map, site):
        return SimpleHTTPRequestHandler.do_GET(http_handler)


class DefaultRootDirRenderer(Renderer):
    def __init__(self, name="default_root_dir_renderer"):
        self.name = name

    def render(self, map, site, build_location="_site"):
        for item in os.listdir("root"):
            s = os.path.join("root", item)
            d = os.path.join(build_location, item)
            if os.path.isdir(s):
                shutil.copytree(s, d)
            else:
                shutil.copy2(s, d)

    def serve(self, http_handler, page, map, site):
        http_handler.path = "/root" + http_handler.path
        return SimpleHTTPRequestHandler.do_GET(http_handler)
