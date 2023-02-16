---
id: explain
title: EXPLAIN clause
sidebar_label: EXPLAIN
---

The EXPLAIN clause can be used to inspect a particular Cypher query in order to see its
execution plan.

For example, the following query will return the execution plan:

```cypher
EXPLAIN MATCH (n) RETURN n;
```

```
+----------------+
| QUERY PLAN     |
+----------------+
|  * Produce {n} |
|  * ScanAll (n) |
|  * Once        |
+----------------+
```

For more information, check the [reference guide on inspecting queries](/memgraph/reference-guide/inspecting-queries). 