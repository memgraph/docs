---
id: transactional-queue
title: Transactional queue
sidebar_label: Transactional queue
---

Since 2.7.0 Memgraph added support for exposing transactions to users. This includes features of both, seeing and terminating specific transaction at the specific moment.


[![Related - How
to](https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge)](/memgraph/how-to-guides/manage-transactional-queue)

## Show transactions

For showing which transactions are being run at the specific moment, the following command can be used:

```cypher
SHOW TRANSACTIONS;
```

By default, user can see only transactions that he/she started so it is possible that Memgraph runs more transactions than the output actually shows. In order to allow user to see transactions that weren't explicitly started by him/her, the user needs to have **TRANSACTION_MANAGEMENT** privilege. The admin can assign such privilege to the user by using the command:

```cypher
GRANT TRANSACTION_MANAGEMENT TO user;
```

and revoke it using:

```cypher
REVOKE TRANSACTION_MANAGEMENT FROM user;
```

:::info

Upon first start of Memgraph, there will be only one explicit super-admin user which will have all privileges, including **TRANSACTION_MANAGEMENT** so such user will be able to see all transactions.

:::

## Terminate transactions


User can terminate one or more transactions using the command:

```cypher
TERMINATE TRANSACTIONS "<tid1>", "<tid2>", "<tid3>" ...
```

This command politely signalizes to the other thread executing the transaction that needs to be killed that it should stop. No violent interrupt will happen so the whole system will stay in the consistent state as it was before the start of the killed transaction.
Same authorization rules apply as for `SHOW TRANSACTIONS`: user can kill only transactions started by her/him and to be able to kill other transactions, the **TRANSACTION_MANAGEMENT** privilege is required. Note, there is an interesting scenario when user has rights to kill some, but not all transactions specified by its id. In this case, only transactions for which user has enough rights will be killed and the others will continue to run as part of the database. This will be clearly seen in the command's output. 




