---
id: indexing
title: Indexing
sidebar_label: Indexing
---

When you are running queries, you want to get results as soon as possible. In the
worst case scenario, when you execute a query all nodes need to be checked to see
if there is a match. 

Here is what the query plan looks like if there is no index on the data:

```nocopy
EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;

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

When a query is executed, it is first checked if there is an index. An
index stores additional information on certain types of data so that retrieving
indexed data becomes more efficient. 

Here is what the query plan looks like if the indexing is enabled:

```nocopy
EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;

+-----------------------------------------------------+
| QUERY PLAN                                          |
+-----------------------------------------------------+
| " * Produce {n}"                                    |
| " * ScanAllByLabelPropertyValue (n :Person {prop})" |
| " * Once"                                           |
+-----------------------------------------------------+
```

There are some downsides to indexing, so it is important to carefully the right
data for indexing. Downsides of indexing are:

  * requiring extra storage for each index and
  * slowing down writes to the database.

Indexing all of the content will not improve the database speed.

## Creating index

Indexing can be applied to data with a specific label or a combination of label and
property. They are not automatically created, a user needs to create
them explicitly. Creation is done using a special
`CREATE INDEX ON :Label(property)` language construct.

When you create an index, it is added to the registry of indexes.

Memgraph supports two types of indexes:

  * label index
  * label-property index

### Label index

Memgraph will not automatically index labeled data. If you want to optimize
queries that fetch nodes by label, you need to perform the indexing.

```cypher
CREATE INDEX ON :Person;
```
Retrieving nodes using this query is now much more efficient:

```cypher
MATCH (n :Person) RETURN n;
```

### Label property-index

For example, to index nodes which are labeled as `:Person` and have a property
named `age`:

```cypher
CREATE INDEX ON :Person(age);
```

After the index is created, retrieving those nodes will become more efficient.
For example, the following query will retrieve all nodes which have an `age`
property, instead of fetching each `:Person` node and checking whether the
property exists.

```cypher
MATCH (n :Person {age: 42}) RETURN n;
```

Using index based retrieval also works when filtering labels and properties
with `WHERE`. For example, the same effect as in the previous example can be
done with:

```cypher
MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;
```

Since the filter inside `WHERE` can contain any kind of an expression, the
expression can be complicated enough so that the index does not get used. We
are continuously improving the recognition of index usage opportunities from a
`WHERE` expression. If there is any suspicion that an index may not be used,
we recommend putting properties and labels inside the `MATCH` pattern.

When it comes to label properties indexes, MemgraphDB stores a list of specific
properties that are used in label properties indexes. This list is ordered to
make the search faster. All property types can be ordered. First they are
ordered based on the type and then within the type.

#### Speed comparison

After the query execution you can see how much time did the query run. Here you
can see the comparison of the same query run without index and with index on.

```nocopy
SHOW INDEX INFO;
Empty set (0.001 sec)

MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;
+-------------+
| n.name      |
+-------------+
| "Lillian"   |
| "Logan"     |
| "Susan"     |
| "Sebastian" |
+-------------+
4 rows in set (0.021 sec)

CREATE INDEX ON :Person(name);
Empty set (0.015 sec)

MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;
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

## Underlying implementation

The central part of our index data structure is a highly-concurrent [skip list](https://en.wikipedia.org/wiki/Skip_list).
Skip lists are probabilistic data structures that allow fast search within an
ordered sequence of elements. The structure itself is built in layers where the
bottom layer is an ordinary linked list that preserves the order. Each higher
level can be imagined as a highway for layers below.

The implementation details behind skip list operations are well documented
in the literature and are out of scope for this document. Nevertheless, we
believe that it is important for more advanced users to understand the following
implications of this data structure (`n` denotes the current number of elements
in a skip list):

  * Average insertion time is `O(log(n))`
  * Average deletion time is `O(log(n))`
  * Average search time is `O(log(n))`
  * Average memory consumption is `O(n)`
