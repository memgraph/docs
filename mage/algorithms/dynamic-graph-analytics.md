---
id: streaming-graph-analytics
title: Streaming Graph Analytics
sidebar_label: Streaming Graph Analytics
slug: /algorithms/streaming-graph-analytics
---

## Streaming Graph Analytics

To learn more about stream processing, jump to tutorial which covers [stream processing with Kafka](/memgraph/tutorials/graph-stream-processing-with-kafka).
**MAGE** provides support for multiple streaming graph analytics algorithms. Click on each algorithm to explore
how to set it up, and run it.


### [Dynamic PageRank](/mage/query-modules/cpp/pagerank-online)
* streaming version of PageRank. PageRank is algorithm for measuring of node's influence that can be used on a variety of applications (Google used it mostly  for ranking pages)

### [Dynamic Betweenness Centrality](/mage/query-modules/cpp/betweenness-centrality-online)
* measures the extent to which a node lies on paths between other nodes in the graph in streaming use-case.

### [Dynamic Katz Centrality](/mage/query-modules/cpp/katz-centrality-online)
* outputs the measurement of how central the node is compared to the other nodes in the graph. Ranking of this method depends on the decay factor related to the length of paths emerging from the node `i`.

### [Dynamic Community Detection](/mage/query-modules/cpp/community-detection-online)
* A graph community can be defined as a partition of a graph. Within a community, nodes are more strongly connected (more edges) to one another than to nodes in different communities. Algorithm provides
streaming version of community detection.

### [Dynamic Node2Vec](/mage/query-modules/python/node2vec-online)
* provides low-level embeddings for graph nodes in streaming use-case
