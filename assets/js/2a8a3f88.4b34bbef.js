"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86398],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"backup",title:"Data durability and backup",sidebar_label:"Data durability and backup"},i=void 0,s={unversionedId:"reference-guide/backup",id:"reference-guide/backup",title:"Data durability and backup",description:"Memgraph uses two mechanisms to ensure the durability of stored data and make",source:"@site/docs/reference-guide/backup.md",sourceDirName:"reference-guide",slug:"/reference-guide/backup",permalink:"/docs/memgraph/next/reference-guide/backup",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/backup.md",tags:[],version:"current",frontMatter:{id:"backup",title:"Data durability and backup",sidebar_label:"Data durability and backup"},sidebar:"memgraph",previous:{title:"Configuration settings",permalink:"/docs/memgraph/next/reference-guide/configuration"},next:{title:"Data types",permalink:"/docs/memgraph/next/reference-guide/data-types"}},l={},p=[{value:"Durability mechanisms",id:"durability-mechanisms",level:2},{value:"Write-ahead logging",id:"write-ahead-logging",level:3},{value:"Snapshots",id:"snapshots",level:3},{value:"Data directory",id:"data-directory",level:3},{value:"Backup and restore",id:"backup-and-restore",level:2},{value:"Database dump",id:"database-dump",level:2},{value:"Storage modes",id:"storage-modes",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memgraph uses two mechanisms to ensure the durability of stored data and make\ndisaster recovery possible:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"write-ahead logging (WAL)"),(0,r.kt)("li",{parentName:"ul"},"periodic snapshot creation")),(0,r.kt)("p",null,"These mechanisms generate ",(0,r.kt)("strong",{parentName:"p"},"durability files")," and save them in the ",(0,r.kt)("strong",{parentName:"p"},"data\ndirectory")," (usually located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph"),") so that one can use them to\nrecover the database."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/create-backup"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How-to"}))),(0,r.kt)("h2",{id:"durability-mechanisms"},"Durability mechanisms"),(0,r.kt)("p",null,"The durability mechanisms are configurable; the relevant settings are in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration#storage"},"configuration reference"),".\nTo configure Memgraph, you can use the\xa0configuration management\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/config-logs"},"how-to guide"),"."),(0,r.kt)("h3",{id:"write-ahead-logging"},"Write-ahead logging"),(0,r.kt)("p",null,"Write-ahead logging (WAL) is a technique applied in providing ",(0,r.kt)("strong",{parentName:"p"},"atomicity")," and\n",(0,r.kt)("strong",{parentName:"p"},"durability")," to database systems. Each database modification is recorded in a\nlog file before being written to the DB and therefore the log file contains all\nsteps needed to reconstruct the DB\u2019s most recent state."),(0,r.kt)("p",null,"Memgraph has WAL enabled by default. To switch it on and off, use the boolean\n",(0,r.kt)("inlineCode",{parentName:"p"},"storage-wal-enabled")," flag. Other WAL-related flags are\n",(0,r.kt)("inlineCode",{parentName:"p"},"storage-wal-file-flush-every-n-tx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"storage-wal-file-size-kib"),"; their uses\nare described ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"here"),"."),(0,r.kt)("p",null,"WAL files are usually located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/wal"),"."),(0,r.kt)("h3",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"Snapshots provide a faster way to restore the states of your database. Memgraph\nperiodically takes snapshots during runtime. When a snapshot is triggered, the\nentire data storage is written to the drive.\nOn startup, the database state is recovered from the most recent snapshot file.\nThe timestamp of the snapshot is compared with the latest update recorded in\nthe WAL file and, if the snapshot is less recent, the state of the DB will be\nrecovered using the WAL file."),(0,r.kt)("p",null,"Memgraph has snapshot creation enabled by default. You can configure the exact\nsnapshot creation behavior by defining the relevant flags\n(",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration#storage"},"reference"),").\nAlternatively, you can make one directly by running the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-opencypher"},"CREATE SNAPSHOT;\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots and WAL files are presently not compatible between Memgraph versions.")),(0,r.kt)("h3",{id:"data-directory"},"Data directory"),(0,r.kt)("p",null,"The data directory is the location where Memgraph saves write-ahead logs in the\ndirectory ",(0,r.kt)("inlineCode",{parentName:"p"},"wal")," and snapshots in the directory ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots"),". It functions as the\ndedicated site for permanent data."),(0,r.kt)("p",null,"The default data directory path is ",(0,r.kt)("inlineCode",{parentName:"p"},"var/lib/memgraph"),". You can change the path\nby setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"data-dir")," configuration flag\n(",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration#other"},"reference"),")."),(0,r.kt)("h2",{id:"backup-and-restore"},"Backup and restore"),(0,r.kt)("p",null,"You can easily back up Memgraph by following a three-step process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a snapshot."),(0,r.kt)("li",{parentName:"ol"},"Lock the data directory."),(0,r.kt)("li",{parentName:"ol"},"Copy the snapshot to the backup location and unlock the directory.")),(0,r.kt)("p",null,"To restore from back-up:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Lock the data directory."),(0,r.kt)("li",{parentName:"ol"},"Copy the backed up snapshot into the directory."),(0,r.kt)("li",{parentName:"ol"},"Restart the instance. ")),(0,r.kt)("p",null,"The following queries lock and unlock the data directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-opencypher"},"UNLOCK DATA DIRECTORY;\nLOCK DATA DIRECTORY;\n")),(0,r.kt)("p",null,"A detailed guide is available\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/create-backup"},"here"),"."),(0,r.kt)("h2",{id:"database-dump"},"Database dump"),(0,r.kt)("p",null,"The database dump contains a record of the database state in the form of Cypher\nqueries. It\u2019s equivalent to the SQL dump in relational DBs.\nYou can run the queries constituting the dump to recreate the state of the DB\nas it was at the time of the dump."),(0,r.kt)("p",null,"To dump the Memgraph DB, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-opencypher"},"DUMP DATABASE;\n")),(0,r.kt)("h2",{id:"storage-modes"},"Storage modes"),(0,r.kt)("p",null,"Memgraph has the option to work in ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL"),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/storage-modes"},"storage modes"),". "),(0,r.kt)("p",null,"Memgraph always starts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL")," mode in which it creates\nperiodic snapshots and write-ahead logging as durability mechanisms, and also\nenables creating manual snapshots. "),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," mode, Memgraph offers no periodic snapshots and\nwrite-ahead logging. Users can create a snapshot with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE SNAPSHOT;"),"\nCypher query. During the process of snapshot creation, other transactions will\nbe prevented from starting until the snapshot creation is completed."))}c.isMDXComponent=!0}}]);