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
