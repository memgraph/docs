---
id: cycle-detection-algorithm
title: cycle-detection-algorithm
sidebar_label: cycle-detection-algorithm
---

## Abstract

In graph theory, a cycle represents a path within the graph where only starting and ending nodes are similar. 
Furthermore, cycles can be double-connected links between neighboring nodes or self-loops. 

Image of cycle by Author

## Implementation
We have [implemented already our cycle detection algorithm](https://memgraph.com/docs/mage/query-modules/cpp/cycles), be sure to check it out :muscle:


## Possible applications
One of really fascinating examples deployed in **Alibaba** is the **GraphS** algorithm used to actively monitor various 
online fraudalent activites based on cycle detection. Why do they use cycle detection? :smiley:

In order to increase the popularity of their brand and to improve future sales, fake transactions are placed to
artificially bump up the number of past transactions.

For more research on this topic be sure to check following paper:
[Real-time Constrained Cycle Detection in Large Dynamic Graphs](http://www.vldb.org/pvldb/vol11/p1876-qiu.pdf)
