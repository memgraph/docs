---
id: mgconsole
title: Querying with mgconsole
sidebar_label: mgconsole
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

If you installed any other Docker image, you need to manually run mgconsole
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

**1.** If you installed MemgraphDB using Docker, you can run the client from your
Docker image. First, you need to find the `CONTAINER_ID` of your Memgraph
container:

```terminal
docker ps
```

**2.** Once you know the `CONTAINER_ID`, find the IP address of the container by
executing:

```terminal
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_ID
```

**3.** Now, you can start mgconsole by running the following command:

```terminal
docker run -it --entrypoint=mgconsole memgraph/memgraph --host CONTAINER_IP
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

You can use the `TAB` key to autocomplete commands in mgconsole.

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

## Configure mgconsole

| Flag                     | Description                                                                                                             | Type    | Default |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------|---------|---------|
| -csv_delimiter            | Character used to separate fields.                                                                                      | string  | ","     |
| -csv_doublequote          | Controls how instances of the quote character (") appearing inside a field should themselves be quoted. When true, the character is doubled. When false, the `escapechar` is used as a prefix to the quote characted. If `csv_doublequote` is `false`, `csv_escapechar` must be set. | bool    | true    |
| -csv_escapechar           | Character used to escape the quote character (") if `csv_doublequote` is `false`.                                      | string  | ""      |
| -fit_to_screen            | Fit output width to screen width.                                                                                       | bool    | false   |
| -history                  | Use the specified directory for saving history.                                                                         | string  | "~/.memgraph" |
| -host                     | Server address. It can be a DNS resolvable hostname.                                                                     | string  | "127.0.0.1" |
| -no_history               | Do not save history.                                                                                                    | bool    | false   |
| -output_format            | Query output format. Can be `csv` or `tabular`. If the output format is not tabular `fit-to-screen` flag is ignored.       | string  | "tabular" |
| -password                 | Password for the database                                                                                               | string  | ""      |
| -port                     | Server port                                                                                                             | int32   | 7687    |
| -term_colors              | Use terminal colors syntax highlighting.                                                                                | bool    | false   |
| -use_ssl                  | Use SSL when connecting to the server.                                                                                  | bool    | false   |
| -username                 | Username for the database                                                                                               | string  | ""      |
| -verbose_execution_info   | Output the additional information about query such as query cost, parsing, planning and execution times.               | bool    | false   |

| Flag                     | Description                                                                                                             | Type    | Default |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------|---------|---------|
| -flagfile                 | Load flags from a file.                                                                                                 | string  | ""      |
| -fromenv                  | Set flags from the environment [example: 'export FLAGS_flag1=value'].                                                   | string  | ""      |
| -tryfromenv               | Set flags from the environment if present.                                                                               | string  | ""      |
| -undefok                  | Comma-separated list of flag names. These flags can be specified on the command line even if the program does not define a flag with that name.  IMPORTANT: Flags from the list that have arguments MUST use the flag=value format. | string  | ""      |
| -tab_completion_columns   | The number of columns used in output for tab completion.                                                                  | int32   | 80      |
| -tab_completion_word      | If non-empty, `HandleCommandLineCompletions()` will hijack the process and attempt to do bash-style command line flag completion on this value.                                                                                                         | string  | ""      |

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


## Where to next? {#where-to-next}

If you want to learn more about graph databases and Cypher queries, visit
[Memgraph Playground](https://playground.memgraph.com/) and go through the
guided lessons. All the datasets and most of the queries used in the guided
lessons can also be explored in the [Tutorials](/tutorials/overview.md) section,
and knowledge about Cypher is gathered in the [Cypher manual](/cypher-manual).

If you are all good to go on your own - [import your
data](/import-data/overview.md)!
