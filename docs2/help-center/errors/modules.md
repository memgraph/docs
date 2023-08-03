---
id: modules
title: Module errors
sidebar_label: Modules
---

import Help from '../templates/_help.mdx';

<Help/>

## Errors

1. [Unable to load module {}; {}. For more details, visit
   memgr.ph/modules.](#error-1)
2. [Failed to close module {}; {}. For more details, visit
   memgr.ph/modules.](#error-1)
3. [Unable to overwrite an already loaded module {}. For more details, visit
   memgr.ph/modules.](#error-2)
4. [Module directory {} doesn't exist. For more details, visit
   memgr.ph/modules.](#error-3)

## Warnings

1. [Unknown query module file {}. For more details, visit:
   memgr.ph/modules.](#warning-1)

## Errors when loading or closing modules {#error-1}

When Memgraph is loading/closing modules, an error can occur if:
1. The file could not be found: check if the file has been deleted.
2. The file is not readable: make the file readable for the user `memgraph`.
3. The file had the wrong format: check if the file has the expected format.
4. The file caused errors during loading.

## Unable to overwrite an already loaded module {#error-2}

Module names need to be distinct. Try to rename your module and load it again
with `CALL mg.load_all();`.

## Module directory {} doesn't exist {#error-3}

Make sure that Memgraph is searching for the modules in the right directory. The
Memgraph configuration is available in `/etc/memgraph/memgraph.conf` and you can
specify the directory with the `--query-modules-directory` flag. The default
directory is `/usr/lib/memgraph/query-modules`. If the configuration file is
altered, Memgraph needs to be restarted.  To learn about all the configuration
options, check out the [Reference guide](/memgraph/reference-guide/configuration).

## Unknown query module file {#warning-1}

Query modules can be implemented using the Python or C API provided by Memgraph.
Modules written in languages other than Python need to be compiled to a shared
library so that they can be loaded when Memgraph starts. This means that you can
write the procedures in any programming language which can work with C and can
be compiled to the ELF shared library format.

import SubmitError from '../templates/_submit-error.mdx';

<SubmitError/>
