from kart import Kart
from kart import miners, mappers, renderers, modifiers

kart = Kart()

kart.miners = [
    miners.DefaultCollectionMiner("documentation"),
    miners.DefaultCollectionMiner("examples"),
    miners.DefaultCollectionMiner("getting_started"),
    miners.DefaultCollectionMiner("step_by_step"),
    miners.DefaultCollectionMiner("versions"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]

kart.modifiers = [modifiers.CollectionSorter("versions", "title", True)]

kart.mappers = [
    mappers.DefaultPageMapper(template="default.html"),
    mappers.DefaultCollectionMapper(
        collection_name="documentation", template="default.html"
    ),
    mappers.DefaultCollectionMapper(
        collection_name="examples", template="default.html", base_url="/tutorials"
    ),
    mappers.DefaultCollectionMapper(
        collection_name="getting_started",
        template="default.html",
        base_url="/tutorials",
    ),
    mappers.DefaultCollectionMapper(
        collection_name="step_by_step", template="default.html", base_url="/tutorials"
    ),
]

kart.renderers = [
    renderers.DefaultSiteRenderer(),
    renderers.DefaultStaticSiteRenderer(),
    renderers.DefaultSitemapRenderer(),
]

kart.config["name"] = "Kart"
kart.config["icon"] = "/favicon-32x32.png"
kart.config["theme_repo_type"] = "github"
kart.config["theme_repo_url"] = "https://github.com/giacomocaironi/Kart"
kart.config["theme_repo_name"] = "giacomocaironi/Kart"
kart.config["base_url"] = "https://giacomocaironi.github.io/Kart"

kart.run()
