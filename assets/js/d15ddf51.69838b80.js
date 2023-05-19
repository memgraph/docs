"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var k=a(72389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==l&&(c(t),s(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},7302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={id:"create-backup",title:"How to backup and restore data",sidebar_label:"Backup and restore data"},s=void 0,p={unversionedId:"how-to-guides/create-backup",id:"version-2.8.0/how-to-guides/create-backup",title:"How to backup and restore data",description:"While running, Memgraph generates various files in its [data",source:"@site/memgraph_versioned_docs/version-2.8.0/how-to-guides/create-backup.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/create-backup",permalink:"/docs/memgraph/how-to-guides/create-backup",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.8.0/how-to-guides/create-backup.md",tags:[],version:"2.8.0",frontMatter:{id:"create-backup",title:"How to backup and restore data",sidebar_label:"Backup and restore data"},sidebar:"memgraph",previous:{title:"How-to guides overview",permalink:"/docs/memgraph/how-to-guides"},next:{title:"Change configuration and access logs",permalink:"/docs/memgraph/how-to-guides/config-logs"}},u={},c=[{value:"Create backup",id:"create-backup",level:2},{value:"Restore data",id:"restore-data",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While running, Memgraph generates various files in its ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/backup"},"data\ndirectory"),", including the ",(0,r.kt)("strong",{parentName:"p"},"durability\nfiles"),", that is,  snapshots and WALs that contain Memgraph's data in a\nrecoverable format and are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots")," folders in the\ndata directory. On startup, Memgraph searches for previously saved durability\nfiles and uses them to recreate the most recent database state."),(0,r.kt)("p",null,"When talking about the data directory in the context of backup and restore, we\nare actually talking about two directories, ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wal"),", which are\nusually located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph")," directory."),(0,r.kt)("p",null,"Snapshots are created periodically based on the value defined with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--storage-snapshot-interval-sec")," configuration flag, as well as upon exit based\non the configuration flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--storage-snapshot-on-exit"),", defined by the\nconfiguration file. "),(0,r.kt)("p",null,"You can configure the exact snapshot creation behavior ",(0,r.kt)("a",{parentName:"p",href:"/memgraph/reference-guide/configuration#storage"},"by defining the\nrelevant"),". If you need\nhelp adjusting the configuration, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"how-to guide on changing the\nconfiguration"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/backup"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,r.kt)("h2",{id:"create-backup"},"Create backup"),(0,r.kt)("p",null,"  Follow these steps to create database backup:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create a snapshot")),(0,r.kt)("p",{parentName:"li"},"If necessary, create a snapshot of the current database state by running the\nfollowing query in ",(0,r.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph Lab:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE SNAPSHOT;\n")),(0,r.kt)("p",{parentName:"li"},"The snapshot is saved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots")," directory of the data directory\n(",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Lock the data directory")),(0,r.kt)("p",{parentName:"li"},"Durability files are deleted when an event is triggered, for example, exceeding\nthe maximum number of snapshots."),(0,r.kt)("p",{parentName:"li"},"To disable this behavior, run the following query in ",(0,r.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph\nLab:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"LOCK DATA DIRECTORY;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Copy files")),(0,r.kt)("p",{parentName:"li"},"Copy snapshot files (from the ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshots")," directory) and any additional WAL\nfiles (from the ",(0,r.kt)("inlineCode",{parentName:"p"},"wal")," directory) to a backup location."),(0,r.kt)("p",{parentName:"li"},"If you've just created a snapshot file there is no need to backup WAL files. "),(0,r.kt)("p",{parentName:"li"},"To help copying the files from the Docker container, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},"Working with\ndocker\nguide"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unlock the data directory")),(0,r.kt)("p",{parentName:"li"},"Run the following query in ",(0,r.kt)("inlineCode",{parentName:"p"},"mgconsole")," or Memgraph Lab to unlock the\ndirectory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"UNLOCK DATA DIRECTORY;\n")),(0,r.kt)("p",{parentName:"li"},"Memgraph will delete the files which should have been deleted before locking and\nallow any future deletion of the durability files."))),(0,r.kt)("h2",{id:"restore-data"},"Restore data"),(0,r.kt)("p",null,"To restore data from a backup"),(0,r.kt)(o.Z,{groupId:"backup",defaultValue:"docker",values:[{label:"Docker \ud83d\udc33",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Empty the ",(0,r.kt)("inlineCode",{parentName:"p"},"wal")," directory"),(0,r.kt)("p",{parentName:"li"},"If you want to restore data only from the snapshot file, ensure that the\n",(0,r.kt)("inlineCode",{parentName:"p"},"wal")," directory is empty:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find the container ID using a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," command, then enter the container using:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker exec -it CONTAINER_ID bash\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Position yourself in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/wal")," directory and ",(0,r.kt)("inlineCode",{parentName:"p"},"rm *"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stop the instance using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stop CONTAINER_ID"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the instance by adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"-v ~/snapshots:/var/lib/memgraph/snapshots"),"\nflag to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command, where the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/snapshots")," represents a path\nto the location of the directory with the back-up snapshot, for example: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker run -p 7687:7687 -p 7444:7444 -v ~/snapshots:/var/lib/memgraph/snapshots memgraph/memgraph\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to copy both WAL and snapshot files start the instance by adding\na ",(0,r.kt)("inlineCode",{parentName:"p"},"-v ~/snapshots:/var/lib/memgraph/snapshots -v ~/wal:/var/lib/memgraph/wal"),"\nflags to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command, where the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/snapshots")," represents a path\nto the location of the backed-up snapshot directory, and ",(0,r.kt)("inlineCode",{parentName:"p"},"~/wal")," represents a\npath to the location of the backed-up wal directory for example: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker run -p 7687:7687 -p 7444:7444 -v ~/snapshots:/var/lib/memgraph/snapshots -v ~/wal:/var/lib/memgraph/wal memgraph/memgraph\n"))))),(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Before running an instance, copy the backed up snapshot into the ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshots"),"\ndirectory, and optionally, copy the backed-up WAL files into the ",(0,r.kt)("inlineCode",{parentName:"li"},"wal"),"\ndirectory."),(0,r.kt)("li",{parentName:"ol"},"If you are restoring data only from the snapshot file, ensure that the file\nyou want to use to restore the data is the only snapshot file in the\n",(0,r.kt)("inlineCode",{parentName:"li"},"snapshots")," directory and that the ",(0,r.kt)("inlineCode",{parentName:"li"},"wal")," directory is empty. If you are\nrestoring data from both the snapshot and WAL files, ensure they are the only\nfiles in the ",(0,r.kt)("inlineCode",{parentName:"li"},"snapshot")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"wal")," directories. "),(0,r.kt)("li",{parentName:"ol"},"Start the database. ")))))}m.isMDXComponent=!0}}]);