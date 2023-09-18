Memgraph's documentation has been transfered to the [`memgraph/documentation`](https://github.com/memgraph/documentation) repository. For that reason the `docs` repository has been **archived**.

The DX team <br/>
September 18th, 2023

<h1 align="center"><a href="https://memgraph.com/docs/">Memgraph Documentation</a></h1>

<p align="center">
  <a href="https://github.com/memgraph/docs">
    <img src="https://img.shields.io/github/actions/workflow/status/memgraph/docs/deploy.yml" alt="build" title="build"/>
  </a>
  <a href="https://memgraph.com/docs/" alt="Documentation">
    <img src="https://img.shields.io/badge/documentation-Memgraph-orange" />
  </a>
  <a href="https://github.com/memgraph/docs/blob/master/CONTRIBUTING.md" alt="PRs Welcome">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
  </a>
</p>

<p align="center">
  <a href="https://memgr.ph/join-discord">
    <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/>
  </a>
  <a href="https://stackoverflow.com/questions/tagged/memgraphdb">
    <img src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white" alt="Stack Overflow"/>
  </a>
</p>

<p align="center">
  <a href="https://memgraph.com/docs">
    <img src="https://public-assets.memgraph.com/github-readme-images/docs.memgraph-browser.png" 
         alt="memgraph-docs" 
         title="memgraph-docs"
         style="width: 60%"/>
  </a>
</p>

This repository contains the source files and various generators for the
Memgraph documentation available at
[memgraph.com/docs](https://memgraph.com/docs). Since we are writing our
technical documentation using markdown, it is also nicely rendered by GitHub, as
you can see by following [this
link](https://github.com/memgraph/docs/blob/master/docs/overview.md).

## :hammer_and_wrench: Running docs locally

### Prerequisites

To run the documentation website locally, you will need to install:

- [Node.js](https://nodejs.org/en/download/) version >= 16.0.0 or above (which
  can be checked by running `node -v`). You can use
  [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a
  single machine installed.

### Running the development server

To preview your changes as you edit the files, you can run a local development
server that will serve your website, and it will reflect the latest changes.
First, install all the dependencies with:

```bash
npm install
```

Start the server with:

```bash
npm run start
```

By default, a browser window will open at
[http://localhost:3000](http://localhost:3000).

## :construction: Build

Docusaurus is a modern static website generator, so we need to build the website
into a directory of static contents and put it on a web server so that it can be
viewed. First, install all the dependencies with:

```bash
npm install
```

To build the website:

```bash
npm run build
```

and contents will be generated within the `/build` directory. To test your build
locally, run:

```bash
npm run serve
```

## :writing_hand: Contributing

We are grateful for any community contributions to the documentation as they are
the best way of improving the overall user experience. If at any point you
believe that something is misleading, could be worded better, or is missing
additional information, then please feel free to make a pull request or report
an [issue](https://github.com/memgraph/docs/issues).

### Contributing guide

If you want to contribute to the documentation, please take a look at
[CONTRIBUTING](./CONTRIBUTING.md) guide. It contains a detailed overview of the
documentation structure and instructions on how to specifically make changes to
the content.

For more information about the writing style and the main ideas behind the
documentation structure, take a look at the [WRITING STYLE](./WRITING_STYLE.md)
guide.
