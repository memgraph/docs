---
id: implement-transformation-module
title: How to implement transformation modules
sidebar_label: Implement transformation modules
---

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/streams/transformation-modules/overview.md)

The prerequisite of connecting Memgraph to a Pulsar stream is to have a
transformation module that can produce Cypher queries based on the received
messages. We are going to implement a simple transformation that stores the
properties of each message in a vertex.

:::note

For detailed technical information on transformation modules, check out the
[reference guide](/reference-guide/streams/transformation-modules/overview.md).

:::

## Using Docker with transformation modules

If you are using Docker to run Memgraph, you will have to create a volume and
mount it to access the `query_modules` directory. Yes, `query_modules`, because
Memgraph can load transformations and query procedures from the same directory,
even from the same module. Mounting a volume can be done by creating an empty
directory `modules` and executing the following command:

```shell
docker volume create --driver local --opt type=none --opt device=modules --opt o=bind modules
```

Now, you can start Memgraph and mount the created volume:

```shell
docker run -it --rm -p 7687:7687 -p 7444:7444 -p 3000:3000 -v modules:/usr/lib/memgraph/query_modules memgraph
```

Everything from the directory `/usr/lib/memgraph/query_modules` will be
visible/editable in your mounted `modules` volume and vice versa.

Through the rest of this page, `/usr/lib/memgraph/query_modules` will be used to
refer to this directory. If you are using Docker, then please do the same but
with the recently created `modules` directory.

## Python API

Transformations can be implemented using the Python API provided by Memgraph. If
you wish to write your own transformation using the Python API, you need to have
Python version 3.5.0 or above installed.

Let's create a file called `transformation.py` in the
`/usr/lib/memgraph/query_modules` directory. First and foremost, import the
`mgp` module, which contains definitions of the public Python API provided by
Memgraph.

```python
import mgp
```

Next, we have to implement the function that does the transformation. For
transformations, the return type is fixed, while the parameters of the
transformation can vary. The whole signature of a transformation is the
following:

```python
import mgp

@mgp.transformation
def my_pulsar_transformation(context: mgp.TransCtx,
                      messages: mgp.Messages
                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):
    ...
```

We also marked our function as a transformation so it will be recognized by
Memgraph when the module is loaded. This was done by adding the
`@mgp.transformation` decorator.

The transformations can slightly deviate from this by not receiving the
`context` , just the `messages` :

```python
import mgp

@mgp.transformation
def my_pulsar_transformation(messages: mgp.Messages
                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):
    ...
```

As this simple transformation won't access the vertices and edges in the
database, the `context` parameter is not necessary, so we are going to use the
simpler version.

The most important part is the actual implementation of the transformation
function. Before showing how it can be done, let's clarify what it is supposed
to do: it receives a list of messages and returns some queries and their
parameters that will be executed in Memgraph as any regular query. Right, let's
see how we can do that!

We have to iterate over the messages and construct a query for each of them:

```python
import mgp

@mgp.transformation
def my_pulsar_transformation(messages: mgp.Messages
                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []

    for i in range(messages.total_messages()):
        message = messages.message_at(i)
        payload_as_str = message.payload().decode("utf-8")
        result_queries.append(mgp.Record(
            query=f"CREATE (n:MESSAGE {{payload: '{payload}', topic: '{topic}'}})".format(
                payload=payload_as_str, topic=message.topic_name()),
            parameters=None))

    return result_queries
```

As you can see, the query is almost the same for every message, except the three
properties of the messages. This is precisely the case when the `parameters`

field of the result is handy. Instead of formatting the string with the
properties, we can pass the properties as query parameters:

```python
import mgp

@mgp.transformation
def my_pulsar_transformation(messages: mgp.Messages
                      ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []

    for i in range(messages.total_messages()):
        message = messages.message_at(i)
        payload_as_str = message.payload().decode("utf-8")
        result_queries.append(mgp.Record(
            query="CREATE (n:MESSAGE {payload: $payload, topic: $topic})",
            parameters={"payload": payload_as_str,
                        "topic": message.topic_name()}))

    return result_queries
```

The `$payload` and `$topic` are the placeholders for parameters with the same
name.

```cypher
CALL mg.load_all();
```

And list all the available transformations:

```cypher
CALL mg.transformations() YIELD *;
```

You should see something like the following:

