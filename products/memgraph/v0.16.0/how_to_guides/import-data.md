## How to Import Data?

Memgraph comes with tools for importing data into the database. Currently, only
[import of CSV](#import-csv) format is supported. We plan to support more
formats in the future. Furthermore, [cypher queries](#import-cypher) saved in a
file can be imported with `mg_client` running in non-interactive mode.

### CSV Import Tool {#import-csv}

CSV data should be in Neo4j CSV compatible format. Detailed format
specification can be found
[here](https://neo4j.com/docs/operations-manual/current/tools/import/file-header-format/).

As you can see from the link above, the header mostly consists of
`<name>:<field_type>` pairs. If the `<field_type>` is absent, the import tool
will default to `string`.

#### How to Use the CSV Import Tool?

The import tool is run from the console, using the `mg_import_csv` command.

If you installed Memgraph using Docker, you will need to run the importer
using the following command:

```bash
docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \
  --entrypoint=mg_import_csv memgraph
```

You can pass CSV files containing node data using the `--nodes` option.
Multiple files can be specified by repeating the `--nodes` option.  At least
one node file should be specified. Similarly, graph edges (also known as
relationships) are passed via the `--relationships` option.  Multiple
relationship files are imported by repeating the option. Unlike nodes,
relationships are not required.

Internally, the CSV import tool creates a database snapshot from the CSV files.
By default, the tool will search for the installed Memgraph configuration and
will store the snapshot inside its configured durability directory. If the
configuration isn't found, you will need to use the `--out` option to specify
the output file. Naturally, you can use the same option to override the default
behaviour.

Memgraph will recover the imported data on the next startup by looking in the
durability directory. It is important to note that your durability directory
should not contain any WAL files when using the CSV import tool. If it does,
Memgraph will try to recover from those files as well and they are most likely
not compatible with the contents of the newly created snapshot. For more
details on Memgraph's durability and data recovery features, please check out
the appropriate [article](../concepts/storage.md).

It is also important to note that importing CSV data using the `mg_import_csv`
command should be a one-time operation before running Memgraph. In other
words, this tool should not be used to import data into an already running
Memgraph instance.

For information on other options, run:

```bash
mg_import_csv --help
```

When using Docker, this translates to:

```bash
docker run --entrypoint=mg_import_csv memgraph --help
```

#### Example

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

Now, you can import the dataset in Memgraph.

WARNING: Your existing snapshot will be considered obsolete, and Memgraph
will load the new dataset.

Use the following command:

```bash
mg_import_csv --overwrite --nodes=comment_nodes.csv --nodes=forum_nodes.csv --relationships=relationships.csv
```

If using Docker, things are a bit more complicated. First you need to move the
CSV files where the Docker image can see them:

```bash
mkdir -p /var/lib/docker/volumes/mg_import/_data
cp comment_nodes.csv forum_nodes.csv relationships.csv /var/lib/docker/volumes/mg_import/_data
```

Then, run the importer with the following:

```bash
docker run -v mg_lib:/var/lib/memgraph -v mg_etc:/etc/memgraph -v mg_import:/import-data \
  --entrypoint=mg_import_csv memgraph \
  --overwrite \
  --nodes=/import-data/comment_nodes.csv --nodes=/import-data/forum_nodes.csv \
  --relationships=/import-data/relationships.csv
```

Next time you run Memgraph, the dataset will be loaded.

### Importing Cypher Queries {#import-cypher}

When Memgraph is running, cypher queries are imported by running `mg_client` in
non-interactive mode. The user can import queries saved in e.g. `queries.txt`
by issuing the following shell command:

```bash
mg_client < queries.txt
```

If you installed Memgraph using Docker, you will need to run the client using
the following command:

```bash
docker run -i --entrypoint=mg_client memgraph --host HOST < queries.txt`
```

Remember to replace `HOST` with valid IP of the container (see
[Note for OS X/macOS Users](../tutorials/quick-start.md#OSX-note)).

For more information about `mg_client` options run:

```bash
mg_client --help
```
