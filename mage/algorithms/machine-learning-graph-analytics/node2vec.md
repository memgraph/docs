---
id: node2vec-algorithm
title: Node2Vec
sidebar_label: Node2Vec
---

## Description

[Embedding](https://towardsdatascience.com/node-embeddings-for-beginners-554ab1625d98) methods serve to map graph entities into **n-dimensional vectors**. The goal of such an approach is to map closely related entities to vectors with a **high degree of similarity** according to the chosen method of similarity estimation.

[Node2Vec](https://snap.stanford.edu/node2vec/) stands out as the most popular method. It is based on random walks. The point of this method is mapping nodes that are most likely to be within a common random walk to the same place in n-dimensional space. The method was developed by [Aditya Grover](https://aditya-grover.github.io/) and [Jure Leskovec](https://cs.stanford.edu/people/jure/), professors at Stanford University in their paper "[node2vec: Scalable Feature Learning for Networks](https://arxiv.org/abs/1607.00653)"

The optimization of the mapped vectors themselves is done by a well-known machine learning method such as gradient descent. In the end, the result obtained can be used for node classification or link prediction, both truly popular.

<img src="https://i.imgur.com/HXHXLwZ.png" alt="drawing"/>

> Illustration of how graph embeddings can be mapped to 2D space. Boundaries between classes are more visible than in a graph.


## Materials

### Implementation

[![Node2Vec](https://img.shields.io/badge/Node2Vec-Implementation-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/node2vec.py)

[![Node2Vec](https://img.shields.io/badge/Node2Vec-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/node2vec)

**Node2Vec** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:


## Use cases

Node2Vec is such a versatile method that it is easily integrated into various solutions. The biggest bonus of having such a method is the ability to use it in downstream prediction/classification tasks.

[![Retail](https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge)](/mage/applications/retail-application)

In the network of users and products, node2vec can be used to extract the deeply hidden insight about customers' shopping behavior. This way it can enable targeted advertisements and other recommendations to the user.

[![Knowledge graph](https://img.shields.io/badge/Knowledge_graphs-Application-8A477F?style=for-the-badge)](/mage/applications/knowledge-graph-application)

Knowledge graphs can be both complex and extremely large. Exploring and splitting the graph into logical units is a difficult task. Therefore, using node2vec and mapping the vectors, this way it would enable easier domain exploration since each knowledge node would be mapped to the same place in vector-space.