```plaintext
+-------------------------------------------+-----------------------------------------------------+-------------+
| name                                      | path                                                | is_editable |
+-------------------------------------------+-----------------------------------------------------+-------------+
| "transformation.my_pulsar_transformation" | "/usr/lib/memgraph/query_modules/transformation.py" | true        |
+-------------------------------------------+-----------------------------------------------------+-------------+
```

## C API

Transformations can also be implemented in C/C++ using the C API provided by
Memgraph. Such modules need to be compiled to a shared library so that they can
be loaded when Memgraph starts. This means that you can write the
transformations in any programming language which can work with C and can be
compiled to the ELF shared library format.

In this chapter, we assume that Memgraph is installed on a standard Debian or
Ubuntu machine where the necessary header file can be found under
`/usr/include/memgraph` . For other installations, the header file can be found
under the `include/memgraph` folder in the Memgraph installation directory.

As we already discussed how transformations work in the Python example, we won't
go over the transformation itself in detail. Also, to keep the complexity of
this example low, this transformation doesn't use the query parameters. Apart
from that, this transformation does the same as the Python example but is
implemented in C++17.

So let's create `c_transformation.cpp` and start to populate it!

```cpp
#include <exception>
#include <string>
#include <string_view>

#include "mg_procedure.h"

const std::string query_part_1{"CREATE (n:MESSAGE {"};
const std::string query_part_2{"payload: '"};
const std::string query_part_3{"', topic: '"};
const std::string query_part_4{"'})"};

std::string create_query(const mgp_message &message) {
  return query_part_1 + query_part_2 +
         std::string{mgp_message_payload(&message),
                     mgp_message_payload_size(&message)} +
         query_part_3 + mgp_message_topic_name(&message) + query_part_4;
}

void my_c_transformation(const struct mgp_messages *messages,
                         const struct mgp_graph *, struct mgp_result *result,
                         struct mgp_memory *memory) {

  auto *null_value = mgp_value_make_null(memory);
  try {
    auto messages_size = mgp_messages_size(messages);
    for (auto i = 0; i < messages_size; ++i) {
      auto *message = mgp_messages_at(messages, i);
      auto query = create_query(*message);
      auto *record = mgp_result_new_record(result);
      auto *query_value = mgp_value_make_string(query.c_str(), memory);
      auto record_inserted =
          mgp_result_record_insert(record, "query", query_value) != 0;
      mgp_value_destroy(query_value);
      if (!record_inserted) {
        mgp_result_set_error_msg(result, "Couldn't insert field");
        break;
      }
      record_inserted =
          mgp_result_record_insert(record, "parameters", null_value) != 0;
      if (!record_inserted) {
        mgp_result_set_error_msg(result, "Couldn't insert field");
        break;
      }
    }
    mgp_value_destroy(null_value);
  } catch (const std::exception &e) {
    mgp_value_destroy(null_value);
    mgp_result_set_error_msg(result, e.what());
    return;
  }
}
```

Now we have to register the transformation in the `mgp_init_module` function:

```cpp
extern "C" int mgp_init_module(mgp_module *module, mgp_memory *memory) {
  return mgp_module_add_transformation(module, "my_c_transformation",
                                       my_c_transformation) == 0;
}
```

Now let's compile it:

```shell
clang++ --std=c++17 -Wall -shared -fPIC -I /usr/include/memgraph c_transformation.cpp -o c_transformation.so
```

After copying the resulting `c_transformation.so` to the
`/usr/lib/memgraph/query_modules` directory, we can reload the modules and check
if Memgraph found our newly created transformation:

```cypher
CALL mg.load_all();
```

Then the transformation should show up in the list of transformations:

```cypher
CALL mg.transformations() YIELD *;
```

You should see something like this:

```plaintext
+-------------------------------------------+-------------------------------------------------------+-------------+
| name                                      | path                                                  | is_editable |
+-------------------------------------------+-------------------------------------------------------+-------------+
| "c_transformation.my_c_transformation"    | "/usr/lib/memgraph/query_modules/c_transformation.so" | false       |
| "transformation.my_pulsar_transformation" | "/usr/lib/memgraph/query_modules/transformation.py"   | true        |
+-------------------------------------------+-------------------------------------------------------+-------------+
```

For a more detailed overview, check out the [Reference
guide](/reference-guide/streams/transformation-modules/overview.md).
