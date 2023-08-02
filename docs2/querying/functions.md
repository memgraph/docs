---
id: functions
title: Functions
sidebar_label: Functions
---

## User-defined Memgraph Magic functions

Memgraph offers the flexibility of implementing custom functions. When supported built-in functions are not enough, there is an option to define a custom one by using C, C++, Python or Rust. The mechanism of [query modules](/memgraph/reference-guide/query-modules) enables the integration of custom functionalities.

Semantically, functions should be a small fragment of functionality that does not require long computations and large memory consumption. The only requirement for functions is to not modify the graph. Mentioned functionality offers flexibility in terms of nested calls within the Cypher.

## Supported built-in functions

This section contains the list of supported functions.

### Temporal functions

 | Name            | Signature                                                                  | Description                                                               |
 | --------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
 | `duration`      | <code>duration(value: string\|Duration) -> (Duration)</code>               | Returns the data type that represents a period of time.                   |
 | `date`          | <code>date(value: string\|Date) -> (Date)</code>                           | Returns the data type that represents a date with year, month, and day.   |
 | `localTime`     | <code>localTime(value: string\|LocalTime) -> (LocalTime)</code>            | Returns the data type that represents time within a day without timezone. |
 | `localDateTime` | <code>localDateTime(value: string\|LocalDateTime)-> (LocalDateTime)</code> | Returns the data type that represents a date and local time.              |

 ### Scalar functions

 | Name         | Signature                                                                            | Description                                                                                                                                                                                                                              |
 | ------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `assert`     | `assert(expression: boolean, message: string = null) -> ()`                                                           | Raises an exception if the given argument is not `true`.                                                                                                                                                                                 |
 | `coalesce`    | `coalesce(expression: any [, expression: any]*) -> (any)` | Returns the first non-`null` value in the given list of expressions.                                                                          |
 | `counter`    | `counter(name: string, initial-value: integer, increment: integer = 1) -> (integer)` | Generates integers that are guaranteed to be unique within a single query for a given counter name.  The increment parameter can be any integer besides zero.                                                                            |
 | `degree`     | `degree(node: Node) -> (integer)`                                                    | Returns the number of relationships (both incoming and outgoing) of a node.                                                                                                                                                                      |
 | `outDegree`  | `outDegree(node: Node) -> (integer)`                                                 | Returns the number of outgoing relationships of a node.                                                                                                                                                                                                |
 | `inDegree`   | `inDegree(node: Node) -> (integer)`                                                  | Returns the number of incoming relationships of a node.                                                                                                                                                                                                |
 | `endNode`    | `endNode(relationship: Relationship) -> (Node)`                                      | Returns the destination node of a relationship.                                                                                                                                                                                                 |
 | `head`       | `head(list: List[any]) -> (any)`                                                     | Returns the first element of a list.                                                                                                                                                                                                     |
 | `id`         | <code>id(value: Node\|Relationship) -> (integer)</code>                              | Returns identifier for a given node or relationship. The identifier is generated during the initialization of a node or a relationship  and will be persisted through the durability mechanism.                                                  |
 | `last`       | `last(list: List[any]) -> (any)`                                                     | Returns the last element of a list.                                                                                                                                                                                                      |
 | `properties` | <code>properties(value: Node\|Relationship) -> (Map[string, any])</code>             | Returns the property map of a node or a relationship.                                                                                                                                                                                   |
 | `size`       | <code>size(value: List[any]\|string\|Map[string, any]\|Path) -> (integer)</code>                                                  | Returns the number of elements in the value. When given a **list** it returns the size of the list. When given a string it returns the number of characters. When given a path it returns the number of expansions (relationships) in that path. |
 | `startNode`  | `startNode(relationship: Relationship) -> (Node)`                                    | Returns the starting node of a relationship.                                                                                                                                                                                             |
 | `toBoolean`  | <code>toBoolean(value: boolean\|integer\|string) -> (boolean)</code>                                                 | Converts the argument to a boolean.                                                                                                                                                                                                      |
 | `toFloat`    | <code>toFloat(value: number\|string) -> (float)</code>                                                     | Converts the argument to a floating point number.                                                                                                                                                                                        |
 | `toInteger`  | <code>toInteger(value: boolean\|number\|string) -> (integer)</code>                                                 | Converts the argument to an integer.                                                                                                                                                                                                     |
 | `toString`   | <code>toString(value: string\|number\|Date\|LocalTime\|LocalDateTime\|Duration\|boolean) -> (string)</code>                                                   | Converts the argument to a string.                                                                                                                                                                                                       |
 | `type`       | `type(relationship: Relationship) -> (string)`                                       | Returns the type of a relationships as a character string.                                                                                                                                                                                       |
 | `timestamp`  | `timestamp() -> (integer)`                                                           | Returns the difference, measured in microseconds, between the current time and midnight, January 1, 1970 UTC.                                                                                                                            |

