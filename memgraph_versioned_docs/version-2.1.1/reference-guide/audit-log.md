---
id: audit-log
title: Audit log (Enterprise)
sidebar_label: Audit log
---

Memgraph supports all query audit logging. When enabled, the audit log contains
records of all queries executed on the database.  Each executed query is one
entry (one line) in the audit log. The audit log itself is a CSV file.

All audit logs are written to
`<MEMGRAPH_DURABILITY_DIRECTORY>/audit/audit.log`.  The log is rotated using
`logrotate`, so entries in the `audit.log` file are always the newest entries.
Entries in `audit.log.1`, `audit.log.2.gz`, etc.  are older entries. The
default log rotation configuration can be found in `/etc/logrotate.d/memgraph`.
By default, the log is rotated every day and a full year of entries is
preserved. You can modify the values to your own needs and preferences.

## Format

The audit log contains the following information formatted into a CSV file:
```plaintext
<timestamp>,<address>,<username>,<query>,<params>
```
For each query, the supplied query parameters are also logged. The query is
escaped and quoted so that commas in queries don't affect the correctness of
the CSV. The parameters are encoded as JSON objects and are then escaped and
quoted.

## Example

This is an example of the audit log:
```plaintext
1551376833.225395,127.0.0.1,admin,"MATCH (n) DETACH DELETE n","{}"
1551376833.257825,127.0.0.1,admin,"CREATE (n {name: $name})","{\"name\":\"alice\"}"
1551376833.273546,127.0.0.1,admin,"MATCH (n), (m) CREATE (n)-[:e {when: $when}]->(m)","{\"when\":42}"
1551376833.300955,127.0.0.1,admin,"MATCH (n), (m) SET n.value = m.value","{}"
```

We can see that all of the queries were executed from the loopback address and
were executed by the user `admin`.  The executed queries are:

 Query                                            | Parameters
--------------------------------------------------|-----------
MATCH (n) DETACH DELETE n                         | {}
CREATE (n {name: $name})                          | {"name": "alice"}
MATCH (n), (m) CREATE (n)-[:e {when: $when}]->(m) | {"when": 42}
MATCH (n), (m) SET n.value = m.value              | {}

## Parsing the log

If you wish to parse the log, the following Python snippet shows how to extract
data from the audit log:
```python
import csv
import json

with open("audit.log") as f:
    reader = csv.reader(f, delimiter=',', doublequote=False,
                        escapechar='\\', lineterminator='\n',
                        quotechar='"', quoting=csv.QUOTE_MINIMAL,
                        skipinitialspace=False, strict=True)
    for line in reader:
        timestamp, address, username, query, params = line
        params = json.loads(params)
        # Rest of your code that processes the logs.
```

## Flags

This section contains the list of flags that are used to configure audit
logging in Memgraph.

 Flag                               | Description
------------------------------------|------------
 `--audit-enabled`                  | Enables audit logging.
 `--audit-buffer-size`              | Controls the in-memory buffer size used for audit logs.
 `--audit-buffer-flush-interval-ms` | Controls the time interval (in milliseconds) used for flushing the in-memory buffer to disk.
