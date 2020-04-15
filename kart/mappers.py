def url(name, object):
    pass


class AutomaticMapper:
    def __init__(self):
        self.urls = []

    def map(self, site):
        return {}


class ManualMapper:
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function
        self.urls = {}

    def map(self, site):

        for rule in self.rules:
            self.urls.update(rule(site))

        return self.urls


class DefaultFeedMapper:
    def __init__(self, collections=[]):
        self.urls = {}
        self.collections = collections

    def map(self, site):
        return {
            "atom_feeds": {
                "url": "/atom.xml",
                "data": site["posts"],
                "renderer": "feed_renderer",
            }
        }


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
                        "renderer": "main_renderer",
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
            except:
                url = f"/{slug}/"
                if slug == "index":
                    url = "/"
            self.urls.update(
                {
                    slug: {
                        "url": url,
                        "data": page,
                        "default_template": self.default_template,
                        "renderer": "main_renderer",
                    }
                }
            )
        return self.urls


class DefaultBlogMapper:
    def __init__(self, base_url=""):
        self.urls = {}
        self.base_url = base_url

    def map(self, site):
        self.urls.update(
            DefaultCollectionMapper(
                base_url=self.base_url, collection_name="posts", template="post.html"
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
        except:
            per_page = 5
        paginated_posts = [
            posts[x * per_page : (x + 1) * per_page]
            for x in range(len(posts) // per_page + 1)
        ]

        for i, posts in enumerate(paginated_posts, 1):
            url = f"/index/{i}/" if i > 1 else "/"
            if i > 2:
                previous_page_url = f"/index/{i-1}/"
            elif i == 2:
                previous_page_url = "/"
            else:
                previous_page_url = ""
            if i < len(paginated_posts):
                next_page_url = f"/index/{i+1}/"
            else:
                next_page_url = ""

            paginator = {
                "posts": posts,
                "index": i,
                "next_page_url": self.base_url + next_page_url if next_page_url else "",
                "previous_page_url": self.base_url + previous_page_url
                if previous_page_url
                else "",
            }
            data = {
                "title": "blog",
                "paginator": paginator,
            }
            urls.update(
                {
                    f"blog_index.{i}": {
                        "url": self.base_url + url,
                        "data": data,
                        "default_template": "blog_index.html",
                        "renderer": "main_renderer",
                    }
                }
            )

        return urls

    def tags(self, site):
        urls = {}

        if "tags" not in site.keys():
            return urls

        for tag in site["tags"]:

            posts = site["posts"]
            posts = [post for post in posts if tag["name"] in post["tags"]]

            try:
                per_page = site["config"]["pagination"]["per_page"]
            except:
                per_page = 5
            paginated_posts = [
                posts[x * per_page : (x + 1) * per_page]
                for x in range(len(posts) // per_page + 1)
            ]

            for i, posts in enumerate(paginated_posts, 1):
                url = f"/tags/{tag['slug']}/{i}/" if i > 1 else f"/tags/{tag['slug']}/"
                if i > 2:
                    previous_page_url = f"/tags/{tag['slug']}/{i-1}/"
                elif i == 2:
                    previous_page_url = f"/tags/{tag['slug']}/"
                else:
                    previous_page_url = ""
                if i < len(paginated_posts):
                    next_page_url = f"/tags/{tag['slug']}/{i+1}/"
                else:
                    next_page_url = ""

                paginator = {
                    "posts": posts,
                    "index": i,
                    "next_page_url": self.base_url + next_page_url
                    if next_page_url
                    else "",
                    "previous_page_url": self.base_url + previous_page_url
                    if previous_page_url
                    else "",
                }
                data = {
                    "title": f"Posts tagged {tag['name']}",
                    "tag_slug": tag["slug"],
                    "paginator": paginator,
                }
                urls.update(
                    {
                        f"tags.{tag['slug']}.{i}": {
                            "url": self.base_url + url,
                            "data": data,
                            "default_template": "tag.html",
                            "renderer": "main_renderer",
                        }
                    }
                )

        return urls
