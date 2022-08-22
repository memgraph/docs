---
id: node-similarity
title: node_similarity
sidebar_label: node_similarity
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

[![docs-source](https://img.shields.io/badge/source-node_similarity-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/node_similarity.py)


## Abstract

If we're interested in how similar two nodes in a graph are, we'll want to get a numerical value that represents the <em>node similarity</em> between those two nodes. There are many node similarity measures and currently this module contains the following: 
* cosine similarity
* Jaccard similarity 
* overlap similarity

**The cosine similarity** is computed using the following formula:

<a href="https://www.codecogs.com/eqnedit.php?latex=Cosine(A,B)&space;=&space;\frac{|A&space;\cap&space;B|}&space;{\sqrt{|A|&space;\cdot&space;|B|}}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Cosine(A,B)&space;=&space;\frac{|A&space;\cap&space;B|}&space;{\sqrt{|A|&space;\cdot&space;|B|}}" title="Cosine(A,B) = \frac{|A \cap B|} {\sqrt{|A| \cdot |B|}}" /></a>

**The Jaccard similarity** is computed using the following formula:
<a href="https://www.codecogs.com/eqnedit.php?latex=Jaccard(A,B)&space;=&space;\frac{|A&space;\cap&space;B|}&space;{|A|&space;&plus;&space;|B|&space;-&space;|A&space;\cap&space;B|}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Jaccard(A,B)&space;=&space;\frac{|A&space;\cap&space;B|}&space;{|A|&space;&plus;&space;|B|&space;-&space;|A&space;\cap&space;B|}" title="Jaccard(A,B) = \frac{|A \cap B|} {|A| + |B| - |A \cap B|}" /></a>

**The overalap similarity** is computed using the following formula:
<a href="https://www.codecogs.com/eqnedit.php?latex=Overlap(A,B)&space;=&space;\frac{|A&space;\cap&space;B|}&space;{min(|A|,&space;|B|)}" target="_blank"><img src="https://latex.codecogs.com/gif.latex?Overlap(A,B)&space;=&space;\frac{|A&space;\cap&space;B|}&space;{min(|A|,&space;|B|)}" title="Overlap(A,B) = \frac{|A \cap B|} {min(|A|, |B|)}" /></a>

Set A represents all neighbors of one node, set B represents all neighbors of the other node. In all the given formulas, the numerator is the cardinality of the intersection of set A and set B (in other words, the cardinality of the common neighbors set). The denominator differs but requires the cardinality of sets A and B in some way.

The algorithm is implemented so that it ignores whether the graph is directed or undirected and treats the edges as if they were undirected. It also ignores multiple edges between two nodes and treats them as if there were only one edge.


| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

### `cosine(node1, node2, mode)`

#### Input:

* `node1: Union[Vertex, Tuple[Vertex]` ➡ The first node or a tuple of nodes.
* `node2: Union[Vertex, Tuple[Vertex]]` ➡ The second node or a tuple of nodes.
* `mode: string (default="cartesian")` ➡ If the given arguments are tuples, this argument determines whether to calculate the similarity between nodes pairwise ("pairwise") or calculate the similarity between one and each node ("cartesian"). The default value is "cartesian".

#### Output:

* `node1: Vertex` ➡ The first node.
* `node2: Vertex` ➡ The second node.
* `similarity: float` ➡  The cosine similarity between the first and the second node.

#### Usage:
```cypher
MATCH (m)
WITH COLLECT(m) AS nodes1
MATCH (n)
WITH COLLECT(n) AS nodes2, nodes1
CALL node_similarity.cosine(nodes1, nodes2) YIELD node1, node2, similarity
RETURN node1, node2, similarity
```

### `jaccard(node1, node2, mode)`

#### Input:

* `node1: Union[Vertex, Tuple[Vertex]` ➡ The first node or a tuple of nodes.
* `node2: Union[Vertex, Tuple[Vertex]]` ➡ The second node or a tuple of nodes.
* `mode: string (default="cartesian")` ➡ If the given arguments are tuples, this argument determines whether to calculate the similarity between nodes pairwise ("pairwise") or calculate the similarity between one and each node ("cartesian"). The default value is "cartesian".

#### Output:

* `node1: Vertex` ➡ The first node.
* `node2: Vertex` ➡ The second node.
* `similarity: float` ➡  The Jaccard similarity between the first and the second node.

#### Usage:
```cypher
MATCH (m)
WITH COLLECT(m) AS nodes1
MATCH (n)
WITH COLLECT(n) AS nodes2, nodes1
CALL node_similarity.jaccard(nodes1, nodes2, "cartesian") YIELD node1, node2, similarity
RETURN node1, node2, similarity
```

### `overlap(node1, node2, mode)`

#### Input:

* `node1: Union[Vertex, Tuple[Vertex]` ➡ The first node or a tuple of nodes.
* `node2: Union[Vertex, Tuple[Vertex]]` ➡ The second node or a tuple of nodes.
* `mode: string (default="cartesian")` ➡ If the given arguments are tuples, this argument determines whether to calculate the similarity between nodes pairwise ("pairwise") or calculate the similarity between one and each node ("cartesian"). The default value is "cartesian".

#### Output:

* `node1: Vertex` ➡ The first node.
* `node2: Vertex` ➡ The second node.
* `similarity: float` ➡  The overlap similarity between the first and the second node.

#### Usage:
```cypher
MATCH (m)
WITH COLLECT(m) AS nodes1
MATCH (n)
WITH COLLECT(n) AS nodes2, nodes1
CALL node_similarity.overlap(nodes1, nodes2, "pairwise") YIELD node1, node2, similarity
RETURN node1, node2, similarity
```

## Example - cosine similarity

<Tabs
  groupId="example1"
  defaultValue="visualization"
  values={[
    {label: 'Step 1: Input graph', value: 'visualization'},
    {label: 'Step 2: Cypher load commands', value: 'cypher'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Results', value: 'result'},
  ]
}>
  <TabItem value="visualization">

  <img src={require('../../data/query-modules/python/node-similarity/node-similarity-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
MATCH (m)
WITH COLLECT(m) AS nodes1
MATCH (n)
WITH COLLECT(n) AS nodes2, nodes1
CALL node_similarity.cosine(nodes1, nodes2) YIELD node1, node2, similarity AS cosine_similarity
RETURN node1, node2, cosine_similarity;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+-------------------+-------------------+-------------------+
| node1             | node2             | cosine_similarity |
+-------------------+-------------------+-------------------+
| (:Node {id: 0})   | (:Node {id: 0})   | 1                 |
| (:Node {id: 0})   | (:Node {id: 2})   | 0.67082           |
| (:Node {id: 0})   | (:Node {id: 3})   | 0.316228          |
| (:Node {id: 0})   | (:Node {id: 4})   | 0.516398          |
| (:Node {id: 0})   | (:Node {id: 5})   | 0.516398          |
| (:Node {id: 0})   | (:Node {id: 1})   | 0.67082           |
| (:Node {id: 2})   | (:Node {id: 0})   | 0.67082           |
| (:Node {id: 2})   | (:Node {id: 2})   | 1                 |
| (:Node {id: 2})   | (:Node {id: 3})   | 0.707107          |
| (:Node {id: 2})   | (:Node {id: 4})   | 0.57735           |
| (:Node {id: 2})   | (:Node {id: 5})   | 0.288675          |
| (:Node {id: 2})   | (:Node {id: 1})   | 0.75              |
| (:Node {id: 3})   | (:Node {id: 0})   | 0.316228          |
| (:Node {id: 3})   | (:Node {id: 2})   | 0.707107          |
| (:Node {id: 3})   | (:Node {id: 3})   | 1                 |
| (:Node {id: 3})   | (:Node {id: 4})   | 0.408248          |
| (:Node {id: 3})   | (:Node {id: 5})   | 0.408248          |
| (:Node {id: 3})   | (:Node {id: 1})   | 0.353553          |
| (:Node {id: 4})   | (:Node {id: 0})   | 0.516398          |
| (:Node {id: 4})   | (:Node {id: 2})   | 0.57735           |
| (:Node {id: 4})   | (:Node {id: 3})   | 0.408248          |
| (:Node {id: 4})   | (:Node {id: 4})   | 1                 |
| (:Node {id: 4})   | (:Node {id: 5})   | 0.666667          |
| (:Node {id: 4})   | (:Node {id: 1})   | 0.866025          |
| (:Node {id: 5})   | (:Node {id: 0})   | 0.516398          |
| (:Node {id: 5})   | (:Node {id: 2})   | 0.288675          |
| (:Node {id: 5})   | (:Node {id: 3})   | 0.408248          |
| (:Node {id: 5})   | (:Node {id: 4})   | 0.666667          |
| (:Node {id: 5})   | (:Node {id: 5})   | 1                 |
| (:Node {id: 5})   | (:Node {id: 1})   | 0.57735           |
| (:Node {id: 1})   | (:Node {id: 0})   | 0.67082           |
| (:Node {id: 1})   | (:Node {id: 2})   | 0.75              |
| (:Node {id: 1})   | (:Node {id: 3})   | 0.353553          |
| (:Node {id: 1})   | (:Node {id: 4})   | 0.866025          |
| (:Node {id: 1})   | (:Node {id: 5})   | 0.57735           |
| (:Node {id: 1})   | (:Node {id: 1})   | 1                 |
+-------------------+-------------------+-------------------+

```

  </TabItem>

</Tabs>

## Example - Jaccard similarity

<Tabs
  groupId="example2"
  defaultValue="visualization"
  values={[
    {label: 'Step 1: Input graph', value: 'visualization'},
    {label: 'Step 2: Cypher load commands', value: 'cypher'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Results', value: 'result'},
  ]
}>
  <TabItem value="visualization">

  <img src={require('../../data/query-modules/python/node-similarity/node-similarity-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
MATCH (m)
WITH COLLECT(m) AS nodes1
MATCH (n)
WITH COLLECT(n) AS nodes2, nodes1
CALL node_similarity.jaccard(nodes1, nodes2) YIELD node1, node2, similarity AS jaccard_similarity
RETURN node1, node2, jaccard_similarity;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+--------------------+--------------------+--------------------+
| node1              | node2              | jaccard_similarity |
+--------------------+--------------------+--------------------+
| (:Node {id: 0})    | (:Node {id: 0})    | 1                  |
| (:Node {id: 0})    | (:Node {id: 2})    | 0.5                |
| (:Node {id: 0})    | (:Node {id: 3})    | 0.166667           |
| (:Node {id: 0})    | (:Node {id: 4})    | 0.333333           |
| (:Node {id: 0})    | (:Node {id: 5})    | 0.333333           |
| (:Node {id: 0})    | (:Node {id: 1})    | 0.5                |
| (:Node {id: 2})    | (:Node {id: 0})    | 0.5                |
| (:Node {id: 2})    | (:Node {id: 2})    | 1                  |
| (:Node {id: 2})    | (:Node {id: 3})    | 0.5                |
| (:Node {id: 2})    | (:Node {id: 4})    | 0.4                |
| (:Node {id: 2})    | (:Node {id: 5})    | 0.166667           |
| (:Node {id: 2})    | (:Node {id: 1})    | 0.6                |
| (:Node {id: 3})    | (:Node {id: 0})    | 0.166667           |
| (:Node {id: 3})    | (:Node {id: 2})    | 0.5                |
| (:Node {id: 3})    | (:Node {id: 3})    | 1                  |
| (:Node {id: 3})    | (:Node {id: 4})    | 0.25               |
| (:Node {id: 3})    | (:Node {id: 5})    | 0.25               |
| (:Node {id: 3})    | (:Node {id: 1})    | 0.2                |
| (:Node {id: 4})    | (:Node {id: 0})    | 0.333333           |
| (:Node {id: 4})    | (:Node {id: 2})    | 0.4                |
| (:Node {id: 4})    | (:Node {id: 3})    | 0.25               |
| (:Node {id: 4})    | (:Node {id: 4})    | 1                  |
| (:Node {id: 4})    | (:Node {id: 5})    | 0.5                |
| (:Node {id: 4})    | (:Node {id: 1})    | 0.75               |
| (:Node {id: 5})    | (:Node {id: 0})    | 0.333333           |
| (:Node {id: 5})    | (:Node {id: 2})    | 0.166667           |
| (:Node {id: 5})    | (:Node {id: 3})    | 0.25               |
| (:Node {id: 5})    | (:Node {id: 4})    | 0.5                |
| (:Node {id: 5})    | (:Node {id: 5})    | 1                  |
| (:Node {id: 5})    | (:Node {id: 1})    | 0.4                |
| (:Node {id: 1})    | (:Node {id: 0})    | 0.5                |
| (:Node {id: 1})    | (:Node {id: 2})    | 0.6                |
| (:Node {id: 1})    | (:Node {id: 3})    | 0.2                |
| (:Node {id: 1})    | (:Node {id: 4})    | 0.75               |
| (:Node {id: 1})    | (:Node {id: 5})    | 0.4                |
| (:Node {id: 1})    | (:Node {id: 1})    | 1                  |
+--------------------+--------------------+--------------------+

```

  </TabItem>

</Tabs>

## Example - overlap similarity

<Tabs
  groupId="example3"
  defaultValue="visualization"
  values={[
    {label: 'Step 1: Input graph', value: 'visualization'},
    {label: 'Step 2: Cypher load commands', value: 'cypher'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Results', value: 'result'},
  ]
}>
  <TabItem value="visualization">

  <img src={require('../../data/query-modules/python/node-similarity/node-similarity-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 4}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 5}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
MATCH (m)
WITH COLLECT(m) AS nodes1
MATCH (n)
WITH COLLECT(n) AS nodes2, nodes1
CALL node_similarity.overlap(nodes1, nodes2) YIELD node1, node2, similarity AS overlap_similarity
RETURN node1, node2, overlap_similarity;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+--------------------+--------------------+--------------------+
| node1              | node2              | overlap_similarity |
+--------------------+--------------------+--------------------+
| (:Node {id: 0})    | (:Node {id: 0})    | 1                  |
| (:Node {id: 0})    | (:Node {id: 2})    | 0.75               |
| (:Node {id: 0})    | (:Node {id: 3})    | 0.5                |
| (:Node {id: 0})    | (:Node {id: 4})    | 0.666667           |
| (:Node {id: 0})    | (:Node {id: 5})    | 0.666667           |
| (:Node {id: 0})    | (:Node {id: 1})    | 0.75               |
| (:Node {id: 2})    | (:Node {id: 0})    | 0.75               |
| (:Node {id: 2})    | (:Node {id: 2})    | 1                  |
| (:Node {id: 2})    | (:Node {id: 3})    | 1                  |
| (:Node {id: 2})    | (:Node {id: 4})    | 0.666667           |
| (:Node {id: 2})    | (:Node {id: 5})    | 0.333333           |
| (:Node {id: 2})    | (:Node {id: 1})    | 0.75               |
| (:Node {id: 3})    | (:Node {id: 0})    | 0.5                |
| (:Node {id: 3})    | (:Node {id: 2})    | 1                  |
| (:Node {id: 3})    | (:Node {id: 3})    | 1                  |
| (:Node {id: 3})    | (:Node {id: 4})    | 0.5                |
| (:Node {id: 3})    | (:Node {id: 5})    | 0.5                |
| (:Node {id: 3})    | (:Node {id: 1})    | 0.5                |
| (:Node {id: 4})    | (:Node {id: 0})    | 0.666667           |
| (:Node {id: 4})    | (:Node {id: 2})    | 0.666667           |
| (:Node {id: 4})    | (:Node {id: 3})    | 0.5                |
| (:Node {id: 4})    | (:Node {id: 4})    | 1                  |
| (:Node {id: 4})    | (:Node {id: 5})    | 0.666667           |
| (:Node {id: 4})    | (:Node {id: 1})    | 1                  |
| (:Node {id: 5})    | (:Node {id: 0})    | 0.666667           |
| (:Node {id: 5})    | (:Node {id: 2})    | 0.333333           |
| (:Node {id: 5})    | (:Node {id: 3})    | 0.5                |
| (:Node {id: 5})    | (:Node {id: 4})    | 0.666667           |
| (:Node {id: 5})    | (:Node {id: 5})    | 1                  |
| (:Node {id: 5})    | (:Node {id: 1})    | 0.666667           |
| (:Node {id: 1})    | (:Node {id: 0})    | 0.75               |
| (:Node {id: 1})    | (:Node {id: 2})    | 0.75               |
| (:Node {id: 1})    | (:Node {id: 3})    | 0.5                |
| (:Node {id: 1})    | (:Node {id: 4})    | 1                  |
| (:Node {id: 1})    | (:Node {id: 5})    | 0.666667           |
| (:Node {id: 1})    | (:Node {id: 1})    | 1                  |
+--------------------+--------------------+--------------------+

```

  </TabItem>

</Tabs>
