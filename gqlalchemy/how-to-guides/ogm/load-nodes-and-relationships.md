---
id: load-nodes-and-relationships
title: How to load nodes and relationships
sidebar_label: Load nodes and relationships
---

In this guide you'll learn how to load a nodes and relationships from the
database. First, do all necessary imports and create an instance of the
database:

```python
from gqlalchemy import Memgraph, Node, Relationship, Field
from typing import Optional
import datetime

db = Memgraph()
```

> Make sure you have a running Memgraph instance. If you're not sure how to run
> Memgraph, check out the Memgraph [Quick start](/memgraph/#quick-start).

Let's say you have defined `Streamer`, `Team` and `IsPartOf` classes:

```python
class Streamer(Node):
    id: str = Field(index=True, unique=True, db=db)
    name: Optional[str] = Field(index=True, exists=True, unique=True, db=db)

class Team(Node):
    name: str = Field(unique=True, db=db)

class IsPartOf(Relationship, type="IS_PART_OF"):
    date: datetime.datetime = Field()
```

There are two nodes already saved in the database:

```python
streamer = Streamer(name="John", id="7").save(db)
team = Team(name="Warriors").save(db)
```

We will use these objects in the following examples.

## Load nodes

There are many examples of when loading a node from the database may come in
handy, but let's cover the two most common. 

### Finding node properties

Suppose you just have the `id` of the streamer and you want to find out the name
of the streamer. Then you have to load that node from the database and check its
`name` property.

```python
stream = Stream(id="7").load(db=memgraph)
print(stream.name)
```

The code block above will print out the name of the stream whose `id` equals
`"7"`, that is, `"John"`. 

### Creating relationship between existing nodes

Suppose you want to create a new relationship of type `IS_PART_OF`, between
already saved `stream` and `team` nodes. Then you first need to load them:

```python
streamer = Stream(id="7").load(db=memgraph)
team = Team(name="Warriors").load(db=memgraph)
```

Since the `id` and `name` are unique, the `load()` method will return unique
stream found in the database. When the given property is not unique, `load()`
method will return a list of matching results. Finally, you create relationship
between `streamer` and `team` nodes:

```python
is_part_of = IsPartOf(
                    _start_node_id=stream._id, 
                    _end_node_id=team._id,
                    date=datetime.date(2021, 4, 25)
                ).save(db)
```

## Load relationships

You can load a certain relationship based on its label or properties. Let's say you want to find out how many streamers have joined a team on a certain day. If that day is `2021-04-25`, then you want to load all relationships `IsPartOf` that have property `date` set to `2021-04-25`.

```python
is_part_of = IsPartOf(date=datetime.date(2021, 4, 25)).load(db)
```

Since we have created only one relationship on that date, `is_part_of` is object representing that relationship. Therefore, `is_part_of._start_node_id` is the internal `id` of the streamer we created and `is_part_of._end_node_id` is the internal `id` of the team we created.


Hopefully this guide has taught you how to load nodes and relationships. For
more detailed information check out our docs - TODO link. If you have any more
questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).