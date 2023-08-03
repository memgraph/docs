---
id: node2vec
title: node2vec
sidebar_label: node2vec
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

The **node2vec** is a semi-supervised algorithmic framework for learning
continuous feature representations for nodes in networks. The algorithm
generates a mapping of nodes to a low-dimensional space of features that
maximizes the likelihood of preserving network neighborhoods of nodes. By using
a biased random walk procedure, it enables exploring diverse neighborhoods. In
tasks such as multi-label classification and link prediction, node2vec shows
great results.

The **node2vec** algorithm was inspired by a similar **NLP** technique. The same
way as a document is an ordered sequence of words, by sampling sequences of
nodes from the underlying network and turning a network into an ordered sequence
of nodes. Although the idea of sampling is easy, choosing the actual strategy
can be challenging and dependant on the techniques that will be applied
afterward.

Capturing information in networks often shuttles between two kinds of
similarities: **homophily** and **structural equivalence**. Under the
**homophily** hypothesis, nodes that are highly interconnected and belong to
similar network clusters or communities should be embedded closely together. In
contrast, under the **structural equivalence** hypothesis, nodes that have
similar structural roles in networks should be embedded closely together (e.g.,
nodes that act as hubs of their corresponding communities).

The current implementation easily captures **homophily** or **structural
equivalence** by changing hyperparameters.

`BFS` and `DFS` strategies play a key role in producing representations that
reflect either of the above equivalences. The neighborhoods sampled by `BFS`
lead to embeddings that correspond closely to structural equivalence. The
opposite is true for `DFS`. It can explore larger parts of the network as it
can move further away from the source node. Therefore, `DFS` sampled walks
accurately reflect a macro-view of the neighborhood, which is essential in
inferring communities based on homophily.

By having different parameters:

- **return parameter `p`**
- and **in-out parameter`q`**

one decides whether to prioritize the `BFS` or `DFS` strategy when sampling. If
`p` is smaller than 1, then we create more `BFS` like walks and we capture more
**structural equivalence**. The opposite is true if `q` is smaller than 1. Then we
capture `DFS` like walks and **homophily**.

