---
title: How to use Pipenv
slug: how-to-use-pipenv
tag: python
description: How to use Pipenv
thumb: 'https://media-site-matheus-nuxt.s3.amazonaws.com/posts/pipenv/thumb/pipenv.jpeg'
content: python
open: 1
en: 1
date: 2023-04-23
---
# How to use pipenv

As many already know, Python has the default package manager
called "pip", with them we can easily install packages for our
projects. However, I consider "pip" to be very simple, having said that it does not create
a virtual environment for the project, making us install the virtualenv package
to create an environment in our project, and to activate this environment we have to navigate
until the activate script.

With this I present the "Pipenv" package manager with it we can install packages,
have a virtual environment all with the same tool.

Installation:

``` shell
pip install pipenv

```

Now that the package has been installed we can simply create a .venv folder
in our directory and start the command:

```shell
pipenv shell

```
![test](https://media-site-matheus-nuxt.s3.amazonaws.com/posts/pipenv/images/venv-shell.png)

With this, we now have an environment already activated, and with two files, Pipfile and Pipfile.lock.
For those familiar with Node.js, these files are equivalent to package.json and
packege-lock.json, the Pipfile is where it contains all the information about packages installed from the
pipenv, as an example of installing a package, let's install flask.

```shell
pipenv install flask
```
![test](https://media-site-matheus-nuxt.s3.amazonaws.com/posts/pipenv/images/flask.png)

We can observe the addition of the flask as a project dependency.
It is worth mentioning that we can also use the freeze command to generate the
requirements.txt so we can share our project with those
that don't use pipenv.

If you liked it, share it!