"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98140],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>g});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),u=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),g=n,c=d["".concat(s,".").concat(g)]||d[g]||m[g]||i;return t?a.createElement(c,o(o({ref:r},p),{},{components:t})):a.createElement(c,o({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79235:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(87462),n=(t(67294),t(3905));const i={id:"overview",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},o=void 0,l={unversionedId:"reference-guide/overview",id:"version-2.2.0/reference-guide/overview",title:"Reference guide overview",description:"The Memgraph reference guide contains the details of implemented features.",source:"@site/memgraph_versioned_docs/version-2.2.0/reference-guide/overview.md",sourceDirName:"reference-guide",slug:"/reference-guide",permalink:"/docs/memgraph/2.2.0/reference-guide",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/reference-guide/overview.md",tags:[],version:"2.2.0",frontMatter:{id:"overview",title:"Reference guide overview",sidebar_label:"Reference guide overview",slug:"/reference-guide"},sidebar:"memgraph",previous:{title:"Manage user privileges",permalink:"/docs/memgraph/2.2.0/how-to-guides/manage-user-privileges"},next:{title:"Backup",permalink:"/docs/memgraph/2.2.0/reference-guide/backup"}},s={},u=[{value:"Backup",id:"backup",level:2},{value:"Built-in graph algorithms",id:"built-in-graph-algorithms",level:2},{value:"Configuration settings",id:"configuration-settings",level:2},{value:"Cypher query language",id:"cypher-query-language",level:2},{value:"Import data",id:"import-data",level:2},{value:"Indexing",id:"indexing",level:2},{value:"Inspecting and optimizing queries",id:"inspecting-and-optimizing-queries",level:2},{value:"Isolation levels",id:"isolation-levels",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Monitoring server",id:"monitoring-server",level:2},{value:"Query modules",id:"query-modules",level:2},{value:"Replication",id:"replication",level:2},{value:"Server stats",id:"server-stats",level:2},{value:"Streams",id:"streams",level:2},{value:"Temporal types",id:"temporal-types",level:2},{value:"Triggers",id:"triggers",level:2},{value:"Enterprise features",id:"enterprise-features",level:2},{value:"Audit log",id:"audit-log",level:3},{value:"Authentication and authorization",id:"authentication-and-authorization",level:3},{value:"Runtime settings",id:"runtime-settings",level:3},{value:"Security - user privileges",id:"security---user-privileges",level:3}],p={toc:u};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Memgraph")," reference guide contains the details of implemented features."),(0,n.kt)("h2",{id:"backup"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/backup"},"Backup")),(0,n.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup\nof the files containing its data."),(0,n.kt)("h2",{id:"built-in-graph-algorithms"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/graph-algorithms"},"Built-in graph algorithms")),(0,n.kt)("p",null,"Memgraph comes with custom-built algorithms that are implemented using C++:\n",(0,n.kt)("strong",{parentName:"p"},"Filtering variable-length paths"),", ",(0,n.kt)("strong",{parentName:"p"},"Breadth-first search"),", and ",(0,n.kt)("strong",{parentName:"p"},"Weighted\nshortest path"),"."),(0,n.kt)("h2",{id:"configuration-settings"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/configuration"},"Configuration settings")),(0,n.kt)("p",null,"Memgraph can be configured by editing the Memgraph configuration file or by\nincluding another configuration file."),(0,n.kt)("h2",{id:"cypher-query-language"},(0,n.kt)("a",{parentName:"h2",href:"/cypher-manual"},"Cypher query language")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cypher")," is a declarative graph query language that allows for expressive and\nefficient data querying in a property graph. It aims to be intuitive and easy to\nlearn while providing a powerful interface for working with graph-based data."),(0,n.kt)("h2",{id:"import-data"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/import-data/overview"},"Import data")),(0,n.kt)("p",null,"Memgraph offers painless import of data from CSV files or Cypher queries within\na .cypherl format file."),(0,n.kt)("h2",{id:"indexing"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/indexing"},"Indexing")),(0,n.kt)("p",null,"An index stores additional information on certain types of data, so that\nretrieving said data becomes more efficient."),(0,n.kt)("h2",{id:"inspecting-and-optimizing-queries"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/inspecting-queries"},"Inspecting and optimizing queries")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/reference-guide/inspecting-queries"},"Inspect the plan"),"\nfor executing a query, a pipeline of operations which will be performed on the\ndatabase in order to yield the results for a given query, to gain insight into\nthe execution of a query or ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/reference-guide/profiling-queries"},"get a detailed\nreport")," on how the\nquery's plan behaved."),(0,n.kt)("h2",{id:"isolation-levels"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/isolation-levels"},"Isolation levels")),(0,n.kt)("p",null,"Isolation is a property that defines how or when the changes made by one\noperation become visible to other users or systems. Check available options for\nMemgraph."),(0,n.kt)("h2",{id:"metadata"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/metadata"},"Metadata")),(0,n.kt)("p",null,"Bolt protocol specifies additional data (metadata) that can be sent along with\nthe requested results. Find out how to access it."),(0,n.kt)("h2",{id:"monitoring-server"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/monitoring-server"},"Monitoring server")),(0,n.kt)("p",null,"Receive logs and runtime information from Memgraph in real-time via WebSocket connection."),(0,n.kt)("h2",{id:"query-modules"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/query-modules"},"Query modules")),(0,n.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on\nstartup or later on. To learn more about query modules take a look at the\nfollowing guides:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.0/reference-guide/query-modules/available-query-modules"},"Available query\nmodules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.0/reference-guide/query-modules/load-call-query-modules"},"Load and call query\nmodules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.0/how-to-guides/query-modules/implement-query-modules"},"Implement custom query\nmodules"))),(0,n.kt)("h2",{id:"replication"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/replication"},"Replication")),(0,n.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup\nof the files containing its data. Memgraph supports replication and allows you\nto create a cluster of nodes running Memgraph instances."),(0,n.kt)("h2",{id:"server-stats"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/server-stats"},"Server stats")),(0,n.kt)("p",null,"Get information about the running instance. "),(0,n.kt)("h2",{id:"streams"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/streams"},"Streams")),(0,n.kt)("p",null,"Memgraph can connect to existing ",(0,n.kt)("strong",{parentName:"p"},"Kafka"),", ",(0,n.kt)("strong",{parentName:"p"},"Pulsar")," and ",(0,n.kt)("strong",{parentName:"p"},"Redpanda")," streams.\nThe streams are using user-defined transformations to produce Cypher queries\nbased on the received messages. To learn more about streams and transformations\ntake a look at the following pages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.0/reference-guide/streams"},"Streams overview")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.0/reference-guide/streams/transformation-modules"},"Transformation\nmodules"))),(0,n.kt)("h2",{id:"temporal-types"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/temporal-types"},"Temporal types")),(0,n.kt)("p",null,"Temporal data types store and manipulate time. To learn more, take a look at the\noverview page:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.0/reference-guide/temporal-types"},"Temporal types"))),(0,n.kt)("h2",{id:"triggers"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/triggers"},"Triggers")),(0,n.kt)("p",null,"Memgraph enables running openCypher statements after a certain event happens\nduring transaction execution, i.e., triggers."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"enterprise-features"},(0,n.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.2.0/reference-guide/enabling-enterprise"},"Enterprise features")),(0,n.kt)("p",null,"Features available for the Enterprise edition of Memgraph."),(0,n.kt)("h3",{id:"audit-log"},(0,n.kt)("a",{parentName:"h3",href:"/docs/memgraph/2.2.0/reference-guide/audit-log"},"Audit log")),(0,n.kt)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains\nrecords of all queries executed on the database."),(0,n.kt)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,n.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a\ncustom-built external auth module. To learn more, visit:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.0/reference-guide/auth-module"},"Auth module"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.0/reference-guide/ldap-security"},"LDAP security")))),(0,n.kt)("h3",{id:"runtime-settings"},(0,n.kt)("a",{parentName:"h3",href:"/docs/memgraph/2.2.0/reference-guide/runtime-settings"},"Runtime settings")),(0,n.kt)("p",null,"Check the settings that can be modified during runtime. "),(0,n.kt)("h3",{id:"security---user-privileges"},(0,n.kt)("a",{parentName:"h3",href:"/docs/memgraph/2.2.0/reference-guide/security"},"Security - user privileges")),(0,n.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set\nof privileges to users or groups of users."))}m.isMDXComponent=!0}}]);