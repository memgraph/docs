---
id: graph-projection
title: How to create a graph projection
sidebar_label: Create a graph projection
---

[![Related -
How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/mage/how-to-guides/run-a-subgraph-module.md)
[![Related - Under the
Hood](https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge)](https://memgraph.com/blog/how-we-designed-and-implemented-graph-projection-feature)

As subgraphs are mainly used with Memgraph's query modules (graph algorithms), 
`QueryBuilder`'s `call()` method enables specifying the subgraph to use with a certain algorithm.

To call a procedure named `test_query_module` with argument `"arg"`, and run
it on a subgraph containing only nodes with label `:LABEL` and their mutual 
relationships build the following query:

```Python
from gqlalchemy import QueryBuilder

label = "LABEL"

query_builder = QueryBuilder().call(procedure="test_query_module",
                                    arguments=("arg"), node_labels=label)

query_builder.execute()
```

The above code executes the following Cypher query:
```Cypher
MATCH p=(:LABEL)-->(:LABEL)
WITH project(p) AS graph
CALL test_query_module(graph, 'arg')
```

Te code can be expanded, you can use multiple relationship types and node
labels. Using this functionality, we can call the query module as:
```Python
labels = ["LABEL0", "LABEL1"]
relationship_types = ["TYPE0", "TYPE1"]
arguments = ("arg0", 5)
query_builder = QueryBuilder().call(procedure="test_query_module",
                                    arguments=arguments,
                                    node_labels=labels,
                                    relationship_types=relationship_types)

query_builder.execute()
```

The above code executes the following Cypher query:
```Cypher
MATCH p=(:LABEL0)-[:TYPE0 | :TYPE1]->(:LABEL1)
WITH project(p) AS graph
CALL test_query_module(graph, "arg0", 5)
```

This query uses a subgraph containing all nodes labeled `LABEL0` 
connected with relationships `TYPE0` or `TYPE1` (or both) with nodes labeled `LABEL1`.
