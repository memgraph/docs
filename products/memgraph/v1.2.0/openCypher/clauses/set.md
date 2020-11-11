# SET

The `SET` clause is used to update labels on nodes and properties on nodes and relationships.

1. Set a property
2. Set multiple properties
3. Set node label
4. Update a property
5. Removing a property
6. Copy all properties
7. Replacing all properties using map
8. Updating all properties using map

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

## 1. Set a property

The `SET` clause can be used to set the value of a property on a node or relationship.

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c.population = 83000000
RETURN c
```

## 2. Set multiple properties

The `SET` clause can be used to set the value of multiple properties nodes or relationships by separating them with a comma.

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c.population = 83000000, c.continent = 'Europe'
RETURN c
```

## 3. Set node label

The `SET` clause can be used to set the label on a node. If the node has a label, a new one will be added while te old one is left as is.

```openCypher
MATCH (c { name: 'Germany' })
SET c:Land
RETURN c
```

Multiple labels can be also set.

```openCypher
MATCH (c { name: 'Germany' })
SET c:Place:Area
RETURN c
```

## 4. Update a property

The `SET` clause can be used to update the value or type of a property on a node or relationship.

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c.population = 84000000
RETURN c
```

## 5. Removing a property

The `SET` clause can be used to remove the value of a property on a node or relationship by setting it to `NULL`. 

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c.population = NULL
RETURN c
```

## 6. Copy all properties

If `SET` is used to copy the properties of one node/relationship to another, all the properties of the latter will be removed and replaced with the new ones.

```openCypher
MATCH (c1:Country { name: 'Germany' }), (c2:Country { name: 'France' })
SET c2 = c1
RETURN c2, c1
```

## 7. Replacing all properties using map

If `SET` is used with the property replacement operator `=`, all the properties in the map that are on the node or relationship will be updated.
The properties that are not on the node or relationship but are in the map will be added. The properties that are not in the map will be removed. 

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c = { name: 'Germany', population: '85000000'}
RETURN c
```

If an empty map is used, all the properties of a node or relationship will be set to `NULL`.

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c = { }
RETURN c
```

## 8. Updating all properties using map

If `SET` is used with the property mutation operator `+=`, all the properties in the map that are on the node or relationship will be updated.
The properties that are not on the node or relationship but are in the map will be added. The properties that are not in the map will be left as is. 

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c += { name: 'Germany', population: '85000000'}
RETURN c
```