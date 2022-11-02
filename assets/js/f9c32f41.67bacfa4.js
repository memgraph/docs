"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return n?o.createElement(b,a(a({ref:t},l),{},{components:n})):o.createElement(b,a({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const c={id:"websocket",title:"Connecting with WebSocket",sidebar_label:"WebSocket"},a=void 0,i={unversionedId:"connect-to-memgraph/websocket",id:"version-2.4.0/connect-to-memgraph/websocket",title:"Connecting with WebSocket",description:"It is also possible to send queries and receive results via WebSocket",source:"@site/memgraph_versioned_docs/version-2.4.0/connect-to-memgraph/websocket.md",sourceDirName:"connect-to-memgraph",slug:"/connect-to-memgraph/websocket",permalink:"/docs/memgraph/2.4.0/connect-to-memgraph/websocket",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.0/connect-to-memgraph/websocket.md",tags:[],version:"2.4.0",frontMatter:{id:"websocket",title:"Connecting with WebSocket",sidebar_label:"WebSocket"},sidebar:"memgraph",previous:{title:"PHP",permalink:"/docs/memgraph/2.4.0/connect-to-memgraph/drivers/php"},next:{title:"Import data overview",permalink:"/docs/memgraph/2.4.0/import-data"}},s={},p=[{value:"How to set up a WebSocket connection?",id:"how-to-set-up-a-websocket-connection",level:2},{value:"WebSocket clients",id:"websocket-clients",level:2},{value:"Secure Sockets Layer (SSL)",id:"secure-sockets-layer-ssl",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is also possible to send queries and receive results via ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket"),"\nconnection."),(0,r.kt)("h2",{id:"how-to-set-up-a-websocket-connection"},"How to set up a WebSocket connection?"),(0,r.kt)("p",null,"First, you need to start Memgraph. You can check out\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/installation"},"installation")," pages to help you get started."),(0,r.kt)("p",null,"You don't need to set up anything to start using a WebSocket connection, the\nonly thing you need is a client that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket")," to connect to Memgraph,\nand Memgraph will automatically recognize the nature of the connection. The port\nyou will be connected to remains the same."),(0,r.kt)("p",null,"In other words, you should use Memgraph's address and the port number defined by\nthe configuration flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--bolt-port")," to connect to Memgraph (",(0,r.kt)("inlineCode",{parentName:"p"},"7687")," by default)."),(0,r.kt)("h2",{id:"websocket-clients"},"WebSocket clients"),(0,r.kt)("p",null,"To connect to memgraph via WebSocket you can use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/connect-to-memgraph/drivers/javascript"},"JavaScript\nclient"),"."),(0,r.kt)("h2",{id:"secure-sockets-layer-ssl"},"Secure Sockets Layer (SSL)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket")," over ",(0,r.kt)("inlineCode",{parentName:"p"},"SSL")," is currently not supported in Memgraph."))}u.isMDXComponent=!0}}]);