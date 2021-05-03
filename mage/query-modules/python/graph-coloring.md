---
id: graph-coloring
title: The graph_coloring module
sidebar_label: graph_coloring
---

## ` color_graph(context, parameters, edge_property)`

A procedure that performs graph coloring algorithm.

**Parameters**

    
* **context** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **parameters** (*mgp.Map*) – (default={})
    A dictionary that specifies the algorithm configuration. Configuration parameters are explained in the table below.

| Name 	| Type 	| Default 	| Description 	|
|-	|-	|-	|-	|
| algorithm 	| String 	| QA 	| An optimization strategy used to find graph coloring. 	|
| no_of_colors 	| Integer 	| 10 	| Defines the number of colors used to color the nodes of the graph. 	|
| no_of_processes 	| Integer 	| 1 	| The number of processes executing the algorithm in parallel 	|
| population_size 	| Integer 	| 15 	| Defines the total number of solutions that are improved through iterations. 	|
| population_factory 	| String 	| "ChainChunkFactory" 	| A function that generates an initial population. 	|
| init_algorithms 	| List[String] 	| ["SDO", "LDO"] 	| List of algorithms that can be used to initialize the initial population for population-based algorithms. 	|
| error 	| String 	| "ConflictError" 	| An error function that is minimized by an optimization strategy. 	|
| max_iterations 	| Integer 	| 10 	| Defines maximum number of iterations of an algorithm. 	|
| iteration_callbacks 	| List[String] 	| [] 	| A list that defines iteration callbacks. Iteration callback is called after each iteration of the iterative algorithm. Iteration callback saves certain population information and calls specified actions if certain conditions are met. 	|
| communication_delay 	| Integer 	| 10 	| Defines the number of iterations after which solutions are exchanged with neighboring parts of the population. 	|
| logging_delay 	| Integer 	| 10 	| Defines the number of iteration after the algorithm information is logged. 	|
| QA_temperature 	| Float 	| 0.035 	| Defines the temperature for the quantum annealing algorithm. 	|
| QA_max_steps 	| Float 	| 10 	| The maximum number of steps in one iteration. 	|
| conflict_err_alpha 	| Float 	| 0.1 	| Defines the portion of the sum of conflicting edges in the total error. 	|
| conflict_err_beta 	| Float 	| 0.001 	| Defines the portion of the correlation between solutions in the total error. 	|
| mutation 	| String 	| SimpleMutation 	| A function that changes the individual and returns the nodes that have been changed. 	|
| multiple_mutation_no_of_nodes 	| Integer 	| 2 	| Defines the number of nodes that will change color. 	|
| random_mutation_probability 	| Float 	| 0.1 	| The probability that the color of the random node (it does not have to be conflicting) will be changed. 	|
| simple_tunneling_mutation 	| String 	| MultipleMutation 	| Defines a mutation that changes individuals 	|
| simple_tunneling_probability 	| Float 	| 0.5 	| The probability of changing an individual. 	|
| simple_tunneling_error_correction 	| Float 	| 2 	| The mutated individual is accepted only if its error is less than the error of the old individual multiplied by this parameter. 	|
| simple_tunneling_max_attempts 	| Integer 	| 25 	| The maximum number of mutation attempts until the individual is accepted. 	|
| convergence_callback_tolerance 	| Integer 	| 500 	| Defines the maximum number of iterations in which if the algorithm does not find a better solution convergence occurs and defined actions are called. 	|
| convergence_callback_actions 	| String 	| [SimpleTunneling] 	| Actions that are called when convergence is detected.|


* **edge_property** (*str*) – (default="weight")
    A string that determines the edge attribute that stores the edge weight.
    Any edge attribute not present defaults to 1.


**Returns**

The return value of the procedure is a map that contains the mapping of nodes to colors.

**Return type**

mgp.Record(node=str, color=str)

**Example**

The procedure can be invoked in Cypher using the following query:
```cypher
CALL graph_coloring.color_graph() YIELD *;
```

## ` color_subgraph(context, vertices, edges, parameters, edge_property)`

A procedure that performs graph coloring algorithm on the given subgraph.

