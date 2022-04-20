---
id: overview
title: Query modules overview
sidebar_label: Query modules overview
slug: /reference-guide/query-modules
---

[![Related -
Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](tutorials/implement-custom-query-module-in-python.md)
[![Related - How
to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/query-modules.md)

Memgraph supports extending the query language with user-written procedures in
**C**, **C++**, **Python**, and **Rust**. These procedures are grouped into
modules - **query modules** files (either `*.so` or `*.py` files).

Some query modules are built-in, and others, like those that can help you solve
complex graph issues, are available as part of the MAGE library you can add to
your Memgraph installation. The library is already included if you are using
Memgraph Platform or Memgraph MAGE Docker images to run Memgraph.

You can also implement custom query modules. Every single Memgraph installation
comes with the `example.so` and `py_example.py` query modules located in the
`/usr/lib/memgraph/query_modules` directory. They were provided as examples of
query modules for you to examine and learn from.

Each query module file corresponds to one query module, and file names are
mapped as query module names. For example, `example.so` will be mapped as
`example` module, and `py_example.py` will be mapped as `py_example` module. If
each module file has a procedure called `procedure` defined, those procedures
would be mapped in the Cypher query language as `example.procedure()` and
`py_example.procedure()` respectively.

Regardless of where they come from and who wrote them, all modules need to be
loaded into Memgraph so that they can be called while querying the database.
They are either loaded automatically when Memgraph starts or manually if they
were added while Memgraph was already running.

To learn more about query modules, take a look at the following guides:

- **[Available query modules -
  MAGE](/reference-guide/query-modules/available-query-modules.md)**
- **[Implement custom query
  modules](/reference-guide/query-modules/implement-custom-query-modules/overview.md)**
  using:
  - **[Python
    API](/reference-guide/query-modules/implement-custom-query-modules/api/python-api.md)**
  - **[C
    API](/reference-guide/query-modules/implement-custom-query-modules/api/c-api.md)**
- **[Load and call query
  modules](/reference-guide/query-modules/load-call-query-modules.md)**
- **[Manage module files from
  Memgraph](/reference-guide/query-modules/module-file-utilities.md)**

:::info Available Query Modules

The open-source repository **MAGE (Memgraph Advanced Graph Extensions)**
contains all currently implemented query modules. For more information on all
the available graph algorithms and installation instructions, check out the
**[MAGE documentation](/mage)** page.

:::
