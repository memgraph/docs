---
id: node2vec-online-algorithm
title: Dynamic node2vec
sidebar_label: Dynamic node2vec
---

## Description
**Dynamic node2vec** is **random walk based** method which creates embeddings for every new node added to the graph. For every new edge, there is a recalculation of probabilities (weights) that are used in walk sampling. A goal of the method is to enforce that the embedding of node `v` is similar to the embedding of nodes with the ability to reach node `v` across edges that appeared one before the other.

<img src="https://i.imgur.com/J6womJf.png" alt="drawing"/>

### Why Dynamic node2vec
Many methods, like [**node2vec**](https://snap.stanford.edu/node2vec/), [**DeepWalk**](https://arxiv.org/abs/1403.6652), focus on computing the embedding for static graphs which has its qualities but also some big drawbacks.

Networks in **practical applications** are **dynamic** and evolve constantly over time.
For example, new links are formed (when people make new friends on social networks) and old links can disappear.
Moreover, new nodes can be introduced into the graph (e.g., users can join the social network) and create new links to existing nodes.

**Naively applying one of the static** embedding algorithms leads to unsatisfactory performance due to the following challenges:
* **Stability**: the embedding of graphs at consecutive time steps can differ substantially even though the graphs do not change much.
* **Growing Graphs**: All existing approaches assume a fixed number of nodes in learning graph embeddings and thus cannot handle growing graphs.
* **Scalability**: Learning embeddings independently for each snapshot leads to running time linear in the number of snapshots. As learning a single embedding is computationally expensive, the naive approach does not scale to dynamic networks with many snapshots

Dynamic Node2Vec is implemented by [F.Beres](https://ferencberes.github.io/) in the "[Node embeddings in dynamic graphs](https://appliednetsci.springeropen.com/articles/10.1007/s41109-019-0169-5)".

## Materials

### Implementation
[![Node2Vec Online](https://img.shields.io/badge/Node2Vec_Online-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)]([/mage/query-modules/python/node-similarity](https://github.com/memgraph/mage/blob/main/python/node2vec_online.py))

[![Node2Vec Online](https://img.shields.io/badge/Node2Vec_Online-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/node2vec-online)

**Dynamic Node2Vec** is implemented within the project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

## Blog posts
[![Dynamic Node2Vec](https://img.shields.io/badge/Recommendation_System_Using_Online_Node2Vec-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/online-node2vec-recommendation-system)

> _Our little magician Memgraph MAGE has recently received one more spell - the Online Node2Vec algorithm. Since he is still too scared to use it, you, as a brave spirit, will step up and use it on a real challenge to show MAGE how it’s done. This challenge includes building an Online Recommendation System using k-means clustering and the newborn spell - Online Node2Vec algorithm._


// TODO

## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

// TODO
