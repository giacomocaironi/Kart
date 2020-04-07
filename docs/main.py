from kart import Kart
from kart import miners, mappers


# def documentation_index(site):
#     projects = site["projects"]
#     data = {"title": "Projects", "projects": projects}
#     return {
#         "projects_index": {
#             "url": "/projects/",
#             "data": data,
#             "default_template": "projects_index.html",
#             "renderer": "main_renderer",
#         }
#     }
#

kart = Kart()

kart.miners = [
    miners.DefaultCollectionMiner("documentation"),
    miners.DefaultCollectionMiner("examples"),
    miners.DefaultCollectionMiner("getting_started"),
    miners.DefaultCollectionMiner("step_by_step"),
    miners.DefaultCollectionMiner("news"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]


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
    mappers.DefaultCollectionMapper(collection_name="news", template="versions.html"),
    mappers.ManualMapper([]),
]

kart.config["name"] = "Kart"
kart.config["base_url"] = "https://giacomocaironi.github.io/Kart"

kart.run()
