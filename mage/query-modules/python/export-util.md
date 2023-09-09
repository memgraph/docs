---
id: export-util
title: export_util
sidebar_label: export_util
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

Module for exporting a graph database or query results in different formats. Currently, this
module supports [**exporting database to a JSON file format**](#jsonpath), [**exporting query results in a CSV file format**](#csv_queryquery-file_path-stream) and [**exporting database to a graphML file format**](#graphmlpath-config).

[![docs-source](https://img.shields.io/badge/source-export_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/export_util.py)


| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `json(path)`

#### Input:

* `path: string` ➡ Path to the JSON file containing the exported graph database.

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
You can [**copy the exported CSV file to your local file system**](/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container) using the [`docker cp`](https://docs.docker.com/engine/reference/commandline/cp/) command.
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

### `csv_query(query, file_path, stream)`

#### Input:

* `query: string` ➡ A query from which the results will be saved to a CSV file.
* `file_path: string (default="")` ➡ A path to the CSV file where the query results will be exported. Defaults to an empty string.
* `stream: bool (default=False)` ➡ A value which determines whether a stream of query results in a CSV format will be returned.

#### Output:

* `file_path: string` ➡ A path to the CSV file where the query results are exported. If `file_path` is not provided, the output will be an empty string.
* `data: string` ➡ A stream of query results in a CSV format.

#### Usage:

The `file_path` you have to provide as procedure argument depends on how you started
Memgraph.

<Tabs
  groupId="export_to_csv_usage"
  defaultValue="docker"
  values={[
    {label: 'Docker', value: 'docker'},
    {label: 'Linux', value: 'linux'},
  ]
}> 

<TabItem value="docker">

If you ran Memgraph with Docker, query results will be exported to a CSV file inside
the Docker container. We recommend exporting the database to the CSV file
inside the `/usr/lib/memgraph/query_modules` directory.

You can call the procedure by running the following query:

```cypher
CALL export_util.csv_query(path);
```
where `path` is the path to a CSV file inside the
`/usr/lib/memgraph/query_modules` directory in the running Docker container (e.g.,
`/usr/lib/memgraph/query_modules/export.csv`).

:::info
You can [**copy the exported CSV file to your local file system**](/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container) using the [`docker cp`](https://docs.docker.com/engine/reference/commandline/cp/) command.
:::
</TabItem>

<TabItem value="linux">

To export query results to a local CSV file create a new directory (for example,
`export_folder`) and run the following command to give the user `memgraph` the
necessary permissions:

```
sudo chown memgraph export_folder
```

Then, call the procedure by running the following query:

```cypher
CALL export_util.csv_query(path);
```
where `path` is the path to a local CSV file that will be created inside the
`export_folder` (e.g., `/users/my_user/export_folder/export.csv`).
</TabItem>

</Tabs>

### `graphml(path, config)`

#### Input:

* `path: string` ➡ path to the graphML file that will contain the exported graph database.
* `config: Map (default={})` ➡ configuration parameters explained below.

#### Parameters:

| Name 	             | Type   | Default	| Description 	                                                |
|-	                 |-	      |-	      |-	                                                            |
| stream             | Bool 	| False	  | Stream the file content directly to the client into the status field. 	|
| format             | String	| " "  	  | Set the export format to either "gephi" or "tinkerpop". 	|
| caption 	         | List 	| [ ]    	| A list of keys of properties whose value is eligible as value for the "label" data element in Gephi format. Order is important and if no match is found then there is a fallback to the node's first property. If the node has no properties then the ID is used.	|
| useTypes           | Bool 	| False	  | Store property values' type information. |
| leaveOutLabels     | Bool 	| False	  | Do not store node's labels. 	|
| leaveOutProperties | Bool 	| False  	| Do not store node's properties. 	|

#### Output:

* `status: string` ➡ file content if stream is set to True in configuration parameters, "success" otherwise.

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
CALL export_util.graphml(path);
```
where `path` is the path to the graphML file inside the
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
where `path` is the path to a local graphML file that will be created inside the
`export_folder` (e.g., `/users/my_user/export_folder/export.graphml`).
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

The image below shows the above data as a graph:

<img src={require('../../data/query-modules/python/export-util/export-util-1.png').default}/>
    
</TabItem>

<TabItem value="run">

If you're using **Memgraph with Docker**, the following Cypher query will
export the database to the `export.json` file in the
`/usr/lib/memgraph/query_modules` directory inside the running Docker container.

```cypher
CALL export_util.json("/usr/lib/memgraph/query_modules/export.json");
```

If you're using **Memgraph on Ubuntu, Debian, RPM package or WSL**, the
following Cypher query will export the database to the `export.json` file in the
`/users/my_user/export_folder`.

```cypher
CALL export_util.json("/users/my_user/export_folder/export.json");
```

</TabItem>

<TabItem value="result">

The `export.json` file should be similar to the one below, except for the
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


## Example - Exporting query results to a CSV file

<Tabs
  groupId="export_to_csv_example"
  defaultValue="input_csv"
  values={[
    {label: 'Step 1: Cypher load commands', value: 'load_csv'},
    {label: 'Step 2: Input graph', value: 'input_csv'},
    {label: 'Step 3: Running command', value: 'run_csv'},
    {label: 'Step 4: Results', value: 'result_csv'},
  ]
}>

<TabItem value="load_csv">

You can create a simple graph database by running the following queries:

```cypher
CREATE (StrangerThings:TVShow {title:'Stranger Things', released:2016, program_creators:['Matt Duffer', 'Ross Duffer']})
CREATE (Eleven:Character {name:'Eleven', portrayed_by:'Millie Bobby Brown'})
CREATE (JoyceByers:Character {name:'Joyce Byers', portrayed_by:'Winona Ryder'})
CREATE (JimHopper:Character {name:'Jim Hopper', portrayed_by:'David Harbour'})
CREATE (MikeWheeler:Character {name:'Mike Wheeler', portrayed_by:'Finn Wolfhard'})
CREATE (DustinHenderson:Character {name:'Dustin Henderson', portrayed_by:'Gaten Matarazzo'})
CREATE (LucasSinclair:Character {name:'Lucas Sinclair', portrayed_by:'Caleb McLaughlin'})
CREATE (NancyWheeler:Character {name:'Nancy Wheeler', portrayed_by:'Natalia Dyer'})
CREATE (JonathanByers:Character {name:'Jonathan Byers', portrayed_by:'Charlie Heaton'})
CREATE (WillByers:Character {name:'Will Byers', portrayed_by:'Noah Schnapp'})
CREATE (SteveHarrington:Character {name:'Steve Harrington', portrayed_by:'Joe Keery'})
CREATE (MaxMayfield:Character {name:'Max Mayfield', portrayed_by:'Sadie Sink'})
CREATE (RobinBuckley:Character {name:'Robin Buckley', portrayed_by:'Maya Hawke'})
CREATE (EricaSinclair:Character {name:'Erica Sinclair', portrayed_by:'Priah Ferguson'})
CREATE
(Eleven)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(JoyceByers)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(JimHopper)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(MikeWheeler)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(DustinHenderson)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(LucasSinclair)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(NancyWheeler)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(JonathanByers)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(WillByers)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(SteveHarrington)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(MaxMayfield)-[:ACTED_IN {seasons:[2, 3, 4]}]->(StrangerThings),
(RobinBuckley)-[:ACTED_IN {seasons:[3, 4]}]->(StrangerThings),
(EricaSinclair)-[:ACTED_IN {seasons:[2, 3, 4]}]->(StrangerThings);
```
</TabItem>

<TabItem value="input_csv">

The image below shows the above data as a graph:

<img src={require('../../data/query-modules/python/export-util/export-util-csv-1.png').default}/>
    
</TabItem>

<TabItem value="run_csv">

If you're using **Memgraph with Docker**, the following Cypher query will
export the database to the `export.csv` file in the
`/usr/lib/memgraph/query_modules` directory inside the running Docker container.

```cypher
WITH "MATCH path = (c:Character)-[:ACTED_IN]->(tvshow) RETURN c.name AS name, c.portrayed_by AS portrayed_by, tvshow.title AS title, tvshow.released AS released, tvshow.program_creators AS program_creators" AS query
CALL export_util.csv_query(query, "/usr/lib/memgraph/query_modules/export.csv", True)
YIELD file_path, data
RETURN file_path, data;
```

If you're using **Memgraph on Ubuntu, Debian, RPM package or WSL**, then the
following Cypher query will export the database to the `export.csv` file in the
`/users/my_user/export_folder`.

```cypher
WITH "MATCH path = (c:Character)-[:ACTED_IN]->(tvshow) RETURN c.name AS name, c.portrayed_by AS portrayed_by, tvshow.title AS title, tvshow.released AS released, tvshow.program_creators AS program_creators" AS query
CALL export_util.csv_query(query, "/users/my_user/export_folder/export.csv", True)
YIELD file_path, data
RETURN file_path, data;
```

</TabItem>

<TabItem value="result_csv">

The output in the `export.csv` file looks like this:

```csv
name,portrayed_by,title,released,program_creators
Eleven,Millie Bobby Brown,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Joyce Byers,Winona Ryder,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Jim Hopper,David Harbour,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Mike Wheeler,Finn Wolfhard,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Dustin Henderson,Gaten Matarazzo,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Lucas Sinclair,Caleb McLaughlin,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Nancy Wheeler,Natalia Dyer,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Jonathan Byers,Charlie Heaton,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Will Byers,Noah Schnapp,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Steve Harrington,Joe Keery,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Max Mayfield,Sadie Sink,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Robin Buckley,Maya Hawke,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Erica Sinclair,Priah Ferguson,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
```
</TabItem>

</Tabs>


## Example - Exporting database to a graphML file

<Tabs
  groupId="export_to_graphml_example"
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
CREATE (StrangerThings:TVShow {title:'Stranger Things', released:2016, program_creators:['Matt Duffer', 'Ross Duffer']})
CREATE (Eleven:Character {name:'Eleven', portrayed_by:'Millie Bobby Brown'})
CREATE (JoyceByers:Character {name:'Joyce Byers', portrayed_by:'Winona Ryder'})
CREATE (JimHopper:Character {name:'Jim Hopper', portrayed_by:'David Harbour'})
CREATE (MikeWheeler:Character {name:'Mike Wheeler', portrayed_by:'Finn Wolfhard'})
CREATE (DustinHenderson:Character {name:'Dustin Henderson', portrayed_by:'Gaten Matarazzo'})
CREATE (LucasSinclair:Character {name:'Lucas Sinclair', portrayed_by:'Caleb McLaughlin'})
CREATE (NancyWheeler:Character {name:'Nancy Wheeler', portrayed_by:'Natalia Dyer'})
CREATE (JonathanByers:Character {name:'Jonathan Byers', portrayed_by:'Charlie Heaton'})
CREATE (WillByers:Character {name:'Will Byers', portrayed_by:'Noah Schnapp'})
CREATE (SteveHarrington:Character {name:'Steve Harrington', portrayed_by:'Joe Keery'})
CREATE (MaxMayfield:Character {name:'Max Mayfield', portrayed_by:'Sadie Sink'})
CREATE (RobinBuckley:Character {name:'Robin Buckley', portrayed_by:'Maya Hawke'})
CREATE (EricaSinclair:Character {name:'Erica Sinclair', portrayed_by:'Priah Ferguson'})
CREATE
(Eleven)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(JoyceByers)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(JimHopper)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(MikeWheeler)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(DustinHenderson)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(LucasSinclair)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(NancyWheeler)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(JonathanByers)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(WillByers)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(SteveHarrington)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),
(MaxMayfield)-[:ACTED_IN {seasons:[2, 3, 4]}]->(StrangerThings),
(RobinBuckley)-[:ACTED_IN {seasons:[3, 4]}]->(StrangerThings),
(EricaSinclair)-[:ACTED_IN {seasons:[2, 3, 4]}]->(StrangerThings);
```
</TabItem>

<TabItem value="input">

The image below shows the above data as a graph:

<img src={require('../../data/query-modules/python/export-util/export-util-csv-1.png').default}/>
    
</TabItem>

<TabItem value="run">

If you're using **Memgraph with Docker**, the following Cypher query will
export the database to the `export.graphml` file in the
`/usr/lib/memgraph/query_modules` directory inside the running Docker container.

```cypher
CALL export_util.graphml("/usr/lib/memgraph/query_modules/export.graphml, {useTypes: true}) 
YIELD status RETURN status;
```

If you're using **Memgraph on Ubuntu, Debian, RPM package or WSL**, the
following Cypher query will export the database to the `export.graphml` file in the
`/users/my_user/export_folder`.

```cypher
CALL export_util.graphml("/users/my_user/export_folder/export.graphml, {useTypes: true}) 
YIELD status RETURN status;
```

</TabItem>

<TabItem value="result">

The output in the `export.graphml` file looks like this:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://graphml.graphdrawing.org/xmlns/1.0/graphml.xsd">
<key id="labels" for="node" attr.name="labels" attr.type="string"/>
<key id="title" for="node" attr.name="title" attr.type="string"/>
<key id="released" for="node" attr.name="released" attr.type="int"/>
<key id="program_creators" for="node" attr.name="program_creators" attr.type="string" attr.list="string"/>
<key id="name" for="node" attr.name="name" attr.type="string"/>
<key id="portrayed_by" for="node" attr.name="portrayed_by" attr.type="string"/>
<key id="label" for="edge" attr.name="label" attr.type="string"/>
<key id="seasons" for="edge" attr.name="seasons" attr.type="string" attr.list="int"/>
<graph id="G" edgedefault="directed">
<node id="n0" labels=":TVShow"><data key="labels">:TVShow</data><data key="title">Stranger Things</data><data key="released">2016</data><data key="program_creators">["Matt Duffer", "Ross Duffer"]</data></node>
<node id="n1" labels=":Character"><data key="labels">:Character</data><data key="name">Eleven</data><data key="portrayed_by">Millie Bobby Brown</data></node>
<node id="n2" labels=":Character"><data key="labels">:Character</data><data key="name">Joyce Byers</data><data key="portrayed_by">Winona Ryder</data></node>
<node id="n3" labels=":Character"><data key="labels">:Character</data><data key="name">Jim Hopper</data><data key="portrayed_by">David Harbour</data></node>
<node id="n4" labels=":Character"><data key="labels">:Character</data><data key="name">Mike Wheeler</data><data key="portrayed_by">Finn Wolfhard</data></node>
<node id="n5" labels=":Character"><data key="labels">:Character</data><data key="name">Dustin Henderson</data><data key="portrayed_by">Gaten Matarazzo</data></node>
<node id="n6" labels=":Character"><data key="labels">:Character</data><data key="name">Lucas Sinclair</data><data key="portrayed_by">Caleb McLaughlin</data></node>
<node id="n7" labels=":Character"><data key="labels">:Character</data><data key="name">Nancy Wheeler</data><data key="portrayed_by">Natalia Dyer</data></node>
<node id="n8" labels=":Character"><data key="labels">:Character</data><data key="name">Jonathan Byers</data><data key="portrayed_by">Charlie Heaton</data></node>
<node id="n9" labels=":Character"><data key="labels">:Character</data><data key="name">Will Byers</data><data key="portrayed_by">Noah Schnapp</data></node>
<node id="n10" labels=":Character"><data key="labels">:Character</data><data key="name">Steve Harrington</data><data key="portrayed_by">Joe Keery</data></node>
<node id="n11" labels=":Character"><data key="labels">:Character</data><data key="name">Max Mayfield</data><data key="portrayed_by">Sadie Sink</data></node>
<node id="n12" labels=":Character"><data key="labels">:Character</data><data key="name">Robin Buckley</data><data key="portrayed_by">Maya Hawke</data></node>
<node id="n13" labels=":Character"><data key="labels">:Character</data><data key="name">Erica Sinclair</data><data key="portrayed_by">Priah Ferguson</data></node>
<edge id="e0" source="n1" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e1" source="n2" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e2" source="n3" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e3" source="n4" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e4" source="n5" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e5" source="n6" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e6" source="n7" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e7" source="n8" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e8" source="n9" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e9" source="n10" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[1, 2, 3, 4]</data></edge>
<edge id="e10" source="n11" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[2, 3, 4]</data></edge>
<edge id="e11" source="n12" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[3, 4]</data></edge>
<edge id="e12" source="n13" target="n0" label="ACTED_IN"><data key="label">ACTED_IN</data><data key="seasons">[2, 3, 4]</data></edge>
</graph>
</graphml>
```
</TabItem>

</Tabs>
