---
title: Changelog
---

# Changelog


## v0.13 (in development, not yet released)

* Markdown functions have been moved to the ext subdirectory
* Default Mappers now accept an extra parameter ``renderer`` to specify the name of the renderer to use
* Miners now only process files of the specified file format
* Jinja2 code is now executed by markdown_to_html, leading to the ability to add custom functionality inside the page content too, and not only in templates
* Update to Jinja 3.0

## v0.12

* The ``config`` dictionary is now given as input to every function. It is also passed as a separate argument to Jinja2 templates instead of being a part of ``site``.
* Kart now properly addresses the ``draft`` field in markdown files

## v0.11

* base_url in the site configuration has been renamed to site_url
* collection_name and taxonomy_name have been renamed to collection and taxonomy
* A new option, --dev-url, has been added to serve the site under a different url
* The site data and map are now stored in a custom dictionary for easier templates
* The documentation extension has been improved, and now has the ability to generate documentation from python files, thus ...
* Now Kart has a technical api reference!

## v0.10

* python-feedgen dependency has been removed. Now DefaultFeedRenderer use raw strings.
* Two new classes, DefaultDocumentationMiner and DefaultDocumentationMapper, have been added to support documentations.
* When using DefaultIndexMapper, ``previous_page_url`` and ``next_page_url`` have been renamed ``previous_page`` and ``next_page``, and will contain the slug of the target page instead of the url, fixing a logical bug.
* utils.markdown_to_toc function now returns a list of headings instead of html.

## v0.9.3
Add missing dependency.

## v0.9.2
Fixed a critical bug where external urls would not be formatted correctly.

## v0.9.1
Bug fixes. Now kart behaves accordingly when deleting a file. A bug that leaded to unnecessary empty pages was also fixed.


## v0.9
DefaultSiteRenderer has been greatly improved. The markdown parameter introduced in the 0.8 version has been replaced by a parameter called filters, which is a dict containing custom funcions. In this way we can pass any function we want to the jinja2 filters. A custom markdown function can thus be passed down to the templates as a custom filter. This leads to a better experience when writing custom templates.

Instead of using DefaultCollectionMiner to get taxonomies data, now there is a new miner, DefaultTaxonomyMiner, that will by default collect data in the taxonomies directory.  


## v0.8
Collection miners now output a dict instead of a list, leading to better consistency in how data is accessed in the templates. BlogMapper has been replaced by two more general mappers, DefaultIndexMapper and DefaultTaxonomyMapper, so that is easier to create and group custom collections.

DefaultSiteRenderer now accepts a new parameter, markdown, which is used to render html in the templates. This lead to better flexibility as users can supply their own custom markdown function. The default markdown function has also been improved. The logic behind filesystem monitoring has been rewritten, leading to faster site update when live editing.


## v0.7
The 0.7 release is the biggest so far. Fist of all, there is a major change in how pages are displayed during development: instead of building the site on every text change, Kart builds pages dinamically, making developing templates on big sites a lot easier. As a matter of fact I tried modifying the templates on a 7500 posts site!

Other code changes include splitting the modifiers into content_modifiers, the old ones, and map_modifiers, which are applied after map generation.

The code has been refactored: now at the beginning of each file there is a parent class which helps understand which methods are needed to implement your own custom classes. Part of the code not tied to a specific class has now been move to the new utils.py file.


## v0.6
The 0.6 release introduces Modifiers, a new type of kart class. Modifier process and modify the site data, so it is available from every part of the site. It is very useful when trying to generate complex query in the templates, because it easier to do in python than in Jinja2 templates. Achieving the same with custom Mappers was and is still possible, but modifiers are now the recommended way because they are easier to use and if you want to implement a custom feature you no longer have to copy and paste the code from the default mappers.


## v0.5
The 0.5 comes with an init command to easily start building a site. It has also changed a little bit how the default blog mapper handles tags. For this version the quickstart tutorial has been completed.


## v0.4
The 0.4 version comes with an auto-reloading web-server, enabling you to prototype your site faster.

It also support adding files in the top level directory, like favicon.ico and CNAME.


## v0.3
The 0.3 version comes with default mappers and miners to create a simple blog without coding.

It is also the first version to have a proper documentation.
