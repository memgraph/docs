---
id: load-csv-clause
title: LOAD CSV Cypher clause
sidebar_label: LOAD CSV Cypher clause
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

The `LOAD CSV` clause enables you to load and use data from a CSV file of your
choosing in a row-based manner, within a query. We support the Excel CSV dialect,
as it's the most commonly used one. For the syntax of the clause, please check [Cypher Manual](../../cypher-manual/clauses/load-csv)

The clause reads row by row from a CSV file, and binds the contents of the
parsed row to the variable you specified.

:::info

For more detailed information about LOAD CSV Cypher clause, check our [Reference Guide](../reference-guide/import-data/load-csv-clause)

:::


### Examples

#### Basic Usage

<Tabs
  groupId="platform"
  defaultValue="headerin"
  values={[
    {label: 'Header included', value: 'headerin'},
    {label: 'Without header', value: 'heatherout'}
  ]}>
  <TabItem value="headerin">

  ##### Header included

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
  CREATE (n:Person {id: ToInteger(row.id), name: row.name) ;
  ```
</TabItem>
<TabItem value='heatherout'>

  ##### Without header

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

#### Creating relationships

With the initial nodes in place, you can now create relationships between them: 

```cypher
LOAD CSV FROM 'people_relationships.csv'  WITH HEADERS AS row
MATCH (p1:Person {id: row.first_person})
MATCH (p2:Person {id: row.second_person})
MERGE (p1)-[f:IS_FRIENDS_WITH]->(p2)
```
### Multiple node types and relationships

In case of a more complex graph, we have to deal with multiple node and relationship types.
Let's assume we have a following example:

| people_nodes.csv     | restaraunts_nodes.csv                                               | restaraunt_relationships.csv | people_relationships.csv   |
|----------------------|---------------------------------------------------------------------|------------------------------|----------------------------|
| id,name,age,city     | id,name,menu,                                                       | PERSON_ID,REST_ID,liked      | first_person,second_person |
| 100,Daniel,30,London | 200, Mc Donalds, Fries;BigMac;McChicken;Apple Pie                   | 100,200,true                 | 100,102                    |
| 101,Alex,15,Paris    | 201, KFC, Fried Chicken;Fries;Chicken Bucket                        | 103,201,false                | 103,105                    |
| 102,Sarah,17,London  | 202, Subway, Ham Sandwich;Turkey Sandwich;Foot-long                 | 104,200,true                 | 102,103                    |
| 103,Mia,25,Zagreb    | 203, Dominos, Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust | 105,202,false                | 101,104                    |
| 104,Lucy,21,Paris    |                                                                     | 105,203,false                | 104,100                    |
|                      |                                                                     | 105,200,true                 | 105,102                    |
|                      |                                                                     | 102,201,true                 | 100,103                    |


