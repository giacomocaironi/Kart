from kart import Kart
from kart import miners, mappers, renderers

kart = Kart()

# kart.miners = []
# kart.renderers = []

main_mapper = mappers.ManualMapper()


def about(site):
    return [
        {
            "name": "about",
            "url": "/blog/about/",
            "data": site["pages"]["about"],
            "default_template": "minimal.html",
            "renderers": ["main_renderer"],
        }
    ]


def index(site):
    return [
        {
            "name": "index",
            "url": "/blog/",
            "data": site["pages"]["index"],
            "default_template": "minimal.html",
            "renderers": ["main_renderer"],
        }
    ]


def posts(site):
    urls = []
    for post in site["collections"]["posts"]:
        urls.append(
            {
                "name": f"posts.{post['slug']}",
                "url": f"/blog/posts/{post['slug']}/",
                "data": post,
                "default_template": "post.html",
                "renderers": ["main_renderer"],
            }
        )

    return urls


def projects(site):
    urls = []
    for project in site["collections"]["projects"]:
        urls.append(
            {
                "name": f"projects.{project['slug']}",
                "url": f"/projects/{project['slug']}/",
                "data": project,
                "default_template": "project.html",
                "renderers": ["main_renderer"],
            }
        )

    return urls


def blog_index(site):
    urls = []
    posts = site["collections"]["posts"][1:]

    per_page = 5
    paginated_posts = [
        posts[x * per_page : (x + 1) * per_page]
        for x in range(len(posts) // per_page + 1)
    ]

    for i, posts in enumerate(paginated_posts, 1):
        paginator = {
            "posts": posts,
            "index": i,
            "next_page": i + 1 if i < len(paginated_posts) else 0,
            "previous_page": i - 1,
        }
        data = {
            "title": "blog",
            "paginator": paginator,
        }
        urls.append(
            {
                "name": f"blog_index.{i}",
                "url": f"/blog/{i}/" if i > 1 else "/blog/",
                "data": data,
                "default_template": "blog.html",
                "renderers": ["main_renderer"],
            }
        )

    return urls


def tags(site):
    urls = []

    for tag in site["collections"]["tags"]:
        posts = site["collections"]["posts"]

        per_page = 5
        paginated_posts = [
            posts[x * per_page : (x + 1) * per_page]
            for x in range(len(posts) // per_page + 1)
        ]

        for i, posts in enumerate(paginated_posts, 1):
            paginator = {
                "posts": posts,
                "index": i,
                "next_page": i + 1 if i < len(paginated_posts) else 0,
                "previous_page": i - 1,
            }
            data = {
                "title": "blog",
                "paginator": paginator,
            }
            urls.append(
                {
                    "name": f"blog_index.{i}",
                    "url": f"/blog/{i}/" if i > 1 else "/blog/",
                    "data": data,
                    "default_template": "blog.html",
                    "renderers": ["main_renderer"],
                }
            )

    return urls


main_mapper.rules = [about, index, posts, projects, blog_index]


kart.mappers = [main_mapper]
# kart.mappers.apped(main_mapper)
kart.run()
