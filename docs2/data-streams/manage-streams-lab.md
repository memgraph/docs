---
id: manage-streams-lab
title: Manage data streams from Memgraph Lab
sidebar_label: Manage data streams from Memgraph Lab
---

If you prefer to use GUI, you can connect to data streams by using a wizard in
the **Stream** section of Memgraph Lab. If you prefere writing commands, you can
[manage streams with queries](/how-to-guides/streams/manage-streams.md). 

If you need a Kafka stream to play around with, we've provided some at [Awesome
Data Stream](https://awesomedata.stream/)! 

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/streams/overview.md) [![Related -
Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/tutorials/graph-stream-processing-with-kafka.md)

## How to add a stream?

To add a stream in Memgraph Lab: 

1. Switch to **Streams** and **Add New Stream**.
2. Choose stream type, enter a stream name, server address, and topics you want to subscribe to.
3. Go to the **Next Step**.
4. Click on **Edit** (pencil icon) to modify the *Consumer Group*, *Batch
   Interval* or *Batch Size*.

If you are trying to connect to MovieLens Kafka data stream from the [Awesome Data
Stream](https://awesomedata.stream/#/movielens), the stream configuration should
look like this:

<img src={require('../../data/tutorials/create-stream-lab/creating-stream-movielens.png').default}className={"imgBorder"}/>

Once the basic configuration is finished, you need to define a transformation
module and attach it to the stream. 

## How to add a transformation module?

A transformation module is a set of user-defined transformation procedures
written in [C](/reference-guide/streams/transformation-modules/api/c-api.md) or
[Python](/reference-guide/streams/transformation-modules/api/python-api.md) that
act on data received from a streaming source. Transformation procedures instruct
Memgraph on how to transform the incoming messages to consume them correctly.

At the moment, you can only develop Python transformation modules directly from
Memgraph Lab. 

To add a Python transformation module to a stream:
1. Click on **Add Transformation Module**.
2. Click on **Choose Transformation Module**.
3. Select an existing transformation module or **+ Create new transformation**.
4. Review an existing module or clear the screen and write a new transformation
   procedure.
5. Save the transformation module.
6. Check if the necessary transformation procedure is visible under **Detected
   transformation functions** on the right.
7. Select a transformation procedure and **Attach to Stream**.

You can also develop transformation modules in Python beforehand, in the section
**Query Modules**. Click on the **New Module**, and the Lab will automatically
recognize transformation procedures once you define them.

If you developed a procedure in C, you have to [load it into
Memgraph](manage-streams.md#how-to-create-and-load-a-transformation-module-into-memgraph)
first, and then you will be able to see it in the **Query Modules** section and
attach it to a stream. 

Check the transformation module for MovieLens on [Awesome Data
Stream](https://awesomedata.stream/#/movielens).

<img src={require('../../data/tutorials/create-stream-lab/transformation-module.png').default}className={"imgBorder"}/>

## How to set Kafka configuration parameters?

If necessary, add the Kafka configuration parameters to customize the stream further:

1. In the Kafka Configuration Parameters **+ Add parameter field**.
2. Insert the parameter name and value.
3. To add another parameter, **Add parameter filed**.
4. **Save Configuration** once you have set all parameters.

To connect to the [Awesome Data Stream](https://awesomedata.stream/) you need to set
the following Kafka configuration parameters:

* **sasl.username** \| public <br/>
* **sasl.password** \| public <br/>
* **security.protocol** \| SASL_PLAINTEXT <br/>
* **sasl.mechanism** \| PLAIN <br/>

<img src={require('../../data/tutorials/create-stream-lab/config-parameters.png').default}className={"imgBorder"}/>

## How to connect Memgraph to the stream and start ingesting the data?

Once the stream is configured, you can **Connect to Stream**. 

Memgraph will do a series of checks, ensuring that defined topics and
transformation procedures are correctly configured. If all checks pass
successfully, you can **Start the stream**. Once you start the stream, you will
no longer be able to change any of the configuration settings, just the
transformation module. 

The stream status changes to **Running**, and data is ingested into Memgraph.
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

## How to manage a stream?

To manage a stream in Memgraph Lab, go to **Streams** and click on the stream
you want to manage. 

### How to start, stop or delete a stream?

To start a draft steam, click on **Connect to Stream**.

To stop or start a stream, click on **Stop Stream**/**Start Stream**.

To delete a stream, click on **Delete Stream**.

### How to edit a stream?

You cannot edit a started stream. You can only create a new stream with the
changes you want to implement.

You can only change the transformation module and the stream
offset..

## How to change Kafka stream offset?

Kafka stream offset can be changed using a query only:

```cypher
CALL mg.kafka_set_stream_offset(streamName, offset)
```

An offset of `-1` denotes the beginning offset available for the given
topic/partition. 

An offset of `-2` denotes the end of the stream and only the
next produced message will be consumed.