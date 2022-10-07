"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81223],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42469:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"docker-db-installation",title:"Install MemgraphDB on Windows with Docker",sidebar_label:"Docker",slug:"/install-memgraph-db-on-windows-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},s=void 0,p={unversionedId:"installation/windows/docker-db-installation",id:"version-2.4.1/installation/windows/docker-db-installation",title:"Install MemgraphDB on Windows with Docker",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.4.1/installation/windows/docker-db-installation.md",sourceDirName:"installation/windows",slug:"/install-memgraph-db-on-windows-docker",permalink:"/docs/memgraph/install-memgraph-db-on-windows-docker",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.1/installation/windows/docker-db-installation.md",tags:[],version:"2.4.1",frontMatter:{id:"docker-db-installation",title:"Install MemgraphDB on Windows with Docker",sidebar_label:"Docker",slug:"/install-memgraph-db-on-windows-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/connect-to-memgraph"}},m={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install MemgraphDB",id:"base-installation-guide",level:2},{value:"Start MemgraphDB",id:"starting-memgraph",level:2},{value:"Stop MemgraphDB",id:"stopping-memgraph",level:2},{value:"Configuration file and logs",id:"named-volumes",level:2},{value:"Where to next?",id:"where-to-next",level:2},{value:"Getting help",id:"getting-help",level:2}],d={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\n",(0,o.kt)("strong",{parentName:"p"},"MemgraphDB")," on Windows with Docker."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Newer versions of Memgraph are currently ",(0,o.kt)("strong",{parentName:"p"},"not backward compatible")," with older\nversions. That is why you won't be able to load storage snapshots between\ndifferent versions."))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you proceed with the installation guide, make sure that you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Desktop")," - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Install Docker")," in\norder to install MemgraphDB.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Memgraph's Docker image was built with ",(0,o.kt)("strong",{parentName:"p"},"Docker version ",(0,o.kt)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions."))),(0,o.kt)("h2",{id:"base-installation-guide"},"Install MemgraphDB"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Download the latest ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Docker image")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download/"},"Download\nHub"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Import the image using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker load -i /path-to/memgraph-<version>-docker.tar.gz\n")),(0,o.kt)("h2",{id:"starting-memgraph"},"Start MemgraphDB"),(0,o.kt)("p",null,"To start MemgraphDB, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 -p 7444:7444 -v mg_lib:/var/lib/memgraph memgraph/memgraph\n")),(0,o.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph vX.X.X\nTo get started with Memgraph, visit https://memgr.ph/start\n")),(0,o.kt)("p",null,"At this point, the Memgraph database is ready for you to ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/connect-to-memgraph"},"submit Cypher\nqueries")," via a command-line tool ",(0,o.kt)("strong",{parentName:"p"},"mgconsole"),",\nvisual user interface ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," or various ",(0,o.kt)("strong",{parentName:"p"},"drivers"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The username and password for connecting to the database are empty by default."))),(0,o.kt)("h2",{id:"stopping-memgraph"},"Stop MemgraphDB"),(0,o.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_ID\n")),(0,o.kt)("p",null,"You can find the name of the container (",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID"),") by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,o.kt)("h2",{id:"named-volumes"},"Configuration file and logs"),(0,o.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph through ",(0,o.kt)("strong",{parentName:"p"},"PowerShell"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 -p 7444:7444\n  -v mg_lib:/var/lib/memgraph `\n  -v mg_log:/var/log/memgraph `\n  -v mg_etc:/etc/memgraph `\n  memgraph/memgraph --log-level=TRACE\n")),(0,o.kt)("p",null,"The configuration file is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc")," volume. The exact location of\nthe file depends on your specific setup, but usually it is\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". "),(0,o.kt)("p",null,"The logs will be saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_log")," volume, and the directories can usually be find in\n",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\docker-desktop-data\\version-pack-data\\community\\docker\\volumes\\"),"."),(0,o.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 -p 7444:7444 memgraph/memgraph --log-level=TRACE\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When working with MemgraphDB, you should pass configuration flags as arguments."),(0,o.kt)("p",{parentName:"div"},"For example, you should start the MemgraphDB image with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run memgraph/memgraph\n--bolt-port=7687 --log-level=TRACE"),", and Memgraph Platform with ",(0,o.kt)("inlineCode",{parentName:"p"},'docker run -e\nMEMGRAPH="--bolt-port=7687 --log-level=TRACE" memgraph/memgraph-platform'),"."))),(0,o.kt)("p",null,"To learn about all the configuration options, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Reference\nguide"),"."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"If you need more information on working with Docker, check out our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-guides/work-with-docker"},"guide on how\nto work with Docker")),".",(0,o.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph"},"querying"))," guide or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,o.kt)("br",null),"\nVisit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph/drivers"},"Drivers overview")),"\npage if you need to connect to the database programmatically."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/windows-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see\nif we have already covered the topic. For more information on the installation\nprocess and for additional questions, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/help-center"},"Help Center")),"\npage."))}g.isMDXComponent=!0}}]);