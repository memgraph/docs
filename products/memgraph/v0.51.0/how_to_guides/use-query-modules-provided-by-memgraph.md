## How to Use Query Modules Provided by Memgraph?

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded on startup.

### Utility Query Module

Query procedures that allow the users to gain more insight into other query
modules and their procedures are written under our utility `mg` query module.
This module offers three procedures with the following signatures:

* `mg.procedures() :: (name :: STRING, signature :: STRING)`: lists loaded
  procedures and their signatures
* `mg.reload(module_name :: STRING) :: ()`: reloads the given module
* `mg.reload_all() :: ()`: reloads all loaded modules

For example, invoking `mg.procedures()` from openCypher like so:

```opencypher
CALL mg.procedures() YIELD *;
```

might yield the following result:

```plaintext
+---------------------+-------------------------------------------------------------------+
| name                | signature                                                         |
+---------------------+-------------------------------------------------------------------+
| louvain.communities | louvain.communities() :: (community :: INTEGER, id :: INTEGER)    |
| louvain.modularity  | louvain.modularity() :: (modularity :: FLOAT)                     |
| mg.procedures       | mg.procedures() :: (name :: STRING, signature :: STRING)          |
| mg.reload           | mg.reload(module_name :: STRING) :: ()                            |
| mg.reload_all       | mg.reload_all() :: ()                                             |
+---------------------+-------------------------------------------------------------------+
```

In this case, we can see that Memgraph has successfully loaded all utility query
procedures as well as two additional procedures from the `louvain` query module.
This module is included in Memgraph's Enterprise offering.

If we wish to reload the `louvain` module, we can simply invoke:

```opencypher
CALL mg.reload("louvain");
```

As you might have guessed from the name, the following query will reload all
loaded modules:

```opencypher
CALL mg.reload_all();
```

### Graph Algorithms as Query Modules [Enterprise]

If you have purchased Memgraph's Enterprise edition, you have access to
certain graph algorithms in the form of query modules. These modules were
implemented by our own team using C++ and should offer some additional
performance benefits. Currently we have implemented the following algorithms:

* Louvain algorithm for community detection
* Weakly connected components

#### Louvain algorithm for community detection

