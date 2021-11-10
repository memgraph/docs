---
id: create-a-new-module-python
title: Developing a query module in Python
sidebar_label: Create a Python module
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

There are three options for installing and working with Memgraph MAGE:
1.  **Pulling the `memgraph/memgraph-mage` image**:  check the tab `Docker Hub`
    inside the [installation guide](/installation.md).
2.  **Building a Docker image from the MAGE repository**: check the tab `Docker
    build` inside the [installation guide](/installation.md).
3.  **Building MAGE from source**: check the tab `Build from source on Linux` inside the
    [installation guide](/installation.md).

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
    └── random_walk.py

```

For this part, we will import `mgp`, Memgraph's internal data structure module.
Among others, it contains definitions for **Vertex** and **Edge** data
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


:::warning

The following steps depend on the how you installed Memgraph and MAGE as we need
to import the modules.

:::

## Running

<Tabs
  groupId="running-method"
  defaultValue="docker-hub"
  values={[
    {label: 'Docker Hub', value: 'docker-hub'},
    {label: 'Docker build', value: 'docker-build'},
    {label: 'Build from source on Linux', value: 'source'},
  ]
}>
  <TabItem value="docker-hub">

**1.** Start the MAGE container with:

```shell
docker run --rm -p 7687:7687 --name mage memgraph-mage:dev
```

**2.** Copy your local MAGE directory inside the container in order for Memgraph
to import the query modules:

**a)** First, you need to copy the files to the container named `mage`:

```shell
docker cp . mage:/mage/
```

**b)** Then, you need to position yourself inside the container as root:

```shell
docker exec -u root -it mage /bin/bash
```

> Note: If you performed the build locally, make sure to delete the `cpp/build`
> directory because you might be dealing with different architectures or
> problems with `CMakeCache.txt`. To delete it, run:
>
> `rm -rf cpp/build`

**c)** After that, build MAGE with the option to copy executables from
`mage/dist` to `/usr/lib/memgraph/query_modules`:

```shell
python3 setup build -p /usr/lib/memgraph/query_modules/
```

**d)** Everything should be ready to exit the container and load the query
modules:

```
exit
```

  </TabItem>
  <TabItem value="docker-build">

**1.** To create the `dev` **MAGE** image, run the following command:

```shell
docker build --target dev -t memgraph-mage:dev .
```

**2.** Start the container with the following command:

```shell
docker run --rm -p 7687:7687 --name mage memgraph-mage:dev
```

:::info

If you make any changes to the module, you can stop the container and do a
rebuild. Additionally, if you don't want to rebuild everything, you can:
1. Copy the changes to the container.
2. Perform a build inside the container.
3. Copy the executables to the `/usr/lib/memgraph/query_modules/` directory,
   where Memgraph is looking for query modules. 

The process is the same as described in step **2** of the tab `Docker Hub`.

:::

  </TabItem>
  <TabItem value="source">

**1.** Make sure your Memgraph instance is running:

```
sudo systemctl status memgraph.service
```

**2.** Now, we need to copy our developed query module `random_walk.py` to
`/usr/lib/memgraph/query_modules`:

```shell
python3 setup build -p /usr/lib/memgraph/query_modules
```

  </TabItem>
</Tabs>


## Querying

> Note that query modules are loaded into Memgraph on startup, so if your
> instance was already running, you would need to execute the following query
> inside one of the [querying
> platforms](https://docs.memgraph.com/memgraph/connect-to-memgraph) to load
> them:

```cypher
CALL mg.load_all();
```

Lastly, run a query and test your module:

```cypher
MERGE (start:Node {id: 0})-[:RELATION]->(mid:Node {id: 1})-[:RELATION]->(end:Node {id: 2})
CALL random_walk.get(start, 2) YIELD path
RETURN path
```

## Testing

Test decoupled parts of your code that don't depend on Memgraph like you would
in any other setting. E2e (end to end) tests, on the other hand, depend on
internal Memgraph data structures, like nodes and edges. After running Memgraph,
we need to prepare the testing environment on the host machine. Position
yourself in the mage directory you cloned from GitHub. The expected folder
structure for each module is the following:

```plaintext
mage
└── e2e
    └── random_walk_test
        └── test_base
            ├── input.cyp
            └── test.yml
```

`input.cyp` represents a Cypher script for entering the data into the database.
To simplify this tutorial, we'll leave the database empty. `test.yml` specifies
which test query should be run by the database and what should be the result or
exception. Create the files following the aforementioned directory structure.

### input.cyp

```cypher
MATCH (n) DETACH DELETE n;
```

### test.yml

```shell
query: >
  MATCH (start:Node {id: 0})
    CALL random_walk.get(start, 2) YIELD path
    RETURN path

output: []
```

Lastly, run the e2e tests with python:

```shell
python test_e2e
```
