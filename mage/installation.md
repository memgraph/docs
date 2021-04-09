---
id: installation
title: How to install MAGE? 
sidebar_label: Installation
---

:::info
This page is under construction.
:::

To build and install MAGE query modules you will need: **Make**, **CMake** and **Clang**.

### Installing with Docker

**1.** Make sure to have `memgraph:latest` Docker image.  
**2.** Build **MAGE** tagged Docker image.  
```
docker build . -t memgraph:mage
```

**3.** Start Memgraph with the following command and enjoy **MAGE**:
```
docker run -p 7687:7687 memgraph:mage
```

### Installing without Docker
**1.** Run the `build.sh` script. It will generate a `dist` directory with all the needed files.  
**2.** Copy the contents of the newly created `dist` directory to `/usr/lib/memgraph/query_modules`.  
**3.** Start Memgraph and enjoy **MAGE**!  

:::note
Note that query modules are loaded into Memgraph on startup so if your instance was already running you will need to execute the following query to load them:
```
CALL mg.load_all();
```
:::

If you want to find out more about loading query modules, visit [this guide](https://docs.memgraph.com/memgraph/database-functionalities/query-modules/load-call-query-modules).