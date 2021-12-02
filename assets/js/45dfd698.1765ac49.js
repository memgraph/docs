"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31038],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(a),h=o,d=g["".concat(m,".").concat(h)]||g[h]||c[h]||r;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},15595:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return g}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"docker-installation",title:"Install Memgraph on macOS with Docker",sidebar_label:"Docker \ud83d\udc33",slug:"/install-memgraph-on-macos-docker"},m=void 0,p={unversionedId:"installation/macos/docker-installation",id:"installation/macos/docker-installation",isDocsHomePage:!1,title:"Install Memgraph on macOS with Docker",description:"This article briefly outlines the basic steps necessary to install and run",source:"@site/docs/installation/macos/docker-installation.md",sourceDirName:"installation/macos",slug:"/install-memgraph-on-macos-docker",permalink:"/docs/memgraph/next/install-memgraph-on-macos-docker",editUrl:"https://github.com/memgraph/docs/tree/master/docs/installation/macos/docker-installation.md",tags:[],version:"current",frontMatter:{id:"docker-installation",title:"Install Memgraph on macOS with Docker",sidebar_label:"Docker \ud83d\udc33",slug:"/install-memgraph-on-macos-docker"},sidebar:"memgraph",previous:{title:"Installation troubleshooting",permalink:"/docs/memgraph/next/windows-installation-troubleshooting"},next:{title:"Installation troubleshooting",permalink:"/docs/memgraph/next/macos-installation-troubleshooting"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Memgraph Platform",id:"memgraph-platform",children:[{value:"Installation guide",id:"installation-guide",children:[],level:3},{value:"Starting Memgraph Platform",id:"starting-memgraph-platform",children:[],level:3},{value:"Stopping Memgraph Platform",id:"stopping-memgraph-platform",children:[],level:3},{value:"Configuration",id:"configuration",children:[],level:3},{value:"Accessing configuration files and logs",id:"named-volumes",children:[],level:3}],level:2},{value:"Memgraph base image",id:"memgraph-base-image",children:[{value:"Installation guide",id:"base-installation-guide",children:[],level:3},{value:"Starting Memgraph",id:"starting-memgraph",children:[],level:3},{value:"Stopping Memgraph",id:"stopping-memgraph",children:[],level:3},{value:"Configuration",id:"base-configuration",children:[],level:3},{value:"Accessing configuration files and logs",id:"base-named-volumes",children:[],level:3}],level:2},{value:"Differences between Memgraph Docker images",id:"differences-between-images",children:[],level:2},{value:"Where to next?",id:"where-to-next",children:[],level:2},{value:"Getting help",id:"getting-help",children:[],level:2}],c={toc:s};function g(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article briefly outlines the basic steps necessary to install and run\n",(0,r.kt)("strong",{parentName:"p"},"Memgraph")," on macOS with Docker. ",(0,r.kt)("br",null),"\nThere are two main Docker images that you can install:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#memgraph-platform"},(0,r.kt)("strong",{parentName:"a"},"Memgraph Platform"))," which contains:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memgraph")),(0,r.kt)("li",{parentName:"ul"},"the visual user interface ",(0,r.kt)("strong",{parentName:"li"},"Memgraph Lab")),(0,r.kt)("li",{parentName:"ul"},"the command-line interface ",(0,r.kt)("strong",{parentName:"li"},"mgconsole")),(0,r.kt)("li",{parentName:"ul"},"the graph library ",(0,r.kt)("strong",{parentName:"li"},"MAGE")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#memgraph-base-image"},(0,r.kt)("strong",{parentName:"a"},"Memgraph base image")),": contains only Memgraph.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," is the ",(0,r.kt)("strong",{parentName:"p"},"recommended")," Docker image. If you insist on\nusing the Memgraph base image, be aware of the\n",(0,r.kt)("a",{parentName:"p",href:"#differences-between-images"},"differences")," when interacting with\nthem. We provide code snippets for working with both types of images below."))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you proceed with the installation guide, make sure that you have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installed ",(0,r.kt)("strong",{parentName:"li"},"Docker Desktop"),". Instructions on how to install Docker can be\nfound on the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"official Docker website"),".")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Memgraph's Docker image was built with ",(0,r.kt)("strong",{parentName:"p"},"Docker version ",(0,r.kt)("inlineCode",{parentName:"strong"},"1.12"))," and should be\ncompatible with all newer versions."))),(0,r.kt)("h2",{id:"memgraph-platform"},"Memgraph Platform"),(0,r.kt)("h3",{id:"installation-guide"},"Installation guide"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download and load the ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform Docker image")," with the\nfollowing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"}," docker pull memgraph/memgraph-platform\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Create a new tag for the image so it can be called as ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph")," instead\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph/memgraph-platform"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker image tag memgraph/memgraph-platform memgraph\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Memgraph Platform")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("strong",{parentName:"p"},"memgraph/memgraph-platform")," Docker image contains ",(0,r.kt)("strong",{parentName:"p"},"Memgraph"),",\n",(0,r.kt)("strong",{parentName:"p"},"Memgraph Lab")," and ",(0,r.kt)("strong",{parentName:"p"},"mgconsole"),". After running the image, mgconsole will open\nin the terminal while Memgraph Lab is available on ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."))),(0,r.kt)("h3",{id:"starting-memgraph-platform"},"Starting Memgraph Platform"),(0,r.kt)("p",null,"To start Memgraph, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 memgraph/memgraph-platform\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docker Volumes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Docker containers don\u2019t persist data by default (all changes are lost when the\ncontainer is stopped). You need to use local volumes to store the data\npermanently, which is why Memgraph is started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," flag."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 7687:7687 -p 3000:3000 -v mg_lib:/var/lib/memgraph memgraph/memgraph-platform\n")),(0,r.kt)("p",{parentName:"div"},"More information on Docker Volumes can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"here"),"."))),(0,r.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"mgconsole X.X\nConnected to 'memgraph://127.0.0.1:7687'\nType :help for shell usage\nQuit the shell by typing Ctrl-D(eof) or :quit\nmemgraph>\n")),(0,r.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"section below"),". At this point, Memgraph is ready for you to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/connect-to-memgraph"},"submit Cypher queries"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The username and password for connecting to the database are empty by default."))),(0,r.kt)("h3",{id:"stopping-memgraph-platform"},"Stopping Memgraph Platform"),(0,r.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_NAME\n")),(0,r.kt)("p",null,"You can find the name of the container (",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The Memgraph configuration is available in Docker's named volume ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_etc"),". On\nLinux systems, it should be in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". Keep in mind that this way\nof specifying configuration options is only valid if Memgraph was started ",(0,r.kt)("a",{parentName:"p",href:"#named-volumes"},"using\nvolumes"),"."),(0,r.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" memgraph/memgraph-platform\n')),(0,r.kt)("p",null,"To learn about all the configuration options, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/configuration"},"Reference\nguide"),"."),(0,r.kt)("h3",{id:"named-volumes"},"Accessing configuration files and logs"),(0,r.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'docker run -it -p 7687:7687 -p 3000:3000 -e MEMGRAPH="--bolt-port=7687" \\\n  -v mg_lib:/var/lib/memgraph \\\n  -v mg_log:/var/log/memgraph \\\n  -v mg_etc:/etc/memgraph \\\n  memgraph/memgraph-platform\n')),(0,r.kt)("p",null,"The volume ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_etc")," contains the configuration file while the logs will be saved\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_log"),". The location of the volume directories depends on your specific\nsetup."),(0,r.kt)("h2",{id:"memgraph-base-image"},"Memgraph base image"),(0,r.kt)("h3",{id:"base-installation-guide"},"Installation guide"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Download the latest ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Docker image")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/download/"},"Download\nHub"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," If you installed Docker correctly, you can import the image using the\nfollowing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker load -i /path-to/memgraph-<version>-docker.tar.gz\n")),(0,r.kt)("h3",{id:"starting-memgraph"},"Starting Memgraph"),(0,r.kt)("p",null,"To start Memgraph, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 memgraph\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Docker Volumes")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Docker containers don\u2019t persist data by default (all changes are lost when the\ncontainer is stopped). You need to use local volumes to store the data\npermanently, which is why Memgraph is started with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," flag."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 -v mg_lib:/var/lib/memgraph memgraph\n")),(0,r.kt)("p",{parentName:"div"},"More information on Docker Volumes can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"here"),"."))),(0,r.kt)("p",null,"If successful, you should see a message similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"You are running Memgraph vX.X.X\nTo get started with Memgraph, visit https://memgr.ph/start\n")),(0,r.kt)("p",null,"If you want to start Memgraph with different configuration settings, check out\nthe ",(0,r.kt)("a",{parentName:"p",href:"#configuration"},"section below"),". At this point, Memgraph is ready for you to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/connect-to-memgraph"},"submit Cypher queries"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The username and password for connecting to the database are empty by default."))),(0,r.kt)("h3",{id:"stopping-memgraph"},"Stopping Memgraph"),(0,r.kt)("p",null,"To stop a Memgraph database instance, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker stop CONTAINER_NAME\n")),(0,r.kt)("p",null,"You can find the name of the container (",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_NAME"),") by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker ps\n")),(0,r.kt)("h3",{id:"base-configuration"},"Configuration"),(0,r.kt)("p",null,"The Memgraph configuration is available in Docker's named volume ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_etc"),". On\nLinux systems, it should be in\n",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volumes/mg_etc/_data/memgraph.conf"),". Keep in mind that this way\nof specifying configuration options is only valid if Memgraph was started ",(0,r.kt)("a",{parentName:"p",href:"#base-named-volumes"},"using\nvolumes"),"."),(0,r.kt)("p",null,"When using Docker, you can also specify the configuration options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker\nrun")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 memgraph --bolt-port=7687\n")),(0,r.kt)("p",null,"To learn about all the configuration options, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/configuration"},"Reference\nguide"),"."),(0,r.kt)("h3",{id:"base-named-volumes"},"Accessing configuration files and logs"),(0,r.kt)("p",null,"If you need to access the Memgraph configuration file or logs, you will need to\nspecify the following volumes when starting Memgraph:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph \\\n  -v mg_log:/var/log/memgraph \\\n  -v mg_etc:/etc/memgraph \\\n  memgraph --bolt-port=7687\n")),(0,r.kt)("p",null,"The volume ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_etc")," contains the configuration file while the logs will be saved\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_log"),". The location of the volume directories depends on your specific\nsetup."),(0,r.kt)("h2",{id:"differences-between-images"},"Differences between Memgraph Docker images"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configuration flags need to be passed inside of environmental variables when\nworking with Memgraph Platform. For example, you can start the Memgraph base\nimage with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run memgraph --bolt-port=7687"),", while ",(0,r.kt)("inlineCode",{parentName:"p"},'docker run -e\nMEMGRAPH="--bolt-port=7687" memgraph/memgraph-platform')," is the same command\nfor Memgraph Platform.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When starting Memgraph Platform, you need to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"-it")," flag that tells\nDocker to open an interactive container instance. Otherwise, you won't have\naccess to mgconsole.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Because Memgraph Platform includes Memgraph Lab, which is a web application,\nyou need to include ",(0,r.kt)("inlineCode",{parentName:"p"},"-p 3000:3000")," in the run command so that Lab becomes\naccessible on ",(0,r.kt)("inlineCode",{parentName:"p"},"https://localhost:3000"),"."))),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"If you need more information on working with Docker, check out ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/how-to-work-with-docker"},"this\nguide")),".",(0,r.kt)("br",null),"\nTo learn how to query the database, take a look at the\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/connect-to-memgraph"},"Querying"))," guide or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground"))," for interactive tutorials.",(0,r.kt)("br",null),"\nVisit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/connect-to-memgraph/methods/drivers"},"Building applications")),"\npage if you need to connect to the database programmatically."),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"If you run into problems during the installation process, check out our\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/macos-installation-troubleshooting"},"installation troubleshooting\nguide"))," to see if we\nhave already covered the topic. For more information on the installation process\nand for additional questions, visit the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/help-center"},"Getting help"))," page."))}g.isMDXComponent=!0}}]);