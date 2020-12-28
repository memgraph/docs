## Quick Start: C# and Memgraph

#### Goals
At the end of this guide, you will have created a simple .NET console **`Hello, World!`** program that connects to the Memgraph database and executes simple queries.

#### Prerequisites

For this guide you will need:
* A **running Memgraph instance**. If you need to setup Memgraph, take a look at the [Installation guide](../installation/installation.md).
* A basic understanding of graph databases and the property graph model.

### Driver

Please note that the code samples in this guide utilize the `Neo4j.Driver.Simple` package which implements a blocking interface around the 'main' driver. It should be used as a tool for getting started quickly. The `Neo4j.Driver` package contains the official and complete driver for real-world projects.
The driver documentation can be found here: [Neo4j .NET Driver](https://github.com/neo4j/neo4j-dotnet-driver).

### Basic Setup

We'll be using Visual Studio 2019 on Windows 10 to connect a simple .NET console application to a running Memgraph instance.
If you're using a different IDE, the steps might be slightly different, but the code is probably the same or very similar.<br />  

Let's jump in and connect a simple program to Memgraph.

**1.** Open **Visual Studio** and create a new project.<br />  
**2.** Find and select the **Console App (.NET Core)** template by using the search box.<br />  
**3.** Name your project ***MemgraphApp***, choose an appropriate location for it, and click **Create**.<br />  
**4.** Select the **Tools > NuGet Package Manager > Package Manager Console** menu command.<br />  
**5.** Once the console opens, check that the **Default project** drop-down list shows the project into which you want to install the package.
If you have a single project in the solution, it is already selected.<br />  
**6.** Enter the command **Install-Package Neo4j.Driver.Simple**.

Now, you should have the newest version of the driver installed and can proceed to copy the following code into the **Program.cs** file.

```c#
using System;
using System.Linq;
using Neo4j.Driver;

namespace MemgraphApp
{
    public class Program
    {
        public static void Main()
        {
            string message = "Hello, World!";

            using var _driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.None);
            using var session = _driver.Session();

            var greeting = session.WriteTransaction(tx =>
            {
                var result = tx.Run("CREATE (n:FirstNode) " +
                                    "SET n.message = $message " +
                                    "RETURN 'Node '  + id(n) + ': ' + n.message",
                    new { message });
                return result.Single()[0].As<string>();
            });
            Console.WriteLine(greeting);
        }
    }
}
```

Once you run the program, you should see an output similar to the following:

```
Node 1: Hello, World!
```

### Alternative Setup

If you want to try out more complex operations, feel free to use the refactored code below.

```c#
using System;
using System.Linq;
using Neo4j.Driver;

namespace MemgraphApp
{
    public class Program : IDisposable
    {
        private readonly IDriver _driver;

        public Program(string uri, string user, string password)
        {
            _driver = GraphDatabase.Driver(uri, AuthTokens.Basic(user, password));
        }

        public void PrintGreeting(string message)
        {
            using (var session = _driver.Session())
            {
                var greeting = session.WriteTransaction(tx =>
                {
                    var result = tx.Run("CREATE (n:FirstNode) " +
                                        "SET n.message = $message " +
                                        "RETURN 'Node '  + id(n) + ': ' + n.message",
                        new { message });
                    return result.Single()[0].As<string>();
                });
                Console.WriteLine(greeting);
            }
        }

        public void Dispose()
        {
            _driver?.Dispose();
        }

        public static void Main()
        {
            using (var greeter = new Program("bolt://localhost:7687", "", ""))
            {
                greeter.PrintGreeting("Hello, World!");
            }
        }
    }
}
```

### Where to next?

For real-world examples of how to use Memgraph, we suggest you take a look at the **[Tutorials](../../tutorials/tutorials.md)** page.<br />  
You can also browse through the **[Database functionalities](../../database_functionalities/database-functionalities.md)** section to get an overview of all the functionalities Memgraph offers.

### Getting help

Visit the **Getting help** page in case you run into any kind of problem or you have additional questions.
{% page-ref page="../../getting_help/getting-help.md" %}