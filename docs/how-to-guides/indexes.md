---
id: indexes
title: Working with indexes
sidebar_label: Working with indexes
---

[![Related - Under the Hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](/under-the-hood/indexing.md) [![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/indexing.md)

A database index is a data structure used to improve the speed of data retrieval
within a database at the cost of additional writes and storage space for
maintaining the index data structure.

When a query is executed, the engine first checks if there is an index. An index
stores additional information on certain types of data so that retrieving
indexed data becomes more efficient.

Memgraph supports two types of indexes:

  * label index
  * label-property index

## How to check if indexes exists

To check if indexes exist use the following Cypher query:

```cypher
SHOW INDEX INFO;
```

The results of this query will be all of the labels and label-property pairs
that Memgraph currently indexes.

## How to create indexes

Memgraph will NOT automatically index labeled data. If you want to optimize
queries that fetch nodes by label you need to perform the indexing. 

If you have a node `Person` and you want to create a index for it, run a following query:

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
## How to delete indexes

You can delete created indexes by using the following Cypher queries:

```cypher
DROP INDEX ON :Person;
```

```cypher
DROP INDEX ON :Person(age);
```

This queries instructs all active transactions to abort as soon as possible. Once
all transaction have finished, it will delete the index.
