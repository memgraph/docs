---
id: import-util
title: import_util
sidebar_label: import_util
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

[![docs-source](https://img.shields.io/badge/source-import_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/import_util.py)


## Abstract

Module for importing files to create a graph database.

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

### `json(path)`

#### Input:

* `path: str` ➡ Path to the JSON that is being imported.

#### Usage:
The `JSON` file you're importing as a graph database needs to be structured the
same as the `JSON` file that
[`export_util.json(path)`](https://memgraph.com/docs/mage/query-modules/python/export-util)
procedure generates.

```cypher
CALL import_util.json(path);
```

## Example - Importing JSON file

<Tabs
  groupId="import_json_example"
  defaultValue="input"
  values={[
    {label: 'Step 1: Input file', value: 'input'},
    {label: 'Step 2: Running command', value: 'run'},
    {label: 'Step 3: Created database', value: 'result'},
  ]
}>
<TabItem value="input">

Below is the content of the `input.json` file. File will be saved in the `import_folder`.

```json
[
    {
        "id": 6114,
        "labels": [
            "Person"
        ],
        "properties": {
            "name": "Anna"
        },
        "type": "node"
    },
    {
        "id": 6115,
        "labels": [
            "Person"
        ],
        "properties": {
            "name": "John"
        },
        "type": "node"
    },
    {
        "id": 6116,
        "labels": [
            "Person"
        ],
        "properties": {
            "name": "Kim"
        },
        "type": "node"
    },
    {
        "end": 6115,
        "id": 21120,
        "label": "IS_FRIENDS_WITH",
        "properties": {},
        "start": 6114,
        "type": "relationship"
    },
    {
        "end": 6116,
        "id": 21121,
        "label": "IS_FRIENDS_WITH",
        "properties": {},
        "start": 6114,
        "type": "relationship"
    },
    {
        "end": 6116,
        "id": 21122,
        "label": "IS_MARRIED_TO",
        "properties": {},
        "start": 6115,
        "type": "relationship"
    }
]

```
</TabItem>

<TabItem value="run">

In this example, the input path is  `"import_folder/input.json"`:

```cypher
CALL import_util.json("import_folder/input.json");
```

</TabItem>

<TabItem value="result">
Below you can see how the data is going to look like once we import it to the database.
<img src={require('../../data/query-modules/python/import-util/import-util-1.png').default}/>

</TabItem>

</Tabs>