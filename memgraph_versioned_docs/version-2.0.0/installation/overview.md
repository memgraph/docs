---
id: overview
title: Install Memgraph
sidebar_label: Install Memgraph overview
slug: /installation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="operating-systems"
  defaultValue="linux"
  values={[
    {label: 'Windows', value: 'windows'},
    {label: 'macOS', value: 'macos'},
    {label: 'Linux', value: 'linux'},
  ]}>
  <TabItem value="windows">

Memgraph is available for [download in multiple
formats](https://memgraph.com/download/).<br/> You can chose one of the
following installation methods:
* **[Docker](/installation/windows/docker-installation.md)**
* **[Windows Subsystem for Linux (WSL)](/installation/windows/wsl-installation.md)**

:::info
Newer versions of Memgraph are currently not backward compatible with
older versions. This is mainly noticeable by being unable to load storage
snapshots between different versions.
:::

  </TabItem>
  <TabItem value="macos">

Memgraph is available for [download in multiple
formats](https://memgraph.com/download/).<br/> You can chose one of the
following installation methods:
* **[Docker](/installation/macos/docker-installation.md)**

:::info
Newer versions of Memgraph are currently not backward compatible with
older versions. This is mainly noticeable by being unable to load storage
snapshots between different versions.
:::

  </TabItem>
  <TabItem value="linux">

Memgraph is available for [download in multiple
formats](https://memgraph.com/download/).<br/> You can chose one of the
following installation methods:
* **[Docker](/installation/linux/docker-installation.md)**
* **[Ubuntu](/installation/linux/debian-installation.md)**
* **[Debian](/installation/linux/debian-installation.md)**
* **[RPM package](/installation/linux/rpm-installation.md)**

:::info
Newer versions of Memgraph are currently not backward compatible with
older versions. This is mainly noticeable by being unable to load storage
snapshots between different versions.
:::

  </TabItem>
</Tabs>
