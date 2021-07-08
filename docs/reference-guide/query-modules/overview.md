---
id: overview
title: Query modules overview
sidebar_label: Overview
slug: /reference-guide/query-modules
---

Memgraph supports extending the query language with user-written procedures in **C**, **C++**, **Python**, and **Rust**.
These procedures are grouped into modules - **Query modules**, which can then be loaded on startup or later on.
To learn more about query modules take a look at the following guides:

* **[Implemented query modules - MAGE](/reference-guide/query-modules/available-query-modules.md)**
* **[Load and call query modules](/reference-guide/query-modules/load-call-query-modules.md)**
* **[Implement custom query modules](/database-functionalities/query-modules/implement-query-modules.md)**

You can also check out detailed descriptions of the query modules API:
* **[Python API](/reference-guide/query-modules/api/python-api.md)**
* **[C API](/reference-guide/query-modules/api/c-api.md)**

:::info Available Query Modules
The open-source repository **MAGE (Memgraph Advanced Graph Extensions)** contains all currently implemented query modules. For more information on all the graph algorithms that are available and installation instructions, check out the **[MAGE documentation](/mage)** page.
:::