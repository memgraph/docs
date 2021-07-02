---
id: overview
title: Cypher manual
sidebar_label: Overview
slug: /
---

**Cypher** is the most widely adopted, fully-specified, and open query language for property graph databases.
It provides an intuitive way to work with property graphs.

## Getting started

Take a look at the following guides if you are new to the **Cypher** query language:
* **[Reading existing data](/getting-started/reading-existing-data.md)**
* **[Writing new data](/getting-started/writing-new-data.md)**
* **[Reading and writing](/getting-started/reading-and-writing.md)**

## Clauses

The **Cypher** language enables users to perform standard database operations by using the following clauses:
  * **[MATCH](/clauses/match.md)**, which searches for patterns;
  * **[WHERE](/clauses/where.md)**, for filtering the matched data;
  * **[RETURN](/clauses/return.md)**, for defining what will be presented to the user in the result set;
  * **[UNION](/clauses/union.md)** and **[UNION ALL](/clauses/union.md)** for combining results from multiple queries;
  * **[CREATE](/clauses/create.md)**, for creating new nodes and edges;
  * **[SET](/clauses/set.md)**, for adding new or updating existing labels and properties;
  * **[DELETE](/clauses/delete.md)**, for deleting nodes and edges;
  * **[REMOVE](/clauses/remove.md)**, for removing labels and properties;
  * **[MERGE](/clauses/merge.md)**, for creating patterns if they do not exist;
  * **[WITH](/clauses/with.md)**, for combining multiple reads and writes.

## Functions

**Cypher** supports a large number of functions. The list can be found here:
* **[Cypher functions](/functions.md)**

## Other features

The following sections describe some of the other supported features in Memgraph:
* **[String operators](/other-features.md#string-operators)**
* **[Parameters](/other-features.md#parameters)**
* **[CASE expression](/other-features.md#case)**
* **[Inspecting and profiling queries](/other-features.md#inspecting-and-profiling-queries)**

## Differences

Although we try to implement openCypher query language as closely to the
language reference as possible, we had to make some changes to enhance the
user experience. You can find the differences in **[this article](/differences.md)**.