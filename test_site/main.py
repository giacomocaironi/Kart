from kart import Kart
from kart import miners, mappers, renderers

kart = Kart()

# kart.miners = []
# kart.renderers = []

main_mapper = mappers.DefaultMapper()


def about(site):
    return {
        "name": "about",
        "url": "/blog/about/",
        "data": site["pages"]["about"],
        "default_template": "minimal.html",
        "renderers": ["main_renderer"],
    }


def index(site):
    return {
        "name": "index",
        "url": "/blog/",
        "data": site["pages"]["index"],
        "default_template": "minimal.html",
        "renderers": ["main_renderer"],
    }


main_mapper.rules = [about, index]


kart.mappers = [main_mapper]
kart.build()
