---
id: return
title: RETURN clause
sidebar_label: RETURN
---

The `RETURN` clause defines which data should be included in the resulting set.

1. [Returning nodes](#1-returning-nodes) <br />
2. [Returning relationships](#2-returning-relationships) <br />
3. [Returning properties](#3-returning-properties) <br />
4. [Returning multiple elements](#4-returning-multiple-elements) <br />
5. [Returning all elements](#5-returning-all-elements) <br />
6. [Handling uncommon characters](#6-handling-uncommon-characters) <br />
7. [Returning elements with an alias](#7-returning-elements-with-an-alias) <br />
8. [Optional properties](#8-optional-properties) <br />
9. [Returning expressions](#9-returning-expressions) <br />
10. [Returning unique results](#10-returning-unique-results)<br />
11. [Returning aggregated results](#11-returning-aggregated-results)<br />
12. [Limiting the number of returned results](#12-limiting-the-number-of-returned-results)<br />
13. [Order results](#13-order-results)

## Dataset

The following examples are executed with this dataset. You can create this dataset
locally by executing the queries at the end of the page: [Dataset queries](#data-set-queries).

![Data set](../data/clauses/data_set.png)

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

## 11. Returning aggregated results

The `RETURN` statement can be used with [`Aggregation`](https://memgraph.com/docs/cypher-manual/functions#aggregation-functions) functions:

```cypher
MATCH (c:Country)
RETURN AVG(c.population) as average_population;
```
Output:

```nocopy
+-----------------------------------------------------------------------------------------------------+
| population                                                                                          |
+-----------------------------------------------------------------------------------------------------+
| 72,000,000                                                                                           |
+-----------------------------------------------------------------------------------------------------+
```

Aggregations functions can be also used with `DISTINCT` operator, which will performe calculations only on unique values:

```cypher
MATCH ()-[:LIVING_IN]->(c)
RETURN AVG(DISTINCT c.population) as average population;
```
Output:

```nocopy
+-----------------------------------------------------------------------------------------------------+
| population                                                                                          |
+-----------------------------------------------------------------------------------------------------+
| 74,500,000                                                                                            |
+-----------------------------------------------------------------------------------------------------+
```
## 12. Limiting the number of returned results

You can limit the number of returned results with the `LIMIT` sub-clause.
To get the first ten results, you can use this query:

```cypher
MATCH (n:Person) RETURN n LIMIT 10;
```

## 13. Order results

Since the patterns which are matched can come in any order, it is very useful to
be able to enforce some ordering among the results. In such cases, you can use
the `ORDER BY` sub-clause.

For example, the following query will get all `:Person` nodes and order them by
their names:

```cypher
MATCH (n:Person) RETURN n ORDER BY n.name;
```

By default, ordering will be ascending. To change the order to be descending,
you should append `DESC`.

For example, you can use this query to order people by their name descending:

```cypher
MATCH (n:Person) RETURN n ORDER BY n.name DESC;
```

You can also order by multiple variables. The results will be sorted by the
first variable listed. If the values are equal, the results are sorted by the
second variable, and so on.

For example, ordering by first name descending and last name ascending:

```cypher
MATCH (n:Person) RETURN n ORDER BY n.name DESC, n.lastName;
```

Note that `ORDER BY` sees only the variable names as carried over by `RETURN`.
This means that the following will result in an error.

```cypher
MATCH (old:Person) RETURN old AS new ORDER BY old.name;
```

Instead, the `new` variable must be used:

```cypher
MATCH (old:Person) RETURN old AS new ORDER BY new.name;
```

The `ORDER BY` sub-clause may come in handy with `SKIP` and/or `LIMIT`
sub-clauses. For example, to get the oldest person you can use the following:

```cypher
MATCH (n:Person) RETURN n ORDER BY n.age DESC LIMIT 1;
```

You can also order result before returning them. The following query will order
all the nodes according to name, and then return them in a list. 

```cypher
MATCH (n)
WITH n ORDER BY n.name DESC
RETURN collect(n.name) AS names;
```

## Dataset queries

We encourage you to try out the examples by yourself.
You can get our dataset locally by executing the following query block.

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

