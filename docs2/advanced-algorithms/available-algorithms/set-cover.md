---
id: set-cover
title: set_cover
sidebar_label: set_cover
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

**The Set Cover** problem is one of the problems in graph theory that tries to solve the least possible set of sets that covers all elements inside those sets. Given a set of *n* elements, and a collection of *m* sets containing them, the algorithm tries to identify the **smallest sub-collection** of sets whose union equal to all the elements.
It is *NP-complete*, however solvable with techniques such as constraint programming. The current algorithm uses *GEKKO* optimizer as a constraint programming solver.

[![docs-source](https://img.shields.io/badge/source-set_cover-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/set_cover.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>     |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

:::note Too slow?

If this algorithm implementation is too slow for your use case, [contact us](mailto:tech@memgraph.com) and request a rewrite to C++ !

:::

## Procedures

<RunOnSubgraph/>

### `cp_solve(element_vertexes, set_vertexes)`

#### Input
The input itself represents an *element-set* pair with each row of the lists.
* `element_vertexes: List[Vertex]` ➡ List of element nodes in pairs
* `set_vertexes: List[Vertex]` ➡ List of set nodes in pairs

#### Output

* `containing_set` ➡ minimal set of sets in which all the elements are contained

#### Usage

```cypher
CALL set_cover.cp_solve([(:Point), (:Point)], [(:Set), (:Set)])
YIELD containing_set;
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

  <img src={require('../../data/query-modules/python/set-cover/set-cover-1.png').default}/>

  </TabItem>

  <TabItem value="cypher">

```cypher
CREATE (e:AnimalSpecies {name: 'Snake'});
CREATE (e:AnimalSpecies {name: 'Bear'});
CREATE (e:AnimalSpecies {name: 'Falcon'});
CREATE (e:AnimalSpecies {name: 'Beaver'});
CREATE (e:AnimalSpecies {name: 'Fox'});

CREATE (s:NationalPark {name: 'Yosemite'});
CREATE (s:NationalPark {name: 'Grand Canyon'});
CREATE (s:NationalPark {name: 'Yellowstone'});
CREATE (s:NationalPark {name: 'Glacier'});
CREATE (s:NationalPark {name: 'Everglades'});

MATCH (e: AnimalSpecies {name: 'Snake'}), (s:NationalPark {name: 'Yosemite'})
CREATE (e)-[:LIVES_IN]->(s);
MATCH (e: AnimalSpecies {name: 'Bear'}), (s:NationalPark {name: 'Yosemite'})
CREATE (e)-[:LIVES_IN]->(s);
MATCH (e: AnimalSpecies {name: 'Falcon'}), (s:NationalPark {name: 'Yosemite'})
CREATE (e)-[:LIVES_IN]->(s);
MATCH (e: AnimalSpecies {name: 'Beaver'}), (s:NationalPark {name: 'Yosemite'})
CREATE (e)-[:LIVES_IN]->(s);

MATCH (e: AnimalSpecies {name: 'Fox'}), (s:NationalPark {name: 'Yellowstone'})
CREATE (e)-[:LIVES_IN]->(s);
MATCH (e: AnimalSpecies {name: 'Beaver'}), (s:NationalPark {name: 'Yellowstone'})
CREATE (e)-[:LIVES_IN]->(s);

MATCH (e: AnimalSpecies {name: 'Snake'}), (s:NationalPark {name: 'Glacier'})
CREATE (e)-[:LIVES_IN]->(s);
MATCH (e: AnimalSpecies {name: 'Bear'}), (s:NationalPark {name: 'Glacier'})
CREATE (e)-[:LIVES_IN]->(s);

MATCH (e: AnimalSpecies {name: 'Falcon'}), (s:NationalPark {name: 'Everglades'})
CREATE (e)-[:LIVES_IN]->(s);

```
  </TabItem>

  <TabItem value="run">

```cypher
MATCH (e:AnimalSpecies)-[l:LIVES_IN]-(s:NationalPark)
WITH collect(e) AS animal_list, collect(s) AS park_list
CALL set_cover.cp_solve(animal_list, park_list)
YIELD containing_set
WITH containing_set AS national_park
MATCH (animal:AnimalSpecies)-[l:LIVES_IN]->(national_park)
RETURN animal, l, national_park;
```

  </TabItem>

  <TabItem value="result">

  <img src={require('../../data/query-modules/python/set-cover/set-cover-2.png').default}/>

  </TabItem>

</Tabs>


## `greedy(context, element_vertexes, set_vertexes)`

Not bad, not terrible.
#### Input
The input itself represents an *element-set* pair with each row of the lists.
* `element_vertexes: List[Vertex]` ➡ List of element nodes in pairs
* `set_vertexes: List[Vertex]` ➡ List of set nodes in pairs

#### Output

* `containing_set` ➡ minimal set of sets in which all the elements are contained

#### Usage

```cypher
CALL set_cover.greedy([(:Point), (:Point)], [(:Set), (:Set)])
YIELD containing_set;
```
