"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=a.createContext({}),l=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,u=d["".concat(m,".").concat(f)]||d[f]||c[f]||n;return r?a.createElement(u,i(i({ref:t},s),{},{components:r})):a.createElement(u,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={id:"overview",title:"Import data from various file formats into Memgraph"},i=void 0,p={unversionedId:"import-data/files/overview",id:"version-2.8.0/import-data/files/overview",title:"Import data from various file formats into Memgraph",description:"At the moment, Memgraph supports importing data from:",source:"@site/memgraph_versioned_docs/version-2.8.0/import-data/files/overview.md",sourceDirName:"import-data/files",slug:"/import-data/files/overview",permalink:"/docs/memgraph/import-data/files/overview",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.8.0/import-data/files/overview.md",tags:[],version:"2.8.0",frontMatter:{id:"overview",title:"Import data from various file formats into Memgraph"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/import-data"},next:{title:"CSV",permalink:"/docs/memgraph/import-data/load-csv-clause"}},m={},l=[],s={toc:l};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At the moment, Memgraph supports importing data from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CSV files")," with ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/import-data/load-csv-clause"},"LOAD CSV clause")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"JSON files")," with ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/import-data/files/load-json"},(0,o.kt)("inlineCode",{parentName:"a"},"json_util")," query module and ",(0,o.kt)("inlineCode",{parentName:"a"},"import_util.json")," procedure"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CYPHERL files")," via ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/import-data/files/cypherl"},"Memgraph Lab or ",(0,o.kt)("inlineCode",{parentName:"a"},"mgconsole")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you can choose the format of the data you want to import, the fastest way to\nimport data into Memgraph is from a CSV file using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/load-csv-clause"},"LOAD CSV\nclause"),". ")))}c.isMDXComponent=!0}}]);