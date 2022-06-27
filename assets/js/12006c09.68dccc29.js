"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26307],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,d=g["".concat(l,".").concat(u)]||g[u]||s[u]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44256:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],m={id:"docker",title:"Docker",sidebar_label:"Docker"},l=void 0,p={unversionedId:"reference-guide/deployment/docker",id:"version-2.3.0/reference-guide/deployment/docker",title:"Docker",description:"If you define an application with Docker Compose, you can use that",source:"@site/memgraph_versioned_docs/version-2.3.0/reference-guide/deployment/docker.md",sourceDirName:"reference-guide/deployment",slug:"/reference-guide/deployment/docker",permalink:"/docs/memgraph/2.3.0/reference-guide/deployment/docker",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/reference-guide/deployment/docker.md",tags:[],version:"2.3.0",frontMatter:{id:"docker",title:"Docker",sidebar_label:"Docker"},sidebar:"memgraph",previous:{title:"Data types",permalink:"/docs/memgraph/2.3.0/reference-guide/data-types"},next:{title:"Import data overview",permalink:"/docs/memgraph/2.3.0/reference-guide/import-data/overview"}},c={},s=[{value:"Docker Compose for Memgraph Platform image",id:"docker-compose-for-memgraph-platform-image",level:2},{value:"Docker Compose for Memgraph MAGE image",id:"docker-compose-for-memgraph-mage-image",level:2},{value:"Docker Compose for Memgraph image",id:"docker-compose-for-memgraph-image",level:2}],g={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you define an application with ",(0,o.kt)("strong",{parentName:"p"},"Docker Compose"),", you can use that\ndefinition to run the application in CI, staging, or production environments.\nHere you can find ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," files necessary to run ",(0,o.kt)("a",{parentName:"p",href:"#docker-compose-for-memgraph-platform-image"},(0,o.kt)("strong",{parentName:"a"},"Memgraph\nPlatform")),", ",(0,o.kt)("a",{parentName:"p",href:"#docker-compose-for-memgraph-mage-image"},(0,o.kt)("strong",{parentName:"a"},"Memgraph\nMAGE"))," and\n",(0,o.kt)("a",{parentName:"p",href:"#docker-compose-for-memgraph-image"},(0,o.kt)("strong",{parentName:"a"},"Memgraph"))," images."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.0/how-to-guides/work-with-docker"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How-to"}))),(0,o.kt)("h2",{id:"docker-compose-for-memgraph-platform-image"},"Docker Compose for Memgraph Platform image"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Platform")," image contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MemgraphDB")," - the database that holds your data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memgraph Lab")," - visual user interface for running queries and visualizing\ngraph data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"mgconsole")," - command-line interface for running queries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  memgraph-platform:\n    image: "memgraph/memgraph-platform"\n    ports:\n      - "7687:7687"\n      - "3000:3000"\n      - "7444:7444"\n    volumes:\n      - mg_lib:/var/lib/memgraph\n      - mg_log:/var/log/memgraph\n      - mg_etc:/etc/memgraph\n    environment:\n      - MEMGRAPH="--log-level=TRACE"\n    entrypoint: ["/usr/bin/supervisord"]\nvolumes:\n  mg_lib:\n  mg_log:\n  mg_etc:\n')),(0,o.kt)("p",null,"The port ",(0,o.kt)("inlineCode",{parentName:"p"},"7687")," is used for communication with Memgraph via Bolt protocol. The\nport ",(0,o.kt)("inlineCode",{parentName:"p"},"3000")," is exposed because Memgraph Lab will be running on ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000"),",\nwhile the port ",(0,o.kt)("inlineCode",{parentName:"p"},"7444")," is there so that you can see logs from Memgraph inside\nMemgraph Lab. We specified three useful volumes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg_lib")," - directory containing data that enables data persistency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg_log")," - directory containing log files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg_etc")," - directory containing the configuration file")),(0,o.kt)("p",null,"The exact location of the local directories depends on your specific setup."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.0/reference-guide/configuration"},"Configuration settings")," can be changed by\nsetting the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"MEMGRAPH")," environment variable. In the above example,\nyou can see how to set ",(0,o.kt)("inlineCode",{parentName:"p"},"--log-level")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"TRACE"),". Since Memgraph Platform is not\na single service, the process manager\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/multi-service_container/"},(0,o.kt)("inlineCode",{parentName:"a"},"supervisord")),"\nis used as the main running process in the ",(0,o.kt)("inlineCode",{parentName:"p"},"entrypoint"),". The MAGE library is\nincluded in this image, so you can use the available graph algorithms."),(0,o.kt)("h2",{id:"docker-compose-for-memgraph-mage-image"},"Docker Compose for Memgraph MAGE image"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Memgraph MAGE")," image contains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MemgraphDB")," - the database that holds your data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MAGE")," - graph algorithms and modules library")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  memgraph-mage:\n    image: "memgraph/memgraph-mage"\n    volumes:\n      - mg_lib:/var/lib/memgraph\n      - mg_log:/var/log/memgraph\n      - mg_etc:/etc/memgraph\n    ports:\n      - "7687:7687"\n      - "7444:7444"\n    entrypoint: ["/usr/lib/memgraph/memgraph", "--log-level=TRACE"]\nvolumes:\n  mg_lib:\n  mg_log:\n  mg_etc:\n')),(0,o.kt)("p",null,"The port ",(0,o.kt)("inlineCode",{parentName:"p"},"7687")," is used for communication with Memgraph via Bolt protocol, while\nthe port ",(0,o.kt)("inlineCode",{parentName:"p"},"7444")," is there so that you can see logs from Memgraph inside the\nMemgraph Lab application. We specified three useful volumes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg_lib")," - directory containing data that enables data persistency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg_log")," - directory containing log files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg_etc")," - directory containing the configuration file")),(0,o.kt)("p",null,"The exact location of the local directories depends on your specific setup."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.0/reference-guide/configuration"},"Configuration settings")," can be changed by\nadding the ",(0,o.kt)("inlineCode",{parentName:"p"},"entrypoint"),". You first need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/memgraph")," and\nthen the configuration setting you'd like to change. In the above example, you\ncan see how to set ",(0,o.kt)("inlineCode",{parentName:"p"},"--log-level")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"TRACE"),". Since the MAGE library is included\nin this image, you can use the available graph algorithms."),(0,o.kt)("h2",{id:"docker-compose-for-memgraph-image"},"Docker Compose for Memgraph image"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Memgraph")," image contains ",(0,o.kt)("strong",{parentName:"p"},"MemgraphDB")," - the database that holds your\ndata."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  memgraph:\n    image: "memgraph/memgraph"\n    ports:\n      - "7687:7687"\n      - "7444:7444"\n    volumes:\n      - mg_lib:/var/lib/memgraph\n      - mg_log:/var/log/memgraph\n      - mg_etc:/etc/memgraph\n    entrypoint: ["/usr/lib/memgraph/memgraph", "--log-level=TRACE"]\nvolumes:\n  mg_lib:\n  mg_log:\n  mg_etc:\n')),(0,o.kt)("p",null,"The port ",(0,o.kt)("inlineCode",{parentName:"p"},"7687")," is used for communication with Memgraph via Bolt protocol, while\nthe port ",(0,o.kt)("inlineCode",{parentName:"p"},"7444")," is there so that you can see logs from Memgraph inside the\nMemgraph Lab application. We specified three useful volumes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg_lib")," - directory containing data that enables data persistency"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg_log")," - directory containing log files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mg_etc")," - directory containing the configuration file")),(0,o.kt)("p",null,"The exact location of the local directories depends on your specific setup."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.0/reference-guide/configuration"},"Configuration settings")," can be changed by\nadding the ",(0,o.kt)("inlineCode",{parentName:"p"},"entrypoint"),". You first need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/memgraph")," and\nthen the configuration setting you'd like to change. In the above example, you\ncan see how to set ",(0,o.kt)("inlineCode",{parentName:"p"},"--log-level")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"TRACE"),". Since this image doesn't have the\nMAGE library included, you won't be able to use graph algorithms."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Want to see applications built with Memgraph and Docker Compose? Check out\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph"},"Memgraph's Github")," repositories.")))}u.isMDXComponent=!0}}]);