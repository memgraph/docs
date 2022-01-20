---
id: load-csv-clause
title: LOAD CSV Cypher clause
sidebar_label: LOAD CSV Cypher clause
---

import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

The `LOAD CSV` clause enables you to load and use data from a CSV file of your
choosing in a row-based manner, within a query. Memgraph supports the Excel CSV
dialect, as it's the most common one. For the clause syntax please check the
[Cypher manual](/cypher-manual/clauses/load-csv).

The clause reads row by row from a CSV file and binds the contents of the parsed
row to the variable you specified.

:::info 

For more detailed information about the LOAD CSV Cypher clause, check
our **[Reference guide](/reference-guide/import-data/load-csv-clause.md)**.

:::

When working with the LOAD CSV clause, Memgraph needs to have an access to the
CSV files you are using.  If you are working with Docker, check out the section on
**[transferring data into a Docker
container](#transferring-data-into-a-docker-container)**.

Below, you can find two examples of how to use the LOAD CSV Cypher clause
depending on the complexity of your data:
- [One type of nodes and relationships](#one-type-of-nodes-and-relationships)
- [Multiple types of nodes and
  relationships](#multiple-types-of-nodes-and-relationships)

## Examples

### One type of nodes and relationships

Depending on how you set the `HEADER` option (`WITH` or `NO`), a row will be
parsed as either a map or a list.

<Tabs
  groupId="platform"
  defaultValue="headerin"
  values={[
    {label: 'With CSV header', value: 'headerin'},
    {label: 'Without CSV header', value: 'headerout'}
  ]}>
  <TabItem value="headerin">


To access a given field, you can use the property lookup syntax. Let's assume
that the contents of [`people_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_nodes.csv) are as follows:

```plaintext
id,name
100,Daniel
101,Alex
102,Sarah
103,Mia
104,Lucy
```

The contents of [`people_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_relationships.csv) are the following:

```plaintext
id_from,id_to
100,101
100,102
100,103
101,103
102,104
```
The following query will load row by row from the file, and create a new node
for each row with properties based on the parsed row values:

```cypher
LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row
CREATE (n:Person {id: row.id, name: row.name});
```

With the initial nodes in place, you can now create relationships between them:

```cypher
LOAD CSV FROM "/path-to/people_relationships.csv"  WITH HEADER AS row
MATCH (p1:Person {id: row.id_from}), (p2:Person {id: row.id_to})
CREATE (p1)-[:IS_FRIENDS_WITH]->(p2)
```

</TabItem>
<TabItem value='headerout'>

Let's assume that the contents of [`people_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_nodes.csv) are as follows:

```plaintext
100,Daniel
101,Alex
102,Sarah
103,Mia
104,Lucy
```

The contents of [`people_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_relationships.csv) are the following:

```plaintext
100,101
100,102
100,103
101,103
102,104
```

The following query will load row by row from the file, and create a new node
for each row with properties based on the parsed row values:

```cypher
LOAD CSV FROM "/path-to/people_nodes.csv" NO HEADER AS row
CREATE (n:Person {id: row[0], name: row[1]}) ;
```

With the initial nodes in place, you can now create relationships between them:

```cypher
LOAD CSV FROM "/path-to/people_relationships.csv" NO HEADER AS row
MATCH (p1:Person {id: row[0]}), (p2:Person {id: row[1]})
CREATE (p1)-[:IS_FRIENDS_WITH]->(p2)
```

</TabItem>
</Tabs>

<details>
  <summary>After the import, the graph in Memgraph should look like this:</summary>
  <div>
    <img src={require('../data/import-data/one_type_of_nodes_and_relationships_graph.png').default}/>
  </div>
</details>

### Multiple types of nodes and relationships

In the case of a more complex graph, we have to deal with multiple node and
relationship types. 

<details>
  <summary>Let's say we want to create a graph like this:</summary>
  <div>
    <img src={require('../data/import-data/multiple_nodes_and_relationships_graph.png').default}/>
  </div>
</details>

We will create that graph by using `LOAD CSV` clauses to import four CSV files.

<Tabs
  groupId="csv"
  defaultValue="pn"
  values={[
    {label: '1. people_nodes.csv', value: 'pn'},
    {label: '2. people_relationships.csv', value: 'pr'},
    {label: '3. restaurants_nodes.csv', value: 'rn'},
    {label: '4. restaurants_relationships.csv', value: 'rr'}
  ]}>
<TabItem value="pn">

Add the following to the file [`people_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_nodes.csv):
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
  LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row
  CREATE (n:Person {id: row.id, name: row.name, age: ToInteger(row.age), city: row.city});
  ```

<details>
  <summary>After the import, the graph in Memgraph should look like this:</summary>
  <div>
    <img src={require('../data/import-data/people_nodes_graph.png').default}/>
  </div>
</details>

</TabItem>
<TabItem value="pr">

Each person from [`people_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv) is connected to another person they are
friends with. This is represented with the following example:

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
LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row
MATCH (p1:Person {id: row.first_person})
MATCH (p2:Person {id: row.second_person})
CREATE (p1)-[f:IS_FRIENDS_WITH]->(p2)
SET f.met_in = row.met_in;
```

<details>
  <summary>After the import, the graph in Memgraph should look like this:</summary>
  <div>
    <img src={require('../data/import-data/people_relationships_graph.png').default}/>
  </div>
</details>

</TabItem>
<TabItem value="rn">

We have a list of restaurants people ate at in the file [`restaurants_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_nodes.csv):

```csv
id,name,menu
200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie
201,KFC,Fried Chicken;Fries;Chicken Bucket
202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long
203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust
```

The following query will create new nodes for each restaurant:

```cypher
LOAD CSV FROM "/path-to/restaurants_nodes.csv" WITH HEADER AS row
CREATE (n:Restaurant {id: row.id, name: row.name, menu: row.menu});
```

<details>
  <summary>After the import, the graph in Memgraph should look like this:</summary>
  <div>
    <img src={require('../data/import-data/restaurant_nodes_graph.png').default}/>
  </div>
</details>

</TabItem>
<TabItem value="rr">

We file [`restaurants_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_relationships.csv) contains a list of people and the
restaurants they visited:

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

The following query will create relationships between people and restaurants
where they ate:

```cypher
LOAD CSV FROM "/path-to/restaurants_relationships.csv" WITH HEADER AS row
MATCH (p1:Person {id: row.PERSON_ID})
MATCH (re:Restaurant {id: row.REST_ID})
CREATE (p1)-[ate:ATE_AT]->(re)
SET ate.liked = ToBoolean(row.liked);
```

<details>
  <summary>After the import, the graph in Memgraph should look like this:</summary>
  <div>
    <img src={require('../data/import-data/restaurant_relationships_graph.png').default}/>
  </div>
</details>

</TabItem>
</Tabs>

## Transferring data into a Docker container {#transferring-data-into-a-docker-container}

If you are using Docker to run Memgraph, you will need to copy the files from
your local directory into the Docker container where Memgraph can access them. 

**1.** Start your Memgraph instance using Docker.

**2.** Find the `CONTAINER ID` of the Memgraph Docker container by running:

```
docker ps
```

**3.** Copy a file from your current directory to the container with the command:

```
docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv
```

The file is now inside your Docker container, and you can import it using the
`LOAD CSV` clause.
