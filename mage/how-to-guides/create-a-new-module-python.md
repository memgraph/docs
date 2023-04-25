---
id: create-a-new-module-python
title: How to create a query module in Python
sidebar_label: Create a Python query module
---

The [Python API](/memgraph/reference-guide/query-modules/api/python-api)
provided by Memgraph lets you develop query modules. It is accompanied by the
[mock API](https://memgraph.com/docs/memgraph/reference-guide/query-modules/api/mock-python-api), which
makes it possible to develop and test query modules for Memgraph without having
to run a Memgraph instance.

In this tutorial, we will learn how to develop a query module in
Python on the example of the **random walk algorithm**.

## Prerequisites

There are three options for installing and working with Memgraph MAGE:

1. **Pulling the `memgraph/memgraph-mage` image**: check the `Docker Hub`
   [installation guide](/installation/docker-hub.md).
2. **Building a Docker image from the MAGE repository**: check the `Docker
   build` [installation guide](/installation/docker-build.md).
3. **Building MAGE from source**: check the `Build from source on Linux`
   [installation guide](/installation/source.md).

## Developing a module

:::note

These steps are the same for all MAGE installation options (_Docker Hub_,
_Docker build_ and _Build from source on Linux_).

:::

Position yourself in the **MAGE repository** you cloned earlier. Specifically,
go in the `python` subdirectory and create a new file named `random_walk.py`.

```plaintext
mage
└── python
    └── random_walk.py

```

For coding the query module, we’ll use the
[`mgp`](https://github.com/memgraph/mgp) package that has the Memgraph Python
API including the key graph data structures:
[**Vertex**](https://github.com/memgraph/mgp/blob/main/mgp.py#L260) and
[**Edge**](https://github.com/memgraph/mgp/blob/main/mgp.py#L182).
To install `mgp`, run `pip install mgp`.

Here's the code for the random walk algorithm:

```python
import mgp
import random


@mgp.read_proc
def get_path(
    start: mgp.Vertex,
    length: int = 10,
) -> mgp.Record(path=mgp.Path):
    """Generates a random path of length `length` or less starting
    from the `start` vertex.

    :param mgp.Vertex start: The starting node of the walk.
    :param int length: The number of edges to traverse.
    :return: Random path.
    :rtype: mgp.Record(mgp.Path)
    """
    path = mgp.Path(start)
    vertex = start
    for _ in range(length):
        try:
            edge = random.choice(list(vertex.out_edges))
            path.expand(edge)
            vertex = edge.to_vertex
        except IndexError:
            break

    return mgp.Record(path=path)
```

The `get_path` is decorated with the `@mgp.read_proc` decorator, which tells
Memgraph it's a `read` procedure, meaning it won't make changes to the graph.
The path is created from the `start` node, and edges are appended to it
iteratively.

:::info 
If you need an additional Python library that is not already installed with
Memgraph, check out our [guide on how to install
it](/memgraph/how-to-guides/query-modules#how-to-install-external-python-libraries).
:::

### Terminate procedure execution

Just as the execution of a Cypher query can be terminated with [`TERMINATE
TRANSACTIONS
"id";`](/memgraph/reference-guide/transactions) query,
the execution of the procedure can as well, if it takes too long to yield a
response or gets stuck in an infinite loop due to unpredicted input data.

Transaction ID is visible upon calling the SHOW TRANSACTIONS; query. 

In order to be able to terminate the procedure, it has to contain function
`ctx.check_must_abort()` which precedes crucial parts of the code, such as
`while` and `until` loops, or similar points where the procedure might become
costly.

Consider the following example:

```python
import mgp

@mgp.read_proc
def long_query(ctx: mgp.ProcCtx) -> mgp.Record(my_id=int):
    id = 1
    try:
        while True:
            if ctx.check_must_abort():
                break
            id += 1
    except mgp.AbortError:
        return mgp.Record(my_id=id)
```

The `mgp.AbortError:` ensures that the correct message about termination is sent
to the session where the procedure was originally run. 

## Importing, querying and testing a module

Now in order to import, query and test a module, check out the [following
page](/mage/how-to-guides/run-a-query-module).

Feel free to create an issue or open a pull request on our [GitHub
repo](https://github.com/memgraph/mage) to speed up the development.<br/>
Also, don't forget to throw us a star on GitHub. :star:

## Working with the mock API

The
[mock Python API](https://memgraph.com/docs/memgraph/reference-guide/query-modules/api/mock-python-api)
lets you develop and test query modules for Memgraph without having to run a
Memgraph instance. As it’s compatible with the Python API you can add modules
developed with it to Memgraph as-is, without having to refactor your code.

The documentation on importing the mock API and running query modules with it
is available
[here](https://memgraph.com/docs/memgraph/reference-guide/query-modules/api/mock-python-api#using-the-mock-api),
accompanied by examples.
