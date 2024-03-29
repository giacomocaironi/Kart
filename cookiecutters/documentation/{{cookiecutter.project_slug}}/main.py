import pkg_resources

from kart import Kart, mappers, miners, renderers
from kart.ext.markdown import markdown_to_html, markdown_to_toc
from kart.utils import date_to_string

kart = Kart()

kart.miners = [
    miners.DefaultDocumentationMiner(),
]

kart.content_modifiers = []

kart.mappers = [
    mappers.DefaultDocumentationMapper(template="default.html"),
    mappers.DefaultSitemapMapper(),
    mappers.DefaultStaticFilesMapper(),
    mappers.DefaultRootDirMapper(),
    mappers.ManualMapper({}),
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

kart.config["name"] = "{{cookiecutter.project_name}}"
kart.config["version"] = pkg_resources.get_distribution(kart.config["name"]).version
kart.config["repo_url"] = "{{cookiecutter.repository_url}}"
kart.config["repo_name"] = "{{cookiecutter.repository_name}}"
kart.config["site_url"] = "{{cookiecutter.site_url}}"

kart.run()
