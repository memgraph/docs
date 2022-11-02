"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13667],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(l,".").concat(u)]||d[u]||s[u]||o;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31298:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={id:"overview",title:"Import data",sidebar_label:"Import data overview"},i=void 0,p={unversionedId:"reference-guide/import-data/overview",id:"version-2.2.1/reference-guide/import-data/overview",title:"Import data",description:"There are three main methods for importing data into Memgraph:",source:"@site/memgraph_versioned_docs/version-2.2.1/reference-guide/import-data/overview.md",sourceDirName:"reference-guide/import-data",slug:"/reference-guide/import-data/overview",permalink:"/docs/memgraph/2.2.1/reference-guide/import-data/overview",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.1/reference-guide/import-data/overview.md",tags:[],version:"2.2.1",frontMatter:{id:"overview",title:"Import data",sidebar_label:"Import data overview"},sidebar:"memgraph",previous:{title:"Data types",permalink:"/docs/memgraph/2.2.1/reference-guide/data-types"},next:{title:"LOAD CSV Cypher clause",permalink:"/docs/memgraph/2.2.1/reference-guide/import-data/load-csv-clause"}},l={},c=[],m={toc:c};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are three main methods for importing data into Memgraph:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/memgraph/reference-guide/import-data/csv-import-tool"},"CSV Import Tool")),":\nMemgraph includes the CSV import tool which allows you to import nodes and\nrelationships from multiple CSV files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.1/reference-guide/import-data/load-csv-clause"},"LOAD CSV Clause")),": You\ncan also use the Cypher clause ",(0,a.kt)("inlineCode",{parentName:"li"},"LOAD CSV")," to load data from CSV files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.2.1/reference-guide/import-data/cypherl"},"Importing Cypher queries")),": If\nyour data is saved in the form of Cypher queries (we call this ",(0,a.kt)("inlineCode",{parentName:"li"},".cypherl"),"\nformat) then this is the right approach for you.")))}s.isMDXComponent=!0}}]);