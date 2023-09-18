---
id: mock-python-api
title: Mock Python query module API
sidebar_label: Mock Python API
slug: /reference-guide/query-modules/api/mock-python-api
---

The mock Python query module API enables you to develop and test query modules
for Memgraph without having to run a Memgraph instance by simulating its
behavior. As the mock API is compatible with the
[Python API](/reference-guide/query-modules/implement-custom-query-modules/api/python-api.md),
you can add modules developed with it to Memgraph as-is, without modifying the
code.

It is implemented in `mgp_mock.py`, which contains definitions of all
classes and functions provided for developing query module procedures and
functions. The source file is located in the Memgraph installation directory,
inside `/usr/include/memgraph`.

## API reference

Because the mock API’s classes and functions are compatible with the corresponding
Python API classes and functions, the
[Python API reference](/reference-guide/query-modules/implement-custom-query-modules/api/python-api.md)
applies, with the following exceptions:

* Query procedure returns (`Record` class) are printable.
* The mock API doesn’t throw errors having to do with Memgraph-internal
  behavior (`UnableToAllocateError`, `InsufficientBufferError`,
  `OutOfRangeError`, `KeyAlreadyExistsError`, `SerializationError` and
  `AuthorizationError`).
* The mock API doesn’t contain two Python API methods dealing with
  Memgraph-internal behavior (`must_abort` and `check_must_abort`).
  These methods are used to check whether Memgraph has notified the query
  module to abort its execution.
* The constructors of the `ProcCtx` and `FuncCtx` classes take a NetworkX
  [MultiDiGraph](https://networkx.org/documentation/stable/reference/classes/multidigraph.html)
  because that’s the data structure the mock API uses for internal graph
  representations.
* Transformation modules are currently not implemented.

### Graph representation

The mock Python API uses a graph representation based on the NetworkX
[MultiDiGraph](https://networkx.org/documentation/stable/reference/classes/multidigraph.html),
which is a directed graph that supports parallel edges (relationships) and
custom node/relationship attributes.

All elements of a Memgraph graph are supported by the mock API, with the
following rules about representing node labels and relationship types:

* Node labels are stored in the node attribute named `"labels"` as a
  `":"`-separated string, e.g. the node `(n:Actor:Director)` has
  `{"labels": "Actor:Director"}`.
* Edge types are strings stored in `"type"`.

## Using the mock API

### Importing

Before importing the mock API, you need to make it visible to the query module,
e.g. by adding the path of `mgp_mock.py` to PYTHONPATH or copying `mgp_mock.py`
to the directory containing the module.

### Running

The following code block contains an example query procedure and a runner for
query procedures:

```python
import mgp_mock as mgp
import networkx as nx

@mgp.read_proc
def example_procedure(context: mgp.ProcCtx) -> mgp.Record(status=str):
    return mgp.Record(status="Hello, world!")

graph = nx.MultiDiGraph() # Empty graph
context = mgp.ProcCtx(graph) # Create a context instance

result = example_procedure(context) # Run the procedure
print(result) # Hello, world!
```

### Running the module with Memgraph

As the mock Python API is compatible with the Python query module API, adding a
module developed with the mock API to Memgraph is a simple task.

1. Replace the `mgp_mock` import with `import mgp`
   * This includes refactoring the usages of `mgp_mock` (or alias) to `mgp`.
2. [Load the query module.](/reference-guide/query-modules/load-call-query-modules.md)
