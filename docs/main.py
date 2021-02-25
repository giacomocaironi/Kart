from modifiers import GlobalMapModifier
from renderers import LunrRenderer, WebpackRenderer

from kart import Kart, mappers, miners, modifiers, renderers

kart = Kart()

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
