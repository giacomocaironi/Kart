---
title: Posts
---
# Posts

Writing pages as we have seen in the previous parts is useful if you want to have something like a contact page. But if you plan on writing lot of blog posts, or lots of pages of the same type, there is a better way. In this part we will start to implement blogging functionality in your site using collections.

### Collections

Let's start by creating a place to put the markdown files for our posts. Create a new ``collections`` directory, and a new ``posts`` collections inside it. Now create a new file named ``first-post.md``. The format of the posts is very similar to what we are used to. The only thing is that files belonging to a collection can't have the ``url`` field.

```markdown
---
title: First blog post
---

Hello! This is my first blog post
```

Everytime we add a new feature to our site we have to modify our ``main.py``, and this time is no exception. First of all we have to add a new miner, ``DefaultCollectionMiner`` which will get the pages from the ``collections/posts`` directory, and a new mapper ``DefaultCollectionMapper``. Modify ``main.py`` so that it looks like this

```python
...
k.miners = [
  miners.DefaultPageMiner(),
  miners.DefaultCollectionMiner("posts"),
]

k.mappers = [
  mappers.DefaultCollectionMapper(collection_name="posts", template="post.html"),
  mappers.DefaultPageMapper(),
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
  )
]
...
```

Ad you can see we had to tell ``DefaulCollectionMapper`` the name of the collection it has to work on and also the template to use by default on all pages of the collections. However if for a particular post you need a different template you can specify it as for the pages, with a ``template`` field on the top of the file.

Before we can see the page in our browser we have to create the ``post.html`` template. For now it can be the same as ``page.html``. Now if you go to ``localhost:9000/posts/firs-post/`` in your browser you should see the content you have written in the markdown file.


### Add fields to posts

Right now a post has only a title. Maybe you want to specify the author, the date, or the description. To do this we simply have to add some fields to the top of the post markdown files.

```markdown
---
title: First blog post
author: Alice
date: 2021-01-01
description: A not too long description of the post
---

Hello! This is my first blog post
```

Then we have to access them from the ``post.html`` template.

```html
...

{% block content %}

  {% include 'nav.html' %}

  <h1>{{page.title}}</h1>
  {{page.author}} - {{page.date|date_to_string}}
  <hr>

  {{page.content|html}}

{% endblock content %}
```

To better print the date we passed the date of the posts through a Jinja2 filter called ``date_to_string``, which takes a date in number and outputs a prettier representation.


### Index

Now that we have posts, we need a way to access them, a page that contains link to all the posts. We can achieve this by creating a new page with a custom template. If you want the post index to also be the site index, modify ``index.md``, otherwise create a new file ``post_index.md`` with a custom url

```markdown
---
title: Blog Index
url: /base/url/of/blog/index
template: blog_index.html
---
```

The markdown page is actually very simple, most of the work will be done in the custom template, which I have called ``blog_index.html``.

```html
{% extends "base.html" %}

{% block content %}
<title>{{site.config.name}} - Blog Index</title>
{% endblock content %}

{% block content %}

  {% include 'nav.html' %}

  <h1>Blog Index</h1>

  {% for slug in site.collections.posts %}
    {% set post = site.collections.posts[slug] %}
    <a href="{{ url(slug) }}"> <h1>{{post.title}}</h1> </a>
    <p>
      {{post.description}}
    </p>
    <hr>
  {% endfor %}

{% endblock content %}
```

After the header, we iterate through each blog post slug, and we use it to create a link just like we did for the navigation header in the [previous](step_by_step/improving_the_usability) part.


### Sorting

If we go to our newly created page we will see that the blog posts are not ordered, while obviously they should be sorted by date. To solve this we have introduce a new feature of Kart, modifiers. Content modifiers take data from miners and modify it, while Map modifiers modify the output of the mappers.

To sort the posts we can use a modifier called CollectionSorter, which takes as inputs the collection to sort and the field to use for sorting.

```python
from kart import Kart
from kart import miners, mappers, renderers, modifiers

...

kart.content_modifiers = [
    modifiers.CollectionSorter(collection="posts", key="date"),
]

...
```

Now posts should be sorted in the right way!
