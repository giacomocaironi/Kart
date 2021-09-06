from abc import ABC, abstractmethod
from datetime import datetime, time
from distutils.dir_util import copy_tree
from http.server import SimpleHTTPRequestHandler
from multiprocessing import Pool
from pathlib import Path

from dateutil import tz
from jinja2 import Environment, FileSystemLoader

from kart.markdown import markdown_to_html, markdown_to_toc
from kart.utils import date_to_string


class Renderer(ABC):
    """"""

    @abstractmethod
    def render(self, map, site, build_location):
        """"""

    def start_serving(self):
        """"""

    @abstractmethod
    def serve(self, http_handler, page, map, site):
        """"""

    def stop_serving(self):
        """"""


class DefaultFileRenderer(Renderer):
    """"""

    @abstractmethod
    def render_single(self, map, site):
        """"""

    def render(self, map, site, build_location):
        for page in map:
            if page["renderer"] != self.name:
                continue
            rendered_file = self.render_single(page, map, site)
            path = Path(build_location) / Path(*Path(page["url"]).parts[1:])
            path.parent.mkdir(parents=True, exist_ok=True)
            with path.open("w") as f:
                f.write(rendered_file)

    def serve(self, http_handler, page, map, site):
        http_handler.send_response(200)
        http_handler.send_header("Content-type", self.content_type)
        http_handler.end_headers()
        http_handler.wfile.write(bytes(self.render_single(page, map, site), "utf-8"))


class DefaultDirectoryRenderer(Renderer):
    """"""

    @abstractmethod
    def __init__(self, name, directory):
        pass

    def render(self, map, site, build_location):
        for page in map:
            if page["renderer"] != self.name:
                continue
            destination = Path(build_location) / Path(*Path(page["url"][:-1]).parts[1:])
            copy_tree(self.dir, str(destination))

    def serve(self, http_handler, page, map, site):
        http_handler.path = self.base_url + http_handler.path
        return SimpleHTTPRequestHandler.do_GET(http_handler)


class DefaultSiteRenderer(DefaultFileRenderer):
    """"""

    def __init__(
        self,
        name="default_site_renderer",
        template_folder="templates",
        filters={
            "html": markdown_to_html,
            "toc": markdown_to_toc,
            "date_to_string": date_to_string,
        },
        process_count=1,
    ):
        self.name = name
        self.content_type = "text/html"
        self.template_folder = template_folder
        self.process_count = process_count
        self.env = Environment(loader=FileSystemLoader(self.template_folder))
        self.env.filters.update(filters)

    def render_single(self, page, map, site):
        template = self.env.get_template(page["template"])
        page = {**page["data"], "url": page["url"]}
        return template.render(page=page, site=site, url=map.url)

    def _render_single(self, key, map, site, build_location):
        page = map[key]
        if page["renderer"] != self.name:
            return
        rendered_file = self.render_single(page, map, site)
        path = Path(build_location) / Path(*Path(page["url"]).parts[1:])
        path = path / "index.html"
        path.parent.mkdir(parents=True, exist_ok=True)
        with path.open("w") as f:
            f.write(rendered_file)

    def render(self, map, site, build_location="_site"):
        if self.process_count == 1:
            for key in map.keys():
                self._render_single(key, map, site, build_location)
        else:
            with Pool(self.process_count) as p:
                data = ((key, map, site, build_location) for key in map)
                p.starmap(self._render_single, data)


class DefaultFeedRenderer(DefaultFileRenderer):
    """"""

    def __init__(self, name="default_feed_renderer"):
        self.name = name
        self.content_type = "application/xml"

    def render_single(self, page, map, site):
        feed_entries = []
        for collection in page["data"]["collections"]:
            for object in site[collection]:
                feed_entries.append([map.url(collection, object["slug"]), object])
        feed_entries.sort(key=lambda x: x[1]["date"], reverse=True)
        atom = '<feed xmlns="http://www.w3.org/2005/Atom">'
        atom += f'<id>"{map.url("/")}"</id>'
        atom += f"<title>{site['config']['name']}</title>"
        timezone = site["config"]["timezone"]
        updated_time = datetime.now().replace(tzinfo=tz.gettz(timezone))
        atom += f"<updated>{updated_time.isoformat()}</updated>"
        atom += f'<link href="{map.url("/")}"/>'
        atom += f'<link href="{map.url(page["url"])}" rel="self"/>'
        for url, entry in feed_entries:
            atom += "<entry>"
            atom += f"<id>{url}</id>"
            title = entry["title"] if "title" in entry.keys() else entry["name"]
            atom += f"<title>{title}</title>"
            entry_time = datetime.combine(entry["date"], time(12))
            entry_time.replace(tzinfo=tz.gettz(timezone))
            atom += f"<updated>{entry_time.isoformat()}</updated>"
            if "description" in entry.keys():
                atom += f'<summary>{entry["description"]}</summary>'
            atom += f'<link href="{url}" link="alternate"/>'
            atom += "</entry>"
        atom += "</feed>"
        return atom


class DefaultSitemapRenderer(DefaultFileRenderer):
    """"""

    def __init__(self, name="default_sitemap_renderer"):
        self.name = name
        self.content_type = "application/xml"

    def render_single(self, page, map, site):
        sitemap = '<?xml version="1.0" encoding="UTF-8"?>'
        sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        for x in map:
            if x["renderer"] != "default_site_renderer":
                continue
            sitemap += f"<url><loc>{map.url(x['url'])}</loc></url>"
        sitemap += "</urlset>"
        return sitemap


class DefaultStaticFilesRenderer(DefaultDirectoryRenderer):
    """"""

    def __init__(self, name="default_static_files_renderer", directory="static"):
        self.name = name
        self.dir = directory
        self.base_url = ""


class DefaultRootDirRenderer(DefaultDirectoryRenderer):
    """"""

    def __init__(self, name="default_root_dir_renderer", directory="root"):
        self.name = name
        self.dir = directory
        self.base_url = "/root"
