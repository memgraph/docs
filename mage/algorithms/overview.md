---
id: algorithms
title: MAGE algorithms
sidebar_label: MAGE algorithms
---

## Traditional Graph Analytics

### Betweenness Centrality
Centrality analysis provides information about the node’s importance for an information flow or connectivity of the network. [Betweenness centrality](/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm.md) is one of the most used centrality metrics.

### Biconnected Components
[Biconnected components](/algorithms/traditional-graph-analytics/biconnected-components.md) are parts of the graph important in the initial analysis. Finding biconnected components means finding a maximal biconnected subgraph.

### Bipartite Matching
A bipartite graph is a graph in which we can divide vertices into two independent sets, such that every edge connects vertices between these sets. No connection can be established within the set. [Matching in bipartite graphs](/algorithms/traditional-graph-analytics/bipartite-matching.md) (bipartite matching) is described as a set of edges that are picked in a way to not share an endpoint.


### [Bridge Detection](/algorithms/traditional-graph-analytics/bridges-algorithm.md)
### [Community Detection](/algorithms/traditional-graph-analytics/community-detection.md)
### [Cycle Detection](/algorithms/traditional-graph-analytics/cycle-detection-algorithm.md)

### Graph Coloring
Certain applications require the special labeling of a graph called [graph coloring](/algorithms/traditional-graph-analytics/graph-coloring.md). This “special” labeling refers to the assignment of labels (which we call colors) in such a way that connected neighbors must not be given the same color.


### Maximum Flow
[Maximum Flow](/algorithms/traditional-graph-analytics/max-flow.md) problem in optimization theory regards finding the maximum possible flow going through a flow network from source to sink nodes. A flow network, or a transportation network, is a directed graph with edge weights representing flow capacity.


### [Node Similarity](/algorithms/traditional-graph-analytics/node-similarity-algorithm.md)

### PageRank
In the domain of centrality measurements, [PageRank](/algorithms/traditional-graph-analytics/pagerank.md) is arguably the most popular tool. Today, the most popular search engine in the world, Google, owes its popularity solely to this algorithm, developed in the early days by its founders.

### [Union Find](/algorithms/traditional-graph-analytics/union-find.md)


## Streaming Graph Analytics

### Dynamic Node2Vec
[Dynamic Node2Vec](/algorithms/dynamic-graph-analytics/node2vec-online-algorithm.md) is a random walk based method that creates embeddings for every new node added to the graph. For every new edge, there is a recalculation of probabilities (weights) that are used in walk sampling. 

### Dynamic PageRank
In the domain of estimating the importance of graph nodes, [PageRank](/algorithms/dynamic-graph-analytics/pagerank-online-algorithm.md) is arguably the most popular tool. Today, the most popular search engine in the world, Google, owes its popularity solely to this algorithm, developed in the early days by its founders. The need for its dynamic implementation arose at the moment when nodes and edges arrive in a short period of time. 

### Dynamic Community Detection
To address the hidden relations among the nodes in the graph, especially those not connected directly, [community detection](/algorithms/dynamic-graph-analytics/community-detection-online-algorithm.md) can provide help. This familiar graph analytics method is being solved in various different ways.

## Machine Learning Graph Algorithms

### [Graph Neural Networks (GNN)](/algorithms/machine-learning-graph-analytics/gnn-algorithm.md)
### [Graph Classification](/algorithms/machine-learning-graph-analytics/graph-classification-algorithm.md)
### [Link Prediction](/algorithms/machine-learning-graph-analytics/link-prediction-algorithm.md)
### [Node Classification](/algorithms/machine-learning-graph-analytics/node-classification-algorithm.md)
### [Node2Vec](/algorithms/machine-learning-graph-analytics/node2vec.md)
### [Graph Clustering](/algorithms/machine-learning-graph-analytics/graph-clustering-algorithm.md)

