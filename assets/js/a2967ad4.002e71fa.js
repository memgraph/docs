"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33066],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7501:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"overview",title:"Database functionalities overview",sidebar_label:"Database functionalities overview",slug:"/database-functionalities"},s=void 0,u={unversionedId:"database-functionalities/overview",id:"version-2.0.1/database-functionalities/overview",isDocsHomePage:!1,title:"Database functionalities overview",description:"Articles within this section serve as a cookbook for getting",source:"@site/memgraph_versioned_docs/version-2.0.1/database-functionalities/overview.md",sourceDirName:"database-functionalities",slug:"/database-functionalities",permalink:"/docs/memgraph/2.0.1/database-functionalities",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.1/database-functionalities/overview.md",tags:[],version:"2.0.1",frontMatter:{id:"overview",title:"Database functionalities overview",sidebar_label:"Database functionalities overview",slug:"/database-functionalities"},sidebar:"version-2.0.1/memgraph",previous:{title:"Understanding music (with query modules)",permalink:"/docs/memgraph/2.0.1/tutorials/understanding-music-with-modules"},next:{title:"Backup",permalink:"/docs/memgraph/2.0.1/reference-guide/backup"}},p=[{value:"Inspect and profile Cypher queries",id:"inspect-and-profile-cypher-queries",children:[],level:2},{value:"Machine learning",id:"machine-learning",children:[],level:2},{value:"Query modules",id:"query-modules",children:[],level:2},{value:"Replication",id:"replication",children:[],level:2},{value:"Backup",id:"backup",children:[],level:2},{value:"User privileges",id:"user-privileges",children:[],level:2},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[],level:2},{value:"Triggers",id:"triggers",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Articles within this section serve as a cookbook for getting\nthings done as fast as possible. These articles tend to provide a step-by-step\nguide on how to use certain Memgraph features or solve a particular problem."),(0,i.kt)("h2",{id:"inspect-and-profile-cypher-queries"},"Inspect and profile Cypher queries"),(0,i.kt)("p",null,"Memgraph also enables you to inspect and profile the execution of a query and get a detailed report\non how the query's plan behaved. Take a look at the guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/database-functionalities/inspecting-queries"},"Inspecting queries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/database-functionalities/profiling-queries"},"Profiling queries"))),(0,i.kt)("h2",{id:"machine-learning"},"Machine learning"),(0,i.kt)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow,\nallowing natural data transfer between Memgraph and TensorFlow at any point of the model.\nIf you are interested in using Memgraph for machine learning purposes  take a look at:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/database-functionalities/tensorflow-setup"},"TensorFlow op Setup"))),(0,i.kt)("h2",{id:"query-modules"},(0,i.kt)("a",{parentName:"h2",href:"/docs/memgraph/2.0.1/reference-guide/query-modules"},"Query modules")),(0,i.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on startup or later on.\nTo learn more about query modules take a look at the following guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/database-functionalities/query-modules"},"Query modules basics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"))),(0,i.kt)("h2",{id:"replication"},"Replication"),(0,i.kt)("p",null,"Memgraph supports replication and the following guide demonstrates how to create a simple cluster of nodes running\nMemgraph instances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/database-functionalities/replication"},"Replication"))),(0,i.kt)("h2",{id:"backup"},"Backup"),(0,i.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/reference-guide/backup"},"Backup"))),(0,i.kt)("h2",{id:"user-privileges"},"User privileges"),(0,i.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users.\nTo learn more visit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/database-functionalities/manage-user-privileges"},"User privileges (Enterprise)"))),(0,i.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,i.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a custom-built external auth module.\nTo learn more visit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/database-functionalities/manage-users-using-ldap"},"Authentication and authorization (Enterprise)"))),(0,i.kt)("h2",{id:"triggers"},"Triggers"),(0,i.kt)("p",null,"Memgraph supports running openCypher statements after a certain event happens\nduring transaction execution, i.e. triggers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/2.0.1/database-functionalities/triggers"},"Triggers"))))}d.isMDXComponent=!0}}]);