---
id: installation
title: How to install GQLAlchemy
sidebar_label: Installation
---

There are two main ways of installing GQLAlchemy, through package managers such
as pip and Poetry, and by building it from source.

## Prerequisites

To install GQLAlchemy, you will need the following:
- **Python 3.7** or **higher**.
- **CMake** - You can download CMake from their [official
  website](https://cmake.org/download/).

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
