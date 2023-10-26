---
id: indexing
title: Indexing
sidebar_label: Indexing
---

[![Related -
How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/indexes.md)
[![Related - Under the
Hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](/under-the-hood/indexing.md)

## When to create indexes?

When you are running queries, you want to get results as soon as possible. In
the worst-case scenario, when you execute a query, all nodes need to be checked
to see if there is a match.

Here is what the query plan looks like if there is no index on the data:

```nocopy
memgraph> EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;
+---------------------------------+
| QUERY PLAN                      |
+---------------------------------+
| " * Produce {n}"                |
| " * Filter"                     |
| " * ScanAllByLabel (n :Person)" |
| " * Once"                       |
+---------------------------------+
```

By enabling indexes, this process can be much faster:

```cypher
CREATE INDEX ON :Person(prop);
```

When a query is executed, the engine first checks if there is an index. An index
stores additional information on certain types of data so that retrieving
indexed data becomes more efficient. Indexes basically store data in a different
kind of way, i.e., they partition it with a key. For example, if you set an
index on a label, the query `MATCH (:Label)` won't have to explicitly check
every node. You just need to check the nodes that were placed on a "shelf". Each
"shelf" has nodes with a specific label. The data is not copied or duplicated to
the "shelf". You actually create a memory map to those nodes and there is no
need to look anywhere else for them.

Here is what the query plan looks like if indexing is enabled:

```nocopy
memgraph> EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;
+-----------------------------------------------------+
| QUERY PLAN                                          |
+-----------------------------------------------------+
| " * Produce {n}"                                    |
| " * ScanAllByLabelPropertyValue (n :Person {prop})" |
| " * Once"                                           |
+-----------------------------------------------------+
```

## When not to create indexes?

There are some downsides to indexing, so it is important to carefully choose the
right data for creating an index. The downsides of indexing are:

- requiring extra storage (memory) for each index and
- slowing down write operations to the database.

Indexing all of the content will not improve the database speed. The structures
in the index are dynamically updated on modifications or insertions of new
nodes. Once a new node is created, it needs to be assigned to an index group.
Such an indexed node will be retrieved much faster from the database.

Indexing will also not bring any improvement if a large number of properties
have the same value. Take a look at the following example. Let's say you have
some property that can have 10 distinct values. Those values are integers in the
range 1 to 10. If you have 100 nodes stored in the database and 1 of them has a
score of 1 while the others have a score of 10 (99 of them), then that is not a
good distinguisher. If 10 of them have a score of 1, 10 of them have a score of
2, etc. then it is a good distinguisher because it partitions them to cut the
order of searching by one magnitude.

Also, indexing certain data types will not bring any significant performance
gain, e.g., for boolean in the best case scenario, the time will be cut in half.

## Creating an index

Indexing can be applied to data with a specific label or a combination of label
and property. They are not automatically created, and the user needs to create
them explicitly. Creation is done using a special `CREATE INDEX ON
:Label(property)` language construct.

When you create an index, it is added to the registry of indexes.

Memgraph supports two types of indexes:

- label index
- label-property index

### Label index

Memgraph will not automatically index labeled data. If you want to optimize
queries that fetch nodes by label, you need to create the indexes:

```cypher
CREATE INDEX ON :Person;
```

Retrieving nodes using this query is now much more efficient:

```cypher
MATCH (n:Person) RETURN n;
```

### Label-property index

For example, to index nodes that are labeled as `:Person` and have a property
named `age`:

```cypher
CREATE INDEX ON :Person(age);
```

After the index is created, retrieving those nodes will become more efficient.
For example, the following query will retrieve all nodes which have an `age`
property, instead of fetching each `:Person` node and checking whether the
property exists:

```cypher
MATCH (n :Person {age: 42}) RETURN n;
```

Using index-based retrieval also works when filtering labels and properties with
`WHERE`. For example, the same effect as in the previous example can be done
with:

```cypher
MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;
```

Since the filter inside `WHERE` can contain any kind of an expression, the
expression can be complicated enough so that the index does not get used. We are
continuously improving the recognition of index usage opportunities from a
`WHERE` expression. If there is any suspicion that an index may not be used, we
recommend putting properties and labels inside the `MATCH` pattern.

When it comes to label-property indexes, MemgraphDB stores a list of specific
properties that are used in label property-indexes. This list is ordered to make
the search faster. All property types can be ordered. First, they are ordered
based on the type and then within that type.

:::tip

For the best performance, create index on properties containing unique integer values.

:::

:::caution

Creating a label-property index will not create a label index!

:::

### Speed comparison

After the query execution, you can see how much time the query took to finish.
Below you can see a comparison of the same query run without an index and with
an index.

```nocopy
memgraph> SHOW INDEX INFO;
Empty set (0.001 sec)

memgraph> MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;
+-------------+
| n.name      |
+-------------+
| "Lillian"   |
| "Logan"     |
| "Susan"     |
| "Sebastian" |
+-------------+
4 rows in set (0.021 sec)

memgraph> CREATE INDEX ON :Person(name);
Empty set (0.015 sec)

memgraph> MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;
+-------------+
| n.name      |
+-------------+
| "Lillian"   |
| "Logan"     |
| "Susan"     |
| "Sebastian" |
+-------------+
4 rows in set (0.006 sec)
```

## Display available indexes

Information about available indexes can be retrieved by using the following
syntax:

```cypher
SHOW INDEX INFO;
```

The results of this query will be all of the labels and label-property pairs
that Memgraph currently indexes.

## Deleting index

Created indexes can also be deleted by using the following syntax:

```cypher
DROP INDEX ON :Label(property);
```
## Analyze graph

When multiple label-property indices exist, the database can sometimes select a non-optimal index due to the data's distribution. The [`ANALYZE GRAPH;`](/reference-guide/analyze-graph.md) query calculates the distribution of property values so the database can select a more optimal label-property index with the smallest average property value size. The query is run only once after all indexes have been created and data inserted in the database.

## How-to guide

A database index is a data structure used to improve the speed of data retrieval
within a database at the cost of additional writes and storage space for
maintaining the index data structure.

When a query is executed, the engine first checks if there is an index. An index
stores additional information on certain types of data so that retrieving
indexed data becomes more efficient.

Memgraph supports two types of indexes:

- label index
- label-property index

## How to check if indexes exist?

To check if indexes exist, use the following Cypher query:

```cypher
SHOW INDEX INFO;
```

The results of this query will be all of the labels and label-property pairs
that Memgraph currently indexes.

## How to create indexes?

Memgraph will not automatically index labeled data. If you want to optimize
queries that fetch nodes using labels, you need to create indexes.

If you have a node `Person` and you want to create an index for it, run the
following query:

```cypher
CREATE INDEX ON :Person;
```

You can also create indexes on data with a specific combination of label and
property, hence the name label-property index.

For example, if you are storing information about people and you often retrieve
their age, it might be beneficial to create an index on nodes labeled as
`:Person` with a property named `age` by using the following language construct:

```cypher
CREATE INDEX ON :Person(age);
```

:::tip

For the best performance, create index on properties containing unique integer values.

:::

:::caution

Creating a label-property index will not create a label index!

:::

## How to delete indexes?

You can delete created indexes by using the following Cypher queries:

```cypher
DROP INDEX ON :Person;
```

```cypher
DROP INDEX ON :Person(age);
```

These queries instruct all active transactions to abort as soon as possible. Once all transactions have finished, the index will be deleted.

## Analyze graph

When multiple label-property indices exist, the database can sometimes select a non-optimal index due to the data's distribution. The [`ANALYZE GRAPH;`](/reference-guide/analyze-graph.md) query calculates the distribution of property values so the database can select a more optimal label-property index with the smallest average property value size. The query is run only once after all indexes have been created and data inserted in the database.

## Underlying implementation

The central part of our index data structure is a highly-concurrent [skip
list](https://en.wikipedia.org/wiki/Skip_list). Skip lists are probabilistic
data structures that allow fast search within an ordered sequence of elements.
The structure itself is built in layers where the bottom layer is an ordinary
linked list that preserves the order. Each higher level can be imagined as a
highway for layers below.

The implementation details behind skip list operations are well documented in
the literature and are out of scope for this document. Nevertheless, we believe
that it is important for more advanced users to understand the following
implications of this data structure (`n` denotes the current number of elements
in a skip list):

- The average insertion time is `O(log(n))`
- The average deletion time is `O(log(n))`
- The average search time is `O(log(n))`
- The average memory consumption is `O(n)`

Read more about [memory usage in Memgraph](/under-the-hood/storage.md). 
