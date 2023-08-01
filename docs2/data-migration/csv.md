---
id: csv
title: Import data from CSV files
sidebar_label: CSV
---

import Tabs from "@theme/Tabs"; import TabItem from "@theme/TabItem";

If your data is in CSV format, you can import it into a running Memgraph
database from a designated CSV files using the `LOAD CSV` Cypher clause. The
clause reads row by row from a CSV file, binds the contents of the parsed row to
the variable you specified and populates the database if it is empty, or appends
new data to an existing dataset. Memgraph supports the Excel CSV dialect, as
it's the most common one. 

`LOAD CSV` clause cannot be used with a Memgraph Cloud instance because at the
moment it is impossible to make files accessible by Memgraph. 

:::tip

If the data is importing slower than expected, you can [speed it
up](#increase-import-speed) by creating indexes or switching the storage mode to
analytical.

If the import speed is still unsatisfactory, don't hesitate to contact us on
[Discord](https://discord.com/invite/memgraph).

:::

## Clause syntax

The syntax of the `LOAD CSV` clause is:

```cypher
LOAD CSV FROM <csv-location> ( WITH | NO ) HEADER [IGNORE BAD] [DELIMITER <delimiter-string>] [QUOTE <quote-string>] [NULLIF <nullif-string>] AS <variable-name>
```

- `<csv-location>` is a string of the location to the CSV file. Without a URL 
  protocol it refers to a file path. There are no restrictions on where in your
  filesystem the file can be located, as long as the path is valid (i.e., the 
  file exists). If you are using Docker to run Memgraph, you will need to 
  [copy the files from your local directory into the Docker](/how-to-guides/work-with-docker.md#how-to-copy-files-from-and-to-a-Docker-container)
  container where Memgraph can access them. If using `http://`, `https://`, or
  `ftp://` the CSV file will be fetched over the network.

- `( WITH | NO ) HEADER` flag specifies whether the CSV file has a header, in
  which case it will be parsed as a map, or it doesn't have a header, in which
  case it will be parsed as a list.

  If the **`WITH HEADER`** option is set, the very first line in the file will be
  parsed as the header, and any remaining rows will be parsed as regular rows. The
  value bound to the row variable will be a map of the form:

  ```plaintext
  { ( "header_field" : "row_value" )? ( , "header_field" : "row_value" )* }
  ```

  If the **`NO HEADER`** option is set, then each row is parsed as a list of values.
  The contents of the row can be accessed using the list index syntax. Note that
  in this mode, there are no restrictions on the number of values a row contains.
  This isn't recommended, as the user must manually handle the varying number of
  values in a row.

* `IGNORE BAD` flag specifies whether rows containing errors should be ignored
  or not. If it's set, the parser attempts to return the first valid row from
  the CSV file. If it isn't set, an exception will be thrown on the first
  invalid row encountered.

* `DELIMITER <delimiter-string>` option enables the user to specify the CSV
  delimiter character. If it isn't set, the default delimiter character `,` is
  assumed.

* `QUOTE <quote-string>` option enables the user to specify the CSV quote
  character. If it isn't set, the default quote character `"` is assumed.

* `NULLIF <nullif-string>` option enables you to specify a sequence of
  characters that will be parsed as null. By default, all empty columns in
  Memgraph are treated as empty strings, so if this option is not used, no
  values will be treated as null. 

* `<variable-name>` is a symbolic name representing the variable to which the
  contents of the parsed row will be bound to, enabling access to the row
  contents later in the query. The variable doesn't have to be used in any
  subsequent clause.

## Clause specificities

When using the `LOAD CSV` clause please keep in mind:

- **The parser parses the values as strings** so it's up to the user to convert
  the parsed row values to the appropriate type. This can be done using the
  built-in conversion functions such as `ToInteger`, `ToFloat`, `ToBoolean` etc.
  Consult the documentation on [the available conversion
  functions](/cypher-manual/functions).

  If all values are indeed strings and the file has a header, you can import
  data using the following string: 

  ```cypher
  LOAD CSV FROM "/people.csv" WITH HEADER AS row
  CREATE (p:People) SET p += row; 
  ```

- **The `LOAD CSV` clause is not a standalone clause**, which means that a valid query
  must contain at least one more clause, for example:

  ```cypher
  LOAD CSV FROM "/people.csv" WITH HEADER AS row
  CREATE (p:People) SET p += row; 
  ```

  In this regard, the following query will throw an exception:

  ```cypher
  LOAD CSV FROM "/file.csv" WITH HEADER AS row;
  ```

- Adding a `MATCH` or `MERGE` clause before the LOAD CSV allows you to match
  certain entities in the graph before running LOAD CSV, which is an optimization
  as matched entities do not need to be searched for every row in the CSV file.

  But, the `MATCH` or `MERGE` clause can be used prior the `LOAD CSV` clause only
  if the clause returns only one row. Returning multiple rows before calling the
  `LOAD CSV` clause will cause a Memgraph runtime error.

- **The `LOAD CSV` clause can be used at most once per query**, so the queries like the one
  below wll throw an exception: 

  ```cypher
  LOAD CSV FROM "/x.csv" WITH HEADER as x
  LOAD CSV FROM "/y.csv" WITH HEADER as y
  CREATE (n:A {p1 : x, p2 : y});
  ```

## Increase import speed

The `LOAD CSV` clause will create relationships much faster, and consequently
speed up data import, if you [create indexes](/how-to-guides/indexes.md) on
nodes or node properties once you import them: 

```cypher
  CREATE INDEX ON :Node(id);
```

If the LOAD CSV clause is merging data instead of creating it, create indexes
before running the LOAD CSV clause. 

You can also speed up import if you switch Memgraph to [**analytical storage
mode**](/reference-guide/storage-modes.md). In the analytical mode there are no
ACID guarantees besides manually created snapshots but it does **increase the
import speed up to 6 times with 6 times less memory consumption**. After import
you can switch the storage mode back to transactional and enable ACID
guarantees.

You can switch between modes within the session using the following query:

```cypher
STORAGE MODE IN_MEMORY_{TRANSACTIONAL|ANALYTICAL};
```

When in the analytical storage mode, **don't** import data using multiple
threads.

The LOAD CSV clause will handle CSV's which are compressed with `gzip` or `bzip2`. 
This can speed up time it takes to fetch and/or load the file.

## Examples

Below, you can find two examples of how to use the LOAD CSV clause depending on
the complexity of your data:
<!-- no toc -->
  - [One type of nodes and relationships](#one-type-of-nodes-and-relationships)
  - [Multiple types of nodes and relationships](#multiple-types-of-nodes-and-relationships)

### One type of nodes and relationships

Let's import a simple dataset from the `people_nodes` and `people_relationships` CSV files.

<Tabs
  groupId="platform"
  defaultValue="headerin"
  values={[
    {label: 'WITH CSV header', value: 'headerin'},
    {label: 'NO CSV header', value: 'headerout'}
  ]}>
  <TabItem value="headerin">

1. Download the CSV files:

   - [`people_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_nodes.csv)
   file with the following content:

     ```plaintext
     id,name
     100,Daniel
     101,Alex
     102,Sarah
     103,Mia
     104,Lucy
     ```

   - [`people_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/with-header/people_relationships.csv)
   file with the following content:

     ```plaintext
     id_from,id_to
     100,101
     100,102
     100,103
     101,103
     102,104
     ```

   These CSV files have a header, which means the `HEADER` option of the `LOAD CSV`
   clause needs to be set to `WITH`. Each row will be parsed as a map, and the
   fields can be accessed using the property lookup syntax (e.g. `id: row.id`).

2. Check the location of the CSV file. If you are working with Docker, copy the
   files from your local directory into the Docker container where Memgraph can
   access them.

    <details>
      <summary>Transfer CSV files into a Docker container</summary>

      **1.** Start your Memgraph instance using Docker.

      **2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
      container:

      ```
      docker ps
      ```

      **3.** Copy a file from your current directory to the container with the
      command:

      ```
      docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv
      ```

      The file is now inside your Docker container, and you can import it using the
      `LOAD CSV` clause. 
    </details>

3. The following query will load row by row from the CSV file, and create a new
  node for each row with properties based on the parsed row values:

  ```cypher
  LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row
  CREATE (p:Person {id: row.id, name: row.name});
  ```

  If successful, you should receive an `Empty set (0.014 sec)` message.

  If you have a large dataset, it's beneficial to create indexes on a property
  that will be used to connect nodes and relationships, in this case, the `id`
  property.

  ```cypher
  CREATE INDEX ON :Person(id);
  ```

4. With the initial nodes in place, you can now create relationships between
   them by importing the `people_relationships.csv` file:

  ```cypher
  LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row
  MATCH (p1:Person {id: row.id_from}), (p2:Person {id: row.id_to})
  CREATE (p1)-[:IS_FRIENDS_WITH]->(p2);
  ```

</TabItem>
<TabItem value='headerout'>

1. Download the CSV files:
   - [`people_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_nodes.csv)
     file with the following content:

    ```plaintext
    100,Daniel
    101,Alex
    102,Sarah
    103,Mia
    104,Lucy
    ```

   - [`people_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/one-type-nodes/no-header/people_relationships.csv)
   file with the following content:

    ```plaintext
    100,101
    100,102
    100,103
    101,103
    102,104
    ```

  These CSV files don't have a header, so the `HEADER` option of the `LOAD CSV`
  needs to be set to `NO`. Each row will be parsed as a list, and you can access
  elements by defining the position of the element in the list.

2. Check the location of the CSV file. If you are working with Docker, copy the
   files from your local directory into the Docker container where Memgraph can
   access them.

    <details>
      <summary>Transfer CSV files into a Docker container</summary>

      **1.** Start your Memgraph instance using Docker.

      **2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
      container:

      ```
      docker ps
      ```

      **3.** Copy a file from your current directory to the container with the
      command:

      ```
      docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv
      ```

      The file is now inside your Docker container, and you can import it using the
      `LOAD CSV` clause. 
    </details>

3. The following query will load row by row from the CSV file, and create a new
    node for each row with properties based on the parsed row values:

    ```cypher
    LOAD CSV FROM "/path-to/people_nodes.csv" NO HEADER AS row
    CREATE (p:Person {id: row[0], name: row[1]});
    ```

    If successful, you should receive an `Empty set (0.014 sec)` message. 

    If you have a large dataset, it's beneficial to create indexes on a property
    that will be used to connect nodes and relationships, in this case, the `id`
    property.

    ```cypher
    CREATE INDEX ON :Person(id);
    ```

4. With the initial nodes in place, you can now create relationships between
   them by importing the `people_relationships.csv` file::

    ```cypher
    LOAD CSV FROM "/path-to/people_relationships.csv" NO HEADER AS row
    MATCH (p1:Person {id: row[0]}), (p2:Person {id: row[1]})
    CREATE (p1)-[:IS_FRIENDS_WITH]->(p2);
    ```

</TabItem>
</Tabs>

<details>
  <summary>This is how the graph should look like in Memgraph after the import</summary>
  Run the following query: <br/>
  <code>
  MATCH p=()-[]-() RETURN p; 
  </code>
  <p>
  
   </p>
  <div>
    <img src={require('../../data/import-data/load_csv_one_type_of_nodes_and_relationships.png').default}/>
  </div>
</details>

____

### Multiple types of nodes and relationships

In the case of a more complex graph, we have to deal with multiple node and
relationship types. 

<details>
  <summary>Let's say we want to create a graph like this:</summary>
  <div>
    <img src={require('../../data/import-data/load_csv_multiple_nodes_and_relationships.png').default}/>
  </div>
</details>

We will create that graph by using `LOAD CSV` clause to import four CSV files.

<Tabs
  groupId="csv"
  defaultValue="pn"
  values={[
    {label: '1. people_nodes.csv', value: 'pn'},
    {label: '2. people_relationships.csv', value: 'pr'},
    {label: '3. restaurants_nodes.csv', value: 'rn'},
    {label: '4. restaurants_relationships.csv', value: 'rr'}
  ]}>
<TabItem value="pn">

1. Download the
  [`people_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_nodes.csv)
  file, content of which is:
    ```csv
    id,name,age,city
    100,Daniel,30,London
    101,Alex,15,Paris
    102,Sarah,17,London
    103,Mia,25,Zagreb
    104,Lucy,21,Paris
    ```

  These CSV files have a header, which means the `HEADER` option of the `LOAD CSV`
  clause needs to be set to `WITH`. Each row will be parsed as a map, and the
  fields can be accessed using the property lookup syntax (e.g. `id: row.id`).

2. Check the location of the CSV file. If you are working with Docker, copy the
   files from your local directory into the Docker container where Memgraph can
   access them.

    <details>
      <summary>Transfer CSV files into a Docker container</summary>

      **1.** Start your Memgraph instance using Docker.

      **2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
      container:

      ```
      docker ps
      ```

      **3.** Copy a file from your current directory to the container with the
      command:

      ```
      docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv
      ```

      The file is now inside your Docker container, and you can import it using the
      `LOAD CSV` clause. 
    </details>

3. The following query will load row by row from the file, and create a new node
    for each row with properties based on the parsed row values:

    ```cypher
    LOAD CSV FROM "/path-to/people_nodes.csv" WITH HEADER AS row
    CREATE (n:Person {id: row.id, name: row.name, age: ToInteger(row.age), city: row.city});
    ```

  <details>
    <summary>This is how the graph should look like in Memgraph after the import:</summary>
    Run the following query: <br/>
    <code>
    MATCH (p) RETURN p; 
    </code>
    <p> 
    
    </p>
    <div>
      <img src={require('../../data/import-data/load_csv_people_nodes.png').default}/>
    </div>
  </details>

  4. If you have a large dataset, it's beneficial to create indexes on a property
    that will be used to connect nodes and relationships, in this case, the `id`
    property.

    ```cypher
    CREATE INDEX ON :Person(id);
    ```

Now move on to the `people_relationships.csv` file.

</TabItem>
<TabItem value="pr">

Each person from the `people_nodes.csv` file is connected to at least one other
person by being friends.

1. Download the
[`people_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/people_relationships.csv)
file, where each row represents one friendship and the year it started:
  ```csv
  first_person,second_person,met_in
  100,102,2014
  103,101,2021
  102,103,2005
  101,104,2005
  104,100,2018
  101,102,2017
  100,103,2001
  ```

2. Check the location of the CSV file. If you are working with Docker, copy the
   files from your local directory into the Docker container where Memgraph can
   access them.

    <details>
      <summary>Transfer CSV files into a Docker container</summary>

      **1.** Start your Memgraph instance using Docker.

      **2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
      container:

      ```
      docker ps
      ```

      **3.** Copy a file from your current directory to the container with the
      command:

      ```
      docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv
      ```

      The file is now inside your Docker container, and you can import it using the
      `LOAD CSV` clause. 
    </details>

3. The following query will create relationships between the people nodes:

    ```cypher
    LOAD CSV FROM "/path-to/people_relationships.csv" WITH HEADER AS row
    MATCH (p1:Person {id: row.first_person})
    MATCH (p2:Person {id: row.second_person})
    CREATE (p1)-[f:IS_FRIENDS_WITH]->(p2)
    SET f.met_in = row.met_in;
    ```

<details>
  <summary>This is how the graph should look like in Memgraph after the import:</summary>
  Run the following query: <br/>
  <code>
  MATCH p=()-[]-() RETURN p; 
  </code>
  <p> 
  
  </p>
  <div>
    <img src={require('../../data/import-data/load_csv_people_relationships.png').default}/>
  </div>
</details>

Now move on to the `restaurants_nodes.csv` file.

</TabItem>
<TabItem value="rn">

1. Download the
[`restaurants_nodes.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_nodes.csv)
file that holds a list of restaurants people ate at:

  ```csv
  id,name,menu
  200,Mc Donalds,Fries;BigMac;McChicken;Apple Pie
  201,KFC,Fried Chicken;Fries;Chicken Bucket
  202,Subway,Ham Sandwich;Turkey Sandwich;Foot-long
  203,Dominos,Pepperoni Pizza;Double Dish Pizza;Cheese filled Crust
  ```

2. Check the location of the CSV file. If you are working with Docker, copy the
   files from your local directory into the Docker container where Memgraph can
   access them.

    <details>
      <summary>Transfer CSV files into a Docker container</summary>

      **1.** Start your Memgraph instance using Docker.

      **2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
      container:

      ```
      docker ps
      ```

      **3.** Copy a file from your current directory to the container with the
      command:

      ```
      docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv
      ```

      The file is now inside your Docker container, and you can import it using the
      `LOAD CSV` clause. 
    </details>

3. The following query will create new nodes for each restaurant:

    ```cypher
    LOAD CSV FROM "/path-to/restaurants_nodes.csv" WITH HEADER AS row
    CREATE (n:Restaurant {id: row.id, name: row.name, menu: row.menu});
    ```

  <details>
    <summary>This is how the graph should look like in Memgraph after the import:</summary>
    Run the following query: <br/>
    <code>
    MATCH (p) RETURN p; 
    </code>
    <p> 
    
    </p>
    <div>
      <img src={require('../../data/import-data/load_csv_restaurant_nodes.png').default}/>
    </div>
  </details>

4. If you have a large dataset, it's beneficial to create indexes on a property
    that will be used to connect nodes and relationships, in this case, the `id`
    property.

    ```cypher
    CREATE INDEX ON :Restaurant(id);
    ```

Now move on to the `restaurants_relationships.csv` file.

</TabItem>
<TabItem value="rr">

1. Download the
[`restaurants_relationships.csv`](https://public-assets.memgraph.com/import-data/load-csv-cypher/multiple-types-nodes/restaurants_relationships.csv)
file that contains a list of people and the restaurants they visited:

  ```csv
  PERSON_ID,REST_ID,liked
  100,200,true
  103,201,false
  104,200,true
  101,202,false
  101,203,false
  101,200,true
  102,201,true
  ```

2. Check the location of the CSV file. If you are working with Docker, copy the
   files from your local directory into the Docker container where Memgraph can
   access them.

    <details>
      <summary>Transfer CSV files into a Docker container</summary>

      **1.** Start your Memgraph instance using Docker.

      **2.** Open a new terminal and find the `CONTAINER ID` of the Memgraph Docker
      container:

      ```
      docker ps
      ```

      **3.** Copy a file from your current directory to the container with the
      command:

      ```
      docker cp ./file_to_copy.csv <CONTAINER ID>:/file_to_copy.csv
      ```

      The file is now inside your Docker container, and you can import it using the
      `LOAD CSV` clause. 
    </details>

3. The following query will create relationships between people and restaurants
where they ate:

  ```cypher
  LOAD CSV FROM "/path-to/restaurants_relationships.csv" WITH HEADER AS row
  MATCH (p1:Person {id: row.PERSON_ID})
  MATCH (re:Restaurant {id: row.REST_ID})
  CREATE (p1)-[ate:ATE_AT]->(re)
  SET ate.liked = ToBoolean(row.liked);
  ```

<details>
  <summary>This is how the graph should look like in Memgraph after the import:</summary>
  Run the following query: <br/>
  <code>
  MATCH p=()-[]-() RETURN p; 
  </code>
  <p> 
  
  </p>
  <div>
    <img src={require('../../data/import-data/load_csv_restaurants_relationships.png').default}/>
  </div>
</details>

Congratulations! You've imported all the CSV files!

</TabItem>
</Tabs>