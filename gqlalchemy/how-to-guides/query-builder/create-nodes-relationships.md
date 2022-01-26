---
id: create-nodes-relationships
title: Create nodes and relationships
sidebar_label: Create nodes and relationships
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can use the methods `create()` and `merge()` to construct queries that will
generate new nodes and relationships in the database.

- `create()` - Creates the specified node or relationship.
- `merge()` - Updates existing nodes and relationships or creates them if they
  don't exist.

## How to create a node

To create nodes, you can just use the method `node()` after `create()`:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import create

query = create().node(labels="Person", name="Ron").execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
CREATE (:Person {name: 'Ron'});
```

</TabItem>
</Tabs>

## How to create a node if it doesn't exist

If you use the `merge()` method instead of `create()`, the node won't be created
if it already exists, it will only be updated if the properties don't match:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'},
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import merge

query = merge().node(labels="Person", name="Leslie").execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MERGE (:Person {name: 'Leslie'});
```

</TabItem>
</Tabs>

## How to create a relationship

To create relationships, you can just use the methods `to()` and `from()` after
`create()`:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'},
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import create

query = create()
        .node(labels="Person", name="Leslie")
        .to(edge_label="FRIENDS_WITH")
        .node(labels="Person", name="Ron")
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
CREATE (:Person {name: 'Leslie'})-[:FRIENDS_WITH]->(:Person {name: 'Ron'});
```
  
</TabItem>
</Tabs>
