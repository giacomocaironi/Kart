import pkg_resources
from kart import Kart, mappers, miners, renderers
from kart.markdown import markdown_to_toc
from kart.utils import date_to_string

from custom import DocumentationMapper, DocumentationMiner
from markdown import markdown_to_html

kart = Kart(build_location="public")

kart.miners = [
    miners.DefaultDataMiner(),
    DocumentationMiner(),
]

kart.content_modifiers = []

kart.mappers = [
    DocumentationMapper(template="default.html"),
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
                "renderer": "default_static_files_renderer",
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
    renderers.DefaultSiteRenderer(
        filters={
            "html": markdown_to_html,
            "toc": markdown_to_toc,
            "date_to_string": date_to_string,
        }
    ),
    renderers.DefaultSitemapRenderer(),
    renderers.DefaultStaticFilesRenderer(),
    renderers.DefaultRootDirRenderer(),
]

kart.config["name"] = "Kart"
kart.config["icon"] = "/favicon-32x32.png"
kart.config["version"] = pkg_resources.get_distribution(kart.config["name"]).version
kart.config["repo_url"] = "https://gitlab.com/giacomocaironi/Kart"
kart.config["repo_name"] = "giacomocaironi/Kart"
kart.config["base_url"] = "https://giacomocaironi.gitlab.io/Kart"

kart.run()
