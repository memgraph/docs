"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6434],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,c=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(c,o(o({ref:t},h),{},{components:n})):a.createElement(c,o({ref:t},h))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71505:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"built-in-graph-algorithms",title:"Built-in graph algorithms",sidebar_label:"Built-in graph algorithms"},l=void 0,p={unversionedId:"reference-guide/built-in-graph-algorithms",id:"reference-guide/built-in-graph-algorithms",title:"Built-in graph algorithms",description:"Graph algorithms are a set of instructions that traverse (visits nodes of) a",source:"@site/docs/reference-guide/graph-algorithms.md",sourceDirName:"reference-guide",slug:"/reference-guide/built-in-graph-algorithms",permalink:"/docs/memgraph/next/reference-guide/built-in-graph-algorithms",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/graph-algorithms.md",tags:[],version:"current",frontMatter:{id:"built-in-graph-algorithms",title:"Built-in graph algorithms",sidebar_label:"Built-in graph algorithms"},sidebar:"memgraph",previous:{title:"Data durability and backup",permalink:"/docs/memgraph/next/reference-guide/backup"},next:{title:"Controlling memory usage",permalink:"/docs/memgraph/next/reference-guide/memory-control"}},h={},d=[{value:"Depth-first search",id:"depth-first-search",level:2},{value:"Getting various results",id:"getting-various-results",level:3},{value:"Filtering by relationships type and direction",id:"filtering-by-relationships-type-and-direction",level:3},{value:"Constraining the path&#39;s length",id:"constraining-the-paths-length",level:3},{value:"Constraining the expansion based on property values",id:"constraining-the-expansion-based-on-property-values",level:3},{value:"Breadth-first search",id:"breadth-first-search",level:2},{value:"Getting various results",id:"getting-various-results-1",level:3},{value:"Filtering by relationships type and direction",id:"filtering-by-relationships-type-and-direction-1",level:3},{value:"Constraining the path&#39;s length",id:"constraining-the-paths-length-1",level:3},{value:"Constraining the expansion based on property values",id:"constraining-the-expansion-based-on-property-values-1",level:3},{value:"Weighted Shortest Path",id:"weighted-shortest-path",level:2},{value:"Getting various results",id:"getting-various-results-2",level:3},{value:"Filtering by relationships type and direction",id:"filtering-by-relationships-type-and-direction-2",level:3},{value:"Constraining the path&#39;s length",id:"constraining-the-paths-length-2",level:3},{value:"Constraining the expansion based on property values",id:"constraining-the-expansion-based-on-property-values-2",level:3}],u={toc:d};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Graph algorithms are a set of instructions that traverse (visits nodes of) a\ngraph and find specific nodes, paths, or a path between two nodes. Some of these\nalgorithms are built into Memgraph and don't require any additional libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#depth-first-search"},"Depth-first search (DFS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#breadth-first-search"},"Breadth-first search (BFS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#weighted-shortest-path"},"Weighted shortest path (WSP)"))),(0,i.kt)("p",null,"Below you can find examples of how to use these algorithms, and you can try them out\nin the ",(0,i.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/europe-backpacking"},"Playground\nsandbox")," using the\nEurope backpacking dataset, or adjust them to the dataset of your choice. "),(0,i.kt)("p",null,"Memgraph has a lot more graph algorithms to offer besides these three, and they\nare all a part of ",(0,i.kt)("a",{parentName:"p",href:"/mage"},"MAGE")," - Memgraph Advanced Graph Extensions, an\nopen-source repository that contains graph algorithms and modules written in the\nform of query modules that can be used to tackle the most interesting and\nchallenging graph analytics problems."),(0,i.kt)("h2",{id:"depth-first-search"},"Depth-first search"),(0,i.kt)("p",null,"Depth-first search (DFS) is an algorithm for traversing through the graph. The\nalgorithm starts at the root node and explores each neighboring node as far as\npossible. The moment it reaches a dead-end, it backtracks until it finds a new,\nundiscovered node, then traverses from that node to find more undiscovered\nnodes. In that way, the algorithm visits each node in the graph."),(0,i.kt)("p",null,"DFS in Memgraph has been implemented based on the relationship expansion syntax\nwhich allows it to find multiple relationships between two nodes if such exist.\nBelow are several examples of how to use the DFS in Memgraph."),(0,i.kt)("h3",{id:"getting-various-results"},"Getting various results"),(0,i.kt)("p",null,"The following query will show all the paths from node ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," to node ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*]->(m {id: 8}) \nRETURN path;\n")),(0,i.kt)("p",null,"To get the list of all relationships, add a variable in the square brackets and\nreturn it as a result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships *]->(m {id: 8}) \nRETURN relationships;\n")),(0,i.kt)("p",null,"To get the list of path nodes, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*]->(m {id: 8}) \nRETURN path,nodes(path);\n")),(0,i.kt)("h3",{id:"filtering-by-relationships-type-and-direction"},"Filtering by relationships type and direction"),(0,i.kt)("p",null,"You can filter relationships by type by defining the type after the relationship\nlist variable, and you decide the direction by adding or removing an arrow from\nthe dash."),(0,i.kt)("p",null,"In the following example, the algorithm will traverse only across ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseTo")," type\nof relationships:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *]->(m {id: 8}) \nRETURN path,relationships;\n")),(0,i.kt)("p",null,"Be careful when using algorithms, especially DFS, without defining a direction.\nDepending on the size of the dataset, the execution of the query can cause a\ntimeout. "),(0,i.kt)("h3",{id:"constraining-the-paths-length"},"Constraining the path's length"),(0,i.kt)("p",null,"The constraints on the path length are defined after the asterisk sign. The\nfollowing query will return all the results when the path is equal to or shorter\nthan 5 hops:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships * ..5]->(m {id: 8}) \nRETURN path,relationships;\n")),(0,i.kt)("p",null,"This query will return all the paths that are equal to or longer than 3, and\nequal to or shorter than 5 hops:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships * 3..5]->(m {id: 8}) \nRETURN path,relationships;\n")),(0,i.kt)("h3",{id:"constraining-the-expansion-based-on-property-values"},"Constraining the expansion based on property values"),(0,i.kt)("p",null,"Depth-first expansion allows an arbitrary expression filter that determines if\nan expansion is allowed over a certain relationship to a certain node. The\nfilter is defined as a lambda function over ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", which denotes the\nrelationship expanded over and node expanded to in the depth-first search. "),(0,i.kt)("p",null,"In the following example, expansion is allowed over relationships with an ",(0,i.kt)("inlineCode",{parentName:"p"},"eu_border"),"\nproperty equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and to nodes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"drinks_USD")," property less than ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[* (r, n | r.eu_border = false AND n.drinks_USD < 15)]->(m {id: 8}) \nRETURN path;\n")),(0,i.kt)("h2",{id:"breadth-first-search"},"Breadth-first search"),(0,i.kt)("p",null,"In breadth-first search (BFS) traversal starts from a single node, and the order of\nvisited nodes is decided based on nodes' breadth (distance from the source\nnode). This means that when a certain node is visited, it can be safely assumed\nthat all nodes that are fewer relationships away from the source node have\nalready been visited, resulting in the shortest path from the source node to the\nnewly visited node. "),(0,i.kt)("p",null,"BFS in Memgraph has been implemented based on the relationship expansion syntax.\nThere are a few benefits of the breadth-first expansion approach, instead of\na specialized function. For one, it is possible to inject expressions that\nfilter nodes and relationships along the path itself, not just the final\ndestination node. Furthermore, it's possible to find multiple paths to multiple\ndestination nodes. Also, it is possible to simply go through a node's\nneighborhood in breadth-first manner."),(0,i.kt)("p",null,"Currently, it isn't possible to get all the shortest paths to a single node using\nMemgraph's breadth-first expansion. Below are several examples of how to use the BFS\nin Memgraph."),(0,i.kt)("h3",{id:"getting-various-results-1"},"Getting various results"),(0,i.kt)("p",null,"The following query will show the shortest path between nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," as a\ngraph result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*BFS]->(m {id: 8}) \nRETURN path;\n")),(0,i.kt)("p",null,"To get the list of relationships, add a variable before the ",(0,i.kt)("inlineCode",{parentName:"p"},"*BFS")," and return\nit as a result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships *BFS]->(m {id: 8}) \nRETURN relationships;\n")),(0,i.kt)("p",null,"To get a list of path nodes use the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes()")," function. You can then return the\nresults as a list, or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNWIND")," clause to return individual node\nproperties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*BFS]->(m {id: 8}) \nRETURN nodes(path);\n")),(0,i.kt)("h3",{id:"filtering-by-relationships-type-and-direction-1"},"Filtering by relationships type and direction"),(0,i.kt)("p",null,"You can filter relationships by type by defining the type after the relationship\nlist variable, and you decide the direction by adding or removing an arrow from\nthe dash."),(0,i.kt)("p",null,"In the following example, the algorithm will traverse only across ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseTo")," type\nof relationships regardless of the direction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships:CloseTo *BFS]-(m {id: 8}) \nRETURN relationships;\n")),(0,i.kt)("h3",{id:"constraining-the-paths-length-1"},"Constraining the path's length"),(0,i.kt)("p",null,"The constraints on the path length are defined after the *BFS. The following\nquery will return a result only if the path is equal to or shorter than 5 hops:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships:CloseTo *BFS ..5]->(m {id: 8}) \nRETURN relationships;\n")),(0,i.kt)("p",null,"The result will be returned only if the path is equal to or longer than 3, and\nequal to or shorter than 5 hops:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships:CloseTo *BFS 3..5]-(m {id: 15}) \nRETURN relationships;\n")),(0,i.kt)("h3",{id:"constraining-the-expansion-based-on-property-values-1"},"Constraining the expansion based on property values"),(0,i.kt)("p",null,"Breadth-first expansion allows an arbitrary expression filter that determines if\nan expansion is allowed over a certain relationship to a certain node. The\nfilter is defined as a lambda function over ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", which denotes the\nrelationship expanded over and node expanded to in the breadth-first search. "),(0,i.kt)("p",null,"In the following example, expansion is allowed over relationships with an ",(0,i.kt)("inlineCode",{parentName:"p"},"eu_border"),"\nproperty equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and to nodes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"drinks_USD")," property less than ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*BFS (r, n | r.eu_border = false AND n.drinks_USD < 15)]-(m {id: 8}) \nRETURN path;\n")),(0,i.kt)("h2",{id:"weighted-shortest-path"},"Weighted Shortest Path"),(0,i.kt)("p",null,"In graph theory, the weighted shortest path problem is the problem of finding a path\nbetween two nodes in a graph such that the sum of the weights of relationships\nconnecting nodes, or the sum of the weight of some node property on the path, is\nminimized."),(0,i.kt)("p",null,"One of the most important algorithms for finding weighted shortest paths is\n",(0,i.kt)("strong",{parentName:"p"},"Dijkstra's algorithm"),". In Memgraph it has been implemented based on the\nrelationship expansion syntax. In the brackets following the ",(0,i.kt)("inlineCode",{parentName:"p"},"*WSHORTEST"),"\nalgorithm definition, you need to define what relationship or node property\ncarries the weight, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"[*WSHORTEST (r, n | r.weight)]"),". Below are\nseveral examples of how to use the WSHORTEST in Memgraph."),(0,i.kt)("h3",{id:"getting-various-results-2"},"Getting various results"),(0,i.kt)("p",null,"To find the weighted shortest path between nodes based on the value of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"total_USD")," node property, traversing only across ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseTo")," relationships and\nreturn the result as a graph, use the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[:CloseTo *WSHORTEST (r, n | n.total_USD)]-(m {id: 15})\nRETURN path;\n")),(0,i.kt)("p",null,"In the above example, the weight is a property of a node, but you can also\nuse weight of some relationship property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[:Type *WSHORTEST (r, n | r.weight)]-(m {id: 9})\nRETURN path;\n")),(0,i.kt)("p",null,"To get the list of relationships, add a variable before the ",(0,i.kt)("inlineCode",{parentName:"p"},"*WSHORTEST")," and\nreturn it as a result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD)]-(m {id: 9})\nRETURN relationships;\n")),(0,i.kt)("p",null,"To get the path nodes, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes()")," function. You can then return the\nresults as a list, or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNWIND")," clause to return individual node\nproperties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD)]-(m {id: 9})\nUNWIND (nodes(path)) AS node\nRETURN node.id;\n")),(0,i.kt)("p",null,"To get the total weight, add a variable at the end of the expansion expression: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD) total_weight]-(m {id: 9})\nRETURN nodes(path), total_weight;\n")),(0,i.kt)("p",null,"Remember that in the case when weight is taken from the node property, the value\nof the last node is not taken into the total weight. "),(0,i.kt)("h3",{id:"filtering-by-relationships-type-and-direction-2"},"Filtering by relationships type and direction"),(0,i.kt)("p",null,"You can filter relationships by type by defining the type after the relationship\nlist variable, and you decide the direction by adding or removing an arrow from\nthe dash."),(0,i.kt)("p",null,"In the following example, the algorithm will traverse only across ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseTo")," type\nof relationships:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD)]->(m {id: 46})\nRETURN relationships;\n")),(0,i.kt)("h3",{id:"constraining-the-paths-length-2"},"Constraining the path's length"),(0,i.kt)("p",null,"Memgraph's implementation of the Dijkstra's algorithm uses a modified version of\nthis algorithm that can handle length restriction and is based on the relationship\nexpansion syntax. The length restriction parameter is optional, and when it's not\nset, it can increase the complexity of algorithm execution. It is important to note\nthat the term \"length\" in this context denotes the number of traversed\nrelationships and not the sum of their weights."),(0,i.kt)("p",null,"The following example will find the shortest path with a maximum length of 4\nrelationships between nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[:CloseTo *WSHORTEST 4 (r, n | n.total_USD) total_weight]-(m {id: 46})\nRETURN path,total_weight;\n")),(0,i.kt)("h3",{id:"constraining-the-expansion-based-on-property-values-2"},"Constraining the expansion based on property values"),(0,i.kt)("p",null,"Weighted shortest path expansion allows an arbitrary expression filter that\ndetermines if an expansion is allowed over a certain relationship to a certain\nnode. The filter is defined as a lambda function over ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", which denotes\nthe relationship expanded over and node expanded to in finding the weighted shortest path. "),(0,i.kt)("p",null,"In the following example, expansion is allowed over relationships with an ",(0,i.kt)("inlineCode",{parentName:"p"},"eu_border"),"\nproperty equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and to nodes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"drinks_USD")," property less than ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*WSHORTEST (r, n | n.total_USD) total_weight (r, n | r.eu_border = false AND n.drinks_USD < 15)]-(m {id: 46})\nRETURN path,total_weight;\n")))}g.isMDXComponent=!0}}]);