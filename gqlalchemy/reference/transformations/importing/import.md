---
sidebar_label: import
title: gqlalchemy.transformations.importing.import
---

# Abstract

GQLAlchemy supports importing data from various sources. This includes import from graph objects stored in NetworkX, DGL and PyG format but also importing from various other table sources like S3, Azure Blob storage... Files stored in local file system could be of any of the CSV, Parquet, ORC or Feather format and GQLAlchemy can parse such data and import it to the Memgraph database.

## Importer

Abstract importer that doesn't implement any strategy for translating graph but provides interface that other objects can implement. Each `Importer` has a reference to the specific translator object which is used for translating graph of specific type into Memgraph data. This translator does all the dirty stuff so check out docs about `DGLTranslator, PyGTranslator and NxTranslator` to find out implementation details.


## GraphImporter

`GraphImporter` is one such object that implements `Importer`. It is used an entry class for all importing stuff where the original object is in the graph shape already. Currently, importing from `NetworkX, DGL and PyG` is supported.

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

Creates neccessary translator object based on a graph type provided.

##### Input
- `graph_type: str` -> Graph source type object. Can be any of the: [`DGL`, `NX`, `PYG`]
- `default_node_label: str=NODE` -> Default node label that will be given to nodes when no other can be inferred.
- `default_edge_type: str=RELATIONSHIP` -> Default edge type that will be given to edges when no other can be inferred.
- `host: str=127.0.0.1` -> Host connection info for connecting to the Memgraph instance.
- `port: int=7687` -> Port connection info for connecting to the Memgraph instance.
- `username: str=""` -> Username connection info for connecting to the Memgraph instance.
- `password: str=""` -> Password connection info for connecting to the Memgraph instance.
- `encrypted: bool=False` -> Encrypted flag for connecting to the Memgraph instance.
- `client_name: str=GQLAlchemy` -> Client name used for connecting to the Memgraph instance.
- `lazy: bool=False` -> Lazy flag for connecting to the Memgraph instance.


#### `translate`

```python
def translate(self, graph) -> None
```

Gets cypher queries using the underlying translator and then inserts all queries to Memgraph DB.

##### Input
- `graph` -> DGL, PyG or NX graph instance.

### Example

The following code can be used to transfer data from DGL graph into Memgraph DB.

```python
importer = GraphImporter("dgl")
graph = DGLGraph(...) # create instance of the DGL graph
importer.translate(graph)  # in this step, queries are inserted into the Memgraph database
```

## TableToGraphImporter

Implements translation of table data to graph data, and imports it to Memgraph.

### Methods

#### `__init__`

```python
def __init__(self,
    data_loader: DataLoader,
    data_configuration: Dict[str, Any],
    memgraph: Optional[Memgraph] = None)
```

Loads configuration from `data_configuration` and saves references to `data_loader` and `memgraph`.

#### `translate`

```python
def translate(self, drop_database_on_start: bool = True) -> None
```

Performs the translation between the table data source and Memgraph database. The method uses indexes and triggers to speed up the translation process.

##### Input

- `drop_database_on_start: bool = True` -> Indicate whether or not the database should be dropped prior to the start of the translations.