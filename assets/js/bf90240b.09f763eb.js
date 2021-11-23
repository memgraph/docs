"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43838],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66340:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"metadata",title:"Metadata",sidebar_label:"Metadata"},s=void 0,d={unversionedId:"reference-guide/metadata",id:"reference-guide/metadata",isDocsHomePage:!1,title:"Metadata",description:"Bolt protocol specifies additional data that can be sent along with the",source:"@site/docs/reference-guide/metadata.md",sourceDirName:"reference-guide",slug:"/reference-guide/metadata",permalink:"/docs/memgraph/next/reference-guide/metadata",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/metadata.md",tags:[],version:"current",frontMatter:{id:"metadata",title:"Metadata",sidebar_label:"Metadata"},sidebar:"memgraph",previous:{title:"Isolation levels",permalink:"/docs/memgraph/next/reference-guide/isolation-levels"},next:{title:"Query modules overview",permalink:"/docs/memgraph/next/reference-guide/query-modules"}},p=[{value:"Query Statistics",id:"query-statistics",children:[],level:2},{value:"Notifications",id:"notifications",children:[{value:"Severity",id:"severity",children:[],level:3},{value:"Code",id:"code",children:[],level:3}],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bolt protocol specifies additional data that can be sent along with the\nrequested results. Such data is called metadata and can be divided into two\ngroups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Query Statistics"),(0,i.kt)("li",{parentName:"ul"},"Notifications")),(0,i.kt)("p",null,"Both of these metadata can be accessed through ",(0,i.kt)("inlineCode",{parentName:"p"},"summary")," map that is being sent\nalong with the results of the query. Query statistics will be under ",(0,i.kt)("inlineCode",{parentName:"p"},"stats")," key,\nand notifications under ",(0,i.kt)("inlineCode",{parentName:"p"},"notifications")," key."),(0,i.kt)("h2",{id:"query-statistics"},"Query Statistics"),(0,i.kt)("p",null,"Query statistics will be sent whenever a user executes a query that will affect\ndata in any way. In other words we will track the quantity of these changes\nthroughout the query execution and report it back to the user."),(0,i.kt)("p",null,"The structure of statistics is a map of string keys and integer values. Data\nthat is being tracked:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodes-created")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodes-deleted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"relationships-created")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"relationships-deleted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"labels-added")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"labels-removed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"properties-set"))),(0,i.kt)("p",null,"This data will refer only to the changes done by the query, thus changes made in\ntriggers will not affect these values."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Differences compared to triggers")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is possible that after executing a query some of these counters are not\nzero, however the regarding triggers are not triggered. The reason for that is\ntriggers are only  triggered when there is a difference between the starting\nand ending state, while the counters are also counting the not permanent\nchanges."),(0,i.kt)("p",{parentName:"div"},"For example if the query creates and deletes nodes like\n",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE (n) DELETE n;"),", then it leaves Memgraph in the same state as before.\nThe value will be 1 for both ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes-created")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes-deleted"),", but the\ntriggers will not be triggered since there is no difference between in\nstates before and after the query is executed."))),(0,i.kt)("h2",{id:"notifications"},"Notifications"),(0,i.kt)("p",null,"Notifications will be sent whether we want to confirm the results of query or\nwant to notify the user about possible wrong usage. Every notification is\nrepresented as a dictionary with these possible values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Key"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Value Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"severity"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"code"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"title"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"description"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String")))),(0,i.kt)("p",null,"In order to enable users to handle these notifications however they see fit, we\nwill introduce possible values for severity and code notifications attributes.\nTitle and description values will depend on query and the query values and\nshould be used only as messages."),(0,i.kt)("h3",{id:"severity"},"Severity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INFO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WARNING"))),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateConstraint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateIndex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateStream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CheckStream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CreateTrigger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DropConstraint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DropReplica")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DropIndex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DropStream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DropTrigger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConstraintAlreadyExists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IndexAlreadyExists")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LoadCSVTip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IndexDoesNotExist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ConstraintDoesNotExist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RegisterReplica")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ReplicaPortWarning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SetReplica")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StartStream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StartAllStreams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StopStream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StopAllStreams"))))}c.isMDXComponent=!0}}]);