---
id: load-nodes-and-relationships
title: How to load nodes and relationships
sidebar_label: Load nodes and relationships
---

Through this guide, you will learn how to load nodes and relationships from a
graph database. First, perform all necessary imports and create an instance of
the database:

```python
from gqlalchemy import Memgraph, Node, Relationship, Field
from typing import Optional

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
    date: Optional[str] = Field()
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

Suppose you just have the `id` of the streamer and you want to know the
streamer's name. You have to load that node from the database and check its
`name` property.

```python
loaded_streamer = Streamer(id="7").load(db=db)
print(loaded_streamer.name)
```

The code block above will print out the name of the stream whose `id` equals
`"7"`, that is, `"John"`. 

### Creating relationship between existing nodes

Suppose you want to create a new relationship of type `IS_PART_OF`, between
already saved `streamer` and `team` nodes. Then you first need to load them:

```python
loaded_streamer = Stream(id="7").load(db=db)
loaded_team = Team(name="Warriors").load(db=db)
```

Since the `id` property is unique, the `load()` method will return a unique
streamer found in the database. Similarly, since the `name` property is unique
for each team, the `load()` method will return a unique team found in the
database. When the given property is not unique, the `load()` method will return
a list of matching results. Finally, you can create a relationship between
`loaded_streamer` and `loaded_team` nodes:

```python
is_part_of = IsPartOf(
                    _start_node_id=loaded_streamer._id, 
                    _end_node_id=loaded_team._id,
                    date="2021-04-26"
                ).save(db)
```

## Load relationships

You can load a relationship from the database based on its start and end node.
You have already created `is_part_of` relationship with `streamer._id` as
`_start_node_id` and `team._id` as `_end_node_id`. Now you can load it from
the database:

```python
loaded_is_part_of = IsPartOf(
        _start_node_id=streamer._id,
        _end_node_id=team._id
    ).load(db)
```
It's easy to get its `date` property:

```python
print(loaded_is_part_of.date)
```
The output of the above print is `2021-04-26`.


Hopefully this guide has taught you how to load nodes and relationships. If you
have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).
