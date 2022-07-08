---
id: functions
title: Functions
sidebar_label: Functions
---

## User-defined Memgraph Magic functions

Memgraph offers the flexibility of implementing custom functions. When supported built-in functions are not enough, there is an option to define a custom one by using C, C++, Python or Rust. The mechanism of [query modules](../memgraph/reference-guide/query-modules) enables the integration of custom functionalities.

Semantically, functions should be a small fragment of functionality that does not require long computations and large memory consumption. The only requirement for functions is to not modify the graph. Mentioned functionality offers flexibility in terms of nested calls within the Cypher.

## Supported built-in functions

This section contains the list of supported functions.

### Temporal functions

 | Name            | Signature                                                                  | Description                                                               |
 | --------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
 | `duration`      | `duration(value: string\|Duration) -> (Duration)`               | Returns the data type that represents a period of time.                   |
 | `date`          | `date(value: string\|Date) -> (Date)`                           | Returns the data type that represents a date with year, month, and day.   |
 | `localTime`     | `localTime(value: string\|LocalTime) -> (LocalTime)`            | Returns the data type that represents time within a day without timezone. |
 | `localDateTime` | `localDateTime(value: string\|LocalDateTime)-> (LocalDateTime)` | Returns the data type that represents a date and local time.              |
                             
 ### Scalar functions

 | Name         | Signature                                                                            | Description                                                                                                                                                                                                                              |
 | ------------ | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `startNode`  | `startNode(relationship: Relationship) -> (Node)`                                    | Returns the starting node of a relationship.                                                                                                                                                                                             |
 | `endNode`    | `endNode(relationship: Relationship) -> (Node)`                                      | Returns the destination node of a relationship.                                                                                                                                                                                                 |
 | `degree`     | `degree(node: Node) -> (integer)`                                                    | Returns the number of relationships (both incoming and outgoing) of a node.                                                                                                                                                                      |
 | `head`       | `head(list: List[any]) -> (any)`                                                     | Returns the first element of a list.                                                                                                                                                                                                     |
 | `last`       | `last(list: List[any]) -> (any)`                                                     | Returns the last element of a list.                                                                                                                                                                                                      |
 | `properties` | `properties(value: Node\|Relationship) -> (Map[string, any])`             | Returns the property map of a node or a relationship.                                                                                                                                                                                   |
 | `size`       | `size(value: List[any]\|string\|Map[string, any]\|Path) -> (integer)`                                                      | Returns the number of elements in the value. When given a **list** it returns the size of the list. When given a string it returns the number of characters. When given a path it returns the number of expansions (relationships) in that path. |
 | `toBoolean`  | `toBoolean(value: boolean\|integer\|string) -> (boolean)`                                                 | Converts the argument to a boolean.                                                                                                                                                                                                      |
 | `toFloat`    | `toFloat(value: number\|string) -> (float)`                                                     | Converts the argument to a floating point number.                                                                                                                                                                                        |
 | `toInteger`  | `toInteger(value: boolean\|number\|string) -> (integer)`                                                 | Converts the argument to an integer.                                                                                                                                                                                                     |
 | `toString`   | `toString(value: string\|number\|Date\|LocalTime\|LocalDateTime\|Duration\|boolean) -> (string)`                                                   | Converts the argument to a string.                                                                                                                                                                                                       |
 | `type`       | `type(relationship: Relationship) -> (string)`                                       | Returns the type of a relationships as a character string.                                                                                                                                                                                       |
 | `assert`     | `assert(expression: boolean, message: string = null) -> ()`                                                           | Raises an exception if the given argument is not `true`.                                                                                                                                                                                 |
 | `id`         | `id(value: Node\|Relationship) -> (integer)`                              | Returns identifier for a given node or relationship. The identifier is generated during the initialization of a node or a relationship  and will be persisted through the durability mechanism.                                                  |
 | `timestamp`  | `timestamp() -> (integer)`                                                           | Returns the difference, measured in microseconds, between the current time and midnight, January 1, 1970 UTC.                                                                                                                            |
 | `counter`    | `counter(name: string, initial-value: integer, increment: integer = 1) -> (integer)` | Generates integers that are guaranteed to be unique within a single query for a given counter name.  The increment parameter can be any integer besides zero.                                                                            |
 
 ### Lists

 | Name            | Signature                                                                                      | Description                                                                                                                                |
 | --------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
 | `keys`          | `keys(value: Node\|Relationship) -> (List[string])`                                 | Returns a list keys of properties from a relationship or a node. Each key is represented as string.                                               |
 | `labels`        | `labels(node: Node) -> (List[string])`                                                         | Returns a list of labels from a node. Each label is represented as string.                                                                 |
 | `nodes`         | `nodes(path: Path) -> (List[Node])`                                                            | Returns a list of nodes from a path.                                                                                                       |
 | `relationships` | `relationships(path: Path) -> (List[Relationship])`                                            | Returns a list of relationships (edges) from a path.                                                                                       |
 | `tail`          | `tail(list: List[any]) -> (List[any])`                                                         | Returns all elements after the first of a given list.                                                                                      |
 | `uniformSample` | `uniformSample(list: List[any], size: integer) -> (List[any])`                                 | Returns elements of a given list randomly oversampled or undersampled to desired size                                                      |
 | `range`         | `range(start-number: integer, end-number: integer, increment: integer = 1) -> (List[integer])` | Constructs a list of value in given range.                                                                                                 |
 | `reduce`        | `reduce(accumulator = initial_value, variable IN list \| expression)`               | Accumulate list elements into a single result by applying an expression.                                                                   |
 | `extract`       | `extract(variable IN list \| expression)`                                                      | A list of values obtained by evaluating an expression for each element in list.                                                            |
 |                 |
 | `all`           | `all(variable IN list WHERE predicate)`                                                        | Check if all elements of a list satisfy a predicate. <br/> NOTE: Whenever possible, use Memgraph's lambda functions when matching instead. |
 | `any`           | `any(element IN list WHERE predicate_using_element)`                                           | Check if any element in the list satisfies the predicate.                                                                                  |
 | `single`        | `single(variable IN list WHERE predicate)`                                                     | Check if only one element of a list satisfies a predicate.                                                                                 |

