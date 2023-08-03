---
id: distance-calculator
title: distance_calculator
sidebar_label: distance_calculator
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

The distance calculator is a module for calculating distance between two geographic locations. It measures the distance along the surface of the earth. 
Formula takes into consideration the radius of the earth. For this algorithm, it is necessary to define an object that has longitude and latitude properties like this:

```cypher
(location:Location {lat: 44.1194, lng: 15.2314})
```

[![docs-source](https://img.shields.io/badge/source-distance_calculator-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/distance_calculator.py)

| Trait               | Value                                                 |
| ------------------- |-------------------------------------------------------|
| **Module type**     | <Highlight color="#FB6E00">**module**</Highlight>     |
| **Implementation**  | <Highlight color="#FB6E00">**C++**</Highlight>        |
| **Graph direction** | <Highlight color="#FB6E00">**undirected**</Highlight> |
| **Edge weights**    | <Highlight color="#FB6E00">**unweighted**</Highlight> |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

<RunOnSubgraph/>

### `single(start, end, metrics, decimals)`

#### Input:

* `start: Vertex` ➡ Starting point to measure distance. Required to have *lng* and *lat* properties.
* `end: Vertex` ➡ Ending point to measure distance. Required to have *lng* and *lat* properties.
* `metrics: string` ➡ Can be either "m" or "km". These stand for meters and kilometers respectively.
* `decimals:int` ➡ Number of decimals on which you want to round up number.

#### Output:

* `distance: double` ➡ The final result obtained by calculating distance (in 'm' or 'km') between the 2 points that each have its latitude and longitude properties.

#### Usage:
```cypher
MATCH (n:Location), (m:Location)
CALL distance_calculator.single(m, n, 'km')
YIELD distance
RETURN distance;
```

### `multiple(start_points, end_points, metrics, decimals)`

#### Input:

* `start_points: List[Vertex]` ➡ Starting points to measure distance collected in a list. Required to have *lng* and *lat* properties. Must be of the same size as *end_points*.
* `end_points: List[Vertex]` ➡ Ending points to measure distance collected in a list. Required to have *lng* and *lat* properties. Must be of the same size as *start_points*.
* `metrics: string` ➡ Can be either "m" or "km". These stand for metres and kilometres respectively.
* `decimals:int` ➡ Number of decimals on which you want to round up number.

#### Output:

* `distance: List[double]` ➡ The final result obtained by calculating distance (in meters) between the 2 points who each have its latitude and longitude.

#### Usage:
```cypher
MATCH (n), (m)
WITH COLLECT(n) AS location_set1, COLLECT(m) AS location_set2
CALL distance_calculator.multiple(location_set1, location_set2, 'km') YIELD distances
RETURN distances;
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

  <img src={require('../../data/query-modules/python/distance-calculator/distance-calculator-1.png').default}/>

  </TabItem>


  <TabItem value="cypher">

```cypher
CREATE (location:Location {name: 'Zagreb', lat: 45.8150, lng: 15.9819});
CREATE (location:Location {name: 'Zadar', lat: 44.1194, lng: 15.2314});
```

  </TabItem>

  <TabItem value="run">

```cypher
MATCH (n {name: 'Zagreb'}), (m {name: 'Zadar'})
CALL distance_calculator.single(n, m, 'km') YIELD distance
RETURN distance;
```

  </TabItem>


  <TabItem value="result">

```plaintext
+----------+
| distance |
+----------+
| 197.568  |
+----------+
```

  </TabItem>

</Tabs>
