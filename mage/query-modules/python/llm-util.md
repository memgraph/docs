---
id: llm-util
title: llm_util
sidebar_label: llm_util
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

<!-- TODO - update link -->
[![docs-source](https://img.shields.io/badge/source-llm_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/json_util.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### schema(output_type)

The `schema()` procedure generates the graph database schema in a **prompt-ready** or **raw** format. The prompt-ready format is optimized to describe the database schema in words best recognized by large language models (LLMs). The raw format offers all the necessary information about the graph schema in a format that can be customized for later use with LLMs.

#### Input:

* `output_type: str (default='prompt_ready')` ➡ By default, the graph schema will include additional context and it will be prompt-ready. If set to 'raw', it will produce a simpler version that can be adjusted for the prompt.

#### Output:

* `schema: mgp.Any` ➡ `str` containing prompt-ready graph schema description in a format suitable for large language models (LLMs), or `mgp.List` containing information on graph schema in raw format which can customized for LLMs. 

#### Usage:
Get **prompt-ready graph schema**:
```cypher
CALL llm_util.schema() YIELD schema RETURN schema;
```
or
```cypher
CALL llm_util.schema('prompt_ready') YIELD schema RETURN schema;
```

Get **raw graph schema**:
```cypher
CALL llm_util.schema('raw') YIELD schema RETURN schema;
```

:::note
The `output_type` is case-insensitive. 
:::


## Example - Get prompt-ready graph schema

<Tabs
  groupId="get_prompt_ready_schema"
  defaultValue="graph1"
  values={[
    {label: 'Create a graph', value: 'graph1'},
    {label: 'Database schema', value: 'schema1'},
    {label: 'Run the command', value: 'run1'},
    {label: 'Result', value: 'result1'},
  ]
}>
  <TabItem value="graph1">

  Create a graph by running the following Cypher query:


```cypher
CREATE (n:Person {name: "Kate", age: 27})-[:IS_FRIENDS_WITH {since: "2023-06-21"}]->(m:Person:Student {name: "James", age: 30, year: "second"})-[:STUDIES_AT]->(:University {name: "University of Zagreb"}) CREATE (p:Person:Student {name: "Anthony", age: 25})-[:STUDIES_AT]->(:University {name: "University of Vienna"}) 
WITH n, m 
CREATE (n)-[:LIVES_IN]->(:City {name: "Zagreb"})<-[:LIVES_IN]-(m);
```
  </TabItem>

<TabItem value="schema1">
The schema of the created graph can be seen in Memgraph Lab, under the <em>Graph Schema</em> tab:

<div className={"imgSmaller"}>
<img src={require('../../data/query-modules/python/llm-util/memgraph-lab-schema.png').default}/>
</div>

</TabItem>

<TabItem value="run1">

Once the graph is created, run the following code to call the <code>schema</code> procedure:


```cypher
CALL llm_util.schema() YIELD schema RETURN schema;
```

or 

```cypher
CALL llm_util.schema('prompt_ready') YIELD schema RETURN schema;
```

</TabItem>

<TabItem value="result1">

Below is the result of running the <code>schema</code> procedure:


```
Node properties are the following:
Node name: 'Person', Node properties: [{'property': 'name', 'type': 'str'}, {'property': 'age', 'type': 'int'}, {'property': 'year', 'type': 'str'}]
Node name: 'Student', Node properties: [{'property': 'name', 'type': 'str'}, {'property': 'age', 'type': 'int'}, {'property': 'year', 'type': 'str'}]
Node name: 'University', Node properties: [{'property': 'name', 'type': 'str'}]
Node name: 'City', Node properties: [{'property': 'name', 'type': 'str'}]

Relationship properties are the following:
Relationship Name: 'IS_FRIENDS_WITH', Relationship Properties: [{'property': 'since', 'type': 'str'}]

The relationships are the following:
['(:Person)-[:IS_FRIENDS_WITH]->(:Person)']
['(:Person)-[:IS_FRIENDS_WITH]->(:Student)']
['(:Person)-[:LIVES_IN]->(:City)']
['(:Person)-[:STUDIES_AT]->(:University)']
['(:Student)-[:STUDIES_AT]->(:University)']
['(:Student)-[:LIVES_IN]->(:City)']
```

</TabItem>



</Tabs>

## Example - Get raw graph schema

<Tabs
  groupId="get_raw_schema"
  defaultValue="graph2"
  values={[
    {label: 'Create a graph', value: 'graph2'},
    {label: 'Database schema', value: 'schema2'},
    {label: 'Run the command', value: 'run2'},
    {label: 'Result', value: 'result2'},
  ]
}>
  <TabItem value="graph2">

  Create a graph by running the following Cypher query:


```cypher
CREATE (n:Person {name: "Kate", age: 27})-[:IS_FRIENDS_WITH {since: "2023-06-21"}]->(m:Person:Student {name: "James", age: 30, year: "second"})-[:STUDIES_AT]->(:University {name: "University of Zagreb"}) CREATE (p:Person:Student {name: "Anthony", age: 25})-[:STUDIES_AT]->(:University {name: "University of Vienna"}) 
WITH n, m 
CREATE (n)-[:LIVES_IN]->(:City {name: "Zagreb"})<-[:LIVES_IN]-(m);
```
  </TabItem>

<TabItem value="schema2">
The schema of the created graph can be seen in Memgraph Lab, under the <em>Graph Schema</em> tab:

<div className={"imgSmaller"}>
<img src={require('../../data/query-modules/python/llm-util/memgraph-lab-schema.png').default}/>
</div>

</TabItem>

<TabItem value="run2">

Once the graph is created, run the following code to call the <code>schema</code> procedure:


```cypher
CALL llm_util.schema('raw') YIELD schema RETURN schema;
```

</TabItem>

<TabItem value="result2">

Below is the result of running the <code>schema</code> procedure:


```
{
   "node_props": {
      "City": [
         {
            "property": "name",
            "type": "str"
         }
      ],
      "Person": [
         {
            "property": "name",
            "type": "str"
         },
         {
            "property": "age",
            "type": "int"
         },
         {
            "property": "year",
            "type": "str"
         }
      ],
      "Student": [
         {
            "property": "name",
            "type": "str"
         },
         {
            "property": "age",
            "type": "int"
         },
         {
            "property": "year",
            "type": "str"
         }
      ],
      "University": [
         {
            "property": "name",
            "type": "str"
         }
      ]
   },
   "rel_props": {
      "IS_FRIENDS_WITH": [
         {
            "property": "since",
            "type": "str"
         }
      ]
   },
   "relationships": [
      {
         "end": "Person",
         "start": "Person",
         "type": "IS_FRIENDS_WITH"
      },
      {
         "end": "Student",
         "start": "Person",
         "type": "IS_FRIENDS_WITH"
      },
      {
         "end": "City",
         "start": "Person",
         "type": "LIVES_IN"
      },
      {
         "end": "University",
         "start": "Person",
         "type": "STUDIES_AT"
      },
      {
         "end": "University",
         "start": "Student",
         "type": "STUDIES_AT"
      },
      {
         "end": "City",
         "start": "Student",
         "type": "LIVES_IN"
      }
   ]
}
```

</TabItem>



</Tabs>
