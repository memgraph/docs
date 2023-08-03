---
id: load-call-query-modules
title: Load and call query modules
sidebar_label: Load and call query modules
---

import Loading from '../../templates/query-modules/_loading_query_modules.mdx';
import Calling from '../../templates/query-modules/_calling_query_modules.mdx';
import Controlling from '../../templates/query-modules/_controlling_procedure_memory_usage.mdx';


The following page describes how query modules are loaded into Memgraph and
called within a Cypher query. 

If you require more information about what query modules are, please
read [the query modules overview page](overview.md).

## Loading query modules

<Loading/>

## Calling query modules

<Calling/>

### Mapping costume procedure names to existing query procedures

If you want to replace procedure names your application calls without changing
the application code, you can define the mapping of the old and new procedure
names in a JSON file, then set the path to the files as the value of the
`query-callable-mappings-path` [configuration
flag](/reference-guide/configuration.md). 

Example of a JSON file:

```json
{
    "db.components": "mgps.components",
    "util.validate": "mgps.validate"
}
```

## Managing query modules from Memgraph Lab

You can inspect query modules in Memgraph Lab (v2.0 and newer).
Just navigate to **Query Modules**.

<img src={require('../../data/memgraph_lab_query_modules.png').default} className={"imgBorder"}/>

There you can see all the loaded query modules, delete them, or see procedures
and transformations they define by clicking on the arrow icon.

By expanding procedures you can receive information about the procedure's
signature, input and output variables and their data type, as well as the `CALL`
query you can run directly from the **Query Modules** view.

Custom modules developed via Memgraph Lab are located at
`/var/lib/memgraph/internal_modules`.

<img src={require('../../data/memgraph_lab_query_modules_details.png').default} className={"imgBorder"}/>

## Controlling procedure memory usage

<Controlling/>


