---
id: memory
title: Memory (RAM) errors
sidebar_label: Memory (RAM)
---

import Help from '../templates/_help.mdx';

<Help/>

## Warnings

1. [Running out of available RAM, only {} MB left. For more details, visit
   memgr.ph/ram.](#error-1)

## Running out of available RAM {#error-1}

This is a warning that can be disabled in the Memgraph configuration. The
Memgraph configuration is available in `/etc/memgraph/memgraph.conf` and you can
disable the warning with the `--memory-warning-threshold` flag. The default
value is `true`. If the configuration file is altered, Memgraph needs to be
restarted.  To learn about all the configuration options, check out the
[Reference guide](/memgraph/reference-guide/configuration).

import SubmitError from '../templates/_submit-error.mdx';

<SubmitError/>
