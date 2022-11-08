"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||s;return n?i.createElement(u,o(o({ref:t},d),{},{components:n})):i.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const s={id:"replication",title:"Replication",sidebar_label:"Replication"},o=void 0,r={unversionedId:"under-the-hood/replication",id:"version-2.4.1/under-the-hood/replication",title:"Replication",description:"Uninterrupted data and operational availability in production systems are",source:"@site/memgraph_versioned_docs/version-2.4.1/under-the-hood/replication.md",sourceDirName:"under-the-hood",slug:"/under-the-hood/replication",permalink:"/docs/memgraph/2.4.1/under-the-hood/replication",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.1/under-the-hood/replication.md",tags:[],version:"2.4.1",frontMatter:{id:"replication",title:"Replication",sidebar_label:"Replication"},sidebar:"memgraph",previous:{title:"Indexing",permalink:"/docs/memgraph/2.4.1/under-the-hood/indexing"},next:{title:"Telemetry",permalink:"/docs/memgraph/2.4.1/under-the-hood/telemetry"}},l={},c=[{value:"Replication implementation in Memgraph",id:"replication-implementation-in-memgraph",level:2},{value:"Replication modes",id:"replication-modes",level:2},{value:"SYNC replication mode",id:"sync-replication-mode",level:3},{value:"SYNC REPLICA going down when creating index, uniqueness constraint or existence constraint",id:"sync-replica-going-down-when-creating-index-uniqueness-constraint-or-existence-constraint",level:4},{value:"SYNC REPLICA going down when dropping index, uniqueness constraint or existence constraint",id:"sync-replica-going-down-when-dropping-index-uniqueness-constraint-or-existence-constraint",level:4},{value:"SYNC REPLICA going down adding/updating/deleting data",id:"sync-replica-going-down-addingupdatingdeleting-data",level:4},{value:"ASYN replication mode",id:"asyn-replication-mode",level:3},{value:"Synchronizing instances",id:"synchronizing-instances",level:2},{value:"Locking durability files",id:"locking-durability-files",level:3},{value:"Writing and reading files simultaneously",id:"writing-and-reading-files-simultaneously",level:3},{value:"Fixing timestamp consistency",id:"fixing-timestamp-consistency",level:3},{value:"Incompatible instances",id:"incompatible-instances",level:3}],d={toc:c};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Uninterrupted data and operational availability in production systems are\ncritical and can be achieved in many ways. In Memgraph we opted for replication."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.1/how-to-guides/replication"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How\nto"})),"\n",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.1/reference-guide/replication"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference\nGuide"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/implementing-data-replication"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge",alt:"Related - Blog\nPost"}))),(0,a.kt)("p",null,"In distributed systems theory the CAP theorem, also named Brewer's theorem,\nstates that any distributed system can simultaneously guarantee two out of the\nthree properties:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Consistency")," - every node has the same view of data at a given point in\ntime"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Availability")," - all clients can find a replica of the data, even in the\ncase of a partial node failure"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Partition tolerance")," - the system continues to work as expected despite a\npartial network failure")),(0,a.kt)("img",{src:n(36674).Z,className:"imgBorder"}),(0,a.kt)("p",null,"Most of the Memgraph use-cases do not benefit from well-known algorithms that\nstrive to achieve all three CAP properties, such as Raft, because due to their\ncomplexity they produce performance issues. Memgraph use-cases are based on\nrunning analytical graph workloads on real-time data, demanding a simpler\nconcept such as ",(0,a.kt)("strong",{parentName:"p"},"replication"),"."),(0,a.kt)("p",null,"Replication consists of replicating data from one storage to one or several\nother storages. The downside of its simplicity is that only two out of three CAP\nproperties can be achieved."),(0,a.kt)("h2",{id:"replication-implementation-in-memgraph"},"Replication implementation in Memgraph"),(0,a.kt)("p",null,"To enable replication, there must be at least two instances of Memgraph in a\ncluster. Each instance has one of two roles: MAIN or REPLICA. The MAIN instance\naccepts read and write queries to the database and REPLICA instances accept only\nread queries."),(0,a.kt)("p",null,"The changes or state of the MAIN instance are replicated to the REPLICA\ninstances in a SYNC or ASYNC mode."),(0,a.kt)("p",null,"By using the timestamp, the MAIN instance knows the current state of the\nREPLICA. If the REPLICA is not synchronized with the MAIN instance, the MAIN\ninstance sends the correct data for synchronization as WAL files."),(0,a.kt)("p",null,"If the REPLICA is so far behind the MAIN instance that the synchronization using\nWAL files is impossible, Memgraph will use snapshots."),(0,a.kt)("h2",{id:"replication-modes"},"Replication modes"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"From version 2.4 it is no longer possible to specify a timeout when registering\na sync replica. To mimic this behavior in higher releases, please use ASYNC\nreplication instead.")),(0,a.kt)("p",null,"Replication mode defines the terms by which the MAIN instance can commit the\nchanges to the database, thus modifying the system to prioritize either\nconsistency or availability. There are two possible replication modes\nimplemented in Memgraph replication:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SYNC"),(0,a.kt)("li",{parentName:"ul"},"ASYNC")),(0,a.kt)("img",{src:n(10775).Z,className:"imgBorder"}),(0,a.kt)("p",null,"When a REPLICA instance is registered and added to the cluster, it will start\nreplicating in ASYNC mode. That will allow it to catch up to the current state\nof the MAIN instance. When the REPLICA instance synchronizes with the MAIN\ninstance, the replication mode will change according to the mode defined during\nregistration."),(0,a.kt)("h3",{id:"sync-replication-mode"},"SYNC replication mode"),(0,a.kt)("p",null,"SYNC mode is the most straightforward replication mode in which the main storage\nthread waits for the response and cannot continue until the response is\nreceived or a timeout is reached. If the timeout is reached and at least one SYNC REPLICA has not\nsent back a response, then the MAIN instance will return an error to the user.",(0,a.kt)("br",null),"\nThe error indicates that the user should check the status of the REPLICAs\nas there might be a network or hardware issue."),(0,a.kt)("p",null,"The following diagrams express the behavior of the MAIN instance in cases when\nSYNC REPLICA doesn't answer within the expected timeout."),(0,a.kt)("h4",{id:"sync-replica-going-down-when-creating-index-uniqueness-constraint-or-existence-constraint"},"SYNC REPLICA going down when creating index, uniqueness constraint or existence constraint"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sync-replicas-down-when-creating-index-or-constraints",src:n(33652).Z,width:"723",height:"1052"})),(0,a.kt)("h4",{id:"sync-replica-going-down-when-dropping-index-uniqueness-constraint-or-existence-constraint"},"SYNC REPLICA going down when dropping index, uniqueness constraint or existence constraint"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sync-replicas-down-when-dropping-index-or-constraints",src:n(52866).Z,width:"702",height:"1052"})),(0,a.kt)("h4",{id:"sync-replica-going-down-addingupdatingdeleting-data"},"SYNC REPLICA going down adding/updating/deleting data"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sync-replicas-down-when-modifying-data",src:n(60749).Z,width:"759",height:"1607"})),(0,a.kt)("h3",{id:"asyn-replication-mode"},"ASYN replication mode"),(0,a.kt)("p",null,"In the ASYNC replication mode, the MAIN instance will commit a transaction\nwithout receiving confirmation from REPLICA instances that they have received\nthe same transaction. This means that the MAIN instance does not wait for the\nresponse from the REPLICA instances in the main thread but in some other thread."),(0,a.kt)("p",null,"A new thread can be created every time a transaction needs to be replicated to\nthe REPLICA instance, but because transactions are committed often and use a lot\nof resources, each REPLICA instance has one permanent thread connecting it with\nthe MAIN instance. Using this background thread, the MAIN instance pushes\nreplication tasks to the REPLICA instance, creates a custom thread pool pattern,\nand receives confirmations of successful replication from the REPLICATION\ninstance."),(0,a.kt)("img",{src:n(93939).Z,className:"imgBorder"}),(0,a.kt)("p",null,"ASYNC mode ensures system availability and partition tolerance."),(0,a.kt)("h2",{id:"synchronizing-instances"},"Synchronizing instances"),(0,a.kt)("p",null,"By comparing timestamps, the MAIN instance knows when a REPLICA instance is not\nsynchronized and is missing some earlier transactions. The REPLICA instance is\nthen set into a RECOVERY state, where it remains until it is fully synchronized\nwith the MAIN instance."),(0,a.kt)("p",null,"The missing data changes can be sent as snapshots or WAL files. Snapshot files\nrepresent an image of the current state of the database and are much larger than\nthe WAL files, which only contain the changes, deltas. Because of the difference\nin file size, Memgraph favors the WAL files."),(0,a.kt)("p",null,"While the REPLICA instance is in the RECOVERY state, the MAIN instance\ncalculates the optimal synchronization path based on the REPLICA instance's\ntimestamp and the current state of the durability files while keeping the\noverall size of the files necessary for synchronization to a minimum."),(0,a.kt)("img",{src:n(23796).Z,className:"imgBorder"}),(0,a.kt)("p",null,"Imagine there were 5 changes made to the database. Each change is saved in a WAL\nfile, so there are 5 WAL files, and the snapshot was created after 2 changes.\nThe REPLICA instance can be synchronized using a snapshot and the 3 latest WAL\nfiles or using 5 WAL files. Both options would correctly synchronize the\ninstances, but 5 WAL files are much smaller."),(0,a.kt)("p",null,"The durability files are constantly being created, deleted, and updated. Also,\neach replica could need a different set of files to sync. There are several ways\nto ensure that the necessary files persist and that instances can read the WAL\nfiles currently being updated without affecting the performance of the rest of\nthe database."),(0,a.kt)("h3",{id:"locking-durability-files"},"Locking durability files"),(0,a.kt)("p",null,"Durability files are also used for recovery and are periodically deleted to\neliminate redundant data. The problem is that they can be deleted while they are\nbeing used to synchronize a REPLICA with the MAIN instance."),(0,a.kt)("p",null,"To delay the file deletion, Memgraph uses a file retainer that consists of\nmultiple lockers. Threads can store and lock the files they found while\nsearching for the optimal recovery path in the lockers, thus ensuring the files\nwill still exist once they are sent to the REPLICA instance as a part of the\nsynchronization process. If some other part of the system sends a deletion\nrequest for a certain file, the file retainer first checks if that file is\nlocked in a locker. If it is not, it is deleted immediately. If the file is\nlocked, the file retainer adds the file to the deletion queue. The file retainer\nwill periodically clean the queue by deleting the files that are no longer\nlocked inside the locker."),(0,a.kt)("h3",{id:"writing-and-reading-files-simultaneously"},"Writing and reading files simultaneously"),(0,a.kt)("p",null,"Memgraph internal file buffer is used when writing deltas to WAL files, and\nmid-writing, the content of one WAL file can be divided across two locations. If\nat that point that WAL file is used to synchronize the REPLICA instance, once\nthe data is being read from the internal buffer, the buffer can be flushed, and\nthe REPLICA could receive an invalid WAL file because it is missing a chunk of\ndata. It could also happen that the WAL file is sent before all the transactions\nare written to the internal buffer."),(0,a.kt)("p",null,"To avoid these issues, flushing of that internal buffer is disabled while the\ncurrent WAL is sent to a REPLICA instance. To get all the data necessary for the\nsynchronization, the replication thread reads the content directly from the WAL\nfile, then reads how many bytes are written in the buffer and copies the data to\nanother location. Then the flushing is enabled again, and the transaction is\nreplicated using the copied buffer. Because the access to the internal buffer\nwas not blocked, new data can be written. The content of the buffer (including\nany new data) is then written in a new WAL file that will be sent in the next\nsynchronization process."),(0,a.kt)("img",{src:n(25447).Z,className:"imgBorder"}),(0,a.kt)("h3",{id:"fixing-timestamp-consistency"},"Fixing timestamp consistency"),(0,a.kt)("p",null,"Timestamps are used to compare the state of the REPLICA instance in comparison\nto the MAIN instance."),(0,a.kt)("p",null,"At first, we used the current timestamp without increasing its value for global\noperations, like creating an index or creating a constraint. By using a single\ntimestamp, it was impossible to know which operations the REPLICA had applied\nbecause sequential global operations had the same timestamp. To avoid this\nissue, a unique timestamp is assigned to each global operation"),(0,a.kt)("p",null,"As replicas allow read queries, each of those queries was assigned with its own\ntimestamp. Those timestamps caused issues when the replicated write transactions\nwere assigned an older timestamp. A read transaction would return different data\nfrom the same read query if a transaction was replicated between those two read\ntransactions which obstructed the snapshot isolation. To avoid this problem, the\ntimestamp on REPLICA instances isn't increased because the read transactions\ndon't produce any changes, so no deltas need to be timestamped."),(0,a.kt)("h3",{id:"incompatible-instances"},"Incompatible instances"),(0,a.kt)("p",null,"To avoid issues when the durability files of two different database instances\nare stored in the same folder, a unique ID is assigned to each storage instance.\nThe same ID is then assigned to the durability files. Replication uses the\ninstance ID to validate that the files and the database are compatible."),(0,a.kt)("p",null,"A unique ID ",(0,a.kt)("inlineCode",{parentName:"p"},"epoch_id")," is also assigned each time an instance is run as the MAIN\ninstance in the replication cluster to check if the data is compatible for\nreplication. The ",(0,a.kt)("inlineCode",{parentName:"p"},"epoch_id")," is necessary when the original MAIN instance fails,\na REPLICA instance becomes a new MAIN, and after some time, the original MAIN\ninstance is brought back online. If no transactions were run on the original\nMAIN instance, the difference in timestamps will indicate that it is behind the\nnew MAIN, and it would be impossible to set the original MAIN-REPLICA\nrelationship. But if the transactions were run on the original MAIN after it was\nbrought back online, the timestamp would be of no help, but the ",(0,a.kt)("inlineCode",{parentName:"p"},"epoch_id")," would\nindicate incomparability, thus preventing the original MAIN from reclaiming its\noriginal role."),(0,a.kt)("img",{src:n(11802).Z,className:"imgBorder"}))}h.isMDXComponent=!0},36674:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/memgraph-replication-CAP-theorem-c9033bb95853a472a5060cd2b755a084.png"},10775:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/memgraph-replication-async-sync-b280f8fb1b949d95555fd530bd299583.png"},93939:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/memgraph-replication-async-96b7f64f7252f8f1925192a29c70262c.png"},25447:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/memgraph-replication-buffer-8f30f76e2d38b322f744d4fc8663fba8.png"},11802:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/memgraph-replication-ids-b8a4a57ae6babaab37be4ac62723292f.png"},23796:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/memgraph-replication-sync-process-3c66134606be1673400c0a601bd0aeec.png"},33652:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/workflow_diagram_data_definition_creation.drawio-a1b863826b737af11537b64dd1548228.png"},52866:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/workflow_diagram_data_definition_dropping.drawio-2b567de59b27a798e301f728c47dd7c8.png"},60749:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/workflow_diagram_data_manipulation.drawio-5066edc46292a6dd60334ae801651f8d.png"}}]);