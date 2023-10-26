# Example of a query module written in C+

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