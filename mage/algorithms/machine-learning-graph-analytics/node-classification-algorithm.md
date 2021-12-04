---
id: node-classification-algorithm
title: Node Classification
sidebar_label: Node Classification
---

## Description

Prediction can be done at the node level. The basis of such predicion systems are features extracted from graph entities.

Extracting a feature can be a complicated problem, and it can be based on different graph attributes — node properties, node adjacency, or structure of the neighborhood.

Traditional methods of extracting knowledge from nodes include measures of [centrality](https://en.wikipedia.org/wiki/Centrality), importance, or feature structure such as [graphlets](https://en.wikipedia.org/wiki/Graphlets).

Somewhat more advanced methods are extracting the [embedding](https://towardsdatascience.com/graph-embeddings-the-summary-cc6075aba007) of individual nodes, and then a prediction algorithm that takes knowledge from the embeddings themselves. The most popular such tool is [Node2Vec](/mage/algorithms/machine-learning-graph-analytics/node2vec-algorithm).

However, these methods are only a few. Today's graph machine learning is being developed and among them, we distinguish many different models such as:
1. [GraphSAGE](http://snap.stanford.edu/graphsage/)
2. [DeepWalk](https://towardsdatascience.com/deepwalk-its-behavior-and-how-to-implement-it-b5aac0290a15)
3. [Graph convolutional networks](https://towardsdatascience.com/understanding-graph-convolutional-networks-for-node-classification-a2bfdb7aba7b) (GCN)
4. [Graph Attention Network](https://arxiv.org/abs/1710.10903) (GAT)

and many, many more. This task has become quite popular and is used in many industries where knowledge is stored in the form of a graph structure.

<img src="https://i.imgur.com/hbWDz7q.png" alt="drawing"/>

> Previously labeled nodes can be used to determine the class of unclassified ones

## Materials

### Implementation

![Node Classification](https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white)

Unfortunately, **Node Classification** is yet not implemented within the project [**MAGE**](https://github.com/memgraph/mage). Be sure to raise the issue on the GitHub repo and ping us to speed up the development. :point_up:
## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)
