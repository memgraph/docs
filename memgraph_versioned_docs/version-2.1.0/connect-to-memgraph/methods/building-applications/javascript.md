---
id: javascript
title: JavaScript quick start
sidebar_label: JavaScript
---

At the end of this guide, you will have created a simple JavaScript **`Hello,
World!`** program that connects to the Memgraph database and executes simple
queries.

:::note
Running queries directly from a web browser is **not a recommended usage**
because of additional requirements and possible performance issues. In other
words, we encourage users to use server-side libraries and clients for top
performance whenever possible.
:::

## Prerequisites

To follow this guide, you will need:

- A **running Memgraph instance**. If you need to set up Memgraph, take a look
  at the [Installation guide](/installation/overview.md).
- A basic understanding of graph databases and the property graph model.

## Basic Setup

Memgraph doesn't have integrated support for `WebSocket` which is required
during the execution of Cypher commands in any web browser. If you want to run
`Cypher` queries from a web browser,
[websockify](https://github.com/novnc/websockify-js) has to be up and running.
Requests from web browsers are wrapped into `WebSocket` messages, and a proxy is
needed to handle the overhead. The proxy has to be configured so that the web
browser driver sends requests to the proxy port which sends them to Memgraph's
Bolt port. Presented with Cypher language, the communication goes like this:

```cypher
(:Browser:Javascript)-[:CONNECTS_TO]->(:Websockify { mode: "WS" })-[:PROXY_TO]->(:Memgraph { "encryption": "off" })
```

Proxy `Websockify` runs in unencrypted HTTP (ws://) mode by default which isn't
encrypted, so to match that, Memgraph needs to be running with encryption turned
off (the default setting).

The code snippet below outlines a basic usage example that executes a couple of
elementary queries. The first two steps are about starting Websockify to proxy
queries to the database.

Let's jump in and connect a simple program to Memgraph.

**1.** Create a new directory for your application, for example `/MyApp` and
position yourself in it.

**2.** Create a `websockify.sh` script with the
following code:

```bash
#!/bin/bash

if [ ! -d "websockify-js" ]; then
    git clone https://github.com/novnc/websockify-js.git
fi
cd websockify-js/websockify
npm install
./websockify.js 9999 :7687
```

**3.** Run `Websockify` with the command:

```
bash websockify.sh
```

**4.** To make the actual program, create a `program.html` file and add the
following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Javascript Browser Example | Memgraph</title>
    <script src="https://cdn.jsdelivr.net/npm/neo4j-driver"></script>
  </head>
  <body>
    <p>Check console for Cypher query outputs...</p>
    <script>
      const driver = neo4j.driver(
        "bolt://localhost:9999",
        neo4j.auth.basic("", "")
      );

      (async function main() {
        const session = driver.session();

        try {
          await session.run("MATCH (n) DETACH DELETE n;");
          console.log("Database cleared.");

          await session.run("CREATE (alice:Person {name: 'Alice', age: 22});");
          console.log("Record created.");

          const result = await session.run("MATCH (n) RETURN n;");

          console.log("Record matched.");
          const alice = result.records[0].get("n");
          const label = alice.labels[0];
          const name = alice.properties["name"];
          const age = alice.properties["age"];

          if (label != "Person" || name != "Alice" || age != 22) {
            console.error("Data doesn't match.");
          }

          console.log("Label: " + label);
          console.log("Name: " + name);
          console.log("Age: " + age);
        } catch (error) {
          console.error(error);
        } finally {
          session.close();
        }

        driver.close();
      })();
    </script>
  </body>
</html>
```

**5.** Open the `program.html` file in your browser and look for the output in
the console.

You should see an output similar to the following:

```
Database cleared.
Record created.
Record matched.
Label: Person
Name: Alice
Age: 22
```

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at
the **[Tutorials](/tutorials/overview.md)** page. You can also browse through
the **[Database functionalities](/database-functionalities/overview.md)**
section to get an overview of all the functionalities Memgraph offers.
