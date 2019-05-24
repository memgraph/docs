## Memgraph TensorFlow Op

### Introduction

HA Memgraph enables easier development and production serving of your
machine learning models based on graph data by allowing you to query HA Memgraph
directly from TensorFlow using the Memgraph TensorFlow op.

A TensorFlow op (operation) is a fundamental building block of all TensorFlow
models.
Memgraph TensorFlow op wraps the high-performance HA Memgraph client for
use with TensorFlow, allowing natural data transfer between HA Memgraph and
TensorFlow at any point of the model.

See TensorFlow
[Graphs and Session guide](https://www.tensorflow.org/guide/graphs)
for more information.

### API

Memgraph TensorFlow op API consists of inputs, attributes and outputs.

#### Input

There are two inputs:
  * query
  * input list

The query is a string. The query is an `openCypher`
query supported by HA Memgraph.
Memgraph TensorFlow op has some [limitations](#limitations) on the query.

Input list is a query parameter. Name of this parameter is `$input_list`.

Let's see one simple example:
```openCypher
MATCH (p :User) WHERE p.id IN $input_list RETURN p.id;
```

Query execution replaces `$input_list` with provided op input
([see python example for more](../how_to_guides/tensorflow-setup.md#example)).
Input list is the only query parameter used by Memgraph TensorFlow op.

#### Attributes

Memgraph TensorFlow op attributes:
  * `host`, default: `127.0.0.1`
  * `port`, default: `7687`
  * `user`, default: `""` (empty string)
  * `password`, default: `""` (empty string)
  * `use_ssl`, default: `false`
  * `output_dtype`

`Host`, `port`, `user`, `password` and `use_ssl` are attributes used for
connecting to HA Memgraph. The only different attribute is `output_dtype`.
`output_dtype` has no default value and it is used to determine the type of
output tensor.  Notice that all data in the output tensor must be of the same
type.  `output_dtype` can be `int64`, `double`, `bool` and `string`.  Memgraph
TensorFlow op does not support other output types.

#### Outputs

Memgraph TensorFlow op has two outputs:
  * header
  * rows

The header is a string list.
The list contains headers provided by query execution:

```openCypher
MATCH (n) RETURN n.name AS Name, n.address AS Address;
```

Header is `["Name", "Address"]`.

Rows data represents the query result.
Rows data is the matrix `(|rows| x |headers|)`.
If there are no results from the query (empty set),
the matrix has a dimension `(0 x 0)`.

##### Using Lists as Part of the Output

Let's see the following example:

```openCypher
MATCH (n)-->(m) RETURN n.id AS id, COLLECT(m.value) AS value_list;
```

This query returns `n.id` and list of `m.values`.
Memgraph TensorFlow op returns a matrix.
Therefore all elements in the matrix must be
of the same type. Memgraph TensorFlow op expands lists into the row.
Matrix dimension is `|rows| x |(standard headers + sum of list sizes)|`.

Query output:

|id |value_list |
|---|-----------|
|1  |[1,2,3,4,5]|
|2  |[5,4,8,1,2]|
|3  |[8,8,8,1,2]|

Headers:

|id|value_list_0 |value_list_1 |value_list_2 |...|
|--|-------------|-------------|-------------|---|
|id|value_list[0]|value_list[1]|value_list[2]|...|

Matrix output:

|||||||
|-|-|-|-|-|-|
|1|1|2|3|4|5|
|2|5|4|8|1|2|
|3|8|8|8|1|2|

Memgraph TensorFlow op also supports more than one list in the output:

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

|id|value_list_0 |value_list_1 |value_list_2 |...|neigh_0 |neigh_1 |
|--|-------------|-------------|-------------|---|--------|--------|
|id|value_list[0]|value_list[1]|value_list[2]|...|neigh[0]|neigh[1]|

Matrix output:

|||||||||
|-|-|-|-|-|-|-|-|
|1|1|2|3|4|5|1|2|
|2|5|4|8|1|2|3|4|
|3|8|8|8|1|2|1|3|

### Limitations

#### Input List

Input list (`$input_list`) can contain only elements of `int64` type.

#### Output types:

Output matrix contains only elements with the same data type. The data type can
be `int64`, `double`, `bool` and `string`.
`Null` is not allowed in matrix output.

An exceptional case is a `string` data type. In this case, the query result
can contain different types. All data will be converted into `string`.
A user must be careful here because converting data type to string
and vice versa can have unwanted performance issues.

#### Output Lists

If the query contains list as output, the list expands into the row.
All corresponding lists must have the same size.

### Error Handling

Memgraph TensorFlow op reports internal errors:

  * Cannot create a client instance
    * Memgraph TensorFlow op missing some system resources to
    create a connection to HA Memgraph
  * Cannot connect to HA Memgraph: \<message\>
    * Connection issue (wrong host name, wrong port, ssl problem, ...)
  * Query error: \<message\>
    * Query is not valid
  * Internal error: \<message\>
    * Some non-specific error appears during the communication
    between Op and HA Memgraph.
  * List has wrong size, row: \<row\>, header: \<header\>
    * Some output list has the wrong size. Size must be the same
    for all corresponding lists.
  * Wrong type: \<header\> = \<type\> (\<value\>)
    * Matrix output contains an element with a wrong data type.

## Memgraph Parallel Tensorflow Op

### Introduction

Memgraph Parallel Tensorflop Op is a way to speed up performance of queries in
a data parallel way. The parallelization is done by splitting the input list
into chunks, running the query on each chunk of the input list independently
and simply concatenating the results into a single tensor.

### API

The inputs, outputs and errors are all equivalent to the regular
Memgraph Tensorflow Op, with the exception of the parallel op having one
addional attribute

  * `num_workers`, default: `2`

`num_workers` determines how many parallel connections to HA Memgraph the parallel
Tensorflow Op will maintain and into how many chunks the input list is broken.

### Important Considerations and Semantic Differences

Under the hood, the Parallel Tensorflow Op runs each of your queries as several
independent queries. The exact number matches the `num_workers` attribute.

Your input list is split into chunks, such that every worker gets a chunk of
approximately equal size.
The only way to utilize paralleism is to use input lists.

Since the queries are independent, the queries' semantics can change depending
on the number of workers.
Running with a single worker is semantically equivalent of using the regular
Memgraph Tensorflow Op.
Running with multiple workers, any query which assumes it's seeing all the
results is likely to produce unexpected results.

For example, a query that sorts results will only sort results within its
chunk.

If this is the result of an imaginary query with `num_workers = 1`:

|result|
|-|
|1|
|2|
|3|
|4|
|5|

This might be the result with `num_workers = 2`:
The first worker is assigned a chunk of size three and the second worker a
chunk of size two.
Hence the first three elements are sorted amongst each other and the last
two elements are sorted amongts each other, but the entire result is not
sorted.

|result|
|-|
|1|
|3|
|4|
|2|
|5|

A query with a limit clause will only limit the results within that
chunk, meaning the total result might have `(num_workers * limit)` rows.

Using `WHERE something in $input_list` will cause unexpected results.

The parallel Memgraph Tensorflow op is best used when the input list is full
of "ids" of nodes to be found and something independent has to be done for
each found node, such as return its features, or its neighbours.
