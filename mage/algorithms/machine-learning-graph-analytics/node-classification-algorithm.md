---
id: node-classification-algorithm
title: Node Classification
sidebar_label: Node Classification
---

## Description

Prediction of a property can be done at the node level. For prediction, it is necessary to extract the features that are the basis of the prediction system.

Extracting a feature can be a complicated problem, and it can be done based on different graph attributes — whether they are properties, adjacent nodes, or node structures a few steps away.

Traditional methods of extracting knowledge from nodes include measures of centrality, importance, or feature structure such as graphlets.

Somewhat more advanced methods are extracting the embedding of individual nodes, and then a prediction algorithm that takes knowledge from the embeddings themselves. The most popular such tool is definitely Node2Vec.

However, these methods are not all, today graph machine learning is being developed and among them we distinguish many different models such as:
1. GraphSAGE
2. DeepWalk
3. GCN - Graph convolutional networks
4. Graph ATtention Network (GAT)

and many, many more. This task has become quite popular and is used in many industries where knowledge is stored in the form of a graph structure.

## Materials

### Implementation

[![Node Classification](https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/community-detection)

Unfortunately, **Node Classification** are yet not implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to raise the issue on GitHub repo and notice us to speed up the development. :point_up:
## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)
