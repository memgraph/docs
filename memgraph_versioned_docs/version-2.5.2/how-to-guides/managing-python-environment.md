---
id: managing-python-environment
title: How to manage Python environment
sidebar_label: Managing Python environment
---

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/memgraph/reference-guide/query-modules/module-file-utilities)


### Managing Memgraph's Python environment

After some time, any production system requires updates for the packages it uses. For example, when developing a new query module that requires the latest `networkx` version. 

If Memgraph is already deployed somewhere with an installed `networkx` package, you would probably like to use some package manager, e.g. pip or conda, to delete the old `networkx`, and install a new `networkx` package. You definitely wouldn't want to redeploy the whole Memgraph just because of one Python package.

However, Python caches all modules, packages and the compiled bytecode, so this procedure cannot work out of the box. So after installing the new package, you need to use the utility procedure `mg.load_all()`. 

So the whole process looks like this:

Uninstall the old package:
```python
pip uninstall networkx
```
Install a new package:
```python
pip install networkx=<new_version>
```
Reload all query modules:
```cypher
CALL mg.load_all();
```

