"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[44444],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,g=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={id:"overview",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},o=void 0,s={unversionedId:"reference-guide/overview",id:"version-2.6.0/reference-guide/overview",title:"Reference guide overview",description:"The Memgraph reference guide contains the details of implemented features.",source:"@site/memgraph_versioned_docs/version-2.6.0/reference-guide/overview.md",sourceDirName:"reference-guide",slug:"/reference-guide",permalink:"/docs/memgraph/reference-guide",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.6.0/reference-guide/overview.md",tags:[],version:"2.6.0",frontMatter:{id:"overview",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},sidebar:"memgraph",previous:{title:"Manage label-based access control",permalink:"/docs/memgraph/how-to-guides/manage-label-based-access-control"},next:{title:"Built-in graph algorithms",permalink:"/docs/memgraph/reference-guide/built-in-graph-algorithms"}},l={},u=[{value:"Built-in graph algorithms",id:"built-in-graph-algorithms",level:2},{value:"Configuration settings",id:"configuration-settings",level:2},{value:"Data durability and backup",id:"data-durability-and-backup",level:2},{value:"Data types",id:"data-types",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Indexing",id:"indexing",level:2},{value:"Inspecting and optimizing queries",id:"inspecting-and-optimizing-queries",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Monitoring server",id:"monitoring-server",level:2},{value:"Query modules",id:"query-modules",level:2},{value:"Replication",id:"replication",level:2},{value:"Server stats",id:"server-stats",level:2},{value:"Streams",id:"streams",level:2},{value:"Transactions",id:"transactions",level:2},{value:"Triggers",id:"triggers",level:2},{value:"Enterprise features",id:"enterprise-features",level:2},{value:"Audit log",id:"audit-log",level:3},{value:"Authentication and authorization",id:"authentication-and-authorization",level:3},{value:"Runtime settings",id:"runtime-settings",level:3},{value:"Security - user privileges",id:"security---user-privileges",level:3}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Memgraph")," reference guide contains the details of implemented features."),(0,n.kt)("h2",{id:"built-in-graph-algorithms"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/built-in-graph-algorithms"},"Built-in graph algorithms")),(0,n.kt)("p",null,"Memgraph comes with custom-built algorithms that are implemented using C++:\n",(0,n.kt)("strong",{parentName:"p"},"Depth-first search"),", ",(0,n.kt)("strong",{parentName:"p"},"Breadth-first search"),", ",(0,n.kt)("strong",{parentName:"p"},"Weighted\nshortest path"),", ",(0,n.kt)("strong",{parentName:"p"},"All shortest paths"),"."),(0,n.kt)("h2",{id:"configuration-settings"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/configuration"},"Configuration settings")),(0,n.kt)("p",null,"Memgraph can be configured by editing the Memgraph configuration file or by\nincluding another configuration file."),(0,n.kt)("h2",{id:"data-durability-and-backup"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/backup"},"Data durability and backup")),(0,n.kt)("p",null,"Memgraph uses snapshots and WAL to ensure the durability of the stored data and\nit comes with a couple of queries that allow you to safely make a backup of\nthese files."),(0,n.kt)("h2",{id:"data-types"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/data-types"},"Data types")),(0,n.kt)("p",null,"Check what data types are supported by Memgraph. "),(0,n.kt)("h2",{id:"deployment"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/deployment/docker"},"Deployment")),(0,n.kt)("p",null,"Deploy your application with Memgraph as a part of your ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/deployment/docker"},"Docker Compose file"),"\nor use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/deployment/kubernetes"},"Helm Chart")," to make Memgraph part of your Kubernetes cluster."),(0,n.kt)("h2",{id:"indexing"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/indexing"},"Indexing")),(0,n.kt)("p",null,"An index stores additional information on certain types of data, so that\nretrieving said data becomes more efficient."),(0,n.kt)("h2",{id:"inspecting-and-optimizing-queries"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/inspecting-queries"},"Inspecting and optimizing queries")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/inspecting-queries"},"Inspect the plan"),"\nfor executing a query, a pipeline of operations which will be performed on the\ndatabase in order to yield the results for a given query, to gain insight into\nthe execution of a query or ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/profiling-queries"},"get a detailed\nreport")," on how the\nquery's plan behaved."),(0,n.kt)("h2",{id:"metadata"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/metadata"},"Metadata")),(0,n.kt)("p",null,"Bolt protocol specifies additional data (metadata) that can be sent along with\nthe requested results. Find out how to access it."),(0,n.kt)("h2",{id:"monitoring-server"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/monitoring-server"},"Monitoring server")),(0,n.kt)("p",null,"Receive logs and runtime information from Memgraph in real-time via WebSocket connection."),(0,n.kt)("h2",{id:"query-modules"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/query-modules"},"Query modules")),(0,n.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on\nstartup or later on. To learn more about query modules take a look at the\nfollowing guides:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/query-modules/available-query-modules"},"Available query\nmodules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example"},"Implement custom query\nmodules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/query-modules/load-call-query-modules"},"Load and call query\nmodules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/query-modules/module-file-utilities"},"Utility query\nmodule"))),(0,n.kt)("h2",{id:"replication"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/replication"},"Replication")),(0,n.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup\nof the files containing its data. Memgraph supports replication and allows you\nto create a cluster of nodes running Memgraph instances."),(0,n.kt)("h2",{id:"server-stats"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/server-stats"},"Server stats")),(0,n.kt)("p",null,"Get information about the running instance. "),(0,n.kt)("h2",{id:"streams"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/streams"},"Streams")),(0,n.kt)("p",null,"Memgraph can connect to existing ",(0,n.kt)("strong",{parentName:"p"},"Kafka"),", ",(0,n.kt)("strong",{parentName:"p"},"Pulsar")," and ",(0,n.kt)("strong",{parentName:"p"},"Redpanda")," streams.\nThe streams are using user-defined transformations to produce Cypher queries\nbased on the received messages. To learn more about streams and transformations\ntake a look at the following pages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/streams"},"Streams overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/streams/transformation-modules"},"Transformation\nmodules"))),(0,n.kt)("h2",{id:"transactions"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/transactions"},"Transactions")),(0,n.kt)("p",null,"All Cypher queries are run within transactions. Check how to create explicit\ntransaction to run multiple queries within one transaction, and isolation levels\navailable in Memgraph."),(0,n.kt)("h2",{id:"triggers"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/triggers"},"Triggers")),(0,n.kt)("p",null,"Memgraph enables running openCypher statements after a certain event happens\nduring transaction execution, i.e., triggers."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"enterprise-features"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/reference-guide/enabling-enterprise"},"Enterprise features")),(0,n.kt)("p",null,"Features available for the Enterprise edition of Memgraph."),(0,n.kt)("h3",{id:"audit-log"},(0,n.kt)("a",{parentName:"h3",href:"/docs/memgraph/reference-guide/audit-log"},"Audit log")),(0,n.kt)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains\nrecords of all queries executed on the database."),(0,n.kt)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,n.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a\ncustom-built external auth module. To learn more, visit:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/auth-module"},"Auth module"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/ldap-security"},"LDAP security")))),(0,n.kt)("h3",{id:"runtime-settings"},(0,n.kt)("a",{parentName:"h3",href:"/docs/memgraph/reference-guide/runtime-settings"},"Runtime settings")),(0,n.kt)("p",null,"Check the settings that can be modified during runtime. "),(0,n.kt)("h3",{id:"security---user-privileges"},(0,n.kt)("a",{parentName:"h3",href:"/docs/memgraph/reference-guide/security"},"Security - user privileges")),(0,n.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set\nof privileges to users or groups of users."))}d.isMDXComponent=!0}}]);