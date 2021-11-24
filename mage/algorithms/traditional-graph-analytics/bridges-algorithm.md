---
id: bridges-algorithm
title: Bridge Detection
sidebar_label: Bridge Detection
---

## Description

As in the real world, the definition of a bridge in graph theory denotes something that divides an entity into multiple components. Thus, more precisely, the [bridge](https://en.wikipedia.org/wiki/Bridge_(graph_theory)) in graph theory denotes an edge which, when removed, divides the graph into two separate components.

// TODO: Photo

This algorithm is frequent as part of the initial graph analysis. It talks a lot about the connection itself and reveals, depending on the domain, the points of the graph that connect the different components. The first [linear algorithm](https://www.thealgorists.com/Algo/GraphTheory/Tarjan/Bridges) for finding bridges within a graph was written in 1974 by [Robert Tarjan](https://en.wikipedia.org/wiki/Robert_Tarjan). You can find more about him at the following link.

## Materials

### Implementation

[![Bridges](https://img.shields.io/badge/Bridges-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](/mage/query-modules/cpp/bridges)

[![Bridges](https://img.shields.io/badge/Bridges-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/bridges)

**Bridges Detection** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

## Use cases

[![Transport industry](https://img.shields.io/badge/Transport_industry-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

In the transport industry, the application of the bridge recognition algorithm is intuitive. By analogy with the real world, bridges are key points of traffic and their functioning is essential to the functioning of any city.

Traffic planning will always involve looking for bottleneck points that will connect more components and thus help build a better infrastructure.

[![Internet Networks](https://img.shields.io/badge/Internet_Network-Application-8A477F?style=for-the-badge)](/mage/query-modules/python/node-similarity)

Just like the previous example, Internet networks are organized similarly to a transport network, and as such contain bottlenecks that are bridges to that big graph. Such points need to be strengthened with excellent infrastructure, which will prevent the possibility of unexpected system crashes.
