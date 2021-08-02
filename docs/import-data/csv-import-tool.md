---
id: csv-import-tool
title: CSV Import Tool
sidebar_label: CSV Import Tool
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

CSV is a universal and very versatile data format used to store large
quantities of data.  Each Memgraph database instance has a CSV import tool
installed called `mg_import_csv`.  The CSV import tool should be used for
initial bulk ingestion of data into the database.  Upon ingestion, the CSV
importer creates a snapshot that will be used by the database to recover its
state on its next startup.

If you are already familiar with the Neo4j bulk import tool, then using the
`mg_import_csv` tool should be easy.  The CSV import tool is fully compatible
with the [Neo4j CSV format](https://neo4j.com/docs/operations-manual/current/tools/import/).  If
you already have a pipeline set-up for Neo4j, you should only replace
`neo4j-admin import` with `mg_import_csv`.

:::info

For more detailed information about CSV Import Tool, check our [Reference Guide](../reference-guide/import-data/CSV-import-tool)

:::


### How to Use the CSV Import Tool?

If you want to learn more about CSV Import Tool or how should you format your 
files to fit the requirments of this tool, please visit out [Reference Guide](../reference-guide/import-data/CSV-import-tool.md)

<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
  <TabItem value="docker">

  :::note
    If you are using image pulled from Docker Hub, all image names (`memgraph`) should be switched with `memgraph/memgraph` 
  :::

    If you installed Memgraph using Docker, you will need to run the importer
    using the following command:

  ```bash
  docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \
    --entrypoint=mg_import_csv memgraph
  ```

  When using Docker, this translates to:

  ```bash
  docker run --entrypoint=mg_import_csv memgraph --help
  ```

  </TabItem>
  <TabItem value= 'linux'>

  The import tool is run from the console, using the `mg_import_csv` command.
  The tool should be run as user `memgraph`, using the following command:

  ```
  sudo -u memgraph mg_import_csv
  ```

  For information on other options, run:

  ```bash
  sudo -u memgraph mg_import_csv --help
  ```
  </TabItem>
</Tabs>

:::caution
It is also important to note that importing CSV data using the `mg_import_csv`
command should be a one-time operation before running Memgraph. In other
words, this tool should not be used to import data into an already running
Memgraph instance.
:::

___

### Example

Let's import a simple dataset.

Store the following in `people_nodes.csv`.

```csv
id:ID(PERSON_ID),name:string,:LABEL
100,Daniel,Person
101,Alex,Person
102,Sarah,Person
103,Mia,Person
104,Lucy,Person
```

Let's add relationships between people in
`people_relationships.csv`.

```csv
:START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE
100,102,IS_FRIENDS_WITH
103,101,IS_FRIENDS_WITH
102,103,IS_FRIENDS_WITH
101,104,IS_FRIENDS_WITH
104,100,IS_FRIENDS_WITH
101,102,IS_FRIENDS_WITH
100,103,IS_FRIENDS_WITH
```

Now, you can import the dataset using the CSV importer tool.

:::caution

WARNING: Your existing snapshot and WAL data will be considered obsolete, and
Memgraph will load the new dataset.

:::

Use the following command:

<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
  <TabItem value="docker">


  If using Docker, things are a bit more complicated. First you need to copy the
  CSV files where the Docker image can see them:

  ```bash
  docker container create --name mg_import_helper -v mg_import:/import-data busybox
  docker cp people_nodes.csv mg_import_helper:/import-data
  docker cp people_relationships.csv mg_import_helper:/import-data
  docker rm mg_import_helper
  ```

  Then, run the importer with the following:

  ```bash
  docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \
    --entrypoint=mg_import_csv memgraph \
    --nodes /import-data/people_nodes.csv \
    --relationships /import-data/people_relationships.csv
  ```

  </TabItem>
  <TabItem value= 'linux'>

  ```bash
  sudo -u memgraph mg_import_csv --nodes people_nodes.csv --relationships people_relationships.csv
  ```

  </TabItem>
</Tabs>

Next time you run Memgraph, the dataset will be loaded.

### More Complex Example

Previous example is showcasing the simple graph with one node type and one relationship type. If we have more complex graphs,
the procedure is similar. Let's define the following dataset:

Add the following to `people_nodes.csv`: 

```csv
id:ID(PERSON_ID),name:string,age:int,city:string,:LABEL
100,Daniel,30,London,Person
101,Alex,15,Paris,Person
102,Sarah,17,London,Person
103,Mia,25,Zagreb,Person
104,Lucy,21,Paris,Person
```

Let's define the relationships between people in `people_relationships.csv` :

```csv
:START_ID(PERSON_ID),:END_ID(PERSON_ID),:TYPE, met_in:int
100,102,IS_FRIENDS_WITH,2014
103,105,IS_FRIENDS_WITH,2021
102,103,IS_FRIENDS_WITH,2005
101,104,IS_FRIENDS_WITH,2005
104,100,IS_FRIENDS_WITH,2018
105,102,IS_FRIENDS_WITH,2017
100,103,IS_FRIENDS_WITH,2001
```

Let's introduce another node type, Restaraunts, in `restaraunts_nodes.csv` :

```csv
id:ID(REST_ID),name:string,menu:string[],:LABEL
200, Mc Donalds, Fries;BigMac;McChicken;Apple Pie,Restaurant
201, KFC, Fried Chicken;Fries;Chicken Bucket,Restaurant
202, Subway, Ham Sandwich;Turkey Sandwich;Foot-long, Restaurant
203, Dominos, Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust, Restaurant
```

Let's define the relationships between people and restaraunts in `restaraunts_relationships.csv`:

```csv
:START_ID(PERSON_ID),:END_ID(REST_ID),:TYPE, liked:boolean
100,200,ATE_AT,true
103,201,ATE_AT,false
104,200,ATE_AT,true
101,202,ATE_AT,false
101,203,ATE_AT,false
101,200,ATE_AT,true
102,201,ATE_AT,true
```

Now, you can import the dataset using the CSV importer tool.

<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
  <TabItem value="docker">


  If using Docker, things are a bit more complicated. First you need to copy the
  CSV files where the Docker image can see them:

  ```bash
  docker container create --name mg_import_helper -v mg_import:/import-data busybox
  docker cp people_nodes.csv mg_import_helper:/import-data
  docker cp people_relationships.csv mg_import_helper:/import-data
  docker cp restaraunts_nodes.csv mg_import_helper:/import-data
  docker cp restaraunts_relationships.csv mg_import_helper:/import-data
  docker rm mg_import_helper
  ```

  Then, run the importer with the following:

  ```bash
  docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \
    --entrypoint=mg_import_csv memgraph \
    --nodes /import-data/people_nodes.csv \
    --nodes /import-data/restaraunts_nodes.csv \
    --relationships /import-data/people_relationships.csv \
    --relationships /import-data/restaraunts_relationships.csv
  ```

  </TabItem>
  <TabItem value= 'linux'>

  ```bash
  sudo -u memgraph mg_import_csv --nodes people_nodes.csv --relationships people_relationships.csv
  ```

  </TabItem>
</Tabs>