---
title: A better look
---
# A better look

Now are site is workig properly but it is really ugly. Let's change this!

### CSS

To improve the look of the site we have to use CSS. There are two ways to add CSS to your site: you can link to an external CSS framework or write your own CSS files. Using an external CSS framework like [Bootstrap](https://getbootstrap.com/) is very easy and can be done just like this

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    {% block title %}
      <title></title>
    {% endblock title %}

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

  </head>
  ...
```

However if you want to customize a little the style you should also write your own css files. To do it first you have to modify the ``main.py`` file, and modify it so it looks like this

```python
...

k.mappers = [
  mappers.DefaultPageMapper(),
  mappers.ManualMapper(
    "static": {
      "url": "/static/*",
      "data": {},
      "template": "",
      "renderer": "default_static_files_renderer",
    },
  )
]

k.renderers = [
  renderers.DefaultSiteRenderer(),
  renderers.DefaultStaticFilesRenderer(),
]

k.run()
```

You can see that we have added two things: a new mapper and a new renderer. The ``ManualMapper`` is a mapper that lets us create a new page manually, not programmatically, and we use it to say that the ``static`` folder should be used by the ``DefaultStaticFilesRenderer``. We obviously don't need to use the ``static`` folder, but we can choose our own name.

Now we can create some css files in the ``static`` directory. To add them to our page we have to link them in our template with the ``url()`` function, like we did previously

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    {% block title %}
      <title></title>
    {% endblock title %}

    <link rel="stylesheet" href="{{ url('/static/path/to/our/file.css') }}">

  </head>
  ...
```

### Favicon

Now that your site looks better you can add a favicon. The favicon is the little icon you see on the browser address bar. Even if it is very small it is very important because makes your site immediately recognizable among all the other tabs.

To generate a favicon I recommend going to <https://favicon.io/>. You can create a favicon from test, an image or even emojis. When you have finished click the download button and you should have a zip file. If you open it you can see that there isn't only one image, but there are many images with different formats and sizes, plus a file called ``site.webmanifest``. Copy these files to a directory named ``root``. This directory will contain files that will be placed in the root level of our site, and this is exactly what is needed for the favicons.

Now we need to modify our ``main.py`` file again, to tell Kart to render this directory

```python
...

k.mappers = [
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

k.renderers = [
  renderers.DefaultSiteRenderer(),
  renderers.DefaultStaticFilesRenderer(),
  renderers.DefaultRootDirRenderer(),
]

k.run()
```

Like for the ``static`` directory, we had to add an entry in ``ManualMapper``, and then add a new renderer, in this case ``DefaultRootDirRenderer``. Now if you run ``main.py`` again you should see your favicon instead of the ugly default one.

### Title

On the right of the favicon on most sites you can see a brief description of the page. On the other hand on our site is written ``localhost:9000``. We can change this by adding a title tag in our html template. Head over to the ``base.html`` template and modify it

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    {% block title %}
      <title>{{site.config.name}}</title>
    {% endblock title %}

...
```

Now when we go to our site in the browser we should see the name of the site alongside the icon. Still, we can improve this by changing the title to reflect the page content. If we modify our ``page.html`` template like this

```html
{% extends "base.html" %}

{% block content %}
<title>{{site.config.name}} - {{page.title}}</title>
{% endblock content %}

{% block content %}

  {% include 'nav.html' %}

  {{page.content|html}}

{% endblock content %}
```
the title should better reflect the content of the page.


Now we have a beautiful working site, even if very simple. If you don't need to add content very frequently, you probably don't need much more. If that's the case, you can skip the next pages and go to [Publishing](publishing) to learn how to publish your site.
