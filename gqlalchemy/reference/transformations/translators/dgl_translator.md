---
sidebar_label: dgl_translator
title: gqlalchemy.transformations.translators.dgl_translator
---

Used to translate Memgraph data into `DGLGraph` representation and vice-versa.
DGL assigns a unique integer to each edge based on the order in which it was added to the graph, called the edge ID. In DGL, all the edges are directed, and an edge (u,v) indicates that the direction goes from node u to node v. Only features of numerical types (e.g., float, double, and int) are allowed. They can be scalars, vectors or multi-dimensional tensors (DGL requirement). Each node feature has a unique name, and each edge feature has a unique name. The features of nodes and edges can have the same name. A feature is created via the tensor assignment, which assigns a feature to each node/edge in the graph. The leading dimension of that tensor must be equal to the number of nodes/edges in the graph. You cannot assign a feature to a subset of the nodes/edges in the graph. Features of the same name must have the same dimensionality and data type.

### Methods

#### `__init__`

```python
def __init__(self, 
    default_node_label="NODE",
    default_edge_type="RELATIONSHIP",
    host: str = mg_consts.MG_HOST,
    port: int = mg_consts.MG_PORT,
    username: str = mg_consts.MG_USERNAME,
    password: str = mg_consts.MG_PASSWORD,
    encrypted: bool = mg_consts.MG_ENCRYPTED,
    client_name: str = mg_consts.MG_CLIENT_NAME,
    lazy: bool = mg_consts.MG_LAZY,
    ) -> None
```

Initializes translator object with given parameters.

##### Input
- `default_node_label: str=NODE` -> Default node label that will be given to nodes when no other can be inferred.
- `default_edge_type: str=RELATIONSHIP` -> Default edge type that will be given to edges when no other can be inferred.
- `host: str=127.0.0.1` -> Host connection info for connecting to the Memgraph instance.
- `port: int=7687` -> Port connection info for connecting to the Memgraph instance.
- `username: str=""` -> Username connection info for connecting to the Memgraph instance.
- `password: str=""` -> Password connection info for connecting to the Memgraph instance.
- `encrypted: bool=False` -> Encrypted flag for connecting to the Memgraph instance.
- `client_name: str=GQLAlchemy` -> Client name used for connecting to the Memgraph instance.
- `lazy: bool=False` -> Lazy flag for connecting to the Memgraph instance.

#### `to_cypher_queries`

```python
def to_cypher_queries(self, graph) -> None
```

Produces Cypher queries for data saved as part of the DGL graph. The method handles both homogeneous and heterogeneous graphs. If the graph is homogeneous, default DGL labels will be used, _N as a node label and _E as an edge label. The method converts 1D, as well as multidimensional features. If there are some isolated nodes inside the DGL graph, they won't get transferred. Nodes and edges created in the Memgraph DB will, for consistency reasons, have the property `dgl_id` set to the ID they have as part of the DGL graph. Note that this method doesn't insert anything inside the database, it just creates Cypher queries.

##### Input
- `graph: Union[dgl.DGLGraph, dgl.DGLHeteroGraph]`

#### Example

Use the following query to transfer the `DGLGraph` to Cypher queries and execute them in Memgraph:

```python
memgraph = Memgraph()
dgl_graph = DGLGraph(...)
for query in DGLTranslator().to_cypher_queries(dgl_graph):
    memgraph.execute(query)
```

#### `get_instance`

```python
def get_instance(self) -> dgl.DGLHeteroGraph
```

Creates an instance of a `DGL` graph from all edges inside Memgraph. Currently, isolated nodes are ignored because they don't contribute to message-passing neural networks. Only numerical features that are set on all nodes or all edges are transferred to the `DGL` instance since this is `DGL's` requirement. That means that any string value properties won't be transferred, as well as numerical properties that aren't set on all nodes. However, features of the type list are transferred to the DGL and can be used as any other feature in the `DGL` graph. Regardless of the data residing inside the Memgraph database, the created `DGL` graph is a heterograph instance.

#### Example

Use the following code to create an instance of the `DGLGraph` from the data residing inside `Memgraph`:

```python
dgl_translator = DGLTranslator()
dgl_graph = dgl_translator.get_instance()
```