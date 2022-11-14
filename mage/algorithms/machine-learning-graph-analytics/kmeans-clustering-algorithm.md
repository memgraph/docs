---
id: k-means-clustering-algorithm
title: K-means Clustering
sidebar_label: K-means Clustering
---

## Description

The k-means algorithm clusters given data by trying to separate samples in `n` groups of equal variance by minimizing the criterion known as 
within-the-cluster sum-of-squares. 
The algorithm requires the number of clusters to be specified beforehand. In other words, the algorithm doesn’t compute the optimal number of clusters to use, but leaves that task to the user. It scales well to large numbers of samples, and it has been applied in a wide range of fields such as recommendation engines, fraud detection and market research.


![k-means clustering](../../data/algorithms/machine-learning-graph-analytics/kmeans-clustering.png)


### Implementation

[![k-means](https://img.shields.io/badge/KMeans-Implementation-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/kmeans.py)

[![k-means](https://img.shields.io/badge/KMeans-Documentation-FCC624?style=for-the-badge&logo=python&logoColor=white)](/mage/query-modules/python/kmeans)

**K-means** algorithm is implemented within the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in the
link above.

## Use cases

[![Social
networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

Clustering is heavily used in social network analysis to discover user communities, find similarities between them and much more.
