---
id: node-classification-algorithm
title: Node Classification
sidebar_label: Node Classification
---

## Description
Node classification is the problem of finding out the **right label** for a **node** based on its **neighbors’ labels** and **structure similarities**.

More formally, let `G=(V, E)` be a graph with vertices (nodes) `V` and edges (relationships) `E`, `S` the set of all labels, and `f : V → S` a vertex labeling function that returns the correct label for each node. 
From a given partial function `g : V’ ⊆ V → S` (`V’` being training examples), 
a node classification model aims to minimize the loss of the label prediction function `g’ : V → S`.

The motivation for node classification models is the sociological concept of homophily. In social networks, individuals who associate and 
bond with each other tend to have similar properties. In graph structure, homophily means that neighboring nodes 
tend to have the same labels and similar connections.  

In real-life datasets, the set `V` can be a lot of things, often scientific publications, proteins, Reddit posts, etc. In the same respective order, 
set `E` can be a citation of publications, protein connections, or connection of posts commented by the same user. Therefore, node classification helps the user to classify publications 
relevant to its field, check whether protein helps cure new diseases, or simply find out which subreddit a post naturally belongs to. 
On incompletely labeled graphs, node classification seeks to find the right labels for unlabeled nodes.

### Solution 
Solving methods range from **traditional** to **machine learning-based**. Both models work on top of the feature which describes each node. Together features and relationships between
nodes help the algorithm decide what is the correct label for each node.

The key difference is when using traditional methods, an engineer must create distinguishing features for each node himself.
On the other hand, the machine learning model learns and adapts almost any set of randomly initialized sets of numbers that represent node features.

For a traditional approach, extracting such a feature is not an easy problem, since there are many options to choose from — node properties, node adjacency, or the structure of the neighborhood.
Traditional methods of extracting knowledge from nodes include measures of [centrality](https://en.wikipedia.org/wiki/Centrality), importance, or feature structure such as [graphlets](https://en.wikipedia.org/wiki/Graphlets).

Graph machine learning models can work based on almost arbitrary features. Their main strength is that model finds which features are similar for nodes with the same label, and 
learns and maps such features as distinguishing ones. ML models are constantly developed. Here are some which are usually used in **node classification** tasks:
1. [GraphSAGE](http://snap.stanford.edu/graphsage/)
2. [Graph convolutional networks](https://towardsdatascience.com/understanding-graph-convolutional-networks-for-node-classification-a2bfdb7aba7b) (GCN)
3. [Graph Attention Network](https://arxiv.org/abs/1710.10903) (GAT)

<img src="https://i.imgur.com/hbWDz7q.png" alt="drawing"/>

> Previously labeled nodes can be used to determine the class of unclassified ones

## Materials

### Implementation

[![Node classification](https://img.shields.io/badge/Node_classification-Implementation-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/node_classification.py)

[![Node classification](https://img.shields.io/badge/Node_classification-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/node-classification-with-gnn)

Machine learning-powered **node classification** is provided within [Memgraph MAGE](https://github.com/memgraph/mage). We encourage you to test it yourself and take a look at the implementation.

## Use cases

[![Finance](https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge)](/use-cases/finance.md)

Classifying nodes based on previously labeled data can help investigators to find out fraudsters in finance systems. Since fraudsters can often act very quickly with their tricks, applying a streaming-based node classification can help up building a real-time fraud detection system.

[![Computer Security](https://img.shields.io/badge/Computer_Security-Application-8A477F?style=for-the-badge)](/use-cases/computer-security.md)

Fraudsters usually behave differently than common users. This way a system can be observed and once an unusual behavior is spotted it can immediately be revealed. This can help build a bulletproof computer security system.
