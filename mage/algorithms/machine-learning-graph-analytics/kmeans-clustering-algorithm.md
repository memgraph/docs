---
id: kmeans-clustering-algorithm
title: K-Means Clustering
sidebar_label: K-Means Clustering
---

## Description

The k-means algorithm clusters given data by trying to separate samples in `n` groups of equal variance by minimizing a criterion known as 
within-the-cluster sum-of-squares. 
Algorithm requires the number of clusters to be specified beforehand. This means it is not possible for algorithm to determine
what is the best number of clusters to use, but it is up to user to find it. It scales well to large numbers of samples and has been used 
across a large range of application areas in many different fields such as recommendation engine, fraud detection and so on.


![k-means clustering](../../data/algorithms/machine-learning-graph-analytics/kmeans-clustering.png)
> K-means clustering run on top of Node2Vec algorithm. Numbers represent cluster.



### Implementation

[![k-means](https://img.shields.io/badge/KMeans-Implementation-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/kmeans.py)

[![k-means](https://img.shields.io/badge/KMeans-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/kmeans-clustering)

**K-Means** algorithm is implemented within the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in the
link above.

## Use cases

[![Social
networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

Clustering is mostly used in social networks. Communities
can be explored, similarities found, and much more.
