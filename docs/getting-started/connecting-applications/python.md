---
id: python
title: Python quick start
sidebar_label: Python
---

At the end of this guide, you will have created a simple Python **`Hello, World!`** program that connects to the Memgraph database and executes simple queries.

## Prerequisites

To follow this guide, you will need:
* A **running Memgraph instance**. If you need to setup Memgraph, take a look at the [Installation guide](/getting-started/installation/installation.md).
* A basic understanding of graph databases and the property graph model.
* **Docker** installed and running. Instructions on how to setup Docker can be found on the [official Docker website](https://docs.docker.com/get-docker/).
* The [**pymgclient driver**](https://github.com/memgraph/pymgclient). A Memgraph database adapter for the Python programming language. **(if you are not using Docker)**

:::info
**NOTE:** We recommend using Docker because it simplifies installing the driver dependencies. If you don't wish to use Docker, you will need to install the **pymgclient driver** locally.
:::

## Basic setup

We'll be using a **Dockerized Python program** to demonstrate how to connect to a running Memgraph database instance.
If you don't wish to use Docker, the steps might be slightly different, but the code is most likely the same or very similar.<br />  

Let's jump in and connect a simple program to Memgraph.

**1.** Create a new directory for your program, for example `/memgraph_python` and position yourself in it.<br />  
**2.** Create a `requirements.txt` file which will contain a list of items to be installed using **pip**. Leave it empty for the purposes of this guide.<br />  
**3.** Create a new file in the project root directory `/memgraph_python` and name it  `Dockerfile`. Add the following code to it:

```Dockerfile
# Set base image (host OS)
FROM python:3.8

# Install CMake
RUN apt-get update && \
  apt-get --yes install cmake

# Install mgclient
RUN apt-get install -y git cmake make gcc g++ libssl-dev && \
  git clone https://github.com/memgraph/mgclient.git /mgclient && \
  cd mgclient && \
  git checkout dd5dcaaed5d7c8b275fbfd5d2ecbfc5006fa5826 && \
  mkdir build && \
  cd build && \
  cmake .. && \
  make && \
  make install

# Install pymgclient
RUN git clone https://github.com/memgraph/pymgclient /pymgclient && \
  cd pymgclient && \
  python3 setup.py build && \
  python3 setup.py install

# Set the working directory in the container
WORKDIR /code

# Copy the dependencies file to the working directory
COPY requirements.txt .

# Install dependencies
RUN pip install -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY src/ .

# Command to run on container start
CMD [ "python", "./program.py" ]
```

**4.** Create a directory for your source code, for example, `/src` and position yourself in it.<br />  
**5.** To make the actual program, create a new Python script. Name it `program.py` and add the following code:

```Python
import mgclient

# Make a connection to the database
connection = mgclient.connect(host='172.17.0.2', port=7687)

# Create a cursor for query execution
cursor = connection.cursor()

# Delete all nodes and relationships
query = "MATCH (n) DETACH DELETE n"

# Execute the query
cursor.execute(query)

# Create a node with the label FirstNode and message property with the value "Hello, World!"
query = """CREATE (n:FirstNode)
           SET n.message = '{message}'
           RETURN 'Node '  + id(n) + ': ' + n.message""".format(message="Hello, World!")

# Execute the query
cursor.execute(query)

# Fetch one row of query results
row = cursor.fetchone()

# Print the first member in row
print(row[0])
```

**6.** Don't forget to change the host address in your code.
Find the **`CONTAINER ID`** with `docker ps` and use it in the following command to retrieve the address:

```
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER ID
```

**7.** To run the application, first, you need to create a Docker image with:

```
docker build -t memgraph_python .
```

**8.** Now, you can run the application with the following command:

```
docker run memgraph_python
```

You should see an output similar to the following:

```
Node 1: Hello, World!
```

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at the **[Tutorials](../../tutorials/tutorials.md)** page. 
You can also browse through the **[Database functionalities](/database-functionalities/database-functionalities.md)** section to get an overview of all the functionalities Memgraph offers.

## Getting help

Visit the **[Getting help](../../getting-help/getting-help.md)** page in case you run into any kind of problem or you have additional questions.
