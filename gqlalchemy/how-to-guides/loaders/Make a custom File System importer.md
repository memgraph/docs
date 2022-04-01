---
id: custom-file-system-importer
title: Make a custom File System importer
sidebar_label: Make custom File System
---

> To learn how to import table data from a file to Memgraph database, head
> over to [How to import table data](#TODO put link).

Should you want to read from a filesystem not currently supported by Gqlalchemy, or use a file type currently not readable, you can implement your own by extending abstract classes `FileSystemHandler` and `DataLoader`, respectively.



## Implementing a new FileSystemHandler

For this guide, we will focus on using the existing `PyarrowDataLoader` capable of reading `csv`, `parquet`, `orc` and `ipc/feather/arrow` file formats. Pyarrow reader supports [fsspec](https://filesystem-spec.readthedocs.io/en/latest/)-compatible filesystems, so in order to implement an Azure Blob filesystem, you need to follow these steps.

### 1. Extend the FileSystemHandler class

This class holds the connection to the filesystem service and handles the path from which the `DataLoader` object reads. To get an fsspec-compatible instance of an Azure Blob connection, we can use the `adlfs` package. Then, we override the `get_path` method

```python=
import adlfs

class AzureBlobFileSystemHandler(FileSystemHandler):
    
    def __init__(self, **kwargs) -> None:
        """Initializes connection and data container."""
        self.fs = adlfs.AzureBlobFileSystem(
            account_name=kwargs["blob_account_name"],
            account_key=kwargs["blob_account_key"],
        )
        self._container_name = kwargs["blob_container_name"]

    def get_path(self, collection_name: str, file_extension: str) -> str:
        """Get file path in file system."""
        return f"{self._container_name}/{collection_name}.{file_extension}"
```

### 2. Wrap the TableToGraphImporter

Next, we can wrap the `TableToGraphImporter` class and make our own `AzureBlobImporter` which initializes the `AzureBlobFileSystemHandler` and `PyarrowDataLoader` objects and passes the `DataLoader` to the `TableToGraphImporter`.

```python
class AzureBlobImporter(TableToGraphImporter):
    """TableToGraphImporter wrapper for use with Azure Blob File System."""

    def __init__(
        self, file_extension: str, data_configuration: Dict[str, Any], memgraph: Optional[Memgraph] = None, **kwargs
    ) -> None:
        file_system_handler = AzureBlobFileSystemHandler(**kwargs)
        data_loader = PyarrowDataLoader(file_extension=file_extension, file_system_handler=file_system_handler)
        super().__init__(
            data_loader=data_loader,
            data_configuration=data_configuration,
            memgraph=memgraph,
        )
```

### 3. Call translate()

Finally, to use your custom filesystem, initialize the Importer class and call `translate()`

```python
importer = AzureBlobImporter(
    file_extension="parquet",
    data_configuration=parsed_yaml,
    blob_account_name="your_account_name",
    blob_account_key="your_account_key",
    container_name="test"
)

importer.translate(drop_database_on_start=True)
```

If you want to see our full implementation of `AzureBlobFileSystem` and other components of the loader, have a look into our code. And if you make a feature we could use, you can make a PR on our Gqlalchemy [github](https://github.com/memgraph/gqlalchemy). If you have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).
