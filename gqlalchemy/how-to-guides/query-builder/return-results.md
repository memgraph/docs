---
id: return-results
title: How to return results
sidebar_label: Return results
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can use the methods `return_()`, `limit()`, `skip()` and `order_by()` to
construct queries that will return data from the database.

- `return_(results: Optional[Union[str, Tuple[str, str], Dict[str, str],
  List[Union[str, Tuple[str, str]]], Set[Union[str, Tuple[str, str]]]]] =
  None)` - Return data from the database with aliases formatted as `key AS
  value`.
- `limit(integer_expression: Union[str, int])` - Limits the number of returned results equal
  to `integer_expression`.
- `skip(integer_expression: Union[str, int])` - Skip the number of results to be returned
  equal to `integer_expression`.
- `order_by(properties: Union[str, Tuple[str, Order], List[Union[str, Tuple[str,
  Order]]]])` - Order the returned results either descending or ascending.

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

To return only a subset of variables from a query, specify them in the
`return()` method:

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
        .to()
        .node(labels="Person", variable="p2")
        .return_(results=[("p1", "first"), "p2"])
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p1:Person)-[]->(p2:Person) RETURN p1 AS first, p2;
```

</TabItem>
</Tabs>

## Limit the number of returned results

To limit the number of returned results, use the `limit()` method after the
`return_()` method:

<Tabs
defaultValue="gqlalchemy"
values={[
{label: 'GQLAlchemy', value: 'gqlalchemy'},
{label: 'Cypher', value: 'cypher'}
]}>
<TabItem value="gqlalchemy">

```python
from gqlalchemy import match

query = match().node(labels="Person", variable="p").return_().limit(10).execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (p:Person) RETURN * LIMIT 10;
```

  </TabItem>
</Tabs>

## Order the returned results

You can order the returned results [by one](#order-by-one-value) or [more
values](#order-by-list-of-values) in an ascending or descending order. The
default ordering in the Cypher query language is ascending (`ASC` or
`ASCENDING`), and if you want the descending order, you need to add the `DESC`
or `DESCENDING` keyword to the `ORDER BY` clause.

### Order by one value

To order the return results by one value, use the `order_by(properties)` method,
where `properties` can be a string (a property) or a tuple of two strings (a
property and an order).

The following query will order the results in an ascending (default) order by
the property `id` of a node.

<Tabs
defaultValue="gqlalchemy"
values={[
{label: 'GQLAlchemy', value: 'gqlalchemy'},
{label: 'Cypher', value: 'cypher'}
]}>
<TabItem value="gqlalchemy">

```python
from gqlalchemy import match

query = match().node(variable="n").return_().order_by(properties="n.id").execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (n) RETURN * ORDER BY n.id;
```

</TabItem>
</Tabs>

You can also emphasize that you want an ascending order:

<Tabs
defaultValue="gqlalchemy"
values={[
{label: 'GQLAlchemy', value: 'gqlalchemy'},
{label: 'Cypher', value: 'cypher'}
]}>
<TabItem value="gqlalchemy">

```python
from gqlalchemy import match
from gqlalchemy.query_builder import Order

query = match().node(variable="n").return_().order_by(properties=("n.id", Order.ASC).execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (n) RETURN * ORDER BY n.id ASC;
```

  </TabItem>
</Tabs>

The same can be done with the keyword `ASCENDING`:

<Tabs
defaultValue="gqlalchemy"
values={[
{label: 'GQLAlchemy', value: 'gqlalchemy'},
{label: 'Cypher', value: 'cypher'}
]}>
<TabItem value="gqlalchemy">

```python
from gqlalchemy import match
from gqlalchemy.query_builder import Order

query = match().node(variable="n").return_().order_by(properties=("n.id", Order.ASCENDING).execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (n) RETURN * ORDER BY n.id ASCENDING;
```

</TabItem>
</Tabs>

:::info

`Order` is an enumeration class defined in the
[`query_module.py`](https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/query_builder.py).
It will help you in adding the correct order. If you don't want to import it,
you can use strings: `"ASC"`, `"ASCENDING"`, `"DESC"` or `"DESCENDING"`.

:::

To order the query results in descending order, you need to specify the `DESC`
or `DESCENDING` keyword. Hence, the argument of the `order_by()` method must be
a tuple.

<Tabs
defaultValue="gqlalchemy"
values={[
{label: 'GQLAlchemy', value: 'gqlalchemy'},
{label: 'Cypher', value: 'cypher'}
]}>
<TabItem value="gqlalchemy">

```python
from gqlalchemy import match
from gqlalchemy.query_builder import Order

query = match().node(variable="n").return_().order_by(properties=("n.id", Order.DESC).execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (n) RETURN * ORDER BY n.id DESC;
```

  </TabItem>
</Tabs>

Similarly, you can use `Order.DESCENDING` to get `DESCENDING` keyword in `ORDER BY` clause.

### Order by a list of values

To order the returned results by more than one value, use the
`order_by(properties)` method, where `properties` can be a list of strings or
tuples of strings (list of properties with or without order).

The following query will order the results in ascending order by the property
`id`, then again in ascending (default) order by the property `name` of a node.
After that, it will order the results in descending order by the property
`last_name`, then in ascending order by the property `age` of a node. Lastly,
the query will order the results in descending order by the node property
`middle_name`.

<Tabs
defaultValue="gqlalchemy"
values={[
{label: 'GQLAlchemy', value: 'gqlalchemy'},
{label: 'Cypher', value: 'cypher'}
]}>
<TabItem value="gqlalchemy">

```python
from gqlalchemy import match
from gqlalchemy.query_builder import Order

query = match()
        .node(variable="n")
        .return_()
        .order_by(
            properties=[
                ("n.id", Order.ASC),
                "n.name",
                ("n.last_name", Order.DESC),
                ("n.age", Order.ASCENDING),
                ("n.middle_name", Order.DESCENDING),
            ]
        )
```

  </TabItem>
  <TabItem value="cypher">

```cypher
MATCH (n) RETURN * ORDER BY n.id ASC, n.name, n.last_name DESC, n.age ASCENDING, n.middle_name DESCENDING;
```

  </TabItem>
</Tabs>

Hopefully, this guide has taught you how to return the query results. If you
have any more questions, join our community and ping us on
[Discord](https://www.discord.gg/memgraph).
