---
id: networkx
title: How to import NetworkX graph into Memgraph
sidebar_label: Import NetworkX graph into Memgraph
---

GQLAlchemy holds transformations that allow the NetworkX graph to be transformed into the Memgraph graph. These transformations take the NetworkX graph object and translate it to the appropriate Cypher queries. Then the Cypher queries can be executed so that the graph is created inside Memgraph. 

## Available transformations

- [`nx_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L35) - Generates a Cypher query for creating a graph.
- [`nx_graph_to_memgraph_parallel`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L46) - Generates Cypher queries and inserts data into Memgraph in parallel (uses multiprocessing).

These transformations use the [`NetworkXCypherBuilder`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L133) that is based on [`NetworkXCypherConfig`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/utilities.py#L41). `NetworkXCypherBuilder` object can yield queries depending on whether they involve index creation in the configuration or not. Hence, for nodes, there are two different procedures for the query creation - [`_nx_nodes_to_cypher_with_index`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L168) and [`_nx_nodes_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L163). Since relationships can’t be indexed, there is only one procedure for the query creation - [`_nx_edges_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L182).

The above procedures use [`_create_node`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L192) and [`_create_edge`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L202) for each node or relationship. 


## Example 

By default, the node does not have a label and the relationship is of type `TO`. The identification number of the NetworkX node translates to the property `id` in the Memgraph node. If additional properties are defined in the dictionary of a node, they will be translated to node properties in Memgraph. Be careful with the keywords `labels` and `type` in the properties dictionary. Those are reserved for node label and relationship type definition. For example:

```python
graph.add_nodes_from([(1, {"labels": "First"}), 2, 3])
```

will create a graph with nodes that have the property `id` of values 1, 2 and 3. Only node with `id` 1 has label `First`. Other nodes are not labeled. On the other hand, the following code:

```python
graph.add_edges_from([(1, 2, {"type": "EDGE_TYPE"}), (1, 3)])
```

will create a relationship in Memgraph of type `EDGE_TYPE` that connects nodes with the property `id` of values 1 and 2. It will create another relationship of type `TO` between nodes with the property `id` of values 1 and 3.

<img src={require('./data/networkx-example-1.png').default} alt="networkx-example-1" className={"imgSmaller"}/>

Let’s add other properties:

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

At the image below, you can see how the NetworkX graph from the code above looks like when imported into Memgraph. 

<div className={"imgRow"}>
  <div className={"imgColumn"}>
    <img src={require('./data/networkx-example-2.png').default} alt="networkx-example-2"/>
  </div>
  <div className={"imgColumn"}>
    <img src={require('./data/networkx-example-3.png').default} alt="networkx-example-3"/>
  </div>
</div>

## Learn more

If you want to learn more, find interesting resources and check out our course, head over to the [**Memgraph for NetworkX developers**](https://memgraph.com/memgraph-for-networkx?utm_source=docs&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=docsgqla%2Bhowto&utm_content=textlink) website. To learn how to utilize the NetworkX library with Memgraph, check out the [**how-to guide**](/docs/memgraph/how-to-guides/networkx) on Memgraph documentation.
