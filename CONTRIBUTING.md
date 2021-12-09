# How to work with Memgraph Docs

Below, you can find simple instructions on how to run the documentation server
locally, how to make sensible pull requests, and work with the DevRel team to
make the Memgraph documentation awesome!

This guide only contains the most basic instructions, but if you need more
functionalities, you can always take a look at the **[Docusaurus
documentation](https://docusaurus.io/docs/2.0.0-beta.1/docs-introduction)**.

## Table of contents

- [How to work with Memgraph Docs](#how-to-work-with-memgraph-docs)
  - [Table of contents](#table-of-contents)
  - [Updating the documentation](#updating-the-documentation)
  - [Documentation structure](#documentation-structure)
  - [Some general rules and advice](#some-general-rules-and-advice)
  - [Markdown files](#markdown-files)
  - [Changing and redirecting URLs](#changing-and-redirecting-urls)
  - [Publishing a new version](#publishing-a-new-version)

## Updating the documentation

If you want to make changes to the documentation, create a new branch and make
the appropriate changes in both the `docs/` and `memgraph_versioned_docs/`
directory. Now, you can create a pull request to merge these changes into the
`master` branch. For example:

- If you are working on the documentation for a **new release** of Memgraph,
  then the changes should only be applied to the `docs/` directory, which
  contains the content for the **next** version.
- ⚠️ If you are **fixing an error**, then please apply the same changes in the
  **current version** (`memgraph_versioned_docs/`) as well as the **unreleased
  version** (`/docs`). ⚠️

## Documentation structure

If you need to add changes to the **Memgraph** documentation, make sure to
understand the structure of the [repository](https://github.com/memgraph/docs):

- `cloud/`: The documentation for Memgraph Cloud (*unreleased currently*).
- `cypher-manual/`: Articles about the Cypher query language.
- `docs/`: This directory contains the **unreleased** documentation for the next
  version of Memgraph.
    - `concepts/`: Articles within the concepts section serve as an in-depth
      introduction into the inner workings of Memgraph. These tend to be quite
      technical in nature and are recommended for advanced users and other graph
      database enthusiasts.
    - `database-functionalities/`: This section contains more tutorial/guide
      related articles that describe how to accomplish specific tasks (how to
      create a backup, how to implement a query module, etc.)
    - `reference-guide/`: This section is the **source of truth** for all the
      functionalities Memgraph offers. Everything that we know about the system
      should be reflected here.
    - `tutorials/`: Tutorials are meant for mastering Cypher and graph analytics
      in general.
- `help-center/`: The help center section of the documentation.
- `lab/`: The documentation for Memgraph Lab (*not finished*).
- `mage/`: The documentation for MAGE.
- `memgraph_versioned_docs/`: This directory contains
  the **latest** and **previous versions** of the documentation. If you need to
  make changes to a specific version, this is the right place.
- `memgraph_versioned_sidebars/`: This directory contains the sidebar files for
  the **latest** and **previous versions** of the documentation.
- `memgraph_versions.json`: This file contains a list of all the released
  version tags. Don't edit this file directly.
- `sidebarsMemgraph.js`: Used by the **unreleased** documentation to specify the
  order of documents in the sidebar.

If you need to update the current documentation, make sure to update the
appropriate (most often the latest) version in
the `memgraph_versioned_docs/` directory as well as the `docs/` directory. This
needs to be done because the contents of the `docs/` directory will at some
point be frozen as the next version and saved to
the `memgraph_versioned_docs/` directory with a new tag.

To find out more about versioning in Docusaurus, visit their [official
website](https://docusaurus.io/docs/versioning).

## Some general rules and advice

- Only the first word in a sentence should be upper case. **Don't try to stylize
  headings** with random uppercase letters.
- The first file in each subdirectory should be the **overview.md** file, and it
  should indicate what the directory contains (for example, the [Query
  modules](https://memgraph.com/docs/memgraph/reference-guide/query-modules)
  section). This is not always the best solution (the [OS
  installation](https://memgraph.com/docs/memgraph/install-memgraph-on-linux-docker)
  sections), but it makes it easier for users to explore unknown
  functionalities. If you think that in your case, it's not needed and would do
  more harm than good, ask the DevRel team for help.
- If you **don't see your changes**:
    - Check if the correct version is selected in the navbar;
    - If the build process finished without errors;
    - If you added new files to the correct sidebar.

## Markdown files

At the beginning of each markdown file, you can add the following fields:

- **id** The **id** is by default set to the name of the file (minus the
  extension), but it's still best to explicitly define it.
- **title** This is the title of the document, so don't use the markdown
  *Heading 1* notation *(**#)*** anywhere in the document. The highest-ranked
  heading in the file should be *Heading 2 (##)*.
- **sidebar_label** The sidebar label should be the same as the title unless the
  title is too long. The only exception is the **overview.md** file which should
  have the sidebar label *Overview* and a more fitting title (for example,
  *Query modules*, *Tutorials*...)
- **slug** (optional) This is the URL of the document. Most often, you only need
  to define them explicitly for **overview.md** files. For example, the default
  URL for the file `/memgraph/reference-guide/query-modules/overview.md`  would
  be
  [memgraph.com/docs/memgraph/reference-guide/query-modules/overview](http://memgraph.com/docs/memgraph/reference-guide/query-modules/overview),
  but it would make more sense to omit the *overview* part at the end.

## Changing and redirecting URLs

Whenever you change the **`slug`** attribute of a markdown page in the
documentation, add an appropriate record at the end of the
`docusaurus.config.js` file. This record should indicate how the old URL is
redirected when the changes are published. For example:

```jsx
{
    to: '/memgraph/import-data',
    from: ['/memgraph/how-to-guides-overview/import-data',],
},
```

## Publishing a new version

Once you are satisfied with the changes for the new release of Memgraph, you can
freeze the contents of the `docs/` directory and create a new version of the
documentation.

1. First, to make sure that everything is working properly, build the
   documentation and check for errors in the terminal: `npm run-script build`
2. Run the following command to create the new version: `docs:version:memgraph
   version_tag`

For example, the `version_tag` could be `2.0.0`.
