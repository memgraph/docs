---
id: overview
title: Transformation modules
sidebar_label: Transformation modules overview
slug: /reference-guide/streams/transformation-modules
---

In order to connect Memgraph to a data stream, it needs to know how to transform
the incoming messages in order to consume them correctly. This is done with a
transformation module.

[![Related -
Tutorial](https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge)](/tutorials/graph-stream-processing-with-kafka.md#create-a-transformation-module)

To create a transformation module, you need to:

1. Create a [Python](./api/python-api.md) or a [shared library](./api/c-api.md)
   file (module).
2. Save the file into the Memgraph's `query_modules` or `internal_modules` directory (default:
   `/usr/lib/memgraph/query_modules` and `/var/lib/memgraph/internal_modules/`).
3. Load the file into Memgraph either on startup (automatically) or by running a
   `CALL mg.load_all();` query.

If you are using Memgraph Lab you can [create transformation module within the
application](#creating-transformation-modules-within-memgraph-lab). 

## Creating a transformation module

Memgraph supports user-defined transformations procedures written in **Python**
and **C**  that act on data received from a streaming engine. These
transformation procedures are grouped into a module called **Transformation
module**, which is then loaded into Memgraph on startup or later on. A
transformation module consists of a transformation, a query procedure, or both.

Currently, we support transformations for Kafka, Pulsar and Redpanda
streams.

The available API references are:

- **[C API](./api/c-api.md)**
- **[Python API](./api/python-api.md)**

For examples of transformation modules check out [the tutorial on implementing a
Python transformation
module](/tutorials/graph-stream-processing-with-kafka.md#2-create-a-transformation-module),
[Python transformation
examples](/reference-guide/streams/transformation-modules/api/python-api.md#transformation-examples-of-different-format-messages)
of different format messages or [an example of a transformation module written
in C](./api/c-api.md#transformation-module-example). 

## Loading modules

Modules can be loaded on startup or when the instance is already running.

### Loading on startup

Memgraph attempts to load the modules from all `*.so` and `*.py` files it finds
in the default (`/usr/lib/memgraph/query_modules` and
`/var/lib/memgraph/internal_modules/`) directories. The `*.so` modules
are written using the C API and the `*.py` modules are written using the Python
API. Each file corresponds to one module. The names of these files will be mapped to
module names. For example, `hello.so` will be mapped to the `hello` module and a
`py_hello.py` script will be mapped to the `py_hello` module.

If you want to change the directory in which Memgraph searches for
transformation modules, change or extend the `--query-modules-directory`
flag in the main configuration file (`/etc/memgraph/memgraph.conf`) or supply it
as a command-line parameter (e.g., when using Docker).

:::caution

Please remember that if you are using Memgraph Platform image, you should pass
configuration flags within MEMGRAPH environment variable (e.g. `docker run -p
7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE
--query-modules-directory=path/path" memgraph/memgraph-platform`) and if you
are using any other image you should pass them as arguments after the image name
(e.g., `... memgraph/memgraph-mage --log-level=TRACE
--query-modules-directory=path/path`).

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
docker cp ./file_name.py <CONTAINER ID>:/usr/lib/memgraph/query_modules/file_name.py
```

The file is now inside your Docker container.

</details>

### Loading while the instance is already running

To load a specific transformation module from a `*.so` and `*.py` files that
 were added to the default directories (`/usr/lib/memgraph/query_modules` and
`/var/lib/memgraph/internal_modules/`) while the instance was already running, use:

```
CALL mg.load(module_name);
```

To load all transformation modules, use:

```
CALL mg.load_all();
```

## Creating transformation modules within Memgraph Lab

If you are using Memgraph Lab to connect to the database instance, you can
create the transformation module within the application:

1. Go to **Query Modules** and click on **+ New Module**.
2. Give the transformation module a name and **Create** it.
3. Write the transformation procedures and click **Save & Close**.

You will see the signature and overview of the transformation procedure that you
can now use while [creating a new
stream](/import-data/data-streams/manage-streams-lab.md). 

## Utility procedures for transformations

Query procedures that allow you to gain more insight into modules and
transformations are written under our utility `mg` query module. For
transformations, this module offers:

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

To reload all existing modules and load any newly added ones, use:

```cypher
CALL mg.load_all();
```
