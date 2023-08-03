---
id: snapshots
title: Snapshot errors
sidebar_label: Snapshots
---

import Help from '../templates/_help.mdx';

<Help/>

## Errors

1. [Couldn't ensure that exactly {} snapshots exist because an error occurred:
   {}. For more information about snapshots, visit: memgr.ph/snapshots.](#error-1)
2. [Couldn't ensure that only the absolutely necessary WAL files exist because an
   error occurred: {}. For more details, visit: memgr.ph/snapshots.](#error-1)

## What are snapshots? {#error-1}

Database snapshots are like a view of a database as it was at a certain point in
time. It is a read-only copy of the data that can be used for backup or data
persistence. Memgraph will try to load the newest snapshot file on startup.

## What to do with corrupt snapshots?

Because snapshots are read-only, any modifications will result in corrupt
files that won't be loaded. The solution is to delete the snapshot files and to
start Memgraph again.

## Why is data lost when Memgraph is restarted?

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="operating-systems"
  defaultValue="docker"
  values={[
    {label: 'Docker 🐳', value: 'docker'},
    {label: 'Linux', value: 'linux'},
  ]}>
  <TabItem value="docker">

Docker containers don’t persist data by default (all changes are lost when the
container is stopped). You need to use local volumes to store the data
permanently which is why Memgraph is started with the `-v` flags:

```console
docker run -p 7687:7687 -v mg_lib:/var/lib/memgraph memgraph/memgraph
```

More information on Docker Volumes can be found
[here](https://docs.docker.com/storage/volumes/).

  </TabItem>
  <TabItem value="linux">

Make sure that Memgraph is searching for the snapshot files in the right
directory. The Memgraph configuration is available in
`/etc/memgraph/memgraph.conf` and you can specify the directory with the
`--data-directory` flag. If the configuration file is altered, Memgraph needs to
be restarted. The default directory is `/var/lib/memgraph`. To learn about all the
configuration options, check out the [Reference
guide](/memgraph/reference-guide/configuration).

  </TabItem>
</Tabs>

import SubmitError from '../templates/_submit-error.mdx';

<SubmitError/>
