---
id: durability
title: Durability errors
sidebar_label: Durability
---

import Help from '../templates/_help.mdx';

<Help/>

## Errors

1. [Snapshot or WAL directory don't exist, there is nothing to recover. For more
   details, visit: memgr.ph/durability.](#error-1)
2. [No snapshot or WAL file found. For more details, visit:
   memgr.ph/durability.](#error-1)
3. [Couldn't get WAL file info from the WAL directory. For more details, visit:
   memgr.ph/durability.](#error-1)

## Why are snapshot and WAL files missing? {#error-1}

There are two options:
1. [The files are missing because Docker doesn't store them.](#error-1-1)
2. [Memgraph is looking in the wrong directory.](#error-1-2)

### Docker not persisting data {#error-1-1}

It's possible that your Docker containers don’t persist data by default (all
changes are lost when the container is stopped). You need to use local volumes
to store the data permanently which is why Memgraph is started with the `-v`
flag:

```console
docker run -p 7687:7687 -v mg_lib:/var/lib/memgraph memgraph/memgraph
```

More information on Docker Volumes can be found
[here](https://docs.docker.com/storage/volumes/).

### Memgraph data directory not set correctly {#error-1-2}

Make sure that Memgraph is searching for the snapshot files in the right
directory. The Memgraph configuration is available in
`/etc/memgraph/memgraph.conf` and you can specify the directory with the
`--data-directory` flag. If the configuration file is altered, Memgraph needs to
be restarted. The default directory is `/var/lib/memgraph`. To learn about all
the configuration options, check out the [Reference
guide](/memgraph/reference-guide/configuration).

import SubmitError from '../templates/_submit-error.mdx';

<SubmitError/>