In essence, this algorithm is a heuristic method which can be used to extract
the community structure of fairly sizeable networks. In the simplest of terms,
the algorithm attempts to assign graph nodes to communities in a way which
maximizes the so-called [modularity
measure](https://en.wikipedia.org/wiki/Modularity_(networks)). For more details,
we advise you to study the [original paper](https://arxiv.org/pdf/0803.0476.pdf).

This query module should be provided as a shared object (`.so`) file called
`louvain.so`. Assuming the standard installation on Debian, that file should be
located in `/usr/lib/memgraph/query_modules`. Again, we can simply run Memgraph with
the following command:

```plaintext
systemctl start memgraph
```

When using Docker, the equivalent would be the following:

```plaintext
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph
```

Suppose that Memgraph is currently storing a graph as depicted on the figure
below where numbers in the vertices are stored as properties in the graph.

![](../data/louvain_graph.png)

To create the above graph, execute the following query:

```opencypher
CREATE (n1 {number: 1})
CREATE (n2 {number: 2})
CREATE (n3 {number: 3})
CREATE (n4 {number: 4})
CREATE (n5 {number: 5})
CREATE (n6 {number: 6})
CREATE (n1)-[:e]->(n2)
CREATE (n1)-[:e]->(n3)
CREATE (n2)-[:e]->(n3)
CREATE (n3)-[:e]->(n4)
CREATE (n4)-[:e]->(n5)
CREATE (n4)-[:e]->(n6)
CREATE (n5)-[:e]->(n6);
```

Let's run the following query:

```opencypher
CALL louvain.communities() YIELD community, id;
```

We should get a result similar to:

```plaintext
+-----------+-----------+
| community | id        |
+-----------+-----------+
| 1         | 5         |
| 1         | 4         |
| 1         | 3         |
| 0         | 2         |
| 0         | 0         |
| 0         | 1         |
+-----------+-----------+
```

The procedure returns mappings from internal node IDs to communities. In order
to return the nodes instead of the IDs you should execute the following query:

```opencypher
CALL louvain.communities() YIELD community, id MATCH (n) WHERE ID(n) = id RETURN community, n;
```

We should observe the following result:

```plaintext
+---------------+---------------+
| community     | n             |
+---------------+---------------+
| 1             | ({number: 6}) |
| 1             | ({number: 5}) |
| 1             | ({number: 4}) |
| 0             | ({number: 3}) |
| 0             | ({number: 1}) |
| 0             | ({number: 2}) |
+---------------+---------------+
```

As you can see, vertices numbered 1, 2 and 3 belong to one community, while
vertices numbered 4, 5 and 6 belong to another community.

If you wish to know the exact graph modularity after running Louvain, you can
run the following query:

```opencypher
CALL louvain.modularity() YIELD modularity;
```

In our example, the result should be:

```plaintext
+------------+
| modularity |
+------------+
| 0.357143   |
+------------+
```

If you wish, you can model the "strength of connection" between two nodes by
specifying the weight of that edge. To do that, you need to add a property on
that edge named `weight` which stores a real value. Naturally, larger weights
correspond to stronger connections. If you don't explicitly specify the weight
of a certain edge, its weight will internally default to `1`. It's also
important to note that weights are internally represented as 64-bit floating
point numbers.

Finally, we should also state that the runtime of this algorithm (assuming we
let it run until convergence) is not known. It merely appears to run in
O(nlog(n)).

#### Weakly Connected Components

One of the most important features you might be interested when exploring a
certain graph is its connectivity. There are many ways in which we might express
to which extent we are interested in the connectivity of a graph, but one of the
simplest ones is by counting the number of its weakly connected components and
by determining which vertex corresponds to which connected component.

The concept of weakly connected components is natural and simple, two nodes
belong to the same component if path between them exists in a given graph.
Otherwise, we say those nodes are disconnected.

This query module should be provided as a shared object (`.so`) file called
`connectivity.so`. Assuming the standard installation on Debian, that file
should be located in `/usr/lib/memgraph/query_modules`. Again, we can simply run
Memgraph with the following command:

```plaintext
systemctl start memgraph
```

When using Docker, the equivalent would be the following:

```plaintext
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph
```

Suppose that Memgraph is currently storing a graph as depicted on the figure
below where numbers in the vertices are stored as properties in the graph.
This graph obviously has 4 weakly connected components.

![](../data/wcc_graph.png)

To create the above graph, execute the following query:

```opencypher
CREATE (n1 {number: 1})
CREATE (n2 {number: 2})
CREATE (n3 {number: 3})
CREATE (n4 {number: 4})
CREATE (n5 {number: 5})
CREATE (n6 {number: 6})
CREATE (n7 {number: 7})
CREATE (n8 {number: 8})
CREATE (n9 {number: 9})
CREATE (n10 {number: 10})
CREATE (n11 {number: 11})
CREATE (n12 {number: 12})
CREATE (n13 {number: 13})
CREATE (n14 {number: 14})
CREATE (n15 {number: 15})
CREATE (n1)-[:e]->(n2)
CREATE (n1)-[:e]->(n3)
CREATE (n2)-[:e]->(n3)
CREATE (n5)-[:e]->(n6)
CREATE (n6)-[:e]->(n7)
CREATE (n6)-[:e]->(n8)
CREATE (n7)-[:e]->(n9)
CREATE (n7)-[:e]->(n10)
CREATE (n8)-[:e]->(n11)
CREATE (n12)-[:e]->(n13)
CREATE (n12)-[:e]->(n14)
CREATE (n12)-[:e]->(n15)
CREATE (n13)-[:e]->(n14)
CREATE (n13)-[:e]->(n15)
CREATE (n14)-[:e]->(n15);
```

Let's run the following query:

```opencypher
CALL connectivity.weak() YIELD component, id;
```

We should get a result similar to:

```plaintext
+-----------+-----------+
| component | id        |
+-----------+-----------+
| 3         | 14        |
| 3         | 13        |
| 3         | 12        |
| 3         | 11        |
| 2         | 10        |
| 2         | 9         |
| 2         | 8         |
| 2         | 7         |
| 2         | 6         |
| 0         | 1         |
| 0         | 0         |
| 0         | 2         |
| 1         | 3         |
| 2         | 4         |
| 2         | 5         |
+-----------+-----------+
```

The procedure returns mappings from internal node IDs to components. In order
to return the nodes instead of the IDs you should execute the following query:

```opencypher
CALL connectivity.weak() YIELD component, id MATCH (n) WHERE ID(n) = id RETURN component, n;
```

We should observe the following result:

```plaintext
+----------------+----------------+
| component      | n              |
+----------------+----------------+
| 3              | ({number: 15}) |
| 3              | ({number: 14}) |
| 3              | ({number: 13}) |
| 3              | ({number: 12}) |
| 2              | ({number: 11}) |
| 2              | ({number: 10}) |
| 2              | ({number: 9})  |
| 2              | ({number: 8})  |
| 2              | ({number: 7})  |
| 0              | ({number: 2})  |
| 0              | ({number: 1})  |
| 0              | ({number: 3})  |
| 1              | ({number: 4})  |
| 2              | ({number: 5})  |
| 2              | ({number: 6})  |
+----------------+----------------+
```

As expected, nodes numbered 1, 2, and 3 are all in one connected component,
node numbered 4 is in its own component, nodes numbered 5, 6, 7, 8, 9, 10 and
11 are in another component and, finally, nodes numbered 12, 13, 14 and 15 are
in the last component.
