"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24247],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60195:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"indexes",title:"Working with indexes",sidebar_label:"Working with indexes"},s=void 0,d={unversionedId:"how-to-guides/indexes",id:"version-2.2.1/how-to-guides/indexes",title:"Working with indexes",description:"[![Related - Reference",source:"@site/memgraph_versioned_docs/version-2.2.1/how-to-guides/indexes.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/indexes",permalink:"/docs/memgraph/2.2.1/how-to-guides/indexes",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.1/how-to-guides/indexes.md",tags:[],version:"2.2.1",frontMatter:{id:"indexes",title:"Working with indexes",sidebar_label:"Working with indexes"},sidebar:"memgraph",previous:{title:"Manage user privileges",permalink:"/docs/memgraph/2.2.1/how-to-guides/manage-user-privileges"},next:{title:"Reference guide overview",permalink:"/docs/memgraph/2.2.1/reference-guide"}},c={},u=[{value:"How to check if indexes exist?",id:"how-to-check-if-indexes-exist",level:2},{value:"How to create indexes?",id:"how-to-create-indexes",level:2},{value:"How to delete indexes?",id:"how-to-delete-indexes",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/reference-guide/indexing"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference\nGuide"})),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.1/under-the-hood/indexing"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge",alt:"Related - Under the\nHood"}))),(0,o.kt)("p",null,"A database index is a data structure used to improve the speed of data retrieval\nwithin a database at the cost of additional writes and storage space for\nmaintaining the index data structure."),(0,o.kt)("p",null,"When a query is executed, the engine first checks if there is an index. An index\nstores additional information on certain types of data so that retrieving\nindexed data becomes more efficient."),(0,o.kt)("p",null,"Memgraph supports two types of indexes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"label index"),(0,o.kt)("li",{parentName:"ul"},"label-property index")),(0,o.kt)("h2",{id:"how-to-check-if-indexes-exist"},"How to check if indexes exist?"),(0,o.kt)("p",null,"To check if indexes exist, use the following Cypher query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW INDEX INFO;\n")),(0,o.kt)("p",null,"The results of this query will be all of the labels and label-property pairs\nthat Memgraph currently indexes."),(0,o.kt)("h2",{id:"how-to-create-indexes"},"How to create indexes?"),(0,o.kt)("p",null,"Memgraph will not automatically index labeled data. If you want to optimize\nqueries that fetch nodes using labels, you need to create indexes."),(0,o.kt)("p",null,"If you have a node ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," and you want to create an index for it, run the\nfollowing query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person;\n")),(0,o.kt)("p",null,"You can also create indexes on data with a specific combination of label and\nproperty, hence the name label-property index."),(0,o.kt)("p",null,"For example, if you are storing information about people and you often retrieve\ntheir age, it might be beneficial to create an index on nodes labeled as\n",(0,o.kt)("inlineCode",{parentName:"p"},":Person")," with a property named ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," by using the following language construct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(age);\n")),(0,o.kt)("h2",{id:"how-to-delete-indexes"},"How to delete indexes?"),(0,o.kt)("p",null,"You can delete created indexes by using the following Cypher queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Person;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Person(age);\n")),(0,o.kt)("p",null,"These queries instruct all active transactions to abort as soon as possible. Once all transactions have finished, the index will be deleted."))}h.isMDXComponent=!0}}]);