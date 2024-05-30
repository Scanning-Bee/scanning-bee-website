<h1 align="center">Scanning Bee Website</h1>

<p align="center">
    <a href="#overview">Overview</a> |
    <a href="#development">Development</a>
</p>

<p align="center">  
    <br/>
    The starting page for everything related to Scanning Bee.
    <br/>
    <br/>
</p>

---

# Overview

This repository contains the source code for the [Scanning Bee website](https://scanning-bee.github.io). The site is written using [SvelteKit](https://svelte.dev), [TypeScript](https://typescriptlang.org/) and [SCSS](https://sass-lang.com).

## Codebase Structure

```
.
├──build                  // Contains the built website, ready for deployment.
├──static                 // Contains static assets including branding, images, fonts, etc...
|  ├──download-sources    // Media files used in the download section of the website.
|  ├──fonts               // Static font files loaded by the website.
|  ├──logos               // External branding and logo files used in the website.
|  ├──screenshots         // Screenshots and renders of the app used in the website.
|  └──ui                  // Images other than branding used in the website's user interface.
└──src                    // The website's source code.
   ├──lib                 // Re-usable Svelte components used within the website.
   ├──layout              // Components responsible for defining page layout, such as headers, footers, page sections, etc...
   ├──routes              // SvelteKit's filesystem-based routes. Anything in the folder is registered as a URL on build time.
   |  ├──docs             // Documentation and associated files.
   |  └──blog             // Blog page and associated files.
   |     └──posts         // Folder containing blog posts in Markdown format.
   ├──data                // Data storage used across various components and routes. NOT stores, just exported variables.
   └──styles              // SCSS styles that are NOT tied to components in /lib.
```

---

# Development

## GitHub Codespaces

You can develop this project using GitHub Codespaces.
For this, click on the "Code" button on the main GitHub page of this repository.

Then click on "Codespaces" and then on "Create codespace on main".

After the Codespace has initialized, you can run `pnpm dev` and are ready to go!

## Local development

### Prerequisites

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) with `npm`.
- [`pnpm`](https://pnpm.io)
- Shell of your choice.

### Building

#### 1: Clone the repository.

```ps
git clone https://github.com/y4nci/scanning-bee-website && cd scanning-bee-website
```

This will create a local copy of this repository and navigate you to the root folder of the repository.

#### 2: Install Dependencies

Run this command at the root folder to install dependencies:

```ps
pnpm i
```

#### 3: Run Build Script

To build the site in development mode, simply run the following command:

```ps
pnpm run dev
```

## Additional Scripts

### Linting

This project uses [prettier](https://prettier.io) and [eslint](https://eslint.org/). Run this command to lint your changes:

```ps
pnpm run lint
```

Additionally, we use [lint-staged](https://github.com/okonet/lint-staged) to automatically format all changed files before committing them, ensuring that all code is formatted consistently.

### Compiling & Distribution

To simply build a production bundle, use the following script:

```ps
pnpm run build
```

> Alternatively, to preview your changes in a production-like build, use `pnpm run preview`.
