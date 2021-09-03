from abc import ABC, abstractmethod

from slugify import slugify

from kart.utils import paginate


class Mapper(ABC):
    @abstractmethod
    def map(self, site):
        pass


class RuleMapper(Mapper):
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function

    def map(self, site):
        urls = {}
        for rule in self.rules:
            urls.update(rule(site))
        return urls


class ManualMapper(Mapper):
    def __init__(self, pages={}):
        self.pages = pages

    def map(self, site):
        return self.pages


class DefaultCollectionMapper(Mapper):
    def __init__(self, collection, template="item.html", base_url=""):
        self.template = template
        self.base_url = base_url
        self.collection = collection

    def map(self, site):
        urls = {}
        collection = site[self.collection]
        for object in collection.values():
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
                "renderer": "default_site_renderer",
            }
            urls[slug] = page
        return urls


class DefaultPageMapper(Mapper):
    def __init__(self, template="page.html"):
        self.template = template

    def map(self, site):
        urls = {}
        for slug in site["pages"]:
            page = site["pages"][slug]
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
                "renderer": "default_site_renderer",
            }
            urls[slug] = page
        return urls


class DefaultIndexMapper(Mapper):
    def __init__(self, collection, template="index.html", base_url=""):
        self.template = template
        self.base_url = base_url
        self.collection = collection

    def map(self, site):
        items = list(site[self.collection].values())
        filtered_items = items[site["config"]["pagination"]["skip"] :]
        paginated_map = paginate(
            objects=filtered_items,
            per_page=site["config"]["pagination"]["per_page"],
            template=self.template,
            base_url=self.base_url + "/index/page/",
            slug=f"{self.collection}_index",
            additional_data={},
        )
        paginated_map[f"{self.collection}_index.1"]["url"] = self.base_url + "/"
        return paginated_map


class DefaultTaxonomyMapper(Mapper):
    def __init__(self, collection, taxonomy, template="tag.html", base_url=""):
        self.template = template
        self.base_url = base_url
        self.collection = collection
        self.taxonomy = taxonomy

    def map(self, site):
        urls = {}
        for taxonomy in site[self.taxonomy].values():
            slug = taxonomy["slug"]
            items = site[self.collection].values()
            filtered_items = []
            for item in items:
                if isinstance(item[self.taxonomy], str):
                    if item[self.taxonomy] == slug:
                        filtered_items.append(item)
                elif isinstance(item[self.taxonomy], list):
                    if slug in item[self.taxonomy]:
                        filtered_items.append(item)
            urls.update(
                paginate(
                    objects=filtered_items,
                    per_page=site["config"]["pagination"]["per_page"],
                    template=self.template,
                    base_url=self.base_url + f"/{self.taxonomy}/{slug}/",
                    slug=f"{self.taxonomy}.{slug}",
                    additional_data=taxonomy,
                )
            )
        return urls


class DefaultFeedMapper(Mapper):
    def __init__(self, collections=[]):
        self.collections = collections

    def map(self, site):
        return {
            "feed": {
                "url": "/atom.xml",
                "data": {"collections": self.collections},
                "template": "",
                "renderer": "default_feed_renderer",
            }
        }
