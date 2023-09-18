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
module supports [**exporting database to a JSON file format**](#jsonpath), [**exporting query results in a CSV file format**](#csv_queryquery-file_path-stream) and [**exporting graph nodes and relationships to CSV file format**](#csv_graphnodes_list-relationships_list-path-config).

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
CREATE (JoyceByers:Character {name:'Joyce Byers', portrayed_by:'Millie Bobby Brown'})
CREATE (JimHopper:Character {name:'Jim Hopper', portrayed_by:'Millie Bobby Brown'})
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
Joyce Byers,Millie Bobby Brown,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
Jim Hopper,Millie Bobby Brown,Stranger Things,2016,"['Matt Duffer', 'Ross Duffer']"
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


### `csv_graph(nodes_list, relationships_list, path, config)`

This function exports the given lists of nodes and relationships into a CSV file. Additional configurations can be passed inside the `config` map to further specify the export.

#### Input:

- `nodes_list: List[Node]` ➡ list of nodes which are to be exported.
- `relationships_list: List[Relationship]` ➡ list of relationships which are to be exported.
- `path: string default = ""` ➡ path where the exported file will be saved. If left as default, the file will be saved in the current directory, as `exported_file.csv` (note: path must end with the filename, for example, `folder_outer/folder/file.csv` is a valid path, `folder_outer/folder/` is not).
- `config: Map default = {}` ➡ configuration map, default is {}.

#### Configurations:

| Configuration Key | Default Value | Description |
|-------------------|---------------|-------------|
| `delimiter` | `,` | The delimiter used to separate fields in the CSV file. |
| `quotes` | `All` | The type of quoting to apply to fields in the CSV file. Possible values: `none`: no quotes added, `ifNeeded`: quotes are added only when necessary, `All`: always quote. If anything other than the presented options is passed as a config, it is as if the default value is chosen. |
| `separateHeader` | `False` | Indicates whether the CSV file header should be separated into its own file. If `True`, a file named `header.csv` will be created in the specified or default directory.|
| `stream` | `False` | Indicates whether the data should be returned as a stream rather than a file. If `True`, no file will be saved. |

#### Output:

- `data: string` ➡ if stream is `True`, a string stream representation of data, otherwise `""`.
- `path: string` ➡ path to the exported CSV file.



#### File structure:

The CSV file columns are structured this way:

| _id | _labels| node_properties_sorted | _start | _end | _type | relationship_properties_sorted |
|------|-----|--------|-------------|--------|------|-------|
|node id| node labels | alphabetically sorted properties of all nodes (all node properties present in the graph) | id of the start node of a relationship | id of the end node of a relationship | type of relationship | alphabetically sorted properties of all relationships (all relationship properties present in the graph) |

For example, consider a simple graph created with the following Cypher query:

```cypher
CREATE (d:Dog {name: "Rex", breed: "Dalmatian"})-[i:IS_OWNED_BY {rel_property: 30}]->(h:Human {name: "Carl", age: 50});
```

The `Dog` node's ID is 0, and the `Human` node's ID is 1.
Exporting would result in a CSV file structured in the following way:

| _id | _labels| age | breed | name| _start | _end | _type | rel_property |
|-----|--------|-----|-------|-----|--------|------|-------|--------------|
|0 | :Dog | | Dalmatian| Rex | | | | |
|1 | :Human | 50 | | Carl | | | | |
| | | | | | 0 | 1 | IS_OWNED_BY | 30 |


#### Usage without configurations:

In this section, simple usage without any configuration is displayed.

<Tabs
groupId="example"
defaultValue="cypher"
values={[
{label: 'Step 1: Cypher for graph creation', value: 'cypher'},
{label: 'Step 2: Graph visualization', value: 'visualization'},
{label: 'Step 3: Usage example', value: 'usage1'},
{label: 'Step 4: Csv result as a table', value: 'result1'},
{label: 'Step 5: Csv file', value: 'result2'},
]
}>

<TabItem value="cypher">

```cypher
CREATE (d:Dog {name: "Rex", breed: "Dalmatian"})-[i:IS_OWNED_BY {rel_property: 30}]->(h:Human {name: "Carl", age: 50});
CREATE (hs:Human:Soldier {branch : "Army"})-[t:TRAINS { duration: duration("P10D")}]->(d:Dog:K9 {name: "Bolt", years_of_service: 3});
```
</TabItem>

<TabItem value="visualization">

<img src={require('../../data/query-modules/python/export-util/csv_graph.png').default}/>

</TabItem>

<TabItem value="usage1">

```cypher
MATCH (n)
OPTIONAL MATCH (n)-[r]-()
WITH COLLECT(DISTINCT n) AS nodes, COLLECT(DISTINCT r) AS relationships
CALL export_util.csv_graph(nodes, relationships, "/demonstration/export/Documents/file.csv", {}) YIELD data, path RETURN data, path;
```

</TabItem>

<TabItem value="result1">

| _id | _labels | age | branch | breed | name | years_of_service | _start | _end | _type | duration | rel_property |
|-----|-----------------|-----|--------|----------|------|------------------|--------|------|-----------------|----------------------------|-----------------|
| 0 | :Dog | | | Dalmatian| Rex | | | | | | |
| 1 | :Human | 50 | | | Carl | | | | | | |
| 2 | :Human:Soldier | | Army | | | | | | | | |
| 3 | :Dog:K9 | | | | Bolt | 3 | | | | | |
| | | | | | | | 0 | 1 | IS_OWNED_BY | | 30 |
| | | | | | | | 2 | 3 | TRAINS | duration(10 days,0:00:00) | |

</TabItem>

<TabItem value="result2">

```plaintext

"_id","_labels","age","branch","breed","name","years_of_service","_start","_end","_type","duration","rel_property"
"0",":Dog","","","Dalmatian","Rex","","","","","",""
"1",":Human","50","","","Carl","","","","","",""
"2",":Human:Soldier","","Army","","","","","","","",""
"3",":Dog:K9","","","","Bolt","3","","","","",""
"","","","","","","","0","1","IS_OWNED_BY","","30"
"","","","","","","","2","3","TRAINS","duration(10 days, 0:00:00)",""

```

</TabItem>

</Tabs>


#### Usage with configurations:

In this section, usage with configurations is displayed. The same graph is used as in the usage without configurations.

##### Delimiter

Example of using a different delimiter.

<Tabs
groupId="example2"
defaultValue="usage1"
values={[
{label: 'Step 1: Usage example', value: 'usage1'},
{label: 'Step 2: Csv file', value: 'result1'},
]
}>
<TabItem value="usage1">

```cypher
MATCH (n)
OPTIONAL MATCH (n)-[r]-()
WITH COLLECT(DISTINCT n) AS nodes, COLLECT(DISTINCT r) AS relationships
CALL export_util.csv_graph(nodes, relationships, "/demonstration/export/Documents/file.csv", {delimiter : "|"}) YIELD data, path RETURN data, path;
```

</TabItem>

<TabItem value="result1">

```plaintext

"_id"|"_labels"|"age"|"branch"|"breed"|"name"|"years_of_service"|"_start"|"_end"|"_type"|"duration"|"rel_property"
"0"|":Dog"|""|""|"Dalmatian"|"Rex"|""|""|""|""|""|""
"1"|":Human"|"50"|""|""|"Carl"|""|""|""|""|""|""
"2"|":Human:Soldier"|""|"Army"|""|""|""|""|""|""|""|""
"3"|":Dog:K9"|""|""|""|"Bolt"|"3"|""|""|""|""|""
""|""|""|""|""|""|""|"0"|"1"|"IS_OWNED_BY"|""|"30"
""|""|""|""|""|""|""|"2"|"3"|"TRAINS"|"duration(10 days, 0:00:00)"|""


```

</TabItem>

</Tabs>

##### Quoting:

Example of using different quoting styles.

<Tabs
groupId="example3"
defaultValue="usage1"
values={[
{label: 'Step 1: Usage example, quoting all', value: 'usage1'},
{label: 'Step 2: Csv file, quoting all', value: 'result1'},
{label: 'Step 3: Usage example, quoting ifNeeded', value: 'usage2'},
{label: 'Step 4: Csv file, quoting ifNeeded', value: 'result2'},
{label: 'Step 5: Usage example, quoting none', value: 'usage3'},
{label: 'Step 6: Csv file, quoting none', value: 'result3'},
]
}>
<TabItem value="usage1">

```cypher
MATCH (n)
OPTIONAL MATCH (n)-[r]-()
WITH COLLECT(DISTINCT n) AS nodes, COLLECT(DISTINCT r) AS relationships
CALL export_util.csv_graph(nodes, relationships, "/demonstration/export/Documents/file.csv", {quotes : "All"}) YIELD data, path RETURN data, path;
```

</TabItem>

<TabItem value="result1">

```plaintext

"_id","_labels","age","branch","breed","name","years_of_service","_start","_end","_type","duration","rel_property"
"0",":Dog","","","Dalmatian","Rex","","","","","",""
"1",":Human","50","","","Carl","","","","","",""
"2",":Human:Soldier","","Army","","","","","","","",""
"3",":Dog:K9","","","","Bolt","3","","","","",""
"","","","","","","","0","1","IS_OWNED_BY","","30"
"","","","","","","","2","3","TRAINS","duration(10 days, 0:00:00)",""


```

</TabItem>

<TabItem value="usage2">

```cypher
MATCH (n)
OPTIONAL MATCH (n)-[r]-()
WITH COLLECT(DISTINCT n) AS nodes, COLLECT(DISTINCT r) AS relationships
CALL export_util.csv_graph(nodes, relationships, "/demonstration/export/Documents/file.csv", {quotes : "ifNeeded"}) YIELD data, path RETURN data, path;
```

</TabItem>

<TabItem value="result2">

```plaintext

_id,_labels,age,branch,breed,name,years_of_service,_start,_end,_type,duration,rel_property
0,:Dog,,,Dalmatian,Rex,,,,,,
1,:Human,50,,,Carl,,,,,,
2,:Human:Soldier,,Army,,,,,,,,
3,:Dog:K9,,,,Bolt,3,,,,,
,,,,,,,0,1,IS_OWNED_BY,,30
,,,,,,,2,3,TRAINS,"duration(10 days, 0:00:00)",

```

</TabItem>

<TabItem value="usage3">

```cypher
MATCH (n)
OPTIONAL MATCH (n)-[r]-()
WITH COLLECT(DISTINCT n) AS nodes, COLLECT(DISTINCT r) AS relationships
CALL export_util.csv_graph(nodes, relationships, "/demonstration/export/Documents/file.csv", {quotes : "none"}) YIELD data, path RETURN data, path;
```

</TabItem>

<TabItem value="result3">

```plaintext

_id,_labels,age,branch,breed,name,years_of_service,_start,_end,_type,duration,rel_property
0,:Dog,,,Dalmatian,Rex,,,,,,
1,:Human,50,,,Carl,,,,,,
2,:Human:Soldier,,Army,,,,,,,,
3,:Dog:K9,,,,Bolt,3,,,,,
,,,,,,,0,1,IS_OWNED_BY,,30
,,,,,,,2,3,TRAINS,duration(10 days\, 0:00:00),


```

</TabItem>

</Tabs>


##### SeparateHeader:

Example of separating the header.

<Tabs
groupId="example4"
defaultValue="usage1"
values={[
{label: 'Step 1: Usage example, quoting all', value: 'usage1'},
{label: 'Step 2: Header CSV file', value: 'header'},
{label: 'Step 3: Rest of the CSV file', value: 'csv'},
]
}>
<TabItem value="usage1">

```cypher
MATCH (n)
OPTIONAL MATCH (n)-[r]-()
WITH COLLECT(DISTINCT n) AS nodes, COLLECT(DISTINCT r) AS relationships
CALL export_util.csv_graph(nodes, relationships, "/demonstration/export/Documents/file.csv", {separateHeader: true}) YIELD data, path RETURN data, path;
```

</TabItem>

<TabItem value="header">

```plaintext

"_id","_labels","age","branch","breed","name","years_of_service","_start","_end","_type","duration","rel_property"

```

</TabItem>

<TabItem value="csv">

```plaintext
"0",":Dog","","","Dalmatian","Rex","","","","","",""
"1",":Human","50","","","Carl","","","","","",""
"2",":Human:Soldier","","Army","","","","","","","",""
"3",":Dog:K9","","","","Bolt","3","","","","",""
"","","","","","","","0","1","IS_OWNED_BY","","30"
"","","","","","","","2","3","TRAINS","duration(10 days, 0:00:00)",""

```

</TabItem>

</Tabs>

##### Stream:

Example of exporting a file to stream. When stream is `True`, the CSV file is not saved, so the file path can be set as `""`, as it will be ignored.


```cypher
MATCH (n)
OPTIONAL MATCH (n)-[r]-()
WITH COLLECT(DISTINCT n) AS nodes, COLLECT(DISTINCT r) AS relationships
CALL export_util.csv_graph(nodes, relationships, "", {stream: True}) YIELD data, path RETURN data;
```

Stream: 

```plaintext	
"_id","_labels","age","branch","breed","name","years_of_service","_start","_end","_type","duration","rel_property"
"0",":Dog","","","Dalmatian","Rex","","","","","",""
"1",":Human","50","","","Carl","","","","","",""
"2",":Human:Soldier","","Army","","","","","","","",""
"3",":Dog:K9","","","","Bolt","3","","","","",""
"","","","","","","","0","1","IS_OWNED_BY","","30"
"","","","","","","","2","3","TRAINS","duration(10 days, 0:00:00)",""

```