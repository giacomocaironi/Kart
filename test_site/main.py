from kart import Kart
from kart import miners, mappers, renderers


def index(site):
    return {
        "index": {
            "url": "/",
            "data": site["pages"]["index"],
            "default_template": "minimal.html",
            "renderer": "main_renderer",
        }
    }


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


kart = Kart()

kart.miners.extend([miners.DefaultCollectionMiner("projects")])
# kart.renderers = []
kart.mappers[0].base_url = "/blog"

main_mapper = mappers.ManualMapper()
main_mapper.rules = [index, projects, project_index]
kart.mappers.extend([main_mapper])

kart.config["name"] = "Kart test"
kart.config["base_url"] = "http://base_url"

kart.run()
