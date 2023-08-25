"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"overview",title:"How-to guides overview",sidebar_label:"How-to guides overview",slug:"/how-to-guides"},i=void 0,s={unversionedId:"how-to-guides/overview",id:"version-2.10.0/how-to-guides/overview",title:"How-to guides overview",description:"How-to guides within this section serve as a cookbook for getting things done as",source:"@site/memgraph_versioned_docs/version-2.10.0/how-to-guides/overview.md",sourceDirName:"how-to-guides",slug:"/how-to-guides",permalink:"/docs/memgraph/2.10.0/how-to-guides",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/how-to-guides/overview.md",tags:[],version:"2.10.0",frontMatter:{id:"overview",title:"How-to guides overview",sidebar_label:"How-to guides overview",slug:"/how-to-guides"},sidebar:"memgraph",previous:{title:"Graph stream processing with Kafka",permalink:"/docs/memgraph/2.10.0/tutorials/graph-stream-processing-with-kafka"},next:{title:"Backup and restore data",permalink:"/docs/memgraph/2.10.0/how-to-guides/create-backup"}},l={},u=[{value:"Backup",id:"backup",level:2},{value:"Change configuration and access logs",id:"change-configuration-and-access-logs",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Inspect and profile Cypher queries",id:"inspect-and-profile-cypher-queries",level:2},{value:"Manage Python environment",id:"manage-python-environment",level:2},{value:"Replication",id:"replication",level:2},{value:"Set up triggers",id:"set-up-triggers",level:2},{value:"Use Font Awesome icons for node images",id:"use-font-awesome-icons-for-node-images",level:2},{value:"Query modules",id:"query-modules",level:2},{value:"SSL encryption",id:"ssl-encryption",level:2},{value:"Utilize the NetworkX library",id:"utilize-the-networkx-library",level:2},{value:"Work with Docker",id:"work-with-docker",level:2},{value:"Working with indexes",id:"working-with-indexes",level:2},{value:"Authentication and authorization",id:"authentication-and-authorization",level:2},{value:"User privileges",id:"user-privileges",level:2},{value:"Label-based access control",id:"label-based-access-control",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How-to guides within this section serve as a cookbook for getting things done as\nfast as possible. These guides tend to provide a step-by-step guide on using\ncertain Memgraph features or solving a particular problem."),(0,o.kt)("h2",{id:"backup"},"Backup"),(0,o.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup\nof the files containing its data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/create-backup"},"How to create a backup?"))),(0,o.kt)("h2",{id:"change-configuration-and-access-logs"},"Change configuration and access logs"),(0,o.kt)("p",null,"Take a look how to change configuration settings and access log files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/config-logs"},"Change configuration and access logs"))),(0,o.kt)("h2",{id:"constraints"},"Constraints"),(0,o.kt)("p",null," Memgraph has two types of constraints. Take a look how to enforce them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/constraints/existence-constraint"},"Existence constraint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/constraints/uniqueness-constraint"},"Uniqueness constraint"))),(0,o.kt)("h2",{id:"inspect-and-profile-cypher-queries"},"Inspect and profile Cypher queries"),(0,o.kt)("p",null,"Memgraph also enables you to inspect and profile the execution of a query and\nget a detailed report on how the query's plan behaved. Take a look at the\nguides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/reference-guide/inspecting-queries"},"Inspecting\nqueries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/reference-guide/profiling-queries"},"Profiling queries"))),(0,o.kt)("h2",{id:"manage-python-environment"},"Manage Python environment"),(0,o.kt)("p",null,"Check out how to update Memgraph's Python environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[Manage Python environment]",")(/how-to-guides/managing-python-environment.md)")),(0,o.kt)("h2",{id:"replication"},"Replication"),(0,o.kt)("p",null,"Memgraph supports replication and the following guide demonstrates how to create\na simple cluster of nodes running Memgraph instances:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/replication"},"Replication"))),(0,o.kt)("h2",{id:"set-up-triggers"},"Set up triggers"),(0,o.kt)("p",null,"Memgraph supports database triggers that can be executed if a particular type of event occurs. Events are related to changes in the data, such as created, updated, and deleted nodes or relationships."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/set-up-triggers"},"How to setup triggers"))),(0,o.kt)("h2",{id:"use-font-awesome-icons-for-node-images"},"Use Font Awesome icons for node images"),(0,o.kt)("p",null,"Font Awesome is a popular icon library. You can't\nuse those icons directly or SVG file as background images. Tak a look at workaround for this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/font-awesome-for-node-images"},"Use Font Awesome icons for node images"))),(0,o.kt)("h2",{id:"query-modules"},"Query modules"),(0,o.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on\nstartup or later on. To learn more about query modules take a look at the\nfollowing guides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/query-modules"},"Query modules"))),(0,o.kt)("h2",{id:"ssl-encryption"},"SSL encryption"),(0,o.kt)("p",null,"Memgraph uses SSL (Secure Sockets Layer) protocol for establishing an\nauthenticated and encrypted connection to a database instance. Find out how to\nset it up:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/encryption"},"SSL encryption"))),(0,o.kt)("h2",{id:"utilize-the-networkx-library"},"Utilize the NetworkX library"),(0,o.kt)("p",null,"Memgraph currently provides three query modules\nthat utilize the NetworkX library. Take a look how to use the NetworkX library with Memgraph:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/networkx"},"Utilize the NetworkX library"))),(0,o.kt)("h2",{id:"work-with-docker"},"Work with Docker"),(0,o.kt)("p",null,"If you are new to Docker, this how-to guide will help you get a grasp of Docker and\nmake it easier to accomplish tasks within Memgraph:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/work-with-docker"},"Work with Docker"))),(0,o.kt)("h2",{id:"working-with-indexes"},"Working with indexes"),(0,o.kt)("p",null,"A database index is a data structure used to improve the speed of data retrieval\nwithin a database. Take a look how to enable them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/indexes"},"Working with indexes"))),(0,o.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,o.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a\ncustom-built external auth module. To learn more visit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/manage-users-using-ldap"},"Authentication and authorization\n(Enterprise)"))),(0,o.kt)("h2",{id:"user-privileges"},"User privileges"),(0,o.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set\nof privileges to users or groups of users. To learn more visit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/manage-user-privileges"},"User privileges (Enterprise)"))),(0,o.kt)("h2",{id:"label-based-access-control"},"Label-based access control"),(0,o.kt)("p",null,"In its enterprise edition, Memgraph enables granting and denying permissions to\nusers for viewing and manipulating certain nodes and relationships."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.10.0/how-to-guides/manage-label-based-access-control"},"Label-based access control (Enterprise)"))))}c.isMDXComponent=!0}}]);