---
id: installation
title: How to install GQLAlchemy
sidebar_label: Installation
---

There are two main ways of installing GQLAlchemy, through package managers such
as pip and Poetry, and by building it from source.

## Prerequisites

To install GQLAlchemy, you will need the following:
- **Python 3.7 - 3.10**
- **CMake** - You can download CMake from their [official
  website](https://cmake.org/download/).

:::caution
GQLAlchemy can't be installed with Python 3.11 [(#203)](https://github.com/memgraph/gqlalchemy/issues/203) and on Windows with Python >= 3.10 [(#179)](https://github.com/memgraph/gqlalchemy/issues/179). If this is currently a blocker for you, please let us know by commenting on opened issues.
:::

## Install with Pip {#pip}

To install GQLAlchemy with pip, simply run the following command:

```
pip install gqlalchemy
```

## Building from source {#source}

The project uses Poetry to build GQLAlchemy. To build and run tests, execute the
following commands: 

```
poetry install
```

Before running tests, make sure you have an active Memgraph instance, then you
can run: 

```
poetry run pytest . -k "not slow"
```
