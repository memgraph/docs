---
id: periodic
title: periodic
sidebar_label: periodic
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

The **periodic module** enables users to execute a query periodically in
batches. In this case, the name periodic doesn't indicate that the query is
executed after a time interval, but rather that, due to the complexity of the
query, the results of some input source are batched to speed up execution.

:::caution

As the results are batched and executed in different transactions, every
executed batch is committed by itself. If an issue occurs while running this
procedure, the already committed batches cannot be rolled back.

:::

[![docs-source](https://img.shields.io/badge/source-graph_util-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/cpp/graph_util_module)

| Trait               | Value                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>                                                         |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>                                                           |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight>                                                   |

### Procedures

### `iterate(input_query, running_query, params)`

#### Input:

- `input_query: string` ➡ the input query which will yield the results that need to be batched
- `running_query: string` ➡ query which will be executed on the batched results
- `params: Map[string, string]` ➡ parameters for the procedure
  - `batch_size: Integer` ➡ key specifying how many results should a batch contain


#### Output:

- `success: boolean` ➡ `true` if the procedure executed successfully, `false` otherwise
- `number_of_executed_batches: Integer` ➡ number of executed batches (possibly a fraction of the full number if the procedure returned `success: false`)

#### Usage:

```cypher
CALL periodic.iterate(
  "LOAD CSV FROM '/tmp/file.csv' WITH HEADER AS row RETURN row.node_id AS node_id, row.supernode_id AS supernode_id", 
  "MATCH (s:SuperNode {supernode_id: supernode_id}), (n:Node {node_id: node_id}) CREATE (s)-[:HAS_REL_TO]->(n)", 
  {batch_size: 5000}) 
YIELD * RETURN *;
```

## Example

<Tabs
groupId="example"
defaultValue="cypher"
values={[
{label: 'Step 1: Cypher load commands', value: 'cypher'},
{label: 'Step 2: CSV file present', value: 'csv'},
{label: 'Step 3: Running command', value: 'run'},
{label: 'Step 4: Results', value: 'result'},
]}>

<TabItem value="cypher">

```cypher
CREATE INDEX ON :SuperNode;
CREATE INDEX ON :SuperNode(supernode_id);
CREATE INDEX ON :Node;
CREATE INDEX ON :Node(node_id);

CREATE (:SuperNode {supernode_id: 1});
FOREACH (i IN range(1, 1000000) | CREATE (:Node {id: i}));
```

  </TabItem>
<TabItem value="csv">

```cypher
supernode_id,node_id
1,1
1,2
1,3
1,4
1,5
1,6
...
1,999998  
1,999999
1,1000000
```

  </TabItem>
  <TabItem value="run">

```cypher
CALL periodic.iterate(
  "LOAD CSV FROM '/tmp/file.csv' WITH HEADER AS row RETURN row.node_id AS node_id, row.supernode_id AS supernode_id", 
  "MATCH (s:SuperNode {supernode_id: supernode_id}), (n:Node {node_id: node_id}) CREATE (s)-[:HAS_REL_TO]->(n)", 
  {batch_size: 5000}) 
YIELD * RETURN *;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+------------------+----------------------------+
| success          | number_of_executed_batches |
+------------------+----------------------------+
| true             | 200                        |
+------------------+----------------------------+

```

  </TabItem>
</Tabs>

