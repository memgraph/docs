---
id: custom-query-module-example
title: Example of a custom query module
sidebar_label: Example of a custom query module
---

We will examine how the query module `example` is implemented using the
C API and the Python API. Both query modules can be found in the
`/usr/lib/memgraph/query_modules` directory.

If you require more information about what query modules are, please
read [the query modules overview page](/reference-guide/query-modules/overview.md)

## Python API

Query modules can be implemented using [the Python API](/reference-guide/query-modules/implement-custom-query-modules/api/python-api.md)
provided by Memgraph. If you wish to write your own query modules using the
Python API, you need to have Python version `3.5.0` or above installed.

Every single Memgraph installation comes with the `py_example.py` query module
located in the `/usr/lib/memgraph/query_modules` directory. It was provided
as an example of a `.py` query module for you to examine and learn from.

If you are working with Docker and would like to open the file on your computer,
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

  Don't forget to replace the `CONTAINER ID`.
</details>

You can develop query modules in Python from Memgraph Lab (v2.0 and newer). Just
navigate to **Query Modules** and click on **New Module** to start.

<img src={require('../../../data/memgraph_lab_query_modules.png').default} className={"imgBorder"}/>

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
`read_proc` decorator, which handles read-only procedures. You can also inspect
the definition of said decorator in the `mgp.py` file or take a look at the
[Python API reference
guide](/reference-guide/query-modules/implement-custom-query-modules/api/python-api.md).

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
`ProcCtx` type, which is actually the graph. Then we defined two arguments, a
required and an optional argument that will be bound to the values passed in
the Cypher query. They can be either null or of any type.

The return type must be `Record(field_name=type, ...)`, and the procedure must
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
`Iterable` containing `mgp.Property` objects of our `mgp.Edge` or
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

First, we set our variables and then access the `mgp.Graph` instance via
`context.graph`. The `mgp.Graph` instance contains the state of the database at
the time execution of the Cypher query that is calling our procedure. The
`mgp.Graph` instance also has the property `vertices` that allows us to access
the `mgp.Vertices` object, which can be iterated upon, thus
increasing the variable on each traversed vertex.

Similarly, each `mgp.Vertex` object has `in_edges` and `out_edges` properties,
allowing us to iterate over the corresponding `mgp.Edge` objects, thus
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

Writeable procedures are implemented similarly as read-only procedures.
The only difference is that writeable procedures receive mutable objects.
Therefore they can create and delete vertices or edges, modify the properties of
vertices and edges, and add or remove labels of vertices.

We can implement a very simple writeable query module similarly to read-only
procedures. The following procedure creates a new vertex with a certain property
name and its value passed as arguments and connects it to all existing vertices
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

### Magic functions

User-defined, or so-called "Memgraph Magic functions" are implemented similarly
to read and write procedures. The difference between these is the end use-case
and graph mutability. Users should not modify (create, delete, or update) any
graph objects through functions.

Semantically, functions should be small fragments of functionality that do not
require long computations and large memory consumption.

The example of how to create and run a function is written below. This example
shows one trivial use-case of fetching the arguments as a list of returning
values.

```python
@mgp.function
def func_example(context: mgp.FuncCtx,
            argument: mgp.Any,
            opt_argument: mgp.Nullable[mgp.Any] = None):
    return_arguments = [argument]

    if opt_argument is not None:
      return_arguments.append(opt_argument)

    # Note that we do not need to specify the result Record as long as it is a
    # Memgraph defined value type.
    return return_arguments
```

At first glance, there is a huge similarity between defining a function and a
procedure. Let's talk about differences. The first difference is the context
type. `FuncCtx` prevents you to modify the graph and does not offer the API to
communicate with the graph entities not related to the entry arguments.

The second difference is the resulting signature. Functions do not require the
user to provide a resulting signature because of the return value. A function
call can be nested in Cypher and therefore the only requirement for the
returning value is to be of a supported `mgp.Type`.

The Cypher call for the written custom function can be executed like this:

```cypher
RETURN py_example.func_example("First argument", "Second argument");
```

This call can also be nested and used as a preprocessing for some other function
or procedure. The example of how to combine a built-in function with the
currently developed one looks like
this:

