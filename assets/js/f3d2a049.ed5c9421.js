"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15629],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||o;return a?r.createElement(m,i(i({ref:t},s),{},{components:a})):r.createElement(m,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},43384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={id:"create-backup",title:"How to create a backup",sidebar_label:"Create a backup"},i=void 0,l={unversionedId:"how-to-guides/create-backup",id:"how-to-guides/create-backup",title:"How to create a backup",description:"While running, Memgraph generates various files in the data directory,",source:"@site/docs/how-to-guides/create-backup.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-backup",permalink:"/docs/memgraph/next/how-to-guides/create-backup",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/how-to-guides/create-backup.md",tags:[],version:"current",frontMatter:{id:"create-backup",title:"How to create a backup",sidebar_label:"Create a backup"},sidebar:"memgraph",previous:{title:"How-to guides overview",permalink:"/docs/memgraph/next/how-to-guides"},next:{title:"Change configuration and access logs",permalink:"/docs/memgraph/next/how-to-guides/config-logs"}},p={},c=[{value:"1. Create a snapshot",id:"1-create-a-snapshot",level:2},{value:"2. Lock the data directory",id:"2-lock-the-data-directory",level:2},{value:"3. Copy the data directory and unlock it",id:"3-copy-the-data-directory-and-unlock-it",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"While running, Memgraph generates various files in the ",(0,n.kt)("strong",{parentName:"p"},"data directory"),",\nincluding the durability files - snapshots and WAL files that contain Memgraph's\ndata in a recoverable format. The default data directory is ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph"),",\nbut you can change it in the main ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Memgraph configuration\nfile"),"."),(0,n.kt)("p",null,"Snapshots are created periodically based on the value defined with the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--storage-snapshot-interval-sec")," configuration flag in the configuration file.\nIf you need help adjusting the configuration, check out ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"the how-to guide on\nchanging the configuration"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/backup"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,n.kt)("p",null,"To create a backup follow the steps below."),(0,n.kt)("h2",{id:"1-create-a-snapshot"},"1. Create a snapshot"),(0,n.kt)("p",null,"If necessary, create a snapshot of the current database state by running the\nfollowing query in ",(0,n.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph Lab:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE SNAPSHOT;\n")),(0,n.kt)("h2",{id:"2-lock-the-data-directory"},"2. Lock the data directory"),(0,n.kt)("p",null,"Durability files are deleted when an event is triggered, for example, exceeding\nthe maximum number of snapshots."),(0,n.kt)("p",null,"To disable this behavior, run the following query in ",(0,n.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph\nLab:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"LOCK DATA DIRECTORY;\n")),(0,n.kt)("h2",{id:"3-copy-the-data-directory-and-unlock-it"},"3. Copy the data directory and unlock it"),(0,n.kt)("p",null,"Copy the data directory or a single WAL or snapshot file to a backup location."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Copy files if you are using Memgraph on Linux"),"If you are using Linux to run Memgraph, here are the steps for copying files:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2.")," Open a new Linux terminal and check the location of the permanent data\ndirectory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"grep -A 1 'permanent data' /etc/memgraph/memgraph.conf\n")),(0,n.kt)("p",null,"If you are getting a permission error, execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo su")," command to get\naccess privileges and then try to change the working directory again."),(0,n.kt)("p",null,"Your output should look something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},"# Path to directory in which to save all permanent data. [string]\n--data-directory=/var/lib/memgraph\n")),(0,n.kt)("p",null,"As you can see, the path is the default one: ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.")," Locate the files that you want to backup. Let's say that you want to copy\nthe latest snapshot, list the content of the snapshot directory and then copy\nthe latest file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l /var/lib/memgraph/snapshots/\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-nocopy"},"total 35920\n-rw-r----- 1 memgraph memgraph  7185673 Mar 25 13:52 20220325125206991975_timestamp_2622\n-rw-r----- 1 memgraph memgraph 12521724 Mar 25 13:52 20220325125237040637_timestamp_3028\n-rw-r----- 1 memgraph memgraph 17064381 Mar 25 13:53 20220325125308366007_timestamp_3380\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4.")," Copy a file from the snapshot directory to the backup folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp /var/lib/memgraph/snapshots/20220325125308366007_timestamp_3380 ~/backup/\n"))),(0,n.kt)("p",null,"If you need help copying the files from the Docker container, check out the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/work-with-docker##how-to-copy-files-from-and-to-a-docker-container"},"Working with docker\nguide"),"."),(0,n.kt)("p",null,"Then, run the following query in ",(0,n.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph Lab to unlock the\ndirectory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"UNLOCK DATA DIRECTORY;\n")),(0,n.kt)("p",null,"Memgraph will delete the files which should have been deleted before locking and\nallow any future deletion of the durability files."))}u.isMDXComponent=!0}}]);