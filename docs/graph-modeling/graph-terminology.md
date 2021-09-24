---
id: graph-terminology
title: Graph terminology
sidebar_label: Graph terminology
---

To fully utilize the power of graphs, you first need to get a basic
understanding of the underlying concepts in graph theory.

**Graphs** are essentially very simple structures that map relations between
objects. These objects are referred to as nodes and the connections between them
as edges. Keep in mind that there are other terms like:
* **node == vertex == point**
* **edge == relationship == link**

People often use the terms graph and tree interchangeably but graphs are a
superset of trees. Graphs, for example, can have cycles while trees can't. A
**cycle** means that there is only one way to go to a node by following edges
from another node.

* **Undirected and Directed Graphs** - In an undirected graph, the edges have no
  orientation. These edges are sometimes referred to as **bi-directional**. The
  edges in a directed graph have an orientation.

<img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Undirected.svg"
width="250"/> <img
src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Directed.svg"
width="250" />

* **Weighted And Unweighted Graphs**  - A weighted graph has attributes on its
  edges that specify their weight. For example, an edge that represents the
  distance between two cities would have this distance stored as an edge
  attribute. Unweighted graphs have no such edge attributes and are sometimes
  referred to as **Non-Weighted Graphs**.

<img
src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Shortest_path_with_direct_weights.svg"
width="400"/>

The four main types of graphs that you will see throughout this and other
tutorials are:

* **Graph** - An undirected graph with self-loops.
* **DiGraph** - A directed graph with self-loops.
* **MultiGraph** - An undirected graph with self-loops and parallel edges.
* **MultiDiGraph** - A directed graph with self-loops and parallel edges.

A **self-loop** (also called a loop or a buckle) is an edge that connects a
vertex to itself while **parallel edges** (also called multiple edges or a
multi-edge) are two or more edges that are incident to the same two nodes.
