from kart.utils import paginate


class Mapper:
    def map(self, site):
        raise NotImplementedError


class RuleMapper(Mapper):
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function
        self.urls = {}

    def map(self, site):
        for rule in self.rules:
            self.urls.update(rule(site))
        return self.urls


class ManualMapper(Mapper):
    def __init__(self, pages={}):
        self.pages = pages

    def map(self, site):
        return self.pages


class DefaultCollectionMapper(Mapper):
    def __init__(self, collection_name, template="item.html", base_url=""):
        self.urls = {}
        self.template = template
        self.base_url = base_url
        self.collection_name = collection_name

    def map(self, site):
        urls = {}
        collection = site[self.collection_name]
        for object in collection.values():
            slug = f"{self.collection_name}.{object['slug']}"
            url = self.base_url + f"/{self.collection_name}/{object['slug']}/"
            if "template" in object:
                template = object["template"]
            else:
                template = self.template
            page = {
                "url": url,
                "data": object,
                "template": template,
                "renderer": "default_site_renderer",
            }
            urls[slug] = page
        return urls


class DefaultPageMapper(Mapper):
    def __init__(self, template="page.html"):
        self.urls = {}
        self.template = template

    def map(self, site):
        for slug in site["pages"]:
            page = site["pages"][slug]
            if "url" in page:
                url = page["url"]
            elif slug == "index":
                url = "/"
            else:
                url = f"/{slug}/"
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
            self.urls[slug] = page
        return self.urls


class DefaultIndexMapper(Mapper):
    def __init__(self, collection_name, template="index.html", base_url=""):
        self.urls = {}
        self.template = template
        self.base_url = base_url
        self.collection_name = collection_name

    def map(self, site):
        items = list(site[self.collection_name].values())
        filtered_items = items[site["config"]["pagination"]["skip"] :]
        paginated_map = paginate(
            objects=filtered_items,
            per_page=site["config"]["pagination"]["per_page"],
            template=self.template,
            base_url=self.base_url + "/index/page",
            slug=f"{self.collection_name}_index",
            additional_data={},
        )
        paginated_map[f"{self.collection_name}_index.1"]["url"] = self.base_url + "/"
        if f"{self.collection_name}_index.2" in paginated_map.keys():
            paginated_map[f"{self.collection_name}_index.2"]["data"]["paginator"][
                "previous_page_url"
            ] = (self.base_url + "/")
        return paginated_map


class DefaultTaxonomyMapper(Mapper):
    def __init__(
        self, collection_name, taxonomy_name, template="tag.html", base_url=""
    ):
        self.urls = {}
        self.template = template
        self.base_url = base_url
        self.collection_name = collection_name
        self.taxonomy_name = taxonomy_name

    def map(self, site):
        urls = {}
        for taxonomy in site[self.taxonomy_name].values():
            items = site[self.collection_name].values()
            filtered_items = []
            for item in items:
                if isinstance(item[self.taxonomy_name], str):
                    if item[self.taxonomy_name] == taxonomy["slug"]:
                        filtered_items.append(item)
                elif isinstance(item[self.taxonomy_name], list):
                    if taxonomy["slug"] in item[self.taxonomy_name]:
                        filtered_items.append(item)
            urls.update(
                paginate(
                    objects=filtered_items,
                    per_page=site["config"]["pagination"]["per_page"],
                    template=self.template,
                    base_url=self.base_url
                    + f"/{self.taxonomy_name}/{taxonomy['slug']}",
                    slug=f"{self.taxonomy_name}.{taxonomy['slug']}",
                    additional_data=taxonomy,
                )
            )
        return urls


class DefaultFeedMapper(Mapper):
    def __init__(self, collections=[]):
        self.urls = {}
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
