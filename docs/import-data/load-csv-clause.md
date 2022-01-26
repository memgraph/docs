---
id: load-csv-clause
title: LOAD CSV Cypher clause
sidebar_label: LOAD CSV Cypher clause
pagination_prev: import-data/overview
---

import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

The `LOAD CSV` Cypher clause enables you to load and use data from a CSV file of
your choosing in a row-based manner within a query. Memgraph supports the Excel
CSV dialect, as it's the most common one. For the clause syntax, please check
the [Cypher manual](/cypher-manual/clauses/load-csv).

The clause reads row by row from a CSV file and binds the contents of the parsed
row to the variable you specified.

:::info 

For more detailed information about the LOAD CSV Cypher clause, check our
**[Reference guide](/reference-guide/import-data/load-csv-clause.md)**.

:::

## Transferring CSV files into a Docker container {#transfer}

When working with the LOAD CSV clause, Memgraph needs to have access to the CSV
files you are using.  If you are working with Docker, you need to transfer those
files into the container.

<details>
  <summary>Transfer CSV files into a Docker container</summary>
  
  If you are using Docker to run Memgraph, you will need to copy the files from
  your local directory into the Docker container where Memgraph can access them.

  <p> </p> 

  **1.** Start your Memgraph instance using Docker.

  **2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
  container:

  ```
  docker ps
  ```

  **3.** Copy a file from your current directory to the container with the
  command:

  ```
  docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv
  ```

  The file is now inside your Docker container, and you can import it using the
  `LOAD CSV` clause. 
</details>

## Examples

