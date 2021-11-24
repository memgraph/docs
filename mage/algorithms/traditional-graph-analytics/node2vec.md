---
id: node2vec
title: Node2Vec
sidebar_label: Node2Vec
---

## Description

Embedding methods serve to map graph entities into n-dimensional vectors. The goal of such an approach is to map closely related entities to vectors with a high degree of similarity according to the chosen method of similarity estimation.

Node2Vec stands out as the most popular such method. It is based on random walks. The point of this method is to map in the same place in n-dimensional space those nodes that are most likely to be within a common random walk. The method was developed by Aditya Grover and Jure Leskovec, professors at Stanford University in their paper "node2vec: Scalable Feature Learning for Networks"

The optimization of the mapped vectors themselves is done by well-known machine learning methods such as gradient descent. In the end, the result obtained can be used for the purpose of node classification or link prediction, both truly popular.

## Materials

### Implementation

[![Node2Vec](https://img.shields.io/badge/Node2Vec-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/node2vec)

[![Node2Vec](https://img.shields.io/badge/Node2Vec-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/node2vec)

**Node2Vec** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:


### Blog posts

### Playground examples

## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

