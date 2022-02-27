from abc import ABC, abstractmethod
from datetime import datetime, time
from distutils.dir_util import copy_tree
from http.server import SimpleHTTPRequestHandler
from multiprocessing import Pool
from pathlib import Path

from dateutil import tz
from jinja2 import Environment, FileSystemLoader

from kart.ext.markdown import markdown_to_html, markdown_to_toc
from kart.utils import KartDict, KartMap, date_to_string


class Renderer(ABC):
    """Base Renderer class"""

    @abstractmethod
    def render(self, config: dict, site: KartDict, map: KartMap, build_location: str):
        """Renders each page indented for this renderer"""

    def start_serving(self, config: dict):
        """Start the dev server, if necessary"""

    @abstractmethod
    def serve(
        self, http_handler, page: dict, config: dict, site: KartDict, map: KartMap
    ):
        """Serves the the requested page"""

    def stop_serving(self, config: dict):
        """Stops the dev server, if necessary"""


class DefaultFileRenderer(Renderer):
    """Base class for renderers that render file individually"""

    @abstractmethod
    def __init__(self, name: str):
        """Initializes renderer. Must set the ``name`` and ``content_type`` variables"""

    @abstractmethod
    def render_single(
        self, page: dict, config: dict, site: KartDict, map: KartMap
    ) -> str:
        """Renders a single file"""

    def render(self, config, site, map, build_location):
        for page in map:
            if page["renderer"] != self.name:
                continue
            rendered_file = self.render_single(page, config, site, map)
            path = Path(build_location) / Path(*Path(page["url"]).parts[1:])
            path.parent.mkdir(parents=True, exist_ok=True)
            with path.open("w") as f:
                f.write(rendered_file)

    def serve(
        self, http_handler, page: dict, config: dict, site: KartDict, map: KartMap
    ):
        http_handler.send_response(200)
        http_handler.send_header("Content-type", self.content_type)
        http_handler.end_headers()
        content = self.render_single(page, config, site, map)
        http_handler.wfile.write(bytes(content, "utf-8"))


class DefaultDirectoryRenderer(Renderer):
    """Base class for renderers that render directories"""

    @abstractmethod
    def __init__(self, name: str, directory: str):
        """Initializes renderer. Must set the ``name``, ``dir`` and ``base_url`` variables"""

    def render(self, config: dict, site: KartDict, map: KartMap, build_location: str):
        """Copies the entire directory to the target destination"""
        for page in map:
            if page["renderer"] != self.name:
                continue
            destination = Path(build_location) / Path(*Path(page["url"][:-1]).parts[1:])
            copy_tree(self.dir, str(destination))

    def serve(
        self, http_handler, page: dict, config: dict, site: KartDict, map: KartMap
    ):
        http_handler.path = self.base_url + http_handler.path
        return SimpleHTTPRequestHandler.do_GET(http_handler)


class DefaultSiteRenderer(DefaultFileRenderer):
    """Default renderer for rendering html files"""

    def __init__(
        self,
        name: str = "default_site_renderer",
        template_folder: str = "templates",
        filters: dict = {
            "html": markdown_to_html,
            "toc": markdown_to_toc,
            "date_to_string": date_to_string,
        },
        process_count: int = 1,
    ):
        self.name = name
        self.content_type = "text/html"
        self.template_folder = template_folder
        self.process_count = process_count
        self.env = Environment(loader=FileSystemLoader(self.template_folder))
        self.env.filters.update(filters)

    def render_single(
        self, page: dict, config: dict, site: KartDict, map: KartMap
    ) -> str:
        template = self.env.get_template(page["template"])
        page = {**page["data"], "url": page["url"]}
        return template.render(page=page, config=config, site=site, url=map.url)

    def _render_single(
        self, key: str, config: dict, site: KartDict, map: KartMap, build_location: str
    ):
        """Renderers a single file and saves it to the disk"""
        page = map[key]
        if page["renderer"] != self.name:
            return
        rendered_file = self.render_single(page, config, site, map)
        path = Path(build_location) / Path(*Path(page["url"]).parts[1:])
        path = path / "index.html"
        path.parent.mkdir(parents=True, exist_ok=True)
        with path.open("w") as f:
            f.write(rendered_file)

    def render(
        self, config: dict, site: KartDict, map: KartMap, build_location: str = "_site"
    ):
        """Renderers all the files with a multiprocessing Pool for faster build times"""
        if self.process_count == 1:
            for key in map.keys():
                self._render_single(key, config, site, map, build_location)
        else:
            with Pool(self.process_count) as p:
                data = ((key, config, site, map, build_location) for key in map.keys())
                p.starmap(self._render_single, data)


class DefaultFeedRenderer(DefaultFileRenderer):
    """Renders an atom feed file"""

    def __init__(self, name: str = "default_feed_renderer"):
        """Initializes renderer. Sets the ``name`` and ``content_type`` variables"""
        self.name = name
        self.content_type = "application/xml"

    def render_single(
        self, page: dict, config: dict, site: KartDict, map: KartMap
    ) -> str:
        """Creates the atom feeds"""
        feed_entries = []
        for collection in page["data"]["collections"]:
            for object in site[collection]:
                feed_entries.append([map.url(collection, object["slug"]), object])
        feed_entries.sort(key=lambda x: x[1]["date"], reverse=True)
        atom = '<feed xmlns="http://www.w3.org/2005/Atom">'
        atom += f'<id>"{map.url("/")}"</id>'
        atom += f"<title>{config['name']}</title>"
        timezone = config["timezone"]
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
    """Renders the sitemap of the site"""

    def __init__(self, name: str = "default_sitemap_renderer"):
        """Initializes renderer. Sets the ``name`` and ``content_type`` variables"""
        self.name = name
        self.content_type = "application/xml"

    def render_single(self, page: dict, config: dict, site: KartDict, map: KartMap):
        """Uses the site ``map`` variable to create the sitemap"""
        sitemap = '<?xml version="1.0" encoding="UTF-8"?>'
        sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        for x in map:
            if x["renderer"] != "default_site_renderer":
                continue
            sitemap += f"<url><loc>{map.url(x['url'])}</loc></url>"
        sitemap += "</urlset>"
        return sitemap


class DefaultStaticFilesRenderer(DefaultDirectoryRenderer):
    """Renders all files in the ``static`` directory"""

    def __init__(
        self, name: str = "default_static_files_renderer", directory: str = "static"
    ):
        """Initializes renderer. Sets the ``name``, ``dir`` and ``content_type`` variables"""
        self.name = name
        self.dir = directory
        self.base_url = ""


class DefaultRootDirRenderer(DefaultDirectoryRenderer):
    """Renders all files in the ``root`` directory"""

    def __init__(
        self, name: str = "default_root_dir_renderer", directory: str = "root"
    ):
        """Initializes renderer. Sets the ``name``, ``dir`` and ``content_type`` variables"""
        self.name = name
        self.dir = directory
        self.base_url = "/root"
