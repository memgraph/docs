"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53766],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),m=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=m(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=m(t),u=o,f=d["".concat(l,".").concat(u)]||d[u]||s[u]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var m=2;m<a;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17390:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>m});var n=t(87462),o=(t(67294),t(3905));const a={id:"overview",title:"Import data",sidebar_label:"Import data overview"},i=void 0,p={unversionedId:"reference-guide/import-data/overview",id:"version-2.1.0/reference-guide/import-data/overview",title:"Import data",description:"There are three main methods for importing data into Memgraph:",source:"@site/memgraph_versioned_docs/version-2.1.0/reference-guide/import-data/overview.md",sourceDirName:"reference-guide/import-data",slug:"/reference-guide/import-data/overview",permalink:"/docs/memgraph/2.1.0/reference-guide/import-data/overview",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/reference-guide/import-data/overview.md",tags:[],version:"2.1.0",frontMatter:{id:"overview",title:"Import data",sidebar_label:"Import data overview"},sidebar:"version-2.1.0/memgraph",previous:{title:"Graph algorithms",permalink:"/docs/memgraph/2.1.0/reference-guide/graph-algorithms"},next:{title:"CSV Import Tool",permalink:"/docs/memgraph/2.1.0/reference-guide/import-data/csv-import-tool"}},l={},m=[],c={toc:m};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are three main methods for importing data into Memgraph:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/memgraph/reference-guide/import-data/csv-import-tool"},"CSV Import Tool")),":\nMemgraph includes the CSV Import Tool which allows you to import nodes and\nrelationships from multiple CSV files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/reference-guide/import-data/load-csv-clause"},"LOAD CSV Clause")),": You\ncan also use the Cypher clause ",(0,o.kt)("inlineCode",{parentName:"li"},"LOAD CSV")," to load data from CSV files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.0/reference-guide/import-data/cypherl"},"Importing Cypher queries")),": If\nyour data is saved in the form of Cypher queries (we call this ",(0,o.kt)("inlineCode",{parentName:"li"},".cypherl"),"\nformat) then this is the right approach for you.")))}s.isMDXComponent=!0}}]);