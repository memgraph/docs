---
id: run-a-subgraph-module
title: How to run a MAGE module on subgraphs
sidebar_label: Run modules on subgraphs
---

If you have already read our how to guide on how to run MAGE modules and graph algorithms,
which can be found here, now it's time to move on to the finer execution of graph analytics.
In this how to guide, we will project a portion of the graph from the whole network persisted in 
Memgraph, and run our algorithms on that portion on the graph.

If you didn't observe already, by executing a query module (or a MAGE module, which is essentially
the same thing), the algorithm is executed on the whole network. This is impractical for multiple
reasons:
- your graph can be heterogenous and you want to execute the module only on certain labels
- your graph might be too big and you want just a portion of the graph to be updated
with the analytics
- you have multiple diverse data models and graphs in your network, and
running analytics on all the graphs at the same time just does not make sense

For that purpose, Memgraph has enabled you to execute modules on subgraphs and graph
projections, to make the insights yielded by graph algorithms affect only the
necessary nodes in your graph, saving you time and making the data more consistent
and up to its specification.

For now, the only graph projection function in Memgraph is called project(),
which can be executed like the example below: 

```cypher
MATCH p=(n)-[r]->(m)
WITH project(p) AS graph
RETURN graph;
```

The result of this query is a projection of the graph that yields the whole graph,
because we have not specified anything particularly. However, if we put constraints on
properties or relationships, like in the query below:

```cypher
MATCH p=(n:SpecificLabel)-[r:REL_TYPE]->(m:SpecificLabel)
WITH project(p) AS graph
RETURN graph;
```

we will get a subgraph of connected `SpecificLabel` nodes connected with the relationship
of type `REL_TYPE`.

The mechanism of running query modules on subgraphs is specifying the projected graph as the
first argument in the query module call:

```cypher
CALL module.procedure([optional graph parameter], argument1, argument2, ...) YIELD * RETURN *;
```

If the optional graph projection parameter is not specified, the query module will be executed on the
whole graph.

Let's see how graph projections work in a practical example!


## Practical example with Twitter influencers

In this practical example, we will go through a fictional Twitter dataset for which we
want to execute the PageRank algorithm.
Suppose the PageRank that we want to execute is grouped by the Twitter hashtag, and that
each Tweet can have various amount of comments on it.

```cypher
CREATE (n:Tweet {id: 1, hashtag: "#WorldCup", description: "Cool world cup! #WorldCup"});
CREATE (n:Tweet {id: 2, hashtag: "#WorldCup", description: "The ball is round #WorldCup!"})

CREATE (n:Tweet {id: 3, hashtag: "#christmas", description: "The town is so shiny during #christmas!"});
CREATE (n:Tweet {id: 4, hashtag: "#christmas", description: "Why didn't I get any presents for #christmas?"})

match (n {id: 1}) merge (n)-[:HAS_COMMENT]->(:Comment);
match (n {id: 1}) merge (n)-[:HAS_COMMENT]->(:Comment);
match (n {id: 2}) merge (n)-[:HAS_COMMENT]->(:Comment);
match (n {id: 2}) merge (n)-[:HAS_COMMENT]->(:Comment);
match (n {id: 2}) merge (n)-[:HAS_COMMENT]->(:Comment);
match (n {id: 3}) merge (n)-[:HAS_COMMENT]->(:Comment);
match (n {id: 4}) merge (n)-[:HAS_COMMENT]->(:Comment);
match (n {id: 4}) merge (n)-[:HAS_COMMENT]->(:Comment);
match (n {id: 4}) merge (n)-[:HAS_COMMENT]->(:Comment);
match (n {id: 4}) merge (n)-[:HAS_COMMENT]->(:Comment);
```

The usual way one would run a PageRank in MAGE is:

```cypher
CALL pagerank.get() YIELD node, rank
SET node.rank = rank;
```

However, this kind of PageRank takes into account all of the nodes. It would be unwise to correlate tweets from the
World Cup with the tweets for Christmas, as they are not the same thing and a plausible case would be if they
could be separated.

With a small modification, by putting the graph projection in as the first argument of the query module, it is 
executed on subgraph like in the query below:

```cypher
MATCH p=(n:Tweet {hashtag: "#christmas"})-[r]->(m)
WITH project(p) AS christmas_graph
CALL pagerank.get(christmas_graph) YIELD node, rank
WITH node, rank
WHERE node:Tweet
SET node.rank = rank;
```

With this query, we have successfully updated the rank of the Christmas tweets only! Let's do the same
on the World Cup tweets:

```cypher
MATCH p=(n:Tweet {hashtag: "#WorldCup"})-[r]->(m)
WITH project(p) AS christmas_graph
CALL pagerank.get(christmas_graph) YIELD node, rank
WITH node, rank
WHERE node:Tweet
SET node.rank = rank;
```

The query is basically identical, with only the projection changing from one hashtag to another.