---
id: ssl
title: SSL errors
sidebar_label: SSL
---

import Help from './templates/_help.mdx';

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
ships with a self-signed testing certificate. The certificate can be replaced by
editing the following parameters in `/etc/memgraph/memgraph.conf`:

```
--bolt-cert-file=/path/to/ssl/certificate.pem
--bolt-key-file=/path/to/ssl/privatekey.pem
```

To disable SSL support and use insecure connections to the database you should
set both parameters (`--bolt-cert-file` and `--bolt-key-file`) to empty values.

import SubmitError from './templates/_submit-error.mdx';

<SubmitError/>
