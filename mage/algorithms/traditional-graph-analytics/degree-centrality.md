---
id: degree-centrality-algorithm
title: Degree Centrality
sidebar_label: Degree Centrality
---

## Description

**Degree Centrality** is a method for estimating the centrality of graph 
entities.
It is a simple centrality measure that counts how many neighbors a node has. 
For a directed graph, we have two versions of the measure: in-degree and 
out-degree.
In-degree counts the number of incoming edges, and out-degree counts the number
of outgoing edges.

Usually, applications are more interested in in-degree measure, since incoming
edges stem from other nodes in a graph. Degree centrality can be used for any
centrality use-case, such as social network or citation network analysis.
For some use-cases there are other, more complex centrality measures such as
[Beetweenness Centrality](https://memgraph.com/docs/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm).

<img src="https://i.imgur.com/hHJkvWw.png" alt="drawing1" width="600"/>
<img src="https://i.imgur.com/kbX3FKZ.png" alt="drawing2" width="600"/>


> Example of Degree Centrality - picture 1 shows in-degree centrality while 
> picture 2 shows out-degree centrality
## Materials

### Implementation

[![Degree
Centrality](https://img.shields.io/badge/Degree_Centrality-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/degree_centrality_module/algorithm/degree_centrality_module.cpp)

[![Degree
Centrality](https://img.shields.io/badge/Degree_Centrality-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/degree-centrality)

**Degree Centrality** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

## Use cases

[![Internet](https://img.shields.io/badge/Internet-Application-8A477F?style=for-the-badge)](/use-cases/telecommunication.md)

Like other centrality measurements, Degree Centrality can be used to rank the
elements on the World Wide Web. The results wouldn't be as refined as the ones
obtained with PageRank or other, more complex centrality measures.
