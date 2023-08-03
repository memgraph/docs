"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||n;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},78651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={id:"overview",title:"Export data",sidebar_label:"Export data",slug:"/export-data"},l=void 0,p={unversionedId:"export-data/overview",id:"version-2.10.0/export-data/overview",title:"Export data",description:"Memgraph allows you to export all the data from the database, or results from an executed query.",source:"@site/memgraph_versioned_docs/version-2.10.0/export-data/overview.md",sourceDirName:"export-data",slug:"/export-data",permalink:"/docs/memgraph/export-data",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/export-data/overview.md",tags:[],version:"2.10.0",frontMatter:{id:"overview",title:"Export data",sidebar_label:"Export data",slug:"/export-data"},sidebar:"memgraph",previous:{title:"PostgreSQL",permalink:"/docs/memgraph/import-data/migrate/postgresql"},next:{title:"Tutorials overview",permalink:"/docs/memgraph/tutorials"}},i={},s=[{value:"Export database",id:"export-database",level:2},{value:"Export query results",id:"export-query-results",level:2},{value:"Where to next?",id:"where-to-next",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Memgraph allows you to export all the data from the database, or results from an executed query."),(0,o.kt)("h2",{id:"export-database"},"Export database"),(0,o.kt)("p",null,"Export database to the following file formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/memgraph-lab/user-manual#import--export"},"CYPHERL using Memgraph Lab")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/mage/query-modules/python/export-util"},"JSON using the ",(0,o.kt)("inlineCode",{parentName:"a"},"export_util.json")," procedure")," from MAGE - graph algorithms and modules library.")),(0,o.kt)("p",null,"You can also export data to Elasticsearch and enable continuous data\nsynchronization using the ",(0,o.kt)("a",{parentName:"p",href:"/mage/query-modules/python/elasticsearch-synchronization"},(0,o.kt)("inlineCode",{parentName:"a"},"elasticsearch_synchronization")," query\nmodule")," available in\nMAGE - graph algorithms and modules library. "),(0,o.kt)("h2",{id:"export-query-results"},"Export query results"),(0,o.kt)("p",null,"Query results can be exported to a CSV, TSV and JSON file ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-lab/user-manual#data-results"},"using Memgraph Lab"),"."),(0,o.kt)("p",null,"To export query results from Memgraph Lab: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run a query or select results you want to export."),(0,o.kt)("li",{parentName:"ol"},"Click Export results and choose CSV."),(0,o.kt)("li",{parentName:"ol"},"Save the file locally.")),(0,o.kt)("p",null,"Results can also be exported to a CSV file using the ",(0,o.kt)("a",{parentName:"p",href:"/mage/query-modules/python/export-util#csv_queryquery-file_path-stream"},(0,o.kt)("inlineCode",{parentName:"a"},"export_util.csv_query()"),"\nprocedure"),"\nfrom MAGE - graph algorithms and modules library."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"Now that you exported data, ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data"},"import")," it back into a\nnew Memgraph instance."))}m.isMDXComponent=!0}}]);