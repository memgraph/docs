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

Today's most popular models are [GraphSAGE](https://arxiv.org/abs/1706.02216), [Graph Convolutional Networks (GCN)](https://arxiv.org/abs/1609.02907), 
[Graph Attention Networks (GAT)](https://arxiv.org/abs/1710.10903) and [Temporal Graph Networks (TGN)](https://arxiv.org/abs/2006.10637) - important for dynamic networks.

<img src="https://i.imgur.com/nUI6x82.png" alt="drawing"/>

> The above network shows the computation graph of message propagation in GNNs.


## Materials

### Implementation

![Graph Neural Networks](https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white)

Unfortunately, **GNNs** are yet not implemented within the project [**MAGE**](https://github.com/memgraph/mage). Be sure to raise the issue on the GitHub repo and ping us to speed up the development. :point_up:
## Use cases

[![Bioinformatics](https://img.shields.io/badge/Bioinformatics-Application-8A477F?style=for-the-badge)](/use-cases/bioinformatics.md)

Having only a structure model of one element in research can prevent researchers to spent many hours investigating and observing the properties of these structures. Based on a graph structure, properties such as whether is something is toxic or not can be determined just from the model.

[![Social Networks](https://img.shields.io/badge/Social_Networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

One of the most obvious tasks of **Graph Neural Networks** is predicting new friendships/followers on social networks, finding communities and hubs. This concept is based on sharing the same entities on the graph, whether they are friends, interests, or things you follow.

[![Knowledge graph](https://img.shields.io/badge/Knowledge_graphs-Application-8A477F?style=for-the-badge)](/use-cases/knowledge-graph.md)

Knowledge graphs can be both complex and extremely large. Exploring and splitting the graph into logical units is a difficult task. Therefore, using **Graph neural networks** and mapping the vectors, this way it would enable easier domain exploration since each knowledge node would be mapped to the same place in vector-space.

[![Finance](https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge)](/use-cases/finance.md)

Classifying nodes based on previously labeled data can help investigators to find out fraudsters in finance systems. Since fraudsters can often act very quickly with their tricks, applying a streaming-based node classification can help up building a real-time fraud detection system.

[![Computer Security](https://img.shields.io/badge/Computer_Security-Application-8A477F?style=for-the-badge)](/use-cases/computer-security.md)

Fraudsters usually behave differently than common users. This way a system can be observed and once an unusual behavior is spotted it can immediately be revealed. This can help build a bulletproof computer security system.
