---
id: indexing
title: Indexing
sidebar_label: Indexing
---

An index stores additional information on certain types of data, so that
retrieving said data becomes more efficient. Downsides of indexing are:

  * requiring extra storage for each index and
  * slowing down writes to the database.

Carefully choosing which data to index can tremendously improve data retrieval
efficiency, and thus make index downsides negligible.

## Index types

At Memgraph, we support two types of indexes:

  * label index
  * label-property index


Memgraph will NOT automatically index labeled data. If you want to optimize
queries that fetch nodes by label you need to perform the indexing. 
Indexing can be applied to data with a specific label or a combination of label and
property. They are not automatically created, instead a user needs to create
them explicitly. Creation is done using a special
`CREATE INDEX ON :Label(property)` language construct.

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

Information about available indexes can be retrieved by using the following
syntax:

```cypher
SHOW INDEX INFO;
```
The results of this query will be all of the labels and label-property pairs
that Memgraph currently indexes.

Created indexes can also be deleted by using the following syntax:
```cypher
DROP INDEX ON :Label(property);
```
