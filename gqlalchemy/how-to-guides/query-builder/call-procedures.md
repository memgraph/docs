---
id: call-procedures
title: How to call procedures
sidebar_label: Call procedures
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can use the methods `call()` and `yield_()` to construct queries that will
call procedure and return results from them.

- `call(procedure: str, arguments: Optional[str] = None)` - Call the procedure
  `procedure` with the arguments `arguments`.
- `yield_(results: Optional[Dict[str, str]])` - Yield results from a procedure
  with aliases formatted as `key AS value`.

## Call procedure with no arguments

To call a procedure with no arguments, don't specify the arguments in the
`call()` method:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import call

query = call("pagerank.get").yield_().return_().execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
CALL pagerank.get() YIELD * RETURN *;
```

</TabItem>
</Tabs>

## Call procedure with arguments

To call a procedure with arguments, specify the arguments as a string in the
`call()` method:

<Tabs
  defaultValue="gqlalchemy"
  values={[
    {label: 'GQLAlchemy', value: 'gqlalchemy'},
    {label: 'Cypher', value: 'cypher'}
  ]}>
  <TabItem value="gqlalchemy">

```python
from gqlalchemy import call

query = call("json_util.load_from_url", "https://some-url.com")
        .yield_(results="objects")
        .return_(results="objects")
        .execute()
```

  </TabItem>
  <TabItem value="cypher">

```cypher
CALL json_util.load_from_url(https://some-url.com) YIELD objects RETURN objects;
```

</TabItem>
</Tabs>
