"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93587],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},35670:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],o={id:"reading-existing-data",title:"Reading existing data",sidebar_label:"Reading existing data",slug:"/reading-existing-data"},s=void 0,p={unversionedId:"getting-started/reading-existing-data",id:"getting-started/reading-existing-data",isDocsHomePage:!1,title:"Reading existing data",description:"The simplest usage of the language is to find data stored in the",source:"@site/cypher-manual/getting-started/reading-existing-data.md",sourceDirName:"getting-started",slug:"/reading-existing-data",permalink:"/cypher-manual/reading-existing-data",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/getting-started/reading-existing-data.md",version:"current",frontMatter:{id:"reading-existing-data",title:"Reading existing data",sidebar_label:"Reading existing data",slug:"/reading-existing-data"},sidebar:"cypher_manual",previous:{title:"Overview",permalink:"/cypher-manual/"},next:{title:"Writing new data",permalink:"/cypher-manual/writing-new-data"}},u=[{value:"MATCH",id:"match",children:[]},{value:"WHERE",id:"where",children:[{value:"Regular expressions",id:"regular-expressions",children:[]}]},{value:"RETURN",id:"return",children:[{value:"SKIP &amp; LIMIT",id:"skip--limit",children:[]},{value:"ORDER BY",id:"order-by",children:[]},{value:"Aggregating",id:"aggregating",children:[]}]},{value:"UNION and UNION ALL",id:"union-and-union-all",children:[]},{value:"UNWIND",id:"unwind",children:[]}],d={toc:u};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The simplest usage of the language is to find data stored in the\ndatabase. For that purpose, the following clauses are offered:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MATCH")," which searches for patterns;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WHERE")," for filtering the matched data and"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RETURN")," for defining what will be presented to the user in the result\nset."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UNION")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"UNION ALL")," for combining results from multiple queries."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UNWIND")," for unwinding a list of values as individual rows.")),(0,l.kt)("h2",{id:"match"},"MATCH"),(0,l.kt)("p",null,"This clause is used to obtain data from Memgraph by matching it to a given\npattern. For example, to find each node in the database, you can use the\nfollowing query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) RETURN node;\n")),(0,l.kt)("p",null,"Finding connected nodes can be achieved by using the query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[connection]-(node2) RETURN node1, connection, node2;\n")),(0,l.kt)("p",null,"In addition to general pattern matching, you can narrow the search down by\nspecifying node labels and properties. Similarly, edge types and properties\ncan also be specified. For example, finding each node labeled as ",(0,l.kt)("inlineCode",{parentName:"p"},"Person")," and\nwith property ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," being 42, is done with the following query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person {age: 42}) RETURN n;\n")),(0,l.kt)("p",null,"While their friends can be found with the following."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person {age: 42})-[:FriendOf]-(friend) RETURN friend;\n")),(0,l.kt)("p",null,"There are cases when a user needs to find data which is connected by\ntraversing a path of connections, but the user doesn't know how many\nconnections need to be traversed. openCypher allows for designating patterns\nwith ",(0,l.kt)("em",{parentName:"p"},"variable path lengths"),". Matching such a path is achieved by using the\n",(0,l.kt)("inlineCode",{parentName:"p"},"*")," (",(0,l.kt)("em",{parentName:"p"},"asterisk"),") symbol inside the edge element of a pattern. For example,\ntraversing from ",(0,l.kt)("inlineCode",{parentName:"p"},"node1")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"node2")," by following any number of connections in a\nsingle direction can be achieved with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[r*]->(node2) RETURN node1, r, node2;\n")),(0,l.kt)("p",null,"If paths are very long, finding them could take a long time. To prevent that,\na user can provide the minimum and maximum length of the path. For example,\npaths of length between 2 and 4 can be obtained with a query like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[r*2..4]->(node2) RETURN node1, r, node2;\n")),(0,l.kt)("p",null,"It is possible to name patterns in the query and return the resulting paths.\nThis is especially useful when matching variable length paths:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH path = ()-[r*2..4]->() RETURN path;\n")),(0,l.kt)("p",null,"More details on how ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," works can be found\n",(0,l.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/match"},"here"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause can be modified by prepending the ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONAL")," keyword.\n",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONAL MATCH")," clause behaves the same as a regular ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH"),", but when it\nfails to find the pattern, missing parts of the pattern will be filled with\n",(0,l.kt)("inlineCode",{parentName:"p"},"null")," values. Examples can be found\n",(0,l.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/optional-match"},"here"),"."),(0,l.kt)("h2",{id:"where"},"WHERE"),(0,l.kt)("p",null,"You have already seen that simple filtering can be achieved by using labels\nand properties in ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," patterns. When more complex filtering is desired,\nyou can use ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," paired with ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONAL MATCH"),". For example,\nfinding each person older than 20 is done with the this query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) WHERE n.age > 20 RETURN n;\n")),(0,l.kt)("p",null,"Additional examples can be found\n",(0,l.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/where"},"here"),"."),(0,l.kt)("h3",{id:"regular-expressions"},"Regular expressions"),(0,l.kt)("p",null,"Inside ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause, you can use regular expressions for text filtering. To\nuse a regular expression, you need to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"=~")," operator."),(0,l.kt)("p",null,"For example, finding all ",(0,l.kt)("inlineCode",{parentName:"p"},"Person")," nodes which have a name ending with ",(0,l.kt)("inlineCode",{parentName:"p"},"son"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n :Person) WHERE n.name =~ ".*son$" RETURN n;\n')),(0,l.kt)("p",null,"The regular expression syntax is based on the modified ECMAScript regular\nexpression grammar. The ECMAScript grammar can be found\n",(0,l.kt)("a",{parentName:"p",href:"http://ecma-international.org/ecma-262/5.1/#sec-15.10"},"here"),", while the\nmodifications are described in ",(0,l.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/regex/ecmascript"},"this\ndocument"),"."),(0,l.kt)("h2",{id:"return"},"RETURN"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," clause defines which data should be included in the resulting\nset. Basic usage was already shown in the examples for ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE"),"\nclauses. Another feature of ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," is renaming the results using the ",(0,l.kt)("inlineCode",{parentName:"p"},"AS"),"\nkeyword."),(0,l.kt)("p",null,"Example."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n AS people;\n")),(0,l.kt)("p",null,"That query would display all nodes under the header named ",(0,l.kt)("inlineCode",{parentName:"p"},"people")," instead of\n",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,l.kt)("p",null,"When you want to get everything that was matched, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"*"),"\n(",(0,l.kt)("em",{parentName:"p"},"asterisk"),") symbol."),(0,l.kt)("p",null,"This query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[connection]-(node2) RETURN *;\n")),(0,l.kt)("p",null,"is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node1)-[connection]-(node2) RETURN node1, connection, node2;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," can be followed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT")," operator, which will remove\nduplicate results. For example, getting unique names of people can be achieved\nwith:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN DISTINCT n.name;\n")),(0,l.kt)("p",null,"Besides choosing what will be the result and how it will be named, the\n",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," clause can also be used to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"limit results with ",(0,l.kt)("inlineCode",{parentName:"li"},"LIMIT")," sub-clause;"),(0,l.kt)("li",{parentName:"ul"},"skip results with ",(0,l.kt)("inlineCode",{parentName:"li"},"SKIP")," sub-clause;"),(0,l.kt)("li",{parentName:"ul"},"order results with ",(0,l.kt)("inlineCode",{parentName:"li"},"ORDER BY")," sub-clause and"),(0,l.kt)("li",{parentName:"ul"},"perform aggregations (such as ",(0,l.kt)("inlineCode",{parentName:"li"},"count"),").")),(0,l.kt)("p",null,"More details on ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," can be found\n",(0,l.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/return"},"here"),"."),(0,l.kt)("h3",{id:"skip--limit"},"SKIP & LIMIT"),(0,l.kt)("p",null,"These sub-clauses take a number of how many results to skip or limit.\nFor example, to get the first 3 results you can use this query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n LIMIT 3;\n")),(0,l.kt)("p",null,"If you want to get all the results after the first 3, you can use the\nfollowing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n SKIP 3;\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SKIP")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT")," can be combined. So for example, to get the 2nd result,\nyou can do:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n SKIP 1 LIMIT 1;\n")),(0,l.kt)("h3",{id:"order-by"},"ORDER BY"),(0,l.kt)("p",null,"Since the patterns which are matched can come in any order, it is very useful\nto be able to enforce some ordering among the results. In such cases, you can\nuse the ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," sub-clause."),(0,l.kt)("p",null,"For example, the following query will get all ",(0,l.kt)("inlineCode",{parentName:"p"},":Person")," nodes and order them\nby their names."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n ORDER BY n.name;\n")),(0,l.kt)("p",null,"By default, ordering will be in the ascending order. To change the order to be\ndescending, you should append ",(0,l.kt)("inlineCode",{parentName:"p"},"DESC"),"."),(0,l.kt)("p",null,"For example, to order people by their name descending, you can use this query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n ORDER BY n.name DESC;\n")),(0,l.kt)("p",null,"You can also order by multiple variables. The results will be sorted by the\nfirst variable listed. If the values are equal, the results are sorted by the\nsecond variable, and so on."),(0,l.kt)("p",null,"Example. Ordering by first name descending and last name ascending."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n ORDER BY n.name DESC, n.lastName;\n")),(0,l.kt)("p",null,"Note that ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," sees only the variable names as carried over by ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN"),".\nThis means that the following will result in an error."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN old AS new ORDER BY old.name;\n")),(0,l.kt)("p",null,"Instead, the ",(0,l.kt)("inlineCode",{parentName:"p"},"new")," variable must be used:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n: Person) RETURN old AS new ORDER BY new.name;\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY")," sub-clause may come in handy with ",(0,l.kt)("inlineCode",{parentName:"p"},"SKIP")," and/or ",(0,l.kt)("inlineCode",{parentName:"p"},"LIMIT"),"\nsub-clauses. For example, to get the oldest person you can use the following."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN n ORDER BY n.age DESC LIMIT 1;\n")),(0,l.kt)("h3",{id:"aggregating"},"Aggregating"),(0,l.kt)("p",null,"openCypher has functions for aggregating data. Memgraph currently supports\nthe following aggregating functions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"avg"),", for calculating the average."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"collect"),", for collecting multiple values into a single list or map. If\ngiven a single expression values are collected into a list. If given two\nexpressions, values are collected into a map where the first expression\ndenotes map keys (must be string values) and the second expression denotes\nmap values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count"),", for counting the resulting values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max"),", for calculating the maximum result."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"min"),", for calculating the minimum result."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sum"),", for getting the sum of numeric results.")),(0,l.kt)("p",null,"Example, calculating the average age:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN avg(n.age) AS averageAge;\n")),(0,l.kt)("p",null,"Collecting items into a list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN collect(n.name) AS list_of_names;\n")),(0,l.kt)("p",null,"Collecting items into a map:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person) RETURN collect(n.name, n.age) AS map_name_to_age;\n")),(0,l.kt)("p",null,"Click\n",(0,l.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/developer-manual/current/cypher/functions/aggregating/"},"here"),"\nfor additional details on how aggregations work."),(0,l.kt)("h2",{id:"union-and-union-all"},"UNION and UNION ALL"),(0,l.kt)("p",null,"openCypher supports combining results from multiple queries into a single result\nset. That result will contain rows that belong to queries in the union\nrespecting the union type."),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION")," will contain only distinct rows while ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION ALL")," will keep all\nrows from all given queries."),(0,l.kt)("p",null,"Restrictions when using ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION ALL"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The number and the names of columns returned by queries must be the same\nfor all of them."),(0,l.kt)("li",{parentName:"ul"},"There can be only one union type between single queries, i.e. a query can't\ncontain both ",(0,l.kt)("inlineCode",{parentName:"li"},"UNION")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"UNION ALL"),".")),(0,l.kt)("p",null,"Example, get distinct names that are shared between persons and movies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH(n: Person) RETURN n.name AS name UNION MATCH(n: Movie) RETURN n.name AS name;\n")),(0,l.kt)("p",null,"Example, get all names that are shared between persons and movies (including duplicates):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH(n: Person) RETURN n.name AS name UNION ALL MATCH(n: Movie) RETURN n.name AS name;\n")),(0,l.kt)("h2",{id:"unwind"},"UNWIND"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"UNWIND")," clause is used to unwind a list of values as individual rows."),(0,l.kt)("p",null,"Example, produce rows out of a single list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"UNWIND [1,2,3] AS listElement RETURN listElement;\n")),(0,l.kt)("p",null,"More examples can be found ",(0,l.kt)("a",{parentName:"p",href:"/cypher-manual/clauses/unwind"},"here"),"."))}c.isMDXComponent=!0}}]);