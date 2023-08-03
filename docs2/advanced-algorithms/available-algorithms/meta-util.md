---
title: meta_util
sidebar_label: meta_util
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

A module that contains procedures describing graphs on a meta-level.

[![docs-source](https://img.shields.io/badge/source-meta_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/meta_util.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `schema(include_properties)`

Knowing what kind of data, that is, what kind of nodes and relationships, are stored inside the database and how they're connected can be helpful. Besides that, each node or relationship can have a set of properties, and while loading the data in the database, you should be sure that a certain amount of graph objects has a particular property. That's where the number of graph objects with a particular property (property count) might come in handy. 

The `schema()` procedure returns a list of distinct relationships connecting distinct nodes, that is, a graph schema. If `include_properties` is set to `true`, the graph schema will contain additional information about properties. 

#### Input:

* `include_properties: bool (default=false)` ➡ If set to `true`, the graph schema will include properties count information. 

#### Output:

* `nodes: List[Map]` ➡ List of distinct node objects with their count. If `include_properties` is set to `true`, the node object contains properties count too.
* `relationships: List[Map]` ➡ List of distinct relationship objects with their count. If `include_properties` is set to `true`, the relationship object contains properties count too.

#### Usage:
Get graph schema without properties count:
```cypher
CALL meta_util.schema() 
YIELD nodes, relationships 
RETURN nodes, relationships;
```

Get graph schema with properties count:
```cypher
CALL meta_util.schema(true) 
YIELD nodes, relationships 
RETURN nodes, relationships;
```

:::info
The queries above will return results in the graph view only in Memgraph Lab version >= 2.4.0. For earlier versions of the Memgraph Lab, call `UNWIND` on returned object properties nodes and edges.
:::

## Example - Get graph schema without properties count

<Tabs
  groupId="get_schema_without_props"
  defaultValue="graph1"
  values={[
    {label: 'Create a graph', value: 'graph1'},
    {label: 'Run the command', value: 'run1'},
    {label: 'Graph result', value: 'graph-result1'},
    {label: 'Data result - nodes', value: 'data-result-nodes1'},
    {label: 'Data result - relationships', value: 'data-result-relationships1'},
  ]
}>
  <TabItem value="graph1">

  Create a graph by running the following Cypher query:

```cypher
CREATE (n:Person {name: "Kate", age: 27})-[:IS_FRIENDS_WITH]->(m:Person:Student {name: "James", age: 30, year: "second"})-[:STUDIES_AT]->(:University {name: "University of Vienna"})
WITH n, m
CREATE (n)-[:LIVES_IN]->(:City {name: "Zagreb"})<-[:LIVES_IN]-(m);
```
  </TabItem>

  <TabItem value="run1">

Once the graph is created, run the following code to call the `schema` procedure:

```cypher
CALL meta_util.schema() 
YIELD nodes, relationships 
RETURN nodes, relationships;
```

  </TabItem>


  <TabItem value="graph-result1">

The graph result of the `schema` procedure can be seen in Memgraph Lab, and it looks like this:
<!-- 
<div style={{textAlign:"center"}}> -->
<div className={"imgRow"}>
<div className={"imgColumn"}>
<img src={require('../../data/query-modules/python/meta_util/meta_result.png').default}/>
</div>
<div className={"imgColumn"}>
<img src={require('../../data/query-modules/python/meta_util/meta_result_count_without_props.png').default}/>
</div>
</div>
  </TabItem>

<TabItem value="data-result-nodes1">

Memgraph Lab can also return data results - a list of nodes and a list of relationships. Here is the obtained list of nodes:

```json
[
   {
      "id": 0,
      "labels": [
         "Person"
      ],
      "properties": {
         "count": 1
      },
      "type": "node"
   },
   {
      "id": 1,
      "labels": [
         "Person",
         "Student"
      ],
      "properties": {
         "count": 1
      },
      "type": "node"
   },
   {
      "id": 2,
      "labels": [
         "University"
      ],
      "properties": {
         "count": 1
      },
      "type": "node"
   },
   {
      "id": 3,
      "labels": [
         "City"
      ],
      "properties": {
         "count": 1
      },
      "type": "node"
   }
]
```
  </TabItem>
  <TabItem value="data-result-relationships1">

Here is the obtained list of relationships:

```json
[
   {
      "end": 1,
      "id": 0,
      "label": "IS_FRIENDS_WITH",
      "properties": {
         "count": 1
      },
      "start": 0,
      "type": "relationship"
   },
   {
      "end": 3,
      "id": 1,
      "label": "LIVES_IN",
      "properties": {
         "count": 1
      },
      "start": 0,
      "type": "relationship"
   },
   {
      "end": 2,
      "id": 2,
      "label": "STUDIES_AT",
      "properties": {
         "count": 1
      },
      "start": 1,
      "type": "relationship"
   },
   {
      "end": 3,
      "id": 3,
      "label": "LIVES_IN",
      "properties": {
         "count": 1
      },
      "start": 1,
      "type": "relationship"
   }
]
```
  </TabItem>

</Tabs>


## Example - Get graph schema with properties count

<Tabs
  groupId="get_schema"
  defaultValue="graph"
  values={[
    {label: 'Create a graph', value: 'graph'},
    {label: 'Run the command', value: 'run'},
    {label: 'Graph result', value: 'graph-result'},
    {label: 'Data result - nodes', value: 'data-result-nodes'},
    {label: 'Data result - relationships', value: 'data-result-relationships'},
  ]
}>
  <TabItem value="graph">

  Create a graph by running the following Cypher query:

```cypher
CREATE (n:Person {name: "Kate", age: 27})-[:IS_FRIENDS_WITH]->(m:Person:Student {name: "James", age: 30, year: "second"})-[:STUDIES_AT]->(:University {name: "University of Vienna"})
WITH n, m
CREATE (n)-[:LIVES_IN]->(:City {name: "Zagreb"})<-[:LIVES_IN]-(m);
```
  </TabItem>

  <TabItem value="run">

Once the graph is created, run the following code to call the `schema` procedure:

```cypher
CALL meta_util.schema(true) 
YIELD nodes, relationships 
RETURN nodes, relationships;
```

  </TabItem>


  <TabItem value="graph-result">

The graph result of the `schema` procedure can be seen in Memgraph Lab, and it looks like this:
<!-- 
<div style={{textAlign:"center"}}> -->
<div className={"imgRow"}>
<div className={"imgColumn"}>
<img src={require('../../data/query-modules/python/meta_util/meta_result.png').default}/>
</div>
<div className={"imgColumn"}>
<img src={require('../../data/query-modules/python/meta_util/meta_result_count.png').default}/>
</div>
</div>
  </TabItem>

<TabItem value="data-result-nodes">

Memgraph Lab can also return data results - a list of nodes and a list of relationships. Here is the obtained list of nodes:

```json
[
   {
      "id": 0,
      "labels": [
         "Person"
      ],
      "properties": {
         "count": 1,
         "properties_count": {
            "age": 1,
            "name": 1
         }
      },
      "type": "node"
   },
   {
      "id": 1,
      "labels": [
         "Person",
         "Student"
      ],
      "properties": {
         "count": 1,
         "properties_count": {
            "age": 1,
            "name": 1,
            "year": 1
         }
      },
      "type": "node"
   },
   {
      "id": 2,
      "labels": [
         "University"
      ],
      "properties": {
         "count": 1,
         "properties_count": {
            "name": 1
         }
      },
      "type": "node"
   },
   {
      "id": 3,
      "labels": [
         "City"
      ],
      "properties": {
         "count": 1,
         "properties_count": {
            "name": 1
         }
      },
      "type": "node"
   }
]
```
  </TabItem>
  <TabItem value="data-result-relationships">

Here is the obtained list of relationships:

```json
[
   {
      "end": 1,
      "id": 0,
      "label": "IS_FRIENDS_WITH",
      "properties": {
         "count": 1,
         "properties_count": {}
      },
      "start": 0,
      "type": "relationship"
   },
   {
      "end": 3,
      "id": 1,
      "label": "LIVES_IN",
      "properties": {
         "count": 1,
         "properties_count": {}
      },
      "start": 0,
      "type": "relationship"
   },
   {
      "end": 2,
      "id": 2,
      "label": "STUDIES_AT",
      "properties": {
         "count": 1,
         "properties_count": {}
      },
      "start": 1,
      "type": "relationship"
   },
   {
      "end": 3,
      "id": 3,
      "label": "LIVES_IN",
      "properties": {
         "count": 1,
         "properties_count": {}
      },
      "start": 1,
      "type": "relationship"
   }
]
```
  </TabItem>

</Tabs>
