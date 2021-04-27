---
id: usage
title: Example usage
sidebar_label: Usage
---

```console
$ mgconsole --host 127.0.0.1 --port 7687 --use-ssl=false
mgconsole 0.1
Type :help for shell usage
Quit the shell by typing Ctrl-D(eof) or :quit
Connected to 'memgraph://127.0.0.1:7687'
memgraph> :help
In interactive mode, user can enter cypher queries and supported commands.

Cypher queries can span through multiple lines and conclude with a
semi-colon (;). Each query is executed in the database and the results
are printed out.

The following interactive commands are supported:

        :help    Print out usage for interactive mode
        :quit    Exit the shell

memgraph>
memgraph> MATCH (t:Turtle) RETURN t;
+-------------------------------------------+
| t                                         |
+-------------------------------------------+
| (:Turtle {color: "blue", name: "Leo"})    |
| (:Turtle {color: "purple", name: "Don"})  |
| (:Turtle {color: "orange", name: "Mike"}) |
| (:Turtle {color: "red", name: "Raph"})    |
+-------------------------------------------+
4 rows in set (0.000 sec)
memgraph> :quit
Bye
```