Below, you can find two examples of how to use the LOAD CSV clause depending on
the complexity of your data:
- [One type of nodes and relationships](#one-type-of-nodes-and-relationships)
- [Multiple types of nodes and
  relationships](#multiple-types-of-nodes-and-relationships)

### One type of nodes and relationships

Let's import a simple dataset.

If the CSV file has a header, set the `HEADER` option to `WITH`. Each row will
be parsed as a map, and you can use the property lookup syntax (e.g. `id:
row.id`) to access a certain field.

If the CSV file doesn't have a header, set the `HEADER` option to `NO`. Each row
will be parsed as a list, and you can access elements by defining the position of
the element in the list.

<Tabs
  groupId="platform"
  defaultValue="headerin"
  values={[
    {label: 'WITH CSV header', value: 'headerin'},
    {label: 'NO CSV header', value: 'headerout'}
  ]}>
  <TabItem value="headerin">

Download the
[`people_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_nodes.csv)
file with the following content:

```plaintext
id,name
100,Daniel
101,Alex
102,Sarah
103,Mia
104,Lucy
```

Download the
[`people_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_relationships.csv)
file with the following content:

```plaintext
id_from,id_to
100,101
100,102
100,103
101,103
102,104
```
If you are using Docker, [transfer the CSV files into a Docker
container](#transfer).

The following query will load row by row from the CSV file, and create a new
node for each row with properties based on the parsed row values:

```cypher
LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row
CREATE (p:Person {id: row.id, name: row.name});
```

If successful, you should receive an `Empty set (0.014 sec)` message. 

With the initial nodes in place, you can now create relationships between them:

```cypher
LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row
MATCH (p1:Person {id: row.id_from}), (p2:Person {id: row.id_to})
CREATE (p1)-[:IS_FRIENDS_WITH]->(p2);
```

</TabItem>
<TabItem value='headerout'>

Download the
[`people_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_nodes.csv)
file with the following content:

```plaintext
100,Daniel
101,Alex
102,Sarah
103,Mia
104,Lucy
```

Download the
[`people_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_relationships.csv)
file with the following content:

```plaintext
100,101
100,102
100,103
101,103
102,104
```

If you are using Docker, [transfer the CSV files into a Docker
container](#transfer).

The following query will load row by row from the CSV file, and create a new
node for each row with properties based on the parsed row values:

```cypher
LOAD CSV FROM "/path-to/people_nodes.csv" NO HEADER AS row
CREATE (p:Person {id: row[0], name: row[1]});
```

With the initial nodes in place, you can now create relationships between them:

```cypher
LOAD CSV FROM "/path-to/people_relationships.csv" NO HEADER AS row
MATCH (p1:Person {id: row[0]}), (p2:Person {id: row[1]})
CREATE (p1)-[:IS_FRIENDS_WITH]->(p2);
```

</TabItem>
</Tabs>

<details>
  <summary>This is how the graph should look like in Memgraph after the import:</summary>
  <div>
    <img src={require('../data/import-data/load_csv_one_type_of_nodes_and_relationships.png').default}/>
  </div>
</details>

____

### Multiple types of nodes and relationships

In the case of a more complex graph, we have to deal with multiple node and
relationship types. 

<details>
  <summary>Let's say we want to create a graph like this:</summary>
  <div>
    <img src={require('../data/import-data/load_csv_multiple_nodes_and_relationships.png').default}/>
  </div>
</details>

We will create that graph by using `LOAD CSV` clause to import four CSV files.

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

Download the
[`people_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_nodes.csv)
file, content of which is:
```csv
id,name,age,city
100,Daniel,30,London
101,Alex,15,Paris
102,Sarah,17,London
103,Mia,25,Zagreb
104,Lucy,21,Paris
```

If you are using Docker, [transfer the CSV files into a Docker
container](#transfer).

The following query will load row by row from the file, and create a new node
for each row with properties based on the parsed row values:

```cypher
LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row
CREATE (n:Person {id: row.id, name: row.name, age: ToInteger(row.age), city: row.city});
```

<details>
  <summary>This is how the graph should look like in Memgraph after the import:</summary>
  <div>
    <img src={require('../data/import-data/load_csv_people_nodes.png').default}/>
  </div>
</details>

Now move on to the `people_relationships.csv` file.

</TabItem>
<TabItem value="pr">

Each person from the `people_nodes.csv` file is connected to at least one other
person by being friends. <br/> Download the
[`people_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv)
file, where each row represents one friendship and the year it started:

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

If you are using Docker, [transfer the CSV files into a Docker
container](#transfer).

The following query will create relationships between the people nodes:

```cypher
LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row
MATCH (p1:Person {id: row.first_person})
MATCH (p2:Person {id: row.second_person})
CREATE (p1)-[f:IS_FRIENDS_WITH]->(p2)
SET f.met_in = row.met_in;
```

<details>
  <summary>This is how the graph should look like in Memgraph after the import:</summary>
  <div>
    <img src={require('../data/import-data/load_csv_people_relationships.png').default}/>
  </div>
</details>

Now move on to the `restaurants_nodes.csv` file.

</TabItem>
<TabItem value="rn">

Download the
[`restaurants_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_nodes.csv)
file that holds a list of restaurants people ate at:

```csv
id,name,menu
200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie
201,KFC,Fried Chicken;Fries;Chicken Bucket
202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long
203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust
```

If you are using Docker, [transfer the CSV files into a Docker
container](#transfer).

The following query will create new nodes for each restaurant:

```cypher
LOAD CSV FROM "/path-to/restaurants_nodes.csv" WITH HEADER AS row
CREATE (n:Restaurant {id: row.id, name: row.name, menu: row.menu});
```

<details>
  <summary>This is how the graph should look like in Memgraph after the import:</summary>
  <div>
    <img src={require('../data/import-data/load_csv_restaurant_nodes.png').default}/>
  </div>
</details>

Now move on to the `restaurants_relationships.csv` file.

</TabItem>
<TabItem value="rr">

Download the
[`restaurants_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_relationships.csv)
file that contains a list of people and the restaurants they visited:

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

If you are using Docker, [transfer the CSV files into a Docker
container](#transfer).

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
  <summary>This is how the graph should look like in Memgraph after the import:</summary>
  <div>
    <img src={require('../data/import-data/load_csv_restaurants_relationships.png').default}/>
  </div>
</details>

Congratulations! You've imported all the CSV files!

</TabItem>
</Tabs>