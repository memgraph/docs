---
id: create-a-new-module
title: Developing a query module in Python
sidebar_label: Create a Python module
---

### Prerequisites
- Download and install [Memgraph](https://memgraph.com/download).
- Clone the [MAGE](https://github.com/memgraph/mage) repository.

## Developing a module

In this guide, we'll create a [random
walk](https://en.wikipedia.org/wiki/Random_walk#On_graphs) algorithm. Position
yourself in the MAGE repository you cloned earlier. Specifically, go in the
`python` sub-directory and create a new file called `random_walk.py`. Next,
import `mgp`, Memgraph's internal data structure module. Among others, it
contains definitions for Vertex and Node data structures.

:::note If you are using code completion, you might be interested in having
`mgp` in your python path. This will allow your code editor to access `mgp.py`
and make use of code declarations and documentation. `mgp.py` is a script that
comes with Memgraph. Usually, it will be installed in
`/usr/lib/memgraph/python_support/mgp.py`. Now, all you have to do is add it to
your `PYTHONPATH` environment variable: `export
PYTHONPATH=/usr/lib/memgraph/python_support`.
:::

Here's the code for the random walk algorithm:

```python
import mgp
import random


@mgp.read_proc
def get(
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

Start Memgraph and MAGE, and copy the module you developed into the
`/usr/lib/memgraph/query_modules`.

Instructions for a local Memgraph installation (Debian/Ubuntu):
```
sudo systemctl start memgraph
cp python/random_walk.py /usr/lib/memgraph/query_modules/
```

Instructions for a docker Memgraph instance:
```
docker run --rm -d --name memgraph -p 7687:7687 memgraph/mage
docker cp python/random_walk.py memgraph:/usr/lib/memgraph/query_modules/
```
A more advanced approach is to use [docker
volumes](https://docs.docker.com/storage/volumes/). That will allow you to have
query modules synchronized between your mage repository and your docker
container.

Then, use a Memgraph client like MemgraphLab or mgconsole to load the newly
added function.
```
CALL mg.load('random_walk')
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
