"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22359],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),h=i,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5778:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],l={id:"indexing",title:"Indexing",sidebar_label:"Indexing"},s=void 0,d={unversionedId:"reference-guide/indexing",id:"version-2.4.0/reference-guide/indexing",title:"Indexing",description:"[![Related -",source:"@site/memgraph_versioned_docs/version-2.4.0/reference-guide/indexing.md",sourceDirName:"reference-guide",slug:"/reference-guide/indexing",permalink:"/docs/memgraph/2.4.0/reference-guide/indexing",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.0/reference-guide/indexing.md",tags:[],version:"2.4.0",frontMatter:{id:"indexing",title:"Indexing",sidebar_label:"Indexing"},sidebar:"memgraph",previous:{title:"Kubernetes",permalink:"/docs/memgraph/2.4.0/reference-guide/deployment/kubernetes"},next:{title:"Inspecting queries",permalink:"/docs/memgraph/2.4.0/reference-guide/inspecting-queries"}},p={},c=[{value:"When to create indexes?",id:"when-to-create-indexes",level:2},{value:"When not to create indexes?",id:"when-not-to-create-indexes",level:2},{value:"Creating an index",id:"creating-an-index",level:2},{value:"Label index",id:"label-index",level:3},{value:"Label-property index",id:"label-property-index",level:3},{value:"Speed comparison",id:"speed-comparison",level:3},{value:"Display available indexes",id:"display-available-indexes",level:2},{value:"Deleting index",id:"deleting-index",level:2},{value:"Underlying implementation",id:"underlying-implementation",level:2}],u={toc:c};function h(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/how-to-guides/indexes"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related -\nHow-to"})),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.0/under-the-hood/indexing"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge",alt:"Related - Under the\nHood"}))),(0,r.kt)("h2",{id:"when-to-create-indexes"},"When to create indexes?"),(0,r.kt)("p",null,"When you are running queries, you want to get results as soon as possible. In\nthe worst-case scenario, when you execute a query, all nodes need to be checked\nto see if there is a match."),(0,r.kt)("p",null,"Here is what the query plan looks like if there is no index on the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'memgraph> EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;\n+---------------------------------+\n| QUERY PLAN                      |\n+---------------------------------+\n| " * Produce {n}"                |\n| " * Filter"                     |\n| " * ScanAllByLabel (n :Person)" |\n| " * Once"                       |\n+---------------------------------+\n')),(0,r.kt)("p",null,"By enabling indexes, this process can be much faster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(prop);\n")),(0,r.kt)("p",null,"When a query is executed, the engine first checks if there is an index. An index\nstores additional information on certain types of data so that retrieving\nindexed data becomes more efficient. Indexes basically store data in a different\nkind of way, i.e., they partition it with a key. For example, if you set an\nindex on a label, the query ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (:Label)"),' won\'t have to explicitly check\nevery node. You just need to check the nodes that were placed on a "shelf". Each\n"shelf" has nodes with a specific label. The data is not copied or duplicated to\nthe "shelf". You actually create a memory map to those nodes and there is no\nneed to look anywhere else for them.'),(0,r.kt)("p",null,"Here is what the query plan looks like if indexing is enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'memgraph> EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;\n+-----------------------------------------------------+\n| QUERY PLAN                                          |\n+-----------------------------------------------------+\n| " * Produce {n}"                                    |\n| " * ScanAllByLabelPropertyValue (n :Person {prop})" |\n| " * Once"                                           |\n+-----------------------------------------------------+\n')),(0,r.kt)("h2",{id:"when-not-to-create-indexes"},"When not to create indexes?"),(0,r.kt)("p",null,"There are some downsides to indexing, so it is important to carefully choose the\nright data for creating an index. The downsides of indexing are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"requiring extra storage (memory) for each index and"),(0,r.kt)("li",{parentName:"ul"},"slowing down write operations to the database.")),(0,r.kt)("p",null,"Indexing all of the content will not improve the database speed. The structures\nin the index are dynamically updated on modifications or insertions\xa0of new\nnodes. Once a new node is created, it needs to be assigned to an index group.\nSuch an indexed node will be retrieved much faster from the database."),(0,r.kt)("p",null,"Indexing will also not bring any improvement if a large number of properties\nhave the same value. Take a look at the following example. Let's say you have\nsome property that can have 10 distinct values. Those values are integers in the\nrange 1 to 10. If you have 100 nodes stored in the database and 1 of them has a\nscore of 1 while the others have a score of 10 (99 of them), then that is not a\ngood distinguisher. If 10 of them have a score of 1, 10 of them have a score of\n2, etc. then it is a good distinguisher because it partitions them to cut the\norder of searching by one magnitude."),(0,r.kt)("p",null,"Also, indexing certain data types will not bring any significant performance\ngain, e.g., for boolean in the best case scenario, the time will be cut in half."),(0,r.kt)("h2",{id:"creating-an-index"},"Creating an index"),(0,r.kt)("p",null,"Indexing can be applied to data with a specific label or a combination of label\nand property. They are not automatically created, and the user needs to create\nthem explicitly. Creation is done using a special ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE INDEX ON\n:Label(property)")," language construct."),(0,r.kt)("p",null,"When you create an index, it is added to the registry of indexes."),(0,r.kt)("p",null,"Memgraph supports two types of indexes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"label index"),(0,r.kt)("li",{parentName:"ul"},"label-property index")),(0,r.kt)("h3",{id:"label-index"},"Label index"),(0,r.kt)("p",null,"Memgraph will not automatically index labeled data. If you want to optimize\nqueries that fetch nodes by label, you need to create the indexes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person;\n")),(0,r.kt)("p",null,"Retrieving nodes using this query is now much more efficient:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n;\n")),(0,r.kt)("h3",{id:"label-property-index"},"Label-property index"),(0,r.kt)("p",null,"For example, to index nodes that are labeled as ",(0,r.kt)("inlineCode",{parentName:"p"},":Person")," and have a property\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(age);\n")),(0,r.kt)("p",null,"After the index is created, retrieving those nodes will become more efficient.\nFor example, the following query will retrieve all nodes which have an ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),"\nproperty, instead of fetching each ",(0,r.kt)("inlineCode",{parentName:"p"},":Person")," node and checking whether the\nproperty exists:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person {age: 42}) RETURN n;\n")),(0,r.kt)("p",null,"Using index-based retrieval also works when filtering labels and properties with\n",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE"),". For example, the same effect as in the previous example can be done\nwith:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;\n")),(0,r.kt)("p",null,"Since the filter inside ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," can contain any kind of an expression, the\nexpression can be complicated enough so that the index does not get used. We are\ncontinuously improving the recognition of index usage opportunities from a\n",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," expression. If there is any suspicion that an index may not be used, we\nrecommend putting properties and labels inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," pattern."),(0,r.kt)("p",null,"When it comes to label-property indexes, MemgraphDB stores a list of specific\nproperties that are used in label property-indexes. This list is ordered to make\nthe search faster. All property types can be ordered. First, they are ordered\nbased on the type and then within that type."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For the best performance, create index on properties containing unique integer values."))),(0,r.kt)("h3",{id:"speed-comparison"},"Speed comparison"),(0,r.kt)("p",null,"After the query execution, you can see how much time the query took to finish.\nBelow you can see a comparison of the same query run without an index and with\nan index."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'memgraph> SHOW INDEX INFO;\nEmpty set (0.001 sec)\n\nmemgraph> MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;\n+-------------+\n| n.name      |\n+-------------+\n| "Lillian"   |\n| "Logan"     |\n| "Susan"     |\n| "Sebastian" |\n+-------------+\n4 rows in set (0.021 sec)\n\nmemgraph> CREATE INDEX ON :Person(name);\nEmpty set (0.015 sec)\n\nmemgraph> MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;\n+-------------+\n| n.name      |\n+-------------+\n| "Lillian"   |\n| "Logan"     |\n| "Susan"     |\n| "Sebastian" |\n+-------------+\n4 rows in set (0.006 sec)\n')),(0,r.kt)("h2",{id:"display-available-indexes"},"Display available indexes"),(0,r.kt)("p",null,"Information about available indexes can be retrieved by using the following\nsyntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW INDEX INFO;\n")),(0,r.kt)("p",null,"The results of this query will be all of the labels and label-property pairs\nthat Memgraph currently indexes."),(0,r.kt)("h2",{id:"deleting-index"},"Deleting index"),(0,r.kt)("p",null,"Created indexes can also be deleted by using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Label(property);\n")),(0,r.kt)("h2",{id:"underlying-implementation"},"Underlying implementation"),(0,r.kt)("p",null,"The central part of our index data structure is a highly-concurrent ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skip_list"},"skip\nlist"),". Skip lists are probabilistic\ndata structures that allow fast search within an ordered sequence of elements.\nThe structure itself is built in layers where the bottom layer is an ordinary\nlinked list that preserves the order. Each higher level can be imagined as a\nhighway for layers below."),(0,r.kt)("p",null,"The implementation details behind skip list operations are well documented in\nthe literature and are out of scope for this document. Nevertheless, we believe\nthat it is important for more advanced users to understand the following\nimplications of this data structure (",(0,r.kt)("inlineCode",{parentName:"p"},"n")," denotes the current number of elements\nin a skip list):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The average insertion time is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,r.kt)("li",{parentName:"ul"},"The average deletion time is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,r.kt)("li",{parentName:"ul"},"The average search time is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,r.kt)("li",{parentName:"ul"},"The average memory consumption is ",(0,r.kt)("inlineCode",{parentName:"li"},"O(n)"))))}h.isMDXComponent=!0}}]);