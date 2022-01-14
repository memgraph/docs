---
id: connecting-nodes
title: Connecting nodes
sidebar_label: Connecting nodes
---

Relationships (or edges) are the **lines that connect nodes** to each other and represent a defined connection between them. Every relationship has a source node and a target node that represent in which direction the relationship works. If this direction is important, the relationship is considered directed while otherwise, it's undirected. 

Relationships can also store data in the form of **properties**, just as nodes. In most cases, relationships store quantitative properties such as weights, costs, distances, ratings, etc. 

### Example

![](https://i.imgur.com/RuCvRBr.png)

In our example, the relationship between two nodes labeled `Person` could be of the type `MARRIED_TO`, while the relationship between `Person` and `City` is represented by the type `LIVES_IN`.

The relationship of the type `MARRIED_TO` has the property `weddingDate` which represents the date when the marriage was formed while relationships of the type `LIVES_IN` have the property `durationInYears` which denotes for how long a person has lived in the specified location.

### Creating relationships

To create a relationship between two nodes, we need to specify which nodes either by creating them or filtering them with the WHERE clause:

```cypher
CREATE (p1:Person { name: 'Harry' }), (p2:Person { name: 'Anna' })
CREATE (p1)-[r:MARRIED_TO]->(p2)
RETURN r;
```

If the nodes already existed, the query would look like this:

```cypher
MATCH (p1:Person),(p2:Person)
WHERE p1.name = 'Harry' AND p2.name = 'Anna'
CREATE (p1)-[r:MARRIED_TO]->(p2)
RETURN r;
```

Instead of using the CREATE clause you are just searching for existing nodes using the WHERE clause and accessing them through the use of variables `p1` and `p2`.

### Retrieving relationship types

The built-in function `type()` can be used to return the type of a relationship.

```cypher
CREATE (p1:Person { name: 'Harry' }), (p2:Person { name: 'Anna' })
CREATE (p1)-[r:MARRIED_TO { weddingDate: '27-06-2019' }]->(p2)
RETURN r, type(r);
```

### Querying using relationships

So far we have only used nodes and their labels for querying the database, but relationships can also be used within the same clauses:

```cypher
MATCH (p1)-[:MARRIED_TO]-(p2)
RETURN p1, p2
```

### Relationship properties

Just like with properties on nodes, when creating or matching a relationship, the same rules apply. You can add properties to relationships at the time of creation:

```cypher
CREATE (p1:Person { name: 'Harry' }), (p2:Person { name: 'Anna' })
CREATE (p1)-[r:MARRIED_TO { weddingDate: '27-06-2019' }]->(p2)
RETURN r;
```

You can also specify them in the MATCH clause:

```cypher
MATCH (p1)-[:MARRIED_TO { weddingDate: '27-06-2019' }]-(p2)
RETURN p1, p2
```

## SET clause

The SET clause is used to update labels on nodes and properties on nodes and relationships.

### Creating and updating properties

The SET clause can be used to create/update the value of a property on a node or relationship.

```cypher
MATCH (c:City)
WHERE c.name = 'London'
SET c.population = 8900000
RETURN c
```

The SET clause can be used to create/update the value of multiple properties nodes or relationships by separating them with a comma.

```cypher
MATCH (c:City)
WHERE c.name = 'London'
SET c.population = 8900000, c.country = 'United Kingdom'
RETURN c
```

### Creating and updating node labels

The SET clause can be used to create/update the label on a node. If the node has a label, a new one will be added while the old one is left as is.

```cypher
MATCH (c:City:Location)
SET c:City
RETURN labels(c)
```

### Removing a property

The SET clause can be used to remove the value of a property on a node or relationship by setting it to NULL:

```cypher
MATCH (c:City)
WHERE c.name = 'London'
SET c.country = NULL
RETURN c
```

### Copy all properties

If SET is used to copy the properties of one node/relationship to another, all the properties of the latter will be removed and replaced with the new ones.

```cypher
CREATE (p1:Person { name: 'Harry' }), (p2:Person { name: 'Anna' })
SET p1 = p2
RETURN p1, p2
```

