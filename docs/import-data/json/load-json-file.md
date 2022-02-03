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

The above methods are implemented as query modules in MAGE (Memgraph Advanced
Graph Extensions) and you can read more about them in the [MAGE
documentation](/mage/query-modules/python/json-util).

> To be able to call JSON load procedures, you need to install MAGE and load
> query modules. For instructions on how to do that, check out the MAGE [quick
> start](/mage#quick-start).

## Examples

### Load JSON from a local file

Let's import a simple JSON file into Memgraph.

Create the file `data.json` with the following content:

```json
{
  "first_name": "Jessica",
  "last_name": "Rabbit",
  "pets": ["dog", "cat", "bird"]
}
```

Next, let's say you want to create a node with the label `Person` and
`first_name`, `last_name` and `pets` as properties. You can run the following
query:

```cypher
CALL json_util.load_from_path("path/to/data.json")
YIELD objects
UNWIND objects AS o
CREATE (:Person {first_name: o.first_name, last_name: o.last_name, pets: o.pets});
```

<details>
  <summary>After you execute the above query, the graph in Memgraph should look like this:</summary>
  <div>
    <img src={require('../../data/import-data/load_json_file_from_path.png').default}/>
  </div>
</details>

### Load JSON from a remote address

Similarly, you can import JSON files from a remote address.

For example, at `"https://download.memgraph.com/asset/mage/data.json"`, you can
find the following `data.json` file:

```json
{
  "first_name": "James",
  "last_name": "Bond",
  "pets": ["dog", "cat", "fish"]
}
```

Next, let's say you want to create a node with the label `Person` and
`first_name`, `last_name` and `pets` as properties from the `data.json` file.
You can run the following query:

```cypher
CALL json_util.load_from_url("https://download.memgraph.com/asset/mage/data.json")
YIELD objects
UNWIND objects AS o
CREATE (:Person {first_name: o.first_name, last_name: o.last_name, pets: o.pets});
```

<details>
  <summary>After you run the above query, the graph in Memgraph should look like this:</summary>
  <div>
    <img src={require('../../data/import-data/load_json_file_from_url.png').default}/>
  </div>
</details>

> To load JSON files from another local or remote location, just replace the
> argument of the procedure with the appropriate path or URL. If you want to
> create a different kind of graph, you need to change the query accordingly. To
> learn more about querying, check out the [Cypher manual](/cypher-manual).
