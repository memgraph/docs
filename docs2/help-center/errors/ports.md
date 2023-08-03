---
id: ports
title: Port errors
sidebar_label: Ports
---

import Help from '../templates/_help.mdx';

<Help/>

## Errors

1. [Invalid port number {}. For more details, visit: memgr.ph/ports.](#error-1)
2. [Invalid port number {}. The port number must be a positive integer. For more
   details, visit: memgr.ph/ports.](#error-2)
3. [Invalid port number {}. The port number exceedes the maximum possible size.
   For more details, visit: memgr.ph/ports.](#error-2)

## What port is Memgraph running on? {#error-1}

The default port Memgraph uses is `7687` is not otherwise specified.

## How to change the port?

You can change the default port using the configuration settings.

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

The Memgraph configuration is available in Docker's named volume `mg_etc`. On
Linux systems, it should be in
`/var/lib/docker/volumes/mg_etc/_data/memgraph.conf`. Keep in mind that this way
of specifying configuration options is only valid if Memgraph was started [using
volumes](/memgraph/how-to-guides/work-with-docker).

When using Docker, you can also specify the configuration options in the `docker
run` command:

```
docker run -p 7687:7687 memgraph/memgraph --log-level=TRACE
```

  </TabItem>
  <TabItem value="linux">

The Memgraph configuration is available in `/etc/memgraph/memgraph.conf`. If the
configuration file is altered, Memgraph needs to be restarted.

  </TabItem>
</Tabs>

To learn about all the configuration options, check out the [Reference To learn
about all the configuration options, check out the [Reference
guide](/memgraph/reference-guide/configuration).

## What is the valid range for choosing a port? {#error-2}

A port number is a 16-bit unsigned integer, thus ranging from 0 to 65535. Ports
0 through 1023 are defined as well-known ports. Registered ports are from 1024
to 49151. The remainder of the ports from 49152 to 65535 can be used dynamically
by applications.

import SubmitError from '../templates/_submit-error.mdx';

<SubmitError/>
