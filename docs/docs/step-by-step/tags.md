---
title: Tags
---
# Tags

If you have a good number of posts, maybe you should think about organizing them by topic. In this part we will understand how to group objects of a collection with taxonomies by adding tags to our blog.


## Create new tags

In Kart a tag is created like a blog post, by creating a new file. In this case we need to create new files in a new directory ``taxonomies/tags``. The ``taxonomies`` directory will contain all the taxonomies folders, like the ``collections`` directory contains all the collections folders. The only required field in a tag markdown file is its name. Now create a new file named, as an example, ``first-tag.md``.

```markdown
---
name: First tag
---
```

## Add tags to posts

Now that we have created a tag, we can add it to a post. To do this we have to create a new ``tags`` field on the top of the file, and then add the tag.

```markdown
---
title: First blog post
tags:
  - first-tag
---

Hello! This is my first blog post
```

The ``tags`` field has to be a list. So even if the tag is only one writing this:

```markdown
---
title: First blog post
tags: first-tag
---
...
```

will produce an error. If you want to add more tags you have to write them one below the other

```markdown
---
title: First blog post
tags:
  - first-tag
  - second-tag
---
...
```


## Modify main.py

We have created tags and added them to posts, but nothing will change if we don't modify our ``main.py``.

```python
...
k.miners = [
  miners.DefaultTaxonomyMiner("tags"),
  miners.DefaultPageMiner(),
  miners.DefaultCollectionMiner("posts"),
]

k.mappers = [
  mappers.DefaultTaxonomyMapper(
    collection_name="posts", taxonomy_name="tags", template="tag.html", base_url="/base/url/of/blog/index"
  ),
  mappers.DefaultIndexMapper(
    collection_name="posts", template="blog_index.html", base_url="/base/url/of/blog/index"
  ),
  ...
]
...
```

We have added a new miner called ``DefaultTaxonomyMiner`` and we have passed to it the the name of the taxonomy, in this case ``tags``. After that we had to add a new mapper, ``DefaultTaxonomyMapper`` which is very similar to ``DefaultIndexMapper`` but receives a new parameter, the name of the taxonomy.

## Modify the templates

As you can see from ``main.py`` we need a new template for the tags, however we could use the same template of the post index because they work in the same way, only on different sets of objects. So we can copy duplicate ``blog_index.html`` and do just a few modifications.

```html
{% extends "base.html" %}

{% block title %}
<title>{{site.config.name}} - Tags - {{ page.name }}</title>
{% endblock title %}

{% block content %}

{% include 'nav.html' %}

<h1>Posts tagged {{page.name}}</h1>

...
```

Now everything should work as expected. If you go to ``localhost:9000/base/url/of/blog/index/tags/name_of_a_tag/`` you should see a list of all the posts that have a specific tag. However if you look at a specific post you can't see which tags it has. We can modify this in the ``blog_index.html`` template.

```html
...
{% block content %}

{% include 'nav.html' %}

<h1>Blog Index</h1>

{% for post in page.paginator.objects %}
  <a href="{{ url('posts', post.slug) }}"> <h1>{{post.title}}</h1> </a>
  <span>{{ post.date|date_to_string }}</span>
  <span>
    Tags:
      {% for tag_slug in post.tags %}
        <a href="{{ url("tags", tag_slug) }}">{{site.tags[tag_slug].name}}</a>
      {% endfor %}
  </span>
  <p>
    {{post.description}}
  </p>
  <hr>
{% endfor %}
...
```

We iterate through each post, and for each post we iterate through the list of its tags; with the tag we build a link that points to the index that contains all posts that have that specific tag
