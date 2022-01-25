---
id: return-results
title: How to return results
sidebar_label: Return results
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

You can use the methods `return_()`, `limit()`, `skip()` and `order_by()` to
construct queries that will return data from the database.

- `return_(results: Optional[Dict[str, str]])` - Return data from the database
  with aliases formatted as `key AS value`.
- `limit(integer_expression: str)` - Limits the number of returned results equal
  to `integer_expression`.
- `skip(integer_expression: str)` - Skip the number of results to be returned
  equal to `integer_expression`.
- `order_by(properties: str)` - Order the returned results either descending or
  ascending. 

## Return all variables from a query

To return all the variables from a query, just use the `return_()` method at the
end of your query:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import match

query = match().node(labels="Person", variable="p").return_().execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p:Person) RETURN *;
```

</TabItem>
</Tabs>

## Return specific variables from a query

To return only a subset of variables from a query, specify them in the `return()` method:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import match

query = match().node(labels="Person", variable="p1")
               .to()
               .node(labels="Person", variable="p2")
               .return_({"p1":"p1"})
               .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p1:Person})-[]->(p2:Person) RETURN p1;
```

</TabItem>
</Tabs>

## Limit the number of returned results

To limit the number of returned results, use the `limit()` method after the `return_()` method:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import match

query = match().node(labels="Person", variable="p").return_().limit(10)
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p:Person) RETURN * LIMIT 10;
```

</TabItem>
</Tabs>

## Order the returned results

To order the returned results, use the `order_by()` method after the `return_()` method:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import match

query = match().node(labels="Person", variable="p").return_({"p":"p"}).order_by("p.name DESC")
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p:Person) RETURN p ORDER BY p.name DESC;
```

</TabItem>
</Tabs>