---
id: managing-python-environment
title: How to manage Python environment
sidebar_label: Managing Python environment
---

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/memgraph/reference-guide/query-modules/module-file-utilities)


### Managing Memgraph's Python environment

Any production system after some time requires updates for the packages it uses. With Memgraph, the most obvious use case is when developing a new query module. Let's say that you are developing a new query module for which you need the latest `networkx` version and you already have Memgraph deployed somewhere with an already installed `networkx` package installed.

What you would like to do is use some package manager, e.g. pip or conda and simply delete the old `networkx`, install a new `networkx` and everything should work automatically out of the box. You definitely wouldn't want to redeploy the whole Memgraph just because of one Python package.

However, Python caches all modules, packages and the compiled bytecode so this cannot work out of the box.

Memgraph requires one simple step to make it work and that is using the built-in command `mg.load_all()`. So the whole process could look like this:
Uninstall the old package:
```python
pip uninstall networkx
```
Install a new package:
```python
pip install networkx=<new_version>
```
Reload everything:
```cypher
CALL mg.load_all();
```

