"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22868],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(n),u=r,m=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var h=2;h<i;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56071:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},toc:function(){return d},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"graph-algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},l=void 0,h={unversionedId:"concepts/graph-algorithms",id:"version-1.3.0/concepts/graph-algorithms",isDocsHomePage:!1,title:"Graph algorithms",description:"Introduction",source:"@site/memgraph_versioned_docs/version-1.3.0/concepts/graph-algorithms.md",sourceDirName:"concepts",slug:"/concepts/graph-algorithms",permalink:"/docs/memgraph/1.3.0/concepts/graph-algorithms",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/concepts/graph-algorithms.md",tags:[],version:"1.3.0",frontMatter:{id:"graph-algorithms",title:"Graph algorithms",sidebar_label:"Graph algorithms"},sidebar:"version-1.3.0/memgraph",previous:{title:"Storage",permalink:"/docs/memgraph/1.3.0/concepts/storage"},next:{title:"Indexing",permalink:"/docs/memgraph/1.3.0/concepts/indexing"}},d=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Breadth First Search",id:"breadth-first-search",children:[],level:2},{value:"Weighted Shortest Path",id:"weighted-shortest-path",children:[{value:"Dijkstra&#39;s algorithm",id:"dijkstras-algorithm",children:[{value:"Upper Bound Implications",id:"upper-bound-implications",children:[],level:4}],level:3}],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2}],p={toc:d};function c(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'The graph is a mathematical structure used to describe a set of objects in which\nsome pairs of objects are "related" in some sense. Generally, we consider\nthose objects as abstractions named ',(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," (also called ",(0,i.kt)("inlineCode",{parentName:"p"},"vertices"),").\nAforementioned relations between nodes are modelled by an abstraction named\n",(0,i.kt)("inlineCode",{parentName:"p"},"edge")," (also called ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship"),")."),(0,i.kt)("p",null,"It turns out that a lot of real-world problems can be successfully modeled\nusing graphs. Some natural examples would contain railway networks between\ncities, computer networks, piping systems and Memgraph itself."),(0,i.kt)("p",null,"This article outlines some of the most important graph algorithms\nthat are internally used by Memgraph. We believe that advanced users could\nsignificantly benefit from obtaining basic knowledge about those algorithms.\nThe users should also note that this article does not contain an in-depth\nanalysis of algorithms and their implementation details since those are\nwell documented in the appropriate literature and, in our opinion, go well out\nof scope for user documentation. That being said, we will include the relevant\ninformation for using Memgraph effectively and efficiently."),(0,i.kt)("p",null,"Contents of this article include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#breadth-first-search"},"Breadth First Search (BFS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#weighted-shortest-path"},"Weighted Shortest Path (WSP)"))),(0,i.kt)("h2",{id:"breadth-first-search"},"Breadth First Search"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"Breadth First Search"),"\nis a way of traversing a graph data structure. The\ntraversal starts from a single node (usually referred to as source node) and,\nduring the traversal, breadth is prioritized over depth, hence the name of the\nalgorithm. More precisely, when we visit some node, we can safely assume that\nwe have already visited all nodes that are fewer edges away from a source node.\nAn interesting side-effect of traversing a graph in BFS order is the fact\nthat, when we visit a particular node, we can easily find a path from\nthe source node to the newly visited node with the least number of edges.\nSince in this context we disregard the edge weights, we can say that BFS is\na solution to an unweighted shortest path problem."),(0,i.kt)("p",null,"The algorithm itself proceeds as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep around a set of nodes that are equidistant from the source node.\nInitially, this set contains only the source node."),(0,i.kt)("li",{parentName:"ul"},"Expand to all not yet visited nodes that are a single edge away from that\nset. Note that the set of those nodes is also equidistant from the source\nnode."),(0,i.kt)("li",{parentName:"ul"},"Replace the set with a set of nodes obtained in the previous step."),(0,i.kt)("li",{parentName:"ul"},"Terminate the algorithm when the set is empty.")),(0,i.kt)("p",null,"The order of visited nodes is nicely visualized in the following animation from\nWikipedia. Note that each row contains nodes that are equidistant from the\nsource and thus represents one of the sets mentioned above."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif",alt:null})),(0,i.kt)("p",null,"The standard BFS implementation skews from the above description by relying on\na FIFO (first in, first out) queue data structure. Nevertheless, the\nfunctionality is equivalent and its runtime is bounded by ",(0,i.kt)("inlineCode",{parentName:"p"},"O(|V| + |E|)")," where\n",(0,i.kt)("inlineCode",{parentName:"p"},"V")," denotes the set of nodes and ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," denotes the set of edges. Therefore,\nit provides a more efficient way of finding unweighted shortest paths than\nrunning ",(0,i.kt)("a",{parentName:"p",href:"#weighted-shortest-path"},"Dijkstra's algorithm")," on a graph\nwith edge weights equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("h2",{id:"weighted-shortest-path"},"Weighted Shortest Path"),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graph_theory"},"graph theory"),", weighted shortest\npath problem is the problem of finding a path between two nodes in a graph such\nthat the sum of the weights of edges connecting nodes on the path is minimized."),(0,i.kt)("h3",{id:"dijkstras-algorithm"},"Dijkstra's algorithm"),(0,i.kt)("p",null,"One of the most important algorithms for finding weighted shortest paths is\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"},"Dijkstra's algorithm"),'.\nOur implementation uses a modified version of this algorithm that can handle\nlength restriction. The length restriction parameter is optional and when it\'s\nnot set it could increase the complexity of the algorithm. It is important to\nnote that the term "length" in this context denotes the number of traversed\nedges and not the sum of their weights.'),(0,i.kt)("p",null,"The algorithm itself is based on a couple of greedy observations and could\nbe expressed in natural language as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep around a set of already visited nodes along with their corresponding\nshortest paths from source node. Initially, this set contains only the\nsource node with the shortest distance of ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,i.kt)("li",{parentName:"ul"},"Find an edge that goes from a visited node to an unvisited one such that the\nshortest path from source to the visited node increased by the weight of\nthat edge is minimized. Traverse that edge and add a newly visited node with\nappropriate distance to the set of already visited nodes."),(0,i.kt)("li",{parentName:"ul"},"Repeat the process until the destination node is visited.")),(0,i.kt)("p",null,"The described algorithm is nicely visualized in the following animation from\nWikipedia. Note that edge weights correspond to the Euclidean distance between\nnodes which represent points on a plane."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/e/e4/DijkstraDemo.gif",alt:null})),(0,i.kt)("p",null,"Using appropriate data structures the worst-case performance of our\nimplementation can be expressed as  ",(0,i.kt)("inlineCode",{parentName:"p"},"O(|E| + |V|log|V|)")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," denotes\nthe set of edges and ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," denotes the set of nodes."),(0,i.kt)("p",null,"A sample query that finds a shortest path between two nodes looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 723})-[edge_list *wShortest 10 (e, n | e.weight) total_weight]-(b {id: 882}) RETURN *;\n")),(0,i.kt)("p",null,"This query has an upper bound length restriction set to ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),". This means that no\npath that traverses more than ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," edges will be considered as a valid result."),(0,i.kt)("h4",{id:"upper-bound-implications"},"Upper Bound Implications"),(0,i.kt)("p",null,"Since the upper bound parameter is optional, we can have different results based\non this parameter."),(0,i.kt)("p",null,"Consider the following graph and sample queries."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(41890).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 0})-[edge_list *wShortest 3 (e, n | e.weight) total_weight]-(b {id: 5}) RETURN *;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (a {id: 0})-[edge_list *wShortest   (e, n | e.weight) total_weight]-(b {id: 5}) RETURN *;\n")),(0,i.kt)("p",null,"The first query will try to find the weighted shortest path between nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"5")," with the restriction on the path length set to ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),", and the second query\nwill try to find the weighted shortest path with no restriction on the path\nlength."),(0,i.kt)("p",null,"The expected result for the first query is ",(0,i.kt)("inlineCode",{parentName:"p"},"0 -> 1 -> 4 -> 5")," with the total\ncost of ",(0,i.kt)("inlineCode",{parentName:"p"},"12"),", while the expected result for the second query is\n",(0,i.kt)("inlineCode",{parentName:"p"},"0 -> 2 -> 3 -> 4 -> 5")," with the total cost of ",(0,i.kt)("inlineCode",{parentName:"p"},"11"),". Obviously, the second\nquery can find the true shortest path because it has no restrictions on the\nlength."),(0,i.kt)("p",null,"To handle cases when the length restriction is set, ",(0,i.kt)("em",{parentName:"p"},"weighted shortest path"),"\nalgorithm uses both node and distance as the state. This causes the search\nspace to increase by the factor of the given upper bound. On the other hand, not\nsetting the upper bound parameter, the search space might contain the whole\ngraph."),(0,i.kt)("p",null,"Because of this, one should always try to narrow down the upper bound limit to\nbe as precise as possible in order to have a more performant query."),(0,i.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,i.kt)("p",null,"For some real-world application of WSP we encourage you to visit our article\n",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/1.3.0/tutorials/exploring-the-european-road-network"},"Exploring the European road network"),"\nwhich was specially crafted to showcase our graph algorithms."))}c.isMDXComponent=!0},41890:function(e,t,n){t.Z=n.p+"assets/images/graph-d4e892234a5b20494c646218176a0f9e.png"}}]);