---
id: import-util
title: import_util
sidebar_label: import_util
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

Module for importing data from different formats. Currently, this module
supports the import of JSON and graphML file formats.

[![docs-source](https://img.shields.io/badge/source-import_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/import_util.py)


| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `json(path)`

#### Input:

* `path: string` ➡ Path to the JSON file that is being imported.

#### Usage:
The JSON file you're importing needs to be structured the same as the JSON file
that the
[`export_util.json()`](/docs/mage/query-modules/python/export-util)
procedure generates. The generated JSON file is a list of objects representing
nodes or relationships. If the object is a node, then it looks like this:

```json
{
    "id": 4000,
    "labels": [
        "City"
    ],
    "properties": {
        "id": 0,
        "name": "Amsterdam",
    },
    "type": "node"
}
```
 
The `id` key has the value of the Memgraph's internal node ide. The `labels` key
holds the information about node labels in a list. The `properties` are
key-value pairs representing the properties of a certain node. Each node needs to
have the value of `type` set to `"node"`.

On the other hand, if the object is a relationship, then it is structured like this:

```json
{
    "end": 4052,
    "id": 7175,
    "label": "CloseTo",
    "properties": {
        "eu_border": true
    },
    "start": 4035,
    "type": "relationship"
}
```

The `end` and `start` keys hold the information about the internal IDs of start
and end node of the relationship. Each relationship also has its internal id
exported as a value of `id` key. A relationship can only have one label which is
exported to the `label` key. Properties are again key-value pairs, and the value
of `type` needs to be set to `"relationship"`.


The `path` you have to provide as procedure argument depends on how you started
Memgraph.


<Tabs
  groupId="import_to_json_usage"
  defaultValue="docker"
  values={[
    {label: 'Docker', value: 'docker'},
    {label: 'Linux', value: 'linux'},
  ]
}> 

<TabItem value="docker">

If you ran Memgraph with Docker, you need to save the JSON file inside the
Docker container. We recommend saving the JSON file inside the
`/usr/lib/memgraph/query_modules` directory.

You can call the procedure by running the following query:

```cypher
CALL export_util.json(path);
```
where `path` is the path to the JSON file inside the
`/usr/lib/memgraph/query_modules` directory in the running Docker container (e.g.,
`/usr/lib/memgraph/query_modules/import.json`).

:::info
You can copy the JSON file to the running Docker container with the [`docker cp`](https://docs.docker.com/engine/reference/commandline/cp/) command: 
```
docker cp /path_to_local_folder/import.json <container_id>:/usr/lib/memgraph/query_modules/import.json
```
:::
</TabItem>

<TabItem value="linux">

To import a local JSON file call the procedure by running the following query:

```cypher
CALL export_util.json(path);
```
where `path` is the path to a local JSON file that will be created inside the
`import_folder` (e.g., `/users/my_user/import_folder/export.json`).
</TabItem>

</Tabs>

### `graphml(path, config)`

#### Input:

* `path: string` ➡ path to the graphML file that is being imported.
* `config: Map (default={})` ➡ configuration parameters explained below.

#### Parameters:

| Name 	             | Type   | Default	| Description 	                                                |
|-	                 |-	      |-	      |-	                                                            |
| readLabels          | Bool 	| False	  | Create node labels based on the value of the property whose key is "labels". 	|
| defaultRelationshipType  | String	| "RELATED"  	  | The default relationship type to use when none is specified in the import file. 	|
| storeNodeIds 	         | Bool 	| False   	| Store node's id attribute as a property.	|
| source           | Map 	| { }	  | A map that has two keys: label and id. Label is mandatory while id's default value is "id". This allows the import of relationships in case the source node is not present in the file. It will search for a source node with a specific label and a property whose key is this map's id value, and whose value is relationship's source node id. For example, with a config map `{source: {id: 'serial_number', label: 'Device'}}` and an edge defined as `<edge id="e0" source="n0" target="n1" label="CONNECT"><data key="label">CONNECT</data></edge>`, if node "n0" doesn't exist, it will search for a source node `(:Device {serial_number: "n0"})`.  |
| target     | Map 	| { }	  | A map that has two keys: label and id. Label is mandatory while id's default value is "id". This allows the import of relationships in case the target node is not present in the file. It will search for a target node with a specific label and a property whose key is this map's id value, and whose value is relationship's target node id. For example, with a config map `{target: {id: 'serial_number', label: 'Device'}}` and an edge defined as `<edge id="e0" source="n0" target="n1" label="CONNECT"><data key="label">CONNECT</data></edge>`, if node "n1" doesn't exist, it will search for a target node `(:Device {serial_number: "n1"})`.  	|

#### Output:

* `status: string` ➡ "success" if no errors are generated.

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

If you ran Memgraph with Docker, database will be exported to a graphML file inside
the Docker container. We recommend exporting the database to the graphML file
inside the `/usr/lib/memgraph/query_modules` directory.

You can call the procedure by running the following query:

```cypher
CALL export_util.graphML(path);
```
where `path` is the path to the JSON file inside the
`/usr/lib/memgraph/query_modules` directory in the running Docker container (e.g.,
`/usr/lib/memgraph/query_modules/export.graphml`).

:::info
You can [**copy the exported CSV file to your local file system**](/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container) using the [`docker cp`](https://docs.docker.com/engine/reference/commandline/cp/) command.
:::
</TabItem>

<TabItem value="linux">

To export database to a local graphML file create a new directory (for example,
`export_folder`) and run the following command to give the user `memgraph` the
necessary permissions:

```
sudo chown memgraph export_folder
```

Then, call the procedure by running the following query:

```cypher
CALL export_util.graphml(path);
```
where `path` is the path to a local JSON file that will be created inside the
`export_folder` (e.g., `/users/my_user/export_folder/export.graphml`).
</TabItem>

</Tabs>


## Example - Importing JSON file to create a database

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

Below is the content of the `import.json` file. 

- If you're using **Memgraph with Docker**, then you have to save the
  `import.json` file in the `/usr/lib/memgraph/query_modules` directory inside
  the running Docker container. 

- If you're using **Memgraph on Ubuntu, Debian, RPM package or WSL**, then you
  have to save the `import.json` file in the local
  `/users/my_user/import_folder` directory.

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

If you're using **Memgraph with Docker**, then the following Cypher query will
create a graph database from the provided JSON file:

```cypher
CALL import_util.json("/usr/lib/memgraph/query_modules/import.json");
```

If you're using **Memgraph on Ubuntu, Debian, RPM package or WSL**, then the
following Cypher query will create a graph database from the provided JSON file:

```cypher
CALL import_util.json("/users/my_user/import_folder/import.json");
```

</TabItem>

<TabItem value="result">

After you import the `import.json` file, you get the following graph database:

<img src={require('../../data/query-modules/python/import-util/import-util-1.png').default}/>

</TabItem>

</Tabs>