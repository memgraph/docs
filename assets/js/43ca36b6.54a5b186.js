"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=m(r),u=a,h=g["".concat(s,".").concat(u)]||g[u]||c[u]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},85422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={id:"overview",title:"Drivers overview",sidebar_label:"Drivers overview",slug:"/connect-to-memgraph/drivers"},i=void 0,p={unversionedId:"connect-to-memgraph/drivers/overview",id:"version-2.1.1/connect-to-memgraph/drivers/overview",title:"Drivers overview",description:"Quick start guides",source:"@site/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/overview.md",sourceDirName:"connect-to-memgraph/drivers",slug:"/connect-to-memgraph/drivers",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/connect-to-memgraph/drivers/overview.md",tags:[],version:"2.1.1",frontMatter:{id:"overview",title:"Drivers overview",sidebar_label:"Drivers overview",slug:"/connect-to-memgraph/drivers"},sidebar:"memgraph",previous:{title:"mgconsole",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/mgconsole"},next:{title:"Python",permalink:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/python"}},s={},m=[{value:"Quick start guides",id:"quick-start-guides",level:2},{value:"Supported Languages",id:"supported-languages",level:2},{value:"Secure Sockets Layer (SSL)",id:"secure-sockets-layer",level:2}],l={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"quick-start-guides"},"Quick start guides"),(0,a.kt)("p",null,"Find out how to create a simple ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Hello, World!"))," program that connects to\nMemgraph and executes simple queries:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/python"},"Python"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/rust"},"Rust"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/c-sharp"},"C#"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/java"},"Java"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/go"},"Go"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/nodejs"},"Node.js"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/javascript"},"JavaScript"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers/php"},"PHP")))),(0,a.kt)("h2",{id:"supported-languages"},"Supported Languages"),(0,a.kt)("p",null,"If you want to query Memgraph programmatically, you can do so using the ",(0,a.kt)("a",{parentName:"p",href:"https://7687.org/"},"Bolt\nprotocol"),". The Bolt protocol was designed for efficient\ncommunication with graph databases and ",(0,a.kt)("strong",{parentName:"p"},"Memgraph supports versions 1 and 4")," of\nthe protocol. Check out the Bolt protocol drivers for the following programming\nlanguages: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/pymgclient"},"Python"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/mgclient"},"C/C++"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/memgraph/rsmgclient"},"Rust"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-javascript-driver"},"Node.js"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-dotnet-driver"},"C#"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-go-driver"},"Go"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/zmactep/hasbolt"},"Haskell"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-java-driver"},"Java"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/neo4j/neo4j-javascript-driver"},"JavaScript"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/neo4j-php/Bolt"},"PHP"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/neo4jrb/neo4j"},"Ruby")))),(0,a.kt)("h2",{id:"secure-sockets-layer"},"Secure Sockets Layer (SSL)"),(0,a.kt)("p",null,"Secure connections are supported and disabled by default. The server initially\nships with a self-signed testing certificate. The certificate can be replaced by\nediting the following parameters in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"--bolt-cert-file=/path/to/ssl/certificate.pem\n--bolt-key-file=/path/to/ssl/privatekey.pem\n")),(0,a.kt)("p",null,"To disable SSL support and use insecure connections to the database you should\nset both parameters (",(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-cert-file")," and ",(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"p"},"--bolt-key-file"),") to empty values."))}c.isMDXComponent=!0}}]);