---
id: index-labels-and-properties
title: How to index labels and properties
sidebar_label: Index labels and properties
---

Through this guide, you will learn how to index labels and properties in a graph
database.

> Make sure you have a running Memgraph instance. If you're not sure how to run
> Memgraph, check out the Memgraph [Quick start](/memgraph/#quick-start).

Next, do all necessary imports and create an instance of the database:

```python
from gqlalchemy import Memgraph, Node, Field

db = Memgraph()
```

After that, you can create two classes that represent:

```python
class Animal(Node, index=True, db=db):
    name: str

class Human(Node):
    id: str = Field(index=True, db=db)
```

In the first class, `Animal`, the class argument `index` is set to `True`. That
means that Memgraph will create a **label index** on the label `Animal`.

The other class, `Human`, has a `Field()` `index` argument set to `True`. Hence,
Memgraph will create a label-property index on the property `id` of every node
labeled `Human`.

Indexes will be created only if the database argument `db` is provided.

> To learn more about indexing, check out the [Under the
> hood](/memgraph/under-the-hood/indexing) documentation section.

Hopefully, this guide has taught you how to create indexes on labels and
properties. If you have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).
