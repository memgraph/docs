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

## Where to next? {#where-to-next}

If you want to learn more about graph databases and Cypher queries, visit
[Memgraph Playground](https://playground.memgraph.com/) and go through the
guided lessons. All the datasets and most of the queries used in the guided
lessons can also be explored in the [Tutorials](/tutorials/overview.md) section,
and knowledge about Cypher is gathered in the [Cypher manual](/cypher-manual).

If you are all good to go on your own - [import your
data](/import-data/overview.md)!
