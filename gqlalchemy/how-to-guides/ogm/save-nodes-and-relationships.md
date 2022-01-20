---
id: save-nodes-and-relationships
title: How to save nodes and relationships
sidebar_label: Save nodes and relationships
---

With the help of this guide you can learn how to save nodes and relationships
you have created. Let's say you want to create node `User` and node `Language`,
whose classes are:

```python
from gqlalchemy import Memgraph, Node, Relationship, Field

memgraph = Memgraph()

class User(Node):
    name: str = Field(index=True, unique=True, db=memgraph)

class Language(Node):
    name: str = Field(unique=True, db=memgraph)
```

Then you create and save object with:

```python
user = User(name="John").save(memgraph)
language = Language(name="en").save(memgraph)
```

There is another way of creating and saving objects:

```python
user = User(name="John")
memgraph.save_node(user)

language = Language(name="en")
memgraph.save_node(language)
```

Next, let's say that John speaks English. You need to create and save
relationship `SPEAKS`. First, we have a class which maps to the relationship in
the database:

```python
class Speaks(Relationship, type="SPEAKS"):
    pass
```

This relationship doesn't have any properties. To save this relationship, you
need to first create it with appropriate start and end nodes.

```python
speaks_rel = Speaks(
    _start_node_id = user._id,
    _end_node_id = language._id
).save(memgraph)
```

Another way is again by first creating the relationship and then saving it using
method `save_relationship()`:

```python
speaks_rel = Speaks(
    _start_node_id = user._id,
    _end_node_id = language._id
)
memgraph.save_relationship(speaks_rel)
```

:::info 

Property `_id` is internal Memgraph id - an id given to each node upon
saving to the database. 

:::

Hopefully this guide has taught you how to create and save nodes and
relationships. For more detailed information check out our docs - TODO link. If
you have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).
