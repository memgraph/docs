"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84954],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(g,o(o({ref:r},c),{},{components:t})):a.createElement(g,o({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59812:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],u={id:"overview",title:"Reference guide overview",sidebar_label:"Overview",slug:"/reference-guide"},l=void 0,s={unversionedId:"reference-guide/overview",id:"version-1.6.0/reference-guide/overview",isDocsHomePage:!1,title:"Reference guide overview",description:"The Memgraph reference guide contains the details of implemented features.",source:"@site/memgraph_versioned_docs/version-1.6.0/reference-guide/overview.md",sourceDirName:"reference-guide",slug:"/reference-guide",permalink:"/docs/memgraph/1.6.0/reference-guide",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.0/reference-guide/overview.md",tags:[],version:"1.6.0",frontMatter:{id:"overview",title:"Reference guide overview",sidebar_label:"Overview",slug:"/reference-guide"},sidebar:"version-1.6.0/memgraph",previous:{title:"User privileges (Enterprise)",permalink:"/docs/memgraph/1.6.0/database-functionalities/manage-user-privileges"},next:{title:"Backup",permalink:"/docs/memgraph/1.6.0/reference-guide/backup"}},c=[{value:"Backup",id:"backup",children:[]},{value:"Built-in graph algorithms",id:"built-in-graph-algorithms",children:[]},{value:"Configuration settings",id:"configuration-settings",children:[]},{value:"Cypher query language",id:"cypher-query-language",children:[]},{value:"Indexing",id:"indexing",children:[]},{value:"Machine learning",id:"machine-learning",children:[]},{value:"Query modules",id:"query-modules",children:[]},{value:"Replication",id:"replication",children:[]},{value:"Streams",id:"streams",children:[]},{value:"User privileges",id:"user-privileges",children:[]},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[]},{value:"Audit log",id:"audit-log",children:[]}],p={toc:c};function d(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Memgraph")," reference guide contains the details of implemented features."),(0,i.kt)("h2",{id:"backup"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/backup"},"Backup")),(0,i.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data."),(0,i.kt)("h2",{id:"built-in-graph-algorithms"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/graph-algorithms"},"Built-in graph algorithms")),(0,i.kt)("p",null,"Memgraph comes with custom-built algorithms that are implemented using C++: ",(0,i.kt)("strong",{parentName:"p"},"Filtering variable-length paths"),", ",(0,i.kt)("strong",{parentName:"p"},"Breadth-first search"),", and ",(0,i.kt)("strong",{parentName:"p"},"Weighted shortest path"),"."),(0,i.kt)("h2",{id:"configuration-settings"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/configuration"},"Configuration settings")),(0,i.kt)("p",null,"Memgraph can be configured by editing the Memgraph configuration file or by including another configuration file."),(0,i.kt)("h2",{id:"cypher-query-language"},(0,i.kt)("a",{parentName:"h2",href:"/cypher-manual"},"Cypher query language")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cypher")," is a declarative graph query language that allows for expressive and efficient data querying in a property graph. It aims to be intuitive and easy to learn while\nproviding a powerful interface for working with graph-based data."),(0,i.kt)("h2",{id:"indexing"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/indexing"},"Indexing")),(0,i.kt)("p",null,"An index stores additional information on certain types of data, so that retrieving said data becomes more efficient."),(0,i.kt)("h2",{id:"machine-learning"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/tensorflow"},"Machine learning")),(0,i.kt)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow,\nallowing natural data transfer between Memgraph and TensorFlow at any point of the model."),(0,i.kt)("h2",{id:"query-modules"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/query-modules"},"Query modules")),(0,i.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on startup or later on.\nTo learn more about query modules take a look at the following guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.0/reference-guide/query-modules/available-query-modules"},"Available query modules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.0/reference-guide/query-modules/load-call-query-modules"},"Load and call query modules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.0/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"))),(0,i.kt)("h2",{id:"replication"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/replication"},"Replication")),(0,i.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data.\nMemgraph supports replication and allows you to create a cluster of nodes running Memgraph instances."),(0,i.kt)("h2",{id:"streams"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/streams"},"Streams")),(0,i.kt)("p",null,"Memgraph can connect to existing Kafka streams. The streams are using user-defined transformations to produce Cypher queries based on the received messages.\nTo learn more about streams and transformations take a look at the following pages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.0/reference-guide/streams"},"Streams overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.0/reference-guide/streams/transformation-modules"},"Transformation modules"))),(0,i.kt)("h2",{id:"user-privileges"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/security"},"User privileges")),(0,i.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users."),(0,i.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,i.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a custom-built external auth module.\nTo learn more visit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.6.0/reference-guide/auth-module"},"Auth module"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.6.0/reference-guide/ldap-security"},"LDAP security")))),(0,i.kt)("h2",{id:"audit-log"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/1.6.0/reference-guide/audit-log"},"Audit log")),(0,i.kt)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains records of all queries executed on the database."))}d.isMDXComponent=!0}}]);