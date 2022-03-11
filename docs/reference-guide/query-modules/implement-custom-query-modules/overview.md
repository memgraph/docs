---
id: overview
title: Implement custom query modules
sidebar_label: Implement custom query modules
---

If you need to expand the Cypher language, Memgraph provides public APIs for
writing custom query modules in Python and C. 

## Python

Python API is defined in the `mgp` module that can be found in the Memgraph
installation directory `/usr/lib/memgraph/python_support`. In essence, it is a
wrapper around the C API. If you wish to write your own query modules using the
Python API, you need to have Python version `3.5.0` or above installed.

For more information check the [Python API reference guide](python-api).<br/>
We also made [an example module](custom-query-module-example#python-api) to help you start developing your own modules. 

## C API

C API modules need to be compiled to a shared library so that they can be loaded
when Memgraph starts. This means that you can write the procedures in any
programming language which can work with C and can be compiled to the ELF shared
library format (`.so`). `mg_procedure.h` that can be found in Memgraph
installation directory `/usr/include/memgraph` contains declarations of all
functions that can be used to implement a query module procedure. 
To compile the module, you will have to pass the appropriate flags to the
compiler, for example, `clang`:

```plaintext
clang -Wall -shared -fPIC -I /usr/include/memgraph example.c -o example.so
```

For more information check the [C API reference guide](c-api).<br/>
We also made [an example module](custom-query-module-example#c-api) to help you start developing your own modules. 


