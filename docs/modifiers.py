from kart import modifiers


class GlobalMapModifier(modifiers.MapModifier):
    def modify(self, map, site):
        global_map = []
        global_toc = []
        i = 0
        for data in site["data"]["navigation"]:
            if data["link"] in site["pages"].keys():
                page = map[data["link"]]
                title = page["data"]["title"]
                url = page["url"]
                global_map.append({"url": url, "title": title})
                global_toc.append({"url": url, "title": title, "index": i})
                page["data"]["global_map_index"] = i
                i += 1
            elif data["link"] in site.keys():
                partial_toc = []
                for x in site[data["link"]].values():
                    page = map[data["link"] + "." + x["slug"]]
                    title = x["title"]
                    url = page["url"]
                    global_map.append({"url": url, "title": title})
                    partial_toc.append({"url": url, "title": title, "index": i})
                    page["data"]["global_map_index"] = i
                    i += 1
                global_toc.append([data["name"]] + partial_toc)
        site["global_map"] = global_map
        site["global_map_size"] = len(global_map)
        site["global_toc"] = global_toc
