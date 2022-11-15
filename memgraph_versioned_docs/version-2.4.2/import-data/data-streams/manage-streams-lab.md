---
id: manage-streams-lab
title: Connect to data streams using Memgraph Lab wizard
sidebar_label: Connect using Memgraph Lab wizard
---

Memgraph can natively ingest streaming data from upstream sources using [Apache
Kafka](https://kafka.apache.org), [Redpanda](https://redpanda.com/) and
[Pulsar](https://pulsar.apache.org/).

[![Related -
Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/tutorials/graph-stream-processing-with-kafka.md) [![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/streams/overview.md) 

The following page instructs how to connect to data streams to ingest the data
and manage the connection using a wizard in the **Stream** section of Memgraph
Lab. If you prefer writing commands, you can also [manage streams with Cypher
queries](/import-data/data-streams/manage-streams.md). 

To import data from streams using Cypher queries:

1. [Start Memgraph](/installation/overview.mdx) and [connect to the database](/connect-to-memgraph/overview.mdx)
2. [Create a stream in Memgraph](#create-a-stream-in-memgraph)
3. [Add a transformation module](#add-a-transformation-module)  
4. [Start ingesting data from the stream](#start-ingesting-data-from-the-stream)

If you need a Kafka stream to play around with, we've provided some at [Awesome
Data Stream](https://awesomedata.stream/)! 

## Create a stream in Memgraph

To add a stream in Memgraph Lab: 

1. Switch to **Streams** and **Add New Stream**.
2. Choose stream type, enter a stream name, server address, and topics you want to subscribe to.
3. Go to the **Next Step**.
4. Click on **Edit** to modify the *Consumer Group*, *Batch Interval* or *Batch
   Size*.

If you are trying to connect to MovieLens Kafka data stream from the [Awesome Data
Stream](https://awesomedata.stream/#/movielens), the stream configuration should
look like this:

<img src={require('../../data/tutorials/create-stream-lab/creating-stream-movielens.png').default}className={"imgBorder"}/>

Once the basic configuration is finished, you need to define a transformation
module and attach it to the stream. 

## Add a transformation module

A [transformation
module](/reference-guide/streams/transformation-modules/overview.md) is a set of user-defined transformation procedures
written in [C](/reference-guide/streams/transformation-modules/api/c-api.md) or
[Python](/reference-guide/streams/transformation-modules/api/python-api.md) that
act on data received from a streaming source. Transformation procedures instruct
Memgraph on how to transform incoming messages to consume them correctly.

While you are creating a new stream, you can create and add a new transformation
module in Python from the stream details view:
1. Click on **Add Transformation Module**.

   <img src={require('../../data/tutorials/create-stream-lab/add-trans-module.png').default}className={"imgBorder"}/>

2. Click on **Choose Transformation Module**.
3. Select an existing transformation module, or **+ Create new transformation**.
4. Review an existing module, or clear the screen and write a new transformation
   procedure.
5. Save the transformation module.
6. Check if the necessary transformation procedure is visible under **Detected
   transformation functions** on the right.
7. Select a transformation procedure and **Attach to Stream**.

   <img src={require('../../data/tutorials/create-stream-lab/transformation-module.png').default}className={"imgBorder"}/>

You can also develop transformation modules in Python beforehand in the section
**Query Modules**. Click on the **New Module**, and the Lab will automatically
recognize transformation procedures once you define them and save the module.

If you developed a procedure in C (or Python) as a separate file, you have to
[load it into
Memgraph](manage-streams.md#create-and-load-a-transformation-module-into-memgraph)
first, and then you will be able to see it in the **Query Modules** section
and attach it to a stream. 

Check the transformation module for MovieLens on [Awesome Data
Stream](https://awesomedata.stream/#/movielens).

## Set Kafka configuration parameters

If necessary, add the Kafka configuration parameters to customize the stream:

1. In the Kafka Configuration Parameters **+ Add parameter field**.
2. Insert the parameter name and value.
3. To add another parameter, **Add parameter filed**.
4. **Save Configuration** once you have set all parameters.

To connect to the [Awesome Data Stream](https://awesomedata.stream/) you need to set
the following Kafka configuration parameters:

* **sasl.username**: public <br/>
* **sasl.password**: public <br/>
* **security.protocol**: SASL_PLAINTEXT <br/>
* **sasl.mechanism**: PLAIN <br/>

<img src={require('../../data/tutorials/create-stream-lab/config-parameters.png').default}className={"imgBorder"}/>

## Connect Memgraph to the stream and start ingesting the data

Once the stream is configured, you can **Connect to Stream**. 

Memgraph will do a series of checks, ensuring that defined topics and
transformation procedures are correctly configured. If all checks pass
successfully, you can **Start the stream**. Once you start the stream, you will
no longer be able to change configuration settings, just the transformation
module. 

The stream status changes to **Running** and data is ingested into Memgraph.
You can see the number of nodes and relationships rising as the data keeps
coming in. If your nodes and relationships numbers stay at zero, check the
transformation module, as there might be a flaw in the logic that needs to be
resolved. 

Switch to **Query Execution** and run a query to visualize the data coming in: 

```
MATCH p=(n)-[r]-(m)
RETURN p LIMIT 100;
```

<img src={require('../../data/tutorials/create-stream-lab/graph.png').default}lassName={"imgBorder"}/>

## Manage a stream

To manage a stream in Memgraph Lab, go to **Streams** and click on the stream
you want to manage (**View stream details**). 

### Start, stop, or delete a stream

Position yourself in the stream details view. 

To start a draft steam, click **Connect to Stream**.

To stop or start a stream, click **Stop Stream**/**Start Stream**.

To delete a stream, click **Delete Stream**.

### Edit a stream

You cannot edit a started stream. You can only create a new stream with the
changes you want to implement.

You can only change the transformation module in the stream details view. 

## Change Kafka stream offset

Kafka stream offset can be changed only by using a Cypher query. 

First stop the stream if it's running, then use the following Cypher query to
change Kafka stream offset if necessary and start it again:

```cypher
CALL mg.kafka_set_stream_offset(streamName, offset)
```

An offset of `-1` denotes the beginning offset available for the given
topic/partition. 

An offset of `-2` denotes the end of the stream in which case only the
next produced message will be consumed.

## Logs

If you are running Memgraph with Docker and want to see logs in Memgraph Lab, be
sure to expose the 7444 port when running the `docker run` command.

Otherwise, Memgraph's log files can be found at
`/var/log/memgraph/memgraph_<date>.log`. Look for the name of your stream in the
log file to find the error.

## Demo video

As a part of the [Memgraph Cloud](/memgraph-cloud) release, we've showcased
different features of Memgraph Lab, for example, how to connect to data streams
using Memgraph Lab!

Feel free to check it out:

[<img alt="memgraph_lab" src={require('../../data/tutorials/create-stream-lab/stream-video.png').default} style={{width:'30%'}}/>](https://youtu.be/Tt5KPKylU8k?t=1585 "Connecting to streams from Memgraph Lab")

## What's next?

Take a look at the tutorial we made to help you [connect Memgraph and
Kafka](/tutorials/graph-stream-processing-with-kafka.md). Learn more about the
query power of [Cypher language](/cypher-manual), or check out [MAGE](/mage) -
an open-source repository that contains graph algorithms and modules that can
help you tackle the most interesting and challenging graph analytics problems.