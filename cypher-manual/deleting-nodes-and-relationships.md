---
id: deleting-nodes-and-relationships
title: Deleting nodes and relationships
sidebar_label: Deleting nodes and relationships
---

## DELETE

This clause is used to delete nodes and relationships from the database.

For example, removing all relationships of a single type:

```cypher
MATCH ()-[relationship :type]-() DELETE relationship;
```

When testing the database, you often want to have a clean start by deleting
every node and relationship in the database. It is reasonable that deleting each node
should delete all relationships coming into or out of that node.

```cypher
MATCH (node) DELETE node;
```

But, Cypher prevents accidental deletion of relationships. Therefore, the above
query will report an error. Instead, you need to use the `DETACH` keyword, which
will remove relationships from a node you are deleting. The following should work and
*delete everything* in the database.

```cypher
MATCH (node) DETACH DELETE node;
```

More examples are available [here](./clauses/delete.md).

## REMOVE

The `REMOVE` clause is used to remove labels and properties from nodes and
relationships:

```cypher
MATCH (n:WrongLabel) REMOVE n:WrongLabel, n.property;
```
