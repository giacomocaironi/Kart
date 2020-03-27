def url(name, object):
    pass


class AutomaticMapper:
    def __init__(self):
        self.urls = []

    def map(self, site):
        return {}


class ManualMapper:
    def __init__(self):
        self.rules = []  # a rule is a function
        self.urls = {}

    def map(self, site):

        for rule in self.rules:
            self.urls.update(rule(site))

        return self.urls


class BlogMapper:
    def __init__(self):
        self.urls = {}

    def map(self, site):
        self.urls.update(self.posts(site))
        self.urls.update(self.pages(site))
        self.urls.update(self.index(site))
        self.urls.update(self.tags(site))

        return self.urls

    def posts(self, site):
        urls = {}
        for post in site["posts"]:
            urls.update(
                {
                    f"posts.{post['slug']}": {
                        "url": f"/posts/{post['slug']}/",
                        "data": post,
                        "default_template": "post.html",
                        "renderer": "main_renderer",
                    }
                }
            )

        return urls

    def pages(self, site):
        urls = {}
        for slug in site["pages"]:
            urls.update(
                {
                    slug: {
                        "url": f"/{slug}/",
                        "data": site["pages"][slug],
                        "default_template": "page.html",
                        "renderer": "main_renderer",
                    }
                }
            )
        return urls

    def index(self, site):
        urls = {}
        posts = site["posts"][1:]

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
            if i < len(posts):
                next_page_url = f"/index/{i+1}/"
            else:
                next_page_url = ""

            paginator = {
                "posts": posts,
                "index": i,
                "next_page_url": next_page_url,
                "previous_page_url": previous_page_url,
            }
            data = {
                "title": "blog",
                "paginator": paginator,
            }
            urls.update(
                {
                    f"index.{i}": {
                        "url": url,
                        "data": data,
                        "default_template": "blog_index.html",
                        "renderer": "main_renderer",
                    }
                }
            )

        return urls

    def tags(self, site):
        urls = {}

        for tag in site["tags"]:

            posts = site["posts"]
            posts = [post for post in posts if tag["name"] in post["tags"]]

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
                if i < len(posts):
                    next_page_url = f"/tags/{tag['slug']}/{i+1}/"
                else:
                    next_page_url = ""

                paginator = {
                    "posts": posts,
                    "index": i,
                    "next_page_url": next_page_url,
                    "previous_page_url": previous_page_url,
                }
                data = {
                    "title": f"Posts tagged {tag['name']}",
                    "tag_slug": tag["slug"],
                    "paginator": paginator,
                }
                urls.update(
                    {
                        f"tags.{tag['slug']}.{i}": {
                            "url": url,
                            "data": data,
                            "default_template": "tag.html",
                            "renderer": "main_renderer",
                        }
                    }
                )

        return urls
