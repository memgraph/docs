---
id: betweenness-centrality-algorithm
title: Betweenness Centrality
sidebar_label: Betweenness Centrality
---

## Description

Centrality analysis provides information about the node’s importance for an information flow or connectivity of the network. [Betweenness centrality](https://en.wikipedia.org/wiki/Betweenness_centrality) is one of the most used centrality metrics. Betweenness centrality measures the extent to which a node lies on paths between other nodes in the graph. Thus, nodes with high **betweenness** may have considerable influence within a network under their control over information passing between others. The calculation of betweenness centrality is not standardized, and there are many ways to solve it.

It is defined as the **number of shortest paths** in the graph that passes through the node divided by the total number of shortest paths. The implemented algorithm is described in the paper "[A Faster Algorithm for Betweenness Centrality](http://snap.stanford.edu/class/cs224w-readings/brandes01centrality.pdf)" by Ulrik Brandes of [University of Konstanz](https://www.uni-konstanz.de/en/).

## Materials

### Implementation

[![Betweenness Centrality](https://img.shields.io/badge/Betweenness_Centrality-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/betweenness-centrality)

[![Betweenness Centrality](https://img.shields.io/badge/Betweenness_Centrality-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/betweenness-centrality)

Betweenness Centrality is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

## Use cases

[![Social networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)


The measure betweenness centrality can be used on a macro and micro scale in social networks. On a macro scale, a high measure will indicate the position of power (due to the large flow of information). On the other hand, on a micro scale, a high measure represents the strength of a relationship with a narrow circle of friends.
