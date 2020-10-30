## Implement Query Modules?

We are going to examine how the query module `example` is implemented using 
the C API and the Python API. Both query modules can be found in the 
`/usr/lib/memgraph/query_modules` directory.

### Using Docker With Query Modules 

If you are using Docker to run Memgraph you will have to create a volume 
and mount it to access the `query_modules` directory. This can be done by 
creating an empty directory `~modules` and executing the following command:

```shell
docker volume create --driver local --opt type=none  --opt device=~modules --opt o=bind modules
```

Now, you can start Memgraph and mount the created volume:

```shell
docker run -it --rm -v modules:/usr/lib/memgraph/query_modules -p 7687:7687 memgraph
```

Everything from the directory `/usr/lib/memgraph/query_modules` will be 
visible/editable in your mounted `modules` volume and vice versa.

### Python API

Query modules can be implemented using the Python API provided by Memgraph. 
If you wish to write your own query modules using the Python API, you need 
to have Python version `3.5.0` or above installed.

Let's take a look at the `py_example.py` file.

```python
import mgp
```

On the first line, we import the `mgp` module, which contains definitions of the
public Python API provided by Memgraph. In essence, this is a wrapper around the
C API described in the next section. This file (`mgp.py`) can be found in
the Memgraph installation directory, under `python_support`. On the standard
Debian installation, this will be under `/usr/lib/memgraph/python_support`.

Next, we have a `procedure` function. This function will serve as the callback
for our `py_example.procedure` invocation through openCypher.

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

This procedure needs to be callable which optionally takes `ProcCtx` as the
first argument. Other arguments will be bound to values passed in the
cypher query. The full signature of this procedure needs to be annotated
with types. The return type must be `Record(field_name=type, ...)` and the
procedure must produce either a complete `Record` or `None`. As you can see,
the procedure is passed to a `read_proc` decorator which handles read-only
procedures. You can also inspect the definition of said decorator in the
`mgp.py` file.

In our case, the example procedure returns 4 fields:

- `args`: a copy of arguments passed to the procedure.
- `vertex_count`: number of vertices in the database.
- `avg_degree`: average degree of vertices.
- `props`: properties map of the Vertex or Edge object passed in `required_arg`.
   In case a Path instance is passed, procedure returns the properties map of
   the starting vertex.

This procedure can be invoked in openCypher as follows:

```opencypher
MATCH (n) WITH n LIMIT 1 CALL py_example.procedure(n, 1) YIELD * RETURN *;
```

The following lines create the properties map for a received Edge, Vertex
or Path instance:

```python
if isinstance(required_arg, (mgp.Edge, mgp.Vertex)):
    props = dict(required_arg.properties.items())
elif isinstance(required_arg, mgp.Path):
    start_vertex, = required_arg.vertices
    props = dict(start_vertex.properties.items())
```

As you can see, in the case of `mgp.Edge` and `mgp.Vertex`, we obtain an
instance of `mgp.Properties` class which holds the respective properties by
accessing the `properties` property of our `mgp.Edge` or `mgp.Vertex` instance.
Once we have access to `mgp.Properties` instance, we can simply invoke the
`items()` method which returns an `Iterable` that contains `mgp.Property`
objects. Since the type of `mgp.Property` is a simple `collections.namedtuple`
containing `name` and `value`, we can easily pass it to a `dict` constructor.

We go on to counting the number of vertices and edges in our graph:

```python
vertex_count = 0
edge_count = 0
for v in context.graph.vertices:
    vertex_count += 1
    edge_count += sum(1 for e in v.in_edges)
    edge_count += sum(1 for e in v.out_edges)
```

As you can see, we can access the `mgp.Graph` instance through `context.graph`.
This instance contains the state of our database when executing the cypher query
that called our procedure. A `mgp.Graph` instance has a property `vertices`
which allows us to access a `mgp.Vertices` object which can be iterated upon.

Similarly, each `mgp.Vertex` object has `in_edges` and `out_edges` properties
which allow us to iterate over the corresponding `mgp.Edge` objects. The rest of the
code logic from the previous snippet is self-explanatory, we simply increase the
adequate variables on each traversed vertex or edge.

After that we calculate the average degree and obtain a copy of the passed
arguments:

```python
avg_degree = 0 if vertex_count == 0 else edge_count / vertex_count
args_copy = [copy.deepcopy(required_arg), copy.deepcopy(optional_arg)]
```

Finally, we return a `mgp.Record` with all the calculated values:

```python
return mgp.Record(args=args_copy, vertex_count=vertex_count,
                  avg_degree=avg_degree, props=props)
```

In conclusion, Python API provided by Memgraph can be a very powerful, yet
simple tool when implementing query modules. Therefore, we strongly suggest
that all users thoroughly inspect the `mgp.py` source file.

{% hint style="info" %}
NOTE: You should not globally store any graph elements when writing your own
query modules with the intent to use them in a different procedure invocation.
{% endhint %}

### C API

Query modules can be implemented using the C API provided by Memgraph. Such
modules need to be compiled to a shared library so that they can be loaded
when Memgraph starts. This means that you can write the procedures in any
programming language which can work with C and can be compiled to the ELF
shared library format.

{% hint style="info" %}
WARNING: If your programming language of choice throws exceptions, these
exceptions must never leave the scope of your module! You should have a top-level 
exception handler which returns with an error value and potentially logs
the error message. Exceptions which cross the module boundary will cause all
sorts of unexpected issues.
{% endhint %}

Let's take a look at the `example.c` file.

```c
#include "mg_procedure.h"
```

On the first line, we include `mg_procedure.h`, which contains declarations of
all functions that can be used to implement a query module procedure. This file
is found in the Memgraph installation directory, under `include/memgraph`. On
the standard Debian installation, this will be under `/usr/include/memgraph`.
To compile the module, you will have to pass the appropriate flags to the
compiler. For example, using `clang`:

```plaintext
clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so
```

Next we have a `procedure` function. This function will serve as the callback
for our `example.procedure` invocation through openCypher.

```c
static void procedure(const struct mgp_list *args, const struct mgp_graph *graph,
                      struct mgp_result *result, struct mgp_memory *memory) {
  ...
}
```

If this were C++ you'd probably write the function as such:

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


The `procedure` function will receive the list of arguments (`args`) which are
passed in the query. The parameter `result` is used to fill in the resulting
records of the procedure. Parameters `graph` and `memory` are context
parameters of the procedure, and they are used in some parts of the provided C
API. For more information on what exactly is possible via C API, take a look
at the `mg_procedure.h` file, as well as the `example.c` found in
`/usr/lib/memgraph/query_modules/src`

Then comes the required `mgp_init_module` function. Its primary purpose is to
register procedures which can then be invoked through openCypher. Although the
example registers a single `procedure`, you can register multiple different
procedures in a single module. Each of these can be invoked using
`CALL <module>.<procedure> ...` syntax. The `<module-name>` will correspond to
the name of the shared library. Since we compile our example into
`example.so`, then the module is called `example`. Procedure names can be
different than their corresponding implementation callbacks because the
procedure name is defined when registering a procedure.

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
`mgp_init_module`, so you must not allocate any global resources with it. If
you really need to setup some global state, you may do so in the
`mgp_init_module` but using the standard global allocators.

Consequently, you may want to reset any global state or release global
resources in the following function.

```c
int mgp_shutdown_module() {
  // Return 0 to indicate success.
  return 0;
}
```

As previously mentioned, no exceptions should leave your module. If you are
writing the module in a language that throws them, you probably want
exception handlers in `mgp_init_module` and `mgp_shutdown_module` as well.