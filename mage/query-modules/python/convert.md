---
id: convert
title: convert
sidebar_label: convert
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

Module used for conversion of one data type to another.

[![docs-source](https://img.shields.io/badge/source-convert-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/convert.py)


| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Functins

### `str2object(string)`

An inline function that converts the input string to an object the string represents using Python's `json.dumps` function.

#### Input:

- `string: string` ➡ input string that is converted,.

#### Output:

- `mgp.Any` ➡ since the function is inline, the output is not named, and can be of various data types, depending on the content of the string.

#### Usage:

In this case, the string will be converted to a list.

```cypher
RETURN convert.str2object("[1,2,3]") AS result;
```

```plaintext
+----------------------------+
| result                     |
+----------------------------+
| [1, 2, 3]                  |
+----------------------------+
```

In this use case, the string will be converted into a map, containing a list.


```cypher
RETURN convert.str2object('{"key": [1,2,3]}') AS result;
```

```plaintext
+----------------------------+
| result                     |
+----------------------------+
| {"key": [1,2,3]}           |
+----------------------------+
```
