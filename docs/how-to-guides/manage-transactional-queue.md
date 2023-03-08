---
id: manage-transactional-queue
title: Manage transactional queue
sidebar_label: Managing transactional queue
---

In this guide, we'll try to describe best practices when working with Memgraph's transactions. Same theory applies when having Memgraph deployed on-prem or in cloud.

[![Related - Reference
Guide](https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge)](/memgraph/reference-guide/transactional-queue/)


## One user

The simplest scenario is when there is only one user in the database. This user has all privileges, so he/she can see and kill any transaction. For example, let's say that user runs in one session:

```cypher
CALL infinite_query.get() YIELD * RETURN *;
```

which is a query module that has infinite loop in itself. Query module started like this is an implicit transaction so terminate it, the user can first get transaction's id by running:


```cypher
SHOW TRANSACTIONS;
```

The output should be similar to:


<img src={require('../data/how-to-guides/manage-transactional-queue/show_transactions.png').default}/>


Now from the output, it is easy to see that infinite query is being run as part of the transaction with id "9223372036854775809". So in the same session, by executing:

```cypher
TERMINATE TRANSACTIONS "9223372036854775809";
```

user get the confirmation that the transaction was killed:


<img src={require('../data/how-to-guides/manage-transactional-queue/terminate_transactions.png').default}/>

In the session in which infinite query was being run, the user will get a message that the transaction was asked abort so all changes made as part of that transaction will be annulated and the system will stay in the consistent state as it was before running terminated transaction.


<img src={require('../data/how-to-guides/manage-transactional-queue/transaction_aborted_message.png').default}/>

## Multiple users

In production environments, there are typically several users each with its own set of privileges. To illustrate more closely how can transactions be handled in that case, let's imagine there are two users: user1 and user2 that don't have privilege TRANSACTION_MANAGEMENET and that there is admin which does. Following authorization queries can be used to set-up users:

```cypher
CREATE USER admin;
GRANT TRANSACTION_MANAGEMENT TO admin;
CREATE USER user1;
REVOKE ALL PRIVILEGES FROM user1;
CREATE USER user2;
REVOKE ALL PRIVILEGES FROM user2;
```

User1 uses its own session to run:

```cypher
CALL infinite_query.get() YIELD * RETURN *;
```

User2 lists all transactions with:

```cypher
SHOW TRANSACTIONS;
```

but this returns only one his/her transaction:

<img src={require('../data/how-to-guides/manage-transactional-queue/only_show_transactions.png').default}/>


However, when admin runs:

```cypher
SHOW TRANSACTIONS;
```

He/she can expect to see also the transaction being run by user1:

<img src={require('../data/how-to-guides/manage-transactional-queue/admin_show_transactions.png').default}/>

Same as above, transaction can be killed with:

```cypher
TERMINATE TRANSACTIONS "9223372036854775819";
```
