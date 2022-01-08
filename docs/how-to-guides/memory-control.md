---
id: memory-control 
title: Memory control
sidebar_label: Control memory usage 
---

Memgraph provides some useful tools which allow you to limit, inspect, and free allocated memory.

### Configuration option `--memory-limit`

Through your config file, you can set the maximum amount of memory (in MiB) that a Memgraph instance can allocate during its runtime. If the memory limit is exceeded, only the queries which do not require additional memory are allowed. If the memory limit is exceeded while a query is running, the query is aborted making its transaction invalid.

If the flag is set to 0, it will use the default values which are currently set to 90% of the total memory if the system does not have swap memory, and 100% of the total memory if the system has swap memory.

### Controlling the memory usage of each query

Each Cypher query can contain a clause of the following format:

```plaintext
QUERY MEMORY ( UNLIMITED | LIMIT num ( KB | MB) )
```

If the `LIMIT` format is used, you can specify the amount of memory that query can allocate for its execution.
Only one clause of this type can be present in a Cypher query and it can go only at the end of it. The limit is applied to the entire query.

### Controlling the memory usage of each procedure 

Each procedure call can contain a clause of the following format:

```plaintext
PROCEDURE MEMORY ( UNLIMITED | LIMIT num ( KB | MB) )
```

If the `LIMIT` format is used, you can specify the amount of memory that the called procedure can allocate for its execution. If the `UNLIMITED` format is used, no memory restrictions are imposed on the procedure call. Not specifying the clause will set the memory limit to a default value.

Each procedure call can have only one clause of this type and it needs to go at the end of the call clause. If a query contains multiple procedure calls, each call can have its own limit specified.

### Cleaning up unused memory

Memgraph has a garbage collector which deallocates unused objects, freeing the memory. The rate of the garbage collection can be specified with the flag `--storage-gc-cycle-sec`.

Memgraph also contains the following query:

```cypher
FREE MEMORY
```

This query tries to clean up as much unused memory as possible without affecting currently running transactions.
