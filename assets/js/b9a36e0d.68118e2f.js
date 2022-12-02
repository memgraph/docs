"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=h(r),c=n,g=d["".concat(l,".").concat(c)]||d[c]||s[c]||o;return r?a.createElement(g,i(i({ref:t},m),{},{components:r})):a.createElement(g,i({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var h=2;h<o;h++)i[h]=r[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>h});var a=r(87462),n=(r(67294),r(3905));const o={id:"networkx",title:"How to import NetworkX graph into Memgraph",sidebar_label:"Import NetworkX graph into Memgraph"},i=void 0,p={unversionedId:"how-to-guides/networkx",id:"how-to-guides/networkx",title:"How to import NetworkX graph into Memgraph",description:"GQLAlchemy holds transformations that can transform NetworkX graphs into Memgraph graphs. These transformations take the NetworkX graph object and translate it to the appropriate Cypher queries. The Cypher queries are then executed to create a graph inside Memgraph.",source:"@site/gqlalchemy/how-to-guides/networkx.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/networkx",permalink:"/docs/gqlalchemy/how-to-guides/networkx",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/gqlalchemy/how-to-guides/networkx.md",tags:[],version:"current",frontMatter:{id:"networkx",title:"How to import NetworkX graph into Memgraph",sidebar_label:"Import NetworkX graph into Memgraph"},sidebar:"gqlalchemy",previous:{title:"Use on-disk storage",permalink:"/docs/gqlalchemy/how-to-guides/on-disk-storage"},next:{title:"Reference",permalink:"/docs/gqlalchemy/reference"}},l={},h=[{value:"Import NetworkX graph into Memgraph",id:"import-networkx-graph-into-memgraph",level:2},{value:"1. Run Memgraph",id:"1-run-memgraph",level:3},{value:"2. Create and run a Python script",id:"2-create-and-run-a-python-script",level:3},{value:"3. Explore the graph",id:"3-explore-the-graph",level:3},{value:"Under the hood",id:"under-the-hood",level:2},{value:"Available transformations",id:"available-transformations",level:3},{value:"Graph creation",id:"graph-creation",level:3},{value:"Learn more",id:"learn-more",level:2}],m={toc:h};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"GQLAlchemy holds transformations that can transform NetworkX graphs into Memgraph graphs. These transformations take the NetworkX graph object and translate it to the appropriate Cypher queries. The Cypher queries are then executed to create a graph inside Memgraph. "),(0,n.kt)("h2",{id:"import-networkx-graph-into-memgraph"},"Import NetworkX graph into Memgraph"),(0,n.kt)("h3",{id:"1-run-memgraph"},"1. Run Memgraph"),(0,n.kt)("p",null,"First, run Memgraph using the Memgraph Platform Docker image, which includes both the MAGE library and Memgraph Lab, a visual interface.\nTo run the image, open a command-line interpreter and run the following Docker command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform:latest\n")),(0,n.kt)("h3",{id:"2-create-and-run-a-python-script"},"2. Create and run a Python script"),(0,n.kt)("p",null,"Create a new Python script ",(0,n.kt)("inlineCode",{parentName:"p"},"graph.py"),", in the code editor of your choice, with the following code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import networkx as nx\nfrom gqlalchemy import Memgraph\nfrom gqlalchemy.transformations import nx_to_cypher\n\nmemgraph = Memgraph()\nmemgraph.drop_database()\ngraph = nx.Graph()\ngraph.add_nodes_from([(1, {"labels": "First"}), (2, {"name": "Kata"}), 3])\ngraph.add_edges_from([(1, 2, {"type": "EDGE_TYPE", "date": "today"}), (1, 3)])\n\nfor query in nx_to_cypher(graph):\n    memgraph.execute(query)\n')),(0,n.kt)("p",null,"First, we are connecting to a running Memgraph instance. Next, we need to drop the database to be sure that the database is empty. After that, we create a simple NetworkX graph to which we add nodes and edges. In the end, we use ",(0,n.kt)("inlineCode",{parentName:"p"},"nx_to_cypher()")," transformation to transform the NetworkX graph to Cypher queries which will be executed in Memgraph."),(0,n.kt)("p",null,"To run it, open a command-line interpreter and run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"python3 graph.py\n")),(0,n.kt)("h3",{id:"3-explore-the-graph"},"3. Explore the graph"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/connect-to-memgraph#connecting-to-memgraph"},"Connect to Memgraph")," via Memgraph Lab which is running at ",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:3000"),". Open the ",(0,n.kt)("strong",{parentName:"p"},"Query Execution")," section and write the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)-[r]->(m)\nRETURN n, r, m;\n")),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Run Query")," button to see the results."),(0,n.kt)("img",{src:r(96187).Z,alt:"networkx-example-1",className:"imgBorder"}),(0,n.kt)("p",null,"You can notice that the node with the property ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," Kata and property ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," 2 doesn't have a label. This happened because the property key ",(0,n.kt)("inlineCode",{parentName:"p"},"labels")," was not defined. A relationship without a key ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," in the properties' dictionary is of type ",(0,n.kt)("inlineCode",{parentName:"p"},"TO"),"."),(0,n.kt)("h2",{id:"under-the-hood"},"Under the hood"),(0,n.kt)("h3",{id:"available-transformations"},"Available transformations"),(0,n.kt)("p",null,"The available transformations in GQLAlchemy are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L35"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"nx_to_cypher")))," - Generates a Cypher query for creating a graph."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L46"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("inlineCode",{parentName:"strong"},"nx_graph_to_memgraph_parallel")))," - Generates Cypher queries and inserts data into Memgraph in parallel (uses multiprocessing).")),(0,n.kt)("p",null,"These transformations use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L133"},(0,n.kt)("inlineCode",{parentName:"a"},"NetworkXCypherBuilder"))," that is based on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/utilities.py#L41"},(0,n.kt)("inlineCode",{parentName:"a"},"NetworkXCypherConfig")),". ",(0,n.kt)("inlineCode",{parentName:"p"},"NetworkXCypherBuilder")," object can yield queries depending on whether they involve index creation in the configuration or not. Hence, for nodes, there are two different procedures for the query creation: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L168"},(0,n.kt)("inlineCode",{parentName:"a"},"_nx_nodes_to_cypher_with_index"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L163"},(0,n.kt)("inlineCode",{parentName:"a"},"_nx_nodes_to_cypher")),". Since relationships can\u2019t be indexed, there is only one procedure for the query creation - ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L182"},(0,n.kt)("inlineCode",{parentName:"a"},"_nx_edges_to_cypher")),". All of the listed procedures use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L192"},(0,n.kt)("inlineCode",{parentName:"a"},"_create_node"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy/blob/main/gqlalchemy/transformations.py#L202"},(0,n.kt)("inlineCode",{parentName:"a"},"_create_edge"))," for each node or relationship. "),(0,n.kt)("h3",{id:"graph-creation"},"Graph creation"),(0,n.kt)("p",null,"By default, the node does not have a label and the relationship is of type ",(0,n.kt)("inlineCode",{parentName:"p"},"TO"),". The identification number of the NetworkX node translates to the property ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," in the Memgraph node. If additional properties are defined in the dictionary of a node, they will be translated to node properties in Memgraph. Be careful with the keywords ",(0,n.kt)("inlineCode",{parentName:"p"},"labels")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," in the properties' dictionary. Those are reserved for node label and relationship type definition. The following code will create a graph with nodes that have the property ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," of values 1, 2 and 3. Only node with ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," 1 has label ",(0,n.kt)("inlineCode",{parentName:"p"},"First"),". Other nodes are not labeled. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'graph.add_nodes_from([(1, {"labels": "First"}), 2, 3])\n')),(0,n.kt)("p",null,"On the other hand, to create a relationship of type ",(0,n.kt)("inlineCode",{parentName:"p"},"EDGE_TYPE"),"  that connects nodes with the property ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," of values 1 and 2, and another relationship of type ",(0,n.kt)("inlineCode",{parentName:"p"},"TO")," between nodes with the property ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," of values 1 and 3, you should use the following code in Memgraph:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'graph.add_edges_from([(1, 2, {"type": "EDGE_TYPE"}), (1, 3)])\n')),(0,n.kt)("p",null,"The code above translates into the following a graph inside Memgraph: "),(0,n.kt)("img",{src:r(53819).Z,alt:"networkx-example-1",className:"imgSmaller"}),(0,n.kt)("p",null,"These kind of transformations follow the mentioned schema, but if you want to customize it, you can contribute to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/gqlalchemy"},(0,n.kt)("strong",{parentName:"a"},"GQLAlchemy"))," with a new transformation."),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("p",null,"If you want to learn more about using NetworkX with Memgraph with interesting resources and courses, head over to the ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=docs&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=docsgqla%2Bhowto&utm_content=textlink"},(0,n.kt)("strong",{parentName:"a"},"Memgraph for NetworkX developers"))," website. To learn how to utilize the NetworkX library with Memgraph, check out the ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/networkx"},(0,n.kt)("strong",{parentName:"a"},"how-to guide"))," on Memgraph documentation."))}s.isMDXComponent=!0},53819:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/networkx-example-1-ae0a4ea20ce35bc39fb0b1b6dd3f68b5.png"},96187:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/networkx-example-2-579e21a3ed72e0aa58edcc919fdeb9bb.png"}}]);