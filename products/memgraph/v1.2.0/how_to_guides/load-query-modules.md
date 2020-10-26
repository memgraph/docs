## Load Query Modules?

Memgraph supports extending the query language with user-written procedures.
These procedures are grouped into modules, which can then be loaded on startup.

### Loading Query Modules on Startup

The Memgraph installation comes with the `example.so` and `py_example.py` query
modules which are located in `/usr/lib/memgraph/query_modules` directory.
Assuming the standard installation on Debian, you would run Memgraph with the
following command:

```plaintext
systemctl start memgraph
```

When using Docker, the equivalent would be the following:

```plaintext
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph
```

Memgraph will now attempt to load the query modules from all `*.so` and `*.py`
files it finds in the default (`/usr/lib/memgraph/query_modules`) directory.
The `*.so` modules are written using the C API and the `*.py` modules are
written using the Python API. Each file corresponds to one query module. Names
of these files will be mapped to query module names.  So in our case, we have
an `example.so` which will be mapped to `example` module and a `py_example.py`
which will be mapped to `py_example` module in the query language.

Each query module can define multiple procedures. Both of our examples define
a single procedure creatively named `procedure`.

If you want to change the directory in which Memgraph searches for query
modules, just change the `--query-modules-directory` flag in the main
configuration file (`/etc/memgraph/memgraph.conf`) or supply it as
a command-line parameter (e.g. when using Docker).

### Utility Query Module

Query procedures that allow the users to gain more insight into other query
modules and their procedures are written under our utility `mg` query module.
This module offers three procedures with the following signatures:

* `mg.procedures() :: (name :: STRING, signature :: STRING)`: lists loaded
  procedures and their signatures
* `mg.load(module_name :: STRING) :: ()`: loads or reloads the given module
* `mg.load_all() :: ()`: loads or reloads all modules

For example, invoking `mg.procedures()` from openCypher like so:

```opencypher
CALL mg.procedures() YIELD *;
```

might yield the following result:

```plaintext
+---------------------+-------------------------------------------------------------------+
| name                | signature                                                         |
+---------------------+-------------------------------------------------------------------+
| ...                 | ...                                                               |
| graph_analyzer.help | graph_analyzer.help() :: (name :: STRING, value :: STRING)        |
| mg.load             | mg.load(module_name :: STRING) :: ()                              |
| mg.load_all         | mg.load_all() :: ()                                               |
| mg.procedures       | mg.procedures() :: (name :: STRING, signature :: STRING)          |
| ...                 | ...                                                               |
+---------------------+-------------------------------------------------------------------+
```

In this case, we can see that Memgraph has successfully loaded all the procedures implemented 
in query modules including the utility query procedures.

To load a module (named e.g. `hello`) that wasn't loaded on startup (perhaps
because it was added to Memgraph's query modules directory afterwards), we
can simply invoke:

```opencypher
CALL mg.load("hello");
```

If we wish to reload an existing module, say the `graph_analyzer` module above, we
again use the same procedure:

```opencypher
CALL mg.load("graph_analyzer");
```

Lastly, if we wish to reload all existing modules and load any newly added ones
we can use:

```opencypher
CALL mg.load_all();
```