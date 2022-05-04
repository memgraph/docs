---
id: tensorflow-setup
title: How to setup Memgraph TensorFlow Op?
sidebar_label: TensorFlow Op
---

[TensorFlow](https://www.tensorflow.org/) is an open-source software
library for high-performance numerical computation.
A TensorFlow op (operation) is a fundamental building block of all TensorFlow
models.

Memgraph TensorFlow op wraps the high-performance Memgraph client for
use with TensorFlow, allowing natural data transfer between Memgraph and
TensorFlow at any point in the model.

At this point, we strongly advise you to read
the TensorFlow section of our
[Reference guide](../reference-guide/tensorflow.md).

In this article, we assume you have installed Python 3 and the TensorFlow pip
package. See the [link](https://www.tensorflow.org/install/pip?lang=python3) for
more information.
We also assume that you have installed and are running Memgraph ([see more](/installation/overview.mdx))

## Memgraph Tensorflow Op usage

Memgraph TensorFlow op is a shared library (`.so` file).
Library name is `libmemgraph_op.so`.

Load op library:
```python
import tensorflow as tf
memgraph_op_module = tf.load_op_library('libmemgraph_op.so')
```

Create Memgraph TensorFlow op:
```python
# Create Memgraph op, and put placeholders for input
memgraph_op = memgraph_op_module.memgraph_op(query_holder,
                                             input_list_holder,
                                             output_dtype=tf.int64)
```
Where `query_holder` and `input_list_holder`
are TensorFlow placeholders.

Computation:
```python
# Run Memgraph op
output = sess.run(memgraph_op, {query_holder: query,
                                input_list_holder: input_list})
```
The output is a tuple, where the first element is the header and the second
element is a result matrix.

### Example

Here is a simple example. You can use [the movie
dataset](/tutorials/movie-recommendation.md) or you can use this simple dataset:

```cypher
CREATE (:User {id: 1})-[:Rating {score:5.0}]->(:Movie {id: 1});
CREATE (:User {id: 2})-[:Rating {score:2.5}]->(:Movie {id: 3});
CREATE (:User {id: 3})-[:Rating {score:4.5}]->(:Movie {id: 8});
CREATE (:User {id: 4})-[:Rating {score:1.0}]->(:Movie {id: 12});
CREATE (:User {id: 5})-[:Rating {score:4.5}]->(:Movie {id: 33});
CREATE (:User {id: 42})-[:Rating {score:1.0}]->(:Movie {id: 42});
```

This example assumes that Memgraph is running on `127.0.0.1:7687`
without `ssl`.
If you want to change this,
use op [attributes](../reference-guide/tensorflow.md).

```python
import tensorflow as tf

# Load libmemgraph_op.so
memgraph_op_module = tf.load_op_library('libmemgraph_op.so')


def main():
    query = """match (u :User)-->(m :Movie)
              where u.id in $input_list
              return u.id, m.id;"""

    # Input list used in query
    input_list = [1, 2, 3, 4, 5]

    # Create tensorflow session
    with tf.Session() as sess:

        # Query placeholder
        query_holder = tf.placeholder(tf.string)

        # Input list placeholder
        input_list_holder = tf.placeholder(tf.int64)

        # Create Memgraph op, and put placeholders for input
        memgraph_op = memgraph_op_module.memgraph_op(query_holder,
                                                     input_list_holder,
                                                     output_dtype=tf.int64)

        # Run Memgraph op
        output = sess.run(memgraph_op, {query_holder: query,
                                        input_list_holder: input_list})

        # First output is list of headers
        print("Headers:")
        for i in output[0]:
            print(i)

        # Output matrix (rows), query results
        print("Rows: ")
        for i in output[1]:
            print(i)

if __name__ == "__main__":
    main()
```

## Memgraph Parallel Tensorflow Op Usage

Load op library:
```python
import tensorflow as tf
memgraph_op_module = tf.load_op_library('libmemgraph_op.so')
```

Create Memgraph TensorFlow op:
```python
# Create Memgraph op, and put placeholders for input
memgraph_op = memgraph_op_module.parallel_memgraph_op(query_holder,
                                                      input_list_holder,
                                                      output_dtype=tf.int64,
                                                      num_workers=4)
```
Where `query_holder` and `input_list_holder`
are TensorFlow placeholders.

Computation:
```python
# Run Memgraph op
output = sess.run(memgraph_op, {query_holder: query,
                                input_list_holder: input_list})
```
The output is a tuple, where the first element is the header and the second
element is a result matrix.

### Example
This example shows one of the archetypal patterns of using the parallel op.
We will find nodes by ids and return each of their features.

We will query this example dataset:

```cypher
CREATE (n:Node {id: 1, features: [100, 115, 121, 95, 72, 142]});
CREATE (n:Node {id: 2, features: [45, 125, 212, 46, 25, 92]});
CREATE (n:Node {id: 3, features: [34, 74, 261, 194, 142, 37]});
CREATE (n:Node {id: 4, features: [76, 92, 11, 16, 78, 261]});
CREATE (n:Node {id: 5, features: [175, 63, 111, 192, 58, 91]});
CREATE (n:Node {id: 6, features: [251, 184, 43, 57, 243, 231]});
CREATE (n:Node {id: 7, features: [187, 136, 37, 33, 76, 145]});
CREATE (n:Node {id: 8, features: [193, 195, 200, 74, 28, 127]});
```

This example assumes that Memgraph is running on `127.0.0.1:7687`
without `ssl`.
If you want to change this,
use op [attributes](../reference-guide/tensorflow.md).

```python
import tensorflow as tf

# Load libmemgraph_op.so
memgraph_op_module = tf.load_op_library('libmemgraph_op.so')


def main():
    query = """
            UNWIND $input_list AS idx
            MATCH (n:Node {id: idx})
            RETURN n.features
            """

    # Input list used in query
    input_list = [1, 2, 3, 4, 5]

    # Create tensorflow session
    with tf.Session() as sess:

        # Query placeholder
        query_holder = tf.placeholder(tf.string)

        # Input list placeholder
        input_list_holder = tf.placeholder(tf.int64)

        # Create Memgraph op, and put placeholders for input
        memgraph_op = memgraph_op_module.parallel_memgraph_op(query_holder,
                                                     input_list_holder,
                                                     output_dtype=tf.int64)

        # Run Memgraph op
        output = sess.run(memgraph_op, {query_holder: query,
                                        input_list_holder: input_list})

        # First output is list of headers
        print("Headers:")
        for i in output[0]:
            print(i)

        # Output matrix (rows), query results
        print("Rows: ")
        for i in output[1]:
            print(i)

if __name__ == "__main__":
    main()
```

## Where to next?

To learn more about Memgraph's functionalities, visit the **[Reference guide](/reference-guide/overview.md)**.
For real-world examples of how to use Memgraph, we strongly suggest going through one of the available **[Tutorials](../tutorials/overview.md)**.
