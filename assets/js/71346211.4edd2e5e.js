"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),g=a,y=p["".concat(u,".").concat(g)]||p[g]||s[g]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={id:"memory-control",title:"Controlling memory usage",sidebar_label:"Controlling memory usage"},l=void 0,i={unversionedId:"reference-guide/memory-control",id:"version-2.6.0/reference-guide/memory-control",title:"Controlling memory usage",description:"In Memgraph, you can control memory usage by limiting, inspecting and",source:"@site/memgraph_versioned_docs/version-2.6.0/reference-guide/memory-control.md",sourceDirName:"reference-guide",slug:"/reference-guide/memory-control",permalink:"/docs/memgraph/2.6.0/reference-guide/memory-control",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.6.0/reference-guide/memory-control.md",tags:[],version:"2.6.0",frontMatter:{id:"memory-control",title:"Controlling memory usage",sidebar_label:"Controlling memory usage"},sidebar:"memgraph",previous:{title:"Built-in graph algorithms",permalink:"/docs/memgraph/2.6.0/reference-guide/built-in-graph-algorithms"},next:{title:"Configuration settings",permalink:"/docs/memgraph/2.6.0/reference-guide/configuration"}},u={},m=[{value:"Controlling the memory usage of an instance",id:"controlling-the-memory-usage-of-an-instance",level:2},{value:"Controlling the memory usage of a query",id:"controlling-the-memory-usage-of-a-query",level:2},{value:"Controlling the memory usage of a procedure",id:"controlling-the-memory-usage-of-a-procedure",level:2},{value:"Inspecting memory usage",id:"inspecting-memory-usage",level:2},{value:"Deallocating memory",id:"deallocating-memory",level:2}],c={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Memgraph, you can control memory usage by limiting, inspecting and\ndeallocating memory. "),(0,a.kt)("p",null,"You can control the memory usage of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a whole instance by setting the ",(0,a.kt)("inlineCode",{parentName:"li"},"--memory-limit")," within the configuration file "),(0,a.kt)("li",{parentName:"ul"},"a query by including the ",(0,a.kt)("inlineCode",{parentName:"li"},"QUERY MEMORY")," clause at the end of a query"),(0,a.kt)("li",{parentName:"ul"},"a procedure by including a ",(0,a.kt)("inlineCode",{parentName:"li"},"PROCEDURE MEMORY")," clause")),(0,a.kt)("h2",{id:"controlling-the-memory-usage-of-an-instance"},"Controlling the memory usage of an instance"),(0,a.kt)("p",null,"By setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"--memory-limit")," flag in the configuration file, you can set\nthe maximum amount of memory (in MiB) that a Memgraph instance can allocate\nduring its runtime. If the memory limit is exceeded, only the queries that don't\nrequire additional memory are allowed. If the memory limit is exceeded while a\nquery is running, the query is aborted and its transaction becomes invalid."),(0,a.kt)("p",null,"If the flag is set to 0, it will use the default values.\nDefault values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"90% of the total memory if the system doesn't have swap memory."),(0,a.kt)("li",{parentName:"ul"},"100% of the total memory if the system has swap memory.")),(0,a.kt)("h2",{id:"controlling-the-memory-usage-of-a-query"},"Controlling the memory usage of a query"),(0,a.kt)("p",null,"Each Cypher query can include the following clause at the end:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"QUERY MEMORY ( UNLIMITED | LIMIT num (KB | MB) )\n")),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," option, you have to specify the amount of memory a query\ncan allocate for its execution. You can use this clause in a query only once at\nthe end of the query. The limit is applied to the entire query."),(0,a.kt)("p",null,"Examples: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"MATCH (n) RETURN (n) QUERY MEMORY LIMIT 10 KB;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"MATCH (n) RETURN (n) QUERY MEMORY UNLIMITED;\n")),(0,a.kt)("h2",{id:"controlling-the-memory-usage-of-a-procedure"},"Controlling the memory usage of a procedure"),(0,a.kt)("p",null,"Each procedure call can contain the following clause:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"PROCEDURE MEMORY ( UNLIMITED | LIMIT num ( KB | MB) )\n")),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," option, you can specify the amount of memory that the\ncalled procedure can allocate for its execution. If you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"UNLIMITED"),"\noption, no memory restrictions will be imposed when the procedure is called. If\nyou don't specify the clause, the memory limit is set to a default value of 100 MB."),(0,a.kt)("p",null,"One procedure call can have only one ",(0,a.kt)("inlineCode",{parentName:"p"},"PROCEDURE MEMORY")," clause at the end of the\ncall. If a query contains multiple procedure calls, each call can have its own\nlimit specification."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 KB YIELD result;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY LIMIT 100 MB YIELD result;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"CALL example.procedure(arg1, arg2, ...) PROCEDURE MEMORY UNLIMITED YIELD result;\n")),(0,a.kt)("h2",{id:"inspecting-memory-usage"},"Inspecting memory usage"),(0,a.kt)("p",null,"Run the following query to inspect memory usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"SHOW STORAGE INFO;\n")),(0,a.kt)("p",null,"Find out more about ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW STORAGE INFO")," query on ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/2.6.0/reference-guide/server-stats"},"Server stats"),"."),(0,a.kt)("h2",{id:"deallocating-memory"},"Deallocating memory"),(0,a.kt)("p",null,"Memgraph has a garbage collector that deallocates unused objects, thus freeing\nthe memory. The rate of the garbage collection in seconds can be specified in\nthe configuration file by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"--storage-gc-cycle-sec"),"."),(0,a.kt)("p",null,"You can free up memory by using the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"FREE MEMORY;\n")),(0,a.kt)("p",null,"This query tries to clean up as much unused memory as possible without affecting\ncurrently running transactions."))}s.isMDXComponent=!0}}]);