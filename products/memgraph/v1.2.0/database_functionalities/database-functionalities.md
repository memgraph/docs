## How-to Guides Overview

Articles within the this section serve as a cookbook for getting
things done as fast as possible. These articles tend to provide a step-by-step
guide on how to use certain Memgraph features or solve a particular problem.

### Import data

Data can be imported from CSV files using the CSV Import Tool or by using openCypher queries. 
Take a look at the [Import data](./import-data.md) guide.

### Query modules

Memgraph supports extending the query language with user-written procedures. 
These procedures are grouped into modules, which can then be loaded either on startup or later on. 
To learn more about query modules take a look at the following guides:
* [Built-in query modules](./query_modules/built-in-query-modules.md)
* [Load and call query modules](./query_modules/load-call-query-modules.md)
* [Implement custom query modules](./query_modules/implement-query-modules.md)

### Inspect and profile cypher queries 

Memgraph also enables you to inspect and profile the execution of a query and get a detailed report 
on how the query's plan behaved. Take a look at the guides:
* [Inspecting queries](./inspecting-queries.md)
* [Profiling queries](./profiling-queries.md)

### User Privileges

Memgraph comes with the option of granting, denying or revoking a certain set of privileges to users or groups of users.
To learn more visit:
* [How to Manage User Privileges? (Enterprise)](./manage-user-privileges.md)

### Authentication and Authorization

Memgraph supports authentication and (optional) authorization using a custom-built external auth module.
To learn more visit:
* [How to Manage Users Using LDAP? (Enterprise)](./manage-users-using-ldap.md)