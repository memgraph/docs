## Memgraph TensorFlow Op

### Introduction
Memgraph enables easier development and production serving of your
machine learning models based on graph data by allowing you to query Memgraph
directly from TensorFlow using the Memgraph TensorFlow op.

A TensorFlow op (operation) is a fundamental building block of all TensorFlow
models.
Memgraph TensorFlow op wraps the high-performance Memgraph client for
use with TensorFlow allowing natural data transfer between Memgraph and
TensorFlow at any point of the model. This data transfer is entirely executed
in C++, only being defined in Python and therefore leads to maximum performance
in your models.

See TensorFlow
[Graphs and Session guide](https://www.tensorflow.org/guide/graphs)
for more information.

### API
Memgraph TensorFlow op API consists of inputs, attributes and outputs.

#### Input
There are two inputs:
  * query
  * input list

The Query is a string. The query is an ```openCypher```
query supported by Memgraph.
Memgraph TensorFlow op has some limitations on the query.
Limitations are explained [here](#limitations).

Input list is a query parameter. Name of this parameter is ```$input_list```.

Let's see one simple example:

```openCypher
MATCH (p :User) WHERE p.id IN $input_list RETURN p.id;
```

Query execution replaces ```$input_list``` with provided op input
([see python example for more](../how_to_guides/tensorflow-setup.md#example)).
Input list is the only query parameter used by Memgraph TensorFlow op.

#### Attributes

Memgraph TensorFlow op attributes:
  * ```host```, default: ```127.0.0.1```
  * ```port```, default: ```7687```
  * ```user```, default: ```""``` (empty string)
  * ```password```, default: ```""``` (empty string)
  * ```use_ssl```, default: ```false```
  * ```output_dtype```

```Host```, ```port```, ```user```, ```password```
and ```use_ssl``` are attributes used
for connecting to Memgraph. The only different attribute is ```output_type```.
```output_dtype``` has no default value and
it is used to determine the type of output tensor.
Notice that all data in the output tensor must be of the same type.
```output_dtype``` can be ```int64```, ```double```, ```bool```
and ```string```.
Memgraph TensorFlow op does not support other output types.

#### Outputs

Memgraph TensorFlow op has two outputs:
  * header
  * rows

The header is a string list.
The list contains headers provided by query execution:

```openCypher
MATCH (n) RETURN n.name as Name, n.address AS Address;
```

Header is ```["Name", "Address"]```.

Rows data represents the query result.
Rows data is the matrix ```(|rows| x |headers|)```.
If there are no results from the query (empty set),
the matrix has a dimension ```(0 x 0)```.

##### Using Lists as Part of the Output

Let's see the following example:

```openCypher
MATCH (n)-->(m) RETURN n.id AS id, COLLECT(m.value) AS value_list;
```

This query returns ```n.id``` and list of ```m.values```.
Memgraph TensorFlow op returns a matrix.
Therefore all elements in the matrix must be
of the same type. Memgraph TensorFlow op expands lists into the row.
Matrix dimension is ```|rows| x |(standard headers + sum of list sizes)|```.

Query output:

|id |value_list |
|---|-----------|
|1  |[1,2,3,4,5]|
|2  |[5,4,8,1,2]|
|3  |[8,8,8,1,2]|

Headers:

|id|value_list_0|value_list_1|value_list_2|
|--|------------|------------|------------|

Matrix output:

|||||||
|-|-|-|-|-|-|
|1|1|2|3|4|5|
|2|5|4|8|1|2|
|3|8|8|8|1|2|

Memgrap TensorFlow op also supports more than one list in the output:

```openCypher
MATCH (n)-->(m)
RETURN n.id AS id, COLLECT(m.value) AS value_list, COLLECT(m.id) AS neigh;
```

Query output:

|id|value_list|neigh|
|--|-----------|----|
|1 |[1,2,3,4,5]|[1,2]|
|2 |[5,4,8,1,2]|[3,4]|
|3 |[8,8,8,1,2]|[1,3]|

Headers:

|id|value_list_0|value_list_1|value_list_2|neigh_0|neigh_1|
|--|------------|------------|------------|-------|-------|

Matrix output:

|||||||||
|-|-|-|-|-|-|-|-|
|1|1|2|3|4|5|1|2|
|2|5|4|8|1|2|3|4|
|3|8|8|8|1|2|1|3|

### Limitations

#### Input List
Input list (```$input_list```) can contain only elements of **int64** type.

#### Output types:
Output matrix contains only elements with the same data type. The data type can
be ```int64```, ```double```, ```bool``` and ```string```.
```Null``` is not allowed in matrix output.

An exceptional case is a ```string``` data type. In this case, the query result
can contain different types. All data will be converted into ```string```.
A user must be careful here because converting data type to string
and vice versa can have unwanted performance issues.

#### Output Lists
If the query contains list as output, the list expands into the row.
All corresponding lists must have the same size.

### Error Handling

Memgraph TensorFlow op reports internal errors:

  * Cannot create a client instance
    * Memgraph TensorFlow op missing some system resources to
    create a connection to Memgraph
  * Cannot connect to memgraph: \<message\>
    * Connection issue (wrong host name, wrong port, ssl problem, ...)
  * Query error: \<message\>
    * Query is not valid
  * Internal error: \<message\>
    * Some non-specific error appears during the communication
    between Op and Memgraph.
  * List has wrong size, row: \<row\>, header: \<header\>
    * Some output list has the wrong size. Size must be the same
    for all corresponding lists.
  * Wrong type: \<header\> = \<type\> (\<value\>)
    * Matrix output contains an element with a wrong data type.
