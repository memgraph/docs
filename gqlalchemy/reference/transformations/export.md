---
sidebar_label: export
title: gqlalchemy.transformations.export
---

# Abstract

GQLAlchemy currently supports exporting data from Memgraph to `NetworkX`, `DGL` and `PyG` graph formats.  

## Transporter

Abstract transporter that provides interface for translating Memgraph data into graph objects like `NetworkX`, `DGL` and `PyG`.

## GraphTransporter

`GraphTransporter` is used for converting a Memgraph graph to the specific graph type offered by some Python package (`PyG`, `DGL`, `Nx`...). Each `GraphTransporter` has a reference to the specific translator object, which is used for translating Memgraph data into the correct graph type. This translator does all the dirty work, so check out the docs about [`DGLTranslator`](./translators/dgl_translator.md), [`PyGTranslator`](./translators/pyg_translator.md) and [`NxTranslator`](./translators/nx_translator.md) to find out implementation details.

### Methods

#### `__init__`

```python
def __init__(self, 
    graph_type: str, 
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

Creates the neccessary translator object based on a graph type provided.

##### Input
- `graph_type: str` -> Graph source type object. Can be one of the following: [`DGL`, `NX`, `PYG`]
- `default_node_label: str=NODE` -> Default node label that will be given to nodes when no other can be inferred.
- `default_edge_type: str=RELATIONSHIP` -> Default edge type that will be given to edges when no other can be inferred.
- `host: str=127.0.0.1` -> Host connection info for connecting to the Memgraph instance.
- `port: int=7687` -> Port connection info for connecting to the Memgraph instance.
- `username: str=""` -> Username connection info for connecting to the Memgraph instance.
- `password: str=""` -> Password connection info for connecting to the Memgraph instance.
- `encrypted: bool=False` -> Encrypted flag for connecting to the Memgraph instance.
- `client_name: str=GQLAlchemy` -> Client name used for connecting to the Memgraph instance.
- `lazy: bool=False` -> Lazy flag for connecting to the Memgraph instance.


#### `export`

```python
def export(self) -> None
```

Creates graph instance for the provided export option.

### Example

The following code can be used to transfer data from Memgraph DB into `DGL` graph.

```python
transporter = GraphTransporter("dgl")
graph = transporter.export()  # in this step, data is converted from Memgraph to graph
```