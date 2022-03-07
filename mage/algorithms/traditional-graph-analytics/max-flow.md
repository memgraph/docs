---
id: maximum-flow-algorithm
title: Maximum Flow
sidebar_label: Maximum Flow
---

## Description

Maximum Flow problem in optimization theory regards finding the **maximum
possible flow** going through a flow network from source to sink nodes. A **flow
network**, or a transportation network, is a directed graph with edge weights
representing flow capacity. The incoming flow must equal outgoing flow for every
node, except the source and sink nodes. Such networks can be used to model
computer networks, fluids in pipes, currents in an electrical circuit, road and
railway networks.

Having a variety of applications, max flow can be used for maximum matching,
edge-disjoint paths and node-disjoint paths, to name a few. The max-flow min-cut
theorem states that having found a maximum flow of a graph, we can also find its
minimum cut.

Multiple algorithms exist for solving the Maximum Flow problem, such as the
Ford-Fulkerson method, Edmonds-Karp and push-relabel algorithm.

<img src="https://i.imgur.com/XusgGt2.png" alt="drawing"/>

> Example of augmenting paths in max flow with edge property -> {flow /
> capacity}, max flow is 19, the sum of inflows to sink (or outflows from
> source)

## Materials

### Implementation

[![Maximum
Flow](https://img.shields.io/badge/Maximum_Flow-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/python/max_flow.py)

[![Maximum
Flow](https://img.shields.io/badge/Maximum_Flow-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/python/max-flow)

**Maximum Flow** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:
