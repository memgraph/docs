---
id: loading-modules
title: How to load MAGE query modules? 
sidebar_label: Loading query modules
---

## Loading query modules

When started, Memgraph will **automatically attempt to load** the query modules
from all `*.so` and `*.py` files it finds in the default
`/usr/lib/memgraph/query_modules` directory. The `*.so` modules are written
using the C API and the `*.py` modules are written using the Python API. Each
file corresponds to one query module with a bunch of different procedures within them. 
The names of these files will be mapped to the query module names. For example, a procedure 
`node_connectivity` in `nxalg.py` will be mapped to `nxalg.node_connectivity()`
in the Cypher query language.

If you want to change the directory in which Memgraph searches for query
modules, just change the `--query-modules-directory` flag in the main
configuration file (`/etc/memgraph/memgraph.conf`) or supply it as a
command-line parameter when running Memgraph (e.g. when using Docker).

### Utility query module

Query procedures that allow the users to gain more insight into other query
modules and their procedures are written under the utility query module named `mg`.
This module offers three procedures with the following signatures:

* `mg.procedures() :: (name :: STRING, signature :: STRING)`: Lists loaded
  procedures and their signatures.
* `mg.load(module_name :: STRING) :: ()`: Loads or reloads the given module.
* `mg.load_all() :: ()`: Loads or reloads all query modules.

For example, invoking `mg.procedures()` with Cypher looks like this:

```cypher
CALL mg.procedures() YIELD *;
```

The result will be similar to the following:

```plaintext
+---------------------+-------------------------------------------------------------------+
| name                | signature                                                         |
+---------------------+-------------------------------------------------------------------+
| ...                 | ...                                                               |
| graph_analyzer.help | graph_analyzer.help() :: (name :: STRING, value :: STRING)        |
| mg.load             | mg.load(module_name :: STRING) :: ()                              |
| mg.load_all         | mg.load_all() :: ()                                               |
| mg.procedures       | mg.procedures() :: (name :: STRING, signature :: STRING)          |
| ...                 | ...                                                               |
+---------------------+-------------------------------------------------------------------+
```

In this case, we can see that Memgraph has successfully loaded all the procedures implemented 
in query modules including the utility query procedures.

To load a module (named e.g. `hello`) that wasn't loaded on startup (perhaps
because it was added to Memgraph's query modules directory afterwards), we
can simply invoke:

```cypher
CALL mg.load("hello");
```

If we wish to reload an existing module, say the `graph_analyzer` module above, we
again use the same procedure:

```cypher
CALL mg.load("graph_analyzer");
```

Lastly, if we wish to reload all existing modules and load any newly added ones
we can use:

```cypher
CALL mg.load_all();
```
