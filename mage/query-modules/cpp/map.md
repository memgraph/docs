---
id: map
title: map
sidebar_label: map
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



[![docs-source](https://img.shields.io/badge/source-graph_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/cpp/map_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `remove_key(input_map, key, recursive_map)`

Removes the key and its value from an input map. If an key that doesn't exist in an input map is passed, it will be ignored. If recursive setting is selected, key will also be removed from inner maps that may be part of the input map.

#### Input:

- `input_map: Map` ➡ map from which we want to remove key
- `key: string` ➡ key we want to remove
- `recursive_map: bool` ➡ false by default, should be set to true if input map consists of values that are also maps and therefore may have key we want to remove


#### Output:

- `removed: Map` ➡ map without the key we removed

#### Usage:

```cypher
CALL map.remove_key({c: "b", d: "ba"}, "c") YIELD removed
RETURN removed
```

```plaintext
+----------------------------+
| removed                    |
+----------------------------+
| {"d": "ba"}                |
+----------------------------+
```

Example with recursion:

```cypher
CALL map.remove_key({c: "b", d: {e: "ba", c: "h", a: {c: "z"}}}, "c", true) YIELD removed
RETURN removed
```

```plaintext
+----------------------------+
| removed                    |
+----------------------------+
| {"d": {"e": "ba"}}         |
+----------------------------+
```


### `from_pairs(input_list)`

Creates a map from a list of pairs (pairs are essentially another list of size 2). First element in a pair must be type string since it will be used as a key.

#### Input:

- `input_list: List[List]` ➡ list of pairs


#### Output:

- `map: Map` ➡ map whose keys are first elements in pairs and corresponding values are second elements in pairs

#### Usage:

```cypher
CALL map.from_pairs([["b", 3], ["c", "c"]]) YIELD map
RETURN map
```

```plaintext
+----------------------------+
| map                        |
+----------------------------+
| {"b": 3, "c": "c"}         |
+----------------------------+
```


### `merge(input_map1, input_map2)`

Merges two maps in one. If the same key occurs twice, later value will overwrite the previous.

#### Input:

- `input_map1: Map` ➡ map whose key-value pairs we want merged with others
- `input_map2: Map` ➡ map whose key-value pairs we want merged with others


#### Output:

- `merged: Map` ➡ merge of input maps

#### Usage:

```cypher
CALL map.merge({a: "b", c: "d"}, {e: "f", g: "h"}) YIELD merged
RETURN merged
```

```plaintext
+----------------------------------------+
| merged                                 |
+----------------------------------------+
| {a: "b", c: "d", e: "f", g: "h"}       |
+----------------------------------------+
```


