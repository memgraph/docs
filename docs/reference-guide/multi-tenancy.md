## Multi-Tenant Support
*ENTERPRISE ONLY FEATURE*

Multi-tenancy support in Memgraph allows users to manage multiple isolated databases within a single instance. The primary goal is to enable efficient resource isolation, data integrity, and access control for different clients.

In the current version all isolated databases share the underlying resources; there is no way to limit CPU or RAM usage of a particular database, instead there is only the global limitations imposed on Memgraph as a whole.

### Default database
A default database called 'memgraph' is created during startup. New users will by default have access to this database only.
*NOTE:* The default database name cannot be changed.

### Backwards Compatibility
The multi-tenant feature ensures backwards compatibility, enabling smooth version upgrades and downgrades without disrupting user experience. When upgrading all previous data will be migrated to the default database; downgrading will delete all other databases and preserve only data contained in the default database.

### Isolated Databases
Isolated databases in Memgraph function as separate single-database Memgraph instances. Queries executed against a particular database should work as if it was the only database in the system. No cross database contamination should be possible.
Users interact with individual databases; cross-database queries are not allowed.

### Database Configuration and Data Directory
Currently all isolated databases share the same configuration.
*NOTE:* There is no way to specify a per-database configuration.

The only difference between them is the location of the data directory. The specified data directory is used as the root and still holds the data associated with the default database. All other databases are located in a new directory in `data_directory/databases/*db_name*`.

The default `memgraph` also has a directory `data_directory/databases/memgraph`, however, it only contains symbolic links back to the root.
*NOTE:* Some links are proactively created and, depending on the configuration, may be broken.

## User Interface

### Cypher Queries for Multi-Tenancy
Users interact with multi-tenant features through specialized Cypher queries:
1. `CREATE DATABASE name`: Creates a new database
2. `DROP DATABASE name`: Deletes the specified database
3. `SHOW DATABASES`: Lists all currently active databases and tags the currently selected one
4. `USE DATABASE name`: Switches the focus to the specified database (disabled in a transaction)
5. `GRANT DATABASE name TO user`: Grant user the access right to the specified database
6. `REVOKE DATABASE name FROM user`: Revoke user the access right to the specified database
7. `SET MAIN DATABASE name FOR user`: Sets the user's default (landing) database
8. `SHOW DATABASE PRIVILEGES FOR user`: Lists user's database access rights

### User's Main Database
Administrators assign default databases for users, ensuring a seamless and secure connection experience.
User will not be able to connect to Memgraph if they do not have access rights to their default database. This might happen if the database was deleted or if the access rights were revoked.

### User Privileges and Database Access
Authentication and authorization data is shared among databases. There is a single source of truth.
A single user can have access to multiple databases, with a global set of privileges.
*NOTE:* Currently there is no way to grant per-database privileges.

Access to all databases can be granted/revoked by using a wildcard, as in:
`GRANT DATABASE * TO user;` or `REVOKE DATABASE * FROM user;`.

### Additional Multi-Tenant Privileges
Administrators control multi-tenant privileges with:
- `MULTI_DATABASE_USE`: Allows switching databases and listing databases.
- `MULTI_DATABASE_EDIT`: Permits creating and deleting databases.

### Command-line Arguments
The `data_recovery_on_startup` flag replaces `storage_recover_on_startup`, recovering individual databases and their contents during startup.
*NOTE:* `storage_recover_on_startup` is still active but deprecated.

`storage_delete_on_drop` if set to true will delete the underlying directories associated with the database being dropped.

### Using Neo4j Drivers
Neo4j drivers interact with multi-tenant databases in two ways:
1. Through Cypher queries.
2. Defining the `database` field. The `USE DATABASE` query is disabled if the database field is defined. The query will always run against the defined database.

Example using Neo4j Python driver:
```python
import neo4j

driver = neo4j.GraphDatabase.driver("bolt://localhost:7687", auth=("user", "pass"))

with driver.session() as session:
    session.run(...)  # Runs against default database
    session.run("USE DATABASE db1")
    session.run(...)  # Runs against db1

with driver.session(database="db2") as session:
    session.run(...)  # Runs against db2
    session.run("USE DATABASE db1")  # Error: database switching disabled
```

### Audit Logs
Audit logs are extended with the active database name. The database name is added right after the username field.
