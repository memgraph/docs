---
id: cycle-detection-algorithm
title: Cycle Detection
sidebar_label: Cycle Detection
---

## Abstract

In graph theory, a cycle represents a path within the graph where only starting and ending nodes are similar.
Furthermore, cycles can be double-connected links between neighboring nodes or self-loops.

The simplest concept of a solution for finding a cycle was defined by [Robert W. Floyd](https://en.wikipedia.org/wiki/Robert_W._Floyd) in his [turtoise and hare algorithm](https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_tortoise_and_hare), where a hare moves at twice the speed of a turtoise and thus encounters it if there is a cycle. There are many implementations of cycle detection, and among them the fastest is Professor's [Donald B. Johnson](https://en.wikipedia.org/wiki/Donald_B._Johnson) from the  Pennsylvania State University - [Finding all the elementary circuits of a directed graph](https://www.cs.tufts.edu/comp/150GA/homeworks/hw1/Johnson%2075.PDF).

// TODO Image of cycle by Author

Cycles are not only popular in graph structures, but also play an important role in number theory and cryptography. Nevertheless, graph theory concepts are used in other disciplines and cycle detection is placed as an extremely important tool in initial graph analysis.

## Implementation
[![Cycle detection](https://img.shields.io/badge/Cycle_Detection-Documentation-FCC624?style=for-the-badge&logo=c%2B%2B&logoColor=white)](/mage/query-modules/cpp/cycles)

**Cycle detection** is implemented within project [**MAGE**](https://github.com/memgraph/mage). Be sure to check it out in the link above. :point_up:

## Use cases
Really interesting use case deployed in one of the vendors is used to actively monitor various
online fraudalent activites based on cycle detection. Why do they use cycle detection? :smiley:

In order to increase the popularity of their brand and to improve future sales, seller might create fake transactions to
artificially bump up the number of past transactions. Of course, this is unwanted behaviour so every vendor will try
to prevent it.

For more research on this topic be sure to check following link down below:
* [![Cycle detection](https://img.shields.io/badge/Real_time_Constrained_Cycle_Detection_in_Large_Dynamic_Graphs-FCC624?style=for-the-badge)](http://www.vldb.org/pvldb/vol11/p1876-qiu.pdf)

