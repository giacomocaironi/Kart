from abc import ABC, abstractmethod

from slugify import slugify

from kart.utils import KartDict, KartMap, paginate


class Mapper(ABC):
    """Base mapper class"""

    @abstractmethod
    def map(self, config: dict, site: KartDict) -> KartMap:
        """Takes the site as inputs and outputs a site map"""


class RuleMapper(Mapper):
    """Mapper that uses user defined functions to build the map"""

    def __init__(self, rules: list = []):
        """Initializes the mapper with a list of functions"""
        self.rules = rules  # a rule is a function

    def map(self, config: dict, site: KartDict) -> KartMap:
        urls = {}
        for rule in self.rules:
            urls.update(rule(site))
        return urls


class ManualMapper(Mapper):
    """Mapper that adds user defined pages to the map"""

    def __init__(self, pages: dict = {}):
        """Initializes the mapper with a list of pages"""
        self.pages = pages

    def map(self, config: dict, site: KartDict) -> KartMap:
        return self.pages


class DefaultCollectionMapper(Mapper):
    """Mapper intended to be used with DefaultCollectionMiner"""

    def __init__(
        self,
        collection: str,
        template: str = "item.html",
        base_url: str = "",
        renderer: str = "default_site_renderer",
    ):
        self.template = template
        self.base_url = base_url
        self.collection = collection
        self.renderer = renderer

    def map(self, config: dict, site: KartDict) -> KartMap:
        urls = {}
        collection = site[self.collection]
        for object in collection:
            slug = f"{self.collection}.{object['slug']}"
            url = f"/{slugify(self.collection)}/{slugify(object['slug'])}/"
            if "template" in object:
                template = object["template"]
            else:
                template = self.template
            page = {
                "url": self.base_url + url,
                "data": object,
                "template": template,
                "renderer": self.renderer,
            }
            urls[slug] = page
        return urls


class DefaultPageMapper(Mapper):
    """Mapper intended to be used with DefaultPageMiner"""

    def __init__(
        self, template: str = "page.html", renderer: str = "default_site_renderer"
    ):
        self.template = template
        self.renderer = renderer

    def map(self, config: dict, site: KartDict) -> KartMap:
        urls = {}
        for page in site["pages"]:
            slug = page["slug"]
            if "url" in page:
                url = page["url"]
            elif slug == "index":
                url = "/"
            else:
                url = f"/{slugify(slug)}/"
            if "template" in page:
                template = page["template"]
            else:
                template = self.template
            page = {
                "url": url,
                "data": page,
                "template": template,
                "renderer": self.renderer,
            }
            urls[slug] = page
        return urls


class DefaultIndexMapper(Mapper):
    """Mapper that creates the index pages of a collection"""

    def __init__(
        self,
        collection: str,
        template: str = "index.html",
        base_url: str = "",
        renderer: str = "default_site_renderer",
    ):
        self.template = template
        self.base_url = base_url
        self.collection = collection
        self.renderer = renderer

    def map(self, config: dict, site: KartDict) -> KartMap:
        items = list(site[self.collection])
        filtered_items = items[config["pagination"]["skip"] :]
        paginated_map = paginate(
            objects=filtered_items,
            per_page=config["pagination"]["per_page"],
            template=self.template,
            base_url=self.base_url + "/index/page/",
            slug=f"{self.collection}_index",
            renderer=self.renderer,
            additional_data={},
        )
        paginated_map[f"{self.collection}_index.1"]["url"] = self.base_url + "/"
        return paginated_map


class DefaultTaxonomyMapper(Mapper):
    """Mapper that creates the index pages of a taxonomy of a collection"""

    def __init__(
        self,
        collection: str,
        taxonomy: str,
        template: str = "tag.html",
        base_url: str = "",
        renderer: str = "default_site_renderer",
    ):
        self.template = template
        self.base_url = base_url
        self.collection = collection
        self.taxonomy = taxonomy
        self.renderer = renderer

    def map(self, config: dict, site: KartDict) -> KartMap:
        urls = {}
        for taxonomy in site[self.taxonomy]:
            slug = taxonomy["slug"]
            items = site[self.collection]
            filtered_items = []
            for item in items:
                if self.taxonomy not in item:
                    continue
                if isinstance(item[self.taxonomy], str):
                    if item[self.taxonomy] == slug:
                        filtered_items.append(item)
                elif isinstance(item[self.taxonomy], list):
                    if slug in item[self.taxonomy]:
                        filtered_items.append(item)
            urls.update(
                paginate(
                    objects=filtered_items,
                    per_page=config["pagination"]["per_page"],
                    template=self.template,
                    base_url=self.base_url + f"/{self.taxonomy}/{slug}/",
                    slug=f"{self.taxonomy}.{slug}",
                    renderer=self.renderer,
                    additional_data=taxonomy,
                )
            )
        return urls


class DefaultFeedMapper(Mapper):
    """Mapper that adds an entry for DefaultFeedMapper"""

    def __init__(self, collections: list = [], renderer: str = "default_feed_renderer"):
        self.collections = collections
        self.renderer = renderer

    def map(self, config: dict, site: KartDict) -> KartMap:
        return {
            "feed": {
                "url": "/atom.xml",
                "data": {"collections": self.collections},
                "template": "",
                "renderer": self.renderer,
            }
        }


# class DefaultSitemapMapper(Mapper):
#     """Mapper that adds an entry for DefaultFeedMapper"""
#
#     def map(self, site: KartDict) -> KartMap:
#         return {
#             "feed": {
#                 "url": "/atom.xml",
#                 "data": {"collections": self.collections},
#                 "template": "",
#                 "renderer": "default_feed_renderer",
#             }
#         }
#
#
# class DefaultStaticFilesMapper(Mapper):
#     """Mapper that adds an entry for DefaultFeedMapper"""
#
#     def map(self, site: KartDict) -> KartMap:
#         return {
#             "feed": {
#                 "url": "/atom.xml",
#                 "data": {"collections": self.collections},
#                 "template": "",
#                 "renderer": "default_feed_renderer",
#             }
#         }
#
#
# class DefaultRootDirMapper(Mapper):
#     """Mapper that adds an entry for DefaultFeedMapper"""
#
#     def __init__(self, collections: list = []):
#         self.collections = collections
#
#     def map(self, site: KartDict) -> KartMap:
#         return {
#             "feed": {
#                 "url": "/atom.xml",
#                 "data": {"collections": self.collections},
#                 "template": "",
#                 "renderer": "default_feed_renderer",
#             }
#         }
