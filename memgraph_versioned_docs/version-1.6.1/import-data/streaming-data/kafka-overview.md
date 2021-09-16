---
id: kafka_overview
title: Importing data into Memgraph with Kafka streams
sidebar_label: Kafka streams overview
---

Memgraph can connect natively ingest streaming data from upstream sources using  [Apache Kafka](https://kafka.apache.org) and [Confulent Platform](https://www.confluent.io). 
To import data using streams, a user must:

1. Start Memgraph with Kafka cofiguration
2. Define transformation module
3. Create stream in Memgraph
4. Start ingesting data from the stream

(Kafka Illustraion 3)

## Prerequisites

To create a Kafka pipeline, you must meet the following prerequisites:
* Have a working Kafka stream
* Have access to a Memgraph instance

:::note
**Errors** : All of the errors regarding streams are contained in Memgraph's log files which can be found at
`/var/log/memgraph/memgraph_<date>.log` 
Just search for the name of your stream in log files to find the error.
Use the `grep` command to search for the stream in the log file:
```
grep '<stream_name>' /var/log/memgraph/memgraph_<date>.log
```
:::

## Importing data

When importing data, we have to take note of all different nodes and relationships our stream contains.
The best practice to handle them all separetely, each node label and each relationship type will have their own topic.
This kind of strategy always assumes one message represents one node or one relationship.

While it is possible to handle, topics which contain a variety of differently formatted messages should be avoided whenever possible.
These will be very difficult to deal with, and you shouldn’t attempt it unless you absolutely have to.
Sending data in different topics allows for better control of when either data type is created.
It is easier to parse the data from a single topic for the events of the same type. Only thing it takes
is to make separate transfomation module to handle the conversion. 

### 1. Start Memgraph with Kafka configuration

As Memgraph can connect to only one Kafka cluster at once, 
the list of bootstrap servers can be explicitly set by the `--kafka-bootstrap-servers` configuration option.
This can be edited in `memgraph.conf` file or set explicitly with flag during the startup.

### 2. Define transformation module

A transformation module is a user-defined program that recieves data from Kafka and outputs modifed data in the format of Cypher queries.
The most common formats received from Kafka are JSON, Avro or Protobuf. Transformation modules can be written in either Python or C.
 
By default, all of the modules load on the startup. If you want to change the directory in which Memgraph searches for transformation modules, 
just change or extend the `--query-modules-directory` flag in the main configuration file (`/etc/memgraph/memgraph.conf`) 
or supply it as a command-line parameter (e.g., when using Docker).

Check [this guide](https://docs.memgraph.com/memgraph/database-functionalities/streams/implement-transformation-module/#python-api) for an example
of how to implement transfomation modules in Python.

Load the transfomation module from `/usr/lib/memgraph/query_modules` by using the following query:

```cypher
CALL mg.load('<transformation_name>');
```

If you want to check if your module has properly loaded in Memgraph, you can check it with:

```cypher
CALL mg.transformations() YIELD *;
```

You should see something like the following:

```cypher
+-------------------------------------------------------+
| name                                                  |
+-------------------------------------------------------+
| "transformation_name.my_transformation_module" |
+-------------------------------------------------------+
```

### 3. Create stream in Memgraph

Creating, starting and deleting the stream can be done with cypher queries.
The list of queries can be found [here](https://docs.memgraph.com/memgraph/reference-guide/streams/).

To import data, first, make sure Kafka and Memgraph are running and there is a topic available. 


After making sure the transfomation module is loaded, connect Memgraph to stream with following query:
```cypher
CREATE STREAM <name_of_the_stream>   
TOPICS <name_of_the_topics_created>
TRANSFORM <transformation_module_name.transformation>;
```

### 4. Start ingesting data from the stream

This query only created the stream, start streaming data with the following query:
```cypher
START STREAM <name_of_the_stream>   
```

Your data should be slowly importing into your Memgraph instance. To check if everything is working,
check the `Overview`  tab in Memgraph Lab or run 
```cypher
CHECK STREAM <stream_name>
```
query in mgconsole.
