---
title: Writing posts
index: 2
---

# Writing posts

## Generate the basic structure

Before you can generate your blog using Kart, you first need to write the templates and the static files. Fortunately there is a simple command with which you can generate this files automatically. Head over to your root repository and type in the shell this command.

```bash
$ python -m kart init
```

This has generated some folders. The one that interests one is the collections folder.

## Write your first post

Look at the collections folder. There are two subfolders: posts and tags. Create a markdown file in the posts folder. You can name it whatever you like(the file name will be used by Kart to generate the slug for the post).

The first thing you want to do when you write a post is choosing the title. It is also useful to add other type of information about the post, such as the date, the description or whether it is a draft or not. This type of information is called metadata. You can add metadata by using front matters. Front matter is a snippet of YAML which sits between two triple-dashed lines at the top of a file.

```yaml
---
title: My first post
date: YYYY/MM/DD
description: This is my first post
draft: False
---
```
The title and date fields are mandatory, while the others are completely optional. If you set the draft flag to true the blog will not be processed.

Everything you write under the front matter is just markdown. It will be converted to html by kart and displayed in the finished site. Try writing some posts before moving to the next section.

```yaml
---
title: My first post
date: YYYY/MM/DD
description: This is my first post
draft: False
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```
