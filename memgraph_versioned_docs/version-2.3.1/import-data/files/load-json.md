---
id: load-json
title: Loading from JSON format
sidebar_label: JSON
pagination_prev: import-data/overview
---

A JSON file is a file that stores simple data structures and objects in
JavaScript Object Notation format, which is a standard data interchange format.
The data you want to import to the database is often saved in JSON format, and
you might want to import parts of that data as graph objects - nodes or
relationships.

Below, you can find two examples of how to use the load JSON methods depending
on the data source:

- [Load JSON from a local file](#load-json-from-a-local-file) 
- [Load JSON from a remote address](#load-json-from-a-remote-address)

The above methods are procedures of query module implemented in MAGE (Memgraph Advanced
Graph Extensions) and you can read more about them in the [MAGE
documentation](/mage/query-modules/python/json-util).

:::note

To be able to call JSON load procedures, you need to install MAGE and load query
modules. To learn how to do that, check out the [Run a query
module](/mage/how-to-guides/run-a-query-module) how-to guide.

:::

## Examples

The following examples will show how to load data from a local JSON file or a
remote address.

### Load JSON from a local file

To import data from a local JSON file, use `load_from_path(path)` procedure that
takes one string argument (`path`) and returns a list of JSON objects from the
file located at the provided path.

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
