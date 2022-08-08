"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86398],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"backup",title:"Data durability and backup",sidebar_label:"Data durability and backup"},l=void 0,c={unversionedId:"reference-guide/backup",id:"reference-guide/backup",title:"Data durability and backup",description:"Memgraph uses two mechanisms to ensure the durability of the stored data:",source:"@site/docs/reference-guide/backup.md",sourceDirName:"reference-guide",slug:"/reference-guide/backup",permalink:"/docs/memgraph/next/reference-guide/backup",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/backup.md",tags:[],version:"current",frontMatter:{id:"backup",title:"Data durability and backup",sidebar_label:"Data durability and backup"},sidebar:"memgraph",previous:{title:"Configuration settings",permalink:"/docs/memgraph/next/reference-guide/configuration"},next:{title:"Data types",permalink:"/docs/memgraph/next/reference-guide/data-types"}},p={},u=[{value:"Durability mechanisms",id:"durability-mechanisms",level:2},{value:"Backup",id:"backup",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Memgraph uses two mechanisms to ensure the durability of the stored data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"write-ahead logging (WAL)"),(0,i.kt)("li",{parentName:"ul"},"periodic snapshots")),(0,i.kt)("p",null,"Memgraph saves these periodically generated ",(0,i.kt)("strong",{parentName:"p"},"durability files")," in the\n",(0,i.kt)("strong",{parentName:"p"},"data directory"),", and they can be used to recover the database. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/create-backup"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How-to"}))),(0,i.kt)("h2",{id:"durability-mechanisms"},"Durability mechanisms"),(0,i.kt)("p",null,"In write-ahead logging, all database modifications are recorded in a log file\nbefore being applied to the database. WAL ensures that all operations are done\natomically and provides steps needed to reconstruct the database state."),(0,i.kt)("p",null,"Snapshots are taken periodically during the entire runtime of Memgraph. When\na snapshot is triggered, the whole data storage is written to disk. The\nsnapshot file provides a quicker way to restore the database state."),(0,i.kt)("p",null,"On startup, database is recovered from the most recent snapshot file. The\ntimestamp on the snapshot is compared to the most recent update logged in the\nWAL file, and if the snapshot is older, the database will be fully recovered\nusing the WAL file as well. "),(0,i.kt)("p",null,"Some events, such as exceeding the maximum number of snapshots, trigger deletion\nof older files. "),(0,i.kt)("p",null,"Behavior of these mechanisms can be tweaked in the configuration file\n(",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") by changing values of various flags regarding\nstorage."),(0,i.kt)("p",null,"Check the configuration reference guide for the ",(0,i.kt)("a",{parentName:"p",href:"../reference-guide/configuration#storage"},"possible storage configuration\nsettings")," and if you need\nhelp changing the configuration, check out the how-to guide on ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/how-to-guides/config-logs"},"configuration\nmanagement"),". "),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Snapshot and WAL files are (currently) not compatible between Memgraph\nversions."))),(0,i.kt)("h2",{id:"backup"},"Backup"),(0,i.kt)("p",null,"Snapshots of the Memgraph instance are created periodically based on the time\ndefined with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--storage-snapshot-interval-sec")," configuration flag. If you\nwant to generate a snapshot for the current database state instantly, use the\nfollowing query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"CREATE SNAPSHOT;\n")),(0,i.kt)("p",null,"To create a backup of the instance, disable deletion of durability files, then\ncopy the ",(0,i.kt)("strong",{parentName:"p"},"data directory")," or individual WAL or snapshot files to a backup\nlocation. "),(0,i.kt)("p",null,"To disable deletion, run the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"LOCK DATA DIRECTORY;\n")),(0,i.kt)("p",null,"To enable deletion of the files, run the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-opencypher"},"UNLOCK DATA DIRECTORY;\n")))}m.isMDXComponent=!0}}]);