"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,u=g["".concat(p,".").concat(d)]||g[d]||c[d]||o;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},15814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"docker-db-installation",title:"Install MemgraphDB on Windows with Docker",sidebar_label:"Docker",slug:"/install-memgraph-db-on-windows-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},i=void 0,l={unversionedId:"installation/windows/docker-db-installation",id:"version-2.5.1/installation/windows/docker-db-installation",title:"Install MemgraphDB on Windows with Docker",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.5.1/installation/windows/docker-db-installation.md",sourceDirName:"installation/windows",slug:"/install-memgraph-db-on-windows-docker",permalink:"/docs/memgraph/2.5.1/install-memgraph-db-on-windows-docker",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.1/installation/windows/docker-db-installation.md",tags:[],version:"2.5.1",frontMatter:{id:"docker-db-installation",title:"Install MemgraphDB on Windows with Docker",sidebar_label:"Docker",slug:"/install-memgraph-db-on-windows-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/2.5.1/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/2.5.1/connect-to-memgraph"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install MemgraphDB",id:"base-installation-guide",level:2},{value:"Start MemgraphDB",id:"starting-memgraph",level:2},{value:"Stop MemgraphDB",id:"stopping-memgraph",level:2},{value:"Configuration file and logs",id:"named-volumes",level:2},{value:"Where to next?",id:"where-to-next",level:2},{value:"Getting help",id:"getting-help",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\n",(0,r.kt)("strong",{parentName:"p"},"MemgraphDB")," on Windows with Docker."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Newer versions of Memgraph are currently ",(0,r.kt)("strong",{parentName:"p"},"not backward compatible")," with older\nversions. That is why you won't be able to load storage snapshots between\ndifferent versions.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you proceed with the installation guide, make sure that you have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docker Desktop")," - ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Install Docker")," in\norder to install MemgraphDB.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Memgraph's Docker image was built with ",(0,r.kt)("strong",{parentName:"p"},"Docker version ",(0,r.kt)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions.")),(0,r.kt)("h2",{id:"base-installation-guide"},"Install MemgraphDB"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download the latest ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Docker image")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download/"},"Download\nHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Import the image using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker load -i /path-to/memgraph-<version>-docker.tar.gz\n")),(0,r.kt)("h2",{id:"starting-memgraph"},"Start MemgraphDB"),(0,r.kt)("p",null,"To start MemgraphDB, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 -p 7444:7444 -v mg_lib:/var/lib/memgraph memgraph/memgraph\n")),(0,r.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph vX.X.X\nTo get started with Memgraph, visit https://memgr.ph/start\n")),(0,r.kt)("p",null,"At this point, the Memgraph database is ready for you to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.5.1/connect-to-memgraph"},"submit Cypher\nqueries")," via a command-line tool ",(0,r.kt)("strong",{parentName:"p"},"mgconsole"),",\nvisual user interface ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Lab")," or various ",(0,r.kt)("strong",{parentName:"p"},"drivers"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The username and password for connecting to the database are empty by default.")),(0,r.kt)("h2",{id:"stopping-memgraph"},"Stop MemgraphDB"),(0,r.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_ID\n")),(0,r.kt)("p",null,"You can find the name of the container (",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID"),") by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,r.kt)("h2",{id:"named-volumes"},"Configuration file and logs"),(0,r.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph through ",(0,r.kt)("strong",{parentName:"p"},"PowerShell"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 -p 7444:7444\n  -v mg_lib:/var/lib/memgraph `\n  -v mg_log:/var/log/memgraph `\n  -v mg_etc:/etc/memgraph `\n  memgraph/memgraph --log-level=TRACE\n")),(0,r.kt)("p",null,"The configuration file is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_etc")," volume. The exact location of\nthe file depends on your specific setup, but usually it is\n",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". "),(0,r.kt)("p",null,"The logs will be saved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_log")," volume, and the directories can usually be find in\n",(0,r.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\docker-desktop-data\\version-pack-data\\community\\docker\\volumes\\"),"."),(0,r.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 -p 7444:7444 memgraph/memgraph --log-level=TRACE\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When working with MemgraphDB, you should pass configuration flags as arguments."),(0,r.kt)("p",{parentName:"admonition"},"For example, you should start the MemgraphDB image with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run memgraph/memgraph\n--bolt-port=7687 --log-level=TRACE"),", and Memgraph Platform with ",(0,r.kt)("inlineCode",{parentName:"p"},'docker run -e\nMEMGRAPH="--bolt-port=7687 --log-level=TRACE" memgraph/memgraph-platform'),".")),(0,r.kt)("p",null,"To learn about all the configuration options, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.5.1/reference-guide/configuration"},"Reference\nguide"),"."),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"If you need more information on working with Docker, check out our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/how-to-guides/work-with-docker"},"guide on how\nto work with Docker")),".",(0,r.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/connect-to-memgraph"},"querying"))," guide or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,r.kt)("br",null),"\nVisit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/connect-to-memgraph/drivers"},"Drivers overview")),"\npage if you need to connect to the database programmatically."),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/windows-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see\nif we have already covered the topic. For more information on the installation\nprocess and for additional questions, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/help-center"},"Help Center")),"\npage."))}c.isMDXComponent=!0}}]);