from kart import Kart
from kart import miners, mappers, renderers, modifiers

kart = Kart()

kart.miners = [
    miners.DefaultPostMiner("posts"),
    miners.DefaultCollectionMiner("tags"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]

kart.modifiers = [modifiers.TagModifier(), modifiers.CollectionSorter("posts", "date")]

kart.mappers = [mappers.DefaultBlogMapper(), mappers.DefaultPageMapper()]

kart.renderers = [
    renderers.DefaultSiteRenderer(),
    renderers.DefaultFeedRenderer(collections=["posts"]),
    renderers.DefaultSitemapRenderer(),
]

kart.config["name"] = "My blog"
kart.config["base_url"] = ""
kart.config["pagination"] = {"per_page": 5}

kart.run()
