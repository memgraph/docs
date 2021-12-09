---
id: calling-procedures
title: How to call MAGE procedures? 
sidebar_label: Calling procedures
---

## Syntax for calling procedures

Cypher has a special syntax for calling procedures in loaded query
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