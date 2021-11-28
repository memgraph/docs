---
id: graph-classification-algorithm
title: Graph Classification
sidebar_label: Graph Classification
---

## Description

Let’s look at one useful tool that allows you to analyze a graph as a whole. That is the prediction of the graph. The structure and arrangement of nodes can reveal some hidden features in a graph.

So, for example, fraudsters who have a common pattern of behavior can be detected by searching that pattern in the neighborhood graph of the fraudster himself.

To make this possible, the main technique is to design a feature over the structure of the graph itself, and then apply a classification algorithm. This can be achieved in several ways:
1. Graphlet featuri - the number of a particular graphlet indicates a single element of the feature vector
2. Weisfeiler-Lehman kernel - color refinement, teaching colors to the neighborhood until convergence is achieved
3. Graph Deep Learning - designing a network that is able to extract a deeper feature depending on the structure of the graph

## Materials

### Implementation

[![Graph Classification](https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/community-detection)

Unfortunately, **Graph Classification** are yet not implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to raise the issue on GitHub repo and notice us to speed up the development. :point_up:
## Use cases

[![UNKNOWN](https://img.shields.io/badge/UNKNOWN-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)
