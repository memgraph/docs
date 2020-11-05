# Query Modules Python API

This is the API documentation for `mgp.py`  which contains definitions of the public Python API provided by Memgraph. In essence, this is a wrapper around the `[C API](mg_procedure.md)`. This source file can be found in the Memgraph installation directory, under `python_support`. On the standard Debian installation, this will be under `/usr/lib/memgraph/python_support`.

## Contents

|                | Name           |
| -------------- | -------------- |
| method | **[mgp.read_proc](#class-mgp.read_proc)** <br>Register a function as a read-only procedure of the current module.  |
| exception | **[mgp.AbortError](#exception-mgp.AbortError)** <br>Signals that the procedure was asked to abort its execution.  |
| class | **[mgp.Deprecated](#class-mgp.Deprecated)** <br>Annotate a resulting Record’s field as deprecated.  |
| class | **[mgp.Edge](#class-mgp.Edge)** <br>Edge in the graph database.  |
| class | **[mgp.EdgeType](#class-mgp.EdgeType)** <br>Type of an Edge.  |
| class | **[mgp.Graph](#class-mgp.Graph)** <br>State of the graph database in current ProcCtx.  |
| class | **[mgp.Label](#class-mgp.Label)** <br>Label of a Vertex.  |
| class | **[mgp.Path](#class-mgp.Path)** <br>Path containing Vertex and Edge instances.  |
| class | **[mgp.ProcCtx](#class-mgp.ProcCtx)** <br>Context of a procedure being executed.  |
| class | **[mgp.Properties](#class-mgp.Properties)** <br>A collection of properties either on a Vertex or an Edge.  |
| class | **[mgp.Property](#class-mgp.Property)** <br>Named property value of a Vertex or an Edge.  |
| class | **[mgp.Record](#class-mgp.Record)** <br>Represents a record of resulting field values.  |
| class | **[mgp.Vertex](#class-mgp.Vertex)** <br>Vertex in the graph database.  |
| class | **[mgp.Vertices](#class-mgp.Vertices)** <br>Iterable over vertices in a graph.  |


### mgp.read_proc(func: Callable[[…], mgp.Record])
Register `func` as a read-only procedure of the current module.

`read_proc` is meant to be used as a decorator function to register module
procedures. The registered `func` needs to be a callable which optionally
takes `ProcCtx` as the first argument. Other arguments of `func` will be
bound to values passed in the cypherQuery. The full signature of `func`
needs to be annotated with types. The return type must be
`Record(field_name=type, ...)` and the procedure must produce either a
complete Record or None. To mark a field as deprecated, use
`Record(field_name=Deprecated(type), ...)`. Multiple records can be
produced by returning an iterable of them. Registering generator functions
is currently not supported.


### exception mgp.AbortError()
Bases: `Exception`

Signals that the procedure was asked to abort its execution.


### class mgp.Deprecated(type_)
Bases: `object`

Annotate a resulting Record’s field as deprecated.


#### field_type()

### class mgp.Edge(edge)
Bases: `object`

Edge in the graph database.

Access to an Edge is only valid during a single execution of a procedure in
a query. You should not globally store an instance of an Edge. Using an
invalid Edge instance will raise InvalidContextError.


#### property from_vertex()
Raise InvalidContextError.


#### property id()
Raise InvalidContextError.


#### is_valid()
Return True if self is in valid context and may be used.


#### property properties()
Raise InvalidContextError.


#### property to_vertex()
Raise InvalidContextError.


#### property type()
Raise InvalidContextError.


### class mgp.EdgeType(name)
Bases: `object`

Type of an Edge.


#### property name()

### class mgp.Graph(graph)
Bases: `object`

State of the graph database in current ProcCtx.


#### get_vertex_by_id(vertex_id: NewType.<locals>.new_type)
Return the Vertex corresponding to given vertex_id from the graph.

Access to a Vertex is only valid during a single execution of a
procedure in a query. You should not globally store the returned
Vertex.

Raise IndexError if unable to find the given vertex_id.
Raise InvalidContextError if context is invalid.


#### is_valid()
Return True if self is in valid context and may be used.


#### property vertices()
All vertices in the graph.

Access to a Vertex is only valid during a single execution of a
procedure in a query. You should not globally store the returned Vertex
instances.

Raise InvalidContextError if context is invalid.


### exception mgp.InvalidContextError()
Bases: `Exception`

Signals using a graph element instance outside of the registered procedure.


### class mgp.Label(name)
Bases: `object`

Label of a Vertex.


#### property name()

### class mgp.Path(starting_vertex_or_path: Union[_mgp.Path, mgp.Vertex])
Bases: `object`

Path containing Vertex and Edge instances.


#### property edges()
Edges ordered from the start to the end of the path.

Raise InvalidContextError if using an invalid Path instance.


#### expand(edge: mgp.Edge)
Append an edge continuing from the last vertex on the path.

The last vertex on the path will become the other endpoint of the given
edge, as continued from the current last vertex.

Raise ValueError if the current last vertex in the path is not part of
the given edge.
Raise InvalidContextError if using an invalid Path instance or if
passed in edge is invalid.


#### is_valid()

#### property vertices()
Vertices ordered from the start to the end of the path.

Raise InvalidContextError if using an invalid Path instance.


### class mgp.ProcCtx(graph)
Bases: `object`

Context of a procedure being executed.

Access to a ProcCtx is only valid during a single execution of a procedure
in a query. You should not globally store a ProcCtx instance.


#### check_must_abort()

#### property graph()
Raise InvalidContextError if context is invalid.


#### is_valid()

#### must_abort()

### class mgp.Properties(vertex_or_edge)
Bases: `object`

A collection of properties either on a Vertex or an Edge.


#### get(property_name: str, default=None)
Get the value of a property with the given name or return default.

Raise InvalidContextError.


#### items()
Raise InvalidContextError.


#### keys()
Iterate over property names.

Raise InvalidContextError.


#### values()
Iterate over property values.

Raise InvalidContextError.


### class mgp.Property(name, value)
Bases: `tuple`

Named property value of a Vertex or an Edge.

#### name()
Alias for field number 0


#### value()
Alias for field number 1


### class mgp.Record(\*\*kwargs)
Bases: `object`

Represents a record of resulting field values.


#### fields()

### exception mgp.UnsupportedTypingError(type_)
Bases: `Exception`

Signals a typing annotation is not supported as a _mgp.CypherType.


### class mgp.Vertex(vertex)
Bases: `object`

Vertex in the graph database.

Access to a Vertex is only valid during a single execution of a procedure
in a query. You should not globally store an instance of a Vertex. Using an
invalid Vertex instance will raise InvalidContextError.


#### property id()
Raise InvalidContextError.


#### property in_edges()
Raise InvalidContextError.


#### is_valid()
Return True if self is in valid context and may be used


#### property labels()
Raise InvalidContextError.


#### property out_edges()
Raise InvalidContextError.


#### property properties()
Raise InvalidContextError.


### class mgp.Vertices(graph)
Bases: `object`

Iterable over vertices in a graph.


#### is_valid()
Return True if self is in valid context and may be used.
