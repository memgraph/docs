---
id: javascript
title: JavaScript quick start
sidebar_label: JavaScript
---

At the end of this guide, you will have created a JavaScript program that connects to the Memgraph database and executes simple
queries.

:::note

Running queries directly from a web browser is **not recommended**
because of additional requirements and possible performance issues. In other
words, we encourage you to use server-side libraries and clients for top
performance whenever possible.

:::

## Prerequisites

To follow this guide, you will need:

- A **running Memgraph instance**. If you need to set up Memgraph, take a look
  at the [Installation guide](/installation/overview.mdx).
- A basic understanding of graph databases and the property graph model.

## Basic Setup

Let's jump in and connect a simple program to Memgraph.

**1.** Create a new directory for your application, for example `/MyApp` and
position yourself in it.

**2.** To make the actual program, create a `program.html` file and add the
following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Javascript Browser Example | Memgraph</title>
    <script src="https://cdn.jsdelivr.net/npm/neo4j-driver"></script>
  </head>
  <body>
    <p>Check console for Cypher query outputs...</p>
    <script>
      const driver = neo4j.driver(
        "bolt://localhost:7687",
        neo4j.auth.basic("", "")
      );

      (async function main() {
        const session = driver.session();

        try {
          await session.run("MATCH (n) DETACH DELETE n;");
          console.log("Database cleared.");

          await session.run("CREATE (alice:Person {name: 'Alice', age: 22});");
          console.log("Record created.");

          const result = await session.run("MATCH (n) RETURN n;");

          console.log("Record matched.");
          const alice = result.records[0].get("n");
          const label = alice.labels[0];
          const name = alice.properties["name"];
          const age = alice.properties["age"];

          if (label != "Person" || name != "Alice" || age != 22) {
            console.error("Data doesn't match.");
          }

          console.log("Label: " + label);
          console.log("Name: " + name);
          console.log("Age: " + age);
        } catch (error) {
          console.error(error);
        } finally {
          session.close();
        }

        driver.close();
      })();
    </script>
  </body>
</html>
```

**3.** Open the `program.html` file in your browser and look for the output in
the console.

You should see an output similar to the following:

```
Database cleared.
Record created.
Record matched.
Label: Person
Name: Alice
Age: 22
```

## Transaction timeout

Both automatic transactions and explicit transactions can be provided with a 
timeout.

### Automatic transaction
```js
const session: RxSession = driver.rxSession({ defaultAccessMode: 'READ' });
session
  .run("MATCH (), (), (), () RETURN 42 AS thing;", // NOTE: A long query
    undefined,
    { timeout: 50 } // NOTE: with a short timeout
  )
  .records()
  .pipe(finalize(() => {
    session.close();
    driver.close();
  }))
  .subscribe({
    next: record => { },
    complete: () => { console.info('complete'); process.exit(1); }, // UNEXPECTED
    error: msg => console.error('Error:', msg.message), // NOTE: expected to error with server side timeout
  });

```

### Explicit transaction 
```js
const session = driver.rxSession({ defaultAccessMode: 'READ' });
session
  .beginTransaction({ timeout: 50 }) // NOTE: a short timeout
  .pipe(
    mergeMap(tx =>
      tx
        .run('MATCH (),(),(),() RETURN 42 AS thing;') // NOTE: a long query
        .records()
        .pipe(
          catchError(err => { tx.rollback(); throw err; }),
          concatWith(EMPTY.pipe(finalize(() => tx.commit())))
        )
    ),
    finalize(() => { session.close(); driver.close() })
  )
  .subscribe({
    next: record => { },
    complete: () => { console.info('complete'); process.exit(1); }, // UNEXPECTED
    error: msg => console.error('Error:', msg.message), // NOTE: expected to error with server side timeout
  })
```

## Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at
the **[Tutorials](/tutorials/overview.md)** page. You can also browse through
the **[How-to guides](/how-to-guides/overview.md)**
section to get an overview of all the functionalities Memgraph offers.
