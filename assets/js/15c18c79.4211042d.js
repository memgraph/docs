"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,u=g["".concat(m,".").concat(d)]||g[d]||c[d]||o;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"docker",title:"Docker",sidebar_label:"Docker"},i=void 0,l={unversionedId:"reference-guide/deployment/docker",id:"version-2.8.0/reference-guide/deployment/docker",title:"Docker",description:"If you define an application with Docker Compose, you can use that",source:"@site/memgraph_versioned_docs/version-2.8.0/reference-guide/deployment/docker.md",sourceDirName:"reference-guide/deployment",slug:"/reference-guide/deployment/docker",permalink:"/docs/memgraph/reference-guide/deployment/docker",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.8.0/reference-guide/deployment/docker.md",tags:[],version:"2.8.0",frontMatter:{id:"docker",title:"Docker",sidebar_label:"Docker"},sidebar:"memgraph",previous:{title:"Data types",permalink:"/docs/memgraph/reference-guide/data-types"},next:{title:"Kubernetes",permalink:"/docs/memgraph/reference-guide/deployment/kubernetes"}},m={},p=[{value:"Docker Compose for Memgraph Platform image",id:"docker-compose-for-memgraph-platform-image",level:2},{value:"Docker Compose for Memgraph MAGE image",id:"docker-compose-for-memgraph-mage-image",level:2},{value:"Docker Compose for Memgraph image",id:"docker-compose-for-memgraph-image",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you define an application with ",(0,r.kt)("strong",{parentName:"p"},"Docker Compose"),", you can use that\ndefinition to run the application in CI, staging, or production environments.\nHere you can find ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," files necessary to run ",(0,r.kt)("a",{parentName:"p",href:"#docker-compose-for-memgraph-platform-image"},(0,r.kt)("strong",{parentName:"a"},"Memgraph\nPlatform")),", ",(0,r.kt)("a",{parentName:"p",href:"#docker-compose-for-memgraph-mage-image"},(0,r.kt)("strong",{parentName:"a"},"Memgraph\nMAGE"))," and\n",(0,r.kt)("a",{parentName:"p",href:"#docker-compose-for-memgraph-image"},(0,r.kt)("strong",{parentName:"a"},"Memgraph"))," images."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/work-with-docker"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How-to"}))),(0,r.kt)("h2",{id:"docker-compose-for-memgraph-platform-image"},"Docker Compose for Memgraph Platform image"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Platform")," image contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MemgraphDB")," - the database that holds your data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memgraph Lab")," - visual user interface for running queries and visualizing\ngraph data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"mgconsole")," - command-line interface for running queries"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  memgraph-platform:\n    image: "memgraph/memgraph-platform"\n    ports:\n      - "7687:7687"\n      - "3000:3000"\n      - "7444:7444"\n    volumes:\n      - mg_lib:/var/lib/memgraph\n      - mg_log:/var/log/memgraph\n      - mg_etc:/etc/memgraph\n    environment:\n      - MEMGRAPH="--log-level=TRACE"\n    entrypoint: ["/usr/bin/supervisord"]\nvolumes:\n  mg_lib:\n  mg_log:\n  mg_etc:\n')),(0,r.kt)("p",null,"The port ",(0,r.kt)("inlineCode",{parentName:"p"},"7687")," is used for communication with Memgraph via Bolt protocol. The\nport ",(0,r.kt)("inlineCode",{parentName:"p"},"3000")," is exposed because Memgraph Lab will be running on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),",\nwhile the port ",(0,r.kt)("inlineCode",{parentName:"p"},"7444")," is there so that you can see logs from Memgraph inside\nMemgraph Lab. We specified three useful volumes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mg_lib")," - directory containing data that enables data persistency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mg_log")," - directory containing log files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mg_etc")," - directory containing the configuration file")),(0,r.kt)("p",null,"The exact location of the local directories depends on your specific setup."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Configuration settings")," can be changed by\nsetting the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"MEMGRAPH")," environment variable. In the above example,\nyou can see how to set ",(0,r.kt)("inlineCode",{parentName:"p"},"--log-level")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACE"),". Since Memgraph Platform is not\na single service, the process manager\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/multi-service_container/"},(0,r.kt)("inlineCode",{parentName:"a"},"supervisord")),"\nis used as the main running process in the ",(0,r.kt)("inlineCode",{parentName:"p"},"entrypoint"),". The MAGE library is\nincluded in this image, so you can use the available graph algorithms."),(0,r.kt)("h2",{id:"docker-compose-for-memgraph-mage-image"},"Docker Compose for Memgraph MAGE image"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Memgraph MAGE")," image contains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MemgraphDB")," - the database that holds your data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  memgraph-mage:\n    image: "memgraph/memgraph-mage"\n    volumes:\n      - mg_lib:/var/lib/memgraph\n      - mg_log:/var/log/memgraph\n      - mg_etc:/etc/memgraph\n    ports:\n      - "7687:7687"\n      - "7444:7444"\n    entrypoint: ["/usr/lib/memgraph/memgraph", "--log-level=TRACE"]\nvolumes:\n  mg_lib:\n  mg_log:\n  mg_etc:\n')),(0,r.kt)("p",null,"The port ",(0,r.kt)("inlineCode",{parentName:"p"},"7687")," is used for communication with Memgraph via Bolt protocol, while\nthe port ",(0,r.kt)("inlineCode",{parentName:"p"},"7444")," is there so that you can see logs from Memgraph inside the\nMemgraph Lab application. We specified three useful volumes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mg_lib")," - directory containing data that enables data persistency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mg_log")," - directory containing log files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mg_etc")," - directory containing the configuration file")),(0,r.kt)("p",null,"The exact location of the local directories depends on your specific setup."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Configuration settings")," can be changed by\nadding the ",(0,r.kt)("inlineCode",{parentName:"p"},"entrypoint"),". You first need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/memgraph")," and\nthen the configuration setting you'd like to change. In the above example, you\ncan see how to set ",(0,r.kt)("inlineCode",{parentName:"p"},"--log-level")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACE"),". Since the MAGE library is included\nin this image, you can use the available graph algorithms."),(0,r.kt)("h2",{id:"docker-compose-for-memgraph-image"},"Docker Compose for Memgraph image"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Memgraph")," image contains ",(0,r.kt)("strong",{parentName:"p"},"MemgraphDB")," - the database that holds your\ndata."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  memgraph:\n    image: "memgraph/memgraph"\n    ports:\n      - "7687:7687"\n      - "7444:7444"\n    volumes:\n      - mg_lib:/var/lib/memgraph\n      - mg_log:/var/log/memgraph\n      - mg_etc:/etc/memgraph\n    entrypoint: ["/usr/lib/memgraph/memgraph", "--log-level=TRACE"]\nvolumes:\n  mg_lib:\n  mg_log:\n  mg_etc:\n')),(0,r.kt)("p",null,"The port ",(0,r.kt)("inlineCode",{parentName:"p"},"7687")," is used for communication with Memgraph via Bolt protocol, while\nthe port ",(0,r.kt)("inlineCode",{parentName:"p"},"7444")," is there so that you can see logs from Memgraph inside the\nMemgraph Lab application. We specified three useful volumes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mg_lib")," - directory containing data that enables data persistency"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mg_log")," - directory containing log files"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mg_etc")," - directory containing the configuration file")),(0,r.kt)("p",null,"The exact location of the local directories depends on your specific setup."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Configuration settings")," can be changed by\nadding the ",(0,r.kt)("inlineCode",{parentName:"p"},"entrypoint"),". You first need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/memgraph")," and\nthen the configuration setting you'd like to change. In the above example, you\ncan see how to set ",(0,r.kt)("inlineCode",{parentName:"p"},"--log-level")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"TRACE"),". Since this image doesn't have the\nMAGE library included, you won't be able to use graph algorithms."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Want to see applications built with Memgraph and Docker Compose? Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph"},"Memgraph's Github")," repositories.")))}c.isMDXComponent=!0}}]);