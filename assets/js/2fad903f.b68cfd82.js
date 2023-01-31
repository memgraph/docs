"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45011],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(t),u=i,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||r;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},9389:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const r={id:"indexing",title:"Indexing",sidebar_label:"Indexing"},o=void 0,l={unversionedId:"reference-guide/indexing",id:"version-2.5.1/reference-guide/indexing",title:"Indexing",description:"[![Related -",source:"@site/memgraph_versioned_docs/version-2.5.1/reference-guide/indexing.md",sourceDirName:"reference-guide",slug:"/reference-guide/indexing",permalink:"/docs/memgraph/2.5.1/reference-guide/indexing",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.5.1/reference-guide/indexing.md",tags:[],version:"2.5.1",frontMatter:{id:"indexing",title:"Indexing",sidebar_label:"Indexing"},sidebar:"memgraph",previous:{title:"Kubernetes",permalink:"/docs/memgraph/2.5.1/reference-guide/deployment/kubernetes"},next:{title:"Inspecting queries",permalink:"/docs/memgraph/2.5.1/reference-guide/inspecting-queries"}},s={},d=[{value:"When to create indexes?",id:"when-to-create-indexes",level:2},{value:"When not to create indexes?",id:"when-not-to-create-indexes",level:2},{value:"Creating an index",id:"creating-an-index",level:2},{value:"Label index",id:"label-index",level:3},{value:"Label-property index",id:"label-property-index",level:3},{value:"Speed comparison",id:"speed-comparison",level:3},{value:"Display available indexes",id:"display-available-indexes",level:2},{value:"Deleting index",id:"deleting-index",level:2},{value:"Underlying implementation",id:"underlying-implementation",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/2.5.1/how-to-guides/indexes"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related -\nHow-to"})),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/2.5.1/under-the-hood/indexing"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge",alt:"Related - Under the\nHood"}))),(0,i.kt)("h2",{id:"when-to-create-indexes"},"When to create indexes?"),(0,i.kt)("p",null,"When you are running queries, you want to get results as soon as possible. In\nthe worst-case scenario, when you execute a query, all nodes need to be checked\nto see if there is a match."),(0,i.kt)("p",null,"Here is what the query plan looks like if there is no index on the data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nocopy"},'memgraph> EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;\n+---------------------------------+\n| QUERY PLAN                      |\n+---------------------------------+\n| " * Produce {n}"                |\n| " * Filter"                     |\n| " * ScanAllByLabel (n :Person)" |\n| " * Once"                       |\n+---------------------------------+\n')),(0,i.kt)("p",null,"By enabling indexes, this process can be much faster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(prop);\n")),(0,i.kt)("p",null,"When a query is executed, the engine first checks if there is an index. An index\nstores additional information on certain types of data so that retrieving\nindexed data becomes more efficient. Indexes basically store data in a different\nkind of way, i.e., they partition it with a key. For example, if you set an\nindex on a label, the query ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH (:Label)"),' won\'t have to explicitly check\nevery node. You just need to check the nodes that were placed on a "shelf". Each\n"shelf" has nodes with a specific label. The data is not copied or duplicated to\nthe "shelf". You actually create a memory map to those nodes and there is no\nneed to look anywhere else for them.'),(0,i.kt)("p",null,"Here is what the query plan looks like if indexing is enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nocopy"},'memgraph> EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;\n+-----------------------------------------------------+\n| QUERY PLAN                                          |\n+-----------------------------------------------------+\n| " * Produce {n}"                                    |\n| " * ScanAllByLabelPropertyValue (n :Person {prop})" |\n| " * Once"                                           |\n+-----------------------------------------------------+\n')),(0,i.kt)("h2",{id:"when-not-to-create-indexes"},"When not to create indexes?"),(0,i.kt)("p",null,"There are some downsides to indexing, so it is important to carefully choose the\nright data for creating an index. The downsides of indexing are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"requiring extra storage (memory) for each index and"),(0,i.kt)("li",{parentName:"ul"},"slowing down write operations to the database.")),(0,i.kt)("p",null,"Indexing all of the content will not improve the database speed. The structures\nin the index are dynamically updated on modifications or insertions\xa0of new\nnodes. Once a new node is created, it needs to be assigned to an index group.\nSuch an indexed node will be retrieved much faster from the database."),(0,i.kt)("p",null,"Indexing will also not bring any improvement if a large number of properties\nhave the same value. Take a look at the following example. Let's say you have\nsome property that can have 10 distinct values. Those values are integers in the\nrange 1 to 10. If you have 100 nodes stored in the database and 1 of them has a\nscore of 1 while the others have a score of 10 (99 of them), then that is not a\ngood distinguisher. If 10 of them have a score of 1, 10 of them have a score of\n2, etc. then it is a good distinguisher because it partitions them to cut the\norder of searching by one magnitude."),(0,i.kt)("p",null,"Also, indexing certain data types will not bring any significant performance\ngain, e.g., for boolean in the best case scenario, the time will be cut in half."),(0,i.kt)("h2",{id:"creating-an-index"},"Creating an index"),(0,i.kt)("p",null,"Indexing can be applied to data with a specific label or a combination of label\nand property. They are not automatically created, and the user needs to create\nthem explicitly. Creation is done using a special ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE INDEX ON\n:Label(property)")," language construct."),(0,i.kt)("p",null,"When you create an index, it is added to the registry of indexes."),(0,i.kt)("p",null,"Memgraph supports two types of indexes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"label index"),(0,i.kt)("li",{parentName:"ul"},"label-property index")),(0,i.kt)("h3",{id:"label-index"},"Label index"),(0,i.kt)("p",null,"Memgraph will not automatically index labeled data. If you want to optimize\nqueries that fetch nodes by label, you need to create the indexes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person;\n")),(0,i.kt)("p",null,"Retrieving nodes using this query is now much more efficient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n;\n")),(0,i.kt)("h3",{id:"label-property-index"},"Label-property index"),(0,i.kt)("p",null,"For example, to index nodes that are labeled as ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," and have a property\nnamed ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(age);\n")),(0,i.kt)("p",null,"After the index is created, retrieving those nodes will become more efficient.\nFor example, the following query will retrieve all nodes which have an ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),"\nproperty, instead of fetching each ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," node and checking whether the\nproperty exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person {age: 42}) RETURN n;\n")),(0,i.kt)("p",null,"Using index-based retrieval also works when filtering labels and properties with\n",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE"),". For example, the same effect as in the previous example can be done\nwith:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;\n")),(0,i.kt)("p",null,"Since the filter inside ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," can contain any kind of an expression, the\nexpression can be complicated enough so that the index does not get used. We are\ncontinuously improving the recognition of index usage opportunities from a\n",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," expression. If there is any suspicion that an index may not be used, we\nrecommend putting properties and labels inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH")," pattern."),(0,i.kt)("p",null,"When it comes to label-property indexes, MemgraphDB stores a list of specific\nproperties that are used in label property-indexes. This list is ordered to make\nthe search faster. All property types can be ordered. First, they are ordered\nbased on the type and then within that type."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For the best performance, create index on properties containing unique integer values.")),(0,i.kt)("h3",{id:"speed-comparison"},"Speed comparison"),(0,i.kt)("p",null,"After the query execution, you can see how much time the query took to finish.\nBelow you can see a comparison of the same query run without an index and with\nan index."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nocopy"},'memgraph> SHOW INDEX INFO;\nEmpty set (0.001 sec)\n\nmemgraph> MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;\n+-------------+\n| n.name      |\n+-------------+\n| "Lillian"   |\n| "Logan"     |\n| "Susan"     |\n| "Sebastian" |\n+-------------+\n4 rows in set (0.021 sec)\n\nmemgraph> CREATE INDEX ON :Person(name);\nEmpty set (0.015 sec)\n\nmemgraph> MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;\n+-------------+\n| n.name      |\n+-------------+\n| "Lillian"   |\n| "Logan"     |\n| "Susan"     |\n| "Sebastian" |\n+-------------+\n4 rows in set (0.006 sec)\n')),(0,i.kt)("h2",{id:"display-available-indexes"},"Display available indexes"),(0,i.kt)("p",null,"Information about available indexes can be retrieved by using the following\nsyntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW INDEX INFO;\n")),(0,i.kt)("p",null,"The results of this query will be all of the labels and label-property pairs\nthat Memgraph currently indexes."),(0,i.kt)("h2",{id:"deleting-index"},"Deleting index"),(0,i.kt)("p",null,"Created indexes can also be deleted by using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Label(property);\n")),(0,i.kt)("h2",{id:"underlying-implementation"},"Underlying implementation"),(0,i.kt)("p",null,"The central part of our index data structure is a highly-concurrent ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skip_list"},"skip\nlist"),". Skip lists are probabilistic\ndata structures that allow fast search within an ordered sequence of elements.\nThe structure itself is built in layers where the bottom layer is an ordinary\nlinked list that preserves the order. Each higher level can be imagined as a\nhighway for layers below."),(0,i.kt)("p",null,"The implementation details behind skip list operations are well documented in\nthe literature and are out of scope for this document. Nevertheless, we believe\nthat it is important for more advanced users to understand the following\nimplications of this data structure (",(0,i.kt)("inlineCode",{parentName:"p"},"n")," denotes the current number of elements\nin a skip list):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The average insertion time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"The average deletion time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"The average search time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"The average memory consumption is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(n)"))))}c.isMDXComponent=!0}}]);