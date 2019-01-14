## How to Setup Memgraph Tensorflow Op?
[TensorFlow](https://www.tensorflow.org/) is an open source software
library for high-performance numerical computation.
A TensorFlow op (operation) is a fundamental building block of all TensorFlow
models.

Memgraph TensorFlow op wraps the high-performance Memgraph client for
use with TensorFlow, allowing natural data transfer between Memgraph and
TensorFlow at any point of the model.

At this point, we strongly advise you to read
the TensorFlow section of our
[reference guide](../reference_guide/tensorflow.md).

In this article, we assume you have installed Python 3 and TensorFlow pip
package. See [link](https://www.tensorflow.org/install/pip?lang=python3) for
more.
We also assume that you have installed and
running Memgraph ([see more](../quick-start.md))

### Memgraph Tensorflow Op Usage
Memgraph TensorFlow op is a shared library (`.so` file).
Library name is `libmemgraph_op.so`.

Load op library:
```python3
import tensorflow as tf
memgraph_op_module = tf.load_op_library('libmemgraph_op.so')
```

Create Memgraph TensorFlow op:
```python3
# Create Memgraph op, and put placeholders for input
memgraph_op = memgraph_op_module.memgraph_op(query_holder,
                                             input_list_holder,
                                             output_dtype=tf.int64)
```
Where `query_holder` and `input_list_holder`
are TensorFlow placeholders.

Computation:
```python3
# Run Memgraph op
output = sess.run(memgraph_op, {query_holder: query,
                                input_list_holder: input_list})
```
The output is a tuple, where the first element is header and the second
element is a result matrix.

### Example
Here is a simple example. You can use this simple dataset:

```openCypher
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
use op [attributes](../reference_guide/tensorflow.md).

```python3
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
