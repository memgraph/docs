# MATCH

The `MATCH` clause is used to obtain data from the database by matching it to a given pattern.

1. [Matching nodes](#1-matching-nodes)
    1. [Get all nodes](#1-1-get-all-nodes)
    2. [Get all nodes with a label](#1-2-get-all-nodes-with-a-label)
2. [Matching relationships](#2-matching-relationships)
    1. [Get all related nodes](#2-1-get-all-related-nodes)
    2. [Get related nodes with a label](#2-2-get-related-nodes-with-a-label)
    3. [Get related nodes with a directed relationship](#2-3-get-related-nodes-with-a-directed-relationship)
    4. [Get a relationship](#2-4-get-a-relationship)
    5. [Matching on a relationship with a type](#2-5-matching-on-a-relationship-with-a-type)
    6. [Matching on relationships with multiple types](#2-6-matching-on-relationships-with-multiple-types)
    7. [Uncommon characters in relationship types](#2-7-uncommon-characters-in-relationship-types)
    8. [Match with multiple relationships](#2-8-match-with-multiple-relationships)
3. [Matching with variable length relationships](#3-matching-with-variable-length-relationships)
    1. [Variable length relationships](#3-1-variable-length-relationships)
    2. [Variable length relationships with multiple relationship types](#3-2-variable-length-relationships-with-multiple-relationship-types)
    3. [Returning multiple relationships with variable length](#3-3-returning-multiple-relationships-with-variable-length)

## Data Set

The following examples are executed with this data set in the database. You can create this data set 
locally by executing the queries at the end of the page: [Data Set Queries](#Data-set-queries).

<img src="https://raw.githubusercontent.com/g-despot/images/master/data_set.png" height=400 />

## 1. Matching nodes

### 1.1 Get all nodes

Without specifying labels, the query will return all the nodes in a graph.

```openCypher
MATCH (n) 
RETURN n;
```

Output:
```
+-----------------------------------------------------------------------------------------------------+
| n                                                                                                   |
+-----------------------------------------------------------------------------------------------------+
| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000})         |
| (:Country {continent: "Europe", language: "French", name: "France", population: 67000000})          |
| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |
| (:Person {name: "John"})                                                                            |
| (:Person {name: "Harry"})                                                                           |
| (:Person {name: "Anna"})                                                                            |
+-----------------------------------------------------------------------------------------------------+
```

### 1.2 Get all nodes with a label

By specifying the label of a node, all the nodes with that label are returned.

```openCypher
MATCH (c:Country)
RETURN c;
```

Output:
```
+-----------------------------------------------------------------------------------------------------+
| c                                                                                                   |
+-----------------------------------------------------------------------------------------------------+
| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000})         |
| (:Country {continent: "Europe", language: "French", name: "France", population: 67000000})          |
| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |
+-----------------------------------------------------------------------------------------------------+
```

## 2. Matching relationships

### 2.1 Get all related nodes

By using the *related to* symbol `--`, nodes that have a relationship with the specified node can be returned.
The symbol represents an undirected relationship which means the direction of the relationship is not taken into account.

```openCypher
MATCH (:Person { name: 'John' })--(n)
RETURN n;
```

Output:
```
+---------------------------------------------------------------------------------------------+
| n                                                                                           |
+---------------------------------------------------------------------------------------------+
| (:Person {name: "Anna"})                                                                    |
| (:Country {continent: "Europe", language: "French", name: "France", population: 67000000})  |
| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000}) |
| (:Person {name: "Harry"})                                                                   |
+---------------------------------------------------------------------------------------------+
```

### 2.2 Get related nodes with a label

To only return *related to* nodes with a specific label you need to add it using the label syntax.

```openCypher
MATCH (:Person { name: 'John' })--(p:Person)
RETURN p;
```

Output:
```
+---------------------------+
| p                         |
+---------------------------+
| (:Person {name: "Harry"}) |
| (:Person {name: "Anna"})  |
+---------------------------+
```

### 2.3 Get related nodes with a directed relationship

The *related to* symbol `--` can be extended by using:
 * `-->` to specify outgoing relationships,
 * `<--` to specify ingoing relationships.

```openCypher
MATCH (:Country { name: 'France' })<--(p:Person)
RETURN p;
```

Output:
```
+--------------------------+
| p                        |
+--------------------------+
| (:Person {name: "John"}) |
+--------------------------+
```

### 2.4 Get a relationship

If you want to return the relationship between two nodes or a property of the relationship, a variable is required.
A directed or undirected relationship can be used.

This query returns the relationship and its type:

```openCypher
MATCH (:Person { name: 'John' })-[r]->()
RETURN type(r);
```

Output:
```
+--------------+
| type(r)      |
+--------------+
| WORKING_IN   |
| LIVING_IN    |
| FRIENDS_WITH |
+--------------+
```

This query also returns the property `date_of_start` of the relationship:

```openCypher
MATCH (:Person { name: 'John' })-[r]->()
RETURN type(r), r.date_of_start;
```

Output:
```
+-----------------+-----------------+
| type(r)         | r.date_of_start |
+-----------------+-----------------+
| WORKING_IN      | 2014            |
| LIVING_IN       | 2014            |
| FRIENDS_WITH    | 2011            |
+-----------------+-----------------+
```

### 2.5 Match on a relationship with a type

To return a relationship with a specified type you need to use the type syntax.
A directed or undirected relationship can be used.

```openCypher
MATCH (p:Person { name: 'John' })-[:LIVING_IN]-(c)
RETURN c.name;
```

Output:
```
+---------+
| c.name  |
+---------+
| Germany |
+---------+
```

### 2.6 Matching on relationships with multiple types

To return relationships with any of the specified types, the types need to be chained together with the pipe symbol `|`.

```openCypher
MATCH (p:Person { name: 'John' })-[:LIVING_IN|:WORKING_IN]-(c)
RETURN c.name;
```

Output:
```
+---------+
| c.name  |
+---------+
| France  |
| Germany |
+---------+
```

### 2.7 Uncommon characters in relationship types 

If a type has non-letter characters, like spaces, for example, the backtick symbol \` needs to be used to quote these.
If the relationship type `LIVING_IN` had a space instead of an underscore, a possible query would look like this.

```openCypher
MATCH (:Country { name: 'France' })<-[r:`LIVING IN`]-()
RETURN r.name;
```

### 2.8 Match with multiple relationships

Multiple relationship statements can be specified in the query.

```openCypher
MATCH (:Country { name: 'France' })<-[l:WORKING_IN]-(p)-[w:LIVING_IN]->(:Country { name: 'Germany' })
RETURN p.name;
```

Output:
```
+--------+
| p.name |
+--------+
| John   |
+--------+
```

## 3. Matching with variable length relationships

### 3.1 Variable length relationships

If a node needs to be specified by its distance in relationship→node hops, the following syntax is used: `-[:TYPE*minHops..maxHops]→`.
minHops and maxHops are optional and default to 1 and infinity respectively. The dots can be omitted if both are not specified or if 
only one is set which implies a fixed length pattern.

```openCypher
MATCH ({ name: 'United Kingdom' })-[:LIVING_IN*1..2]-(n)
RETURN n;
```

Output:
```
+---------------------------------------------------------------------------------------------+
| n                                                                                           |
+---------------------------------------------------------------------------------------------+
| (:Person {name: "Harry"})                                                                   |
| (:Person {name: "Anna"})                                                                    |
| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000}) |
+---------------------------------------------------------------------------------------------+
```

### 3.2 Variable length relationships with multiple relationship types

If variable lengths are used with multiple stacked up relationship types, `*minHops..maxHops` applies to any combination of relationships.

```openCypher
MATCH ({ name: 'United Kingdom' })<-[:WORKING_IN|FRIENDS_WITH*1..2]-(P:Person)
RETURN P;
```

Output:
```
+---------------------------+
| P                         |
+---------------------------+
| (:Person {name: "John"})  |
| (:Person {name: "Harry"}) |
| (:Person {name: "Anna"})  |
+---------------------------+
```

### 3.3 Returning multiple relationships with variable length

If a variable length is used, the list of relationships can be returned by adding `variable=` at the beginning of the `MATCH` clause.

```openCypher
MATCH p=({ name: 'John' })<-[:FRIENDS_WITH*1..2]-()
RETURN relationships(p);
```

Output:
```
+----------------------------------------+
| relationships(p)                       |
+----------------------------------------+
| [[FRIENDS_WITH {date_of_start: 2012}]] |
+----------------------------------------+
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