```cypher
RETURN head(py_example.func_example("First argument", "Second argument"));
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

Query modules can be implemented using the [C
API](/reference-guide/query-modules/implement-custom-query-modules/api/c-api.md)
provided by Memgraph. Such modules need to be compiled to a shared library so
that they can be loaded when Memgraph starts. This means that you can write the
procedures in any programming language that can work with C and be compiled to
the ELF shared library format (`.so`).

:::warning

If the programming language of your choice throws exceptions, these exceptions
should never leave the scope of your module! You should have a top-level
exception handler that returns an error value and potentially logs the error
message. Exceptions that cross the module boundary will cause unexpected issues.

:::

Every single Memgraph installation comes with the `example.so` query module
located in the `/usr/lib/memgraph/query_modules` directory. It was provided as
an example of a query module written with C API for you to examine and learn
from. The `query_module` directory also contains `src` directory, with
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

### Query procedures

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

The `procedure` function receives the list of arguments (`args`) passed in the
query. The parameter `result` is used to fill in the resulting records of the
procedure. Parameters `graph` and `memory` are context parameters of the
procedure, and they are used in some parts of the provided C API.

For more information on what exactly is possible with C API, take a look at the
`mg_procedure.h` file or the [C API reference
guide](/reference-guide/query-modules/implement-custom-query-modules/api/c-api.md).

The following line contains the `mgp_init_module` function that registers procedures
that can be invoked through Cypher. Even though the example has only one
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

### Magic functions

A major part of defining the "Magic function" is similar to query procedures.
The steps of defining a callback and registering arguments are repeated in the
magic functions, only with a different syntax.

To define a function, the first step is to define a callback. The example only
shows C++ code.

```cpp
namespace {
void function(const mgp_list *args, mgp_func_context *func_ctx,
               mgp_func_result *result, mgp_memory *memory) {
  try {
    ...
  } catch (const std::exception &e) {
    // We must not let any exceptions out of our module.
    mgp_func_result_set_error_msg(result, e.what(), memory);
    return;
  }
}
}
```

The parameter `args` is used to fetch the required and optional arguments from
the Cypher call. The parameter `result` defines the resulting value. It can
carry either an error or a return value, depending on the runtime execution.
There is no `mgp_graph` argument because the graph is immutable in functions.

To initialize and register the written function as a magic function, one should
write the initialization in the `mgp_init_module`. The registered function can
then be called in similar fashion as the built-in functions, just with the
syntax defining the module it is stored in: `<module>.<function_name>(...)`.

```cpp
int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  // Register our `function` as a Magic function with the name "function".
  struct mgp_func *func =
      mgp_module_add_function(module, "function", function); // Above defined function pointer
  // Return non-zero on error.
  if (!func) return 1;
  // Additional code for better specifying the function with arguments (omitted here).
  ...
  // Return 0 to indicate success.
  return 0;
}
```

## C++ API

Query modules can be implemented using the [C++ API
](/reference-guide/query-modules/implement-custom-query-modules/api/cpp-api.md)
provided by Memgraph. As with the C API, these modules need to be compiled to a
shared library so that they can be loaded when Memgraph starts.
Compilation of query modules that use the C++ API works much in the same way as
with modules using the C API.

:::warning

Any exceptions thrown should never leave the scope of your module. You may have
a top-level exception handler that returns the error value and potentially logs
any error messages.
Exceptions that cross the module boundary may cause unexpected issues!

:::

Let’s now take a look at the architecture of a query module itself.
The basic parts of every query module are as follows:

```cpp
#include <mgp.hpp>

// (Query procedure & magic function callbacks)

extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  // Register your procedures & functions here
}

extern "C" int mgp_shutdown_module() {
  // If you need to release any resources at shutdown, do it here
  return 0;
}

