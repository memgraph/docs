"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=m(n),u=r,h=g["".concat(p,".").concat(u)]||g[u]||c[u]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},98496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={id:"docker-installation",title:"Install Memgraph Platform on macOS with Docker",sidebar_label:"Install Memgraph Platform (recommended)",slug:"/install-memgraph-on-macos-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},l=void 0,i={unversionedId:"installation/macos/docker-installation",id:"version-2.5.1/installation/macos/docker-installation",title:"Install Memgraph Platform on macOS with Docker",description:"The following article outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.5.1/installation/macos/docker-installation.md",sourceDirName:"installation/macos",slug:"/install-memgraph-on-macos-docker",permalink:"/docs/memgraph/2.5.1/install-memgraph-on-macos-docker",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.1/installation/macos/docker-installation.md",tags:[],version:"2.5.1",frontMatter:{id:"docker-installation",title:"Install Memgraph Platform on macOS with Docker",sidebar_label:"Install Memgraph Platform (recommended)",slug:"/install-memgraph-on-macos-docker",pagination_prev:"installation/overview",pagination_next:"connect-to-memgraph/overview"},sidebar:"memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/2.5.1/installation"},next:{title:"Connection methods overview",permalink:"/docs/memgraph/2.5.1/connect-to-memgraph"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install and start Memgraph Platform",id:"installation-guide",level:2},{value:"Stop Memgraph Platform",id:"stopping-memgraph-platform",level:2},{value:"Configuration file and logs",id:"named-volumes",level:2},{value:"Where to next?",id:"where-to-next",level:2},{value:"Getting help",id:"getting-help",level:2}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following article outlines the basic steps necessary to install and run\n",(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," on macOS with Docker."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MemgraphDB")," - the database that holds your data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memgraph Lab")," - visual user interface for running queries and visualizing\ngraph data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mgconsole")," - command-line interface for running queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Newer versions of Memgraph are currently ",(0,r.kt)("strong",{parentName:"p"},"not backward compatible")," with older\nversions. That is why you won't be able to load storage snapshots between\ndifferent versions.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Docker Desktop")," - Memgraph Platform can be installed only with Docker.",(0,r.kt)("br",null),"\nInstructions on how to install Docker can be found on the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker\nwebsite"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Memgraph's Docker image was built with ",(0,r.kt)("strong",{parentName:"p"},"Docker version ",(0,r.kt)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions.")),(0,r.kt)("h2",{id:"installation-guide"},"Install and start Memgraph Platform"),(0,r.kt)("p",null,"Open iTerm or Terminal and use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,r.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,r.kt)("p",null,"Command-line tool ",(0,r.kt)("strong",{parentName:"p"},"mgconsole")," is open in the terminal, and the visual user\ninterface ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Lab")," is available at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3000")),"`."),(0,r.kt)("p",null,"User either ",(0,r.kt)("strong",{parentName:"p"},"mgconsole"),", ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Lab")," or various ",(0,r.kt)("strong",{parentName:"p"},"drivers")," to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.5.1/connect-to-memgraph"},(0,r.kt)("strong",{parentName:"a"},"connect to\nMemgraphDB")),"."),(0,r.kt)("h2",{id:"stopping-memgraph-platform"},"Stop Memgraph Platform"),(0,r.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_NAME\n")),(0,r.kt)("p",null,"You can find the name of the container (",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running the following command in a new terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,r.kt)("h2",{id:"named-volumes"},"Configuration file and logs"),(0,r.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE" \\\n  -v mg_lib:/var/lib/memgraph \\\n  -v mg_log:/var/log/memgraph \\\n  -v mg_etc:/etc/memgraph \\\n  memgraph/memgraph-platform\n')),(0,r.kt)("p",null,"The configuration file is located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_etc")," volume. The exact location of\nthe file depends on your specific setup, but usually it is\n",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". "),(0,r.kt)("p",null,"The logs will be saved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_log")," volume, and the location of the directories depends on your specific setup. "),(0,r.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 -e MEMGRAPH="--log-level=TRACE" memgraph/memgraph-platform\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"When working with Memgraph Platform, you should pass configuration flags inside\nof environment variables."),(0,r.kt)("p",{parentName:"admonition"},"For example, you can start the MemgraphDB image with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run memgraph/memgraph\n--bolt-port=7687 --log-level=TRACE"),", but you should start Memgraph Platform with\n",(0,r.kt)("inlineCode",{parentName:"p"},'docker run -e MEMGRAPH="--bolt-port=7687 --log-level=TRACE"\nmemgraph/memgraph-platform'),".")),(0,r.kt)("p",null,"To learn about all the configuration options, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.5.1/reference-guide/configuration"},"Reference\nguide"),"."),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"If you need more information on working with Docker, check out our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/how-to-guides/work-with-docker"},"guide on how\nto work with Docker")),".",(0,r.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/connect-to-memgraph"},"querying"))," guide or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,r.kt)("br",null),"\nVisit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/connect-to-memgraph/drivers"},"Drivers overview")),"\npage if you need to connect to the database programmatically."),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.5.1/macos-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if we\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/help-center"},"Help Center"))," page."))}c.isMDXComponent=!0}}]);