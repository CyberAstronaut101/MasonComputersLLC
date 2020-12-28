# Mason Computers Website

This repo does not serve any websites, but instead holds the project files, builds the static files, and then pushes to github.com/ejmason101/ejmason101.github.com

The project holds the hugo project, the templating engine I am using for (My Website)[https://masoncomputers.com]. The actual repo that is hosting MasonComputers is github.com/ejmason101/ejmason101.github.com.

The ejmason101.github.com repo is a submodule in this project, so when I run the `deply.sh` script, it will run `hugo` to build the static files, add the changes the the ejmason101.github.com repo, and push the changes; thus publishing and new changes to the webstite.

## Repo Setup

See (quickstart)[https://gohugo.io/getting-started/quick-start/] for a quick guide on how to install hugo and get started.

1. Create a new github project that is not in the form `username.github.io`. This git project will house the hugo project.

2. Create a hugo project within the new git repo with `hugo new site <projectName>`

3. Add themes if using (see the quickstart link above)

4. Create a seperate repo with the format `githubUserName.github.io`. This project will be running the github pages and will serve your hugo website.

5. Add the newly created repo as a submodule:

```
git submodule add https://github.com/ejmason101/ejmason101.github.io ./public`
```

6. Create a deploy script, `deploy.sh`, which will build the static files in this repo, push them to the newly added submodule, thus updating your github pages website. 



## Cloning git projects with submodules

If initial clone add `--recursive` flag to `git clone`

Already Cloned: `git submodule update --init`

Cloned with nested submodules: `git submodule update --init --recursive`


## Hugo Theme

The theme for this website is Terminal by [**panr**](https://github.com/panr/hugo-theme-terminal)

I forked the project, then added it as a submodule to the repo via `git submodule add https://github.com/ejmaosn101/hugo-theme-terminal ./themes/terminal`
`
