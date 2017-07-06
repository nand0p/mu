# Demo
Watch the 90 second demo below to see mu in action!

![Demo](https://github.com/stelligent/mu/wiki/quickstart/mu-quickstart.gif)

# Steps

* [Install](Installation) mu
* Create a new git repo and clone - `git clone git@github.com:my-github-user/my-app && cd my-app`
* Create a webpage - `vi index.html`

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>Hello World!</body>
</html>
```

* Create Dockerfile - `vi Dockerfile`

```
FROM nginx
COPY index.html /usr/share/nginx/html/index.html
```

* Initialize the `mu.yml` and `buildspec.yml` files: `mu init --port 80 --env`
* Commit and push: `git add --all && git commit -m "mu init" && git push`
* Create the pipeline: `mu pipeline up`
* Show the status of the service: `mu svc show`

