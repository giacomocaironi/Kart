import pkg_resources
from kart import Kart, mappers, miners, modifiers, renderers
from kart.markdown import markdown_to_html
from kart.utils import date_to_string, parse

from modifiers import GlobalMapModifier
from utils import markdown_to_toc

kart = Kart(build_location="public")

kart.miners = [
    miners.DefaultCollectionMiner("api_reference"),
    miners.DefaultCollectionMiner("advanced"),
    miners.DefaultCollectionMiner("step_by_step"),
    miners.DefaultCollectionMiner("versions"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]

kart.content_modifiers = [
    modifiers.CollectionSorter("api_reference", "index"),
    modifiers.CollectionSorter("advanced", "index"),
    modifiers.CollectionSorter("step_by_step", "index"),
    modifiers.CollectionSorter("versions", "title", True),
]

kart.mappers = [
    mappers.DefaultPageMapper(template="default.html"),
    mappers.DefaultCollectionMapper(
        collection_name="api_reference", template="default.html"
    ),
    mappers.DefaultCollectionMapper(
        collection_name="advanced", template="default.html", base_url="/tutorials"
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

kart.map_modifiers = [GlobalMapModifier()]

kart.renderers = [
    renderers.DefaultSiteRenderer(
        filters={
            "markdown": markdown_to_html,
            "date_to_string": date_to_string,
            "toc": markdown_to_toc,
            "parse": parse,
        }
    ),
    renderers.DefaultSitemapRenderer(),
    renderers.DefaultStaticFilesRenderer(),
    renderers.DefaultRootDirRenderer(),
    # LunrRenderer(),
]

kart.config["name"] = "Kart"
kart.config["icon"] = "/favicon-32x32.png"
kart.config["version"] = pkg_resources.get_distribution(kart.config["name"]).version
kart.config["repo_url"] = "https://gitlab.com/giacomocaironi/Kart"
kart.config["repo_name"] = "giacomocaironi/Kart"
kart.config["base_url"] = "https://giacomocaironi.gitlab.io/Kart"

kart.run()
