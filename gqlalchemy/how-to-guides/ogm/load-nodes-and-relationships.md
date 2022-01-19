---
id: load-nodes-and-relationships
title: How to load nodes and relationships
sidebar_label: Load nodes and relationships
---

In this guide you'll learn how to load a nodes and relationships from the database. Let's say you have defined `Stream`, `Team` and `IsPartOf` classes:

```python
class User(Node):
    name: str = Field(index=True, unique=True, db=memgraph, default="")
    id: str = Field(index=True, unique=True, db=memgraph)

class Team(Node):
    name: str = Field(unique=True, db=memgraph)

class IsPartOf(Relationship, type="IS_PART_OF"):
    pass
```

There are two nodes already saved in the database:

```python
stream = Stream(name="John", id="7").save(memgraph)
team = Team(name="Warriors").save(memgraph)
```

We will use these classes in the following examples.

## Load nodes

There are many examples of when loading a node from the database may come in handy, but let's cover the two most common. 

### Finding node properties

Suppose you just have the `id` of some stream and you want to find out the name of the stream. Then you have to load that node from the database and check it's `name` property.

```python
stream = Stream(id="7").load(db=memgraph)
print(stream.name)
```

The code block above will print out the name of the stream whose `id` equals `"7"`, that is, `"John"`. 

### Creating relationship between existing nodes

Suppose you want to create a new relationship of type `IS_PART_OF`, between already saved `stream` and `team` nodes. Then you first need to load them:

```python
stream = Stream(id="7").load(db=memgraph)
team = Team(name="Warriors").load(db=memgraph)
```

Since the `id` and `name` are unique, the `load()` method will return unique stream found in the database. When the given property is not unique, `load()` method will return a list of matching results. Finally, you create relationship between `stream` and `team` nodes:

```python
is_part_of_rel = IsPartOf(
                    _start_node_id=stream._id, 
                    _end_node_id=team._id
                ).save(memgraph)
```

## Load relationships

[TODO]


:::info
To learn more about saving nodes and relationships, check out the Save nodes and relationships how-to guide. (TODO ADD LINK)
:::

Hopefully this guide has taught you how to load nodes and relationships. For more detailed information check out our docs - TODO link. If you have any more questions, join our community and ping us on [Discord](https://discord.gg/memgraph).