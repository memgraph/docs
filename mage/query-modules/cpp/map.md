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

The `map` module offers a versatile toolkit for manipulating collections of key-value pairs, enabling advanced data operations within a graph database context.

[![docs-source](https://img.shields.io/badge/source-map-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/map_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `remove_key(input_map, key, recursive_map)`

Removes the specified key and its corresponding value from the input map. If the key does not exist in the input map, it will be ignored. Additionally, when the recursive setting is enabled, the key will also be removed from any inner maps that are part of the input map.

#### Input:

- `input_map: Map` ➡ the map from which the key will be removed.
- `key: string` ➡ the key to be removed from the map.
- `recursive_map: bool` ➡ `false` by default, should be set to `true` if the input map consists of values that are also maps and, therefore, may have the key to be removed.

#### Output:

- `removed: Map` ➡ the map after removing the specified key.

#### Usage:

```cypher
CALL map.remove_key({c: "b", d: "ba"}, "c") YIELD removed RETURN removed;
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
CALL map.remove_key({c: "b", d: {e: "ba", c: "h", a: {c: "z"}}}, "c", true) YIELD removed RETURN removed;
```

```plaintext
+----------------------------+
| removed                    |
+----------------------------+
| {"d": {"e": "ba"}}         |
+----------------------------+
```


### `from_pairs(input_list)`

Creates a map from a list of pairs, where each pair is essentially another list of size 2. The first element in each pair must be of type `string`, as it will be used as a key in the resulting map.

#### Input:

- `input_list: List[List]` ➡ list of pairs.


#### Output:

- `map: Map` ➡ a map whose keys are the first elements in pairs, and the corresponding values are the second elements in the pairs.

#### Usage:

```cypher
CALL map.from_pairs([["b", 3], ["c", "c"]]) YIELD map RETURN map;
```

```plaintext
+----------------------------+
| map                        |
+----------------------------+
| {"b": 3, "c": "c"}         |
+----------------------------+
```


### `merge(input_map1, input_map2)`

Merges two maps into one. If the same key occurs twice, the later value will overwrite the previous one.

#### Input:

- `input_map1: Map` ➡ a map containing key-value pairs that need to be merged with others.
- `input_map2: Map` ➡ another map containing key-value pairs that need to be merged with others.


#### Output:

- `merged: Map` ➡ merged input maps.

#### Usage:

```cypher
CALL map.merge({a: "b", c: "d"}, {e: "f", g: "h"}) YIELD merged RETURN merged;
```

```plaintext
+----------------------------------------+
| merged                                 |
+----------------------------------------+
| {a: "b", c: "d", e: "f", g: "h"}       |
+----------------------------------------+
```


### `flatten(map, delimiter)`

Flattens nested items in the input map.

#### Input:

- `map: Map[Any]` ➡ the map used in `flatten`.
- `delimiter: string (default = ".")` ➡ the delimiter used for flattening.


#### Output:

- `result: Map[Any]` ➡ flattened map, sorted alphabetically by keys.

#### Usage:

```cypher
CALL map.flatten({a: {b:3, d:4}},"/") YIELD result RETURN result;
```

```plaintext
+----------------------------------------+
| result                                 |
+----------------------------------------+
| {"a/b": 3, "a/d": 4}                   |
+----------------------------------------+
```

### `from_lists(list_keys, list_values)`

Makes a map from lists of keys and corresponding values.

#### Input:

- `list_keys: List[string]` ➡ the list of keys.
- `list_values` ➡ the list of values.


#### Output:

- `result: Map[Any]` ➡ the resulting map.

#### Usage:

```cypher
CALL map.from_lists(["key","key2"],[1,2]) YIELD result RETURN result;
```

```plaintext
+----------------------------------------+
| result                                 |
+----------------------------------------+
| {""key": 1, "key2": 2}                 |
+----------------------------------------+
```
### `remove_keys(input_map, keys_list, recursive)`

Removes keys from input map. If recursive option is true, will remove keys from maps nested inside the map. 

#### Input:

- `input_map: Map[Any]` ➡ the input map.
- `keys_list: List[string]` ➡ the list of keys that will be removed.
- `recursive: boolean (default = false)` ➡ true if keys from nested map shall be removed, false if not.


#### Output:

- `result: Map[Any]` ➡ the resulting map.

#### Usage:
Usage when `recursive` is `false`:

```cypher
CALL map.remove_keys({key: 1, key2:{key : 3, key3: 5}},["key"],false) YIELD result RETURN result;
```

```plaintext
+----------------------------------------+
| result                                 |
+----------------------------------------+
|{"key2": {"key": 3,"key3": 5}}          |
+----------------------------------------+
```


Usage with recursive = true:

```cypher
CALL map.remove_keys({key: 1, key2:{key : 3, key3: 5}},["key"],true) YIELD result RETURN result;
```

```plaintext
+----------------------------------------+
| result                                 |
+----------------------------------------+
|{"key2": {"key3": 5}}                   |
+----------------------------------------+
```

### `from_nodes(label, property)`

Returns a map of all nodes which contain the given label and property. The key of each map element will be the value of the property (if it is convertible to a string, otherwise throws `ValueException`).

#### Input:

- `label: string` ➡ the wanted label.
- `property: string` ➡ the wanted property.

#### Output:

- `result: Map` ➡ the resulting map.

#### Usage:
```cypher
CREATE (Oppenheimer:Movie {title:'Oppenheimer', released:2023});
CREATE (Barbie:Movie {title:"Barbie", released:2023});
CREATE (Shawshank:Movie {title:'The Shawshank Redemption', released:1994});

CALL map.from_nodes("Movie", "title") YIELD map RETURN map;
```

```plaintext
{
   "Barbie": {
      "identity": 53,
      "labels": [
         "Movie"
      ],
      "properties": {
         "released": 2023,
         "title": "Barbie"
      }
   },
   "Oppenheimer": {
      "identity": 52,
      "labels": [
         "Movie"
      ],
      "properties": {
         "released": 2023,
         "title": "Oppenheimer"
      }
   },
   "The Shawshank Redemption": {
      "identity": 54,
      "labels": [
         "Movie"
      ],
      "properties": {
         "released": 1994,
         "title": "The Shawshank Redemption"
      }
   }
}
```

### `from_values(values)`

Returns a map from the given list of values. The list has the format: `[key1, value1, key2, value2]`. If the key is not convertible to a string, throws `ValueException`.

#### Input:

- `values: List[Any]` ➡ list of values.

#### Output:

- `map: Map` ➡ the resulting map.

#### Usage:

```cypher
CALL map.from_values(["day", "sunny", 5, 6]) YIELD map RETURN map;
```

```plaintext
+----------------------------------------+
|        map                             |
+----------------------------------------+
| {"5": 6, "day": "sunny"}               |
+----------------------------------------+
```

### `set_key(map, key, value)`

Updates the value at the position `key` in `map`. If the key doesn't exist, inserts it.

#### Input:

- `map: Map` ➡ map to be modified.
- `key: string` ➡ the position in `map` to be updated.
- `value: any` ➡ new value at the position `key` in `map`.

#### Output:

- `map: Map` ➡ the modified map.

#### Usage:

```cypher
CALL map.set_key({name:"Ivan",country:"Croatia"}, "name", "Matija") YIELD map RETURN map;
```

```plaintext
+-------------------------------------------+
|                     map                   |
+-------------------------------------------+
| {"country": "Croatia", "name": "Matija"}  |
+-------------------------------------------+
```
