---
id: create-a-new-module-cpp
title: How to create a query module in C++
sidebar_label: Create a C++ query module
---

Query modules can be implemented using the [C++
API](/memgraph/reference-guide/query-modules/api/cpp-api)
provided by Memgraph with automatic memory management.
In this tutorial, we will learn how to develop a query
module in C++ on the example of the **random walk algorithm**.

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

:::info

To make sure the module is linked with the rest of MAGE’s code, we need to add a 
`CMakeLists.txt` script in the new directory and register our module in the 
`cpp/CMakelists.txt` script as well. Refer to the existing scripts in MAGE’s 
[query modules](https://github.com/memgraph/mage/tree/main/cpp).

:::

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
of the public C++ API provided by Memgraph, which we need to connect the algorithm
to Memgraph and work with the data stored within.

Next, we are going to implement the random walk algorithm’s logic in the
`RandomWalk` function, which will be the callback for the invocations of our
openCypher procedure. Callback functions such as this one all need to have the
same signature, but they can be arbitrarily named (e.g. in query modules
containing multiple callback functions).

Query modules using the C++ API must have the `mgp_init_module` &
`mgp_shutdown_module` functions. The `mgp_init_module` function’s main purpose
is to register procedures so that they can be called from Cypher query language, and with
`mgp_shutdown_module` you may reset any global states or release global
resources.

:::warning

WARNING: Exceptions, if thrown, must never leave the scope of your module! You
should have a top-level exception handler that returns an error value and
potentially logs the error message as well. Exceptions crossing the module
boundary may cause all sorts of unexpected issues.

:::


### Main algorithm

The main implementation of the `RandomWalk` algorithm is implemented in the code snippet below.

```cpp
const char *kReturnStep = "step";
const char *kReturnNode = "node";

void RandomWalk(mgp_list *args, mgp_graph *memgraph_graph, mgp_result *result, mgp_memory *memory) {
  mgp::memory = memory;

  const auto arguments = mgp::List(args);
  const auto record_factory = mgp::RecordFactory(result);

  const auto start = arguments[0].ValueNode();
  const auto n_steps = arguments[1].ValueInt();

  srand(time(NULL));

  auto current_nodes = mgp::List();
  current_nodes.AppendExtend(mgp::Value(start));

  std::int64_t step = 0;
  while (step <= n_steps) {
    auto current_node = current_nodes[current_nodes.Size() - 1].ValueNode();

    auto neighbours = mgp::List();
    for (const auto relationship : current_node.OutRelationships()) {
      neighbours.AppendExtend(mgp::Value(relationship));
    }

    if (neighbours.Size() == 0) {
      break;
    }

    const auto next_node = neighbours[rand() % neighbours.Size()].ValueRelationship().To();

    current_nodes.AppendExtend(mgp::Value(next_node));
    step++;
  }

  for (std::int64_t i = 0; i < current_nodes.Size(); i++) {
    auto record = record_factory.NewRecord();
    record.Insert(kReturnStep, i);
    record.Insert(kReturnNode, current_nodes[i].ValueNode());
  }
}
```

Upon being called, `RandomWalk` receives the list of arguments (`args`) passed
in the query. The parameter `result` is used for recording the results of the
procedure, and its context is provided by `graph` and `memory`.

With the C++ API, we next retrieve the argument values from `args` by putting
them into a list, so we can use the indexing (`[]`) operator. In the code above,
the retrieving of arguments is done in these lines

```cpp
  const auto start = arguments[0].ValueNode();
  const auto n_steps = arguments[1].ValueInt();
```

The arguments are raw values at the time of their fetching from the list, so types
are assigned to them with `ValueNode()` and `ValueInt()` for extra operability and
expressiveness within the algorithm.

For managing results during the execution of the algorithm,
an instance of `RecordFactory` is used. Insertion of results into the record factory is done like this:

```cpp
    auto record = record_factory.NewRecord();
    record.Insert(kReturnStep, i);
    record.Insert(kReturnNode, current_nodes[i].ValueNode());
```

In this code snippet, the result consists of an integer and the corresponding next node
of the random walk algorithm. The types of the results are not arbitrary, as they are
registered in the initialization module, further below.

:::tip

Analogous methods for other supported data types are outlined in the
[C++ API reference](/memgraph/reference-guide/query-modules/api/cpp-api).

:::

### Initialization of the module

The `mgp_init_module` function has as its main duty the registration of
procedure(s), which can then be invoked in Cypher query language. With the C++ API, we add our
procedure and its inputs and outputs.

```cpp
const char *kProcedureGet = "get";
const char *kParameterStart = "start";
const char *kParameterSteps = "steps";
const char *kReturnStep = "step";
const char *kReturnNode = "node";

extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  mgp::memory = memory;

  std::int64_t default_steps = 10;
  try {
    mgp::AddProcedure(RandomWalk, 
                      kProcedureGet, 
                      mgp::ProcedureType::Read,
                      {
                        mgp::Parameter(kParameterStart, mgp::Type::Node),
                        mgp::Parameter(kParameterSteps, mgp::Type::Int, default_steps)
                      },
                      {
                        mgp::Return(kReturnStep, mgp::Type::Int),
                        mgp::Return(kReturnNode, mgp::Type::Node)
                      }, 
                      module,
                      memory);
  } catch (const std::exception &e) {
    return 1;
  }
  return 0;
}
```

We add the procedure to the module by specifying:
- **function callback** used for executing the logic of the procedure (`RandomWalk`)
- **name of the procedure** used in Cypher Query Language (`kProcedureGet`)
- **type of the procedure**
  - `mgp::Procedure::Read` for read-only procedures
  - `mgp::Procedure::Write` for write procedures
- **vector of input parameters** wrapped in `mgp::Parameter` object with name (string) and type (`mgp::Type`)
- **vector of output results** wrapped in `mgp::Return` object with name (string) and type (`mgp::Type`)
- passed `module` object
- passed `memory` object

Although this example registers a single procedure `get`, you can have multiple
different procedures in one module, each of which can be invoked using the
`CALL <module>.<procedure> ...` syntax (`<module>` being the name of the shared
library). Since we compile our example to `random_walk.so`, the module is called
`random_walk`.

:::tip

As the procedure name is defined upon registration, it can differ from its 
respective callback.

:::

:::note

As the `memory` argument is only alive throughout the execution of
`mgp_init_module`, do not allocate any global resources with it. If you still do
need to set up a global state, you may do so in the `mgp_init_module` using the
standard global allocators.

:::

### Shutdown of the module

Finally, you may want to reset any global state or release global resources,
which is done in the following function:

```cpp
extern "C" int mgp_shutdown_module() {
   return 0;
}
```

### Terminate procedure execution

Just as the execution of a Cypher query can be terminated with [`TERMINATE
TRANSACTIONS "id";`](/memgraph/reference-guide/transactions) query, the execution of the procedure can as well, if it takes
too long to yield a response or gets stuck in an infinite loop due to
unpredicted input data.

Transaction ID is visible upon calling the `SHOW TRANSACTIONS;` query. 

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
