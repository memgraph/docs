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

* `path: str` ➡ Path to the JSON file containing the exported graph database.

#### Usage:

The `path` you have to provide as procedure argument depends on how you started
Memgraph.

<Tabs
  groupId="export_to_json_usage"
  defaultValue="docker"
  values={[
    {label: 'Docker', value: 'docker'},
    {label: 'Linux', value: 'linux'},
  ]
}> 

<TabItem value="docker">

If you ran Memgraph with Docker, database will be exported to a JSON file inside
the Docker container. We recommend exporting the database to the JSON file
inside the `/usr/lib/memgraph/query_modules` directory.

You can call the procedure by running the following query:

```cypher
CALL export_util.json(path);
```
where `path` is the path to the JSON file inside the
`/usr/lib/memgraph/query_modules` directory in the running Docker container (e.g.,
`/usr/lib/memgraph/query_modules/export.json`).

:::info
You can copy the exported JSON file to your local file system using the [`docker cp`](https://docs.docker.com/engine/reference/commandline/cp/) command: 
```
docker cp <container_id>:/usr/lib/memgraph/query_modules/export.json /path_to_local_folder/export.json
```
:::
</TabItem>

<TabItem value="linux">

To export database to a local JSON file create a new directory (for example,
`export_folder`) and run the following command to give the user `memgraph` the
necessary permissions:

```
sudo chown memgraph export_folder
```

Then, call the procedure by running the following query:

```cypher
CALL export_util.json(path);
```
where `path` is the path to a local JSON file that will be created inside the
`export_folder` (e.g., `/users/my_user/export_folder/export.json`).
</TabItem>

</Tabs>

## Example - Exporting database to a JSON file

<Tabs
  groupId="export_to_json_example"
  defaultValue="input"
  values={[
    {label: 'Step 1: Cypher load commands', value: 'load'},
    {label: 'Step 2: Input graph', value: 'input'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Results', value: 'result'},
  ]
}>

<TabItem value="load">

You can create a simple graph database by running the following queries:

```cypher
CREATE (n:Person {name:"Anna"}), (m:Person {name:"John"}), (k:Person {name:"Kim"})
CREATE (n)-[:IS_FRIENDS_WITH]->(m), (n)-[:IS_FRIENDS_WITH]->(k), (m)-[:IS_MARRIED_TO]->(k);
```
</TabItem>

<TabItem value="input">

Below you can see how the data looks like after you created the nodes and relationships:

<img src={require('../../data/query-modules/python/export-util/export-util-1.png').default}/>
    
</TabItem>

<TabItem value="run">

If you're using Memgraph with Docker, then the following Cypher query will
export the database to the `export.json` file in the
`/usr/lib/memgraph/query_modules` directory inside the running Docker container.

```cypher
CALL export_util.json("/usr/lib/memgraph/query_modules/export.json");
```

If you're using Memgraph on Ubuntu, Debian, RPM package or WSL, then the
following Cypher query will export the database to the `export.json` file in the
`/users/my_user/export_folder`.

```cypher
CALL export_util.json("/users/my_user/export_folder/export.json");
```

</TabItem>

<TabItem value="result">

The local file `export.json` should be similar to the one below, except for the
`id` values that depend on the internal database `id` values:


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