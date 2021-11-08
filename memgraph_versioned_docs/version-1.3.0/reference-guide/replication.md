---
id: replication
title: Replication (Enterprise)
sidebar_label: Replication (Enterprise)
---

## User facing setup

### How to set up a Memgraph cluster with replication?

Replication configuration is done primarily through Memgraph Cypher commands. This
allows the cluster to be dynamically rearranged (promoting a new main, addition
of a new replica, etc.).

Each Memgraph instance when first started will be a main. You have to change
the role of all replica nodes using the following query before you
can enable replication on the main:

```plaintext
SET REPLICATION ROLE TO (MAIN|REPLICA) [WITH PORT <port_number>];
```

Note that the "WITH PORT <port_number>" part of the query sets the replication port,
but it applies only to the replica. In other words, if you try to set the
replication port as the main, the query will fail.
After you have set your replica instance to the correct operating role, you can
enable replication in the main instance by issuing the following Memgraph Cypher
command:
```plaintext
REGISTER REPLICA name (SYNC|ASYNC) [WITH TIMEOUT 0.5] TO <socket_address>;
```

The socket address must be a string of the following form:

```plaintext
"IP_ADDRESS:PORT_NUMBER"
```

where IP_ADDRESS is a valid IP address, and PORT_NUMBER is a valid port number,
both given in decimal notation.
Note that in this case they must be separated by a single colon.
Alternatively, one can give the socket address as:

```plaintext
"IP_ADDRESS"
```

where IP_ADDRESS must be a valid IP address, and the port number will be
assumed to be the default one (we specify it to be 10000).

Each Memgraph instance will remember what the configuration was set to and will
automatically resume with its role when restarted.


### How to see the current replication status?

To see the replication ROLE of the current Memgraph instance, you can issue the
following query:

```plaintext
SHOW REPLICATION ROLE;
```

To see the replicas of the current Memgraph instance, you can issue the
following query:

```plaintext
SHOW REPLICAS;
```

To delete a replica, issue the following query:

```plaintext
DROP REPLICA name;
```

### How to promote a new main?

When you have an already set-up cluster, to promote a new main, just set the
replica that you want to be a main to the main role.

```plaintext
SET REPLICATION ROLE TO MAIN;  # on desired replica
```

After the command is issued, if the original main is still alive, it won't be
able to replicate its data to the replica (the new main) anymore and will enter
an error state. You must ensure that at any given point in time there aren't
two mains in the cluster.

## Limitations and potential features

Currently, we do not support chained replicas, i.e. a replica can't have its
own replica. When this feature becomes available, the user will be able to
configure scenarios such as the following one:

```plaintext
main -[asynchronous]-> replica 1 -[semi-synchronous]-> replica 2
```

To configure the above scenario, the user will be able to issue the following
commands:
```plaintext
SET REPLICATION ROLE TO REPLICA WITH PORT <port1>;  # on replica 1
SET REPLICATION ROLE TO REPLICA WITH PORT <port2>;  # on replica 2

REGISTER REPLICA replica1 ASYNC TO "replica1_ip_address:port1";  # on main
REGISTER REPLICA replica2 SYNC WITH TIMEOUT 0.5
  TO "replica2_ip_address:port2";  # on replica 1
```

In addition, we do not yet support advanced recovery mechanisms. For example,
if a main crashes, a suitable replica will take its place as the new main. If
the crashed main goes back online, it will not be able to reclaim its previous
role, but will be forced to be a replica of the new main.
In the upcoming releases, we might be adding more advanced recovery mechanisms.
However, users are able to set up their own recovery policies using the basic
recovery mechanisms we currently provide, that can cover a wide range of
real-life scenarios.

Also, we do not yet support the replication of authentication configurations,
rendering access control replication unavailable.

The query and authentication modules, as well as audit logs are not replicated.