---
id: relational-to-graph
title: Modeling Relational Data as a Graph
sidebar_label: Relational -> Graph
---

### Relational Data Models

Relational databases store related data in two-dimensional tables of columns and
rows. They rely upon index lookups and table joins to connect different tables.
Quickly, this becomes a problem for performance because of the large number of
data tables that need to be connected via table joining. A *JOIN* operation is
calculated at query time and it is a compute-heavy and memory-intensive
operation with an exponential cost.

### Graph Data Models

In graph data models, relationships between nodes are of equal importance in the
graph data model as the data itself. There is no need for creating connections
using special properties such as foreign keys. The data stays in a small, but
highly connected form. Each node in the model contains a list of relationship
records that represent the connections to other nodes. This list decreases the
time needed to access the nodes and eliminates the need for costly search
computations. A graph model is a representation of a clear domain model, focused
on the use case it’s intended for.


### Tips for Data Model Transformation

When transforming a relational data model into a graph data model, it is
important to take a note of the key components of each model. Following list
should help you with the transformation:

* Table to Label - each entity table becomes a label on nodes in the graph model
* Row to Node - each row in a table becomes a node in the graph
* Column to Node Property - columns on the relational table turn into node
  properties
* Primary Keys Only - keep important primary keys, like IDs
* Foreign Keys to Relationships - replace foreign keys to the other table with
  relationships
* Join tables to Relationships - transform join tables into relationships.
  Additional columns turn into relationship property
* Index Columns to Array - indexed column names (like language1, language2, ...
  , languageN) indicates an array property.
* Clean up data - remove duplicate data, remove data with default values
