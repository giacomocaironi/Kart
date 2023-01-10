import pkg_resources

from kart import Kart, mappers, miners, renderers
from kart.ext import documentation
from kart.ext.markdown import markdown_to_toc
from kart.utils import date_to_string

kart = Kart(build_location="public")

kart.miners = [
    miners.DefaultDataMiner(),
    documentation.DefaultDocumentationMiner(),
]

kart.content_modifiers = []

kart.mappers = [
    documentation.DefaultDocumentationMapper(template="default.html"),
    mappers.DefaultSitemapMapper(),
    mappers.DefaultStaticFilesMapper(),
    mappers.DefaultRootDirMapper(),
]

kart.map_modifiers = []

kart.renderers = [
    renderers.DefaultSiteRenderer(
        filters={
            "html": documentation.markdown_to_html,
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
kart.config["repo_url"] = "https://gitlab.com/giacomocaironi/kart"
kart.config["repo_name"] = "giacomocaironi/kart"
kart.config["site_url"] = "https://kart.giacomocaironi.dev"
kart.config["code_highlighting"] = {"style": "material"}

kart.run()