### Math functions

 | Name    | Signature                                                             | Description                                                                                                                                           |
 | ------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `abs`   | `abs(number: integer \| float) -> (integer\|float)`        | Returns the absolute value of a number.                                                                                                               |
 | `ceil`  | `ceil(number: float) -> (integer)`                                    | Returns the smallest integer greater than or equal to the iven float number.                                                                          |
 | `floor` | `floor(number: float) -> (integer)`                                   | Returns the largest integer smaller than or equal to the given float number.                                                                          |
 | `round` | `round(number: float) -> (integer)`                                   | Returns the number, rounded to the nearest integer. Tie-breaking is done using the *commercial rounding*,  where -1.5 produces -2 and 1.5 produces 2. |
 | `pi`    | `pi() -> (float)`                                                     | Returns the constant *pi* (3.14159).                                                                                                                  |
 | `e`     | `e() -> (float)`                                                      | Returns the base of the natural logarithm (2.71828)..                                                                                                 |
 | `exp`   | `exp(number: integer \| float) -> (float)`                 | Calculates `e^n` where `e` is the base of the natural logarithm, and `n` is the given number.                                                         |
 | `log`   | `log(number: integer \| float) -> (float)`                 | Calculates the natural logarithm of a given number.                                                                                                   |
 | `log10` | `log10(number: integer \| float) -> (float)`               | Calculates the logarithm (base 10) of a given number.                                                                                                 |
 | `sqrt`  | `sqrt(number: integer \| float) -> (float)`                | Calculates the square root of a given number.                                                                                                         |
 | `acos`  | `acos(number: integer \| float) -> (float)`                | Calculates the arccosine of a number between -1 and 1 in radians.                                                                                     |
 | `asin`  | `asin(number: integer \| float) -> (float)`                | Calculates the arcsine of a number between -1 and 1 in radians.                                                                                       |
 | `atan`  | `atan(number: integer \| float) -> (float)`                | Calculates the arctangent of a given number in radians.                                                                                               |
 | `atan2` | `atan2(y: integer \| float, x: integer\|float) -> (float)` | Calculates a unique arctangent value from a set of coordinates in radians.                                                                            |
 | `cos`   | `cos(number: integer \| float) -> (float)`                 | Calculates the cosine of an angle specified in radians.                                                                                               |
 | `sin`   | `sin(number: integer \| float) -> (float)`                 | Calculates the sine of an angle specified in radians.                                                                                                 |
 | `tan`   | `tan(number: integer \| float) -> (float)`                 | Calculates the tangent of an angle specified in radians.                                                                                              |
 | `sign`  | `sign(number: integer \| float) -> (integer)`              | Applies the signum function to a given number and returns the result. The signum of positive numbers is 1, of negative -1 and for 0 returns 0.        |
 | `rand`  | `rand() -> (float)`                                                   | Returns a random floating point number between 0 (inclusive) and 1 (exclusive).                                                                       |

 ### Aggregation functions

 | Name      | Signature                                                     | Description                                                                                           |
 | --------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
 | `avg`     | `avg(row: int \| float] -> (float)`                | Returns an average value of rows with numerical values generated with the `MATCH` or `UNWIND` clause. |
 | `collect` | `collect(values: any) -> (List[any])`              | Returns a single aggregated list containing returned values.                                          |
 | `count`   | `count(values: any) -> (integer)`                  | Counts the number of non-null values returned by the expression.                                      |
 | `max`     | `max(row: integer \| float) -> (integer \| float)` | Returns the maximum value in a set of values.                                                         |
 | `min`     | `min(row: integer \| float) -> (integer \| float)` | Returns the minimum value in a set of values.                                                         |
 | `sum`     | `sum(row: integer \| float) -> (integer \| float)` | Returns a sum value of rows with numerical values generated with the `MATCH` or `UNWIND` clause.      |

