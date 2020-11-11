# REMOVE

The `REMOVE` clause is used to remove labels and properties from nodes and edges.

1. Removing a property
2. Removing a label

## Data Set

```openCypher
MATCH (n) DETACH DELETE n;

CREATE (c1:Country { name: 'Germany'});
CREATE (c2:Country { name: 'France'});
CREATE (c3:Country { name: 'United Kingdom'});

MATCH (c1),(c2)
WHERE c1.name= 'Germany' AND c2.name = 'France'
CREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);

MATCH (c)
WHERE c.name= 'United Kingdom'
CREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);

MATCH (p1),(p2)
WHERE p1.name = 'John' AND p2.name = 'Harry'
CREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);

MATCH (p1),(p2)
WHERE p1.name = 'John' AND p2.name = 'Harry'
CREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);

MATCH (p),(c1),(c2)
WHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'
CREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);

MATCH (n)-[r]->(m) RETURN n,r,m;
```

## 1. Removing a property

The `REMOVE` clause can be used to remove a property from a node or relationship.

```opencypher
MATCH (n:Country { name: 'United Kingdom' })
REMOVE n.name
RETURN n
```

The `REMOVE` clause can't be used to remove all properties from a node or relationship. Instead, take a look at the `SET` clause.

## 2. Removing a label

The `REMOVE` clause can be used to remove a label from a node.

```opencypher
MATCH (n:Country { name: 'United Kingdom' })
REMOVE n:Country
RETURN n
```

Let's add the label `Country` back to the node with the name `United Kingdom` and the aditional label `Kingdom`.

```opencypher
MATCH (n { name: 'United Kingdom' })
SET n:Country:Kingdom
```

You can now remove multiple labels from a node at the same time. 

```opencypher
MATCH (n:Country { name: 'United Kingdom' })
REMOVE n:Country:Kingdom
RETURN n
```