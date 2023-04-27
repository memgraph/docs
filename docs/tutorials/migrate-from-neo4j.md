---
id: migrate-from-neo4j
title: Migrate from Neo4j to Memgraph
sidebar_label: Migrate from Neo4j
---

Memgraph is a native in-memory graph database specialized for real-time use-cases such us streaming, analytical processing etc. It is compatible with the Cypher query language and the Neo4j Bolt protocol. This means that you can use the same tools and drivers that you are already using with Neo4j. Due to the ACID compliance, data persistency and replication support in community version, Memgraph can be used as main database for your applications, instead of Neo4j. There are some differences between Memgraph and Neo4j, from the operational side and the query language side. This tutorial will help you migrate your data from Neo4j to Memgraph and provide a bit more general strategies for migrating data from one graph database to another.


## Prerequisites

To follow this tutorial, you will need to have the following:

- Running empty Memgraph instance 
- Running Neo4j instance with your data


## Data migration 

If you have stumbled upon the [blog post on migrating from Neo4j to Memgraph](https://memgraph.com/blog/how-to-migrate-from-neo4j-to-memgraph)