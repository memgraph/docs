---
id: overview
title: Transformation modules
sidebar_label: Transformation modules overview
slug: /reference-guide/streams/transformation-modules
---

In order to connect Memgraph to a data stream, it needs to know how to transform
the incoming messages in order to consume them correctly. This is done with a
transformation module.

To create a transformation module, you need to:

1. Create a [Python](./api/python-api.md) or a [shared library](./api/c-api.md)
   file (module)
2. Save the file into the Memgraph's `query-modules` directory (default:
   `/usr/lib/memgraph/query_modules`)
3. Load the file into Memgraph either on startup (automatically) or by running a
   `CALL mg.load` query

## Creating a transformation module

Memgraph supports user-defined transformations procedures written in **C** and
**Python** that act on data received from a streaming engine. These
transformation procedures are grouped into a module called **Transformation
module** which is then loaded into Memgraph on startup or later on. A
transformation module consists of a transformation, a query procedure, or both.

Currently, we support transformations for Kafka, Pulsar and Redpanda
streams.

The available API references are:

- **[C API](./api/c-api.md)**
- **[Python API](./api/python-api.md)**

Check out our how-to guides on implementing a typical transformation module if
you are using
[Kafka](/how-to-guides/streams/kafka/implement-transformation-module.md) or
[Pulsar](/how-to-guides/streams/pulsar/implement-transformation-module.md).

## Loading modules on startup

Memgraph attempts to load the modules from all `*.so` and `*.py` files it finds
in the default (`/usr/lib/memgraph/query_modules`) directory. The `*.so` modules
are written using the C API and the `*.py` modules are written using the Python
API. Each file corresponds to one module. Names of these files will be mapped to
module names. For example, `hello.so` will be mapped to the `hello` module and a
`py_hello.py` script will be mapped to the `py_hello` module.

If you want to change the directory in which Memgraph searches for
transformation modules, just change or extend the `--query-modules-directory`
flag in the main configuration file (`/etc/memgraph/memgraph.conf`) or supply it
as a command-line parameter (e.g., when using Docker).

:::caution

Please remember that if you are using Memgraph Platform image, you should pass
configuration flags within MEMGRAPH environmental variable (e.g. `docker run -e
MEMGRAPH="--bolt-port=7687" memgraph/memgraph-platform`) and if you are using
any other image you should pass them as arguments after the image name (e.g.,
`memgraph/memgraph-mage --bolt-port=7687 --query-modules-directory=path/path`).

:::

<details>
  <summary>Transfer transformation module into a Docker container</summary>
  
  If you are using Docker to run Memgraph, you will need to copy the
  transformation module file from your local directory into the Docker
  container where Memgraph can access it.

  <p> </p>

**1.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
container:

```
docker ps
```

**2.** Copy a file from your current directory to the container with the
command:

```
docker cp ./trans_module.py <CONTAINER ID>:/usr/lib/memgraph/query_modules/trans_module.py
```

The file is now inside your Docker container.

</details>

## Utility procedures for transformations

Query procedures that allow you to gain more insight modules and transformations
are written under our utility `mg` query module. For transformations, this
module offers:

| Procedure                                  | Description                          |
| ------------------------------------------ | ------------------------------------ |
| `mg.transformations() :: (name :: STRING)` | Lists all transformation procedures. |
| `mg.load(module_name :: STRING) :: ()`     | Loads or reloads the given module.   |
| `mg.load_all() :: ()`                      | Loads or reloads all modules.        |

For example, you can invoke `mg.transformations()` from mgconsole or Memgraph
Lab with the following command:

```cypher
CALL mg.transformations() YIELD *;
```

This will yield the following result:

```nocopy
+-------------------------------------------+-------------------------------------------------------+-------------+
| name                                      | path                                                  | is_editable |
+-------------------------------------------+-------------------------------------------------------+-------------+
| "batch.transform"                         | "/usr/lib/memgraph/query_modules/batch.py"            | true        |
+-------------------------------------------+-------------------------------------------------------+-------------+
```

You can see that Memgraph has already loaded the user-defined transformation of
the module `batch`.

To load a module (named e.g. `hello`) that wasn't loaded on startup (probably
because it was added to Memgraph's directory once Memgraph was already running),
you can invoke:

```cypher
CALL mg.load("hello");
```

If you wish to reload an existing module, say the `hello` module above, use the
same procedure:

```cypher
CALL mg.load("hello");
```

To reload all existing modules and load any newly added ones use:

```cypher
CALL mg.load_all();
```
