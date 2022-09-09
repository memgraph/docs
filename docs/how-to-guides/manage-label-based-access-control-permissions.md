---
id: manage-label-based-access-control-permissions
title: How to manage label-based access control permissions (Enterprise)
sidebar_label: Manage label-based access control permissions
---

[![Related - Reference Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/reference-guide/security.md)

:::warning
This is an Enterprise feature.
If the Memgraph Enterprise is not activated, all the created users will be granted
all of the privileges.
Regardless, all of the previously defined privileges will still be applied.
:::

Sometimes authorizing the database by granting and denying clause privileges is not enough to make the
database fully secure. There can always exist some nodes and relationships which are confidential and 
need to be restricted for view and manipulation to multiple users.

In the need of such authorization, Memgraph has advanced its authorization features to enable
authorization on node labels and relationship edge types. By applying authorization to graph's first class
citizens, a database administrator can now keep all the data in one database while keeping any private data
secure from those who don't have the permission.

This how-to-guide will walk you through label-based access control in the use case of a fictional company.

## Where to next?

To learn more about Memgraph's functionalities, visit the **[Reference guide](/reference-guide/overview.md)**.
For real-world examples of how to use Memgraph, we strongly suggest going through one of the available **[Tutorials](/tutorials/overview.md)**.
