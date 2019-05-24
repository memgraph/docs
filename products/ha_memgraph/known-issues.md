# Known Issues

This document contains a list of known issues regarding the Memgraph HA product.
The main purpose of this document is to facilitate honest communication towards
customers regarding the state of our product and to reflect on the improvements
made thus far.

The issues are listed by date of discovery and each issue is represented by its
description and status. Possible issue statuses along with their explanations
are listed in the table below:

Status             | Explanation
-------------------|------------
OPEN               | We are aware of the issue, but we do not consider it high priority at the moment.
PLANNED            | We are aware of the issue and definitely intend to solve it as soon as possible.
IN PROGRESS        | We are aware of the issue and are actively working on the solution. Most likely, this will be fixed in the next release.
FIXED IN <version> | The issue no longer exists and was fixed in the mentioned version

## 23rd of May 2019

Name                                 | Status      | Description
-------------------------------------|-------------|------------
Transaction stores duplicate records | IN PROGRESS | If the Leader manages to replicate a transaction but fails before responding back to the Memgraph HA proxy and a new leader is elected, the proxy server will retry the transaction which can result in duplicate records. We are currently working on this issue and plan to fix it in our next release.
