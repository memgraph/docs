---
id: server-stats
title: Server stats
sidebar_label: Server stats
---

Memgraph supports multiple queries to get information about the instance that is
being queried.

## Instance version

To get the version of the instance being queried, run the following query:

```cypher
SHOW VERSION;
```

## Storage information

Running the following query will return certain information about the storage of
the current instance:

```cypher
SHOW STORAGE INFO;
```

The result will contain the following fields:

| Field            | Description                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| vertex_count     | Number of vertices stored                                                                                                                    |
| edge_count       | Number of edges stored                                                                                                                       |
| average_degree   | Average number of relationships of a single node                                                                                                            |
| memory_usage     | Amount of RAM used reported by the OS (in bytes)                                                                                             |
| disk_usage       | Amount of disk space used by the data directory (in bytes)                                                                                   |
| memory_allocated | Amount of bytes allocated by the instance.<br/>For more info, check out the [memory control](/reference-guide/memory-control.md).               |
| allocation_limit | Current allocation limit in bytes set for this instance.<br/>For more info, check out the [memory control](/reference-guide/memory-control.md). |
