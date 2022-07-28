"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53364],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||l[d]||o;return r?a.createElement(f,s(s({ref:t},m),{},{components:r})):a.createElement(f,s({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42604:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"overview",title:"Connect to data streams",sidebar_label:"Connect to data streams"},c=void 0,p={unversionedId:"import-data/data-streams/overview",id:"import-data/data-streams/overview",title:"Connect to data streams",description:"Memgraph can natively ingest streaming data from upstream sources using [Apache",source:"@site/docs/import-data/data-streams/overview.md",sourceDirName:"import-data/data-streams",slug:"/import-data/data-streams/overview",permalink:"/docs/memgraph/next/import-data/data-streams/overview",editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/data-streams/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Connect to data streams",sidebar_label:"Connect to data streams"},sidebar:"memgraph",previous:{title:"CSV files",permalink:"/docs/memgraph/next/import-data/load-csv-clause"},next:{title:"Connect using Cypher queries",permalink:"/docs/memgraph/next/import-data/data-streams/manage-streams"}},m={},l=[],u={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Memgraph can natively ingest streaming data from upstream sources using ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache\nKafka"),", ",(0,o.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"Redpanda")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/"},"Pulsar"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/tutorials/graph-stream-processing-with-kafka"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related - Tutorial"}))," ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/streams"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,o.kt)("p",null,"The following pages instruct how to connect to data streams to ingest the data\nand manage the connection using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/next/import-data/data-streams/manage-streams"},"Cypher queries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/next/import-data/data-streams/manage-streams-lab"},"a wizard in the ",(0,o.kt)("strong",{parentName:"a"},"Stream")," section of Memgraph Lab"))))}d.isMDXComponent=!0}}]);