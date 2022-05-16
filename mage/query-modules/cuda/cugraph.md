---
id: cugraph
title: cugraph
sidebar_label: cugraph
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

[![docs-source](https://img.shields.io/badge/source-nxalg-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/nxalg.py)

## Abstract

This set of modules is built on top of NVIDIA cuGraph and provides a set of wrappers for most of the algorithms
present in the [cuGraph](https://github.com/rapidsai/cugraph) repository.

| Trait               | Value                                                                                                 |
|---------------------|-------------------------------------------------------------------------------------------------------|
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>                                                     |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>                                                        |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight>/<Highlight color="#FB6E00">**both**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight>/<Highlight color="#FB6E00">**both**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>                                                 |

## Modules

### `cugraph.generator`

#### Procedures

##### `rmat(scale, num_edges, a, b, c, seed, clip_and_flip)`
Generate a graph using a Recursive MATrix (R-MAT) graph generation algorithm and load it in Memgraph.

##### Input:
* `scale: int(4)` ➡ scale factor to set the number of vertices in the graph
* `num_edges: int(100)` ➡ number of edges in the generated graph
* `a: double(0.57)` ➡ first partition probability
* `b: double(0.19)` ➡ second partition probability
* `c: double(0.19)` ➡ third partition probability
* `seed: int(0)` ➡  RNG (random number generator) seed value
* `clip_and_flip: bool(False)` ➡ controls whether to generate edges only in the lower triangular part 
                                 (including the diagonal) of the graph adjacency matrix (if set to `True`) 
                                 or not (if set to `False`)

##### Output:
N/A (the generated graph is loaded in Memgraph)

##### Usage:
```cypher
CALL cugraph.generator.rmat();
```


###  `cugraph.pagerank`

#### Procedures

##### `get(weight, max_iterations, damping_factor, stop_epsilon)`
Find PageRank scores for all nodes in the graph.

###### Input:
* `weight: str("weight")` ➡  The values of the given relationship property are used as weights by the algorithm.
                             If this property is not set for a relationship, the fallback value is `1.0`.
* `max_iterations: int(100)` ➡ The maximum number of iterations before returning an answer (default `100`). Use it to 
                               limit the execution time or do an early exit before the solver reaches the convergence 
                               tolerance.
* `damping_factor: float(0.85)` ➡ The damping factor represents the probability to follow an outgoing edge (default `0.85`).
* `stop_epsilon: float(1e-5)` ➡ The convergence tolerance for PageRank approximation. Lowering tolerance improves the
                                approximation, but setting this parameter too low can ensue in non-convergence due 
                                to numerical round-off. Values between `0.01` and `0.00001` are usually acceptable.

###### Output:
* `node: Vertex` ➡ graph node
* `pagerank: float` ➡ above node's PageRank score

###### Usage:
```cypher
CALL cugraph.pagerank.get() 
YIELD node, pagerank
RETURN node, pagerank;
```


###  `cugraph.personalized_pagerank`

#### Procedures

##### `get(personalization_vertices, personalization_values, weight, max_iterations, damping_factor, stop_epsilon)`
Find personalized PageRank scores for all nodes in the graph.

###### Input:
* `personalization_vertices: mgp.List[mgp.Vertex]` ➡ graph nodes with personalization values
* `personalization_values: mgp.List[float]` ➡  the nodes' personalization values
* `weight: str("weight")` ➡ The values of the given relationship property are used as weights by the algorithm.
                            If this property is not set for a relationship, the fallback value is `1.0`.
* `max_iterations: int(100)` ➡ The maximum number of iterations before returning an answer (default `100`). Use it to 
                               limit the execution time or do an early exit before the solver reaches the convergence 
                               tolerance.
* `damping_factor: float(0.85)` ➡ The damping factor represents the probability to follow an outgoing edge (default `0.85`).
* `stop_epsilon: float(1e-5)` ➡  The convergence tolerance for PageRank approximation. Lowering tolerance improves the
                                 approximation, but setting this parameter too low can ensue in non-convergence due 
                                 to numerical round-off. Values between `0.01` and `0.00001` are usually acceptable.

###### Output:
* `node: Vertex` ➡ graph node
* `pagerank: float` ➡ above node's PageRank score

###### Usage:
```cypher
MATCH (n: Node {id: 1}), (m: Node {id: 2})
CALL cugraph.pagerank.get([n, m], [0.2, 0.5])
YIELD node, pagerank
RETURN node, pagerank;
```


###  `cugraph.hits`

#### Procedures

##### `get(tolerance, max_iterations, normalized)`
Find HITS authority and hub values for all nodes in the graph.
The HITS algorithm computes two numbers for each node: its *authority*, which estimates the value of its content, and 
its *hub value*, which estimates the value of its links to other nodes.

Whereas the HITS algorithm was designed for directed graphs, this implementation does not check if the input graph is 
directed and will execute on undirected graphs.

###### Input:
* `tolerance: float(1e-5)` ➡ HITS approximation tolerance (custom values not supported by NVIDIA cuGraph)
* `max_iterations: int(100)` ➡  maximum number of iterations before returning an answer 
                                (custom values not supported by NVIDIA cuGraph)
* `normalized: bool(True)` ➡ normalize the output (`False` not supported by NVIDIA cuGraph)

###### Output:
* `node: Vertex` ➡ graph node
* `hubs: float` ➡ above node's hub value
* `authorities: float` ➡ above node's authority value

###### Usage:
```cypher
CALL cugraph.hits.get()
YIELD node, hubs, authorities
RETURN node, hubs, authorities;
```


###  `cugraph.katz_centrality`

#### Procedures

##### `get(alpha, beta, epsilon, normalized, max_iterations, directed)`
Find Katz centrality scores for all nodes in the graph.

###### Input:
* `alpha: float(None)` ➡ attenuation factor defining the walk length importance (If not specified, calculated as 
                         1 / max(out_degree).)
* `beta: float(1.0)` ➡ weight scalar (currently not supported by NVIDIA cuGraph)
* `epsilon: float(1e-6)` ➡ Set the tolerance the approximation, this parameter should be a small magnitude value.
* `normalized: bool(True)` ➡ normalize the output
* `max_iterations: int(100)` ➡ maximum number of iterations before returning an answer
* `directed: bool(True)` ➡ graph directedness (default `True`) 

###### Output:
* `node: Vertex` ➡ graph node
* `katz_centrality: float` ➡ above node's Katz centrality score

###### Usage:
```cypher
CALL cugraph.katz_centrality.get()
YIELD node, katz_centrality
RETURN node, katz_centrality;
```


###  `cugraph.betweenness_centrality`

#### Procedures

##### `get(normalized, directed)`
Find betweenness centrality scores for all nodes in the graph.

###### Input:
* `normalized: bool(True)` ➡ normalize the output
* `directed: bool(True)` ➡ graph directedness (default `True`)

###### Output:
* `node: Vertex` ➡ graph node
* `betweenness_centrality: float` ➡ above node's betweenness centrality score

###### Usage:
```cypher
CALL cugraph.betweenness_centrality.get()
YIELD node, betweenness_centrality
RETURN node, betweenness_centrality;
```


###  `cugraph.spectral_clustering`

#### Procedures

##### `get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight)`
Find the spectral clustering of the graph's nodes.

###### Input:
* `num_clusters: int` ➡ number of clusters
* `num_eigenvectors: int(2)` ➡ number of eigenvectors to be used (must be less than or equal to `num_clusters`)
* `ev_tolerance: float(0.00001)` ➡ tolerance used by the eigensolver
* `ev_max_iter: int(100)` ➡ maximum number of iterations for the eigensolver
* `kmean_tolerance: float(0.00001)` ➡ tolerance used by the k-means solver
* `kmean_max_iter: int(100)` ➡ maximum number of iterations for the k-means solver
* `weight: str("weight")` ➡ The values of the given relationship property are used as weights by the algorithm.
                            If this property is not set for a relationship, the fallback value is `1.0`.

###### Output:
* `node: Vertex` ➡ graph node
* `cluster: int` ➡ above node's cluster

###### Usage:
```cypher
CALL cugraph.spectral_clustering.get(3)
YIELD node, cluster
RETURN node, cluster;
```


###  `cugraph.balanced_cut_clustering`

#### Procedures

##### `get(num_clusters, num_eigenvectors, ev_tolerance, ev_max_iter, kmean_tolerance, kmean_max_iter, weight)`
Find the balanced cut clustering of the graph's nodes.

###### Input:
* `num_clusters: int` ➡ number of clusters
* `num_eigenvectors: int(2)` ➡ number of eigenvectors to be used (must be less than or equal to `num_clusters`)
* `ev_tolerance: float(0.00001)` ➡ tolerance used by the eigensolver
* `ev_max_iter: int(100)` ➡ maximum number of iterations for the eigensolver
* `kmean_tolerance: float(0.00001)` ➡ tolerance used by the k-means solver
* `kmean_max_iter: int(100)` ➡ maximum number of iterations for the k-means solver
* `weight: str("weight")` ➡ The values of the given relationship property are used as weights by the algorithm.
                            If this property is not set for a relationship, the fallback value is `1.0`.

###### Output:
* `node: Vertex` ➡ graph node
* `cluster: int` ➡ above node's cluster

###### Usage:
```cypher
CALL cugraph.balanced_cut_clustering.get(3)
YIELD node, cluster
RETURN node, cluster;
```


###  `cugraph.louvain`

#### Procedures

##### `get(max_level, resolution, directed)`
Find the partition of the graph into communities using the Louvain method.

###### Input:
* `max_level: int(100)` ➡ maximum number of iterations (levels) of the algorithm
* `resolution: float(1.0)` ➡ controls community size (lower values lead to fewer, larger communities and vice versa)
* `directed: bool(True)` ➡ graph directedness (default `True`)

###### Output:
* `node: Vertex` ➡ graph node
* `partition: int` ➡ above node's partition

###### Usage:
```cypher
CALL cugraph.louvain.get()
YIELD node, partition
RETURN node, partition;
```


###  `cugraph.leiden`

#### Procedures

##### `get(max_level, resolution)`
Find the partition of the graph into communities using the Leiden method.

###### Input:
* `max_level: int(100)` ➡ maximum number of iterations (levels) of the algorithm
* `resolution: float(1.0)` ➡ controls community size (lower values lead to fewer, larger communities and vice versa)

###### Output:
* `node: Vertex` ➡ graph node
* `partition: int` ➡ above node's partition

###### Usage:
```cypher
CALL cugraph.leiden.get()
YIELD node, partition
RETURN node, partition;
```
