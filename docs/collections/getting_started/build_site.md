---
title: Build the site
index: 3
---
# Build the site

It's finally the time to build the site. There are two ways to do it.

The first one simply generate the site but it does not display it automatically in the browser. Move to the root directory and type in the shell:

```bash
$ python main.py build
```

This will build your site in the _site folder. If you want to view it in the browser you can use a simple web server. With python you can create it by simpy typing in the browser(you must first move to the _site directory):

```bash
$ python -m http.server
```

This is useful when you want to push your static site to your production environment but it is not very useful for editing the site. For this there is another command

```bash
$ python main.py serve
```

This will create a development server that will autoreload when you change any file. It is very useful when modifying the templates. You can also specify which port to bind to using the -p option

```bash
$ python main.py serve -p 4000
```
You can then search in the browser 'localhost:' and the port you have chosen to see the blog.