[^1] [Scalable Feature Learning for Networks](https://arxiv.org/abs/1607.00653),
A. Grover, J. Leskovec

[![docs-source](https://img.shields.io/badge/source-node2vec-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/node2vec.py)

| Trait               | Value                                                          |
| ------------------- | -------------------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>              |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>              |
| **Graph direction** | <Highlight color="#FB6E00">**directed/undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted/unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>          |

:::note Too slow?

If this algorithm implementation is too slow for your use case, [contact us](mailto:tech@memgraph.com) and request a rewrite to C++ !

:::

## Procedures

<RunOnSubgraph/>

### `get_embeddings( is_directed, p, q, num_walks, walk_length, vector_size, alpha, window, min_count, seed, workers, min_alpha, sg, hs, negative, epochs,)`

#### Input:

- `is_directed : boolean` ➡ If `True`, graph is treated as directed, else not
  directed
- `p : float` ➡ Return hyperparameter for calculating transition probabilities.
- `q : float` ➡ In-out hyperparameter for calculating transition probabilities.
- `num_walks : integer` ➡ Number of walks per node in walk sampling.
- `walk_length : integer` ➡ Length of one walk in walk sampling.
- `vector_size : integer` ➡ Dimensionality of the word vectors.
- `window : integer` ➡ Maximum distance between the current and predicted word
  within a sentence.
- `min_count : integer` ➡ Ignores all words with total frequency lower than this.
- `workers : integer` ➡ Use these many worker threads to train the model (=faster
  training with multicore machines).
- `sg : {0, 1}` ➡ Training algorithm: 1 for skip-gram; otherwise CBOW.
- `hs : {0, 1}` ➡ If 1, hierarchical softmax will be used for model training. If
  0, and `negative` is non-zero, negative sampling will be used.
- `negative : integer` ➡ If > 0, negative sampling will be used, the integer for
  negative specifies how many "noise words" should be drawn (usually
  between 5-20). If set to 0, no negative sampling is used.
- `cbow_mean : {0, 1}` ➡ If 0, use the sum of the context word vectors. If 1,
  use the mean, only applies when cbow is used.
- `alpha : float` ➡ The initial learning rate.
- `min_alpha : float` ➡ Learning rate will linearly drop to `min_alpha` as
  training progresses.
- `seed : integer` ➡ Seed for the random number generator. Initial vectors for each
  word are seeded with a hash of the concatenation of word + `str(seed)`.

#### Output:

- `nodes: mgp.List[mgp.Vertex]` ➡ List of nodes for which embeddings were
  calculated
- `embeddings: mgp.List[mgp.List[mgp.Number]])` ➡ Corresponding list of
  embeddings

#### Usage:

```cypher
CALL node2vec_online.get_embeddings(False, 2.0, 0.5, 4, 5, 100, 0.025, 5, 1, 1, 1, 0.0001, 1, 0, 5, 5);
```

### `set_embeddings( is_directed, p, q, num_walks, walk_length, vector_size, alpha, window, min_count, seed, workers, min_alpha, sg, hs, negative, epochs,)`

#### Input:

- `is_directed : boolean` ➡ If `True`, graph is treated as directed, else not
  directed
- `p : float` ➡ Return hyperparameter for calculating transition probabilities.
- `q : float` ➡ In-out hyperparameter for calculating transition probabilities.
- `num_walks : integer` ➡ Number of walks per node in walk sampling.
- `walk_length : integer` ➡ Length of one walk in walk sampling.
- `vector_size : integer` ➡ Dimensionality of the word vectors.
- `window : integer` ➡ Maximum distance between the current and predicted word
  within a sentence.
- `min_count : integer` ➡ Ignores all words with total frequency lower than this.
- `workers : integer` ➡ Use these many worker threads to train the model (=faster
  training with multicore machines).
- `sg : {0, 1}` ➡ Training algorithm: 1 for skip-gram; otherwise CBOW.
- `hs : {0, 1}` ➡ If 1, hierarchical softmax will be used for model training. If
  0, and `negative` is non-zero, negative sampling will be used.
- `negative : integer` ➡ If > 0, negative sampling will be used, the int for
  negative specifies how many "noise words" should be drawn (usually
  between 5-20). If set to 0, no negative sampling is used.
- `cbow_mean : {0, 1}` ➡ If 0, use the sum of the context word vectors. If 1,
  use the mean, only applies when cbow is used.
- `alpha : float` ➡ The initial learning rate.
- `min_alpha : float` ➡ Learning rate will linearly drop to `min_alpha` as
  training progresses.
- `seed : integer` ➡ Seed for the random number generator. Initial vectors for each
  word are seeded with a hash of the concatenation of word + `str(seed)`.

#### Output:

- `nodes: mgp.List[mgp.Vertex]` ➡ List of nodes for which embeddings were
  calculated
- `embeddings: mgp.List[mgp.List[mgp.Number]])` ➡ Corresponding list of
  embeddings

#### Usage:

```cypher
CALL node2vec_online.get_embeddings(False, 2.0, 0.5, 4, 5, 100, 0.025, 5, 1, 1, 1, 0.0001, 1, 0, 5, 5);
```

### `help()`

#### Output:

- `name: string` ➡ Name of available functions
- `value: string` ➡ Documentation for every function

#### Usage:

```cypher
CALL node2vec_online.help();
```

## Example

<Tabs
groupId="example"
defaultValue="visualization"
values={[
{label: 'Step 1: Input graph', value: 'visualization'},
{label: 'Step 2: Load commands', value: 'cypher-load'},
{label: 'Step 3: Set embeddings', value: 'set-embeddings'},
{label: 'Step 4: Running command', value: 'run'},
{label: 'Step 5: Results', value: 'result'},
]
}>
  <TabItem value="visualization">

<img src={require('../../data/query-modules/python/node2vec/node2vec.png').default}/>

  </TabItem>
  <TabItem value="cypher-load">

```cypher
MERGE (n:Node {id: 1}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 2}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 10}) MERGE (m:Node {id: 5}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 5}) MERGE (m:Node {id: 2}) CREATE (n)-[:RELATION]->(m);

MERGE (n:Node {id: 9}) MERGE (m:Node {id: 7}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 7}) MERGE (m:Node {id: 3}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 3}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);

MERGE (n:Node {id: 9}) MERGE (m:Node {id: 8}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 8}) MERGE (m:Node {id: 4}) CREATE (n)-[:RELATION]->(m);
MERGE (n:Node {id: 4}) MERGE (m:Node {id: 6}) CREATE (n)-[:RELATION]->(m);
```

  </TabItem>
  <TabItem value="set-embeddings">

```cypher
CALL node2vec.set_embeddings(False, 2.0, 0.5, 4, 5, 2) YIELD *;
```

  </TabItem>
  <TabItem value="run">

```cypher
MATCH (n)
RETURN n.id as node, n.embedding as embedding
ORDER BY n.id;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+-------------------------+-------------------------+
| node                    | embedding               |
+-------------------------+-------------------------+
| 1                       | [-0.243723, -0.0916009] |
| 2                       | [0.25442, 0.449585]     |
| 3                       | [0.322331, 0.448404]    |
| 4                       | [0.143389, 0.0492275]   |
| 5                       | [-0.465552, -0.35653]   |
| 6                       | [-0.0272922, 0.0111898] |
| 7                       | [0.368725, -0.0773199]  |
| 8                       | [-0.414683, -0.472285]  |
| 9                       | [-0.226683, 0.328159]   |
| 10                      | [-0.251244, -0.189218]  |
+-------------------------+-------------------------+
```

  </TabItem>
</Tabs>
