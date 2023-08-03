# Frequently asked questions

## Memgraph 101

### What is Memgraph?

Memgraph is an **open-source in-memory graph database** built for teams that expect
highly performant, advanced analytical insights - as compatible with your
current infrastructure as Neo4j (but up to 120x faster). Memgraph is powered by
a query engine built in C/C++ to handle real-time use cases at an enterprise
scale. Memgraph supports **strongly-consistent ACID transactions** and uses the
standardized **Cypher query language** over Bolt protocol for structuring,
manipulating, and exploring data.

### What are the benefits of being an in-memory graph database?

When data is stored on disk, the computer has to physically read it from the
disk and transfer it to the RAM before it can be processed. This process is
relatively slow because it involves several physical processes, such as seeking
the right location on the disk and waiting for the data to be read. Writing the
data is also much slower for the same reasons.

Storing data in the computer's RAM eliminates the need for these physical
processes, and data can be accessed and added almost instantly. 

Therefore, in-memory graph databases are ideal for applications requiring fast
data processing, real-time analytics, and quick response times. 

### What use cases is Memgraph best suited for?

Memgraph is best suited for use cases with complex data relationships that
require real-time processing and high scalability.  

### How do I know my use case has complex data relationships?

In relational databases, complex data relationships arise when data from
different tables is related or somehow interconnected. Because data is spread
across multiple tables, querying it requires hopping from one table to other and
joining it with slow and resource-intensive join operations.

The complexity of join operations can increase exponentially as the number of
tables increases and as the links between various tables are no longer neatly
structured following a clearly set pattern. It is no longer sufficient to join
just two or three tables but hop through more than seven tables to find the
correct link between the data and gain valuable analytics.

Examples of complex data are deep hierarchical relationships between data, such
as parent-child relationships or many-to-many relationships between different
tables.

### How does Memgraph compare to other graph databases regarding performance?

