---
title: A better look
---
# A better look

Now that we have improved the site we might style it a little with CSS, so that is looks better. There are two ways to add CSS to your site: you can link to an external CSS framework or write your own CSS files. Using an external CSS framework like [Bootstrap](https://getbootstrap.com/) is very easy and can be done just like this

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

  </head>
  ...
```

However if you want to customize a little the style you should also write your own css files. To do it first you have to modify the ``main.py`` file, and modify it so it looks like this

```python
from kart import Kart, miners, mappers, renderers

k = Kart()

k.miners = [miners.DefaultPageMiner()]

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
    <title></title>

    <link rel="stylesheet" href="{{ url('/static/path/to/our/file.css') }}">

  </head>
  ...
```
