---
id: call
title: CALL clause
sidebar_label: CALL
---

The `CALL` clause is used to call a subquery inside the existing subquery.
An ambiguous term might 
be [calling MAGE procedures](/docs/mage/usage/calling-procedures), since they follow a similar syntax,
starting with the `CALL` keyword.

:::info

An ambiguous action that you might have been looking for are
[calling MAGE procedures](/docs/mage/usage/calling-procedures), since they follow a similar syntax,
starting with the `CALL` keyword.

:::

1. [Uses of CALL subquery](#1-uses-of-call-subquery) <br />
    1.1. [Cartesian products](#11-cartesian-products) <br />
    1.2. [Cartesian products with bounded symbols](#12-cartesian-products-with-bounded-symbols) <br />
    1.3. [Post-union processing](#13-post-union-processing) <br />
    1.4. [Observing changes from previous executions](#14-observing-changes-from-previous-executions)<br />
    1.5. [Unit subqueries](#15-unit-subqueries)

2. [Invalid uses of CALL subquery](#2-invalid-uses-of-call-subquery) <br />
    2.1. [Returning variables with the same name as those in the outer scope](#21-returning-variables-with-same-name-as-those-in-the-outer-scope) <br />
    2.2. [Returning non aliased expressions](#22-returning-non-aliased-expressions) <br />
    2.3. [Referencing outer scope variables that do not exist](#22-referencing-outer-scope-variables-that-do-not-exist) <br />

# 1. Uses of CALL subquery
## 1.1. Cartesian products

`CALL` subquery is executed once for each incoming row. If there are multiple rows that get produced from the
`CALL` subquery, the result is a Cartesian product of results. You can think of this as combining the output of
2 branches, one being called the `input branch` (the produced rows before calling the subquery), and the `subquery branch`
(the produced rows of the subquery).

```cypher
MATCH (p:Person)
CALL {
  MATCH (a:Animal)
  RETURN a.name as animal_name
}
RETURN p.name as person_name, animal_name
```

If we assume that there are 2 `:Person` in the database named `John` and `Alice`, 
and 2 `:Animal` named `Rex` and `Lassie`, the result would be as follows:

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

## 1.2. Cartesian products with bounded symbols

By referencing variables in the subquery from the outer scope using the `WITH` keyword,
we can use those same symbols to expand on the neighborhood of the referenced nodes or relationships.
By not using the `WITH` keyword as the first clause in the query, we will not have the access to the
outer scope variables, and the subquery would behave as it sees the variable for the first time.

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
| person_name | animal_name |
+---------------------------+
| 'John'      | 'John Sr.'  |
| 'John'      | 'Anna'      |
| 'Alice'     | 'Roxanne'   |
| 'Alice'     | 'Bill'      |
+---------------------------+
```

## 1.3. Post-union processing

When doing unions, users can combine output from all the union queries inside a subquery, in order to
post processing on their data and make the query more expressive.

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

## 1.4. Observing changes from previous executions

Subqueries can be

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

## 1.5. Unit subqueries

Unit subqueries are used when we want to perform a single action for every node from the input branch.
Consider the following query, if there was only one `:Person` in the graph. The query allows us to clone the
person with desired preferences in the `FOREACH` clause.

```cypher
MATCH (p:Person)
CALL {
	FOREACH (i IN range(1, 5) | CREATE(:Person {id: i}))
};

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

# 2. Invalid uses of CALL subquery
## 2.1. Returning variables with the same name as those in the outer scope

Invalid use:
```cypher
MATCH (n:Person)
CALL {
  MATCH (n:Parent)
  RETURN n
}
RETURN n;
```

This query results in a semantic exception, because we already have the variable of same name in the
outer scope of the variable. By renaming either the outer scope variable, or the subquery return variable,
we are able to successfully execute the query.

Valid use:
```cypher
MATCH (n:Person)
CALL {
  MATCH (p:Parent)
  RETURN p
}
RETURN n, p;
```

## 2.2. Returning non aliased expressions

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

This query results in a semantic exception since the returned expression has not been aliased and can not be interpreted
correctly on the exit of the subquery. By aliasing the expression we can reference it correctly on the exit of the subquery
and use it in the outer scope.

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

## 2.3. Referencing outer scope variables that do not exist

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

This query results in a semantic exception because the variable from outer scope does not exist.
We can only execute queries if we referenced the variable that has already been bounded in the input branch going
into the subquery. By renaming the variable to already bounded variable `n`, we are able to execute the query.

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
