---
id: overview
title: Install Memgraph
sidebar_label: Install Memgraph overview
slug: /installation
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Install **Memgraph Platform** and get the complete streaming graph application
platform that includes:

- **MemgraphDB** - the database that holds your data
- **Memgraph Lab** - visual user interface for running queries and visualizing
  graph data
- **mgconsole** - command-line interface for running queries
- **MAGE** - graph algorithms and modules library

Scroll down to the operating system of your choosing and install **Memgraph
Platform** with Docker. If you only need to install a database instance, install
MemgraphDB with Docker or some other available installation option.

## Windows

<div class="row">
  <div class="column">
    <a style={{'paddingRight':'60px', 'paddingLeft':'20px'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png" alt="windows" title="windows" width="80"/>
    </a>
  </div>
  <div class="column" style={{'paddingRight':'60px'}}>
    <p><b>Install Memgraph Platform (recommended)</b></p>
    <ul>
      <li><a href='install-memgraph-on-windows-docker'><b>Docker</b></a></li>
    </ul>
  </div>
  <div class="column">
    <p><b>Install MemgraphDB</b></p>
    <ul>
      <li><a href='install-memgraph-db-on-windows-docker'><b>Docker</b></a></li>
      <li><a href='install-memgraph-on-windows-wsl'><b>Windows Subsystem for Linux (WSL)</b></a></li>
    </ul>
  </div>
</div>

## macOS

<div class="row">
  <div class="column">
    <a style={{'paddingRight':'60px', 'paddingLeft':'20px'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/1024px-MacOS_logo.svg.png" alt="macos" title="macos" width="80"/>
    </a>
  </div>
  <div class="column" style={{'paddingRight':'60px'}}>
    <p><b>Install Memgraph Platform (recommended)</b></p>
    <ul>
      <li><a href='install-memgraph-on-macos-docker'><b>Docker</b></a></li>
    </ul>
  </div>
  <div class="column">
    <p><b>Install MemgraphDB</b></p>
    <ul>
      <li><a href='install-memgraph-db-on-macos-docker'><b>Docker</b></a></li>
    </ul>
  </div>
</div>

## Linux

<div class="row">
  <div class="column">
    <a style={{'paddingRight':'60px', 'paddingLeft':'20px'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg" alt="linux" title="linux" width="80"/>
    </a>
  </div>
  <div class="column">
    <p><b>Install Memgraph Platform (recommended)</b>
    </p>
    <ul>
      <li><a href='install-memgraph-on-linux-docker'><b>Docker</b></a></li>
    </ul>
  </div>
  <div class="column" style={{'paddingLeft':'60px'}}>
    <p><b>Install MemgraphDB</b></p>
    <ul>
      <li><a href='install-memgraph-db-on-linux-docker'><b>Docker</b></a></li>
      <li><a href='install-memgraph-on-ubuntu'><b>Ubuntu</b></a></li>
      <li><a href='install-memgraph-on-debian'><b>Debian</b></a></li>
      <li><a href='install-memgraph-from-rpm'><b>RPM package</b></a></li>
    </ul>
  </div>
</div>

:::caution

Newer versions of Memgraph are currently **not backward compatible** with older
versions. That is why you won't be able to load storage snapshots between
different versions.

:::

<!---
  ## Differences between Memgraph Docker images {#differences-between-images}

- Configuration flags need to be passed inside of environmental variables when
  working with Memgraph Platform. For example, you can start the Memgraph base
  image with `docker run memgraph --bolt-port=7687`, while `docker run -e
  MEMGRAPH="--bolt-port=7687" memgraph/memgraph-platform` is the same command
  for Memgraph Platform.
  -->