```

* The `mgp.hpp` file contains all declarations of the C++ API for implementing
query module procedures and functions.
* To make your query procedures and functions available, they need to be
registered in `mgp_init_module`.
* Finally, you may use `mgp_shutdown_module` to reset any global states or release
global resources at shutdown.

### Readable procedures

We can now examine how query procedures are implemented on the example of the
**random walk algorithm**.

As mentioned above, procedures are registered in `mgp_init_module`.

```cpp
extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  try {
    mgp::memory = memory;

    AddProcedure(RandomWalk, "get", mgp::ProcedureType::Read,
                 {mgp::Parameter("start", mgp::Type::Node), mgp::Parameter("length", mgp::Type::Int)},
                 {mgp::Return("random_walk", mgp::Type::Path)}, module, memory);
  } catch (const std::exception &e) {
    return 1;
  }
  return 0;
}
```

Here, we defined our procedure’s signature and added it as a readable
(`ProcedureType::Read`) procedure, named `get`, to our random walk module.
The function takes two named parameters: the start node and random walk length,
and it yields the computed random walk as a `Path` (sequence of nodes connected
by relationships) in the `random_walk` result field.

When the procedure is called, its arguments (& the graph) will be passed to the
`RandomWalk` callback function.

:::note

The API needs memory access for registration; you may grant it with
`mgp::memory = memory`.

As any exceptions should never leave the scope of the module, the procedure was
registered inside a try-catch block.

:::

:::warning

As `mgp::memory` is a global object, that means all of the procedures and
functions in a single shared library will refer to the same `mgp::memory`
object. As a result, calling such callables simultaneously from multiple threads
will lead to incorrect memory usage. This also includes the case when the same
callable is called from different user sessions. This is a constraint of the
current C++ API that we are planning to improve in the future.

:::



Callbacks for query procedures all share the same signature, as laid out below.
Parameter by parameter, the callback receives the procedure arguments (`args`),
graph context (`memgraph_graph`), result stream (`result`), and memory access.

:::tip

In place of working with the raw `mgp_` type arguments, use the C++ API classes
that provide familiar standard library-like interfaces and do away with needing
manual memory management.

:::

```cpp
void RandomWalk(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result, mgp_memory *memory) {
  try {
    mgp::memory = memory;
    const auto arguments = mgp::List(args);
    const auto record_factory = mgp::RecordFactory(result);

    const auto start_node = args[0].ValueNode();
    const auto length = args[1].ValueInt();

    auto random_walk = mgp::Path(start_node);

    // (Random walk algorithm logic)

    auto record = record_factory.NewRecord();
    record.Insert("random_walk", random_walk);

  } catch (const std::exception &e) {
    mgp::result_set_error_msg(result, e.what());
    return;
  }
}
```

### Writeable procedures

Writeable procedures differ from readable procedures in their graph context
being **mutable**. With them, you may create or delete nodes and relationships,
modify their properties, and add or remove node labels.

They use the same interface as readable procedures; the only difference is that
the appropriate procedure type parameter is passed to `AddProcedure`. The below
code registers and implements a writeable procedure `add_x_nodes`, which adds a
user-specified number of nodes (given by int parameter `number`) to the graph.

```cpp
extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  try {
    mgp::memory = memory;

    mgp::AddProcedure(AddXNodes, "add_x_nodes", mgp::ProcedureType::Write, {mgp::Parameter("number", mgp::Type::Int)},
                      {}, module, memory);
  } catch (const std::exception &e) {
    return 1;
  }
  return 0;
}
```



```cpp
void AddXNodes(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result, mgp_memory *memory) {
  mgp::memory = memory;
  const auto arguments = mgp::List(args);
  auto graph = mgp::Graph(memgraph_graph);

  for (int i = 0; i < arguments[0].ValueInt(); i++) {
    graph.CreateNode();
  }
}
```

### Magic functions

Magic functions are a Memgraph feature that lets the user write and call custom
Cypher functions. Unlike procedures, functions are simple operations that can’t
modify the graph; they return a single value and can be used in any expression
or predicate.

Let’s examine an example function that multiplies the numbers passed to it. The
registration is done by `AddFunction` in the same way as with query procedures,
the difference being the absence of a "function type" argument (functions don’t
modify the graph).

```cpp
extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  try {
    mgp::memory = memory;

    mgp::AddFunction(Multiply, "multiply",
                     {mgp::Parameter("int", mgp::Type::Int), mgp::Parameter("int", mgp::Type::Int)}, module, memory);
  } catch (const std::exception &e) {
    return 1;
  }
  return 0;
}
```

There are two key differences in the function signature:
* the lack of a `mgp_graph *` parameter (the graph is immutable in functions)
* different result type (functions return single values, while procedures write
result records to the result stream)

The difference in result type means that, to work with function results, we use
a different C++ API class: `Result`. Our function is implemented as follows:

```cpp
void Multiply(mgp_list *args, mgp_func_context *ctx, mgp_func_result *res, mgp_memory *memory) {
  mgp::memory = memory;
  const auto arguments = mgp::List(args);
  auto result = mgp::Result(res);

  auto first = arguments[0].ValueInt();
  auto second = arguments[1].ValueInt();

  result.SetValue(first * second);
}
```