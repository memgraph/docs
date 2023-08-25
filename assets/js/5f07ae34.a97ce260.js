"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=m(n),h=r,u=g["".concat(p,".").concat(h)]||g[h]||c[h]||o;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(47119);const i={id:"docker-installation",title:"Install Memgraph Platform on macOS with Docker",sidebar_label:"Install Memgraph Platform (recommended)",slug:"/install-memgraph-on-macos-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},l=void 0,p={unversionedId:"installation/macos/docker-installation",id:"version-2.10.1/installation/macos/docker-installation",title:"Install Memgraph Platform on macOS with Docker",description:"The following article outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.10.1/installation/macos/docker-installation.md",sourceDirName:"installation/macos",slug:"/install-memgraph-on-macos-docker",permalink:"/docs/memgraph/install-memgraph-on-macos-docker",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.1/installation/macos/docker-installation.md",tags:[],version:"2.10.1",frontMatter:{id:"docker-installation",title:"Install Memgraph Platform on macOS with Docker",sidebar_label:"Install Memgraph Platform (recommended)",slug:"/install-memgraph-on-macos-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/connect-to-memgraph"}},m={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install and start Memgraph Platform",id:"installation-guide",level:2},{value:"Stop Memgraph Platform",id:"stopping-memgraph-platform",level:2},{value:"Starting Memgraph Platform",id:"starting-memgraph-platform",level:2},{value:"Configuration file and logs",id:"named-volumes",level:2},{value:"Where to next?",id:"where-to-next",level:2},{value:"Getting help",id:"getting-help",level:2}],c={toc:s};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following article outlines the basic steps necessary to install and run\n",(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," on macOS with Docker."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MemgraphDB")," - the database that holds your data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memgraph Lab")," - visual user interface for running queries and visualizing\ngraph data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mgconsole")," - command-line interface for running queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,r.kt)(o.ZP,{mdxType:"BackwardCompatibilityWarning"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docker Desktop")," - Memgraph Platform can be installed only with Docker.",(0,r.kt)("br",null),"\nInstructions on how to install Docker can be found on the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker\nwebsite"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Memgraph's Docker image was built with ",(0,r.kt)("strong",{parentName:"p"},"Docker version ",(0,r.kt)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions.")),(0,r.kt)("h2",{id:"installation-guide"},"Install and start Memgraph Platform"),(0,r.kt)("p",null,"Open iTerm or Terminal and use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 -p 7444:7444 -p 3000:3000 --name memgraph memgraph/memgraph-platform\n")),(0,r.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"2023-08-25 09:01:45,691 INFO Included extra file \"/etc/supervisor/programs/lab.conf\" during parsing\n2023-08-25 09:01:45,691 INFO Included extra file \"/etc/supervisor/programs/memgraph.conf\" during parsing\n2023-08-25 09:01:45,691 INFO Set uid to user 0 succeeded\n2023-08-25 09:01:45,692 INFO supervisord started with pid 1\n2023-08-25 09:01:46,696 INFO spawned: 'memgraph' with pid 7\n2023-08-25 09:01:46,700 INFO spawned: 'lab' with pid 8\nYou are running Memgraph v2.10.1\nTo get started with Memgraph, visit https://memgr.ph/start\n")),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/memgraph-platform#mgconsole"},"open command-line tool\n",(0,r.kt)("strong",{parentName:"a"},"mgconsole"))," in the\nterminal, and the visual user interface ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Lab")," is available at\n",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3000")),"."),(0,r.kt)("p",null,"User either ",(0,r.kt)("strong",{parentName:"p"},"mgconsole"),", ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Lab")," or various ",(0,r.kt)("strong",{parentName:"p"},"drivers")," to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/connect-to-memgraph"},(0,r.kt)("strong",{parentName:"a"},"connect to\nMemgraphDB")),"."),(0,r.kt)("h2",{id:"stopping-memgraph-platform"},"Stop Memgraph Platform"),(0,r.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker stop memgraph\n")),(0,r.kt)("h2",{id:"starting-memgraph-platform"},"Starting Memgraph Platform"),(0,r.kt)("p",null,"To start a Memgraph database instance, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker start memgraph\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you chose a different name for your container instead of the default\n",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph"),", or if you simply want to manage containers using their ID, follow\nthese steps:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To find the name or ID of your container, run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.kt)("p",{parentName:"li"},"This command will list all running containers. Look for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform")," image in the list and note down the container's\nname or ID.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To stop the container using its ID or custom name:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop CONTAINER_NAME_OR_ID\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME_OR_ID")," with the actual name or ID of your container.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To start the container again:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker start CONTAINER_NAME_OR_ID\n")),(0,r.kt)("p",{parentName:"li"},"   Again, replace ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME_OR_ID")," with the actual name or ID of your\ncontainer. ")))),(0,r.kt)("h2",{id:"named-volumes"},"Configuration file and logs"),(0,r.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE" \\\n  -v mg_lib:/var/lib/memgraph \\\n  -v mg_log:/var/log/memgraph \\\n  -v mg_etc:/etc/memgraph \\\n  memgraph/memgraph-platform\n')),(0,r.kt)("p",null,"The configuration file is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_etc")," volume. The exact location of\nthe file depends on your specific setup, but usually it is\n",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". "),(0,r.kt)("p",null,"The logs will be saved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_log")," volume, and the location of the directories depends on your specific setup. "),(0,r.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE" memgraph/memgraph-platform\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When working with Memgraph Platform, you should pass configuration flags inside\nof environment variables."),(0,r.kt)("p",{parentName:"admonition"},"For example, you can start the MemgraphDB image with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run memgraph/memgraph\n--bolt-port=7687 --log-level=TRACE"),", but you should start Memgraph Platform with\n",(0,r.kt)("inlineCode",{parentName:"p"},'docker run -e MEMGRAPH="--bolt-port=7687 --log-level=TRACE"\nmemgraph/memgraph-platform'),".")),(0,r.kt)("p",null,"To learn about all the configuration options, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Reference\nguide"),"."),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"If you need more information on working with Docker, check out our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/how-to-guides/work-with-docker"},"guide on how\nto work with Docker")),".",(0,r.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph"},"querying"))," guide or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,r.kt)("br",null),"\nVisit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/connect-to-memgraph/drivers"},"Drivers overview")),"\npage if you need to connect to the database programmatically."),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/macos-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if we\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/help-center"},"Help Center"))," page."))}g.isMDXComponent=!0},47119:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Newer versions of Memgraph ",(0,r.kt)("strong",{parentName:"p"},"might not be backward compatible")," with older\nversions and you might not be able to load storage snapshots between different\nversions. In that case, please ",(0,r.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"contact the Memgraph\nteam")," and we'll help with the migration as much as\npossible.")))}i.isMDXComponent=!0}}]);