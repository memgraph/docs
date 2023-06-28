"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68457],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,d=c["".concat(p,".").concat(m)]||c[m]||h[m]||r;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(87462),l=(t(67294),t(3905));const r={id:"match",title:"MATCH clause",sidebar_label:"MATCH"},i=void 0,o={unversionedId:"clauses/match",id:"clauses/match",title:"MATCH clause",description:"The MATCH clause is used to obtain data from the database by matching it to a given pattern.",source:"@site/cypher-manual/clauses/match.md",sourceDirName:"clauses",slug:"/clauses/match",permalink:"/docs/cypher-manual/clauses/match",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/match.md",tags:[],version:"current",frontMatter:{id:"match",title:"MATCH clause",sidebar_label:"MATCH"},sidebar:"cypher_manual",previous:{title:"LOAD CSV",permalink:"/docs/cypher-manual/clauses/load-csv"},next:{title:"MERGE",permalink:"/docs/cypher-manual/clauses/merge"}},p={},s=[{value:"Data Set",id:"data-set",level:2},{value:"1. Matching nodes",id:"1-matching-nodes",level:2},{value:"1.1. Get all nodes",id:"11-get-all-nodes",level:3},{value:"1.2. Get all nodes with a label",id:"12-get-all-nodes-with-a-label",level:3},{value:"2. Matching relationships",id:"2-matching-relationships",level:2},{value:"2.1. Get all related nodes",id:"21-get-all-related-nodes",level:3},{value:"2.2. Get related nodes with a label",id:"22-get-related-nodes-with-a-label",level:3},{value:"2.3. Get related nodes with a directed relationship",id:"23-get-related-nodes-with-a-directed-relationship",level:3},{value:"2.4. Get a relationship",id:"24-get-a-relationship",level:3},{value:"2.5. Matching on a relationship with a type",id:"25-matching-on-a-relationship-with-a-type",level:3},{value:"2.6. Matching on relationships with multiple types",id:"26-matching-on-relationships-with-multiple-types",level:3},{value:"2.7. Uncommon characters in relationship types",id:"27-uncommon-characters-in-relationship-types",level:3},{value:"2.8. Match with multiple relationships",id:"28-match-with-multiple-relationships",level:3},{value:"3. Matching with variable length relationships",id:"3-matching-with-variable-length-relationships",level:2},{value:"3.1. Variable length relationships",id:"31-variable-length-relationships",level:3},{value:"3.2. Variable length relationships with multiple relationship types",id:"32-variable-length-relationships-with-multiple-relationship-types",level:3},{value:"3.3. Returning multiple relationships with variable length",id:"33-returning-multiple-relationships-with-variable-length",level:3},{value:"4. Using multiple <code>MATCH</code> clauses",id:"4-using-multiple-match-clauses",level:2},{value:"4.1. Cartesian product of nodes",id:"41-cartesian-product-of-nodes",level:3},{value:"4.2. Creating a list",id:"42-creating-a-list",level:3},{value:"Data set Queries",id:"data-set-queries",level:2}],u={toc:s};function h(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause is used to obtain data from the database by matching it to a given pattern."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-matching-nodes"},"Matching nodes")," ",(0,l.kt)("br",null),"\n1.1. ",(0,l.kt)("a",{parentName:"li",href:"#11-get-all-nodes"},"Get all nodes")," ",(0,l.kt)("br",null),"\n1.2. ",(0,l.kt)("a",{parentName:"li",href:"#12-get-all-nodes-with-a-label"},"Get all nodes with a label")," ",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-matching-relationships"},"Matching relationships")," ",(0,l.kt)("br",null),"\n2.1. ",(0,l.kt)("a",{parentName:"li",href:"#21-get-all-related-nodes"},"Get all related nodes")," ",(0,l.kt)("br",null),"\n2.2. ",(0,l.kt)("a",{parentName:"li",href:"#22-get-related-nodes-with-a-label"},"Get related nodes with a label")," ",(0,l.kt)("br",null),"\n2.3. ",(0,l.kt)("a",{parentName:"li",href:"#23-get-related-nodes-with-a-directed-relationship"},"Get related nodes with a directed relationship")," ",(0,l.kt)("br",null),"\n2.4. ",(0,l.kt)("a",{parentName:"li",href:"#24-get-a-relationship"},"Get a relationship")," ",(0,l.kt)("br",null),"\n2.5. ",(0,l.kt)("a",{parentName:"li",href:"#25-matching-on-a-relationship-with-a-type"},"Matching on a relationship with a type")," ",(0,l.kt)("br",null),"\n2.6. ",(0,l.kt)("a",{parentName:"li",href:"#26-matching-on-relationships-with-multiple-types"},"Matching on relationships with multiple types")," ",(0,l.kt)("br",null),"\n2.7. ",(0,l.kt)("a",{parentName:"li",href:"#27-uncommon-characters-in-relationship-types"},"Uncommon characters in relationship types")," ",(0,l.kt)("br",null),"\n2.8. ",(0,l.kt)("a",{parentName:"li",href:"#28-match-with-multiple-relationships"},"Match with multiple relationships")," ",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-matching-with-variable-length-relationships"},"Matching with variable length relationships")," ",(0,l.kt)("br",null),"\n3.1. ",(0,l.kt)("a",{parentName:"li",href:"#31-variable-length-relationships"},"Variable length relationships")," ",(0,l.kt)("br",null),"\n3.2. ",(0,l.kt)("a",{parentName:"li",href:"#32-variable-length-relationships-with-multiple-relationship-types"},"Variable length relationships with multiple relationship types")," ",(0,l.kt)("br",null),"\n3.3. ",(0,l.kt)("a",{parentName:"li",href:"#33-returning-multiple-relationships-with-variable-length"},"Returning multiple relationships with variable length")," ",(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#4-using-multiple-match-clauses"},"Using multiple MATCH clauses")," ",(0,l.kt)("br",null),"\n4.1. ",(0,l.kt)("a",{parentName:"li",href:"#41-cartesian-product-of-nodes"},"Cartesian product of nodes")," ",(0,l.kt)("br",null),"\n4.2. ",(0,l.kt)("a",{parentName:"li",href:"#42-creating-a-list"},"Creating a list")," ",(0,l.kt)("br",null))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Each node and relationship gets a identifier generated during their initialization which is persisted through the durability mechanism."),(0,l.kt)("p",{parentName:"admonition"},"Return it with the ",(0,l.kt)("a",{parentName:"p",href:"/cypher-manual/functions#scalar-functions"},(0,l.kt)("inlineCode",{parentName:"a"},"id()")," function"),". ")),(0,l.kt)("h2",{id:"data-set"},"Data Set"),(0,l.kt)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",(0,l.kt)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),(0,l.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),(0,l.kt)("h2",{id:"1-matching-nodes"},"1. Matching nodes"),(0,l.kt)("h3",{id:"11-get-all-nodes"},"1.1. Get all nodes"),(0,l.kt)("p",null,"Without specifying labels, the query will return all the nodes in a graph:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) \nRETURN n;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-----------------------------------------------------------------------------------------------------+\n| n                                                                                                   |\n+-----------------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000})         |\n| (:Country {continent: "Europe", language: "French", name: "France", population: 67000000})          |\n| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n| (:Person {name: "John"})                                                                            |\n| (:Person {name: "Harry"})                                                                           |\n| (:Person {name: "Anna"})                                                                            |\n+-----------------------------------------------------------------------------------------------------+\n')),(0,l.kt)("h3",{id:"12-get-all-nodes-with-a-label"},"1.2. Get all nodes with a label"),(0,l.kt)("p",null,"By specifying the label of a node, all the nodes with that label are returned:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country)\nRETURN c;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-----------------------------------------------------------------------------------------------------+\n| c                                                                                                   |\n+-----------------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000})         |\n| (:Country {continent: "Europe", language: "French", name: "France", population: 67000000})          |\n| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+-----------------------------------------------------------------------------------------------------+\n')),(0,l.kt)("h2",{id:"2-matching-relationships"},"2. Matching relationships"),(0,l.kt)("h3",{id:"21-get-all-related-nodes"},"2.1. Get all related nodes"),(0,l.kt)("p",null,"By using the ",(0,l.kt)("em",{parentName:"p"},"related to")," symbol ",(0,l.kt)("inlineCode",{parentName:"p"},"--"),", nodes that have a relationship with the specified node can be returned.\nThe symbol represents an undirected relationship which means the direction of the relationship is not taken into account."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Person {name: 'John'})--(n)\nRETURN n;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+---------------------------------------------------------------------------------------------+\n| n                                                                                           |\n+---------------------------------------------------------------------------------------------+\n| (:Person {name: "Anna"})                                                                    |\n| (:Country {continent: "Europe", language: "French", name: "France", population: 67000000})  |\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000}) |\n| (:Person {name: "Harry"})                                                                   |\n+---------------------------------------------------------------------------------------------+\n')),(0,l.kt)("h3",{id:"22-get-related-nodes-with-a-label"},"2.2. Get related nodes with a label"),(0,l.kt)("p",null,"To only return ",(0,l.kt)("em",{parentName:"p"},"related to")," nodes with a specific label you need to add it using the label syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Person {name: 'John'})--(p:Person)\nRETURN p;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+---------------------------+\n| p                         |\n+---------------------------+\n| (:Person {name: "Harry"}) |\n| (:Person {name: "Anna"})  |\n+---------------------------+\n')),(0,l.kt)("h3",{id:"23-get-related-nodes-with-a-directed-relationship"},"2.3. Get related nodes with a directed relationship"),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"related to")," symbol ",(0,l.kt)("inlineCode",{parentName:"p"},"--")," can be extended by using:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--\x3e")," to specify outgoing relationships,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<--")," to specify ingoing relationships.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Country {name: 'France'})<--(p:Person)\nRETURN p;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+--------------------------+\n| p                        |\n+--------------------------+\n| (:Person {name: "John"}) |\n+--------------------------+\n')),(0,l.kt)("h3",{id:"24-get-a-relationship"},"2.4. Get a relationship"),(0,l.kt)("p",null,"If you want to return the relationship between two nodes or a property of the relationship, a variable is required.\nA directed or undirected relationship can be used."),(0,l.kt)("p",null,"This query returns the relationship and its type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Person {name: 'John'})-[r]->()\nRETURN type(r);\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+--------------+\n| type(r)      |\n+--------------+\n| WORKING_IN   |\n| LIVING_IN    |\n| FRIENDS_WITH |\n+--------------+\n")),(0,l.kt)("p",null,"This query also returns the property ",(0,l.kt)("inlineCode",{parentName:"p"},"date_of_start")," of the relationship:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Person {name: 'John'})-[r]->()\nRETURN type(r), r.date_of_start;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+-----------------+-----------------+\n| type(r)         | r.date_of_start |\n+-----------------+-----------------+\n| WORKING_IN      | 2014            |\n| LIVING_IN       | 2014            |\n| FRIENDS_WITH    | 2011            |\n+-----------------+-----------------+\n")),(0,l.kt)("h3",{id:"25-matching-on-a-relationship-with-a-type"},"2.5. Matching on a relationship with a type"),(0,l.kt)("p",null,"To return a relationship with a specified type you need to use the type syntax.\nA directed or undirected relationship can be used:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person {name: 'John'})-[:LIVING_IN]->(c)\nRETURN c.name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+---------+\n| c.name  |\n+---------+\n| Germany |\n+---------+\n")),(0,l.kt)("h3",{id:"26-matching-on-relationships-with-multiple-types"},"2.6. Matching on relationships with multiple types"),(0,l.kt)("p",null,"To return relationships with any of the specified types, the types need to be chained together with the pipe symbol ",(0,l.kt)("inlineCode",{parentName:"p"},"|"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person {name: 'John'})-[:LIVING_IN |:WORKING_IN]->(c)\nRETURN c.name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+---------+\n| c.name  |\n+---------+\n| France  |\n| Germany |\n+---------+\n")),(0,l.kt)("h3",{id:"27-uncommon-characters-in-relationship-types"},"2.7. Uncommon characters in relationship types"),(0,l.kt)("p",null,"If a type has non-letter characters, like spaces, for example, the backtick symbol ","`"," needs to be used to quote these.\nIf the relationship type ",(0,l.kt)("inlineCode",{parentName:"p"},"LIVING_IN")," had a space instead of an underscore, a possible query would look like this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Country {name: 'France'})<-[r:`LIVING IN`]-()\nRETURN r.name;\n")),(0,l.kt)("h3",{id:"28-match-with-multiple-relationships"},"2.8. Match with multiple relationships"),(0,l.kt)("p",null,"Multiple relationship statements can be specified in the query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Country {name: 'France'})<-[l:WORKING_IN]-(p)-[w:LIVING_IN]->(:Country {name: 'Germany'})\nRETURN p.name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+--------+\n| p.name |\n+--------+\n| John   |\n+--------+\n")),(0,l.kt)("h2",{id:"3-matching-with-variable-length-relationships"},"3. Matching with variable length relationships"),(0,l.kt)("h3",{id:"31-variable-length-relationships"},"3.1. Variable length relationships"),(0,l.kt)("p",null,"If a node needs to be specified by its distance in relationship\u2192node hops, the following syntax is used: ",(0,l.kt)("inlineCode",{parentName:"p"},"-[:TYPE*minHops..maxHops]\u2192"),".\n",(0,l.kt)("inlineCode",{parentName:"p"},"minHops")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"maxHops")," are optional and default to 1 and infinity respectively.\nThe dots can be omitted if both are not specified or if only one is set which\nimplies a fixed length pattern."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH ({name: 'United Kingdom'})<-[:LIVING_IN*1..2]-(n)\nRETURN n;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+---------------------------------------------------------------------------------------------+\n| n                                                                                           |\n+---------------------------------------------------------------------------------------------+\n| (:Person {name: "Harry"})                                                                   |\n| (:Person {name: "Anna"})                                                                    |\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000}) |\n+---------------------------------------------------------------------------------------------+\n')),(0,l.kt)("h3",{id:"32-variable-length-relationships-with-multiple-relationship-types"},"3.2. Variable length relationships with multiple relationship types"),(0,l.kt)("p",null,"If variable lengths are used with multiple stacked up relationship types, ",(0,l.kt)("inlineCode",{parentName:"p"},"*minHops..maxHops")," applies to any combination of relationships:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH ({name: 'United Kingdom'})<-[:WORKING_IN|FRIENDS_WITH*1..2]-(p:Person)\nRETURN p;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+---------------------------+\n| p                         |\n+---------------------------+\n| (:Person {name: "John"})  |\n| (:Person {name: "Harry"}) |\n| (:Person {name: "Anna"})  |\n+---------------------------+\n')),(0,l.kt)("h3",{id:"33-returning-multiple-relationships-with-variable-length"},"3.3. Returning multiple relationships with variable length"),(0,l.kt)("p",null,"If a variable length is used, the list of relationships can be returned by adding ",(0,l.kt)("inlineCode",{parentName:"p"},"variable=")," at the beginning of the ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH p=({name: 'John'})<-[:FRIENDS_WITH*1..2]-()\nRETURN relationships(p);\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+----------------------------------------+\n| relationships(p)                       |\n+----------------------------------------+\n| [[FRIENDS_WITH {date_of_start: 2012}]] |\n+----------------------------------------+\n")),(0,l.kt)("h2",{id:"4-using-multiple-match-clauses"},"4. Using multiple ",(0,l.kt)("inlineCode",{parentName:"h2"},"MATCH")," clauses"),(0,l.kt)("h3",{id:"41-cartesian-product-of-nodes"},"4.1. Cartesian product of nodes"),(0,l.kt)("p",null,"To create a Cartesian product, match the nodes in two separate ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," queries. "),(0,l.kt)("p",null,"For example, the following query will match each person from the dataset with each European country from the dataset: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (p:Person)\nMATCH (c:Country {continent: "Europe"})\nRETURN p.name,c.name;\n')),(0,l.kt)("p",null,"Output: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+------------------+------------------+\n| p.name           | c.name           |\n+------------------+------------------+\n| "John"           | "Germany"        |\n| "Harry"          | "Germany"        |\n| "Anna"           | "Germany"        |\n| "John"           | "France"         |\n| "Harry"          | "France"         |\n| "Anna"           | "France"         |\n| "John"           | "United Kingdom" |\n| "Harry"          | "United Kingdom" |\n| "Anna"           | "United Kingdom" |\n+------------------+------------------+\n')),(0,l.kt)("p",null,"The query returns the Cartesian product of matched nodes. The output of the first ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause is matched with each output of the second ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause. In this case, each person from the dataset is matched with each European country. "),(0,l.kt)("h3",{id:"42-creating-a-list"},"4.2. Creating a list"),(0,l.kt)("p",null,"If you want to create a list containing the results of different ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," queries, you can achieve that with multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clauses in one query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (p:Person)\nWITH COLLECT(p.name) as people\nMATCH (c:Country {continent: "Europe"})\nWITH people + COLLECT(c.name) as names\nRETURN names;\n')),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+------------------------------------------------------------------+\n| names                                                            |\n+------------------------------------------------------------------+\n| ["John", "Harry", "Anna", "Germany", "France", "United Kingdom"] |\n+------------------------------------------------------------------+\n')),(0,l.kt)("p",null,"The query returns a list of names of all people from the dataset concatenated with the names of all European countries. "),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If any of the sets ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause returns is empty, the whole output will be an empty list.")),(0,l.kt)("p",null,"The following query will return an empty list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (p:Person)\nWITH COLLECT(p.name) as people\nMATCH (c:Country {continent: "Asia"})\nWITH people + COLLECT(c.name) as names\nRETURN names;\n')),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},"+-------+\n| names |\n+-------+\n| Null  |\n+-------+\n")),(0,l.kt)("p",null,"Since the dataset doesn't contain any nodes labeled as ",(0,l.kt)("inlineCode",{parentName:"p"},"Country")," with a property ",(0,l.kt)("inlineCode",{parentName:"p"},"continent")," with the value ",(0,l.kt)("inlineCode",{parentName:"p"},"Asia"),", the second ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause returns an empty dataset and therefore the output is also an empty list. To avoid getting an empty list as an output, due to any of the ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clauses returning an empty set, use ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONAL MATCH")," clause: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (p:Person)\nWITH COLLECT(p.name) as people\nOPTIONAL MATCH (c:Country {continent: "Asia"})\nWITH people + COLLECT(c.name) as names\nRETURN names;\n')),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nocopy"},'+---------------------------+\n| names                     |\n+---------------------------+\n| ["John", "Harry", "Anna"] |\n+---------------------------+\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"OPTIONAL MATCH")," clause bypasses the empty set and the query returns only non-empty sets. Therefore, the output of the query is a list containing only the results of the first ",(0,l.kt)("inlineCode",{parentName:"p"},"MATCH")," clause.    "),(0,l.kt)("h2",{id:"data-set-queries"},"Data set Queries"),(0,l.kt)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country {name: 'Germany', language: 'German', continent: 'Europe', population: 83000000});\nCREATE (c2:Country {name: 'France', language: 'French', continent: 'Europe', population: 67000000});\nCREATE (c3:Country {name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000});\n\nMATCH (c1),(c2)\nWHERE c1.name = 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'John'})-[:LIVING_IN {date_of_start: 2014}]->(c1);\n\nMATCH (c)\nWHERE c.name = 'United Kingdom'\nCREATE (c)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'Harry'})-[:LIVING_IN {date_of_start: 2013}]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH {date_of_start: 2011}]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH {date_of_start: 2012}]-(:Person {name: 'Anna'})-[:FRIENDS_WITH {date_of_start: 2014}]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN {date_of_start: 2014}]-(p)-[:LIVING_IN {date_of_start: 2014}]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}h.isMDXComponent=!0}}]);