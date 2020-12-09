from kart import Kart, mappers, miners, modifiers, renderers

kart = Kart()

kart.miners = [
    miners.DefaultCollectionMiner("posts"),
    miners.DefaultCollectionMiner("tags"),
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
]

kart.content_modifiers = [modifiers.CollectionSorter("posts", "date", True)]

kart.mappers = [
    mappers.DefaultIndexMapper(
        collection_name="posts", template="blog_index.html", base_url="/blog"
    ),
    mappers.DefaultTaxonomyMapper(
        collection_name="posts",
        taxonomy_name="tags",
        template="tag.html",
        base_url="/blog",
    ),
    mappers.DefaultCollectionMapper(collection_name="posts", template="post.html"),
    mappers.DefaultPageMapper(),
    mappers.DefaultFeedMapper(collections=["posts"]),
    mappers.ManualMapper(
        {
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
    renderers.DefaultSiteRenderer(),
    renderers.DefaultFeedRenderer(),
    renderers.DefaultSitemapRenderer(),
    renderers.DefaultStaticFilesRenderer(),
    renderers.DefaultRootDirRenderer(),
]

kart.config["name"] = "My blog"
kart.config["base_url"] = ""
kart.config["pagination"] = {"per_page": 5}

kart.run()
