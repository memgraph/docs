# WITH

The `WITH` is used to chain together parts of a query, piping the results from one to be used as starting points or criteria in the next.

1. [Filter on aggregate functions](#1-Filter-on-aggregate-functions)
2. [Sorting results](#2-Sorting-results)
3. [Limited path searches](#3-Limited-path-searches)


## Data Set

The following examples are executed with this data set in the database. You can create this data set 
locally by executing the queries at the end of the page: [Data Set Queries](#Data-set-queries).

<img src="https://raw.githubusercontent.com/g-despot/images/master/data_set.png" height=400 />

## 1. Filter on aggregate functions

Aggregated results have to pass through a `WITH` if you want to filter them.

```openCypher
MATCH (p:Person { name: 'John' })--(person)-->()
WITH person, count(*) AS foaf
WHERE foaf > 1
RETURN person.name;
```

Output:
```
+-------------+
| person.name |
+-------------+
| Harry       |
| Anna        |
+-------------+
```

## 2. Sorting results

The `WITH` clause can be used to order results before using `collect()` on them.

```openCypher
MATCH (n)
WITH n
ORDER BY n.name ASC LIMIT 3
RETURN collect(n.name);
```

Output:
```
+-------------------------------+
| collect(n.name)               |
+-------------------------------+
| ["Anna", "France", "Germany"] |
+-------------------------------+
```

## 3. Limited path searches

The `WITH` clause can be used to match paths, limit to a certain number, 
and then match again using those paths as a base.

```openCypher
MATCH (p1 { name: 'John' })--(p2)
WITH p2
ORDER BY p2.name ASC LIMIT 1
MATCH (p2)--(p3)
RETURN p3.name;
```

Output:
```
+----------------+
| p3.name        |
+----------------+
| John           |
| Harry          |
| Germany        |
| United Kingdom |
+----------------+
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