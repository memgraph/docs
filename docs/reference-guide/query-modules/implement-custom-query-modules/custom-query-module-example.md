---
id: custom-query-module-example
title: Example of a custom query
sidebar_label: Example of a custom query
---

We are going to examine how the query module `example` is implemented using the
C API and the Python API. Both query modules can be found in the
`/usr/lib/memgraph/query_modules` directory.

If you require more information about what query modules are, please
read [the query modules overview page](../overview.md)

## Python API

Query modules can be implemented using [the Python API](python-api)
provided by Memgraph. If you wish to write your own query modules using the
Python API, you need to have Python version `3.5.0` or above installed.

Every single Memgraph installation comes with the `py_example.py` query module
located in the `/usr/lib/memgraph/query_modules` directory. It was provided
as an example of a `.py` query module for you to examine and learn from.

If you are working with Docker and would like to open the file on your computer
copy it from the Docker container.

<details>
  <summary>Transferring files from a Docker container</summary>
  
  If you are using Docker to run Memgraph, you can copy the files from the
  Docker container to your local directory.

  <p> </p> 

  **1.** Start your Memgraph instance using Docker.

  **2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
  container:

  ```
  docker ps
  ```

  **3.** Position yourself in the directory where you want to transfer the file.

  **4.** Copy a file from the container to the current directory:

  ```
  docker cp CONTAINER ID:/usr/lib/memgraph/query_modules/py_example.py py_example.py
  ```

  Don't forget to replace the CONTAINER ID. 
</details>

### Readable procedure

Let's take a look at the `py_example.py` file and its first line:

```python
import mgp
```

On the first line, we import the `mgp` module, which contains definitions of the
public Python API provided by Memgraph. In essence, this is a wrapper around the
C API described in the next section. This file (`mgp.py`) can be found in the
Memgraph installation directory `/usr/lib/memgraph/python_support`.

Because our procedure will only read from the database, we pass it to a
`read_proc` decorator which handles read-only procedures. You can also inspect
the definition of said decorator in the `mgp.py` file or take a look at the
[Python API reference guide](python-api).

Next, we define the `procedure` that will be used as the callback for our
`py_example.procedure` invocation through Cypher.

```python
@mgp.read_proc
def procedure(context: mgp.ProcCtx,
              required_arg: mgp.Nullable[mgp.Any],
              optional_arg: mgp.Nullable[mgp.Any] = None
              ) -> mgp.Record(args=list,
                              vertex_count=int,
                              avg_degree=mgp.Number,
                              props=mgp.Nullable[mgp.Map]):

  ...
```

Because we need to access the graph to get results, the first argument takes the
`ProcCtx` type which is actually the graph. Then we defined two arguments, a
required and an optional argument that will bound to the values passed in
the Cypher query. They can be either null or of any type. 

The return type must be `Record(field_name=type, ...)` and the procedure must
produce either a complete `Record` or `None`. 

In our case, the example procedure returns four fields:

- `args`: a copy of arguments passed to the procedure.
- `vertex_count`: number of vertices in the database.
- `avg_degree`: average degree of vertices.
- `props`: properties map of the Vertex or Edge object passed as the `required_arg`.
   In case a Path object is passed, the procedure returns the properties map
   of the starting vertex.

We defined that this procedure can be invoked in Cypher as follows:

```cypher
MATCH (n) WITH n LIMIT 1 CALL py_example.procedure(n, 1) YIELD * RETURN *;
```

To get the `props` result, first we need to check if the passed argument is an
Edge, Vertex or Path and create the properties map:

```python
if isinstance(required_arg, (mgp.Edge, mgp.Vertex)):
    props = dict(required_arg.properties.items())
elif isinstance(required_arg, mgp.Path):
    start_vertex, = required_arg.vertices
    props = dict(start_vertex.properties.items())
```

In the case of `mgp.Edge` and `mgp.Vertex`, we obtain an instance of
`mgp.Properties` class and invoke the `items()` method which returns an
`Iterable` that contains `mgp.Property` objects of our `mgp.Edge` or
`mgp.Vertex`. Since the type of `mgp.Property` is a simple
`collections.namedtuple` containing `name` and `value`, we can easily pass it to
a `dict` constructor thus creating a map.

<!-- In the case of `mgp.Path` ?? --->

To get the `vertex_count` result we need to count the number of vertices and
edges in our graph:

```python
vertex_count = 0
edge_count = 0
for v in context.graph.vertices:
    vertex_count += 1
    edge_count += sum(1 for e in v.in_edges)
    edge_count += sum(1 for e in v.out_edges)
```

First we set our variables and then access the `mgp.Graph` instance via
`context.graph`. The `mgp.Graph` instance contains the state of the database at
the time execution of the Cypher query that is calling our procedure. The
`mgp.Graph` instance also has the property `vertices` that allows us to access
the `mgp.Vertices` object which can be iterated upon thus
increasing the variable on each traversed vertex.

Similarly, each `mgp.Vertex` object has `in_edges` and `out_edges` properties
which allow us to iterate over the corresponding `mgp.Edge` objects thus
increasing the variable on each traversed edge.

Lastly, we calculate the `avg_degree` value and obtain a copy of the passed
arguments:

```python
avg_degree = 0 if vertex_count == 0 else edge_count / vertex_count
args_copy = [copy.deepcopy(required_arg), copy.deepcopy(optional_arg)]
```

At the end, we return a `mgp.Record` with all the calculated values:

```python
return mgp.Record(args=args_copy, vertex_count=vertex_count,
                  avg_degree=avg_degree, props=props)
```

