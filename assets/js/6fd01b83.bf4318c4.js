"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11454],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9846:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"create-backup",title:"How to create a backup",sidebar_label:"Create a backup"},p=void 0,c={unversionedId:"how-to-guides/create-backup",id:"version-2.3.0/how-to-guides/create-backup",title:"How to create a backup",description:"Related - Reference Guide",source:"@site/memgraph_versioned_docs/version-2.3.0/how-to-guides/create-backup.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-backup",permalink:"/docs/memgraph/how-to-guides/create-backup",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/how-to-guides/create-backup.md",tags:[],version:"2.3.0",frontMatter:{id:"create-backup",title:"How to create a backup",sidebar_label:"Create a backup"},sidebar:"memgraph",previous:{title:"How-to guides overview",permalink:"/docs/memgraph/how-to-guides"},next:{title:"Manage Kafka streams",permalink:"/docs/memgraph/how-to-guides/streams/kafka/kafka-streams"}},s={},u=[{value:"1. Creating a snapshot",id:"1-creating-a-snapshot",level:2},{value:"2. Locking the data directory",id:"2-locking-the-data-directory",level:2},{value:"3. Copying data directory and unlocking",id:"3-copying-data-directory-and-unlocking",level:2}],d={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/backup"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,o.kt)("p",null,"While running, Memgraph generates several different files in its data directory.\nThis is the location where Memgraph saves all permanent data. The default data\ndirectory is ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph")," and you can change it in the main ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/configuration"},"Memgraph\nconfiguration file"),"."),(0,o.kt)("p",null,"The data directory includes multiple different subdirectories, one of them being\nthe storage directory, which contains the durability files. In that directory,\nMemgraph periodically generates ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/under-the-hood/storage"},"snapshots and WAL\nfiles")," that contain Memgraph's data in a\nrecoverable format."),(0,o.kt)("p",null,"Snapshot is created periodically based on the time defined with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--storage-snapshot-interval-sec")," config in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"Memgraph configuration\nfile"),"."),(0,o.kt)("h2",{id:"1-creating-a-snapshot"},"1. Creating a snapshot"),(0,o.kt)("p",null,"If you want to trigger creating a snapshot of the current database state, run\nthe following query in ",(0,o.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph Lab:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE SNAPSHOT;\n")),(0,o.kt)("h2",{id:"2-locking-the-data-directory"},"2. Locking the data directory"),(0,o.kt)("p",null,"Creating a backup of a Memgraph instance would consist of simply copying the\ndata directory. This is impossible without additional help because the\ndurability files can be deleted when an event is triggered (the number of\nsnapshots exceeded the maximum allowed number)."),(0,o.kt)("p",null,"To disable this behavior, you can use the following query in ",(0,o.kt)("inlineCode",{parentName:"p"},"mgconsole")," or\nMemgraph Lab:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"LOCK DATA DIRECTORY;\n")),(0,o.kt)("h2",{id:"3-copying-data-directory-and-unlocking"},"3. Copying data directory and unlocking"),(0,o.kt)("p",null,"The deletion of every file contained in the data directory is delayed until you\nunlock it again. You can safely copy the data directory or a single snapshot to\nanother location without worrying that it will be deleted during copying."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Copy files if you are using Memgraph on Linux"),"If you are using Linux to run Memgraph, here are the steps for copying files:",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Start your Memgraph instance."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Open a new Linux terminal and check the location of the permanent data\ndirectory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grep -A 1 'permanent data' /etc/memgraph/memgraph.conf\n")),(0,o.kt)("p",null,"If you are getting a permission error, execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo su")," command to get\naccess privileges and then try to change the working directory again."),(0,o.kt)("p",null,"Your output should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nocopy"},"# Path to directory in which to save all permanent data. [string]\n--data-directory=/var/lib/memgraph\n")),(0,o.kt)("p",null,"As you can see, the path is the default one: ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Locate the files that you want to backup. Let's say that you want to copy\nthe latest snapshot, list the content of the snapshot directory and then copy\nthe latest file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l /var/lib/memgraph/snapshots/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nocopy"},"total 35920\n-rw-r----- 1 memgraph memgraph  7185673 Mar 25 13:52 20220325125206991975_timestamp_2622\n-rw-r----- 1 memgraph memgraph 12521724 Mar 25 13:52 20220325125237040637_timestamp_3028\n-rw-r----- 1 memgraph memgraph 17064381 Mar 25 13:53 20220325125308366007_timestamp_3380\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Copy a file from the snapshot directory to the backup folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp /var/lib/memgraph/snapshots/20220325125308366007_timestamp_3380 ~/backup/\n"))),(0,o.kt)("p",null,"To allow the deletion of the files, run the following query in ",(0,o.kt)("inlineCode",{parentName:"p"},"mgconsole")," or\nMemgraph Lab::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"UNLOCK DATA DIRECTORY;\n")),(0,o.kt)("p",null,"Memgraph will delete the files which should have been deleted before and allow\nany future deletion of the files contained in the data directory."))}h.isMDXComponent=!0}}]);