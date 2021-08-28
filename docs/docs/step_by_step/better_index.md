---
title: A better post index
---

# A better post index

Creating indexes like we have just done is very easy. However after writing many posts you may want to introduce pagination, so to split your index into multiple pages to make them smaller. This could be achieved also using pages, but you would have to write a different page every time you write a certain amount of posts. Fortunately with Kart there is a better way.

## Index mapper

First of all we have to modify ``main.py`` and add a new mapper called ``DefaultIndexMapper``

```python
...
k.mappers = [
  mappers.DefaultIndexMapper(
    collection="posts", template="blog_index.html", base_url="/base/url/of/blog/index"
  ),
  mappers.DefaultCollectionMapper(collection="posts", template="post.html"),
  ...
]
...
```

To function ``DefaultIndexMapper`` needs a collection to work on, a template file and a ``base_url``. This is the same things as the url we specify for a page. Now we need to delete ``blog-index.md``, we don't need it anymore, and modify ``blog_index.html``.

## Index template

Let's start by seeing what data is available to the template.

```html
...
{% block content %}

  {% include 'nav.html' %}

  <h1>Blog Index</h1>

  {{page}}

{% endblock content %}
```

In the browser you should see a python dictionary printed to the screen, with only one field, ``paginator``. It contains all the information we need for our template. It contains a list of objects, in this case posts, and some information we need to navigate through the different pages of the index.

First of all modify the template to iterate through each post and build an index like we did in the previous chapter.

```html
...
{% block content %}

{% include 'nav.html' %}

<h1>Blog Index</h1>

{% for post in page.paginator.objects %}
  <a href="{{ url('posts', post.slug) }}"> <h1>{{post.title}}</h1> </a>
  <p>
    {{post.description}}
  </p>
  <hr>
{% endfor %}

{% endblock content %}
```

Now you should have the same output we had before starting. However if you have added more than 5 blog posts, you will see that only the 5 most recent ones are on the page. That's because they have been moved to a different page. If you go to ``localhost:9000/base/url/of/blog/index/2/`` you should see them.

If 5 posts for a page is too little you can change this parameter in ``main.py``

```python
...
k.config['name'] = 'The name of your site'
k.config["pagination"] = {"per_page": 10}

k.run()
```

## Navigation

Now we have to modify the ``blog_index.html`` so that we can navigate between the different part of the index

```html
...
{% block content %}

{% include 'nav.html' %}

<h1>Blog Index</h1>

{% for post in page.paginator.objects %}
  <a href="{{ url('posts', post.slug) }}"> <h1>{{post.title}}</h1> </a>
  <p>
    {{post.description}}
  </p>
  <hr>
{% endfor %}

{% if page.paginator.previous_page %}
  <a href="{{ url(page.paginator.previous_page) }}">Newer</a>
{% endif %}
{% if page.paginator.next_page %}
  <a href="{{ url(page.paginator.next_page) }}">Older</a>
{% endif %}

{% endblock content %}
```

After the posts have two ``if`` conditions. If the ``previous_page`` value is set it means that this is not the first page in the index, and so we have to create a link that points to the previous page. We do the same thing with ``next_page``.

Creating an index in this way is certainly more complicated, however if you have a great number of objects in a collections it can help to organize you site.
