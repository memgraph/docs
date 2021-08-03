"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51119],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=i,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33262:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={id:"database-functionalities",title:"Database functionalities overview",sidebar_label:"Database functionalities overview",slug:"/database-functionalities"},u=void 0,s={unversionedId:"database-functionalities/database-functionalities",id:"version-1.4.0/database-functionalities/database-functionalities",isDocsHomePage:!1,title:"Database functionalities overview",description:"Articles within this section serve as a cookbook for getting",source:"@site/memgraph_versioned_docs/version-1.4.0/database-functionalities/database-functionalities.md",sourceDirName:"database-functionalities",slug:"/database-functionalities",permalink:"/memgraph/1.4.0/database-functionalities",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/database-functionalities/database-functionalities.md",version:"1.4.0",frontMatter:{id:"database-functionalities",title:"Database functionalities overview",sidebar_label:"Database functionalities overview",slug:"/database-functionalities"},sidebar:"version-1.4.0/memgraph",previous:{title:"Understanding music (with query modules)",permalink:"/memgraph/1.4.0/tutorials/understanding-music-with-modules"},next:{title:"Import data",permalink:"/memgraph/1.4.0/database-functionalities/import-data"}},p=[{value:"Import data",id:"import-data",children:[]},{value:"Query modules",id:"query-modules",children:[]},{value:"Inspect and profile Cypher queries",id:"inspect-and-profile-cypher-queries",children:[]},{value:"Machine learning",id:"machine-learning",children:[]},{value:"Replication",id:"replication",children:[]},{value:"Backup",id:"backup",children:[]},{value:"User privileges",id:"user-privileges",children:[]},{value:"Authentication and authorization",id:"authentication-and-authorization",children:[]}],c={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Articles within this section serve as a cookbook for getting\nthings done as fast as possible. These articles tend to provide a step-by-step\nguide on how to use certain Memgraph features or solve a particular problem."),(0,r.kt)("h2",{id:"import-data"},"Import data"),(0,r.kt)("p",null,"Data can be imported from CSV files using the CSV Import Tool or by using Cypher queries.\nTo learn more visit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/import-data"},"Import data"))),(0,r.kt)("h2",{id:"query-modules"},"Query modules"),(0,r.kt)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded either on startup or later on.\nTo learn more about query modules take a look at the following guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/query-modules/built-in-query-modules"},"Built-in query modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/query-modules/load-call-query-modules"},"Load and call query modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"))),(0,r.kt)("h2",{id:"inspect-and-profile-cypher-queries"},"Inspect and profile Cypher queries"),(0,r.kt)("p",null,"Memgraph also enables you to inspect and profile the execution of a query and get a detailed report\non how the query's plan behaved. Take a look at the guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/inspecting-queries"},"Inspecting queries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/profiling-queries"},"Profiling queries"))),(0,r.kt)("h2",{id:"machine-learning"},"Machine learning"),(0,r.kt)("p",null,"Memgraph TensorFlow op wraps the high-performance Memgraph client for use with TensorFlow,\nallowing natural data transfer between Memgraph and TensorFlow at any point of the model.\nIf you are interested in using Memgraph for machine learning purposes  take a look at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/tensorflow-setup"},"TensorFlow op Setup")," ")),(0,r.kt)("h2",{id:"replication"},"Replication"),(0,r.kt)("p",null,"Memgraph supports replication and the following guide demonstrates how to create a simple cluster of nodes running\nMemgraph instances: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/replication"},"Replication"))),(0,r.kt)("h2",{id:"backup"},"Backup"),(0,r.kt)("p",null,"Memgraph comes with a couple of queries that allow you to safely make a backup of the files containing its data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/reference-guide/backup"},"Backup"))),(0,r.kt)("h2",{id:"user-privileges"},"User privileges"),(0,r.kt)("p",null,"Memgraph comes with the option of granting, denying, or revoking a certain set of privileges to users or groups of users.\nTo learn more visit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/manage-user-privileges"},"User privileges (Enterprise)"))),(0,r.kt)("h2",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,r.kt)("p",null,"Memgraph supports authentication and (optional) authorization using a custom-built external auth module.\nTo learn more visit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memgraph/1.4.0/database-functionalities/manage-users-using-ldap"},"Authentication and authorization (Enterprise)"))))}m.isMDXComponent=!0}}]);