from kart.utils import paginate


class Mapper:
    def map(self, site):
        pass


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
    def __init__(self, collection_name, base_url="", template="collection_item.html"):
        self.urls = {}
        self.template = template
        self.base_url = base_url
        self.collection_name = collection_name

    def map(self, site):
        urls = {}
        collection = site[self.collection_name]
        for object in collection:
            urls.update(
                {
                    f"{self.collection_name}.{object['slug']}": {
                        "url": self.base_url
                        + f"/{self.collection_name}/{object['slug']}/",
                        "data": object,
                        "template": self.template,
                        "renderer": "default_site_renderer",
                    }
                }
            )
        return urls


class DefaultPageMapper(Mapper):
    def __init__(self, template="page.html"):
        self.urls = {}
        self.template = template

    def map(self, site):
        for slug in site["pages"]:
            page = site["pages"][slug]
            try:
                url = page["url"]
            except Exception:
                url = f"/{slug}/"
                if slug == "index":
                    url = "/"
            self.urls.update(
                {
                    slug: {
                        "url": url,
                        "data": page,
                        "template": self.template,
                        "renderer": "default_site_renderer",
                    }
                }
            )
        return self.urls


class DefaultBlogMapper(Mapper):
    def __init__(
        self,
        base_url="",
        templates={
            "post_template": "post.html",
            "index_template": "blog_index.html",
            "tag_template": "tag.html",
        },
    ):
        self.urls = {}
        self.base_url = base_url
        self.templates = templates

    def map(self, site):
        self.urls.update(
            DefaultCollectionMapper(
                base_url=self.base_url,
                collection_name="posts",
                template=self.templates["post_template"],
            ).map(site)
        )
        self.urls.update(self.blog_index(site))
        self.urls.update(self.tags(site))
        return self.urls

    def blog_index(self, site):
        urls = {}
        posts = site["posts"][1:]
        try:
            per_page = site["config"]["pagination"]["per_page"]
        except Exception:
            per_page = 5
        urls.update(
            paginate(
                posts,
                per_page,
                self.templates["index_template"],
                self.base_url + "/index",
                "blog_index",
            )
        )
        return urls

    def tags(self, site):
        urls = {}
        if "tags" not in site.keys():
            return urls
        for tag in site["tags"]:
            posts = site["posts"]
            posts = [post for post in posts if tag["slug"] in post["tags"]]
            try:
                per_page = site["config"]["pagination"]["per_page"]
            except Exception:
                per_page = 5
            urls.update(
                paginate(
                    posts,
                    per_page,
                    self.templates["tag_template"],
                    self.base_url + f"/tags/{tag['slug']}",
                    f"tags.{tag['slug']}",
                    additional_data=tag,
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
