from bs4 import BeautifulSoup

from kart.utils import markdown


class ContentModifier:
    def modify(self, site):
        raise NotImplementedError


class MapModifier:
    def modify(self, map, site):
        raise NotImplementedError


class RuleContentModifier(ContentModifier):
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function

    def modify(self, site):
        for rule in self.rules:
            rule(site)


class RuleMapModifier(MapModifier):
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function

    def modify(self, map, site):
        for rule in self.rules:
            rule(map, site)


class TagModifier(ContentModifier):
    def modify(self, site):
        site["tag_dict"] = {}
        for tag in site["tags"]:
            site["tag_dict"][tag["slug"]] = tag["name"]


class CollectionSorter:
    def __init__(self, collection_name, key, reverse=False):
        self.collection_name = collection_name
        self.key = key
        self.reverse = reverse

    def modify(self, site):
        site[self.collection_name].sort(key=lambda x: x[self.key])
        if self.reverse:
            site[self.collection_name].reverse()


class TocModifier(ContentModifier):
    def __init__(self, collection_name):
        self.collection_name = collection_name

    def modify(self, site):
        if self.collection_name == "pages":
            items = list(site["pages"].values())
        else:
            items = site[self.collection_name]
        for item in items:
            toc = []
            soup = BeautifulSoup(markdown(item["content"]), features="lxml")
            current_list = toc
            previous_tag = None
            for header in soup.findAll(["h2", "h3"]):
                if previous_tag == "h2" and header.name == "h3":
                    current_list = []
                elif previous_tag == "h3" and header.name == "h2":
                    toc.append(current_list)
                    current_list = toc
                current_list.append((header["id"], header.string))
                previous_tag = header.name
            if current_list != toc:
                toc.append(current_list)
            item["toc"] = toc
