---
id: node2vec-online-algorithm
title: Dynamic node2vec
sidebar_label: Dynamic node2vec
---

## Description

**Dynamic Node2Vec** is a **random walk based** method that creates embeddings
for every new node added to the graph. For every new edge, there is a
recalculation of probabilities (weights) that are used in walk sampling. A goal
of the method is to enforce that the embedding of node `v` is similar to the
embedding of nodes with the ability to reach node `v` across edges that appeared
one before the other.

<img src="https://i.imgur.com/J6womJf.png" alt="drawing"/>

### Why Dynamic node2vec

Many methods, like [**node2vec**](https://snap.stanford.edu/node2vec/),
[**DeepWalk**](https://arxiv.org/abs/1403.6652), focus on computing the
embedding for static graphs which has its qualities but also some big drawbacks.

Networks in **practical applications** are **dynamic** and evolve constantly
over time. For example, new links are formed (when people make new friends on
social networks) and old links can disappear. Moreover, new nodes can be
introduced into the graph (e.g., users can join the social network) and create
new links to existing nodes.

**Naively applying one of the static** embedding algorithms leads to
unsatisfactory performance due to the following challenges:
* **Stability**: the embedding of graphs at consecutive time steps can differ
  substantially even though the graphs do not change much.
* **Growing Graphs**: All existing approaches assume a fixed number of nodes in
  learning graph embeddings and thus cannot handle growing graphs.
* **Scalability**: Learning embeddings independently for each snapshot leads to
  running time linear in the number of snapshots. As learning a single embedding
  is computationally expensive, the naive approach does not scale to dynamic
  networks with many snapshots

Dynamic Node2Vec is created by [F.Beres et al](https://ferencberes.github.io/)
in the "[Node embeddings in dynamic
graphs](https://appliednetsci.springeropen.com/articles/10.1007/s41109-019-0169-5)".

## Materials

### Implementation

[![Node2Vec
Online](https://img.shields.io/badge/Node2Vec_Online-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/python/node2vec_online.py)

[![Node2Vec
Online](https://img.shields.io/badge/Node2Vec_Online-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/node2vec-online)

**Dynamic Node2Vec** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

### Blog posts

[![Dynamic
Node2Vec](https://img.shields.io/badge/Recommendation_System_Using_Online_Node2Vec-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/online-node2vec-recommendation-system)

> _Our little magician Memgraph MAGE has recently received one more spell - the
> Online Node2Vec algorithm. Since he is still too scared to use it, you, as a
> brave spirit, will step up and use it on a real challenge to show MAGE how
> it’s done. This challenge includes building an Online Recommendation System
> using k-means clustering and the newborn spell - Online Node2Vec algorithm._

[![Understanding how Dynamic Node2Vec Works on Streaming
Data](https://img.shields.io/badge/Understanding_how_Dynamic_Node2Vec_Works_on_Streaming_Data-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/dynamic-node2vec-on-streaming-data)

> Many methods, like node2vec and deepwalk, focus on computing the embedding for
> static graphs which is great but also has a big drawback. Networks in
> practical applications are dynamic and evolve constantly over time. New links
> are formed, and old ones can disappear. Moreover, new nodes can be introduced
> into the graph (e.g., users can join the social network) and create new links
> toward existing nodes.

## Use cases

[![Social
networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

Dynamic Node2Vec can be used to find communities in social networks like
[Twitter](https://twitter.com), [Facebook](https://www.facebook.com/), and so
on. In order to find communities, we first need to apply dynamic node2vec and
then use an unsupervised machine learning algorithm, i.e.
[k-means](https://en.wikipedia.org/wiki/K-means_clustering) which will find us
clusters among node embeddings.

[![Link
prediction](https://img.shields.io/badge/Link_prediction-Application-8A477F?style=for-the-badge)](/mage/algorithms/machine-learning-graph-analytics/link-prediction-algorithm)

We can use dynamic node2vec in the case of link prediction. To do so, after
obtaining node embeddings we can predict new links depending on the similarity
of the node embeddings.

[![Node
classification](https://img.shields.io/badge/Node_classification-Application-8A477F?style=for-the-badge)](/mage/algorithms/machine-learning-graph-analytics/node-classification-algorithm)

Furthermore, we can use dynamic node2vec for the node classification task. Node
features (embeddings) are input to a one-vs-rest logistic regression. We train
our model only on the subset of labels and test it on the rest of them. Our
model here is a one-vs-rest logistic regression. You can check out the following
[paper](https://arxiv.org/pdf/1705.02801.pdf) for more references.

[![Graph
classification](https://img.shields.io/badge/Graph_classification-Application-8A477F?style=for-the-badge)](/mage/algorithms/machine-learning-graph-analytics/graph-classification-algorithm)

For graph classification, we can create a virtual node that is connected to all
the nodes in the graph. After running dynamic node2vec, the embedding of the
virtual node will represent an embedding of the entire graph which we can then
compare to embeddings of other graphs.
