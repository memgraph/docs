---
id: optional-match
title: OPTIONAL MATCH clause
sidebar_label: OPTIONAL MATCH
---

The `MATCH` clause can be modified by prepending the `OPTIONAL` keyword.
`OPTIONAL MATCH` clause behaves the same as a regular `MATCH`, but when it fails to find the pattern,
missing parts of the pattern will be filled with null values.

1. [Get optional relationships](#1-get-optional-relationships) <br />
2. [Optional typed and named relationship](#2-optional-typed-and-named-relationship)

## Dataset

The following examples are executed with this dataset. You can create this dataset
locally by executing the queries at the end of the page: [Dataset queries](#data-set-queries).

![Data set](../data/clauses/data_set.png)

## 1. Get optional relationships

Using `OPTIONAL MATCH` when returning a relationship that doesn't exist will return the default value `NULL` instead.

The returned property of an optional element that is `NULL` will also be `NULL`:

```cypher
MATCH (c1:Country {name: 'France'})
OPTIONAL MATCH (c1)--(c2:Country {name: 'Germany'})
RETURN c2;
```

Output:

```nocopy
+------+
| c2   |
+------+
| Null |
+------+
```

## 2. Optional typed and named relationship

The `OPTIONAL MATCH` clause allows you to use the same conventions as `MATCH` when it comes to handling variables and relationship types:

```cypher
MATCH (c:Country {name: 'United Kingdom'})
OPTIONAL MATCH (c)-[r:LIVES_IN]->()
RETURN c.name, r;
```

Output:

```nocopy
+----------------+----------------+
| c.name         | r              |
+----------------+----------------+
| United Kingdom | Null           |
+----------------+----------------+
```

Because there are no outgoing relationships of type `LIVES_IN` for the node, the value of r is `null` while the value of `contry.name` is `'United Kingdom'`.

## Dataset queries

We encourage you to try out the examples by yourself.
You can get our dataset locally by executing the following query block.

```cypher
MATCH (n) DETACH DELETE n;

CREATE (c1:Country {name: 'Germany', language: 'German', continent: 'Europe', population: 83000000});
CREATE (c2:Country {name: 'France', language: 'French', continent: 'Europe', population: 67000000});
CREATE (c3:Country {name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000});

MATCH (c1),(c2)
WHERE c1.name= 'Germany' AND c2.name = 'France'
CREATE (c2)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'John'})-[:LIVING_IN {date_of_start: 2014}]->(c1);

MATCH (c)
WHERE c.name= 'United Kingdom'
CREATE (c)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'Harry'})-[:LIVING_IN {date_of_start: 2013}]->(c);

MATCH (p1),(p2)
WHERE p1.name = 'John' AND p2.name = 'Harry'
CREATE (p1)-[:FRIENDS_WITH {date_of_start: 2011}]->(p2);

MATCH (p1),(p2)
WHERE p1.name = 'John' AND p2.name = 'Harry'
CREATE (p1)<-[:FRIENDS_WITH {date_of_start: 2012}]-(:Person {name: 'Anna'})-[:FRIENDS_WITH {date_of_start: 2014}]->(p2);

MATCH (p),(c1),(c2)
WHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'
CREATE (c2)<-[:LIVING_IN {date_of_start: 2014}]-(p)-[:LIVING_IN {date_of_start: 2014}]->(c1);

MATCH (n)-[r]->(m) RETURN n,r,m;
```
