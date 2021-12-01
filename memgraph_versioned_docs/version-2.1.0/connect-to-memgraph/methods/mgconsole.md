---
id: mgconsole
title: Querying with mgconsole
sidebar_label: mgconsole
---

The easiest way to execute openCypher queries against Memgraph is by using
Memgraph's command-line tool, [mgconsole](https://github.com/memgraph/mgconsole), which is installed
together with Memgraph.

If you installed Memgraph using Docker, you will need to run the client
using the following command (remember to replace `HOST` with valid IP of
the container - see [Docker Note](/database-functionalities/work-with-docker.md#docker-container-ip-address)):

```
docker run -it --entrypoint=mgconsole memgraph --host HOST --use-ssl=False
```

Otherwise, you can connect to the running Memgraph instance by
issuing the following shell command:

```
mgconsole --use-ssl=False
```

After the client has started it should present a command prompt similar to:

```
Type :help for shell usage
Quit the shell by typing Ctrl-D(eof) or :quit
Connected to 'memgraph://127.0.0.1:7687'
memgraph>
```

At this point, it is possible to execute openCypher queries on Memgraph. Each
query needs to end with the `;` (*semicolon*) character. For example:

```cypher
CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});
```

The above will create 2 nodes in the database, one labeled "User" with name
"Alice" and the other labeled "Software" with name "Memgraph". It will also
create a relationship that "Alice" *likes* "Memgraph".

To find created nodes and relationships, execute the following query:

```cypher
MATCH (u:User)-[r]->(x) RETURN u, r, x;
```
