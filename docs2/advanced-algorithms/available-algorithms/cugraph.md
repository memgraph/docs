---
id: cugraph
title: cugraph
sidebar_label: cugraph
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

**NVIDIA cuGraph** is a graph analytics library that is part of NVIDIA’s
[**RAPIDS**](https://rapids.ai/) open-source data science suite containing
machine learning tools and libraries for various applications in data science;
it can be used from Memgraph on machines that meet the [**system
requirements**](https://rapids.ai/start.html#requirements).

This set of modules is built on top of NVIDIA cuGraph and provides a set of
wrappers for most of the algorithms present in the
[**cuGraph**](https://github.com/rapidsai/cugraph) repository.

[![docs-source](https://img.shields.io/badge/source-cugraph-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/cpp/cugraph_module)

| Trait               | Value                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>                                                         |
| **Implementation**  | <Highlight color="#FB6E00">**CUDA**</Highlight>                                                           |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight>/<Highlight color="#FB6E00">**directed**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight>/<Highlight color="#FB6E00">**weighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**parallelized**</Highlight>                                                   |

## Modules

:::info

The **cugraph** module is a collection of distinct GPU-powered modules with
their own procedures.

:::

## `cugraph.balanced_cut_clustering`

### Procedures

<RunOnSubgraph/>

### `get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)`

Find the balanced cut clustering of the graph’s nodes.

#### Input:

- `num_clusters: integer` ➡ Number of clusters.
- `num_eigenvectors: integer (default=2)` ➡ Number of eigenvectors to be used (must be less
  than or equal to `num_clusters`).
- `ev_tolerance: float (default=0.00001)` ➡ Tolerance used by the eigensolver.
- `ev_max_iter: integer (default=100)` ➡ Maximum number of iterations for the eigensolver.
- `kmean_tolerance: float (default=0.00001)` ➡ Tolerance used by the k-means solver.
- `kmean_max_iter: integer (default=100)` ➡ Maximum number of iterations for the k-means
  solver.
- `weight_property: string (default="weight")` ➡ The values of the given relationship.
  property are used as weights by the algorithm. If this property is not set for
  a relationship, the fallback value is `1.0`.

#### Output:

- `node: Vertex` ➡ Graph node.
- `cluster: integer` ➡ Cluster of a node.

#### Usage:

```cypher
CALL cugraph.balanced_cut_clustering.get(3)
YIELD node, cluster
RETURN node, cluster;
```

## `cugraph.betweenness_centrality`

### Procedures

### `get(normalized, directed, weight_property)`

Find betweenness centrality scores for all nodes in the graph.

#### Input:

- `normalized: boolean (default=True)` ➡ Normalize the output.
- `directed: boolean (default=True)` ➡ Graph directedness. (default `True`)
- `weight_property: string (default="weight")` ➡ The values of the given relationship
  property are used as weights by the algorithm. If this property is not set for
  a relationship, the fallback value is `1.0`.

#### Output:

- `node: Vertex` ➡ Graph node.
- `betweenness_centrality: float` ➡ Betweenness centrality score of a node.

#### Usage:

```cypher
CALL cugraph.betweenness_centrality.get()
YIELD node, betweenness_centrality
RETURN node, betweenness_centrality;
```

## `cugraph.generator`

### Procedures

### `rmat(scale, num_edges, node_labels, edge_type, a, b, c, seed, clip_and_flip)`

Generate a graph using a Recursive MATrix (R-MAT) graph generation algorithm and
load it in Memgraph.

#### Input:

- `scale: integer (default=4)` ➡ Scale factor to set the number of vertices in the graph.
- `num_edges: integer (default=100)` ➡ Number of edges in the generated graph.
- `node_labels: mgp.List[string] ([])` ➡ Labels on created vertices. Defaults to
  empty list.
- `edge_type: string (default="RELATIONSHIP")` ➡ Edge type, defines the name of the
  relationship.
- `a: double (default=0.57)` ➡ First partition probability.
- `b: double (default=0.19)` ➡ Second partition probability.
- `c: double (default=0.19)` ➡ Third partition probability.
- `seed: integer (default=0)` ➡ RNG (random number generator) seed value
- `clip_and_flip: boolean (default=False)` ➡ Controls whether to generate edges only in the
  lower triangular part (including the diagonal) of the graph adjacency matrix
  (if set to `True`) or not (if set to `False`).

#### Output:

The generated graph is loaded into Memgraph.

- `message: string` ➡ Success message if the graph is loaded.

#### Usage:

```cypher
CALL cugraph.generator.rmat() YIELD *;
```

## `cugraph.hits`

### Procedures

### `get(tolerance, max_iterations, normalized, directed)`

Find HITS authority and hub values for all nodes in the graph. The HITS
algorithm computes two numbers for each node: its _authority_, which estimates
the value of its content, and its _hub value_, which estimates the value of its
links to other nodes.

Whereas the HITS algorithm was designed for directed graphs, this implementation
does not check if the input graph is directed and will execute on undirected
graphs.

#### Input:

- `tolerance: float (default=1e-5)` ➡ HITS approximation tolerance (custom values not
  supported by NVIDIA cuGraph).
- `max_iterations: integer (default=100)` ➡ Maximum number of iterations before returning an
  answer (custom values not supported by NVIDIA cuGraph).
- `normalized: boolean (default=True)` ➡ Normalize the output (`False` not supported by
  NVIDIA cuGraph).
- `directed: boolean (default=True)` ➡ Graph directedness. (default `True`)

#### Output:

- `node: Vertex` ➡ Graph node.
- `hubs: float` ➡ Hub value of a node.
- `authorities: float` ➡ Authority value of a node.

#### Usage:

```cypher
CALL cugraph.hits.get()
YIELD node, hubs, authorities
RETURN node, hubs, authorities;
```

## `cugraph.katz_centrality`

### Procedures

### `get(alpha, beta, epsilon, max_iterations, normalized, directed)`

Find Katz centrality scores for all nodes in the graph.

#### Input:

- `alpha: float (default=None)` ➡ Attenuation factor defining the walk length importance.
  If not specified, calculated as `1 / max(out_degree)`.
- `beta: float (default=1.0)` ➡ Weight scalar (currently not supported by NVIDIA
  cuGraph).
- `epsilon: float (default=1e-6)` ➡ Set the tolerance for the approximation, this
  parameter should be a small magnitude value.
- `max_iterations: integer (default=100)` ➡ Maximum number of iterations before returning an
  answer.
- `normalized: boolean (default=True)` ➡ Normalize the output.
- `directed: boolean (default=True)` ➡ Graph directedness. (default `True`)

#### Output:

- `node: Vertex` ➡ Graph node.
- `katz_centrality: float` ➡ Katz centrality score of a node.

#### Usage:

```cypher
CALL cugraph.katz_centrality.get()
YIELD node, katz_centrality
RETURN node, katz_centrality;
```

## `cugraph.leiden`

### Procedures

### `get(max_iterations, resolution)`

Find the partition of the graph into communities using the Leiden method.

#### Input:

- `max_iterations: integer (default=100)` ➡ Maximum number of iterations (levels) of the
  algorithm. 
- `resolution: float (default=1.0)` ➡ Controls community size (lower values lead to
  fewer, larger communities and vice versa). 

#### Output:

- `node: Vertex` ➡ Graph node.
- `partition: integer` ➡ Partition of a node.

#### Usage:

```cypher
CALL cugraph.leiden.get()
YIELD node, partition
RETURN node, partition;
```

## `cugraph.louvain`

### Procedures

### `get(max_iterations, resolution, directed)`

Find the partition of the graph into communities using the Louvain method.

#### Input:

- `max_iterations: integer (default=100)` ➡ Maximum number of iterations (levels) of the
  algorithm.
- `resolution: float (default=1.0)` ➡ Controls community size (lower values lead to
  fewer, larger communities and vice versa).
- `directed: boolean (default=True)` ➡ Graph directedness. (default `True`)

#### Output:

- `node: Vertex` ➡ Graph node.
- `partition: integer` ➡ Partition of a node.

#### Usage:

```cypher
CALL cugraph.louvain.get()
YIELD node, partition
RETURN node, partition;
```

## `cugraph.pagerank`

### Procedures

### `get(max_iterations, damping_factor, stop_epsilon, weight_property)`

Find PageRank scores for all nodes in the graph.

#### Input:

- `max_iterations: integer (default=100)` ➡ The maximum number of iterations before returning
  an answer (default `100`). Use it to limit the execution time or do an early
  exit before the solver reaches the convergence tolerance.
- `damping_factor: float (default=0.85)` ➡ The damping factor represents the probability
  to follow an outgoing edge.
- `stop_epsilon: float (default=1e-5)` ➡ The convergence tolerance for PageRank
  approximation. Lowering tolerance improves the approximation, but setting this
  parameter too low can ensue in non-convergence due to numerical round-off.
  Values between `0.01` and `0.00001` are usually acceptable.
- `weight_property: string (default="weight")` ➡ The values of the given relationship
  property are used as weights by the algorithm. If this property is not set for
  a relationship, the fallback value is `1.0`.

#### Output:

- `node: Vertex` ➡ Graph node.
- `pagerank: float` ➡ PageRank score of a node.

#### Usage:

```cypher
CALL cugraph.pagerank.get()
YIELD node, pagerank
RETURN node, pagerank;
```

## `cugraph.personalized_pagerank`

### Procedures

### `get(personalization_vertices, personalization_values, max_iterations, damping_factor, stop_epsilon, weight_property)`

Find personalized PageRank scores for all nodes in the graph.

#### Input:

- `personalization_vertices: mgp.List[mgp.Vertex]` ➡ Graph nodes with
  personalization values.
- `personalization_values: mgp.List[float]` ➡ Above nodes’ personalization
  values.
- `weight_property: string (default="weight")` ➡ The values of the given relationship.
  property are used as weights by the algorithm. If this property is not set for
  a relationship, the fallback value is `1.0`.
- `damping_factor: float (default=0.85)` ➡ The damping factor represents the probability
  to follow an outgoing edge.
- `stop_epsilon: float (default=1e-5)` ➡ The convergence tolerance for PageRank
  approximation. Lowering tolerance improves the approximation, but setting this
  parameter too low can ensue in non-convergence due to numerical round-off.
  Values between `0.01` and `0.00001` are usually acceptable.
- `max_iterations: integer (default=100)` ➡ The maximum number of iterations before returning
  an answer (default `100`). Use it to limit the execution time or do an early
  exit before the solver reaches the convergence tolerance.

#### Output:

- `node: Vertex` ➡ Graph node.
- `pagerank: float` ➡ PageRank score of a node.

#### Usage:

```cypher
MATCH (n: Node {id: 1}), (m: Node {id: 2})
CALL cugraph.pagerank.get([n, m], [0.2, 0.5])
YIELD node, pagerank
RETURN node, pagerank;
```

## `cugraph.spectral_clustering`

### Procedures

### `get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight_property)`

Find the spectral clustering of the graph’s nodes.

#### Input:

- `num_clusters: integer` ➡ Number of clusters.
- `num_eigenvectors: integer (default=2)` ➡ Number of eigenvectors to be used (must be less
  than or equal to `num_clusters`).
- `ev_tolerance: float (default=0.00001)` ➡ Tolerance used by the eigensolver.
- `ev_max_iter: integer (default=100)` ➡ Maximum number of iterations for the eigensolver.
- `kmean_tolerance: float (default=0.00001)` ➡ Tolerance used by the k-means solver.
- `kmean_max_iter: integer (default=100)` ➡ Maximum number of iterations for the k-means
  solver.
- `weight_property: string (default="weight")` ➡ The values of the given relationship
  property are used as weights by the algorithm. If this property is not set for
  a relationship, the fallback value is `1.0`.

#### Output:

- `node: Vertex` ➡ Graph node.
- `cluster: integer` ➡ Cluster of a node.

#### Usage:

```cypher
CALL cugraph.spectral_clustering.get(3)
YIELD node, cluster
RETURN node, cluster;
```
