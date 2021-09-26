---
id: create-cpp-module
title: Developing a query module in C++
sidebar_label: Create a C++ module
---

### Prerequisites
- Download and install [Memgraph](https://memgraph.com/download).
- Clone the [MAGE](https://github.com/memgraph/mage) repository.

## Developing a module

In this guide, we'll create a [random
walk](https://en.wikipedia.org/wiki/Random_walk#On_graphs) algorithm.

**1.** Position yourself in the MAGE repository you cloned earlier.
   Specifically, go in the `cpp` sub-directory and create a new directory called
   `random_walk_module`:

```console
cd mage/cpp
mkdir random_walk_module
```

**2.** Create the `random_walk_module.cpp` module. Below is the code for the
   random walk algorithm:

```cpp
#include <mg_procedure.h>
#include <ctime>
#include <mg_exceptions.hpp>
#include <mg_utils.hpp>
#include <random>
#include <vector>

namespace {

constexpr char const *kProcedureGet = "get";
constexpr char const *kFieldPath = "path";

constexpr char const *kArgumentStart = "start";
constexpr char const *kArgumentLength = "length";

/// Memgraph query module implementation of a random walk algorithm.
/// Random walk is an algorithm that provides random paths in a graph.
///
/// @param args Memgraph module arguments
/// @param graph Memgraph graph instance
/// @param result Memgraph result storage
/// @param memory Memgraph memory storage
void Generate(const mgp_list *args, const mgp_graph *graph, mgp_result *result, mgp_memory *memory) {
  try {
    auto start = mgp_value_get_vertex(mgp_list_at(args, 0));
    auto length = mgp_value_get_int(mgp_list_at(args, 1));

    auto path = mgp_path_make_with_start(start, memory);
    auto vertex = start;
    srand(time(NULL));

    for (int i = 0; i < length; i++) {
      auto iter = mgp_vertex_iter_out_edges(vertex, memory);
      if (!iter) {
        throw mg_exception::NotEnoughMemoryException();
      }
      const mgp_edge *edge = mgp_edges_iterator_get(iter);
      std::vector<const mgp_edge *> edges_vector;
      while (edge) {
        edges_vector.push_back(mgp_edge_copy(edge, memory));
        edge = mgp_edges_iterator_next(iter);
      }
      int size = edges_vector.size();
      if (size == 0) {
        break;
      }
      const mgp_edge *random_edge = edges_vector[rand() % edges_vector.size()];
      mgp_path_expand(path, random_edge);
      vertex = mgp_edge_get_to(random_edge);
      mgp_edges_iterator_destroy(iter);
    }
    mgp_result_record *record = mgp_result_new_record(result);
    if (record == nullptr) {
      throw mg_exception::NotEnoughMemoryException();
    }
    mg_utility::InsertPathValueResult(record, kFieldPath, path, memory);
  } catch (const std::exception &e) {
    // We must not let any exceptions out of our module.
    mgp_result_set_error_msg(result, e.what());
    return;
  }
}
}  // namespace

// Each module needs to define mgp_init_module function.
// Here you can register multiple procedures your module supports.
extern "C" int mgp_init_module(struct mgp_module *module, struct mgp_memory *memory) {
  struct mgp_proc *random_walk_proc = mgp_module_add_read_procedure(module, kProcedureGet, Generate);
  if (!random_walk_proc) return 1;

  // Query module arguments
  if (!mgp_proc_add_arg(random_walk_proc, kArgumentStart, mgp_type_node())) return 1;
  if (!mgp_proc_add_arg(random_walk_proc, kArgumentLength, mgp_type_int())) return 1;

  // Query module output record
  if (!mgp_proc_add_result(random_walk_proc, kFieldPath, mgp_type_path())) return 1;

  return 0;
}

extern "C" int mgp_shutdown_module() { return 0; }
```

**3.** Create a file called `CMakeLists.txt` and add the following code to register
   our newly created query module:

```plaintext
set(random_walk_module_src
    random_walk_module.cpp)

add_query_module(random_walk 1 ${random_walk_module_src})

# Link external libraries
target_link_libraries(random_walk PRIVATE mg_utility)
```

## Running

**1.** Run the following command in the MAGE root directory to build the
modules:

```console
python3 build
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="operating-systems"
  defaultValue="linux"
  values={[
    {label: 'Docker', value: 'docker'},
    {label: 'WSL', value: 'wsl'},
    {label: 'Debian/Ubuntu', value: 'linux'},
  ]}>
  <TabItem value="docker">

**2.** Now, you can start Memgraph and copy the contents of the `dist` directory
   to the Memgraph query modules directory (which is by default
   `/usr/lib/memgraph/query_modules`):

```console
docker run --rm -d --name memgraph -p 7687:7687 memgraph/memgraph
docker cp dist/* memgraph:/usr/lib/memgraph/query_modules/
```

A more advanced approach is to use [docker
volumes](https://docs.docker.com/storage/volumes/). That will allow you to have
query modules synchronized between your mage repository and your docker
container.

  </TabItem>
  <TabItem value="wsl">

**2.** Now, you can start Memgraph and copy the contents of the `dist` directory
   to the Memgraph query modules directory (which is by default
   `/usr/lib/memgraph/query_modules`):

```console
sudo runuser -l memgraph -c '/usr/lib/memgraph/memgraph'
cp ./dist/* /usr/lib/memgraph/query_modules/
```

  </TabItem>
  <TabItem value="linux">

**2.** Now, you can start Memgraph and copy the contents of the `dist` directory
   to the Memgraph query modules directory (which is by default
   `/usr/lib/memgraph/query_modules`):

```console
sudo systemctl start memgraph
cp ./dist/* /usr/lib/memgraph/query_modules/
```

  </TabItem>
</Tabs>

**3.** Then, use a Memgraph client like [Memgraph
   Lab](https://memgraph.com/product/lab) or
   [mgconsole](https://memgraph.com/docs/memgraph/connect-to-memgraph/methods/mgconsole)
   to load the newly added function:

```
CALL mg.load('random_walk')
```

**4.** Lastly, run a query and test your module:

```cypher
MERGE (start:Node {id: 0})-[:RELATION]->(mid:Node {id: 1})-[:RELATION]->(end:Node {id: 2})
CALL random_walk.get(start, 2) YIELD path
RETURN path
```

## Testing

Test decoupled parts of your code that don't depend on Memgraph like you would
in any other setting. E2e (end to end) tests, on the other hand, depend on
internal Memgraph data structures, like nodes and edges. After running Memgraph,
we need to prepare the testing environment on the host machine. Position
yourself in the mage directory you cloned from GitHub. The expected folder
structure for each module is the following:

```
mage
└── e2e
    └── random_walk_test
        └── test_base
            ├── input.cyp
            └── test.yml
```

`input.cyp` represents a Cypher script for entering the data into the database.
To simplify this tutorial, we'll leave the database empty. `test.yml` specifies
which test query should be run by the database, and what should be the result or
exception. Create the files following the aforementioned directory structure.

### input.cyp

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 6}) MERGE (b:Node {id: 7}) CREATE (a)-[:RELATION]->(b);
```

### test.yml

```yml
query: >
    MATCH (start {id: 0})
    CALL random_walk.get(start, 2) YIELD path
    WITH nodes(path) as nodes
    UNWIND nodes as node
    RETURN node.id as node_id;

output:
    - node_id: 0
    - node_id: 1
    - node_id: 2
```

Lastly, run the e2e tests with python:

```
python test_e2e
```
