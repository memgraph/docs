"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=m(r),u=n,d=f["".concat(l,".").concat(u)]||f[u]||c[u]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={id:"overview",title:"Import data from various file formats into Memgraph"},i=void 0,p={unversionedId:"import-data/files/overview",id:"import-data/files/overview",title:"Import data from various file formats into Memgraph",description:"At the moment, Memgraph supports importing data from:",source:"@site/docs/import-data/files/overview.md",sourceDirName:"import-data/files",slug:"/import-data/files/overview",permalink:"/docs/memgraph/next/import-data/files/overview",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/files/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Import data from various file formats into Memgraph"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/next/import-data"},next:{title:"CSV",permalink:"/docs/memgraph/next/import-data/load-csv-clause"}},l={},m=[],s={toc:m};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"At the moment, Memgraph supports importing data from:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CSV files")," with ",(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/next/import-data/load-csv-clause"},"LOAD CSV clause")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"JSON files")," with ",(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/next/import-data/files/load-json"},"JSON query module"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CYPHERL files")," via ",(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/next/import-data/files/cypherl"},"Memgraph Lab or ",(0,n.kt)("inlineCode",{parentName:"a"},"mgconsole")))))}c.isMDXComponent=!0}}]);