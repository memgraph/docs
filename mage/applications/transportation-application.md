---
id: transportation-application
title: Transportation
sidebar_label: Transportation
---

## Introduction

Driving down the roads may seem like a simple task, but almost all cars and
trains, as well as boats and airplanes are being navigated by some kind of
navigation system. We use those systems for personal navigation every day too.
Graphs are used for modeling and navigating complex network problems, such as
**transportation network**.

![memgraph-graph-algorithm-applications-transportation](../data/applications/memgraph-graph-algorithm-applications-transportation.png)

### Navigation

Pathfinding algorithms are one of the classical graph problems and have been
researched since the 19th century. The **shortest path** algorithm calculates a path
between two nodes in a graph such that the total sum of the edge weights is
minimized. A navigation system that always navigates you down the shortest routes
and makes your trip as fast as possible can be created using the shortest path
algorithm.

### Airline

When travelling from one airport to another, airplanes use specific locations to
navigate in the sky. These locations are called waypoints and are defined by
their coordinates. Modern airplanes track these waypoints using radionavigation
systems such as GPS or VOR. Both airports and waypoints, like many other
aviation elements, have unique ICAO code names, and as such can be represented
by nodes of a graph. If you’re not familiar with graphs and graph concepts, you
can learn more about them here. 

In short, graphs are structures built from nodes
that represent entities and relationships that represent the connections between
them. With that in mind, it’s obvious that airports and waypoints can be
different nodes, and the airways between them can be the relationships. The
standard abbreviations for airports and waypoints are ARP and WPT, respectively,
and in the following examples we will use them to define the types of our nodes.

### Detecting congestion

Real-time road congestion detection can improve traffic safety and route
planning. If we put all data into a graph database and use **streaming graph
algorithms**, we can detect road congestion.

## Where to next?

This text is a **summary** of one area that fits perfectly with the application
of graphs. Therefore, we would like to have you with us when **implementing**
some of these solutions. Share **opinions**, **experiences** and **problems**
you encounter when working with **Memgraph** on our [Discord
server](https://discord.gg/memgraph). We are here for you and we will help you
along the way.