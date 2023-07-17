---
id: call
title: CALL clause
sidebar_label: CALL
---

The `CALL` clause is used to call a subquery inside the existing query.

:::info

[MAGE procedures](/docs/mage/usage/calling-procedures) are also run with a query with the `CALL` clause at the beginning. 
Switch to MAGE documentation if you want to CALL a graph algorithm or some other procedure from the MAGE library.

:::

1. [Uses of CALL subquery](#1-uses-of-call-subquery) <br />
    1.1. [Cartesian products](#11-cartesian-products) <br />
    1.2. [Cartesian products with bounded symbols](#12-cartesian-products-with-bounded-symbols) <br />
    1.3. [Post-union processing](#13-post-union-processing) <br />
    1.4. [Observing changes from previous executions](#14-observing-changes-from-previous-executions)<br />
    1.5. [Unit subqueries](#15-unit-subqueries)

2. [Invalid uses of CALL subquery](#2-invalid-uses-of-call-subquery) <br />
    2.1. [Returning variables with the same name as those in the outer scope](#21-returning-variables-with-same-name-as-those-in-the-outer-scope) <br />
    2.2. [Returning non-aliased expressions](#22-returning-non-aliased-expressions) <br />
    2.3. [Referencing outer scope variables that don't exist](#22-referencing-outer-scope-variables-that-dont-exist) <br />

## 1. Uses of CALL subquery

### 1.1. Cartesian products

`CALL` subquery is executed once for each incoming row. If multiple rows are produced from the
`CALL` subquery, the result is a Cartesian product of results. It is an output combined from 2 branches, 
one being called the `input branch` (rows produced before calling the subquery), and the `subquery branch`
(rows produced by the subquery).  
Imagine the data includes two `:Person` nodes, one named `John` and one named `Alice`, 
as well as two `:Animal` nodes, one named `Rex` and one named `Lassie`.

Running the following query would produce the output below: 
```cypher
MATCH (p:Person)
CALL {
  MATCH (a:Animal)
  RETURN a.name as animal_name
}
RETURN p.name as person_name, animal_name
```


Output:
```nocopy
+-------------+-------------+
| person_name | animal_name |
+---------------------------+
| 'John'      | 'Rex'       |
| 'John'      | 'Lassie'    |
| 'Alice'     | 'Rex'       |
| 'Alice'     | 'Lassie'    |
+---------------------------+
```

### 1.2. Cartesian products with bounded symbols

To reference variables from the outer scope in the subquery, start the subquery with the `WITH` clause. 
It allows using the same symbols to expand on the neighborhood of the referenced nodes or relationships.
Otherwise, the subquery will behave as it sees the variable for the first time.

In the following query, the WITH clause expanded the meaning of the variable person to the node with the 
label `:Person` matched in the outer scope of the subquery:

```cypher
MATCH (person:Person)
CALL {
  WITH person
  MATCH (person)-[:HAS_PARENT]->(parent:Parent)
  RETURN parent
}
RETURN person.name, parent.name
```

Output:
```nocopy
+-------------+-------------+
| person_name | parent_name |
+---------------------------+
| 'John'      | 'John Sr.'  |
| 'John'      | 'Anna'      |
| 'Alice'     | 'Roxanne'   |
| 'Alice'     | 'Bill'      |
+---------------------------+
```

### 1.3. Post-union processing

Output from all UNION queries inside a subquery can be combined and
forwarded as a single output to make the queries more expressive:

```cypher
CALL {
	MATCH (n:Person)
	RETURN n.name AS name, n.ssn AS ID_number
		UNION
	MATCH (n:Company)
	RETURN n.name AS name, n.corporate_id AS ID_number
}
RETURN name, ID_number
```

Output:
```nocopy
+------------+-------------+
| name       | ID_number   |
+--------------------------+
| 'John'     | '123456789' |
| 'Memgraph' | '555555555' |
+--------------------------+
```

### 1.4. Observing changes from previous executions

Each execution of a `CALL` clause can observe changes from previous executions.


```cypher
UNWIND [0, 1, 2] AS x
CALL {
  MATCH (n:Counter)
    SET n.count = n.count + 1
  RETURN n.count AS innerCount
}
WITH innerCount
MATCH (n:Counter)
RETURN
  innerCount,
  n.count AS totalCount
```

Output:
```nocopy
+------------+-------------+
| innerCount | totalCount  |
+--------------------------+
| 1          | 3           |
| 2          | 3           |
| 3          | 3           |
+--------------------------+
```

### 1.5. Unit subqueries

Unit subqueries are used to perform a single action for every node from the input branch.
If the starting state of the database is that there is only one `:Person` node in the graph,
the following query will clone the node with desired preferences defined in the `FOREACH` clause.

```cypher
MATCH (p:Person)
CALL {
	FOREACH (i IN range(1, 5) | CREATE(:Person {id: i}))
}

MATCH (n) RETURN COUNT(n) AS no_created_nodes;
```

Output:
```nocopy
+------------------+
| no_created_nodes |
+------------------+
| 6                |
+------------------+
```

## 2. Invalid uses of CALL subquery

### 2.1. Returning variables with the same name as those in the outer scope

Invalid use:
```cypher
MATCH (n:Person)
CALL {
  MATCH (n:Parent)
  RETURN n
}
RETURN n;
```

The above query results in a semantic exception because the variable `n` has
already been used in the outer scope of the query. The query will 
successfully execute by renaming either the outer scope variable or the subquery variable.

Valid use:
```cypher
MATCH (n:Person)
CALL {
  MATCH (p:Parent)
  RETURN p
}
RETURN n, p;
```

### 2.2. Returning non-aliased expressions

Invalid use:
```cypher
MATCH (n:Person)
CALL {
  WITH n
  MATCH (n)-[:HAS_PARENT]->(parent:Parent)
  RETURN parent.age
}
RETURN n, parent.age;
```

The above query results in a semantic exception since the expression returned in the
subquery has not been aliased and can not be interpreted correctly. By aliasing the
returned expression upon exiting the subquery, it can be used in the outer scope. 

Valid use:
```cypher
MATCH (n:Person)
CALL {
  WITH n
  MATCH (n)-[:HAS_PARENT]->(parent:Parent)
  RETURN parent.age AS parent_age
}
RETURN n, parent_age;
```

### 2.3. Referencing outer scope variables that don't exist

Invalid use:
```cypher
MATCH (n:Person)
CALL {
  WITH o
  MATCH (o)-[:HAS_CHILD]->(child:Parent)
  RETURN child
}
RETURN DISTINCT n;
```

The above query results in a semantic exception because the variable from the outer scope does not exist.
Queries can be executed only by referencing variables bounded in the input branch to the subquery.
By renaming the variable to the already bounded variable `n`, the query will be correctly executed.

Valid use:
```cypher
MATCH (n:Person)
CALL {
  WITH n
  MATCH (n)-[:HAS_CHILD]->(child:Parent)
  RETURN child
}
RETURN DISTINCT n;
```
