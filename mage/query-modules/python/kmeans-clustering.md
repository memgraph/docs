---
id: kmeans-clustering
title: kmeans_clustering
sidebar_label: kmeans_clustering
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

[![docs-source](https://img.shields.io/badge/source-node2vec-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/kmeans.py)

## Abstract

The KMeans algorithm clusters given data by trying to separate samples in `n` groups of equal variance, by minimizing a criterion known as 
within-the-cluster sum-of-squares. To understand more about it, jump to [algorithm](../../algorithms/machine-learning-graph-analytics/kmeans-clustering-algorithm) page.

| Trait               | Value                                                          |
| ------------------- | -------------------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>              |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>              |
| **Graph direction** | <Highlight color="#FB6E00">**directed/undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted/unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>          |

## Procedures

### `get_clusters( n_clusters, embedding_property, init, n_init, max_iter, tol, algorithm, random_state)`
This procedure returns for each node to which cluster it belongs to.

#### Input:

- `n_clusters : int` ➡ The number of clusters to form.
- `embedding_property : str` ➡ From which property of node will embeddings be read.
- `init : str` ➡ Method for initialization. If `k-means++` is selected, then initial cluster centroids  are selected using sampling based on an empirical probability distribution of the points’ contribution to the overall inertia. This technique speeds up convergence, and is theoretically proven to be `O(logk)`-optimal. 
If `random` then choose `n_clusters` observations (rows) at random from data for the initial centroids.
- `n_init : int` ➡ Number of time the k-means algorithm will be run with different centroid seeds
- `max_iter : int` ➡ Length of one walk in walk sampling.
- `tol : float` ➡ Relative tolerance with regards to Frobenius norm of the difference in the cluster centers of two consecutive iterations to declare convergence.
- `algorithm : str` ➡ Options are `lloyd`, `elkan`, `auto`, `full`
- `random_state : int` ➡ Use an int to make the randomness deterministic

#### Output:

- `node: mgp.Vertex` ➡ Vertex for which we got cluster_id
- `cluster_id: mgp.Number` ➡ Corresponding cluster id of vertex

#### Usage:

```cypher
 CALL kmeans.get_clusters(2, "embedding", "k-means++", 10, 10, 0.0001, "auto", 1) YIELD node, cluster_id
 RETURN node.id as node_id, cluster_id
   ORDER BY node_id ASC;
```

### `set_clusters( n_clusters, embedding_property, cluster_property, init, n_init, max_iter, tol, algorithm, random_state)`
Procedure sets for each node to which cluster it belongs to by writing cluster id  to `cluster_property`.

#### Input:

- `n_clusters : int` ➡ The number of clusters to form.
- `embedding_property : str` ➡ From which property of node will embeddings be read.
- `cluster_property: str` ➡ Property to which cluster_id will be saved.
- `init : str` ➡ Method for initialization. If `k-means++` is selected, then initial cluster centroids  are selected using sampling based on an empirical probability distribution of the points’ contribution to the overall inertia. This technique speeds up convergence, and is theoretically proven to be `O(logk)`-optimal. 
If `random` then choose `n_clusters` observations (rows) at random from data for the initial centroids.
- `n_init : int` ➡ Number of time the k-means algorithm will be run with different centroid seeds
- `max_iter : int` ➡ Length of one walk in walk sampling.
- `tol : float` ➡ Relative tolerance with regards to Frobenius norm of the difference in the cluster centers of two consecutive iterations to declare convergence.
- `algorithm : str` ➡ Options are `lloyd`, `elkan`, `auto`, `full`
- `random_state : int` ➡ Use an int to make the randomness deterministic

#### Output:

- `node: mgp.Vertex` ➡ Vertex for which we got cluster_id
- `cluster_id: mgp.Number` ➡ Corresponding cluster id of vertex

#### Usage:

```cypher
 CALL kmeans.set_clusters(2, "embedding", "cluster_id", "k-means++", 10, 10, 0.0001, "auto", 1) YIELD node, cluster_id
 RETURN node.id as node_id, cluster_id
   ORDER BY node_id ASC;
```

## Example

<Tabs
groupId="example"
defaultValue="visualization"
values={[
{label: 'Step 1: Input graph', value: 'visualization'},
{label: 'Step 2: Load commands', value: 'cypher-load'},
{label: 'Step 3: Get clusters', value: 'get-clusters'},
{label: 'Step 4: Results', value: 'result'},
]
}>
  <TabItem value="visualization">

<img src={require('../../data/query-modules/python/kmeans-clustering/img.png').default}/>

  </TabItem>
  <TabItem value="cypher-load">

```cypher
CREATE (:Node {id:0, embedding: [0.90678340196609497, 0.74690568447113037, -0.65984714031219482]});
CREATE (:Node {id:1, embedding: [1.2019195556640625, 0.42643040418624878, -0.4709840714931488]});
CREATE (:Node {id:2, embedding: [1.1005796194076538, 0.67131000757217407, -0.5418705940246582]});
CREATE (:Node {id:4, embedding: [1.1840434074401855, 0.39269298315048218, -0.5063326358795166]});
CREATE (:Node {id:5, embedding: [0.83302301168441772, 0.5545622706413269, -0.31265774369239807]});
CREATE (:Node {id:6, embedding: [0.78877884149551392, 0.5189281702041626, -0.097793936729431152]});
CREATE (:Node {id:7, embedding: [0.61398810148239136, 0.5255049467086792, -0.3551192581653595]});
CREATE (:Node {id:8, embedding: [0.83923488855361938, -0.0041203685104846954, -0.51874136924743652]});
CREATE (:Node {id:9, embedding: [0.60883384943008423, 0.60958302021026611, -0.40317356586456299]});
MATCH (a:Node {id: 0}) MATCH (b:Node {id: 1}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 1}) MATCH (b:Node {id: 2}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 2}) MATCH (b:Node {id: 0}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 0}) MATCH (b:Node {id: 4}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 4}) MATCH (b:Node {id: 1}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 4}) MATCH (b:Node {id: 2}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 0}) MATCH (b:Node {id: 5}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 5}) MATCH (b:Node {id: 6}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 6}) MATCH (b:Node {id: 7}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 7}) MATCH (b:Node {id: 8}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 8}) MATCH (b:Node {id: 6}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 6}) MATCH (b:Node {id: 9}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 9}) MATCH (b:Node {id: 7}) MERGE (a)-[:RELATION]->(b);
MATCH (a:Node {id: 9}) MATCH (b:Node {id: 8}) MERGE (a)-[:RELATION]->(b);
```

  </TabItem>
  <TabItem value="get-clusters">

```cypher
CALL kmeans.get_clusters(2, "embedding", "k-means++", 10, 10, 0.0001, "auto", 1) YIELD node, cluster_id
  RETURN node.id as node_id, cluster_id
  ORDER BY node_id ASC;
```

  </TabItem>
  
  <TabItem value="result">

```plaintext
+-------------------------+-------------------------+
| node_id                 | cluster_id              |
+-------------------------+-------------------------+
| 0                       | 1                       |
| 1                       | 1                       |
| 2                       | 1                       |
| 4                       | 1                       |
| 5                       | 0                       |
| 6                       | 0                       |
| 7                       | 0                       |
| 8                       | 0                       |
| 9                       | 0                       |
+-------------------------+-------------------------+
```

  </TabItem>
</Tabs>
