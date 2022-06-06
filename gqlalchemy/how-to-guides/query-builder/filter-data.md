---
id: filter-data
title: How to filter data
sidebar_label: Filter data
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can use `where()`, `where_not()`, `or_where()`, `or_not_where()`,
`and_where()`, `and_not_where()`, `xor_where()` and `xor_not_where()` methods to
construct queries that will filter data.

In this guide, you'll learn how to:

- [Filter data by property comparison](#filter-data-by-property-comparison)
- [Filter data by property value](#filter-data-by-property-value)
- [Filter data by label](#filter-data-by-label)

## Filter data by property comparison

You can filter data by comparing properties of graph objects. Below you can see
how to compare `name` properties of two nodes.

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
        .node(labels="Person", variable="p1")
        .to(relationship_type="FRIENDS_WITH")
        .node(labels="Person", variable="p2")
        .where(item="p1.name", operator="=", expression="p2.name")
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p1:Person)-[:FRIENDS_WITH]->(p2:Person) WHERE p1.name = p2.name RETURN *;
```

  </TabItem>
</Tabs>

Here the `expression` keyword argument is used because the property shouldn't be
quoted in the Cypher query.

Standard boolean operators like `NOT`, `AND`, `OR` and `XOR` are used in the
Cypher query language. To have `NOT` within `WHERE` clause, you need to use
`where_not()` method.

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
        .node(labels="Person", variable="p1")
        .to(relationship_type="FRIENDS_WITH")
        .node(labels="Person", variable="p2")
        .where_not(item="p1.name", operator="=", expression="p2.name")
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p1:Person)-[:FRIENDS_WITH]->(p2:Person) WHERE NOT p1.name = p2.name RETURN *;
```

  </TabItem>
</Tabs>

In a similar way, you can use `AND` and `AND NOT` clauses, which correspond to
the methods `and_where()` and `and_not_where()`. Using the query below you can
find all persons with the same `first_name` and `last_name`, but different
`address`.

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
        .node(labels="Person", variable="p1")
        .to(relationship_type="FRIENDS_WITH")
        .node(labels="Person", variable="p2")
        .where(item="p1.first_name", operator="=", expression="p2.first_name")
        .and_where(item="p1.last_name", operator="=", expression="p2.last_name")
        .and_not_where(item="p1.address", operator="=", expression="p2.address")
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p1:Person)-[:FRIENDS_WITH]->(p2:Person) WHERE p1.name = p2.name AND p1.last_name = p2.last_name AND NOT p1.address = p2.address RETURN *;
```

  </TabItem>
</Tabs>

The same goes for the `OR`, `OR NOT`, `XOR` and `XOR NOT` clauses, which
correspond to the methods `or_where()`, `or_not_where()`, `xor_where()` and
`xor_not_where()`.

## Filter data by property value

You can filter data by comparing the property of a graph object to some value (a
literal). Below you can see how to compare `age` property of a node to the
integer.

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
        .where(item="p.age", operator=">", literal=18)
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p:Person) WHERE p.age > 18 RETURN *;
```

  </TabItem>
</Tabs>

It's important that the third keyword argument is `literal`, since then, it will
be of the correct type.

Just like in [property comparison](#filter-data-by-property-comparison), you can
use different boolean operators to further filter the data.

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
        .where(item="p.age", operator=">", literal=18)
        .or_where(item="p.name", operator="=", literal="John")
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p:Person) WHERE p.age > 18 OR p.name = "John" RETURN *;
```

  </TabItem>
</Tabs>

The `literal` keyword is used again since you want `John` to be quoted in the
Cypher query.

## Filter data by label

Nodes can be filtered by their label using the `WHERE` clause instead of
specifying it directly in the `MATCH` clause. You have to use `expression` as
the third keyword argument again since you don't want the quotes surrounding the
label in the Cypher clause.

Below you can see an example of how to filter data by label:

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
        .node(variable="p")
        .where(item="p", operator=":", expression="Person")
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p) WHERE p:Person RETURN *;
```

  </TabItem>
</Tabs>

Just like in [property comparison](#filter-data-by-property-comparison), you can
use different boolean operators to further filter the data.
