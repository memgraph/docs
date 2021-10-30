"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46839],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15303:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),i=["components"],o={id:"return",title:"RETURN clause",sidebar_label:"RETURN"},u=void 0,p={unversionedId:"clauses/return",id:"clauses/return",isDocsHomePage:!1,title:"RETURN clause",description:"The RETURN clause defines which data should be included in the resulting set.",source:"@site/cypher-manual/clauses/return.md",sourceDirName:"clauses",slug:"/clauses/return",permalink:"/docs/cypher-manual/clauses/return",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/return.md",tags:[],version:"current",frontMatter:{id:"return",title:"RETURN clause",sidebar_label:"RETURN"},sidebar:"cypher_manual",previous:{title:"REMOVE",permalink:"/docs/cypher-manual/clauses/remove"},next:{title:"SET",permalink:"/docs/cypher-manual/clauses/set"}},s=[{value:"Data Set",id:"data-set",children:[],level:2},{value:"1. Returning nodes",id:"1-returning-nodes",children:[],level:2},{value:"2. Returning relationships",id:"2-returning-relationships",children:[],level:2},{value:"3. Returning properties",id:"3-returning-properties",children:[],level:2},{value:"4. Returning multiple elements",id:"4-returning-multiple-elements",children:[],level:2},{value:"5. Returning all elements",id:"5-returning-all-elements",children:[],level:2},{value:"6. Handling uncommon characters",id:"6-handling-uncommon-characters",children:[],level:2},{value:"7. Returning elements with an alias",id:"7-returning-elements-with-an-alias",children:[],level:2},{value:"8. Optional properties",id:"8-optional-properties",children:[],level:2},{value:"9. Returning expressions",id:"9-returning-expressions",children:[],level:2},{value:"10. Returning unique results",id:"10-returning-unique-results",children:[],level:2},{value:"Data set Queries",id:"data-set-queries",children:[],level:2}],c={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," clause defines which data should be included in the resulting set. "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-returning-nodes"},"Returning nodes")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-returning-relationships"},"Returning relationships")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-returning-properties"},"Returning properties")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#4-returning-multiple-elements"},"Returning multiple elements")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#5-returning-all-elements"},"Returning all elements")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#6-handling-uncommon-characters"},"Handling uncommon characters")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#7-returning-elements-with-an-alias"},"Returning elements with an alias")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#8-optional-properties"},"Optional properties")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#9-returning-expressions"},"Returning expressions")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#10-returning-unique-results"},"Returning unique results"))),(0,l.kt)("h2",{id:"data-set"},"Data Set"),(0,l.kt)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",(0,l.kt)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),(0,l.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),(0,l.kt)("h2",{id:"1-returning-nodes"},"1. Returning nodes"),(0,l.kt)("p",null,"The node variable needs to be added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," statement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'+-----------------------------------------------------------------------------------------------------+\n| c                                                                                                   |\n+-----------------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+-----------------------------------------------------------------------------------------------------+\n')),(0,l.kt)("h2",{id:"2-returning-relationships"},"2. Returning relationships"),(0,l.kt)("p",null,"The relationship variable needs to be added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," statement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})-[r]-(:Person { name: 'Harry'})\nRETURN type(r);\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+------------+\n| type(r)    |\n+------------+\n| WORKING_IN |\n| LIVING_IN  |\n+------------+\n")),(0,l.kt)("h2",{id:"3-returning-properties"},"3. Returning properties"),(0,l.kt)("p",null,"The property of a node or a relationship can be returned by using the dot separator."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------------+\n| c.name         |\n+----------------+\n| United Kingdom |\n+----------------+\n")),(0,l.kt)("h2",{id:"4-returning-multiple-elements"},"4. Returning multiple elements"),(0,l.kt)("p",null,"To return multiple elements separate them with a comma character."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.name, c.population, c.continent;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------------+----------------+----------------+\n| c.name         | c.population   | c.continent    |\n+----------------+----------------+----------------+\n| United Kingdom | 66000000       | Europe         |\n+----------------+----------------+----------------+\n")),(0,l.kt)("h2",{id:"5-returning-all-elements"},"5. Returning all elements"),(0,l.kt)("p",null,"To return all the elements from a query, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," symbol."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Country { name: 'United Kingdom'})-[]-(p:Person)\nRETURN *;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'+---------------------------+\n| p                         |\n+---------------------------+\n| (:Person {name: "Harry"}) |\n| (:Person {name: "Harry"}) |\n| (:Person {name: "Anna"})  |\n+---------------------------+\n')),(0,l.kt)("h2",{id:"6-handling-uncommon-characters"},"6. Handling uncommon characters"),(0,l.kt)("p",null,"Uncommon characters are handled using placeholder variables enclosed with the symbol `","`","`.\nFor example, a query could look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (`An uncommon variable!`)\nWHERE `An uncommon variable!`.name = 'A'\nRETURN `An uncommon variable!`.value;\n")),(0,l.kt)("h2",{id:"7-returning-elements-with-an-alias"},"7. Returning elements with an alias"),(0,l.kt)("p",null,"You can specify an alias for an element in the ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," statement using ",(0,l.kt)("inlineCode",{parentName:"p"},"AS"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.name AS Name;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------------+\n| Name           |\n+----------------+\n| United Kingdom |\n+----------------+\n")),(0,l.kt)("h2",{id:"8-optional-properties"},"8. Optional properties"),(0,l.kt)("p",null,"If the property being returned does not exist, ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," will be returned."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.color;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+---------+\n| c.color |\n+---------+\n| Null    |\n+---------+\n")),(0,l.kt)("h2",{id:"9-returning-expressions"},"9. Returning expressions"),(0,l.kt)("p",null," Expressions can be included in the ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," statement."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'United Kingdom'})\nRETURN c.name = 'United Kingdom', \"Literal\";\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+---------------------------+---------------------------+\n| c.name = 'United Kingdom' | \"Literal\"                 |\n+---------------------------+---------------------------+\n| true                      | Literal                   |\n+---------------------------+---------------------------+\n")),(0,l.kt)("h2",{id:"10-returning-unique-results"},"10. Returning unique results"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"RETURN")," statement can be followed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT")," operator, which will remove duplicate results."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH ()-[:LIVING_IN]->(c)\nRETURN DISTINCT c;\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'+-----------------------------------------------------------------------------------------------------+\n| c                                                                                                   |\n+-----------------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000})         |\n| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+-----------------------------------------------------------------------------------------------------+\n')),(0,l.kt)("h2",{id:"data-set-queries"},"Data set Queries"),(0,l.kt)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}m.isMDXComponent=!0}}]);