---
id: date
title: date
sidebar_label: date
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

The `date` module provides various utilities to handle date and time operations within the Cypher Query Language. These functions can be used in conjunction with other Cypher expressions to handle date-related tasks such as formatting, parsing, comparisons, and arithmetic, thus enhancing the capabilities of Memgraph for managing time-based data.

[![docs-source](https://img.shields.io/badge/source-date-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/python/date.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `format(time, unit, format, timezone)`

Returns a string representation of time value using the specified unit, specified format, and specified time zone.

#### Input:

- `time: int` ➡ time passed since the Unix epoch.
- `unit: str (default="ms")` ➡ unit of the given time.
- `format: str (default="%Y-%m-%d %H:%M:%S %Z")` ➡ pattern to be formatted to.
- `timezone: str (default="UTC")` ➡ timezone to be used.

:::info

The unit parameter supports the following values:
- "ms" for milliseconds
- "s" for seconds
- "m" for minutes
- "h" for hours
- "d" for days

:::

:::info

The format parameter supports values defined under [Python strftime format codes](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes).

:::

:::info

The timezone parameter can be specified with the database TZ identifier (text) name, as listed for [timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

:::

#### Output:

- `formatted: str` ➡ received time in the specified format.

#### Usage:

```cypher
CALL date.format(74976, "h", "%Y/%m/%d %H:%M:%S %Z", "Mexico/BajaNorte") 
YIELD formatted RETURN formatted;
```

```plaintext
+-------------------------------+
| formatted                     |
+-------------------------------+
| "1978/07/21 17:00:00 PDT"     |
+-------------------------------+
```


### `parse(time, unit, format, timezone)`

Parses the date string using the specified format and specified timezone into the specified time unit.

#### Input:

- `time: str` ➡ a datetime.
- `unit: str (default="ms")` ➡ unit to be parsed to.
- `format: str (default="%Y-%m-%d %H:%M:%S")` ➡ format of the given DateTime.
- `timezone: str (default="UTC")` ➡ timezone to be used.

:::info

The unit parameter supports the following values:
- "ms" for milliseconds
- "s" for seconds
- "m" for minutes
- "h" for hours
- "d" for days

:::

:::info

The format parameter supports values defined under [Python strftime format codes](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes).

:::

:::info

The timezone parameter can be specified with the database TZ identifier (text) name, as listed for [timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

:::

#### Output:

- `parsed: int` ➡ number of time units that have elapsed since the Unix epoch.

#### Usage:

```cypher
CALL date.parse("2023/08/03 14:30:00", "h", "%Y/%m/%d %H:%M:%S", "Europe/Zagreb") 
YIELD parsed RETURN parsed;
```

```plaintext
+---------------------+
| parsed              |
+---------------------+
| 469740              |
+---------------------+
```

