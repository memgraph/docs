---
id: installation
title: How to install GQLAlchemy
sidebar_label: Installation
---

There are two main ways of installing GQLAlchemy: with package managers such
as pip and Poetry, and by building it from source.

## Prerequisites

To install GQLAlchemy, you will need the following:

- **Python 3.8 - 3.10**
- GQLAlchemy is built on top of Memgraph's low-level Python client `pymgclient`, so you need to install `pymgclient` [build prerequisites](https://memgraph.github.io/pymgclient/introduction.html#build-prerequisites).

:::caution
GQLAlchemy can't be installed with Python 3.11 [(#203)](https://github.com/memgraph/gqlalchemy/issues/203) and on Windows with Python >= 3.10 [(#179)](https://github.com/memgraph/gqlalchemy/issues/179). If this is currently a blocker for you, please let us know by commenting on opened issues.
:::

## Install with pip {#pip}

Run the following command to install GQLAlchemy:

```bash
pip install gqlalchemy
```

### Optional dependencies

GQLAlchemy’s import/export capabilities for the Apache Arrow, PyTorch Geometric
and Deep Graph Library formats aren’t in the default installation. To make them
available, use one of the following commands:

```bash
pip install gqlalchemy[arrow] # Apache Arrow support
pip install gqlalchemy[ml] # PyTorch Geometric and DGL support

pip install gqlalchemy[all] # All of the above
```

## Build from source

Clone or download the [GQLAlchemy source code](https://github.com/memgraph/gqlalchemy) locally and run the following command to build it from source with Poetry:

```bash
poetry install --all-extras
```

To run the tests, make sure you have an [active Memgraph instance](/memgraph), and execute the following command:

```bash
poetry run pytest . -k "not slow"
```
