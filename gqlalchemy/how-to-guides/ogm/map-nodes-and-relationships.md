---
id: map-nodes-and-relationships
title: How to map nodes and relationships
sidebar_label: Map nodes and relationships
---

This guide will teach you how to map Python classes to nodes and relationships in a graph database. The prerequisite is the running Memgraph instance. First, you have to import `Memgraph`, `Node`, `Relationship` and `Field` from the `gqlalchemy`:

```python
from gqlalchemy import Memgraph, Node, Relationship, Field
```

After that, you instantiate Memgraph and create a class representing your nodes and relationships. You are creating `User` and `Streamer` node, where every `Streamer` is also a `User`, but not every `User` is a `Streamer`. 

```python
memgraph = Memgraph() 

class User(Node):
    name: str = Field(index=True, unique=True, db=memgraph)

class Streamer(User):
    name: str = Field(index=True, unique=True, db=memgraph, label="User")
    id: str = Field(index=True, unique=True, db=memgraph)
    url: str = Field()
    followers: int = Field()
    createdAt: str = Field()
    totalViewCount: int = Field()
    description: str = Field()
```

`Node` in `class User(Node)` tells you that `User` is a node label in a graph database. If you create a node with the label `User`, that node has a property `name`, which is indexed and a unique string. With the help of the `Field()` we are defining those constraints on the properties and defining to which database that property will be saved. If there is no `Field()`, that variable won't be saved to the database. 

Class `User` is a parent class of `Streamer`, that is, every `Streamer` is also an user. This means that class `Streamer` has two labels - `Streamer` and `User`. By setting up the `label` argument to `User`, you give your database information that `name` property should be indexed on nodes labeled `User`. If there is no argument given to the `Field()`, then it is `memgraph` by default. 

:::info
You can also [manually define labels]-TODO ADD LINK, or add another label to the current node labels.
:::

In a similar way, you can create a relationship:

```python
class Speaks(Relationship, type="SPEAKS"):
    pass
```
Now you have created a relationship of type `SPEAKS`. This relationship does not have any properties, but if you want a relationship with them, then you can define them as you did in the node classes.

Hopefully this guide has taught you how to map nodes and relationships. For more detailed information check out our docs - TODO link. If you have any more questions, join our community and ping us on [Discord](https://discord.gg/memgraph).
