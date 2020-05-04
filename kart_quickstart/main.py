from kart import Kart
from kart import miners, mappers, renderers

kart = Kart()

kart.miners = [
    miners.DefaultPostMiner("posts"),
    miners.DefaultCollectionMiner("tags"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]

kart.mappers = [
    mappers.DefaultBlogMapper(),
    mappers.DefaultPageMapper(),
    mappers.DefaultFeedMapper(),
]

kart.renderers = [
    renderers.DefaultSiteRenderer(),
    renderers.DefaultFeedRenderer(collections=["posts"]),
]

kart.config["name"] = "My blog"
kart.config["base_url"] = ""
kart.config["pagination"] = {"per_page": 5}

kart.run()
