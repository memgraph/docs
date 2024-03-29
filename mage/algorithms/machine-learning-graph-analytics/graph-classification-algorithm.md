---
id: graph-classification-algorithm
title: Graph Classification
sidebar_label: Graph Classification
---

## Description

Let’s look at one useful tool that allows you to analyze a graph as a whole. [Graph classification](https://paperswithcode.com/task/graph-classification) enables this. The structure and arrangement of nodes can reveal some hidden features in a graph.

So, for example, fraudsters who have a common pattern of behavior can be detected by searching that pattern in the graph of their connections.

To make this possible, the main technique is to design features over the structure of the graph itself and then apply a classification algorithm. This can be achieved in several ways:
1. [Graphlet features](https://en.wikipedia.org/wiki/Graphlets) - the number of a particular graphlet indicates a single element of the feature vector
2. [Weisfeiler-Lehman kernel](https://www.jmlr.org/papers/volume12/shervashidze11a/shervashidze11a.pdf) - color refinement, teaching colors to the neighborhood until convergence is achieved
3. Graph Deep Learning - designing a network that can extract a deeper feature depending on the structure of the graph

<img src="https://i.imgur.com/u85VSOM.png" alt="drawing"/>

> Probability of different labels on graph classification for molecular structures


## Materials

### Implementation

![Graph Classification](https://img.shields.io/badge/Not_implemented-EB3434?style=for-the-badge&logo=github&logoColor=white)

Unfortunately, **Graph Classification** is yet not implemented within the project [**MAGE**](https://github.com/memgraph/mage). Be sure to raise the issue on the GitHub repo and ping us to speed up the development. :point_up:
## Use cases

[![Bioinformatics](https://img.shields.io/badge/Bioinformatics-Application-8A477F?style=for-the-badge)](/use-cases/bioinformatics.md)

Having only a structure model of one element in research can prevent researchers to spent many hours investigating and observing the properties of these structures. Based on a graph structure, properties such as whether is something is toxic or not can be determined just from the model.
