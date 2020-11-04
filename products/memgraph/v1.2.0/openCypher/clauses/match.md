# MATCH

1. Basic Usage
    1. Get all nodes
    2. Get all nodes with a label
2. Matching nodes using relationships
    1. Get all related nodes
    2. Get related nodes with a label
    3. G



## Basic Usage

### Get all nodes

Without specifying labels, the query will return all the nodes in a graph.

```openCypher
MATCH n 
RETURN n
```

### Get all nodes with a label

By specifying the label of a node, all the nodes with that label are returned.

```openCypher
MATCH (c:Country) AND 
RETURN c
```

## Matching nodes using relationships

### Get all related nodes

By using the *related to* symbol `--`, nodes that have a relationship with the specified node can be returned.
The symbol represents an undirected relationship which means the direction of the relationship is not taken into account.

```openCypher
MATCH (:Country { name: 'France' })--(n)
RETURN n
```

### Get related nodes with a label

To only return *related to* nodes with a specific label you need to add it using the label syntax.

```openCypher
MATCH (:Country { name: 'France' })--(city:City)
RETURN city
```

### Get related nodes with a directed relationship

The *related to* symbol `--` can be extended by using:
 * `-->` to specify outgoing relationships,
 * `<--` to specify ingoing relationships.

```openCypher
MATCH (:Country { name: 'France' })<--(city:City)
RETURN city
```

### Get a relationship

If you want to return the relationship between two nodes or a property of the relationship, a variable is required.
A directed or undirected realtionship can be used.

This query returns the relationship and its type:

```openCypher
MATCH (:Country { name: 'France' })<-[r]-(city:City)
RETURN r, type(r)
```

This query returns the property `name` of the relationship:

```openCypher
MATCH (:Country { name: 'France' })<-[r]-(city:City)
RETURN r.name
```

### Get a relationship with a type

To return a relationship with a specified type you need to use the type syntax.
A directed or undirected realtionship can be used.

```openCypher
MATCH (:Country { name: 'France' })<--[r:IN]
RETURN r.name
```

### Get relationships with multiple types

To return relationships with any of the specified types, the types need to be chained together with the pipe symbol `|`.

```openCypher
MATCH (:Person { name: 'John' })--[c:LIVING_IN|WORKING_IN]
RETURN c.name
```

### Uncommon characters in relationship types 

If a type has non-letter characters, like spaces for example, the backtick symbol ` needs to be used to quote these.
If the relationship type `LIVING_IN` had a space instead of an underscore.

```openCypher
MATCH (:Country { name: 'France' })<-[r:`LIVING IN`]-()
RETURN r.name
```

### Match with multiple relationships

Multiple relationship statements can be specified in the query.

```openCypher
MATCH (:Country { name: 'France' })<-[l:LIVING_IN]-(person)-[w:WORKING_IN]->(:Country { name: 'Germany' })
RETURN person.name
```

### Variable length relationships

If a node needs to be specified by its distance in relationship→node hops, the following sytax is used: `-[:TYPE*minHops..maxHops]→`.
minHops and maxHops are optional and default to 1 and infinity respectively. The dots can be ommited if both are not specified or if 
only one is set which implies a fixed length pattern.

```openCypher
MATCH (uk { name: 'United Kingdom' })<-[:WORKING_IN*1..2]-(person:Person)
RETURN person
```

### Variable length relationships with multiple relationship types

If variable lengths are used with multiple stacked up relationship types, `*minHops..maxHops` applies to any combination of relationships.

```openCypher
MATCH (country { name: 'United Kingdom' })<-[:WORKING_IN|LIVING_IN*1..2]-(person:Person)
RETURN person
```

### Returning multiple relationships with variable length

If a variable length is used, the list of relationships can be returnes by adding `variable=` at the beginning of the `MATCH` clause.

```openCypher
MATCH p=(country { name: 'France' })-[:LIVING_IN*2]-(person)
RETURN relationships(p)
```
