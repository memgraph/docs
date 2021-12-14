---
id: python-api
title: Transformations Python API
sidebar_label: Python API
---

This is the additional API documentation for `mgp.py`  which contains
definitions of the public Transformation Python API provided by Memgraph. At the
core, this is a wrapper around the **[C API](c-api.md)**. This source file can
be found in the Memgraph installation directory, under `python_support`. On the
standard Debian installation, this will be under
`/usr/lib/memgraph/python_support`.

:::caution **NOTE:** This part of the documentation is still under development.
An updated version will soon be available.
:::

:::tip For an example of how to implement transformation modules in Python,
check out [Python API
guide](/database-functionalities/streams/pulsar/implement-transformation-module.md#python-api).
:::

## `mgp.transformation(func)`
Transformation modules in Python have to follow certain rules in order to work:
1. The transformation module is a Python function
2. The function has to be *decorated* with a **@mgp.transformation** decorator
3. The function can have 1 or 2 arguments
  - one of type `mgp.Messages` (required)
  - one of type `mgp.TransCtx` (optional)
4. The function has to return an `mgp.Record` in the following form:
  - `mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map])`
  - the return type can also be an **iterable** of `mgp.Record`s, but not a
    generator

### Examples
```python
import mgp

@mgp.transformation
def transformation(context: mgp.TransCtx,
                   messages: mgp.Messages
                   ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):
    result_queries = []

    for i in range(messages.total_messages()):
        message = messages.message_at(i)
        payload_as_str = message.payload().decode("utf-8")
        result_queries.append(mgp.Record(
            query=f"CREATE (n:MESSAGE {{timestamp: '{message.timestamp()}', payload: '{payload_as_str}', topic: '{message.topic_name()}'}})",
            parameters=None))

    return result_queries
```
This transformation extracts the interesting members of each `mgp.Message` and
stores them in query `Record`, which wraps a `CREATE` clause with all the
interesting members (timestamp, payload, etc.) and an empty parameter list.

Any errors can be reported by raising an Exception.

## `class mgp.Message(message)`
Bases: `object`

Represents a single message. You shouldn't store a `Message` globally.

### `is_valid()`
Returns true if the underlying `mgp.message` object is valid and can be
accessed.

### `payload()`
Returns the payload of the message. Raises an `InvalidMessageError` if
`is_valid()` is false.

### `topic_name()`
Returns the topic name of the underlying `mgp.message`. Raises an
`InvalidMessageError` if `is_valid()` is false.

### `key()`
Returns the key of the underlying `mgp.message` as bytes. Raises an
`InvalidMessageError` if `is_valid()` is false.

### `timestamp()`
Returns the timestamp of the underlying `mgp.message`. Raises an
`InvalidMessageError` if `is_valid()` is false.

## `class mgp.Messages(messages)`
Bases: `object`

Represents a list of messages passed to a transformation. You shouldn't store
`messages` globally .

### `is_valid()`
Returns true if the underlying `mgp.messages` object is valid and can be
accessed.

### `total_messages()`
Returns the number of `mgp.messages` contained. Raises `InvalidMessagesError` if
`is_valid()` is false.

### `message_at(id)`
Returns the underlying `mgp.message` at index `id`. Raises
`InvalidMessagesError` if `is_valid()` is false.

## `class mgp.TransCtx(graph)`
Bases: `object`

Context of a transformation being executed.

Access to a `TransCtx` is only valid during a single execution of a
transformation. You shouldn't store a `TransCtx` globally.

### `graph()`
Raise `InvalidContextError` if context is invalid.

### `is_valid()`
Returns true if the context is valid and can be accessed.
