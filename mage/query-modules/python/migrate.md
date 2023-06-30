---
title: migrate
sidebar_label: migrate
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunOnSubgraph from '../../templates/_run_on_subgraph.mdx';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

A module that contains procedures describing graphs on a meta-level.

[![docs-source](https://img.shields.io/badge/source-migrate-FB6E00?logo=github&style=for-the-badge)](https://github.com/memgraph/mage/blob/main/python/migrate.py)

| Trait               | Value                                                 |
| ------------------- | ----------------------------------------------------- |
| **Module type**     | <Highlight color="#FB6E00">**util**</Highlight>  |
| **Implementation**  | <Highlight color="#FB6E00">**Python**</Highlight>     |
| **Parallelism**     | <Highlight color="#FB6E00">**sequential**</Highlight> |

## Procedures

### `mysql(table_or_sql, config, config_path, params)`

With `migrate.mysql` you can access MySQL and execute queries. The result table is converted into a stream,
and returned rows can be used to create graph structures. The value of the `config` parameter must be at least an empty map. If `config_path` is passed, every key,value pair from JSON file will overwrite any values in `config` file.

#### Input:

* `table_or_sql: str` ➡ Table name or an SQL query
* `config: mgp.Map` ➡ Connection configuration parameters (as in `mysql.connector.connect`)
* `config_path` ➡ Path to a JSON file containing configuration parameters (as in `mysql.connector.connect`)
* `params: mgp.Nullable[mgp.Any] (default=None)` ➡ Optionally, queries can be parameterized. In that case, `params` provides parameter values
    

#### Output:

* `row: mgp.Map`: The result table as a stream of rows

#### Usage:
Get count of rows:
```cypher
CALL migrate.mysql('example_table', {user:'memgraph',
        password:'password',
        host:'localhost',
        database:'demo_db'} )
YIELD row
RETURN count(row);
```

### `sql_server(table_or_sql, config, config_path, params)`

With `migrate.sql_server` you can access SQL Server and execute queries. The result table is converted into a stream, and returned rows can be used to create graph structures. The value of the `config` parameter must be at least an empty map. If `config_path` is passed, every key,value pair from JSON file will overwrite any values in `config` file.

#### Input:

* `table_or_sql: str` ➡ Table name or an SQL query
* `config: mgp.Map` ➡ Connection configuration parameters (as in `pyodbc.connect`)
* `config_path` ➡ Path to the JSON file containing configuration parameters (as in `pyodbc.connect`)
* `params: mgp.Nullable[mgp.Any] (default=None)` ➡ Optionally, queries can be parameterized. In that case, `params` provides parameter values
    
#### Output:

* `row: mgp.Map`: The result table as a stream of rows

#### Usage:
Get all data from database in form of map:
```cypher
CALL migrate.sql_server('example_table', {user:'memgraph',
        password:'password',
        host:'localhost',
        database:'demo_db'} )
YIELD row
RETURN row;
```

### `oracle_db(table_or_sql, config, config_path, params)`

With `migrate.oracle_db` you can access Oracle DB and execute queries. The result table is converted into a stream, and returned rows can be used to create graph structures. The value of the `config` parameter must be at least an empty map. If `config_path` is passed, every key,value pair from JSON file will overwrite any values in `config` file.


#### Input:

* `table_or_sql: str` ➡ Table name or an SQL query
* `config: mgp.Map` ➡ Connection configuration parameters (as in oracledb.connect),
* `config_path` ➡ Path to the JSON file containing configuration parameters (as in oracledb.connect)
* `params: mgp.Nullable[mgp.Any] (default=None)` ➡ Optionally, queries may be parameterized. In that case, `params` provides parameter values
    
#### Output:

* `row: mgp.Map`: The result table as a stream of rows

#### Usage:
Get the first 5000 rows from a database:
```cypher
CALL migrate.oracle_db('example_table', {user:'memgraph',
        password:'password',
        host:'localhost',
        database:'demo_db'} )
YIELD row
RETURN row
LIMIT 5000;
```

## Example

<Tabs
groupId="example"
defaultValue="run"
values={[
{label: 'Step 1: Running command', value: 'run'},
{label: 'Step 2: Results', value: 'result'},
]}>

  <TabItem value="run">

```cypher
CALL migrate.mysql('example_table', {user:'memgraph',
        password:'password',
        host:'localhost',
        database:'mydemodb'} )
YIELD row
RETURN count(row) as row_count;
```

  </TabItem>
  <TabItem value="result">

```plaintext
+------------------+
| row_count        |
+------------------+
| 4000             |
+------------------+
```

  </TabItem>
</Tabs>


  
