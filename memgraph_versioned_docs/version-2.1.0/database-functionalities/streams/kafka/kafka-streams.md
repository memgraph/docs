---
id: kafka-streams
title: Managing Kafka streams
sidebar_label: Managing Kafka streams
---

If you are not familiar with Kafka, then please check out their [quickstart
guide](https://kafka.apache.org/quickstart) to get familiar. In the
documentation, we assume that a Kafka server is available on the 9092 port of
the local machine (`localhost:9092`) as the default configuration of the Kafka
quick start guide. Please adjust your setup accordingly.

:::tip
Check out the **example-streaming-app** on [GitHub](https://github.com/memgraph/example-streaming-app) to see how Memgraph can be connected to a Kafka stream.
:::

:::note
For detailed technical information on streaming support, check out the [reference guide](/reference-guide/streams/overview.md).
:::

## Configuring Memgraph

The list of default bootstrap servers can be set by the
`--kafka-bootstrap-servers` configuration option. It has to be set explicitly.
Morever, the user can overwrite the default list of brokers passed to
`--kafka-bootstrap-servers` by setting the `BOOTSTRAP_SERVERS <brokers>` option
on a `CREATE STREAM` clause.

## Creating the stream

The very first step is to make sure at least one transformation module is loaded into
Memgraph. If you are not sure how to define them, check out the
[transformation module guide](/database-functionalities/streams/kafka/implement-transformation-module.md).
We are going to use `transformation.my_transformation` from that example, but
we are going to alias it as `my.transform` to make the size of result tables slimmer.
For the topic name, we are going to use the topic from the Kafka quick start,
`quickstart-events`.

```cypher
CREATE STREAM myStream
TOPICS quickstart-events
TRANSFORM my.transform;
```

Check the created stream:

```cypher
SHOW STREAMS;
```

The result should be similar to:

```plaintext
+----------------------+----------------------+----------------------+----------------------+----------------------+----------------------+----------------------+
| name                 | type                 | batch_interval       | batch_size           | transformation_name  | owner                | is running           |
+----------------------+----------------------+----------------------+----------------------+----------------------+----------------------+----------------------+
| "myStream"           | "kafka"              | Null                 | Null                 | "my.kafka_transform" | Null                 | false                |
+----------------------+----------------------+----------------------+----------------------+----------------------+----------------------+----------------------+
```

The result contains the most important information about the existing streams,
e.g., its name, topics it is subscribed to, etc.

## Check if the stream is working

Maybe at first, you don't want to run the stream in the background but see the
actual result of the transformation. This can be handy when implementing a
transformation. To achieve that, we can use the `CHECK STREAM` query. This query
will consume the message from the last committed offset but won't commit the
offsets. That means you are free to play around with it, and there won't be any
permanent effects. For a freshly created stream there is probably no committed
offset, so the `CHECK STREAM` query will wait for new messages. By default, the
query will wait `30000` milliseconds (`30` seconds) and after that, it will
throw a timeout exception. To give us some more time, use a larger timeout,
e.g.: `60000` milliseconds (`60` seconds):

```cypher
CHECK STREAM myStream TIMEOUT 60000;
```

If you started the query, let's send some messages to the topic in the same way
as described in the Kafka quick start guide. You should see a similar output:

```plaintext
+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+
| query                                                                                | parameters                                                                           |
+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+
| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Example message 1", timestamp: 1625757014009, topic: "quickstart-events"} |
+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+
```

If you want to consume more batches, you can also increase the batch limit:

```cypher
CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;
```

As a result, you should see multiple messages (probably 3) in the output:

```plaintext
+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+
| query                                                                                | parameters                                                                           |
+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+
| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Memgraph <3 Kafka", timestamp: 1625757026942, topic: "quickstart-events"} |
| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Example message 2", timestamp: 1625757112493, topic: "quickstart-events"} |
| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})"       | {payload: "Example message 3", timestamp: 1625757118408, topic: "quickstart-events"} |
+--------------------------------------------------------------------------------------+--------------------------------------------------------------------------------------+
```

## Start the stream

As we just demonstrated that the stream is working, we can start to ingest data
into the database by starting the stream and sending some messages to the topic.

```
START STREAM myStream;
```

After sending a few messages to the topic, the created vertices can be checked
by executing `MATCH (n: MESSAGE) RETURN n`:

```plaintext
+-----------------------------------------------------------------------------------------------+
| n                                                                                             |
+-----------------------------------------------------------------------------------------------+
| (:MESSAGE {payload: "first message", timestamp: 1625757438919, topic: "quickstart-events"})   |
| (:MESSAGE {payload: "another message", timestamp: 1625757441665, topic: "quickstart-events"}) |
| (:MESSAGE {payload: "it is working!", timestamp: 1625757444175, topic: "quickstart-events"})  |
+-----------------------------------------------------------------------------------------------+
```

## Committed offsets

As our stream processed at least one message after starting it, it will commit
the message offset to the Kafka cluster. That means if the stream is stopped
by stopping it with the `STOP STREAM myStream` query (or by shutting Memgraph
down), the last committed offset will be retrieved from the Kafka cluster after
restarting the stream.

:::info
NOTE: As the committed offsets are stored for the consumer groups on the Kafka
cluster, if a new stream is created using the same consumer group, it might
continue consuming the message from the same offset where the previous stream
stopped. You can mitigate this by using different consumer group names or
resetting the committed offset via Kafka admin client.
:::

Previously, we mentioned that the `CHECK STREAM` query doesn't modify the
committed offsets, which means using `CHECK STREAM` on a stream that already
has some offsets committed can result in executing the transformation on the
same message multiple times. To demonstrate that, first, let's stop the stream:

```cypher
STOP STREAM myStream;
```

And then send a few messages to the topic, e.g.: `message A`, `message B` and
`message C`. Then run the same query as before:

```cypher
CHECK STREAM myStream TIMEOUT 60000;
```

Running this query multiple times should emit the same results:

```plaintext
+--------------------------------------------------------------------------------+--------------------------------------------------------------------------------+
| query                                                                          | parameters                                                                     |
+--------------------------------------------------------------------------------+--------------------------------------------------------------------------------+
| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})" | {payload: "message A", timestamp: 1625758319964, topic: "quickstart-events"}   |
| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})" | {payload: "message B", timestamp: 1625758321735, topic: "quickstart-events"}   |
| "CREATE (n:MESSAGE {timestamp: $timestamp, payload: $payload, topic: $topic})" | {payload: "message C", timestamp: 1625758323795, topic: "quickstart-events"}   |
+--------------------------------------------------------------------------------+--------------------------------------------------------------------------------+
```
