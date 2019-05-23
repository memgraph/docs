# Known Issues

This document contains a list of known issues regarding the Memgraph HA product.
The issues are listed by date of discovery and each issue is represented by its
description and status.

The main purpose of this document is to facilitate honest communication towards
customers regarding the state of our product and to reflect on the improvements
made thus far.

## 23rd of May 2019

Name                                | Status     | Description
------------------------------------|------------|------------
Replication of large transactions   | OPEN       | This issue arises when a large, state-altering transaction is successfully replicated and the leader node fails shortly after. If that happens, you might experience longer-than-usual leader election intervals, potentially duplicated records and, in some cases, the failure of the whole cluster.
False positive aborted transactions | OPEN       | If the Leader manages to replicate a transaction but fails before responding back to the client, the client will eventually be notified that the transaction was aborted which is not true.
