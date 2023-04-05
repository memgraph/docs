"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={id:"indexes",title:"How to work with indexes",sidebar_label:"Work with indexes"},i=void 0,l={unversionedId:"how-to-guides/indexes",id:"how-to-guides/indexes",title:"How to work with indexes",description:"[![Related - Reference",source:"@site/docs/how-to-guides/indexes.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/indexes",permalink:"/docs/memgraph/next/how-to-guides/indexes",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/docs/how-to-guides/indexes.md",tags:[],version:"current",frontMatter:{id:"indexes",title:"How to work with indexes",sidebar_label:"Work with indexes"},sidebar:"memgraph",previous:{title:"Work with Docker",permalink:"/docs/memgraph/next/how-to-guides/work-with-docker"},next:{title:"Manage authentication and authorization",permalink:"/docs/memgraph/next/how-to-guides/manage-users-using-ldap"}},s={},d=[{value:"How to check if indexes exist?",id:"how-to-check-if-indexes-exist",level:2},{value:"How to create indexes?",id:"how-to-create-indexes",level:2},{value:"How to delete indexes?",id:"how-to-delete-indexes",level:2},{value:"Analyze graph",id:"analyze-graph",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/indexing"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference\nGuide"})),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/under-the-hood/indexing"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge",alt:"Related - Under the\nHood"}))),(0,r.kt)("p",null,"A database index is a data structure used to improve the speed of data retrieval\nwithin a database at the cost of additional writes and storage space for\nmaintaining the index data structure."),(0,r.kt)("p",null,"When a query is executed, the engine first checks if there is an index. An index\nstores additional information on certain types of data so that retrieving\nindexed data becomes more efficient."),(0,r.kt)("p",null,"Memgraph supports two types of indexes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"label index"),(0,r.kt)("li",{parentName:"ul"},"label-property index")),(0,r.kt)("h2",{id:"how-to-check-if-indexes-exist"},"How to check if indexes exist?"),(0,r.kt)("p",null,"To check if indexes exist, use the following Cypher query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW INDEX INFO;\n")),(0,r.kt)("p",null,"The results of this query will be all of the labels and label-property pairs\nthat Memgraph currently indexes."),(0,r.kt)("h2",{id:"how-to-create-indexes"},"How to create indexes?"),(0,r.kt)("p",null,"Memgraph will not automatically index labeled data. If you want to optimize\nqueries that fetch nodes using labels, you need to create indexes."),(0,r.kt)("p",null,"If you have a node ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," and you want to create an index for it, run the\nfollowing query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person;\n")),(0,r.kt)("p",null,"You can also create indexes on data with a specific combination of label and\nproperty, hence the name label-property index."),(0,r.kt)("p",null,"For example, if you are storing information about people and you often retrieve\ntheir age, it might be beneficial to create an index on nodes labeled as\n",(0,r.kt)("inlineCode",{parentName:"p"},":Person")," with a property named ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," by using the following language construct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(age);\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For the best performance, create index on properties containing unique integer values.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Creating a label-property index will not create a label index!")),(0,r.kt)("h2",{id:"how-to-delete-indexes"},"How to delete indexes?"),(0,r.kt)("p",null,"You can delete created indexes by using the following Cypher queries:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Person;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Person(age);\n")),(0,r.kt)("p",null,"These queries instruct all active transactions to abort as soon as possible. Once all transactions have finished, the index will be deleted."),(0,r.kt)("h2",{id:"analyze-graph"},"Analyze graph"),(0,r.kt)("p",null,"When multiple label-property indices exist, the database can sometimes select a non-optimal index due to the data's distribution. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ANALYZE GRAPH;")," query calculates the distribution of property values so the database can select a more optimal label-property index with the smallest average property value size. The query is run only once after all indexes have been created and data inserted in the database. The details can be found ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/docs/memgraph/reference-guide/analyze-graph"},"here"),"."))}c.isMDXComponent=!0}}]);