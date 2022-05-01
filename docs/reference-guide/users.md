---
id: users
title: User management
sidebar_label: User management
---

import Tabs from "@theme/Tabs"; 
import TabItem from "@theme/TabItem";

The community edition of Memgraph enables creating users that can access the
database with or without a password.

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

To check all the users created on an instance, use:

```cypher
SHOW USERS;
```

To remove a user's password, set it to `null`:

```cypher
SET PASSWORD FOR user_name TO null;
```

To delete a user use:

```cypher
DROP USER user_name;
```

## Authorisation 

<Tabs
  groupId="platform"
  defaultValue="docker"
  values={[
    {label: 'Docker', value: 'docker'},
    {label: 'Linux', value: 'linux'},
  ]}>
    <TabItem value="docker">

**`memgraph-platform` image**

If you are using Docker and `memgraph-platform` image, you should pass the
`username` and `password` environmental variables when starting Memgraph:

```terminal
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MGCONSOLE="--username <username> --password <password>" memgraph/memgraph-platform
```

Example:

```terminal
docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MGCONSOLE="--username vlasta --password vp" memgraph/memgraph-platform
```

Upon connecting with Memgraph Lab you should select *Connect Manually* and enter
username (and password).

**`memgraph` and `memgraph-mage` images**

If you are using Docker and `memgraph` or `memgraph-mage` image enter username
and password when connecting manually to Memgraph Lab. 

If you are connecting with mgconsole you should add the username and password
flags to the `docker run` command: 

```terminal
docker run -it --entrypoint=mgconsole memgraph --host CONTAINER_IP --username=<username> --password=<password>
```

Example:

```terminal
docker run -it --entrypoint=mgconsole memgraph --host 172.17.0.2 --username=vlasta --password=vp
```

   </TabItem>
   <TabItem value="linux">

If you are using Linux and connecting with Memgraph Lab, select *Connect
Manually* and enter username (and password). 

When connecting with mgconsole, set
the `--username` and `--password` flags:

```terminal
./mgconsole --host 127.0.0.1 --port 7687 --username <username> --password <password>
```

Example:

```terminal
./mgconsole --host 127.0.0.1 --port 7687 --username vlasta --password vp
```
   
   </TabItem>
   </Tabs>