### Writeable procedures

Writeable procedures are implemented in a similar way as read-only procedures.
The only difference is that writeable procedures receive mutable objects,
therefore they can create and delete vertices or edges, modify the properties of
vertices and edges and they can add or remove labels of vertices.

We can implement a very simple writeable query module similarly to read-only
procedures. The following procedure creates a new vertex with a certain property
name and its value passed as arguments, and connects it to all existing vertices
that have a property with the same name and value:

```python
@mgp.write_proc
def write_procedure(context: mgp.ProcCtx,
                    property_name: str,
                    property_value: mgp.Nullable[mgp.Any]
                    ) -> mgp.Record(created_vertex=mgp.Vertex):
    # Collect all the vertices that have a property with
    # the same name and value as the passed arguments
    vertices_to_connect = []
    for v in context.graph.vertices:
        if v.properties[property_name] == property_value:
            vertices_to_connect.append(v)
    # Create the new vertex and set its property
    vertex = context.graph.create_vertex()
    vertex.properties.set(property_name, property_value)
    # Connect the new vertex to the other vertices
    for v in vertices_to_connect:
        context.graph.create_edge(vertex, v, mgp.EdgeType("HAS_SAME_VALUE"))
    # Return a field containing the newly created vertex
    return mgp.Record(created_vertex=vertex)

```

Python API provided by Memgraph can be a very powerful tool for implementing
query modules. We strongly suggest you thoroughly inspect the `mgp.py` source
file located in the Memgraph installation directory
`/usr/lib/memgraph/python_support`.

:::warning 

Do not store any graph elements globally when writing custom query modules with
the intent to use them in a different procedure invocation.

:::

## C API

Query modules can be implemented using the C API provided by Memgraph. Such
modules need to be compiled to a shared library so that they can be loaded when
Memgraph starts. This means that you can write the procedures in any programming
language which can work with C and can be compiled to the ELF shared library
format (`.so`).

:::warning

If the programming language of your choice throws exceptions, these exceptions
should never leave the scope of your module! You should have a top-level
exception handler that returns an error value and potentially logs the error
message. Exceptions that cross the module boundary will cause unexpected issues.

:::

Every single Memgraph installation comes with the `example.so` query module
located in the `/usr/lib/memgraph/query_modules` directory. It was provided as
an example of a query module written with C API for you to examine and learn
from. The `query_module` directory also contains `src` directory with
`example.c` file. 

Let's take a look at the `example.c` file.

```c
#include "mg_procedure.h"
```

In the first line, we include `mg_procedure.h`, which contains declarations of
all functions that can be used to implement a query module procedure. This file
is located in the Memgraph installation directory, under
`/usr/include/memgraph`. To compile the module, you will have to pass the
appropriate flags to the compiler, for example, `clang`:

```plaintext
clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so
```

Next, we have a `procedure` function. This function will serve as the callback
for our `example.procedure` invocation through Cypher.

```c
static void procedure(const struct mgp_list *args, const struct mgp_graph *graph,
                      struct mgp_result *result, struct mgp_memory *memory) {
  ...
}
```

If this was C++ you'd probably write the function like this:

```cpp
namespace {
void procedure(const mgp_list *args, const mgp_graph *graph,
               mgp_result *result, mgp_memory *memory) {
  try {
    ...
  } catch (const std::exception &e) {
    // We must not let any exceptions out of our module.
    mgp_result_set_error_msg(result, e.what());
    return;
  }
}
}
```

The `procedure` function receives the list of arguments (`args`) that are
passed in the query. The parameter `result` is used to fill in the resulting
records of the procedure. Parameters `graph` and `memory` are context parameters
of the procedure, and they are used in some parts of the provided C API. 

For more information on what exactly is possible with C API, take a look at the
`mg_procedure.h` file or the [C API reference
guide](c-api).

The next line contains the `mgp_init_module` function that registers procedures
that can be invoked through Cypher. Even though the example contains only one
`procedure`, you can register multiple different procedures in a single module.

Procedures are invoked using the `CALL <module>.<procedure> ...` syntax. The
`<module-name>` will correspond to the name of the shared library. Since we
compile our example into `example.so`, then the module is called `example`.
Procedure names can be different than their corresponding implementation
callbacks because the procedure name is defined when registering a procedure.

```c
int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  // Register our `procedure` as a read procedure with the name "procedure".
  struct mgp_proc *proc =
      mgp_module_add_read_procedure(module, "procedure", procedure);
  // Return non-zero on error.
  if (!proc) return 1;
  // Additional code for better specifying the procedure (omitted here).
  ...
  // Return 0 to indicate success.
  return 0;
}
```

The omitted part specifies the signature of the registered procedure. The
signature specification states what kind of arguments a procedure accepts and
what will be the resulting set of the procedure. For information on signature
specification API, take a look at `mg_procedure.h` file and read the
documentation on functions prefixed with `mgp_proc_`.

The passed in `memory` argument is only alive throughout the execution of
`mgp_init_module`, so you must not allocate any global resources with it. If you
really need to set up a certain global state, you may do so in the
 `mgp_init_module` using the standard global allocators.

Consequently, you may want to reset any global state or release global resources
in the following function.

```c
int mgp_shutdown_module() {
  // Return 0 to indicate success.
  return 0;
}
```

As mentioned before, no exceptions should leave your module. If you are writing
the module in a language that throws them, use exception handlers
in `mgp_init_module` and `mgp_shutdown_module` as well.
