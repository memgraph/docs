# WHERE

`WHERE` isn't usually considered a standalone clause but rather a part of the `MATCH`, `OPTIONAL MATCH` and `WITH` clauses.

The difference when using `WHERE` with these clauses is that it only filter the results in the case of the `WITH` clause, while it adds constraints to the patterns described in the case of `MATCH` and `OPTIONAL MATCH`.

`WHERE` is part of the directly preceding `MATCH` or `OPTIONAL MATCH` clause and should always be used like that to avoid problems with performance or results.

1. Basic usage
    1. Boolean Operators
    2. Inequality Operators Operators
    3. Filter with node labels
    4. Filter with node properties
    5. Filter with relationship properties
    6. Check if property is not null 
2. Basic matching with relationships
    1. Get all related nodes
    2. Get related nodes with a label
    3. Get related nodes with a directed relationship
    4. Get a relationship

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

## 1. Basic Usage

### 1.1 Boolean Operators

Standard boolean operators like `NOT`, `AND`, `OR` and `XOR` can be used.

```openCypher
MATCH (c:Country)
WHERE c.language = 'English' AND  c.continent = 'Europe'
RETURN c.name;
```

Output:
```
+----------------+
| c.name         |
+----------------+
| United Kingdom |
+----------------+
```

### 1.2 Inequality Operators Operators

Standard inequality operators like `<`, `<=`, `>` and `>=` can be used.

```openCypher
MATCH (c:Country)
WHERE (c.population > 80000000)
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

### 1.3 Filter with node labels

Nodes can be filtered by their label using the `WHERE` clause instead of specifying it directly in the `MATCH` clause.

```openCypher
MATCH (c)
WHERE c:Country
RETURN c.name;
```

Output:
```
+----------------+
| c.name         |
+----------------+
| Germany        |
| France         |
| United Kingdom |
+----------------+
```

### 1.4 Filter with node properties

Just as labels, node properties can be used in the WHERE clause to filter nodes.

```openCypher
MATCH (c:Country)
WHERE c.population < 70000000
RETURN c.name;
```

Output:
```
+----------------+
| c.name         |
+----------------+
| France         |
| United Kingdom |
+----------------+
```

### 1.5 Filter with relationship properties

Just as with node properties, relationship properties can be used as filters.

```openCypher
MATCH (:Country {name: 'United Kingdom'})-[r]-(p)
WHERE r.date_of_start = 2014
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

### 1.6 Check if property is not null

To check if a node or relationship property exists use the `IS NOT NULL` option.

```openCypher
MATCH (c:Country)
WHERE c.name = 'United Kingdom' AND c.population IS NOT NULL
RETURN c.name, c.population;
```

Output:
```
+----------------+----------------+
| c.name         | c.population   |
+----------------+----------------+
| United Kingdom | 66000000       |
+----------------+----------------+
```

## 2. String Matching

Apart from comparison and concatenation operators openCypher provides special
string operators for easier matching of substrings:

Operator           | Description
-------------------|------------
 `a STARTS WITH b` | Returns true if prefix of string a is equal to string b.
 `a ENDS WITH b`   | Returns true if suffix of string a is equal to string b.
 `a CONTAINS b`    | Returns true if some substring of string a is equal to string b.

 ```openCypher
MATCH (c:Country)
WHERE c.name STARTS WITH 'G' AND NOT c.name CONTAINS 't'
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

## 3. Regular Expressions

Inside `WHERE` clause, you can use regular expressions for text filtering. To
use a regular expression, you need to use the `=~` operator.

For example, finding all `Person` nodes which have a name ending with `a`.

```opencypher
MATCH (n :Person) WHERE n.name =~ ".*a$" RETURN n;
```

Output:
```
+--------------------------+
| n                        |
+--------------------------+
| (:Person {name: "Anna"}) |
+--------------------------+
```

The regular expression syntax is based on the modified ECMAScript regular
expression grammar. The ECMAScript grammar can be found
[here](http://ecma-international.org/ecma-262/5.1/#sec-15.10), while the
modifications are described in [this
document](https://en.cppreference.com/w/cpp/regex/ecmascript).