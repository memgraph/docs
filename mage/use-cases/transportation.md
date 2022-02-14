---
id: transportation
title: Transportation
sidebar_label: Transportation
---

## Introduction

Driving down the roads may seem like a simple task, but some kind of navigation
system is navigating almost all cars and trains, as well as boats and airplanes.
We use those systems for personal navigation every day too. Graphs are used for
modeling and navigating complex network problems, such as **transportation
network**.

![memgraph-graph-algorithm-applications-transportation](../data/use-cases/memgraph-graph-algorithm-applications-transportation.png)

### Navigation

Pathfinding algorithms are one of the classical graph problems and have been
researched since the 19th century. The **shortest path** algorithm calculates a
path between two nodes in a graph such that the total sum of the edge weights is
minimized. A navigation system that always navigates you down the shortest
routes and makes your trip as fast as possible can be created using the shortest
path algorithm.

### Airline

When traveling from one airport to another, airplanes use specific locations to
navigate in the sky. These locations are called waypoints and are defined by
their coordinates. Modern airplanes track these waypoints using radio navigation
systems such as GPS or VOR. Like many other aviation elements, both airports and
waypoints have unique ICAO code names, and as such, can be represented by nodes
of a graph. Airports and waypoints can be different nodes, and the airways
between them can be the relationships.

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
