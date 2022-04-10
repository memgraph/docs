---
id: set-or-update-objects
title: How to set or update objects
sidebar_label: Set or update objects
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `set_()` method is used to set or update labels on nodes, and properties on
nodes and relationships.

## Set or update a property

You can assign a value to a node property with the `set_()` method from the
query builder. The used assignment operator is imported from the query builder.
You can also use a simple equals sign as a string - `"="`.

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import match
from gqlalchemy.query_builder import Operator

query = match()
        .node(labels="Country", variable="c", name="Germany")
        .set_(item="c.population", operator=Operator.ASSIGNMENT, literal=83000001)
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (c:Country {name: 'Germany'}) SET c.population = 83000001 RETURN *;
```

</TabItem>
</Tabs>

If the node already had the `population` property, it will be updated by setting
it to a new value.

## Set a label

The `set()` method can be used to set a label of a node. If a node already
has a label, then it will have both old and new label.

<Tabs
  defaultValuße="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import match
from gqlalchemy.query_builder import Operator

query = match()
        .node(variable="c", name="Germany")
        .set_(item="c", operator=Operator.LABEL_FILTER, expression="Land")
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (c {name: 'Germany'}) SET c:Land RETURN *;
```

</TabItem>
</Tabs>


Hopefully, this guide has taught you how to set or update node label or node and
relationship properties. If you have any more questions, join our community and
ping us on [Discord](https://discord.gg/memgraph).







