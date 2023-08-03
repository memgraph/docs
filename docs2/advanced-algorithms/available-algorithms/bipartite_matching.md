---
id: bipartite-matching
title: bipartite_matching
sidebar_label: bipartite_matching
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

A bipartite graph is a graph in which we can divide vertices into two independent sets, such that every edge connects vertices between these sets. No connection can be established within the set. Matching in bipartite graphs (bipartite matching) is described as a set of edges that are picked in a way to not share an endpoint. Furthermore, maximum matching is such matching of maximum cardinality of the chosen edge set. The algorithm runs in O(|V|*|E|) time where V represents a set of nodes and E represents a set of edges.

[![docs-source](https://img.shields.io/badge/source-bipartite_matching-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/bipartite_matching_module/bipartite_matching_module.cpp)


| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `max()`

#### Output:

* `maximum_bipartite_matching` ➡ Maximum bipartite matching, the cardinality of maximum matching edge subset. If graph is not bipartite, zero(0) is returned value.

#### Usage:
```cypher
CALL bipartite_matching.max()
YIELD maximum_bipartite_matching;
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

  <img src={require('../../data/query-modules/cpp/bipartite-matching/bipartite-matching-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
CALL bipartite_matching.max()
YIELD maximum_bipartite_matching
RETURN maximum_bipartite_matching;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+----------------------------+
| maximum_bipartite_matching |
+----------------------------+
| 3                          |
+----------------------------+
```

  </TabItem>

</Tabs>
