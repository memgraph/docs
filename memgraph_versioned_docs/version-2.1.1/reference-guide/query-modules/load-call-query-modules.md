---
id: load-call-query-modules
title: Load and call custom query modules
sidebar_label: Load and call custom query modules
---

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded on startup.

## Loading query modules on startup

The Memgraph installation comes with the `example.so` and `py_example.py` query
modules which are located in `/usr/lib/memgraph/query_modules` directory.
Assuming the standard installation on Debian, you would run Memgraph with the
following command:

```plaintext
systemctl start memgraph
```

When using Docker, the equivalent would be the following:

```plaintext
docker run -it -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph/memgraph-platform
```

Memgraph will now attempt to load the query modules from all `*.so` and `*.py`
files it finds in the default (`/usr/lib/memgraph/query_modules`) directory.
The `*.so` modules are written using the C API and the `*.py` modules are
written using the Python API. Each file corresponds to one query module. Names
of these files will be mapped to query module names.  So in our case, we have
an `example.so` which will be mapped to `example` module and a `py_example.py`
which will be mapped to `py_example` module in the query language.

Each query module can define multiple procedures. Both of our examples define
a single procedure creatively named `procedure`.

If you want to change the directory in which Memgraph searches for query
modules, just change the `--query-modules-directory` flag in the main
configuration file (`/etc/memgraph/memgraph.conf`) or supply it as
a command-line parameter (e.g. when using Docker).

## Utility query module

Query procedures that allow the users to gain more insight into other query
modules and their procedures are written under our utility `mg` query module.
This module offers three procedures with the following signatures:

* `mg.procedures() :: (name :: STRING, signature :: STRING)`: Lists loaded
  procedures and their signatures.
* `mg.load(module_name :: STRING) :: ()`: Loads or reloads the given module.
* `mg.load_all() :: ()`: Loads or reloads all modules.

For example, invoking `mg.procedures()` from openCypher like so:

```cypher
CALL mg.procedures() YIELD *;
```

might yield the following result:

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

## Syntax for calling procedures

OpenCypher has a special syntax for calling procedures in loaded query
modules. For example:

```cypher
CALL example.procedure("string-argument") YIELD args, result;
```

Each procedure returns zero or more records, where each record contains named
fields. The `YIELD` part is used to select fields we are interested in. If we
are not interested in any fields, the `YIELD` part can be omitted. The
procedure will still run in such a case, but the record fields will not be
stored in variables. In the above example, we assume that `example.procedure`
will produce a record with 2 fields, `args` and `result`. Trying to `YIELD`
fields that are not part of the produced record will result in an error.

Procedures may be called standalone as in the above example, or as a part of a
larger query. This is useful if we want the procedure to work on data the
query is producing. For example:

```cypher
MATCH (node) CALL example.procedure(node) YIELD result RETURN *;
```

Unfortunately, when we use `CALL` in a larger query, we have to explicitly
`RETURN` from the query to get the results. Naturally, the `RETURN` is not
needed if we perform updates after `CALL`. This follows the openCypher
convention that read-only queries need to end with a `RETURN`, while queries
which update something don't need to `RETURN` anything.

If a procedure returns a record with a field name that may clash with some
variable we already have in a query, that field name can be aliased into some
other name. For example:

```cypher
MATCH (result) CALL example.procedure(42) YIELD result AS procedure_result RETURN *;
```

## Controlling procedure memory usage

When running a procedure, Memgraph controls the maximum memory usage that the
procedure may consume during its execution.  By default, the upper memory limit
when running a procedure is `100 MB`.  If your query procedure requires more
memory to be able to yield its results, you can increase the memory limit using
the following syntax:

```cypher
CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 KB YIELD result;
CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 MB YIELD result;
CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY UNLIMITED YIELD result;
```

The limit can either be specified to a specific value (either in `KB` or in
`MB`), or it can be set to unlimited.
