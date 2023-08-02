---
id: create
title: CREATE clause
sidebar_label: CREATE
---

The `CREATE` clause is used to create nodes and relationships in a graph.

:::info

Indexing can increase performance when executing queries. Please take a look at
our [documentation on indexing](/docs/memgraph/reference-guide/indexing) for
more details.

:::

1. [Creating nodes](#1-creating-nodes) <br />
    1.1. [Creating a single node](#11-creating-a-single-node)<br />
    1.2. [Creating a node with properties](#12-creating-a-node-with-properties)<br />
    1.3. [Creating multiple nodes](#13-creating-multiple-nodes)<br />
2. [Creating relationships](#2-creating-relationships)<br />
    2.1. [Creating a relationship between two nodes](#21-creating-a-relationship-between-two-nodes)<br />
    2.2. [Creating a relationship with properties](#22-creating-a-relationship-with-properties)<br />
3. [Creating a path](#3-creating-a-path)

## 1. Creating nodes

### 1.1. Creating a single node

Use the following query to create a single node.
The `RETURN` clause is used to return results. A newly created node can be returned in the same query.

```cypher
CREATE (n)
RETURN n;
```

Output:
```nocopy
+----+
| n  |
+----+
| () |
+----+
```

You can also specify a label while creating a node:

```cypher
CREATE (n:Country)
RETURN n;
```

Output:
```nocopy
+------------+
| n          |
+------------+
| (:Country) |
+------------+
```

If you wish to add multiple labels to a node, use the following syntax:

```cypher
CREATE (n:Country:City)
RETURN n;
```

Output:
```nocopy
+-----------------+
| n               |
+-----------------+
| (:Country:City) |
+-----------------+
```

### 1.2. Creating a node with properties

A node can be created with initial properties.

```cypher
CREATE (n:Country {name: 'San Marino', continent: 'Europe'})
RETURN n;
```

Output:
```nocopy
+------------------------------------------------------+
| n                                                    |
+------------------------------------------------------+
| (:Country {continent: "Europe", name: "San Marino"}) |
+------------------------------------------------------+
```

### 1.3. Creating multiple nodes

To create multiple nodes, separate them with a comma.

```cypher
CREATE (n:Country), (m:City)
RETURN n,m;
```

Output:
```nocopy
+------------+------------+
| n          | m          |
+------------+------------+
| (:Country) | (:City)    |
+------------+------------+
```

## 2. Creating relationships

### 2.1. Creating a relationship between two nodes

To create a relationship between two nodes, we need to specify which nodes 
either by creating them or filtering them with the `WHERE` clause.

```cypher
CREATE (c1:Country {name: 'Belgium'}), (c2:Country {name: 'Netherlands'})
CREATE (c1)-[r:BORDERS_WITH]->(c2)
RETURN r;
```

Output:
```nocopy
+----------------+
| r              |
+----------------+
| [BORDERS_WITH] |
+----------------+
```

If the nodes already exist, the query would look like this:

```cypher
MATCH (c1:Country),(c2:Country)
WHERE c1.name = 'Belgium' AND c2.name = 'Netherlands'
CREATE (c1)-[r:NEIGHBOURS]->(c2)
RETURN r;
```

Output:
```nocopy
+--------------+
| r            |
+--------------+
| [NEIGHBOURS] |
+--------------+
```

### 2.2. Creating a relationship with properties

You can add properties to a relationship at the time of creation.

```cypher
MATCH (c1:Country),(c2:Country)
WHERE c1.name = 'Belgium' AND c2.name = 'Netherlands'
CREATE (c1)-[r:BORDERS_WITH {length: '30KM'}]->(c2)
RETURN r;
```

Output:
```nocopy
+---------------------------------+
| r                               |
+---------------------------------+
| [BORDERS_WITH {length: "30KM"}] |
+---------------------------------+
```

## 3. Creating a path

When creating a path all the entities of the pattern will be created.

```cypher
CREATE p=((n:Country {name: 'Belgium'})-[r:BORDERS_WITH {length: '30KM'}]->(m:Country {name: 'Netherlands'}))
RETURN p;
```

Output:
```nocopy
+------------------------------------------------------------------------------------------------+
| p                                                                                              |
+------------------------------------------------------------------------------------------------+
| (:Country {name: "Belgium"})-[BORDERS_WITH {length: "30KM"}]->(:Country {name: "Netherlands"}) |
+------------------------------------------------------------------------------------------------+
```
