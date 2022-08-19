---
id: save-nodes-and-relationships
title: How to save nodes and relationships
sidebar_label: Save nodes and relationships
---

import Neo4jOption from '../../templates/_neo4j_option.mdx';

Through this guide, you will learn how to save nodes and relationships to a
graph database.

> Make sure you have a running Memgraph instance. If you're not sure how to run
> Memgraph, check out the Memgraph [Quick start](/memgraph/#quick-start).

Let's say you want to save node `User` and node `Language`, for which you have
defined classes in Python:

```python
from gqlalchemy import Memgraph, Node, Relationship, Field

db = Memgraph()

class User(Node):
    id: str = Field(index=True, exist=True, unique=True, db=db)
    username: str = Field(index=True, exist=True, unique=True, db=db)

class Language(Node):
    name: str = Field(unique=True, db=db)
```

<Neo4jOption/>

Then you create and save objects with:

```python
user = User(id="3", username="John").save(db)
language = Language(name="en").save(db)
```

There is another way of creating and saving objects:

```python
user = User(id="3", username="John")
db.save_node(user)

language = Language(name="en")
db.save_node(language)
```

These methods will check if the node is already in Memgraph and if not, create a
new one. If it existed before in Memgraph, then the internal id of that node in
Memgraph remains the same.

Next, let's say that John speaks English. You need to create and save a
relationship of type `SPEAKS`. First, we define a class which maps to the
relationship in the database:

```python
class Speaks(Relationship, type="SPEAKS"):
    pass
```

This relationship doesn't have any properties. To save it, you need to first
create it with appropriate start and end nodes:

```python
speaks_rel = Speaks(
    _start_node_id = user._id,
    _end_node_id = language._id
).save(db)
```

Another way is by first creating the relationship and then saving it using the
method `save_relationship()`:

```python
speaks_rel = Speaks(
    _start_node_id = user._id,
    _end_node_id = language._id
)
db.save_relationship(speaks_rel)
```

> The property `_id` is an internal Memgraph id - an id given to each node upon
> saving to the database. 

Hopefully this guide has taught you how to create and save nodes and
relationships. If you have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).
