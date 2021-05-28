(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[848],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,N=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return t?a.createElement(N,i(i({ref:n},s),{},{components:t})):a.createElement(N,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93382:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var a=t(22122),r=t(19756),o=(t(67294),t(3905)),i={id:"union",title:"UNION clause",sidebar_label:"UNION"},u={unversionedId:"clauses/union",id:"clauses/union",isDocsHomePage:!1,title:"UNION clause",description:"The UNION clause is used to combine the result of multiple queries.",source:"@site/cypher-manual/clauses/union.md",sourceDirName:"clauses",slug:"/clauses/union",permalink:"/cypher-manual/clauses/union",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/union.md",version:"current",sidebar_label:"UNION",frontMatter:{id:"union",title:"UNION clause",sidebar_label:"UNION"},sidebar:"cypher_manual",previous:{title:"SET clause",permalink:"/cypher-manual/clauses/set"},next:{title:"UNWIND clause",permalink:"/cypher-manual/clauses/unwind"}},l=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Combine queries and retain duplicates",id:"1-combine-queries-and-retain-duplicates",children:[]},{value:"2. Combine queries and remove duplicates",id:"2-combine-queries-and-remove-duplicates",children:[]},{value:"Data set Queries",id:"data-set-queries",children:[]}],c={toc:l};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION")," clause is used to combine the result of multiple queries."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-combine-queries-and-retain-duplicates"},"Combine queries and retain duplicates")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-combine-queries-and-remove-duplicates"},"Combine queries and remove duplicates"))),(0,o.kt)("h2",{id:"data-set"},"Data Set"),(0,o.kt)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",(0,o.kt)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),(0,o.kt)("h2",{id:"1-combine-queries-and-retain-duplicates"},"1. Combine queries and retain duplicates"),(0,o.kt)("p",null,"To combine two or more queries and return their results without removing duplicates, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION ALL")," clause.\nFirst, let's add a few existing nodes to the data set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (:Person { name: 'John' });\nCREATE (:Person { name: 'Anna' });\n")),(0,o.kt)("p",null,"A query with the ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION ALL")," clause could look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country) \nRETURN c.name as columnName\nUNION ALL \nMATCH (p:Person)\nRETURN p.name AS columnName;\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+----------------+\n| columnName     |\n+----------------+\n| Germany        |\n| France         |\n| United Kingdom |\n| John           |\n| Harry          |\n| Anna           |\n| John           |\n| Anna           |\n+----------------+\n")),(0,o.kt)("h2",{id:"2-combine-queries-and-remove-duplicates"},"2. Combine queries and remove duplicates"),(0,o.kt)("p",null,"To combine two or more queries and return their results without removing duplicates, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"UNION")," clause without ",(0,o.kt)("inlineCode",{parentName:"p"},"ALL"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country) \nRETURN c.name as columnName\nUNION \nMATCH (p:Person)\nRETURN p.name AS columnName;\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+----------------+\n| columnName     |\n+----------------+\n| Germany        |\n| France         |\n| United Kingdom |\n| John           |\n| Harry          |\n| Anna           |\n+----------------+\n")),(0,o.kt)("h2",{id:"data-set-queries"},"Data set Queries"),(0,o.kt)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nCREATE (:Person { name: 'John' });\nCREATE (:Person { name: 'Anna' });\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}s.isMDXComponent=!0}}]);