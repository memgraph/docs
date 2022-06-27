---
id: connect-to-stream-from-lab
title: How to connect to a data stream from Memgraph Lab
sidebar_label: Connect to a data stream from Memgraph Lab
---

If you prefer to use GUI, you can now connect to data streams by using a wizard
in the **Stream** section of Memgraph Lab.

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/streams/overview.md)

## 1. Add a stream

To add a stream in Memgraph Lab: 

1. Switch to **Streams** and **Add New Stream**.
2. Choose Pulsar stream type, enter a stream name, server address, and topics you want to subscribe to.
3. Go to the **Next Step**.
4. Click on **Edit** (pencil icon) to modify the *Consumer Group*, *Batch
   Interval* or *Batch Size*.

Once the basic configuration is finished, you need to define a transformation
module and attach it to the stream. 

## 2. Add a transformation module

A transformation module is a set of user-defined transformation procedures
written in [C](/reference-guide/streams/transformation-modules/api/c-api.md) or
[Python](/reference-guide/streams/transformation-modules/api/python-api.md) that
act on data received from a streaming engine. Transformation procedures instruct
Memgraph on how to transform the incoming messages to consume them correctly.

At the moment, you can only develop Python transformation modules directly from
Memgraph Lab. If you need to develop a procedure in C, check this
guide on [how to load it into Memgraph](/how-to-guides/streams/pulsar/pulsar-streams#how-to-create-and-load-a-transformation-module-into-memgraph). 

To add the Python transformation module to a stream:
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

## 3. Connect Memgraph to the stream and start ingesting the data

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
<img src={require('../../../data/tutorials/create-stream-lab/graph.png').default}lassName={"imgBorder"}/>

## Managing a stream

To manage a stream in Memgraph Lab, go to **Streams** and click on the stream
you want to manage. 

### Start, stop or delete a stream

To start a draft steam, click on **Connect to Stream**.

To stop or start a stream, click on **Stop Stream**/**Start Stream**.

To delete a stream, click on **Delete Stream**.

### Edit a stream

You cannot edit a started stream. You can only create a new stream with the
changes you want to implement.

You can only change the transformation module the stream is using.