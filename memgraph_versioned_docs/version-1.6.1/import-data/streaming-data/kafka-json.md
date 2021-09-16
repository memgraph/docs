---
id: kafka_json
title: Import JSON data
sidebar_label: JSON
---
[JSON](https://www.json.org/json-en.html) (JavaScript Object Notation) is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects 
consisting of attribute–value pairs and arrays (or other serializable values). 
It is a common data format with a diverse range of functionality in data interchange including communication of web applications with servers.

## Example

Let's assume the following graph schema:

(Graph schema)

The graph translates into following JSON Formats:

```json
profile = {
        "name": str,
		"age" : int
        "mail": str,
        "address" : str,
    }
	
company = {
        "name" : str,
        "address" : str,
    }
	
works_at = { 
            "person"  : str,
            "company" : str,
        }
```

### Transformation module

Before consuming data from stream, we need to write transformation modules that will consume JSON messages from Kafka
and output Cypher queries.
In order to create a transformation module, you need to:

1. Create a Python module
2. Save it into the Memgraph's query-modules directory (default: `/usr/lib/memgraph/query_modules`)
3. Load it into Memgraph either on startup (automatically) or by running a `CALL mg.load` query

Each transfomation module is responsible for each type of data we are sending in the stream.
Example for one `profile_transformation` module can be found bellow:

```python
@mgp.transformation
def profile_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []

    for i in range(messages.total_messages()):
        message = messages.message_at(i)
        message_json = json.loads(message.payload())
        result_queries.append(mgp.Record (
                query=f'''CREATE (p: Profile {{ id: {message_json["id"]}, name: "{message_json["name"]}", age: ToInteger({message_json["age"]}) 
				address: "{message_json["address"]}", mail: "{message_json["mail"]}" }})''' ,
                parameters=None
            ))
            
    return result_queries
```

We have two node types and one relationship type - in total, three different data models. That would mean 3 streams should be created:

```
CREATE STREAM myJson_profiles TOPICS profiles  TRANSFORM transformation.profile_transformation;
CREATE STREAM myJson_companies TOPICS companies  TRANSFORM transformation.company_transformation;
CREATE STREAM myJson_work TOPICS work TRANSFORM transformation.works_rel_transformation;
```

To start the streams, type the following query:

```
START ALL STREAMS;
```

If everything started correctly, streams should show up when checking
```
SHOW STREAMS;
``` 
query or if node counter in Memgraph Lab Overview tab starts going up.


## Next steps

Check out the example-streaming-app on [GitHub](https://github.com/memgraph/example-streaming-app) to see how Memgraph can be connected to a Kafka stream.