### Pattern functions
 | Name            | Signature                                                                                      | Description                                                                                                                                |
 | --------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
 | `exists`           | `exists(pattern: Pattern)`                                                        | Checks if a pattern exists as part of the filtering clause. Symbols provided in the MATCH clause can also be used here. |

 ### Lists

 | Name            | Signature                                                                                      | Description                                                                                                                                |
 | --------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
 | `all`           | `all(variable IN list WHERE predicate)`                                                        | Check if all elements of a list satisfy a predicate. <br/> NOTE: Whenever possible, use Memgraph's lambda functions when matching instead. |
 | `any`           | `any(element IN list WHERE predicate_using_element)`                                           | Check if any element in the list satisfies the predicate.                                                                                  |
 | `extract`       | <code>extract(variable IN list\|expression)</code>                                                      | A list of values obtained by evaluating an expression for each element in list.                                                            |
 | `keys`          | <code>keys(value: Node\|Relationship) -> (List[string])</code>                                 | Returns a list keys of properties from a relationship or a node. Each key is represented as string.                                               |
 | `labels`        | `labels(node: Node) -> (List[string])`                                                         | Returns a list of labels from a node. Each label is represented as string.                                                                 |
 | `nodes`         | `nodes(path: Path) -> (List[Node])`                                                            | Returns a list of nodes from a path.                                                                                                       |
 | `range`         | `range(start-number: integer, end-number: integer, increment: integer = 1) -> (List[integer])` | Constructs a list of value in given range.                                                                                                 |
 | `reduce`        | <code>reduce(accumulator = initial_value, variable IN list\|expression)</code>               | Accumulate list elements into a single result by applying an expression.                                                                   |
 | `relationships` | `relationships(path: Path) -> (List[Relationship])`                                            | Returns a list of relationships (edges) from a path.                                                                                       |
 | `single`        | `single(variable IN list WHERE predicate)`                                                     | Check if only one element of a list satisfies a predicate.                                                                                 |
 | `tail`          | `tail(list: List[any]) -> (List[any])`                                                         | Returns all elements after the first of a given list.                                                                                      |
 | `uniformSample` | `uniformSample(list: List[any], size: integer) -> (List[any])`                                 | Returns elements of a given list randomly oversampled or undersampled to desired size                                                      |


