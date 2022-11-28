---
id: traditional-graph-analytics
title: Traditional Graph Analytics
sidebar_label: Traditional Graph Analytics
slug: /algorithms/traditional-graph-analytics
---

## Traditional Graph Analytics

The first thing someone should focus on when working with graphs is getting deep analytics of the current state. That is what following list provides.
By using the power of MAGE's query modules, various different graph properties are extracted. 

This list provides possible graph analytics to run on top of graph. Whether you want to run graph analytics on
subgraph or graph, choice is yours.

### [Betweenness Centrality](/mage/query-modules/cpp/betweenness-centrality)
* measures the extent to which a node lies on paths between other nodes in the graph

### [Biconnected Components](/mage/query-modules/cpp/biconnected-components)
*  bioconnected component of a graph is a connected subgraph that cannot be broken into disconnected pieces by deleting any single node

### [Bipartite Matching](/mage/query-modules/cpp/bipartite-matching)
* graph in which we can divide vertices into two independent sets

### [Bridges](/mage/query-modules/cpp/bridges)
* the definition of a bridge in graph theory denotes something that divides an entity into components

### [Community Detection](/mage/query-modules/cpp/community-detection)
* A graph community can be defined as a partition of a graph. Within a community, nodes are more strongly connected (more edges) to one another than to nodes in different communities.

### [Cycles](/mage/query-modules/cpp/cycles)
* cycle represents a path within the graph where only starting and ending nodes are similar

### [Degree Centrality](/mage/query-modules/cpp/degree-centrality)
* a method for estimating the centrality of graph entities

### [Graph Coloring](/mage/query-modules/python/graph-coloring)
* refers to the assignment of labels (which we call colors) in such a way that connected neighbors must not be given the same color

### [Katz Centrality](/mage/query-modules/cpp/katz-centrality)
* outputs the measurement of how central the node is compared to the other nodes in the graph. Ranking of this method depends on the decay factor related to the length of paths emerging from the node `i`

### [Max Flow](/mage/query-modules/python/max-flow)
* maximum possible flow going through a flow network from source to sink nodes

### [PageRank](/mage/query-modules/cpp/pagerank)
* a measure of influence that can be used on a variety of applications (Google used it mostly  for ranking pages)

### [Weekly Connected Components](/mage/query-modules/cpp/weakly-connected-components)
* searches for different components of the graph. Within components, nodes have connections toward each other, while between components there is no edge that connects nodes from separate components.

