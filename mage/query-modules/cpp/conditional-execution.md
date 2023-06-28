---
id: conditional-execution
title: conditional_execution
sidebar_label: conditional_execution
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

Your queries might require conditional execution logic that can’t be adequately
expressed in Cypher. The `do` module makes it possible to define complex logic
and use it to control query execution.

[![docs-source](https://img.shields.io/badge/source-conditional_execution-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/do.py)

| Trait              | Value                                                 |
| ------------------ | ----------------------------------------------------- |
| **Module type**    | <Highlight color="#FB6E00">**module**</Highlight>     |
| **Implementation** | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Parallelism**    | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

:::info

Using the following procedures to run queries that execute global operations is
currently not supported and returns a warning.
The operations in question are:

* index creation/deletion
* constraint creation/deletion
* changing the isolation level globally
* setting the storage mode

:::

### `case(conditionals, else_query, params)`

Given a list of condition-query pairs, `do.case` executes the query associated
with the first condition evaluating to `true` (or the `else query` if none are
`true`) with the given parameters.

Parameters are prefixed with `$` like `$param_name`. For examples, see
[here](https://memgraph.com/docs/cypher-manual/other-features#parameters).

#### Input:

* `conditionals: List[Any]` ➡ Variable-length list of condition-query pairs
  structured as `[condition, query, condition, query, …​]`. Conditions are
  `boolean` and queries are `string`.
* `else_query: string (default = "")` ➡ The query to be executed if no
  condition evaluates to `true`.
* `params: Map (default = NULL)` ➡ If any of the given queries is parameterized,
  provide a `{param_name: param_value}` map to be applied to them.

#### Output:

* `value: Map` ➡ Contains the result record of the executed query. Each `value` corresponds to one result record.

:::caution
Currently, the module supports only those returning records that contain `string`, `integer`, `double` or `boolean` primitives.
Queries in the `conditionals` or in the `else_query` arguments, which get executed and return other types of data, will
result in an exception.
:::

#### Usage:

```cypher
MATCH (n)
WITH size(collect(n)) as n_nodes
CALL do.case([n_nodes = 0,
              "RETURN 'empty' AS graph_status;",
              n_nodes = 1,
              "RETURN 'one_node' AS graph_status;"],
              "RETURN 'multiple nodes' AS graph_status;")
YIELD value
RETURN value.graph_status AS graph_status;
```

### `when(condition, if_query, else_query, params)`

`do.when` evaluates the given condition and executes the `if query` or the
`else query` depending on whether the condition is satisfied.

Parameters are prefixed with `$` like `$param_name`. For examples, see
[here](https://memgraph.com/docs/cypher-manual/other-features#parameters).

#### Input:

* `condition: boolean` ➡ Determines what query to execute.
* `if_query: string` ➡ The query to be executed if the condition is satisfied.
* `else_query: string (default = "")` ➡ The query to be executed if the
  condition isn’t satisfied.
* `params: Map (default = NULL)` ➡ If `if_query` or `else_query` are parameterized,
   provide a `{param_name: param_value}` map to be applied.

#### Output:

* `value: Map` ➡ Contains the result record of the executed query. Each `value` corresponds to one result record.

:::caution
Currently, the module supports only those returning records that contain `string`, `integer`, `double` or `boolean` primitives.
Queries in the `conditionals` or in the `else_query` arguments, which get executed and return other types of data, will
result in an exception.
:::

#### Usage:

```cypher
MATCH (n)
WITH size(collect(n)) as n_nodes
CALL do.when(n_nodes = 0,
             "RETURN 'empty' AS graph_status;",
             "RETURN 'not empty' as graph_status;")
YIELD value
RETURN value.graph_status AS graph_status;
```

## Example

<Tabs
  groupId="example"
  defaultValue="visualization"
  values={[
    {label: 'Step 1: Input graph', value: 'visualization'},
    {label: 'Step 2: Cypher load commands', value: 'cypher'},
    {label: 'Step 3: Running command', value: 'run'},
    {label: 'Step 4: Results', value: 'result'},
  ]
}>
  <TabItem value="visualization">

  <img src={require('../../data/query-modules/python/conditional-execution/conditional-execution-1.png').default}/>

  </TabItem>

  <TabItem value="cypher">

```cypher
MERGE (a:Node {id: 0}) MERGE (b:Node {id: 1}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 1}) MERGE (b:Node {id: 2}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 2}) MERGE (b:Node {id: 0}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 3}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 4}) CREATE (a)-[:RELATION]->(b);
MERGE (a:Node {id: 3}) MERGE (b:Node {id: 5}) CREATE (a)-[:RELATION]->(b);
```

  </TabItem>

  <TabItem value="run">

```cypher
MATCH (n:Node)
WITH size(collect(n)) as n_nodes
CALL do.when(n_nodes = 0,
             "RETURN 'empty' AS graph_status;",
             "RETURN 'not empty' as graph_status;")
YIELD value
RETURN value.graph_status AS graph_status;
```

  </TabItem>

  <TabItem value="result">

```plaintext
┌──────────────┐
│ graph_status │
├──────────────┤
│ not empty    │ 
└──────────────┘
```

  </TabItem>

</Tabs>
