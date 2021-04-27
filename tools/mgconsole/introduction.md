---
id: introduction 
title: CLI mgconsole 
sidebar_label: Introduction 
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**mgconsole** is a command-line interface for the
[Memgraph](https://memgraph.com) database.

## Building and installing

To build and install mgconsole from source you will need:
  - CMake version >= 3.4
  - OpenSSL version >= 1.0.2
  - C compiler supporting C11
  - C++ compiler supporting C++14 with support for Filesystem TS (at least
    experimental)
  - [mgclient == 1.0](https://github.com/memgraph/mgclient/releases/tag/v1.0.0)
    library and headers, [install
    instructions](https://github.com/memgraph/mgclient/tree/release/1.0)
  - [readline](https://tiswww.case.edu/php/chet/readline/rltop.html) library and
    headers

To install the compile dependencies, run the following command:

<Tabs
  groupId="install-dependencies"
  defaultValue="apt"
  values={[
    {label: 'Debian / Ubuntu', value: 'apt'},
    {label: 'RedHat / CentOS / Fedora', value: 'yum'},
  ]
}>
  <TabItem value="apt">

```console
apt-get install -y git cmake make gcc g++ libssl-dev libreadline-dev
```
  
  </TabItem>
  <TabItem value="yum">

```console
yum install -y git cmake make gcc gcc-c++ openssl-devel readline-devel
```

  </TabItem>
</Tabs>

Once everything is in place (please make sure `mgclient` is installed), create a
build directory inside the source directory and configure the build by running
CMake from it:

```console
mkdir build
cd build
cmake ..
```

After running CMake, you should see a Makefile in the build directory. Then you
can build the project by running:

```console
make
```

This will build the `mgconsole` binary. To install it, run:

```console
make install
```

This will install to system default installation directory. If you want to
change this location, use `-DCMAKE_INSTALL_PREFIX` option when running CMake.
