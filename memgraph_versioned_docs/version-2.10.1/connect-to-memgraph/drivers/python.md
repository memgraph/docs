---
id: python
title: Python quick start
sidebar_label: Python
---

At the end of this guide, you will have created a simple Python **`Hello,
World!`** program that connects to the Memgraph database and executes simple
queries.

## Prerequisites

To follow this guide, you will need:

- A **running Memgraph instance**. If you need to set up Memgraph, take a look
  at the [Installation guide](/installation/overview.mdx).
- The [**GQLAlchemy client**](https://github.com/memgraph/gqlalchemy). A
  Memgraph OGM (Object Graph Mapper) for the Python programming language.
- A basic understanding of graph databases and the property graph model.

## Basic setup

We'll be using a **Python program** to demonstrate how to connect to a running
Memgraph database instance.<br />

Let's jump in and connect a simple program to Memgraph.

**1.** Create a new directory for your program, for example, `/memgraph_python`
and position yourself in it.<br /> 

**2.** Create a new Python script and name it `program.py` . Add the following
code to it:

```python
from gqlalchemy import Memgraph

# Make a connection to the database
memgraph = Memgraph(host='127.0.0.1', port=7687)

# Delete all nodes and relationships
query = "MATCH (n) DETACH DELETE n"

# Execute the query
memgraph.execute(query)

# Create a node with the label FirstNode and message property with the value "Hello, World!"
query = """CREATE (n:FirstNode)
           SET n.message = '{message}'
           RETURN 'Node '  + id(n) + ': ' + n.message AS result""".format(message="Hello, World!")

# Execute the query
results = memgraph.execute_and_fetch(query)

# Print the first member
print(list(results)[0]['result'])
```

:::note Note for Docker users

If the program fails to connect to a Memgraph instance that was started with
Docker, you may need to use a different IP address (not the default `localhost`
/ `127.0.0.1` ) to connect to the instance.

You can find the **`CONTAINER_ID`** with `docker ps` and use it in the following
command to retrieve the address:

```
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER_ID
```

:::

**3.** Now, you can run the application with the following command:

```
python ./program.py
```

You should see an output similar to the following:

```
Node 1: Hello, World!
```

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at
the **[Tutorials](/tutorials/overview.md)** page. You can also browse through
the **[How-to guides](/how-to-guides/overview.md)** section to get an overview
of all the functionalities Memgraph offers.
