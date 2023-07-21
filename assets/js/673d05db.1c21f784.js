"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(n),g=i,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=n(87462),i=(n(67294),n(3905));const r={id:"built-in-graph-algorithms",title:"Built-in graph algorithms",sidebar_label:"Built-in graph algorithms"},o=void 0,s={unversionedId:"reference-guide/built-in-graph-algorithms",id:"version-2.9.0/reference-guide/built-in-graph-algorithms",title:"Built-in graph algorithms",description:"Graph algorithms are a set of instructions that traverse (visits nodes of) a",source:"@site/memgraph_versioned_docs/version-2.9.0/reference-guide/graph-algorithms.md",sourceDirName:"reference-guide",slug:"/reference-guide/built-in-graph-algorithms",permalink:"/docs/memgraph/reference-guide/built-in-graph-algorithms",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.9.0/reference-guide/graph-algorithms.md",tags:[],version:"2.9.0",frontMatter:{id:"built-in-graph-algorithms",title:"Built-in graph algorithms",sidebar_label:"Built-in graph algorithms"},sidebar:"memgraph",previous:{title:"Analyze graph",permalink:"/docs/memgraph/reference-guide/analyze-graph"},next:{title:"Controlling memory usage",permalink:"/docs/memgraph/reference-guide/memory-control"}},l={},h=[{value:"Depth-first search",id:"depth-first-search",level:2},{value:"Getting various results",id:"getting-various-results",level:3},{value:"Filtering by relationships type and direction",id:"filtering-by-relationships-type-and-direction",level:3},{value:"Constraining the path&#39;s length",id:"constraining-the-paths-length",level:3},{value:"Constraining the expansion based on property values",id:"constraining-the-expansion-based-on-property-values",level:3},{value:"Breadth-first search",id:"breadth-first-search",level:2},{value:"Getting various results",id:"getting-various-results-1",level:3},{value:"Filtering by relationships type and direction",id:"filtering-by-relationships-type-and-direction-1",level:3},{value:"Constraining the path&#39;s length",id:"constraining-the-paths-length-1",level:3},{value:"Constraining the expansion based on property values",id:"constraining-the-expansion-based-on-property-values-1",level:3},{value:"Weighted shortest path",id:"weighted-shortest-path",level:2},{value:"Getting various results",id:"getting-various-results-2",level:3},{value:"Filtering by relationships type and direction",id:"filtering-by-relationships-type-and-direction-2",level:3},{value:"Constraining the path&#39;s length",id:"constraining-the-paths-length-2",level:3},{value:"Constraining the expansion based on property values",id:"constraining-the-expansion-based-on-property-values-2",level:3},{value:"All shortest paths",id:"all-shortest-paths",level:2},{value:"Getting various results",id:"getting-various-results-3",level:3},{value:"Constraining the path&#39;s length",id:"constraining-the-paths-length-3",level:3},{value:"Constraining the expansion based on property values",id:"constraining-the-expansion-based-on-property-values-3",level:3}],p={toc:h};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Graph algorithms are a set of instructions that traverse (visits nodes of) a\ngraph and find specific nodes, paths, or a path between two nodes. Some of these\nalgorithms are built into Memgraph and don't require any additional libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#depth-first-search"},"Depth-first search (DFS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#breadth-first-search"},"Breadth-first search (BFS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#weighted-shortest-path"},"Weighted shortest path (WSP)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#all-shortest-paths"},"All shortest paths (ASP)"))),(0,i.kt)("p",null,"Below you can find examples of how to use these algorithms, and you can try them out\nin the ",(0,i.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/europe-backpacking"},"Playground\nsandbox")," using the\nEurope backpacking dataset, or adjust them to the dataset of your choice. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Memgraph has a lot more graph algorithms to offer besides these three, and they\nare all a part of ",(0,i.kt)("a",{parentName:"p",href:"/mage"},"MAGE")," - Memgraph Advanced Graph Extensions, an\nopen-source repository that contains graph algorithms and modules written in the\nform of query modules that can be used to tackle the most interesting and\nchallenging graph analytics problems. Check the ",(0,i.kt)("a",{parentName:"p",href:"/mage/algorithms"},"full list of algorithms"),". ")),(0,i.kt)("h2",{id:"depth-first-search"},"Depth-first search"),(0,i.kt)("p",null,"Depth-first search (DFS) is an algorithm for traversing through the graph. The\nalgorithm starts at the root node and explores each neighboring node as far as\npossible. The moment it reaches a dead-end, it backtracks until it finds a new,\nundiscovered node, then traverses from that node to find more undiscovered\nnodes. In that way, the algorithm visits each node in the graph."),(0,i.kt)("p",null,"DFS in Memgraph has been implemented based on the relationship expansion syntax\nwhich allows it to find multiple relationships between two nodes if such exist.\nBelow are several examples of how to use the DFS in Memgraph."),(0,i.kt)("h3",{id:"getting-various-results"},"Getting various results"),(0,i.kt)("p",null,"The following query will show all the paths from node ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," to node ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*]->(m {id: 8}) \nRETURN path;\n")),(0,i.kt)("p",null,"To get the list of all relationships, add a variable in the square brackets and\nreturn it as a result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships *]->(m {id: 8}) \nRETURN relationships;\n")),(0,i.kt)("p",null,"To get the list of path nodes, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*]->(m {id: 8}) \nRETURN path,nodes(path);\n")),(0,i.kt)("h3",{id:"filtering-by-relationships-type-and-direction"},"Filtering by relationships type and direction"),(0,i.kt)("p",null,"You can filter relationships by type by defining the type after the relationship\nlist variable, and you decide the direction by adding or removing an arrow from\nthe dash."),(0,i.kt)("p",null,"In the following example, the algorithm will traverse only across ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseTo")," type\nof relationships:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *]->(m {id: 8}) \nRETURN path,relationships;\n")),(0,i.kt)("p",null,"You can also list multiple relationship types and allow your algorithm to traverse across any of them."),(0,i.kt)("p",null,"In the following example, the algorithm will traverse across any of the ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseTo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Borders")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"Inside")," type\nof relationship: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo | :Borders | :Inside *]->(m {id: 8}) \nRETURN path,relationships;\n")),(0,i.kt)("p",null,"Be careful when using algorithms, especially DFS, without defining a direction.\nDepending on the size of the dataset, the execution of the query can cause a\ntimeout. "),(0,i.kt)("h3",{id:"constraining-the-paths-length"},"Constraining the path's length"),(0,i.kt)("p",null,"The constraints on the path length are defined after the asterisk sign. The\nfollowing query will return all the results when the path is equal to or shorter\nthan 5 hops:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships * ..5]->(m {id: 8}) \nRETURN path,relationships;\n")),(0,i.kt)("p",null,"This query will return all the paths that are equal to or longer than 3, and\nequal to or shorter than 5 hops:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships * 3..5]->(m {id: 8}) \nRETURN path,relationships;\n")),(0,i.kt)("h3",{id:"constraining-the-expansion-based-on-property-values"},"Constraining the expansion based on property values"),(0,i.kt)("p",null,"Depth-first expansion allows an arbitrary expression filter that determines if\nan expansion is allowed over a certain relationship to a certain node. The\nfilter is defined as a lambda function over ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", which denotes the\nrelationship expanded over and node expanded to in the depth-first search. "),(0,i.kt)("p",null,"In the following example, expansion is allowed over relationships with an ",(0,i.kt)("inlineCode",{parentName:"p"},"eu_border"),"\nproperty equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and to nodes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"drinks_USD")," property less than ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[* (r, n | r.eu_border = false AND n.drinks_USD < 15)]->(m {id: 8}) \nRETURN path;\n")),(0,i.kt)("h2",{id:"breadth-first-search"},"Breadth-first search"),(0,i.kt)("p",null,"In breadth-first search (BFS) traversal starts from a single node, and the order of\nvisited nodes is decided based on nodes' breadth (distance from the source\nnode). This means that when a certain node is visited, it can be safely assumed\nthat all nodes that are fewer relationships away from the source node have\nalready been visited, resulting in the shortest path from the source node to the\nnewly visited node. "),(0,i.kt)("p",null,"BFS in Memgraph has been implemented based on the relationship expansion syntax.\nThere are a few benefits of the breadth-first expansion approach, instead of\na specialized function. For one, it is possible to inject expressions that\nfilter nodes and relationships along the path itself, not just the final\ndestination node. Furthermore, it's possible to find multiple paths to multiple\ndestination nodes. Also, it is possible to simply go through a node's\nneighborhood in breadth-first manner."),(0,i.kt)("p",null,"Currently, it isn't possible to get all the shortest paths to a single node using\nMemgraph's breadth-first expansion. Below are several examples of how to use the BFS\nin Memgraph."),(0,i.kt)("h3",{id:"getting-various-results-1"},"Getting various results"),(0,i.kt)("p",null,"The following query will show the shortest path between nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," as a\ngraph result."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*BFS]->(m {id: 8}) \nRETURN path;\n")),(0,i.kt)("p",null,"To get the list of relationships, add a variable before the ",(0,i.kt)("inlineCode",{parentName:"p"},"*BFS")," and return\nit as a result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships *BFS]->(m {id: 8}) \nRETURN relationships;\n")),(0,i.kt)("p",null,"To get a list of path nodes use the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes()")," function. You can then return the\nresults as a list, or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNWIND")," clause to return individual node\nproperties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*BFS]->(m {id: 8}) \nRETURN nodes(path);\n")),(0,i.kt)("h3",{id:"filtering-by-relationships-type-and-direction-1"},"Filtering by relationships type and direction"),(0,i.kt)("p",null,"You can filter relationships by type by defining the type after the relationship\nlist variable, and you decide the direction by adding or removing an arrow from\nthe dash."),(0,i.kt)("p",null,"In the following example, the algorithm will traverse only across ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseTo")," type\nof relationships regardless of the direction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships:CloseTo *BFS]-(m {id: 8}) \nRETURN relationships;\n")),(0,i.kt)("h3",{id:"constraining-the-paths-length-1"},"Constraining the path's length"),(0,i.kt)("p",null,"The constraints on the path length are defined after the *BFS. The following\nquery will return a result only if the path is equal to or shorter than 5 hops:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships:CloseTo *BFS ..5]->(m {id: 8}) \nRETURN relationships;\n")),(0,i.kt)("p",null,"The result will be returned only if the path is equal to or longer than 3, and\nequal to or shorter than 5 hops:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships:CloseTo *BFS 3..5]-(m {id: 15}) \nRETURN relationships;\n")),(0,i.kt)("h3",{id:"constraining-the-expansion-based-on-property-values-1"},"Constraining the expansion based on property values"),(0,i.kt)("p",null,"Breadth-first expansion allows an arbitrary expression filter that determines if\nan expansion is allowed over a certain relationship to a certain node. The\nfilter is defined as a lambda function over ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", which denotes the\nrelationship expanded over and node expanded to in the breadth-first search. "),(0,i.kt)("p",null,"In the following example, expansion is allowed over relationships with an ",(0,i.kt)("inlineCode",{parentName:"p"},"eu_border"),"\nproperty equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and to nodes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"drinks_USD")," property less than ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*BFS (r, n | r.eu_border = false AND n.drinks_USD < 15)]-(m {id: 8}) \nRETURN path;\n")),(0,i.kt)("h2",{id:"weighted-shortest-path"},"Weighted shortest path"),(0,i.kt)("p",null,"In graph theory, the weighted shortest path problem is the problem of finding a path\nbetween two nodes in a graph such that the sum of the weights of relationships\nconnecting nodes, or the sum of the weight of some node property on the path, is\nminimized."),(0,i.kt)("p",null,"One of the most important algorithms for finding weighted shortest paths is\n",(0,i.kt)("strong",{parentName:"p"},"Dijkstra's algorithm"),". In Memgraph it has been implemented based on the\nrelationship expansion syntax. In the brackets following the ",(0,i.kt)("inlineCode",{parentName:"p"},"*WSHORTEST"),"\nalgorithm definition, you need to define what relationship or node property\ncarries the weight, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"[*WSHORTEST (r, n | r.weight)]"),". Below are\nseveral examples of how to use the WSHORTEST in Memgraph."),(0,i.kt)("h3",{id:"getting-various-results-2"},"Getting various results"),(0,i.kt)("p",null,"To find the weighted shortest path between nodes based on the value of the\n",(0,i.kt)("inlineCode",{parentName:"p"},"total_USD")," node property, traversing only across ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseTo")," relationships and\nreturn the result as a graph, use the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[:CloseTo *WSHORTEST (r, n | n.total_USD)]-(m {id: 15})\nRETURN path;\n")),(0,i.kt)("p",null,"In the above example, the weight is a property of a node, but you can also\nuse weight of some relationship property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[:Type *WSHORTEST (r, n | r.weight)]-(m {id: 9})\nRETURN path;\n")),(0,i.kt)("p",null,"To get the list of relationships, add a variable before the ",(0,i.kt)("inlineCode",{parentName:"p"},"*WSHORTEST")," and\nreturn it as a result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD)]-(m {id: 9})\nRETURN relationships;\n")),(0,i.kt)("p",null,"To get the path nodes, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes()")," function. You can then return the\nresults as a list, or use the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNWIND")," clause to return individual node\nproperties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD)]-(m {id: 9})\nUNWIND (nodes(path)) AS node\nRETURN node.id;\n")),(0,i.kt)("p",null,"To get the total weight, add a variable at the end of the expansion expression: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD) total_weight]-(m {id: 9})\nRETURN nodes(path), total_weight;\n")),(0,i.kt)("p",null,"Remember that in the case when weight is taken from the node property, the value\nof the last node is not taken into the total weight. "),(0,i.kt)("h3",{id:"filtering-by-relationships-type-and-direction-2"},"Filtering by relationships type and direction"),(0,i.kt)("p",null,"You can filter relationships by type by defining the type after the relationship\nlist variable, and you decide the direction by adding or removing an arrow from\nthe dash."),(0,i.kt)("p",null,"In the following example, the algorithm will traverse only across ",(0,i.kt)("inlineCode",{parentName:"p"},"CloseTo")," type\nof relationships:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *WSHORTEST (r, n | n.total_USD)]->(m {id: 46})\nRETURN relationships;\n")),(0,i.kt)("h3",{id:"constraining-the-paths-length-2"},"Constraining the path's length"),(0,i.kt)("p",null,"Memgraph's implementation of the Dijkstra's algorithm uses a modified version of\nthis algorithm that can handle length restriction and is based on the relationship\nexpansion syntax. The length restriction parameter is optional, and when it's not\nset, it can increase the complexity of algorithm execution. It is important to note\nthat the term \"length\" in this context denotes the number of traversed\nrelationships and not the sum of their weights."),(0,i.kt)("p",null,"The following example will find the shortest path with a maximum length of 4\nrelationships between nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[:CloseTo *WSHORTEST 4 (r, n | n.total_USD) total_weight]-(m {id: 46})\nRETURN path,total_weight;\n")),(0,i.kt)("h3",{id:"constraining-the-expansion-based-on-property-values-2"},"Constraining the expansion based on property values"),(0,i.kt)("p",null,"Weighted shortest path expansion allows an arbitrary expression filter that\ndetermines if an expansion is allowed over a certain relationship to a certain\nnode. The filter is defined as a lambda function over ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", which denotes\nthe relationship expanded over and node expanded to in finding the weighted shortest path. "),(0,i.kt)("p",null,"In the following example, expansion is allowed over relationships with an ",(0,i.kt)("inlineCode",{parentName:"p"},"eu_border"),"\nproperty equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and to nodes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"drinks_USD")," property less than ",(0,i.kt)("inlineCode",{parentName:"p"},"15"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*WSHORTEST (r, n | n.total_USD) total_weight (r, n | r.eu_border = false AND n.drinks_USD < 15)]-(m {id: 46})\nRETURN path,total_weight;\n")),(0,i.kt)("h2",{id:"all-shortest-paths"},"All shortest paths"),(0,i.kt)("p",null,"Finding all shortest paths is an expansion of the weighted shortest paths problem. The goal\nof finding the shortest path is obtaining any minimum sum of weights on the path from one\nnode to the other. However, there could be multiple similar-weighted paths, and this algorithm\nfetches them all."),(0,i.kt)("p",null,"Weighted shortest path implementation returns only one resulting path from one\nnode to the other. Commonly, multiple shortest paths are flowing through different\nroutes. Syntax of obtaining all shortest paths is similar to the weighted shortest path\nand boils down to calling ",(0,i.kt)("inlineCode",{parentName:"p"},"[*ALLSHORTEST (r, n | r.weight)]")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," define\nthe current expansion relationship and node respectively."),(0,i.kt)("h3",{id:"getting-various-results-3"},"Getting various results"),(0,i.kt)("p",null,"The following query searches for all shortest paths with a default weight equal to 1:"),(0,i.kt)("p",null,"To showcase the characteristics of all shortest paths, we'll use a default weight equal to 1 in the next example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[:CloseTo *ALLSHORTEST (r, n | 1)]-(m {id: 15})\nRETURN path;\n")),(0,i.kt)("p",null,"The query returns multiple results, all with 4 hops meaning that there are\nmultiple paths flowing from the source node to the destination node."),(0,i.kt)("p",null,"The following is a weighted query based on the weight property on each visited relationship:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[:Type *ALLSHORTEST (r, n | r.weight)]-(m {id: 5})\nRETURN path;\n")),(0,i.kt)("p",null,"To obtain all relationship on all shortest paths, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"relationships")," function, unwind the results, and return unique edges so there is no duplicates in our output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *ALLSHORTEST (r, n | n.total_USD)]-(m {id: 51})\nUNWIND (relationships(path)) AS edge\nRETURN DISTINCT edge; \n")),(0,i.kt)("p",null,"To get the total weight, add a variable at the end of the expansion expression: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[relationships:CloseTo *ALLSHORTEST (r, n | 1) total_weight]-(m {id: 9})\nRETURN nodes(path), total_weight;\n")),(0,i.kt)("h3",{id:"constraining-the-paths-length-3"},"Constraining the path's length"),(0,i.kt)("p",null,"All shortest paths allows for upper bound path restriction. This addition significantly modifies the outcome of the algorithm if the unrestricted shortest path is obtained from a route with more hops than the set upper bound. Finding the all shortest paths with path restriction\nboils down to finding the minimum weighted path with a maximum length of ",(0,i.kt)("inlineCode",{parentName:"p"},"upper_bound"),". Upper bound is set to 4 just after the operator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[:CloseTo *ALLSHORTEST 4 (r, n | n.total_USD) total_weight]-(m {id: 46})\nRETURN path,total_weight;\n")),(0,i.kt)("h3",{id:"constraining-the-expansion-based-on-property-values-3"},"Constraining the expansion based on property values"),(0,i.kt)("p",null,"All shortest paths algorithm enables the usage of an expansions filter. To define it, you need to write a lambda function\nwith a filter expression over ",(0,i.kt)("inlineCode",{parentName:"p"},"r")," (relationship) and ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," (node) variables as parameters."),(0,i.kt)("p",null,"In the following example, expansion is allowed over relationships with a ",(0,i.kt)("inlineCode",{parentName:"p"},"eu_border"),"\nproperty equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," and to nodes with a ",(0,i.kt)("inlineCode",{parentName:"p"},"drinks_USD")," property less than ",(0,i.kt)("inlineCode",{parentName:"p"},"20"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path=(n {id: 0})-[*ALLSHORTEST (r, n | n.total_USD) total_weight (r, n | r.eu_border = false AND n.drinks_USD < 20)]-(m {id: 46})\nRETURN path, total_weight;\n")))}d.isMDXComponent=!0}}]);