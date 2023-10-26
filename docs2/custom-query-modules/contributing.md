---
id: contributing
title: How to contribute to MAGE?
sidebar_label: Contributing
---

## Contributing

We encourage everyone to contribute with their own algorithm implementations and
ideas. If you want to contribute or report a bug, please take a look at the
[contributions
guide](https://github.com/memgraph/mage/blob/main/CONTRIBUTING.md).

Here are links to Memgraph and MAGE, which are both opened and ready to recieve feedback
and your contribution:

- :file_folder: [**Memgraph**](https://github.com/memgraph/memgraph)
- :file_folder: [**MAGE**](https://github.com/memgraph/mage)

## Code of Conduct

Everyone participating in this project is governed by the [Code of
Conduct](https://github.com/memgraph/mage/blob/main/CODE_OF_CONDUCT.md). By
participating, you are expected to uphold this code. Please report unacceptable
behavior to <tech@memgraph.com>.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

- You have developed a query module by yourself and/or followed our tutorial for
  [Python](/mage/how-to-guides/create-a-new-module-python) or
  [C++](/mage/how-to-guides/create-a-new-module-cpp)

:::warning

The following steps depend on how you installed Memgraph and MAGE as we need
to import the modules.

:::

## Importing query modules into Memgraph

<Tabs
  groupId="running-method"
  defaultValue="docker-hub"
  values={[
    {label: 'Docker Hub', value: 'docker-hub'},
    {label: 'Docker build', value: 'docker-build'},
    {label: 'Build from source on Linux', value: 'source'},
  ]
}>
  <TabItem value="docker-hub">

**1.** Start the MAGE container with:

```shell
docker run --rm -p 7687:7687 --name mage memgraph-mage:version-dev
```

Be sure to replace the `version` with the specific version, for example:

```shell
docker run --rm -p 7687:7687 --name mage memgraph-mage:1.4-dev
```

**2.** Copy your local MAGE directory inside the container in order for Memgraph
to import the query modules:

**a)** First, you need to copy the files to the container named `mage`:

```shell
docker cp . mage:/mage/
```

**b)** Then, you need to position yourself inside the container as root:

```shell
docker exec -u root -it mage /bin/bash
```

> Note: If you performed the build locally, make sure to delete the `cpp/build`
> directory because you might be dealing with different architectures or
> problems with `CMakeCache.txt`. To delete it, run:
>
> `rm -rf cpp/build`

**c)** After that, build MAGE with the option to copy executables from
`mage/dist` to `/usr/lib/memgraph/query_modules`:

```shell
python3 setup build -p /usr/lib/memgraph/query_modules/
```

**d)** Everything should be ready to exit the container and load the query
modules:

```
exit
```

  </TabItem>
  <TabItem value="docker-build">

**1.** To create the `dev` **MAGE** image, run the following command:

```shell
docker build --target dev -t memgraph-mage:dev .
```

**2.** Start the container with the following command:

```shell
docker run --rm -p 7687:7687 --name mage memgraph-mage:dev
```

:::info

If you make any changes to the module, you can stop the container and do a
rebuild. Additionally, if you don't want to rebuild everything, you can:
1. Copy the changes to the container.
2. Perform a build inside the container.
3. Copy the executables to the `/usr/lib/memgraph/query_modules/` directory,
   where Memgraph is looking for query modules.

The process is the same as described in step **2** of the tab `Docker Hub`.

:::

  </TabItem>
  <TabItem value="source">

**1.** Make sure your Memgraph instance is running:

```
sudo systemctl status memgraph.service
```

**2.** Now, we need to copy our developed query module `random_walk.py` to
`/usr/lib/memgraph/query_modules`:

```shell
python3 setup build -p /usr/lib/memgraph/query_modules
```

  </TabItem>
</Tabs>


## Querying

> Note that query modules are loaded into Memgraph on startup, so if your
> instance was already running, you would need to execute the following query
> inside one of the [querying
> platforms](https://docs.memgraph.com/memgraph/connect-to-memgraph) to load
> them:

```cypher
CALL mg.load_all();
```

Lastly, run a query and test your module:

```cypher
MERGE (start:Node {id: 0})-[:RELATION]->(:Node {id: 1})-[:RELATION]->(:Node {id: 2})
CALL random_walk.get(start, 2) YIELD path
RETURN path
```

Since every query module is run as one transaction in Memgraph, the user can stop
the query module by [terminating the corresponding transaction](/memgraph/reference-guide/transactions). The user first needs
to find out the transaction ID using `SHOW TRANSACTIONS` command and then terminate it
using the `TERMINATE TRANSACTIONS <tid>` command.

## Testing

Test decoupled parts of your code that don't depend on Memgraph like you would
in any other setting. E2e (end to end) tests, on the other hand, depend on
internal Memgraph data structures, like nodes and edges. After running Memgraph,
we need to prepare the testing environment on the host machine. Position
yourself in the mage directory you cloned from GitHub. The expected folder
structure for each module is the following:

```plaintext
mage
└── e2e
    └── random_walk_test
        └── test_base
            ├── input.cyp
            └── test.yml
```

`input.cyp` represents a Cypher script for entering the data into the database.
To simplify this tutorial, we'll leave the database empty. `test.yml` specifies
which test query should be run by the database and what should be the result or
exception. Create the files following the aforementioned directory structure.

### input.cyp

```cypher
MATCH (n) DETACH DELETE n;
```

### test.yml

```shell
query: >
  MATCH (start:Node {id: 0})
    CALL random_walk.get(start, 2) YIELD path
    RETURN path

output: []
```

Lastly, run the e2e tests with python:

```shell
python test_e2e
```

## Next steps

Feel free to create an issue or open a pull request on our [Github
repo](https://github.com/memgraph/mage) to speed up the development.<br/>
Also, don't forget to throw us a star on GitHub. :star:


## Feedback
Your feedback is always welcome and valuable to us. Please don't hesitate to
post on our [Discord](https://www.discord.gg/memgraph).
