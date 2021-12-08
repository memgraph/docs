---
id: create-a-new-module-python
title: Developing a query module in Python
sidebar_label: Create a Python module
---

## Prerequisites

There are three options for installing and working with Memgraph MAGE:

1.  **Pulling the `memgraph/memgraph-mage` image**: check the tab `Docker Hub`
    inside the [installation guide](/installation.md).
2.  **Building a Docker image from the MAGE repository**: check the tab `Docker
    build` inside the [installation guide](/installation.md).
3.  **Building MAGE from source**: check the tab `Build from source on Linux`
    inside the [installation guide](/installation.md).

## Developing a module

In this guide, we'll create a [random
walk](https://en.wikipedia.org/wiki/Random_walk#On_graphs) algorithm.

:::note

These steps are the same for every type of MAGE installation: _Docker Hub_,
_Docker build_, and _Build from source on Linux_.

:::

Position yourself in the **MAGE repository** you cloned earlier. Specifically,
go in the `python` sub-directory and create a new file called `random_walk.py`.

```plaintext
python
└── mage
    random_walk.py

```

For this part, we will import [`mgp`](https://github.com/memgraph/mgp),
Memgraph's internal data structure module. Among others, it contains definitions
for [**Vertex**](https://github.com/memgraph/mgp/blob/main/mgp.py#L260) and
[**Edge** ](https://github.com/memgraph/mgp/blob/main/mgp.py#L182)data
structures.

:::tip

Install the `mgp` Python module so your editor can use typing annotations
properly and suggest methods and classes it contains. You can install the module
by running `pip install mgp`.

:::

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

## Importing, querying and testing a module

Now in order to import, query and test a module, check out the [following
page](/mage/tutorials/run-a-query-module).

Feel free to create an issue or open a pull request on our [Github
repo](https://github.com/memgraph/mage) to speed up the development.<br/>
Also, don't forget to throw us a star on GitHub. :star:
