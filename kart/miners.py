from lxml.html.clean import clean_html
import os
import frontmatter
import yaml
from paka import cmark


class DefaultPostMiner:
    def __init__(self, collection_name="posts", model=None, location="collections"):
        self.model = model
        self.collection_name = collection_name
        self.location = location

    def collect(self):
        self.data = []
        for file in os.listdir(os.path.join(self.location, self.collection_name)):
            with open(
                os.path.join(self.location, self.collection_name, file), "r"
            ) as f:
                metadata, content = frontmatter.parse(f.read())
                object = metadata
                if "draft" in object.keys():
                    if object["draft"]:
                        continue
                object["slug"] = file.split(".")[0]
                object["content"] = cmark.to_html(content)
                object["short_content"] = clean_html(object["content"][:1000])
                self.data.append(object)
        self.data.sort(key=lambda x: x["date"])
        self.data.reverse()
        return {self.collection_name: self.data}


class DefaultCollectionMiner:
    def __init__(self, collection_name, model=None, location="collections"):
        self.model = model
        self.collection_name = collection_name
        self.location = location

    def collect(self):
        self.data = []
        for file in os.listdir(os.path.join(self.location, self.collection_name)):
            with open(
                os.path.join(self.location, self.collection_name, file), "r"
            ) as f:
                metadata, content = frontmatter.parse(f.read())
                object = metadata
                object["slug"] = file.split(".")[0]
                object["content"] = cmark.to_html(content)
                self.data.append(object)
        try:
            self.data.sort(key=lambda x: x["index"])
        except Exception:
            pass
        return {self.collection_name: self.data}


class DefaultPageMiner:
    def __init__(self, location="pages"):
        self.location = location

    def collect(self):
        self.data = {}
        for file in os.listdir(self.location):
            with open(os.path.join(self.location, file), "r") as f:
                metadata, content = frontmatter.parse(f.read())
                object = metadata
                object["content"] = cmark.to_html(content)
                self.data[file.split(".")[0]] = object
        return {"pages": self.data}


class DefaultDataMiner:
    def __init__(self, location="data"):
        self.location = location

    def collect(self):
        self.data = {}
        for file in os.listdir(self.location):
            with open(os.path.join(self.location, file), "r") as f:
                self.data[file.split(".")[0]] = yaml.full_load(f.read())
        return {"data": self.data}
