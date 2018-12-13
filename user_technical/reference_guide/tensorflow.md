## Memgraph Tensorflow Op

### Introduction
Memgraph Tensorflow Op is Tensorflow component used for interactions with Memgraph database.

### API
Memgraph Op API consists of inputs, attributes and outputs.

#### Input
There are two  inputs:
* query
* input list

The Query is a string. The query is *openCypher* query supported by Memgraph. Memgraph Op has some limitations on the query. Limitations are explained [here](#limitations).

Input list is a query parameter. Name of this parameter is ```$input_list```. 

Let's see one simple example:

```openCypher
MATCH (p :Person) WHERE p.id IN $input_list;
```

Python part:

```python3
query = "MATCH (p :Person) WHERE p.id IN $input_list;"
input_list = [1, 2, 3, 4, 5]

with tf.Session() as sess:
  query_holder = tf.placeholder(tf.string) # Query placeholder
  input_list_holder = tf.placeholder(tf.int64) # Input list placeholder

  #Create memgraph op
  memgraph_op = \
    memgraph_op_module.memgraph_op( \
    query_holder, \
    input_list_holder, \
    output_dtype = tf.int64)
      
  # Run tensorflow graph and give input to tensorflow graph
  sess.run(memgraph_op, {query_holder: query, input_list_holder: input_list})
```

Query execution replaces ```$input_list``` with provided op input ([see python example for more](#python-example)). Input list is the only **query parameter** used by Memgraph Op.

#### Attributes

Memgraph Op attributes:
* host, default = 127.0.0.1
* port, default = 7687
* user, default = "" (empty string)
* password = "" (empty string)
* use_ssl = false
* output_dtype

*Host*, *port*, *user*, *password* and *use_ssl* are attributes used 
for connecting to Memgraph. The only different attribute is *output_type*. 
*output_dtype* has no default value and 
it is used to determine the type of output tensor. 
Notice that all data in the output tensor must be of the same type.
*dtype* can be **int64**, **double**, **bool** and **string**. 
Memgraph Op does not support other output types.

#### Outputs

Memgraph Op has two outputs:
* header
* rows

The header is a string list. The list contains headers provided by query execution:

```openCypher
MATCH (n) return n.name as Name, n.address as Address;
```

Header is ["Name", "Address"].

Rows data represent query result. Rows data is the matrix (rows x headers). If there are no results from the query (empty set), the matrix has a dimension (0 x 0).

##### Using lists as part of the output

Let's see following example:

```openCypher
MATCH (n)-->(m) RETURN n.id as id, collect(m.value) as value_list;
```

This query returns *n.id* and list of *m.values*. Memgraph Op returns a matrix. Therefore all elements in the matrix must be of the same type. Memgraph Op expands lists into the row. Matrix dimension is rows x (standard headers + sum of list sizes).

Example:

Query output:

|id |value_list|
|---|---       |
|1  |[1,2,3,4,5]|
|2  |[5,4,8,1,2]|
|3  |[8,8,8,1,2]|

Headers: 

|id|value_list_0|value_list_1|value_list_2|
|---|---|---|---|

Matrix output:

|||||||
|---|---|---|---|---|---|
|1|1|2|3|4|5|
|2|5|4|8|1|2|
|3|8|8|8|1|2|

Memgrap Op supports also more than one list in the output:

```openCypher
MATCH (n)-->(m) RETURN n.id as id, collect(m.value) as value_list, collect(m.id) as neigh;
```

Query output:

|id |value_list|neigh|
|---|---       |---|
|1  |[1,2,3,4,5]|[1, 2]|
|2  |[5,4,8,1,2]|[3,4]| 
|3  |[8,8,8,1,2]|[1,3]|

Headers: 

|id|value_list_0|value_list_1|value_list_2|neigh_0|neigh_1|
|---|---|---|---|---|---|

Matrix output:

|||||||
|---|---|---|---|---|---|
|1|1|2|3|4|5|1|2|
|2|5|4|8|1|2|3|4|
|3|8|8|8|1|2|1|3|

### Limitations

#### Input list
Input list (```$input_list```) can contain only elements of **int64** type.

#### Output types:
Output matrix contains only elements with the same data type. The data type can be **int64**, **double**, **bool** and **string**.
**Null** is not allowed in matrix output.

An exceptional case is  a **string** data type. In this case, the query result can contain different types. All data will be converted to a **string**.
A user must be careful here because converting data type to string, and vice versa can have unwanted performance issues.

#### Output lists:
If the query contains list as output, the list expands into the row. All correspondent lists must have the same size.

### Error handling

Memgraph Op reports internal errors:

* Cannot create a client instance
  * Memgraph OP missing some system resources to create a connection to Memgraph
* Cannot connect to memgraph: \<message\>
  * Connection issue (wrong host name, wrong port, ssl problem, ...)
* Query error: \<message\>
  * Query is not valid
* Internal error: \<message\>
  * Some non-specific error appears during the communication between Op and Memgraph.
* List has wrong size, row: \<row\>, header: \<header\>
  * Some output list has the wrong size. Size must be the same for all correspondent lists.
* Wrong type: \<header\> = \<type\> (\<value\>)
  * Matrix output contains an element with a wrong data type.

### Python example

```python3
#!/usr/bin/env python3

import numpy as np
import tensorflow as tf

# Load libmemgraph_op.so
memgraph_op_module = tf.load_op_library('libmemgraph_op.so')

def main():

  query = "match (u:User)-->(m) where u.id in $input_list return u.id, m.id;"
  input_list = [1, 2, 3, 4, 5]

  with tf.Session() as sess:
    query_holder = tf.placeholder(tf.string)
    input_list_holder = tf.placeholder(tf.int64)
    
    memgraph_op = memgraph_op_module.memgraph_op(query_holder, \
      input_list_holder, \
      output_dtype = tf.int64)
    
    output = sess.run(memgraph_op, {query_holder: query, \
      input_list_holder: input_list})
    
    for i in output[0]:
      print(i)
    for i in output[1]:
      print(i)

if __name__ == "__main__":
  main()
```