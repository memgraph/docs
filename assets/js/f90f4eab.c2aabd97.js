"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),h=o,u=c["".concat(p,".").concat(h)]||c[h]||g[h]||r;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const r={id:"docker-installation",title:"Install Memgraph on Windows with Docker",sidebar_label:"Docker \ud83d\udc33",slug:"/install-memgraph-on-windows-docker"},i=void 0,l={unversionedId:"installation/windows/docker-installation",id:"version-2.1.0/installation/windows/docker-installation",title:"Install Memgraph on Windows with Docker",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/memgraph_versioned_docs/version-2.1.0/installation/windows/docker-installation.md",sourceDirName:"installation/windows",slug:"/install-memgraph-on-windows-docker",permalink:"/docs/memgraph/2.1.0/install-memgraph-on-windows-docker",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/installation/windows/docker-installation.md",tags:[],version:"2.1.0",frontMatter:{id:"docker-installation",title:"Install Memgraph on Windows with Docker",sidebar_label:"Docker \ud83d\udc33",slug:"/install-memgraph-on-windows-docker"},sidebar:"version-2.1.0/memgraph",previous:{title:"Install Memgraph overview",permalink:"/docs/memgraph/2.1.0/installation"},next:{title:"Windows Subsystem for Linux",permalink:"/docs/memgraph/2.1.0/install-memgraph-on-windows-wsl"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Memgraph Platform",id:"memgraph-platform",level:2},{value:"Installation guide",id:"installation-guide",level:3},{value:"Starting Memgraph Platform",id:"starting-memgraph-platform",level:3},{value:"Stopping Memgraph Platform",id:"stopping-memgraph-platform",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Accessing configuration files and logs",id:"named-volumes",level:3},{value:"Memgraph base image",id:"memgraph-base-image",level:2},{value:"Installation guide",id:"base-installation-guide",level:3},{value:"Starting Memgraph",id:"starting-memgraph",level:3},{value:"Stopping Memgraph",id:"stopping-memgraph",level:3},{value:"Configuration",id:"base-configuration",level:3},{value:"Accessing configuration files and logs",id:"base-named-volumes",level:3},{value:"Differences between Memgraph Docker images",id:"differences-between-images",level:2},{value:"Where to next?",id:"where-to-next",level:2},{value:"Getting help",id:"getting-help",level:2}],s={toc:m};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\n",(0,o.kt)("strong",{parentName:"p"},"Memgraph")," on Windows with Docker. ",(0,o.kt)("br",null),"\nThere are two main Docker images that you can install:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#memgraph-platform"},(0,o.kt)("strong",{parentName:"a"},"Memgraph Platform"))," which contains:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memgraph")),(0,o.kt)("li",{parentName:"ul"},"the visual user interface ",(0,o.kt)("strong",{parentName:"li"},"Memgraph Lab")),(0,o.kt)("li",{parentName:"ul"},"the command-line interface ",(0,o.kt)("strong",{parentName:"li"},"mgconsole")),(0,o.kt)("li",{parentName:"ul"},"the graph library ",(0,o.kt)("strong",{parentName:"li"},"MAGE")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#memgraph-base-image"},(0,o.kt)("strong",{parentName:"a"},"Memgraph base image")),": contains only Memgraph.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Memgraph Platform")," is the ",(0,o.kt)("strong",{parentName:"p"},"recommended")," Docker image. If you insist on\nusing the Memgraph base image, be aware of the\n",(0,o.kt)("a",{parentName:"p",href:"#differences-between-images"},"differences")," when interacting with\nthem. We provide code snippets for working with both types of images below.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you proceed with the installation guide, make sure that you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installed ",(0,o.kt)("strong",{parentName:"li"},"Docker Desktop"),". Instructions on how to install Docker can be\nfound on the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Memgraph's Docker image was built with ",(0,o.kt)("strong",{parentName:"p"},"Docker version ",(0,o.kt)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions.")),(0,o.kt)("h2",{id:"memgraph-platform"},"Memgraph Platform"),(0,o.kt)("h3",{id:"installation-guide"},"Installation guide"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Download and load the ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Platform Docker image")," with the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"}," docker pull memgraph/memgraph-platform\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Create a new tag for the image so it can be called as ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph")," instead\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker image tag memgraph/memgraph-platform memgraph\n")),(0,o.kt)("admonition",{title:"Memgraph Platform",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"memgraph/memgraph-platform")," Docker image contains ",(0,o.kt)("strong",{parentName:"p"},"Memgraph"),",\n",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," and ",(0,o.kt)("strong",{parentName:"p"},"mgconsole"),". After running the image, mgconsole will open\nin the terminal while Memgraph Lab is available on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),".")),(0,o.kt)("h3",{id:"starting-memgraph-platform"},"Starting Memgraph Platform"),(0,o.kt)("p",null,"To start Memgraph, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 memgraph\n")),(0,o.kt)("admonition",{title:"Docker Volumes",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Docker containers don\u2019t persist data by default (all changes are lost when the\ncontainer is stopped). You need to use local volumes to store the data\npermanently, which is why Memgraph is started with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," flag."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph\n")),(0,o.kt)("p",{parentName:"admonition"},"More information on Docker Volumes can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"here"),".")),(0,o.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,o.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"section below"),". At this point, Memgraph is ready for you to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.0/connect-to-memgraph"},"submit Cypher queries"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The username and password for connecting to the database are empty by default.")),(0,o.kt)("h3",{id:"stopping-memgraph-platform"},"Stopping Memgraph Platform"),(0,o.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_NAME\n")),(0,o.kt)("p",null,"You can find the name of the container (",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The Memgraph configuration is available in Docker's named volume ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc"),". On\nLinux systems, it should be in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". Keep in mind that this way\nof specifying configuration options is only valid if Memgraph was started ",(0,o.kt)("a",{parentName:"p",href:"#named-volumes"},"using\nvolumes"),"."),(0,o.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" memgraph\n')),(0,o.kt)("p",null,"To learn about all the configuration options, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.0/reference-guide/configuration"},"Reference\nguide"),"."),(0,o.kt)("h3",{id:"named-volumes"},"Accessing configuration files and logs"),(0,o.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph through ",(0,o.kt)("strong",{parentName:"p"},"PowerShell"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" `\n  -v mg_lib:/var/lib/memgraph `\n  -v mg_log:/var/log/memgraph `\n  -v mg_etc:/etc/memgraph `\n  memgraph\n')),(0,o.kt)("p",null,"The volume ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc")," contains the configuration file while the logs will be saved\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_log"),". The location of the volume directories depends on your specific\nsetup but can usually be found in\n",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\docker-desktop-data\\version-pack-data\\community\\docker\\volumes\\"),"."),(0,o.kt)("h2",{id:"memgraph-base-image"},"Memgraph base image"),(0,o.kt)("h3",{id:"base-installation-guide"},"Installation guide"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Download the latest ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Docker image")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/download/"},"Download\nHub"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," If you installed Docker correctly, you can import the image using the\nfollowing command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker load -i /path-to/memgraph-<version>-docker.tar.gz\n")),(0,o.kt)("h3",{id:"starting-memgraph"},"Starting Memgraph"),(0,o.kt)("p",null,"To start Memgraph, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 memgraph\n")),(0,o.kt)("admonition",{title:"Docker Volumes",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Docker containers don\u2019t persist data by default (all changes are lost when the\ncontainer is stopped). You need to use local volumes to store the data\npermanently, which is why Memgraph is started with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," flag."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 -v mg_lib:/var/lib/memgraph memgraph\n")),(0,o.kt)("p",{parentName:"admonition"},"More information on Docker Volumes can be found\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"here"),".")),(0,o.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph vX.X.X\nTo get started with Memgraph, visit https://memgr.ph/start\n")),(0,o.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,o.kt)("a",{parentName:"p",href:"#configuration"},"section below"),". At this point, Memgraph is ready for you to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.0/connect-to-memgraph"},"submit Cypher queries"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The username and password for connecting to the database are empty by default.")),(0,o.kt)("h3",{id:"stopping-memgraph"},"Stopping Memgraph"),(0,o.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_NAME\n")),(0,o.kt)("p",null,"You can find the name of the container (",(0,o.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,o.kt)("h3",{id:"base-configuration"},"Configuration"),(0,o.kt)("p",null,"The Memgraph configuration is available in Docker's named volume ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc"),". On\nLinux systems, it should be in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". Keep in mind that this way\nof specifying configuration options is only valid if Memgraph was started ",(0,o.kt)("a",{parentName:"p",href:"#named-volumes"},"using\nvolumes"),"."),(0,o.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 memgraph --bolt-port=7687\n")),(0,o.kt)("p",null,"To learn about all the configuration options, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.0/reference-guide/configuration"},"Reference\nguide"),"."),(0,o.kt)("h3",{id:"base-named-volumes"},"Accessing configuration files and logs"),(0,o.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph through ",(0,o.kt)("strong",{parentName:"p"},"PowerShell"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 `\n  -v mg_lib:/var/lib/memgraph `\n  -v mg_log:/var/log/memgraph `\n  -v mg_etc:/etc/memgraph `\n  memgraph --bolt-port=7687\n")),(0,o.kt)("p",null,"The volume ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_etc")," contains the configuration file while the logs will be saved\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"mg_log"),". The location of the volume directories depends on your specific\nsetup but can usually be found in\n",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\docker-desktop-data\\version-pack-data\\community\\docker\\volumes\\"),"."),(0,o.kt)("h2",{id:"differences-between-images"},"Differences between Memgraph Docker images"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Configuration flags need to be passed inside of environmental variables when\nworking with Memgraph Platform. For example, you can start the Memgraph base\nimage with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run memgraph --bolt-port=7687"),", while ",(0,o.kt)("inlineCode",{parentName:"p"},'docker run -e\nMEMGRAPH="--bolt-port=7687" memgraph')," is the same command for Memgraph\nPlatform.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When starting Memgraph Platform, you need to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"-it")," flag that tells\nDocker to open an interactive container instance. Otherwise, you won't have\naccess to mgconsole.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Because Memgraph Platform includes Memgraph Lab, which is a web application,\nyou need to include ",(0,o.kt)("inlineCode",{parentName:"p"},"-p 3000:3000")," in the run command so that Lab becomes\naccessible on ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:3000"),"."))),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"If you need more information on working with Docker, check out ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/how-to-work-with-docker"},"this\nguide")),".",(0,o.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/connect-to-memgraph"},"Querying"))," guide or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,o.kt)("br",null),"\nVisit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/connect-to-memgraph/methods/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."),(0,o.kt)("h2",{id:"getting-help"},"Getting help"),(0,o.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/windows-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see\nif we have already covered the topic. For more information on the installation\nprocess and for additional questions, visit the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/help-center"},"Getting help")),"\npage."))}g.isMDXComponent=!0}}]);