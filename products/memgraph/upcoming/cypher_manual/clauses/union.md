# UNION

The `UNION` clause is used to combine the result of multiple queries.

1. [Combine queries and retain duplicates](#1-combine-queries-and-retain-duplicates)
2. [Combine queries and remove duplicates](#2-combine-queries-and-remove-duplicates)

## Data Set

The following examples are executed with this data set. You can create this data set 
locally by executing the queries at the end of the page: [Data Set](#data-set-queries).

<img src="https://raw.githubusercontent.com/g-despot/images/master/data_set.png" height=400 />

## 1. Combine queries and retain duplicates

To combine two or more queries and return their results without removing duplicates, use the `UNION ALL` clause.
First, let's add a few existing nodes to the data set.

```opencypher
CREATE (:Person { name: 'John' });
CREATE (:Person { name: 'Anna' });
```

A query with the `UNION ALL` clause could look like this:

```opencypher
MATCH (c:Country) 
RETURN c.name as columnName
UNION ALL 
MATCH (p:Person)
RETURN p.name AS columnName;
```

Output:
```
+----------------+
| columnName     |
+----------------+
| Germany        |
| France         |
| United Kingdom |
| John           |
| Harry          |
| Anna           |
| John           |
| Anna           |
+----------------+
```

## 2. Combine queries and remove duplicates

To combine two or more queries and return their results without removing duplicates, use the `UNION` clause without `ALL`.

```opencypher
MATCH (c:Country) 
RETURN c.name as columnName
UNION 
MATCH (p:Person)
RETURN p.name AS columnName;
```

Output:
```
+----------------+
| columnName     |
+----------------+
| Germany        |
| France         |
| United Kingdom |
| John           |
| Harry          |
| Anna           |
+----------------+
```

## Data set Queries

We encourage you to try out the examples by yourself.
You can get our data set locally by executing the following query block.

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

CREATE (:Person { name: 'John' });
CREATE (:Person { name: 'Anna' });

MATCH (n)-[r]->(m) RETURN n,r,m;
```