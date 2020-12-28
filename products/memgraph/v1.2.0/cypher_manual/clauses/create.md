# CREATE

The `CREATE` clause is used to create nodes and relationships in a graph.

1. [Creating nodes](#1-creating-nodes)
    1. [Creating a single node](#1-1-creating-a-single-node)
    2. [Creating a node with properties](#1-2-creating-a-node-with-properties)
    3. [Creating multiple nodes](#1-3-creating-multiple-nodes)
2. [Creating relationships](#2-creating-relationships)
    1. [Creating a relationship between two nodes](#2-1-creating-a-relationship-between-two-nodes)
    2. [Creating a relationship with properties](#2-2-creating-a-relationship-with-properties)
3. [Creating a path](#3-creating-a-path)

## 1. Creating nodes

### 1.1 Creating a single node

Use the following query to create a single node.
The `RETURN` clause is used to return results. A newly created node can be returned in the same query.

```openCypher
CREATE (n)
RETURN n;
```

Output:
```
+----+
| n  |
+----+
| () |
+----+
```

You can also specify a label while creating a node.

```openCypher
CREATE (n:Country)
RETURN n;
```

Output:
```
+------------+
| n          |
+------------+
| (:Country) |
+------------+
```

If you wish to add multiple labels to a node, use the following syntax:

```openCypher
CREATE (n:Country:City)
RETURN n;
```

Output:
```
+-----------------+
| n               |
+-----------------+
| (:Country:City) |
+-----------------+
```

### 1.2 Creating a node with properties

A node can be created with initial properties.

```openCypher
CREATE (n:Country { name: 'San Marino', continent: 'Europe' })
RETURN n;
```

Output:
```
+------------------------------------------------------+
| n                                                    |
+------------------------------------------------------+
| (:Country {continent: "Europe", name: "San Marino"}) |
+------------------------------------------------------+
```

### 1.3 Creating multiple nodes

To create multiple nodes, separate them with a comma.

```openCypher
CREATE (n:Country), (m:City)
RETURN n,m;
```

Output:
```
+------------+------------+
| n          | m          |
+------------+------------+
| (:Country) | (:City)    |
+------------+------------+
```

## 2. Creating relationships

### 2.1 Creating a relationship between two nodes

To create a relationship between two nodes, we need to specify which nodes 
either by creating them or filtering them with the `WHERE` clause.

```openCypher
CREATE (c1:Country { name: 'Belgium' }), (c2:Country { name: 'Netherlands' })
CREATE (c1)-[r:BORDERS_WITH]->(c2)
RETURN r;
```

Output:
```
+----------------+
| r              |
+----------------+
| [BORDERS_WITH] |
+----------------+
```

If the nodes already exist, the query would look like this:

```openCypher
MATCH (c1:Country),(c2:Country)
WHERE c1.name = 'Belgium' AND c2.name = 'Netherlands'
CREATE (c1)-[r:NEIGHBOURS]->(c2)
RETURN r;
```

Output:
```
+--------------+
| r            |
+--------------+
| [NEIGHBOURS] |
+--------------+
```

### 2.2 Creating a relationship with properties

You can add properties to a relationship at the time of creation.

```openCypher
MATCH (c1:Country),(c2:Country)
WHERE c1.name = 'Belgium' AND c2.name = 'Netherlands'
CREATE (c1)-[r:BORDERS_WITH { length: '30KM' }]->(c2)
RETURN r;
```

Output:
```
+---------------------------------+
| r                               |
+---------------------------------+
| [BORDERS_WITH {length: "30KM"}] |
+---------------------------------+
```

## 3. Creating a path

When creating a path, all of the parts of the pattern that don't exist will be created.

```openCypher
CREATE p=((n:Country { name: 'Belgium' })-[r:BORDERS_WITH { length: '30KM' }]->(m:Country { name: 'Netherlands' }))
RETURN p;
```

Output:
```
+------------------------------------------------------------------------------------------------+
| p                                                                                              |
+------------------------------------------------------------------------------------------------+
| (:Country {name: "Belgium"})-[BORDERS_WITH {length: "30KM"}]->(:Country {name: "Netherlands"}) |
+------------------------------------------------------------------------------------------------+
```
