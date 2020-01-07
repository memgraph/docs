## How to Import Data?

Memgraph comes with tools for importing data into the database. Currently, data
can be imported only using saved [cypher queries](#import-cypher) with
`mg_client` running in non-interactive mode.

Importing directly from CSV files is not supported in this release but will be
supported in some later release.

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
