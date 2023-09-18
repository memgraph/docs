---
id: overview
title: Implement custom query modules
sidebar_label: Implement custom query modules
---

If you need to expand the Cypher language, Memgraph provides public APIs for
writing custom query modules in Python, C and C++.

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
