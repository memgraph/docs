---
id: updating-nodes-and-relationships
title: Updating nodes and relationships
sidebar_label: Updating nodes and relationships
---

## SET clause

Use the `SET` clause to update labels on nodes and properties on nodes and
relationships.

Click [here](./clauses/set.md) for a more detailed explanation of what can be
done with `SET`.

Cypher supports combining multiple reads and writes using the `WITH` clause.
In addition to combining, the `MERGE` clause is provided which may create
patterns if they do not exist.

### Creating and updating properties

The `SET` clause can be used to create/update the value of a property on a node or
relationship:

```cypher
MATCH (c:City)
WHERE c.name = 'London'
SET c.population = 8900000
RETURN c;
```

The `SET` clause can be used to create/update the value of multiple properties
on nodes or relationships by separating them with a comma:

```cypher
MATCH (c:City)
WHERE c.name = 'London'
SET c.population = 8900000, c.country = 'United Kingdom'
RETURN c;
```

### Creating and updating node labels

The `SET` clause can be used to create/update the label on a node. If the node has
a label, a new one will be added while the old one is left as is:

```cypher
MATCH (c:City:Location)
SET c:City
RETURN labels(c);
```

### Removing a property

The `SET` clause can be used to remove the value of a property on a node or
relationship by setting it to `NULL`:

```cypher
MATCH (c:City)
WHERE c.name = 'London'
SET c.country = NULL
RETURN c;
```

### Copy all properties

If `SET` is used to copy the properties of one node/relationship to another, all
the properties of the latter will be removed and replaced with the new ones:

```cypher
CREATE (p1:Person {name: 'Harry'}), (p2:Person {name: 'Anna'})
SET p1 = p2
RETURN p1, p2;
```

### Bulk update

You can use `SET` clause to do a bulk update. Here is an example of how to
increment everyone's age by 1:

```cypher
MATCH (n:Person) SET n.age = n.age + 1;
```