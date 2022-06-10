---
id: filter-data
title: How to filter data
sidebar_label: Filter data
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can use the methods `where()`, `where_not()`, `or_where()`,
`or_where_not()`, `and_where()`, `and_where_not()`, `xor_where()` and
`xor_where_not()` to construct queries that will filter data.

- `where(self, item: str, operator: Operator, **kwargs)` - Filter data so that
  `operator` evaluates the comparison of `item` and `literal` or `expression` to true.
- `where_not(self, item: str, operator: Operator, **kwargs)` - Filter data so that
  `operator` evaluates the comparison of `item` and `literal` or `expression` to false.
- `or_where(self, item: str, operator: Operator, **kwargs)` - Append an additional
  filter with `OR`.
- `or_not_where(self, item: str, operator: Operator, **kwargs)` - Append an additional
  filter with `OR NOT`.
- `and_where(self, item: str, operator: Operator, **kwargs)` - Append an additional
  filter with `AND`.
- `and_not_where(self, item: str, operator: Operator, **kwargs)` - Append an additional
  filter with `AND NOT`.
- `xor_where(self, item: str, operator: Operator, **kwargs)` - Append an additional
  filter with `XOR`.
- `xor_not_where(self, item: str, operator: Operator, **kwargs)` - Append an additional
  filter with `XOR NOT`.

## Filter by property value

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
from gqlalchemy.query_builder import Operator

query = match()
        .node("Person", variable="p1")
        .to("FRIENDS_WITH")
        .node("Person", variable="p2")
        .where("n.name", Operator.EQUAL, "Ron")
        .or_where("m.id", Operator.EQUAL, 0)
        .return_()
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p1:Person)-[:FRIENDS_WITH]->(p2:Person) WHERE n.name = 'Ron' OR m.id = 0 RETURN *;
```

</TabItem>
</Tabs>
