# ae-logo-component

Build a component for the [adaept](www.stenciljs.com) logo following [this](https://www.twilio.com/blog/2018/02/creating-and-publishing-web-components-with-stencil.html) guide as a model.

## Change the default save prefix for projects

```bash
npm config set save-prefix="~"
```

The tilde (~) is more conservative than what npm defaults to, the caret (^), when installing a new package with the --save or --save-dev flags. The tilde pins the dependency to the minor version, allowing patch releases to be installed with npm update. The caret pins the dependency to the major version, allowing minor releases to be installed with npm update.

## Create the project on GitHub

**Manually** create a blank `ae-logo-component` project on GitHub.
To avoid errors, do not initialize the new repository with README, license, or gitignore files.

## Create the local Git project folder

Open Git Bash then change the current working directory to the local project and initialize the local directory as a Git repository.

```bash
mkdir ae-logo-component
cd ae-logo-component
git init
```

## Initialize the component project

```bash
npm init -y
npm install @stencil/core -S
npm install @stencil/utils -D
```

Add the .gitignore from Stencil and a suitable license file.

Add files to the local repository. This stages them for the first commit.

```bash
git add .
```

Make the initial commit.

```bash
git commit -m "initial commit"
```

Add the URL for the remote repository where the local repository will be pushed, then verify the remote URL.

```bash
git remote add origin https://github.com/peterennis/ae-logo-component.git
git remote show origin
```

Push the changes in the local repository to GitHub.

```bash
git push origin master
```

The initial commit in GitHub is [here](https://github.com/peterennis/ae-logo-component/commit/241960a3419e3b9a3c815b6adfcaf42bcef41dfb).
