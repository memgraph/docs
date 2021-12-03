---
id: gnn-algorithm
title: Graph Neural Networks (GNN)
sidebar_label: Graph Neural Networks (GNN)
---

## Description

[Machine learning](https://en.wikipedia.org/wiki/Machine_learning) methods are based on data. Because of everyday encounters with data that are audio, visual, or textual such as images, video, text, and speech - the machine learning methods that study such structures are making tremendous progress today.

Connection-based data can be displayed as graphs. Such structures are much [more complex than images](https://towardsdatascience.com/machine-learning-on-graphs-part-1-9ec3b0bd6abc) and text due to multiple levels of connectivity in the structure itself which is completely irregular and unpredictable. With the development of neural networks organized in the structure of graphs, the field of [graph machine learning](https://arxiv.org/abs/2005.03675) is improving.

Applying the same principle used, for example, in images (convolutions) to graphs would be a mistake. Such principles are based on grid structures, while on graphs of arbitrary sizes, complex topologies, and random connections applying the same strategy would result in a disaster.

All convolutional network graph methods are based on [message propagation](https://en.wikipedia.org/wiki/Belief_propagation). Such messages carry information through a network composed of nodes and edges of the graph, while each node entity carries its computational unit. The task of each node is to process the information and pass it on to the neighbors.

Various possibilities have been developed that enable machine learning with graph neural networks. Starting with the graph of convolutional networks published in “[Spectral Networks and Deep Locally Connected Networks on Graphs](https://arxiv.org/abs/1312.6203)” (Bruna et al, 2014).

Today's most popular models are [GraphSAGE](http://snap.stanford.edu/graphsage/), Graph Convolutional Networks (GCN), [Graph Attention Networks (GAT)](https://arxiv.org/abs/1710.10903) and [Temporal Graph Networks (TGN)](https://arxiv.org/abs/2006.10637) - important for dynamic networks.

<img src="https://i.imgur.com/nUI6x82.png" alt="drawing"/>

> The above network shows the computation graph of message propagation in GNNs.


## Materials

### Implementation

![Graph Neural Networks](https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white)

Unfortunately, **GNNs** are yet not implemented within the project [**MAGE**](https://github.com/memgraph/mage). Be sure to raise the issue on the GitHub repo and ping us to speed up the development. :point_up:
## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

// TODO
