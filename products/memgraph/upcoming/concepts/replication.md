# Replication

## High Level Context

Replication is a method that ensures that multiple database instances are
storing the same data. To enable replication, there must be at least two
instances of Memgraph in a cluster. Each instance has one of either two roles:
main or replica. The main instance is the instance that accepts writes to the
database and replicates its state to the replicas. In a cluster, there can only
be one main. There can be one or more replicas. None of the replicas will accept
write queries, but they will always accept read queries (there is an exception
to this rule and is described below).  ach instance will always be reachable
using the standard supported communication protocols. The replication will
replicate WAL data. All data is transported through a custom binary protocol
that will try remain backward compatible, so that replication immediately allows
for zero downtime upgrades.

Each replica can be configured to accept replicated data in one of the following
modes:
 - synchronous
 - asynchronous
 - semi-synchronous

### Synchronous Replication

When the data is replicated to a replica synchronously, all of the data of a
currently pending transaction must be sent to the synchronous replica before the
transaction is able to commit its changes.

This mode has a positive implication that all data that is committed to the
main will always be replicated to the synchronous replica. It also has a
negative performance implication because non-responsive replicas could grind all
query execution to a halt.

This mode is good when you absolutely need to be sure that all data is always
consistent between the main and the replica.

### Asynchronous Replication

When the data is replicated to a replica asynchronously, all pending
transactions are immediately committed and their data is replicated to the
asynchronous replica in the background.

This mode has a positive performance implication in which it won't slow down
query execution. It also has a negative implication that the data between the
main and the replica is almost never in a consistent state (when the data is
being changed).

This mode is good when you don't care about consistency and only need an
eventually consistent cluster, but you care about performance.

### Semi-synchronous Replication

When the data is replicated to a replica semi-synchronously, the data is
replicated using both the synchronous and asynchronous methodology. The data is
always replicated synchronously, but, if the replica for any reason doesn't
respond within a preset timeout, the pending transaction is committed and the
data is replicated to the replica asynchronously.

This mode has a positive implication that all data that is committed is
*mostly* replicated to the semi-synchronous replica. It also has a negative
performance implication as the synchronous replication mode.

This mode is useful when you want the replication to be synchronous to ensure
that the data within the cluster is consistent, but you don't want the main
to grind to a halt when you have a non-responsive replica.

### Addition of a New Replica

Each replica, when added to the cluster (in any mode), will first start out as
an asynchronous replica. That will allow replicas that have fallen behind to
first catch-up to the current state of the database. When the replica is in a
state that it isn't lagging behind the main it will then be promoted (in a brief
stop-the-world operation) to a semi-synchronous or synchronous replica. Slaves
that are added as asynchronous replicas will remain asynchronous.


