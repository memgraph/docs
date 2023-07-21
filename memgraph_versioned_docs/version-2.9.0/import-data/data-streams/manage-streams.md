---
id: manage-streams
title: Connect to data streams using Cypher queries
sidebar_label: Connect using Cypher queries
---

Memgraph can natively ingest streaming data from upstream sources using [Apache
Kafka](https://kafka.apache.org), [Redpanda](https://redpanda.com/) and
[Pulsar](https://pulsar.apache.org/).

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/streams/overview.md)

The following page instructs how to connect to data streams to ingest the data
and manage the connection using Cypher queries. The connection to streams can
also be [managed through the **Stream** section in the Memgraph
Lab](/import-data/data-streams/manage-streams-lab.md). 

To import data from streams using Cypher queries:

1. [Start Memgraph](/installation/overview.mdx) and [connect to the database](/connect-to-memgraph/overview.mdx)
2. [Create and load a transformation module into Memgraph](#create-and-load-a-transformation-module-into-memgraph)  
3. [Create a stream in Memgraph](#create-a-stream-in-memgraph)
4. [Start ingesting data from the stream](#start-ingesting-data-from-the-stream)

<img src={require('../../data/import-data/kafka-overview.png').default}/>

If you need a Kafka stream to play around with, we've provided some at [Awesome
Data Stream](https://awesomedata.stream/)! 

## Create and load a transformation module into Memgraph

A [transformation
module](/reference-guide/streams/transformation-modules/overview.md) is a set of
user-defined transformation procedures written in
[C](/reference-guide/streams/transformation-modules/api/c-api.md) or
[Python](/reference-guide/streams/transformation-modules/api/python-api.md) that
act on data received from a streaming engine. Transformation procedures instruct
Memgraph on how to transform the incoming messages to consume them correctly. 

Once you [created a Python or a shared library file
(module)](/reference-guide/streams/transformation-modules/overview.md#creating-a-transformation-module),
save the file into the Memgraph's `query_modules` or `internal_modules`
directory (default: `/usr/lib/memgraph/query_modules` and
`/var/lib/memgraph/internal_modules/`). If you are using Docker, you need to [transfer
the transformation module file into the Docker
container](/how-to-guides/work-with-docker.md#how-to-copy-files-from-and-to-a-docker-container).

If you are using Memgraph Lab you can [create transformation module in Python within the
application](/reference-guide/streams/transformation-modules/overview.md#creating-transformation-modules-within-memgraph-lab). 

The best practice is to have a dedicated topic for each message type to parse the
data more efficiently. Each topic requires a separate procedure within a single
transformation module to handle the conversion.

### Load the transformation module

When started, Memgraph will automatically attempt to load the transformation
modules from all `*.so` and `*.py` files it finds in the default
`/usr/lib/memgraph/query_modules` and `/var/lib/memgraph/internal_modules` directories.

You can point to a different directory by changing or extending the
`--query-modules-directory` flag in the main configuration file
(`/etc/memgraph/memgraph.conf`). If you need help changing the configuration
file, check out the [how-to guide](/how-to-guides/config-logs.md). You can also
define the flag within a command-line parameter when using Docker.

:::caution

Please remember that if you are using Memgraph Platform image, you should pass
configuration flags within MEMGRAPH environment variable (e.g. `docker run -p
7687:7687 -p 3000:3000 -p 7444:7444 -e MEMGRAPH="--log-level=TRACE"
memgraph/memgraph-platform`) and if you are using any other image, you should
pass them as arguments after the image name (e.g., `... memgraph/memgraph-mage
--log-level=TRACE --query-modules-directory=path/path`).

:::

If the transformation module has been added to the directory while the Memgraph
instance was already running, you need to load it manually by using the
following query:

```cypher
CALL mg.load('transformation_name');
```

or

```cypher
CALL mg.load_all();
```

### Check the transformation module

If you want to check if your module has properly loaded in Memgraph run:

```cypher
CALL mg.transformations() YIELD *;
```

You should see an output similar to the following:

```cypher
+------------------+------------------------------------+-----------------------------------------------------------------+
| is_editable      | name                               | path                                                            |
+------------------+------------------------------------+-----------------------------------------------------------------|
| `true`           | "transformation_module.procedure"  | `/var/lib/memgraph/internal_modules/transformation_module.py    |
+------------------+------------------------------------+-----------------------------------------------------------------+
```

## Create a stream in Memgraph

To create a stream with a Cypher query, you first need to [load the
transformation module into
Memgraph](#create-and-load-a-transformation-module-into-memgraph), then run a
`CREATE .. STREAM` Cypher query to create a stream. 

You need to create one stream for each topic and procedure you have.

Below are basic Cypher queries for starting streams. For more options and
information about the `CREATE .. STREAM` query and all the other options
regarding streams, such as additional Kafka configuration options, check out the
[reference guide](/reference-guide/streams/overview.md).

### Kafka and Redpanda

The most basic Cypher query for creating a connection to a Kafka or Redpanda stream is:

```cypher
CREATE KAFKA STREAM streamName
TOPICS topic1[, <topic2>, ...]
TRANSFORM transModule.transProcedure
BOOTSTRAP_SERVERS bootstrapServers;
```

### Pulsar

The most basic Cypher query for creating a connection to a Pulsar stream is:

```cypher
CREATE PULSAR STREAM streamName
TOPICS topic1[,topic2, ...]
TRANSFORM transModule.transProcedure
SERVICE_URL serviceURL;
```

### Get information about a stream

You can get the basic stream information with:

```cypher
SHOW STREAMS;
```

### Check the transformed incoming data

To see the results of the transformation module, use the `CHECK STREAM` clause.
It will consume the message from the last committed offset but won't commit the
offsets. There is no committed offset coming from a newly created stream, so by
default, Memgraph will wait `30000` milliseconds (`30` seconds) for new
messages, and after that, it will throw a timeout exception. You can change the
timeout by adding the `TIMEOUT` sub-clause and a custom time to the query. 

The following Cypher query will transform new messages that come from the stream
within 60 seconds:

```cypher
CHECK STREAM myStream TIMEOUT 60000;
```

To consume more batches, increase the `BATCH_LIMIT`:

```cypher
CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;
```

## Start ingesting data from the stream

To start ingesting data, execute the following query:

```cypher
START STREAM stream_name;
```

or

```cypher
START ALL STREAMS;
```

Your data should be slowly arriving in your Memgraph instance. 

### Stop or delete a connection to a stream

To stop a stream:

```cypher
STOP STREAM streamName;
```

To delete a stream:

```cypher
DROP STREAM streamName;
```

For more options, [check the reference guide](/reference-guide/streams/overview.md#start-a-stream).

## Change Kafka stream offset

First, stop the stream if it's running, then use the following Cypher query to
change Kafka stream offset if necessary and start it again:

```cypher
CALL mg.kafka_set_stream_offset(streamName, offset)
```

An offset of `-1` denotes the beginning offset available for the given
topic/partition. 

An offset of `-2` denotes the end of the stream in which case only the
next produced message will be consumed.


## Logs

Errors and notifications regarding streams are contained in Memgraph's log files
which can be found at `/var/log/memgraph/memgraph_<date>.log`. Look for the name
of your stream in the log file to find the error. You can use the `grep` command
to search for the stream in the log file:

```
grep '<stream_name>' /var/log/memgraph/memgraph_<date>.log
```

## What's next?

Take a look at the tutorial we made to help you [connect Memgraph and
Kafka](/tutorials/graph-stream-processing-with-kafka.md). Learn more about the
query power of [Cypher language](/cypher-manual), or check out [MAGE](/mage) -
an open-source repository that contains graph algorithms and modules that can
help you tackle the most interesting and challenging graph analytics problems.

You might also be interested in the [Graph Style Script
language](/memgraph-lab/graph-style-script-language) that will help you bedazzle
your graphs in Memgraph Lab. Above all, enjoy your graph database!
