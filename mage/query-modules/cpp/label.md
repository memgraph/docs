---
id: label
title: label
sidebar_label: label
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

Labels are used to categorize nodes, and the `label` module provides an array of utilities for working with labels in a Memgraph database.


[![docs-source](https://img.shields.io/badge/source-label-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/label_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `exists(node, label)`

Checks whether a specified label exists within the provided node.

#### Input:

- `node: Any` ➡ node whose labels are to be checked.
- `label: string` ➡ name of the label whose existence is to be confirmed.

#### Output:

- `exists: bool` ➡ whether or not provided node has a specified label.

#### Usage:

```cypher
CREATE (:Student {name: 'Ana'});
MATCH (s:Student {name: 'Ana'}) CALL label.exists(s, "Teacher") YIELD exists RETURN exists;
```

```plaintext
+----------------------------+
| exists                     |
+----------------------------+
| False                      |
+----------------------------+
```

