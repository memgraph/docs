---
id: katz-centrality-algorithm
title: Katz Centrality
sidebar_label: Katz Centrality
---

## Description

**Katz Centrality** is a method for estimating the centrality of graph entities.
As with any other centrality measurement, this one also outputs the measurement
of how central the node is compared to the other nodes in the graph. The main
difference in the **Katz Centrality** when compared to the other centrality
measurements is the fact that the ranking of this method depends on the decay
factor related to the length of paths emerging from the node `i`. Walks of
shorter length are valued at an exponentially higher value than longer paths.

Some applications of real-life usage of **Katz Centrality** include the analysis
of citation networks, social networks or the world wide web for searching engine
prioritization. **Katz Centrality** doesn't offer the substitution for any
centrality algorithm but rather a different approach. Depending on the use case,
users should determine whether this is the right measurement for them.

<img src="https://i.imgur.com/MnoO7bp.png" alt="drawing" width="600"/>

> Example of Katz Centrality - the warmer colors represent the higher values of
> centrality. It's visible that the nodes with higher centrality have a large
> number of close connections.

## Materials

### Implementation

[![Katz
Centrality](https://img.shields.io/badge/Katz_Centrality-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/katz_centrality_module/katz_centrality_module.cpp)

[![Katz
Centrality](https://img.shields.io/badge/Katz_Centrality-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/katz-centrality)

**Katz Centrality** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

## Use cases

[![Internet](https://img.shields.io/badge/Internet-Application-8A477F?style=for-the-badge)](/use-cases/telecommunication.md)

Like other centrality measurements, Katz Centrality can be used to rank the
elements on the World Wide Web. The results wouldn't be as refined as the ones
obtained with PageRank.

[![Pharmaceutical](https://img.shields.io/badge/Pharmaceutical-Application-8A477F?style=for-the-badge)](/use-cases/drug-discovery.md)

Because of its properties of putting emphasis on closer nodes, Katz centrality
can be used in neuroscience for the discovery of correlations between firing
neurons. Identification of such processes can help in understanding the
complexity behind these non-trivial mechanisms.
