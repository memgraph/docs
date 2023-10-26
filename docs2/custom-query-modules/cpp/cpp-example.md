# Example of a query module written in C++

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

### Batched readable and writeable procedures

Batched readable and writeable procedures in C++ are pretty similar to batched procedures in C. The way procedures work is the same as in C API, the only difference is procedure registration.

```cpp

void BatchCSVFile(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result, mgp_memory *memory) {
  ...
}

void InitBatchCsvFile(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result, mgp_memory *memory) {
  ...
}

void CleanupBatchCsvFile(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result, mgp_memory *memory) {
  ...
}


extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  try {
    mgp::memory = memory;

    AddBatchProcedure(BatchCSVFile, InitBatchCsvFile, CleanupBatchCsvFile,
                 "read_csv", mgp::ProcedureType::Read,
                 {mgp::Parameter("file_name", mgp::Type::String)},
                 {mgp::Return("row", mgp::Type::Map)}, module, memory);
  } catch (const std::exception &e) {
    return 1;
  }
  return 0;
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

### Terminate procedure execution

Just as the execution of a Cypher query can be terminated with [`TERMINATE
TRANSACTIONS "id";`](/reference-guide/transactions.md) query,
the execution of the procedure can as well, if it takes too long to yield a
response or gets stuck in an infinite loop due to unpredicted input data.

Transaction ID is visible upon calling the SHOW TRANSACTIONS; query. 

In order to be able to terminate the procedure, it has to contain function
`graph.CheckMustAbort();` which precedes crucial parts of the code, such as
`while` and `until` loops, or similar points where the procedure might become
costly.

Consider the following example:

```cpp
#include <cstdint>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>
#include <mgp.hpp>
#include <mg_exceptions.hpp>

// Methods
constexpr char const *get = "get";
// Return object names
char const *return_field = "return";


void Test(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result, mgp_memory *memory) {
    mgp::memory = memory;
    const auto record_factory = mgp::RecordFactory(result);
    auto graph = mgp::Graph(memgraph_graph);
    int64_t id_ = 1;
    try {
        while (true) {
            graph.CheckMustAbort();
            ++id_;
        }
    } catch (const mgp::MustAbortException &e) {
        std::cout << e.what() << std::endl;
        auto new_record = record_factory.NewRecord();
        new_record.Insert(return_field, id_);
    }
}


extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
    try {
        mgp::memory = memory;
        mgp::AddProcedure(Test, get, mgp::ProcedureType::Read, {}, {mgp::Return(return_field, mgp::Type::Int)}, module, memory);
    } catch(const std::exception &e) {
        return 1;
    } 
    return 0;
}

extern "C" int mgp_shutdown_module() { return 0; }
```
