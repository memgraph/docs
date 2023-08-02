---
id: expressions
title: Expressions
sidebar_label: Expressions
---

The following sections describe some of the other supported features.

## String operators

Apart from comparison and concatenation operators Cypher provides special
string operators for easier matching of substrings:

| Operator          | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `a STARTS WITH b` | Returns true if the prefix of string a is equal to string b.     |
| `a ENDS WITH b`   | Returns true if the suffix of string a is equal to string b.     |
| `a CONTAINS b`    | Returns true if some substring of string a is equal to string b. |

## Parameters

When automating the queries for Memgraph, it comes in handy to change only some
parts of the query. Usually, these parts are values that are used for filtering
results or similar, while the rest of the query remains the same.

Parameters allow reusing the same query but with different parameter values. The
syntax uses the `$` symbol to designate a parameter name. We don't allow old
Cypher parameter syntax using curly braces. For example, you can parameterize
filtering a node property:

```cypher
MATCH (node1 {property: $propertyValue}) RETURN node1;
```

You can use parameters instead of any literal in the query. Using parameters as
property maps is partially supported in `CREATE`, but not in `MATCH` nor `MERGE`
clause. For example, the following query is illegal:

```cypher
MATCH (n $propertyMap) RETURN n;
```

but this is supported:

```cypher
CREATE (n $propertyMap) RETURN n;
```

To use parameters with a Python driver use the following syntax:

```python
session.run('CREATE (alice:Person {name: $name, age: $ageValue}',
            name='Alice', ageValue=22)).consume()
```

To use parameters whose names are integers, you will need to wrap parameters in
a dictionary and convert them to strings before running a query:

```python
session.run('CREATE (alice:Person {name: $0, age: $1}',
            {'0': "Alice", '1': 22})).consume()
```

To use parameters with some other driver, please consult appropriate
documentation.

## CASE

Conditional expressions can be expressed in the Cypher language with the `CASE`
expression. A simple form is used to compare an expression against multiple
predicates. For the first matched predicate result of the expression provided
after the `THEN` keyword is returned. If no expression is matched value
following `ELSE` is returned is provided, or `null` if `ELSE` is not used:

```cypher
MATCH (n)
RETURN CASE n.currency WHEN "DOLLAR" THEN "$" WHEN "EURO" THEN "€" ELSE "UNKNOWN" END;
```

In generic form, you don't need to provide an expression whose value is compared
to predicates, but you can list multiple predicates and the first one that
evaluates to true is matched:

```cypher
MATCH (n)
RETURN CASE WHEN n.height < 30 THEN "short" WHEN n.height > 300 THEN "tall" END;
```

Most expressions that take `null` as input will produce `null`. This includes boolean expressions that are used as
predicates. In this case, anything that is not true is interpreted as being false. This also concludes that logically `null!=null`.