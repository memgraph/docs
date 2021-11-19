---
id: node2vec-online-algorithm
title: Dynamic node2vec
sidebar_label: Dynamic node2vec
---

## Description
**Dynamic node2vec** is **random walk based** method which creates embeddings for every new node added to the graph. 
For every new edge, there is a recalculation of probabilities (weights) which are used in walk sampling. 
A goal of the method is to enforce that the embedding of node `v` is similar to the embedding of nodes with the ability to reach node `v` across edges appeared one before other.

![](../../data/algorithms/dynamic-graph-analytics/dynamic_node2vec.png)
<center>Photo by author on <a href="https://appliednetsci.springeropen.com/articles/10.1007/s41109-019-0169-5"> Node embeddings in dynamic graphs</a></center>

### Why Dynamic node2vec
Many methods, like **node2vec**, **deepwalk**, focus on computing the embedding for static graphs which is great but also has a big drawback. 
Networks in **practical applications** are **dynamic** and evolve constantly over time. 
For example, new links are formed (when people make new friends on social networks) and old links can disappear. 
Moreover, new nodes can be introduced into the graph (e.g., users can join the social network) and create new links to existing nodes.

**Naively applying one of the static** embedding algorithms leads to unsatisfactory performance due to the following challenges:
* **Stability**: the embedding of graphs at consecutive time steps can differ substantially even though the graphs do not change much.
* **Growing Graphs**: All existing approaches assume a fixed number of nodes in learning graph embeddings and thus cannot handle growing graphs.
* **Scalability**: Learning embeddings independently for each snapshot leads to running time linear in the number of snapshots. As learning a single embedding is computationally expensive, the naive approach does not scale to dynamic networks with many snapshots

## Implementation
[![Dynamic node2vec](https://img.shields.io/badge/Dynamic_node2vec-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/node2vec-online)

Dynamic node2vec is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:


## Blog posts

Also, for broader understanding of the topic we have prepared few blog posts for you:
[![Recommendation system](https://img.shields.io/badge/Recommendation_system_with_dynamic_node2vec-8A477F?style=for-the-badge)](https://memgraph.com/blog/online-node2vec-recommendation-system)

[![Node embeddings introduction](https://img.shields.io/badge/Node_embeddings_introduction-81ECB2?style=for-the-badge)](https://hackmd.io/OYCuw22ASLqEK_VFBhXRlg)

[![Dynamic Node2Vec](https://img.shields.io/badge/Dynamic_node2vec_theory_overview-A6EC81?style=for-the-badge)](https://hackmd.io/vyW6645aQtWaV21qo2-olA)


## Use cases

Dynamic node2vec can be used for any of the following problems:
* node classification
* link prediction
* graph reconstruction
* clustering (community detection)


We have created a blog post :point_up: by building recommendation system with dynamic node2vec by finding clusters (community detection). Be sure to check it out.

