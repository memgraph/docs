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

### Blog posts

[![Link prediction with Node2Vec in Physics Collaboration
Network](https://img.shields.io/badge/Link_prediction_with_Node2Vec_in_Physics_Collaboration_Network-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/link-prediction-with-node2vec-in-physics-collaboration-network)

> As already mentioned, link prediction refers to the task of predicting missing
> links or links that are likely to occur in the future. In this tutorial, we
> will make use the of MAGE spell called node2vec. Also, we will use Memgraph to
> store data, and gqlalchemy to connect from a Python application. The dataset
> will be similar to the one used in this paper: Graph Embedding Techniques,
> Applications, and Performance: A Survey.

[![How Node2Vec Works – A Random Walk-Based Node Embedding
Method](https://img.shields.io/badge/How_Node2Vec_Works_–_A_Random_Walk--Based_Node_Embedding_Method-FCC624?style=for-the-badge&logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMrSURBVFiFzddvqJ9jGAfwz7Mdm3Wm+Q1Dps04e0HbpJMQU0rJO4QQpZgVauTP8v8NIzQ5aSJZRPZCSuQ0ZP6seMOMCCXRwZE5OztH/s1+XlzXsz399sz5nZ1fP75199zPfd/PfX2f67ru7/U8/Mco0MBN6Ouy7a/wYIHX8Cs2dpnAOZgJf2IeDsPqnIAeXIMV2S8fWp1rp4rD8Qc0RRhewSBGsAQ34NNsq7A05wZz7VTRQHNaZeAgDCWrXsxOgyPZ78257/O+Yyg90IcnhNulwfuxJvuwMtcc1wG7DTSLJHAexjuw6WQwGy+VBLbg7y4TmI4T2ROCbqOBZk9lYCFuxbTa5XvjG5EfcBsWtPncLpFbO9hzvgkx+noSBL5rIdNuCHelrd3oZggW4GqcgQPwVJVAP37GL222TZWN397Hmi05XwgxG8ULQktWlBNNzMX2ZNhuCEaxLfuHYE7NmjHMwtNCei/HR1iWpE+t5sBMLJoEgZ8qBI4S9WQn3surNDiQY/34Pcc/xgMYqHpgvohJuwS+wGXZfx6L0/Al4s0fT6PrRLlfJlxfYmES6XgSnosfRD7dnWOPirJf5P2ReAPrqx6YY/91gJDWh4Wsr8RneB9n4XN8mES24TGRjDd3SgdOwzNpaAmGc/yuHO/H9cILw7gUb+E+phaCGbhXlOyrauYLvI4X8a3IldJWI21PWgdW5QYnCLe+K05PHWZhvXD7xS1zexEoRGYumqAdKERkO+4RVa0OS0WWbxQnrMTReE5NMdqXDozhg+zPF3Gci+XYWmO4RxSnG/O6rnzTxDycUl1cok9UqVYCO3B2rn0Vh4ovot9qjC/Gs2nwZHxZmTsea3GwKEi7MS5cPxHWCPncKt6uigLXirDc2fJiJXpxAS5McsdgrBAuWi7kshXjuCUfGMRJIgc2i4r2CY7AkzgWV+BH3G7i43w6Nk0XMR0SyTTS0obFZ/mgcNtD4vw3cYfQjpfxDi4SR61HeHS0Zr9q24C1pTT+GwZEco7jL3GWzxT6PoQr8WYb++wXZog/pw3CEztFOX0E5+vA/0E7HrhOlNvNQnRGp2r0f4V/AIO15zW1WziLAAAAAElFTkSuQmCC&logoColor=white)](https://memgraph.com/blog/how-node2vec-works)

> For node2vec, the paper authors came up with the brilliant idea: We define a
> flexible notion of a node’s network neighborhood and design a biased random
> walk procedure, which efficiently explores diverse neighborhoods.

## Use cases

Node2Vec is such a versatile method that it is easily integrated into various solutions. The biggest bonus of having such a method is the ability to use it in downstream prediction/classification tasks.

[![Retail](https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge)](/use-cases/retail.md)

In the network of users and products, node2vec can be used to extract the deeply hidden insight about customers' shopping behavior. This way it can enable targeted advertisements and other recommendations to the user.

[![Knowledge graph](https://img.shields.io/badge/Knowledge_graphs-Application-8A477F?style=for-the-badge)](/use-cases/knowledge-graph.md)

Knowledge graphs can be both complex and extremely large. Exploring and splitting the graph into logical units is a difficult task. Therefore, using node2vec and mapping the vectors, this way it would enable easier domain exploration since each knowledge node would be mapped to the same place in vector-space.
