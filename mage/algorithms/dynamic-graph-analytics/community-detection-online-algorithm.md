---
id: community-detection-online-algorithm
title: Dynamic Community Detection
sidebar_label: Dynamic Community Detection
---

## Description
To address the hidden relations among the nodes in the graph, especially those not connected directly, [community detection](https://en.wikipedia.org/wiki/Community_structure) can come in help. This familiar method of graph analytics is being solved in various different ways. However, demand for scale and speed has increased over the years and therefore led to construction of **dynamic community detection**.  To leverage the needs for scalability and speed, community detection lends itself well to dynamic operation for two reasons:

- Complexity: algorithms often have high time complexity that scales with the number of nodes in the network
- Locality: community changes tend to be local in scope after partial updates.

Academic research of temporal graphs yielded [LabelRankT: Incremental Community Detection in Dynamic Networks via Label Propagation](https://arxiv.org/abs/1305.2006) (Xie et al.).

<img src="https://i.imgur.com/NiQi7NW.png" alt="drawing"/>

> Illustration of how does a dynamic community detection algorithm adapts to local change

## Materials

### Implementation

[![Dynamic Community Detection](https://img.shields.io/badge/Dynamic_Community_Detection-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/cpp/dynamic_community_detection_module/dynamic_community_detection_module.cpp)

[![Dynamic Community Detection](https://img.shields.io/badge/Dynamic_Community_Detection-Documentation-FCC624?style=for-the-badge&logo=cplusplus&logoColor=white)](/mage/query-modules/cpp/community-detection-online)

**Dynamic Community Detection** is implemented within the project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

### Blog post

// TODO

## Use cases

Graphs that describe real-life networks show community structure often. This insight applies to use cases such as customer segmentation, contact tracing, medical diagnostics, and quantification of environmental hazards in public health.

[![Medical](https://img.shields.io/badge/Medical-Application-8A477F?style=for-the-badge)](/mage/applications/drug-discovery-application)

Tracking the evolution of communities across time provides a way to monitor entities such as viruses or rumors in real-time as they spread. With the COVID-19 pandemic being a top global concern, this problem is in search of a solution. One way to tackle it would be to pinpoint the main transmission focal points by using dynamic community detection.

[![Retail](https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge)](/mage/applications/retail-application)

With new items being sold every day, using dynamic community detection one can quickly follow the trends that are being formed and submit recommendations based on trends within a community. This approach enables the seller to adapt more flexibly to unexpected events.
