---
id: migrate-from-neo4j
title: Migrate from Neo4j to Memgraph
sidebar_label: Migrate from Neo4j
---

Memgraph is a native in-memory graph database specialized for real-time use-cases such us streaming, analytical processing etc. It is compatible with the Cypher query language and the Neo4j Bolt protocol. This means that you can use the same tools and drivers that you are already using with Neo4j. Due to the ACID compliance, data persistency and replication support in community version, Memgraph can be used as main database for your applications, instead of Neo4j. There are some differences between Memgraph and Neo4j, from the operational side and the query language side. This tutorial will help you migrate your data and queries from Neo4j to Memgraph and provide general strategies for migrating from one graph database to another.


## Prerequisites

To follow this tutorial, you will need to have the following:

- Running Neo4j instance with your data
- Running empty Memgraph instance 

## Data format

One of the first steps to consider is how to migrate your data. If you have your
data in the form of Cypher queries or CSV or JSON format, you can import these
formats into Memgraph. Keep in mind that for importing larger datasets it is
recommended to use CSV or pure Cypher queries (Memgraph's CYPHERL format), since
they have native Memgraph integrations, and are faster than JSON.

This tutorial will go through exporting data from Neo4j into CSV files and
exporting it into Memgraph. 

The current dataset in Neo4j consists of 3 different kinds of nodes (Employee,
Order and Product) connected with 3 types of relationships as described by the
graph schema below: 

[GRAPH SCHEMA]

### Exporting data from Neo4j

In order to get your data out of Neo4j instance you need to used the Neo4j APOC export functionality. Neo4j supports several different export formats, as mentioned previously in the ideal case you would export the data in CSV, Cypherl or JSON format. 


### Importing data into Memgraph

####


## Query migration



If you have stumbled upon the [blog post on migrating from Neo4j to Memgraph](https://memgraph.com/blog/how-to-migrate-from-neo4j-to-memgraph)