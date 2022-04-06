---
id: custom-file-system-importer
title: How to make a custom file system importer
sidebar_label: Make custom file system importer
---

> To learn how to import table data from a file to Memgraph database, head
> over to the How to import table data guide.

If you want to read from a file system not currently supported by **GQLAlchemy**, or use a file type currently not readable, you can implement your own by extending abstract classes `FileSystemHandler` and `DataLoader`, respectively.

## Implementing a new `FileSystemHandler`

For this guide, you will use the existing `PyArrowDataLoader` capable of reading
CSV, Parquet, ORC and IPC/Feather/Arrow file formats. The PyArrow loader class
supports [fsspec](https://filesystem-spec.readthedocs.io/en/latest/)-compatible
file systems, so to implement an **Azure Blob** file system, you need to follow these
steps.

### 1. Extend the `FileSystemHandler` class

This class holds the connection to the file system service and handles the path
from which the `DataLoader` object reads. To get a fsspec-compatible instance of
an Azure Blob connection, you can use the `adlfs` package. All that's left to do
is to override the `get_path` method.

```python
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

### 2. Wrap the `TableToGraphImporter`

Next, you need to wrap the `TableToGraphImporter` class and make your own `AzureBlobImporter`, which initializes the `AzureBlobFileSystemHandler` and `PyArrowDataLoader` objects, and passes the `DataLoader` to the `TableToGraphImporter`.

```python
class AzureBlobImporter(TableToGraphImporter):
    """TableToGraphImporter wrapper for use with Azure Blob File System."""

    def __init__(
        self, file_extension: str, data_configuration: Dict[str, Any], memgraph: Optional[Memgraph] = None, **kwargs
    ) -> None:
        file_system_handler = AzureBlobFileSystemHandler(**kwargs)
        data_loader = PyArrowDataLoader(file_extension=file_extension, file_system_handler=file_system_handler)
        super().__init__(
            data_loader=data_loader,
            data_configuration=data_configuration,
            memgraph=memgraph,
        )
```

### 3. Call `translate()`

Finally, to use your custom file system, initialize the Importer class and call `translate()`

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

If you want to see the full implementation of the `AzureBlobFileSystem` and other loader components, have a look [at the code](https://github.com/memgraph/gqlalchemy). Feel free to create a PR on the GQLAlchemy repository if you think of a feature we could use. If you have any more questions, join our community and ping us on
[Discord](https://discord.gg/memgraph).