### String functions

| Name         | Signature                                                                                | Description                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `startsWith` | `startsWith(string: string, substring: string) -> (boolean)`                             | Check if the first argument starts with the second.                                                                                      |
| `endsWith`   | `endsWith(string: string, substring: string) -> (boolean)`                               | Check if the first argument ends with the second.                                                                                        |
| `contains`   | `contains(string: string, substring: string) -> (boolean)`                               | Check if the first argument has an element which is equal to the second argument.                                                        |
| `left`       | `left(string: string, count: integer) -> (string)`                                       | Returns a string containing the specified number of leftmost characters of the original string.                                          |
| `lTrim`      | `lTrim(string: string) -> (string)`                                                      | Returns the original string with leading whitespace removed.                                                                             |
| `replace`    | `replace(string: string, search-string: string, replacement-string: string) -> (string)` | Returns a string in which all occurrences of a specified string in the original string have been replaced by another (specified) string. |
| `reverse`    | `reverse(string: string) -> (string)`                                                    | Returns a string in which the order of all characters in the original string have been reversed.                                         |
| `right`      | `right(string: string, count: integer) -> (string)`                                      | Returns a string containing the specified number of rightmost characters of the original string.                                         |
| `rTrim`      | `rTrim(string: string) -> (string)`                                                      | Returns the original string with trailing whitespace removed.                                                                            |
| `split`      | `split(string: string, delimiter: string) -> (List[string])`                             | Returns a list of strings resulting from the splitting of the original string around matches of the given delimiter.                     |
| `substring`  | `substring(string: string, start-index: integer, length: integer = null) -> (string)`    | Returns a substring of the original string, beginning with a 0-based index start and length.                                             |
| `toLower`    | `toLower(string: string) -> (string)`                                                    | Returns the original string in lowercase.                                                                                                |  |
| `toUpper`    | `toUpper(string: string) -> (string)`                                                    | Returns the original string in uppercase.                                                                                                |
| `trim`       | `trim(string: string) -> (string)`                                                       | Returns the original string with leading and trailing whitespace removed.                                                                |

