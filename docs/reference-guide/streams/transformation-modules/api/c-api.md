---
id: c-api
title: Transformation modules C API
sidebar_label: C API
---

This is the C API documentation for `mg_procedure.h` that contains declarations
of all functions that can be used to implement a transformation. This source
file can be found in the Memgraph installation directory, under
`include/memgraph`. On the standard Debian installation, this will be under
`/usr/include/memgraph`.

:::caution

**NOTE:** This part of the documentation is still under development. An updated
version will soon be available.

:::

:::tip

For an example of how to implement transformation modules in C, check out the
[transformation module example](#transformation-module-example).

:::

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void (\*)(const struct mgp_messages \*, const struct mgp_graph \*, struct mgp_result \*, struct mgp_memory \*); | **[mgp_trans_cb](#typedef-mgp_trans_cb)** <br/>Entry-point for a transformation with a fixed result type |

Each record of the result must contain the following fields:
* the `query` field with a Cypher query as a string that will be executed against the database
* the `parameters` field with the optional query parameters as a nullable map

## Functions

|                | Name           |
| -------------- | -------------- |
| size_t | **[mgp_messages_size](#function-mgp_messages_size)**(const struct mgp_messages \*messages) <br/>Get the number of messages contained in the messages list. |
| const struct mgp_message \* | **[mgp_messages_at](#function-mgp_messages_at)**(const struct mgp_messages \*messages, size_t idx) <br/> Get the mgp_message at index idx. |
| size_t | **[mgp_message_payload_size](#function-mgp_message_payload_size)**(const struct mgp_message \*message) <br/> Get the payload size of message. |
| const char \* | **[mgp_message_payload](#function-mgp_message_payload)**(const struct mgp_message \*message) <br/> Get the payload of messages as a byte array.|
| const char \* | **[mgp_message_topic_name](#function-mgp_message_topic_name)**(const struct mgp_message \*message) <br/> Get the topic name of message. |
| size_t | **[mgp_message_key_size](#function-mgp_message_key_size)**(const struct mgp_message \*message) <br/> Get key size of message. |
| const char \* | **[mgp_message_key](#function-mgp_message_key)**(const struct mgp_message \*message) <br/> Get key of message as a byte array. |
| int64_t | **[mgp_message](#function-mgp_message_timestamp)**(const struct mgp_message \*message) <br/> Get the timestamp of message. |
| int | **[mgp_module_add_transformation](#function-mgp_module_add_transformation)**(struct mgp_module \*module, const char \*name, mgp_trans_cb cb) <br/> Registers a transformation to a module |

## Types Documentation

### typedef mgp_trans_cb

```cpp
typedef void(* mgp_trans_cb) (const struct mgp_messages *, const struct mgp_graph *, struct mgp_result *, struct mgp_memory *);
```

Entry-point for a transformation invoked through a stream.
Passed in arguments will not live longer than the callback's execution. Therefore,
you must not store them globally or use the passed in `mgp_memory` to allocate global resources.
The result type of transformation is fixed.

## Functions Documentation

### function mgp_messages_size

```cpp
size_t mgp_messages_size(
  const struct mgp_messages* messages
)
```
Returns the total number of messages contained in the argument `messages`.

### function mgp_messages_at

```cpp
mgp_message* mgp_messages_at(
  const struct mgp_messages* messages,
  size_t idx
)
```
Accessor function that returns the underlying `message` stored at index `idx` in `messages`.
The index supplied must reside in the half-open interval [0, `mgp_messages_size(messages)`).

### function mgp_message_payload_size

```cpp
size_t mgp_message_payload_size
  const struct mgp_message* message
)
```
Returns the payload size of the argument `message`.

### function mgp_message_payload

```cpp
const char * mgp_message_payload(
  const struct mgp_message* message
)
```
Returns the payload of the argument `message` as a byte array with size `mgp_message_payload_size(message)`.

### function mgp_message_topic_name

```cpp
const char * mgp_message_topic_name(
  const struct mgp_message* message
)
```
Returns topic name of the argument `message`. Topic name is `NULL` terminated.

### function mgp_message_key_size

```cpp
size_t mgp_message_key_size(
  const struct mgp_message* message
)
```
Returns the key size of argument `message`.

### function mgp_message_key

```cpp
const char * mgp_message_key(
  const struct mgp_message* message
)
```
Returns the key of the argument `message` as a byte array with size `mgp_message_key_size(message)`.

### function mgp_message_timestamp

```cpp
int64_t mgp_timestamp(
  const struct mgp_message* message
)
```
Returns the timestamp of the argument `message`.

### function mgp_module_add_transformation

```cpp
int mgp_module_add_transformation(
  struct mgp_module *module,
  const char *name,
  mgp_trans_cb cb
)
```
Register a transformation to a module. The `name` must be a sequence of digits, underscores,
lowercase, and uppercase Latin letters. The `name` must begin with a non-digit character.
Note that Unicode characters are not allowed. Additionally, the `name` is case-sensitive.

Return non-zero if the transformation is added successfully. Registering might
fail if unable to allocate memory for the transformation; if `name` is not
valid, or a transformation with the same name was already registered or if any
other unexpected failure happens.

## Transformation module example

Transformations can be implemented in C/C++ using the C API provided by
Memgraph. Such modules need to be compiled to a shared library so that they can
be loaded when Memgraph starts. This means that you can write the
transformations in any programming language which can work with C and can be
compiled to the ELF shared library format.

In this chapter, we assume that Memgraph is installed on a standard Debian or
Ubuntu machine where the necessary header file can be found under
`/usr/include/memgraph`. For other installations, the header file can be found
under the `include/memgraph` folder in the Memgraph installation directory.

As we already discussed how transformations work in the Python example, we
won't go over the transformation itself in detail. Also, to keep the
complexity of this example low, this transformation doesn't use the query
parameters. 

So let's create `c_transformation.cpp` and start to populate it!

```cpp
#include <exception>
#include <string>

#include "mg_procedure.h"

const std::string query_part_1{"CREATE (n:MESSAGE {timestamp: '"};
const std::string query_part_2{"', payload: '"};
const std::string query_part_3{"', topic: '"};
const std::string query_part_4{"'})"};

std::string create_query(mgp_message &message, struct mgp_result *result) {
  int64_t timestamp{0};
  if (mgp_error::MGP_ERROR_NO_ERROR !=
      mgp_message_timestamp(&message, &timestamp)) {
    throw "Internal error!";
  }

  const char *payload{nullptr};
  if (mgp_error::MGP_ERROR_NO_ERROR !=
      mgp_message_payload(&message, &payload)) {
    throw "Internal error!";
  }

  size_t payload_size{0};
  if (mgp_error::MGP_ERROR_NO_ERROR !=
      mgp_message_payload_size(&message, &payload_size)) {
    throw "Internal error!";
  }

  const char *topic_name{nullptr};
  if (mgp_error::MGP_ERROR_NO_ERROR !=
      mgp_message_topic_name(&message, &topic_name)) {
    throw "Internal error!";
  }

  return query_part_1 + std::to_string(timestamp) + query_part_2 +
         std::string{payload, payload_size} + query_part_3 + topic_name +
         query_part_4;
}

void my_c_transformation(struct mgp_messages *messages, mgp_graph *,
                         mgp_result *result, mgp_memory *memory) {

  mgp_value *null_value{nullptr};

  try {
    size_t messages_size{0};
    if (mgp_error::MGP_ERROR_NO_ERROR !=
        mgp_messages_size(messages, &messages_size)) {
      return;
    }

    if (mgp_error::MGP_ERROR_NO_ERROR !=
        mgp_value_make_null(memory, &null_value)) {
      return;
    }

    for (auto i = 0; i < messages_size; ++i) {

      mgp_message *message{nullptr};
      if (mgp_error::MGP_ERROR_NO_ERROR !=
          mgp_messages_at(messages, i, &message)) {
        break;
      }

      const auto query = create_query(*message, result);

      mgp_result_record *record{nullptr};
      if (mgp_error::MGP_ERROR_NO_ERROR !=
          mgp_result_new_record(result, &record)) {
        break;
      }

      mgp_value *query_value{nullptr};
      if (mgp_error::MGP_ERROR_NO_ERROR !=
          mgp_value_make_string(query.c_str(), memory, &query_value)) {
        break;
      }

      auto mgp_result = mgp_result_record_insert(record, "query", query_value);
      mgp_value_destroy(query_value);

      if (mgp_error::MGP_ERROR_NO_ERROR != mgp_result) {
        static_cast<void>(
            mgp_result_set_error_msg(result, "Couldn't insert field"));
        break;
      }

      mgp_result = mgp_result_record_insert(record, "parameters", null_value);
      if (mgp_error::MGP_ERROR_NO_ERROR != mgp_result) {
        static_cast<void>(
            mgp_result_set_error_msg(result, "Couldn't insert field"));
        break;
      }
    }
    mgp_value_destroy(null_value);
  } catch (const std::exception &e) {
    mgp_value_destroy(null_value);
    static_cast<void>(mgp_result_set_error_msg(result, e.what()));
    return;
  }
}
```

Now we have to register the transformation in the `mgp_init_module` function:

```cpp
extern "C" int mgp_init_module(mgp_module *module, mgp_memory *memory) {

  return mgp_error::MGP_ERROR_NO_ERROR !=
         mgp_module_add_transformation(module, "my_c_transformation",
                                       my_c_transformation);
}
```

Now let's compile it:

```shell
clang++ --std=c++17 -Wall -shared -fPIC -I /usr/include/memgraph c_transformation.cpp -o c_transformation.so
```

After copying the resulting `c_transformation.so` to the
`/usr/lib/memgraph/query_modules` or `/var/lib/memgraph/internal_modules` directory, we can reload the modules and check
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
| "transformation.my_transformation"        | "/usr/lib/memgraph/query_modules/transformation.py"   | true        |
+-------------------------------------------+-------------------------------------------------------+-------------+
```
