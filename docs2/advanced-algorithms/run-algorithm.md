# Run algorithms

## Load procedures

Once you start Memgraph, it will attempt to load query modules from all `*.so`
and `*.py` files from the default (`/usr/lib/memgraph/query_modules` and
`/var/lib/memgraph/internal_modules`) directories. 

MAGE modules are located at
`/usr/lib/memgraph/query_modules` and custom modules developed via Memgraph Lab at
`/var/lib/memgraph/internal_modules`.

Memgraph can load query modules from additional directories, if their path is
added to the `--query-modules-directory` flag in the main configuration file
(`/etc/memgraph/memgraph.conf`) or supplied as a command-line parameter (e.g.
when using Docker). 

If you are supplying the additional directory as a parameter, do not forget to
include the path to `/usr/lib/memgraph/query_modules`, otherwise queries from
that directory will not be loaded when Memgraph starts.

:::caution

When working with Docker and `memgraph-platform` image, you should pass
configuration flags inside of environment variables, for example:

```terminal
docker run -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--query-modules-directory=/usr/lib/memgraph/query_modules,/usr/lib/memgraph/my_modules" memgraph/memgraph-platform`
```

If you are working with `memgraph` or `memgraph-mage` images you should pass
configuration options like this: 

```terminal
docker run -p 7687:7687 -p 7444:7444 memgraph/memgraph --query-modules-directory=/usr/lib/memgraph/query_modules,/usr/lib/memgraph/my_modules
```

:::

If a certain query module was added while Memgraph was already running, you need
to load it manually using the `mg.load("module_name")` procedure within a query:

```cypher
CALL mg.load("py_example");
```

If there is no response (no error message), the load was successful.

If you want to reload all existing modules and load any newly added ones, use
`mg.load_all()`:

```cypher
CALL mg.load_all();
```

If there is no response (no error message), the load was successful.

You can check if the query module has been loaded by using the `mg.procedures()`
procedure within a query:

```cypher
CALL mg.procedures() YIELD *;
```

Once the MAGE query modules or any custom modules you developed have been
loaded into Memgraph, you can call them within queries using the following Cypher
syntax:

```cypher
CALL module.procedure([optional parameter], arg1, "string_argument", ...) YIELD res1, res2, ...;
```

## Run procedures

Every procedure has a first optional parameter and the rest of them depend on
the procedure you are trying to call. The optional parameter must be result of
the aggregation function
[`project()`](/cypher-manual/functions#aggregation-functions). If such a
parameter is provided, **all** operations will be executed on a projected graph.
Otherwise, you will work on the whole graph stored inside Memgraph. 

Each procedure returns zero or more records, where each record contains named
fields. The `YIELD` clause is used to select fields you are interested in or all
of them (*). If you are not interested in any fields, omit the `YIELD` clause.
The procedure will still run, but the record fields will not be stored in
variables. If you are trying to `YIELD` fields that are not a part of the
produced record, the query will result in an error.

Procedures can be standalone as in the example above, or a part of a larger
query when we want the procedure to work on data the query is
producing. 

For example:

```cypher
MATCH (node) CALL module.procedure(node) YIELD result RETURN *;
```

When the `CALL` clause is a part of a larger query, results from the query are
returned using the `RETURN` clause. If the `CALL` clause is followed by a clause
that only updates the data and doesn't read it, `RETURN` is unnecessary. It is
the Cypher convention that read-only queries need to end with a `RETURN`, while
queries that update something don't need to `RETURN` anything.

Also, if the procedure itself writes into the database, all the rest of the
clauses in the query can only read from the database, and the `CALL` clause can
only be followed by the `YIELD` clause and/or `RETURN` clause. 

If a procedure returns a record with the same field name as some variable we
already have in the query, that field name can be aliased with some other name
using the `AS` sub-clause:

```cypher
MATCH (result) CALL module.procedure(42) YIELD result AS procedure_result RETURN *;
```

## Run on subgraph 

The following how-to guide will demonstrate how to run graph analytics on sub-graphs. A portion of the graph is projected from the whole network persisted in Memgraph, and algorithms are run on that portion of the graph.

If you need help with running MAGE modules and graph algorithms, check out the [how-to guide on that topic](/mage/how-to-guides/run-a-query-module.md).

[![Related - Blog
Post](https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge)](https://memgraph.com/blog/how-we-designed-and-implemented-graph-projection-feature)
[![Related -
How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/docs/gqlalchemy/how-to-guides/query-builder/graph-projection)

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

### Practical example with Twitter influencers

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

#### Running PageRank on the whole network

To run the PageRank algorithms available in the MAGE library, use the following query:

```cypher
CALL pagerank.get() YIELD node, rank
SET node.rank = rank;
```

The PageRank algorithm will take into account all the nodes in the graph. 
It doesn't really make sense to correlate tweets about World Cup with tweets about Christmas, 
as they are thematically quite different and should be analyzed separately.


#### Running PageRank on a subgraph

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

## Managing query modules from Memgraph Lab

You can inspect query modules in Memgraph Lab (v2.0 and newer).
Just navigate to **Query Modules**.

<img src={require('../../data/memgraph_lab_query_modules.png').default} className={"imgBorder"}/>

There you can see all the loaded query modules, delete them, or see procedures
and transformations they define by clicking on the arrow icon.

By expanding procedures you can receive information about the procedure's
signature, input and output variables and their data type, as well as the `CALL`
query you can run directly from the **Query Modules** view.

Custom modules developed via Memgraph Lab are located at
`/var/lib/memgraph/internal_modules`.

<img src={require('../../data/memgraph_lab_query_modules_details.png').default} className={"imgBorder"}/>

## Control procedure memory usage

When running a procedure, Memgraph controls the maximum memory usage that the
procedure may consume during its execution.  By default, the upper memory limit
when running a procedure is `100 MB`.  If your query procedure requires more
memory to yield its results, you can increase the memory limit using the
following syntax:

```cypher
CALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 KB YIELD result;
CALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 MB YIELD result;
CALL module.procedure(arg1, arg2, ...) PROCEDURE MEMORY UNLIMITED YIELD result;
```

The limit can either be specified to a specific value (either in `KB` or in
`MB`), or it can be set to unlimited.
