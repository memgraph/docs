---
id: cli
title: Command line interface
sidebar_label: CLI
---

import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

The easiest way to execute Cypher queries against Memgraph is by using
Memgraph's command-line tool, **mgconsole**.

## 1. Install mgconsole 

:::tip

If you installed **Memgraph Platform** with the Docker image
(`memgraph/memgraph-platform`), mgconsole will start automatically when you run
the container. Skip the installation steps and continue with [executing
Cypher queries](#execute-cypher-queries).

If you installed any other Docker image or want to explicitly start the
mgconsole from the Memgraph Platform image, you need to manually run mgconsole
following the steps described below.

:::

If you want to install or run mgconsole to query a running Memgraph database
instance, use the following steps:

<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Windows', value: 'windows'},
    {label: 'macOS', value: 'macos'},
    {label: 'Linux', value: 'linux'}
  ]}>
  <TabItem value="docker">

If you installed MemgraphDB using Docker or closed the terminal with the running mgconsole from Memgraph
Platform image, run the mgconsole client from your Docker image using the following commands:

**1.** First, you need to find the `CONTAINER_ID` by running:

```terminal
docker ps
```

**2.** Once you know the `CONTAINER_ID`, you can start mgconsole by running the following command:

```terminal
docker exec -it CONTAINER_ID mgconsole
```

  </TabItem>
  <TabItem value= 'windows'>

