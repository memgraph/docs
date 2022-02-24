---
id: python-api
title: Query modules Python API
sidebar_label: Python API
---

This is the API documentation for `mgp.py`  which contains definitions of the
public Python API provided by Memgraph. In essence, this is a wrapper around the
**[C API](/reference-guide/query-modules/api/c-api/overview.md)**. This source
file can be found in the Memgraph installation directory, under
`python_support`. On the standard Debian installation, this will be under
`/usr/lib/memgraph/python_support`.

:::tip

For an example of how to implement query modules in Python, check out the
[Python API
guide](/how-to-guides/query-modules/implement-query-modules.md#python-api).

:::

:::tip

If you install any Python modules after running Memgraph, you'll have to
restart Memgraph in order to use them in query modules.

:::

## `class mgp.read_proc(func: Callable[[…], mgp.Record])`

Register func as a read-only procedure of the current module.

`read_proc` is meant to be used as a decorator function to register module
procedures. The registered func needs to be a callable which optionally takes
`ProcCtx` as the first argument. Other arguments of func will be bound to values
passed in the Cypher query. The full signature of func needs to be annotated with
types. The return type must be `Record(field_name=type, …)` and the procedure must
produce either a complete `Record` or `None`. To mark a field as deprecated, use
`Record(field_name=Deprecated(type), …)`. Multiple records can be produced by
returning an iterable of them. Registering generator functions is currently not
supported.

### Example usage

```python
    import mgp

    @mgp.read_proc
    def procedure(context: mgp.ProcCtx,
                required_arg: mgp.Nullable[mgp.Any],
                optional_arg: mgp.Nullable[mgp.Any] = None
                ) -> mgp.Record(result=str, args=list):
        args = [required_arg, optional_arg]
        # Multiple rows can be produced by returning an iterable of mgp.Record
        return mgp.Record(args=args, result='Hello World!')
```

The example procedure above returns 2 fields: `args` and `result`.
* `args` is a copy of arguments passed to the procedure.
* `result` is the result of this procedure, a “Hello World!” string.

Any errors can be reported by raising an `Exception`.

The procedure can be invoked in Cypher using the following calls:

```cypher
CALL example.procedure(1, 2) YIELD args, result;
CALL example.procedure(1) YIELD args, result;
```

Naturally, you may pass in different arguments or yield less fields.

:::tip
Install the `mgp` Python module so your editor can use typing annotations
properly and suggest methods and classes it contains. You can install the module
by running `pip install mgp`.
:::

## `class mgp.write_proc(func: Callable[[…], mgp.Record])`

Register func as a writeable procedure of the current module.

`write_proc` is meant to be used as a decorator function to register module
procedures. The registered func needs to be a callable which optionally takes
`ProcCtx` as the first argument. Other arguments of func will be bound to values
passed in the Cypher query. The full signature of func needs to be annotated with
types. The return type must be `Record(field_name=type, …)` and the procedure must
produce either a complete `Record` or `None`. To mark a field as deprecated, use
`Record(field_name=Deprecated(type), …)`. Multiple records can be produced by
returning an iterable of them. Registering generator functions is currently not
supported.

### Example usage

```python
import mgp

@mgp.write_proc
def procedure(context: mgp.ProcCtx,
    required_arg: str,
    optional_arg: mgp.Nullable[str] = None
    ) -> mgp.Record(result=mgp.Vertex):

    vertex = context.graph.create_vertex()
    vertex_properties = vertex.properties
    vertex_properties[“required_arg”] = required_arg

    if optional_arg is not None:
        vertex_properties[“optional_arg”] = optional_arg

    return mgp.Record(result=vertex)
```

The example procedure above returns  a newly created vertex which has at most 2
properties:
* `required_arg` is always present and its value is the first argument of the
  procedure.
* `optional_arg` is present if the second argument of the procedure is not null.

Any errors can be reported by raising an `Exception`.

The procedure can be invoked in Cypher using the following calls:

```cypher
CALL example.procedure(“property value”, “another one”) YIELD result;
CALL example.procedure(“single argument”) YIELD result;
```

Naturally, you may pass in different arguments.


## `class mgp.Properties(vertex_or_edge)`
Bases: `object`

A collection of properties either on a Vertex or an Edge.


### `get(property_name: str, default=None)`
Get the value of a property with the given name or return default.

Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate a
mgp.Value. Raise DeletedObjectError if the object has been deleted.


### `items()`
Iterate over the properties.

Doesn’t return a dynamic view of the properties, but copies the current
properties.

Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an
iterator. Raise DeletedObjectError if the object has been deleted.


### `keys()`
Iterate over property names.

Doesn’t return a dynamic view of the property names, but copies the name of the
current properties.

Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an
iterator. Raise DeletedObjectError if the object has been deleted.


### `set(property_name: str, value: object)`
Set the value of the property. When the value is None, then the property is
removed.

Raise UnableToAllocateError if unable to allocate memory for storing the
property. Raise ImmutableObjectError if the object is immutable. Raise
DeletedObjectError if the ojbect has been deleted. Raise SerializationError if
the object has been modified by another transaction. Raise ValueConversionError
if value is vertex, edge or path.


### `values()`
Iterate over property values.

Doesn’t return a dynamic view of the property values, but copies the value of
the current properties.

Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an
iterator. Raise DeletedObjectError if the object has been deleted.


## `class mgp.Label(name: str)`
Bases: `object`

Label of a Vertex.


### `property name()`

## `class mgp.EdgeType(name)`
Bases: `object`

Type of an Edge.


### `property name()`

## `class mgp.Edge(edge)`
Bases: `object`

Edge in the graph database.

Access to an Edge is only valid during a single execution of a procedure in a
query. You should not globally store an instance of an Edge. Using an invalid
Edge instance will raise InvalidContextError.


### `property from_vertex()`
Get the source vertex.

Raise InvalidContextError.


### `property id()`
Get the ID of the edge.

Raise InvalidContextError.


### `is_valid()`
Return True if self is in valid context and may be used.


### `property properties()`
Get the properties of the edge.

Raise InvalidContextError.


### `property to_vertex()`
Get the destination vertex.

Raise InvalidContextError.


### `property type()`
Get the type of the edge.

Raise InvalidContextError.


### `underlying_graph_is_mutable()`
Return True if the edge can be modified.


## `class mgp.Vertex(vertex)`
Bases: `object`

Vertex in the graph database.

Access to a Vertex is only valid during a single execution of a procedure in a
query. You should not globally store an instance of a Vertex. Using an invalid
Vertex instance will raise InvalidContextError.


### `add_label(label: str)`
Add the label to the vertex.

Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate
memory for storing the label. Raise ImmutableObjectError if self is immutable.
Raise DeletedObjectError if self has been deleted. Raise SerializationError if
self has been modified by another transaction.


### `property id()`
Get the ID of the vertex.

Raise InvalidContextError.


### `property in_edges()`
Iterate over inbound edges of the vertex.

Doesn’t return a dynamic view of the edges, but copies the current inbound
edges.

Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an
iterator. Raise DeletedObjectError if self has been deleted.


### `is_valid()`
Return True if self is in valid context and may be used.


### `property labels()`
Get the labels of the vertex.

Raise InvalidContextError. Raise OutOfRangeError if some of the labels are
removed while collecting the labels. Raise DeletedObjectError if self has been
deleted.


### `property out_edges()`
Iterate over outbound edges of the vertex.

Doesn’t return a dynamic view of the edges, but copies the current outbound
edges.

Raise InvalidContextError. Raise UnableToAllocateError if unable to allocate an
iterator. Raise DeletedObjectError if self has been deleted.


### `property properties()`
Get the properties of the vertex.

Raise InvalidContextError.


### `remove_label(label: str)`
Remove the label from the vertex.

Raise InvalidContextError. Raise ImmutableObjectError if self is immutable.
Raise DeletedObjectError if self has been deleted. Raise SerializationError if
self has been modified by another transaction.


### `underlying_graph_is_mutable()`
Return True if the vertex can be modified.


## `class mgp.Path(starting_vertex_or_path: Union[_mgp.Path, mgp.Vertex])`
Bases: `object`

Path containing Vertex and Edge instances.


### `property edges()`
Edges ordered from the start to the end of the path.

Raise InvalidContextError if using an invalid Path instance.


### `expand(edge: mgp.Edge)`
Append an edge continuing from the last vertex on the path.

The last vertex on the path will become the other endpoint of the given edge, as
continued from the current last vertex.

Raise InvalidContextError if using an invalid Path instance or if passed in edge
is invalid. Raise LogicErrorError if the current last vertex in the path is not
part of the given edge. Raise UnableToAllocateError if unable to allocate memory
for path extension.


### `is_valid()`

### `property vertices()`
Vertices ordered from the start to the end of the path.

Raise InvalidContextError if using an invalid Path instance.


## `class mgp.Record(**kwargs)`
Bases: `object`

Represents a record of resulting field values.


### `fields()`

## `class mgp.Vertices(graph)`
Bases: `object`

Iterable over vertices in a graph.


### `is_valid()`
Return True if self is in valid context and may be used.


## `class mgp.Graph(graph)`
Bases: `object`

State of the graph database in current ProcCtx.


### `create_edge(from_vertex: mgp.Vertex, to_vertex: mgp.Vertex, edge_type: mgp.EdgeType)`
Create an edge.

Raise ImmutableObjectError if self \` is immutable. Raise UnableToAllocateError
if unable to allocate an edge. Raise DeletedObjectError if \`from_vertex or
to_vertex has been deleted. Raise SerializationError if from_vertex or to_vertex
has been modified by another transaction.


### `create_vertex()`
Create a vertex.

Raise ImmutableObjectError if self is immutable. Raise UnableToAllocateError if
unable to allocate a vertex.


### `delete_edge(edge: mgp.Edge)`
Delete an edge.

Raise ImmutableObjectError if self is immutable. Raise SerializationError if
edge, its source or destination vertex has been modified by another transaction.


### `delete_vertex(vertex: mgp.Vertex)`
Delete a vertex.

Raise ImmutableObjectError if self is immutable. Raise LogicErrorError if vertex
has edges. Raise SerializationError if vertex has been modified by another
transaction.


### `detach_delete_vertex(vertex: mgp.Vertex)`
Delete a vertex and all of its edges.

Raise ImmutableObjectError if self is immutable. Raise SerializationError if
vertex has been modified by another transaction.


### `get_vertex_by_id(vertex_id: VertexId)`
Return the Vertex corresponding to given vertex_id from the graph.

Access to a Vertex is only valid during a single execution of a procedure in a
query. You should not globally store the returned Vertex.

Raise IndexError if unable to find the given vertex_id. Raise
InvalidContextError if context is invalid.


### `is_mutable()`
Return True if self represents a mutable graph, thus it can be used to modify
vertices and edges.


### `is_valid()`
Return True if self is in valid context and may be used.


### `property vertices()`
All vertices in the graph.

Access to a Vertex is only valid during a single execution of a procedure in a
query. You should not globally store the returned Vertex instances.

Raise InvalidContextError if context is invalid.


## `class mgp.ProcCtx(graph)`
Bases: `object`

Context of a procedure being executed.

Access to a ProcCtx is only valid during a single execution of a procedure in a
query. You should not globally store a ProcCtx instance.


### `check_must_abort()`

### `property graph()`
Raise InvalidContextError if context is invalid.


### `is_valid()`

### `must_abort()`

## `class mgp.Deprecated(type_)`
Bases: `object`

Annotate a resulting Record’s field as deprecated.


### `field_type()`

## `class mgp._typing_to_cypher_type(type_)`
Convert typing annotation to a _mgp.CypherType instance.


## `class mgp.UnsupportedTypingError(type_)`
Bases: `Exception`

Signals a typing annotation is not supported as a _mgp.CypherType.


## `class mgp.AbortError()`
Bases: `Exception`

Signals that the procedure was asked to abort its execution.


## `class mgp.InvalidContextError()`
Bases: `Exception`

Signals using a graph element instance outside of the registered procedure.


## `class mgp.InvalidMessageError()`
Bases: `Exception`

Signals using a message instance outside of the registered transformation.


## `class mgp.InvalidMessagesError()`
Bases: `Exception`

Signals using a messages instance outside of the registered transformation.


## `class mgp.DeletedObjectError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals accessing an already deleted object.


## `class mgp.ImmutableObjectError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals modification of an immutable object.


## `class mgp.InsufficientBufferError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals that some buffer is not big enough.


## `class mgp.InvalidArgumentError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals that some of the arguments have invalid values.


## `class mgp.KeyAlreadyExistsError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals that a key already exists in a container-like object.


## `class mgp.LogicErrorError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals faulty logic within the program such as violating logical preconditions
or class invariants and may be preventable.


## `class mgp.OutOfRangeError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals that an index-like parameter has a value that is outside its possible
values.


## `class mgp.SerializationError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals serialization error caused by concurrent modifications from different
transactions.


## `class mgp.UnableToAllocateError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals failed memory allocation.


## `class mgp.UnknownError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals unspecified failure.


## `class mgp.ValueConversionError(*args: Any, **kwargs: Any)`
Bases: `_mgp.`

Signals that the conversion failed between python and cypher values.
