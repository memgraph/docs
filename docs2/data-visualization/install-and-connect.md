# Install Memgraph Lab and connect to a database

We recommend you use the `memgraph/memgraph-platform` Docker image to install
**Memgraph Platform** and get the complete streaming graph application platform
that includes:

- **MemgraphDB** - the database that holds your data
- **Memgraph Lab** - visual user interface for running queries and visualizing
  graph data
- **mgconsole** - command-line interface for running queries
- **MAGE** - graph algorithms and modules library

After running the image, mgconsole will open in the terminal while Memgraph Lab
is available on `http://localhost:3000`. 

You can install Memgraph Platform on:

<p align="left">
  <a href="/memgraph/install-memgraph-on-windows-docker" style={{'paddingRight':'70px'}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png" alt="windows" title="windows" width="80"/>
  </a>
  <a href="/memgraph/install-memgraph-on-macos-docker" style={{'paddingRight':'70px'}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/1024px-MacOS_logo.svg.png" alt="macos" title="macos" width="80"/>
  </a>
  <a href="/memgraph/install-memgraph-on-linux-docker">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg" alt="linux" title="linux" width="80"/>
  </a>
</p>

There is also a smaller
[`memgraph/memgraph-platform`](https://hub.docker.com/r/memgraph/memgraph-platform/tags?page=1)
Docker image that doesn't include MAGE - the graph algorithms and modules
library. The tag includes only `mamgraph` and `lab` keywords, for example:
`2.7.1-memgraph2.7.0-lab2.6.0`.

If you already have a running Memgraph database instance you can access the Lab
web application at http://lab.memgraph.com/, and if you want to install Memgraph
Lab as a desktop application, check out the installation instructions for
[Windows](/memgraph-lab/installation/windows),
[macOS](/memgraph-lab/installation/macos) and
[Linux](/memgraph-lab/installation/linux).

## Environment variables

Use the following environment variables to configure Memgraph Lab:

| Variable        | Description    | Type           | Default |
| -------------- | -------------- | -------------- |
| APP_CYPHER_QUERY_MAX_LEN        | Max length of a Cypher query     | `[integer]`     | 5000 |
| APP_MODULE_NAME_MAX_LEN    | Max length of the query module name       | `[integer]`     | 1000 |
| APP_MODULE_CONTENT_MAX_LEN    | Max length of a query module content | `[integer]`     | 50000 |
| APP_STREAM_NAME_MAX_LEN | Max length of the stream name | `[integer]` | 500 |

Example: 

```bash
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v memgraph/memgraph-platform -e APP_CYPHER_QUERY_MAX_LEN=10000 memgraph/memgraph-platform
```

## Windows

We recommend you [install **Memgraph Platform**](/memgraph/installation) and get
the complete streaming graph application platform that includes <br/> **MemgraphDB**,
command-line tool **mgconsole**, visual user interface **Memgraph Lab** running
within the browser and **MAGE** - graph algorithms and modules library.

To access the web application go to http://lab.memgraph.com/ and if you want to
install Memgraph Lab as a desktop application, follow the instructions below.

## Step 1 - Download and install Memgraph

Memgraph Lab needs a running MemgraphDB instance

If you installed Memgraph Platform you should already have one. <br/>If not,
install [MemgraphDB](/memgraph/installation) and once the database instance is
running  you can continue with the next step.

If you installed Memgraph DB using Docker, and you want to be able to use in-browser Memgraph Lab, be sure to expose port 3000 (`-p 3000:3000`) in the `docker run ...` command. 

If you installed Memgraph DB using Docker, and you want to be able to connect to it with Memgraph Lab application, be sure to expose ports 7687 for the instance connection (`-p 7687:7687`) and 7444 for logs (`-p 7444:7444`) in the `docker run ...` command.

## Step 2 - Installing and setting up Memgraph Lab

**1.** Download Memgraph Lab by visiting the [Download
Hub](https://memgraph.com/download/#memgraph-lab).

**2.** You can install Memgraph Lab by double clicking the downloaded installer
and following the instructions.

**3.** After you start Memgraph Lab, you should be presented with a login
screen. The username and password fields are empty by default. The default
connection string is set to `localhost:7687`. If you're using a different port,
you will have to change the connection string to point to that port, i.e.
`localhost:<your port number>`.

**4.** Click on connect, and you should be presented with the following
dashboard:

![lab-dashboard](../data/installation/lab-dashboard.png)

Congratulations! You have successfully installed Memgraph Lab and connected it
to Memgraph. You are now ready to start building your graph and querying it.

:::caution

You might receive the following error message when trying to connect.

![failed_connection](../data/failed_connection.png)

In this case, make sure that Memgraph is properly up and running and that you
have entered the correct port number.

:::

## Step 3 - Create a simple graph

Let's create a simple graph and execute some queries. This will make sure
everything is running correctly.

Go to **Query execution**, enter the following query in the **Cypher Editor** tab and click **Run Query**.

```cypher
CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});
```

You just created 2 nodes in the database, one labeled `User` with the name
"Alice" and the other labeled `Software` with the name "Memgraph". Between them,
you also created a relationship indicating that "Alice" likes "Memgraph".

Now that the data is stored inside Memgraph, you can run a query to retrieve and
visualize the graph. Execute the following query:

```cypher
MATCH (u:User)-[r]->(x) RETURN u, r, x;
```

You should get the following result:

![graph_result](../data/installation/lab-graph.png)

Now that you know your development environment is working, you are ready to
continue exploring Memgraph and building much more interesting projects
leveraging connected data.

## MacOS

We recommend you [install **Memgraph Platform**](/memgraph/installation) and get
the complete streaming graph application platform that includes <br/> **MemgraphDB**,
command-line tool **mgconsole**, visual user interface **Memgraph Lab** running
within the browser and **MAGE** - graph algorithms and modules library.

To access the web application go to http://lab.memgraph.com/ and if you want to
install Memgraph Lab as a desktop application, follow the instructions below.

## Step 1 - Download and install Memgraph

Memgraph Lab needs a running MemgraphDB instance

If you installed Memgraph Platform you should already have one. <br/>If not,
install [MemgraphDB](/memgraph/installation) and once the database instance is
running  you can continue with the next step.

If you installed Memgraph DB using Docker, and you want to be able to use in-browser Memgraph Lab, be sure to expose port 3000 (`-p 3000:3000`) in the `docker run ...` command. 

If you installed Memgraph DB using Docker, and you want to be able to connect to it with Memgraph Lab application, be sure to expose ports 7687 for the instance connection (`-p 7687:7687`) and 7444 for logs (`-p 7444:7444`) in the `docker run ...` command.

## Step 2 - Installing and setting up Memgraph Lab

**1.** Download Memgraph Lab by visiting the [Download
Hub](https://memgraph.com/download/#memgraph-lab).

**2.** Once you have Memgraph Lab installed, run the app, and you should be
presented with a login screen. The username and password fields are empty by
default. The default connection string is set to `localhost:7687`. If you're
using a different port, you will have to change the connection string to point
to that port, i.e. `localhost:<your port number>`.

**3.** Click on connect, and you should be presented with the following
dashboard:

![lab-dashboard](../data/installation/lab-dashboard.png)

Congratulations! You have successfully installed Memgraph Lab and connected it
to Memgraph. You are now ready to start building your graph and querying it.

:::caution

You might receive the following error message when trying to connect.

![failed_connection](../data/failed_connection.png)

In this case, make sure that Memgraph is properly up and running and that you
have entered the correct port number.

:::

## Step 3 - Create a simple graph

Let's create a simple graph and execute some queries. This will make sure
everything is running correctly.

Go to **Query execution**, enter the following query in the **Cypher Editor** tab and click **Run Query**.

```cypher
CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});
```

You just created 2 nodes in the database, one labeled `User` with the name
"Alice" and the other labeled `Software` with the name "Memgraph". Between them,
you also created a relationship indicating that "Alice" likes "Memgraph".

Now that the data is stored inside Memgraph, you can run a query to retrieve and
visualize the graph. Execute the following query:

```cypher
MATCH (u:User)-[r]->(x) RETURN u, r, x;
```

You should get the following result:

![graph_result](../data/installation/lab-graph.png)

Now that you know your development environment is working, you are ready to
continue exploring Memgraph and building much more interesting projects
leveraging connected data.

## Linux

We recommend you [install **Memgraph Platform**](/memgraph/installation) and get
the complete streaming graph application platform that includes <br/> **MemgraphDB**,
command-line tool **mgconsole**, visual user interface **Memgraph Lab** running
within the browser and **MAGE** - graph algorithms and modules library.

To access the web application go to http://lab.memgraph.com/ and if you want to
install Memgraph Lab as a desktop application, follow the instructions below.

## Step 1 - Download and install Memgraph

Memgraph Lab needs a running MemgraphDB instance

If you installed Memgraph Platform you should already have one. <br/>If not,
install [MemgraphDB](/memgraph/installation) and once the database instance is
running  you can continue with the next step.

If you installed Memgraph DB using Docker, and you want to be able to use in-browser Memgraph Lab, be sure to expose port 3000 (`-p 3000:3000`) in the `docker run ...` command. 

If you installed Memgraph DB using Docker, and you want to be able to connect to it with Memgraph Lab application, be sure to expose ports 7687 for the instance connection (`-p 7687:7687`) and 7444 for logs (`-p 7444:7444`) in the `docker run ...` command.

## Step 2 - Installing and setting up Memgraph Lab

**1.** Download Memgraph Lab by visiting the [Download
Hub](https://memgraph.com/download/#memgraph-lab).

**2.** You can install Memgraph Lab by double clicking the downloaded installer
or by executing:

```console
sudo dpkg -i MemgraphLab-x.x.x.deb
```

**3.** After you start Memgraph Lab, you should be presented with a login
screen. The username and password fields are empty by default. The default
connection string is set to `localhost:7687`. If you're using a different port,
you will have to change the connection string to point to that port, i.e.
`localhost:<your port number>`.

**4.** Click on connect, and you should be presented with the following
dashboard:

![lab-dashboard](../data/installation/lab-dashboard.png)

Congratulations! You have successfully installed Memgraph Lab and connected it
to Memgraph. You are now ready to start building your graph and querying it.

:::caution

You might receive the following error message when trying to connect.

![failed_connection](../data/failed_connection.png)

In this case, make sure that Memgraph is properly up and running and that you
have entered the correct port number.

:::

## Step 3 - Create a simple graph

Let's create a simple graph and execute some queries. This will make sure
everything is running correctly.

Go to **Query execution**, enter the following query in the **Cypher Editor** tab and click **Run Query**.

```cypher
CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});
```

You just created 2 nodes in the database, one labeled `User` with the name
"Alice" and the other labeled `Software` with the name "Memgraph". Between them,
you also created a relationship indicating that "Alice" likes "Memgraph".

Now that the data is stored inside Memgraph, you can run a query to retrieve and
visualize the graph. Execute the following query:

```cypher
MATCH (u:User)-[r]->(x) RETURN u, r, x;
```

You should get the following result:

![graph_result](../data/installation/lab-graph.png)

Now that you know your development environment is working, you are ready to
continue exploring Memgraph and building much more interesting projects
leveraging connected data.

## Connect to a database

import CompatibilityWarning from './templates/_compatibility_warning.mdx';

## Prerequisites

Before you proceed with the guide, make sure that you have either:

- Installed [**Memgraph Platform**](/memgraph/installation) and now have a
  running database instance and Memgraph Lab is running within the browser on
  `http://localhost:3000`, or
- Installed [**MemgraphDB**](/memgraph/installation) and a running database
  instance, and either an installed [**Memgraph
  Lab**](/memgraph-lab/installation) desktop application or access to Memgraph
  Lab web application at http://lab.memgraph.com/

## Connecting to Memgraph

Make sure that Memgraph is running and open Memgraph Lab. If you are starting
with a fresh database instance:

1. Leave the `Username` and `Password` fields **empty**.
2. The `Host` field can be either **`localhost`**, **`127.0.0.1`** or
   **`0.0.0.0`**, or change it appropriately. 
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