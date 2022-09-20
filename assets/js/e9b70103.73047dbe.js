"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39798],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return t?a.createElement(m,s(s({ref:n},p),{},{components:t})):a.createElement(m,s({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8631:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return h}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),s=["components"],o={id:"replication",title:"Replication",sidebar_label:"Replication"},l=void 0,c={unversionedId:"reference-guide/replication",id:"version-2.3.1/reference-guide/replication",title:"Replication",description:"[![Related - How",source:"@site/memgraph_versioned_docs/version-2.3.1/reference-guide/replication.md",sourceDirName:"reference-guide",slug:"/reference-guide/replication",permalink:"/docs/memgraph/2.3.1/reference-guide/replication",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/reference-guide/replication.md",tags:[],version:"2.3.1",frontMatter:{id:"replication",title:"Replication",sidebar_label:"Replication"},sidebar:"memgraph",previous:{title:"Utility query module",permalink:"/docs/memgraph/2.3.1/reference-guide/query-modules/module-file-utilities"},next:{title:"Runtime settings",permalink:"/docs/memgraph/2.3.1/reference-guide/runtime-settings"}},p={},h=[{value:"Data replication implementation basics",id:"data-replication-implementation-basics",level:2},{value:"Running multiple instances",id:"running-multiple-instances",level:2},{value:"Assigning roles",id:"assigning-roles",level:2},{value:"Assigning the REPLICA role",id:"assigning-the-replica-role",level:3},{value:"Assigning the MAIN role",id:"assigning-the-main-role",level:3},{value:"Checking the assigned role",id:"checking-the-assigned-role",level:3},{value:"Registering REPLICA instances",id:"registering-replica-instances",level:2},{value:"Listing all registered REPLICA instances",id:"listing-all-registered-replica-instances",level:3},{value:"Dropping a REPLICA instance",id:"dropping-a-replica-instance",level:3},{value:"MAIN and REPLICA synchronization",id:"main-and-replica-synchronization",level:2}],d={toc:h};function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/how-to-guides/replication"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How\nto"})),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/under-the-hood/replication"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge",alt:"Related - Under the\nHood"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/implementing-data-replication"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge",alt:"Related - Blog\nPost"}))),(0,r.kt)("p",null,"When distributing data across several instances, Memgraph uses replication to\nprovide a satisfying ratio of the following properties:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Consistency")," - every node has the same view of data at a given point in\ntime"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Availability")," - all clients can find a replica of the data, even in the\ncase of a partial node failure"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Partition tolerance")," - the system continues to work as expected despite a\npartial network failure")),(0,r.kt)("p",null,"In the replication process, the data is replicated from one storage (MAIN\ninstance) to another (REPLICA instances)."),(0,r.kt)("h2",{id:"data-replication-implementation-basics"},"Data replication implementation basics"),(0,r.kt)("p",null,"In Memgraph, all instances are MAIN upon starting. When creating a replication\ncluster, one instance has to be chosen as the MAIN instance. The rest of the\ninstances have to be demoted to REPLICA roles and have a port defined using a\nCypher query. REPLICA instances no longer accept write queries. In order to\nstart the replication, each REPLICA instance needs to be registered from the\nMAIN instance by setting ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/under-the-hood/replication#replication-modes"},"a replication\nmode")," (SYNC, SYNC WITH TIMEOUT,\nand ASYNC) and specifying the REPLICA instance's socket address."),(0,r.kt)("p",null,"The replication mode defines the terms by which the MAIN instance can commit the\nchanges to the database, thus modifying the system to prioritize either\nconsistency or availability:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SYNC")," - The MAIN instance will not commit a transaction until all REPLICA\ninstances running in the SYNC mode confirm they have received the same\ntransaction. SYNC mode prioritizes data consistency but has no tolerance for\nany network failures."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SYNC WITH TIMEOUT")," - The MAIN instance will not commit a transaction until\nall REPLICA instances confirm they have received the same transaction within a\nconfigured time interval. If the response from a REPLICA times out, the\nreplication mode of that instance will be changed to ASYNC. SYNC WITH TIMEOUT\nprioritizes data consistency until unexpected issues force the system to\nprioritize availability and partition tolerance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ASYNC")," - The MAIN instance will commit a transaction without receiving\nconfirmation from REPLICA instances that they have received the same\ntransaction. ASYNC mode ensures system availability and partition tolerance.")),(0,r.kt)("p",null,"Once the REPLICA instances are registered, data storage of the MAIN instance is\nreplicated and synchronized using transaction timestamps and durability files\n(snapshot files and WALs). Memgraph does not support replication of\nauthentication configurations, query and authentication modules, and audit logs."),(0,r.kt)("p",null,"By using the timestamp, the MAIN instance knows the current state of the\nREPLICA. If the REPLICA is not synchronized with the MAIN instance, the MAIN\ninstance sends the correct data for synchronization kept as deltas within WAL\nfiles. Deltas are the smallest possible updates of the database, but they carry\nenough information to synchronize the data on a REPLICA. Memgraph stores only\n",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," actions as deltas, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"REMOVE key:value ON node_id"),"."),(0,r.kt)("p",null,"If the REPLICA is so far behind the MAIN instance that the synchronization using\nWAL files and deltas within it is impossible, Memgraph will use snapshots to\nsynchronize the REPLICA to the state of the MAIN instance."),(0,r.kt)("h2",{id:"running-multiple-instances"},"Running multiple instances"),(0,r.kt)("p",null,"When running multiple instances, each on its own machine, run Memgraph as you\nusually would."),(0,r.kt)("p",null,"If you are exploring replication and running multiple instances on one machine,\nplease install Memgraph with Docker. If you are starting instances with defined\nvolume flags to enable:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"data persistency (",(0,r.kt)("inlineCode",{parentName:"li"},"-v mg_lib:/var/lib/memgraph"),"), "),(0,r.kt)("li",{parentName:"ul"},"access logs (",(0,r.kt)("inlineCode",{parentName:"li"},"-v mg_log:/var/log/memgraph"),") and "),(0,r.kt)("li",{parentName:"ul"},"configuration files (",(0,r.kt)("inlineCode",{parentName:"li"},"-v mg_etc:/etc/memgraph"),"),")),(0,r.kt)("p",null,"be sure to use a different volume name for each instance, for example,\n",(0,r.kt)("inlineCode",{parentName:"p"},"mg_lib1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mg_lib2"),", etc."),(0,r.kt)("h2",{id:"assigning-roles"},"Assigning roles"),(0,r.kt)("p",null,"Each Memgraph instance has the role of the MAIN instance when it is first\nstarted."),(0,r.kt)("h3",{id:"assigning-the-replica-role"},"Assigning the REPLICA role"),(0,r.kt)("p",null,"Once you decide what instance will be the MAIN instance, all the other instances\nthat will serve as REPLICA instances need to be demoted and have the port set\nusing the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"SET REPLICATION ROLE TO REPLICA WITH PORT <port_number>;\n")),(0,r.kt)("p",null,"If you set the port of each REPLICA instance to ",(0,r.kt)("inlineCode",{parentName:"p"},"10000"),", it will be easier to\nregister replicas later on because the query for registering replicas uses port\n10000 as the default one."),(0,r.kt)("p",null,"Otherwise, you can use any unassigned port between 1000 and 10000."),(0,r.kt)("h3",{id:"assigning-the-main-role"},"Assigning the MAIN role"),(0,r.kt)("p",null,"The replication cluster should only have one MAIN instance in order to avoid\nerrors in the replication system. If the original MAIN instance fails, you can\npromote a REPLICA instance to be the new MAIN instance by running the following\nquery:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"SET REPLICATION ROLE TO MAIN;\n")),(0,r.kt)("p",null,"If the original instance was still alive when you promoted a new MAIN, you need\nto resolve any conflicts and manage replication manually."),(0,r.kt)("p",null,"If you demote the new MAIN instance back to the REPLICA role, it will not\nretrieve its original function. You need to drop it from the MAIN and register\nit again."),(0,r.kt)("p",null,"If the crashed MAIN instance goes back online, it cannot reclaim its previous\nrole. It has to be demoted and become a REPLICA instance of the new MAIN\ninstance."),(0,r.kt)("h3",{id:"checking-the-assigned-role"},"Checking the assigned role"),(0,r.kt)("p",null,"To check the replication role of an instance, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"SHOW REPLICATION ROLE;\n")),(0,r.kt)("h2",{id:"registering-replica-instances"},"Registering REPLICA instances"),(0,r.kt)("p",null,"Once all the nodes in the cluster are assigned with appropriate roles, you can\nenable replication in the MAIN instance by registering REPLICA instances,\nsetting a replication mode (SYNC, SYNC WITH TIMEOUT, and ASYNC), and specifying\nthe REPLICA instance's socket address. Memgraph doesn't support chaining REPLICA\ninstances, that is, a REPLICA instance cannot be replicated on another REPLICA\ninstance."),(0,r.kt)("p",null,"If you want to register a REPLICA instance with a SYNC or SYNC WITH TIMEOUT\nreplication mode, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"REGISTER REPLICA name SYNC [WITH TIMEOUT 0.5] TO <socket_address>;\n")),(0,r.kt)("p",null,"If you want to register a REPLICA instance with an ASYNC replication mode, run\nthe following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"REGISTER REPLICA name ASYNC TO <socket_address>;\n")),(0,r.kt)("p",null,"The socket address must be a string value as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'"IP_ADDRESS:PORT_NUMBER"\n')),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"IP_ADDRESS")," is a valid IP address, and ",(0,r.kt)("inlineCode",{parentName:"p"},"PORT_NUMBER")," is a valid port\nnumber, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'"172.17.0.4:10050"\n')),(0,r.kt)("p",null,"The default value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PORT_NUMBER")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"10000"),", so if you set REPLICA roles\nusing that port, you can define the socket address specifying only the valid IP\naddress:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'"IP_ADDRESS"\n')),(0,r.kt)("p",null,"Example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"<socket_address>")," using only ",(0,r.kt)("inlineCode",{parentName:"p"},"IP_ADDRESS"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'"172.17.0.5"\n')),(0,r.kt)("p",null,"When a REPLICA instance is registered, it will start replication in ASYNC mode\nuntil it synchronizes to the current state of the database. Upon\nsynchronization, REPLICA instances will start replication in the replication\nmode set during registration."),(0,r.kt)("h3",{id:"listing-all-registered-replica-instances"},"Listing all registered REPLICA instances"),(0,r.kt)("p",null,"You can check all the registered REPLICA instances by running the following\nquery:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"SHOW REPLICAS;\n")),(0,r.kt)("h3",{id:"dropping-a-replica-instance"},"Dropping a REPLICA instance"),(0,r.kt)("p",null,"To drop a replica, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"DROP REPLICA <name>;\n")),(0,r.kt)("h2",{id:"main-and-replica-synchronization"},"MAIN and REPLICA synchronization"),(0,r.kt)("p",null,"By comparing timestamps, the MAIN instance knows when a REPLICA instance is not\nsynchronized and is missing some earlier transactions. The REPLICA instance is\nthen set into a RECOVERY state, where it remains until it is ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.3.1/under-the-hood/replication#synchronizing-instances"},"fully synchronized\nwith the MAIN instance"),"."),(0,r.kt)("p",null,"The missing data changes can be sent as snapshots or WAL files. Snapshot files\nrepresent an image of the current state of the database and are much larger than\nthe WAL files, which only contain the changes, deltas. Because of the difference\nin file size, Memgraph favors the WAL files."),(0,r.kt)("p",null,"While the REPLICA instance is in the RECOVERY state, the MAIN instance\ncalculates the optimal synchronization path based on the REPLICA instance's\ntimestamp and the current state of the durability files while keeping the\noverall size of the files necessary for synchronization to a minimum."))}u.isMDXComponent=!0}}]);