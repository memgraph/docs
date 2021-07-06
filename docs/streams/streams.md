---
id: streams 
title: Streams  
sidebar_label: Streams 
slug: /streams
---

Memgraph can connect to existing Kafka streams. To use streams, a user 
must 
- Manage a stream via a query
- Provide a user defined transformation module

The rest of this section describes how to manage streams with memgraph. 
More information about transformation modules can be found
**[here](./transformation-modules/c-api.md)**

## Creating streams query 
The general syntax for creating a stream is:
```cypher
CREATE STREAM <stream name>
  WITH TOPICS (['<topic1>', '<topic2>'])
  WITH TRANSFORM <transform procedure>
  [WITH CONSUMER_GROUP <consumer group name>]
  [BATCH_INTERVAL <milliseconds>]
  [BATCH_SIZE <size>];
```
Create a `STREAM` with name `<stream name>` that consumes messages from
`TOPICS` with name `<topic1>` and `<topic2>`. `TRANSFORM` specifies the
user defined transformation with name `<transform procedure>`. Additionally,
you can optionally specify `CONSUMER_GROUP` with name `<consumer group name>`.
`BATCH_INTERVAL` which specifies the maximum time to wait for messages 
before calling the transformation procedure with the already received message(s). 
This value must be greater than zero. Its default value is 100.
`BATCH_SIZE` specifies the total number of messages to wait before calling 
the transformation procedure with the already received message(s).  
It must be greater than zero. Its default value is 1000.

The transformation procedure is called if either the `BATCH_INTERVAL` or the
`BATCH_SIZE` is reached and there is at least one received message. 
The `BATCH_INTERVAL` starts when the:
- the stream is started
- the processing of previous batch is completed
- the previous batch interval ended without receiving any messages

## Deleting a stream query 
```cypher
DROP STREAM <stream name>;
```
Drops a stream with name `<stream name>` 

## Start
```cypher
START STREAM <stream name> [LIMIT <count> BATCHES];
START ALL STREAMS;
```
Starts a stream (or all streams) with name `<stream name>`.
`<count>` specifies the total number of processed batches.
When a stream is started, it should resume from the last committed 
offset.

## Stop
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
- transformation procedure name
- status
- consumer group id
- batch interval
- batch size

## Test connection 
```cypher
TEST STREAM <stream name> [LIMIT <count> BATCHES];
```
Tests the connection of `<stream name>` with `<count>` number of batches to test. 
After `<count>` number of batches are processed the transformation result is returned.
The result can be empty if the batch interval is reached.
