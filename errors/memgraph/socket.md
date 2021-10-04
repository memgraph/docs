---
id: socket
title: Socket errors
sidebar_label: Socket
---

import Help from '../templates/_help.mdx';

<Help/>

## Errors

1. [Cannot bind to socket on endpoint {}. For more details, visit:
   memgr.ph/socket.](#error-1)
2. [Cannot listen on socket endpoint {}. For more details, visit:
   memgr.ph/socket.](#error-1)

## Memgraph cannot bind to or listen on socket endpoint {#error-1}

Make sure that the specified port (the default port Memgraph runs on is 7687)
isn't being used by another process or that you haven't already started another
Memgraph instance on the same port.

import SubmitError from '../templates/_submit-error.mdx';

<SubmitError/>
