# MERGE

The `MERGE` clause is used to ensure that a pattern you are looking for exists in the database. This means that if the pattern is not found, it will be created. In a way, this clause is like a combination of `MATCH` and `CREATE`.

1. Merging nodes
2. Merging relationships
2. Merge with `ON CREATE` and `ON MATCH`
3. 

## Data Set

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

1. Merging nodes with labels

If `MERGE` is used on a node with a label that doesn't exist in the database, the node is created.

```openCypher
MERGE (city:City)
RETURN city
```

Output:
```
+---------+
| city    |
+---------+
| (:City) |
+---------+
```

2. Merging nodes with properties

If `MERGE` is used on a node with properties that don't match any existing node, that node is created.

```openCypher
MERGE (city { name: 'London' })
RETURN city
```

Output:
```
+--------------------+
| city               |
+--------------------+
| ({name: "London"}) |
+--------------------+
```

3. Merging nodes with labels and properties

If `MERGE` is used on a node with labels and properties that don't match any existing node, that node is created.

```openCypher
MERGE (city:City { name: 'London' })
RETURN city
```

Output:
```
+--------------------------+
| city                     |
+--------------------------+
| (:City {name: "London"}) |
+--------------------------+
```

4. Merging nodes with existing node properties

If `MERGE` is used with properties on an existing node, a new node is created for each unique value of that property.

```openCypher
MATCH (p:Person)
MERGE (h:Human { name: p.name })
RETURN h.name
```

Output:
```
+--------+
| h.name |
+--------+
| John   |
| Harry  |
| Anna   |
+--------+
```

5. Merging with `ON CREATE`

The `ON CREATE` part of a `MERGE` clause will only be executed if the node needs to be created.

```openCypher
MERGE (p:Person { name: 'Lucille' })
ON CREATE SET p.date_of_creation = timestamp()
RETURN p.name, p.date_of_creation
```

Output:
```
+--------------------+--------------------+
| p.name             | p.date_of_creation |
+--------------------+--------------------+
| Lucille            | 1605080852685      |
+--------------------+--------------------+
```

6. Merging with `ON MATCH`

The `ON MATCH` part of a `MERGE` clause will only be executed if the node is found.

```openCypher
MERGE (p:Person { name: 'John' })
ON MATCH SET p.found = TRUE
RETURN p.name, p.found
```

Output:
```
+---------+---------+
| p.name  | p.found |
+---------+---------+
| John    | true    |
+---------+---------+
```

7. Merging with `ON CREATE` and `ON MATCH`

The `MERGE` clause can be used with both the `ON CREATE` and `ON MATCH` options.

```openCypher
MERGE (p:Person { name: 'Angela' })
ON CREATE SET p.notFound = TRUE
ON MATCH SET p.found = TRUE
RETURN p.name, p.notFound, p.found
```

Output:
```
+------------+------------+------------+
| p.name     | p.notFound | p.found    |
+------------+------------+------------+
| Angela     | true       | Null       |
+------------+------------+------------+
```

1. Merging on a relationship