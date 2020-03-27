from kart import Kart
from kart import miners, mappers, renderers


def about(site):
    return {
        "about": {
            "url": "/blog/about/",
            "data": site["pages"]["about"],
            "default_template": "minimal.html",
            "renderer": "main_renderer",
        }
    }


def index(site):
    return {
        "index": {
            "url": "/",
            "data": site["pages"]["index"],
            "default_template": "minimal.html",
            "renderer": "main_renderer",
        }
    }


def posts(site):
    urls = {}
    for post in site["posts"]:
        urls.update(
            {
                f"posts.{post['slug']}": {
                    "url": f"/blog/posts/{post['slug']}/",
                    "data": post,
                    "default_template": "post.html",
                    "renderer": "main_renderer",
                }
            }
        )

    return urls


def projects(site):
    urls = {}
    for project in site["projects"]:
        urls.update(
            {
                f"projects.{project['slug']}": {
                    "url": f"/projects/{project['slug']}/",
                    "data": project,
                    "default_template": "project.html",
                    "renderer": "main_renderer",
                }
            }
        )

    return urls


def project_index(site):
    projects = site["projects"]
    data = {"title": "Projects", "projects": projects}
    return {
        "projects_index": {
            "url": "/projects/",
            "data": data,
            "default_template": "projects_index.html",
            "renderer": "main_renderer",
        }
    }


def blog_index(site):
    urls = {}
    posts = site["posts"][1:]

    per_page = 5
    paginated_posts = [
        posts[x * per_page : (x + 1) * per_page]
        for x in range(len(posts) // per_page + 1)
    ]

    for i, posts in enumerate(paginated_posts, 1):
        url = f"/blog/{i}/" if i > 1 else "/blog/"
        if i > 2:
            previous_page_url = f"/blog/{i-1}/"
        elif i == 2:
            previous_page_url = "/blog/"
        else:
            previous_page_url = ""
        if i < len(posts):
            next_page_url = f"/blog/{i+1}/"
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
                f"blog_index.{i}": {
                    "url": url,
                    "data": data,
                    "default_template": "blog_index.html",
                    "renderer": "main_renderer",
                }
            }
        )

    return urls


def tags(site):
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
            url = (
                f"/blog/tags/{tag['slug']}/{i}/"
                if i > 1
                else f"/blog/tags/{tag['slug']}/"
            )
            if i > 2:
                previous_page_url = f"/blog/tags/{tag['slug']}/{i-1}/"
            elif i == 2:
                previous_page_url = f"/blog/tags/{tag['slug']}/"
            else:
                previous_page_url = ""
            if i < len(posts):
                next_page_url = f"/blog/tags/{tag['slug']}/{i+1}/"
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


kart = Kart()


kart.miners = [
    miners.DefaultDataMiner(),
    miners.DefaultPageMiner(),
    miners.PostMiner("posts"),
    miners.CollectionMiner("tags"),
    miners.CollectionMiner("projects"),
]
# kart.renderers = []


main_mapper = mappers.ManualMapper()
main_mapper.rules = [about, index, posts, projects, blog_index, tags, project_index]
kart.mappers = [main_mapper]

kart.run()
