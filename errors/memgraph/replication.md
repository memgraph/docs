---
id: replication
title: Replication errors
sidebar_label: Replication
---

import Help from '../templates/_help.mdx';

<Help/>

## Errors

1. [Failed to connect to replica {} at the endpoint {}. For more details, visit:
   memgr.ph/replication.](#error-1)
2. [Couldn't replicate data to {}. For more details, visit:
   memgr.ph/replication.](#error-1)

## Warning

1. [Snapshots are disabled for replicas. For more details, visit: memgr.ph/replication.](#warning-1)

## Troubleshooting replication errors {#error-1}

1. Make sure that the Memgraph instances serving as replicas are up and running.
2. Check the firewall on your machine because it could be blocking the traffic
   requested by Memgraph.
3. Verify that there are no network problems.

## Snapshots are disabled for replicas {#warning-1}

Because of consistency constraints, snapshots are disabled on replicas. If you
need a snapshot of the database, then create one on the main instance.

import SubmitError from '../templates/_submit-error.mdx';

<SubmitError/>
