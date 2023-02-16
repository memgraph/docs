---
id: inspecting-queries
title: Inspecting queries
sidebar_label: Inspecting queries
slug: /reference-guide/inspecting-queries
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

Using the `EXPLAIN` clause, it is possible for the user to inspect the
produced plan and gain insight into the execution of a query.

## Operators

| Operator                      | Description                                                                                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `Accumulate`                    | Accumulates the input it received.                                                                                       |
| `Aggregate`                     | Aggregates the input it received.                                                                                        |
| `CallProcedure`                 | Calls a procedure.                                                                                                       |
| `Cartesian`                     | Applies the Cartesian product (the set of all possible ordered combinations consisting of one member from each of those sets) on the input it received. |
| `ConstructNamedPath`            | Creates a path.                                                                                                          |
| `CreateNode`                    | Creates a node.                                                                                                          |
| `CreateExpand`                  | Creates edges and  new nodes to connect with existing nodes.                                                             |
| `Delete`                        | Deletes nodes and edges.                                                                                                 |
| `EdgeUniquenessFilter`          | Filters unique edges.                                                                                                    |
| `EmptyResult`                   | Discards results from the previous operator.                 |
| `Expand`                        | Expands the node by finding the node's relationships.                                                                    |
| `ExpandVariable`                | Performs a node expansion of a variable number of relationships                                                          |
| `Filter`                        | Filters the input it received.                                                                                           |
| `Foreach`                       | Iterates over a list and applies one or more update clauses.                                                             |
| `Limit`                         | Limits certain rows from the pull chain.                                                                                 |
| `LoadCsv`                       | Loads CSV file in order to import files into the database.                                                               |
| `Merge`                         | Applies merge on the input it received.                                                                                  |
| `Once`                          | Forms the beginning of an operator chain with "only once" semantics. The operator will return false on subsequent pulls. |
| `Optional`                      | Performs optional matching.                                                     |
| `OrderBy`                       | Orders the input it received.                                                                                            |
| `Produce`                       | Produces results.                                                                                                        |
| `RemoveLabels`                  | Removes a variable number of node labels.                                                                                |
| `RemoveProperty`                | Removes a node or relationship property.                                                                                 |
| `ScanAll`                       | Produces all nodes in the database.                                                                                      |
| `ScanAllById`                   | Produces nodes with a certain index.                                                                                     |
| `ScanAllByLabel`                | Produces nodes with a certain label.                                                                                     |
| `ScanAllByLabelProperty`        | Produces nodes with a certain label and property.                                                                        |
| `ScanAllByLabelPropertyRange`   | Produces nodes with a certain label and property value within the given range (both inclusive and exclusive).            |
| `ScanAllByLabelPropertyValue`   | Produces nodes with a certain label and property value.                                                                  |
| `SetLabels`                     | Sets node labels of variable length.                                                                                     |
| `SetProperty`                   | Sets a node or relationship property.                                                                                    |
| `SetProperties`                 | Sets a list of node or relationship properties.                                                                          |
| `Skip`                          | Skips certain rows from the pull chain.                                                                                  |
| `Unwind`                        | Unwinds an expression to multiple records.                                                                               |
| `Distinct`                      | Applies a distinct filter on the input it received.                                                                      |

## Example plans

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

The output of the query using the `EXPLAIN` clause is a representation of the produced plan. Every
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