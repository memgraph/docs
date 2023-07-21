---
id: remove
title: REMOVE clause
sidebar_label: REMOVE
---

The `REMOVE` clause is used to remove labels and properties from nodes and relationships.

1. [Removing a property](#1-removing-a-property) <br />
2. [Removing a label](#2-removing-a-label)

## Dataset

The following examples are executed with this dataset. You can create this dataset
locally by executing the queries at the end of the page: [Dataset queries](#data-set-queries).

![Data set](../data/clauses/data_set.png)

## 1. Removing a property

The `REMOVE` clause can be used to remove a property from a node or relationship:

```cypher
MATCH (n:Country {name: 'United Kingdom'})
REMOVE n.name
RETURN n;
```

Output:

```nocopy
+-----------------------------------------------------------------------------+
| n                                                                           |
+-----------------------------------------------------------------------------+
| (:Country {continent: "Europe", language: "English", population: 66000000}) |
+-----------------------------------------------------------------------------+
```

The `REMOVE` clause can't be used to remove all properties from a node or relationship. Instead, take a look at the `SET` clause.

## 2. Removing a label

The `REMOVE` clause can be used to remove a label from a node:

```cypher
MATCH (n:Country {name: 'United Kingdom'})
REMOVE n:Country
RETURN n;
```

Output:

```nocopy
+--------------------------------------------------------------------------------------------+
| n                                                                                          |
+--------------------------------------------------------------------------------------------+
| ({continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |
+--------------------------------------------------------------------------------------------+
```

Let's add the label `Country` back to the node with the name `United Kingdom` and the additional label `Kingdom`.

```cypher
MATCH (n {name: 'United Kingdom'})
SET n:Country:Kingdom;
```

You can now remove multiple labels from a node at the same time.

```cypher
MATCH (n:Country {name: 'United Kingdom'})
REMOVE n:Country:Kingdom
RETURN n;
```

Output:

```nocopy
+--------------------------------------------------------------------------------------------+
| n                                                                                          |
+--------------------------------------------------------------------------------------------+
| ({continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |
+--------------------------------------------------------------------------------------------+
```

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
