## Query Modules

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded on startup.

### Loading Query Modules

Upon startup, Memgraph will attempt to load the query modules form all `*.so`
and `*.py` files it finds in the default (`/usr/lib/memgraph/query_modules`)
directory.

If you want to change the directory in which Memgraph searches for query
modules, just change the `--query-modules-directory` flag in the main
configuration file (`/etc/memgraph/memgraph.conf`) or supply it as
a command-line parameter (e.g. when using Docker).

### Syntax for Calling Procedures

OpenCypher has a special syntax for calling procedures in loaded query
modules:

```opencypher
CALL module.procedure(arg1, arg2, ...) YIELD res1, res2, ...;
```

Each procedure returns zero or more records, where each record contains named
fields. The `YIELD` part is used to select fields we are interested in. If we
are not interested in any fields, the `YIELD` part can be omitted.

Procedures may be called standalone as the above, or as a part of a
larger query. This is useful if we want the procedure to work on data the
query is producing. For example:

```opencypher
MATCH (node) CALL module.procedure(node) YIELD result RETURN *;
```

When we use `CALL` in a larger query, we have to explicitly
`RETURN` from the query to get the results. Naturally, the `RETURN` is not
needed if we perform updates after `CALL`. This follows the openCypher
convention that read-only queries need to end with a `RETURN`, while queries
which update something don't need to `RETURN` anything.

If a procedure returns a record with a field name that may clash with some
variable we already have in a query, that field name can be aliased into some
other name. For example:

```opencypher
MATCH (node) CALL module.procedure(42) YIELD node AS result RETURN *;
```

### Controlling Procedure Memory Usage

When running a procedure, Memgraph controls the maximum memory usage that the
procedure may consume during its execution.  By default, the upper memory limit
when running a procedure is `100 MB`.  If your query procedure requires more
memory to be able to yield its results, you can increase the memory limit using
the following syntax:

```opencypher
CALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 KB YIELD res1, res2, ...;
CALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 MB YIELD res1, res2, ...;
CALL module.procedure(arg1, arg2, ...) MEMORY UNLIMITED YIELD res1, res2, ...;
```

The limit can either be specified to a specific value (either in `KB` or in
`MB`), or it can be set to unlimited.

### Implementing Query Modules

Query modules can be implemented by either using the C API or Python API
provided by Memgraph.

Modules implemented using the C API need to be compiled to a shared library
(`.so` file), so they can be loaded when Memgraph starts.  The C API is well
documented in the `/usr/include/memgraph/mg_procedure.h` header.

Modules implemented using the Python API need to be written in Python version
`3.5.0` and above. The Python API is well documented in the
`/usr/lib/memgraph/python_support/mgp.py` file.

WARNING: If your programming language of choice throws exceptions, these
exceptions must never leave the scope of your module! You should have a top
level exception handler which returns with an error value and potentially logs
the error message. Exceptions which cross the module boundary will cause all
sorts of unexpected issues.

For a more detailed example on how to implement your own query modules, we
suggest you take a look at this [how-to
guide](../how_to_guides/use-and-implement-query-modules.md).

### Query Modules Provided by Memgraph

The following query modules have been implemented by the Memgraph
team. Note that some of them are only available in Memgraph's Enterprise
offering.

* `mg`: Utility module that offers more insight into custom query modules.
* `louvain` [Enterprise]: Louvain algorithm for community detection.
* `connectivity` [Enterprise]: Algorithms that analyse graph connectivity.
* `nxalg` : Wrapper functions providing the most common algorithms found
            in the NetworkX package. The users can extend the module with
            their own custom functions based on NetworkX algorithms.

NOTE:
If you intend to implement your custom algorithms based on the NetworkX package,
please note that we provide the extra library `mgp_networkx.py` module
containing data structures that adapt the native graph for use with NetworkX
algorithms. It can be used to implement custom algorithms with the added benefit of
better memory usage.


The utility module offers the following functionality:

* `mg.procedures() :: (name :: STRING, signature :: STRING)`: Lists loaded
  procedures and their signatures.
* `mg.reload(module_name :: STRING) :: ()`: Reloads the given module.
* `mg.reload_all() :: ()`: Reloads all loaded modules.

To get a detailed list of all procedures from all modules, run the following
query:

```
CALL mg.procedures() YIELD *;
```

In addition to low-level modules listed above, the Memgraph Community offering
provides the following Python modules based on
[NetworkX](https://networkx.github.io/) algorithms.

* `graph_analyzer`: Module that offers more insights about the stored graph. To
  get a detailed list of provided functionalities within this module run
  `CALL graph_analyzer.help() YIELD *;`.
* `wcc`: Module that offers analysis of weakly connected components.

For more detailed examples on how to use each of these query modules, we
suggest you take a look at this
[how-to-guide](../how_to_guides/use-query-modules-provided-by-memgraph.md)
