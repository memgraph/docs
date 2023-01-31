"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,d=u["".concat(l,".").concat(c)]||u[c]||h[c]||n;return r?o.createElement(d,i(i({ref:t},s),{},{components:r})):o.createElement(d,i({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var p=2;p<n;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},87945:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>m,toc:()=>p});var o=r(87462),a=(r(67294),r(3905));const n={id:"networkx",title:"How to use the NetworkX library with Memgraph",sidebar_label:"Utilize the NetworkX library"},i=void 0,m={unversionedId:"how-to-guides/networkx",id:"version-2.5.1/how-to-guides/networkx",title:"How to use the NetworkX library with Memgraph",description:"NetworkX is a Python package for the creation, manipulation, and study of the structure,",source:"@site/memgraph_versioned_docs/version-2.5.1/how-to-guides/networkx.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/networkx",permalink:"/docs/memgraph/2.5.1/how-to-guides/networkx",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.1/how-to-guides/networkx.md",tags:[],version:"2.5.1",frontMatter:{id:"networkx",title:"How to use the NetworkX library with Memgraph",sidebar_label:"Utilize the NetworkX library"},sidebar:"memgraph",previous:{title:"Use SSL encryption",permalink:"/docs/memgraph/2.5.1/how-to-guides/encryption"},next:{title:"Work with Docker",permalink:"/docs/memgraph/2.5.1/how-to-guides/work-with-docker"}},l={},p=[{value:"How to run NetworkX algorithms in Memgraph Lab",id:"how-to-run-networkx-algorithms-in-memgraph-lab",level:2},{value:"1. Connect to Memgraph",id:"1-connect-to-memgraph",level:3},{value:"2. Load the dataset",id:"2-load-the-dataset",level:3},{value:"3. Run NetworkX algorithm",id:"3-run-networkx-algorithm",level:3},{value:"How to implement custom NetworkX module in Memgraph Lab",id:"how-to-implement-custom-networkx-module-in-memgraph-lab",level:2},{value:"1. Connect to Memgraph",id:"1-connect-to-memgraph-1",level:3},{value:"2. Load the dataset",id:"2-load-the-dataset-1",level:3},{value:"3. Implement a custom query module",id:"3-implement-a-custom-query-module",level:3},{value:"4. Run the custom query module",id:"4-run-the-custom-query-module",level:3},{value:"Where to next?",id:"where-to-next",level:2}],s={toc:p};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"NetworkX is a Python package for the creation, manipulation, and study of the structure,\ndynamics, and functions of complex networks. Memgraph has ",(0,a.kt)("a",{parentName:"p",href:"/docs/mage/query-modules/python/nxalg"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"nxalg")))," query module, which is a wrapper around NetworkX graph algorithms. It also provides ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/mage/query-modules/python/graph-analyzer"},"Graph Analyzer"))," query module, which utilizes the NetworkX library. Besides that, you can create a custom query module that uses the NetworkX library. Through this how-to guide, you can find out:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-run-networkx-algorithms-in-memgraph-lab"},(0,a.kt)("strong",{parentName:"a"},"How to run NetworkX algorithms in Memgraph Lab"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-implement-custom-networkx-module"},(0,a.kt)("strong",{parentName:"a"},"How to implement custom NetworkX module")))),(0,a.kt)("h2",{id:"how-to-run-networkx-algorithms-in-memgraph-lab"},"How to run NetworkX algorithms in Memgraph Lab"),(0,a.kt)("p",null,"NetworkX algorithms are integrated into Memgraph as query modules inside Memgraph\u2019s open-source graph extension library ",(0,a.kt)("a",{parentName:"p",href:"/docs/mage"},"MAGE"),". Head over to the guide on ",(0,a.kt)("a",{parentName:"p",href:"/docs/mage/usage/calling-procedures"},"how to call MAGE procedures")," to find out how to call all Memgraph procedures, including those that utilize the NetworkX library."),(0,a.kt)("p",null,"This how-to guide will show one simple example of calling a NetworkX procedure in Memgraph's visual interface Memgraph Lab. "),(0,a.kt)("h3",{id:"1-connect-to-memgraph"},"1. Connect to Memgraph"),(0,a.kt)("p",null,"First, run Memgraph using the Memgraph Platform Docker image, which includes both the MAGE library and Memgraph Lab.\nTo run the image, open a command-line interpreter and run the following Docker command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform:latest\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/connect-to-memgraph#connecting-to-memgraph"},"Connect to Memgraph")," via Memgraph Lab which is running at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000"),". "),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/installation"},"installation guide")," for other installation options. If you wish to avoid the installation, you can also use ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-cloud/"},"Memgraph Cloud"),"."),(0,a.kt)("h3",{id:"2-load-the-dataset"},"2. Load the dataset"),(0,a.kt)("p",null,"Head over to the ",(0,a.kt)("strong",{parentName:"p"},"Datasets")," section to load a dataset and load the ",(0,a.kt)("strong",{parentName:"p"},"Europe backpacking dataset"),". "),(0,a.kt)("img",{src:r(80541).Z,className:"imgBorder"}),(0,a.kt)("h3",{id:"3-run-networkx-algorithm"},"3. Run NetworkX algorithm"),(0,a.kt)("p",null,"Once the dataset is loaded, go to the ",(0,a.kt)("strong",{parentName:"p"},"Query Modules")," section and search for ",(0,a.kt)("inlineCode",{parentName:"p"},"nxalg")," module. Click on the arrow next to the module name to ",(0,a.kt)("strong",{parentName:"p"},"view module details"),". "),(0,a.kt)("img",{src:r(59731).Z,className:"imgBorder"}),(0,a.kt)("p",null,"The goal is to run the ",(0,a.kt)("a",{parentName:"p",href:"/docs/mage/query-modules/python/nxalg#is_bipartite"},(0,a.kt)("inlineCode",{parentName:"a"},"is_bipartite()"))," procedure to check whether the graph is bipartite. "),(0,a.kt)("img",{src:r(93290).Z,className:"imgBorder"}),(0,a.kt)("p",null,"Copy the query, go to the ",(0,a.kt)("strong",{parentName:"p"},"Query Execution")," tab and paste the query into the ",(0,a.kt)("strong",{parentName:"p"},"Cypher Editor"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.is_bipartite() YIELD is_bipartite;\n")),(0,a.kt)("p",null,"By clicking on the ",(0,a.kt)("strong",{parentName:"p"},"Run Query")," button, you can see that the Europe backpacking graph is not bipartite."),(0,a.kt)("img",{src:r(82653).Z,className:"imgBorder"}),(0,a.kt)("p",null,"In the same way, you can run other procedures from the ",(0,a.kt)("inlineCode",{parentName:"p"},"nxalg")," module and the procedures from the ",(0,a.kt)("inlineCode",{parentName:"p"},"graph_analyzer")," module, which can be found in the ",(0,a.kt)("strong",{parentName:"p"},"Query Modules")," section."),(0,a.kt)("h2",{id:"how-to-implement-custom-networkx-module-in-memgraph-lab"},"How to implement custom NetworkX module in Memgraph Lab"),(0,a.kt)("p",null,"Besides using already implemented modules, you can create your own module which utilizes the NetworkX library.\nTo learn how to implement a custom query module, head over to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example#python-api"},"example of query module in Python"),"."),(0,a.kt)("p",null,"Since Memgraph is integrated with NetworkX, you can import NetworkX library inside Python code. This guide will show you how to create a new query module that utilizes the NetworkX library within Memgraph's visual interface Memgraph Lab."),(0,a.kt)("h3",{id:"1-connect-to-memgraph-1"},"1. Connect to Memgraph"),(0,a.kt)("p",null,"First, run Memgraph using the Memgraph Platform Docker image, which includes both the MAGE library and Memgraph Lab.\nTo run the image, open a command-line interpreter and run the following Docker command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform:latest\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-lab/connect-to-memgraph#connecting-to-memgraph"},"Connect to Memgraph")," via Memgraph Lab which is running at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000"),". "),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/installation"},"installation guide")," for other installation options. If you wish to avoid the installation, you can also use ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph-cloud/"},"Memgraph Cloud"),"."),(0,a.kt)("h3",{id:"2-load-the-dataset-1"},"2. Load the dataset"),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Datasets")," section, find and load the Karate club friendship network dataset. "),(0,a.kt)("img",{src:r(30634).Z,className:"imgBorder"}),(0,a.kt)("h3",{id:"3-implement-a-custom-query-module"},"3. Implement a custom query module"),(0,a.kt)("p",null,"Once the dataset is loaded, go to the ",(0,a.kt)("strong",{parentName:"p"},"Query modules")," section. The goal is to create a community detection algorithm that can partition a network into multiple communities with the help of the NetworkX library. Click on the ",(0,a.kt)("strong",{parentName:"p"},"New Module")," and type in the module name, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"communities"),". "),(0,a.kt)("img",{src:r(21242).Z,className:"imgBorder"}),(0,a.kt)("p",null,"There is a sample Python code on the next screen, inside the code editor. Select it, delete it and paste the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\nimport networkx as nx\nfrom networkx.algorithms import community\nfrom mgp_networkx import MemgraphDiGraph\n\n\n@mgp.read_proc\ndef detect(\n    ctx: mgp.ProcCtx\n    ) -> mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]]):\n\n    networkxGraph = nx.DiGraph(MemgraphDiGraph(ctx=ctx))\n    communities_generator = community.girvan_newman(networkxGraph)\n\n    return mgp.Record(communities=[\n        list(s) for s in next(communities_generator)])\n")),(0,a.kt)("p",null,"In the above code we are creating a read procedure which creates a NetworkX DiGraph from the MemgraphDiGraph object which takes the existing graph from the database. After that, we run the Girvan-Newman community algorithm and return its results."),(0,a.kt)("p",null,"Here is what the code looks like in the code editor:"),(0,a.kt)("img",{src:r(74467).Z,className:"imgBorder"}),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Save & close"),", and head over to the ",(0,a.kt)("strong",{parentName:"p"},"Query Execution")," tab. "),(0,a.kt)("h3",{id:"4-run-the-custom-query-module"},"4. Run the custom query module"),(0,a.kt)("p",null,"Copy and paste the following query to the ",(0,a.kt)("strong",{parentName:"p"},"Cypher Editor"),": "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL communities.detect()\nYIELD communities\nUNWIND communities AS community\nRETURN community;\n")),(0,a.kt)("p",null,"After you click on ",(0,a.kt)("strong",{parentName:"p"},"Run Query"),", you can see the result, which consists of two lists. Each list represents one community. "),(0,a.kt)("img",{src:r(79616).Z,className:"imgBorder"}),(0,a.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,a.kt)("p",null,"If you want to learn more about how to use Memgraph with NetworkX, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=docs%2Bhowtoutilize&utm_content=resources"},(0,a.kt)("strong",{parentName:"a"},"Memgraph for NetworkX developers resources")),". If you are using GQLAlchemy to connect to Memgraph, learn how to import NetworkX graph into Memgraph in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/gqlalchemy/how-to-guides/networkx"},(0,a.kt)("strong",{parentName:"a"},"how-to guide"))," on GQLAlchemy documentation."))}h.isMDXComponent=!0},80541:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/nxalg-how-to-1-e0b2a86bf454dbf05ad8800bd9239747.png"},59731:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/nxalg-how-to-2-c3bd3ab1d020330a8340b87544d6f405.png"},93290:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/nxalg-how-to-3-6015f7bed6bdcd62b21bf7b2013df661.png"},82653:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/nxalg-how-to-4-b53a5559859f0ae5619aee07758a40d0.png"},30634:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/nxalg-how-to-5-a58177705c6b98ed725ddf750338a1b4.png"},21242:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/nxalg-how-to-6-73fcc2c8b4f008f161346db452527306.png"},74467:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/nxalg-how-to-7-1e5f372b439696da019da6a4a7b21a77.png"},79616:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/nxalg-how-to-8-298ceb753cc2f8b6f36c4587555ea6f8.png"}}]);