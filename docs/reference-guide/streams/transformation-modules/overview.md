---
id: overview
title: Transformation modules
sidebar_label: Overview
slug: /transformation-modules
---

Memgraph supports user-defined transformations in **C** and **Python**
that act on data received from a streaming engine. These transformations
are grouped into modules called **Transformation modules** which can then
be loaded on startup or later on. A module consists of a transformation, a
query procedure, or both.

This section introduces transformation modules and their similarities
with query modules. Currently, we only support transformations for
Kafka streams but we are aiming to add support for other
streaming engines as well.

## Loading modules on startup

Memgraph attempts to load the modules from all `*.so` and `*.py`
files it finds in the default (`/usr/lib/memgraph/query_modules`) directory.
The `*.so` modules are written using the C API and the `*.py` modules are
written using the Python API. Each file corresponds to one module. Names
of these files will be mapped to module names.  For example, `hello.so`
will be mapped to the `hello` module and a `py_hello.py` script
will be mapped to the `py_hello.py` module.

If you want to change the directory in which Memgraph searches for query
modules, just change the `--query-modules-directory` flag in the main
configuration file (`/etc/memgraph/memgraph.conf`) or supply it as
a command-line parameter (e.g. when using Docker).

## Utility mg transformation

Query procedures that allow the users to gain more insight into other modules and
transformations are written under our utility `mg` query module.
For transformations this module offers:

* `mg.transformations() :: (name :: STRING)`: Lists all transformations
  procedures and their signatures.
* `mg.load(module_name :: STRING) :: ()`: Loads or reloads the given module.
* `mg.load_all() :: ()`: Loads or reloads all modules.

For example, invoking `mg.transformations()` from openCypher like so:

```cypher
CALL mg.transformations() YIELD *;
```

might yield the following result:

```plaintext
+---------------------+-------------------------------------------------------------------+
| name                | signature                                                         |
+---------------------+-------------------------------------------------------------------+
| ...                 | ...                                                               |
| batch.transform     | module.transform :: (query :: STRING, parameters :: MAP)          |
| ...                 | ...                                                               |
+---------------------+-------------------------------------------------------------------+
```

In this case, we can see that Memgraph has already loaded the user-defined transformation
of the module `batch`.

To load a module (named e.g. `hello`) that wasn't loaded on startup (perhaps
because it was added to Memgraph's query modules directory afterward), we
can simply invoke:

```cypher
CALL mg.load("hello");
```

If we wish to reload an existing module, say the `hello` module above, we
again use the same procedure:

```cypher
CALL mg.load("hello");
```

Lastly, if we wish to reload all existing modules and load any newly added ones,
we can use:

```cypher
CALL mg.load_all();
```

For API references, you can also check:

* **[C API](./api/c-api.md)**
* **[Python API](./api/python-api.md)**
