---
id: overview
title: Install Memgraph
sidebar_label: Install Memgraph overview
slug: /installation
---

<p align="left">
  <a href="#windows" style={{'paddingRight':'70px'}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png" alt="windows" title="windows" width="80"/>
  </a>
  <a href="#macos" style={{'paddingRight':'70px'}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MacOS_logo.svg/1024px-MacOS_logo.svg.png" alt="macos" title="macos" width="80"/>
  </a>
  <a href="#linux">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg" alt="linux" title="linux" width="80"/>
  </a>
</p>

## Windows

You can choose to install Memgraph with Docker or through the Windows Subsystem
for Linux (WSL):

- **[Docker 🐳](/installation/windows/docker-installation.md)**
- **[Windows Subsystem for Linux
  (WSL)](/installation/windows/wsl-installation.md)**

## macOS

To install Memgraph on macOS, you will need to have Docker installed.

- **[Docker 🐳](/installation/windows/docker-installation.md)**

## Linux

Memgraph is available for multiple Linux distributions and in the form of Docker
images.<br/> You can choose one of the following installation methods:

- **[Docker 🐳](/installation/linux/docker/docker-installation.md)**
- **[Ubuntu](/installation/linux/debian-installation.md)**
- **[Debian](/installation/linux/debian-installation.md)**
- **[RPM package](/installation/linux/rpm-installation.md)**

:::info

Newer versions of Memgraph are currently not backward compatible with older
versions. This is mainly noticeable by being unable to load storage snapshots
between different versions.

:::
