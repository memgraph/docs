## Query Modules

Memgraph supports extending the query language with procedures written by a
user. These procedures are compiled into modules, which can then be loaded on
startup.

### Loading Query Modules

If you wish to use procedures from query modules, you have to tell Memgraph
where to find them. This is done when running Memgraph using the
`--query-modules-directory` command line flag.

The Memgraph installation comes with the `example` procedure, and we will use
it to explain how query modules work. You should run Memgraph with
`--query-modules-directory` pointing to Memgraph's installation
`lib/memgraph/quey_modules` directory. Assuming the standard installation on
Debian, you would run Memgraph with the following command.

```bash
/usr/lib/memgraph/memgraph --query-modules-directory=/usr/lib/memgraph/query_modules
```

When using Docker, the equivalent would be the following.

```bash
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph --query-modules-directory=/usr/lib/memgraph/query_modules
```

Memgraph will now load all of the shared libraries it finds in the given
directory. Names of shared libraries (modules) will be mapped to procedure
names. So in our case, we have an `example.so` which will be mapped to
`example` procedure in the query language. In the future, a single shared
library will be able to register multiple procedures with different names.
That feature would make them full fledged modules like in other programming
languages.

### Syntax for Calling Procedures

OpenCypher has a special syntax for calling procedures in loaded query
modules. For example:

```opencypher
CALL example.procedure("string-argument") YIELD args, result;
```

Each procedure returns zero or more records, where each record contains named
fields. The `YIELD` part is used to select fields we are interested in. If we
are not interested in any fields, the `YIELD` part can be omitted. The
procedure will still run in such a case, but the record fields will not be
stored in variables. In the above example, we assume that `example` will
produce a record with 2 fields, `args` and `result`. Trying to `YIELD` fields
which are not part of the produced record will result in an error.

Procedures may be called standalone as in the above example, or as a part of a
larger query. This is useful if we want the procedure to work on data the
query is producing. For example:

```
MATCH (node) CALL example.procedure(node) YIELD result RETURN *;
```

Unfortunately, when we use `CALL` in a larger query, we have to explicitly
`RETURN` from the query to get the results. Naturally, the `RETURN` is not
needed if we perform updates after `CALL`. This follows the openCypher
convention that read-only queries need to end with a `RETURN`, while queries
which update something don't need to `RETURN` anything.

If a procedure returns a record with a field name that may clash with some
variable we already have in a query, that field name can be aliased into some
other name. For example:

```opencypher
MATCH (node) CALL example.procedure(42) YIELD node AS result RETURN *;
```

### Implementing Query Modules

All of the above examples invoke the `procedure` from `example` module. We
will now examine how this procedure is implemented. Both the source and the
compiled module can be found in the above mentioned
`lib/memgraph/query_modules` directory where Memgraph is installed.

Query modules are implemented using the C API provided by Memgraph. Written
modules need to be compiled to a shared library, so that they can be loaded
when Memgraph starts. This means that you can write the procedures in any
programming language which can work with C and can be compiled to the ELF
shared library format.

WARNING: If your programming language of choice throws exceptions, these
exceptions must never leave the scope of your module! You should have a top
level exception handler which returns with an error value and potentially logs
the error message. Exceptions which cross the module boundary will cause all
sorts of unexpected issues.

Let's take a look at the `example.c` file.

```c
#include "mg_procedure.h"
```

On the first line, we include `mg_procedure.h`, which contains declarations of
all functions that can be used to implement a query module procedure. This
file is found in the Memgraph installation directory, under
`include/memgraph`. On the standard Debian installation, this will be under
`/usr/include/memgraph`. To compile the module, you will have to pass the appropriate
flags to the compiler. For example, using `clang`:

```bash
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
passed in the query. Parameter `result` is used to fill in the resulting
records of the procedure. Parameters `graph` and `memory` are context
parameters of the procedure, and they are used in some parts of the provided C
API. For more information on what exactly is possible via C API, take a look
at the `mg_procedure.h` file, as well as the `example.c` found in
`lib/memgraph/query_modules`

Then comes the required `mgp_init_module` function. It's primary purpose is to
register procedures which can then be invoked through openCypher. Although the
example registers a single `procedure`, you can register multiple different
procedures in a single module. Each of these can be invoked using
`CALL <module>.<procedure> ...` syntax. The `<module-name>` will correspond to
the name of the shared library. Since we compile our example into
`example.so`, then the module is called `example`. Procedure names can be
different than their corresponding implementation callbacks, because the
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
resource in the following function.

```c
int mgp_shutdown_module() {
  // Return 0 to indicate success.
  return 0;
}
```

As previously mentioned, no exceptions should leave your module. If you are
writing the module in a language which throws them, you probably want
exception handlers in `mgp_init_module` and `mgp_shutdown_module` as well.
