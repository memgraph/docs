---
id: load-csv-clause
title: LOAD CSV Cypher clause
sidebar_label: LOAD CSV Cypher clause
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

The `LOAD CSV` clause enables you to load and use data from a CSV file of your
choosing in a row-based manner, within a query. We support the Excel CSV dialect,
as it's the most commonly used one. For the syntax of the clause, please check the [Cypher manual](/cypher-manual/clauses/load-csv).

The clause reads row by row from a CSV file and binds the contents of the
parsed row to the variable you specified.

:::info

For more detailed information about the LOAD CSV Cypher clause, check our **[Reference guide](/reference-guide/import-data/load-csv-clause)**.

:::

To work with the LOAD CSV clause, we need to have access to our files. If working with Docker, check our [Docker guide](/database-functionalities/work-with-docker.md) on how to access files from your local filesystem:


## Examples

### One type of nodes and relationships

<Tabs
  groupId="platform"
  defaultValue="headerin"
  values={[
    {label: 'With CSV header', value: 'headerin'},
    {label: 'Without CSV header', value: 'heatherout'}
  ]}>
  <TabItem value="headerin">

  Depending on how you set the `HEADER` option (`WITH` or `NO`), a row will
  be parsed as either a map or a list.

  To access a given field, you can use the property lookup syntax. Let's assume
  that the CSV file contents are as follows:

  ```csv
  id,name
  100,Daniel
  101,Alex
  102,Sarah
  103,Mia
  104,Lucy
  ```

  The following query will load row by row from the file, and create a new node
  for each row with properties based on the parsed row values:

  ```cypher
  LOAD CSV FROM "people_nodes.csv" WITH HEADER AS row
  CREATE (n:Person {id: ToInteger(row.id), name: row.name});
  ```

</TabItem>
<TabItem value='heatherout'>

  Let's assume that the CSV file contents are as follows:

  ```csv
  100,Daniel
  101,Alex
  102,Sarah
  103,Mia
  104,Lucy
  ```

  The following query will load row by row from the file, and create a new node
  for each row with properties based on the parsed row values:

  ```cypher
  LOAD CSV FROM "people_nodes.csv" NO HEADER  AS row
  CREATE (n:Person {id: ToInteger(row[0]), name: row[1]}) ;
  ```

</TabItem>
</Tabs>

___

#### Creating relationships

With the initial nodes in place, you can now create relationships between them:

```cypher
LOAD CSV FROM "people_relationships.csv"  WITH HEADER AS row
MATCH (p1:Person {id: ToInteger(row.id_from)}), (p2:Person {id: ToInteger(row.id_to)})
CREATE (p1)-[:IS_FRIENDS_WITH]->(p2)
```
### Multiple types of nodes and relationships

In the case of a more complex graph, we have to deal with multiple node and relationship types.
Let's assume we have the following example:

<Tabs
  groupId="csv"
  defaultValue="pn"
  values={[
    {label: 'people_nodes.csv', value: 'pn'},
    {label: 'people_relationships.csv', value: 'pr'},
    {label: 'restaurants_nodes.csv', value: 'rn'},
    {label: 'restaurants_relationships.csv', value: 'rr'}
  ]}>
<TabItem value="pn">

```csv
id,name,age,city
100,Daniel,30,London
101,Alex,15,Paris
102,Sarah,17,London
103,Mia,25,Zagreb
104,Lucy,21,Paris
```

The following query will load row by row from the file, and create a new node
for each row with properties based on the parsed row values:

  ```cypher
  LOAD CSV FROM "/data/people_nodes.csv" WITH HEADER AS row
  CREATE (n:Person {id: ToInteger(row.id), name: row.name, age: ToInteger(row.age), city: row.city } ) ;
  ```

</TabItem>
<TabItem value="pr">

Each person from `people_nodes.csv` is connected to another person they are friends with. This is represented with the following example:

```csv
first_person,second_person,met_in
100,102,2014
103,101,2021
102,103,2005
101,104,2005
104,100,2018
101,102,2017
100,103,2001
```

The following query will create relationships between the people nodes:

```cypher
LOAD CSV FROM "people_relationships.csv"  WITH HEADER AS row
MATCH (p1:Person {id: ToInteger(row.id_from)})
MATCH (p2:Person {id: ToInteger(row.id_to)})
CREATE (p1)-[f:IS_FRIENDS_WITH]->(p2)
SET f.met_in = row.met_in;
```

</TabItem>
<TabItem value="rn">

We have a list of restaurants people ate at:

```csv
id,name,menu
200, Mc Donalds, Fries;BigMac;McChicken;Apple Pie
201, KFC, Fried Chicken;Fries;Chicken Bucket
202, Subway, Ham Sandwich;Turkey Sandwich;Foot-long
203, Dominos, Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust
```

The following query will create new nodes for each restaurant:

```cypher
LOAD CSV FROM "restaurants_nodes.csv" WITH HEADER AS row
CREATE (n:Restaurant {id: ToInteger(row.id), name: row.name, menu: row.menu});
```

</TabItem>
<TabItem value="rr">

We file `restaurants_relationships.csv` contains a list of people and the restaurants they visited:

```csv
PERSON_ID,REST_ID,liked
100,200,true
103,201,false
104,200,true
101,202,false
101,203,false
101,200,true
102,201,true
```

The following query will create relationships between people and restaurants where they ate:

```cypher
LOAD CSV FROM "restaurants_relationships.csv"  WITH HEADER AS row
MATCH (p1:Person {id: row.PERSON_ID})
MATCH (re:Restaurant {id: row.REST_ID})
CREATE (p1)-[ate:ATE_AT]->(re)
SET ate.liked = ToBoolean(row.liked);
```

</TabItem>
</Tabs>
