"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21915],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},22826:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={id:"indexing",title:"Indexing",sidebar_label:"Indexing"},s=void 0,p={unversionedId:"reference-guide/indexing",id:"reference-guide/indexing",title:"Indexing",description:"Related - Under the Hood",source:"@site/docs/reference-guide/indexing.md",sourceDirName:"reference-guide",slug:"/reference-guide/indexing",permalink:"/docs/memgraph/next/reference-guide/indexing",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/indexing.md",tags:[],version:"current",frontMatter:{id:"indexing",title:"Indexing",sidebar_label:"Indexing"},sidebar:"memgraph",previous:{title:"Cypher queries (.cypherl format)",permalink:"/docs/memgraph/next/reference-guide/import-data/cypherl"},next:{title:"Inspecting queries",permalink:"/docs/memgraph/next/reference-guide/inspecting-queries"}},d={},c=[{value:"Creating an index",id:"creating-an-index",level:2},{value:"Label index",id:"label-index",level:3},{value:"Label-property index",id:"label-property-index",level:3},{value:"Speed comparison",id:"speed-comparison",level:3},{value:"Display available indexes",id:"display-available-indexes",level:2},{value:"Deleting index",id:"deleting-index",level:2},{value:"Underlying implementation",id:"underlying-implementation",level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/under-the-hood/indexing"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Under%20the%20hood&color=orange&style=for-the-badge",alt:"Related - Under the Hood"}))),(0,i.kt)("p",null,"When you are running queries, you want to get results as soon as possible. In\nthe worst-case scenario, when you execute a query, all nodes need to be checked\nto see if there is a match."),(0,i.kt)("p",null,"Here is what the query plan looks like if there is no index on the data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nocopy"},'memgraph> EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;\n+---------------------------------+\n| QUERY PLAN                      |\n+---------------------------------+\n| " * Produce {n}"                |\n| " * Filter"                     |\n| " * ScanAllByLabel (n :Person)" |\n| " * Once"                       |\n+---------------------------------+\n')),(0,i.kt)("p",null,"By enabling indexes, this process can be much faster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(prop);\n")),(0,i.kt)("p",null,"When a query is executed, the engine first checks if there is an index. An index\nstores additional information on certain types of data so that retrieving\nindexed data becomes more efficient."),(0,i.kt)("p",null,"Here is what the query plan looks like if indexing is enabled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nocopy"},'memgraph> EXPLAIN MATCH (n:Person {prop: 1}) RETURN n;\n+-----------------------------------------------------+\n| QUERY PLAN                                          |\n+-----------------------------------------------------+\n| " * Produce {n}"                                    |\n| " * ScanAllByLabelPropertyValue (n :Person {prop})" |\n| " * Once"                                           |\n+-----------------------------------------------------+\n')),(0,i.kt)("p",null,"There are some downsides to indexing, so it is important to carefully choose the\nright data for creating an index. The downsides of indexing are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"requiring extra storage for each index and"),(0,i.kt)("li",{parentName:"ul"},"slowing down write operations to the database.")),(0,i.kt)("p",null,"Indexing all of the content will not improve the database speed."),(0,i.kt)("h2",{id:"creating-an-index"},"Creating an index"),(0,i.kt)("p",null,"Indexing can be applied to data with a specific label or a combination of label\nand property. They are not automatically created, and the user needs to create\nthem explicitly. Creation is done using a special ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE INDEX ON\n:Label(property)")," language construct."),(0,i.kt)("p",null,"When you create an index, it is added to the registry of indexes."),(0,i.kt)("p",null,"Memgraph supports two types of indexes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"label index"),(0,i.kt)("li",{parentName:"ul"},"label-property index")),(0,i.kt)("h3",{id:"label-index"},"Label index"),(0,i.kt)("p",null,"Memgraph will not automatically index labeled data. If you want to optimize\nqueries that fetch nodes by label, you need to perform the indexing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person;\n")),(0,i.kt)("p",null,"Retrieving nodes using this query is now much more efficient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n;\n")),(0,i.kt)("h3",{id:"label-property-index"},"Label-property index"),(0,i.kt)("p",null,"For example, to index nodes which are labeled as ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," and have a property\nnamed ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(age);\n")),(0,i.kt)("p",null,"After the index is created, retrieving those nodes will become more efficient.\nFor example, the following query will retrieve all nodes which have an ",(0,i.kt)("inlineCode",{parentName:"p"},"age"),"\nproperty, instead of fetching each ",(0,i.kt)("inlineCode",{parentName:"p"},":Person")," node and checking whether the\nproperty exists."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person {age: 42}) RETURN n;\n")),(0,i.kt)("p",null,"Using index-based retrieval also works when filtering labels and properties with\n",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE"),". For example, the same effect as in the previous example can be done\nwith:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;\n")),(0,i.kt)("p",null,"Since the filter inside ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," can contain any kind of an expression, the\nexpression can be complicated enough so that the index does not get used. We are\ncontinuously improving the recognition of index usage opportunities from a\n",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," expression. If there is any suspicion that an index may not be used, we\nrecommend putting properties and labels inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"MATCH")," pattern."),(0,i.kt)("p",null,"When it comes to label-property indexes, MemgraphDB stores a list of specific\nproperties that are used in label property-indexes. This list is ordered to make\nthe search faster. All property types can be ordered. First, they are ordered\nbased on the type and then within that type."),(0,i.kt)("h3",{id:"speed-comparison"},"Speed comparison"),(0,i.kt)("p",null,"After the query execution, you can see how much time the query took to finish.\nBelow you can see a comparison of the same query run without an index and with\nan index."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nocopy"},'memgraph> SHOW INDEX INFO;\nEmpty set (0.001 sec)\n\nmemgraph> MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;\n+-------------+\n| n.name      |\n+-------------+\n| "Lillian"   |\n| "Logan"     |\n| "Susan"     |\n| "Sebastian" |\n+-------------+\n4 rows in set (0.021 sec)\n\nmemgraph> CREATE INDEX ON :Person(name);\nEmpty set (0.015 sec)\n\nmemgraph> MATCH (n:Person) WHERE n.name =~ ".*an$" RETURN n.name;\n+-------------+\n| n.name      |\n+-------------+\n| "Lillian"   |\n| "Logan"     |\n| "Susan"     |\n| "Sebastian" |\n+-------------+\n4 rows in set (0.006 sec)\n')),(0,i.kt)("h2",{id:"display-available-indexes"},"Display available indexes"),(0,i.kt)("p",null,"Information about available indexes can be retrieved by using the following\nsyntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW INDEX INFO;\n")),(0,i.kt)("p",null,"The results of this query will be all of the labels and label-property pairs\nthat Memgraph currently indexes."),(0,i.kt)("h2",{id:"deleting-index"},"Deleting index"),(0,i.kt)("p",null,"Created indexes can also be deleted by using the following syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Label(property);\n")),(0,i.kt)("h2",{id:"underlying-implementation"},"Underlying implementation"),(0,i.kt)("p",null,"The central part of our index data structure is a highly-concurrent ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skip_list"},"skip\nlist"),". Skip lists are probabilistic\ndata structures that allow fast search within an ordered sequence of elements.\nThe structure itself is built in layers where the bottom layer is an ordinary\nlinked list that preserves the order. Each higher level can be imagined as a\nhighway for layers below."),(0,i.kt)("p",null,"The implementation details behind skip list operations are well documented in\nthe literature and are out of scope for this document. Nevertheless, we believe\nthat it is important for more advanced users to understand the following\nimplications of this data structure (",(0,i.kt)("inlineCode",{parentName:"p"},"n")," denotes the current number of elements\nin a skip list):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The average insertion time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"The average deletion time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"The average search time is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(log(n))")),(0,i.kt)("li",{parentName:"ul"},"The average memory consumption is ",(0,i.kt)("inlineCode",{parentName:"li"},"O(n)"))))}m.isMDXComponent=!0}}]);