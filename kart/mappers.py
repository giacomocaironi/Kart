def paginate(objects, per_page, template, base_url, slug, additional_data={}):
    urls = {}
    paginated_objects = [
        objects[x * per_page : (x + 1) * per_page]
        for x in range(len(objects) // per_page + 1)
    ]
    for i, objects in enumerate(paginated_objects, 1):
        url = f"/{i}/" if i > 1 else "/"
        if i > 2:
            previous_page_url = f"/{i-1}/"
        elif i == 2:
            previous_page_url = "/"
        else:
            previous_page_url = ""
        if i < len(paginated_objects):
            next_page_url = f"/{i+1}/"
        else:
            next_page_url = ""
        paginator = {
            "objects": objects,
            "index": i,
            "next_page_url": base_url + next_page_url if next_page_url else "",
            "previous_page_url": base_url + previous_page_url
            if previous_page_url
            else "",
        }
        data = {"paginator": paginator}
        data.update(additional_data)
        urls.update(
            {
                f"{slug}.{i}": {
                    "url": base_url + url,
                    "data": data,
                    "default_template": template,
                    "renderer": "default_site_renderer",
                }
            }
        )
    return urls


class RuleMapper:
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function
        self.urls = {}

    def map(self, site):
        for rule in self.rules:
            self.urls.update(rule(site))
        return self.urls


class DefaultCollectionMapper:
    def __init__(self, collection_name, base_url="", template="collection_item.html"):
        self.urls = {}
        self.default_template = template
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
                        "default_template": self.default_template,
                        "renderer": "default_site_renderer",
                    }
                }
            )
        return urls


class DefaultPageMapper:
    def __init__(self, template="page.html"):
        self.urls = {}
        self.default_template = template

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
                        "default_template": self.default_template,
                        "renderer": "default_site_renderer",
                    }
                }
            )
        return self.urls


class DefaultBlogMapper:
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
