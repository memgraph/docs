---
id: pulsar-streams
title: How to manage Pulsar streams
sidebar_label: Manage Pulsar streams
---

If you are not familiar with Pulsar, then please check out their
[site](https://pulsar.apache.org) to get a better understanding. In the
documentation, we assume that a Pulsar cluster is available on the 6650 port of
the local machine (`127.0.0.1:6650`). Please adjust your setup accordingly.

:::note

For detailed technical information on streaming support, check out the
[reference guide](/reference-guide/streams/overview.md).

:::

## Configuring Memgraph

You need to provide a service URL so Memgraph can locate the Pulsar cluster. The
service URL can be set using the configuration flag `--pulsar-service-url`.

## Creating the stream

The very first step is to make sure at least one transformation module is loaded
into Memgraph. If you are not sure how to define them, check out the
[transformation module
guide](/how-to-guides/streams/pulsar/implement-transformation-module.md).
We will use `transformation.my_pulsar_transformation` from that example, but we
are going to alias it as `my.pulsar_transform` to make the size of result tables
slimmer. For the topic name, we are going to use `topic1`.

```cypher
CREATE PULSAR STREAM myStream
TOPICS topic1
TRANSFORM my.pulsar_transform;
```

Check the created stream:

```cypher
SHOW STREAMS;
```

The result should be similar to:

```plaintext
+-----------------------+-----------------------+----------------------+-----------------------+-----------------------+-----------------------+-----------------------+
| name                  | type                  | batch_interval       | batch_size            | transformation_name   | owner                 | is running            |
+-----------------------+-----------------------+----------------------+-----------------------+-----------------------+-----------------------+-----------------------+
| "myStream"            | "pulsar"              | 100                  | 1000                  | "my.pulsar_transform" | Null                  | false                 |
+-----------------------+-----------------------+----------------------+-----------------------+-----------------------+-----------------------+-----------------------+
```

The result contains the most important information about the existing streams,
e.g., its name, topics it is subscribed to, etc.

## Check if the stream is working

:::warning

`CHECK STREAM` only works for single non-partitioned topic consumers. The next
examples will fail if your Pulsar stream source consumes multiple topics or from
a partitioned topic.

:::

Maybe at first, you don't want to run the stream in the background but see the
actual result of the transformation. This can be handy when implementing a
transformation. To achieve that, we can use the `CHECK STREAM` query. This query
will consume the message from the last acknowledged message but won't
acknowledge the next message. That means you are free to play around with it,
and there won't be any permanent effects. For a freshly created stream, there is
probably no acknowledged message, so the `CHECK STREAM` query will wait for new
messages. By default, the query will wait `30000` milliseconds ( `30` seconds)
and after that, it will throw a timeout exception. To give us some more time,
use a larger timeout, e.g.: `60000` milliseconds ( `60` seconds):

```cypher
CHECK STREAM myStream TIMEOUT 60000;
```

If you started the query, let's send some messages to the topic. You should see
a similar output:

```plaintext
+---------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| queries                                                                                                                               | raw messages          |
+---------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
| [{parameters: {payload: "Example message 1", topic: "topic1"}, query: "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"}]       | ["Example message 1"] |
+---------------------------------------------------------------------------------------------------------------------------------------+-----------------------+
```

If you want to consume more batches, you can also increase the batch limit:

```cypher
CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;
```

As a result, you should see multiple messages (probably 3) in the output:

```plaintext
+---------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| queries                                                                                                                               | raw messages           |
+---------------------------------------------------------------------------------------------------------------------------------------+------------------------+
| [{parameters: {payload: "Memgraph <3 Pulsar", topic: "topic1"}, query: "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"}]      | ["Memgraph <3 Pulsar"] |
| [{parameters: {payload: "Example message 2", topic: "topic1"}, query: "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"}]       | ["Example message 2"]  |
| [{parameters: {payload: "Example message 3", topic: "topic1"}, query: "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"}]       | ["Example message 3"]  |
+---------------------------------------------------------------------------------------------------------------------------------------+------------------------+
```

## Start the stream

As we just demonstrated that the stream is working, we can start to ingest data
into the database by starting the stream and sending some messages to the topic.
As a safeguard, you can use the `BATCH_LIMIT` option to first start the stream and let it consume a limited number of batches. 

```
START STREAM myStream [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>];
```

After sending a few messages to the topic, the created vertices can be checked
by executing `MATCH (n: MESSAGE) RETURN n`:

```plaintext
+----------------------------------------------------------+
| n                                                        |
+----------------------------------------------------------+
| (:MESSAGE {payload: "first message", topic: "topic1"})   |
| (:MESSAGE {payload: "another message", topic: "topic1"}) |
| (:MESSAGE {payload: "it is working!", topic: "topic1"})  |
+----------------------------------------------------------+
```
If the result satisfies you, then you can fully start the stream by calling `START STREAM myStream` without providing a `BATCH_LIMIT` option. 

```
START STREAM myStream;
```

## Acknowledging messages

After each message is processed, the stream will acknowledge them. If the stream
is stopped using the `STOP STREAM myStream` query (or by shutting Memgraph
down), next time the stream is started, it will continue processing the message
from the last acknowledged message.
