"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,h=g["".concat(p,".").concat(d)]||g[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(28135);const l={id:"linux",title:"Installing Memgraph Lab on Linux",sidebar_label:"Linux"},i=void 0,p={unversionedId:"installation/linux",id:"installation/linux",title:"Installing Memgraph Lab on Linux",description:"We recommend you install Memgraph Platform and get",source:"@site/lab/installation/linux.md",sourceDirName:"installation",slug:"/installation/linux",permalink:"/docs/memgraph-lab/installation/linux",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/lab/installation/linux.md",tags:[],version:"current",frontMatter:{id:"linux",title:"Installing Memgraph Lab on Linux",sidebar_label:"Linux"},sidebar:"lab",previous:{title:"macOS",permalink:"/docs/memgraph-lab/installation/macos"},next:{title:"Connect to Memgraph",permalink:"/docs/memgraph-lab/connect-to-memgraph"}},s={},m=[{value:"Step 1 - Download and install Memgraph",id:"step-1---download-and-install-memgraph",level:2},{value:"Step 2 - Installing and setting up Memgraph Lab",id:"step-2---installing-and-setting-up-memgraph-lab",level:2},{value:"Step 3 - Create a simple graph",id:"step-3---create-a-simple-graph",level:2},{value:"Where to next?",id:"where-to-next",level:2},{value:"Getting help",id:"getting-help",level:2}],u={toc:m};function g(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We recommend you ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/installation"},"install ",(0,r.kt)("strong",{parentName:"a"},"Memgraph Platform"))," and get\nthe complete streaming graph application platform that includes ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"MemgraphDB"),",\ncommand-line tool ",(0,r.kt)("strong",{parentName:"p"},"mgconsole"),", visual user interface ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Lab")," running\nwithin the browser and ",(0,r.kt)("strong",{parentName:"p"},"MAGE")," - graph algorithms and modules library."),(0,r.kt)("p",null,"If you want to install Memgraph Lab as a desktop application, follow the\ninstructions below."),(0,r.kt)("h2",{id:"step-1---download-and-install-memgraph"},"Step 1 - Download and install Memgraph"),(0,r.kt)("p",null,"Memgraph Lab needs a running MemgraphDB instance"),(0,r.kt)("p",null,"If you installed Memgraph Platform you should already have one. ",(0,r.kt)("br",null),"If not,\ninstall ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/installation"},"MemgraphDB")," and once the database instance is\nrunning  you can continue with the next step."),(0,r.kt)(o.ZP,{mdxType:"CompatibilityWarning"}),(0,r.kt)("h2",{id:"step-2---installing-and-setting-up-memgraph-lab"},"Step 2 - Installing and setting up Memgraph Lab"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download Memgraph Lab by visiting the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download/#memgraph-lab"},"Download\nHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," You can install Memgraph Lab by double clicking the downloaded installer\nor by executing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"sudo dpkg -i MemgraphLab-x.x.x.deb\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," After you start Memgraph Lab, you should be presented with a login\nscreen. The username and password fields are empty by default. The default\nconnection string is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:7687"),". If you're using a different port,\nyou will have to change the connection string to point to that port, i.e.\n",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:<your port number>"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4.")," Click on connect, and you should be presented with the following\ndashboard:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"lab-dashboard",src:n(96100).Z,width:"1184",height:"764"})),(0,r.kt)("p",null,"Congratulations! You have successfully installed Memgraph Lab and connected it\nto Memgraph. You are now ready to start building your graph and querying it."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You might receive the following error message when trying to connect."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"failed_connection",src:n(60301).Z,width:"763",height:"160"})),(0,r.kt)("p",{parentName:"admonition"},"In this case, make sure that Memgraph is properly up and running and that you\nhave entered the correct port number.")),(0,r.kt)("h2",{id:"step-3---create-a-simple-graph"},"Step 3 - Create a simple graph"),(0,r.kt)("p",null,"Let's create a simple graph and execute some queries. This will make sure\neverything is running correctly."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"Query execution"),", enter the following query in the ",(0,r.kt)("strong",{parentName:"p"},"Cypher Editor")," tab and click ",(0,r.kt)("strong",{parentName:"p"},"Run Query"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (u:User {name: "Alice"})-[:Likes]->(m:Software {name: "Memgraph"});\n')),(0,r.kt)("p",null,"You just created 2 nodes in the database, one labeled ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),' with the name\n"Alice" and the other labeled ',(0,r.kt)("inlineCode",{parentName:"p"},"Software"),' with the name "Memgraph". Between them,\nyou also created a relationship indicating that "Alice" likes "Memgraph".'),(0,r.kt)("p",null,"Now that the data is stored inside Memgraph, you can run a query to retrieve and\nvisualize the graph. Execute the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User)-[r]->(x) RETURN u, r, x;\n")),(0,r.kt)("p",null,"You should get the following result:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"graph_result",src:n(20293).Z,width:"1221",height:"811"})),(0,r.kt)("p",null,"Now that you know your development environment is working, you are ready to\ncontinue exploring Memgraph and building much more interesting projects\nleveraging connected data."),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"To learn more about the ",(0,r.kt)("strong",{parentName:"p"},"Cypher")," language, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/cypher-manual"},"Cypher\nmanual"))," or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive guides. For\nreal-world examples of how to use Memgraph, we strongly suggest going through\none of the available ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/memgraph/tutorials"},"Tutorials")),"."),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/help-center"},"Help Center"))," page in case you run into any kind of\nproblem or you have additional questions."))}g.isMDXComponent=!0},28135:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"In order to use Memgraph Lab 2.0 features, you need to run ",(0,r.kt)("strong",{parentName:"p"},"MemgraphDB 2.2.0"),"\nor newer. If you are using Memgraph with Docker, expose the port ",(0,r.kt)("inlineCode",{parentName:"p"},"7444")," in order\nfor Memgraph Lab to access log files. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 memgraph/memgraph-platform\n"))))}l.isMDXComponent=!0},60301:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/failed_connection-e6583e160fe5a24d94407536d2d485a4.png"},96100:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab-dashboard-c885aa57bdf3e5463b9addf56d4f1a8f.png"},20293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lab-graph-5e3ba7b7fd279519532bf0c82dfc2fa4.png"}}]);