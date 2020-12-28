## Quick start: JavaScript and Memgraph

#### Goals
At the end of this guide, you will have created a simple JavaScript **`Hello, World!`** program that connects to the Memgraph database and executes simple queries.

#### Prerequisites

To follow this guide, you will need:
* A **running Memgraph instance**. If you need to setup Memgraph, take a look at the [Installation guide](../installation/installation.md).
* A basic understanding of graph databases and the property graph model.
* The newest version of **Node.JS** installed. Instructions on how to setup Node.JS can be found on the [official website](https://nodejs.org/en/download/).

### Basic Setup

We'll be using **Express.js** to demonstrate how to connect to a running Memgraph instance.
Express.js is a web application framework that enables us to create complete Node.js applications.
If you don't wish to use it, the steps might be slightly different, but the code is most likely the same or very similar.

Let's jump in and connect a simple program to Memgraph.

**1.** Create a new directory for your application, for example `/MyApp` and position yourself in it.<br />  
**2.** Create a `package.json` file with the command: 

```
npm init
```

**3.** Install **Express.js** and the **Bolt driver** in the `/MyApp` directory while adding them to the dependencies list. 

```
npm install express --save
npm install neo4j-driver --save
```

**4.** To make the actual program, create a `program.js` file and add the following code:

```JavaScript
const express = require('express')
const app = express()
const port = 3000
var neo4j = require('neo4j-driver')

app.get('/', async (req, res) => {
  const driver = neo4j.driver("bolt://localhost:7687")
  const session = driver.session()

  try {
    const result = await session.writeTransaction(tx =>
      tx.run(
        'CREATE (a:Greeting) SET a.message = $message RETURN "Node " + id(a) + ": " + a.message',
        { message: 'Hello, World!' }
      )
    )

    const singleRecord = result.records[0]
    const greeting = singleRecord.get(0)

    console.log(greeting)
  } finally {
    await session.close()
  }

  // on application exit:
  await driver.close()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

**5.** Run the application with the following command:

```
node .\program.js
```

You should see an output similar to the following:

```
Node 1: Hello, World!
```

### Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at the **[Tutorials](../../tutorials/tutorials.md)** page.<br />  
You can also browse through the **[Database functionalities](../../database_functionalities/database-functionalities.md)** section to get an overview of all the functionalities Memgraph offers.

### Getting help

Visit the **Getting help** page in case you run into any kind of problem or you have additional questions.
{% page-ref page="../../getting_help/getting-help.md" %}