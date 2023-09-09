---
id: path
title: path
sidebar_label: path
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

The `path` module allows users to explore different paths, filter relationships, and nodes based on specific criteria, and achieve more complex path-related tasks that go beyond the capabilities of native Cypher - whether you're seeking all possible paths between two nodes, subgraphs that meet certain conditions, or various other path-oriented operations.

[![docs-source](https://img.shields.io/badge/source-path-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/tree/main/cpp/path_module)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**algorithm**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**directed**</Highlight>/<Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**weighted**</Highlight>/<Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

### Procedures

### `create(start_node, relationships)`

Creates a path from the given starting node and a list of relationships. Iteratively appends all relationships in the list to the new path until a relationship is null (as a result of optional match) or a relationship from the last node of the path to one of the nodes in the current relationship (the one that isn't the last one in the path) doesn't exist.

#### Input

- `start_node: Node` - the starting node of the path.
- `relationships: Map` - map with the key `rel` that contains a list of the given relationships. See `usage` for more details.

#### Output

- `path: Path` - the created path.

#### Usage

```cypher

MERGE (croatia:Country {name: 'Croatia'})
MERGE (madrid:City {name: 'Madrid'})
MERGE (kutina:City {name: 'Kutina'})
MERGE (real:Club {name: 'Real Madrid'})
MERGE (moslavina:Club {name: 'NK Moslavina'})
MERGE (kutina)-[:In_country]->(croatia)
MERGE (moslavina)-[:In_city]->(kutina)
MERGE (real)-[:In_city]->(madrid);
```
```cypher
MATCH (club:Club) OPTIONAL MATCH (club)-[inCity:In_city]->(city:City) OPTIONAL MATCH (city)-[inCountry:In_country]->(:Country) CALL path.create(club, {rel:[inCity, inCountry]}) YIELD path return path;
```

```plaintext
+------------------------------------------------------------------------------------------------------------------+
| path                                                                                                             |
+------------------------------------------------------------------------------------------------------------------+
| (:Club {name: 'Real Madrid'}-[:In_city]->(:City {name 'Madrid'}))                                                |
+------------------------------------------------------------------------------------------------------------------+
| (:Club {name: 'NK Moslavina'}-[:In_city]->(:City {name 'Kutina'})-[:In_country]->(:Country {name 'Croatia'}))    |
+------------------------------------------------------------------------------------------------------------------+
```

### `expand(start, relationships, labels, min_hops, max_hops)`

Expand from the start node(s) following the given relationships and label filters, from min to max number of allowed hops. Return all paths inside the allowed number of hops, which satisfy relationship and label filters.

#### Input:

- `start: any` ➡ node, node ID, or list of nodes and/or node IDs from which the function will expand.
- `relationships: List[string]` ➡ list of relationships which the expanding will follow.
- `labels: List[string]` ➡ list of labels which will define filtering.
- `min_hops: int` ➡ minimum number of hops for a path to be returned.
- `max_hops: int` ➡ maximum number of hops for a path to be returned.

#### Relationship filters:

Relationship filters are described in the table below:

|Option              | Explanation                                                                  |
|--------------------|------------------------------------------------------------------------------|
| `TYPE`             | Path will expand with both outgoing and incoming relationships of this type. |
| `<TYPE`            | Path will expand with incoming relationships of this type.                   |
| `TYPE>`            | Path will expand with outgoing relationships of this type.                   |
| `>`                | Path will expand with all outgoing relationships.                            |
| `<`                | Path will expand will all incoming relationships.                            |

Anything else will result in an exception.

If the relationship filter is empty, all relationship types are allowed.

##### Relationship filtering examples:

- `Relationship list : [<LOVES, >]` : path will expand on all outgoing relationships, and incoming relationship `LOVES`.
- `Relationship list : [<LOVES, LOVES]` : path will expand on incoming relationship `LOVES`, and all directions of relationship `LOVES`, making the first element in the relationship list functionally obsolete.
- `Relationship list : []` : path will expand on all relationships.

#### Label filter:

Label filters are described in the table below:

|Option              | Explanation                                                                  |
|--------------------|------------------------------------------------------------------------------|
| `+LABEL`           | Label is added to the whitelist. All nodes in the path must have a label in the whitelist. If the whitelist is empty, it is as if all nodes are whitelisted.  |
| `>LABEL`           | Label is added to the end list. When end list has labels, only paths ending with these labels will be returned, but they can be expanded further, to return paths ending in nodes with end labels beyond it, but the expansion will only go through nodes with whitelisted labels. Labels in the end list do not have to respect the whitelist.            |
| `-LABEL`           | Label is added to the blacklist. No node in the path will contain labels in the blacklist. The blacklist takes precedence over all other filters.                   |
| `/LABEL`           | Label is added to the termination list. When termination list contains labels, only paths ending with these labels will be returned, and any further expansion is stopped. Labels in the termination list do not have to respect the whitelist.                            |

Any other label syntax is added to the whitelist. For example, `LABEL` will be added to the whitelist as `LABEL`, and `!LABEL` will be added to the whitelist as `!LABEL`. NOTE: when deciding where the label will be added, it is done by looking at the first element of the label. For example, `>LABEL>` will be added to the end list as `LABEL>`.

##### Label filtering examples:

Consider the graph provided in the usage section below. In this subsection, number of hops will be limited from 0 to 2, and the starting node will be `Dog`.

- `Label list: ["/Mouse"]` - this will return all the paths ending with `Mouse`. Because no labels were added to the whitelist, all labels are considered whitelisted. This filtering will return 3 paths: `Dog->Cat->Mouse`, `Dog<-Human->Mouse`, `Dog->Mouse`.

- `Label list: ["/Mouse", "Cat"]` - now, label `Cat` is added to the whitelist, becoming the only whitelisted label. The meaning of the filter can now be represented as: `"return all paths ending with Mouse, which expand through Cat and Cat only"`. This filtering will return two paths, one where `Dog` connects to the `Mouse` directly(`Dog->Mouse`), and one where `Cat` is included(`Dog->Cat->Mouse`).

- `Label list: ["/Mouse", "-Cat", "-Human"]` - now, both `Cat` and `Human` are blacklisted, and there is only one eligible path that can reach `Mouse`: `Dog->Mouse`.

For the final example, the starting node will be `Cat`, and the maximum number of hops will be increased to 4.

- `Label list: [">Dog", "+Human", "+Wolf"]` - now, only paths ending with `Dog` will be returned, but they can be further expaned through the nodes with whitelisted labels. This filtering returns 3 paths: `Cat<-Dog`, `Cat<-Dog<-Human->Wolf->Dog`, `Cat<-Dog<-Wolf<-Human->Dog`.


#### Usage

In this section, usage with Cypher will be demonstrated.

##### Graph used in examples

This is the graph used in the examples.

<Tabs
groupId="example"
defaultValue="cypher"
values={[
{label: 'Step 1: Cypher for creation', value: 'cypher'},
{label: 'Step 2: Graph visualization', value: 'visualization'},
]
}>

  <TabItem value="cypher">

```cypher
CREATE (w:Wolf)-[ca:CATCHES]->(d:Dog), (c:Cat), (m:Mouse), (h:Human);
MATCH (w:Wolf), (d:Dog), (c:Cat), (m:Mouse), (h:Human)
WITH w, d, c, m, h
CREATE (d)-[:CATCHES]->(c)
CREATE (c)-[:CATCHES]->(m)
CREATE (d)-[:FRIENDS_WITH]->(m)
CREATE (h)-[:OWNS]->(d)
CREATE (h)-[:HUNTS]->(w)
CREATE (h)-[:HATES]->(m);
```
</TabItem>

<TabItem value="visualization">

<img src={require('../../data/query-modules/cpp/path/graph.png').default}/>

  </TabItem>

</Tabs>

##### Usage example 1

Expand from `Dog` on outgoing relationship `CATCHES` and incoming relationship `HATES`, with `Mouse` and `Human` being labels in end list. Whitelist is empty, hence, all labels are whitelisted.


<Tabs
groupId="usageExample1"
defaultValue="cypher"
values={[
{label: 'Step 1: Cypher syntax', value: 'cypher'},
{label: 'Step 2: Graph visualization', value: 'visualization'},
{label: 'Step 3: Table results', value: 'results'},
]
}>

  <TabItem value="cypher">

```cypher
MATCH (w:Wolf), (d:Dog), (c:Cat), (m:Mouse), (h:Human)
CALL path.expand(d,["CATCHES>","<HATES"],[">Mouse", ">Human"],0,4) YIELD result RETURN result;
```
</TabItem>

<TabItem value="visualization">

<img src={require('../../data/query-modules/cpp/path/graph_usage1.png').default}/>

  </TabItem>


<TabItem value="results">

| result                                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------|
| `{"nodes":[{"id":1,"labels":["Dog"],"properties":{},"type":"node"},{"id":2,"labels":["Cat"],"properties":{},"type":"node"},{"id":3,"labels":["Mouse"],"properties":{},"type":"node"}],"relationships":[{"id":1,"start":1,"end":2,"label":"CATCHES","properties":{},"type":"relationship"},{"id":2,"start":2,"end":3,"label":"CATCHES","properties":{},"type":"relationship"}],"type":"path"}`|
| `{"nodes":[{"id":1,"labels":["Dog"],"properties":{},"type":"node"},{"id":2,"labels":["Cat"],"properties":{},"type":"node"},{"id":3,"labels":["Mouse"],"properties":{},"type":"node"},{"id":4,"labels":["Human"],"properties":{},"type":"node"}],"relationships":[{"id":1,"start":1,"end":2,"label":"CATCHES","properties":{},"type":"relationship"},{"id":2,"start":2,"end":3,"label":"CATCHES","properties":{},"type":"relationship"},{"id":6,"start":4,"end":3,"label":"HATES","properties":{},"type":"relationship"}],"type":"path"}`|

  </TabItem>

</Tabs>


##### Usage example 2

Expand from `Dog` only on incoming relationships. Also, `Human` is blacklisted.

<Tabs
groupId="usageExample2"
defaultValue="cypher"
values={[
{label: 'Step 1: Cypher syntax', value: 'cypher'},
{label: 'Step 2: Graph visualization', value: 'visualization'},
{label: 'Step 3: Table results', value: 'results'},
]
}>

  <TabItem value="cypher">

```cypher
MATCH (w:Wolf), (d:Dog), (c:Cat), (m:Mouse), (h:Human)
CALL path.expand(d,["<"],["-Human"],0,4) YIELD result RETURN result;
```
</TabItem>

<TabItem value="visualization">

<img src={require('../../data/query-modules/cpp/path/graph_usage2.png').default}/>

  </TabItem>


<TabItem value="results">

| result                                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------|
| `{"nodes":[{"id":1,"labels":["Dog"],"properties":{},"type":"node"},{"id":0,"labels":["Wolf"],"properties":{},"type":"node"}],"relationships":[{"id":0,"start":0,"end":1,"label":"CATCHES","properties":{},"type":"relationship"}],"type":"path"}`|


  </TabItem>

</Tabs>


##### Usage example 3

Expand from `Dog` and `Mouse`. `Cat` is the termination label, and the maximum number of hops is 1. Also, mouse is passed as ID, to demonstrate that capability of expand function.

<Tabs
groupId="usageExample3"
defaultValue="cypher"
values={[
{label: 'Step 1: Cypher syntax', value: 'cypher'},
{label: 'Step 2: Graph visualization', value: 'visualization'},
{label: 'Step 3: Table results', value: 'results'},
]
}>

  <TabItem value="cypher">

```cypher
MATCH (w:Wolf), (d:Dog), (c:Cat), (m:Mouse), (h:Human)
CALL path.expand([d, id(m)],[],["/Cat"],0,1) YIELD result RETURN result;
```
</TabItem>

<TabItem value="visualization">

<img src={require('../../data/query-modules/cpp/path/graph_usage3.png').default}/>

  </TabItem>


<TabItem value="results">

| result                                                                                                                                   |
|------------------------------------------------------------------------------------------------------------------------------------------|
| `{"nodes":[{"id":1,"labels":["Dog"],"properties":{},"type":"node"},{"id":2,"labels":["Cat"],"properties":{},"type":"node"}],"relationships":[{"id":1,"start":1,"end":2,"label":"CATCHES","properties":{},"type":"relationship"}],"type":"path"}`|
| `{"nodes":[{"id":3,"labels":["Mouse"],"properties":{},"type":"node"},{"id":2,"labels":["Cat"],"properties":{},"type":"node"}],"relationships":[{"id":2,"start":2,"end":3,"label":"CATCHES","properties":{},"type":"relationship"}],"type":"path"}`|

  </TabItem>

</Tabs>