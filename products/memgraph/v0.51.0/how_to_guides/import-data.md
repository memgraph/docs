## How to Import Data?

Memgraph comes with tools for importing data into the database. Data can be
imported either using the [CSV import tool](#import-csv) or using saved
[cypher queries](#import-cypher) with `mg_client` running in non-interactive
mode.

### CSV Import Tool {#import-csv}

CSV is a universal and very versatile data format used to store large quantities of data.
Each Memgraph database instance has a CSV import tool installed called `mg_import_csv`.
The CSV import tool should be used for initial bulk ingestion of data into the database.
Upon ingestion, the CSV importer creates a snapshot that will be used by the database to recover its state on its next startup.

If you are already familiar with the Neo4j bulk import tool then using the `mg_import_csv` tool should be easy.
The CSV import tool is fully compatible with the (Neo4j CSV format)[https://neo4j.com/docs/operations-manual/current/tools/import/].
If you already have a pipeline set-up for Neo4j, you should only replace `neo4j-admin import` with `mg_import_csv`.

#### CSV File Format

Each row of a CSV file represents a single entry that should be imported into the database.
Both nodes and relationships can be imported into the database using CSV files.

Each set of CSV files must have a header that describes the data that is stored in the CSV files.
Each field in the CSV header is in the format `<name>[:<type>]` which identifies the name that should be used for that column and the type that should be used for that column.
The type is optional and defaults to `string` (see the following chapter).

Each CSV field must be divided using the delimiter (`--delimiter` flag) and each CSV field can either be quoted or unquoted.
When the field is quoted, the first and last character in the field *must* be the quote character (`--quote` flag).
If the field isn't quoted, and a quote character appears in it, it is treated as a regular character.
If a quote character appears inside a quoted string then the quote character must be doubled in order to escape it.
Line feeds and carriage returns are ignored in the CSV file, also, the file can't contain a NULL character.

The CSV parser uses the same logic as the standard Python CSV parser.
The data is parsed in the same way as the following snippet:
```
import csv
for row in csv.reader(stream, strict=True):
    # process 'row'
```

Python uses 'excel' as the default dialect when parsing CSV files and the default settings for the CSV parser are:
 - delimiter: ','
 - doublequote: True
 - escapechar: None
 - lineterminator: '\r\n'
 - quotechar: '"'
 - skipinitialspace: False

The above snippet can be expanded to:
```
import csv
for row in csv.reader(stream, delimiter=',', doublequote=True,
                      escapechar=None, lineterminator='\r\n',
                      quotechar='"', skipinitialspace=False,
                      strict=True):
    # process 'row'
```

For more information about the meaning of the above values, see:
https://docs.python.org/3/library/csv.html#csv.Dialect

##### Properties

Both nodes and relationships can have properties added to them.
When importing properties the CSV importer uses the name specified in the header of the corresponding CSV column for the name of the property.
A property is designated by specifying one of the following types in the header:
 - `integer`, `int`, `long`, `byte`, `short`: creates an integer property
 - `float`, `double`: creates a float property
 - `boolean`, `bool`: creates a boolean property
 - `string`, `char`: creates a string property

When importing a boolean value, the CSV field should contain exactly the text `true` to import a `True` boolean value.
All other text values are treated as a boolean value `False`.

If you want to import an array of values you can do so by appending `[]` to any of the above types.
The values of the array are then determined by splitting the raw CSV value using the array delimiter (`--array-delimiter` flag) character.

Assuming that the array delimiter is `;`, the following example:
```plaintext
first_name,last_name:string,number:integer,aliases:string[]
John,Doe,1,Johnny;Jo;J-man
Melissa,Doe,2,Mel
```

Will yield these results:
```plaintext
CREATE ({first_name: "John", last_name: "Doe", number: 1, aliases: ["Johnny", "Jo", "J-man"]});
CREATE ({first_name: "Melissa", last_name: "Doe", number: 2, aliases: ["Mel"]});
```

##### Nodes

When importing nodes, several more types can be specified in the header of the CSV file (along with all property types):
 - `ID`: id of the node that should be used as the node ID when importing relationships
 - `LABEL`: designates that the field contains additional labels for the node
 - `IGNORE`: designates that the field should be ignored

The `ID` field type sets the internal ID that will be used for the node when creating relationships.
It is optional and nodes that don't have an ID value specified will be imported, but can't be connected to any relationships.
If you want to save the ID value as a property in the database, just specify a name for the ID (`user_id:ID`).
If you just want to use the ID during the import, just leave out the name of the field (`:ID`).
The `ID` field also supports creating separate ID spaces.
The ID space is specified with the ID space name appended to the `ID` type in parentheses (`ID(user)`).
That allows you to have the same IDs (by value) for multiple different node files (for example, numbers from 1 to N).
The IDs in each ID space will be treated as an independent set of IDs that don't interfere with IDs in another ID space.

The `LABEL` field type adds additional labels to the node.
The value is treated as an array type so that multiple additional labels can be specified for each node.
The value is split using the array delimiter (`--array-delimiter` flag).

##### Relationships

In order to be able to import relationships, you must import the nodes in the same invocation of `mg_import_csv` that is used to import the relationships.

When importing relationships, several more types can be specified in the header of the CSV file (along with all property types):
 - `START_ID`: id of the start node that should be connected with the relationship
 - `END_ID`: id of the end node that should be connected with the relationship
 - `TYPE`: designates the type of the relationship
 - `IGNORE`: designates that the field should be ignored

The `START_ID` field type sets the start node that should be connected with the relationship to the end node.
The field *must* be specified and the node ID must be one of the node IDs that were specified in the node CSV files.
The name of this field is ignored.
If the node ID is in an ID space, you can specify the ID space for the in the same way as for the node ID (`START_ID(user)`).

The `END_ID` field type sets the end node that should be connected with the relationship to the start node.
The field *must* be specified and the node ID must be one of the node IDs that were specified in the node CSV files.
The name of this field is ignored.
If the node ID is in an ID space, you can specify the ID space for the in the same way as for the node ID (`END_ID(user)`).

The `TYPE` field type sets the type of the relationship.
Each relationship *must* have a relationship type, but it doesn't necessarily need to be specified in the CSV file, it can also be set externally for the whole CSV file.
The name of this field is ignored.

#### CSV Importer Flags

The importer has many command line options that allow you to customize the way the importer loads your data.

The two main flags that are used to specify the input CSV files are `--nodes` and `--relationships`.

The `--nodes` flag is used to specify CSV files that contain the nodes to the importer.
Multiple files can be specified in each supplied `--nodes` flag.
Files that are supplied in one `--nodes` flag are treated by the CSV parser as one big CSV file.
Only the first line of the first file is parsed for the CSV header, all other files (and rows) are treated as data.
This is useful when you have a very large CSV file and don't want to edit its first line just to add a CSV header.
Instead, you can specify the header in a separate file (eg. `users_header.csv`) and have the data intact in the large file (eg. `users.csv`).
Also, you can supply additional labels for each set of node files.
The format of this flag is: `[<label>[:<label>]...=]<file>[,<file>][,<file>]...`.
Take note that only the `<file>` part is mandatory, all other parts of the flag value are optional.
Multiple `--nodes` flags can be supplied to describe multiple sets of different node files.
For the importer to work, at least one `--nodes` flag must be supplied.

The `--relationships` flag is used to specify CSV files that contain the relationships to the importer.
Multiple files can be specified in each supplied `--relationships` flag.
Files that are supplied in one `--relationships` flag are treated by the CSV parser as one big CSV file.
Only the first line of the first file is parsed for the CSV header, all other files (and rows) are treated as data.
This is useful when you have a very large CSV file and don't want to edit its first line just to add a CSV header.
Instead, you can specify the header in a separate file (eg. `friendships_header.csv`) and have the data intact in the large file (eg. `friendships.csv`).
Also, you can set the type of all relationships in the files for each set of relationships files.
The format of this flag is: `[<type>=]<file>[,<file>][,<file>]...`.
Take note that only the `<file>` part is mandatory, all other parts of the flag value are optional.
Multiple `--relationships` flags can be supplied to describe multiple sets of different relationship files.
The `--relationships` flag isn't mandatory.

The `--delimiter` flag (default `,`) sets the delimiter that should be used when splitting the CSV fields.

The `--quote` flag (default `"`) sets the quote character that should be used to quote a CSV field.

The `--array-delimiter` flag (default `;`) sets the delimiter that should be used when splitting array values.

The `--id-type` flag (default `STRING`) specifies which data type should be used to store the supplied node IDs when storing them as properties (if the field name is supplied).
The supported values are either `STRING` or `INTEGER`.

The `--ignore-empty-strings` flag (default `false`) tells the importer to treat all empty strings as `Null` values instead of an empty string value.

The `--ignore-extra-columns` flag (default `false`) tells the importer to ignore all columns (instead of raising an error) that aren't specified after the last specified column in the CSV header.

The `--skip-bad-relationships` flag (default `false`) tells the importer to ignore all relationships (instead of raising an error) that refer to nodes that don't exist in the node files.

The `--skip-duplicate-nodes` flag (default `false`) tells the importer to ignore all duplicate nodes (instead of raising an error).
Duplicate nodes are nodes that have an ID that is the same as another node that was already imported.

The `--trim-strings` flag (default `false`) tells the importer to trim all of the loaded CSV field values before processing them further.
Trimming the fields removes all leading and trailing whitespace from them.

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
will store the snapshot inside its configured data directory using the
configured properties on edges setting. If the configuration isn't found, you
will need to use the `--data-directory` option to specify the data directory
and `--storage-properties-on-edges` to specify whether properties on edges are
enabled. Naturally, you can use the same options to override the default
behavior. Memgraph will recover the imported data on the next startup by
looking in the data directory. For more details on Memgraph's durability and
data recovery features, please check out the appropriate
[article](../concepts/storage.md).

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

Now, you can import the dataset using the CSV importer tool.

WARNING: Your existing snapshot and WAL data will be considered obsolete, and
Memgraph will load the new dataset.

Use the following command:

```bash
mg_import_csv --nodes comment_nodes.csv --nodes forum_nodes.csv --relationships relationships.csv
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
  --nodes /import-data/comment_nodes.csv --nodes /import-data/forum_nodes.csv \
  --relationships /import-data/relationships.csv
```

Next time you run Memgraph, the dataset will be loaded.

### Importing Cypher Queries {#import-cypher}

When Memgraph is running, cypher queries are imported by running `mg_client` in
non-interactive mode. The user can import queries saved in e.g. `queries.txt`
by issuing the following shell command:

```plaintext
mg_client < queries.txt
```

If you installed Memgraph using Docker, you will need to run the client using
the following command:

```plaintext
docker run -i --entrypoint=mg_client memgraph --host HOST < queries.txt`
```

Remember to replace `HOST` with valid IP of the container (see
[Note for OS X/macOS Users](../tutorials/quick-start.md#OSX-note)).

For more information about `mg_client` options run:

```plaintext
mg_client --help
```
