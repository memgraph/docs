---
id: pagerank
title: pagerank
sidebar_label: pagerank
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

If we present nodes as pages and directed edges between them as links, the
**PageRank** algorithm outputs a probability distribution used to represent the
likelihood that a person randomly clicking on links will arrive at any
particular page.

**PageRank** theory holds that an imaginary surfer who is randomly clicking on
links will eventually stop clicking. The probability, at any step, that the
person will continue randomly clicking on links is called a damping factor,
otherwise, the next page is chosen randomly among all pages.

**PageRank** is computed iteratively using the following formula:

```
Rank(n, t + 1) = (1 - d) / number_of_nodes
                + d * sum { Rank(in_neighbour_of_n, t) /
                out_degree(in_neighbour_of_n)}
```

Where Rank(n, t) is **PageRank** of node n at iteration t. In the end, *rank*
values are **normalized** to sum 1 to form a probability distribution.

The algorithm is implemented in such a way that all available **threads** are
used to calculate PageRank, mostly for scalability purposes.

Default arguments are equal to default arguments in
[NetworkX](https://networkx.org/documentation/stable/reference/algorithms/generated/networkx.algorithms.link_analysis.pagerank_alg.pagerank.html)
PageRank implementation.

[![docs-source](https://img.shields.io/badge/source-pagerank-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/cpp/pagerank_module/pagerank_module.cpp)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>   |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**parallel**</Highlight>   |

## Procedures

<RunOnSubgraph/>

### `get(max_iterations, damping_factor, stop_epsilon)`

#### Input:

* `max_iterations: integer (default=100)` ➡ Maximum number of iterations within PageRank
  algorithm.
* `damping_factor: double (default=0.85)` ➡ PageRanks damping factor. This is the
  probability of continuing the random walk from a random node within the graph.
* `stop_epsilon: double (default=1e-5)` ➡ Value used to terminate the iterations of
  PageRank. If change from one iteration to another is lower than
  *stop_epsilon*, execution is stopped.

#### Output:

* `node` ➡ Node in the graph, for which PageRank is calculated.
* `rank` ➡ Normalized ranking of a node. Expresses the probability that a random
  surfer will finish in a certain node by a random walk.

#### Usage:

```cypher
CALL pagerank.get()
YIELD node, rank;
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

  <img src={require('../../data/query-modules/cpp/pagerank/memgraph-pagerank.png').default}/>

  </TabItem>
  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 6}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 7}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>
  <TabItem value="run">

```cypher
CALL pagerank.get()
YIELD node, rank
RETURN node, rank;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+-----------------+-----------------+
| node            | rank            |
+-----------------+-----------------+
| (:Node {id: 1}) | 0.0546896       |
| (:Node {id: 0}) | 0.333607        |
| (:Node {id: 2}) | 0.0546896       |
| (:Node {id: 3}) | 0.0546896       |
| (:Node {id: 4}) | 0.0546896       |
| (:Node {id: 5}) | 0.0546896       |
| (:Node {id: 6}) | 0.0546896       |
| (:Node {id: 7}) | 0.338255        |
+-----------------+-----------------+
```

  </TabItem>
</Tabs>
