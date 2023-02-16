"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57251],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(t),c=r,m=h["".concat(o,".").concat(c)]||h[c]||d[c]||l;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=h;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},75508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={id:"reading-existing-data",title:"Reading existing data",sidebar_label:"Reading existing data",slug:"/reading-existing-data"},i=void 0,s={unversionedId:"reading-existing-data",id:"reading-existing-data",title:"Reading existing data",description:"The simplest usage of the language is to find data stored in the database. For",source:"@site/cypher-manual/reading-existing-data.md",sourceDirName:".",slug:"/reading-existing-data",permalink:"/docs/cypher-manual/reading-existing-data",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/reading-existing-data.md",tags:[],version:"current",frontMatter:{id:"reading-existing-data",title:"Reading existing data",sidebar_label:"Reading existing data",slug:"/reading-existing-data"},sidebar:"cypher_manual",previous:{title:"Connecting nodes",permalink:"/docs/cypher-manual/connecting-nodes"},next:{title:"Updating nodes and relationships",permalink:"/docs/cypher-manual/updating-nodes-and-relationships"}},o={},p=[{value:"MATCH",id:"match",level:2},{value:"WHERE",id:"where",level:2},{value:"Regular expressions",id:"regular-expressions",level:3},{value:"RETURN",id:"return",level:2},{value:"SKIP &amp; LIMIT",id:"skip--limit",level:3},{value:"ORDER BY",id:"order-by",level:3},{value:"Aggregating",id:"aggregating",level:3},{value:"UNION and UNION ALL",id:"union-and-union-all",level:2},{value:"UNWIND",id:"unwind",level:2},{value:"Traversing relationships",id:"traversing-relationships",level:2},{value:"Patterns in a query",id:"patterns-in-a-query",level:3},{value:"Reversing traversals",id:"reversing-traversals",level:3},{value:"Bidirectional traversals",id:"bidirectional-traversals",level:3},{value:"Traversing multiple relationships",id:"traversing-multiple-relationships",level:3}],u={toc:p};function d(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The simplest usage of the language is to find data stored in the database. For\nthat, you can use one of the following clauses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MATCH")," which searches for patterns."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WHERE")," for filtering the matched data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RETURN")," for defining what will be presented to the user in the result set."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNION")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"UNION ALL")," for combining results from multiple queries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UNWIND")," for unwinding a list of values as individual rows.")),(0,r.kt)("h2",{id:"match"},"MATCH"),(0,r.kt)("p",null,"This clause is used to obtain data from Memgraph by matching it to a given\npattern. For example, you can use the following query to find each node in the\ndatabase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) RETURN node;\n")),(0,r.kt)("p",null,"Finding connected nodes can be achieved by using the query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[connection]-(node2) RETURN node1, connection, node2;\n")),(0,r.kt)("p",null,"In addition to general pattern matching, you can narrow the search down by\nspecifying node labels and properties. Similarly, relationship types and properties can\nalso be specified. For example, finding each node labeled as ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," and with\nproperty ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," being 42, is done with the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person {age: 42}) RETURN n;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tip"},"\nEach node and relationship gets a identifier generated during their initialization which is persisted through the durability mechanism.\n\nReturn it with the [`id()` function](/cypher-manual/functions#scalar-functions). \n\n")),(0,r.kt)("p",null,"You can use the following query to find their friends:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person {age: 42})-[:FRIENDS_WITH]-(friend) RETURN friend;\n")),(0,r.kt)("p",null,"There are cases when a user needs to find data that is connected by traversing a\npath of connections, but the user doesn't know how many connections need to be\ntraversed. Cypher allows for designating patterns with ",(0,r.kt)("em",{parentName:"p"},"variable path\nlengths"),". Matching such a path is achieved by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," (",(0,r.kt)("em",{parentName:"p"},"asterisk"),") symbol\ninside the relationship element of a pattern. For example, traversing from ",(0,r.kt)("inlineCode",{parentName:"p"},"node1")," to\n",(0,r.kt)("inlineCode",{parentName:"p"},"node2")," by following any number of connections in a single direction can be\nachieved with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[r*]->(node2) RETURN node1, r, node2;\n")),(0,r.kt)("p",null,"If paths are very long, finding them could take a long time. To prevent that, a\nuser can provide the minimum and maximum length of the path. For example, paths\nof length between two and four nodes can be obtained with a query like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[r*2..4]->(node2) RETURN node1, r, node2;\n")),(0,r.kt)("p",null,"It is possible to name patterns in the query and return the resulting paths.\nThis is especially useful when matching variable length paths:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path = ()-[r*2..4]->() RETURN path;\n")),(0,r.kt)("p",null,"More details on how ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," works can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/match"},"here"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," clause can be modified by prepending the ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONAL")," keyword.\n",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONAL MATCH")," clause behaves the same as a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH"),", but when it fails\nto find the pattern, missing parts of the pattern will be filled with ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\nvalues. Examples can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/optional-match"},"here"),"."),(0,r.kt)("h2",{id:"where"},"WHERE"),(0,r.kt)("p",null,"You have already seen how to achieve simple filtering by using labels and\nproperties in ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," patterns. When more complex filtering is desired, you can\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," paired with ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONAL MATCH"),". For example, finding each\nperson older than 20 is done with this query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) WHERE n.age > 20 RETURN n;\n")),(0,r.kt)("p",null,"Additional examples can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/where"},"here"),"."),(0,r.kt)("h3",{id:"regular-expressions"},"Regular expressions"),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause, you can use regular expressions for text filtering. To\nuse a regular expression, you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"=~")," operator."),(0,r.kt)("p",null,"For example, finding all ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," nodes which have a name ending with ",(0,r.kt)("inlineCode",{parentName:"p"},"son"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Person) WHERE n.name =~ ".*son$" RETURN n;\n')),(0,r.kt)("p",null,"The regular expression syntax is based on the modified ECMAScript regular\nexpression grammar. The ECMAScript grammar can be found\n",(0,r.kt)("a",{parentName:"p",href:"http://ecma-international.org/ecma-262/5.1/#sec-15.10"},"here"),", while the\nmodifications are described in ",(0,r.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/regex/ecmascript"},"this\ndocument"),"."),(0,r.kt)("h2",{id:"return"},"RETURN"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RETURN")," clause defines which data should be included in the resulting set.\nBasic usage was already shown in the examples for ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clauses.\nAnother feature of ",(0,r.kt)("inlineCode",{parentName:"p"},"RETURN")," is renaming the results using the ",(0,r.kt)("inlineCode",{parentName:"p"},"AS")," keyword."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n AS people;\n")),(0,r.kt)("p",null,"That query would display all nodes under the header named ",(0,r.kt)("inlineCode",{parentName:"p"},"people")," instead of\n",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,r.kt)("p",null,"When you want to get everything that was matched, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\n(",(0,r.kt)("em",{parentName:"p"},"asterisk"),") symbol."),(0,r.kt)("p",null,"This query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[connection]-(node2) RETURN *;\n")),(0,r.kt)("p",null,"is equivalent to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[connection]-(node2) RETURN node1, connection, node2;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RETURN")," can be followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT")," operator, which will remove duplicate\nresults. For example, getting unique names of people can be achieved with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN DISTINCT n.name;\n")),(0,r.kt)("p",null,"Besides choosing what will be the result and how it will be named, the ",(0,r.kt)("inlineCode",{parentName:"p"},"RETURN"),"\nclause can also be used to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"limit results with ",(0,r.kt)("inlineCode",{parentName:"li"},"LIMIT")," sub-clause;"),(0,r.kt)("li",{parentName:"ul"},"skip results with ",(0,r.kt)("inlineCode",{parentName:"li"},"SKIP")," sub-clause;"),(0,r.kt)("li",{parentName:"ul"},"order results with ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER BY")," sub-clause and"),(0,r.kt)("li",{parentName:"ul"},"perform aggregations (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),").")),(0,r.kt)("p",null,"More details on ",(0,r.kt)("inlineCode",{parentName:"p"},"RETURN")," can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/return"},"here"),"."),(0,r.kt)("h3",{id:"skip--limit"},"SKIP & LIMIT"),(0,r.kt)("p",null,"These sub-clauses take a number of how many results to skip or limit. For\nexample, to get the first three results you can use this query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n LIMIT 3;\n")),(0,r.kt)("p",null,"If you want to get all the results after the first 3, you can use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n SKIP 3;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SKIP")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT")," can be combined. So for example, to get the 2nd result,\nyou can do:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n SKIP 1 LIMIT 1;\n")),(0,r.kt)("h3",{id:"order-by"},"ORDER BY"),(0,r.kt)("p",null,"Since the patterns which are matched can come in any order, it is very useful to\nbe able to enforce some ordering among the results. In such cases, you can use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," sub-clause."),(0,r.kt)("p",null,"For example, the following query will get all ",(0,r.kt)("inlineCode",{parentName:"p"},":Person")," nodes and order them by\ntheir names:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n ORDER BY n.name;\n")),(0,r.kt)("p",null,"By default, ordering will be ascending. To change the order to be descending,\nyou should append ",(0,r.kt)("inlineCode",{parentName:"p"},"DESC"),"."),(0,r.kt)("p",null,"For example, you can use this query to order people by their name descending:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n ORDER BY n.name DESC;\n")),(0,r.kt)("p",null,"You can also order by multiple variables. The results will be sorted by the\nfirst variable listed. If the values are equal, the results are sorted by the\nsecond variable, and so on."),(0,r.kt)("p",null,"For example, ordering by first name descending and last name ascending:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n ORDER BY n.name DESC, n.lastName;\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," sees only the variable names as carried over by ",(0,r.kt)("inlineCode",{parentName:"p"},"RETURN"),".\nThis means that the following will result in an error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (old:Person) RETURN old AS new ORDER BY old.name;\n")),(0,r.kt)("p",null,"Instead, the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," variable must be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (old:Person) RETURN old AS new ORDER BY new.name;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," sub-clause may come in handy with ",(0,r.kt)("inlineCode",{parentName:"p"},"SKIP")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\nsub-clauses. For example, to get the oldest person you can use the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n ORDER BY n.age DESC LIMIT 1;\n")),(0,r.kt)("h3",{id:"aggregating"},"Aggregating"),(0,r.kt)("p",null,"Cypher has functions for aggregating data. Memgraph currently supports the\nfollowing aggregating functions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"avg"),", for calculating the average value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sum"),", for calculating the sum of numeric values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collect"),", for collecting multiple values into a single list or map. If\ngiven a single expression values are collected into a list. If given two\nexpressions, values are collected into a map where the first expression\ndenotes map keys (must be string values) and the second expression denotes\nmap values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count"),", for counting the resulting values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max"),", for returning the maximum value."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min"),", for returning the minimum value.")),(0,r.kt)("p",null,"Example, calculating the average age:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN avg(n.age) AS averageAge;\n")),(0,r.kt)("p",null,"Collecting items into a list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN collect(n.name) AS list_of_names;\n")),(0,r.kt)("p",null,"Collecting items into a map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN collect(n.name, n.age) AS map_name_to_age;\n")),(0,r.kt)("p",null,"Check the detailed signatures of ",(0,r.kt)("a",{parentName:"p",href:"/docs/cypher-manual/functions#aggregation-functions"},"aggregation\nfunctions"),"."),(0,r.kt)("h2",{id:"union-and-union-all"},"UNION and UNION ALL"),(0,r.kt)("p",null,"Cypher supports combining results from multiple queries into a single result\nset. That result will contain rows that belong to queries in the union\nrespecting the union type."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION")," will contain only distinct rows, while ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION ALL")," will keep all\nrows from all given queries."),(0,r.kt)("p",null,"Restrictions when using ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"UNION ALL"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number and the names of columns returned by queries must be the same for\nall of them."),(0,r.kt)("li",{parentName:"ul"},"There can be only one union type between single queries, i.e. a query can't\ncontain both ",(0,r.kt)("inlineCode",{parentName:"li"},"UNION")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"UNION ALL"),".")),(0,r.kt)("p",null,"For example to get distinct names that are shared between persons and movies use\nthe following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n.name AS name UNION MATCH (n:Movie) RETURN n.name AS name;\n")),(0,r.kt)("p",null,"To get all names that are shared between persons and movies (including\nduplicates) do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Person) RETURN n.name AS name UNION ALL MATCH (n:Movie) RETURN n.name AS name;\n")),(0,r.kt)("h2",{id:"unwind"},"UNWIND"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UNWIND")," clause is used to unwind a list of values as individual rows."),(0,r.kt)("p",null,"To produce rows out of a single list, use the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"UNWIND [1,2,3] AS listElement RETURN listElement;\n")),(0,r.kt)("p",null,"More examples can be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/cypher-manual/clauses/unwind"},"here"),"."),(0,r.kt)("h2",{id:"traversing-relationships"},"Traversing relationships"),(0,r.kt)("p",null,"Patterns are used to indicate specific graph traversals given directional\nrelationships. How a graph is traversed for a query depends on what directions\nare defined for relationships and how the pattern is specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH"),"\nclause."),(0,r.kt)("h3",{id:"patterns-in-a-query"},"Patterns in a query"),(0,r.kt)("p",null,"Here is an example of a pattern that utilizes the ",(0,r.kt)("inlineCode",{parentName:"p"},"FRIENDS_WITH")," relationships\nfrom our graph:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1:Person)-[r:FRIENDS_WITH]->(p2:Person {name:'Alison'})\nRETURN p1, r, p2;\n")),(0,r.kt)("p",null,"The output is:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"patterns-in-a-query",src:t(60248).Z,width:"1111",height:"618"})),(0,r.kt)("p",null,"Because the ",(0,r.kt)("inlineCode",{parentName:"p"},"FRIENDS_WITH")," relationship is directional, only these two nodes are\nreturned."),(0,r.kt)("h3",{id:"reversing-traversals"},"Reversing traversals"),(0,r.kt)("p",null,"When the relationship from the previous query is reversed, with the person\nnamed Alison being the anchor node, the returned results are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH  (p1:Person)-[r:FRIENDS_WITH]->(p2:Person {name:'Alison'})\nRETURN p1, r, p2;\n")),(0,r.kt)("p",null,"The output is:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"reversing-traversals",src:t(35141).Z,width:"993",height:"150"})),(0,r.kt)("h3",{id:"bidirectional-traversals"},"Bidirectional traversals"),(0,r.kt)("p",null,"We can also find out what ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," nodes are connected with the ",(0,r.kt)("inlineCode",{parentName:"p"},"FRIENDS_WITH"),"\nrelationship in either direction by removing the directional arrow from the\npattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH  (p1:Person)-[r:FRIENDS_WITH]-(p2:Person {name:'Alison'})\nRETURN p1, r, p2;\n")),(0,r.kt)("p",null,"The output is:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bidirectional-traversals",src:t(89938).Z,width:"1527",height:"640"})),(0,r.kt)("h3",{id:"traversing-multiple-relationships"},"Traversing multiple relationships"),(0,r.kt)("p",null,"Since we have a graph, we can traverse through nodes to obtain relationships\nfurther into the traversal."),(0,r.kt)("p",null,"For example, we can write a Cypher query to return all friends of friends of the\nperson named Alison:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH  (p1:Person {name:'Alison'})-[r1:FRIENDS_WITH]->\n       (p2:Person)-[r2:FRIENDS_WITH]-(p3:Person)\nRETURN p1, r1, p2, r2, p3;\n")),(0,r.kt)("p",null,"Keep in mind that the first relationship is directional while the second one\nisn't. The output is:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"traversing-multiple-relationships",src:t(74539).Z,width:"1407",height:"618"})))}d.isMDXComponent=!0},89938:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/bidirectional-traversals-5d459b36b3129249a5b9bc72fa51e6ee.png"},60248:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/patterns-in-a-query-477f536bc0cfdcadff2664f1cf4486ef.png"},35141:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+EAAACWCAMAAACGqHkwAAACH1BMVEUAAACFhYX/////////kgD+kgD/////kgD/kQD/kgD/kgD/kgD/kQD////+kgD+kQD/////kgD/kgD+kgD/kwD/kgD+kgD/kwD/kgD+kgD/jgD/kgD/kgD+kgD+kgBubm7/kgD/kgD+kgD+kgD/kQD/kgD/kgBgYGD+kgD/kQD+kwD+kgD/kgD+kgD+kgD+kgD/kgD+kgD/8+ROTk5MTEz/nx3////+oiT/+PBbW1v/kgD///////////9WVlaEhIT+pi/9qzr////9skr9u2D9yIL/4bj///9ISEj////+kgD///+EhIQAAAD9/f37+/uHh4eenp7W1taUlJSjo6Pc3Nz39/fx8fG9vb27u7uRkZGLi4vPz8+wsLCXl5ft7e3i4uLm5ubBwcHMzMzz8/O2traurq6bm5vZ2dm6urqmpqaPj4/k5OTr6+v5+fmOjo6oqKi0tLTExMTT09PJycnAwMCsrKzo6OiqqqqioqKZmZmGhoaJiYnv7+/19fXe3t6KiorDw8PR0dHg4OC4uLihoaH29vbIyMh/f3/Q0NDy8vKlpaWgoKBPT0/Gxsazs7OysrIZGRkODg4HBwekiGE5OTklJSWMhXtbW1ssLCy5ublJSUmWhnGriVrTjS75kQZCQkIEBASCgoKch2qxiVTfjiLmjxrskBT1kQl7e3t3d3diYmJUVFS8ikfCi0HHjDvXjip2dnZoaGihh2TajidvbQ9iAAAASnRSTlMAf2WwwaVMQQM80VMUgqEb/MewN2FZ4bZ4KQu6fnBO/uvcknRHjYjc1y0iqWxoSpuW98aGd8rDwLylglvozbqzsqaYmId0XjIuG9o/3ewAABwzSURBVHja7NzbTsJAFEbhfdHGFgxGsCLHcA4IAt76CP/7P5AXJgYIhwKdaRvW9wprkplpu2s4L2r1e9MwqOjfa337kTSeDc4dZujsZ+iSAfeI4l441ymD5qz6YjhEBpRC3A102WCTsIvsIAPKIKrWlF4w/jSYkQHlsK7pWsGKLYQMKIOX7rtuEj4ZCpBhYsBJcU23q7wZCpDhy4CjJk3d53scGciAQnrqKAM9w30ZmmSAA4ulsjFPDPlnGHJlwo5opux0GoYCZIgN+JMMlKkp90AyoDCeQ2Vt2DeQAYWQDOTAyEAGFMBIbgy5jZMBuVu8yhm+vEit5TDDyvC4qtrHETGNkmXYGh7Vh9xqMghRhAwdMjyorVybLwyXjOQcGR7SUh4wcUYG5KIdyAteyZIBl5V2ZUlVAxlwXolXFmuLDPAuCuTR2nDc+Qwc1HGrurxiyokM8Gkjz1oGMsCXH/lWaRsOdXUBGXCTN/lXN5ABXsTKw8ywp6EUyICrtZUPft9GBvgQKjUe87hTUzpk+GXv7nUSCoIwDE8hJpKgUqlBC6OFGiShoQEaGsK3938/QAIkUO2ehMzs8j638BZ79idzUGYsL0PDyb8ykQFFfuXn3XDwpmxkQImRHDFQ6OhFhXj4giwfKsMH4h4ZUIk/+foy7DzJ16uhUT054x/2Xc7RyYA8E3l7NNi3CpEBeYZyxzQhMuBc3Q+hL43s5pEBV/KpABhD8KMAGPjSoLEiuLNuNqsU3Gwe/DUbN2aNmyqEbov4epHiG1SUgUW8ORG2f923gMtUg3k9GfqGxvQVxIOVu09VmFWUgeP0xvhfwh71rNwgVeG58QwIbMvevfUmDcZxHDd64SFGEzXqrcd4SIyvo79fnrYcBhRhQIWNw1Zg68QBsjmEoIvuwsTEeLjweOMh8Q3aPohsMnGZXay6T7JsAxoC/36TtjTlquIbR//jwv/uMezyr6OKf5z+fwv/y8ewy79OK/5xZtuF6xxYhsq+xmK0A0eeNwCV38Xlf08hTbA8WFwzCvMTkFQzVKxrRnkaG9iMQjLYgivNJDDFSUQ5FECU8+i7zfTWCj+n+MfJPbv+IScVHzm4/cITsb4WVGq2I/rIoHF/WLgW+8bu957aUHjFtmMLRVqyaVVn8Gk1k9O4jPXSXPz2m3m4qoz1Cw/HHFMsxBy3Niv8rxrD7rG2f8hxxU/Obr/wWxhQGYckcqwMC49jSKWuJdX1hcvFxY0GwwBMlgUcMxYnsY4wGOmHvZiEa5WpfuGSfCLHZoX/VWO4vuf/gH/dPudFXlR8xdPCcYtJ/KTwWpVRYH3hUpiGClQYgNQK3MF6WZpw6MEMm3JhS2yxcN99FcVYf8/HkL9h7/9RuC/OhR7a72nhJa7iJ4WXxVQ9jZHCEeI0kGEFmwrLR3dYWZGpB5jAFgv/Wz4M79u/W/g/wSn8suIvF70sXNSYwU8KL+BWfUqMFv6QUaATpG7OCIxQGw0VmGNAbbiLrTGALRbu3+svbubCbuH/hH3+OoTrOuRJ4VrGVTG4qmL0WPp0v3BEWR0tPMA1AJGERsYL3Zv4QY1hIMEJlJ3URVGbxeaFfzco3M+XZxt1ySeF5xiByQB2wJ8rXOd3NnaSLPyU4jNXtlv4QGoY85QpgNFj6TPfCleT2sxI4T1m4ZoN26EG67bABj22ISwdMBlGmgVg88L1Sl9xULiPr7C6mSt/svCOxipcsvBwYQU74M8V3s3n81kW844wdpJb+AHFb05st/Bcu6852CBfoS4A/HQrHUhRFz8WbrOKAXXOYg8b3GQQJWaASeZRpQl4spWu+M2JP1l4lwwKOGThO+TPbqXfoY7vVOwMt/D9yq+9f/H6y7Mn/E1PXj3/+Fb5tSPe7YcnZKxjCkeb8z8WnmQaQ2GWsZHOZoYlAMFF3GME8KLwgz4cwx8sPLm0xhYAHxdu3LuZsJb0MBxz9ywtac9C7r5lLU1Pq/liY1UOPrC6pCWXVQAmlzEwLNzkSnupDTTXjLpVLmGwTnXqOjywbwsntH1+TO88+/hS+YWT3hV+x9JmgHGFzxqNyY2Fm5wCIokE+tIMYaMq74YsAaDNZn0KgBeFn/PhGLZf+CTtUmjJKk8CUJcX43G9J2QUzcJSfKHTrMWthZsA1GpSW1oNwLHAFL5bYWKFOTiG++H3nwY16/Y0HKlCvG5U7sugVNvQkvMCY+1E4cHk1HJqOlifBEzqXTMhV5RHLNup+Xpwob3SixdV4CEfmDdyLIifFX6Da0l7GpFiIzqXiWsp3GW1f7uJ3yULP6aM9+YxvfXkk/ILhz0rHD3qYmzhCPOBtq5w0a1rtwDV4EO4ZsusYqMZJho5OKaZpe1N4X4cw9HtFx5hIdgrmVpQuOkumPP3uCyj0G+ksqwtzqcyrAGizEc9U2f1x8JzbAlDu7O+cJHUYje6utt6uB7s3s3S6LhB1dZarRB7GGdnCpcF9vgQyOoT8hXMABVmAdRYA9BmCpF6DY48w4A6oW5S+F0W7wBY4zSAW9ShxpNwhLQJeGDfr86V/EDX7erKzO8+n4iU5nJxOl69U8Y6713hCLE7LFzLD6Rl4VKC7Bf+KBqN5YostuAoWQxW7GguzgcqfhDUOCfr1zSmvSl8a2O458UYmlsdw7XfKVwOI8E0Zh/kAKiGJaMIAMKSb82iJhCQfwld6wCzEwIDHc0QsNldX3iJUQBqIQMRbEQAmIy6QS0AaLKMLfG28FkAJeYhCZFxG62wBSAmV5B5BpyfuzcdLbYhjRY+xwoAES8KOFZ5B1mm3Ltz8MK+w8o4L5/TEbsJz9z9yt6Z/SYRxHFc0wd9M9FEY2LSaGJ8UhOPqC8e8YjJ9zvbZdlSCxQKrS1KAW2FUmi9e1i1SmvRWjXWI54vHn+guywKa2GisCrBfp4IEBby/X3YmdmZ2QDJh1/lC5scNDymqsEfhpcYKhk+ES0abhJ1TU4UAwi7fFS9aU3Bz5wjL8NEp1dxxvBfimH6L8dQh+FW9c4w8r38dcZNKdoAuGgKmuYE0oz1GoSpwcYkk0CQgXLDh3m+mETIqv14NmMK1Q4DtR81UKfhCRgMm+p6OgNZkpbhMQBh3gDgp4aLLHIBqGb4DIBe6jC5xwGETOd7eAVO0LJGWlkvSXYF4Sg9NHgm3X/g/1s92pAx1GN4CrBOYgj2eWniAdxRGIxQAdDFXgRYZBI2AgwW3teNkuG4QPfNSBzAULE761a/CwVfBjVQp+FewDJccfF+ZCB00zI8CNPwbliGd3GyvUAINsoN9wOwBoOAm6bY/b426F4FTtAi3WT1KckwnOaKmbhsNHfr/2f4zr8fww035TFsrMfwLsAyvCOhhq8MhFz0fJdihIBluJftFmP2b8ZM0GCQ91FmuOIfJ9Wzcfg5CZMMFUuof234DaZgkKxk+FlqqITdcPs53Py9vUzCEVq2yTt/vA7nGQuQT95KDtxghrd5SsRRI3LDt/+DGKYzlMfgiOFha0h4vJLhAU6gAn0sonrsc9o8ms4uaAxbiqloDMNvWT2y8UqG97CzUEKFupEYjoTVDy/8E3rUVA+DcISWTZLhW5Jh/AlCKvlKNorbWIafY4kUakRu+Hp5DEnUTu0xnEJN2A3v4jCA+Gglw1NsL4ir2Etf9WkF0uyxGw4omavKsBVCnP0NYng7z5mm+qgtN3w6m5gAcE0dKIylVzf8IiP4cW22a7R/HM7QIlnR9IDswp9BkzcQNzSW4WPdJWKoEbnh8hj6UA81x3ASNWE3/AwjgHLRx97lhmvUFUC57Y2Xj6XPsBOw7OkvGX4pESwY7oMSGO0ofPi1BjE8Hh0dHLrn1qhHlhmOGQYu+ft427oeXt3w6ehocmgwcXXY6qfQD2dokcywIBlEObookLsbRr2kyaeSHfkby3BHkBsujyGGEn8xhhOoDZvhIbr9fv1CkjcHlhmuXKDu73HxGsqvhwc4BgudoR+Gx65Gz/gndZ4BrmTdl4ZuZgPxBjEcoZGrib4O5YI6sszwwpy20cKcNrnh6LgXzUb7ilG7R+NwhhbpueMcbOhi/v37962LQuiokwGS1S/H7qziwd4dTbpf+tp/FENIGsNx1IbNcGgZ1dvZNpZRk8sMR9tgRvXdGQLKDL/BNIpovFhqpQ/3edXEnSEF1pw2d6cHdRreuKtHO7IX4RAHq0+CJjkNG7qYgsng0qwHP+PBb5Emq0+q2lJZ7xc81KT3PFknjaEDNpyMISWL4RianUY1PJWNwRFkhj8j76CcUmlhUVwC4tmFudn58wA0MeXKLQDp+dxcvjUG4PK7vPHabQD9olNfmMt97oAdP/lAsvtAJb0NTjfpfcs2y2Jwwcbfi+Eomp2GNDx46TyTcIo9VeN9RQ7CRqm0HokklMWlDy73vFCBdvEo1+rFuJj39rfOLShomxePRnwLYhQYER/n+2ZaxSPYmSZZdfHD7p/1nmKB1ma99+gGWQzXYMPRGHplMRxAs9OQhkfUaFiBM8gM/0JeQTml0ornRQjnRRQwimguhm6xlASwuHQZwO3nEbhEK4Dp/NwYdJHzAEpuVoEdN/nmVya17SvobXF4VZOyRtIN//MxrBjexFQ3/AkZgx2rtDzXP4qPwF0RCRm8ECl0izxgPhMGYD3SYPBOpKGLTzBYFGOwc4d8Xe3Y60t6v2OJ7KHVTUjhjmX/LIZxSQz70ez814Y/JD2wo4sid6eBvCiSQLdYhMG1uaXFxBAM8ksKDMaFCl24AbPYYrCTJp/JDLf0tvGeTciRVQa7ZDFM/MkYUuSzFcObmN80/PnU1NQL9y0Y5MRZi3Z0F7t32uecEAuPgdwsTFLiHXTRD1QsrRXDazC8rhhWDF8x/Feah0XypWIxS8tCufVidk6znTwql1ZNrXSutNIdjmGllf6NvXNpTp4KwPDWn6Br/4j7920SCAQIEMo9EO6US7kUpLbYy7RVZ5yxbhy3utFfaHKSkIQpI3Z07KDPgq/MOSHkSx5OcnLyHpw67+ppE/x61odNQQ4OLcH0bO1fAP52lj90aP3f03ZsT9s/vBuM/3vaAr5kEn+JoaqkEaHGCsKkmMe/yDvvlgl6Zz9JgPzTNxXv0Kr88AvgHFpdJNxO3G++rRw4tN59t+xEOeJu2T+xG/7S3bIEZfwlMtbCRATLQIQhc/gXONrwSknCHqlMPauoXi6IpmQHK6i0mVvuLLWDpgafQeGw4ec9fWFkrsSnNFTF6lciK+4xA0F7rCvG69VbhWJsnzJz88KXz6qijidwSN6ssw/XELxvxItA+vHsp7p9I/bnXePxy9mPlvHbt9+2IP109ktC/eEshgOH1vtHvJwmn33I3fAFwuwb3sphn9azulgb/RYcVpxdtFN0UNS8WG+tH5bnsOHJRDdb34rVFcZdxSjJkcLsIjYU276J2fUuZIQYZtmB4C62WF+u9uq90OX8KMOHlBFlqHDWf51mmXCMLLIKQGU6nX7tzVlGhAqTBw0vs/vV6IGqBsh1jgfPc/UWO0wr60ncUpRnu57+ZqHJdbVUF28m625pONDnKwAbGqOMpYhNfN+oVYE/mOoBu0NLzv7w7Xff/74CcPu1PZjqpyoOHVrvH7V6mhwxavWf2A1HjFo9bHg/hihSg/PLajUxZ0MCsGUcSFG3D/9qjIsi9uU5aPiWeiM9Y88RPLuoDprsYUecerpkcCt07eVyYz5I8NFqXHuGZ6hm0hbNaL0p04LlUYY39g1fsStqaC+8lIBzpoXhcLimihAyzMOGd9Z6BcArt8CWT2KzMqG15Ffe25lSFN/j6Y1CSVfagHRD+7XGa8dzXgJX63oHWK6rEBzx5Mk/wfufPDlNPvlXdsMxT54cNry+b/iI9QJsCjGOfF1SvASwP9GjJKNx2PCKaNqkGFvAVLS2VZo7cSynPZPrSgVt97PHvIbPo5Vsuoa3adj/3md1KVLvcoGAkOFOyHndHDCJUPj5gjbhyGfJ8NclPXCDJm2qvuHIZuFeh7dZurNmPdqcp/jSbopc6fCzZfeNjfuj8BUQW8uwUS0JHskNWq7EnWnDteUF+4W7vLoV00DM3TlrFdiKjYAEwRFPj/4T/PnTo/81jnh69O/n2KdH2711ttl+oBwKPy/SJgFUqvq8O20BSM2tKwhuLS6h0CbuGz7hFO51+Ji3CSXuyjPkxqwrelVD+OnRVm8DiFh6aPMHwI99E5gcwGbDMpJMuy3+Bj6ZCjzDt8zBZsRkpF5dR0DI8CZ7uYGVYDIcfm7WGTfDkc8tJoIm6gHnA47NiW94ignP8AJrVuOilWfJvE2xZ1XLL1Ql1/AIG15A9j7zhUvsEBIHXIt3+4VJlmCjMeEsPQFwxSbQVCTIGlxOIwHiFPjICRCaxde7hlWnHAo/18y5YZ6jomdHm4GuXANPLMHjiQOYNZbMe9/wIUue4Xm+JEoTV54h8/ro4pL5wPCAEk2s/MCmnZgjtxVdMo+l6/1XbCHANzzj1jP5ZaSeOoN034FLYHhLBLkuFSYj4edNyghHPl9wAA8puw7O0guFwiQ+6xY9w1OcOysfuCcxziumLO5nvOBq2DU6KPDF29zVQcPF0tFC4X0VNjJVoJ2drVKtxEJsYvGRVO/gcBopTqfAR05xcnwF4qQcCT9XYgCq4thLrWPANFC0yN7uLD1mH/7FcreueYY/C5lceYbM3gOytZb8jJcATbVk5Lz2+ZJ+YY1LIRgfgT5LhWVZGeMNw72E5iT7kXpZI6+Qjy04BIYP3PVMhY3ww8/FlwxHPo+4gc+MnZ3hAjWJneEGAsPr7t8mokxIZaQBRS9J/YnxQ4YP/DfRQk3RZQAbWgDaBkn9XJypW5n4hc4ybE4jifEU+MhJjE2mAEhdyhCI8HPP8O6s4tDkFR65hMcVYzvDXS4L8Azvc4jA8AZsHqhhH7lH0+2tc+jxFoj8tZgB0og2Vektw5MU4j+zFq4nkTdPd30qEwh8w/vur1OaySD83DM8HPlc4h18DMo7w+M2F02+SL7hvcDwIFc6yn0jb/C5EzLc1Ko2T/uGSw0+S8AbhQ0mzgsXlqUDbVW/MMuz9Qpwp+u4X3clAKeRpnwKfOQ0ZXXupYDK4fBzYXiFPkUkAsMrIcMN++gfDmZKeWd4MWR42W06r7CHdskcwoZrraqNGTE8w3w8/qpMZbiFYcOlOl+Lk69U5sP1pHhSAnDHJgS+4TX3S5WYDMLPPcPDkc85loKz9OxeXzrSLPuG50OG5wPD99myioJbASOuUrR53DO803NX+kah/ExSX+l1ICai6zq6LsP7JR5zAuA0ZkQ4BT7kbvAM19d+X3oQfu4ZXmA96aIhH/RpFznd60uXbjjxDS+EDM+9bXjbWAtfc16jeUNpSJsR8v5Z+g2SfHXlKcMtDBuO+5hjxIqNcD2f7gKCvTY8w2QQfu4ZHo58bjMGjxan+4a32fuLhqNrQZrfAAjNsRo1XKsrkSWj+t+vipLGGjref3OeE8QowaYqNuk0ZjU6BT7yrEZeG16nvAs/D9rwGXzKzMBjwIvAcL90e7zhk6w+gcO1p62uAgh3SBX47HemFTjeP0t3aa/aMJl7q55BKWJ4iRt32WQQfu4ZHol8rtPcrcbcN7zIh2MNTxrl3S9NTIQuSrr6lsRybHGNg4ZLYlfybpfqOGYRr2y5X3AJ4DRmJjwJjpyZcPUvzEyYcK/DF5RD4ef+dbgiGrgriJjzlH+3TKnsG/7EwdGGF7rGPQQdRSzedjUJ3SIq8w5VV70Je28aLrnX4ctwvcL2XHij6IgYfi26/9pzJiPh5z1qiEQ+t+ZrYar2zCn2DJdq/DJi+BPNqOFBX3qKYgjbkAkgx5HYoNJbEr/SxEHDH3UNuFWtDqAqbQC33bWMIhMy7FcDNqcxu/BJ8AF3gz+7cMmREzlSjoSfL2YAqiw5cltTAFsaE9gsY7zAnuG3Bs8jhgt5AsPDfelSvbuER40rQAoNapF0qwJoalbDhvng6+0bXun2JMfIJsL1Cpw5pRk2ooZLMT5sR9aYyUj4+VesPV2FI59hZmmIUatTLWR42uZFZb0TMTzO2LYVGB65H/4lu9XRlEpLXMD0SjWxsMddOp1nLJ0eYDnvpgVPbxQiR2OU1mkCMNkdbQYqy2LrZqPqYr7yDf/0A05N/x/k8w+4GzzDK1n2y1X9knIk/HzG0QUqOvvO/fAV3C7rGzFqtSQFhutpZ9LmLJ8RMVzIExgevh8+ZCwtiAMpS+mXbtjHjiStTFrlRmjZLOfyNDR4pOyFVGbS6RaQZ+LL6qK7jNZrOANib2hoUcNxlXfGtN3RjISfL2OKugxHPgOpUr2rqOMkEDLcYVEfdBAxXBov9PgBw2H+wd7d9DQRRlEAvknFWhYYpH4gYqIIAUSjW3/CnaYZ06LYSqMkaIKVLtSEGBYTiCtcuDMx6kZjXLnxD0qZxlICKQXKnLn3PNtOmyYnt9N5P+5b/t8dfXWhFFa+PNr9IxWrBJuFltI+LwbBxsMo2noWf5W1RqG6Fa9me/oyrK7Ug1hGstrd7+8//379fOy7xo9vf35pd0PiUA4whrNB7Hl5PVp5vVhY7Wh+Pl+JWmvaXq3VWxcu16Kotty8k3fOllXLb4odFR4Xz/4VvlRo+dS87kUjrL0tBm2b5Wj9w/xOaSy9D8Pak3Zt1AuxnbOk35XCxuLjPdcVNz5uf95C/BYX+8Mzck7R5MUjRZNPy1ETR+GpwuWygpkVjwBjYIUbkBGZUCyD4tK4YplOzXFRrPAuFT6jWCbFpVHFMskKNyEjItMKJSs+DSqULCvchGaFTykUceqBQknPoa7HqnAXRhTJTXEKK4Z7QnZcUiA58QoqBq/PSjZdURwOd47GsCY1XK4rtOu84nC4rwwxhmtCltxWGP4aODEG6rtbisJh8wfGQAewOBfrd5wNKgaOs1mTVwxj4hpKDE4XDpt2XyFcF99AYvB3IoV9c4rgjDh3RxEMC9lzQwF4v4WD7BHgLdwihEdA50/hjIH6aVgTxxFcxkB9c1f7iv3Z0jInzhisGtCjY/emEzOkvWEMdEizmqwJIYDV6Y43Bpg3rj3iFM02xkCpMaYJGhEC6Lrqe9mwdTPaK25XbDPRk5Ex2Danh8c/h3sZWNnGGKwb0ISMCgGMpzMG665qMi4KMQY6BTlNwpQQQN9VxuBBXk/fBSHG8K+9e8tNEIgCMHweIMVLNLW1qGjjPRKt0m2c/S+oaZ8IFhBkdCb83xb+SWZQ5oBiDg/m784EWXMtQQbUdNEb8PNOBhngjJGW4R2La2SAKwJPH+gs+F95BoZvoJaZp2WYJ3KFDHBG7tpiZRUgA5yRu7Y4GxYgA9xx1DzMC8pHBjgjUdMOsaDMWo0jQ0tN1KywL3h+hogMrdVTk9YCCzIkgvaKX9WYL8GNpgYznASttlYzVsxsIgNsMF7qH07oVZABzuj72rQVf7+SAfZoev/YBQIywB7BXpsT8ehnRQaukiElPmozDu+C52dYkQEZL5E2YCG4L0NIBhiyDfU+3xue/MgAi3UGWl+Xg6EVGXjTCAWG8w+txef6khUZtgIUOw+0Ku/E5QYywBlBr8rq8jZ8cf4XGeCSztzTcsvLmG0jhQxwSNBZ+AfNswz3vaEgiwxwSjD9XOx8r5v6Pu0omYzf2DOKGMoQkaGyH5lS1CUjbgMPAAAAAElFTkSuQmCC"},74539:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/traversing-multiple-relationships-122606d074781b47af6b4391e5f00f5c.png"}}]);