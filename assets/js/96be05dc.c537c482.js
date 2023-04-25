"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21775],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),u=n,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={id:"create-backup",title:"How to backup and restore data",sidebar_label:"Backup and restore data"},i=void 0,l={unversionedId:"how-to-guides/create-backup",id:"version-2.7.0/how-to-guides/create-backup",title:"How to backup and restore data",description:"While running, Memgraph generates various files in its",source:"@site/memgraph_versioned_docs/version-2.7.0/how-to-guides/create-backup.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-backup",permalink:"/docs/memgraph/how-to-guides/create-backup",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.7.0/how-to-guides/create-backup.md",tags:[],version:"2.7.0",frontMatter:{id:"create-backup",title:"How to backup and restore data",sidebar_label:"Backup and restore data"},sidebar:"memgraph",previous:{title:"How-to guides overview",permalink:"/docs/memgraph/how-to-guides"},next:{title:"Change configuration and access logs",permalink:"/docs/memgraph/how-to-guides/config-logs"}},p={},s=[{value:"Create backup",id:"create-backup",level:2},{value:"1. Create a snapshot",id:"1-create-a-snapshot",level:3},{value:"2. Lock the data directory",id:"2-lock-the-data-directory",level:3},{value:"3. Copy the data directory and unlock it",id:"3-copy-the-data-directory-and-unlock-it",level:3},{value:"Restore data",id:"restore-data",level:2},{value:"1. Lock the data directory",id:"1-lock-the-data-directory",level:3},{value:"2. Copy the snapshot into the data directory",id:"2-copy-the-snapshot-into-the-data-directory",level:3},{value:"3. Restart the instance",id:"3-restart-the-instance",level:3}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"While running, Memgraph generates various files in its\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/backup"},"data directory"),",\nincluding the ",(0,n.kt)("strong",{parentName:"p"},"durability files"),": snapshots and WALs that contain Memgraph's\ndata in a recoverable format. On startup, it searches for previously saved\ndurability files and uses them to recreate the most recent DB state."),(0,n.kt)("p",null,"When talking about the data directory in the context of backup and restore, we are actually talking about two\ndirectories, ",(0,n.kt)("inlineCode",{parentName:"p"},"snapshots")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"wal")," which are usually located in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph")," folder."),(0,n.kt)("p",null,"Snapshots are created periodically based on the value defined with the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--storage-snapshot-interval-sec")," configuration flag in the configuration file.\nIf you need help adjusting the configuration, check out the ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"how-to guide on\nchanging the configuration"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/backup"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,n.kt)("h2",{id:"create-backup"},"Create backup"),(0,n.kt)("p",null,"To create a backup, follow the steps below:"),(0,n.kt)("h3",{id:"1-create-a-snapshot"},"1. Create a snapshot"),(0,n.kt)("p",null,"If necessary, create a snapshot of the current database state by running the\nfollowing query in ",(0,n.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph Lab:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE SNAPSHOT;\n")),(0,n.kt)("h3",{id:"2-lock-the-data-directory"},"2. Lock the data directory"),(0,n.kt)("p",null,"Durability files are deleted when an event is triggered, for example, exceeding\nthe maximum number of snapshots."),(0,n.kt)("p",null,"To disable this behavior, run the following query in ",(0,n.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph\nLab:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"LOCK DATA DIRECTORY;\n")),(0,n.kt)("h3",{id:"3-copy-the-data-directory-and-unlock-it"},"3. Copy the data directory and unlock it"),(0,n.kt)("p",null,"Copy the snapshot directory or a single WAL or snapshot file to a backup location."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Copy files if you are using Memgraph on Linux"),"If you are using Linux to run Memgraph, here are the steps for copying files:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.")," Open a new Linux terminal and check the location of the permanent data\ndirectory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"grep -A 1 'permanent data' /etc/memgraph/memgraph.conf\n")),(0,n.kt)("p",null,"If you are getting a permission error, execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo su")," command to get\naccess privileges and then try to change the working directory again."),(0,n.kt)("p",null,"Your output should look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},"# Path to directory in which to save all permanent data. [string]\n--data-directory=/var/lib/memgraph\n")),(0,n.kt)("p",null,"As you can see, the path is the default one: ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.")," Locate the files that you want to backup. Let's say that you want to copy\nthe latest snapshot, list the content of the snapshot directory and then copy\nthe latest file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l /var/lib/memgraph/snapshots/\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},"total 35920\n-rw-r----- 1 memgraph memgraph  7185673 Mar 25 13:52 20220325125206991975_timestamp_2622\n-rw-r----- 1 memgraph memgraph 12521724 Mar 25 13:52 20220325125237040637_timestamp_3028\n-rw-r----- 1 memgraph memgraph 17064381 Mar 25 13:53 20220325125308366007_timestamp_3380\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4.")," Copy a file from the snapshot directory to the backup folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp /var/lib/memgraph/snapshots/20220325125308366007_timestamp_3380 ~/backup/\n"))),(0,n.kt)("p",null,"If you need help copying the files from the Docker container, check out the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},"Working with docker\nguide"),"."),(0,n.kt)("p",null,"Then, run the following query in ",(0,n.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph Lab to unlock the\ndirectory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"UNLOCK DATA DIRECTORY;\n")),(0,n.kt)("p",null,"Memgraph will delete the files which should have been deleted before locking and\nallow any future deletion of the durability files."),(0,n.kt)("h2",{id:"restore-data"},"Restore data"),(0,n.kt)("p",null,"To restore data from a backup: "),(0,n.kt)("h3",{id:"1-lock-the-data-directory"},"1. Lock the data directory"),(0,n.kt)("p",null,"To disable deletions of snapshot or WAL files, run the following query in\n",(0,n.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph Lab:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"LOCK DATA DIRECTORY;\n")),(0,n.kt)("h3",{id:"2-copy-the-snapshot-into-the-data-directory"},"2. Copy the snapshot into the data directory"),(0,n.kt)("p",null,"Copy the snapshot or WAL directory or, empty it and then copy a single WAL or\nsnapshot file into it."),(0,n.kt)("p",null,"If you need help copying the files from the Docker container, check out the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},"Working with docker\nguide"),"."),(0,n.kt)("h3",{id:"3-restart-the-instance"},"3. Restart the instance"),(0,n.kt)("p",null,"By restarting the instance, Memgraph should restore the data from the files in\nthe data directory. "),(0,n.kt)("p",null,"Be sure to restart the instance before Memgraph automatically creates a new\nperiodic snapshot because upon restart it might use that newer snapshot which is\nnot the data you want to load."))}d.isMDXComponent=!0}}]);