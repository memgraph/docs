---
id: python-graph-translators
title: Python graph translators
sidebar_label: Python graph translators
---

[![Related -
How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/python-graphs.md)


### Available transformations

The available transformations in GQLAlchemy are:

- [**`nx_to_cypher`**](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L35) - Generates a Cypher query for creating a graph.
- [**`nx_graph_to_memgraph_parallel`**](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L46) - Generates Cypher queries and inserts data into Memgraph in parallel (uses multiprocessing).

These transformations use the [`NetworkXCypherBuilder`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L133) that is based on [`NetworkXCypherConfig`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/utilities.py#L41). `NetworkXCypherBuilder` object can yield queries depending on whether they involve index creation in the configuration or not. Hence, for nodes, there are two different procedures for the query creation: [`_nx_nodes_to_cypher_with_index`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L168) and [`_nx_nodes_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L163). Since relationships can’t be indexed, there is only one procedure for the query creation - [`_nx_edges_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L182). All of the listed procedures use [`_create_node`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L192) and [`_create_edge`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L202) for each node or relationship. 


### Graph creation

By default, the node does not have a label and the relationship is of type `TO`. The identification number of the NetworkX node translates to the property `id` in the Memgraph node. If additional properties are defined in the dictionary of a node, they will be translated to node properties in Memgraph. Be careful with the keywords `labels` and `type` in the properties' dictionary. Those are reserved for node label and relationship type definition. The following code will create a graph with nodes that have the property `id` of values 1, 2 and 3. Only node with `id` 1 has label `First`. Other nodes are not labeled. 

```python
graph.add_nodes_from([(1, {"labels": "First"}), 2, 3])
```

On the other hand, to create a relationship of type `EDGE_TYPE`  that connects nodes with the property `id` of values 1 and 2, and another relationship of type `TO` between nodes with the property `id` of values 1 and 3, you should use the following code in Memgraph:

```python
graph.add_edges_from([(1, 2, {"type": "EDGE_TYPE"}), (1, 3)])
```

The code above translates into the following a graph inside Memgraph: 

<img src={require('./data/networkx-example-1.png').default} alt="networkx-example-1" className={"imgSmaller"}/>

These kind of transformations follow the mentioned schema, but if you want to customize it, you can contribute to the [**GQLAlchemy**](https://github.com/memgraph/gqlalchemy) with a new transformation.
