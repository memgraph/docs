---
id: python-api
title: Query modules Python API
sidebar_label: Python API
slug: /reference-guide/query-modules/api/python-api
---

This is the API documentation for `mgp.py` that contains definitions of the
public Python API provided by Memgraph. In essence, this is a wrapper around the
**[C API](./c-api)**. This source file can be found in the Memgraph
installation directory, under `/usr/lib/memgraph/python_support`.

:::tip

For an example of how to implement query modules in Python, take a look at [the
example we
provided](/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md#python-api). 

:::

:::tip

If you install any Python modules after running Memgraph, you'll have to [load
them into Memgraph](../load-call-query-modules#loading-query-modules) or restart
Memgraph in order to use them.

You can also develop query modules in Python from Memgraph Lab (v2.0 and newer). Just
navigate to **Query Modules** and click on **New Module** to start.

:::

:::info
If you need an additional Python library not included with Memgraph, check out
[the guide on how to install
it](/memgraph/how-to-guides/query-modules#how-to-install-external-python-libraries).
:::


## mgp.read_proc(func: Callable[…, mgp.Record])

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

**Example usage**

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

## mgp.write_proc(func: Callable[…, mgp.Record])

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

**Example usage**

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


## mgp.add_batch_read_proc(func: Callable[…, mgp.Record], initializer: typing.Callable, cleanup: typing.Callable)

Register `func` as a read-only batch procedure of the current module.

`func` represents a function that is invoked through OpenCypher. Through OpenCypher user invokes `func`. Memgraph invokes first the `initializer` function. After the `initializer` function, `func` is called until it returns an empty result. Afterward, the `cleanup` function is called, which can be used to clean up global resources. Only at that point is garbage collection invoked, so any dangling references to Python objects will be cleaned.

`initializer` must define the same parameters as the main `func` function, and will receive the same parameters as `func`. The position of arguments and the type of arguments must be the same. 

Otherwise, the same rules apply as in `read_proc`. It's important to keep in mind that no Memgraph resources can be stored in `init` and during batching. After `initializer` and each `func` call, every Memgraph-related object is invalidated and can't be used later on.

## mgp.add_batch_write_proc(func: Callable[…, mgp.Record], initializer: typing.Callable, cleanup: typing.Callable)

Register `func` as a writeable batch procedure of the current module.

The same rules for parameters and order of calls to functions apply for a writeable procedure as for the read-only batched procedure. 

## mgp.function(func: Callable[[…]])

Register func as a Memgraph function in the current module.

`function` is meant to be used as a decorator function to register module
functions. The registered func needs to be a callable which optionally takes
`FuncCtx` as the first argument. Other arguments of func will be bound to values
passed in the Cypher query. Only the funcion arguments need to be annotated with
types. The return type doesn't need to be specified, but it has to be supported
by `mgp.Any`. Registering generator functions is currently not supported.

**Example usage**

```python
import mgp

@mgp.function
def func_example(context: mgp.FuncCtx,
    required_arg: str,
    optional_arg: mgp.Nullable[str] = None
    ):

    return_args = [required_arg]

    if optional_arg is not None:
        return_args.append(optional_arg)

    # Return any kind of result supported by mgp.Any
    return return_args
```

The example function above returns a list of provided arguments:
* `required_arg` is always present and its value is the first argument of the
  function.
* `optional_arg` is present if the second argument of the function is not
  `null`.

Any errors can be reported by raising an `Exception`.

The function can be invoked in Cypher using the following calls:

```cypher
RETURN example.func_example("first argument", "second_argument");
RETURN example.func_example("first argument");
```

Naturally, you may pass in different arguments.

This module provides the API for usage in custom openCypher procedures.

## Label Objects

```python
class Label()
```

Label of a `Vertex`.

### name

```python
@property
def name() -> str
```

Get the name of the label.

**Returns**:

  A string that represents the name of the label.
  

**Example**:

  ```label.name```

## Properties Objects

```python
class Properties()
```

A collection of properties either on a `Vertex` or an `Edge`.

### get()

```python
def get(property_name: str, default=None) -> object
```

Get the value of a property with the given name or return default value.

**Arguments**:

- `property_name` - String that represents property name.
- `default` - Default value return if there is no property.
  

**Returns**:

  Any object value that property under `property_name` has or default value otherwise.
  

**Raises**:

- `InvalidContextError` - If `edge` or `vertex` is out of context.
- `UnableToAllocateError` - If unable to allocate a `mgp.Value`.
- `DeletedObjectError` - If the `object` has been deleted.
  

**Examples**:

  ```
  vertex.properties.get(property_name)
  edge.properties.get(property_name)
  ```

### set()

```python
def set(property_name: str, value: object) -> None
```

Set the value of the property. When the value is `None`, then the
property is removed.

**Arguments**:

- `property_name` - String that represents property name.
- `value` - Object that represents value to be set.
  

**Raises**:

- `UnableToAllocateError` - If unable to allocate memory for storing the property.
- `ImmutableObjectError` - If the object is immutable.
- `DeletedObjectError` - If the object has been deleted.
- `SerializationError` - If the object has been modified by another transaction.
- `ValueConversionError` - If `value` is vertex, edge or path.
  

**Examples**:

  ```
  vertex.properties.set(property_name, value)
  edge.properties.set(property_name, value)
  ```

### items()

```python
def items() -> typing.Iterable[Property]
```

Iterate over the properties. Doesn’t return a dynamic view of the properties but copies the
current properties.

**Returns**:

  Iterable `Property` of names and values.
  

**Raises**:

- `InvalidContextError` - If edge or vertex is out of context.
- `UnableToAllocateError` - If unable to allocate an iterator.
- `DeletedObjectError` - If the object has been deleted.
  

**Examples**:

  ```
  items = vertex.properties.items()
  for it in items:
    name = it.name
    value = it.value
  ```
  ```
  items = edge.properties.items()
  for it in items:
    name = it.name
    value = it.value
  ```

### keys()

```python
def keys() -> typing.Iterable[str]
```

Iterate over property names. Doesn’t return a dynamic view of the property names but copies the
name of the current properties.

**Returns**:

  Iterable list of strings that represent names/keys of properties.
  

**Raises**:

- `InvalidContextError` - If edge or vertex is out of context.
- `UnableToAllocateError` - If unable to allocate an iterator.
- `DeletedObjectError` - If the object has been deleted.
  

**Examples**:

  ```
  graph.vertex.properties.keys()
  graph.edge.properties.keys()
  ```

### values()

```python
def values() -> typing.Iterable[object]
```

Iterate over property values. Doesn’t return a dynamic view of the property values but copies the
value of the current properties.

**Returns**:

  Iterable list of property values.
  

**Raises**:

- `InvalidContextError` - If edge or vertex is out of context.
- `UnableToAllocateError` - If unable to allocate an iterator.
- `DeletedObjectError` - If the object has been deleted.
  

**Examples**:

  ```
  vertex.properties.values()
  edge.properties.values()
  ```

### \_\_len\_\_

```python
def __len__() -> int
```

Get the number of properties.

**Returns**:

  A number of properties on vertex or edge.
  

**Raises**:

- `InvalidContextError` - If edge or vertex is out of context.
- `UnableToAllocateError` - If unable to allocate an iterator.
- `DeletedObjectError` - If the object has been deleted.
  

**Examples**:

  ```
  len(vertex.properties)
  len(edge.properties)
  ```

### \_\_iter\_\_

```python
def __iter__() -> typing.Iterable[str]
```

Iterate over property names.

**Returns**:

  Iterable list of strings that represent names of properties.
  

**Raises**:

- `InvalidContextError` - If edge or vertex is out of context.
- `UnableToAllocateError` - If unable to allocate an iterator.
- `DeletedObjectError` - If the object has been deleted.
  

**Examples**:

  ```
  iter(vertex.properties)
  iter(edge.properties)
  ```

### \_\_getitem\_\_

```python
def __getitem__(property_name: str) -> object
```

Get the value of a property with the given name or raise KeyError.

**Arguments**:

- `property_name` - String that represents property name.
  

**Returns**:

  Any value that property under property_name have.
  

**Raises**:

- `InvalidContextError` - If edge or vertex is out of context.
- `UnableToAllocateError` - If unable to allocate a mgp.Value.
- `DeletedObjectError` - If the object has been deleted.
  

**Examples**:

  ```
  vertex.properties[property_name]
  edge.properties[property_name]
  ```

### \_\_setitem\_\_

```python
def __setitem__(property_name: str, value: object) -> None
```

Set the value of the property. When the value is `None`, then the
property is removed.

**Arguments**:

- `property_name` - String that represents property name.
- `value` - Object that represents value to be set.
  

**Raises**:

- `UnableToAllocateError` - If unable to allocate memory for storing the property.
- `ImmutableObjectError` - If the object is immutable.
- `DeletedObjectError` - If the object has been deleted.
- `SerializationError` - If the object has been modified by another transaction.
- `ValueConversionError` - If `value` is vertex, edge or path.
  

**Examples**:

  ```
  vertex.properties[property_name] = value
  edge.properties[property_name] = value
  ```

### \_\_contains\_\_

```python
def __contains__(property_name: str) -> bool
```

Check if there is a property with the given name.

**Arguments**:

- `property_name` - String that represents property name
  

**Returns**:

  Bool value that depends if there is with a given name.
  

**Raises**:

- `InvalidContextError` - If edge or vertex is out of context.
- `UnableToAllocateError` - If unable to allocate a mgp.Value.
- `DeletedObjectError` - If the object has been deleted.
  

**Examples**:

  ```
  if property_name in vertex.properties:
  ```
  ```
  if property_name in edge.properties:
  ```

## EdgeType Objects

```python
class EdgeType()
```

Type of an Edge.

### name

```python
@property
def name() -> str
```

Get the name of EdgeType.

**Returns**:

  A string that represents the name of EdgeType.
  

**Example**:

  ```edge.type.name```

## Edge Objects

```python
class Edge()
```

Edge in the graph database.

Access to an Edge is only valid during a single execution of a procedure in
a query. You should not globally store an instance of an Edge. Using an
invalid Edge instance will raise InvalidContextError.

### is\_valid()

```python
def is_valid() -> bool
```

Check if `edge` is in a valid context and may be used.

**Returns**:

  A `bool` value depends on if the `edge` is in a valid context.
  

**Examples**:

  ```edge.is_valid()```

### underlying\_graph\_is\_mutable()

```python
def underlying_graph_is_mutable() -> bool
```

Check if the `graph` can be modified.

**Returns**:

  A `bool` value depends on if the `graph` is mutable.
  

**Examples**:

  ```edge.underlying_graph_is_mutable()```

### id

```python
@property
def id() -> EdgeId
```

Get the ID of the edge.

**Returns**:

  `EdgeId` represents ID of the edge.
  

**Raises**:

- `InvalidContextError` - If edge is out of context.
  

**Examples**:

  ```edge.id```

### type

```python
@property
def type() -> EdgeType
```

Get the type of edge.

**Returns**:

  `EdgeType` describing the type of edge.
  

**Raises**:

- `InvalidContextError` - If edge is out of context.
  

**Examples**:

  ```edge.type```

### from\_vertex()

```python
@property
def from_vertex() -> "Vertex"
```

Get the source vertex.

**Returns**:

  `Vertex` from where the edge is directed.
  

**Raises**:

- `InvalidContextError` - If edge is out of context.
  

**Examples**:

  ```edge.from_vertex```

### to\_vertex()

```python
@property
def to_vertex() -> "Vertex"
```

Get the destination vertex.

**Returns**:

  `Vertex` to where the edge is directed.
  

**Raises**:

- `InvalidContextError` - If edge is out of context.
  

**Examples**:

  ```edge.to_vertex```

### properties

```python
@property
def properties() -> Properties
```

Get the properties of the edge.

**Returns**:

  All `Properties` of edge.
  

**Raises**:

- `InvalidContextError` - If edge is out of context.
  

**Examples**:

  ```edge.properties```

### \_\_eq\_\_

```python
def __eq__(other) -> bool
```

Raise InvalidContextError.

## Vertex Objects

```python
class Vertex()
```

Vertex in the graph database.

Access to a Vertex is only valid during a single execution of a procedure
in a query. You should not globally store an instance of a Vertex. Using an
invalid Vertex instance will raise InvalidContextError.

### is\_valid()

```python
def is_valid() -> bool
```

Checks if `Vertex` is in valid context and may be used.

**Returns**:

  A `bool` value depends on if the `Vertex` is in a valid context.
  

**Examples**:

  ```vertex.is_valid()```

### underlying\_graph\_is\_mutable()

```python
def underlying_graph_is_mutable() -> bool
```

Check if the `graph` is mutable.

**Returns**:

  A `bool` value depends on if the `graph` is mutable.
  

**Examples**:

  ```vertex.underlying_graph_is_mutable()```

### id

```python
@property
def id() -> VertexId
```

Get the ID of the Vertex.

**Returns**:

  `VertexId` represents ID of the vertex.
  

**Raises**:

- `InvalidContextError` - If vertex is out of context.
  

**Examples**:

  ```vertex.id```

### labels

```python
@property
def labels() -> typing.Tuple[Label]
```

Get the labels of the vertex.

**Returns**:

  A tuple of `Label` representing vertex Labels
  

**Raises**:

- `InvalidContextError` - If vertex is out of context.
- `OutOfRangeError` - If some of the labels are removed while collecting the labels.
- `DeletedObjectError` - If `Vertex` has been deleted.
  

**Examples**:

  ```vertex.labels```

### add\_label()

```python
def add_label(label: str) -> None
```

Add the label to the vertex.

**Arguments**:

- `label` - String label to be added.
  

**Raises**:

- `InvalidContextError` - If `Vertex` is out of context.
- `UnableToAllocateError` - If unable to allocate memory for storing the label.
- `ImmutableObjectError` - If `Vertex` is immutable.
- `DeletedObjectError` - If `Vertex` has been deleted.
- `SerializationError` - If `Vertex` has been modified by another transaction.
  

**Examples**:

  ```vertex.add_label(label)```

### remove\_label()

```python
def remove_label(label: str) -> None
```

Remove the label from the vertex.

**Arguments**:

- `label` - String label to be deleted

**Raises**:

- `InvalidContextError` - If `Vertex` is out of context.
- `ImmutableObjectError` - If `Vertex` is immutable.
- `DeletedObjectError` - If `Vertex` has been deleted.
- `SerializationError` - If `Vertex` has been modified by another transaction.
  

**Examples**:

  ```vertex.remove_label(label)```

### properties

```python
@property
def properties() -> Properties
```

Get the properties of the vertex.

**Returns**:

  `Properties` on a current vertex.
  

**Raises**:

- `InvalidContextError` - If `Vertex` is out of context.
  

**Examples**:

  ```vertex.properties```

### in\_edges

```python
@property
def in_edges() -> typing.Iterable[Edge]
```

Iterate over inbound edges of the vertex. When the first parameter to a procedure is a projected graph, iterating will start over the inbound edges of the given vertex in the projected graph.
Doesn’t return a dynamic view of the edges but copies the
current inbound edges.

**Returns**:

  Iterable list of `Edge` objects that are directed in towards the current vertex.
  

**Raises**:

- `InvalidContextError` - If `Vertex` is out of context.
- `UnableToAllocateError` - If unable to allocate an iterator.
- `DeletedObjectError` - If `Vertex` has been deleted.
  

**Examples**:

  ```for edge in vertex.in_edges:```

### out\_edges

```python
@property
def out_edges() -> typing.Iterable[Edge]
```

Iterate over outbound edges of the vertex. When the first parameter to a procedure is a projected graph, iterating will start over the outbound edges of the given vertex in the projected graph.

Doesn’t return a dynamic view of the edges but copies the
current outbound edges.

**Returns**:

  Iterable list of `Edge` objects that are directed out of the current vertex.
  

**Raises**:

- `InvalidContextError` - If `Vertex` is out of context.
- `UnableToAllocateError` - If unable to allocate an iterator.
- `DeletedObjectError` - If `Vertex` has been deleted.
  

**Examples**:

  ```for edge in vertex.out_edges:```

### \_\_eq\_\_

```python
def __eq__(other) -> bool
```

Raise InvalidContextError

## Path Objects

```python
class Path()
```

Path containing Vertex and Edge instances.

### \_\_init\_\_

```python
def __init__(starting_vertex_or_path: typing.Union[_mgp.Path, Vertex])
```

Initialize with a starting Vertex.

**Raises**:

- `InvalidContextError` - If passed in Vertex is invalid.
- `UnableToAllocateError` - If cannot allocate a path.

### is\_valid()

```python
def is_valid() -> bool
```

Check if `Path` is in valid context and may be used.

**Returns**:

  A `bool` value depends on if the `Path` is in a valid context.
  

**Examples**:

  ```path.is_valid()```

### expand()

```python
def expand(edge: Edge)
```

Append an edge continuing from the last vertex on the path.

The last vertex on the path will become the other endpoint of the given
edge, as continued from the current last vertex.

**Arguments**:

- `edge` - `Edge` that is added to the path
  

**Raises**:

- `InvalidContextError` - If using an invalid `Path` instance or if passed in `Edge` is invalid.
- `LogicErrorError` - If the current last vertex in the path is not part of the given edge.
- `UnableToAllocateError` - If unable to allocate memory for path extension.
  

**Examples**:

  ```path.expand(edge)```

### vertices

```python
@property
def vertices() -> typing.Tuple[Vertex, ...]
```

Vertices are ordered from the start to the end of the path.

**Returns**:

  A tuple of `Vertex` objects order from start to end of the path.
  

**Raises**:

- `InvalidContextError` - If using an invalid Path instance.
  

**Examples**:

  ```path.vertices```

### edges

```python
@property
def edges() -> typing.Tuple[Edge, ...]
```

Edges are ordered from the start to the end of the path.

**Returns**:

  A tuple of `Edge` objects order from start to end of the path

**Raises**:

- `InvalidContextError` - If using an invalid `Path` instance.

**Examples**:

  ```path.edges```

## Record Objects

```python
class Record()
```

Represents a record of resulting field values.

### \_\_init\_\_

```python
def __init__(**kwargs)
```

Initialize with name=value fields in kwargs.

## Vertices Objects

```python
class Vertices()
```

Iterable over vertices in a graph.

### is\_valid()

```python
def is_valid() -> bool
```

Check if `Vertices` is in valid context and may be used.

**Returns**:

  A `bool` value depends on if the `Vertices` is in valid context.
  

**Examples**:

  ```vertices.is_valid()```

### \_\_iter\_\_

```python
def __iter__() -> typing.Iterable[Vertex]
```

Iterate over vertices.

**Returns**:

  Iterable list of `Vertex` objects.
  

**Raises**:

- `InvalidContextError` - If context is invalid.
- `UnableToAllocateError` - If unable to allocate an iterator or a vertex.
  

**Examples**:

  ```for vertex in graph.vertices```
  

### \_\_contains\_\_

```python
def __contains__(vertex)
```

Check if Vertices contain the given vertex.

**Arguments**:

- `vertex` - `Vertex` to be checked if it is a part of graph `Vertices`.
  

**Returns**:

  Bool value depends if there is `Vertex` in graph `Vertices`.
  

**Raises**:

- `UnableToAllocateError` - If unable to allocate the vertex.
  

**Examples**:

  ```if vertex in graph.vertices:```

### \_\_len\_\_

```python
def __len__()
```

Get the number of vertices.

**Returns**:

  A number of vertices in the graph.
  

**Raises**:

- `InvalidContextError` - If context is invalid.
- `UnableToAllocateError` - If unable to allocate an iterator or a vertex.
  

**Examples**:

  ```len(graph.vertices)```

## Graph Objects

```python
class Graph()
```

State of the graph database in current ProcCtx.

### is\_valid()

```python
def is_valid() -> bool
```

Check if `graph` is in a valid context and may be used.

**Returns**:

  A `bool` value depends on if the `graph` is in a valid context.
  

**Examples**:

  ```graph.is_valid()```

### get\_vertex\_by\_id()

```python
def get_vertex_by_id(vertex_id: VertexId) -> Vertex
```

Return the Vertex corresponding to the given vertex_id from the graph. When the first parameter to a procedure is a projected graph, the vertex must also exist in the projected graph.

Access to a Vertex is only valid during a single execution of a
procedure in a query. You should not globally store the returned
Vertex.

**Arguments**:

- `vertex_id` - Memgraph Vertex ID
  

**Returns**:

  `Vertex`corresponding to `vertex_id`
  

**Raises**:

- `IndexError` - If unable to find the given vertex_id.
- `InvalidContextError` - If context is invalid.
  

**Examples**:

  ```graph.get_vertex_by_id(vertex_id)```

### vertices

```python
@property
def vertices() -> Vertices
```

Get all vertices in the graph.

Access to a Vertex is only valid during a single execution of a
procedure in a query. You should not globally store the returned Vertex
instances.

**Returns**:

  `Vertices` that contained in the graph.
  

**Raises**:

- `InvalidContextError` - If context is invalid.
  

**Examples**:

  Iteration over all graph `Vertices`.
  
  ```
  graph = context.graph
  for vertex in graph.vertices:
  ```

### is\_mutable()

```python
def is_mutable() -> bool
```

Check if the graph is mutable. Thus it can be used to modify vertices and edges.

**Returns**:

  A `bool` value that depends if the graph is mutable or not.
  

**Examples**:

  ```graph.is_mutable()```

### create\_vertex()

```python
def create_vertex() -> Vertex
```

Create an empty vertex. When the first parameter to a procedure is a projected graph, the vertex is also added to the projected graph view.

**Returns**:

  Created `Vertex`.
  

**Raises**:

- `ImmutableObjectError` - If `graph` is immutable.
- `UnableToAllocateError` - If unable to allocate a vertex.
  

**Examples**

  ```vertex = graph.create_vertex()```

### delete\_vertex()

```python
def delete_vertex(vertex: Vertex) -> None
```

Delete a vertex if there are no edges. When the first parameter to a procedure is a projected graph, the vertex must also exist in the projected graph.

**Arguments**:

- `vertex` - `Vertex` to be deleted

**Raises**:

- `ImmutableObjectError` - If `graph` is immutable.
- `LogicErrorError` - If `vertex` has edges.
- `SerializationError` - If `vertex` has been modified by another transaction.

**Examples**:

  ```graph.delete_vertex(vertex)```

### detach\_delete\_vertex()

```python
def detach_delete_vertex(vertex: Vertex) -> None
```

Delete a vertex and all of its edges. When the first parameter to a procedure is a projected graph, such an operation is not possible. 

**Arguments**:

- `vertex` - `Vertex` to be deleted with all of its edges
  

**Raises**:

- `ImmutableObjectError` - If `graph` is immutable.
- `SerializationError` - If `vertex` has been modified by another transaction.

**Examples**:

  ```graph.detach_delete_vertex(vertex)```

### create\_edge()

```python
def create_edge(from_vertex: Vertex, to_vertex: Vertex,
                edge_type: EdgeType) -> Edge
```

Create an edge. When the first parameter is a projected graph, it will create a new directed edge with a specified label only if both vertices are a part of the projected graph.

**Returns**:

  Created `Edge`.

**Arguments**:

- `from_vertex` - `Vertex` from where edge is directed.
- `to_vertex` - `Vertex`  to where edge is directed.
- `edge_type` - `EdgeType` defines the type of edge.
  

**Raises**:

- `ImmutableObjectError` - If `graph` is immutable.
- `UnableToAllocateError` - If unable to allocate an edge.
- `DeletedObjectError` - If `from_vertex` or `to_vertex` has been deleted.
- `SerializationError` - If `from_vertex` or `to_vertex` has been modified by another transaction.

**Examples**:

  ```edge = graph.create_edge(from_vertex, vertex, edge_type)```

### delete\_edge()

```python
def delete_edge(edge: Edge) -> None
```

Delete an edge. When the first parameter to a procedure is a projected graph, the edge must also exist in the projected graph.

**Arguments**:

- `edge` - `Edge` to be deleted
  

**Raises**:

- ImmutableObjectError: If `graph` is immutable.
- Raise SerializationError: If `edge`, its source or destination vertex has been modified by another transaction.

**Examples**

  ```graph.delete_edge(edge)```

## AbortError Objects

```python
class AbortError(Exception)
```

Signals that the procedure was asked to abort its execution.

## ProcCtx Objects

```python
class ProcCtx()
```

Context of a procedure being executed.

Access to a ProcCtx is only valid during a single execution of a procedure
in a query. You should not globally store a ProcCtx instance.

### graph

```python
@property
def graph() -> Graph
```

Access to `Graph` object.

**Returns**:

  Graph object.
  

**Raises**:

- `InvalidContextError` - If context is invalid.


**Examples**:

  ```context.graph```


## Logger Objects

```python
class Logger()
```

Class for logging.

### info()

```python
def info(out: str) -> None
```
Logs a message `out` on `INFO` log level.

**Arguments**:

- `out` - `str` to be logged
  

**Examples**

  ```logger.info("message")```

### debug()

```python
def debug(out: str) -> None
```
Logs a message `out` on `DEBUG` log level.

**Arguments**:

- `out` - `str` to be logged
  

**Examples**

  ```logger.debug("message")```


### error()

```python
def error(out: str) -> None
```
Logs a message `out` on `ERROR` log level.

**Arguments**:

- `out` - `str` to be logged
  

**Examples**

  ```logger.error("message")```

### trace()

```python
def trace(out: str) -> None
```
Logs a message `out` on `TRACE` log level.

**Arguments**:

- `out` - `str` to be logged
  

**Examples**

  ```logger.trace("message")```


### warning()

```python
def warning(out: str) -> None
```
Logs a message `out` on `WARNING` log level.

**Arguments**:

- `out` - `str` to be logged
  

**Examples**

  ```logger.warning("message")```

### critical()

```python
def critical(out: str) -> None
```
Logs a message `out` on `CRITICAL` log level.

**Arguments**:

- `out` - `str` to be logged
  

**Examples**

  ```logger.critical("message")```

## UnsupportedTypingError Objects

```python
class UnsupportedTypingError(Exception)
```

Signals a typing annotation is not supported as a _mgp.CypherType.

## Deprecated Objects

```python
class Deprecated()
```

Annotate a resulting Record&#x27;s field as deprecated.

### read\_proc()

```python
def read_proc(func: typing.Callable[..., Record])
```

Register `func` as a read-only procedure of the current module.

The decorator `read_proc` is meant to be used to register module procedures.
The registered `func` needs to be a callable which optionally takes
`ProcCtx` as its first argument. Other arguments of `func` will be bound to
values passed in the cypherQuery. The full signature of `func` needs to be
annotated with types. The return type must be `Record(field_name=type, ...)`
and the procedure must produce either a complete Record or None. To mark a
field as deprecated, use `Record(field_name=Deprecated(type), ...)`.
Multiple records can be produced by returning an iterable of them.
Registering generator functions is currently not supported.


### write\_proc()

```python
def write_proc(func: typing.Callable[..., Record])
```

Register `func` as a writeable procedure of the current module.

The decorator `write_proc` is meant to be used to register module
procedures. The registered `func` needs to be a callable which optionally
takes `ProcCtx` as the first argument. Other arguments of `func` will be
bound to values passed in the cypherQuery. The full signature of `func`
needs to be annotated with types. The return type must be
`Record(field_name=type, ...)` and the procedure must produce either a
complete Record or None. To mark a field as deprecated, use
`Record(field_name=Deprecated(type), ...)`. Multiple records can be produced
by returning an iterable of them. Registering generator functions is
currently not supported.


## InvalidMessageError Objects

```python
class InvalidMessageError(Exception)
```

Signals using a message instance outside of the registered transformation.

## Message Objects

```python
class Message()
```

Represents a message from a stream.

### is\_valid()

```python
def is_valid() -> bool
```

Return True if `self` is in valid context and may be used.

### source\_type()

```python
def source_type() -> str
```

Supported in all stream sources

Raise InvalidArgumentError if the message is from an unsupported stream source.

### payload()

```python
def payload() -> bytes
```

Supported stream sources:
  - Kafka
  - Pulsar

Raise InvalidArgumentError if the message is from an unsupported stream source.

### topic\_name()

```python
def topic_name() -> str
```

Supported stream sources:
  - Kafka
  - Pulsar

Raise InvalidArgumentError if the message is from an unsupported stream source.

### key()

```python
def key() -> bytes
```

Supported stream sources:
  - Kafka

Raise InvalidArgumentError if the message is from an unsupported stream source.

### timestamp()

```python
def timestamp() -> int
```

Supported stream sources:
  - Kafka

Raise InvalidArgumentError if the message is from an unsupported stream source.

### offset()

```python
def offset() -> int
```

Supported stream sources:
  - Kafka

Raise InvalidArgumentError if the message is from an unsupported stream source.

## InvalidMessagesError Objects

```python
class InvalidMessagesError(Exception)
```

Signals using a messages instance outside of the registered transformation.

## Messages Objects

```python
class Messages()
```

Represents a list of messages from a stream.

### is\_valid()

```python
def is_valid() -> bool
```

Return True if `self` is in valid context and may be used.

### message\_at()

```python
def message_at(id: int) -> Message
```

Raise InvalidMessagesError if context is invalid.

### total\_messages()

```python
def total_messages() -> int
```

Raise InvalidContextError if context is invalid.

## TransCtx Objects

```python
class TransCtx()
```

Context of a transformation being executed.

Access to a TransCtx is only valid during a single execution of a transformation.
You should not globally store a TransCtx instance.

### graph

```python
@property
def graph() -> Graph
```

Raise InvalidContextError if context is invalid.

## FuncCtx Objects

```python
class FuncCtx()
```

Context of a function being executed.

Access to a FuncCtx is only valid during a single execution of a function in
a query. You should not globally store a FuncCtx instance. The graph object
within the FuncCtx is not mutable.

### function()

```python
def function(func: typing.Callable)
```

Register `func` as a user-defined function in the current module.

The decorator `function` is meant to be used to register module functions.
The registered `func` needs to be a callable which optionally takes
`FuncCtx` as its first argument. Other arguments of `func` will be bound to
values passed in the Cypher query. Only the function arguments need to be
annotated with types. The return type doesn&#x27;t need to be specified, but it
has to be supported by `mgp.Any`. Registering generator functions is
currently not supported.




## InvalidContextError Objects

```python
class InvalidContextError(Exception)
```

Signals using a graph element instance outside of the registered procedure.

## UnknownError Objects

```python
class UnknownError(_mgp.UnknownError)
```

Signals unspecified failure.

## UnableToAllocateError Objects

```python
class UnableToAllocateError(_mgp.UnableToAllocateError)
```

Signals failed memory allocation.

## InsufficientBufferError Objects

```python
class InsufficientBufferError(_mgp.InsufficientBufferError)
```

Signals that some buffer is not big enough.

## OutOfRangeError Objects

```python
class OutOfRangeError(_mgp.OutOfRangeError)
```

Signals that an index-like parameter has a value that is outside its
possible values.

## LogicErrorError Objects

```python
class LogicErrorError(_mgp.LogicErrorError)
```

Signals faulty logic within the program such as violating logical
preconditions or class invariants and may be preventable.

## DeletedObjectError Objects

```python
class DeletedObjectError(_mgp.DeletedObjectError)
```

Signals accessing an already deleted object.

## InvalidArgumentError Objects

```python
class InvalidArgumentError(_mgp.InvalidArgumentError)
```

Signals that some of the arguments have invalid values.

## KeyAlreadyExistsError Objects

```python
class KeyAlreadyExistsError(_mgp.KeyAlreadyExistsError)
```

Signals that a key already exists in a container-like object.

## ImmutableObjectError Objects

```python
class ImmutableObjectError(_mgp.ImmutableObjectError)
```

Signals modification of an immutable object.

## ValueConversionError Objects

```python
class ValueConversionError(_mgp.ValueConversionError)
```

Signals that the conversion failed between python and cypher values.

## SerializationError Objects

```python
class SerializationError(_mgp.SerializationError)
```

Signals serialization error caused by concurrent modifications from
different transactions.

## AuthorizationError Objects

```python
class AuthorizationError(_mgp.AuthorizationError)
```

Signals that the user doesn't have sufficient permissions to perform
procedure call.
