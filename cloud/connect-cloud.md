---
id: cloud-connect
title: Connect to a Cloud instances
sidebar_label: Connect to Cloud
---

## Connect with Memgraph Lab

Memgraph Lab comes in two flavors, as a desktop application and as a in-browser
application. 

To connect using in-browser application:
1. Click **Projects** in the left sidebar. 
2. Locate **Connect via client** section.
3. Click **Connect in browser** button to open Memgraph Lab in your browser. The
   login form will be automatically filled with the connection data, except for
   the password.

<img src={require('./data/connect-to-cloud-memgraph-lab-web.png').default} className={"imgBorder"}/>

To use desktop version of Memgraph Lab:
1. Download [Memgraph Lab](https://memgraph.com/download/#memgraph-lab).
2. Open Memgraph Lab and switch to **Connect Manually**.
3. Extend the **Advanced Settings** and fill out the connection fields with the
   data from the **Connect via client** section from the Memgraph Cloud project. 
4. Enable SSL **Encryption** and **Connect now**.

## Connect with `mgconsole`

To connect to Cloud via a command-line interface **mgconsole**:
1. [Build **mgconsole** from source](https://github.com/memgraph/mgconsole) or
   [download it](https://memgraph.com/download/#mgconsole)
2. Run `mgconsole` with the `--host`, `--port`, `--username`, `--password` and
   `use-ssl` parameters set to the values provided in the  **Connect via
   console** section of the Memgraph Cloud project.

## Connect with drivers

### Python

Step 1: Install the driver with pip or poetry:

```
pip install gqlalchemy
# or with Poetry: poetry add gqlalchemy

```

Step 2: Copy the following code. Fill out <YOUR MEMGRAPH PASSWORD HERE> with a password that you created for a Memgraph project and run the code:

```
from gqlalchemy import Memgraph

MEMGRAPH_HOST = '18.156.117.180'
MEMGRAPH_PORT = 7687
MEMGRAPH_USERNAME = 'kruno.golubic@memgraph.io'
# Place your Memgraph password that was created during Project creation
MEMGRAPH_PASSWORD = '<YOUR MEMGRAPH PASSWORD HERE>'

def hello_memgraph(host: str, port: int, username: str, password: str):
    connection = Memgraph(host, port, username, password, encrypted=True)
    results = connection.execute_and_fetch(
        'CREATE (n:FirstNode { message: "Hello Memgraph from Python!" }) RETURN n.message AS message'
    )
    print("Created node with message:", next(results)["message"])

if __name__ == "__main__":
    hello_memgraph(MEMGRAPH_HOST, MEMGRAPH_PORT, MEMGRAPH_USERNAME, MEMGRAPH_PASSWORD)

```

Read more about it on [GQLAlchemy Quick Start Guide](gqlalchemy/how-to-guides).


### Rust


### C++


### Java


### C#


### Golang


### PHP


### node.js