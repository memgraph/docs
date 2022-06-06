---
id: delete-remove-objects
title: How to delete and remove objects
sidebar_label: Delete and remove objects
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can use the methods `delete()` and `remove()` to construct queries that will
remove nodes and relationships or remove properties and labels.

- `delete(variable_expressions: List[str], detach: Optional[bool] = False)` -
  Remove nodes and relationships. Set the argument `detach` to true in order to
  delete nodes with their relationships.
- `remove(items: List[str])` - Remove properties and labels.

## Delete nodes

To delete a node from the database, use the `delete()` method:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import match

query = match()
        .node(labels="Person", variable="p")
        .delete(variable_expressions="p")
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p:Person) DELETE p;
```

</TabItem>
</Tabs>

## Delete relationships

To delete a relationship from the database, use the `delete()` method:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import match

query = match()
        .node(labels="Person")
        .to(relationship_type="FRIENDS_WITH", variable="f")
        .node(labels="Person")
        .delete(variable_expressions="f")
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (:Person)-[f:FRIENDS_WITH]->(:Person) DELETE f;
```

</TabItem>
</Tabs>

## Remove properties

To remove a property from the database, use the `remove()` method:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import match

query = match()
        .node(labels="Person", variable="p")
        .remove(items="p.name")
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p:Person) REMOVE p.name;
```

</TabItem>
</Tabs>
