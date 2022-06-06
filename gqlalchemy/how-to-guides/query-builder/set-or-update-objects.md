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

You can assign a value to a node property with the query builder's `set_()`
method. The used assignment operator is imported from the query builder. You can
also use a simple equals sign as a string - `"="`.

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

## Set or update multiple properties

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
        .node(variable='n')
        .where(item='n.name', operator='=', literal='Germany')
        .set_(item='n.population', operator=SetOperator.ASSIGNMENT, literal=83000001)
        .set_(item='n.capital', operator=SetOperator.ASSIGNMENT, literal='Berlin')
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (n) WHERE n.name = 'Germany' SET n.population = 83000001 SET n.capital = 'Berlin' RETURN *;
```

</TabItem>
</Tabs>

If the node already had the `population` or `capital` properties, they will be
updated to a new value.

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

## Replace all properties using map

If `set()` is used with the `SetOperator.ASSIGNMENT` (`=`), all the properties
in the map (value of the `literal` argument) that are on the node or
relationship will be updated. The properties that are not on the node or
relationship but are in the map will be added. The properties that are not in
the map will be removed.

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
        .node(variable='c', labels='Country')
        .where(item='c.name', operator='=', literal='Germany')
        .set_(item='c', operator=SetOperator.ASSIGNMENT, literal={'name': 'Germany', 'population': '85000000'})
        .return_()
        .execute()
```
  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (c:Country) WHERE c.name = 'Germany' SET c = {name: 'Germany', population: '85000000'} RETURN *;
```

</TabItem>
</Tabs>

## Update all properties using map

If `set()` is used with the `SetOperator.INCREMENT` (`+=`), all the properties
in the map (value of the `literal` argument) that are on the node or
relationship will be updated. The properties that are not on the node or
relationship but are in the map will be added. Properties that are not present
in the map will be left as is.

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
        .node(variable='c', labels='Country')
        .where(item='c.name', operator='=', literal='Germany')
        .set_(item='c', operator=SetOperator.INCREMENT, literal={'name': 'Germany', 'population': '85000000'})
        .return_()
        .execute()
```
  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (c:Country) WHERE c.name = 'Germany' SET c += {name: 'Germany', population: '85000000'} RETURN *;
```

</TabItem>
</Tabs>


Hopefully, this guide has taught you how to set or update node label or node and
relationship properties. For more information on what you can do with `SET`
clause, check out the [Cypher manual](/cypher-manual/clauses/set). If you
have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).
