---
id: json-util
title: json_util
sidebar_label: json_util
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

A module for loading JSON from a local file or remote address. If the JSON that is being loaded is an array, then this module loads it as a stream of values, and if it is a map, the module loads it as a single value.

[![docs-source](https://img.shields.io/badge/source-json_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/json_util.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `load_from_path(path)`

#### Input:

* `path: string` ➡ Path to the JSON that is being loaded.

#### Output:

* `objects: List[object]` ➡ list of JSON objects from the file that is being loaded.

#### Usage:
```cypher
CALL json_util.load_from_path(path) 
YIELD objects
RETURN objects;
```

### `load_from_url(url)`

#### Input:

* `url: string` ➡ URL to the JSON that is being loaded.

#### Output:

* `objects: List[object]` ➡ list of JSON objects from the file that is being loaded.

#### Usage:
```cypher
CALL json_util.load_from_url(url) 
YIELD objects
RETURN objects;
```

## Example - Loading JSON from path

<Tabs
  groupId="load_from_path_example"
  defaultValue="file"
  values={[
    {label: 'Step 1: Input file', value: 'file'},
    {label: 'Step 2: Running command', value: 'run'},
    {label: 'Step 3: Results', value: 'result'},
  ]
}>
  <TabItem value="file">

  For example, let the input path be `"load-data/data.json"`. There we can find `data.json`:

```json
{
	"first_name": "Jessica",
	"last_name": "Rabbit",
	"pets": [
		"dog",
		"cat",
		"bird"
	]
}
```
  </TabItem>

  <TabItem value="run">

```cypher
CALL json_util.load_from_path("load-data/data.json") 
YIELD objects
UNWIND objects AS o
RETURN o.first_name AS name, o.last_name AS surname;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+------------------+-------------------+
| name             | surname           |
+------------------+-------------------+
| Jessica          | Rabbit            |
+------------------+-------------------+

```

  </TabItem>

</Tabs>


## Example - Loading JSON from URL

<Tabs
  groupId="load_from_url_example"
  defaultValue="file"
  values={[
    {label: 'Step 1: Input file', value: 'file'},
    {label: 'Step 2: Running command', value: 'run'},
    {label: 'Step 3: Results', value: 'result'},
  ]
}>
  <TabItem value="file">

  For example, let the input URL be `"https://download.memgraph.com/asset/mage/data.json"`. There we can find `data.json`:

```json
{
	"first_name": "James",
	"last_name": "Bond",
	"pets": [
		"dog",
		"cat",
		"fish"
	]
}
```
  </TabItem>

  <TabItem value="run">

```cypher
CALL json_util.load_from_url("https://download.memgraph.com/asset/mage/data.json") 
YIELD objects
UNWIND objects AS o
RETURN o.first_name AS name, o.last_name AS surname;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+------------------+-------------------+
| name             | surname           |
+------------------+-------------------+
| James            | Bond              |
+------------------+-------------------+

```

  </TabItem>

</Tabs>
