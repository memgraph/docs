---
id: temporal
title: temporal
sidebar_label: temporal
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunOnSubgraph from '../../templates/_run_on_subgraph.mdx';

export const Highlight = ({children, color}) => (
<span
style={{
  backgroundColor: color,
  borderRadius: '2px',
  color: '#fff',
  padding: '0.2rem',
}}>
{children}
</span>
);

The `temporal` module enables more sophisticated manipulation, conversion, and calculation of date and time. These functions handle temporal (time-related) operations and offer extended capabilities compared to the [`date`](date.md) functions.

[![docs-source](https://img.shields.io/badge/source-temporal-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/python/date.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `format(temporal, format)`

Formats a temporal value.

#### Input:

- `temporal: Any` ➡ temporal value (date, time, datetime, duration) to be formatted.
- `format: str` ➡ the wanted format.

:::info

The format parameter supports values defined under [Python strftime format codes](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes).

:::

#### Output:

- `formatted: str` ➡ received temporal value in the specified format.

#### Usage:

```cypher
CALL temporal.format(duration({minute: 127}), "%H:%M:%S") YIELD formatted RETURN formatted;
```

```plaintext
+-----------------------+
| formatted             |
+-----------------------+
| "02:07:00"            |
+-----------------------+
```
