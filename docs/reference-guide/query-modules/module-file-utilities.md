---
id: module-file-utilities
title: Module file utilities
sidebar_label: Module file utilities
---

Memgraph supports multiple builtin procedures allowing you to manipulate and inspect
your Python module files.

## `mg.get_module_files`

### Signature

```cypher
mg.get_module_files() -> STRING, BOOLEAN
```

### Description

Get all the Python module files contained inside all the query module directories.
Return the path to the file in the absolute form, and the `is_editable` flag
that denotes whether the file is modifiable by Memgraph.

Required privilege: `MODULE_READ`

## `mg.get_module_file`

### Signature

```cypher
mg.get_module_file(path :: STRING) -> STRING
```

### Description

Get the content of Python module file at `path`.  
The `path` needs to be in absolute form, and contained inside one of the query module directories.

Required privilege: `MODULE_READ`

## `mg.create_module_file`

### Signature

```cypher
mg.create_module_file(filename :: STRING, content :: STRING) -> STRING
```

### Description

Create a Python module file `filename` with `content` inside Memgraph's internal
query module directory.  
Return the path to the newly created file.  
After a successful creation, all the modules are reloaded.  
The `filename` can consist of multiple nexted directories (e.g. `subdir1/subidr2/script.py`)
which will create all the necessary subdirectories.

Required privilege: `MODULE_WRITE`

## `mg.update_module_file`

### Signature

```cypher
mg.update_module_file(path :: STRING, content :: STRING)
```

### Description

Update a Python module file at `path` with `content`.  
The `path` needs to be in absolute form, contained inside one of the query module directories,  
and the `is_editable` flag should be set to
`true` (check [`mg.get_module_files`](#mgget_module_files) for more info).

Required privilege: `MODULE_WRITE`

## `mg.delete_module_file`

### Signature

```cypher
mg.delete_module_file(path :: STRING)
```

### Description

Delete a Python module file at `path`.  
The `path` needs to be in absolute form, contained inside one of the query module directories,  
and the `is_editable` flag should be set to
`true` (check [`mg.get_module_files`](#mgget_module_files) for more info).

Required privilege: `MODULE_WRITE`
