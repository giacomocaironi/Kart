from kart import Kart, mappers, miners, modifiers, renderers

kart = Kart()

kart.miners = [
    miners.DefaultCollectionMiner("posts"),
    miners.DefaultTaxonomyMiner("tags"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]

kart.content_modifiers = [modifiers.CollectionSorter("posts", "date", True)]

kart.mappers = [
    mappers.DefaultIndexMapper(collection="posts", template="blog_index.html"),
    mappers.DefaultTaxonomyMapper(
        collection="posts", taxonomy="tags", template="tag.html"
    ),
    mappers.DefaultCollectionMapper(collection="posts", template="post.html"),
    mappers.DefaultPageMapper(),
    mappers.DefaultFeedMapper(collections=["posts"]),
    mappers.DefaultSitemapMapper(),
    mappers.DefaultStaticFilesMapper(),
    mappers.DefaultRootDirMapper(),
    mappers.ManualMapper({}),
]

kart.map_modifiers = []

kart.renderers = [
    renderers.DefaultSiteRenderer(),
    renderers.DefaultFeedRenderer(),
    renderers.DefaultSitemapRenderer(),
    renderers.DefaultStaticFilesRenderer(),
    renderers.DefaultRootDirRenderer(),
]

kart.config["name"] = "{{cookiecutter.project_name}}"
kart.config["site_url"] = "{{cookiecutter.site_url}}"
kart.config["pagination"] = {"per_page": 5}
kart.config["timezone"] = "{{cookiecutter.timezone}}"
kart.config["code_highlighting"] = {"style": "material"}

kart.run()
