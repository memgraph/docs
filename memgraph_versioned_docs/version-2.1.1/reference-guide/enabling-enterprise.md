---
id: enabling-enterprise
title: Enabling Memgraph Enterprise
sidebar_label: Enabling Memgraph Enterprise
---

## Adding a license key

Some of Memgraph's features are only available in Enterprise Edition. They are
present in the same binary but protected by a license key.

If you're interested in Memgraph Enterprise, you need to fill out the following
[form](https://docs.google.com/forms/d/e/1FAIpQLSddH_XV000h58MhwJwwrUu2L3uTkejEDPqvstl6eMou_AW-yw/viewform) where one of the fields is the organization name.

After getting your license key, using the [runtime setting](runtime-settings)
you set the `organization.name` to the same organization name you used for the
license key, and the `enterprise.license` to the license key you received.
