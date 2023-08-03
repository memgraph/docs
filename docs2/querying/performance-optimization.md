---
id: performance-optimization
title: Performance optimization
---

The `ANALYZE GRAPH` will check and calculate certain properties of a graph so
the database can choose a more optimal index or `MERGE` transaction. 

Before the introduction of the `ANALYZE GRAPH` query, the database would choose
an index solely based on the number of indexed nodes. But if the number of nodes
is the only condition, in some cases the database would choose a non-optimal
index. Once the `ANALYZE GRAPH` is run, Memgraph analyzes the distribution of
property values and can select a more optimal label-property index, the one with
the smallest average property value size.

The average property value's group size directly represents the database's
expected number of hits which can be used to estimate the query's cost. When the
average group size is the same, the chi-squared statistic is used to measure how
close the distribution of property-value group size is to the uniform
distribution. The index with a distribution closest to the uniform distribution
is selected.

<a href="https://latex.codecogs.com/gif.image?\dpi{110}\chi^2&space;=&space;\sum_{i}\frac{(E_i-O_i)^2}{E_i}" target="_blank"><img src="https://latex.codecogs.com/gif.image?\dpi{110}\chi^2&space;=&space;\sum_{i}\frac{(E_i-O_i)^2}{E_i}" title="Chi-squared statistic" /></a>

Upon running the `ANALYZE GRAPH` query, Memgraph also check the node degree of
every indexed nodes and calculates the average degree. By having these values,
Memgraph can make a more optimal `MERGE` expansion and improve performance. It's
always better to perform a `MERGE` by expanding from the node that has a lesser
degree than the connecting node. 

The `ANALYZE GRAPH;` command should be run only once after all indexes have been
created and nodes inserted in the database. In rare situations when one property
is set on many more nodes than another property, choosing an index based on
average group size and uniform distribution would be misleading. That's why the
database always selects the label-property index with >= 10x fewer nodes than
the other label-property index.

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/indexing.md)
[![Related - How
to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/indexes.md)
[![Related - Under the
Hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](/under-the-hood/indexing.md)
[![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/implementing-data-replication)


## Calculate the statistic

Run the following query to calculate the statistics:

```cypher
ANALYZE GRAPH;
```

The query will iterate over all label and label-property indices in the database
and calculate the average group size, chi-squared statistic and avg degree for
each one, then return the following output:

| label | property | num estimation nodes | num groups | avg group size | chi-squared value | avg degree
| ----- | -------- | -------------------- | ---------- | -------------- | ----------------- | ----------
| index's label | index's property | number of nodes used for estimation | number of distinct values the property contains | average group size of property's values | value of the chi-squared statistic | average degree of the indexed nodes


Once the necessary information is obtained, Memgraph can choose the optimal
index and `MERGE` expansion. If you don't want to run the analysis on all labels,
you can specify which labels to use by adding the labels to the query:

```cypher
ANALYZE GRAPH ON LABELS :Label1, :Label2;
```

## Delete statistic

If you want the database to ignore information about the average group size, the
chi-squared statistic and the average degree, the existing statistic can be
deleted by running:

```cypher
ANALYZE GRAPH DELETE STATISTICS;
```

The results will contain all label-property indices that were successfully deleted:

| label | property |
| ----- | -------- |
| index's label | index's property |

Specific labels can be specified with the construct `ON LABELS`:

```cypher
ANALYZE GRAPH ON LABELS :Label1 DELETE STATISTICS;
```

## Inspecting queries

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
| `Apply`                         | Joins the returned symbols from two branches of execution.                                                              |
| `CallProcedure`                 | Calls a procedure.                                                                                                       |
| `Cartesian`                     | Applies the Cartesian product (the set of all possible ordered combinations consisting of one member from each of those sets) on the input it received. |
| `ConstructNamedPath`            | Creates a path.                                                                                                          |
| `CreateNode`                    | Creates a node.                                                                                                          |
| `CreateExpand`                  | Creates edges and  new nodes to connect with existing nodes.                                                             |
| `Delete`                        | Deletes nodes and edges.                                                                                                 |
| `EdgeUniquenessFilter`          | Filters unique edges.                                                                                                    |
| `EmptyResult`                   | Discards results from the previous operator.                 |
| `EvaluatePatternFilter`         | Part of the filter operator that contains a sub-branch which yields either true or false.                                |
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

## Profiling queries

Along with inspecting a query's plan as described in the [Inspecting
queries](./inspecting-queries.md) guide, it is also possible to profile the
execution of a query and get a detailed report on how the query's plan behaved.
For every logical operator the following info is provided:

- `OPERATOR` &mdash; the name of the operator, just like in the output of an
  `EXPLAIN` query.

- `ACTUAL HITS` &mdash; the number of times a particular logical operator was
  pulled from.

- `RELATIVE TIME` &mdash; the amount of time that was spent processing a
  particular logical operator, relative to the execution of the whole plan.

- `ABSOLUTE TIME` &mdash; the amount of time that was spent processing a
  particular logical operator.

A simple example to illustrate the output:

```cypher
PROFILE MATCH (n :Node)-[:Edge]-(m :Node) WHERE n.prop = 42 RETURN *;
```

```plaintext
+---------------+---------------+---------------+---------------+
| OPERATOR      | ACTUAL HITS   | RELATIVE TIME | ABSOLUTE TIME |
+---------------+---------------+---------------+---------------+
| * Produce     | 1             |   7.134628 %  |   0.003949 ms |
| * Filter      | 1             |  12.734765 %  |   0.007049 ms |
| * Expand      | 1             |   5.181460 %  |   0.002868 ms |
| * ScanAll     | 1             |   3.325061 %  |   0.001840 ms |
| * ScanAll     | 1             |  71.061241 %  |   0.039334 ms |
| * Once        | 2             |   0.562844 %  |   0.000312 ms |
+---------------+---------------+---------------+---------------+
```

## Where to next?

To learn more about Memgraph's functionalities, visit the **[Reference
guide](/reference-guide/overview.md)**. For real-world examples of how to use
Memgraph, we strongly suggest going through one of the available
**[Tutorials](/tutorials/overview.md)**.

