# Example of a query module written in Python

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

:::info
If you need an additional Python library not included with Memgraph, check out
[the guide on how to install
it](/memgraph/how-to-guides/query-modules#how-to-install-external-python-libraries).
:::

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
### Batched read procedures

Similar to the regular `read` procedure, Memgraph also includes batched `read` procedure. Batched procedures are very similar to regular procedures. The key difference is that batched procedures return results in batches, mostly to reduce memory consumption. For batched procedures, you need to define **three** functions:
* `batching` function - similar to the main function in regular procedures
* `initialization` function - function to initialize stream, open source file, etc.
* `cleanup` function - function to close a stream, source file, etc.

Since there are three functions, construct works as follows: 
- `initialization` function must be defined in a way it receives the same parameters in the same order as batching function, including `mgp.ProcCtx` if it's defined as the first parameter
- when calling the procedure from the query, you need to call the `batching` function
- Memgraph calls `initialization` before the `batching` function 
- `batching` function needs to return an empty result at some point, which signals the end of the stream
- `cleanup` function is called at the end of the stream


There is no decorator used to register batched read procedure, so use the `mgp` function `mgp.add_batch_read_proc('batch', 'init', 'cleanup')`

```python
mysql_dict = {}


def init_migrate(
    table: str,
    config: mgp.Map,
):
    global mysql_dict

    query = f"SELECT * FROM {table};"
    mysql_dict = {}
    # Init dict and store variables for later reference. 
    if mysql_dict is None:
        connection = mysql_connector.connect(**config)
        cursor = connection.cursor(buffered=True)
        # Executes, but doesn't fetch. Fetching is done in batches
        # in `migrate`
        cursor.execute(query)

        mysql_dict["connection"] = connection
        mysql_dict["cursor"] = cursor
        mysql_dict["column_names"] = [column[0] for column in cursor.description]

def migrate(
    table_or_sql: str,
    config: mgp.Map,
) -> mgp.Record(row=mgp.Map):
    
    global mysql_dict
    cursor = mysql_dict["cursor"]
    column_names = mysql_dict["column_names"]
    rows = cursor.fetchmany(1000)
    return [mgp.Record(row=_name_row_cells(row, column_names)) for row in rows]

def cleanup_migrate():
    global mysql_dict
    mysql_dict["cursor"] = None
    mysql_dict["connection"].close()
    mysql_dict["connection"].commit()
    mysql_dict["connection"] = None
    mysql_dict["column_names"] = None
    mysql_dict = None


mgp.add_batch_read_proc(migrate, init_migrate, cleanup_migrate)

def _name_row_cells(row_cells, column_names) -> Dict[str, Any]:
    return dict(map(lambda column, value: (column, value), column_names, row_cells))
```



### Batched write procedures

Similar to batched `read` procedures, you can define batched `write` procedures. Batched procedures can return results in batches, mostly to reduce memory consumption. For batch `write` procedures like for batched `read` procedures you need to define **three** functions:
* `batching` function - similar to the main function in regular procedures
* `initialization` function - function to initialize a stream, open source file, etc.
* `cleanup` function - function to close a stream, source file, etc.

Since there are three functions, construct works as follows: 
- `initialization` function must be defined in a way it receives the same parameters in the same order as batching function, including `mgp.ProcCtx` if it's defined as the first parameter
- when calling the procedure from the query, you need to call the `batching` function
- Memgraph calls `initialization` before the `batching` function 
- `batching` function needs to return an empty result at some point, which signals the end of the stream
- `cleanup` function is called at the end of the stream

There is no decorator used to register batched read procedure, so use the `mgp` function `mgp.add_batch_write_proc('batch', 'init', 'cleanup')`


```python
mysql_dict = {}

def init_migrate(
    ctx: mgp.ProcCtx,
    table: str,
    config: mgp.Map,
):
    global mysql_dict

    query = f"SELECT * FROM {table};"
    mysql_dict = {}
    
    if mysql_dict is None:
        connection = mysql_connector.connect(**config)
        cursor = connection.cursor(buffered=True)
        cursor.execute(query)

        mysql_dict["connection"] = connection
        mysql_dict["cursor"] = cursor
        mysql_dict["column_names"] = [column[0] for column in cursor.description]

def migrate(
    ctx: mgp.ProcCtx,
    table_or_sql: str,
    config: mgp.Map,
) -> mgp.Record(vertex=mgp.Vertex):
    
    global mysql_dict
    cursor = mysql_dict["cursor"]
    column_names = mysql_dict["column_names"]
    rows = cursor.fetchmany(1000)
    results = []
    for row in rows:
        # For every row from database, create vertex
        # and add properties from database
        v=ctx.graph.create_vertex()
        for key,value in _name_row_cells(row, column_names):
            v.properties.set(key,value)
        results.append(mgp.Record(vertex=v))
    return results

def cleanup_migrate():
    global mysql_dict
    mysql_dict["cursor"] = None
    mysql_dict["connection"].close()
    mysql_dict["connection"].commit()
    mysql_dict["connection"] = None
    mysql_dict["column_names"] = None
    mysql_dict = None


mgp.add_batch_write_proc(migrate, init_migrate, cleanup_migrate)
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

### Terminate procedure execution

Just as the execution of a Cypher query can be terminated with [`TERMINATE
TRANSACTIONS "id";`](/reference-guide/transactions.md) query,
the execution of the procedure can as well, if it takes too long to yield a
response or gets stuck in an infinite loop due to unpredicted input data.

Transaction ID is visible upon calling the SHOW TRANSACTIONS; query. 

In order to be able to terminate the procedure, it has to contain function
`ctx.check_must_abort()` which precedes crucial parts of the code, such as
`while` and `until` loops, or similar points where the procedure might become
costly.

Consider the following example:

```python
import mgp

@mgp.read_proc
def long_query(ctx: mgp.ProcCtx) -> mgp.Record(my_id=int):
    id = 1
    try:
        while True:
            if ctx.check_must_abort():
                break
            id += 1
    except mgp.AbortError:
        return mgp.Record(my_id=id)
```

The `mgp.AbortError:` ensures that the correct message about termination is sent
to the session where the procedure was originally run. 

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


### Batched query procedures

Similar to batched query procedures in Python, you can add batched query procedures in C.

Batched procedures need 3 functions, one for each of batching, initialization, and cleanup.

```c
static void batch(const struct mgp_list *args, const struct mgp_graph *graph,
                      struct mgp_result *result, struct mgp_memory *memory) {
  ...
}

static void init(const struct mgp_list *args, const struct mgp_graph *graph,
                 struct mgp_memory *memory) {
  ...
}

static void cleanup() {
  ...
}
```

The `batch` function receives a list of arguments (`args`) passed in the
query. The parameter `result` is used to fill in the resulting records of the
procedure. Parameters `graph` and `memory` are context parameters of the
procedure, and they are used in some parts of the provided C API. 

At some point, `batch` needs to return an empty `result` to signal that the `batch` procedure is done with execution and `cleanup` can be called. `init` doesn't receive `result` as it is only used for initialization. `init` function will receive same arguments which are registered and passed to the `batch` function.

Memgraph ensures to call `init` before the `batch` function and `cleanup` at the end. The user directly invokes the `batch` function through OpenCypher.

The argument passed in `memory` is only alive throughout the execution of
`mgp_init_module`, so you must not allocate any global resources with it.  Consequently, you may want to reset any global state or release global resources
in the `cleanup` function. 

For more information on what exactly is possible with C API, take a look at the
`mg_procedure.h` file or the [C API reference
guide](/reference-guide/query-modules/implement-custom-query-modules/api/c-api.md).

The following line contains the `mgp_init_module` function that registers procedures
that can be invoked through Cypher. Even though the example has only one
`procedure`, you can register multiple different procedures in a single module.

Batch procedures are invoked using the `CALL <module>.<batch_procedure> ...` syntax. The
`<module-name>` will correspond to the name of the shared library. Since the example is complied into `example.so`, the module is called `example`.
As mentioned, Memgraph ensures to call `init` before  `<batch_procedure>` and `cleanup` once `<batch_procedure>` signals end with an empty result.

```c
int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  // Register our `procedure` as a read procedure with the name "procedure".
  struct mgp_proc *proc =
      mgp_module_add_batch_read_procedure(module, "procedure", batched, init, cleanup);
  // Return non-zero on error.
  if (!proc) return 1;
  // Additional code for better specifying the procedure (omitted here).
  ...
  // Return 0 to indicate success.
  return 0;
}
```


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