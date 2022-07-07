---
id: overview
title: Importing data from Kafka and Redpanda streams
sidebar_label: Kafka and Redpanda streams
slug: /import-data/kafka-redpanda
pagination_prev: import-data/overview
---

Memgraph can natively ingest streaming data from upstream sources using [Apache
Kafka](https://kafka.apache.org), [Confluent Platform](https://www.confluent.io)
and [Redpanda](https://redpanda.com/).

[![Related - Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/tutorials/graph-stream-processing-with-kafka.md) [![Related - How to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/streams/manage-streams.md) [![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/streams/overview.md)

To import data using streams, you must:

1. [Start Memgraph](#1-start-memgraph) 
2. [Define a transformation module](#2-define-a-transformation-module) 
3. [Load modules](#3-load-modules) 
4. [Create a stream in Memgraph](#4-create-a-stream-in-memgraph)
5. [Start ingesting data from the stream](#5-start-ingesting-data-from-the-stream)

<img src={require('../../data/import-data/kafka-overview.png').default}/>

## 1. Start Memgraph

[Start Memgraph](https://memgraph.com/docs/memgraph/next/installation) and
[establish a
connection](https://memgraph.com/docs/memgraph/next/connect-to-memgraph) to the
database.

If you are starting Memgraph using a Docker image and would like to access
configuration files or logs, be sure to run the image with the following
volumes:

- `-v mg_log:/var/log/memgraph`
- `-v mg_etc:/etc/memgraph`

## 2. Define a transformation module

A transformation module is a user-defined module that receives data from a
stream and returns processed data in the form of Cypher queries. The most common
formats are:

- **[JSON](#json)**
- **[Avro](#avro)**
- **[Protobuf](#protobuf)**

Transformation modules can be written in either
[**Python**](/reference-guide/streams/transformation-modules/api/python-api.md)
or [**C**](/reference-guide/streams/transformation-modules/api/c-api.md)
languages. Python transformation procedures can be written directly within Memgraph Lab, either
in the **Query Modules** section, or as a part of the wizard when setting up
streams. 

The best practice is to have a dedicated topic for each message type in order to
parse the data more efficiently. Each topic requires a separate procedure within
a single transformation module to handle the conversion. Below are
transformation examples of messages in different format. 

Once the transformation procedures have been written, the module needs to be
loaded into Memgraph.

### JSON

[JSON](https://www.json.org/json-en.html) (JavaScript Object Notation) is an
open standard file format and data interchange format that uses human-readable
text to store and transmit data objects consisting of attribute-value pairs and
arrays (or other serializable values). It is a common data format with a diverse
range of functionality in data interchange, including communication of web
applications with servers.

Let's assume we have the following schemas coming out of three topics:

```json
person = {
        "id" : int,
        "name": str,
        "address" : str,
        "mail": str,
    }
company = {
        "id" : int,
        "name" : str,
        "address" : str,
        "mail": str,
    }
works_at = {
            "person_id"  : int,
            "company_id" : int,
            "start_date" : date,
        }
```

The procedures within the Python transformation module that will transform the incoming
data into Cypher query would look like this:

```python
import mgp
import json

@mgp.transformation
def person_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []
    for i in range(messages.total_messages()):
        message = messages.message_at(i)
        message_json = json.loads(message.payload())
        result_queries.append(mgp.Record (
                query=f'''MERGE (p:Person {{ id: ToInteger({message_json["id"]}), name: "{message_json["name"]}",
                address: "{message_json["address"]}", mail: "{message_json["mail"]}" }})''' ,
                parameters=None
            ))
    return result_queries

@mgp.transformation
def company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []
    for i in range(messages.total_messages()):
        message = messages.message_at(i)
        message_json = json.loads(message.payload())
        result_queries.append(mgp.Record (
                query=f'''MERGE (c:Company {{ id: ToInteger({message_json["id"]}), name: "{message_json["name"]}",
                address: "{message_json["address"]}", mail: "{message_json["mail"]}" }})''' ,
                parameters=None
            ))
    return result_queries

@mgp.transformation
def employees_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []

    for i in range(messages.total_messages()):
        message = messages.message_at(i)
        message_json = json.loads(message.payload())
        result_queries.append(mgp.Record (
                query=f'''MATCH (p:Person ), (c:Company) 
                WHERE p.id = "{message_json["person_id"]}" AND c.id = "{message_json["company_id"]}" 
                MERGE (p)-[WORKS_AT: {{start_date: date({message_json["start_date"]})}}]->(c)'''  ,
                parameters=None
            ))

    return result_queries
```

Upon creating three separate streams in Memgraph (one for each topic), and
ingesting the data, the graph schema looks like this:

<img src={require('../../data/import-data/kafka-graph.png').default} height="300px"/>

If you need help writing transformation modules, check out [the tutorial on
writing modules in
Python](/tutorials/graph-stream-processing-with-kafka.md#2-create-a-transformation-module),
and [an example of a C transformation
procedure](/reference-guide/streams/transformation-modules/api/c-api.md#transformation-module-example). 

### Avro

If you want to import your data in Memgraph using Apache Avro serialization, you
need to know the [Avro
schema](https://avro.apache.org/docs/current/gettingstartedpython.html#Defining+a+schema)
of your data. This is necessary for deserializing the data. Each schema contains
a single schema definition, so there should be a separate schema for each data
representation you want to import into Memgraph.

Avro data types will be flexibly mapped to the target schema, that is, Avro and
openCypher types do not need to match exactly. Use the table below for data type
mappings:

| Avro Data Type | Cypher Casting Function|
|----------------|------------------------|
| bool           | toBoolean              |
| float          | toFloat                |
| int            | toInteger              |


Let's assume we have the following schemas coming out of three topics:

```json
profile_schema = """ {
    "namespace": "example.avro",
    "name": "Person",
    "type": "record",
    "fields": [
        {"name": "id", "type": "int"},
        {"name": "name", "type": "string"},
        {"name": "address", "type": "string"}
        {"name": "mail", "type": "string"},
    ]
}"""

company_schema = """{
    "namespace": "example.avro",
    "name": "Company",
    "type": "record",
    "fields": [
        {"name": "id", "type": "int"},
        {"name": "name", "type": "string"},
        {"name": "address", "type": "string"}
        {"name": "mail", "type": "string"},
    ]
} """

works_at_schema = """ {
    "namespace": "example.avro",
    "name": "Works_At",
    "type": "record",
    "fields": [
        {"name": "person_id", "type": "int"},
        {"name": "company_id", "type": "int"}
        {"name": "start_date", "type": "date"}
    ]
}
"""
```

Data received by the Memgraph consumer is a byte array and needs to be
deserialized. The following method will deserialize data with the help of
Confluent Kafka:

```python
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroDeserializer

def process_record_confluent(record: bytes, src: SchemaRegistryClient, schema: str):
    deserializer = AvroDeserializer(schema_str=schema, schema_registry_client=src)
    return deserializer(record, None) # returns dict

```

The procedures within the Python transformation module that will transform the incoming
data into Cypher query would look like this:

```python
import mgp

@mgp.transformation
def person_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []

    for i in range(messages.total_messages()):
        message_avro = messages.message_at(i)
        msg_value = message_avro.payload()
        message = process_record_confluent(msg_value, src= SchemaRegistryClient({'url': 'http://localhost:8081'}), schema=profile_schema)
        result_queries.append(mgp.Record (
                query=f'''MERGE (p:Person {{ id: ToInteger({message["id"]}), name: "{message["name"]}", address: "{message["address"]}", mail: "{message["mail"]}" }})''' ,
                parameters=None
            ))

    return result_queries

@mgp.transformation
def company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []

    for i in range(messages.total_messages()):
        message_avro = messages.message_at(i)
        msg_value = message_avro.payload()
        message = process_record_confluent(msg_value, src= SchemaRegistryClient({'url': 'http://localhost:8081'}), schema=profile_schema)
        result_queries.append(mgp.Record (
                query=f'''MERGE (c:COmpany {{ id: ToInteger({message["id"]}), name: "{message["name"]}", address: "{message["address"]}", mail: "{message["mail"]}" }})''' ,
                parameters=None
            ))

    return result_queries

@mgp.transformation
def company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []

    for i in range(messages.total_messages()):
        message_avro = messages.message_at(i)
        msg_value = message_avro.payload()
        message = process_record_confluent(msg_value, src= SchemaRegistryClient({'url': 'http://localhost:8081'}), schema=profile_schema)
        result_queries.append(mgp.Record (
                query=f'''MATCH (p:Person ), (c:Company) 
                WHERE p.id = "{message["person_id"]}" AND c.id = "{message["company_id"]}" 
                MERGE (p)-[WORKS_AT: {{start_date: date({message["start_date"]})}}]->(c)'''  ,
                parameters=None
            ))

    return result_queries

```

Upon creating three separate streams in Memgraph (one for each topic), and ingesting the data, the
graph schema looks like this:

<img src={require('../../data/import-data/kafka-graph.png').default} height="300px"/>


### Protobuf

Similar to Apache Avro,
[Protobuf](https://developers.google.com/protocol-buffers) is a method of
serializing structured data. A message format is defined in a `.proto` file, and
from it you can generate code in many languages, including Java, Python, C++,
C#, Go, and Ruby. Unlike Avro, Protobuf does not serialize schema with the
message. In order to deserialize the message, you need the schema in the
consumer. A benefit of working with Protobuf is the option to define multiple
messages in one `.proto` file.

Let's assume we have the following schemas coming out of three topics:

```protobuf
syntax = "proto3";

message Person {
    int64 id = 1;
    string name = 2;
    string address = 3;
    string mail = 4;
}

message Company {
    int64 id = 1;
    string name = 2;
    string address = 3;
    string mail = 4;
}

message WorksAt {
    int64 person_id = 1;
    int64 company_id = 2;
    string start_date = 3;
}

```
These schemas translate into the `.proto` file.
Before making your transformation script, it is necessary to [generate
code](https://developers.google.com/protocol-buffers/docs/pythontutorial#compiling-your-protocol-buffers)
from the `.proto` file.

Data received by the Memgraph consumer is a byte array and needs to be
deserialized. The following method will help you deserialize your data with the
help of Confluent Kafka:

```python
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.protobuf import ProtobufDeserializer

import person_pb2 # proto file compiled into Python module

def process_record_protobuf(record: bytes, message_type: obj) -> dict:
    deserializer = ProtobufDeserializer(message_type)
    return deserializer(record, None)
```

`message_type` corresponds to the message defined in `.proto` file. This method
should be added to the transformation module.

The procedures within the Python transformation module that will transform the incoming
data into Cypher query would look like this:

```python
import mgp

@mgp.transformation
def person_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []
    for i in range(messages.total_messages()):
        message_pb = messages.message_at(i)
        msg_value = message_pb.payload()
        message = process_record_protobuf(msg_value, person_pb2.Person)
        result_queries.append(mgp.Record (
                query=f'''MERGE (p:Person {{ id: ToInteger({message.id}), name: "{message.name}", address: "{message.address}", mail: "{messag.mail}" }})''' ,
                parameters=None
            ))

    return result_queries

@mgp.transformation
def company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []
    for i in range(messages.total_messages()):
        message_pb = messages.message_at(i)
        msg_value = message_pb.payload()
        message = process_record_protobuf(msg_value, person_pb2.Person)
        result_queries.append(mgp.Record (
                query=f'''MERGE (c:Copany {{ id: ToInteger({message.id}), name: "{message.name}", address: "{message.address}", mail: "{messag.mail}" }})''' ,
                parameters=None
            ))

    return result_queries

@mgp.transformation
def company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []
    for i in range(messages.total_messages()):
        message_pb = messages.message_at(i)
        msg_value = message_pb.payload()
        message = process_record_protobuf(msg_value, person_pb2.Person)
        result_queries.append(mgp.Record (
                query=f'''MATCH (p:Person ), (c:Company) 
                WHERE p.id = "{message.person_id}" AND c.id = "{message.company_id}" 
                MERGE (p)-[WORKS_AT: {{start_date: date({message.start_date})}}]->(c)'''  ,
                parameters=None
            ))

    return result_queries
```

Upon creating three separate streams in Memgraph (one for each topic), and ingesting the data, the
graph schema looks like this:

<img src={require('../../data/import-data/kafka-graph.png').default} height="300px"/>


## 3. Load modules

When started, Memgraph will automatically attempt to load the transformation
modules from all `*.so` and `*.py` files it finds in the default
`/usr/lib/memgraph/query_modules` and `/memgraph/internal_modules` directories.
If you are using Docker, you need to [transfer the transformation module file
into the Docker
container](/how-to-guides/work-with-docker.md#how-to-copy-files-from-and-to-a-docker-container).

You can point to a different directory by changing or extending the
`--query-modules-directory` flag in the main configuration file
(`/etc/memgraph/memgraph.conf`). If you need help with changing the
configuration file, check out the [how-to guide](/how-to-guides/config-logs.md).
You can also define the flag within a command-line parameter when using Docker.

:::caution

Please remember that if you are using Memgraph Platform image, you should pass
configuration flags within MEMGRAPH environmental variable (e.g. `docker run -p
7687:7687 -p 3000:3000 -p 4777:4777 -e MEMGRAPH="--log-level=TRACE"
memgraph/memgraph-platform`) and if you are using any other image, you should
pass them as arguments after the image name (e.g., `... memgraph/memgraph-mage
--log-level=TRACE --query-modules-directory=path/path`).

:::

### Load modules while the instance is already running

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
+------------------+------------------------------------+---------------------------------------------------------+
| is_editable      | name                               | path                                                    |
+------------------+------------------------------------+---------------------------------------------------------|
| `true`           | "transformation_module.procedure"  | `/memgraph/internal_modules/transformation_module.py    |
+------------------+------------------------------------+---------------------------------------------------------+
```

## 4. Create a stream in Memgraph

To connect Memgraph to stream, you need to create a stream in Memgraph. First,
make sure the stream and Memgraph are running, and there is a topic available.
Then, make sure the transformation module is loaded.

Create the stream in Memgraph with the following query:

```cypher
CREATE KAFKA STREAM <stream_name>
TOPICS <topic1>[, <topic2>, ...]
TRANSFORM <transformation_module.transformation_procedure>
[BOOTSTRAP_SERVERS <bootstrap servers>];
```

You need to create one stream for each topic and procedure you have.

If you are using Memgraph Lab, you can also create streams using a wizard in the
**Streams** section. 

For more options and information about the `CREATE .. STREAM` query and all the
other options regarding streams, check out the [reference
guide](/reference-guide/streams/overview.md).

## 5. Start ingesting data from the stream

The previous query only created the streams. To start streaming data, execute
the following query:

```cypher
START STREAM stream_name;
```

or

```cypher
START ALL STREAMS;
```

Your data should be slowly arriving in your Memgraph instance. To check if
everything is working, run the following query:

```cypher
CHECK STREAM stream_name;
```

or

```cypher
SHOW STREAMS;
```

You can also check the node counter in **Memgraph Lab** (**Overview tab**) to
see if new nodes and relationships are arriving.

If you are using Memgraph Lab, you can start the stream and check the status of
the stream in the **Streams** section. 

For all the other stream commands, check out [the reference
guide](/reference-guide/streams/overview.md).

## Logs

Errors and notifications regarding streams are contained in Memgraph's log files
which can be found at `/var/log/memgraph/memgraph_<date>.log` Look for the name
of your stream in the log file to find the error. You can use the `grep` command
to search for the stream in the log file:

```
grep '<stream_name>' /var/log/memgraph/memgraph_<date>.log
```

If you are running Memgraph with Docker and want to see logs in Memgraph Lab, be
sure to exposed the 7444 port when running the `docker run` command.

## What's next?

Take a look at the tutorial we made to help you [connect Memgraph and
Kafka](/tutorials/graph-stream-processing-with-kafka.md). Learn more about the
query power of [Cypher language](/cypher-manual), or check out [MAGE](/mage) -
an open-source repository that contains graph algorithms and modules that can
help you tackle the most interesting and challenging graph analytics problems.
If you are using **Memgraph Lab**, a visual user interface for running queries
and visualizing graph data, you might be interested in the [Graph Style Script
language](/memgraph-lab/graph-style-script-language) that will help you bedazzle
your graphs. Above all, enjoy your graph database!