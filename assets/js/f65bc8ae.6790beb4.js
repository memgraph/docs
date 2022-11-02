"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(r),p=n,h=c["".concat(s,".").concat(p)]||c[p]||u[p]||o;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},40202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},l=void 0,i={unversionedId:"under-the-hood/telemetry",id:"version-2.2.0/under-the-hood/telemetry",title:"Telemetry",description:"Introduction",source:"@site/memgraph_versioned_docs/version-2.2.0/under-the-hood/telemetry.md",sourceDirName:"under-the-hood",slug:"/under-the-hood/telemetry",permalink:"/docs/memgraph/2.2.0/under-the-hood/telemetry",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/under-the-hood/telemetry.md",tags:[],version:"2.2.0",frontMatter:{id:"telemetry",title:"Telemetry",sidebar_label:"Telemetry"},sidebar:"memgraph",previous:{title:"Replication",permalink:"/docs/memgraph/2.2.0/under-the-hood/replication"},next:{title:"Changelog",permalink:"/docs/memgraph/2.2.0/changelog"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"What kind of data is collected?",id:"what-kind-of-data-is-collected",level:2},{value:"Why do we collect this data?",id:"why-do-we-collect-this-data",level:2},{value:"How to disable telemetry?",id:"how-to-disable-telemetry",level:2},{value:"Additional remarks",id:"additional-remarks",level:2}],m={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Telemetry is an automated process that collects data at a remote point. We at Memgraph use telemetry data for the soul purpose of improving our products by focusing on areas that we believe are important to users. Telemetry is ",(0,n.kt)("strong",{parentName:"p"},"completely optional")," and can be ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"#how-to-disable-telemetry"},"fully disabled"))," before starting the database."),(0,n.kt)("h2",{id:"what-kind-of-data-is-collected"},"What kind of data is collected?"),(0,n.kt)("p",null,"While a Memgraph database instance is running and an open internet connection is available, the following data will be sent to and stored on our servers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Information about the host machine"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CPU model"),(0,n.kt)("li",{parentName:"ul"},"Memory information"),(0,n.kt)("li",{parentName:"ul"},"Host OS"),(0,n.kt)("li",{parentName:"ul"},"Kernel information"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database runtime information"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CPU usage"),(0,n.kt)("li",{parentName:"ul"},"Memory usage"),(0,n.kt)("li",{parentName:"ul"},"The number of vertices and edges stored in the database"),(0,n.kt)("li",{parentName:"ul"},"Event counters (for example, number of failed queries or ScanAll operator calls)"),(0,n.kt)("li",{parentName:"ul"},"Query module calls*")))),(0,n.kt)("p",null,"*",(0,n.kt)("strong",{parentName:"p"},"Only the names")," of the query module and procedure are recorded."),(0,n.kt)("p",null,"No personal information is sent in the process of collecting telemetry data. Each database generates a unique identifier by which we can group data coming from the same database instance. This unique identifier is in no way connected to other personal information about the user."),(0,n.kt)("h2",{id:"why-do-we-collect-this-data"},"Why do we collect this data?"),(0,n.kt)("p",null,"Telemetry data is used by Memgraph's developers for the purpose of developing new functionalities and the general maintenance of our products. By analyzing the host machine environment and runtime information, we can further optimize our products to better suit specific user needs."),(0,n.kt)("p",null,"For example, if there is a considerable number of users who regularly call NetworkX query modules, we would invest more resources in the development of similar new features and extending the support for implemented ones."),(0,n.kt)("p",null,"As is often the case, we need to prioritize certain goals over others. A data-driven understanding of product usage will help us prioritize features that are more likely to benefit a larger subset of our users."),(0,n.kt)("h2",{id:"how-to-disable-telemetry"},"How to disable telemetry?"),(0,n.kt)("p",null,"Telemetry is ",(0,n.kt)("strong",{parentName:"p"},"completely optional")," and can be fully disabled when starting the database. There are two ways to disable Memgraph's telemetry features:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In ",(0,n.kt)("inlineCode",{parentName:"li"},"/etc/memgraph/memgraph.conf")," change the line ",(0,n.kt)("inlineCode",{parentName:"li"},"--telemetry-enabled=true")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"--telemetry-enabled=false")),(0,n.kt)("li",{parentName:"ul"},"Include ",(0,n.kt)("inlineCode",{parentName:"li"},"--telemetry-enabled=false")," as a command-line argument when starting the database")),(0,n.kt)("h2",{id:"additional-remarks"},"Additional remarks"),(0,n.kt)("p",null,"We fully understand the need for user privacy which is why we made the telemetry feature completely optional and provided this article to cultivate transparent communication with the developer community. Your feedback is very much appreciated, and telemetry data is only a way of receiving such feedback.\nIf you wish to get in touch with us, you can always send us an email to ",(0,n.kt)("a",{parentName:"p",href:"mailto:tech@memgraph.com"},"tech@memgraph.com")," or leave a post on our ",(0,n.kt)("a",{parentName:"p",href:"https://discourse.memgraph.com/"},"Forum"),"."))}u.isMDXComponent=!0}}]);