---
title: Publishing
---
# Publishing

We are almost there. We only needs a few steps before publishing the site!

## Base url

First of all we have to tell Kart the domain name of our site. This is needed to make sure that all links link to the correct location. To do this we have to add it the the kart config in ``main.py``.

```python
...

k.config['name'] = 'The name of your site'
k.config["pagination"] = {"per_page": 10}
k.config["site_url"] = "https://the_domain_name_of_your_site.com"

k.run()
```

## Timezone

This step is not strictly necessary, but adding the correct timezone of your site can be useful. Simply add your timezone name in the kart configuration dictionary.

```python
...

k.config['name'] = 'The name of your site'
k.config["pagination"] = {"per_page": 10}
k.config["site_url"] = "https://the_domain_name_of_your_site.com"
k.config["timezone"] = "America/New_York"

k.run()
```

## Sitemap

A sitemap is a file that lists all the pages in a site, so that a search engine can crawl it faster without having to follow links. Having it is good SEO practice! To add a sitemap to a Kart site we only have to modify ``main.py``

```python
...

k.mappers = [
  ...
  mappers.ManualMapper(
    ...
    "sitemap": {
        "url": "/sitemap.xml",
        "data": {},
        "template": "",
        "renderer": "default_sitemap_renderer",
    },
  )
]

k.renderers = [
  renderers.DefaultSitemapRenderer(),
  ...
]
...
```

You can see that we have added a new entry within ``ManualMapper`` to specify the location of the sitemap, then we only had to add the new ``DefaultSitemapRenderer`` to the list of renderers.

## Robots.txt

Robots.txt is a file that is usually used to tell to search engines which pages not to crawl, but can be used also to specify the location of a sitemap. To add one simply create a new ``robots.txt`` in the ``root`` directory with this content

```text
Sitemap: https://the_domain_name_of_your_site.com/sitemap.xml
```

## Atom feed

By subscribing to Atom feeds users can get notified when a site publishes a new content. Atom feeds are also used by search engines as sitemaps. For both reasons if you have a blog you should definitely have atom feeds. To add it we simply have to modify ``main.py``, like we did for adding a sitemap.

```python
...

k.mappers = [
  ...
  mappers.DefaultFeedMapper(collections=["posts"]),
  mappers.ManualMapper(
    "static": {
        "url": "/static/*",
        "data": {},
        "template": "",
        "renderer": "default_static_files_renderer",
    },
    "root": {
        "url": "/*",
        "data": {},
        "template": "",
        "renderer": "default_root_dir_renderer",
    },
    "sitemap": {
        "url": "/sitemap.xml",
        "data": {},
        "template": "",
        "renderer": "default_sitemap_renderer",
    },
  )
]

k.renderers = [
  renderers.DefaultFeedRenderer(),
  renderers.DefaultSitemapRenderer(),
  ...
]
...
```

One thing to keep in mind is that we need to pass to ``DefaultFeedMapper`` a list of collections to include in the feed. In the case of a blog, we should include only posts.

## Final step

We have finished! Now you are ready to publish your site! There are a lot of different ways to host your site, here I have put 3 different options as an example.

### Gitlab pages

Gitlab pages is a service offered by Gitlab to host your static site for free. Combined with the excellent Gitlab CI/CD implementation it will provide a painless experience.

You can find the documentation of gitlab pages [here](https://docs.gitlab.com/ee/user/project/pages/), and there is also an [example](https://gitlab.com/pages/pelican) project using a python static site generator that can be easily modified for Kart.

### Github pages

Before Gitlab pages there was Github pages. Backed by Github, a bigger organization, Github pages is faster than Gitlab  pages because it hosts files with a CDN instead of using a standard web server. However is also has some disadvantages because out of the box it doesn't support all static site generators, so you will have to use a plugin like [this](https://github.com/marketplace/actions/deploy-to-github-pages).

[Here](https://docs.github.com/en/pages) you can find the documentation about Github pages.


### AWS

Amazon AWS doesn't need any presentation. It is the biggest cloud infrastructure in the world, so hosting the site with it can't be a bad idea! On the other hand it is the only option on this list which is not free.

If you want to go the AWS [here](https://aws.amazon.com/getting-started/hands-on/host-static-website/) you can find a guide that can help you.
