---
id: cycle-detection-algorithm
title: Cycle Detection
sidebar_label: Cycle Detection
---

## Abstract

In graph theory, a cycle represents a path within the graph where only starting and ending nodes are similar. 
Furthermore, cycles can be double-connected links between neighboring nodes or self-loops. 

Image of cycle by Author

## Implementation
[![Cycle detection](https://img.shields.io/badge/Cycle_Detection-Documentation-FCC624?style=for-the-badge&logo=c%2B%2B&logoColor=white)](/mage/query-modules/cpp/cycles)

We have [implemented already our cycle detection algorithm](https://memgraph.com/docs/mage/query-modules/cpp/cycles), be sure to check it out :muscle:

## Possible applications
Really interesting use case deployed in one of the vendors is used to actively monitor various 
online fraudalent activites based on cycle detection. Why do they use cycle detection? :smiley:

In order to increase the popularity of their brand and to improve future sales, seller might create fake transactions to
artificially bump up the number of past transactions. Of course, this is unwanted behaviour so every vendor will try
to prevent it.

For more research on this topic be sure to check following link down below:
* [![Cycle detection](https://img.shields.io/badge/Real_time_Constrained_Cycle_Detection_in_Large_Dynamic_Graphs-FCC624?style=for-the-badge)](http://www.vldb.org/pvldb/vol11/p1876-qiu.pdf)

