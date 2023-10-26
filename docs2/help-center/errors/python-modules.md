---
id: python-modules
title: Python module errors
sidebar_label: Python modules
---

import Help from '../templates/_help.mdx';

<Help/>

## Errors

1. [Unable to load support for embedded Python: {}. For more details, visit:
   memgr.ph/python.](#error-1)
2. [Unable to load support for embedded Python: missing directory {}. For more
   details, visit: memgr.ph/python.](#error-1)

## How to install Python packages globally? {#error-1}

The Python packages need to be installed globally for Memgraph to access them.
To install a Python module globally, you will need to run it with the following
command:

```console
sudo pip3 install <PACKAGE_NAME>
```

If this approach doesn't work, try to install a pre-compiled package using
`apt-get` if available.

import SubmitError from '../templates/_submit-error.mdx';

<SubmitError/>
