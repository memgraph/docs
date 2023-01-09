---
id: run-a-subgraph-module
title: How to run a MAGE module on subgraphs
sidebar_label: Run modules on subgraphs
---

The following how-to guide will demonstrate how to run graph analytics on sub-graphs. A portion of the graph is projected from the whole network persisted in Memgraph, and algorithms are run on that portion of the graph.

If you need help with running MAGE modules and graph algorithms, check out the [how-to guide on that topic](/mage/how-to-guides/run-a-query-module.md).

[![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/how-we-designed-and-implemented-graph-projection-feature)
[![Related -
How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/docs/gqlalchemy/how-to-guides/query-builder/graph-projection.md)

### When not to run algorithms across the entire network and use the projection feature?
Executing any MAGE query module, the algorithm is executed on the whole network. 
This is impractical in the following use cases: 
- if the graph is heterogeneous, and you want to run the module only on specific labels
- if the graph is too large, and you only want to use the analytics to update only a portion of it 
- the network contains multiple diverse data models and graphs, and running analytics on mixed graphs at once might yield unexpected results

That is why Memgraph enables module execution on subgraphs and graph
projections. The insights yielded by graph algorithms can then affect only the necessary nodes in your graph,
making the data more consistent and up to its specifications. 

### Available graph projections

Graph projection function in Memgraph is called [project()](/cypher-manual/functions#graph-projection-functions),
and it is used in the following way:

```cypher
MATCH p=(n)-[r]->(m)
WITH project(p) AS subgraph
RETURN subgraph;
```

The path is specified first which denotes source and target nodes as well as relationships connecting them.
The function `project` then constructs a subgraph out of all the generated paths.

Because the matched pattern actually includes all the nodes and the relationships in the graph, the result of this query is a projection of the whole graph. 
To isolate a certain part of the graph, constraints need to be added to either labels, edge types, or properties, like in the query below: 

```cypher
MATCH p=(n:SpecificLabel)-[r:REL_TYPE]->(m:SpecificLabel)
WITH project(p) AS subgraph
RETURN subgraph;
```

The query above will return a subgraph of `SpecificLabel` nodes connected with the relationships of type `REL_TYPE`.

### Calling query modules on graph projections

If you want to run query modules on subgraphs, specify the projected graph as the first argument of the query module.

```cypher
CALL module.procedure([optional graph parameter], argument1, argument2, ...) YIELD * RETURN *;
```

If the optional graph projection parameter is not included as the first argument,
the query module will be executed on the whole graph.

## Practical example with Twitter influencers

In this practical example, PageRank algorithm will be executed on a fictional Twitter dataset.
PageRank execution is grouped by the Twitter hashtag, and each Tweet can have a different number of retweets.

<img src={require('../data/how-to-guides/subgraphs-guide/whole-graph.png').default}/>

```cypher
CREATE (n:Tweet {id: 1, hashtag: "#WorldCup", text: "Cool world cup! #WorldCup"});
CREATE (n:Tweet {id: 2, hashtag: "#WorldCup", text: "The ball is round #WorldCup!"});

CREATE (n:Tweet {id: 3, hashtag: "#christmas", text: "The town is so shiny during #christmas!"});
CREATE (n:Tweet {id: 4, hashtag: "#christmas", text: "Why didn't I get any presents for #christmas?"});

MATCH (n:Tweet {id: 1}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "Croatia first this year!"});
MATCH (n:Tweet {id: 1}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "Farewall Dani Alves!"});
MATCH (n:Tweet {id: 2}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "This is the best WC ever!"});
MATCH (n:Tweet {id: 2}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "It's not so hot this time of the year in Qatar."});
MATCH (n:Tweet {id: 2}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "What are your predictions?"});
MATCH (n:Tweet {id: 3}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "Don't be a Grinch!"});
MATCH (n:Tweet {id: 4}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "I'll give you a present!"});
MATCH (n:Tweet {id: 4}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "Santa Claus will visit you tonight!"});
MATCH (n:Tweet {id: 4}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "This year save me from tears"});
MATCH (n:Tweet {id: 4}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "All I want for Christmas is youuuu"});
```

### Running PageRank on the whole network

To run the PageRank algorithms available in the MAGE library, use the following query:

```cypher
CALL pagerank.get() YIELD node, rank
SET node.rank = rank;
```

The PageRank algorithm will take into account all the nodes in the graph. 
It doesn't really make sense to correlate tweets about World Cup with tweets about Christmas, 
as they are thematically quite different and should be analyzed separately.


### Running PageRank on a subgraph

To run the PageRank on a subset of Christmas tweets only, that portion of the graph is 
saved as a projection and used as the first argument of the query module: 

```cypher
MATCH p=(n:Tweet {hashtag: "#christmas"})-[r]->(m)
WITH project(p) AS christmas_graph
CALL pagerank.get(christmas_graph) YIELD node, rank
SET node.rank = rank
RETURN node.hashtag, node.text, rank
ORDER BY rank DESC;
```

<img src={require('../data/how-to-guides/subgraphs-guide/christmas-subgraph.png').default}/>

The above query successfully updated the rank of the Christmas tweets only! Let's do the same
on the World Cup tweets by changing the value of the hashtag property:

```cypher
MATCH p=(n:Tweet {hashtag: "#WorldCup"})-[r]->(m)
WITH project(p) AS christmas_graph
CALL pagerank.get(christmas_graph) YIELD node, rank
SET node.rank = rank
RETURN node.hashtag, node.text, rank
ORDER BY rank DESC;
```

<img src={require('../data/how-to-guides/subgraphs-guide/world-cup-subgraph.png').default}/>

### Final remarks
This how-to guide showed how to run algorithms on subgraphs. If you want to try out other 
MAGE algorithms and run them on subgraphs, check the [list of available query modules](/mage/query-modules/available-queries)!
