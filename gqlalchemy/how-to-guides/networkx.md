---
id: networkx
title: How to import NetworkX graph into Memgraph
sidebar_label: Import NetworkX graph into Memgraph
---

GQLAlchemy holds transformations that allow the NetworkX graph to be transformed into the Memgraph graph. These transformations take the NetworkX graph object and translate it to the appropriate Cypher queries. Then the Cypher queries can be executed so that the graph is created inside Memgraph. 

## Available transformations

- [`nx_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L35) - Generates a Cypher query for creating a graph.
- [`nx_graph_to_memgraph_parallel`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L46) - Generates Cypher queries and inserts data into Memgraph in parallel (uses multiprocessing).

These transformations use the [`NetworkXCypherBuilder`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L133) that is based on [`NetworkXCypherConfig`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/utilities.py#L41). `NetworkXCypherBuilder` object can yield queries depending on whether they involve index creation in the configuration or not. Hence, for nodes, there are two different procedures for the query creation - [`_nx_nodes_to_cypher_with_index`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L168) and [`_nx_nodes_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L163). Since edges can’t be indexed, there is only one procedure for the query creation - [`_nx_edges_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L182).

The above procedures use [`_create_node`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L192) and [`_create_edge`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L202) for each node or edge. By default, the node does not have a label and the edge is of type `TO`. The number the NetworkX node translates to property `id` in the Memgraph node. If additional properties are defined in the dictionary of a node, they will be translated to node properties in Memgraph. Properties can’t be named `labels` or `type`. Those keywords are reserved to define a label for a node or type of edge. For example:

```python
graph.add_nodes_from([(1, {"labels": "First"}), 2, 3])
```

will create a graph with nodes that have property `id` of value 1, 2 and 3. Here only node with `id` 1 had label `First`. Other nodes are not labeled. On the other side, 

```python
graph.add_edges_from([(1, 2, {"type": "EDGE_TYPE"}), (1, 3)])
```

will create an edge in Memgraph of type `EDGE_TYPE` that connects nodes with property `id` of values 1 and 2. It will create another edge of type `TO` between nodes with property `id` of values 1 and 3.

Let’s add other properties and see what happens:

```python
import networkx as nx
from gqlalchemy import Memgraph
from gqlalchemy.transformations import nx_to_cypher

memgraph = Memgraph()
memgraph.drop_database()
graph = nx.Graph()
graph.add_nodes_from([(1, {"labels": "First"}), (2, {"name": "Kata"}), 3])
graph.add_edges_from([(1, 2, {"type": "EDGE_TYPE", "date": "today"}), (1, 3)])

for query in nx_to_cypher(graph):
    memgraph.execute(query)
```

<div className={"imgRow"}>
  <div className={"imgColumn"}>
    <img src={require('./data/networkx-example-2.png').default} alt="networkx-example-2"/>
  </div>
  <div className={"imgColumn"}>
    <img src={require('./data/networkx-example-3.png').default} alt="networkx-example-3"/>
  </div>
</div>


## Example

Here is the example of how a simple NetworkX graph can be imported into Memgraph:

```python
import networkx as nx
from gqlalchemy import Memgraph
from gqlalchemy.transformations import nx_to_cypher

memgraph = Memgraph()
memgraph.drop_database()
graph = nx.Graph()
graph.add_nodes_from([(1, {"labels": "First"}), 2, 3])
graph.add_edges_from([(1, 2, {"type": "EDGE_TYPE"}), (1, 3)])

for query in nx_to_cypher(graph):
    memgraph.execute(query)
```

After running the above script, graph stored inside Memgraph looks like this:
<img src={require('./data/networkx-example-1.png').default} alt="networkx-example-1" className={"imgBorder"}/>


