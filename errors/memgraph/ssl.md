---
id: ssl
title: SSL errors
sidebar_label: SSL
---

import Help from '../templates/_help.mdx';

<Help/>

## Errors

1. [An unknown error occurred while processing an SSL message. Please make sure
   that you have SSL properly configured on the server and the client. For more
   details, visit: memgr.ph/ssl.](#error-1)

## Warnings

1. [Using non-secure Bolt connection (without SSL). For more details, visit:
   memgr.ph/ssl.](#error-1)

## Secure Sockets Layer (SSL) {#error-1}

Secure connections are supported and disabled by default. The server initially
ships with a self-signed testing certificate located at `/etc/memgraph/ssl/`.
You can use it by [changing the configuration](/memgraph/how-to-guides/config-logs) and passing its path within the
following parameters:

```
--bolt-cert-file=/etc/memgraph/ssl/cert.pem
--bolt-key-file=/etc/memgraph/ssl/key.pem
```

If you are using your own certificate be sure to enter the correct path to the
certificate.

To disable SSL support and use insecure connections to the database erase or
make comments out of both parameters (`--bolt-cert-file` and `--bolt-key-file`)
by adding a hashtag in front of them.

import SubmitError from '../templates/_submit-error.mdx';

<SubmitError/>
