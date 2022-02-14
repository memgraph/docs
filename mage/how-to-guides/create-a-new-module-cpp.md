---
id: create-a-new-module-cpp
title: How to create a query module in C++
sidebar_label: Create a C++ query module
---

Query modules can be implemented using the [C
API](/memgraph/reference-guide/query-modules/api/c-api)
provided by Memgraph. In this tutorial, we will learn how to develop a query
module in C++ on the example of the **random walk algorithm**.

:::info

If you wish to write your own query modules using the C API, you can write their
procedures in any programming language that can work with C and can be compiled
to the ELF shared library format. The latter requirement is there so that they
can be loaded together when Memgraph starts.

:::

## Prerequisites

There are three options for installing and working with Memgraph MAGE:

1.  **Pulling the `memgraph/memgraph-mage` image**: check the `Docker Hub` 
    [installation guide](/installation/docker-hub.md).
2.  **Building a Docker image from the MAGE repository**: check the `Docker
    build` [installation guide](/installation/docker-build.md).
3.  **Building MAGE from source**: check the `Build from source on Linux` 
    [installation guide](/installation/source.md).

## Developing a module

:::note

These instructions are the same for every MAGE installation option: _Docker
Hub_, _Docker build_ and _Build from source on Linux_.

:::

Position yourself in the **MAGE repository** you cloned earlier. Once you are
there, enter the `cpp` subdirectory and create a new directory called
`random_walk_module` with the `random_walk_module.cpp` file inside it.

```plaintext
cpp
└── random_walk_module
    └── random_walk_module.cpp
```

