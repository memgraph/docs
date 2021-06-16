---
id: graph-analyzer
title: The graph_analyzer module
sidebar_label: graph_analyzer
---


import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

[![docs-source](https://img.shields.io/badge/source-graph_analyzer-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/graph_analyzer.py)


## Abstract

First thing someone should focus on when working with graph is getting a deep analytics of current state. That is what this module is doing. By using the power of NetworkX, various different graph properties are extracted. This module has the ability to run on subgraph once subgraph of nodes is provided as input. Here is a list of analytics that it uses:

* **nodes**: Number of nodes
* **edges**: Number of edges
* **bridges**: Number of bridges
* **articulation_points**: Number of articulation points
* **avg_degree**: Average degree
* **sorted_nodes_degree**: Sorted nodes degree
* **self_loops**: Self loops
* **is_bipartite**: Is bipartite
* **is_plannar**: Is planar
* **is_biconnected**: Is biconnected
* **is_weakly_connected**: Is weakly connected
* **number_of_weakly_components**: Number of weakly connected components
* **is_strongly_connected**: Is strongly connected
* **strongly_components**: Number of strongly connected components
* **is_dag**: Is directed acyclic graph (DAG)
* **is_eulerian**: Is eulerian
* **is_forest**: Is forest
* **is_tree**: Is tree

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>     |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

### `analyze(analyses)`

#### Input:

* `analyses: List[str](NULL)` ➡ List of analytics names to be fetched. If provided with NULL, whole set of analytics will be included.

#### Output:

* `name: str` ➡ The name of the analytics
* `value: str` ➡ Analytics value, stored as a string

#### Usage:
```cypher
CALL graph_analyzer.analyze() YIELD *;
```

### `analyze_subgraph(vertices, edges, analyses)`

#### Input:

* `vertices: List[Vertex]` ➡ Subset of vertices within a graph.
* `edges: List[Edge]` ➡ Subset of edges in a graph for which analytics will take place.
* `analyses: List[str](NULL)` ➡ List of analytics names to be fetched. If provided with NULL, whole set of analytics will be included.

#### Output:

* `name: str` ➡ The name of the analytics
* `value: str` ➡ Analytics value, stored as a string

#### Usage:
```cypher
MATCH (n)-[e]-(m)
WITH COLLECT(n) AS nodes_subset, COLLECT(e) AS edges_subset
CALL graph_analyzer.analyze(nodes_subset, edges_subset) YIELD name, value
RETURN name, value;
```

## Example
#### 2 components example

<Tabs
  groupId="example"
  defaultValue="visualization"
  values={[
    {label: 'Step 1: Input graph', value: 'visualization'},
    {label: 'Step 2: Cypher load commands', value: 'cypher'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Results', value: 'result'},
  ]
}>
  <TabItem value="visualization">

  <img src="https://i.imgur.com/gbIcFPc.png"/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 7}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 7}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);     
MERGE (a:Node {id: 8}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);   
MERGE (a:Node {id: 10}) MERGE (b:Node {id: 11}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
CALL graph_analyzer.analyze([
    "nodes", "edges", "bridges", "articulation_points", 
    "avg_degree", "is_dag", "is_tree", "strongly_components"
    ]) YIELD *;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+-------------------------------------------+-------------------------------------------+
| name                                      | value                                     |
+-------------------------------------------+-------------------------------------------+
| "Number of nodes"                         | "12"                                      |
| "Number of edges"                         | "14"                                      |
| "Number of bridges"                       | "2"                                       |
| "Number of articulation points"           | "3"                                       |
| "Average degree"                          | "1.1666666666666667"                      |
| "Is DAG"                                  | "True"                                    |
| "Is tree"                                 | "False"                                   |
| "Number of strongly connected components" | "12"                                      |
+-------------------------------------------+-------------------------------------------+
```

  </TabItem>

</Tabs>