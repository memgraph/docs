(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7014],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return t?a.createElement(h,l(l({ref:n},m),{},{components:t})):a.createElement(h,l({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},57853:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var a=t(22122),o=t(19756),r=(t(67294),t(3905)),l={id:"built-in-query-modules",title:"How to use built-in query modules",sidebar_label:"Built-in query modules"},i={unversionedId:"database-functionalities/query-modules/built-in-query-modules",id:"version-1.5.0/database-functionalities/query-modules/built-in-query-modules",isDocsHomePage:!1,title:"How to use built-in query modules",description:"Memgraph Community edition comes with a set of Python query modules based on",source:"@site/memgraph_versioned_docs/version-1.5.0/database-functionalities/query-modules/built-in-query-modules.md",sourceDirName:"database-functionalities/query-modules",slug:"/database-functionalities/query-modules/built-in-query-modules",permalink:"/memgraph/database-functionalities/query-modules/built-in-query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/database-functionalities/query-modules/built-in-query-modules.md",version:"1.5.0",sidebar_label:"Built-in query modules",frontMatter:{id:"built-in-query-modules",title:"How to use built-in query modules",sidebar_label:"Built-in query modules"},sidebar:"version-1.5.0/memgraph",previous:{title:"Uniqueness constraint",permalink:"/memgraph/database-functionalities/constraints/uniqueness-constraint"},next:{title:"Load and call custom query modules",permalink:"/memgraph/database-functionalities/query-modules/load-call-query-modules"}},s=[{value:"NetworkX Algorithms Module",id:"networkx-algorithms-module",children:[]},{value:"Graph Analyzer",id:"graph-analyzer",children:[]},{value:"Weakly Connected Components",id:"weakly-connected-components",children:[]},{value:"Low-level optimized graph algorithms (Enterprise)",id:"low-level-optimized-graph-algorithms-enterprise",children:[{value:"Louvain algorithm for community detection",id:"louvain-algorithm-for-community-detection",children:[]},{value:"Weakly Connected Components",id:"weakly-connected-components-1",children:[]}]}],u={toc:s};function m(e){var n=e.components,l=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memgraph Community edition comes with a set of Python query modules based on\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://networkx.github.io/"},"NetworkX")," library of algorithms. The modules\nare already packaged within all Memgraph packages, but ",(0,r.kt)("inlineCode",{parentName:"p"},"NetworkX")," might have to\nbe installed by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pip3 install networkx\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'NOTE: The following "How to Guides" provide an explanation of basic usage. To find\nout more details about each module and documentation of each procedure, please\ntake a look at our ',(0,r.kt)("a",{parentName:"p",href:"../../reference-guide"},"Reference guide"),"\nor the query module source files. The files are located in the directory\n",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),"."))),(0,r.kt)("h2",{id:"networkx-algorithms-module"},"NetworkX Algorithms Module"),(0,r.kt)("p",null,"In addition to standalone community graph algorithms implemented as Python\nmodules, we implemented a module providing NetworkX integration with Memgraph.\nThis module, named ",(0,r.kt)("inlineCode",{parentName:"p"},"nxalgo"),", provides a comprehensive set of thin wrappers\naround most of the algorithms present in the NetworkX package. The wrapper\nfunctions now have the capability to create a NetworkX compatible graph-like\nobject that can stream the native database graph directly, saving\non memory usage significantly."),(0,r.kt)("p",null,"For example, you can run the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/PageRank"},"Page Rank"),"\nalgorithm on the data stored in Memgraph. To illustrate the functionality, the\nfollowing graph will be used:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(95092).Z})),(0,r.kt)("p",null,"To load the graph into Memgraph, the following query should be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (na {name: "Page A"})\nCREATE (nb {name: "Page B"})\nCREATE (nc {name: "Page C"})\nCREATE (nd {name: "Page D"})\nCREATE (na)-[:e]->(nb)\nCREATE (na)-[:e]->(nc)\nCREATE (nc)-[:e]->(na)\nCREATE (nb)-[:e]->(nc)\nCREATE (nd)-[:e]->(nc);\n')),(0,r.kt)("p",null,"By executing ",(0,r.kt)("inlineCode",{parentName:"p"},"nxalg.pagerank()"),", Memgraph will return the rank for each\nnode as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL nxalg.pagerank() YIELD *;\n+--------------------+----------+\n| node               | rank     |\n+--------------------+----------+\n| ({name: "Page C"}) | 0.39415  |\n| ({name: "Page D"}) | 0.0375   |\n| ({name: "Page A"}) | 0.372526 |\n| ({name: "Page B"}) | 0.195824 |\n+--------------------+----------+\n')),(0,r.kt)("p",null,"NetworkX algorithms are located inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"nxalg.py")," file installed with\nyour Memgraph package in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),"."),(0,r.kt)("h2",{id:"graph-analyzer"},"Graph Analyzer"),(0,r.kt)("p",null,"The purpose of this module is to get more insights about the stored graph. To\nillustrate functionality the following graph will be used:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(93052).Z})),(0,r.kt)("p",null,"To create the graph, the following query should be executed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (n1)\nCREATE (n2)\nCREATE (n3)\nCREATE (n4)\nCREATE (n5)\nCREATE (n6)\nCREATE (n7)\nCREATE (n1)-[:e]->(n5)\nCREATE (n3)-[:e]->(n5)\nCREATE (n5)-[:e]->(n2)\nCREATE (n4)-[:e]->(n2)\nCREATE (n2)-[:e]->(n6)\nCREATE (n2)-[:e]->(n7);\n")),(0,r.kt)("p",null,"To analyze the whole graph, let's run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL graph_analyzer.analyze() YIELD *;\n")),(0,r.kt)("p",null,"Results should be similar to the ones below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'+-------------------------------------------+-------------------------+\n| name                                      | value                   |\n+-------------------------------------------+-------------------------+\n| "Number of nodes"                         | "7"                     |\n| "Number of edges"                         | "6"                     |\n| "Number of bridges"                       | "6"                     |\n| "Number of articulation points"           | "2"                     |\n| "Average degree"                          | "0.8571428571428571"    |\n| "Sorted nodes degree"                     | "[(16, 4),(19, 3), ..." |\n| "Self loops"                              | "0"                     |\n| "Is bipartite"                            | "True"                  |\n| "Is planar"                               | "True"                  |\n| "Is biconnected"                          | "False"                 |\n| "Is weakly connected"                     | "True"                  |\n| "Number of weakly connected components"   | "1"                     |\n| "Is strongly connected"                   | "False"                 |\n| "Number of strongly connected components" | "7"                     |\n| "Is DAG"                                  | "True"                  |\n| "Is eulerian"                             | "False"                 |\n| "Is forest"                               | "True"                  |\n| "Is tree"                                 | "True"                  |\n+-------------------------------------------+-------------------------+\n')),(0,r.kt)("p",null,"To analyze a sub-graph, relevant nodes and edges have to be collected by\ncombining ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," clauses. Once everything is collected,\n",(0,r.kt)("inlineCode",{parentName:"p"},"analyze_subgraph")," procedure can be called as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[e]->(m) WITH collect(n) as nodes, collect(e) as edges\nCALL graph_analyzer.analyze_subgraph(nodes, edges) YIELD name, value\nRETURN name, value;\n")),(0,r.kt)("h2",{id:"weakly-connected-components"},"Weakly Connected Components"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wcc.py")," query module can run\n",(0,r.kt)("a",{parentName:"p",href:"https://mathworld.wolfram.com/WeaklyConnectedComponent.html"},"WCC")," analysis on\na sub-graph of the whole graph. To illustrate the number of weakly connected\ncomponents and nodes within each component, the following graph will be used:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(11564).Z})),(0,r.kt)("p",null,"To create the graph, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (n1 {id: 1})\nCREATE (n2 {id: 2})\nCREATE (n3 {id: 3})\nCREATE (n4 {id: 4})\nCREATE (n1)-[:e]->(n2)\nCREATE (n3)-[:e]->(n4);\n")),(0,r.kt)("p",null,"The following query will do the calculation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[e]->(m) WITH collect(n) as nodes, collect(e) as edges\nCALL wcc.get_components(nodes, edges) YIELD components, n_components\nRETURN components, n_components;\n")),(0,r.kt)("p",null,"The expected result follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+--------------------------------------------------+--------------+\n| components                                       | n_components |\n+--------------------------------------------------+--------------+\n| [[({id: 1}), ({id: 2})], [({id: 3}), ({id: 4})]] | 2            |\n+--------------------------------------------------+--------------+\n")),(0,r.kt)("p",null,"Please keep in mind that after the ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," clause there can be a ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause\nwith an arbitrary expression to further filter matched set of results."),(0,r.kt)("h2",{id:"low-level-optimized-graph-algorithms-enterprise"},"Low-level optimized graph algorithms (Enterprise)"),(0,r.kt)("p",null,"If you have purchased Memgraph's Enterprise edition, you have access to\ncertain graph algorithms in the form of query modules. These modules were\nimplemented by our own team using C++ and should offer some additional\nperformance benefits. Currently, we have implemented the following algorithms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Louvain algorithm for community detection."),(0,r.kt)("li",{parentName:"ul"},"Weakly connected components.")),(0,r.kt)("h3",{id:"louvain-algorithm-for-community-detection"},"Louvain algorithm for community detection"),(0,r.kt)("p",null,"In essence, this algorithm is a heuristic method which can be used to extract\nthe community structure of fairly sizeable networks. In the simplest of terms,\nthe algorithm attempts to assign graph nodes to communities in a way that\nmaximizes the so-called ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Modularity_(networks)"},"modularity\nmeasure"),". For more details,\nwe advise you to study the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/0803.0476.pdf"},"original paper"),"."),(0,r.kt)("p",null,"This query module should be provided as a shared object (",(0,r.kt)("inlineCode",{parentName:"p"},".so"),") file called\n",(0,r.kt)("inlineCode",{parentName:"p"},"louvain.so"),". Assuming the standard installation on Debian, that file should be\nlocated in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),". Again, we can simply run Memgraph with\nthe following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"systemctl start memgraph\n")),(0,r.kt)("p",null,"When using Docker, the equivalent would be the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  memgraph\n")),(0,r.kt)("p",null,"Suppose that Memgraph is currently storing a graph as depicted in the figure\nbelow where numbers in the vertices are stored as properties in the graph."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(97265).Z})),(0,r.kt)("p",null,"To create the above graph, execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (n1 {number: 1})\nCREATE (n2 {number: 2})\nCREATE (n3 {number: 3})\nCREATE (n4 {number: 4})\nCREATE (n5 {number: 5})\nCREATE (n6 {number: 6})\nCREATE (n1)-[:e]->(n2)\nCREATE (n1)-[:e]->(n3)\nCREATE (n2)-[:e]->(n3)\nCREATE (n3)-[:e]->(n4)\nCREATE (n4)-[:e]->(n5)\nCREATE (n4)-[:e]->(n6)\nCREATE (n5)-[:e]->(n6);\n")),(0,r.kt)("p",null,"Let's run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL louvain.communities() YIELD community, id;\n")),(0,r.kt)("p",null,"We should get a result similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------+-----------+\n| community | id        |\n+-----------+-----------+\n| 1         | 5         |\n| 1         | 4         |\n| 1         | 3         |\n| 0         | 2         |\n| 0         | 0         |\n| 0         | 1         |\n+-----------+-----------+\n")),(0,r.kt)("p",null,"The procedure returns mappings from internal node IDs to communities. In order\nto return the nodes instead of the IDs you should execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL louvain.communities() YIELD community, id MATCH (n) WHERE ID(n) = id RETURN community, n;\n")),(0,r.kt)("p",null,"We should observe the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+---------------+---------------+\n| community     | n             |\n+---------------+---------------+\n| 1             | ({number: 6}) |\n| 1             | ({number: 5}) |\n| 1             | ({number: 4}) |\n| 0             | ({number: 3}) |\n| 0             | ({number: 1}) |\n| 0             | ({number: 2}) |\n+---------------+---------------+\n")),(0,r.kt)("p",null,"As you can see, vertices numbered 1, 2 and 3 belong to one community, while\nvertices numbered 4, 5 and 6 belong to another community."),(0,r.kt)("p",null,"If you wish to know the exact graph modularity after running Louvain, you can\nrun the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL louvain.modularity() YIELD modularity;\n")),(0,r.kt)("p",null,"In our example, the result should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+------------+\n| modularity |\n+------------+\n| 0.357143   |\n+------------+\n")),(0,r.kt)("p",null,'If you wish, you can model the "strength of connection" between two nodes by\nspecifying the weight of that edge. To do that, you need to add a property on\nthat edge named ',(0,r.kt)("inlineCode",{parentName:"p"},"weight")," which stores a real value. Naturally, larger weights\ncorrespond to stronger connections. If you don't explicitly specify the weight\nof a certain edge, its weight will internally default to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),". It's also\nimportant to note that weights are internally represented as 64-bit floating\npoint numbers."),(0,r.kt)("p",null,"Finally, we should also state that the runtime of this algorithm (assuming we\nlet it run until convergence) is not known. It merely appears to run in\nO(nlog(n))."),(0,r.kt)("h3",{id:"weakly-connected-components-1"},"Weakly Connected Components"),(0,r.kt)("p",null,"One of the most important features you might be interested in when exploring a\ncertain graph is its connectivity. There are many ways in which we might express\nto which extent we are interested in the connectivity of a graph, but one of the\nsimplest ones is by counting the number of its weakly connected components and\nby determining which vertex corresponds to which connected component."),(0,r.kt)("p",null,"The concept of weakly connected components is natural and simple, two nodes\nbelong to the same component if a path between them exists in a given graph.\nOtherwise, we say those nodes are disconnected."),(0,r.kt)("p",null,"This query module should be provided as a shared object (",(0,r.kt)("inlineCode",{parentName:"p"},".so"),") file called\n",(0,r.kt)("inlineCode",{parentName:"p"},"connectivity.so"),". Assuming the standard installation on Debian, that file\nshould be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),". Again, we can simply run\nMemgraph with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"systemctl start memgraph\n")),(0,r.kt)("p",null,"When using Docker, the equivalent would be the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  memgraph\n")),(0,r.kt)("p",null,"Suppose that Memgraph is currently storing a graph as depicted in the figure\nbelow where numbers in the vertices are stored as properties in the graph.\nThis graph obviously has 4 weakly connected components."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(44860).Z})),(0,r.kt)("p",null,"To create the above graph, execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (n1 {number: 1})\nCREATE (n2 {number: 2})\nCREATE (n3 {number: 3})\nCREATE (n4 {number: 4})\nCREATE (n5 {number: 5})\nCREATE (n6 {number: 6})\nCREATE (n7 {number: 7})\nCREATE (n8 {number: 8})\nCREATE (n9 {number: 9})\nCREATE (n10 {number: 10})\nCREATE (n11 {number: 11})\nCREATE (n12 {number: 12})\nCREATE (n13 {number: 13})\nCREATE (n14 {number: 14})\nCREATE (n15 {number: 15})\nCREATE (n1)-[:e]->(n2)\nCREATE (n1)-[:e]->(n3)\nCREATE (n2)-[:e]->(n3)\nCREATE (n5)-[:e]->(n6)\nCREATE (n6)-[:e]->(n7)\nCREATE (n6)-[:e]->(n8)\nCREATE (n7)-[:e]->(n9)\nCREATE (n7)-[:e]->(n10)\nCREATE (n8)-[:e]->(n11)\nCREATE (n12)-[:e]->(n13)\nCREATE (n12)-[:e]->(n14)\nCREATE (n12)-[:e]->(n15)\nCREATE (n13)-[:e]->(n14)\nCREATE (n13)-[:e]->(n15)\nCREATE (n14)-[:e]->(n15);\n")),(0,r.kt)("p",null,"Let's run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL connectivity.weak() YIELD component, id;\n")),(0,r.kt)("p",null,"We should get a result similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+-----------+-----------+\n| component | id        |\n+-----------+-----------+\n| 3         | 14        |\n| 3         | 13        |\n| 3         | 12        |\n| 3         | 11        |\n| 2         | 10        |\n| 2         | 9         |\n| 2         | 8         |\n| 2         | 7         |\n| 2         | 6         |\n| 0         | 1         |\n| 0         | 0         |\n| 0         | 2         |\n| 1         | 3         |\n| 2         | 4         |\n| 2         | 5         |\n+-----------+-----------+\n")),(0,r.kt)("p",null,"The procedure returns mappings from internal node IDs to components. In order\nto return the nodes instead of the IDs you should execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL connectivity.weak() YIELD component, id MATCH (n) WHERE ID(n) = id RETURN component, n;\n")),(0,r.kt)("p",null,"We should observe the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"+----------------+----------------+\n| component      | n              |\n+----------------+----------------+\n| 3              | ({number: 15}) |\n| 3              | ({number: 14}) |\n| 3              | ({number: 13}) |\n| 3              | ({number: 12}) |\n| 2              | ({number: 11}) |\n| 2              | ({number: 10}) |\n| 2              | ({number: 9})  |\n| 2              | ({number: 8})  |\n| 2              | ({number: 7})  |\n| 0              | ({number: 2})  |\n| 0              | ({number: 1})  |\n| 0              | ({number: 3})  |\n| 1              | ({number: 4})  |\n| 2              | ({number: 5})  |\n| 2              | ({number: 6})  |\n+----------------+----------------+\n")),(0,r.kt)("p",null,"As expected, nodes numbered 1, 2, and 3 are all in one connected component,\nnode numbered 4 is in its own component, nodes numbered 5, 6, 7, 8, 9, 10, and\n11 are in another component and, finally, nodes numbered 12, 13, 14 and 15 are\nin the last component."))}m.isMDXComponent=!0},93052:function(e,n,t){"use strict";n.Z=t.p+"assets/images/graph_analyzer_graph-0b1b67b760ca994955ec1db5799b3131.png"},97265:function(e,n,t){"use strict";n.Z=t.p+"assets/images/louvain_graph-9c3c64a28c25d07f2c94ec3dfc9c972a.png"},95092:function(e,n,t){"use strict";n.Z=t.p+"assets/images/pagerank_graph-5d1a31623c22d486dc7ffa7e3ef36fc7.png"},11564:function(e,n){"use strict";n.Z="data:image/png;base64,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"},44860:function(e,n,t){"use strict";n.Z=t.p+"assets/images/wcc_graph-f51685c00769e001fc9b9fb8868d770f.png"}}]);