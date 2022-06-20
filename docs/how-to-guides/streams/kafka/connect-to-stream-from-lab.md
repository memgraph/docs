---
id: connect-to-stream-from-lab
title: How to connect to a data stream from Memgraph Lab
sidebar_label: Connect to a data stream from Memgraph Lab
---

If you prefer to use GUI, you can now connect to data streams by using a wizard
in the Memgraph Lab.

If you need a stream to play around with, we've provided some [Awesome
Data Stream](https://awesomedata.stream/)! 

## 1. Add a stream

To add a stream in Memgraph Lab: 

1. Switch to **Streams** and **Add New Stream**.
2. Choose Kafka stream type, enter a stream name, server address, and topics you want to subscribe to.
3. Go to the **Next Step**.
4. Click on **Edit** (pencil icon) to modify the *Consumer Group*, *Batch
   Interval* or *Batch Size*.

If you are trying to connect to MovieLens data stream from the Awesome Data
streams, the stream configuration should look similar to this:

<img src={require('../../../data/tutorials/create-stream-lab/creating-stream-movielens.png').default}className={"imgBorder"}/>

Once the basic configuration is finished, you need to define a transformation
module and attach it to the stream. 

## 2. Add a transformation module

A transformation module is a set of user-defined transformation procedures
written in [C](/reference-guide/streams/transformation-modules/api/c-api.md) or [Python](/reference-guide/streams/transformation-modules/api/python-api.md) that act on data received from a streaming engine.
Transformation procedures instruct Memgraph on how to transform the incoming
messages to consume them correctly. 

To add the transformation module:
1. Click on **Add Transformation Module**.
2. Click on **Choose Transformation Module**.
3. Select an existing transformation module or **+ Create new transformation**.
4. Review an existing module or clear the screen and write a new transformation
   procedure.
5. Save the transformation module.
6. Check if the necessary transformation procedure is visible under **Detected
   transformation functions** on the right.
7. Select a transformation procedure and **Attach to Stream**.

Check the transformation module for MovieLens on [Awesome Data Stream](https://awesomedata.stream/#/movielens).

<img src={require('../../../data/tutorials/create-stream-lab/transformation-module.png').default}className={"imgBorder"}/>

## 3. Set Kafka configuration parameters

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

## 4. Connect Memgraph to the stream and start ingesting the data

Once the stream is configured, you can **Connect to Stream**. 

Memgraph will do a series of checks, ensuring that defined topics and
transformation procedures are correctly configured. If all checks pass
successfully, you can **Start the stream**. Once you start the stream, you will no
longer be able to change any of the configuration settings, except the stream
offset and the transformation module. 

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
<img src={require('../../../data/tutorials/create-stream-lab/graph.png').default}lassName={"imgBorder"}/>