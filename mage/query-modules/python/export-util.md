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
module supports [**exporting database to a JSON file format**](#jsonpath) and [**exporting query results in a CSV file format**](#csv_queryquery-file_path-stream).

[![docs-source](https://img.shields.io/badge/source-export_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/export_util.py)


| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `json(path, config)`

#### Input:

* `path: string = ""` ➡ Path to the JSON file containing the exported graph database.
* `config: Map` ➡ Map of the configuration with the following keys:
    - `stream (bool) = False:` ➡ Flag to export the graph data to a stream. By default set to false.
    - `write_properties (bool) = True:` ➡ Flag to keep node and relationship properties. By default set to true.

#### Output:

* `path: string` ➡ the path to the exported file.
* `data: string` ➡ exported data if the stream flag was set to true.

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

### `json_graph(nodes, relationships, path, config)`

Exports the given nodes and relationships to the JSON format. All nodes from the relationships have to be contained in the nodes as well.

#### Input:

* `nodes: List[Node]` ➡ list of nodes to export.
* `relationships: List[Relationship]` ➡ list of relationships to export.
* `path: string` ➡ Path to the JSON file containing the exported graph database.
* `config: Map` ➡ Map of the configuration with the following keys:
    - `stream (bool) = False:` ➡ Flag to export the graph data to a stream. By default set to false.
    - `write_properties (bool) = True:` ➡ Flag to keep node and relationship properties. By default set to true.

#### Output:

* `path: string` ➡ the path to the exported file.
* `data: string` ➡ exported data if the stream flag was set to true.

### `cypher_all(path, config)`

Exports the graph to the cypher query language in the specified file or stream.

#### Input:

* `path: string = ""` ➡ Path to the cypher file containing the exported graph database.
* `config: Map` ➡ Map of the configuration with the following keys:
    - `stream (bool) = False:` ➡ Flag to export the graph data to a stream. By default set to false.
    - `write_properties (bool) = True:` ➡ Flag to keep node and relationship properties. By default set to true.
    - `write_triggers (bool) = True:` Flag to export graph triggers.
    - `write_indexes (bool) = True:` Flag to export indexes.
    - `write_constraints (bool) = True:` Flag to export constraints.

#### Output:

* `path: string` ➡ the path to the exported file.
* `data: string` ➡ exported data if the stream flag was set to true.

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

## Example - Exporting query results to a Cypher file

Running the following on the graph above:
```cypher
CALL export_util.cypher_all("export.cyp") YIELD path RETURN path;
```
will produce the following `export.cyp` file:
```plaintext
CREATE (n:TVShow:_IMPORT_ID {title: 'Stranger Things', released: 2016, program_creators: ['Matt Duffer', 'Ross Duffer'], _IMPORT_ID: 0});
CREATE (n:Character:_IMPORT_ID {name: 'Eleven', portrayed_by: 'Millie Bobby Brown', _IMPORT_ID: 1});
CREATE (n:Character:_IMPORT_ID {name: 'Joyce Byers', portrayed_by: 'Millie Bobby Brown', _IMPORT_ID: 2});
CREATE (n:Character:_IMPORT_ID {name: 'Jim Hopper', portrayed_by: 'Millie Bobby Brown', _IMPORT_ID: 3});
CREATE (n:Character:_IMPORT_ID {name: 'Mike Wheeler', portrayed_by: 'Finn Wolfhard', _IMPORT_ID: 4});
CREATE (n:Character:_IMPORT_ID {name: 'Dustin Henderson', portrayed_by: 'Gaten Matarazzo', _IMPORT_ID: 5});
CREATE (n:Character:_IMPORT_ID {name: 'Lucas Sinclair', portrayed_by: 'Caleb McLaughlin', _IMPORT_ID: 6});
CREATE (n:Character:_IMPORT_ID {name: 'Nancy Wheeler', portrayed_by: 'Natalia Dyer', _IMPORT_ID: 7});
CREATE (n:Character:_IMPORT_ID {name: 'Jonathan Byers', portrayed_by: 'Charlie Heaton', _IMPORT_ID: 8});
CREATE (n:Character:_IMPORT_ID {name: 'Will Byers', portrayed_by: 'Noah Schnapp', _IMPORT_ID: 9});
CREATE (n:Character:_IMPORT_ID {name: 'Steve Harrington', portrayed_by: 'Joe Keery', _IMPORT_ID: 10});
CREATE (n:Character:_IMPORT_ID {name: 'Max Mayfield', portrayed_by: 'Sadie Sink', _IMPORT_ID: 11});
CREATE (n:Character:_IMPORT_ID {name: 'Robin Buckley', portrayed_by: 'Maya Hawke', _IMPORT_ID: 12});
CREATE (n:Character:_IMPORT_ID {name: 'Erica Sinclair', portrayed_by: 'Priah Ferguson', _IMPORT_ID: 13});
MATCH (n:_IMPORT_ID {_IMPORT_ID: 1}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 2}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 3}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 4}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 5}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 6}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 7}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 8}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 9}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 10}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [1, 2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 11}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 12}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [3, 4]}]->(m);
MATCH (n:_IMPORT_ID {_IMPORT_ID: 13}) MATCH (m:_IMPORT_ID {_IMPORT_ID: 0}) CREATE (n)-[:ACTED_IN {seasons: [2, 3, 4]}]->(m);
MATCH (n:_IMPORT_ID) REMOVE n:`_IMPORT_ID` REMOVE n._IMPORT_ID;
```