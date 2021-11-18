---
id: node-similarity-algorithm
title: Node Similarity
sidebar_label: Node Similarity
---

## Description

The notion of similarity can be described in several different ways, but within graph theory it encompasses several generally accepted definitions. The similarity of graph nodes is based on a comparison of adjacent nodes or the neighborhood structure. These are traditional definitions that take into account only the layout of the graph. If we extend the definition of a node with additional properties, then it is possible to define comparisons based on these properties as well, but this is not the topic of the methods mentioned here.

The result of this type of algorithm is always a pair of nodes and assigned value indicating the match measure between them. We will mention only the most popular measures based on negihborhood nodes with their brief explanations.

- **Cosine similarity** - the cosine of the angle by which the product is defined as the cardinality of the common neighbors of the two nodes, and the denominator is the root of the product of the node degrees
- **Jaccard similarity** - a frequently used measure in different models of computer science includes the ratio of the number of common neighbors through the total
-
// Photo of node similarity

## Implementation

[![Node Similarity](https://img.shields.io/badge/Node_Similarity-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/node-similarity)

Node similarity is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:


## Use cases

The similarity of the nodes can be used in a diverse range of use cases. The reason for this is easy adaptability but also the natural pattern recognition application. Nodes with a high degree of similarity to those targeted or labeled are more likely to have attributes equal to them.

[![Finance](https://img.shields.io/badge/Finance-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

One such example is the financial industry where scams happen on a daily basis. The pattern of behavior is often a common item of various fraudsters. Also, fraudsters are mostly tied to other fraudsters, so a **node similarity** measure can help detect suspects similar to previously detected ones.
