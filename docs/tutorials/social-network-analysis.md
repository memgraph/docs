---
id: social-network-analysis
title: Social network analysis with NetworkX
sidebar_label: Social network analysis with NetworkX
---

## Introduction

In this tutorial, we will show you how to perform a simple network analysis with
the NetworkX library and data stored in Memgraph. You will also acquire a basic
understanding of **query modules**, an easy method for extending the query
language with user-written procedures.

To get started, please install Memgraph using the `memgraph-platform` image by
following the [installment instructions](/installation/overview.md) for your OS.

Once Memgraph is up and running, there are three ways to execute queries and
procedures in Memgraph:

- using **Memgraph Lab**, a visual user interface that you can use from your
  browser at `http://localhost:3000` or [download as an
  application](https://memgraph.com/product/lab)
- using the command-line tool [`mgconsole`](/connect-to-memgraph/mgconsole.md)
- using [drivers](/connect-to-memgraph/drivers/overview.md) and the Bolt
  protocol

For this tutorial, you are going to need **Memgraph Lab** to import the dataset
and then you can query it either with Memgraph Lab or with mgconsole. We used
the results from the command-line tool mgconsole because of the format.

## Data model

We are going to use the Karate Club graph, a network of friendships between 34
members of a karate club at a US university, as described by Wayne Zachary in
1977. It is a very popular data set in social network analysis and is very often
referenced in such tutorials. The nodes in the graph represent the members while
the relationships between them are of type `FRIENDS_WITH`. You can differentiate
the nodes by using their unique `id` property.

<img
src="https://raw.githubusercontent.com/g-despot/images/master/karate_club.png"
alt="Karate club" style={{height: 400}} />

## Import the dataset

To import the dataset, open Memgraph Lab and navigate to the _Datasets_ tab in
the sidebar. From there, load the `Karate club friendship network` dataset, wait
for the import to finish, move to the _Query_ tab or mgconsole and continue with
the tutorial.

## Use existing NetworkX algorithms

Execute the following command to get all the relationships inside our network:

```cypher
MATCH (s)-[r]-(t)
RETURN s, r, t;
```

Now we have a better overview of what we are dealing with, so it’s time to get
some useful information about the network.

To analyze the network we will use the built-in procedure `analyze()` from the
`graph_analyzer` query module. This module utilizes the NetworkX library to
retrieve graph information. Run the following query:

```cypher
CALL graph_analyzer.analyze() YIELD *;
```

You will get details about the graph, such as the number of nodes, edges,
bridges and many more.

### Betweenness centrality

Now let's try to find the betweenness centrality of a node, i.e. the number of
times a node acts as a bridge along the shortest path between two other nodes.
Run the following query:

```cypher
CALL nxalg.betweenness_centrality() YIELD *;
```

The procedure `betweenness_centrality()` is one of over 70 algorithms available
in the `nxalg` module.

The result should be:

```nocopy
+--------------+--------------+
| betweenness  | node         |
+--------------+--------------+
| 0            | ({id: "0"})  |
| 0.000473485  | ({id: "1"})  |
| 0.0083649    | ({id: "2"})  |
| 0.00189394   | ({id: "3"})  |
| 0            | ({id: "4"})  |
| 0.000473485  | ({id: "5"})  |
| ...          | ...          |
```

### Link prediction

A very common problem in network analysis is link prediction. The algorithm
predicts which new interactions among the network members are likely to occur in
the near future. One way of predicting these links is by measuring the
“proximity” of nodes in a network. This can be done by using the Jaccard
coefficient. Let's try running the algorithm on a node with the `id` 13 and
ordering the results descending by the value of the coefficient:

```cypher
CALL nxalg.jaccard_coefficient()
YIELD *
WITH  u, v, coef
WHERE u.id = '13'
RETURN u, v, coef
ORDER BY coef DESC;
```

The results are:

```nocopy
+--------------+--------------+--------------+
| u            | v            | coef         |
+--------------+--------------+--------------+
| ({id: "13"}) | ({id: "19"}) | 0.6          |
| ({id: "13"}) | ({id: "17"}) | 0.4          |
| ({id: "13"}) | ({id: "21"}) | 0.4          |
| ({id: "13"}) | ({id: "28"}) | 0.333333     |
| ({id: "13"}) | ({id: "30"}) | 0.285714     |
| ({id: "13"}) | ({id: "27"}) | 0.285714     |
| ({id: "13"}) | ({id: "31"}) | 0.222222     |
| ({id: "13"}) | ({id: "15"}) | 0.166667     |
| ({id: "13"}) | ({id: "14"}) | 0.166667     |
| ({id: "13"}) | ({id: "18"}) | 0.166667     |
| ({id: "13"}) | ({id: "20"}) | 0.166667     |
| ({id: "13"}) | ({id: "22"}) | 0.166667     |
| ({id: "13"}) | ({id: "26"}) | 0.166667     |
| ({id: "13"}) | ({id: "32"}) | 0.133333     |
| ({id: "13"}) | ({id: "29"}) | 0.125        |
| ({id: "13"}) | ({id: "23"}) | 0.111111     |
| ({id: "13"}) | ({id: "25"}) | 0            |
| ({id: "13"}) | ({id: "24"}) | 0            |
| ({id: "13"}) | ({id: "16"}) | 0            |
+--------------+--------------+--------------+
```

## Add new NetworkX algorithms as query modules

Memgraph comes with over 70 NetworkX algorithms, but if the algorithm you
require is missing, you can add it yourself as a **query module**.

Let's create a custom module, add it to the `/usr/lib/memgraph/query_modules`
directory within Docker then load it into Memgraph to query the data.

### Community detection algorithm

Detecting communities in a network is a very common problem. Therefore, we need
community detection algorithms that can partition the network into multiple
communities. Let's create our own module that accomplishes this task. Create a
file called `communities.py` on your computer and copy the following code into
it:

```python
import mgp
import networkx as nx
from networkx.algorithms import community
from mgp_networkx import MemgraphDiGraph


@mgp.read_proc
def detect(
    ctx: mgp.ProcCtx
    ) -> mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]]):

    networkxGraph = nx.DiGraph(MemgraphDiGraph(ctx=ctx))
    communities_generator = community.girvan_newman(networkxGraph)

    return mgp.Record(communities=[
        list(s) for s in next(communities_generator)])
```

We just created a query module with the procedure `detect()` that utilizes the
Girvan–Newman method to find communities in a graph.

### Copy the module into Docker

1. Open a new terminal and find out the `CONTAINER ID` of the
   `memgraph-platform` container by running:

   ```terminal
   docker ps
   ```

2. Position yourself in the directory where `communities.py` is located and copy
   the file to the `memgraph-platform` container by running:

   ```terminal
   docker cp communities.py CONTAINER_ID:/usr/lib/memgraph/query_modules/movielens2.py
   ```

   Be sure to replace the `CONTAINER_ID`.

3. Check if you copied the file correctly! Enter the container:

   ```terminal
   docker exec -it CONTAINER_ID bash
   ```

4. List all the files in the `/usr/lib/memgraph/query_modules` folder and check
   if the `communities.py` file is there:

   ```terminal
   ls /usr/lib/memgraph/query_modules
   ```

### Load a new query module into Docker

Once your query module is safe in Docker, you can load it into
Memgraph.

All modules are automatically loaded into Memgraph when it starts, but if the
module was copied into Docker while Memgraph was already running, like it
was now, it needs to be loaded by using a Cypher procedure.

You can either use the `CALL mg.load_all()` procedure to reload all existing
modules and load any newly added ones, <br />or `CALL mg.load("module_name")` to
(re)load a specific module.

```cypher
CALL mg.load_all();
```

### Call a query module

Let's call the custom query module with Cypher:

```cypher
CALL communities.detect()
YIELD communities
UNWIND communities AS community
RETURN community;
```

The resulting communities are:

```nocopy
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| community                                                                                                                                                                                                                                                               |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| [({id: "0"}), ({id: "1"}), ({id: "3"}), ({id: "4"}), ({id: "5"}), ({id: "6"}), ({id: "7"}), ({id: "10"}), ({id: "11"}), ({id: "12"}), ({id: "13"}), ({id: "16"}), ({id: "17"}), ({id: "19"}), ({id: "21"})]                                                             |
| [({id: "2"}), ({id: "8"}), ({id: "9"}), ({id: "14"}), ({id: "15"}), ({id: "18"}), ({id: "20"}), ({id: "22"}), ({id: "23"}), ({id: "24"}), ({id: "25"}), ({id: "26"}), ({id: "27"}), ({id: "28"}), ({id: "29"}), ({id: "30"}), ({id: "31"}), ({id: "32"}), ({id: "33"})] |
+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

## Further reading

If you want to find out more about query modules, take a look at our guide on
how to create your own: [Implement custom query
modules](/how-to-guides/query-modules/implement-query-modules.md).

You can also visit our [NetworkX Reference guide](/how-to-guides/networkx.md) to
find out which NetworkX algorithms are already available in Memgraph.
