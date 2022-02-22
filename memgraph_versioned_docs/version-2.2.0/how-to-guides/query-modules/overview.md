---
id: overview
title: How to use query modules
sidebar_label: Query modules overview
slug: /how-to-guides/query-modules
---

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded on startup.

:::note
For detailed technical information on query modules, check out the
[reference guide](/reference-guide/query-modules/overview.md).
:::

## Loading query modules

Upon startup, Memgraph will attempt to load the query modules form all `*.so`
and `*.py` files it finds in the default (`/usr/lib/memgraph/query_modules`)
directory.

If you want to change the directory in which Memgraph searches for query
modules, just change the `--query-modules-directory` flag in the main
configuration file (`/etc/memgraph/memgraph.conf`) or supply it as a
command-line parameter (e.g. when using Docker).

## Avilable query modules

**MAGE**, also known as **Memgraph Advanced Graph Extensions**, is an
open-source repository that contains graph algorithms in the form of **query
modules** written by the team behind Memgraph and its users. You can find and
contribute implementations of various algorithms in multiple programming
languages, all runnable inside Memgraph.

:::info MAGE Documentation
Check out the **[MAGE documentation](/mage)** for a
detailed overview of all the available modules and installation instructions.
:::

:::info MAGE Source code
Check out the **[MAGE source
code](https://github.com/memgraph/mage)** on GitHub if you are interested in the
underlying implementation.
:::

## Syntax for calling procedures

OpenCypher has a special syntax for calling procedures in loaded query modules:

```cypher
CALL module.procedure(arg1, arg2, ...) YIELD res1, res2, ...;
```

Each procedure returns zero or more records, where each record contains named
fields. The `YIELD` part is used to select fields we are interested in. If the
procedure doesn't return any fields, then the `YIELD` part can be omitted.

Procedures may be called standalone as the above, or as a part of a larger
query. This is useful if we want the procedure to work on data the query is
producing. For example:

```cypher
MATCH (node) CALL module.procedure(node) YIELD result RETURN *;
```

For **writeable procedures** we have some other limitations also:

* the rest of the query has to be read-only
* the writeable procedure call has to be the last cause in the query apart from
  the `RETURN` clause. The last example also works with writeable procedures
  because it satisfies all of these requirements.

When we use `CALL` in a larger query, we have to explicitly `RETURN` from the
query to get the results. Naturally, the `RETURN` is not needed if we perform
updates after `CALL` or the called procedure is a writeable procedure. This
follows the openCypher convention that read-only queries need to end with a
`RETURN`, while queries which update something don't need to `RETURN` anything.

If a procedure returns a record with a field name that may clash with some
variable we already have in a query, that field name can be aliased into some
other name. For example:

```cypher
MATCH (node) CALL module.procedure(42) YIELD node AS result RETURN *;
```

## Controlling procedure memory usage

When running a procedure, Memgraph controls the maximum memory usage that the
procedure may consume during its execution.  By default, the upper memory limit
when running a procedure is `100 MB`.  If your query procedure requires more
memory to be able to yield its results, you can increase the memory limit using
the following syntax:

```cypher
CALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 KB YIELD res1, res2, ...;
CALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 MB YIELD res1, res2, ...;
CALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY UNLIMITED YIELD res1, res2, ...;
```

The limit can either be specified to a specific value (either in `KB` or in
`MB`), or it can be set to unlimited.

## Implementing custom query modules

Query modules can be implemented by either using the C API or Python API
provided by Memgraph.

Modules implemented using the C API need to be compiled to a shared library
(`.so` file), so they can be loaded when Memgraph starts.  The C API is well
documented in the `/usr/include/memgraph/mg_procedure.h` header and in the
[reference guide](/reference-guide/query-modules/api/c-api/overview.md).

Modules implemented using the Python API need to be written in Python version
`3.5.0` and above. The Python API is well documented in the
`/usr/lib/memgraph/python_support/mgp.py` file and in the [reference
guide](/reference-guide/query-modules/api/python-api.md).

:::warning
If your programming language of choice throws
exceptions, these exceptions must never leave the scope of your module! You
should have a top level exception handler which returns with an error value and
potentially logs the error message. Exceptions which cross the module boundary
will cause all sorts of unexpected issues.
:::

For a more detailed example on how to implement your own query modules, we
suggest you take a look at the [Implement custom query
modules](/how-to-guides/query-modules/implement-query-modules.md)
guide.
