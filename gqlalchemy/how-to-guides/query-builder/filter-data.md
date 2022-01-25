---
id: filter-data
title: How to filter data
sidebar_label: Filter data
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can use the methods `where()`, `or_where()` and `and_where()` to construct
queries that will filter data.

- `where(property: str, operator: str, value: Any)` - Filter data so that
  `operator` evaluates `property` and `value` to true.
- `or_where(property: str, operator: str, value: Any)` - Append an additional
  filter with `OR`.
- `and_where(property: str, operator: str, value: Any)` - Append an additional
  filter with `AND`.

## Filter by property value

To return all the variables from a query, just use the `return_()` method at the end of your query:

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
        .node("Person", variable="p1")
        .to("FRIENDS_WITH")
        .node("Person", variable="p2")
        .where("n.name", "=", "Ron")
        .or_where("m.id", "=", 0)
        .return_()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p1:Person)-[:FRIENDS_WITH]-(p2:Person) WHERE n.name = "Ron" OR m.id = 0 RETURN *;
```

</TabItem>
</Tabs>
