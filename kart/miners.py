from lxml.html.clean import clean_html
import os
import frontmatter
import yaml
from paka import cmark


class DefaultCollectionMiner:
    def __init__(self, collection_name, model=None, location="collections"):
        self.model = model
        self.collection_name = collection_name
        self.location = location

    # @cached
    def collect_single_file(self, filename, file_location):
        with open(file_location, "r") as f:
            metadata, content = frontmatter.parse(f.read())
            object = metadata
            object["slug"] = filename.split(".")[0]
            object["content"] = cmark.to_html(content)
            if "draft" in object.keys():
                if object["draft"]:
                    return False
            return object

    def process(self):
        try:
            self.data.sort(key=lambda x: x["index"])
        except Exception:
            pass

    def collect(self):
        self.data = []
        working_dir = os.path.join(self.location, self.collection_name)
        for filename in os.listdir(working_dir):
            file_location = os.path.join(working_dir, filename)
            object = self.collect_single_file(filename, file_location)
            if object:
                self.data.append(object)
        self.process()
        return {self.collection_name: self.data}


class DefaultPostMiner(DefaultCollectionMiner):
    def __init__(self, collection_name="posts", **kwargs):
        super().__init__(collection_name=collection_name, **kwargs)

    def process(self):
        self.data.sort(key=lambda x: x["date"])
        self.data.reverse()


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
