## Other Features

The following sections describe some of the other supported features.

### String Operators

Apart from comparison and concatenation operators openCypher provides special
string operators for easier matching of substrings:

Operator           | Description
-------------------|------------
 `a STARTS WITH b` | Returns true if prefix of string a is equal to string b.
 `a ENDS WITH b`   | Returns true if suffix of string a is equal to string b.
 `a CONTAINS b`    | Returns true if some substring of string a is equal to string b.

### Parameters

When automating the queries for Memgraph, it comes in handy to change only
some parts of the query. Usually, these parts are values which are used for
filtering results or similar, while the rest of the query remains the same.

Parameters allow reusing the same query, but with different parameter values.
The syntax uses the `$` symbol to designate a parameter name. We don't allow
old Cypher parameter syntax using curly braces. For example, you can parameterize
filtering a node property:

```opencypher
MATCH (node1 {property: $propertyValue}) RETURN node1;
```

You can use parameters instead of any literal in the query, but not instead of
property maps even though that is allowed in standard openCypher. Following
example is illegal in Memgraph:

```opencypher
MATCH (node1 $propertyValue) RETURN node1;
```

To use parameters with Python driver use following syntax:

```python
session.run('CREATE (alice:Person {name: $name, age: $ageValue}',
            name='Alice', ageValue=22)).consume()
```

To use parameters which names are integers you will need to wrap parameters in
a dictionary and convert them to strings before running a query:

```python
session.run('CREATE (alice:Person {name: $0, age: $1}',
            {'0': "Alice", '1': 22})).consume()
```

To use parameters with some other driver please consult appropriate
documentation.

### CASE

Conditional expressions can be expressed in openCypher language by simple and
generic form of `CASE` expression. A simple form is used to compare an expression
against multiple predicates. For the first matched predicate result of the
expression provided after the `THEN` keyword is returned.  If no expression is
matched value following `ELSE` is returned is provided, or `null` if `ELSE` is not
used:

```opencypher
MATCH (n)
RETURN CASE n.currency WHEN "DOLLAR" THEN "$" WHEN "EURO" THEN "€" ELSE "UNKNOWN" END
```

In generic form, you don't need to provide an expression whose value is compared to
predicates, but you can list multiple predicates and the first one that evaluates
to true is matched:

```opencypher
MATCH (n)
RETURN CASE WHEN n.height < 30 THEN "short" WHEN n.height > 300 THEN "tall" END
```

### Inspecting and profiling queries

The `EXPLAIN` and `PROFILE` operators can be used to inspect and profile a
particular Cypher query in order to see its internal representation and the
way it behaves during execution.

```opencypher
EXPLAIN MATCH (n) RETURN n;
```

```opencypher
PROFILE MATCH (n) RETURN n;
```

For a detailed look at using `EXPLAIN` and `PROFILE`, take a look at the guides:
* [Inspecting queries](../database_functionalities/inspecting-queries.md)
* [Profiling queries](../database_functionalities/profiling-queries.md)
