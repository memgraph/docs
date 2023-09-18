---
id: indexing
title: Indexing
sidebar_label: Indexing
---

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/indexing.md)
[![Related -
How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/indexes.md)

A database index is a data structure used to improve the speed of data retrieval
within a database at the cost of additional writes and storage space for
maintaining the index data structure.

If you have a deep understanding of your data model and the use case, you can
decide which data to index and significantly improve the efficiency of data
retrieval.

## Index types

At Memgraph, we support two types of indexes:

- label index
- label-property index

Memgraph will not automatically index labeled data. If you want to optimize
queries that fetch nodes by a label, you need to create indexes.

```cypher
CREATE INDEX ON :Person;
```

Retrieving nodes using this query is now much more efficient:

```cypher
MATCH (n :Person) RETURN n;
```

You can also create indexes on data with a specific combination of label and
property, hence the name label-property index.

For example, if you are storing information about people and you often retrieve
their age, it might be beneficial to create an index on nodes labeled as
`:Person` with a property named `age` by using the following language construct:

```cypher
CREATE INDEX ON :Person(age);
```

After creating that index, queries will be more efficient because Memgraph's
query engine will not have to fetch each `:Person` node and check whether the
property exists. Even if all nodes labeled as `:Person` have an `age` property,
creating an index can still be beneficial because entries within the index are
sorted by the property value. By creating a label-property index, queries
similar to this one will be more efficient:

```cypher
MATCH (n :Person {age: 42}) RETURN n;
```

Indexing is also beneficial for simple queries that filter data with a `WHERE`
clause:

```cypher
MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;
```

Bear in mind that `WHERE` filters could contain arbitrarily complex expressions,
and index-based retrieval might not be used. Nevertheless, we are continually
improving our index usage recognition algorithms.

Filtering based on less than or greater than comparisons will also use
index-based retrieval:

```cypher
MATCH (n) WHERE n:PERSON and n.age < 18 RETURN n;
```

Information about available indexes can be retrieved using the following syntax:

```cypher
SHOW INDEX INFO;
```

This query displays an alphabetized table of all label and label-property indices
presently kept by Memgraph.

You can delete created indexes by using the following syntax:

```cypher
DROP INDEX ON :Label(property);
```

This query instructs all active transactions to abort as soon as possible. Once
all transactions have finished, it will drop the index.

## Underlying implementation

The central part of our index data structure is a highly-concurrent skip list.
Skip lists are probabilistic data structures that allow fast search within an
ordered sequence of elements. The structure itself is built in layers where the
bottom layer is an ordinary linked list that preserves the order. Each higher
level can be imagined as a highway for layers below.

The implementation details behind skip list operations are well documented in
the literature and are out of scope for this article. Nevertheless, we believe
that it is important for more advanced users to understand the following
implications of this data structure (`n` denotes the current number of elements
in a skip list):

- The average insertion time is `O(log(n))`
- The average deletion time is `O(log(n))`
- The average search time is `O(log(n))`
- The average memory consumption is `O(n)`

Read more about [memory usage in Memgraph](/under-the-hood/storage.md). 