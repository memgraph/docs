---
id: module-file-utilities
title: Utility query module
sidebar_label: Utility query module
---

Built-in utility query module (`mg`) contains procedures that enable you to
manage query modules files.

## General procedures

Here is the list of procedures from the `mg` query module that can be used with
all other query module files and their signatures:

| Procedure                                                         | Description                                   |
| ----------------------------------------------------------------- | --------------------------------------------- |
| <code>mg.procedures() -> (name\|STRING, signature\|STRING)</code>            | Lists loaded procedures and their signatures. |
| <code>mg.load(module_name\|STRING) -> ()</code>                              | Loads or reloads the given module.            |
| `mg.load_all() -> ()`                                             | Loads or reloads all modules.                 |

### `mg.procedures`

Lists loaded procedures and their signatures.

Example of a Cypher query:

```cypher
CALL mg.procedures() YIELD *;
```

Example of a result:

```nocopy
+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+
| is_editable | name                | path              | signature                                                                                                             |
+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+
| ...         | ...                 | ...               | ...                                                                                                                   |
| true        | graph_analyzer.help | "/path/to/module" | graph_analyzer.help() :: (name :: STRING, value :: STRING)                                                            |
| false       | mg.load             | "builtin"         | mg.load(module_name :: STRING) :: ()                                                                                  |
| false       | mg.load_all         | "builtin"         | mg.load_all() :: ()                                                                                                   |
| false       | mg.procedures       | "builtin"         | mg.procedures() :: (name :: STRING, signature :: STRING, is_write :: BOOLEAN, path :: STRING, is_editable :: BOOLEAN) |
| ...         | ...                 | ...               | ...                                                                                                                   |
+-------------+---------------------+-------------------+-----------------------------------------------------------------------------------------------------------------------+
```

### `mg.load_all`

Loads or reloads all modules.

Example of a Cypher query:

```cypher
CALL mg.load_all();
```

If the response is `Empty set (x.x sec)` and there are no error messages, the
update was successful.

### `mg.load`

Loads or reloads the given module.

Example of a Cypher query:

```cypher
CALL mg.load("py_example");
```

If the response is `Empty set (x.x sec)` and there are no error messages, the
update was successful.

Upon loading the module, all dependent Python's submodules that are imported will be reloaded too. To support this functionality Memgraph parses module's code into Abstract Syntax Tree and then determines which modules are being imported. For example, let's say that you have a following query_modules_directory structure:
```
- query_modules/
  - python/
    - module1.py
    - module2.py
    - mage/
      - module1/
        - module1_utility.py
      - module2/
        - module2_utility.py
  - cpp/
    - module3.cpp
    - module4.cpp
```
By calling:
```cypher
CALL mg.load("module1");
```
Memgraph will reload `module1.py`, all its imported Python packages and it will conclude that there is a subdirectory `module1` which contains Python utility files for `module1.py` and it will reload them too. Note, that if `module1` directory contains some subdirectories, they will also get reloaded. By reloading, it is assumed clearing from the `sys` cache and deleting compiled code from the `__pycache__`. The repository which contains subdirectories can be organized in a different way too, so e.g. `module1/` and `module2/` folders can be placed directly in the `python/` folder.

## Procedures for `.py` query modules

Memgraph includes several built-in procedures for editing and inspecting Python
module files.

Below is a list of the procedures, their signatures, description and required
privilege.<br/> Privileges can be assigned only in the enterprise edition of
Memgraph. <br/>Click on a procedure to see an example of a Cypher query and
possible result.

