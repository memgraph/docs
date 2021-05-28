(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4634],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||s[f]||a;return n?o.createElement(d,i(i({ref:t},m),{},{components:n})):o.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20061:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={id:"memory-control",title:"Memory control",sidebar_label:"Memory control"},l={unversionedId:"database-functionalities/memory-control",id:"version-1.4.0/database-functionalities/memory-control",isDocsHomePage:!1,title:"Memory control",description:"Memgraph provides some useful tools which allow you to limit, inspect, and free allocated memory.",source:"@site/memgraph_versioned_docs/version-1.4.0/database-functionalities/memory-control.md",sourceDirName:"database-functionalities",slug:"/database-functionalities/memory-control",permalink:"/memgraph/1.4.0/database-functionalities/memory-control",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/database-functionalities/memory-control.md",version:"1.4.0",sidebar_label:"Memory control",frontMatter:{id:"memory-control",title:"Memory control",sidebar_label:"Memory control"},sidebar:"version-1.4.0/memgraph",previous:{title:"Making a backup",permalink:"/memgraph/1.4.0/reference-guide/backup"},next:{title:"Existence constraint",permalink:"/memgraph/1.4.0/database-functionalities/constraints/existence-constraint"}},c=[{value:"Configuration option <code>--memory-limit</code>",id:"configuration-option---memory-limit",children:[]},{value:"Controlling the memory usage of each query",id:"controlling-the-memory-usage-of-each-query",children:[]},{value:"Controlling the memory usage of each procedure",id:"controlling-the-memory-usage-of-each-procedure",children:[]},{value:"Cleaning up unused memory",id:"cleaning-up-unused-memory",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Memgraph provides some useful tools which allow you to limit, inspect, and free allocated memory."),(0,a.kt)("h3",{id:"configuration-option---memory-limit"},"Configuration option ",(0,a.kt)("inlineCode",{parentName:"h3"},"--memory-limit")),(0,a.kt)("p",null,"Through your config file, you can set the maximum amount of memory (in MiB) that a Memgraph instance can allocate during its runtime. If the memory limit is exceeded, only the queries which do not require additional memory are allowed. If the memory limit is exceeded while a query is running, the query is aborted making its transaction invalid."),(0,a.kt)("p",null,"If the flag is set to 0, it will use the default values which are currently set to 90% of the total memory if the system does not have swap memory, and 100% of the total memory if the system has swap memory."),(0,a.kt)("h3",{id:"controlling-the-memory-usage-of-each-query"},"Controlling the memory usage of each query"),(0,a.kt)("p",null,"Each Cypher query can contain a clause of the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"QUERY MEMORY ( UNLIMITED | LIMIT num ( KB | MB) )\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," format is used, you can specify the amount of memory that query can allocate for its execution.\nOnly one clause of this type can be present in a Cypher query and it can go only at the end of it. The limit is applied to the entire query."),(0,a.kt)("h3",{id:"controlling-the-memory-usage-of-each-procedure"},"Controlling the memory usage of each procedure"),(0,a.kt)("p",null,"Each procedure call can contain a clause of the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"PROCEDURE MEMORY ( UNLIMITED | LIMIT num ( KB | MB) )\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," format is used, you can specify the amount of memory that the called procedure can allocate for its execution. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"UNLIMITED")," format is used, no memory restrictions are imposed on the procedure call. Not specifying the clause will set the memory limit to a default value."),(0,a.kt)("p",null,"Each procedure call can have only one clause of this type and it needs to go at the end of the call clause. If a query contains multiple procedure calls, each call can have its own limit specified."),(0,a.kt)("h3",{id:"cleaning-up-unused-memory"},"Cleaning up unused memory"),(0,a.kt)("p",null,"Memgraph has a garbage collector which deallocates unused objects, freeing the memory. The rate of the garbage collection can be specified with the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--storage-gc-cycle-sec"),"."),(0,a.kt)("p",null,"Memgraph also contains the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"FREE MEMORY\n")),(0,a.kt)("p",null,"This query tries to clean up as much unused memory as possible without affecting currently running transactions."))}m.isMDXComponent=!0}}]);