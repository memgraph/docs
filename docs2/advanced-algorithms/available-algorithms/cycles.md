---
id: cycles
title: cycles
sidebar_label: cycles
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

In graph theory, a cycle represents a path within the graph where only the starting and ending nodes are equal. Furthermore, cycles can be double-connected links between neighboring nodes or self-loops. The cycles detection algorithm implemented within MAGE works on an undirected graph and has **no guarantee** of node order in the output. The implemented algorithm (Gibb) is described in the 1982 MIT report called "[Algorithmic approaches to circuit enumeration problems and applications](http://hdl.handle.net/1721.1/68106)" [^1]. The problem is not solvable in polynomial time. It is based on finding all subsets of fundamental cycles which takes about O(2^(|E|-|V|+1)) time where E represents a set of edges and V represents a set of vertices of the given graph.

[^1] [Algorithmic approaches to circuit enumeration problems and applications](http://hdl.handle.net/1721.1/68106), Boon Chai Lee

[![docs-source](https://img.shields.io/badge/source-cycles-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/cycles_module/cycles_module.cpp)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `get()`

#### Output:

* `cycle_id` ➡ Incremental cycle ID of a certain vertex. There is no guarantee on how nodes are going to be ordered within cycle. The cycle can be represented with a minimum of one ID, where it stands for self-loop.
* `node` ➡ Vertex object with all properties which is going to be related to the cycle ID it belongs to.

#### Usage:
```cypher
CALL cycles.get()
YIELD cycle_id, node;
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

  <img src={require('../../data/query-modules/cpp/cycles/cycles-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
CALL cycles.get()
YIELD cycle_id, node
RETURN cycle_id, node;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+-----------------+-----------------+
| cycle_id        | node            |
+-----------------+-----------------+
| 0               | (:Node {id: 2}) |
| 0               | (:Node {id: 0}) |
| 0               | (:Node {id: 1}) |
| 1               | (:Node {id: 4}) |
| 1               | (:Node {id: 2}) |
| 1               | (:Node {id: 3}) |
+-----------------+-----------------+
```

  </TabItem>

</Tabs>
