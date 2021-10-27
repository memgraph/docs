---
id: create-a-new-module
title: Developing a query module in Python
sidebar_label: Create a Python module
---

### Prerequisites

- Clone Github repository of Memgraph MAGE.
- Check which process you will use for [MAGE installation](https://memgraph.com/docs/mage/installation). **You still don't need to do it**. If you can install MAGE from source, it will be easier to develop module.
    - If you decided to install MAGE from source, download [Memgraph instance](https://memgraph.com/product). **Memgraph instance only exists
        for Linux based OS**.
    - By installing MAGE as Docker, Memgraph will come packed inside, so you **don't need to download anything for now**, just clone MAGE Github repo.
    - **For this step we don't recommend installing Memgraph from DockerHub.**


## Developing a module
In this guide, we'll create a [random walk](https://en.wikipedia.org/wiki/Random_walk#On_graphs) algorithm.

**This step is same for both part, installing MAGE from source and installing MAGE with Docker.**

Position yourself in the MAGE repository you cloned earlier. Specifically, go in the `python` sub-directory and 
create a new file called `random_walk.py`. 

```
mage
└── e2e
    └── random_walk_test
        └── test_base
            ├── input.cyp
            └── test.yml
```

For this part we will import `mgp`, Memgraph's internal data structure module. Among others, it
contains definitions for **Vertex** and **Edge** data structures.

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
Memgraph it's a `read` procedure, meaning it won't change the graph. The path is
created from the `start` node, and edges are appended to it iteratively.

## Running

### Instructions for installing MAGE from source


**0.** Make sure your Memgraph instance is running.

```

```

**1.** Now, we need to copy our developed query module `random_walk` to `/usr/lib/memgraph/query_modules`. 

```
python3 setup build -p /usr/lib/memgraph/query_modules
```

And that is it.

### Instructions for a Docker MAGE instance:
When you developed your own query module, you need to load it inside Memgraph running inside Docker container.

There are two options here.

#### 1. Rebuild whole MAGE image
This process is better if you just want to develop this module and test it out.

This command will trigger rebuild of whole Docker image. Make sure that you have added Python requirements inside `python/requirements.txt`
file. 

**1.** Firstly, do the build of **MAGE** image:

```
docker build -t memgraph-mage .
```

**2.** Now, start `memgraph-mage` image with the following command and enjoy **your** own **MAGE**:
```
docker run --rm -p 7687:7687 --name mage memgraph-mage
```

#### 2. Build inside Docker container
This process is better if you plan to change and test module frequently.

You can build **MAGE** Docker image equipped for development. `Rust`, `Clang`, `Python3-pip`, and everything else necessary
for development will still be inside the running container. This means that you can copy **MAGE** repository inside the container
and do build inside `mage` container. And there is no need to do the whole Docker image build again.

**1.** To create `dev` **MAGE** image, run the following command:

```
docker build --target dev -t memgraph-mage:dev .
```
**2.** Now run the image with following command:

```
docker run --rm -p 7687:7687 --name mage memgraph-mage:dev
```

**3.** Now copying files inside  container and doing build.

**a)** First you need to copy files to container with name `mage`

```
docker cp . mage:/mage/
```

**b)** Then you need to position yourself inside container as root:

```
docker exec -u root -it mage /bin/bash
```

> Note: if you have done build locally, make sure to delete folder `cpp/build` because
> you might be dealing with different `architectures` or problems with `CMakeCache.txt`.
> To delete it, run:
>
> `rm -rf cpp/build`

**c)** After that, run build and copying `mage/dist` to `/usr/lib/memgraph/query_modules`:

```
python3 setup build -p /usr/lib/memgraph/query_modules/
```
**d)** Everything is done now. Just run following command:

```
exit
```

## Querying

> Note that query modules are loaded into Memgraph on startup so if your instance was already running you will need to
> execute the following query inside one of [querying platforms](https://docs.memgraph.com/memgraph/connect-to-memgraph) to load them:
```
CALL mg.load_all();
```

Lastly, run a query and test your module:

```
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

```
mage
└── e2e
    └── random_walk_test
        └── test_base
            ├── input.cyp
            └── test.yml
```

`input.cyp` represents a Cypher script for entering the data into the database.
To simplify this tutorial, we'll leave the database empty. `test.yml` specifies
which test query should be run by the database, and what should be the result or
exception. Create the files following the aforementioned directory structure.

### input.cyp

```cypher
MATCH (n) DETACH DELETE n;
```

### test.yml

```
query: >
  MATCH (start:Node {id: 0})
    CALL random_walk.get(start, 2) YIELD path
    RETURN path

output: []
```

Lastly, run the e2e tests with python:

```
python test_e2e
```
