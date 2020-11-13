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

The following examples are executed with this data set in the database. You can create this data set 
locally by executing the queries at the end of the page: [Data Set Queries](#Data-set-queries).

<img src="https://raw.githubusercontent.com/g-despot/images/master/data_set.png" height=400 />

## 1. Set a property

The `SET` clause can be used to set the value of a property on a node or relationship.

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c.population = 83000001
RETURN c.name, c.population;
```

Output:
```
+--------------+--------------+
| c.name       | c.population |
+--------------+--------------+
| Germany      | 83000001     |
+--------------+--------------+
```

## 2. Set multiple properties

The `SET` clause can be used to set the value of multiple properties nodes or relationships by separating them with a comma.

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c.capital = 'Berlin', c.population = 83000002
RETURN c.name, c.population, c.capital;
```

Output:
```
+--------------+--------------+--------------+
| c.name       | c.population | c.capital    |
+--------------+--------------+--------------+
| Germany      | 83000002     | Berlin       |
+--------------+--------------+--------------+
```

## 3. Set node label

The `SET` clause can be used to set the label on a node. If the node has a label, a new one will be added while te old one is left as is.

```openCypher
MATCH (c { name: 'Germany' })
SET c:Land
RETURN labels(c);
```

Output:
```
+---------------------+
| labels(c)           |
+---------------------+
| ["Country", "Land"] |
+---------------------+
```

Multiple labels can be also set.

```openCypher
MATCH (c { name: 'Germany' })
SET c:Place:Area
RETURN labels(c);
```

Output:
```
+--------------------------------------+
| labels(c)                            |
+--------------------------------------+
| ["Country", "Land", "Place", "Area"] |
+--------------------------------------+
```

## 4. Update a property

The `SET` clause can be used to update the value or type of a property on a node or relationship.

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c.population = 'not available'
RETURN c.population;
```

Output:
```
+---------------+
| c.population  |
+---------------+
| not available |
+---------------+
```

## 5. Removing a property

The `SET` clause can be used to remove the value of a property on a node or relationship by setting it to `NULL`. 

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c.population = NULL
RETURN c.population;
```

Output:
```
+--------------+
| c.population |
+--------------+
| Null         |
+--------------+
```

## 6. Copy all properties

If `SET` is used to copy the properties of one node/relationship to another, all the properties of the latter will be removed and replaced with the new ones.

```openCypher
MATCH (c1:Country { name: 'Germany' }), (c2:Country { name: 'France' })
SET c2 = c1
RETURN c2, c1;
```

Output:
```
+----------------------------------------------------------------------------+----------------------------------------------------------------------------+
| c2                                                                         | c1                                                                         |
+----------------------------------------------------------------------------+----------------------------------------------------------------------------+
| (:Country {continent: "Europe", language: "German", name: "Germany"})      | (:Country:Land {continent: "Europe", language: "German", name: "Germany"}) |
+----------------------------------------------------------------------------+----------------------------------------------------------------------------+
```

## 7. Replacing all properties using map

If `SET` is used with the property replacement operator `=`, all the properties in the map that are on the node or relationship will be updated.
The properties that are not on the node or relationship but are in the map will be added. The properties that are not in the map will be removed. 

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c = { name: 'Germany', population: '85000000'}
RETURN c;
```

Output:
```
+------------------------------------------------------+
| c                                                    |
+------------------------------------------------------+
| (:Country {name: "Germany", population: "85000000"}) |
+------------------------------------------------------+
```

If an empty map is used, all the properties of a node or relationship will be set to `NULL`.

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c = { }
RETURN c;
```

Output:
```
+------------+
| c          |
+------------+
| (:Country) |
+------------+
```

## 8. Updating all properties using map

If `SET` is used with the property mutation operator `+=`, all the properties in the map that are on the node or relationship will be updated.
The properties that are not on the node or relationship but are in the map will be added. The properties that are not in the map will be left as is. 

```openCypher
MATCH (c:Country { name: 'Germany' })
SET c += { name: 'Germany', population: '85000000'}
RETURN c;
```

Output:
```
+-----------------------------------------------------------------------------------------------+
| c                                                                                             |
+-----------------------------------------------------------------------------------------------+
| (:Country {continent: "Europe", language: "German", name: "Germany", population: "85000000"}) |
+-----------------------------------------------------------------------------------------------+
```

## Data set Queries

We encourage you to try out the examples by yourself. Just run the following queries to 
get the data set we have been exploring in our examples.

```openCypher
MATCH (n) DETACH DELETE n;

CREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });
CREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });
CREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });

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