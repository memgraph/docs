---
id: export-util
title: export_util
sidebar_label: export_util
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

[![docs-source](https://img.shields.io/badge/source-export_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/export_util.py)


## Abstract

Module for exporting a graph database in different formats.

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

### `json(path)`

#### Input:

* `path: str` ➡ Path to the file where JSON will be saved.

#### Usage:
To export database to a local `JSON` file create a new folder (for example,
`export_folder`). Place yourself in the folder containing that new folder
(`export_folder`), and run the following command in the terminal to give the
user `memgraph` the necessary permissions:

```
sudo chown memgraph export_folder
```

Then, call the procedure by running:

```cypher
CALL export_util.json(path);
```

## Example - Exporting JSON to a local file

<Tabs
  groupId="export_to_json_example"
  defaultValue="input"
  values={[
    {label: 'Step 1: Input graph', value: 'input'},
    {label: 'Step 2: Cypher load commands', value: 'load'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Results', value: 'result'},
  ]
}>
<TabItem value="input">
Below you can see how the data is going to look like once we create the nodes and relationships.
<img src={require('../../data/query-modules/python/export-util/export-util-1.png').default}/>
    
</TabItem>

<TabItem value="load">


Run the following queries in order to import the data into the database:

```cypher
CREATE (n:Person {name:"Anna"}), (m:Person {name:"John"}), (k:Person {name:"Kim"})
CREATE (n)-[:IS_FRIENDS_WITH]->(m), (n)-[:IS_FRIENDS_WITH]->(k), (m)-[:IS_MARRIED_TO]->(k);
```
</TabItem>

<TabItem value="run">

This Cypher query will export the database to the `output.json` file inside the local folder `export_folder`.

```cypher
CALL export_util.json("export_folder/output.json");
```
</TabItem>

<TabItem value="result">

The local file `output.json` should be similar to the one below (except for the
`id` values that depend on the internal database `id`):


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

</Tabs>