**Parameters**

    
* **context** (*mgp.ProcCtx*) – The context of the procedure being executed.


* **vertices** (*mgp.List[mgp.Vertex]*) - List of vertices in the subgraph.


* **edges** (*mgp.List[mgp.Edge]*) – List of edges in the subgraph.


* **parameters** (*mgp.Map*) – (default={})
    A dictionary that specifies the algorithm configuration. Configuration parameters are explained in the table below.

| Name 	| Type 	| Default 	| Description 	|
|-	|-	|-	|-	|
| algorithm 	| String 	| QA 	| An optimization strategy used to find graph coloring. 	|
| no_of_colors 	| Integer 	| 10 	| Defines the number of colors used to color the nodes of the graph. 	|
| no_of_processes 	| Integer 	| 1 	| The number of processes executing the algorithm in parallel 	|
| population_size 	| Integer 	| 15 	| Defines the total number of solutions that are improved through iterations. 	|
| population_factory 	| String 	| "ChainChunkFactory" 	| A function that generates an initial population. 	|
| init_algorithms 	| List[String] 	| ["SDO", "LDO"] 	| List of algorithms that can be used to initialize the initial population for population-based algorithms. 	|
| error 	| String 	| "ConflictError" 	| An error function that is minimized by an optimization strategy. 	|
| max_iterations 	| Integer 	| 10 	| Defines maximum number of iterations of an algorithm. 	|
| iteration_callbacks 	| List[String] 	| [] 	| A list that defines iteration callbacks. Iteration callback is called after each iteration of the iterative algorithm. Iteration callback saves certain population information and calls specified actions if certain conditions are met. 	|
| communication_delay 	| Integer 	| 10 	| Defines the number of iterations after which solutions are exchanged with neighboring parts of the population. 	|
| logging_delay 	| Integer 	| 10 	| Defines the number of iteration after the algorithm information is logged. 	|
| QA_temperature 	| Float 	| 0.035 	| Defines the temperature for the quantum annealing algorithm. 	|
| QA_max_steps 	| Float 	| 10 	| The maximum number of steps in one iteration. 	|
| conflict_err_alpha 	| Float 	| 0.1 	| Defines the portion of the sum of conflicting edges in the total error. 	|
| conflict_err_beta 	| Float 	| 0.001 	| Defines the portion of the correlation between solutions in the total error. 	|
| mutation 	| String 	| SimpleMutation 	| A function that changes the individual and returns the nodes that have been changed. 	|
| multiple_mutation_no_of_nodes 	| Integer 	| 2 	| Defines the number of nodes that will change color. 	|
| random_mutation_probability 	| Float 	| 0.1 	| The probability that the color of the random node (it does not have to be conflicting) will be changed. 	|
| simple_tunneling_mutation 	| String 	| MultipleMutation 	| Defines a mutation that changes individuals 	|
| simple_tunneling_probability 	| Float 	| 0.5 	| The probability of changing an individual. 	|
| simple_tunneling_error_correction 	| Float 	| 2 	| The mutated individual is accepted only if its error is less than the error of the old individual multiplied by this parameter. 	|
| simple_tunneling_max_attempts 	| Integer 	| 25 	| The maximum number of mutation attempts until the individual is accepted. 	|
| convergence_callback_tolerance 	| Integer 	| 500 	| Defines the maximum number of iterations in which if the algorithm does not find a better solution convergence occurs and defined actions are called. 	|
| convergence_callback_actions 	| String 	| [SimpleTunneling] 	| Actions that are called when convergence is detected.|


* **edge_property** (*str*) – (default="weight")
    A string that determines the edge attribute that stores the edge weight.
    Any edge attribute not present defaults to 1.


**Returns**

The return value of the procedure is a map that contains the mapping of nodes to colors.

**Return type**

mgp.Record(node=str, color=str)

**Example**

```cypher 
MATCH (a:)-[e:CLOSE_TO]->(b:)
WITH collect(a) as nodes, collect (e) as edges
CALL graph_coloring.color_subgraph(nodes, edges, {no_of_colors: 2})
YIELD color, node
RETURN color, node;
```