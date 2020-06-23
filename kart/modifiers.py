class RuleModifier:
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function

    def modify(self, site):
        for rule in self.rules:
            rule(site)


class TagModifier:
    def __init__(self, rules=[]):
        self.rules = rules  # a rule is a function

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
