---
id: indexes
title: How to work with indexes
sidebar_label: Work with indexes
---

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/indexing.md)
[![Related - Under the
Hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](/under-the-hood/indexing.md)

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

This query displays an alphabetized table of all label and label-property indices
presently kept by Memgraph.

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