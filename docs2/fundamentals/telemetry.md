---
id: telemetry
title: Telemetry
sidebar_label: Telemetry
---

Telemetry is an automated process that collects data at a remote point. We at Memgraph use telemetry data for the soul purpose of improving our products by focusing on areas that we believe are important to users. Telemetry is **completely optional** and can be **[fully disabled](#how-to-disable-telemetry)** before starting the database.

## What kind of data is collected?

While a Memgraph database instance is running and an open internet connection is available, the following data will be sent to and stored on our servers:
* **Information about the host machine**
    * CPU model
    * Memory information
    * Host OS
    * Kernel information
* **Database runtime information**
    * CPU usage
    * Memory usage
    * The number of vertices and edges stored in the database
    * Event counters (for example, number of failed queries or ScanAll operator calls)
    * Query module calls*

\***Only the names** of the query module and procedure are recorded.

No personal information is sent in the process of collecting telemetry data. Each database generates a unique identifier by which we can group data coming from the same database instance. This unique identifier is in no way connected to other personal information about the user.

## Why do we collect this data?

Telemetry data is used by Memgraph's developers for the purpose of developing new functionalities and the general maintenance of our products. By analyzing the host machine environment and runtime information, we can further optimize our products to better suit specific user needs.

For example, if there is a considerable number of users who regularly call NetworkX query modules, we would invest more resources in the development of similar new features and extending the support for implemented ones.

As is often the case, we need to prioritize certain goals over others. A data-driven understanding of product usage will help us prioritize features that are more likely to benefit a larger subset of our users.

## How to disable telemetry?

Telemetry is **completely optional** and can be fully disabled when starting the database. There are two ways to disable Memgraph's telemetry features:
* In `/etc/memgraph/memgraph.conf` change the line `--telemetry-enabled=true` to `--telemetry-enabled=false`
* Include `--telemetry-enabled=false` as a command-line argument when starting the database

## Additional remarks

We fully understand the need for user privacy which is why we made the telemetry feature completely optional and provided this article to cultivate transparent communication with the developer community. Your feedback is very much appreciated, and telemetry data is only a way of receiving such feedback.
If you wish to get in touch with us, you can always send us an email to [tech@memgraph.com](mailto:tech@memgraph.com) or join our community on [Discord](https://www.discord.gg/memgraph).