Memgraph is designed to be a high-performance graph database, and it typically
outperforms many other graph databases in terms of speed and scalability. Key
factors contributing to Memgraph's performance are its in-memory architecture
and a performant query engine written in C++. Memgraph also offers a variety of
tools and features to help optimize query performance, including label and
label-property indexes and a custom visualization library. Check our
[benchmark](https://memgraph.com/benchgraph/) comparing Memgraph and Neo4j.

### Is Memgraph a distributed database? 

At the moment, Memgraph does not support running and storing data across
multiple physical locations, but the next version of Memgraph, Memgraph 3.0 will
enable horizontal scaling. Check out plans for [Memgraph 3.0 on
GitHub](https://github.com/orgs/memgraph/projects/5).

### How does Memgraph ensures persistency and durability? 

Although Memgraph is an in-memory database, the data is persistent and durable.
This means data will not be lost upon reboot. 

Memgraph uses two mechanisms to ensure the
[durability](/memgraph/reference-guide/backup) of
stored data and make disaster recovery possible:

* write-ahead logging (WAL)
* periodic snapshot creation


Each database modification is recorded in a log file before being written to the
database. Therefore, the log file contains all steps needed to reconstruct the
DB’s most recent state. Memgraph also periodically takes snapshots during
runtime to write the entire data storage to the drive. On startup, the database
state is recovered from the most recent snapshot file. The timestamp of the
snapshot is compared with the latest update recorded in the WAL file and, if the
snapshot is less recent, the state of the DB will be completely recovered using
the WAL file.

If you are using Memgraph with Docker, be sure to [specify a volume for data
persistence](/memgraph/how-to-guides/work-with-docker#specify-volumes).

### How does Memgraph ensure high availability?

Memgraph ensures high availability by using
[replication](/memgraph/reference-guide/replication). Replication involves
replicating data from one MAIN instance to one or several REPLICA instances. If
a MAIN instance fails, another REPLICA instance can be upgraded and serve as the
MAIN instance, thus ensuring continuous data availability. 

### Does Memgraph support multitenancy? 

Memgraph doesn't support multitenancy, but it is planned that the next version
of Memgraph, Memgraph 3.0 does. Check out plans [for Memgraph 3.0 on
GitHub](https://github.com/orgs/memgraph/projects/5).

### How many cores does Memgraph utilizes?

Memgraph is designed to utilize all available CPU cores on a machine to process
queries and perform other operations in parallel, significantly improving
performance and reducing query response times.

### What are the minimum and recommended requirements to run a on-premise instance?

To run Memgraph on-premise, you require an Intel Xeon, AMD Opteron/Epyc, ARM
machines, Apple M1, Amazon Graviton server or desktop processor, at least 1 GB
of RAM and disk and at least 1 vCPU. We recommend using a server processor, at
least 16 GB of ECC RAM, the same amount of disk storage and at least 8 vCPUs or
4 physical cores.

### How much RAM do I need for my graph?

We recommend twice as many GB of RAM as the data size.  If you have 8 GB of
data, we recommend having at least 16 GB of RAM. Of course, the actual memory
needs depend on the complexity of executed queries. The more graph objects query
needs to return as a result, the more RAM will be required. To calculate the
Memgraph RAM instance requirements based on your data, check out [how Memgraph
uses memory](/memgraph/under-the-hood/storage). 

### Are there any graph size limits?

Memgraph vertically scales effortlessly up to 1B nodes and 10B edges. The only
limit is the size of your RAM. We recommend twice as many GB of RAM as the data
size. If you have 8 GB of data, we recommend having at least 16 GB of RAM. Of
course, the actual memory needs depend on the complexity of executed queries.
The more graph objects query needs to return as a result, the more RAM will be
required. 

### What is the difference between Memgraph and Memgraph Platform?

There are three official Docker images for Memgraph:

* `memgraph/memgraph` - the most basic MemgraphDB instance.
* `memgraph/memgraph-mage` - the image contains a MemgraphDB instance together
  with all the newest [MAGE](/mage) modules and graph algorithms.
* `memgraph/memgraph-platform` - the image contains MemgraphDB, Memgraph Lab,
  mgconsole and MAGE. Once started, mgconsole will be opened in the terminal,
  while Memgraph Lab is available at `http://localhost:3000`.

The MAGE graph algorithm library includes [NVIDIA
cuGraph](https://github.com/rapidsai/cugraph) GPU-powered graph algorithms. To
use them, you need a specific kind of `memgraph-mage` image, so check the
[documentation](/mage/installation/cugraph) or
[DockerHub](https://hub.docker.com/r/memgraph/memgraph-mage/tags?page=1&name=cugraph)
for tags.

### Do I need to define a schema before importing data?

It is not necessary to define any data schema to import data. Data will be
imported into the database regardless of the number of properties and their
types. You can enforce property
[uniqueness](https://memgraph.com/docs/memgraph/how-to-guides/constraints/uniqueness-constraint)
and
[existence](https://memgraph.com/docs/memgraph/how-to-guides/constraints/existence-constraint).

### Are there any educational materials available?

You can try running queries on preloaded datasets in [Memgraph
Playground](https://playground.memgraph.com/). If you need help with Cypher
queries, check out [the Cypher manual](/cypher-manual). We've prepared
[tutorials](/memgraph/tutorials) and [how-to guides](/memgraph/how-to-guides) to
help you navigate Memgraph more easily. We also offer data modeling and Cypher
[e-mail courses](https://memgraph.com/email-courses) or watch one of our
webinars. You can even deep dive into code with Memgraph's CTO -> [Code with
Buda](https://www.youtube.com/playlist?list=PL7Eotag2rRhaYDrSNcltkbtj0S3yC7h-u).
For all the other questions and help, fell free to join our
[community](https://memgraph.com/community).  

### Can I try out Memgraph Enterprise before making a decision?

Yes, Memgraph offers a free q30-day Memgraph Enterprise Trial. Send a request
via [the
form](https://webforms.pipedrive.com/f/1sUK9YYKJnygcFEDI0SOpSGB2YBK2nP8xdjAiwnhEVXXohYvodHTPAzB1o4bZ8Tuz).

### Does Memgraph offer professional services such as data modelling, development, integration and similar?

It depends on the scope of the project and the requirements. [Contact
us](https://webforms.pipedrive.com/f/1sUK9YYKJnygcFEDI0SOpSGB2YBK2nP8xdjAiwnhEVXXohYvodHTPAzB1o4bZ8Tuz)
for more information. 

## MemgraphDB

### What is the fastest way to import data into Memgraph?

Currently, the fastest way to import data is from a CSV file with a [LOAD CSV
clause](/memgraph/import-data/load-csv-clause). LOAD CSV clause imports between
100K and 350K nodes per second and between 60K and 80K edges per second. To
achieve this import speed, indexes have to be [set up
appropriately](/memgraph/how-to-guides/indexes).

[Other import methods](/memgraph/import-data) include importing data from JSON
and CYPHERL files, migrating from SQL and Neo4j with mgmigrate tool, or
connecting to a data stream.

### How to import data from MySQL or PostgreSQL?

You can migrate from [MySQL](/memgraph/import-data/migrate/mysql) or
[PostgreSQL](/memgraph/import-data/migrate/postgresql) using the
[mgmigrate](https://github.com/memgraph/mgmigrate) tool. 

### What file formats does Memgraph support for import? 

You can import data from [CSV](/memgraph/import-data/load-csv-clause),
[JSON](/memgraph/import-data/files/load-json) or
[CYPHERL](/memgraph/import-data/files/cypherl) files. 

CSV files can be imported in on-premise instances using the [LOAD CSV
clause](/cypher-manual/clauses/load-csv).

Local JSON files and files on a remote address can be imported in on-premise
instances using a [json_util](/docs/mage/query-modules/python/json-util) module
from the MAGE library. On a Cloud instance, data from JSON files can be imported
only from a remote address. 

CYPHERL file contains Cypher queries necessary for creating nodes and
relationships. 

### What data formats does Memgraph support for export?

You can export data to JSON or CYPHERL files. Query results can be exported to a
CSV file. 

Data can be exported to a JSON file from on-premise instances using a
[export_util](/mage/query-modules/python/export-util) module from the MAGE
library. The same module can be used to export query results to a CSV file. 

CYPHERL file contains Cypher queries necessary for creating nodes and
relationships and you can export files via Memgraph Lab.

### Can Memgraph database ingest streaming data?

Yes, you can [connect your
instance](/memgraph/import-data/data-streams/overview) to Kafka, Redpanda or
Pulsar streams and ingest data. You will need to write a transformation module
that will instruct Memgraph on how to transform the incoming messages and
consume them correctly.

### Is data automatically indexed during import?

No, data is not automatically indexed during import. You need to [create a label
or label-property indexes](/memgraph/how-to-guides/indexes) manually once the
import is finished. 

### What languages can be used to communicate with the database?

At the moment, you can [connect to a Memgraph
instance](/memgraph/connect-to-memgraph/drivers) using the Bolt protocol and
query the database using C#, C/C++, Go, Haskell, Java, JavaScript, Node.js, PHP,
Python, Ruby, and Rust.

### Can I create logically separated graphs within the same database instance?

You can create logically separated graphs within the same instance by [using
different
labels](/cypher-manual/updating-nodes-and-relationships#creating-and-updating-node-labels).
Each node can have multiple labels and [the cost of labels is 8B per
label](/memgraph/under-the-hood/storage#vertex-memory-layout) (but the memory is
allocated dynamically, so 3 labels take up as much memory as 4, and 5-7 labels
take as much space as 8, etc.) You can use the same technique to save multilayer
networks. 

### Can I run MAGE modules and algorithms on just a part of the graph/subgraph?

You can [run MAGE modules and algorithms on
subgraphs](/mage/how-to-guides/run-a-subgraph-module) by using the [project()
function](/cypher-manual/functions#graph-projection-functions). 

### How can I visualize query results?

You can use Memgraph Lab, a visual user interface that enables you to:

* visualize graph data using [the Orb library](https://github.com/memgraph/orb)
* write and execute Cypher queries
* import and export data
* view and optimize query performance
* develop query modules in Python
* manage connections to streams.

### Does replication affect performance?

Replication should not in any way affect the performance of your database
instance.

### How can I check storage information?

You can check storage information by running the [SHOW STORAGE
INFO;](/memgraph/reference-guide/server-stats#storage-information) that will
provide information about the number of stored nodes and relationships and
memory usage. 

### Where does Memgraph save or preview logs?

By default, Memgraph saves the log at `/var/log/memgraph/memgraph.log`.
Accessing logs depends on how you've started Memgraph, so check the [how-to
guide about accessing logs](/memgraph/how-to-guides/config-logs).

You can check the logs using Memgraph Lab (the visual interface). Memgraph Lab
listens to logs on the 7444 port. You can also use this web socket port 7444 and
listen to the logs from your custom system.

Log level and location can be modified using [configuration
flags](/memgraph/reference-guide/configuration#other).

### Do I need to know Cypher to query the database?

You don't need to know Cypher to query the database. You can use
[GQLAlchemy](/gqlalchemy), an Object Graph Mapper (OGM). OGM provides a
developer-friendly workflow for writing object-oriented notation to communicate
to a graph database. Instead of writing Cypher queries, you can write Python
code, which the OGM will automatically translate into Cypher queries. It
supports both Memgraph and Neo4j.

## Cypher

### Are there any differences in Cypher implementation between Memgraph and Neo4j?

Although we tried to implement openCypher query language as closely to the
language reference as possible, we made some changes that can enhance the user
experience. You can find the differences listed in the [Cypher
manual](/cypher-manual/differences).

### Can I expand Cypher query language with custom procedures?

Yes, you can expand the Cypher query language with custom procedures grouped in
query modules. Modules can be written in C/C++ and Python (which also has a mock
API). For more details, check out the documentation on [query
modules](/memgraph/reference-guide/query-modules). 

## MAGE graph library

### What is MAGE?

[**Memgraph Advanced Graph Extensions (MAGE)**](/mage) is an open-source repository that contains graph algorithms and utility modules. It encourages developers to share innovative and useful [query modules](/mage/query-modules/available-queries) (custom Cypher procedures) the whole community can benefit from. It corresponds to APOC in Neo4j, except it's free and open source. 

The MAGE library also includes dynamic algorithms specially designed for analyzing real-time data, NetworkX and igraph integrations, Elasticsearch synchronization module and NVIDIA GPU-powered algorithms. Check [the full list of modules](/mage/query-modules/available-queries), and if there is a specific procedure you can't find in the MAGE library which you would like to use, please [let us know](overview.md).

### What are query modules?

[Query modules](/memgraph/reference-guide/query-modules) are collections of custom Cypher procedures that extend the basic functionalities of the Cypher query language. Each query module consists of procedures connected by a common theme (for example, community detection). [MAGE graph library](/mage) gathers a number of implemented graph algorithms and utility modules. Still, if you need a specific procedure unavailable in MAGE, you can [implement it using Python or C/C++ API](/memgraph/reference-guide/query-modules/implement-custom-query-modules/overview) and [contribute to the library](/mage/contributing) or [contact us](overview.md). 

## Memgraph Lab visual user interface

### What is Memgraph Lab?

[Memgraph Lab](/memgraph-lab) is a lightweight and intuitive visual user interface that enables you to:
- write and execute Cypher queries and algorithms
- visualize graph data using [the Orb library](https://github.com/memgraph/orb)
- import and export data
- generate data schema
- view and optimize query performance
- develop custom procedures in Python
- manage stream connections.

### Can I only use Memgraph Lab?

No, Memgraph Lab can connect only to a running Memgraph instance.

### Can I customize the visual appearance of my graph results?

Yes, you can customize the visual appearance of your graph results by using [the Graph Style Script language](/memgraph-lab/graph-style-script-language). You can add images to nodes, change their shape, size and color. Change the line appearance of relationships and their thickness. For a complete list of available features, consult [the GSS reference guide](/memgraph-lab/style-script/reference-guide).

## Memgraph Cloud

### What is the pricing?

You can estimate the cost of Memgraph Cloud's service by selecting your cloud
region and instance size with our [Cost
Calculator](https://cloud.memgraph.com/pricing), or you can check them out at
[Project rates](/docs/memgraph-cloud/payment#project-rates))

### How can I redeem a coupon that I got for Memgraph Cloud?
First, you need to [add a credit card](/docs/memgraph-cloud/payment#add-a-payment-method) to your account. Then you can [redeem](/docs/memgraph-cloud/payment#add-a-payment-method) the
coupon.

### What will happen to my instance after the free trial?
Instance will be stopped for next 7 days. If you wish to continue, [add a payment
method](/docs/memgraph-cloud/payment#add-a-payment-method).

### Why can't I create more than 3 projects and 5 snapshots? 
That is the initial limit for new users. If you want to create more projects,
[let us know](/help-center).

### Is it possible to upgrade a project to use more RAM?  
Yes, it is. You can find detailed instructions in [Memgraph Cloud
documentation](/docs/memgraph-cloud/cloud-projects#resize-a-project).

### I've created a project with 2GB RAM, but Memgraph Labs says there is only 1.54GB available. Why is that so?
A par of RAM is allocated to the operating system and other services. They
usually take 13-15% of the total RAM. Approximate free RAM is: 
- 1GB RAM Memgraph Cloud project has about 860 MB free RAM
- 2GB RAM Memgraph Cloud project has about 1.60 GB free RAM
- 4GB RAM Memgraph Cloud project has about 3.40 GB free RAM
- 8GB RAM Memgraph Cloud project has about 6.7 GB free RAM
- 16GB RAM Memgraph Cloud project has about 14 GB free RAM
- 32GB RAM Memgraph Cloud project has about 28 GB free RAM

### I've created a new project, and when I try to connect to the instance, I get an error: Unable to connect.
Upon creating a project, Memgraph loads all the MAGE algorithms, so it takes
some time to load them all. Wait 30 seconds, and then try to connect again.

### I’ve paused my project and resumed it, but my Memgraph’s IP is different now? 
When you pause your project, usually the IP stays the same, but sometimes your
IP can be released and a new one will be allocated. You can always check the IP
in the connection details. 

### How can I retrieve my project password?
If you have forgotten your project password, we can't help you. We don't have a
way of finding out or resetting your project password.

### How can I connect to my project?
You can connect to an instance running within the Memgraph Cloud project via
**Memgraph Lab**, a visual interface, **mgconsole**, command-line interface, or
one of many drivers. You can find detailed instructions in [Memgraph Cloud
documentation](/docs/memgraph-cloud/cloud-connect).

### How can I backup my project?
A project is backed up by creating a snapshot with Amazon EBS. You cannot create
a snapshot if you are using a 14-day free trial version of Memgraph Cloud. You
can find detailed instructions in [Memgraph Cloud
documentation](/docs/memgraph-cloud/cloud-projects#back-up-a-project).

### Is AWS available?
Yes, Memgraph cloud is running at AWS.

### Is GCP available?
No, at the moment, Memgraph cloud is not available on the Google Cloud Platform.


