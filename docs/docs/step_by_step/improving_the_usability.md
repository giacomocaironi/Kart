---
title: Improving the usability
---
# Improving the usability

Now you should have a working site. However there is no way for a user to move between the pages of the site if they don't know exactly the url of the page. Through the power of Jinja2 templates we will now address this problem.

Let's now modify a little our template

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    {{page}}
    <hr>
    {{site}}
  </body>
</html>

```

If you try to see the site in the browser you will see a very strange page. Instead of your page now there are two python dictionaries. That's because ``page`` and ``site`` are two dictionaries that are passed to every page, and the templates have to use this information to display the page. We can see that the ``page`` dictionary as a ``content`` field and this is what we use to display what we have written.

The most interesting thing however is the ``site`` dict. In it there is a ``pages`` field containing all the pages of our site. We can use this information to create a header to navigate through the pages. In general everytime you don't know how to add a certain feature to your site you should print what information is available to a page, because most of the things can be done simply using Jinja2 templates.

Let's now modify our template so that we can navigate through our site.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <nav>
      {% for slug in site.pages %}
        {% if url(slug) == page.url%}
          <a href="{{ url(slug) }}" style="color: red">{{site.pages[slug].title}}</a>
        {% else %}
          <a href="{{ url(slug) }}">{{site.pages[slug].title}}</a>
        {% endif %}
      {% endfor %}
    </nav>
    {{page.content|html}}

  </body>
</html>
```

This template is a little more complicated than the previous one. In the navigation part we iterate through each page slug (the slug is the page identifier), then we check if the slug corrisponds to the current page, so that we can style that url differently. Then we create a new link. To print the page title we first have to retrieve the page with its slug, then we print the title.

To obtain the location of the page we pass the slug to the ``url`` function. We could also have used simply the ``url`` field of a page, just like this

```html
<a href="{{ site.pages[slug].url }}">{{site.pages[slug].title}}</a>
```

However this is not recommended, as the url function makes the link absolute instead of relative, and this makes a big difference when the site grows. 
