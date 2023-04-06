---
id: memory-control 
title: Controlling memory usage
sidebar_label: Controlling memory usage 
---

In Memgraph, you can control memory usage by limiting, inspecting and
deallocating memory. 

You can control the memory usage of:
 - a whole instance by setting the `--memory-limit` within the configuration file 
 - a query by including the `QUERY MEMORY` clause at the end of a query
 - a procedure by including a `PROCEDURE MEMORY` clause

## Controlling the memory usage of an instance

By setting the `--memory-limit` flag in the configuration file, you can set
the maximum amount of memory (in MiB) that a Memgraph instance can allocate
during its runtime. If the memory limit is exceeded, only the queries that don't
require additional memory are allowed. If the memory limit is exceeded while a
query is running, the query is aborted and its transaction becomes invalid.

If the flag is set to 0, it will use the default values.
Default values are:
-  90% of the total memory if the system doesn't have swap memory.
-  100% of the total memory if the system has swap memory.

## Controlling the memory usage of a query

Each Cypher query can include the following clause at the end:

```plaintext
QUERY MEMORY ( UNLIMITED | LIMIT num (KB | MB) )
```

If you use the `LIMIT` option, you have to specify the amount of memory a query
can allocate for its execution. You can use this clause in a query only once at
the end of the query. The limit is applied to the entire query.

Examples: 
```plaintext
MATCH (n) RETURN (n) QUERY MEMORY LIMIT 10 KB;
```
```plaintext
MATCH (n) RETURN (n) QUERY MEMORY UNLIMITED;
```
## Controlling the memory usage of a procedure 

Each procedure call can contain the following clause:

```plaintext
PROCEDURE MEMORY ( UNLIMITED | LIMIT num ( KB | MB) )
```

If you use the `LIMIT` option, you can specify the amount of memory that the
called procedure can allocate for its execution. If you use the `UNLIMITED`
option, no memory restrictions will be imposed when the procedure is called. If
you don't specify the clause, the memory limit is set to a default value of 100 MB.

One procedure call can have only one `PROCEDURE MEMORY` clause at the end of the
call. If a query contains multiple procedure calls, each call can have its own
limit specification.

Examples:
```plaintext
CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 KB YIELD result;
```
```plaintext
CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 MB YIELD result;
```
```plaintext
CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY UNLIMITED YIELD result;
```

## Inspecting memory usage

Run the following query to inspect memory usage:

```plaintext
SHOW STORAGE INFO;
```

Find out more about `SHOW STORAGE INFO` query on [Server stats](./server-stats.md).

## Deallocating memory

Memgraph has a garbage collector that deallocates unused objects, thus freeing
the memory. The rate of the garbage collection in seconds can be specified in
the configuration file by setting the `--storage-gc-cycle-sec`.

You can free up memory by using the following query:

```cypher
FREE MEMORY;
```

This query tries to clean up as much unused memory as possible without affecting
currently running transactions.


## Storage modes

Memgraph can work either in an `IN_MEMORY_ANALYTICAL` or
`IN_MEMORY_TRANSACTIONAL` [storage mode](/reference-guide/storage-modes.md). The
`IN_MEMORY_TRANSACTIONAL` is the default storage mode that ensures
strongly-consistent ACID transactions using WAL files and periodic snapshots.

You can reduce memory usage by switching to the `IN_MEMORY_ANALYTICAL` mode in
which Memgraph no longer creates additional memory objects during data
modification, and doesn't provide any ACID guarantees. You can use it for the
initial data import as it also speeds up import up to 6x. 

You can switch between modes within a single session using the `STORAGE MODE
IN_MEMORY_TRANSACTIONAL;` and  `STORAGE MODE IN_MEMORY_ANALYTICAL;` Cypher
queries, but you must have the `STORAGE_MODE` privilege.
