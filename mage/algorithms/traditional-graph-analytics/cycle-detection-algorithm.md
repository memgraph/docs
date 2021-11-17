---
id: cycle-detection-algorithm
title: cycle-detection-algorithm
sidebar_label: cycle-detection-algorithm
---

## Abstract

In graph theory, a cycle represents a path within the graph where only starting and ending nodes are similar. Furthermore, cycles can be double-connected links between neighboring nodes or self-loops. The cycles detection algorithm implemented within MAGE works on an undirected graph and has **no guarantee** of node order in the output. The implemented algorithm (Gibb) is described in the 1982 MIT report called "[Algorithmic approaches to circuit enumeration problems and applications](http://hdl.handle.net/1721.1/68106)" [^1]. The problem is not solvable in polynomial time. It is based on finding all subsets of fundamental cycles which takes about O(2^(|E|-|V|+1)) time where E represents a set of edges and V represents a set of vertices of the given graph.

[^1] [Algorithmic approaches to circuit enumeration problems and applications](http://hdl.handle.net/1721.1/68106), Boon Chai Lee

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |
