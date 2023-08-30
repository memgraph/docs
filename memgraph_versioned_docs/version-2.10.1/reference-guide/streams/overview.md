---
id: overview
title: Streams
sidebar_label: Streams overview
slug: /reference-guide/streams
---

Memgraph can connect to existing Kafka, Redpanda, and Pulsar sources to ingest
the data, which you can then query with the power of MAGE algorithms or your own
custom procedures.

[![Related -
Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/tutorials/graph-stream-processing-with-kafka.md) [![Related - How to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/import-data/data-streams/overview.md)

To use streams, a user must:

1. [Create a transformation
   module](/reference-guide/streams/transformation-modules/overview.md#creating-a-transformation-module)
2. [Load the transformation
   module](/reference-guide/streams/transformation-modules/overview.md#loading-modules) into
   Memgraph
3. [Create the stream](#create-a-stream) with a `CREATE <streaming platform> STREAM` query and optionally [set its offset](#setting-a-stream-offset) with
   `CALL mg.kafka_set_stream_offset(stream_name, offset)`
4. [Start the stream](#start-a-stream) with a `START STREAM` query

You can write Python transformation modules, create and start streams using the
**Stream** section in the Memgraph Lab, [check out
how](/import-data/data-streams/manage-streams-lab.md). 

:::tip

Check out the **example-streaming-app** on
[GitHub](https://github.com/memgraph/example-streaming-app) to see a sample
Memgraph-Kafka application.

:::

## Create a stream

The syntax for creating a stream depends on the type of the source because each
specific type supports a different set of configuration options.

There is no strict order for specifying the configuration options.

### Kafka and Redpanda

```cypher
CREATE KAFKA STREAM <stream name>
  TOPICS <topic1> [, <topic2>, ...]
  TRANSFORM <transform procedure>
  [CONSUMER_GROUP <consumer group>]
  [BATCH_INTERVAL <batch interval duration>]
  [BATCH_SIZE <batch size>]
  [BOOTSTRAP_SERVERS <bootstrap servers>]
  [CONFIGS { <key1>: <value1> [, <key2>: <value2>, ...]}]
  [CREDENTIALS { <key1>: <value1> [, <key2>: <value2>, ...]}];
```

|         Option          |                                                                  Description                                                                  |              Type               |              Example               |   Default   |
| :---------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------: | :--------------------------------: | :---------: |
|       stream name       |                                                        Name of the stream in Memgraph                                                         |           plain text            |             my_stream              |      /      |
|          topic          |                                                          Name of the topic in Kafka                                                           |           plain text            |              my_topic              |      /      |
|   transform procedure   |                                         Name of the transformation file followed by a procedure name                                          |            function             |   my_transformation.my_procedure   |      /      |
|     consumer group      |                                                    Name of the consumer group in Memgraph                                                     |           plain text            |              my_group              | mg_consumer |
| batch interval duration |                      Maximum waiting time in milliseconds for consuming messages before calling the transform procedure                       |               int               |                9999                |     100     |
|       batch size        |                                 Maximum number of messages to wait for before calling the transform procedure                                 |               int               |                 99                 |    1000     |
|    bootstrap servers    |                                                   Comma-separated list of bootstrap servers                                                   |             string              |          "localhost:9092"          |      /      |
|         configs         |                                    String key-value pairs of configuration options for the Kafka consumer                                     | map with string key-value pairs | {"sasl.username": "michael.scott"} |      /      |
|       credentials       | String key-value pairs of configuration options for the Kafka consumer, but their value aren't shown in the Kafka specific stream information | map with string key-value pairs |   {"sasl.password": "password"}    |      /      |

:::warning

The credentials are stored on the disk without any encryption, which means
everybody who has access to the data directory of Memgraph can get the
credentials.

:::

To check the list of possible configuration options and their values, please
check the documentation of
[librdkafka](https://github.com/edenhill/librdkafka/blob/v1.7.0/CONFIGURATION.md)
library, which is used in Memgraph. At the time of writing this documentation
Memgraph uses version 1.7.0 of librdkafka.

### Pulsar

```cypher
CREATE PULSAR STREAM <stream name>
  TOPICS <topic1> [, <topic2>, ...]
  TRANSFORM <transform procedure>
  [BATCH_INTERVAL <batch interval duration>]
  [BATCH_SIZE <batch size>]
  [SERVICE_URL <service url>];

```

|         Option          |                                            Description                                             |    Type    |            Example             | Default |
| :---------------------: | :------------------------------------------------------------------------------------------------: | :--------: | :----------------------------: | :-----: |
|       stream name       |                                   Name of the stream in Memgraph                                   | plain text |           my_stream            |    /    |
|          topic          |                                    Name of the topic in Pulsar                                     | plain text |            my_topic            |    /    |
|   transform procedure   |                    Name of the transformation file followed by a procedure name                    |  function  | my_transformation.my_procedure |    /    |
| batch interval duration | Maximum waiting time in milliseconds for consuming messages before calling the transform procedure |    int     |              9999              |   100   |
|       batch size        |           Maximum number of messages to wait for before calling the transform procedure            |    int     |               99               |  1000   |
|       service url       |                                 URL to the running Pulsar cluster                                  |   string   |        "pulsar://127.0.0.1:6650"        |    /    |

The transformation procedure is called if either the `BATCH_INTERVAL` or the
`BATCH_SIZE` is reached, and at least one message is received.

The `BATCH_INTERVAL` starts when the:

- the stream is started
- the processing of the previous batch is completed
- the previous batch interval ended without receiving any messages

After each message is processed, the stream will acknowledge them. If the stream
is stopped, the next time it starts, it will continue processing the message from
the last acknowledged message.

The user who executes the `CREATE` query is the owner of the stream.

**Memgraph Community** doesn't support authentication and authorization, so the
owner is always `Null`, and the privileges are not checked.

In **Memgraph Enterprise**, owner privileges are checked upon executing the
queries returned from the transformation procedures. If the owner doesn't have
the required privileges, the execution of the queries will fail. Find more
information about how the owner affects the stream in the [reference
guide](reference-guide/security.md#owners).

## Start a stream

The following query will start a specific stream with name `<stream name>` to
consume `<count>` number of batches for a maximum duration of `<milliseconds>`
milliseconds.

```cypher
START STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>];
```

The stream will automatically stop after consuming the given number of batches
or reaching the timeout. If `<count>` number of batches are not processed within
the specified `TIMEOUT`, probably because not enough messages was received, an
exception is thrown. `TIMEOUT` is measured in milliseconds, and its default
value is 30000. It can only be used in combination with the `BATCH_LIMIT`
option.

If `BATCH_LIMIT` (and `TIMEOUT`) is not provided, the `<stream name>` stream
will run for an infinite number of batches without a timeout limit.

```cypher
START STREAM <stream name>;
```

The following query will start all streams for an infinite number of batches and
without a timeout limit.

```cypher
START ALL STREAMS;
```

When a stream is started, it resumes ingesting data from the last committed
offset. If no offset is committed for the consumer group, the largest
offset will be used. Therefore, only the new messages will be consumed.

## Stop a stream

The following queries stop a specific stream or all streams.

```cypher
STOP STREAM <stream name>;
```

```cypher
STOP ALL STREAMS;
```

## Delete a stream

The following query drops a stream with the name `<stream name>`.

```cypher
DROP STREAM <stream name>;
```

## Show streams

To show streams, use the following query: 

```cypher
SHOW STREAMS;
```

It shows a list of existing streams with the following information:

- stream name
- stream type
- batch interval
- batch size
- transformation procedure name
- the owner of the streams
- whether the stream is running or not

## Check stream

To perform a dry-run on the stream and get the results of the transformation,
use the following query: 

```cypher
CHECK STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>];
```

The `CHECK STREAM` clause will do a dry-run on the `<stream name>` stream with
`<count>` number of batches and return the result of the transformation, that
is, the queries and parameters that would be executed in a normal run. If
`<count>` number of batches are not processed within the specified `TIMEOUT`,
probably because not enough messages were received, an exception is thrown.

The default value of `<count>` is 1. `TIMEOUT` is measured in milliseconds, and
its default value is 30000.

## Get stream information

To get more information about a specific Kafka or Redpanda stream, use the
following query:

```cypher
CALL mg.kafka_stream_info("stream_name") YIELD *;
```

This procedure will return information about the bootstrap server, set
configuration, consumer group, credentials, and topics.

To get more information about a specific Pulsar stream, use the
following query:

```cypher
CALL mg.pulsar_stream_info("stream_name") YIELD *;
```

The procedure will return the service URL and topics.

## Kafka producer delivery semantics

In stream processing, it is important to consider how failures are handled. When
connecting an external application such as Memgraph to a Kafka stream, there are
two possible ways to handle failures during message processing:

1. Every message is processed **at least once**: the message offsets are
   committed to the Kafka cluster after processing. If the committing fails, the
   messages can get processed multiple times.
2. Every message is processed **at most once**: the message offsets are
   committed to the Kafka cluster right after they are received before the
   processing is started. If the processing fails, the same messages
   won't be processed again.

Missing a message can result in missing an edge that would connect two
independent components of a graph. Therefore, the general opinion in Memgraph is
that missing some information is a bigger problem in graphs databases than
having duplicated information, so Memgraph uses **at least once** semantics,
i.e., the queries returned by the transformations are first executed and
committed to the database for every batch of messages, and only then is the
message offset committed to the Kafka cluster.

However, even though Memgraph cannot guarantee **exactly once** semantics, it
tries to minimize the possibility of processing messages multiple times. This
means committing the message offsets to the Kafka cluster happens right after
the transaction is committed to the database.

## Configuring stream transactions

A stream can fail for various reasons. One important type of failure is when a
transaction (in which the returned queries of the transformation are executed)
fails to commit because of another conflicting transaction. This is a side
effect of [isolation levels](/reference-guide/transactions.md#isolation-levels) and can be
remedied by the following Memgraph flag:

```
--stream-transaction-conflict-retries=TIMES_TO_RETRY
```

By default, Memgraph will always try to execute a transaction once. However, for
streams, if Memgraph fails because of transaction conflicts, it will retry to
execute the transaction again for up to `TIMES_TO_RETRY` times (default value is
30).

Moreover, the interval of retries is also important and can be configured with
the following Memgraph flag:

```
--stream-transaction-retry-interval=INTERVAL_TIME
```

The `INTERVAL_TIME` is measured in `milliseconds` and the default value is
`500ms`.

## Setting a stream offset

When using a Kafka stream, you can manually set the offset of the next consumed
message with a call to the query procedure `mg.kafka_set_stream_offset`:

```cypher
CALL mg.kafka_set_stream_offset(stream_name, offset)
```

|   Option    |               Description                |  Type  |   Example   | Default |
| :---------: | :--------------------------------------: | :----: | :---------: | :-----: |
| stream_name | Name of the stream to set the offset for | string | "my_stream" |    /    |
|   offset    |              Offset number               |  int   |      0      |    /    |

- An offset of `-1` denotes the start of the stream, i.e., the beginning offset
  available for the given topic/partition.
- An offset of `-2` denotes the end of the stream, i.e., for each
  topic/partition, its logical end such that only the next produced message will
  be consumed.

Stream can consume messages from multiple topics with multiple partitions.
Therefore, when setting the offsets to an arbitrary number be aware that setting
the offset of a stream internally sets all of the associated offsets of that
stream (topics/partitions) to that value.
