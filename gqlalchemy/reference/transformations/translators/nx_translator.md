---
sidebar_label: nx_translator
title: gqlalchemy.transformations.translators.nx_translator
---
Translates data from Memgraph to NX graph and vice-versa.
Uses original IDs from Memgraph. Labels are encoded as properties. Since Networkx allows nodes to have properties of different dimensionality, this module stores properties as dictionary entries. All properties are saved to the NetworkX data structure.

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

Generates Cypher queries from a given NetworkX graph.

##### Input
- `graph` -> `NetworkX` graph representation.

#### Example

Use the following query to transfer `NxGraph` to Cypher queries and execute them in Memgraph:

```python
memgraph = Memgraph()
nx_graph = NxGraph(...)
for query in NxTranslator().to_cypher_queries(nx_graph):
    memgraph.execute(query)
```

#### nx\_graph\_to\_memgraph\_parallel

```python
def nx_graph_to_memgraph_parallel(graph: nx.Graph, host: str = "127.0.0.1", port: int = 7687, username: str = "", password: str = "", encrypted: bool = False, config: NetworkXCypherConfig = None) -> None
```

Generates Cypher queries and inserts data into Memgraph in parallel.


#### `get_instance`

```python
def get_instance(self) -> dgl.DGLHeteroGraph
```

Creates a `NetworkX` instance of the graph from the data residing inside Memgraph. Since `NetworkX` doesn't support labels as Memgraph does, labels are encoded as node and edge properties. All nodes and relationships are transferred, even if they are not connected with any other node (they're isolated).

#### Example

Use the following block of code to create an instance of the `NetworkX` graph from the data residing inside `Memgraph`:

```python
nx_translator = NxTranslator()
nx_graph = nx_translator.get_instance()
```

## NetworkXCypherBuilder Objects

```python
class NetworkXCypherBuilder()
```

#### yield\_queries

```python
def yield_queries(graph: nx.Graph) -> Iterator[str]
```

Generates Cypher queries for creating a graph.

#### yield\_query\_groups

```python
def yield_query_groups(graph: nx.Graph) -> List[Iterator[str]]
```

Generates Cypher queries that can be used to create a graph by query groups.


