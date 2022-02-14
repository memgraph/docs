---
id: overview
title: Streams
sidebar_label: Streams overview
slug: /reference-guide/streams
---

Memgraph can connect to existing stream sources. To use streams, a user must:
1. [**Create a transformation
   module**](/reference-guide/streams/transformation-modules/overview.md)
2. [Configure Memgraph](/reference-guide/configuration.md) to connect to, e.g.
   Kafka, by providing the appropriate flag
   `--kafka-bootstrap-servers=localhost:9092`
3. [Create the stream](#creating-a-stream) with a `CREATE <streaming platform> STREAM` query and optionally
   [set its offset](#setting-a-stream-offset) with `CALL mg.kafka_set_stream_offset(stream_name, offset)`
4. [Start the stream](#start-a-stream) with a `START STREAM` query

:::tip

Check out the **example-streaming-app** on
[GitHub](https://github.com/memgraph/example-streaming-app) to see a sample
Memgraph-Kafka application.

:::

## Creating a stream

The syntax for creating a stream depends on the type of the source because each
specific type supports a different set of configuration options.

:::note

There is no strict order for specifying the configuration options.

:::

### Kafka

```cypher
CREATE KAFKA STREAM <stream name>
  TOPICS <topic1> [, <topic2>, ...]
  TRANSFORM <transform procedure>
  [CONSUMER_GROUP <consumer group>]
  [BATCH_INTERVAL <batch interval length>]
  [BATCH_SIZE <batch size>]
  [BOOTSTRAP_SERVERS <bootstrap servers>]
  [CONFIGS { <key1>: <value1> [, <key2>: <value2>, ...]}]
  [CREDENTIALS { <key1>: <value1> [, <key2>: <value2>, ...]}];
```

option|description|type|example|default
:-:|:-:|:-:|:-:|:-:
stream name|Name of the stream in Memgraph|plain text|my_stream|/
topic|Name of the topic in Kafka|plain text|my_topic|/
transform procedure|Name of the transformation file followed by a function name|function|my_transformation.my_transform|/
consumer group|Name of the consumer group in Memgraph|plain text|my_group|mg_consumer
batch interval duration|Maximum wait time in milliseconds for consuming messages before calling the transform procedure|int|9999|100
batch size|Maximum number of messages to wait for before calling the transform procedure|int|99|1000
bootstrap servers|Comma-separated list of bootstrap servers|string|"localhost:9092"|/
configs|String key-value pairs of configuration options for the Kafka consumer|map with string key-value pairs|{"sasl.username": "michael.scott"}|/
credentials|String key-value pairs of configuration options for the Kafka consumer, but their value aren't shown in the Kafka specific stream information|map with string key-value pairs|{"sasl.password": "password"}|/

:::warning
The credentials are stored on the disk without any encryption, which means everybody who has access to the data directory of Memgraph is able to get the credentials.
:::

To check the list of possible configuration options and their values, please
check the documentation of
[librdkafka](https://github.com/edenhill/librdkafka/blob/v1.7.0/CONFIGURATION.md)
library which is used in Memgraph. At the time of writing this documentation
Memgraph uses version 1.7.0 of librdkafka.

### Pulsar

```cypher
CREATE PULSAR STREAM <stream name>
  TOPICS <topic1> [, <topic2>, ...]
  TRANSFORM <transform procedure>
  [BATCH_INTERVAL <batch interval length>]
  [BATCH_SIZE <batch size>]
  [SERVICE_URL <service url>];

```

option|description|type|example|default
:-:|:-:|:-:|:-:|:-:
stream name|Name of the stream in Memgraph|plain text|my_stream|/
topic|Name of the topic in Pulsar|plain text|my_topic|/
transform procedure|Name of the transformation file followed by a function name|function|my_transformation.my_transform|/
batch interval duration|Maximum wait time in milliseconds for consuming messages before calling the transform procedure|int|9999|100
batch size|Maximum number of messages to wait for before calling the transform procedure|int|99|1000
service url|URL to the running Pulsar cluster|string|"127.0.0.1:6650"|/

The transformation procedure is called if either the `BATCH_INTERVAL` or the
`BATCH_SIZE` is reached, and there is at least one received message.

The `BATCH_INTERVAL` starts when the:
* the stream is started
* the processing of the previous batch is completed
* the previous batch interval ended without receiving any messages


The user who executes the `CREATE` query is going to be the owner of the stream.
Authentication and authorization are not supported in Memgraph Community, thus
the owner will always be `Null`, and the privileges are not checked in Memgraph
Community. In Memgraph Enterprise, the privileges of the owner are used when
executing the queries returned from a transformation. In other words, the
execution of the queries will fail if  the owner doesn't have the required
privileges. More information about how the owner affects the stream can be found
in the [reference guide](reference-guide/security.md#owners).

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
will be used. Therefore only the new messages will be consumed.

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
* stream name
* stream type
* batch interval
* batch size
* transformation procedure name
* the owner of the streams
* whether the stream is running

## Check stream

```cypher
CHECK STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>] ;
```

Does a dry-run on stream with name `<stream name>` with `<count>` number of
batches and returns the result of the transformation: the queries and their
parameters that would be executed in a normal run. If `<count>` is unspecified,
its default value is 1. After `<count>` batches are processed, the
transformation result is returned. If `<count>` number of batches are not
processed within the specified timeout, then an exception is thrown. This might
be caused by not receiving enough messages. `TIMEOUT` is measured in
milliseconds, and it's defaulted to 30000.

Checking a stream won't commit any offsets.

## Additional details

### Kafka and at least once semantics

In stream processing, it is important to have some guarantees about how failures
are handled. When connecting an external application such as Memgraph to a Kafka
stream, there are two possible ways to handle failures during message
processing:
1. Every message is processed **at least once**: the message offsets are
   committed to the Kafka cluster after the processing is done. This means if
   the committing fails, then the messages can get processed multiple times.
2. Every message is processed **at most once**: the message offsets are
   committed to the Kafka cluster right after they are received before the
   processing is started. This means if the processing fails, then the same
   messages won't be processed again.

Missing a message can result in missing an edge that would connect two
independent components of the graph. Therefore, we think that missing some
information is a bigger problem for graphs than having some information
duplicated, so we implemented our streams using the **at least once** semantics,
i.e. for every batch of messages the queries returned by the transformations are
executed and committed to the database before committing the message offset to
the Kafka cluster. However, even though we cannot guarantee **exactly once**
semantics, we tried to minimize the possibility of processing messages multiple
times. This means committing the message offsets to the Kafka cluster happens
right after the transaction is committed to the database.

## Configuring stream transactions

A stream can fail for various reasons. One of the failures of interest is when a transaction
(in which the returned queries of the transformation are executed) fails to commit because of another conflicting
transaction. This is a side effect of [isolation levels](/reference-guide/isolation-levels.md) and can
be configured by the following Memgraph flag:

```
--stream-transaction-conflict-retries=TIMES_TO_RETRY
```

By default, Memgraph will always try to execute a transaction once. However, for streams, if Memgraph
fails because of transaction conflicts it will retry to execute the transaction again for up to `TIMES_TO_RETRY` times
and its default value is 30.

Moreover, the interval of retries is also important and can be configured by
```
--stream-transaction-retry-interval=INTERVAL_TIME
```

The `INTERVAL_TIME` is measured in `milliseconds` and its default value is `500ms`.
## Setting a stream offset

For Kafka streams, users can manually set the offset of the next consumed
message with a call to the query procedure `mg.kafka_set_stream_offset` :

```cypher
CALL mg.kafka_set_stream_offset(stream_name, offset)
```

option|description|type|example|default
:-:|:-:|:-:|:-:|:-:
stream name|Name of the stream to set the offset|string|"my_stream"|/
offset|Offset number to set|int|0|/

* An offset of `-1` denotes the start of the stream, i.e., the beginning offset
  available for the given topic/partition.
* An offset of `-2` denotes the end of the stream, i.e., for each
  topic/partition, its logical end such that only the next produced message will
  be consumed.

Note, that a stream can consume from multiple topics each of them having
multiple partitions. Therefore, when setting the offsets to an arbitrary number
the user must be cautious that setting the offset of a stream internally sets
all of the associated offsets of that stream (topics/partitions) to that value.
