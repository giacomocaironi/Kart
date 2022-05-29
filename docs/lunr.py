from pathlib import Path
from kart import renderers
from bs4 import BeautifulSoup
import json

def create_search_index():
    config = {
        "lang": ["en"],
        "min_search_length": 3,
        "prebuild_index": False,
        "separator": "[\\s\\-]+",
    }
    index = {"config": config, "docs": []}
    for file in Path('public').glob('**/*.html'):

        soup =  BeautifulSoup(file.open().read(), 'html.parser')
        content = soup.find_all(class_='content')[0]

        title = soup.title.text
        id = ''

        index["docs"].append(
            {
                "location": str(file.parent) + id,
                "text": str(content),
                "title": title,
            }
        )
    return json.dumps(index)

a = create_search_index()