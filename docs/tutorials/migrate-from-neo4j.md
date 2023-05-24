---
id: migrate-from-neo4j
title: Migrate from Neo4j to Memgraph
sidebar_label: Migrate from Neo4j
---

Memgraph is a native in-memory graph database specialized for real-time use-cases such us streaming, analytical processing etc. It is compatible with the Cypher query language and the Neo4j Bolt protocol. This means that you can use the same tools and drivers that you are already using with Neo4j. Due to the ACID compliance, data persistency and replication support in community version, Memgraph can be used as main database for your applications, instead of Neo4j. There are some differences between Memgraph and Neo4j, from the operational side and the query language side. This tutorial will help you migrate your data and queries from Neo4j to Memgraph and provide general strategies for migrating from one graph database to another.


## Prerequisites

To follow this tutorial, you will need to have the following:

- Running Neo4j instance with your data
- Latest `memgraph/memgraph-platform` Docker image

## Data format

One of the first steps to consider is how to migrate your data. If you have your
data in the form of Cypher queries or CSV or JSON format, you can import these
formats into Memgraph. Keep in mind that for importing larger datasets it is
recommended to use CSV or pure Cypher queries (Memgraph's CYPHERL format), since
they have native Memgraph integrations, and are faster than JSON.

This tutorial will go through exporting data from Neo4j into CSV files and
exporting it into Memgraph using LOAD CSV query and Memgraph's user visual
interface Memgraph Lab.

The current dataset in Neo4j consists of 3 different kinds of nodes (Employee,
Order and Product) connected with 3 types of relationships as described by the
graph schema below: 

[GRAPH SCHEMA]

TO create this graph in your instance run the following queries:

```cypher
LOAD CSV WITH HEADERS FROM 'https://gist.githubusercontent.com/jexp/054bc6baf36604061bf407aa8cd08608/raw/8bdd36dfc88381995e6823ff3f419b5a0cb8ac4f/orders.csv' AS column
MERGE (order:Order {orderID: column.OrderID})
    ON CREATE SET order.shipName = column.ShipName;

LOAD CSV WITH HEADERS FROM 'https://gist.githubusercontent.com/jexp/054bc6baf36604061bf407aa8cd08608/raw/8bdd36dfc88381995e6823ff3f419b5a0cb8ac4f/products.csv' AS column
MERGE (product:Product {productID: column.ProductID})
  ON CREATE SET product.productName = column.ProductName, product.unitPrice = toFloat(column.UnitPrice);

LOAD CSV WITH HEADERS FROM 'https://gist.githubusercontent.com/jexp/054bc6baf36604061bf407aa8cd08608/raw/8bdd36dfc88381995e6823ff3f419b5a0cb8ac4f/employees.csv' AS column
MERGE (e:Employee {employeeID:column.EmployeeID})
  ON CREATE SET e.firstName = column.FirstName, e.lastName = column.LastName, e.title = column.Title;

CREATE INDEX product_id FOR (p:Product) ON (p.productID);
CREATE INDEX product_name FOR (p:Product) ON (p.productName);
CREATE INDEX employee_id FOR (e:Employee) ON (e.employeeID);
CREATE CONSTRAINT order_id ON (o:Order) ASSERT o.orderID IS UNIQUE;
CALL db.awaitIndexes();

LOAD CSV WITH HEADERS FROM 'https://gist.githubusercontent.com/jexp/054bc6baf36604061bf407aa8cd08608/raw/8bdd36dfc88381995e6823ff3f419b5a0cb8ac4f/orders.csv' AS column
MATCH (order:Order {orderID: column.OrderID})
MATCH (product:Product {productID: column.ProductID})
MERGE (order)-[op:CONTAINS]->(product)
  ON CREATE SET op.unitPrice = toFloat(column.UnitPrice), op.quantity = toFloat(column.Quantity);

LOAD CSV WITH HEADERS FROM 'https://gist.githubusercontent.com/jexp/054bc6baf36604061bf407aa8cd08608/raw/8bdd36dfc88381995e6823ff3f419b5a0cb8ac4f/orders.csv' AS column
MATCH (order:Order {orderID: column.OrderID})
MATCH (employee:Employee {employeeID: column.EmployeeID})
MERGE (employee)-[:SOLD]->(order);

LOAD CSV WITH HEADERS FROM 'https://gist.githubusercontent.com/jexp/054bc6baf36604061bf407aa8cd08608/raw/8bdd36dfc88381995e6823ff3f419b5a0cb8ac4f/employees.csv' AS column
MATCH (employee:Employee {employeeID: column.EmployeeID})
MATCH (manager:Employee {employeeID: column.ReportsTo})
MERGE (employee)-[:REPORTS_TO]->(manager);
```

## Exporting data from Neo4j

To get your data out of Neo4j instance, use the Neo4j APOC export functionality.
To install APOC, select the project, then in the right-side menu select *Plugins
-> APOC* and press install.

Then enable export by setting the configuration flag `apoc.export.file.enabled`
to `true` in the `apoc.config` file located in the `config` directory. To open
the directory, select the active project, click on *...* -> *Open folder* ->
*Configuration*. 

Export nodes with distinct labels into separate CSV files along with their
properties, then export each relationship type into a separate CSV file. 

As the graph currently holds three different kinds of nodes (labeled as Employee,
Order and Product) export them using the following queries:

```cypher
MATCH (e:Employee)
WITH collect(e) AS employee
CALL apoc.export.csv.data(employee, [], "employee.csv", {})
YIELD file
RETURN file;

MATCH (o:Order)
WITH collect(o) AS order
CALL apoc.export.csv.data(order, [], "order.csv", {})
YIELD file
RETURN file;

MATCH (p:Product)
WITH collect(p) AS product
CALL apoc.export.csv.data(product, [], "product.csv", {})
YIELD file
RETURN file;
```

To export the three types of relationships, use the following queries:

```cypher
MATCH (e:Employee)-[r:REPORTS_TO]->()
WITH collect(DISTINCT e) AS employee, collect(r) AS ReportsTo
CALL apoc.export.csv.data([], ReportsTo, "reports_to.csv", {})
YIELD file
RETURN file;

MATCH (e:Employee)-[s:SOLD]->()
WITH collect(DISTINCT e) AS employee, collect(s) AS Sold
CALL apoc.export.csv.data([], Sold, "sold.csv", {})
YIELD file
RETURN file;

MATCH (o:Order)-[c:CONTAINS]->()
WITH collect(DISTINCT o) AS order, collect(c) AS Contains
CALL apoc.export.csv.data([], Contains, "contains.csv", {})
YIELD file
RETURN file;
```

Once exported, the files are located in Ne04j's *Import* folder. To open it,
select the active project, click on *...* -> *Open folder* -> *Import*. 

## Importing data into Memgraph

Now that we have 6 CSV files containing the needed data (*contains.csv*,
*employee.csv*, *order.csv*, *product.csv*, *reports_to.csv* and *sold.csv*),
let's import it into Memgraph. 

As the original location of files is quite cumbersome, relocate it somewhere
more accessible. 

### Starting Memgraph with Docker

When working with Docker, the files need to be transferred from your local
directory into the Docker container where Memgraph can access them.

This can be done by mounting a storage volume when running the instance.

To run the container with the mounted volume run: 

```
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v path_to_dir:/data memgraph/memgraph-platform
```

Where the path leads to the directory with the CSV files. 

If the files are located at `C:/Data` directory locally, the command would look like this: 

```
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v C:/Data:/data memgraph/memgraph-platform
```

To check if the files are inside the container, open a new terminal, find out
the container ID with `docker ps`, then run: 

```
docker exec -it CONTAINER_ID bash
```

Enter the `data` directory and list the files. 

```
C:\Users\Vlasta>docker ps
CONTAINER ID   IMAGE                        COMMAND                  CREATED          STATUS         PORTS                                                                    NAMES
d20a3c091273   memgraph/memgraph-platform   "/bin/sh -c '/usr/bi…"   11 seconds ago   Up 9 seconds   0.0.0.0:3000->3000/tcp, 0.0.0.0:7444->7444/tcp, 0.0.0.0:7687->7687/tcp   amazing_gagarin

C:\Users\Vlasta>docker exec -it d20a bash
root@d20a3c091273:/# ls
bin   data  etc   lab  lib64  mnt  proc  run   srv              supervisord.pid  tmp  var
boot  dev   home  lib  media  opt  root  sbin  supervisord.log  sys              usr
root@d20a3c091273:/# cd data
root@d20a3c091273:/data# ls
contains.csv  employee.csv  order.csv  product.csv  reports_to.csv  sold.csv
root@d20a3c091273:/data#
```

### Gaining speed with indexes and analytical storage mode

Although the dataset imported in this tutorial is quite small, one day you might
want to import really big datasets with billions of nodes and relationships and
you will require all the extra speed you can get. 

To gain speed you can create indexes on the properties used to connect nodes
with relationships which are the values in the `_id` column in the CSV files,
and in Memgraph they will be named `nodeID`.

To create indexes, run: 

```cypher
CREATE INDEX ON :Employee(nodeID);
CREATE INDEX ON :Order(nodeID);
CREATE INDEX ON :Product(nodeID);
```

You can also change the storage mode from `IN_MEMORY_TRANSACTIONAL` to
`IN_MEMORY_ANALYTICAL`. This will disable the creation of durability files
(snapshots and WAL files) and you will no longer have any ACID guarantees. Other
transactions will be able to see the changes of ongoing transactions. Also,
transaction will be able to see the changes they are doing. This means that the
transactions can be committed in random orders, and the updates to the data, in
the end, might not be correct. 

But, if you import on one thread, batch of data after a batch of data, there
should be absolutely no issues, and you will gain 6 times faster import with 6
times less memory consumption.

After import you can switch back to the `IN_MEMORY_TRANSACTIONAL` storage mode or
continue running analytics queries (only read queries) in the
`IN_MEMORY_ANALYTICAL` mode to continue benefiting from low memory consumption. 

To switch between modes, run the following queries on a running instance:

```cypher
STORAGE MODE IN_MEMORY_ANALYTICAL;
STORAGE MODE IN_MEMORY_TRANSACTIONAL;
```

To check the current storage mode, run: 

```cypher
SHOW STORAGE INFO;
```

Change the storage mode to analytical before import.

### Importing nodes

To import nodes using a LOAD CSV clause let's examine the clause syntax:

```cypher
LOAD CSV FROM "csv-file-path.csv" ( WITH | NO ) HEADER [IGNORE BAD] [DELIMITER <delimiter-string>] [QUOTE <quote-string>] AS <variable-name>
```
The files are now located at `/data/filec.csv` and they all have header rows.
There is no need to ignore bad rows, the default deliminator is `,` and the
default quote character `"`, the same as in the exported CSV files, so no
changes are necessary.

The first row of the LOAD CSV clause therefore looks like this:

```
LOAD CSV FROM "/data/file.csv" WITH HEADER AS column
```

Nodes are always imported before relationships so they will be imported first. 

Execute queries in Memgraph Lab. Open your browser and go to
`http://localhost:3000/`, **Connect now** to the instance and go to the **Query
Execution** section.


#### Employee nodes

The `employee.csv` file contains the following columns: `_id`, `labels`,
`employeeID`, `firstName`, `lastName`, `title`, `_start`. `_end`, `_type`.

The `_start`. `_end`, `_type` are actually related to relationships and therefor
empty, and the label needs to be created inside the clause itself so we can ignore
the values in those columns. The `_id` property is actually an internal node ID
needed to create relationships later on.
 
In the second line of the LOAD CSV query, we need to create nodes with a certain
label and properties. Properties are taken from the CSV table. As an example,
let's look at the property `_id`. To add the property to the node, define its
name in Memgraph and assigned the value of a specific column in the CSV file. 

So this part of the query `nodeID: column._id` instructs Memgraph to create a
property named `nodeID` and assign it the value located in column `_id`. First
created node will be assigned the value from the first data row, second node
from the second data row, etc.

The same is done with all the properties, and the finished query looks like this:

```
LOAD CSV FROM "/data/employee.csv" WITH HEADER AS column
CREATE (e:Employee {nodeID: column._id, employeeID: column.employeeID, firstName: column.firstName, lastName: column.lastName, title: column.title});

MATCH (e:Employee)
RETURN e; 
```

The second query will show all 9 created nodes. 

Copy the query in the **Cypher Editor** and **Run Query**.

[IMAGE]

#### Order nodes

Relevant columns in the `order.csv` file are `_id`, `orderID` and `shipName`, so
the LOAD CSV query for importing 830 orders looks like this:

```
LOAD CSV FROM "/data/order.csv" WITH HEADER AS column
CREATE (o:Order {nodeID: column._id, orderID: column.orderID, shipName: column.shipName});

MATCH (o:Order)
RETURN o; 
```

[IMAGE]

#### Product nodes

Relevant columns in the `product.csv` file are `_id`, `productID`, `productName`
and `unitPrice`, so the LOAD CSV query for importing 830 orders looks like this:

As the parser parses all the values as strings, and the `unitPrice` are numbers,
they need to be converted to appropriate type.

```
LOAD CSV FROM "/data/product.csv" WITH HEADER AS column
CREATE (p:Product {nodeID: column._id, productID: column.productID, productName: column.productName, unitPrice: ToFloat(column.unitPrice)});

MATCH (p:Product)
RETURN p; 
```

### Graph improvements

At this point it would be nice to improve the look of the nodes visually. At the
moment, nodes are represented with their labels in the graph, but it would be
more useful if their name attribute was written. 

To adjust the look of the graph with using Graph Style Language, open the the
Graph Style Editor. On line 16 you will find this block of code:

```
@NodeStyle HasProperty(node, "name") {
  label: AsText(Property(node, "name"))
}
```

It defines that if the node has the property `name`, its label on the visual
graph will be that property. 

As none of the imported nodes have the property `name`, this part of the code
needs to be adjusted to use the properties nodes do have. 

Replace the code on lines 16-18 with the following block and **Apply** the
changes:

```
@NodeStyle HasProperty(node, "firstName") {
  label: AsText(Property(node, "firstName"))
}

@NodeStyle HasProperty(node, "orderID") {
  label: AsText(Property(node, "orderID"))
}

@NodeStyle HasProperty(node, "productName") {
  label: AsText(Property(node, "productName"))
}
```

[IMAGE]

Visual appearance of the graph can be changed in many different ways, so be sure
to check the GSS documentation. 

### Importing relationships

Now that all the 916 nodes have been imported, they can be connected with relationships. 

The first row of the LOAD CSV remains the same:

```
LOAD CSV FROM "/data/file.csv" WITH HEADER AS column
```

#### :REPORTS_TO relationships

Relevant columns in the `reports_to.csv` file are `_start` and `_end_` columns
which actually define which nodes need to be connected based on their ID. So
first Memgraph needs to find the nodes with these IDs in order to create a
relationship between them. As node IDs are unique we can just define that any
node with a certain ID is a starting point, and another node with a certain ID
is the end point of the relationship type `REPORTS_TO`.

The LOAD CSV query creates 8 relationships, while the `MATCH p` query returns
them and the nodes they connect:

```cypher
LOAD CSV FROM "/data/reports_to.csv" WITH HEADER AS column
MATCH (n {nodeID: column._start}), (n2 {nodeID: column._end})
CREATE (n)-[:REPORTS_TO]->(n2);

MATCH p=()-[:REPORTS_TO]->()
RETURN p;
```

The second query returns all the nodes connected with the `REPORTS_TO` type of relationship. 

[IMAGE]

#### :SOLD relationships

Relevant columns in the `sold.csv` file are also `_start` and `_end_` columns
for the same reasons (they define start and end node of a relationship).

The LOAD CSV query creates 830 relationships, while the `MATCH p` query returns
them and the nodes they connect:

```cypher
LOAD CSV FROM "/data/sold.csv" WITH HEADER AS column
MATCH (n {nodeID: column._start}), (n2 {nodeID: column._end})
CREATE (n)-[:SOLD]->(n2);

MATCH p=()-[:SOLD]->()
RETURN p;
```

#### :CONTAINS relationships

Relevant columns in the `contains.csv` file are also `_start` and `_end_`
columns for the same reasons (they define start and end node of a relationship),
but this relationship type also has properties about the `quantity` of products
one order contains, and the `unitPrice`.

As the parser parses all the values as strings, and these relationship
properties are numbers, they need to be converted to appropriate types.
`quantity` to integer, and `unitPrice` to float.

The LOAD CSV query creates 2155 relationships, while the `MATCH p` query returns
them and the nodes they connect:

```cypher
LOAD CSV FROM "/data/contains.csv" WITH HEADER AS column
MATCH (n {nodeID: column._start}), (n2 {nodeID: column._end})
CREATE (n)-[:CONTAINS {quantity: ToInteger(column.quantity), unitPrice: ToFloat(column.unitPrice)}]->(n2);

MATCH p=()-[:CONTAINS]->()
RETURN p;
```

### After import

Once all the 916 nodes and 2993 relationships have been imported decide whether
you want to switch back to the transactional storage mode or not. Remember that
the analytical storage mode you are using right now has no ACID compliance. 

To switch back to the analytical storage mode, run: 

```cypher
STORAGE MODE IN_MEMORY_TRANSACTIONAL;
```

To check the switch was successful, run: 

```cypher
SHOW STORAGE INFO;
```

## Query migration



If you have stumbled upon the [blog post on migrating from Neo4j to Memgraph](https://memgraph.com/blog/how-to-migrate-from-neo4j-to-memgraph)