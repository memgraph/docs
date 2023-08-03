---
id: degree-centrality
title: degree_centrality
sidebar_label: degree_centrality
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunOnSubgraph from '../../templates/_run_on_subgraph.mdx';

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

**Degree Centrality** is the basic measurement of centrality that refers to the
number of edges adjacent to a node. For directed graphs, we define an in-degree
measure, which is defined as the number of in-coming edges, and an out-degree
measure, defined as the number of out-going edges.

Let $A = (a_{i,j})$ be the adjacency matrix of a directed graph. The in-degree centrality $x_{i}$ of node $i$ is given by: $$x_{i} = \sum_k a_{k,i}$$ or in matrix form (1 is a vector with all components equal to unity): $$x = 1 A$$ The out-degree centrality $y_{i}$ of node $i$ is given by: $$y_{i} = \sum_k a_{i,k}$$ or in matrix form: $$y = A 1$$

[![docs-source](https://img.shields.io/badge/source-degree_centrality-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/degree_centrality_module/algorithm/degree_centrality_module.cpp)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed/undirected**</Highlight>   |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `get(type)`

#### Output:

- `node` ➡ Node in the graph, for which Degree Centrality is calculated.
- `degree` ➡ Calculated degree of a node.

#### Usage:

```cypher
CALL degree_centrality.get()
YIELD node, degree;
```

### `get_subgraph(nodes, relationships, type)`

#### Input:

- `nodes: list[node]` ➡ nodes to be used in the algorithm.
- `relationships: list[relationship]` ➡ relationships to be considered for 
degree calculation.
- `type: string (default="undirected")` ➡ whether we are using "in", "out", or 
"undirected" edges.

#### Output:

- `node` ➡ Node in the graph, for which Degree Centrality is calculated.
- `degree` ➡ Calculated degree of a node.

#### Usage:

```cypher
CALL degree_centrality.get()
YIELD node, degree;
```

## Example

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

<img src={require('../../data/query-modules/cpp/degree-centrality/memgraph-degree-centrality.png').default}/>

  </TabItem>
  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 6}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 7}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 8}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 8}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 9}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 10}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>
  <TabItem value="run">

```cypher
CALL degree_centrality.get("in")
YIELD node, degree
RETURN node, degree;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+------------------+------------------+
| node             | degree           |
+------------------+------------------+
| (:Node {id: 9})  | 1                |
| (:Node {id: 7})  | 0                |
| (:Node {id: 6})  | 0                |
| (:Node {id: 5})  | 0                |
| (:Node {id: 4})  | 0                |
| (:Node {id: 3})  | 0                |
| (:Node {id: 8})  | 1                |
| (:Node {id: 2})  | 5                |
| (:Node {id: 10}) | 7                |
| (:Node {id: 0})  | 1                |
| (:Node {id: 1})  | 1                |
+------------------+------------------+

```

  </TabItem>
</Tabs>
