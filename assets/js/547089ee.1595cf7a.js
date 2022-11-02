"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"metadata",title:"Metadata",sidebar_label:"Metadata"},l=void 0,o={unversionedId:"reference-guide/metadata",id:"version-2.2.0/reference-guide/metadata",title:"Metadata",description:"Bolt protocol specifies additional data that can be sent along with the",source:"@site/memgraph_versioned_docs/version-2.2.0/reference-guide/metadata.md",sourceDirName:"reference-guide",slug:"/reference-guide/metadata",permalink:"/docs/memgraph/2.2.0/reference-guide/metadata",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/reference-guide/metadata.md",tags:[],version:"2.2.0",frontMatter:{id:"metadata",title:"Metadata",sidebar_label:"Metadata"},sidebar:"memgraph",previous:{title:"Isolation levels",permalink:"/docs/memgraph/2.2.0/reference-guide/isolation-levels"},next:{title:"Controlling memory usage",permalink:"/docs/memgraph/2.2.0/reference-guide/memory-control"}},s={},d=[{value:"Query Statistics",id:"query-statistics",level:2},{value:"Notifications",id:"notifications",level:2},{value:"Severity",id:"severity",level:3},{value:"Code",id:"code",level:3}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bolt protocol specifies additional data that can be sent along with the\nrequested results. Such data is called metadata and can be divided into two\ngroups:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Query Statistics"),(0,r.kt)("li",{parentName:"ul"},"Notifications")),(0,r.kt)("p",null,"Both of these metadata can be accessed through ",(0,r.kt)("inlineCode",{parentName:"p"},"summary")," map that is being sent\nalong with the results of the query. Query statistics will be under ",(0,r.kt)("inlineCode",{parentName:"p"},"stats")," key,\nand notifications under ",(0,r.kt)("inlineCode",{parentName:"p"},"notifications")," key."),(0,r.kt)("h2",{id:"query-statistics"},"Query Statistics"),(0,r.kt)("p",null,"Query statistics will be sent whenever a user executes a query that will affect\ndata in any way. In other words we will track the quantity of these changes\nthroughout the query execution and report it back to the user."),(0,r.kt)("p",null,"The structure of statistics is a map of string keys and integer values. Data\nthat is being tracked:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodes-created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nodes-deleted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"relationships-created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"relationships-deleted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"labels-added")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"labels-removed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"properties-set"))),(0,r.kt)("p",null,"This data will refer only to the changes done by the query, thus changes made in\ntriggers will not affect these values."),(0,r.kt)("admonition",{title:"Differences compared to triggers",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It is possible that after executing a query some of these counters are not\nzero, however the regarding triggers are not triggered. The reason for that is\ntriggers are only  triggered when there is a difference between the starting\nand ending state, while the counters are also counting the not permanent\nchanges."),(0,r.kt)("p",{parentName:"admonition"},"For example if the query creates and deletes nodes like\n",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE (n) DELETE n;"),", then it leaves Memgraph in the same state as before.\nThe value will be 1 for both ",(0,r.kt)("inlineCode",{parentName:"p"},"nodes-created")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nodes-deleted"),", but the\ntriggers will not be triggered since there is no difference between in\nstates before and after the query is executed.")),(0,r.kt)("h2",{id:"notifications"},"Notifications"),(0,r.kt)("p",null,"Notifications will be sent whether we want to confirm the results of query or\nwant to notify the user about possible wrong usage. Every notification is\nrepresented as a dictionary with these possible values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Value Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"severity"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"code"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"title"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"description"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String")))),(0,r.kt)("p",null,"In order to enable users to handle these notifications however they see fit, we\nwill introduce possible values for severity and code notifications attributes.\nTitle and description values will depend on query and the query values and\nshould be used only as messages."),(0,r.kt)("h3",{id:"severity"},"Severity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"INFO")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WARNING"))),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreateConstraint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreateIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreateStream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CheckStream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CreateTrigger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DropConstraint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DropReplica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DropIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DropStream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DropTrigger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConstraintAlreadyExists")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IndexAlreadyExists")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LoadCSVTip")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IndexDoesNotExist")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConstraintDoesNotExist")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RegisterReplica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReplicaPortWarning")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SetReplica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StartStream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StartAllStreams")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StopStream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StopAllStreams"))))}m.isMDXComponent=!0}}]);