---
id: cypherl
title: Importing Cypher queries (CYPHERL format)
sidebar_label: CYPHERL
pagination_prev: import-data/overview
---
import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

If your data is in the form of Cypher queries (for example, `CREATE` and `MERGE`
clauses) within a **CYPHERL** file it can be imported via Memgraph Lab or
mgconsole.

The benefit of importing data using the CYPHERL file is that you need only
one file to import both nodes and relationships. But it can be tricky to
actually write the queries for creating nodes and relationships yourself. If you
haven't written any queries yet, check our [Cypher manual](/cypher-manual).

:::tip

To speed up import time consider [creating indexes](/how-to-guides/indexes.md)
on appropriate nodes or node properties.

:::

## Importing via Memgraph Lab

Once you Memgraph instance in running and you've connected to it via Memgraph
Lab, go to the **Import & Export** section. To **Import Data** select the
CYPHERL file or drag and drop it into Memgraph Lab. 

You can import up to 1 million nodes and relationships via Memgraph Lab using
the CYPHERL file. 

<img src={require('../../data/import-data/import-lab.png').default}className={"imgBorder"}/>

## Importing via mgconsole

<Tabs
  groupId="importing"
  defaultValue="docker-import"
  values={[
    {label: 'Docker 🐳', value: 'docker-import'},
    {label: 'Linux', value: 'linux-import'}
  ]}>
<TabItem value='docker-import'>

If you installed and started Memgraph using **Docker**, follow these steps:

1. Open a new terminal and check the Docker container ID by running `docker ps`
2. Then run the following command

  ```
  docker exec -i CONTAINER_ID mgconsole < queries.cypherl
  ```

For more information about `mgconsole` options run:

```console
docker exec -i CONTAINER_ID mgconsole --help
```

</TabItem>
<TabItem value= 'linux-import'>

Once Memgraph is running in **Linux**, Cypher queries are imported by running
[mgconsole](/connect-to-memgraph/mgconsole.md) in a non-interactive mode and
importing data saved in a CYPHERL file. 

You can import queries saved in e.g. `queries.cypherl` by issuing the following
shell command:

```plaintext
mgconsole < queries.cypherl
```

For more information about `mgconsole` options run:

```console
mgconsole --help
```
  </TabItem>
</Tabs>

## Examples

Below, you can find two examples of how to import data within the `.cypherl` file
based on the complexity of your data:
<!-- no toc -->
  - [One type of nodes and relationships](#one-type-of-nodes-and-relationships)
  - [Multiple types of nodes and relationships](#multiple-types-of-nodes-and-relationships)

### One type of nodes and relationships

Let's import data from `queries.cypherl` file with the following content:

```plaintext
CREATE (:Person {id: "100", name: "Daniel", age: 30, city: "London"});
CREATE (:Person {id: "101", name: "Alex", age: 15, city: "Paris"});
CREATE (:Person {id: "102", name: "Sarah", age: 101, city: "London"});
CREATE (:Person {id: "103", name: "Mia", age: 25, city: "Zagreb"});
CREATE (:Person {id: "104", name: "Lucy", age: 21, city: "Paris"});
MATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "103" AND v.id = "101" CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "104" AND v.id = "100" CREATE (u)-[:IS_FRIENDS_WITH]->(v);
```

The first five queries create nodes for people, and the rest of the queries create
relationships between these nodes.

<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
  <TabItem value="docker">

If you installed Memgraph using Docker, open a new terminal, position yourself
in the directory where the CYPHERL file is located and run the following
commands: 

1. Check the Docker container ID by running `docker ps`
2. Run the following command

  ```
  docker exec -i CONTAINER_ID mgconsole < queries.cypherl
  ```

</TabItem>
<TabItem value= 'linux'>

Running mgconsole in a non-interactive mode and importing data saved in a
CYPHERL file:

```console
mgconsole < queries.cypherl
```

</TabItem>
</Tabs>

<details>
  <summary>This is how the graph should look like in Memgraph after the import:</summary>
  <div>
    <img src={require('../../data/import-data/cypherl_one_type_nodes_and_relationships.png').default}/>
  </div>
</details>

### Multiple types of nodes and relationships

Let's import data from `queries.cypherl` file with the following content:

```plaintext
CREATE (p:Person {id: "100", name: "Daniel", age: 30, city: "London"});
CREATE (p:Person {id: "101", name: "Alex", age: 15, city: "Paris"});
CREATE (p:Person {id: "102", name: "Sarah", age: 17, city: "London"});
CREATE (p:Person {id: "103", name: "Mia", age: 25, city: "Zagreb"});
CREATE (p:Person {id: "104", name: "Lucy", age: 21, city: "Paris"});
CREATE (r:Restaurant {id: "200", name: "McDonalds", menu: "Fries BigMac McChicken Apple Pie"});
CREATE (r:Restaurant {id: "201", name: "KFC", menu: "Fried Chicken Fries Chicken Bucket"});
CREATE (r:Restaurant {id: "202", name: "Subway", menu: "Ham Sandwich Turkey Sandwich Foot-long"});
CREATE (r:Restaurant {id: "203", name: "Dominos", menu: "Pepperoni Pizza Double Dish Pizza Cheese filled Crust"});
MATCH (u:Person), (v:Person) WHERE u.id = "100" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2014"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "101" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2001"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "100" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "102" AND v.id = "103" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2017"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "103" AND v.id = "104" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = "104" AND v.id = "102" CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2021"}]->(v);
MATCH (u:Person), (v:Restaurant) WHERE u.id = "100" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);
MATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "202" CREATE (u)-[:ATE_AT {liked: false}]->(v);
MATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "203" CREATE (u)-[:ATE_AT {liked: false}]->(v);
MATCH (u:Person), (v:Restaurant) WHERE u.id = "102" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);
MATCH (u:Person), (v:Restaurant) WHERE u.id = "103" AND v.id = "201" CREATE (u)-[:ATE_AT {liked: true}]->(v);
MATCH (u:Person), (v:Restaurant) WHERE u.id = "104" AND v.id = "201" CREATE (u)-[:ATE_AT {liked: false}]->(v);
MATCH (u:Person), (v:Restaurant) WHERE u.id = "101" AND v.id = "200" CREATE (u)-[:ATE_AT {liked: true}]->(v);
```

The first five queries create nodes for people, and the following four queries
create nodes for restaurants. The rest of the queries are used to define
relationships between nodes. As said before, you can define different types of
nodes and relationships in one file.

<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
<TabItem value="docker">

If you installed Memgraph using Docker, open a new terminal, position yourself
in the directory where the CYPHERL file is located and run the following
commands: 

1. Check the Docker container ID by running `docker ps`
2. Run the following command

  ```
  docker exec -i CONTAINER_ID mgconsole < queries.cypherl
  ```

</TabItem>
<TabItem value= 'linux'>

Running mgconsole in a non-interactive mode and importing data saved in a
CYPHERL file:

```console
mgconsole < queries.cypherl
```

</TabItem>
</Tabs>

<details>
  <summary>This is how the graph should look like in Memgraph after the import:</summary>
  <div>
    <img src={require('../../data/import-data/cypherl_multiple_type_nodes_and_relationships.png').default}/>
  </div>
</details>
