---
id: table-to-graph-importer
title: Import table data to graph database
sidebar_label: Import table to graph
---

This guide will show you how to use `loaders.py` to translate table data in a file to graph data and import it to Memgraph. Currently we support reading of `csv`, `parquet`, `orc`, `ipc/feather/arrow` file formats via Pyarrow. Data loading is implemented from `LocalFileSystem`, `AzureBlobFileSystem` and `AmazonS3FileSystem`.

> Make sure you have a running Memgraph instance. If you're not sure how to run
> Memgraph, check out the Memgraph [Quick start](/memgraph/#quick-start).

## Loading a CSV file from LocalFileSystem

Let's say you have a simple table data in a csv file stored at `/home/user/table_data`:
```csv
name,surname,grade
Ivan,Horvat,4
Marko,Andric,5
Luka,Lukic,3
```

In order to make a translation from table to graph data, you need to define a data configuration object. This can be done inside your code by defining a dictionary, but it is recommended to use a yaml file, structured like this:

```yaml
indices:    # indices to be created for each table
  individuals:    # name of table containing individuals with ind_id
  - ind_id
  address:
  - add_id


name_mappings:    # how we want to name node labels
  individuals:
    label: INDIVIDUAL    # nodes made from individuals table will have INDIVIDUAL label
  address:
    label: ADDRESS
    column_names_mapping: {"current_column_name": "mapped_name"}    # (optional) map column names


one_to_many_relations:
  address: []        # currently needed, leave [] if no relations to define
  individuals:
    - foreign_key: # foreign key used for mapping; 
      column_name: add_id         # specifies its column
      reference_table: address    # name of table from which the foreign key is taken
      reference_key: add_id       # column name in reference table from which the foreign key is taken
    label: LIVES_IN        # label applied to relationship created
      from_entity: False     # (optional) define direction of relationship created


many_to_many_relations:       # intended to be used in case of associative tables
  example:
    foreign_key_from:        # describes the source of the relationship
      column_name:
      reference_table:
      reference_key:
    foreign_key_to:          # describes the destination of the relationship
      column_name:
      reference_table:
      reference_key:
    label:

```

For our example we do not need all of those fields, we only need to define `indices` and `one_to_many_relations`.

```yaml
indices:
    example:
    - name

name_mappings:
    example:
        label: PERSON

one_to_many_relations:
    example: []
```

In order to read the data configuration yaml file, you can run
```python
with open("./example.yaml", "r") as stream:
    try:
        parsed_yaml = yaml.load(stream, Loader=SafeLoader)
    except yaml.YAMLError as exc:
        print(exc)
```

Having defined the data configuration for translation, all we need to do is make an instance of an Importer and call `translate()`.
```python
importer = LocalFileSystemImporter(
    file_extension="parquet",
    data_configuration=parsed_yaml,
    local_storage_path="/home/user/table_data",
)

importer.translate(drop_database_on_start=True)
```

Aside from `csv`, currently we also support reading of `parquet`, `orc`, `ipc`, `feather` and `arrow` file formats via Pyarrow.
Next, we will go through the Importer a bit more and show you how to use a different storage solution. 

## Using a cloud storage solution

Currently, along with LocalFileSystem we also support AmazonS3FileSystem and AzureBlobFileSystem. To connect to Azure Blob, simply run

```python
importer = AzureBlobImporter(
    file_extension="parquet",
    data_configuration=parsed_yaml,
    blob_account_name="your_account_name",
    blob_account_key="your_account_key",
    container_name="test"
)
```


Hopefully this guide has taught you how to import table data to Memgraph. If you have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).
