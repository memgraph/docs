---
id: users
title: User management
sidebar_label: User management
---

The community edition of Memgraph enables creating users that can access the
database with our without a password.

To create a user, execute the following command:

```cypher
CREATE USER user_name [IDENTIFIED BY 'password'];
```

Setting up a password is optional. If the password is not set, the user can
log in using any password, or none, provided that they enter the correct
username.

To set or change a user's password, use the following command:

```cypher
SET PASSWORD FOR user_name TO 'new_password';
```

To remove a user's password, set it to `null`:

```cypher
SET PASSWORD FOR user_name TO null;
```

To delete a user use:

```cypher
DROP USER user_name;
```
