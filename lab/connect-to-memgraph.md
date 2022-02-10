---
id: connect-to-memgraph
title: Connect to Memgraph
sidebar_label: Connect to Memgraph
---

## Prerequisites

Before you proceed with the guide, make sure that you have either:

- Installed [**Memgraph Platform**](/memgraph/installation) and now have a
  running database instance and Memgraph Lab is running within the browser on
  `http://localhost:3000`, or
- Installed [**Memgraph DB**](/memgraph/installation) and [**Memgraph
  Lab**](/memgraph-lab/installation) and now have a running database instance
  and the Memgraph Lab desktop application

## Connecting to Memgraph

Make sure that Memgraph is running and open Memgraph Lab. If you are starting
with a fresh database instance, you don't have to change any of the options.

1. Leave the `Username` and `Password` fields **empty**.
2. The `Host` field can be either **`localhost`**, **`127.0.0.1`** or
   **`0.0.0.0`**.
3. The `Port` field should be **`7687`**. Every Memgraph instance is listening
   on this port by default.
4. The `Encrypted` option should be **disabled** and display `SSL Off` by
   default.

If you fail to connect, make sure that your database instance is up and running.
If the `Host` address is wrong, take a look at the [Docker
note](/memgraph/how-to-work-with-docker#docker-container-ip-address) in the
installation guide.

![Memgraph Lab](./data/getting-started/memgraph-lab-login.png)

## Executing queries

Now, you can execute Cypher queries on Memgraph. Open the **Query** tab, located
in the left sidebar, copy the following query and press the **Run query**
button:

```cypher
CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});
```

The query above will create 2 nodes in the database, one labeled "User" with
name "Alice" and the other labeled "Software" with name "Memgraph". It will also
create a relationship that "Alice" _likes_ "Memgraph".

To find created nodes and relationships, execute the following query:

```cypher
MATCH (u:User)-[r]->(x) RETURN u, r, x;
```

## Where to next?

To learn more about the **Cypher** language, visit the **[Cypher
manual](/cypher-manual)** or **[Memgraph
Playground](https://playground.memgraph.com/)** for interactive guides. For
real-world examples of how to use Memgraph, we strongly suggest going through
one of the available **[Tutorials](/memgraph/tutorials)**. Details on what can
be stored in Memgraph can be found in the article about **[Data
storage](/memgraph/concepts/storage)**.

## Getting help

Visit the **[Help Center](/help-center)** page in case you run into any kind of
problem, or you have additional questions.
