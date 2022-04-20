---
id: algorithms
title: Graph algorithms
sidebar_label: Graph algorithms
---

## Traditional Graph Analytics

### Betweenness Centrality

Centrality analysis provides information about the node’s importance for an
information flow or connectivity of the network. [Betweenness
centrality](/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm.md)
measures the extent to which a node lies on paths between other nodes in the
graph.

### Biconnected Components

[Biconnected
components](/algorithms/traditional-graph-analytics/biconnected-components.md)
are parts of the graph important in the initial analysis. Finding biconnected
components means finding a maximal biconnected subgraph.

### Bipartite Matching

A bipartite graph is a graph in which we can divide vertices into two
independent sets, such that every edge connects vertices between these sets. No
connection can be established within the set. [Matching in bipartite
graphs](/algorithms/traditional-graph-analytics/bipartite-matching.md)
(bipartite matching) is described as a set of edges that are picked in a way to
not share an endpoint.

### Bridge Detection

As in the real world, the definition of a bridge in graph theory denotes
something that divides an entity into multiple components. Thus, more precisely,
the bridge in graph theory denotes an edge that, when removed, divides the graph
into two separate components. As the name suggests [Bridge
detection](/algorithms/traditional-graph-analytics/bridges-algorithm.md)
algorithm can be used to find bridges in graphs.

### Community Detection

The notion of community in a graph represents similarly to what it represents in
the real world. In graphs, community represents a partition of a graph, i.e., a
set of nodes. There are several different ways to approach [Community
detection](/algorithms/traditional-graph-analytics/community-detection-algorithm.md).

### Cycle Detection

In graph theory, a cycle represents a path within the graph where only starting
and ending nodes are similar. There are many implementations of [Cycle
detection](/algorithms/traditional-graph-analytics/cycle-detection-algorithm.md).
Cycles are not only popular in graph structures but also play an important role
in number theory and cryptography.

### Graph Coloring

Certain applications require the special labeling of a graph called [graph
coloring](/algorithms/traditional-graph-analytics/graph-coloring.md). This
“special” labeling refers to the assignment of labels (which we call colors) in
such a way that connected neighbors must not be given the same color.

### Katz Centrality

[Katz Centrality](/algorithms/traditional-graph-analytics/katz-centrality.md) is
the measurement of centrality that incorporates the inbound path length starting
from the wanted node. More central nodes will have closer connections rather
than having many long-distance nodes connected to them.

### Maximum Flow

The [Maximum Flow](/algorithms/traditional-graph-analytics/max-flow.md) problem
in optimization theory regards finding the maximum possible flow going through a
flow network from source to sink nodes. A flow network, or a transportation
network, is a directed graph with edge weights representing flow capacity.

### Node Similarity

The [similarity of graph
nodes](/algorithms/traditional-graph-analytics/node-similarity-algorithm.md) is
based on a comparison of adjacent nodes or the neighborhood structure. The
result of this type of algorithm is always a pair of nodes and an assigned value
indicating the match measure between them.

### PageRank

In the domain of centrality measurements,
[PageRank](/algorithms/traditional-graph-analytics/pagerank.md) is arguably the
most popular tool. Today, the most popular search engine in the world, Google,
owes its popularity solely to this algorithm, developed in the early days by its
founders.

### Union Find

By using a disjoint-set - a data structure that keeps track of non-overlapping
sets, the algorithm enables the user to quickly check whether a pair of given
nodes are in the same or different connected components. The implementation of
the disjoint-set data structure and its operations [uses the
union](/algorithms/traditional-graph-analytics/union-find.md) by rank and path
splitting optimizations.

## Streaming Graph Analytics

### Katz Centrality

The online [Katz
centrality](/algorithms/dynamic-graph-analytics/katz-centrality-online-algorithm.md)
implementation results in a reduction of computations needed to update already
calculated results. The algorithm offers substantially large speedups compared
to static algorithm runs.

### Dynamic Community Detection

To address the hidden relations among the nodes in the graph, especially those
not connected directly, [community
detection](/algorithms/dynamic-graph-analytics/community-detection-online-algorithm.md)
can provide help. This familiar graph analytics method is being solved in
various different ways.

### Dynamic Node2Vec

[Dynamic
Node2Vec](/algorithms/dynamic-graph-analytics/node2vec-online-algorithm.md) is a
random walk-based method that creates embeddings for every new node added to the
graph. For every new edge, there is a recalculation of probabilities (weights)
that are used in walk sampling.

### Dynamic PageRank

In the domain of estimating the importance of graph nodes,
[PageRank](/algorithms/dynamic-graph-analytics/pagerank-online-algorithm.md) is
arguably the most popular tool. Today, the most popular search engine in the
world, Google, owes its popularity solely to this algorithm, developed in the
early days by its founders. The need for its dynamic implementation arose at the
moment when nodes and edges arrive in a short period of time.

## Machine Learning Graph Algorithms

### Graph Neural Networks (GNN)

[Graph Neural Networks
(GNN)](/algorithms/machine-learning-graph-analytics/gnn-algorithm.md) are deep
learning methods that can perform inference on data that is located in graphs.

### Graph Classification

[Graph
classification](/algorithms/machine-learning-graph-analytics/graph-classification-algorithm.md)
allows you to analyze a graph as a whole. The structure and arrangement of nodes
can reveal some hidden features in a graph. The main technique is to design
features over the structure of the graph itself and then apply a classification
algorithm.

### Link Prediction

[Link
prediction](/algorithms/machine-learning-graph-analytics/link-prediction-algorithm.md)
is the process of predicting the probability of connecting the two nodes that
were not previously connected in a graph. A wide range of different solutions
can be applied to such a problem.

### Node Classification

Prediction can be done at the node level. The basis of such prediction systems
are features extracted from graph entities. [Node
classification](/algorithms/machine-learning-graph-analytics/node-classification-algorithm.md)
uses node properties that exist on some nodes and then predicts them for nodes
that don't have them.

### Node2Vec

[Node2Vec](/algorithms/machine-learning-graph-analytics/node2vec.md) is based on
random walks. The point of this method is to map nodes that are most likely to
be within a common random walk to the same place in n-dimensional space.

### Graph Clustering

In graph theory, [Graph
clustering](/algorithms/machine-learning-graph-analytics/graph-clustering-algorithm.md)
is used to find subsets of similar nodes and group them together.
