"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90345],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75397:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"storage-modes",title:"Storage modes",sidebar_label:"Storage modes"},s=void 0,i={unversionedId:"reference-guide/storage-modes",id:"version-2.7.0/reference-guide/storage-modes",title:"Storage modes",description:"Memgraph supports two different storage modes:",source:"@site/memgraph_versioned_docs/version-2.7.0/reference-guide/storage-modes.md",sourceDirName:"reference-guide",slug:"/reference-guide/storage-modes",permalink:"/docs/memgraph/2.7.0/reference-guide/storage-modes",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.7.0/reference-guide/storage-modes.md",tags:[],version:"2.7.0",frontMatter:{id:"storage-modes",title:"Storage modes",sidebar_label:"Storage modes"},sidebar:"memgraph",previous:{title:"Server stats",permalink:"/docs/memgraph/2.7.0/reference-guide/server-stats"},next:{title:"Streams overview",permalink:"/docs/memgraph/2.7.0/reference-guide/streams"}},l={},p=[{value:"Transactional storage mode (default)",id:"transactional-storage-mode-default",level:2},{value:"Analytical storage mode",id:"analytical-storage-mode",level:2},{value:"Transactions",id:"transactions",level:3},{value:"WAL",id:"wal",level:3},{value:"Snapshots",id:"snapshots",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memgraph supports two different storage modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IN_MEMORY_TRANSACTIONAL")," - the default database mode that favors\nstrongly-consistent ACID transactions using WAL files and snapshots,\nbut requires more time and resources during data import and analysis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IN_MEMORY_ANALYTICAL")," - speeds up import and data analysis but offers no ACID\nguarantees besides manually created snapshots.")),(0,r.kt)("p",null,"You can switch between modes within the session using the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"STORAGE MODE IN_MEMORY_{TRANSACTIONAL|ANALYTICAL};\n")),(0,r.kt)("p",null,"When switching modes, Memgraph will wait until all other transactions are done. If some other transactions are running in your system, you will receive a warning message, so be sure to ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.7.0/reference-guide/configuration#other"},"set the log level to ",(0,r.kt)("inlineCode",{parentName:"a"},"WARNING")),"."),(0,r.kt)("p",null,"If you are running the Memgraph Enterprise Edition, to change the storage mode\nyou to have ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.7.0/reference-guide/auth-module"},(0,r.kt)("inlineCode",{parentName:"a"},"STORAGE_MODE")," permission"),"."),(0,r.kt)("h2",{id:"transactional-storage-mode-default"},"Transactional storage mode (default)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL")," storage mode offers all ACID guarantees. WAL files and\nperiodic snapshots are created automatically, and you can also create snapshots\nmanually. "),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL")," mode, Memgraph creates a\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph/under-the-hood/storage#delta-memory-layout"},(0,r.kt)("inlineCode",{parentName:"a"},"Delta"))," object each time\ndata is changed. Deltas are the backbone upon which Memgraph provides atomicity,\nconsistency, isolation, and durability - ACID. By using ",(0,r.kt)("inlineCode",{parentName:"p"},"Deltas"),", Memgraph\ncreates ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/backup#write-ahead-logging"},"write-ahead-logs"),"\nfor durability, provides isolation, consistency, and atomicity (by ensuring that\neverything is executed or nothing). "),(0,r.kt)("p",null,"Depending on the transaction ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/transactions#isolation-levels"},"isolation\nlevel"),", other transactions may\nsee changes from other transactions."),(0,r.kt)("p",null,"In the transactional storage mode,\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/backup#snapshots"},"snapshots")," are created periodically\nor manually. They capture the database state and store it on the disk. A\nsnapshot is used to recover the database upon startup (depending on the setting\nof the configuration flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--storage-recover-on-startup"),", which defaults to\n",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,r.kt)("p",null,"When Memgraph starts creating a periodic snapshot, it is not possible to\nmanually create a snapshot, until the periodic snapshot is created."),(0,r.kt)("p",null,"Manual snapshots are created by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE SNAPSHOT;")," query. "),(0,r.kt)("h2",{id:"analytical-storage-mode"},"Analytical storage mode"),(0,r.kt)("p",null,"In the transactional storage mode, Memgraph is fully ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.7.0/reference-guide/backup"},"ACID\ncompliant")," which could cause memory spikes during data\nimport because each time data is changed Memgraph creates\n",(0,r.kt)("a",{parentName:"p",href:"/memgraph/under-the-hood/storage#delta-memory-layout"},(0,r.kt)("inlineCode",{parentName:"a"},"Delta"))," objects to\nprovides atomicity, consistency, isolation, and durability "),(0,r.kt)("p",null,"But ",(0,r.kt)("inlineCode",{parentName:"p"},"Deltas")," also require a lot of memory (104B per change), especially when\nthere are a lot of changes  (for example, during import with the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOAD CSV"),"\nclause). By switching the storage mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," mode disables\nthe creation of ",(0,r.kt)("inlineCode",{parentName:"p"},"Deltas")," thus drastically speeding up import with lower memory\nconsumption - up to 6 times faster import with 6 times less memory consumption."),(0,r.kt)("p",null,"If you want to enable ACID compliance, you can switch back to\n",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL")," and continue with regular work on the database or you\ncan take advantage of the low memory costs of the analytical mode to run\nanalytical queries that will not change the data, but be aware that no backup is\ncreated automatically (you can create manual snapshots), and there are no ACID\nguarantees besides manually created snapshots. There are no ",(0,r.kt)("inlineCode",{parentName:"p"},"WAL")," files created\nnor periodic snapshots. Users ",(0,r.kt)("strong",{parentName:"p"},"can")," create a snapshot manually. "),(0,r.kt)("h3",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"In the analytical storage mode, there are no ACID guarantees and other\ntransactions can see the changes of ongoing transactions. Also, a ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/transactions#isolation-levels"},"transaction\ncan see the changes it is\ndoing"),". This means that\nthe transactions can be committed in random orders, and the updates to the data,\nin the end, might not be correct. "),(0,r.kt)("h3",{id:"wal"},"WAL"),(0,r.kt)("p",null,"As mentioned, no ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/backup#write-ahead-logging"},"write-ahead\nlogs")," are created in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," mode. When switching back to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL")," mode it is recommended to create a snapshot manually\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE SNAPSHOT;")," Cypher query. Once Memgraph switches to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL")," mode, for all new updates it will create a WAL if not\notherwise instructed by the config file."),(0,r.kt)("h3",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/backup#snapshots"},"Snapshots")," capture the database\nstate and store it on the disk. A snapshot is used to recover the database upon\nstartup (depending on the setting of the configuration flag\n",(0,r.kt)("inlineCode",{parentName:"p"},"--storage-recover-on-startup"),", which defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,r.kt)("p",null,"In Memgraph, snapshots are created periodically or manually. "),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," mode, periodic snapshots are ",(0,r.kt)("strong",{parentName:"p"},"disabled"),"."),(0,r.kt)("p",null,"Manual snapshots are created by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE SNAPSHOT;")," query. When the\nquery is run in the ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," mode, Memgraph guarantees that it\nwill be ",(0,r.kt)("strong",{parentName:"p"},"the only")," transaction present in the system, and all the other\ntransactions will wait until the snapshot is created to ensure its validity."))}c.isMDXComponent=!0}}]);