To make sure the module is linked with the rest of MAGE’s code, we need to add a 
`CMakeLists.txt` script in the new directory and register our module in the 
`cpp/CMakelists.txt` script as well. Refer to the existing scripts in MAGE’s 
[query modules](https://github.com/memgraph/mage/tree/main/cpp).

Our `random_walk` module contains a single procedure `get` which implements the
algorithm. The procedure takes two input parameters: the starting node and the
number of steps (10 by default), and it returns the generated random walk in the
form of a list of `step | node` entries, one for each step.
All in all, we can define its signature as `get(start: Node, steps: int = 10)
-> [step: int | node: Node]`.

Let’s take a look at the structure of our query module.

```cpp
#include <mg_utils.hpp>

void RandomWalk(mgp_list *args, mgp_graph *memgraph_graph,
                     mgp_result *result, mgp_memory *memory);

extern "C" int mgp_init_module(struct mgp_module *module,
                               struct mgp_memory *memory);

extern "C" int mgp_shutdown_module() { return 0; }

```

In the first line, we include `mg_utils.hpp`. This header contains declarations
of the public C API provided by Memgraph, which we need to connect the algorithm
to Memgraph and work with the data stored within.

Next, we are going to implement the random walk algorithm’s logic in the
`RandomWalk` function, which will be the callback for the invocations of our
openCypher procedure. Callback functions such as this one all need to have the
same signature, but they can be arbitrarily named (e.g. in query modules
containing multiple callback functions).

Query modules using the C API must have the `mgp_init_module` &
`mgp_shutdown_module` functions. The `mgp_init_module` function’s main purpose
is to register procedures so that they can be called from openCypher, and with
`mgp_shutdown_module` you may reset any global states or release global
resources.

:::warning

WARNING: Exceptions, if thrown, must never leave the scope of your module! You
should have a top-level exception handler that returns an error value and
potentially logs the error message as well. Exceptions crossing the module
boundary may cause all sorts of unexpected issues.

:::

That said, let’s now take a closer look at `RandomWalk` and `mgp_init_module`.

```cpp

void RandomWalk(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result,
                mgp_memory *memory) {
  try {
    const auto start = mgp::value_get_vertex(mgp::list_at(args, 0));
    const auto n_steps = mgp::value_get_int(mgp::list_at(args, 1));

    srand(time(NULL));

    const auto start_id = mgp::vertex_get_id(start).as_int;
    const auto graph = mg_utility::GetGraphView(
        memgraph_graph, result, memory, mg_graph::GraphType::kUndirectedGraph);

    int step = 0;
    auto current_node = graph->GetNode(start_id);
    InsertStepRecord(memgraph_graph, result, memory, step++, current_node.id);

    while (step <= n_steps) {
      const auto neighbors = graph->Neighbours(current_node.id);
      if (neighbors.empty()) break;

      const auto next_node = neighbors[rand() % neighbors.size()];
      current_node = graph->GetNode(next_node.node_id);
      // record the output
      InsertStepRecord(memgraph_graph, result, memory, step++, current_node.id);
    }
  } catch (const std::exception &e) {
    mgp::result_set_error_msg(result, e.what());
    return;
  }
}
```

Upon being called, `RandomWalk` receives the list of arguments (`args`) passed
in the query. The parameter `result` is used for recording the results of the
procedure, and its context is provided by `graph` and `memory`.

With the C API, we next retrieve the argument values from `args` and access the
graph in order to be able to implement the algorithm. As for the output, you
might’ve noted that the `RandomWalk` function does not return anything by itself.
Instead, remember that the parameter `result` serves to record the output. We
delegated the logic for this task to the `InsertStepRecord` function:

```cpp
void InsertStepRecord(mgp_graph *graph, mgp_result *result, mgp_memory *memory,
                      const int step, const int node_id) {
  auto *record = mgp::result_new_record(result);

  mg_utility::InsertIntValueResult(record, "step", step, memory);
  mg_utility::InsertNodeValueResult(graph, record, "node", node_id, memory);
}
```

:::tip

Analogous methods for other supported data types are outlined in the C API
reference.

:::

The `mgp_init_module` function has as its main duty the registration of
procedure(s), which can then be invoked in openCypher. With the C API, we add our
procedure and its inputs and outputs.

```cpp
extern "C" int mgp_init_module(struct mgp_module *module,
                               struct mgp_memory *memory) {
  {
    try {
      auto *rw_proc = mgp::module_add_read_procedure(module, "get", RandomWalk);

      // optional parameters require a default value
      auto default_steps = mgp::value_make_int(10, memory);

      mgp::proc_add_arg(rw_proc, "start", mgp::type_node());
      mgp::proc_add_opt_arg(rw_proc, "steps", mgp::type_int(), default_steps);

      mgp::proc_add_result(rw_proc, "step", mgp::type_int());
      mgp::proc_add_result(rw_proc, "node", mgp::type_node());

      mgp_value_destroy(default_steps);
    } catch (const std::exception &e) {
      return 1;
    }
  }
  return 0;
}
```

Although this example registers a single procedure `get`, you can have multiple
different procedures in one module, each of which can be invoked using the
`CALL <module>.<procedure> ...` syntax (`<module>` being the name of the shared
library). Since we compile our example to `random_walk.so`, the module is called
`random_walk`.

:::tip

As the procedure name is defined upon registration, it can differ from its 
respective callback.

:::

:::info

For more information on the signature specification API, consult the
documentation of the functions prefixed with `proc_` in the `mgp.hpp` file.

:::

:::note

As the `memory` argument is only alive throughout the execution of
`mgp_init_module`, do not allocate any global resources with it. If you still do
need to set up a global state, you may do so in the `mgp_init_module` using the
standard global allocators.

:::

Finally, you may want to reset any global state or release global resources,
which is done in the following function:

```cpp
extern "C" int mgp_shutdown_module() {
   return 0;
}
```

As mentioned before, no exceptions should leave your module. As done in this
example, exception handlers are in `mgp_init_module` and the callback function.
Depending on your module’s needs, you might want one in `mgp_shutdown_module` as
well.

## Importing, querying and testing a module

Now in order to import, query and test a module, check out the [following
page](/mage/how-to-guides/run-a-query-module).

Feel free to create an issue or open a pull request on our [GitHub
repo](https://github.com/memgraph/mage) to speed up the development.<br/>
Also, don’t forget to throw us a star on GitHub. :star:
