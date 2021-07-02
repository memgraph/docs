---
id: python-api
title: Query modules Python API
sidebar_label: Python API
---

This is the API documentation for `mgp.py`  which contains definitions of the public Python API provided by Memgraph.
In essence, this is a wrapper around the **[C API](c-api.md)**. This source file can be found in the Memgraph installation directory,
under `python_support`. On the standard Debian installation, this will be under `/usr/lib/memgraph/python_support`.

:::caution
**NOTE:** This part of the documentation is still under development. An updated version will soon be available.
:::

## `mgp.read_proc(func)`
Register func as a a read-only procedure of the current module.

read_proc is meant to be used as a decorator function to register module
procedures. The registered func needs to be a callable which optionally
takes ProcCtx as the first argument. Other arguments of func will be
bound to values passed in the cypherQuery. The full signature of func
needs to be annotated with types. The return type must be
Record(field_name=type, …) and the procedure must produce either a
complete Record or None. To mark a field as deprecated, use
Record(field_name=Deprecated(type), …). Multiple records can be
produced by returning an iterable of them. Registering generator functions
is currently not supported.

### Examples

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

The example procedure above returns 2 fields: args and result.

    
* args is a copy of arguments passed to the procedure.


* result is the result of this procedure, a “Hello World!” string.

Any errors can be reported by raising an Exception.

The procedure can be invoked in openCypher using the following calls:

    CALL example.procedure(1, 2) YIELD args, result;
    CALL example.procedure(1) YIELD args, result;

Naturally, you may pass in different arguments or yield less fields.


## `mgp._typing_to_cypher_type()`
Convert typing annotation to a _mgp.CypherType instance.


## `class mgp.Properties(vertex_or_edge)`
Bases: `object`

A collection of properties either on a Vertex or an Edge.


### `get(property_name, default)`
Get the value of a property with the given name or return default.

Raise InvalidContextError.


### `items()`
Raise InvalidContextError.


### `keys()`
Iterate over property names.

Raise InvalidContextError.


### `values()`
Iterate over property values.

Raise InvalidContextError.


## `class mgp.Label(name)`
Bases: `object`

Label of a Vertex.


### `name()`

## `class mgp.EdgeType(name)`
Bases: `object`

Type of an Edge.


### `name()`

## `class mgp.Edge(edge)`
Bases: `object`

Edge in the graph database.

Access to an Edge is only valid during a single execution of a procedure in
a query. You should not globally store an instance of an Edge. Using an
invalid Edge instance will raise InvalidContextError.


### `from_vertex()`
Raise InvalidContextError.


### `id()`
Raise InvalidContextError.


### `is_valid()`
Return True if self is in valid context and may be used.


### `properties()`
Raise InvalidContextError.


### `to_vertex()`
Raise InvalidContextError.


### `type()`
Raise InvalidContextError.


## `class mgp.Vertex(vertex)`
Bases: `object`

Vertex in the graph database.

Access to a Vertex is only valid during a single execution of a procedure
in a query. You should not globally store an instance of a Vertex. Using an
invalid Vertex instance will raise InvalidContextError.


### `id()`
Raise InvalidContextError.


### `in_edges()`
Raise InvalidContextError.


### `is_valid()`
Return True if self is in valid context and may be used


### `labels()`
Raise InvalidContextError.


### `out_edges()`
Raise InvalidContextError.


### `properties()`
Raise InvalidContextError.


## `class mgp.Path(starting_vertex_or_path: Union[<sphinx.ext.autodoc.importer._MockObject object at 0x7f7fbd8d6700>, mgp.Vertex])`
Bases: `object`

Path containing Vertex and Edge instances.


### `edges()`
Edges ordered from the start to the end of the path.

Raise InvalidContextError if using an invalid Path instance.


### `expand(edge)`
Append an edge continuing from the last vertex on the path.

The last vertex on the path will become the other endpoint of the given
edge, as continued from the current last vertex.

Raise ValueError if the current last vertex in the path is not part of
the given edge.
Raise InvalidContextError if using an invalid Path instance or if
passed in edge is invalid.


### `is_valid()`

### `vertices()`
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


### `get_vertex_by_id(vertex_id)`
Return the Vertex corresponding to given vertex_id from the graph.

Access to a Vertex is only valid during a single execution of a
procedure in a query. You should not globally store the returned
Vertex.

Raise IndexError if unable to find the given vertex_id.
Raise InvalidContextError if context is invalid.


### `is_valid()`
Return True if self is in valid context and may be used.


### `vertices()`
All vertices in the graph.

Access to a Vertex is only valid during a single execution of a
procedure in a query. You should not globally store the returned Vertex
instances.

Raise InvalidContextError if context is invalid.


## `class mgp.ProcCtx(graph)`
Bases: `object`

Context of a procedure being executed.

Access to a ProcCtx is only valid during a single execution of a procedure
in a query. You should not globally store a ProcCtx instance.


### `check_must_abort()`

### `graph()`
Raise InvalidContextError if context is invalid.


### `is_valid()`

### `must_abort()`

## `class mgp.Deprecated(type_)`
Bases: `object`

Annotate a resulting Record’s field as deprecated.


### `field_type()`

## `class mgp.UnsupportedTypingError(type_)`
Bases: `Exception`

Signals a typing annotation is not supported as a _mgp.CypherType.


## `class mgp.AbortError()`
Bases: `Exception`

Signals that the procedure was asked to abort its execution.


## `class mgp.InvalidContextError()`
Bases: `Exception`

Signals using a graph element instance outside of the registered procedure.