### Math functions

 | Name    | Signature                                                             | Description                                                                                                                                           |
 | ------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `abs`   | <code>abs(number: integer\|float) -> (integer\|float)</code>        | Returns the absolute value of a number.                                                                                                               |
 | `acos`  | <code>acos(number: integer\|float) -> (float)</code>                | Calculates the arccosine of a number between -1 and 1 in radians.                                                                                     |
 | `asin`  | <code>asin(number: integer\|float) -> (float)</code>                | Calculates the arcsine of a number between -1 and 1 in radians.                                                                                       |
 | `atan`  | <code>atan(number: integer\|float) -> (float)</code>                | Calculates the arctangent of a given number in radians.                                                                                               |
 | `atan2` | <code>atan2(y: integer\|float, x: integer\|float) -> (float)</code> | Calculates a unique arctangent value from a set of coordinates in radians.                                                                            |
 | `ceil`  | `ceil(number: float) -> (integer)`                                    | Returns the smallest integer greater than or equal to the given float number.                                                                          |
 | `cos`   | <code>cos(number: integer\|float) -> (float)</code>                 | Calculates the cosine of an angle specified in radians.                                                                                               |
 | `e`     | `e() -> (float)`                                                      | Returns the base of the natural logarithm (2.71828)..                                                                                                 |
 | `exp`   | <code>exp(number: integer\|float) -> (float)</code>                 | Calculates `e^n` where `e` is the base of the natural logarithm, and `n` is the given number.                                                         |
 | `floor` | `floor(number: float) -> (integer)`                                   | Returns the largest integer smaller than or equal to the given float number.                                                                          |
 | `log`   | <code>log(number: integer\|float) -> (float)</code>                 | Calculates the natural logarithm of a given number.                                                                                                   |
 | `log10` | <code>log10(number: integer\|float) -> (float)</code>               | Calculates the logarithm (base 10) of a given number.                                                                                                 |
 | `pi`    | `pi() -> (float)`                                                     | Returns the constant *pi* (3.14159).                                                                                                                  |
 | `rand`  | `rand() -> (float)`                                                   | Returns a random floating point number between 0 (inclusive) and 1 (exclusive).                                                                       |
 | `round` | `round(number: float) -> (integer)`                                   | Returns the number, rounded to the nearest integer. Tie-breaking is done using the *commercial rounding*,  where -1.5 produces -2 and 1.5 produces 2. |
 | `sign`  | <code>sign(number: integer\| float) -> (integer)</code>              | Applies the signum function to a given number and returns the result. The signum of positive numbers is 1, of negative -1 and for 0 returns 0.        |
 | `sin`   | <code>sin(number: integer\|float) -> (float)</code>                 | Calculates the sine of an angle specified in radians.                                                                                                 |
 | `sqrt`  | <code>sqrt(number: integer\|float) -> (float)</code>                | Calculates the square root of a given number.                                                                                                         |
 | `tan`   | <code>tan(number: integer\|float) -> (float)</code>                 | Calculates the tangent of an angle specified in radians.                                                                                              |


 ### Aggregation functions

 | Name      | Signature                                                     | Description                                                                                           |
 | --------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
 | `avg`     | <code>avg(row: int\|float] -> (float)</code>                | Returns an average value of rows with numerical values generated with the `MATCH` or `UNWIND` clause. |
 | `collect` | `collect(values: any) -> (List[any])`              | Returns a single aggregated list containing returned values.                                          |
 | `count`   | `count(values: any) -> (integer)`                  | Counts the number of non-null values returned by the expression.                                      |
 | `max`     | <code>max(row: integer\|float) -> (integer\|float)</code> | Returns the maximum value in a set of values.                                                         |
 | `min`     | <code>min(row: integer\|float) -> (integer\|float)</code> | Returns the minimum value in a set of values.                                                         |
 | `sum`     | <code>sum(row: integer\|float) -> (integer\|float)</code> | Returns a sum value of rows with numerical values generated with the `MATCH` or `UNWIND` clause.      |

 ### Graph projection functions

 | Name      | Signature                                                     | Description                                                                                           |
 | --------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
 | `project` | <code>project(row: path) -> map("nodes":list[Node], "edges":list[Edge])</code>| Creates a projected graph consisting of nodes and edges from aggregated paths.|


:::info
All aggregation functions can be used with the `DISTINCT` operator to perform calculations only on unique values. For example, `count(DISTINCT n.prop)` and `collect(DISTINCT n.prop)`.
:::

### String functions

| Name         | Signature                                                                                | Description                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `contains`   | `contains(string: string, substring: string) -> (boolean)`                               | Check if the first argument has an element which is equal to the second argument.                                                        |
| `endsWith`   | `endsWith(string: string, substring: string) -> (boolean)`                               | Check if the first argument ends with the second.                                                                                        |
| `left`       | `left(string: string, count: integer) -> (string)`                                       | Returns a string containing the specified number of leftmost characters of the original string.                                          |
| `lTrim`      | `lTrim(string: string) -> (string)`                                                      | Returns the original string with leading whitespace removed.                                                                             |
| `replace`    | `replace(string: string, search-string: string, replacement-string: string) -> (string)` | Returns a string in which all occurrences of a specified string in the original string have been replaced by another (specified) string. |
| `reverse`    | `reverse(string: string) -> (string)`                                                    | Returns a string in which the order of all characters in the original string have been reversed.                                         |
| `right`      | `right(string: string, count: integer) -> (string)`                                      | Returns a string containing the specified number of rightmost characters of the original string.                                         |
| `rTrim`      | `rTrim(string: string) -> (string)`                                                      | Returns the original string with trailing whitespace removed.                                                                            |
| `split`      | `split(string: string, delimiter: string) -> (List[string])`                             | Returns a list of strings resulting from the splitting of the original string around matches of the given delimiter.                     |
| `startsWith` | `startsWith(string: string, substring: string) -> (boolean)`                             | Check if the first argument starts with the second.                                                                                      |
| `substring`  | `substring(string: string, start-index: integer, length: integer = null) -> (string)`    | Returns a substring of the original string, beginning with a 0-based index start and length.                                             |
| `toLower`    | `toLower(string: string) -> (string)`                                                    | Returns the original string in lowercase.                                                                                                |  |
| `toUpper`    | `toUpper(string: string) -> (string)`                                                    | Returns the original string in uppercase.                                                                                                |
| `trim`       | `trim(string: string) -> (string)`                                                       | Returns the original string with leading and trailing whitespace removed.                                                                |

