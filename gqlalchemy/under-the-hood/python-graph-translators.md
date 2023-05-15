---
id: python-graph-translators
title: Python graph translators
sidebar_label: Python graph translators
---


In this under the hood content you can learn more about GQLAlchemy **Python graph translators**. 

[![Related -
How-to](https://img.shields.io/static/v1?label=Related&message=How%20to%20import&color=blue&style=for-the-badge)](/how-to-guides/translators/import-python-graphs.md)
[![Related -
How-to](https://img.shields.io/static/v1?label=Related&message=How%20to%20export&color=blue&style=for-the-badge)](/how-to-guides/translators/export-python-graphs.md)
[![docs-source](https://img.shields.io/badge/source-examples-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/gqlalchemy/tree/main/tests/transformations/translators)
[![docs-source](https://img.shields.io/badge/source-translators-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/gqlalchemy/tree/main/gqlalchemy/transformations/translators)


Within code, translators are divided into the following parts, depending on a Python graph type you want to translate:

- [**NetworkX graph translator**](#networkx-graph-translator)
- [**PyG graph translator**](#pyg-graph-translator)
- [**DGL graph translator**](#dgl-graph-translator)


## NetworkX graph translator

The `NxTranslator` class implements the NetworkX graph translator and inherits from the `Translator` class. The `NxTranslator` class can be imported from `gqlalchemy.transformations.translators` module. 

[![docs-source](https://img.shields.io/badge/source-NetworkX%20Translator-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations/translators/nx_translator.py)

Translating the graph means that you can **import** NetworkX graph into Memgraph as well as **export** data from Memgraph into NetworkX graph in your Python code. The `NxTranslator` defines three important methods:
 
- [`to_cypher_queries()`](#to_cypher_queries-method) - The method which generates Cypher queries to create a graph in Memgraph.
- [`nx_graph_to_memgraph_parallel()`](#nx_graph_to_memgraph_parallel-method) - The method which generates Cypher queries to insert data into Memgraph in parallel.
- [`get_instance()`](#get_instance-method) - The method which creates NetworkX instance from the graph stored in Memgraph. 


### `to_cypher_queries()` method

The `to_cypher_queries()` method yields queries from the `NetworkXCypherBuilder` object. These queries are creating nodes (with indexes) and edges. To create nodes with indexes, `create_index` in `config` must be set to `True`. In that case, label-property indexes will be created on `id` property of each node. With or without indexes, node creation follows the same set or rules. The value of the `labels` key in NetworkX node will be translated into Memgraph node labels. Other properties will be translated into the same key-value pairs in Memgraph. Every node will have `id` property matching its NetworkX identification number. After Cypher queries for the node creation are generated, then Cypher queries for edge creation are being generated. Those Cypher queries will match nodes by their label and property `id` and create a relationship between them. The value of the `TYPE` key in NetworkX edge will be translated into relationship type in Memgraph. Any other property in NetworkX edge will be translated into the same key-value pair in Memgraph.

### `nx_graph_to_memgraph_parallel()` method

The `nx_graph_to_memgraph_parallel()` method is similar to the [`to_cypher_queries()`](#to_cypher_queries-method) method. It creates the graph inside Memgraph following the same set of rules, but it writes in parallel. To do that, it splits generated queries into query groups and opens up a new connection to Memgraph in order to run queries. It will warn you if you did not set `create_index` in `config` to `True`, because otherwise, the write process might take longer than expected.

### `get_instance()` method

Since Networkx doesn't support labels in a way Memgraph does, labels are encoded as a node and edge properties.


## PyG graph translator

The PyG graph translator is implemented with `PyGTranslator` class which inherits from the `Translator` class. The `PyGTranslator` class can be imported from `gqlalchemy.transformations.translators` module. 

[![docs-source](https://img.shields.io/badge/source-PyG%20Translator-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations/translators/pyg_translator.py)

## DGL graph translator

The DGL graph translator is implemented with `DGLTranslator` class which inherits from the `Translator` class. The `DGLTranslator` class can be imported from `gqlalchemy.transformations.translators` module. 

[![docs-source](https://img.shields.io/badge/source-DGL%20Translator-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations/translators/dgl_translator.py)
