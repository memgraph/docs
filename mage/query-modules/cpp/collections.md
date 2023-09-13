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

The collections module is a collection manipulation module that offers functions to work with lists in Cypher queries, allowing operations like filtering, sorting, and modification for efficient data handling.

[![docs-source](https://img.shields.io/badge/source-collections-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/collections_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `remove_all(input_list, to_remove_list)`

Removes elements from the input list. If a non-existent element is passed, it will be ignored.

#### Input:

- `input_list: List[Any]` ➡ the list from which elements are to be removed.
- `to_remove_list: List[Any]` ➡ the list of elements to be removed.


#### Output:

- `removed: List[Any]` ➡ the input list after removing the specified elements.

#### Usage:

```cypher
CALL collections.remove_all([1, 2, 3, 4, 5], [1, 2, 3, 7]) YIELD removed RETURN removed;
```

```plaintext
+----------------------------+
| removed                    |
+----------------------------+
| [4, 5]                     |
+----------------------------+
```


### `sum(input_list)`

Calculates the sum of list elements if they are of the same type and can be summed (numeric). If the types are not the same, an exception is thrown. 

#### Input:

- `input_list: List[Any]` ➡ list of elements to be summed up.


#### Output:

- `sum: double` ➡ the sum of all elements in the input list.

#### Usage:

```cypher
CREATE (:A {id:5});
MATCH (a:A) CALL collections.sum([1, 2.3, -4, a.id]) YIELD sum RETURN sum;
```

```plaintext
+----------------------------+
| sum                        |
+----------------------------+
| 4.3                        |
+----------------------------+
```


### `union(input_list1, input_list2)`

Unites two lists into one, eliminating duplicates.

#### Input:

- `input_list1: List[Any]` ➡ the first list of elements to be united with another list.
- `input_list2: List[Any]` ➡ the second list of elements to be united with another list.


#### Output:

- `union: List[Any]` ➡ the union of the inputed lists.

#### Usage:

```cypher
CALL collections.union([0, 1, 2, 3], [2, 2, 3, 4, 5]) YIELD union RETURN union;
```

```plaintext
+----------------------------+
| union                      |
+----------------------------+
| [0, 1, 2, 3, 4, 5]         |
+----------------------------+
```


### `sort(input_list)`

Sorts the elements of an input list if they are of the same type. If they are not of the same type, an exception is thrown.

#### Input:

- `input_list: List[Any]` ➡ list of elements to be sorted.


#### Output:

- `sorted: List[Any]` ➡ list with sorted elements.

#### Usage:

```cypher
CALL collections.sort([1, 4, 2.3, -5]) YIELD sorted RETURN sorted;
```

```plaintext
+----------------------------+
| sorted                     |
+----------------------------+
| [-5, 1, 2.3, 4]            |
+----------------------------+
```


### `contains_sorted(input_list, element)`

Verifies the presence of a certain element in a sorted list. If an unsorted list is passed, there is no guarantee that the result will be correct. For the input list to be sorted, its elements must be comparable and of the same type.

#### Input:

- `input_list: List[Any]` ➡ the target list for element search.
- `element: Any` ➡ the element being searched for.


#### Output:

- `contains: bool` ➡ `true` if the element was found, `false` otherwise.

#### Usage:

```cypher
CALL collections.contains_sorted([1, 2, 3.3, 4.4, 5], 2) YIELD contains RETURN contains;
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

- `input_list: List[Any]` ➡ the list for finding the maximum element.


#### Output:

- `max: Any` ➡ the maximum element of the input list.

#### Usage:

```cypher
CALL collections.max([-1, -2, -3.3]) YIELD max RETURN max;
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

- `input_list: List[Any]` ➡ the list used to create pairs.


#### Output:

- `pairs: List[Any]` ➡ the list containing pairs of elements from the input list.

#### Usage:

```cypher
CALL collections.pairs([3, "s", 4.4, [1, 2]]) YIELD pairs RETURN pairs;
```

```plaintext
+---------------------------------------------------------+
| pairs                                                   |
+---------------------------------------------------------+
| [[3, "s"], ["s", 4.4], [4.4, [1, 2]], [[1, 2], null]]   |
+---------------------------------------------------------+
```


### `contains(list, value)`

Verifies if the input value exists in the input list.

#### Input:

- `list: List[Any]` ➡ the input list on which `contains` is called.
- `value: Any` ➡ the input value that is being searched for in the list.


#### Output:

- `output: boolean` ➡ `true` if the value is present in the list, otherwise `false`.

#### Usage:

```cypher
CALL collections.contains([1,2,3], "e") YIELD output RETURN output;
```

```plaintext
+---------------------------------------------------------+
| output                                                  |
+---------------------------------------------------------+
| false                                                   |
+---------------------------------------------------------+
```

### `min(list)`

Returns the minimum value within the list. Throws an exception if the elements in the list are not of a uniform data type or if the data type does not support comparison operations.

#### Input:

- `list: List[Any]` ➡ the input list on which the `min` function is called.

#### Output:

- `min: Any` ➡ the minimum value of the list.

#### Usage:

```cypher
CALL collections.min([1,2,3]) YIELD min RETURN min;
```

```plaintext
+---------------------------------------------------------+
| min                                                     |
+---------------------------------------------------------+
| 1                                                       |
+---------------------------------------------------------+
```

### `union_all(list1, list2)`

Returns the union of two input lists, including duplicates.

#### Input:

- `list1: List[Any]` ➡ the first list to be used in the `union_all` operation.
- `list2: List[Any]` ➡ the second list to be used in the `union_all` operation.

#### Output:

- `return_list: List[Any]` ➡ the union of two lists, including duplicates.

#### Usage:

```cypher
CALL collections.union_all([1,1,2,3],[3,"a","b","c"]) YIELD return_list RETURN return_list;
```

```plaintext
+---------------------------------------------------------+
| return_list                                             |
+---------------------------------------------------------+
| [1,1,2,3,3,"a","b","c"]                                 |
+---------------------------------------------------------+
```

### `to_set(list)`

Converts the input list to a set.

#### Input:

- `list: List[Any]` ➡ the list that is to be converted into a set.

#### Output:

- `result: List[Any]` ➡ the set returned as an `mgp::List` data type.

#### Usage:

```cypher
CALL collections.to_set([1,2,1,2,3]) YIELD result RETURN result;
```

```plaintext
+---------------------------------------------------------+
| result                                                  |
+---------------------------------------------------------+
| [3,2,1]                                                 |
+---------------------------------------------------------+
```

### `partition(list, partition_size)`

Partitions the input list into sub-lists of the specified `partition_size`.

#### Input:

- `list: List[Any]` ➡ the list that is to be partitioned.
- `partition_size: integer` ➡ the size of the sub-lists.

#### Output:

- `result: List[Any]` ➡ the partitioned sub-lists.

#### Usage:

```cypher
CALL collections.partition([1,2,3,4,5,6],2) YIELD result RETURN result;
```

```plaintext
+---------------------------------------------------------+
| result                                                  |
+---------------------------------------------------------+
| [1,2]                                                   |
+---------------------------------------------------------+
| [3,4]                                                   |
+---------------------------------------------------------+
| [5,6]                                                   |
+---------------------------------------------------------+
```

### `sum_longs(numbers)`

Calculates the sum of list elements casted to integers. The initial list elements have to be of type `Numeric`, or an exception is thrown.

#### Input:

- `numbers: List[Any]` ➡ list of numbers.

#### Output:

- `sum: integer` ➡ sum of list elements.

#### Usage:

```cypher
CALL collections.sum_longs([1.9, 1.9]) YIELD sum RETURN sum;
```

```plaintext
+---------------------------------------------------------+
| sum                                                     |
+---------------------------------------------------------+
| 2                                                       |
+---------------------------------------------------------+
```

### `avg(numbers)`

Calculates the average of list elements.

#### Input:

- `numbers: List[Any]` ➡ list of numbers.

#### Output:

- `average: double` ➡ average of list elements.

#### Usage:

```cypher
CALL collections.avg([5, 5, 6, 7, -5]) YIELD average RETURN average;
```

```plaintext
+---------------------------------------------------------+
| average                                                 |
+---------------------------------------------------------+
| 3.6                                                     |
+---------------------------------------------------------+
```

### `contains_all(collection, values)`

Checks if a list contains all the values from another list.

#### Input:

- `collection: List[Any]` ➡ the target list for value search.
- `values: List[Any]` ➡ values being searched for in the target list.

#### Output:

- `contained: boolean` ➡ true if all elements of `values` are contained in the `collection`.

#### Usage:

```cypher
CALL collections.contains_all([1, 2, 3, "pero"], [1, 1, 1, 1, 2, 3]) YIELD contained RETURN contained;
```

```plaintext
+---------------------------------------------------------+
| contained                                               |
+---------------------------------------------------------+
| true                                                    |
+---------------------------------------------------------+
```

### `intersection(first, second)`

Returns the unique intersection of two lists.

#### Input:

- `first: List[Any]` ➡ the first list being used in `intersection`.
- `second: List[Any]` ➡ the first list being used in `intersection`.

#### Output:

- `intersection: List[Any]` ➡ unique intersection of the two lists.

#### Usage:

```cypher
CALL collections.intersection([1, 1, 2, 3, 4, 5], [1, 1, 3, 5, 7, 9]) YIELD intersection RETURN intersection;
```

```plaintext
+---------------------------------------------------------+
| intersection                                            |
+---------------------------------------------------------+
| [3, 5, 1]                                               |
+---------------------------------------------------------+
```
