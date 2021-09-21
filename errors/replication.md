---
id: replication
title: Replication errors
sidebar_label: Replication
---

import Help from './templates/_help.mdx';

<Help/>

## Errors

1. [Failed to connect to replica {} at the endpoint {}. For more details, visit:
   memgr.ph/remote-replica.](#error-1)
2. [Couldn't replicate data to {}. For more details, visit:
   memgr.ph/remote-replica.](#error-1)

## Troubleshooting replication errors {#error-1}

1. Check that Memgraph instances serving as replicas are up and running.
2. Check the firewall on your computer because it could be blocking the traffic
   requested by Memgraph.
3. Verify that there are no network problems.

import SubmitError from './templates/_submit-error.mdx';

<SubmitError/>
