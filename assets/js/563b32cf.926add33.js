"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35072],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),h=n,g=s["".concat(u,".").concat(h)]||s[h]||d[h]||i;return a?r.createElement(g,l(l({ref:t},m),{},{components:a})):r.createElement(g,l({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},56152:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"overview",title:"Memgraph overview",sidebar_label:"Overview",slug:"/overview"},u=void 0,p={unversionedId:"overview",id:"version-1.5.0/overview",isDocsHomePage:!1,title:"Memgraph overview",description:"About Memgraph",source:"@site/memgraph_versioned_docs/version-1.5.0/overview.md",sourceDirName:".",slug:"/overview",permalink:"/memgraph/1.5.0/overview",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/overview.md",version:"1.5.0",frontMatter:{id:"overview",title:"Memgraph overview",sidebar_label:"Overview",slug:"/overview"},sidebar:"version-1.5.0/memgraph",next:{title:"Where to start?",permalink:"/memgraph/1.5.0/getting-started"}},m=[{value:"About Memgraph",id:"about-memgraph",children:[]},{value:"Resources",id:"resources",children:[{value:"Installation",id:"installation",children:[]},{value:"Querying the database",id:"querying-the-database",children:[]},{value:"Importing data",id:"importing-data",children:[]},{value:"Query modules",id:"query-modules",children:[]},{value:"Inspect and profile Cypher queries",id:"inspect-and-profile-cypher-queries",children:[]},{value:"NetworkX",id:"networkx",children:[]},{value:"Machine learning",id:"machine-learning",children:[]},{value:"Replication",id:"replication",children:[]},{value:"Backup",id:"backup",children:[]},{value:"User privileges",id:"user-privileges",children:[]},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[]},{value:"Audit log",id:"audit-log",children:[]}]}],d={toc:m};function s(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"about-memgraph"},"About Memgraph"),(0,i.kt)("p",null,"Memgraph is an ACID-compliant high performance transactional in-memory graph\ndatabase management system featuring highly concurrent data structures,\nmulti-version concurrency control, and asynchronous IO."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Supported feature"),(0,i.kt)("th",{parentName:"tr",align:null},"Community"),(0,i.kt)("th",{parentName:"tr",align:null},"Enterprise"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hybrid In","\u2011","Memory / On","\u2011","Disk Storage Engine"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ACID Transactions"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Optimized for Low Latency and High","\u2011","Throughput"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#replication"},"Replication")),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#query-modules"},"Support for Custom Query Modules (C and Python API)")),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#importing-data"},"CSV Import Tool")),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Development, Testing, and Evaluation Use"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#query-modules"},"Query Modules with Graph Algorithms")),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Production use"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#authentication-and-authorization"},"Authentication")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#user-privileges"},"Advanced Password Policies")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#user-privileges"},"Fine","\u2011","Grained Access Control")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#authentication-and-authorization"},"Auth Module")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#audit-log"},"Full Activity Auditing")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"+")))),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/getting-started/installation"},"Installation")," guide to find out more about the installation process."),(0,i.kt)("h3",{id:"querying-the-database"},"Querying the database"),(0,i.kt)("p",null,"Memgraph uses the openCypher query language. Learn how to query Memgraph:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"within the ",(0,i.kt)("strong",{parentName:"li"},"command-line")," by visiting the ",(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/getting-started/querying"},"Querying")," guide or"),(0,i.kt)("li",{parentName:"ul"},"visually by following the ",(0,i.kt)("a",{parentName:"li",href:"/memgraph-lab"},"Quick start: Memgraph Lab")," guide.")),(0,i.kt)("h3",{id:"importing-data"},"Importing data"),(0,i.kt)("p",null,"Data can be imported from CSV files using the CSV Import Tool or by using openCypher queries.\nTake a look at the ",(0,i.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/database-functionalities/import-data"},"Import data")," guide."),(0,i.kt)("h3",{id:"query-modules"},"Query modules"),(0,i.kt)("p",null,"Memgraph supports extending the query language with user-written procedures. These procedures are grouped into modules, which can then be loaded either on startup or later on.\nTo learn more about query modules take a look at the following guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/database-functionalities/query-modules/built-in-query-modules"},"Built-in query modules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/database-functionalities/query-modules/load-call-query-modules"},"Load and call query modules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"))),(0,i.kt)("h3",{id:"inspect-and-profile-cypher-queries"},"Inspect and profile Cypher queries"),(0,i.kt)("p",null,"Memgraph also enables you to inspect and profile the execution of a query and get a detailed report\non how the query's plan behaved. Take a look at the guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/database-functionalities/inspecting-queries"},"Inspecting queries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/database-functionalities/profiling-queries"},"Profiling queries"))),(0,i.kt)("h3",{id:"networkx"},"NetworkX"),(0,i.kt)("p",null,"Memgraph includes a set of Python query modules based on the ",(0,i.kt)("a",{parentName:"p",href:"https://networkx.github.io/"},"NetworkX")," library of algorithms.\nYou can find more information about all the available algorithms in the ",(0,i.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/reference-guide/networkx"},"NetworkX Reference guide"),"."),(0,i.kt)("h3",{id:"machine-learning"},"Machine learning"),(0,i.kt)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow,\nallowing natural data transfer between Memgraph and TensorFlow at any point of the model.\nIf you are interested in using Memgraph for machine learning purposes  take a look at:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/database-functionalities/tensorflow-setup"},"TensorFlow op setup")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/reference-guide/tensorflow"},"TensorFlow op reference"))),(0,i.kt)("h3",{id:"replication"},"Replication"),(0,i.kt)("p",null,"Memgraph supports replication and the following guide demonstrates how to create a simple cluster of nodes running\nMemgraph instances: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/database-functionalities/replication"},"Replication"))),(0,i.kt)("h3",{id:"backup"},"Backup"),(0,i.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/reference-guide/backup"},"Backup"))),(0,i.kt)("h3",{id:"user-privileges"},"User privileges"),(0,i.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users.\nTo learn more visit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/database-functionalities/manage-user-privileges"},"User privileges (Enterprise)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/reference-guide/security"},"Security (Enterprise)"))),(0,i.kt)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,i.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a custom-built external auth module.\nTo learn more visit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/database-functionalities/manage-users-using-ldap"},"Authentication and authorization (Enterprise)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/reference-guide/auth-module"},"Auth module (Enterprise)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/reference-guide/ldap-security"},"LDAP security (Enterprise)"))),(0,i.kt)("h3",{id:"audit-log"},"Audit log"),(0,i.kt)("p",null,"Memgraph supports all query audit logging. When enabled, the audit log contains records of all queries executed on the database."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/memgraph/1.5.0/reference-guide/audit-log"},"Audit log (Enterprise)"))))}s.isMDXComponent=!0}}]);