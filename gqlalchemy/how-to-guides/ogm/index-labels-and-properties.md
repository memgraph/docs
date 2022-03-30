---
id: index-labels-and-properties
title: How to index labels and properties
sidebar_label: Index labels and properties
---

In this guide you'll learn how to index labels and properties in the
database. 

> Make sure you have a running Memgraph instance. If you're not sure how to run
> Memgraph, check out the Memgraph [Quick start](/memgraph/#quick-start).

Next, do all necessary imports and create an instance of the
database:

```python
from gqlalchemy import Memgraph, Node, Field

db = Memgraph()
```

After that, you can create two classes that are representing nodes.

```python
class Animal(Node, index=True, db=db):
    name: str

class Human(Node):
    id: str = Field(index=True, db=db)
```

The first class, `Animal`, has class argument `index` set to `True`. That means
that Memgraph will create **label index** on label `Animal` in the database. 

The other class, `Human`, has `Field` `index` argument set to `True`. Hence,
Memgraph will create a label-property index on `id` property of every `Human`
node.

Indexes will be created only if the database is provided.

> To learn more about indexing, check out the [Under the
> hood](/memgraph/under-the-hood/indexing)
> documentation section.

Hopefully this guide has taught you how to load nodes and relationships. If you
have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).