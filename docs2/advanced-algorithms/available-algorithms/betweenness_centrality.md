---
id: betweenness-centrality
title: betweenness_centrality
sidebar_label: betweenness_centrality
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

Centrality analysis provides information about the node’s importance for an
information flow or connectivity of the network. Betweenness centrality is one
of the most used centrality metrics. Betweenness centrality measures the extent
to which a node lies on paths between other nodes in the graph. Thus, nodes with
high betweenness may have considerable influence within a network under their
control over information passing between others. The calculation of betweenness
centrality is not standardized, and there are many ways to solve it. It is
defined as the number of shortest paths in the graph that passes through the
node divided by the total number of shortest paths. The implemented algorithm is
described in the paper "[A Faster Algorithm for Betweenness
Centrality](http://www.uvm.edu/pdodds/research/papers/others/2001/brandes2001a.pdf)"
[^1].

[^1] [A Faster Algorithm for Betweenness
Centrality](http://www.uvm.edu/pdodds/research/papers/others/2001/brandes2001a.pdf),
Ulrik Brandes

[![docs-source](https://img.shields.io/badge/source-betweenness_centrality-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/betweenness_centrality_module/betweenness_centrality_module.cpp)

| Trait               | Value                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>                                                      |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>                                                            |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight>                                                     |
| **Parallelism**     | <Highlight color="#FB6E00">**parallel**</Highlight>                                                       |

## Procedures

<RunOnSubgraph/>

### `get(directed, normalized, threads)`

#### Input:

- `directed: boolean (default=True)` ➡ If `False` the direction of the edges is ignored.
- `normalized: boolean (default=True)` ➡ If `True` the betweenness values are normalized by
  `2/((n-1)(n-2))` for graphs, and `1/((n-1)(n-2))` for directed graphs where
  `n` is the number of nodes.
- `threads: integer (default=number of concurrent threads supported by the
  implementation)` ➡ The number of threads used to calculate betweenness
  centrality.

#### Output:

- `betweenness_centrality: float` ➡ Value of betweenness for a given node.

- `node: Vertex` ➡ Graph vertex for betweenness calculation.

#### Usage:

```cypher
CALL betweenness_centrality.get()
YIELD node, betweenness_centrality;
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

<img src={require('../../data/query-modules/cpp/betweenness-centrality/betweenness-centrality-1.png').default}/>

  </TabItem>

  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 6}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 7}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 8}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 9}) MERGE (b:Node {id: 10}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 11}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 9}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 6}) MERGE (b:Node {id: 11}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 8}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
CALL betweenness_centrality.get(TRUE,TRUE)
YIELD node, betweenness_centrality
RETURN node, betweenness_centrality;
```

  </TabItem>

  <TabItem value="result">

```plaintext
+-------------------------+-------------------------+
| node                    | betweenness_centrality |
+-------------------------+-------------------------+
| (:Node {id: 0})         | 0                       |
| (:Node {id: 1})         | 0.109091                |
| (:Node {id: 2})         | 0.0272727               |
| (:Node {id: 3})         | 0                       |
| (:Node {id: 4})         | 0.0454545               |
| (:Node {id: 5})         | 0.2                     |
| (:Node {id: 6})         | 0.0636364               |
| (:Node {id: 7})         | 0                       |
| (:Node {id: 8})         | 0.0181818               |
| (:Node {id: 9})         | 0.0909091               |
| (:Node {id: 10})        | 0                       |
| (:Node {id: 11})        | 0.0181818               |
+-------------------------+-------------------------+
```

  </TabItem>

</Tabs>
