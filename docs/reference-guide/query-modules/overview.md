---
id: overview
title: Query modules overview
sidebar_label: Query modules overview
slug: /reference-guide/query-modules
---

Memgraph supports extending the query language with user-written procedures in
**C**, **C++**, **Python**, and **Rust**. These procedures are grouped into
modules - **query modules** files (either `*.so` or `.py` files).

Some query modules are built-in and other, like those that can help you solve
complex graph issues, are available as part of the MAGE library you can add to
you Memgraph installation. If you are using Memgraph Platform or Memgraph MAGE
Docker images to run Memgraph the library is already included.

You can also implement custom query modules. Every single Memgraph installation
comes with the `example.so` and `py_example.py` query modules located in the
`/usr/lib/memgraph/query_modules` directory. They were provided as examples of
query modules for you to examine and learn from. 


Each query module file corresponds to one query module and file names are
mapped as query module names. For example, `example.so` will be mapped as
`example` module and `py_example.py` will be mapped as `py_example` module. If
each module file has a procedure called `procedure` defined those procedures
would be mapped in Cypher query language as `example.procedure()` and
`py_example.procedure()` respectively. 

Regardless of where they come from and who wrote them, all modules need to be
loaded into Memgraph so that they can be called while querying the database.
They are either loaded automatically when Memgraph starts, or manually if they
were added while Memgraph was already running. 

To learn more about query modules take a look at the following guides:

* **[Available query modules -
  MAGE](/reference-guide/query-modules/available-query-modules.md)**
* **[Implement custom query
  modules](./query-modules/implement-custom-query-modules/overview)** using:
  *  **[Python API](./query-modules/implement-custom-query-modules/python-api)**
  *  **[C API](./query-modules/implement-custom-query-modules/c-api)**
* **[Load and call query
  modules](/reference-guide/query-modules/load-call-query-modules.md)**
* **[Manage module files from
  Memgraph](/reference-guide/query-modules/module-file-utilities.md)**


:::info Available Query Modules
The open-source repository **MAGE (Memgraph
Advanced Graph Extensions)** contains all currently implemented query modules.
For more information on all the graph algorithms that are available and
installation instructions, check out the **[MAGE documentation](/mage)** page.
:::