---
id: node-classification-algorithm
title: Node Classification
sidebar_label: Node Classification
---

## Description
Node classification is the problem of finding out the **right label** for a **node** based on its neighbors’ labels and structure similarities.

More formally, let $G=(V,E)$ be a graph, $S$ the set of all labels, and $f : V → S$ a vertex labelling function that returns the correct label for each node. 
From a given partial function $g : V’ ⊆ V → S$ ($V’$ being training examples), 
a node classification model aims to minimize the loss of the label prediction function $g’ : V → S$.

The motivation for node classification models is the sociological concept of `homophily`: in social networks, individuals that associate and bond with each other tend to have similar properties. 
In graph terms, this means that neighboring nodes tend to have the same labels. 

Set $V$ in can be a lot of things, the most common are scientific publications, proteins, Reddit posts etc. 
In the same respective order, set $E$ can be citation of publications, protein connections or connection of posts commented by same user. Therefore, if user wants to classify publication relevant to its field, find if protein is helpful to curing new diseases, or simply find out to which subreddit its post naturally belongs, it should try out this approach. Given any not completely labeled graph, this problem will find all nodes’ labels.

### Possible solutions 
Solving methods range from **traditional** to **machine learning-based**. Key difference is that in traditional methods, engineer must develop distinguishing features himself,
where on the other hand machine learning model finds features based on neighborhood and similarities during training process.

Extracting such a feature can be a complicated problem, and it can be based on different graph attributes — node properties, node adjacency, or the structure of the neighborhood.
Traditional methods of extracting knowledge from nodes include measures of [centrality](https://en.wikipedia.org/wiki/Centrality), importance, or feature structure such as [graphlets](https://en.wikipedia.org/wiki/Graphlets).

On the other hand graph machine learning models are being developed constantly and here are most commonly used in **node classification** tasks:
1. [GraphSAGE](http://snap.stanford.edu/graphsage/)
2. [DeepWalk](https://towardsdatascience.com/deepwalk-its-behavior-and-how-to-implement-it-b5aac0290a15)
3. [Graph convolutional networks](https://towardsdatascience.com/understanding-graph-convolutional-networks-for-node-classification-a2bfdb7aba7b) (GCN)
4. [Graph Attention Network](https://arxiv.org/abs/1710.10903) (GAT)

and many, many more. This task has become quite popular and is used in many industries where knowledge is stored in the form of a graph structure.


<img src="https://i.imgur.com/hbWDz7q.png" alt="drawing"/>

> Previously labeled nodes can be used to determine the class of unclassified ones

## Materials

### Implementation

[![Node classification](https://img.shields.io/badge/Node_classification-Implementation-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/node_classification.py)

[![Node classification](https://img.shields.io/badge/Node_classification-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/node-classification-with-gnn)

**Node Classification** is implemented within the project [**MAGE**](https://github.com/memgraph/mage). 

## Use cases

[![Finance](https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge)](/use-cases/finance.md)

Classifying nodes based on previously labeled data can help investigators to find out fraudsters in finance systems. Since fraudsters can often act very quickly with their tricks, applying a streaming-based node classification can help up building a real-time fraud detection system.

[![Computer Security](https://img.shields.io/badge/Computer_Security-Application-8A477F?style=for-the-badge)](/use-cases/computer-security.md)

Fraudsters usually behave differently than common users. This way a system can be observed and once an unusual behavior is spotted it can immediately be revealed. This can help build a bulletproof computer security system.
