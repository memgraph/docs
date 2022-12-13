"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24896],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81541:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"backup",title:"Data durability and backup",sidebar_label:"Data durability and backup"},i=void 0,s={unversionedId:"reference-guide/backup",id:"version-2.5.0/reference-guide/backup",title:"Data durability and backup",description:"Memgraph uses two mechanisms to ensure the durability of the stored data:",source:"@site/memgraph_versioned_docs/version-2.5.0/reference-guide/backup.md",sourceDirName:"reference-guide",slug:"/reference-guide/backup",permalink:"/docs/memgraph/reference-guide/backup",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.0/reference-guide/backup.md",tags:[],version:"2.5.0",frontMatter:{id:"backup",title:"Data durability and backup",sidebar_label:"Data durability and backup"},sidebar:"memgraph",previous:{title:"Configuration settings",permalink:"/docs/memgraph/reference-guide/configuration"},next:{title:"Data types",permalink:"/docs/memgraph/reference-guide/data-types"}},l={},p=[{value:"Durability mechanisms",id:"durability-mechanisms",level:2},{value:"Backup",id:"backup",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memgraph uses two mechanisms to ensure the durability of the stored data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"write-ahead logging (WAL)"),(0,r.kt)("li",{parentName:"ul"},"periodic snapshots")),(0,r.kt)("p",null,"Memgraph saves these periodically generated ",(0,r.kt)("strong",{parentName:"p"},"durability files")," in the\n",(0,r.kt)("strong",{parentName:"p"},"data directory"),", and they can be used to recover the database. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/create-backup"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How-to"}))),(0,r.kt)("h2",{id:"durability-mechanisms"},"Durability mechanisms"),(0,r.kt)("p",null,"In write-ahead logging, all database modifications are recorded in a log file\nbefore being applied to the database. WAL ensures that all operations are done\natomically and provides steps needed to reconstruct the database state."),(0,r.kt)("p",null,"Snapshots are taken periodically during the entire runtime of Memgraph. When\na snapshot is triggered, the whole data storage is written to disk. The\nsnapshot file provides a quicker way to restore the database state."),(0,r.kt)("p",null,"On startup, database is recovered from the most recent snapshot file. The\ntimestamp on the snapshot is compared to the most recent update logged in the\nWAL file, and if the snapshot is older, the database will be fully recovered\nusing the WAL file as well. "),(0,r.kt)("p",null,"Some events, such as exceeding the maximum number of snapshots, trigger deletion\nof older files. "),(0,r.kt)("p",null,"Behavior of these mechanisms can be tweaked in the configuration file\n(",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") by changing values of various flags regarding\nstorage."),(0,r.kt)("p",null,"Check the configuration reference guide for the ",(0,r.kt)("a",{parentName:"p",href:"../reference-guide/configuration#storage"},"possible storage configuration\nsettings")," and if you need\nhelp changing the configuration, check out the how-to guide on ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"configuration\nmanagement"),". "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Snapshot and WAL files are (currently) not compatible between Memgraph\nversions.")),(0,r.kt)("h2",{id:"backup"},"Backup"),(0,r.kt)("p",null,"Snapshots of the Memgraph instance are created periodically based on the time\ndefined with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--storage-snapshot-interval-sec")," configuration flag. If you\nwant to generate a snapshot for the current database state instantly, use the\nfollowing query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-opencypher"},"CREATE SNAPSHOT;\n")),(0,r.kt)("p",null,"To create a backup of the instance, disable deletion of durability files, then\ncopy the ",(0,r.kt)("strong",{parentName:"p"},"data directory")," or individual WAL or snapshot files to a backup\nlocation. "),(0,r.kt)("p",null,"To disable deletion, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-opencypher"},"LOCK DATA DIRECTORY;\n")),(0,r.kt)("p",null,"To enable deletion of the files, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-opencypher"},"UNLOCK DATA DIRECTORY;\n")))}u.isMDXComponent=!0}}]);