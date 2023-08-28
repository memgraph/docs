---
id: text
title: text
sidebar_label: text
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

The `text` module offers a toolkit for manipulating strings.

[![docs-source](https://img.shields.io/badge/source-text-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/text_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `join(strings, delimiter)`

Joins all the strings into a single one with the given delimiter between them.
#### Input:

- `strings: List[string]` ➡ list of strings to be joined.
- `delimiter: string` ➡ string to be inserted between the given strings.

#### Output:

- `string: string` ➡ the joined string.

#### Usage:

```cypher
CALL text.join(["idora", " ", "ivan", "", "matija"], ",") YIELD string RETURN string;
```

```plaintext
+----------------------------+
| string                     |
+----------------------------+
| "idora, ,ivan,,matija"     |
+----------------------------+
```
