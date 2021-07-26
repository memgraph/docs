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
with the [Neo4j CSV
format](https://neo4j.com/docs/operations-manual/current/tools/import/).  If
you already have a pipeline set-up for Neo4j, you should only replace
`neo4j-admin import` with `mg_import_csv`.


### How to Use the CSV Import Tool?

If you want to learn more about CSV Import Tool or how should you format your 
files to fit the requirments of this tool, please visit out [Reference Guide](/reference-guide/CSV-import-tool.md)

<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'}
  ]}>
  <TabItem value="docker">
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

You can pass CSV files containing node data using the `--nodes` option.
Multiple files can be specified by repeating the `--nodes` option.  At least
one node file should be specified. Similarly, graph edges (also known as
relationships) are passed via the `--relationships` option.  Multiple
relationship files are imported by repeating the option. Unlike nodes,
relationships are not required.

Internally, the CSV import tool creates a database snapshot from the CSV files.
By default, the tool will search for the installed Memgraph configuration and
will store the snapshot inside its configured data directory using the
configured properties on edges setting. If the configuration isn't found, you
will need to use the `--data-directory` option to specify the data directory
and `--storage-properties-on-edges` to specify whether properties on edges are
enabled. Naturally, you can use the same options to override the default
behavior. Memgraph will recover the imported data on the next startup by
looking in the data directory. For more details on Memgraph's durability and
data recovery features, please check out the appropriate
[article](../concepts/storage.md).


:::caution
It is also important to note that importing CSV data using the `mg_import_csv`
command should be a one-time operation before running Memgraph. In other
words, this tool should not be used to import data into an already running
Memgraph instance.
:::

### Example

Let's import a simple dataset.

Store the following in `comment_nodes.csv`.

```csv
id:ID(COMMENT_ID),country:string,browser:string,content:string,:LABEL
0,Croatia,Chrome,yes,Message;Comment
1,United Kingdom,Chrome,thanks,Message;Comment
2,Germany,,LOL,Message;Comment
3,France,Firefox,I see,Message;Comment
4,Italy,Internet Explorer,fine,Message;Comment
```

Now, let's add `forum_nodes.csv`.

```csv
id:ID(FORUM_ID),title:string,:LABEL
0,General,Forum
1,Support,Forum
2,Music,Forum
3,Film,Forum
4,Programming,Forum
```

And finally, set relationships between comments and forums in
`relationships.csv`.

```csv
:START_ID(COMMENT_ID),:END_ID(FORUM_ID),:TYPE
0,0,POSTED_ON
1,1,POSTED_ON
2,2,POSTED_ON
3,3,POSTED_ON
4,4,POSTED_ON
```

If you want to add properties to your relationships, you add them to the header:

```csv
:START_ID(COMMENT_ID),:END_ID(FORUM_ID),:TYPE,date:string
0,0,POSTED_ON,26/07/2021
1,1,POSTED_ON,24/07/2021
2,2,POSTED_ON,03/02/2021
3,3,POSTED_ON,11/04/2021
4,4,POSTED_ON,26/07/2021
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
  docker cp comment_nodes.csv mg_import_helper:/import-data
  docker cp forum_nodes.csv mg_import_helper:/import-data
  docker cp relationships.csv mg_import_helper:/import-data
  docker rm mg_import_helper
  ```

  Then, run the importer with the following:

  ```bash
  docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \
    --entrypoint=mg_import_csv memgraph \
    --nodes /import-data/comment_nodes.csv --nodes /import-data/forum_nodes.csv \
    --relationships /import-data/relationships.csv
  ```

  </TabItem>
  <TabItem value= 'linux'>

  ```bash
  sudo -u memgraph mg_import_csv --nodes comment_nodes.csv --nodes forum_nodes.csv --relationships relationships.csv
  ```

  </TabItem>
</Tabs>

Next time you run Memgraph, the dataset will be loaded.


