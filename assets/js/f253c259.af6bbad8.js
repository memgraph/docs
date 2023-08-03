"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=m(n),h=o,u=g["".concat(p,".").concat(h)]||g[h]||c[h]||r;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),o=(n(67294),n(3905)),r=n(63024);const l={id:"docker-installation",title:"Install Memgraph Platform on Windows with Docker",sidebar_label:"Install Memgraph Platform (recommended)",slug:"/install-memgraph-on-windows-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},i=void 0,p={unversionedId:"installation/windows/docker-installation",id:"version-2.10.0/installation/windows/docker-installation",title:"Install Memgraph Platform on Windows with Docker",description:"The following article outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.10.0/installation/windows/docker-installation.md",sourceDirName:"installation/windows",slug:"/install-memgraph-on-windows-docker",permalink:"/docs/memgraph/install-memgraph-on-windows-docker",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/installation/windows/docker-installation.md",tags:[],version:"2.10.0",frontMatter:{id:"docker-installation",title:"Install Memgraph Platform on Windows with Docker",sidebar_label:"Install Memgraph Platform (recommended)",slug:"/install-memgraph-on-windows-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/connect-to-memgraph"}},m={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install and start Memgraph Platform",id:"installation-guide",level:2},{value:"Stop Memgraph Platform",id:"stopping-memgraph-platform",level:2},{value:"Configuration file and logs",id:"named-volumes",level:2},{value:"Where to next?",id:"where-to-next",level:2},{value:"Getting help",id:"getting-help",level:2}],c={toc:s};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The following article outlines the basic steps necessary to install and run\n",(0,o.kt)("strong",{parentName:"p"},"Memgraph Platform")," on Windows with Docker."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Memgraph Platform")," contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MemgraphDB")," - the database that holds your data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memgraph Lab")," - visual user interface for running queries and visualizing\ngraph data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mgconsole")," - command-line interface for running queries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,o.kt)(r.ZP,{mdxType:"BackwardCompatibilityWarning"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Desktop")," - Memgraph Platform can be installed only with Docker.",(0,o.kt)("br",null),"\nInstructions on how to install Docker can be found on the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker\nwebsite"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Memgraph's Docker image was built with ",(0,o.kt)("strong",{parentName:"p"},"Docker version ",(0,o.kt)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions.")),(0,o.kt)("h2",{id:"installation-guide"},"Install and start Memgraph Platform"),(0,o.kt)("p",null,"Open the Command Prompt or PowerShell and use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,o.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,o.kt)("p",null,"Command-line tool ",(0,o.kt)("strong",{parentName:"p"},"mgconsole")," is open in the terminal, and the visual user\ninterface ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," is available at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,o.kt)("inlineCode",{parentName:"a"},"http://localhost:3000")),"."),(0,o.kt)("p",null,"User either ",(0,o.kt)("strong",{parentName:"p"},"mgconsole"),", ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," or various ",(0,o.kt)("strong",{parentName:"p"},"drivers")," to ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/connect-to-memgraph"},(0,o.kt)("strong",{parentName:"a"},"connect to\nMemgraphDB")),"."),(0,o.kt)("h2",{id:"stopping-memgraph-platform"},"Stop Memgraph Platform"),(0,o.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_ID\n")),(0,o.kt)("p",null,"You can find the name of the container (",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID"),") by running the following command in a new terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,o.kt)("h2",{id:"named-volumes"},"Configuration file and logs"),(0,o.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph through ",(0,o.kt)("strong",{parentName:"p"},"PowerShell"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE" `\n  -v mg_lib:/var/lib/memgraph `\n  -v mg_log:/var/log/memgraph `\n  -v mg_etc:/etc/memgraph `\n  memgraph/memgraph-platform\n')),(0,o.kt)("p",null,"The configuration file is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc")," volume. The exact location of\nthe file depends on your specific setup, but usually it is\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". "),(0,o.kt)("p",null,"The logs will be saved to the ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_log")," volume, and the directories can usually be find in\n",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\docker-desktop-data\\version-pack-data\\community\\docker\\volumes\\"),"."),(0,o.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE" memgraph/memgraph-platform\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When working with Memgraph Platform, you should pass configuration flags inside\nof environment variables."),(0,o.kt)("p",{parentName:"admonition"},"For example, you can start the MemgraphDB image with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run memgraph/memgraph\n--bolt-port=7687 --log-level=TRACE"),", but you should start Memgraph Platform with\n",(0,o.kt)("inlineCode",{parentName:"p"},'docker run -e MEMGRAPH="--bolt-port=7687 --log-level=TRACE"\nmemgraph/memgraph-platform'),".")),(0,o.kt)("p",null,"To learn about all the configuration options, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Reference\nguide"),"."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"If you need more information on working with Docker, check out our ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-guides/work-with-docker"},"guide on how\nto work with Docker")),".",(0,o.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph"},"querying"))," guide or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,o.kt)("br",null),"\nVisit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph/drivers"},"Drivers overview")),"\npage if you need to connect to the database programmatically."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/windows-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see\nif we have already covered the topic. For more information on the installation\nprocess and for additional questions, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/help-center"},"Help Center")),"\npage."))}g.isMDXComponent=!0},63024:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Newer versions of Memgraph ",(0,o.kt)("strong",{parentName:"p"},"might not be backward compatible")," with older\nversions and you might not be able to load storage snapshots between different\nversions. In that case, please ",(0,o.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"contact the Memgraph\nteam")," and we'll help with the migration as much as\npossible.")))}l.isMDXComponent=!0}}]);