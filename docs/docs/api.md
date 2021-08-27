---
title: Api reference
---

# Miners

class miners.Miner
: Base class


class miners.DefaultMiner(miners.Miner)
: Base class

class miners.DefaultMarkdownMiner(miners.DefaultMiner)
: Collects data in the collections folder


class miners.DefaultCollectionMiner(miners.DefaultMarkdownMiner)
: Collects data in the collections folder


class miners.DefaultTaxonomyMiner(miners.DefaultMarkdownMiner)
: Collects data in the taxonomies folder


class miners.DefaultPageMiner(miners.DefaultMarkdownMiner)
: Collects data in the page folder


class miners.DefaultDataMiner(miners.DefaultMarkdownMiner)
: Collects data in the data folder


# Mappers

class Mapper()
: Base class


class RuleMapper(rules)
: Updates map with user defined functions


class ManualMapper(pages)
: Updates map with user defined pages


class DefaultCollectionMapper(collection_name, template, base_url)
: Updates maps with every item in a collection


class DefaultPageMapper(template)
: Updates maps with site pages


class DefaultIndexMapper(collection_name, template, base_url)
: Updates map with a collection index


class DefaultTaxonomyMapper(collection_name, taxonomy_name, template, base_url)
:  Updates map with a collection index grouped in the same taxonomy


class DefaultFeedMapper(collections)
: Updates map with atom feeds page


# Renderers

class renderers.Renderer()
: Base class


class renderers.DefaultRenderer()
: Base class


class renderers.DefaultSiteRenderer(name, template_folder, markdown, process_count)
: Default jinja2 renderer


class renderers.DefaultFeedRenderer(name)
: Atom feed renderer


class renderers.DefaultSitemapRenderer(name)
: Sitemap renderer


class renderers.DefaultStaticFilesRenderer(name)
: Static files renderer


class renderers.DefaultRootDirRenderer(name)
: Root directory renderer


# Modifiers

class modifiers.MapModifier()
: Base class


class modifiers.ContentModifier()
: Base class


class modifiers.RuleMapModifier(rules)
: Modifies site based on supplied rules


class modifiers.RuleContentModifier(rules)
: Modifies site based on supplied rules


class modifiers.CollectionSorter(collection_name, key, reverse)
: Sorts collections based on key

# Utils

class KartObserver(watchdog.observers.Observer)
: Subclasses a watchdog observer


class KartRequestHandler(http.server.SimpleHTTPRequestHandler)
: Subclasses SimpleHTTPRequestHandler


class KartMap(collections.UserDict):
: Subclasses UserDict


function paginate()
: Takes a list of objects as input and outputs a map with ``n`` objects for each page


function date_to_string()
: formats a date


function slug_from_path()
: takes a path and outputs its slug


function merge_dicts
: merge two dicts


# Markdown

class KartMistuneRenderer(mistune.HTMLRenderer)
: markdown renderer with kart specific features


function markdown_to_html()
: convert markdown to html


class TocRenderer(mistune.renderers.BaseRenderer)
: markdown renderer that produces a list of headers


function markdown_to_toc()
: given a markdown file it outputs a list of the headers


# Documentation

class ext.documentation.DefaultDocumentationMiner()
: Mines data recursively for a documentation

class ext.documentation.DefaultDocumentationMapper()
: Mapper for a documentation
