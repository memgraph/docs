"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12149],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),d=o,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},20490:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"overview",title:"Import data from CSV files"},p=void 0,s={unversionedId:"import-data/csv/overview",id:"version-2.3.1/import-data/csv/overview",title:"Import data from CSV files",description:"If your data is in CSV format, you can import it into the Memgraph database",source:"@site/memgraph_versioned_docs/version-2.3.1/import-data/csv/overview.md",sourceDirName:"import-data/csv",slug:"/import-data/csv/overview",permalink:"/docs/memgraph/import-data/csv/overview",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/import-data/csv/overview.md",tags:[],version:"2.3.1",frontMatter:{id:"overview",title:"Import data from CSV files"},sidebar:"memgraph",previous:{title:"Import data overview",permalink:"/docs/memgraph/import-data"},next:{title:"LOAD CSV Cypher clause",permalink:"/docs/memgraph/import-data/load-csv-clause"}},u={},m=[],l={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your data is in CSV format, you can import it into the Memgraph database\nusing ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/load-csv-clause"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"LOAD CSV")," Cypher clause")),". "),(0,a.kt)("p",null,"Once you have a running Memgraph instance, you can trigger data import from a\ndesignated CSV file. Import populates the database if it is empty, or appends\nnew data to an existing dataset."))}d.isMDXComponent=!0}}]);