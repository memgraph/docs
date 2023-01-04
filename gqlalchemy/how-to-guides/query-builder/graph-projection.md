---
id: graph-projection
title: How to create a graph projection
sidebar_label: Create a graph projection
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To learn about graph projections and how they are used to 
construct subgraphs take a look at [how we implemented the graph projection feature](https://memgraph.com/blog/how-we-designed-and-implemented-graph-projection-feature).

Since subgraphs are used mainly with our query modules (graph algorithms), we 
added support for them within `QueryBuilder`'s `call()` method using which we
can specify the subgraph to use with a specified algorithm.

To call a procedure named `test_query_module` with argument `"arg"`, and run
it on a subgraph containing only nodes with label `:LABEL` and their mutual 
relationships we can build the following query:

```Python
from gqlalchemy import QueryBuilder

label = "LABEL"

query_builder = QueryBuilder().call(procedure="test_query_module",
                                    arguments=("arg"), node_labels=label)

query_builder.execute()
```

This executes this Cypher query:
```Cypher
MATCH p=(:LABEL)-->(:LABEL)
WITH project(p) AS graph
CALL test_query_module(graph, 'arg')
```

This can be expanded, you can use multiple relationship types and up to 2 node
labels. Using this, we can call the query module as:
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

Which executes this Cypher query:
```Cypher
MATCH p=(:LABEL0)-[:TYPE0 | :TYPE1]->(:LABEL1)
WITH project(p) AS graph
CALL export_util.json(graph, "arg0", 5)
```

This query makes use of a subgraph containing all nodes labeled `LABEL0` that
are connected via edge `TYPE0` or `TYPE1` (or both) to nodes labeled `LABEL1`.
