"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12524],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51104:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"linux",title:"Installing Memgraph Lab on Linux",sidebar_label:"Linux"},p=void 0,s={unversionedId:"installation/linux",id:"installation/linux",isDocsHomePage:!1,title:"Installing Memgraph Lab on Linux",description:"Step 1 - Download and install Memgraph",source:"@site/lab/installation/linux.md",sourceDirName:"installation",slug:"/installation/linux",permalink:"/docs/memgraph-lab/installation/linux",editUrl:"https://github.com/memgraph/docs/tree/master/lab/installation/linux.md",tags:[],version:"current",frontMatter:{id:"linux",title:"Installing Memgraph Lab on Linux",sidebar_label:"Linux"},sidebar:"lab",previous:{title:"Getting started",permalink:"/docs/memgraph-lab/"},next:{title:"macOS",permalink:"/docs/memgraph-lab/installation/macos"}},u=[{value:"Step 1 - Download and install Memgraph",id:"step-1---download-and-install-memgraph",children:[],level:2},{value:"Step 2 - Installing and setting up Memgraph Lab",id:"step-2---installing-and-setting-up-memgraph-lab",children:[],level:2},{value:"Step 3 - Create a simple graph",id:"step-3---create-a-simple-graph",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2},{value:"Getting help",id:"getting-help",children:[],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"step-1---download-and-install-memgraph"},"Step 1 - Download and install Memgraph"),(0,o.kt)("p",null,"Instructions on how to install Memgraph can be found\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/installation"},"here"),". After Memgraph is installed\nand running on your machine, you can continue with the next step."),(0,o.kt)("h2",{id:"step-2---installing-and-setting-up-memgraph-lab"},"Step 2 - Installing and setting up Memgraph Lab"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Download Memgraph Lab by visiting the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download/#lab"},"Download\nHub"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," You can install Memgraph Lab by double clicking the downloaded installer\nor by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"sudo dpkg -i MemgraphLab-x.x.x.deb\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," After you start Memgraph Lab, you should be presented with a login\nscreen. The username and password fields are empty by default. The default\nconnection string is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:7687"),". If you're using a different port,\nyou will have to change the connection string to point to that port, i.e.\n",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:<your port number>"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Click on connect, and you should be presented with the following\ndashboard:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"lab-dashboard",src:n(41100).Z})),(0,o.kt)("p",null,"Congratulations! You have successfully installed Memgraph Lab and connected it\nto Memgraph. You are now ready to start building your graph and querying it."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You might receive the following error message when trying to connect."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{alt:"failed_connection",src:n(64533).Z})),(0,o.kt)("p",{parentName:"div"},"In this case, make sure that Memgraph is properly up and running and that you\nhave entered the correct port number."))),(0,o.kt)("h2",{id:"step-3---create-a-simple-graph"},"Step 3 - Create a simple graph"),(0,o.kt)("p",null,"Let's create a simple graph and execute some queries. This will make sure\neverything is running correctly."),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Query")," tab, enter the following Cypher query and click ",(0,o.kt)("strong",{parentName:"p"},"Run\nquery"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,o.kt)("p",null,"You just created 2 nodes in the database, one labeled ",(0,o.kt)("inlineCode",{parentName:"p"},"User"),' with the name\n"Alice" and the other labeled ',(0,o.kt)("inlineCode",{parentName:"p"},"Software"),' with the name "Memgraph". Between them,\nyou also created a relationship indicating that "Alice" likes "Memgraph".'),(0,o.kt)("p",null,"Now that the data is stored inside Memgraph, you can run a query to retrieve and\nvisualize the graph. Execute the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,o.kt)("p",null,"You should get the following result:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"graph_result",src:n(90970).Z})),(0,o.kt)("p",null,"Now that you know your development environment is working, you are ready to\ncontinue exploring Memgraph and building much more interesting projects\nleveraging connected data."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"To learn more about the ",(0,o.kt)("strong",{parentName:"p"},"Cypher")," language, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/cypher-manual"},"Cypher\nmanual"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive guides. For\nreal-world examples of how to use Memgraph, we strongly suggest going through\none of the available ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/tutorials"},"Tutorials")),"."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/help-center"},"Getting help"))," page in case you run into any kind of\nproblem or you have additional questions."))}d.isMDXComponent=!0},64533:function(e,t,n){t.Z=n.p+"assets/images/failed_connection-e6583e160fe5a24d94407536d2d485a4.png"},41100:function(e,t,n){t.Z=n.p+"assets/images/lab-dashboard-fdcf4816cd1b5f83087cdc7d23544a7c.png"},90970:function(e,t,n){t.Z=n.p+"assets/images/lab-graph-dd65176650681b154285d432571351ed.png"}}]);