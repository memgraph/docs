---
id: union-find
title: union_find
sidebar_label: union_find
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

Analysis of connected components is a common task in graph analytics.

By using a disjoint-set data structure that keeps track of them, the algorithm implemented in this module enables the user to quickly check whether a pair of given nodes is in the same or different connected component.
A check on a pair of nodes is effectively executed in O(1) time.

The implementation of the disjoint-set data structure and its operations uses the *union by rank* and *path splitting* optimizations described in "[Worst-case Analysis of Set Union Algorithms](https://dl.acm.org/doi/10.1145/62.2160)" [^1], and presented with examples [here](https://www.cs.princeton.edu/~rs/AlgsDS07/01UnionFind.pdf).

[^1] [Worst-case Analysis of Set Union Algorithms](https://dl.acm.org/doi/10.1145/62.2160), Robert E. Tarjan and Jan van Leeuwen

[![docs-source](https://img.shields.io/badge/source-union_find-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/union_find.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>     |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

:::note Too slow?

If this algorithm implementation is too slow for your use case, [contact us](mailto:tech@memgraph.com) and request a rewrite to C++ !

:::

## Procedures

<RunOnSubgraph/>

### `connected(nodes1, nodes2, mode, update)`

#### Input:

* `nodes1: Union[Vertex, List[Vertex]]` ➡ First value (or list thereof) in connectedness calculation.
* `nodes2: Union[Vertex, List[Vertex]]` ➡ Second value (or list thereof) in connectedness calculation.
* `mode: string (default="pairwise")` ➡ Mode of combining `nodes1` and `nodes2`. Can be ***p*** or ***pairwise*** for a pairwise product, or ***c*** or ***cartesian*** for a Cartesian product of the arguments. Pairwise by default.
* `update: boolean (default=True)` ➡ Specifies whether the disjoint-set data structure should be reinitialized. Enabled by default. If the graph has been modified since the previous call of this procedure, turning `update` off ensures that the changes are not visible in the output.

#### Output:

* `node1: Vertex` ➡ Node in `nodes1`.
* `node2: Vertex` ➡ Node in `nodes2`.
* `connected: boolean` ➡ `True` if the above nodes are in the same connected component of the graph.

#### Usage:
```cypher
MATCH (m:Node)
WITH collect(m) AS nodes1
MATCH (n:Node)
WITH collect(n) AS nodes2, nodes1
CALL union_find.connected(nodes1, nodes2) YIELD *
RETURN node1, node2, connected;
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

  <img src={require('../../data/query-modules/python/union-find/union-find-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
MATCH (m:Node)
WHERE m.id = 0 OR m.id = 1
WITH collect(m) AS nodes1
MATCH (n:Node)
WHERE n.id = 2 OR n.id = 3
WITH collect(n) AS nodes2, nodes1
CALL union_find.connected(nodes1, nodes2) YIELD *
RETURN node1, node2, connected;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+-----------------+-----------------+-----------------+
| node1           | node2           | connected       |
+-----------------+-----------------+-----------------+
| (:Node {id: 0}) | (:Node {id: 2}) | false           |
| (:Node {id: 1}) | (:Node {id: 3}) | false           |
+-----------------+-----------------+-----------------+
```

  </TabItem>

</Tabs>