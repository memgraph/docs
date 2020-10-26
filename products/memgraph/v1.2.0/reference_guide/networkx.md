## NetworkX Algorithms Module

In addition to standalone community graph algorithms implemented as Python modules, 
we implemented a module providing NetworkX integration with Memgraph. 
This module, named nxalgo, provides a comprehensive set of thin wrappers 
around most of the algorithms present in the NetworkX package. 
The wrapper functions now have the capability to create a NetworkX 
compatible graph-like object that can stream the native database graph 
directly saving on memory usage significantly.

Our NetworkX reference guide currently consists of the following articles:

  * [nxalg.all_shortest_paths](memgraph/v1.2.0/reference_guide/networkx/nxalg.all_shortest_paths.md)
  * [nxalg.all_simple_paths](memgraph/v1.2.0/reference_guide/networkx/nxalg.all_simple_paths.md)
