# Memgraph Docs

This repository contains the source files and various generators for the
Memgraph documentation available at
[docs.memgraph.com](https://docs.memgraph.com). Since we are writing our
technical documentation using markdown, it is also nicely rendered by GitHub as
you can see by following [this
link](https://github.com/memgraph/docs/blob/master/docs/overview.md).

## Contribute to the documentation

If you want to contribute to the documentation, please take a look at
[CONTRIBUTING](CONTRIBUTING.md) guide for details about the writing style and 
main ideas behind the documentation. In case you notice any problems or need additional
information, feel free to [create an issue](https://github.com/memgraph/docs/issues).

## Understanding the documentation structure

If you need to add changes to the **Memgraph DB** documentation, make sure to understand 
the structure of the repository:
* `docs/`: This directory contains the **unreleased** documentation for the next version of Memgraph.
* `memgraph_versioned_docs/`: This directory contains the **latest** and **previous versions** of 
the documentation.
* `sidebarsMemgraph.js`: Used by the **unreleased** documentation to specify the order of 
documents in the sidebar.
* `memgraph_versioned_sidebars/`: This directory contains the sidebars files for the **latest** and 
**previous versions** of the documentation.
+ `memgraph_versions.json`: This file contains a list of all the released version tags.

If you need to update the current documentation make sure to update the appropriate version 
in the `memgraph_versioned_docs/` directory as well as the `docs/` directory. This needs to be done 
because the contents of the `docs/` directory will at some point be frozen as the next version and
saved to the `memgraph_versioned_docs/` directory. 

To find out more about versioning in Docusaurus, visit their [official website](https://docusaurus.io/docs/versioning).

## Running the development server

To preview your changes as you edit the files, you can run a local development server 
that will serve your website and it will reflect the latest changes.

```bash
cd docs
npm run start
```

By default, a browser window will open at http://localhost:3000.

## Build

Docusaurus is a modern static website generator so we need to build the website into a 
directory of static contents and put it on a web server so that it can be viewed. 
To build the website:

```bash
npm run build
```

and contents will be generated within the `/build` directory. 
To test your build locally, run:

```bash
npm run serve
```