**1.** Download mgconsole from the [Download
Hub](https://memgraph.com/download#mgconsole).

**2.** From PowerShell, start mgconsole with the command:

```terminal
./mgconsole --host HOST --port PORT
```

If Memgraph is running locally using the default configuration, start
mgconsole with:

```terminal
./mgconsole --host 127.0.0.1 --port 7687
```

  </TabItem>
  <TabItem value= 'macos'>

**1.** Download mgconsole from the [Download
Hub](https://memgraph.com/download#mgconsole).

**2.** From the terminal, provide execution permission to the current user:

```terminal
chmod u+x ./mgconsole
```

**3.** Start mgconsole with the command:

```terminal
./mgconsole --host HOST --port PORT
```

If Memgraph is running locally using the default configuration, start
mgconsole with:

```terminal
./mgconsole --host 127.0.0.1 --port 7687
```

  </TabItem>
  <TabItem value= 'linux'>

:::note

We will soon release a downloadable Debian package, so you don't have to install
mgconsole from source.

:::

**1.** Follow the instructions on how to [build and
install](https://github.com/memgraph/mgconsole#building-and-installing)
mgconsole from source.

**2.** Start mgconsole with the command:

```terminal
mgconsole --host HOST --port PORT
```

If Memgraph is running locally using the default configuration, start
mgconsole with:

```terminal
mgconsole --host 127.0.0.1 --port 7687
```

  </TabItem>
</Tabs>

## 2. Execute a Cypher query {#execute-cypher-queries}


After the client has started, it should present a command prompt similar to:

```
mgconsole X.X
Connected to 'memgraph://127.0.0.1:7687'
Type :help for shell usage
Quit the shell by typing Ctrl-D(eof) or :quit
memgraph>
```

At this point, it is possible to execute Cypher queries against a running
Memgraph database instance. 

:::tip

You can use the `TAB` key to autocomplete commands in `mgconsole`.

:::

Each query needs to end with the `;` (*semicolon*) character. For example:

```cypher
CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});
```

The above query will create 2 nodes in the database, one labeled "User" with name
"Alice" and the other labeled "Software" with name "Memgraph". It will also
create a relationship that "Alice" *likes* "Memgraph".

To find created nodes and relationships, execute the following query:

```cypher
MATCH (u:User)-[r]->(x) RETURN u, r, x;
```

### Query execution time

To get a breakdown of the execution time, set the `-verbose_execution_info` flag
to `true`.

Upon query execution you will get this information:

```bash
Query COST estimate: 3066
Query PARSING time: 0.000175982 sec
Query PLAN EXECUTION time: 0.0154524 sec
Query PLANNING time: 8.054e-05 sec
```

The values show:

- COST estimate - Internal planner estimation on the cost of the query. When comparing two query executions, an order of magnitude larger COST estimates might indicate the query's longer execution time. 
- PARSING time - Time spent checking if the query is valid and normalizing it for cache.
- PLAN EXECUTION time - Time executing the plan. 
- PLANNING time - Time it takes the query planner to create the optimal plan to execute the query.

## Configure mgconsole

Below are configurational flags you can use with mgconsole:

### Main

| Flag                     | Description                                                                                                             | Type    | Default |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------|---------|---------|
| -csv_delimiter            | Character used to separate fields.                                                                                      | string  | ","     |
| -csv_doublequote          | Controls how instances of the quotechar(") appearing inside a field should themselves be quoted. When `true`, the character is doubled. When `false`, the escapechar is used as a prefix to the quotechar. If `csv_doublequote` is `false`, `csv_escapechar` must be set. | bool    | true    |
| -csv_escapechar           | Character used to escape the quote character (") if `csv_doublequote` is `false`.                                      | string  | ""      |
| -fit_to_screen            | Fit output width to screen width.                                                                                       | bool    | false   |
| -history                  | Use the specified directory to save history.                                                                         | string  | "~/.memgraph" |
| -host                     | Server address. It can be a DNS resolvable hostname.                                                                     | string  | "127.0.0.1" |
| -no_history               | Do not save history.                                                                                                    | bool    | false   |
| -output_format            | Query output format. Can be `csv` or `tabular`. If the output format is not tabular `fit_to_screen` flag is ignored.       | string  | "tabular" |
| -password                 | Database password.                                                                                               | string  | ""      |
| -port                     | Server port.                                                                                                             | int32   | 7687    |
| -term_colors              | Use terminal colors syntax highlighting.                                                                                | bool    | false   |
| -use_ssl                  | Use SSL when connecting to the server.                                                                                  | bool    | false   |
| -username                 | Database username.                                                                                               | string  | ""      |
| -verbose_execution_info   | Output the additional information about query such as query cost, parsing, planning and execution times.               | bool    | false   |

### Flags

| Flag                     | Description                                                                                                             | Type    | Default |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------|---------|---------|
| -flagfile                 | Load flags from a file.                                                                                                 | string  | ""      |
| -fromenv                  | Set flags from the environment [example: 'export FLAGS_flag1=value'].                                                   | string  | ""      |
| -tryfromenv               | Set flags from the environment if present.                                                                               | string  | ""      |
| -undefok                  | Comma-separated list of flag names. These flags can be specified on the command line even if the program does not define a flag with that name.  IMPORTANT: Flags from the list that have arguments MUST use the flag=value format. | string  | ""      |
| -tab_completion_columns   | The number of columns used in output for tab completion.                                                                  | int32   | 80      |
| -tab_completion_word      | If non-empty, `HandleCommandLineCompletions()` will hijack the process and attempt to do bash-style command line flag completion on this value.                                                                                                         | string  | ""      |

### Help

| Flag                     | Description                                                                                                             | Type    | Default |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------|---------|---------|
| -help                     | Show help on all flags [tip: all flags can have two dashes].                                                               | bool    | false   |
| -helpfull                 | Show help on all flags -- same as -help.                                                                                  | bool    | false   |
| -helpmatch                | Show help on modules, names of which contain the specified substring.                                                           | string  | ""      |
| -helpon                   | Show help on the modules named by this flag value.                                                                        | string  | ""      |
| -helppackage              | Show help on all modules in the main package.                                                                             | bool    | false   |
| -helpshort               | Show help on the main module for this program only.                        | bool  | false   |
| -helpxml                 | Produce an .xml version of help.                                            | bool  | false   |
| -version                 | Show version and build info then exit.                                      | bool  | false   |

:::caution

When working with Memgraph Platform, you should pass configuration flags inside
of environment variables.

For example, you should start Memgraph Platform with `docker run -e
MGCONSOLE="-output_format="csv"" memgraph/memgraph-platform`.

:::

## Non-interactive mode

To get the query result in bash, use the following command: 
```bash
mgconsole < <(echo "MATCH (n:Person) RETURN n;")
```
or
```bash
echo "MATCH (n:Person) RETURN n;" | mgconsole
```

To save the query results in a file, use the following command:
```bash
mgconsole < <(echo "MATCH (n:Person) RETURN n;") > results.txt
```

## Where to next? {#where-to-next}

If you want to learn more about graph databases and Cypher queries, visit
[Memgraph Playground](https://playground.memgraph.com/) and go through the
guided lessons. All the datasets and most of the queries used in the guided
lessons can also be explored in the [Tutorials](/tutorials/overview.md) section,
and knowledge about Cypher is gathered in the [Cypher manual](/cypher-manual).

If you are all good to go on your own - [import your
data](/import-data/overview.md)!
