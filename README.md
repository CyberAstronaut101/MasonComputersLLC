# Mason Computers Website

This repo holds the hugo project, and uses two submodules to store the theme and the `ejmason101.github.io` repo that the built static files will be published to. 


## GitHub Pages - ejmason101.github.io

located at `/public` this submodule is the repo `ejmason101.github.io` added as a submodule via `git submodule add https://github.com/ejmason101/ejmason101.github.io /public`

When working on the local version, once I have new features I want to publish `./deploy.sh` is called:

```
#!/bin/sh

# If a command fails then the deploy stops
set -e

printf "\033[0;32mDeploying updates to GitHub...\033[0m\n"

# Build the project.
hugo -t terminal # if using a theme, replace with `hugo -t <YOURTHEME>`

# Go To Public folder
cd public

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

```

which will build the hugo project into /public -> then commit and push the new version to `ejmason101.github.io` for the changes to start serving.


## Hugo Theme

The theme for this website is Terminal by [**panr**](https://github.com/panr/hugo-theme-terminal)

I forked the project, then added it as a submodule to the repo via `git submodule add https://github.com/ejmaosn101/hugo-theme-terminal ./themes/terminal`

