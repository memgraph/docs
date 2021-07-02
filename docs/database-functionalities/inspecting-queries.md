---
id: inspecting-queries
title: Inspecting queries
sidebar_label: Inspecting queries
---

Before a Cypher query is executed, it is converted into an internal form
suitable for execution, known as a *plan*. A plan is a tree-like data structure
describing a pipeline of operations which will be performed on the database in
order to yield the results for a given query. Every node within a plan is known
as a *logical operator* and describes a particular operation.

Because a plan represents a pipeline, the logical operators are iteratively
executed as data passes from one logical operator to the other. Every logical
operator *pulls* data from the logical operator(s) preceding it, processes it
and passes it onto the logical operator next in the pipeline for further
processing.

Using the `EXPLAIN` operator, it is possible for the user to inspect the
produced plan and gain insight into the execution of a query. Currently, the
various logical operators aren't fully documented as their behavior is subject
to change. However, the behavior of most of them can be deduced from their name.
In the future, additional information might be added to the output of the
`EXPLAIN` operator.

As an example, let's inspect the plan produced for a simple query:

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

The output of the `EXPLAIN` query is a representation of the produced plan. Every
logical operator within the plan starts with an asterisk character (`*`) and is
followed by its name (and sometimes additional information). The execution of
the query proceeds iteratively (generating one entry of the result set at a
time), with data flowing from the bottom-most logical operator(s) (the start of
the pipeline) to the top-most logical operator(s) (the end of the pipeline).

In the example above, the resulting plan is a pipeline of 3 logical operators.
`Once` is the identity logical operator which does nothing and is always found
at the start of the pipeline; `ScanAll` is a logical operator which iteratively
produces all of the nodes in the graph; and `Produce` is a logical operator
which takes data produced by another logical operator and produces data for the
query's result set.

A slightly more complicated example would be:

```cypher
EXPLAIN MATCH (n :Node)-[:Edge]-(m :Node) WHERE n.prop = 42 RETURN *;
```

```
+--------------------------------+
| QUERY PLAN                     |
+--------------------------------+
|  * Produce {m, n}              |
|  * Filter                      |
|  * Expand (m)-[anon1:Edge]-(n) |
|  * ScanAllByLabel (n :Node)    |
|  * ScanAllByLabel (m :Node)    |
|  * Once                        |
+--------------------------------+
```

In this example, the `Filter` logical operator is used to filter the matched
nodes because of the `WHERE n.prop = 42` construct. The `Expand` logical
operator is used to find an edge between two nodes, in this case `m` and `n`
which were matched previously using the `ScanAllByLabel` logical operator (a
variant of the `ScanAll` logical operator mentioned previously).

The execution of the query proceeds iteratively as follows. First, two vertices
of type `:Node` are found as the result of the two scans. Then, we try to find a
path that consists of the two vertices and an edge between them. If a path is
found, it is further filtered based on a property of one of the vertices.
Finally, if the path satisfied the filter, its two vertices are added to the
query's result set.

A simple example showcasing the fully general tree structure of the plan could
be:

```cypher
EXPLAIN MERGE (n) RETURN n;
```

```
+------------------+
| QUERY PLAN       |
+------------------+
|  * Produce {n}   |
|  * Accumulate    |
|  * Merge         |
|  |\ On Match     |
|  | * ScanAll (n) |
|  | * Once        |
|  |\ On Create    |
|  | * CreateNode  |
|  | * Once        |
|  * Once          |
+------------------+
```

The `Merge` logical operator (constructed as a result of the `MERGE` construct)
can take input from up to 3 places. The `On Match` and `On Create` branches are
"pulled from" only if a match was found or if a new vertex has to be created,
respectively.

## Where to next?

To learn more about Memgraph's functionalities, visit the **[Reference guide](/reference-guide/overview.md)**.
For real-world examples of how to use Memgraph, we strongly suggest going through one of the available **[Tutorials](/tutorials/overview.md)**.