| Procedure                                                                                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Required privilege |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [<code>mg.get_module_files() -> (is_editable\|STRING, path\|STRING)</code>](#mgget_module_files)                 | Returns the value of a `is_editable` flag and the absolute path of each Python query module file in all the query module directories.                                                                                                                                                                                                                                                                                                                                                                             | `MODULE_READ`      |
| [<code>mg.get_module_file(path\|STRING) -> (path\|STRING)</code>](#mgget_module_file)                            | Returns the content of a file located at the absolute path in one of the query module directories.                                                                                                                                                                                                                                                                                                                                                                                                                | `MODULE_READ`      |
| [<code>mg.create_module_file(filename\|STRING, content\|STRING) -> (path\|STRING)</code>](#mgcreate_module_file) | Creates a `filename` Python module with `content` inside the internal query module directory (`/var/lib/memgraph/internal_modules`) and returns the path to the newly created file. The flag `is_editable` should be set to true if the module is located in the internal query module directory. <br/> The `filename` can consist of multiple nested directories (e.g. `subdir1/subdir2/module.py`) which will create all the necessary subdirectories. After successful creation, all the modules are reloaded. | `MODULE_WRITE`     |
| [<code>mg.update_module_file(path\|STRING, content\|STRING)</code>](#mgupdate_module_file)                       | Updates a Python module file at an absolute `path` in one of the query module directories with `content` and reloads all the modules. You can only change the files with `is_editable` flag set to `true`.                                                                                                                                                                                                                                                                                                        | `MODULE_WRITE`     |
| [<code>mg.delete_module_file(path\|STRING)</code>](#mgdelete_module_file)                                        | Deletes a Python module file at an absolute `path` in one of the query module directories and reloads all the modules. You can only delete the files with `is_editable` flag set to `true`.                                                                                                                                                                                                                                                                                                                       | `MODULE_WRITE`     |

### `mg.get_module_files`

Returns the value of an `is_editable` flag and the absolute path of each Python
query module file in all the query module directories.

Example of a Cypher query:

```cypher
CALL mg.get_module_files() YIELD *;
```

Example of a result:

```nocopy
+-----------------------------------------------------+-----------------------------------------------------+
| is_editable                                         | path                                                |
+-----------------------------------------------------+-----------------------------------------------------+
| false                                               | "/usr/lib/memgraph/query_modules/mgp_networkx.py"   |
| false                                               | "/usr/lib/memgraph/query_modules/wcc.py"            |
| false                                               | "/usr/lib/memgraph/query_modules/graph_analyzer.py" |
| false                                               | "/usr/lib/memgraph/query_modules/py_example.py"     |
| false                                               | "/usr/lib/memgraph/query_modules/nxalg.py"          |
| true                                                | "/var/lib/memgraph/internal_modules/module1.py"     |
+-----------------------------------------------------+-----------------------------------------------------+
```

### `mg.get_module_file`

Returns the content of a file located at the absolute path in one of the query
module directories.

Example of a Cypher query:

```cypher
CALL mg.get_module_file("/usr/lib/memgraph/query_modules/py_example.py") YIELD *;
```

### `mg.create_module_file`

Creates a `filename` Python module with `content` inside the internal query
module directory (`/var/lib/memgraph/internal_modules`) and returns the path to
the newly created file. The flag `is_editable` should be true if the module is
located in the internal query module directory. The `filename` can consist of
multiple nested directories (e.g., `subdir1/subdir2/module.py`) and all the
necessary subdirectories will be created. After successful creation, all the
modules are reloaded.

Examples of a Cypher query:

1. **Without defining the absolute path:**

   ```cypher
   CALL mg.create_module_file("my_module.py", "Start of my query module.") YIELD *;
   ```

   Result:

   ```nocopy
   +---------------------------------------------------+
   | path                                              |
   +---------------------------------------------------+
   | "/var/lib/memgraph/internal_modules/my_module.py" |
   +---------------------------------------------------+
   ```

2. **With absolute path:**

   ```cypher
   CALL mg.create_module_file("my_modules/my_module.py", "Start of my query module.") YIELD *;
   ```

   Result:

   ```nocopy
   +--------------------------------------------------------------+
   | path                                                         |
   +--------------------------------------------------------------+
   | "/var/lib/memgraph/internal_modules/my_modules/my_module.py" |
   +--------------------------------------------------------------+
   ```

### `mg.update_module_file`

Updates a Python module file at an absolute `path` in one of the query module
directories with `content`. You can only change the files with `is_editable`
flag set to `true`.

Example of a Cypher query:

```cypher
CALL mg.update_module_file("/var/lib/memgraph/internal_modules/my_module.py", "Start of my query module. Another line.");
```

If the response is `Empty set (x.x sec)` and there are no error messages, the
update was successful.

### `mg.delete_module_file`

Deletes a Python module file at an absolute `path` in one of the query module
directories and reloads all the modules. You can only delete the files with
`is_editable` flag set to `true`.

Example of a Cypher query:

```cypher
CALL mg.delete_module_file("/var/lib/memgraph/internal_modules/my_module.py");
```

If the response is `Empty set (x.x sec)` and there are no error messages, the
update was successful.
