---
id: loading-modules
title: How to load MAGE query modules?
sidebar_label: Loading query modules
---

import Loading from '../../docs/templates/query-modules/\_loading_query_modules.mdx';

Query modules can be written using C API (thus creating `.so` modules), and
Python API (thus creating `*.py`) modules. Each file corresponds to one query
module with one or more procedures within them. The names of these files will be
mapped to the query module names. For example, a procedure `node_connectivity`
in `nxalg.py` will be mapped to `nxalg.node_connectivity()` in the Cypher query
language.

## Loading query modules

<Loading/>

## Utility query module

Built-in utility query module (`mg`) contains procedures that enable you to
manage query modules files.

## General procedures

Here is the list of procedures from the `mg` query module that can be used with
all other query module files, and their signatures:

| Procedure                                                         | Description                                   |
| ----------------------------------------------------------------- | --------------------------------------------- |
| `mg.procedures() -> (name\|STRING, signature\|STRING)`            | Lists loaded procedures and their signatures. |
| `mg.load(module_name\|STRING) -> ()`                              | Loads or reloads the given module.            |
| `mg.load_all() -> ()`                                             | Loads or reloads all modules.                 |

### `mg.procedures`

Lists loaded procedures and their signatures.

Example of a Cypher query:

```cypher
CALL mg.procedures() YIELD *;
```

Example of a result:

```nocopy
+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+
| is_editable | name                | path              | signature                                                                                                             |
+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+
| ...         | ...                 | ...               | ...                                                                                                                   |
| true        | graph_analyzer.help | "/path/to/module" | graph_analyzer.help() :: (name :: STRING, value :: STRING)                                                            |
| false       | mg.load             | "builtin"         | mg.load(module_name :: STRING) :: ()                                                                                  |
| false       | mg.load_all         | "builtin"         | mg.load_all() :: ()                                                                                                   |
| false       | mg.procedures       | "builtin"         | mg.procedures() :: (name :: STRING, signature :: STRING, is_write :: BOOLEAN, path :: STRING, is_editable :: BOOLEAN) |
| ...         | ...                 | ...               | ...                                                                                                                   |
+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+
```

### `mg.load_all`

Loads or reloads the given module.

Example of a Cypher query:

```cypher
CALL mg.load_all();
```

If the response is `Empty set (x.x sec)` and there are no error messages, the
update was successful.

### `mg.load`

Loads or reloads all modules.

Example of a Cypher query:

```cypher
CALL mg.load("py_example");
```

If the response is `Empty set (x.x sec)` and there are no error messages, the
update was successful.
