---
id: pulsar-streams
title: How to manage Pulsar streams
sidebar_label: Manage Pulsar streams
---

All the managing procedures for the streams that are described in this page are
using queries. Streams can also be managed through the **Stream** section in the
Memgraph Lab.

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/streams/overview.md)

## How to create and load a transformation module into Memgraph?

A [transformation
module](/reference-guide/streams/transformation-modules/overview.md) is a set of
user-defined transformation procedures written in
[C](/reference-guide/streams/transformation-modules/api/c-api.md) or
[Python](/reference-guide/streams/transformation-modules/api/python-api.md) that
act on data received from a streaming engine. Transformation procedures instruct
Memgraph on how to transform the incoming messages to consume them correctly. 

To create a transformation module, you need to:

1. [Create a Python or a shared library file
   (module)](/how-to-guides/streams/kafka/implement-transformation-module.md)
2. Save the file into the Memgraph's `query_modules` directory (default:
   `/usr/lib/memgraph/query_modules`)
3. Load the file into Memgraph either on startup (automatically) or by running a
   `CALL mg.load_all();` query

If you are using Docker to run Memgraph, check [how to transfer the file into the container](/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container?). 

If you are using Memgraph Lab you can [create transformation module within the
application](/reference-guide/streams/transformation-modules/overview/#creating-transformation-modules-within-memgraph-lab). 

## How to create a stream?

In order to create a stream with a query, first you need to [load the
transformation module into
Memgraph](#how-to-create-and-load-a-transformation-module-into-memgraph). The
most basic query for creating a stream is:


```cypher
CREATE PULSAR STREAM streamName
TOPICS topic1[,topic2, ...]
TRANSFORM transModule.transProcedure
SERVICE_URL serviceURL;
```

Additional options for creating a stream are explained in the [reference
guide](/reference-guide/streams/overview#Kafka). 

## How to get information about a stream?

You can get the basic stream information with:

```cypher
SHOW STREAMS;
```

## How to check the transformed incoming data?

To see the results of the transformation module use the `CHECK STREAM` clause.
It will consume the message from the last committed offset but won't commit the
offsets. There is no committed offset coming from a newly created stream, so by
default, the query will wait `30000` milliseconds (`30` seconds) for new
messages and after that, it will throw a timeout exception. You can change the
timeout by adding the `TIMEOUT` sub-clause and adding a custom time to the query. 

The following query will transform new messages that come from the stream within
60 seconds:

```cypher
CHECK STREAM myStream TIMEOUT 60000;
```

To consume more batches, increase the `BATCH_LIMIT`:

```cypher
CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;
```
## How to start, stop or delete a stream?

To start a stream:

```cypher
START STREAM streamName;
```

To stop a stream:

```cypher
STOP STREAM streamName;
```

To delete a stream:

```cypher
DROP STREAM streamName;
```

For more options, [check the reference guide](/reference-guide/streams/overview#start-a-stream).


