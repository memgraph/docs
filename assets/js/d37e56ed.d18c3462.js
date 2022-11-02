"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={id:"replication",title:"Replication",sidebar_label:"Replication"},r=void 0,l={unversionedId:"concepts/replication",id:"version-2.1.0/concepts/replication",title:"Replication",description:"High-level context",source:"@site/memgraph_versioned_docs/version-2.1.0/concepts/replication.md",sourceDirName:"concepts",slug:"/concepts/replication",permalink:"/docs/memgraph/2.1.0/concepts/replication",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/concepts/replication.md",tags:[],version:"2.1.0",frontMatter:{id:"replication",title:"Replication",sidebar_label:"Replication"},sidebar:"version-2.1.0/memgraph",previous:{title:"Indexing",permalink:"/docs/memgraph/2.1.0/concepts/indexing"},next:{title:"Telemetry",permalink:"/docs/memgraph/2.1.0/concepts/telemetry"}},s={},c=[{value:"High-level context",id:"high-level-context",level:2},{value:"Synchronous replication",id:"synchronous-replication",level:3},{value:"Asynchronous replication",id:"asynchronous-replication",level:3},{value:"Semi-synchronous replication",id:"semi-synchronous-replication",level:3},{value:"Addition of a new replica",id:"addition-of-a-new-replica",level:3}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"high-level-context"},"High-level context"),(0,i.kt)("p",null,"Replication is a method that ensures that multiple database instances are\nstoring the same data. To enable replication, there must be at least two\ninstances of Memgraph in a cluster. Each instance has one of either two roles:\nmain or replica. The main instance is the instance that accepts writes to the\ndatabase and replicates its state to the replicas. In a cluster, there can only\nbe one main. There can be one or more replicas. None of the replicas will accept\nwrite queries, but they will always accept read queries (there is an exception\nto this rule and is described below). Each instance will always be reachable\nusing the standard supported communication protocols. The replication will\nreplicate WAL data. All data is transported through a custom binary protocol\nthat will try remain backward compatible, so that replication immediately allows\nfor zero downtime upgrades."),(0,i.kt)("p",null,"Each replica can be configured to accept replicated data in one of the following\nmodes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"synchronous"),(0,i.kt)("li",{parentName:"ul"},"asynchronous"),(0,i.kt)("li",{parentName:"ul"},"semi-synchronous")),(0,i.kt)("h3",{id:"synchronous-replication"},"Synchronous replication"),(0,i.kt)("p",null,"When the data is replicated to a replica synchronously, all of the data of a\ncurrently pending transaction must be sent to the synchronous replica before the\ntransaction is able to commit its changes."),(0,i.kt)("p",null,"This mode has a positive implication that all data that is committed to the\nmain will always be replicated to the synchronous replica. It also has a\nnegative performance implication because non-responsive replicas could grind all\nquery execution to a halt."),(0,i.kt)("p",null,"This mode is good when you absolutely need to be sure that all data is always\nconsistent between the main and the replica."),(0,i.kt)("h3",{id:"asynchronous-replication"},"Asynchronous replication"),(0,i.kt)("p",null,"When the data is replicated to a replica asynchronously, all pending\ntransactions are immediately committed and their data is replicated to the\nasynchronous replica in the background."),(0,i.kt)("p",null,"This mode has a positive performance implication in which it won't slow down\nquery execution. It also has a negative implication that the data between the\nmain and the replica is almost never in a consistent state (when the data is\nbeing changed)."),(0,i.kt)("p",null,"This mode is good when you don't care about consistency and only need an\neventually consistent cluster, but you care about performance."),(0,i.kt)("h3",{id:"semi-synchronous-replication"},"Semi-synchronous replication"),(0,i.kt)("p",null,"When the data is replicated to a replica semi-synchronously, the data is\nreplicated using both the synchronous and asynchronous methodology. The data is\nalways replicated synchronously, but, if the replica for any reason doesn't\nrespond within a preset timeout, the pending transaction is committed and the\ndata is replicated to the replica asynchronously."),(0,i.kt)("p",null,"This mode has a positive implication that all data that is committed is\n",(0,i.kt)("em",{parentName:"p"},"mostly")," replicated to the semi-synchronous replica. It also has a negative\nperformance implication as the synchronous replication mode."),(0,i.kt)("p",null,"This mode is useful when you want the replication to be synchronous to ensure\nthat the data within the cluster is consistent, but you don't want the main\nto grind to a halt when you have a non-responsive replica."),(0,i.kt)("h3",{id:"addition-of-a-new-replica"},"Addition of a new replica"),(0,i.kt)("p",null,"Each replica, when added to the cluster (in any mode), will first start out as\nan asynchronous replica. That will allow replicas that have fallen behind to\nfirst catch-up to the current state of the database. When the replica is in a\nstate that it isn't lagging behind the main it will then be promoted to a\nsemi-synchronous or synchronous replica. Replicas that are added as asynchronous\nreplicas will remain asynchronous."))}h.isMDXComponent=!0}}]);