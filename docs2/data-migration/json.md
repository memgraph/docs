---
id: json
title: Import data from JSON files
sidebar_label: JSON
---

A JSON file is a file that stores simple data structures and objects in
JavaScript Object Notation format, which is a standard data interchange format.
The data you want to import to the database is often saved in JSON format, and
you might want to import parts of that data as graph objects - nodes or
relationships.

Data can be imported using query modules implemented in [the MAGE library](/mage):
- [`json_util`](/mage/query-modules/python/json-util) query module
- [`import_util`](/mage/query-modules/python/import-util) query module.

The difference is that `json_util.load_from_path()` has no requirements about
the formatting of data inside the JSON file, while the `import_util.json()`
procedure requires data to be formatted in a specific way. It is the same
formatting the `export_util.json()` procedure generates when it's used to export
data from Memgraph into a JSON file.  

<details>
  <summary>JSON file data format required by the <code>import_util.json()</code> procedure</summary>

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
</details>

To be able to call the procedures, you need to [install MAGE and load query
modules](/mage/how-to-guides/run-a-query-module). 

:::tip

If you can choose the format of the data you want to import, the fastest way to
import data into Memgraph is from a CSV file using the [LOAD CSV
clause](/import-data/files/load-csv-clause.md). 

:::

## Examples

Below, you can find two examples of how to load data from a JSON file depending
on the file location:
<!-- no toc -->
- [Load JSON from a local file](#load-json-from-a-local-file) 
- [Load JSON from a remote address](#load-json-from-a-remote-address)

### Load JSON from a local file

To import data from a local JSON file, you can use the
[`json_util.load_from_path()`](/mage/query-modules/python/json-util) procedure
or [`import_util.json()`](/mage/query-modules/python/import-util) procedure. 

The difference is that `json_util.load_from_path()` has no requirements about
the formatting of data inside the JSON file while the `import_util.json()`
procedure does. It is the same formatting the `export_util.json()` procedure
generates when it's used to export data from Memgraph into a JSON file.  

#### `json_util.load_from_path()` procedure

The `json_util.load_from_path()` procedure takes one string argument (`path`)
and returns a list of JSON objects from the file located at the provided path.

Let's import data from a file `data.json` with the following content:

```json
{
  "first_name": "Jessica",
  "last_name": "Rabbit",
  "pets": ["dog", "cat", "bird"]
}
```

If you are using Docker to run Memgraph, you will need to [copy the files from
your local directory into the
Docker](/how-to-guides/work-with-docker.md#how-to-copy-files-from-and-to-a-Docker-container)
container where Memgraph can access them.

To create a node with the label `Person` and `first_name`, `last_name` and `pets`
as properties, run the following query:

```cypher
CALL json_util.load_from_path("path/to/data.json")
YIELD objects
UNWIND objects AS o
CREATE (:Person {first_name: o.first_name, last_name: o.last_name, pets: o.pets});
```

<details>
  <summary>After you execute the above query, the graph in Memgraph should look like this:</summary>
  <div>
    <img src={require('../../data/import-data/load_json_from_path.png').default}/>
  </div>
</details>

####  `import_util.json()` procedure

To find out how to import data with the `import_util.json()` procedure [check
out the MAGE documentation](/mage/query-modules/python/import-util). 

### Load JSON from a remote address

To import data from a remote JSON file, use `load_from_url(url)` procedure that
takes one string argument (`url`) and returns a list of JSON objects from the
file located at the provided URL.

For example, at `"https://download.memgraph.com/asset/mage/data.json"`, you can
find the following `data.json` file:

```json
{
  "first_name": "James",
  "last_name": "Bond",
  "pets": ["dog", "cat", "fish"]
}
```

To create a node with the label `Person` and `first_name`, `last_name` and
`pets` as properties from the `data.json` file. You can run the following query:

```cypher
CALL json_util.load_from_url("https://download.memgraph.com/asset/mage/data.json")
YIELD objects
UNWIND objects AS o
CREATE (:Person {first_name: o.first_name, last_name: o.last_name, pets: o.pets});
```

<details>
  <summary>After you run the above query, the graph in Memgraph should look like this:</summary>
  <div>
    <img src={require('../../data/import-data/load_json_from_url.png').default}/>
  </div>
</details>

:::note

To load JSON files from another local or remote location, just replace the
argument of the procedure with the appropriate path or URL. If you want to
create a different kind of graph, you need to change the query accordingly. To
learn more about querying, check out the [Cypher manual](/cypher-manual).

:::
