---
id: cypherl
title: Importing Cypher queries (.cypherl format)
sidebar_label: Cypher queries (.cypherl format)
---
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

When Memgraph is running, cypher queries are imported by running [mgconsole](/connect-to-memgraph/methods/mgconsole.md) in
non-interactive mode. The user can import queries saved in e.g. `queries.cypherl`
by issuing the following shell command:


<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
  <TabItem value="docker">

:::note
If you installed Memgraph through Docker Hub, the name of the Docker image `memgraph` should be replaced with `memgraph/memgraph`.
:::

If you installed Memgraph using Docker, you will need to run the client using
the following command:

```plaintext
docker run -i --entrypoint=mgconsole memgraph --host HOST --use-ssl=False < /path-to/queries.cypherl
```

Remember to replace `HOST` with valid IP of the container (see the
[Note for Docker users](/database-functionalities/work-with-docker.md#docker-container-ip-address)).

  </TabItem>
  <TabItem value= 'linux'>

```plaintext
mgconsole --use-ssl=False < /path-to/queries.cypherl
```

</TabItem>
</Tabs>

For more information about `mgconsole` options run:

```plaintext
mgconsole --help
```

## Examples

The advatange of using this system to import data is you need only one file to cover both nodes and relationships.
The disadvatage of this method is that you need to write the queries for creating nodes and relationships yourself.
If you haven't written any queries yet, we highly suggest you check our [Cypher Manual](/cypher-manual).

### One type of nodes and relationships

Copy the following into `queries.cypherl` file:

```plaintext
CREATE (:Person {id: 100, name: "Daniel", age: 30, city: "London"});
CREATE (:Person {id: 101, name: "Alex", age: 15, city: "Paris"});
CREATE (:Person {id: 102, name: "Sarah", age: 101, city: "London"});
CREATE (:Person {id: 103, name: "Mia", age: 25, city: "Zagreb"});
CREATE (:Person {id: 104, name: "Lucy", age: 21, city: "Paris"});
MATCH (u:Person), (v:Person) WHERE u.id = 100 AND v.id = 102 CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 100 AND v.id = 103 CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 101 AND v.id = 104 CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 101 AND v.id = 102 CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 102 AND v.id = 103 CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 103 AND v.id = 101 CREATE (u)-[:IS_FRIENDS_WITH]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 104 AND v.id = 100 CREATE (u)-[:IS_FRIENDS_WITH]->(v);
```

The first five queries create nodes for people and the rest of queries create relationships between nodes.
After you have prepared your queries, you can import them through earlier metioned methods or drag and drop them into **Dataset** tab in Memgraph Lab.

### Multiple types of nodes and relationships

Copy the following into `queries.cypherl` file:

```plaintext
CREATE (p:Person {id: 100, name: "Daniel", age: 30, city: "London"});
CREATE (p:Person {id: 101, name: "Alex", age: 15, city: "Paris"});
CREATE (p:Person {id: 102, name: "Sarah", age: 17, city: "London"});
CREATE (p:Person {id: 103, name: "Mia", age: 25, city: "Zagreb"});
CREATE (p:Person {id: 104, name: "Lucy", age: 21, city: "Paris"});
CREATE (r:Restraunt {id: 200, name: " Mc Donalds", menu: " Fries BigMac McChicken Apple Pie"});
CREATE (r:Restraunt {id: 201, name: " KFC", menu: " Fried Chicken Fries Chicken Bucket"});
CREATE (r:Restraunt {id: 202, name: " Subway", menu: " Ham Sandwich Turkey Sandwich Foot-long"});
CREATE (r:Restraunt {id: 203, name: " Dominos", menu: " Pepperoni Pizza Double Dish Pizza Cheese filled Crust"});
MATCH (u:Person), (v:Person) WHERE u.id = 100 AND v.id = 103 CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2014"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 101 AND v.id = 104 CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2001"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 101 AND v.id = 101 CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2018"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 102 AND v.id = 100 CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 102 AND v.id = 103 CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2017"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 103 AND v.id = 104 CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2005"}]->(v);
MATCH (u:Person), (v:Person) WHERE u.id = 104 AND v.id = 102 CREATE (u)-[:IS_FRIENDS_WITH {met_in: "2021"}]->(v);
MATCH (u:Person), (v:Restraunt) WHERE u.id = 100 AND v.id = 200 CREATE (u)-[:ATE_AT {liked: true}]->(v);
MATCH (u:Person), (v:Restraunt) WHERE u.id = 102 AND v.id = 202 CREATE (u)-[:ATE_AT {liked: false}]->(v);
MATCH (u:Person), (v:Restraunt) WHERE u.id = 102 AND v.id = 203 CREATE (u)-[:ATE_AT {liked: false}]->(v);
MATCH (u:Person), (v:Restraunt) WHERE u.id = 102 AND v.id = 200 CREATE (u)-[:ATE_AT {liked: true}]->(v);
MATCH (u:Person), (v:Restraunt) WHERE u.id = 103 AND v.id = 201 CREATE (u)-[:ATE_AT {liked: true}]->(v);
MATCH (u:Person), (v:Restraunt) WHERE u.id = 104 AND v.id = 201 CREATE (u)-[:ATE_AT {liked: false}]->(v);
MATCH (u:Person), (v:Restraunt) WHERE u.id = 101 AND v.id = 200 CREATE (u)-[:ATE_AT {liked: true}]->(v);
```

The first five queries create nodes for people, the following four queries create nodes for restaraunts.
After those come the queries that define relationships between nodes. As said before, you can define all of the
different types of nodes and relationships in one file. After preparing your queries, you can import them through earlier metioned methods or drag and drop them into **Dataset** tab in Memgraph Lab.