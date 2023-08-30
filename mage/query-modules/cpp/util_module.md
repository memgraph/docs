---
id: util_module
title: util_module
sidebar_label: util_module
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

The util module provides a set of handy functions for tasks like validation and generating cryptographic hash values. It's a valuable toolkit for simplifying various database-related operations.  

[![docs-source](https://img.shields.io/badge/source-util_module-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/util_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures


### `md5(values)`

Gets the string representation of every element in the input list, concatenates it into a single string, and returns the md5 hash of that string.
NOTE: The format of string representations can be seen by checking ToString in [CPP API](/memgraph/reference-guide/query-modules/api/cpp-api) documentation for desired type or Value.

#### Input:

- `values: List[Any]` ➡ input list containing elements which can be any of Memgraph's data types.

#### Output:

- `result: string` ➡ resulting md5 hash returned as string.

#### Usage:

NOTE: The hash provided in this documentation will be different from the user's hash for the same input unless the node has the same ID because `Node.ToString()` uses the node's ID in string formation, so different IDs equal different strings, hence, different hashes.

```cypher
CREATE (d:Dog);
MATCH (d:Dog)
CALL util_module.md5([d, "string", 50]) YIELD result RETURN result;
```

```plaintext
+-----------------------------------+
| result                            |
+-----------------------------------+
| 47e656a5f446fc21316e97df90e8ae33  |
+-----------------------------------+
```
