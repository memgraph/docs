"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),c=n,g=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={id:"overview",title:"How-to guides overview",sidebar_label:"How-to guides overview",slug:"/how-to-guides"},i=void 0,s={unversionedId:"how-to-guides/overview",id:"version-2.2.1/how-to-guides/overview",title:"How-to guides overview",description:"Articles within this section serve as a cookbook for getting things done as fast",source:"@site/memgraph_versioned_docs/version-2.2.1/how-to-guides/overview.md",sourceDirName:"how-to-guides",slug:"/how-to-guides",permalink:"/docs/memgraph/2.2.1/how-to-guides",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.1/how-to-guides/overview.md",tags:[],version:"2.2.1",frontMatter:{id:"overview",title:"How-to guides overview",sidebar_label:"How-to guides overview",slug:"/how-to-guides"},sidebar:"memgraph",previous:{title:"Understanding music (with query modules)",permalink:"/docs/memgraph/2.2.1/tutorials/understanding-music-with-modules"},next:{title:"Create a backup",permalink:"/docs/memgraph/2.2.1/how-to-guides/create-backup"}},l={},u=[{value:"Streams",id:"streams",level:2},{value:"Inspect and profile Cypher queries",id:"inspect-and-profile-cypher-queries",level:2},{value:"Query modules",id:"query-modules",level:2},{value:"Replication",id:"replication",level:2},{value:"Backup",id:"backup",level:2},{value:"User privileges",id:"user-privileges",level:2},{value:"Authentication and authorization",id:"authentication-and-authorization",level:2},{value:"Triggers",id:"triggers",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Articles within this section serve as a cookbook for getting things done as fast\nas possible. These articles tend to provide a step-by-step guide on using\ncertain Memgraph features or solving a particular problem."),(0,n.kt)("h2",{id:"streams"},"Streams"),(0,n.kt)("p",null,"Memgraph can connect to existing ",(0,n.kt)("strong",{parentName:"p"},"Kafka"),", ",(0,n.kt)("strong",{parentName:"p"},"Pulsar")," and ",(0,n.kt)("strong",{parentName:"p"},"Redpanda")," streams.\nThe streams use user-defined transformations to produce Cypher queries based on\nthe received messages. To learn more about streams and transformations take a\nlook at the following pages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kafka"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/how-to-guides/streams/kafka/kafka-streams"},"Managing Kafka streams")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/how-to-guides/streams/kafka/implement-transformation-module"},"Implement transformation\nmodules")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pulsar"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/how-to-guides/streams/pulsar/pulsar-streams"},"Managing Pulsar streams")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/how-to-guides/streams/pulsar/implement-transformation-module"},"Implement transformation\nmodules"))))),(0,n.kt)("h2",{id:"inspect-and-profile-cypher-queries"},"Inspect and profile Cypher queries"),(0,n.kt)("p",null,"Memgraph also enables you to inspect and profile the execution of a query and\nget a detailed report on how the query's plan behaved. Take a look at the\nguides:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/reference-guide/inspecting-queries"},"Inspecting\nqueries")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/reference-guide/profiling-queries"},"Profiling queries"))),(0,n.kt)("h2",{id:"query-modules"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.1/reference-guide/query-modules"},"Query modules")),(0,n.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on\nstartup or later on. To learn more about query modules take a look at the\nfollowing guides:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/how-to-guides/query-modules"},"Query modules"))),(0,n.kt)("h2",{id:"replication"},"Replication"),(0,n.kt)("p",null,"Memgraph supports replication and the following guide demonstrates how to create\na simple cluster of nodes running Memgraph instances:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/how-to-guides/replication"},"Replication"))),(0,n.kt)("h2",{id:"backup"},"Backup"),(0,n.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup\nof the files containing its data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/how-to-guides/create-backup"},"How to create a backup?"))),(0,n.kt)("h2",{id:"user-privileges"},"User privileges"),(0,n.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set\nof privileges to users or groups of users. To learn more visit:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/how-to-guides/manage-user-privileges"},"User privileges (Enterprise)"))),(0,n.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,n.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a\ncustom-built external auth module. To learn more visit:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/how-to-guides/manage-users-using-ldap"},"Authentication and authorization\n(Enterprise)"))),(0,n.kt)("h2",{id:"triggers"},"Triggers"),(0,n.kt)("p",null,"Memgraph supports running openCypher statements after a certain event happens\nduring transaction execution, i.e. triggers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.1/reference-guide/triggers"},"Triggers"))))}m.isMDXComponent=!0}}]);