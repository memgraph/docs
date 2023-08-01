---
id: collections
title: collections
sidebar_label: collections
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



[![docs-source](https://img.shields.io/badge/source-graph_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/cpp/collections_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `remove_all(input_list, to_remove_list)`

Removes elements from an input list. If an element that doesn't exist in an input list is passed, it will be ignored.

#### Input:

- `input_list: List[Any]` ➡ list from which we want to remove elements
- `to_remove_list: List[Any]` ➡ list of elements we want removed


#### Output:

- `removed: List[Any]` ➡ input list without the elements we removed

#### Usage:

```cypher
CALL collections.remove_all([1, 2, 3, 4, 5], [1, 2, 3, 7]) YIELD removed
RETURN removed;
```

```plaintext
+----------------------------+
| removed                    |
+----------------------------+
| [4, 5]                     |
+----------------------------+
```


### `sum(input_list)`

Sums up all the list elements if they are the same type and summable (numeric).

#### Input:

- `input_list: List[Any]` ➡ list whose elements we want to sum up


#### Output:

- `sum: double` ➡ sum of all the elements in an input list

#### Usage:

```cypher
CREATE (:A {id:5});
MATCH (a:A)
CALL collections.sum([1, 2.3, -4, c.id]) YIELD sum
RETURN sum;
```

```plaintext
+----------------------------+
| sum                        |
+----------------------------+
| 4.3                        |
+----------------------------+
```


### `union(input_list1, input_list2)`

Unites two lists in one, removing the duplicates.

#### Input:

- `input_list1: List[Any]` ➡ list whose elements we want united with others
- `input_list2: List[Any]` ➡ list whose elements we want united with others


#### Output:

- `union: List[Any]` ➡ union of input lists

#### Usage:

```cypher
CALL collections.union([0, 1, 2, 3], [2, 2, 3, 4, 5]) YIELD union
RETURN union
```

```plaintext
+----------------------------+
| union                      |
+----------------------------+
| [0, 1, 2, 3, 4, 5]         |
+----------------------------+
```


### `sort(input_list)`

Sorts the elements of an input list if they are the same type.

#### Input:

- `input_list: List[Any]` ➡ list whose elements we want sorted


#### Output:

- `sorted: List[Any]` ➡ list with sorted elements

#### Usage:

```cypher
CALL collections.sort([1, 4, 2.3, -5]) YIELD sorted
RETURN sorted
```

```plaintext
+----------------------------+
| sorted                     |
+----------------------------+
| [-5, 1, 2.3, 4]            |
+----------------------------+
```


### `contains_sorted(input_list, element)`

Checks if a sorted list contains certain element. If an unsorted list is passed, there is no guarantee that the result will be correct. For an input list to be sorted, elements must be comparable, therefore the same type.

#### Input:

- `input_list: List[Any]` ➡ list in which we are searching for the element
- `element: Any` ➡ element we are searching for


#### Output:

- `contains: bool` ➡ true if the element was found, false otherwise

#### Usage:

```cypher
CALL collections.contains_sorted([1, 2, 3.3, 4.4, 5], 2) YIELD contains
RETURN contains
```

```plaintext
+----------------------------+
| contains                   |
+----------------------------+
| true                       |
+----------------------------+
```


### `max(input_list)`

Finds the maximum element in an input list. List elements must be comparable, therefore the same type.

#### Input:

- `input_list: List[Any]` ➡ list whose maximum element we want to find


#### Output:

- `max: Any` ➡ element of an input list that is the maximum

#### Usage:

```cypher
CALL collections.max([-1, -2, -3.3]) YIELD max
RETURN max
```

```plaintext
+----------------------------+
| max                        |
+----------------------------+
| -1                         |
+----------------------------+
```


### `pairs(input_list)`

Creates pairs from the input list.

#### Input:

- `input_list: List[Any]` ➡ list from which we want to create pairs


#### Output:

- `pairs: List[Any]` ➡ list of pairs of input list's elements

#### Usage:

```cypher
CALL collections.pairs([3, "s", 4.4, [1, 2]]) YIELD pairs
RETURN pairs
```

```plaintext
+---------------------------------------------------------+
| pairs                                                   |
+---------------------------------------------------------+
| [[3, "s"], ["s", 4.4], [4.4, [1, 2]], [[1, 2], null]]   |
+---------------------------------------------------------+
```


