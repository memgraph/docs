---
id: return
title: RETURN clause
sidebar_label: RETURN
---

The `RETURN` clause defines which data should be included in the resulting set. 

[Data Set](#data-set)
[1. Returning nodes](#1-returning-nodes)
[2. Returning relationships](#2-returning-relationships)
[3. Returning properties](#3-returning-properties)
[4. Returning multiple elements](#4-returning-multiple-elements)
[5. Returning all elements](#5-returning-all-elements)
[6. Handling uncommon characters](#6-handling-uncommon-characters)
[7. Returning elements with an alias](#7-returning-elements-with-an-alias)
[8. Optional properties](#8-optional-properties)
[9. Returning expressions](#9-returning-expressions)
[10. Returning unique results](#10-returning-unique-results)
[Data set Queries](#data-set-queries)

## Data Set

The following examples are executed with this data set. You can create this data set 
locally by executing the queries at the end of the page: [Data Set](#data-set-queries).

<img
  src="https://raw.githubusercontent.com/g-despot/images/master/data_set.png"
  alt="Data set"
  style={{height: 380}}
/>

## 1. Returning nodes

The node variable needs to be added to the `RETURN` statement:

```cypher
MATCH (c:Country {name: 'United Kingdom'})
RETURN c;
```

Output:
```nocopy
+-----------------------------------------------------------------------------------------------------+
| c                                                                                                   |
+-----------------------------------------------------------------------------------------------------+
| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |
+-----------------------------------------------------------------------------------------------------+
```

## 2. Returning relationships

The relationship variable needs to be added to the `RETURN` statement:

```cypher
MATCH (c:Country {name: 'United Kingdom'})<-[r]-(:Person {name: 'Harry'})
RETURN type(r);
```

Output:
```nocopy
+------------+
| type(r)    |
+------------+
| WORKING_IN |
| LIVING_IN  |
+------------+
```

## 3. Returning properties

The property of a node or a relationship can be returned by using the dot separator:

```cypher
MATCH (c:Country {name: 'United Kingdom'})
RETURN c.name;
```

Output:
```nocopy
+----------------+
| c.name         |
+----------------+
| United Kingdom |
+----------------+
```

## 4. Returning multiple elements

To return multiple elements separate them with a comma character:

```cypher
MATCH (c:Country {name: 'United Kingdom'})
RETURN c.name, c.population, c.continent;
```

Output:
```nocopy
+----------------+----------------+----------------+
| c.name         | c.population   | c.continent    |
+----------------+----------------+----------------+
| United Kingdom | 66000000       | Europe         |
+----------------+----------------+----------------+
```

## 5. Returning all elements

To return all the elements from a query, use the `*` symbol:

```cypher
MATCH (:Country {name: 'United Kingdom'})-[]-(p:Person)
RETURN *;
```

Output:
```nocopy
+---------------------------+
| p                         |
+---------------------------+
| (:Person {name: "Harry"}) |
| (:Person {name: "Harry"}) |
| (:Person {name: "Anna"})  |
+---------------------------+
```

## 6. Handling uncommon characters

Uncommon characters are handled using placeholder variables enclosed with the symbol `\``.
For example, a query could look like this:

```cypher
MATCH (`An uncommon variable!`)
WHERE `An uncommon variable!`.name = 'A'
RETURN `An uncommon variable!`.value;
```

## 7. Returning elements with an alias

You can specify an alias for an element in the `RETURN` statement using `AS`:

```cypher
MATCH (c:Country {name: 'United Kingdom'})
RETURN c.name AS Name;
```

Output:
```nocopy
+----------------+
| Name           |
+----------------+
| United Kingdom |
+----------------+
```

## 8. Optional properties

If the property being returned does not exist, `null` will be returned:

```cypher
MATCH (c:Country {name: 'United Kingdom'})
RETURN c.color;
```

Output:
```nocopy
+---------+
| c.color |
+---------+
| Null    |
+---------+
```

## 9. Returning expressions

 Expressions can be included in the `RETURN` statement:

```cypher
MATCH (c:Country {name: 'United Kingdom'})
RETURN c.name = 'United Kingdom', "Literal";
```

Output:
```nocopy
+---------------------------+---------------------------+
| c.name = 'United Kingdom' | "Literal"                 |
+---------------------------+---------------------------+
| true                      | Literal                   |
+---------------------------+---------------------------+
```

## 10. Returning unique results

The `RETURN` statement can be followed by the `DISTINCT` operator, which will remove duplicate results:

```cypher
MATCH ()-[:LIVING_IN]->(c)
RETURN DISTINCT c;
```

Output:
```nocopy
+-----------------------------------------------------------------------------------------------------+
| c                                                                                                   |
+-----------------------------------------------------------------------------------------------------+
| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000})         |
| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |
+-----------------------------------------------------------------------------------------------------+
```

## Data set Queries

We encourage you to try out the examples by yourself.
You can get our data set locally by executing the following query block.

```cypher
MATCH (n) DETACH DELETE n;

CREATE (c1:Country {name: 'Germany', language: 'German', continent: 'Europe', population: 83000000});
CREATE (c2:Country {name: 'France', language: 'French', continent: 'Europe', population: 67000000});
CREATE (c3:Country {name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000});

MATCH (c1),(c2)
WHERE c1.name= 'Germany' AND c2.name = 'France'
CREATE (c2)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'John'})-[:LIVING_IN {date_of_start: 2014}]->(c1);

MATCH (c)
WHERE c.name= 'United Kingdom'
CREATE (c)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'Harry'})-[:LIVING_IN {date_of_start: 2013}]->(c);

MATCH (p1),(p2)
WHERE p1.name = 'John' AND p2.name = 'Harry'
CREATE (p1)-[:FRIENDS_WITH {date_of_start: 2011}]->(p2);

MATCH (p1),(p2)
WHERE p1.name = 'John' AND p2.name = 'Harry'
CREATE (p1)<-[:FRIENDS_WITH {date_of_start: 2012}]-(:Person {name: 'Anna'})-[:FRIENDS_WITH {date_of_start: 2014}]->(p2);

MATCH (p),(c1),(c2)
WHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'
CREATE (c2)<-[:LIVING_IN {date_of_start: 2014}]-(p)-[:LIVING_IN {date_of_start: 2014}]->(c1);

MATCH (n)-[r]->(m) RETURN n,r,m;
```