"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64362],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=m({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==l&&(c(t),s(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},27922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={id:"backup",title:"Data durability and backup",sidebar_label:"Data durability and backup"},s=void 0,p={unversionedId:"reference-guide/backup",id:"version-2.7.0/reference-guide/backup",title:"Data durability and backup",description:"Memgraph uses two mechanisms to ensure the durability of stored data and make",source:"@site/memgraph_versioned_docs/version-2.7.0/reference-guide/backup.md",sourceDirName:"reference-guide",slug:"/reference-guide/backup",permalink:"/docs/memgraph/2.7.0/reference-guide/backup",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.7.0/reference-guide/backup.md",tags:[],version:"2.7.0",frontMatter:{id:"backup",title:"Data durability and backup",sidebar_label:"Data durability and backup"},sidebar:"memgraph",previous:{title:"Configuration settings",permalink:"/docs/memgraph/2.7.0/reference-guide/configuration"},next:{title:"Data types",permalink:"/docs/memgraph/2.7.0/reference-guide/data-types"}},u={},c=[{value:"Durability mechanisms",id:"durability-mechanisms",level:2},{value:"Write-ahead logging",id:"write-ahead-logging",level:3},{value:"Snapshots",id:"snapshots",level:3},{value:"Backup and restore",id:"backup-and-restore",level:2},{value:"Database dump",id:"database-dump",level:2},{value:"Storage modes",id:"storage-modes",level:2}],d={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memgraph uses two mechanisms to ensure the durability of stored data and make\ndisaster recovery possible:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"write-ahead logging (WAL)"),(0,r.kt)("li",{parentName:"ul"},"periodic snapshot creation")),(0,r.kt)("p",null,"These mechanisms generate ",(0,r.kt)("strong",{parentName:"p"},"durability files")," and save them in the respective\n",(0,r.kt)("inlineCode",{parentName:"p"},"wal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots")," folders in the ",(0,r.kt)("strong",{parentName:"p"},"data directory"),". Data directory stores\npermanent data on-disk. "),(0,r.kt)("p",null,"The default data directory path is ",(0,r.kt)("inlineCode",{parentName:"p"},"var/lib/memgraph")," but the path can be\nchanged by ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration#other"},"modifying the ",(0,r.kt)("inlineCode",{parentName:"a"},"data-dir")," configuration\nflag"),"."),(0,r.kt)("p",null,"Durability files are deleted when certain events are triggered, for example,\nexceeding the maximum number of snapshots."),(0,r.kt)("p",null,"To manage this behavior, run the following queries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"LOCK DATA DIRECTORY;\nUNLOCK DATA DIRECTORY;\n")),(0,r.kt)("p",null,"To show the status of the data directory, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"DATA DIRECTORY LOCK STATUS;\n")),(0,r.kt)("p",null,"To encrypt the data directory, use\n",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/cryptsetup/cryptsetup/"},"LUKS")," as it works with Memgraph out\nof the box and is undetectable from the applications perspective so it shouldn't\nbreak any existing applications. "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.7.0/how-to-guides/create-backup"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How-to"}))),(0,r.kt)("h2",{id:"durability-mechanisms"},"Durability mechanisms"),(0,r.kt)("p",null,"To configure the durability mechanisms check their respective configuration\nflags in the ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration#storage"},"configuration reference\nguide"),". "),(0,r.kt)("p",null,"If you need help configuring Memgraph, check out the\xa0configuration ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.7.0/how-to-guides/config-logs"},"how-to\nguide"),"."),(0,r.kt)("h3",{id:"write-ahead-logging"},"Write-ahead logging"),(0,r.kt)("p",null,"Write-ahead logging (WAL) is a technique applied in providing ",(0,r.kt)("strong",{parentName:"p"},"atomicity")," and\n",(0,r.kt)("strong",{parentName:"p"},"durability")," to database systems. Each database modification is recorded in a\nlog file before being written to the DB and therefore the log file contains all\nsteps needed to reconstruct the DB\u2019s most recent state."),(0,r.kt)("p",null,"Memgraph has WAL enabled by default. To switch it on and off, use the boolean\n",(0,r.kt)("inlineCode",{parentName:"p"},"storage-wal-enabled")," flag. For other WAL-related flags check the ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration#storage"},"configuration\nreference guide"),"."),(0,r.kt)("p",null,"WAL files are usually located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/wal"),"."),(0,r.kt)("h3",{id:"snapshots"},"Snapshots"),(0,r.kt)("p",null,"Snapshots provide a faster way to restore the states of your database. Memgraph\nperiodically takes snapshots during runtime. When a snapshot creation is\ntriggered, the entire data storage is written to the drive. Nodes and\nrelationships are divided into groups called batches."),(0,r.kt)("p",null,"On startup, the database state is recovered from the most recent snapshot file.\nMemgraph can read the data and build the indices on multiple threads, using\nbatches as a parallelization unit: each thread will recover one batch at a time\nuntil there are no unhandled batches."),(0,r.kt)("p",null,"This means the same batch size might not be suitable for every dataset. A\nsmaller dataset might require a smaller batch size to utilize a multi-threaded\nprocessor, while bigger datasets might use bigger batches to minimize the\nsynchronization between the worker threads. Therefore the size of batches and\nthe number of used threads ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration#storage"},"are\nconfigurable")," similarly to\nother durability related settings."),(0,r.kt)("p",null,"The timestamp of the snapshot is compared with the latest update recorded in the\nWAL file and, if the snapshot is less recent, the state of the DB will be\nrecovered using the WAL file."),(0,r.kt)("p",null,"Memgraph has snapshot creation enabled by default. You can configure the exact\nsnapshot creation behavior by ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration#storage"},"defining the relevant flags"),".\nAlternatively, you can make one directly by running the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-opencypher"},"CREATE SNAPSHOT;\n")),(0,r.kt)("p",null,"Snapshot files are saved inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots")," directory located in the data directory\n(",(0,r.kt)("inlineCode",{parentName:"p"},"var/lib/memgraph"),"). "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots and WAL files are presently not compatible between Memgraph versions.")),(0,r.kt)("h2",{id:"backup-and-restore"},"Backup and restore"),(0,r.kt)(o.Z,{groupId:"backup",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,"You can easily back up Memgraph by following a four-step process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Lock the data directory with the ",(0,r.kt)("inlineCode",{parentName:"li"},"LOCK DATA DIRECTORY;")," query."),(0,r.kt)("li",{parentName:"ol"},"Create a snapshot with the ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE SNAPSHOT;")," query."),(0,r.kt)("li",{parentName:"ol"},"Copy the snapshot from the ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshots")," directory to a backup location."),(0,r.kt)("li",{parentName:"ol"},"Unlock the directory with the ",(0,r.kt)("inlineCode",{parentName:"li"},"UNLOCK DATA DIRECTORY;")," query.")),(0,r.kt)("p",null,"Locking the data directory ensures that no files are deleted by the system. "),(0,r.kt)("p",null,"To restore from back-up you have two options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start an instance by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"-v ~/snapshots:/var/lib/memgraph/snapshots"),"\nflag to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command, where the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/snapshots")," represents a path to\nthe local directory with the back-up snapshot, for example: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker run -p 7687:7687 -p 7444:7444 -v ~/snapshots:/var/lib/memgraph/snapshots memgraph/memgraph\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the backed-up snapshot file into the ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots")," directory after creating the container and start the database. So the commands should look like this: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker create -p 7687:7687 -p 7444:7444 -v `snapshots`:/var/lib/memgraph/snapshots --name memgraphDB memgraph/memgraph\ntar -cf - sample_snapshot_file | docker cp -a - memgraphDB:/var/lib/memgraph/snapshots\n")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sample_snapshot_file")," is the snapshot file you want to use to restore the data. Due to the nature of Docker file ownership, you need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"tar")," to copy the file as STDIN into the non-running container. It will allow you to change the ownership of the file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph")," user inside the container."),(0,r.kt)("p",{parentName:"li"},"After that, start the database with:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker start -a memgraphDB\n")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," flag is used to attach to the container's output so you can see the logs."),(0,r.kt)("p",{parentName:"li"},"Once memgraph is started, change the snapshot directory ownership to the ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph")," user by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'docker exec -it -u 0 memgraphDB bash -c "chown memgraph:memgraph /var/lib/memgraph/snasphots"\n')),(0,r.kt)("p",{parentName:"li"},"Otherwise, Memgraph will not be able to write the future snapshot files and will fail.")))),(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("p",null,"You can easily back up Memgraph by following a four-step process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Lock the data directory with the ",(0,r.kt)("inlineCode",{parentName:"li"},"LOCK DATA DIRECTORY;")," query."),(0,r.kt)("li",{parentName:"ol"},"Create a snapshot with the ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE SNAPSHOT;")," query."),(0,r.kt)("li",{parentName:"ol"},"Copy the snapshot from the ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshots")," directory to a backup location."),(0,r.kt)("li",{parentName:"ol"},"Unlock the directory with the ",(0,r.kt)("inlineCode",{parentName:"li"},"UNLOCK DATA DIRECTORY;")," query.")),(0,r.kt)("p",null,"Locking the data directory ensures that no files are deleted by the system. "),(0,r.kt)("p",null,"To restore from back-up:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the backed up snapshot into the ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshots")," directory."),(0,r.kt)("li",{parentName:"ol"},"Ensure that the snapshot file you want to use to restore the data is the only\nsnapshot file in the ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshots")," directory and that the ",(0,r.kt)("inlineCode",{parentName:"li"},"wal")," directory is\nempty."),(0,r.kt)("li",{parentName:"ol"},"Start the database. ")))),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.7.0/how-to-guides/create-backup"},"a detailed guide"),"."),(0,r.kt)("h2",{id:"database-dump"},"Database dump"),(0,r.kt)("p",null,"The database dump contains a record of the database state in the form of Cypher\nqueries. It\u2019s equivalent to the SQL dump in relational DBs. "),(0,r.kt)("p",null,"You can run the queries constituting the dump to recreate the state of the DB as\nit was at the time of the dump."),(0,r.kt)("p",null,"To dump the Memgraph DB, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-opencypher"},"DUMP DATABASE;\n")),(0,r.kt)("p",null,"If you are using Memgraph Lab, you can dump the database, that is, the queries\nto recreate it, to a CYPHERL file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Import & Export")," section of the Lab."),(0,r.kt)("h2",{id:"storage-modes"},"Storage modes"),(0,r.kt)("p",null,"Memgraph has the option to work in ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL"),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.7.0/reference-guide/storage-modes"},"storage modes"),"."),(0,r.kt)("p",null,"Memgraph always starts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_TRANSACTIONAL")," mode in which it creates\nperiodic snapshots and write-ahead logging as durability mechanisms, and also\nenables creating manual snapshots."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"IN_MEMORY_ANALYTICAL")," mode, Memgraph offers no periodic snapshots and\nwrite-ahead logging. Users can create a snapshot with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE SNAPSHOT;"),"\nCypher query. During the process of snapshot creation, other transactions will\nbe prevented from starting until the snapshot creation is completed."))}h.isMDXComponent=!0}}]);