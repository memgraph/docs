---
id: c-api
title: Transformation modules C API
sidebar_label: C API
---

This complements API documentation for `mg_procedure.h` which contains declarations of all functions that can be used to implement a transformation. The source file can be found in the Memgraph installation directory, under `include/memgraph`. On the standard Debian installation, this will be under `/usr/include/memgraph`. 

:::caution
**NOTE:** This part of the documentation is still under development. An updated version will soon be available.
:::

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **mgp_label** <br/>Label of a vertex.  |
| struct | **mgp_edge_type** <br/>Type of an edge.  |
| struct | **mgp_property** <br/>Reference to a named property value.  |
| struct | **mgp_vertex_id** <br/>ID of a vertex; valid during a single query execution.  |
| struct | **mgp_edge_id** <br/>ID of an edge; valid during a single query execution.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void (*mgp_trans_cb)(const struct mgp_messages *, const struct mgp_graph *, struct mgp_result *, struct mgp_memory *); |
  **[mgp_trans_cb](#typedef-mgp_trans_cb)** <br/>Entry-point for a transformation with a fixed result type |

## Functions

|                | Name           |
| -------------- | -------------- |
| size_t | **[mgp_message](#function-mgp_messages_size)**(const struct mgp_messages \*messages) <br/>Get the number of messages contained in the messages list. |
| size_t | **[mgp_message_payload_size](#function-mgp_message_payload)**(const struct mgp_message \*message) <br/> Get the payload size of message. |
| const char * | **[mgp_message_payload](#function-mgp_message_payload)**(const struct mgp_message \*message) <br/> Get the payload of messages as a byte array.|
| const char * | **[mgp_message_topic_name](#function-mgp_message_topic_name)**(const struct mgp_message \*message) <br/> Get the topic name of message. |
| size_t | **[mgp_message_key_size](#function-mgp_message_key_size)**(const struct mgp_message \*message) <br/> Get key size of message. |
| const char * | **[mgp_message_key](#function-mgp_message_key)**(const struct mgp_message \*message) <br/> Get key of message as a byte array. |
| int64_t | **[mgp_message](#function-mgp_message_timestamp)**(const struct mgp_message \*message) <br/> Get the timestamp of message. |
| const struct mgp_message * | **[mgp_messages_at](#function-mgp_messages_at)**(const struct mgp_messages \*messages, size_t idx) <br/> Get the mgp_message at index idx. |
| int | **[mgp_module_add_transformation](#function-mgp_module_add_transformation)**(struct mgp_module \*module, const char \*name, mgp_trans_cb cb) <br/> Registers a transformation to a module |

## Types Documentation

### typedef mgp_trans_cb

```cpp
typedef void(* mgp_trans_cb) (const struct mgp_messages *, const struct mgp_graph *, struct mgp_result *, struct mgp_memory *);
```

Entry-point for a transformation, invoked through a stream. 
Passed in arguments will not live longer than the callback's execution. Therefore, you must not store them globally or use the passed in mgp_memory to allocate global resources. The result type of transformation is fixed.

## Functions Documentation

### function mgp_messages_size

```cpp
size_t mgp_messages_size(
  const struct mgp_messages* messages
)
```

Returns the total number of messages contained in the mgp_messages list.
### function mgp_message_payload_size

```cpp
size_t mgp_message_payload_size
  const struct mgp_message* message
)
```
Returns the payload size of mgp_message message.

### function mgp_message_payload

```cpp
const char * mgp_message_payload(
  const struct mgp_message* message
)
```
Returns the payload of mgp_message as a byte array with size mgp_message_payload_size(message);

### function mgp_message_messsage_topic_name

```cpp
const char * mgp_message_topic_name(
  const struct mgp_message* message
)
```
Returns the topic name of mgp_message message(NULL terminated).

### function mgp_message_key_size

```cpp
size_t mgp_message_key_size(
  const struct mgp_message* message
)
```
Returns the key size of mgp_message.

### function mgp_message_key

```cpp
const char * mgp_message_key(
  const struct mgp_message* message
)
```
Returns the key of mgp_message as a byte array with size mgp_message_key_size(message).

### function mgp_message_timestamp

```cpp
int64_t mgp_timestamp(
  const struct mgp_message* message
)
```
Returns the timestamp of an mgp_message.

### function mgp_messages_at

```cpp
mgp_message* mgp_messages_at(
  const struct mgp_messages* messages,
  size_t idx
)
```
Accessor function that returns the underline message stored at index idx in messages.
The index supplied must be in the half-open interval [0, mgp_messages_size(messages)).

### function mgp_module_add_transformation

```cpp
int mgp_module_add_transformation(
  struct mgp_module *module, 
  const char *name,
  mgp_trans_cb cb
)
```
Register a transformation to a module. The `name` must be a sequence of digits, underscores, 
lowercase and uppercase Latin letters. The name must begin with a non-digit character. 
Note that Unicode characters are not allowed. Additionally, names are case-sensitive.

Returns 1 if unable to allocate memory for mgp_trans; if `name` is not valid or a transformation with the same name was already registered. 
