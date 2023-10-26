[![Related - How-to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/how-to-guides/query-modules.md)

Memgraph supports extending the query language with user-written procedures in
**C**, **C++**, **Python**, and **Rust**. These procedures are grouped into
modules - **query modules** files (either `*.so` or `*.py` files).

Some query modules are built-in, and others, like those that can help you solve
complex graph issues, are available as part of the MAGE library you can add to
your Memgraph installation. The library is already included if you are using
Memgraph Platform or Memgraph MAGE Docker images to run Memgraph.

You can also implement custom query modules. Every single Memgraph installation
comes with the `example.so` and `py_example.py` query modules located in the
`/usr/lib/memgraph/query_modules` directory. They were provided as examples of
query modules for you to examine and learn from.

Each query module file corresponds to one query module, and file names are
mapped as query module names. For example, `example.so` will be mapped as
`example` module, and `py_example.py` will be mapped as `py_example` module. If
each module file has a procedure called `procedure` defined, those procedures
would be mapped in the Cypher query language as `example.procedure()` and
`py_example.procedure()` respectively.

Regardless of where they come from and who wrote them, all modules need to be
loaded into Memgraph so that they can be called while querying the database.
They are either loaded automatically when Memgraph starts or manually if they
were added while Memgraph was already running. 

You can also inspect and develop query modules in Memgraph Lab (v2.0 and newer).
Just navigate to **Query Modules**.

<details>
  <summary>Screenshot of Query Modules from Memgraph Lab</summary>
<img src={require('../../data/memgraph_lab_query_modules.png').default} className={"imgBorder"}/>
</details>

Once you start Memgraph, it will attempt to load query modules from all *.so and
*.py files from the default directories. MAGE modules are located at
`/usr/lib/memgraph/query_modules` and custom modules developed via Memgraph Lab at
`/var/lib/memgraph/internal_modules`.

Memgraph provides public APIs for writing custom query modules in Python, C and
C++.

## Python API

Python API is defined in the `mgp` module that can be found in the Memgraph
installation directory `/usr/lib/memgraph/python_support`. In essence, it is a
wrapper around the C API. If you wish to write your own query modules using the
Python API, you need to have Python version `3.5.0` or above installed.

For more information, check the [Python API reference
guide](/reference-guide/query-modules/implement-custom-query-modules/api/python-api.md).<br/>
We also made [an example
module](/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md#python-api)
to help you start developing your own modules.

You can develop query modules in Python from Memgraph Lab (v2.0 and newer). Just
navigate to **Query Modules** and click on **New Module** to start.

<img src={require('../../../data/memgraph_lab_query_modules.png').default} className={"imgBorder"}/>

Custom modules developed via Memgraph Lab are located at
`/var/lib/memgraph/internal_modules`.

:::info
If you need an additional Python library not included with Memgraph, check out
[the guide on how to install
it](/memgraph/how-to-guides/query-modules#how-to-install-external-python-libraries).
:::

### Mock Python API

The [mock Python query module API](api/mock-python-api.md) enables you to
develop and test query modules for Memgraph without having to run a Memgraph
instance by simulating its behavior. As the mock API is compatible with the
[Python API](/reference-guide/query-modules/implement-custom-query-modules/api/python-api.md),
you can add modules developed with it to Memgraph as-is, without modifying the
code.

For more information and examples, check the
[mock Python API reference guide](api/mock-python-api.md).

## C API

C API modules need to be compiled to a shared library so that they can be loaded
when Memgraph starts. This means that you can write the procedures in any
programming language that can work with C and be compiled to the ELF shared
library format (`.so`). `mg_procedure.h` that can be found in Memgraph
installation directory `/usr/include/memgraph` contains declarations of all
functions that can be used to implement a query module procedure. To compile the
module, you will have to pass the appropriate flags to the compiler, for
example, `clang`:

```plaintext
clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so
```

For more information, check the [C API reference
guide](/reference-guide/query-modules/implement-custom-query-modules/api/c-api.md).<br/>
We also made [an example
module](/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md#c-api)
to help you start developing your own modules.

## C++ API

C++ API modules, just like C API modules, need to be compiled to a shared
library so that they can be loaded when Memgraph starts. This is done much in
the same way as with C API modules.

For more information, check the [C++ API reference
guide](/reference-guide/query-modules/implement-custom-query-modules/api/cpp-api.md).<br/>
We also made [an example
module](/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example.md#cpp-api)
to help you start developing your own modules.

:::info
If you need an additional Python library not included with Memgraph, check out
[the guide on how to install
it](/memgraph/how-to-guides/query-modules#how-to-install-external-python-libraries).
:::