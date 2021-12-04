---
id: node-classification-algorithm
title: Node Classification
sidebar_label: Node Classification
---

## Description

Prediction can be done at the node level. To enable it, it is necessary to extract the features that are the basis of the prediction system.

Extracting a feature can be a complicated problem, and this can be done based on different graph attributes — whether they are properties, adjacent nodes, or node structures a few steps away.

Traditional methods of extracting knowledge from nodes include measures of centrality, importance, or feature structure such as graphlets.

Somewhat more advanced methods are extracting the embedding of individual nodes, and then a prediction algorithm that takes knowledge from the embeddings themselves. The most popular such tool is Node2Vec.

However, these methods are only a few. Today's graph machine learning is being developed and among them, we distinguish many different models such as:
1. GraphSAGE
2. DeepWalk
3. GCN - Graph convolutional networks
4. Graph Attention Network (GAT)

and many, many more. This task has become quite popular and is used in many industries where knowledge is stored in the form of a graph structure.

<img src="https://i.imgur.com/hbWDz7q.png" alt="drawing"/>

> Previously labeled nodes can be used to determine the class of unclassified ones

## Materials

### Implementation

[![Node Classification](https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/community-detection)

Unfortunately, **Node Classification** is yet not implemented within the project [**MAGE**](https://github.com/memgraph/mage). Be sure to raise the issue on the GitHub repo and ping us to speed up the development. :point_up:
## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)
