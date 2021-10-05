# [memgraph.com/docs](http://memgraph.com/docs/)
[![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/memgraph/docs/blob/master/CONTRIBUTING.md)
![Build
passing](https://img.shields.io/github/workflow/status/memgraph/docs/master/master)
<a href="https://twitter.com/intent/follow?screen_name=memgraphdb"><img
src="https://img.shields.io/twitter/follow/memgraphdb.svg?label=Follow%20@memgraphdb"
alt="Follow @memgraphdb" /></a>

This repository contains the source files and various generators for the
Memgraph documentation available at
[memgraph.com/docs](https://memgraph.com/docs). Since we are writing our
technical documentation using markdown, it is also nicely rendered by GitHub, as
you can see by following [this
link](https://github.com/memgraph/docs/blob/master/docs/overview.md).

## Running locally

### Prerequisites

To run the documentation website locally, you will need to install:
- [Node.js](https://nodejs.org/en/download/) version >= 12.13.0 or above (which
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
npm run-script start
```

By default, a browser window will open at http://localhost:3000.

## Build

Docusaurus is a modern static website generator, so we need to build the website
into a directory of static contents and put it on a web server so that it can be
viewed. First, install all the dependencies with:

```bash
npm install
```

To build the website:

```bash
npm run-script build
```

and contents will be generated within the `/build` directory. To test your build
locally, run:

```bash
npm run-script serve
```

## Contributing

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
