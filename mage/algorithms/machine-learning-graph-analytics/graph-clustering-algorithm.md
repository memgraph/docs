---
id: graph-clustering-algorithm
title: Graph Clustering
sidebar_label: Graph Clustering
---

## Description

Graph clustering also known as network partitioning can be of two types: 
* structure based
* attribute based clustering

The structure based can be further divided into two categories, namely community based, and structurally equivalent clustering. 

Community-based methods aim to find dense subgraphs with high number of intra-cluster edges, and low number of inter-cluster edges. Examples are following algorithms:
* [A min-max cut algorithm for graph partitioning and data clustering](https://ieeexplore.ieee.org/document/989507)
* [Finding and evaluating community structure in networks](https://arxiv.org/abs/cond-mat/0308217)

Structural equivalence clustering on the contrary, is designed to identify nodes with similar roles (like bridges and outliers). Example is [SCAN: A Structural Clustering Algorithm for Networks](http://web.cs.ucla.edu/~yzsun/classes/2014Spring_CS7280/Papers/Clustering/SCAN.pdf)

One example that can vary between community based and structurally equivalent clustering is [Node2Vec](https://arxiv.org/abs/1607.00653).

Attribute based methods utilize node labels, in addition to observed links, to cluster nodes like following algorithm: [Graph clustering based on structural/attribute similarities](https://dl.acm.org/doi/10.14778/1687627.1687709)

## Materials

### Implementation

[![Node2Vec](https://img.shields.io/badge/Node2Vec-Implementation-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/node2vec.py)

[![Node2Vec](https://img.shields.io/badge/Node2Vec-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/node2vec)

**Node2Vec** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:


Also, finding communities in dynamic graphs is possible with **Dynamic Node2Vec**.

[![Node2Vec Online](https://img.shields.io/badge/Node2Vec_Online-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/python/node2vec_online.py)

[![Node2Vec Online](https://img.shields.io/badge/Node2Vec_Online-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/node2vec-online)
**Dynamic Node2Vec** is implemented within the project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:





## Use cases
[TODO]
