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

This is not a one module but series of modules built on top of the **cugraph**, provides a set of wrappers around most of the algorithms present in the [cuGraph](https://github.com/rapidsai/cugraph) repository. 



| Trait               | Value                                                                                                                |
| ------------------- |----------------------------------------------------------------------------------------------------------------------|
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>                                                                    |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>                                                                       |
| **Graph direction** | <Highlight color="#FB6E00">**undirected/directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted/weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>                                                                |

## Modules
###  `cugraph.pagerank`
#### Procedures
##### `get(weight, max_iterations, damping_factor, stop_epsilon)`

Get PageRank values for each node.

###### Input:

* `weight: str("weight")` ➡ Name of edge property which represents edge weight. Default `weight`. If there is not such property, `1.0` value is taken as default instead.
* `max_iterations: int(100)` ➡ The maximum number of iterations before returning an answer. Use it to limit the execution time or to do an early exit before the solver reaches the convergence tolerance. Default is `100`.
* `damping_factor: float(0.85)` ➡ The probability to follow an outgoing edge, default is `0.85`.
* `stop_epsilon: float(1e-5)` ➡ Set the tolerance for the approximation. This parameter should be of a small magnitude value. The lower the tolerance the better the approximation will be.

###### Output:

* `node: Vertex` ➡ `node` for which we return `Pagerank` value
* `rank: float` ➡ the `rank` value for given `node`

###### Usage:
```cypher
CALL cugraph.pagerank.get() YIELD node,rank
RETURN node,rank;
```



###  `cugraph.personalized_pagerank`
#### Procedures
##### `get(personalization_vertices, personalization_values, weight, max_iterations, damping_factor, stop_epsilon)`

Get Personalized PageRank values for each node.

###### Input:
* `weight: mgp.List[mgp.Vertex]` ➡ subset of vertices of graph for personalization
* `weight: mgp.List[float]` ➡  personalization values for vertices
* `weight: str("weight")` ➡ Name of edge property which represents edge weight. Default `weight`. If there is not such property, `1.0` value is taken as default instead.
* `max_iterations: int(100)` ➡ The maximum number of iterations before returning an answer. Use it to limit the execution time or to do an early exit before the solver reaches the convergence tolerance. Default is `100`.
* `damping_factor: float(0.85)` ➡ The probability to follow an outgoing edge, default is `0.85`.
* `stop_epsilon: float(1e-5)` ➡ Set the tolerance for the approximation. This parameter should be of a small magnitude value. The lower the tolerance the better the approximation will be.

###### Output:

* `node: Vertex` ➡ `node` for which we return `Pagerank` value
* `rank: float` ➡ the `rank` value for given `node`

###### Usage:
```cypher
MATCH (n:Node{id:1}), (m:Node{id:2})
CALL cugraph.pagerank.get([n,m], [0.2, 0.5]) YIELD node,rank
RETURN node,rank;
```




###  `cugraph.hits`
#### Procedures
##### `get()`

Compute HITS hubs and authorities values for each vertex The HITS algorithm computes two numbers for a node. 
Authorities estimate the node value based on the incoming links. Hubs estimate the node value based on outgoing links.

###### Input:

* `tolerance: mgp.List[mgp.Vertex]` ➡ the tolerance of the approximation, this parameter should be a small magnitude value
* `max_iterations: int(100)` ➡ The maximum number of iterations before returning an answer. Default is `100`.
* `normalize: bool(True)` ➡ Not currently supported by `cuGraph`, always used as `True`

###### Output:

* `node: Vertex` ➡ `node` for which we return `HITS` value
* `hubs: float` ➡ `hubs` value for given node
* `authorities: float` ➡ `authorities` value for given node

###### Usage:
```cypher
CALL cugraph.hits.get() YIELD node,hubs,authorities
RETURN node,hubs,authorities;
```


###  `cugraph.katz_centrality`
#### Procedures
##### `get()`

Compute the Katz centrality for the nodes of the graph.

###### Input:

* `alpha: float(1.0)` ➡ Attenuation factor defaulted to None. If alpha is not specified then it is internally calculated as 1/(degree_max) where degree_max is the maximum out degree. - double check
* `beta: float(1.0)` ➡ A weight scalar - currently Not Supported
* `epsilon: float(1e-6)` ➡ Set the tolerance the approximation, this parameter should be a small magnitude value.
* `normalized: bool(True)` ➡ If `True` normalize the resulting katz centrality values. Default `True`
* `max_iterations: int(100)` ➡ The maximum number of iterations before an answer is returned. Default `100`
* `directed: bool(True)` ➡ Whether graph is directed. Default `True` 

###### Output:

* `node: Vertex` ➡ `node` for which we return `Katz centrality` value
* `rank: float` ➡ `rank` value for given node

###### Usage:
```cypher
CALL cugraph.katz_centrality.get() YIELD node,rank
RETURN node,rank;
```


###  `cugraph.betweenness_centrality`
#### Procedures
##### `get()`

Compute the Betweenness Centrality for the nodes of the graph.

###### Input:

* `normalized: bool(True)` ➡ If `True` normalize the resulting Betweenness centrality values. Default `True`
* `directed: bool(True)` ➡ Whether graph is directed. Default `True` 

###### Output:

* `node: Vertex` ➡ `node` for which we return `Betweenness centrality` value
* `rank: float` ➡ `rank` value for given node

###### Usage:
```cypher
CALL cugraph.hits.get() YIELD node,hubs,authorities
RETURN node,hubs,authorities;
```


###  `cugraph.spectral_clustering`
#### Procedures
##### `get()`

Compute the Katz centrality for the nodes of the graph.

###### Input:

* `tolerance: mgp.List[mgp.Vertex]` ➡ the tolerance of the approximation, this parameter should be a small magnitude value
* `max_iterations: int(100)` ➡ The maximum number of iterations before returning an answer. Default is `100`.
* `normalize: bool(True)` ➡ Not currently supported by `cuGraph`, always used as `True`

###### Output:

* `node: Vertex` ➡ `node` for which we return `HITS` value
* `hubs: float` ➡ `hubs` value for given node
* `authorities: float` ➡ `authorities` value for given node

###### Usage:
```cypher
CALL cugraph.hits.get() YIELD node,hubs,authorities
RETURN node,hubs,authorities;
```


###  `cugraph.balanced_cut_clustering`
#### Procedures
##### `get()`

Compute the Katz centrality for the nodes of the graph.

###### Input:

* `tolerance: mgp.List[mgp.Vertex]` ➡ the tolerance of the approximation, this parameter should be a small magnitude value
* `max_iterations: int(100)` ➡ The maximum number of iterations before returning an answer. Default is `100`.
* `normalize: bool(True)` ➡ Not currently supported by `cuGraph`, always used as `True`

###### Output:

* `node: Vertex` ➡ `node` for which we return `HITS` value
* `hubs: float` ➡ `hubs` value for given node
* `authorities: float` ➡ `authorities` value for given node

###### Usage:
```cypher
CALL cugraph.hits.get() YIELD node,hubs,authorities
RETURN node,hubs,authorities;
```


###  `cugraph.louvain`
#### Procedures
##### `get()`

Compute the Katz centrality for the nodes of the graph.

###### Input:

* `tolerance: mgp.List[mgp.Vertex]` ➡ the tolerance of the approximation, this parameter should be a small magnitude value
* `max_iterations: int(100)` ➡ The maximum number of iterations before returning an answer. Default is `100`.
* `normalize: bool(True)` ➡ Not currently supported by `cuGraph`, always used as `True`

###### Output:

* `node: Vertex` ➡ `node` for which we return `HITS` value
* `hubs: float` ➡ `hubs` value for given node
* `authorities: float` ➡ `authorities` value for given node

###### Usage:
```cypher
CALL cugraph.hits.get() YIELD node,hubs,authorities
RETURN node,hubs,authorities;
```


###  `cugraph.leiden`
#### Procedures
##### `get()`

Compute the Katz centrality for the nodes of the graph.

###### Input:

* `tolerance: mgp.List[mgp.Vertex]` ➡ the tolerance of the approximation, this parameter should be a small magnitude value
* `max_iterations: int(100)` ➡ The maximum number of iterations before returning an answer. Default is `100`.
* `normalize: bool(True)` ➡ Not currently supported by `cuGraph`, always used as `True`

###### Output:

* `node: Vertex` ➡ `node` for which we return `HITS` value
* `hubs: float` ➡ `hubs` value for given node
* `authorities: float` ➡ `authorities` value for given node

###### Usage:
```cypher
CALL cugraph.hits.get() YIELD node,hubs,authorities
RETURN node,hubs,authorities;
```
