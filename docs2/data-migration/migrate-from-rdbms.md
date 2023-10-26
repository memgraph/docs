---
id: migrate-from-rdbms
title: Migrate from RDBMS to Memgraph
sidebar_label: Migrate from RDBMS
---

This tutorial will help you import your data from a MySQL database into Memgraph
using CSV files on Windows 10.

In two of our blog posts, we've explained the [differences between relational
and graph
database](https://memgraph.com/blog/graph-database-vs-relational-database) and
listed the [benefits of graph
databases](https://memgraph.com/blog/the-benefits-of-using-a-graph-database-instead-of-sql).<br/>
In summary, instead of tables, graph databases use nodes connected by
relationships. Graph databases are an excellent choice if the data is highly
connected, you need to retrieve it often and the data model is not set in stone.
So if you need a quick and reliable database in which you can quickly and
effortlessly change the data model and properties, a graph database is the way
to go.

## Prerequisites

To follow along, you will need:

- An installation of **Memgraph Platform**, a streaming graph application
  platform that includes **MemgraphDB**, a visual user interface **Memgraph
  Lab**, command-line interface **mgconsole** and **MAGE**, a graph algorithms
  and modules library.<br/>
  To install Memgraph Platform and set it up, please follow the Docker
  installation instructions on the [Installation
  guide](/installation/overview.mdx).
- (optional) A running relational database either with your own schema and data
  or you can use the schema we used and populate the tables

## Data Model

We will learn how to import data from a relational database to Memgraph using
the example of an online store. The data model of the relational database that
we will use for this tutorial includes 5 tables with the following properties:

<img src={require('../data/migrate-from-rdbms/migrate_relational_database_data_model.png').default}/>

## Migrate data using CSV files

### 1. Export the data from a table to a CSV file

To begin, you need to export the existing data into CSV files table by table
either using the *Export Wizard* or by running a query.

**Exporting data using the Export Wizard**

In this example, we are using the *Export Wizard* in the *MySQL Workbench*. To
export the **Customer** table, right-click on the table name and select the
**Table Data Export Wizard**.

<img src={require('../data/migrate-from-rdbms/migrate_relational_database_export_wizard.png').default} className={"imgBorder"}/>

Click **Next** and on the second step of the Wizard do the following:

1.  Define the **File Path**. Usually, you can choose any location, but for this
    tutorial place the files in the root and name the file the same as the
    table.
2.  Select the **csv** format if it isn't already selected.
3.  Select comma as a **Field Separator**.
4.  Leave the **Line Separator** as **LF**.
5.  Delete the quotations from the **Enclose Strings** option and leave it
    empty.

Continue clicking **Next** until **Finish**.

<img
src={require('../data/migrate-from-rdbms/migrate_relational_database_export_wizard_step_2.png').default}
className={"imgBorder"}/>

In the root folder of your computer, you should find the **customer.csv** file.
When opened in a text editor or a spreadsheet program, the data from the
**customer** table should look like this:

```csv
id,name,email
1,Amos Burton,amos.burton@mail.em
2,Chrisjen Avasarala,cavasarala@mail.em
3,James Holden,james.holden@mail.em
4,Alex Kamal,akamal@post.com
5,Camina Drummer,cdrummer@post.com
6,Marco Inaros,marco.inaros@post.com
7,Naomi Nagata,naomi.nagata@post.com
8,Julie Mao,jmao@post.com
```

**Exporting data by running a query**

You can also export data by writing a query, but the data can be exported only
to a specific location you can learn by running the following query:

```sql
SHOW VARIABLES LIKE "secure_file_priv";
```

I got this value as a response `'secure_file_priv', 'C:\ProgramData\MySQL\MySQL
Server 8.0\Uploads\'` which I can now use as a destination for my CSV file.

<img src={require('../data/migrate-from-rdbms/migrate_relational_database_file_location.png').default} className={"imgBorder"}/>

Check that you've selected the database you want to export data from as your
default one. If the database is selected the name is bolded. If it is not,
double-click on it.

To export the **customerpurchase** table, execute the query below. Notice how
we changed the backslashes into slashes to avoid getting an error. You can also
write double backslashes:

```sql
SELECT 'id', 'idcustomer', 'idpurchase'
UNION
SELECT
id,
idcustomer,
idpurchase
FROM customerpurchase INTO OUTFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/customerpurchase.csv'
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n';
```

In the first line we defined the headings, and then selected fields from a table
that will be exported to a specified field. We also defined the comma sign as a
fields terminator and lines will be terminated by `\r\n`.

**Exported CSV files**

Export the rest of the tables using the preferred process and place all the CSV
files in the root directory.

Below are the CSV files we exported from our relational database. Feel free to
download them, place them in the root directory and use them for the rest of
this tutorial.

To place the files in the root directory you need Admin rights on your computer.

- [`customer.csv`](https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/customer.csv)
- [`customerpurchase.csv`](https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/customerpurchase.csv)
- [`product.csv`](https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/product.csv)
- [`productpurchase.csv`](https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/productpurchase.csv)
- [`purchase.csv`](https://public-assets.memgraph.com/tutorials/rdbms-migration-to-memgraph/purchase.csv)

### 2. Transfer CSV files into a Docker container

Now we need to copy the CSV files from your local directory into the Docker
container so Memgraph can access them.

1. Start your Memgraph instance by writing the following command in a terminal:

```
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform
```

2. Open a new terminal and find the CONTAINER ID of the Memgraph Docker
   container:

```
docker ps
```

3. Place yourself in the root directory and copy files into the container with
   the following command. You should replace CONTAINER ID and for each file
   change the source and destination path:

```
docker cp source.csv <CONTAINER ID>:/destination.csv
```

On my computer, the CVS files we need are located in the root directory of the
Windows 10 OS, and the CONTAINER ID is `bbbc43620e5c`.

First I place myself in the root directory:

```terminal
cd C:\
```

Then I ran 5 commands to copy the 5 CSV files to the container, changing the
file paths in both the source and destination with each new file. This is an
example of copying the `customer.csv` file:

```terminal
docker cp customer.csv bbbc43620e5c:/customer.csv
```

To check if the files have indeed been copied run the following command but be
sure to replace the CONTAINER ID:

```terminal
docker exec -it bbbc43620e5c bash
```

And then use the `ls` command to list all the files and directories in
the container's root. You should be able to see the CSV files we just copied to
the container.

```terminal
root@bbbc43620e5c:/# ls
bin   customer.csv          dev  home  lib    lib64  media  opt   product.csv          purchase.csv  run   srv              supervisord.pid  tmp  var
boot  customerpurchase.csv  etc  lab   lib32  mage   mnt    proc  productpurchase.csv  root          sbin  supervisord.log  sys              usr
```

### 3. Run Memgraph Lab

If you installed Memgraph Platform correctly, you should be able to access
Memgraph Lab in your browser by visiting
[`http://localhost:3000/`](http://localhost:3000) and connect to the database.

Place yourself in the **Query** tab where we will write queries in the **Query
editor** to import data into Memgraph.

<img src={require('../data/migrate-from-rdbms/migrate_relational_database_lab_query.png').default} className={"imgBorder"}/>

### 4. Import nodes into Memgraph

As we already mentioned, graph databases do not use tables to store data, but
nodes with relationships that connect them. If you take a look at the data model
we were using in the relational database we can describe it with a single
sentence: "Customers make purchases of product."

Nodes would be the customers, purchases and products while the relationship
between them is that customers MAKE purchases (`customerpurchase` table) OF
product (`productpurchase` table).

So let's start by importing the nodes into Memgraph using the `LOAD CSV` Cypher
clause. The syntax of the LOAD CSV clause is:

```cypher
LOAD CSV from "/file.csv"
WITH HEADER AS row
CREATE (n:nodeName {property1_memgraph_name: row.property1_relational_name, property2_memgraph_name: row.property2_relational_name});
```

So first we need to define the source file path and set the `HEADER` option to
`WITH` because our CSV file has headers. The clause will parse each `row` and
create nodes with properties. This is the clause to create `customer` nodes.
Copy it and paste it in the **Query editor** in **Memgraph Lab**, then click
**Run query**:

```cypher
LOAD CSV from "/customer.csv"
WITH HEADER AS row
CREATE (c:Customer {id: row.id, name: row.name, email: row.email});
```

Switch to the **Overview** tab to confirm we have created 8 new nodes of
customers from our CSV file. Let's repeat the process to create nodes for
purchases.

If we do not define the data type of a property, it will be a string. That is
why we defined the date of purchase as a `Date` type:

```cypher
LOAD CSV from "/purchase.csv"
WITH HEADER AS row
CREATE (p:Purchase {id: row.id, date: Date(row.date)});
```

For node `product`, we'll import products' price as a `float`:

```cypher
LOAD CSV from "/product.csv"
WITH HEADER AS row
CREATE (pr:Product {id: row.id, brand: row.brand, name: row.name, price: ToFloat(row.price)});
```

You should have 24 nodes imported into your graph database. You can list all the
nodes to check their properties by using this Cypher query:

```cypher
MATCH (n)
RETURN n;
```

<img src={require('../data/migrate-from-rdbms/migrate_relational_database_nodes.png').default} className={"imgBorder"}/>

If you click on each node, you can see its properties. The nodes are still not
connected to each other, so let's focus on that by importing the rest of the CSV
files.

### 5. Import relationships into Memgraph

We've imported CSV files containing data about customers, purchases and
products. In our graph database, they are represented as nodes. Now we need to
show the relationships those nodes have with each other.

Relationships are defined by data in the `customerpurchase` and
`productpurchase` tables and CSV files. If you open the `customerpurchase.csv`
file you can see it is actually connecting two different nodes, customer and
purchase, via their IDs. That is why we'll use the LOAD CSV clause to match
those IDs with existing nodes and create a relationship between them. In this
example, the relationship is that a customer MADE a purchase. The arrow of the
relationship defines that a customer makes the purchase and not the other way
around. And lastly, we are defining that the row with the `customerpurchase` ID
is actually the ID of the `:MADE` relationship.

```cypher
LOAD CSV FROM "/customerpurchase.csv" WITH HEADER AS row
MATCH (c:Customer {id: row.idcustomer})
MATCH (p:Purchase {id: row.idpurchase})
CREATE (c)-[m:MADE]->(p)
SET m.id = row.id;
```

Running this query made 12 new relationships between customers and purchases.
Let's now create relationships between products and purchases. Notice how we
defined the quantity data type as integer. Once this last query is run, you
should have 24 nodes and 29 relationships (edges).

```cypher
LOAD CSV FROM "/productpurchase.csv" WITH HEADER AS row
MATCH (pr:Product {id: row.idproduct})
MATCH (p:Purchase {id: row.idpurchase})
CREATE (p)-[o:OF]->(pr)
SET o.id = row.id
SET o.quantity = ToInteger(row.quantity);
```

<img src={require('../data/migrate-from-rdbms/migrate_relational_database_lab_overview.png').default} className={"imgBorder"}/>

### 6. Data model and updating the schema

The data model in a graph database now looks like this:

<img src={require('../data/migrate-from-rdbms/migrate_relational_database_graph_data_model.png').default} className={"imgBorder"}/>

If you decided you want to add a property to any of the nodes or relationships
you can do so at any point without disrupting the schema.

Let's add the `city` property to customer 4:

```cypher
MATCH (c:Customer {id: "4"})
SET c.city = "Zagreb"
RETURN c
```

You can check if this property has been added by running the following query and
clicking on the node in the **Graph** view:

```cypher
MATCH (c:Customer {id: "4"})
RETURN c
```

As the last step of this tutorial let's check all the nodes and relationships
we've imported into Memgraph by running the following query:

```cypher
MATCH (c)-[m]-(p)-[o]-(pr)
RETURN c,m,p,o,pr;
```

<img src={require('../data/migrate-from-rdbms/migrate_relational_database_graph_database.png').default} className={"imgBorder"}/>

## Where to next?

Congratulations! You now have a graph database. You can query it using the
[**Cypher query language**](/cypher-manual), use various graph algorithms and
modules from our open-source repository [**MAGE**](/mage) to solve graph
analytics problems, create awesome customized visual displays of your nodes and
relationships with [**Graph Style Script**](/memgraph-lab/graph-style-script-language),
find out how to connect any [**streams of data**](/memgraph/import-data/kafka)
you might have with Memgraph and above all - enjoy your graph database!
