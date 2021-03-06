---
id: overview
title: Streams
sidebar_label: Overview
slug: /reference-guide/streams
---

Memgraph can connect to existing Kafka streams. To use streams, a user
must
- Manage a stream via a query
- Provide a user-defined transformation module

More information about transformation modules can be found
**[here](/reference-guide/streams/transformation-modules/overview.md)**.
The rest of this section describes how to manage streams with Memgraph.

## Creating a stream

The general syntax for creating a stream is:

```cypher
CREATE STREAM <stream name>
  TOPICS <topic1> [, <topic2>, ...]
  TRANSFORM <transform procedure>
  [CONSUMER_GROUP <consumer group name>]
  [BATCH_INTERVAL <milliseconds>]
  [BATCH_SIZE <size>];
```
Create a `STREAM` with name `<stream name>` that consumes messages from
`TOPICS` with name `<topic1>` and `<topic2>`. `TRANSFORM` denotes the user-defined
transformation with name `<transform procedure>`.

Additionally, the user can provide the following optional parameters:
- `CONSUMER_GROUP` with name `<consumer group name>`. If not specified, then
`mg_consumer` will be used as a consumer group name.
- `BATCH_INTERVAL` denotes the maximum wait time interval for consuming message(s)
before calling the transformation procedure with the already received message(s).
This value must be greater than zero and is defaulted to 100.
- `BATCH_SIZE` denotes the total number of messages to wait before calling
the transformation procedure with the already received message(s).
It must be greater than zero and is defaulted to 1000.

The transformation procedure is called if either the `BATCH_INTERVAL` or the
`BATCH_SIZE` is reached and there is at least one received message.
The `BATCH_INTERVAL` starts when the:
- the stream is started
- the processing of the previous batch is completed
- the previous batch interval ended without receiving any messages

## Deleting a stream

```cypher
DROP STREAM <stream name>;
```
Drops a stream with name `<stream name>`.

## Start a stream

```cypher
START STREAM <stream name>;
START ALL STREAMS;
```
Starts a stream (or all streams) with name `<stream name>`.

When a stream is started, it should resume from the last committed offset. If
there is no committed offset for the consumer group, then the largest offset
will be used, therefore only the new messages will be consumed.

### At least once semantics

In stream processing, it is important to have some guarantees about how failures
are handled. When connecting an external application such as Memgraph to a
Kafka stream, there are two possible ways to handle failures during message
processing:
1. Every message is processed **at least once**: the message offsets are
committed to the Kafka cluster after the processing is done. This means if the
committing fails, then the messages can get processed multiple times.
2. Every message is processed **at most once**: the message offsets are
committed to the Kafka cluster right after they are received before the
processing is started. This means if the processing fails, then the same
messages won't be processed again.

Missing a message can result in missing an edge that would connect two
independent components of the graph. Therefore, we think that missing
some information is a bigger problem for graphs than having some information
duplicated, so we implemented our streams using the **at least once**
semantics, i.e. for every batch of messages the queries returned by the
transformations are executed and committed to the database before committing
the message offset to the Kafka cluster. However, even though we cannot guarantee **exactly
once** semantics, we tried to minimize the possibility of processing messages
multiple times. This means committing the message offsets to the Kafka cluster
happens right after the transaction is committed to the database.

## Stop a stream

```cypher
STOP STREAM <stream name>;
STOP ALL STREAMS;
```
Stops a stream (or all streams) with name `<stream name>`.

## Show

```cypher
SHOW STREAMS;
```
Shows a list of existing streams with the following information:
- stream name
- list of topics
- consumer group id
- batch interval
- batch size
- transformation procedure name
- whether the stream is running

## Check stream

```cypher
CHECK STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>] ;
```
Does a dry-run on stream with name `<stream name>` with `<count>` number of
batches and returns the result of the transformation: the queries and their
parameters that would be executed in a normal run.
If `<count>` is unspecified, its default value is 1.
After `<count>` batches are processed, the transformation result is returned.
If `<count>` number of batches are not processed within the specified timeout,
then an exception is thrown. This might be caused by not receiving enough
messages.
`TIMEOUT` is measured in milliseconds, and it's defaulted to 30000.

Checking a stream won't commit any offsets.
