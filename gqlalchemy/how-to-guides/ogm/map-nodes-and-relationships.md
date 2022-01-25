---
id: map-nodes-and-relationships
title: How to map nodes and relationships
sidebar_label: Map nodes and relationships
---

This guide will teach you how to map Python classes to nodes and relationships
in a graph database. 

> Make sure you have a running Memgraph instance. If you're not sure how to run
> Memgraph, check out the Memgraph [Quick start](/memgraph/#quick-start).

First, do all necessary imports and create an instance of the database:

```python
from gqlalchemy import Memgraph, Node, Relationship, Field
from datetime import datetime
```

After that, you instantiate Memgraph and create a class representing your nodes
and relationships. You are creating `User` and `Streamer` node, where every
`Streamer` is also a `User`, but not every `User` is a `Streamer`.

```python
db = Memgraph()

class User(Node):
    id: str = Field(index=True, exist=True, unique=True, db=db)

class Streamer(User):
    id: str = Field(index=True, exist=True, unique=True, db=db)
    username: Optional[str] = Field(index=True, exist=True, unique=True, db=db)
    url: Optional[str] = Field()
    followers: Optional[int] = Field()
    createdAt: Optional[str] = Field()
    totalViewCount: Optional[int] = Field()
    description: Optional[str]
```

`Node` is a Python class that maps to a graph object in Memgraph. `User` and
`Streamer` are classes which inherit from the `Node` and they map to a label in
graph database. Class `User` maps to a singe `:User` label, while class
`Streamer` maps to multiple label `:Streamer:User`, since it also inherits the
`User` class. If you create a node with the label `User`, that node has a
property `id`, which is indexed and a unique string. With the help of the
`Field()` we are defining those constraints on the properties and defining to
which database that property will be saved. Notice that the `description`
property has no `Field()` function. That means that `description` won't be saved
to the database.

In a similar way, you can create a relationship:

```python
class ChatsWith(Relationship, type="CHATS_WITH"):
    lastChatted: Optional[datetime.datetime] = Field() 
```

Now you have created a relationship of type `CHATS_WITH`. This relationship has property `lastChatted`, which is optional. If you want to create a relationship without any properties, you can do that with:

```python
class ChatsWith(Relationship, type="CHATS_WITH"):
    pass
```


Hopefully this guide has taught you how to map nodes and relationships. For more
detailed information check out our docs - TODO link. If you have any more
questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).
