---
id: networkx
title: How to import NetworkX graph into Memgraph
sidebar_label: Import NetworkX graph into Memgraph
---

GQLAlchemy holds transformations that allow the NetworkX graph to be transformed into the Memgraph graph. These transformations take the NetworkX graph object and translate it to the appropriate Cypher queries. Then the Cypher queries can be executed so that the graph is created inside Memgraph. 


## Import NetworkX graph into Memgraph 

### 1. Run Memgraph

To be able to try out this example on your own, you need a running Memgraph instance. Run Memgraph using the Memgraph Platform Docker image, which includes both the MAGE library and Memgraph Lab, a visual interface. 
To run the image, open a command-line interpreter and run the following Docker command:

```
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform:latest
```

### 2. Create and run a Python script

Create a new Python script `graph.py`, in the code editor of your choice, with the following code:

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

To run it, open a command-line interpreter and run the following command:

```python
python3 graph.py
```

### 3. Explore the graph

[Connect to Memgraph](/docs/memgraph-lab/connect-to-memgraph#connecting-to-memgraph) via Memgraph Lab which is running at `localhost:3000`. Head over to the **Query Execution** tab and write the following query:

```cypher
MATCH (n)-[r]->(m)
RETURN n, r, m;
```

Click **Run Query** button to see the results.

<img src={require('./data/networkx-example-2.png').default} alt="networkx-example-1" className={"imgBorder"}/>

You can notice that the node with the property `name` Kata and property `id` 2 doesn't have a label. This happened because we didn't define property key `labels`. On the other hand, a relationship which doesn't have a key `type` in the properies dictionary, is of type `TO`.


## Under the hood

### Available transformations

The available transformations in GQLAlchemy are:

- [**`nx_to_cypher`**](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L35) - Generates a Cypher query for creating a graph.
- [**`nx_graph_to_memgraph_parallel`**](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L46) - Generates Cypher queries and inserts data into Memgraph in parallel (uses multiprocessing).

These transformations use the [`NetworkXCypherBuilder`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L133) that is based on [`NetworkXCypherConfig`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/utilities.py#L41). `NetworkXCypherBuilder` object can yield queries depending on whether they involve index creation in the configuration or not. Hence, for nodes, there are two different procedures for the query creation: [`_nx_nodes_to_cypher_with_index`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L168) and [`_nx_nodes_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L163). Since relationships can’t be indexed, there is only one procedure for the query creation - [`_nx_edges_to_cypher`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L182). All of the listed procedures use [`_create_node`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L192) and [`_create_edge`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L202) for each node or relationship. 


### Graph creation

By default, the node does not have a label and the relationship is of type `TO`. The identification number of the NetworkX node translates to the property `id` in the Memgraph node. If additional properties are defined in the dictionary of a node, they will be translated to node properties in Memgraph. Be careful with the keywords `labels` and `type` in the properties dictionary. Those are reserved for node label and relationship type definition. The following code will create a graph with nodes that have the property `id` of values 1, 2 and 3. Only node with `id` 1 has label `First`. Other nodes are not labeled. 

```python
graph.add_nodes_from([(1, {"labels": "First"}), 2, 3])
```

On the other hand, to create a relationship in Memgraph of type `EDGE_TYPE` that connects nodes with the property `id` of values 1 and 2, and another one of type `TO` between nodes with the property `id` of values 1 and 3, you should use the following code:

```python
graph.add_edges_from([(1, 2, {"type": "EDGE_TYPE"}), (1, 3)])
```

The code above translates into a graph inside Memgraph, which looks like this: 

<img src={require('./data/networkx-example-1.png').default} alt="networkx-example-1" className={"imgSmaller"}/>

These kind of transformations follow the mentioned schema, but if you want to customize it, you can contribute to the [**GQLAlchemy**](https://github.com/memgraph/gqlalchemy) with a new transformation.

## Learn more

If you want to learn more, find interesting resources and check out our course, head over to the [**Memgraph for NetworkX developers**](https://memgraph.com/memgraph-for-networkx?utm_source=docs&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=docsgqla%2Bhowto&utm_content=textlink) website. To learn how to utilize the NetworkX library with Memgraph, check out the [**how-to guide**](/docs/memgraph/how-to-guides/networkx) on Memgraph documentation.
