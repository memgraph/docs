---
id: cycle-detection-algorithm
title: Cycle Detection
sidebar_label: Cycle Detection
---

## Description

In graph theory, a cycle represents a path within the graph where only starting
and ending nodes are similar. Furthermore, cycles can be double-connected links
between neighboring nodes or self-loops.

The simplest concept of a solution for finding a cycle was defined by [Robert W.
Floyd](https://en.wikipedia.org/wiki/Robert_W._Floyd) in his [tortoise and hare
algorithm](https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_tortoise_and_hare),
where a hare moves at twice the speed of a tortoise and thus encounters it if
there is a cycle. There are many implementations of cycle detection, and among
them, the fastest is Professor [Donald B.
Johnson](https://en.wikipedia.org/wiki/Donald_B._Johnson) from the  Pennsylvania
State University - [Finding all the elementary circuits of a directed
graph](https://www.cs.tufts.edu/comp/150GA/homeworks/hw1/Johnson%2075.PDF).

<img src="https://i.imgur.com/iXhgfAN.png" alt="drawing"/>

> There are two cycles in the graph from the examples, each colored differently.

Cycles are not only popular in graph structures but also play an important role
in number theory and cryptography. Nevertheless, graph theory concepts are used
in other disciplines, and cycle detection is placed as an extremely important
tool in initial graph analysis.

## Materials
### Implementation
[![Cycles
detection](https://img.shields.io/badge/Cycles_detection-Implementation-FB6E00?style=for-the-badge&logo=github&logoColor=white)](https://github.com/memgraph/mage/blob/main/cpp/cycles_module/cycles_module.cpp)

[![Cycle
detection](https://img.shields.io/badge/Cycle_Detection-Documentation-FCC624?style=for-the-badge&logo=c%2B%2B&logoColor=white)](/mage/query-modules/cpp/cycles)

**Cycle detection** is implemented as part of the
[**MAGE**](https://github.com/memgraph/mage) project. Be sure to check it out in
the link above. :point_up:

## Use cases

[![Retail](https://img.shields.io/badge/Retail-Application-8A477F?style=for-the-badge)](/mage/applications/computer-security-application)

A really interesting use case deployed in one of the vendors is used to actively
monitor various online fraudulent activities based on cycle detection. To
increase the popularity of their brand and to improve future sales, the seller
might create fake transactions to artificially bump up the number of past
transactions. Of course, this is unwanted behavior, so every vendor will try to
prevent it.

