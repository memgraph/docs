---
id: katz-centrality-online-algorithm
title: Dynamic Katz Centrality
sidebar_label: Dynamic Katz Centrality
---

## Description

Because of its simplicity, **Katz Centrality** has become one of the most
established centrality measurements. The definition of Katz centrality is that
it presents the amount of influence by summing all walks starting from the node
of interest and weighting walks by some attenuation factor smaller than 1.

Many of today's real-world networks evolve at a great pace over time. The
constant change of information leads to the dynamic environment and creation of
methods that can handle a large amount of data and provide quick results on
updates.

<img src="https://i.imgur.com/9GUIJ42.png" alt="drawing"/>

> Visualization of the Katz centrality progression through time. Warmer colored
> nodes represent the higher values for Katz centrality measurement.

The explanation of **Dynamic Katz Centrality** is presented in the paper by
[**Alexander van der Grinten et. al.**](https://dblp.org/pid/136/6023.html) and
[Twitter](https://twitter.com/home?lang=en). The paper is worth reading at
[Scalable Katz Ranking Computation in Large Static and Dynamic
Graphs](hhttps://arxiv.org/pdf/1807.03847.pdf).

## Materials

### Implementation

[![Dynamic Katz
Centrality](https://img.shields.io/badge/Dynamic_Katz_Centrality-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/katz_centrality_module/katz_centrality_online_module.cpp)

[![Dynamic Katz
Centrality](https://img.shields.io/badge/Dynamic_Katz_Centrality-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/katz-centrality-online)

**Dynamic Katz Centrality** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

## Use cases

[![Social
networks](https://img.shields.io/badge/Social_networks-Application-8A477F?style=for-the-badge)](/use-cases/social-media.md)

The best fit for dynamic Katz centrality is social network analysis. The
importance and decay of walk propagation are intuitively similar to the message
propagation in social networks. To work with the scale of today's social
networks like [Twitter](https://twitter.com/?lang=en), dynamic algorithm
implementations need to be used. The Katz centrality algorithm performs on a
similar level of precision in determining influence when compared to human
experts in the field.
