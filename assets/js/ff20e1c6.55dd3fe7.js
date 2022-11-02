"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"with",title:"WITH clause",sidebar_label:"WITH"},l=void 0,s={unversionedId:"clauses/with",id:"clauses/with",title:"WITH clause",description:"The WITH is used to chain together parts of a query, piping the results from one to be used as starting points or criteria in the next.",source:"@site/cypher-manual/clauses/with.md",sourceDirName:"clauses",slug:"/clauses/with",permalink:"/docs/cypher-manual/clauses/with",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/with.md",tags:[],version:"current",frontMatter:{id:"with",title:"WITH clause",sidebar_label:"WITH"},sidebar:"cypher_manual",previous:{title:"WHERE",permalink:"/docs/cypher-manual/clauses/where"},next:{title:"Extension clauses",permalink:"/docs/cypher-manual/extension-clauses"}},i={},p=[{value:"Dataset",id:"dataset",level:2},{value:"1. Filter on aggregate functions",id:"1-filter-on-aggregate-functions",level:2},{value:"2. Sorting results",id:"2-sorting-results",level:2},{value:"3. Limited path searches",id:"3-limited-path-searches",level:2},{value:"Dataset queries",id:"dataset-queries",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," is used to chain together parts of a query, piping the results from one to be used as starting points or criteria in the next."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-filter-on-aggregate-functions"},"Filter on aggregate functions")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-sorting-results"},"Sorting results")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-limited-path-searches"},"Limited path searches"))),(0,r.kt)("h2",{id:"dataset"},"Dataset"),(0,r.kt)("p",null,"The following examples are executed with this dataset. You can create this dataset\nlocally by executing the queries at the end of the page: ",(0,r.kt)("a",{parentName:"p",href:"#data-set-queries"},"Dataset queries"),"."),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),(0,r.kt)("h2",{id:"1-filter-on-aggregate-functions"},"1. Filter on aggregate functions"),(0,r.kt)("p",null,"Aggregated results have to pass through a ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," if you want to filter them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person {name: 'John'})--(person)--\x3e()\nWITH person, count(*) AS foaf\nWHERE foaf > 1\nRETURN person.name;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"+-------------+\n| person.name |\n+-------------+\n| Harry       |\n| Anna        |\n+-------------+\n")),(0,r.kt)("h2",{id:"2-sorting-results"},"2. Sorting results"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," clause can be used to order results before using ",(0,r.kt)("inlineCode",{parentName:"p"},"collect()")," on them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nWITH n\nORDER BY n.name ASC LIMIT 3\nRETURN collect(n.name);\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-------------------------------+\n| collect(n.name)               |\n+-------------------------------+\n| ["Anna", "France", "Germany"] |\n+-------------------------------+\n')),(0,r.kt)("h2",{id:"3-limited-path-searches"},"3. Limited path searches"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WITH")," clause can be used to match paths, limit to a certain number,\nand then match again using those paths as a base:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p1 {name: 'John'})--(p2)\nWITH p2\nORDER BY p2.name ASC LIMIT 1\nMATCH (p2)--(p3)\nRETURN p3.name;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"+----------------+\n| p3.name        |\n+----------------+\n| John           |\n| Harry          |\n| Germany        |\n| United Kingdom |\n+----------------+\n")),(0,r.kt)("h2",{id:"dataset-queries"},"Dataset queries"),(0,r.kt)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our dataset locally by executing the following query block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country {name: 'Germany', language: 'German', continent: 'Europe', population: 83000000});\nCREATE (c2:Country {name: 'France', language: 'French', continent: 'Europe', population: 67000000});\nCREATE (c3:Country {name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000});\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'John'})-[:LIVING_IN {date_of_start: 2014}]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'Harry'})-[:LIVING_IN {date_of_start: 2013}]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH {date_of_start: 2011}]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH {date_of_start: 2012}]-(:Person {name: 'Anna'})-[:FRIENDS_WITH {date_of_start: 2014}]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN {date_of_start: 2014}]-(p)-[:LIVING_IN {date_of_start: 2014}]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}u.isMDXComponent=!0}}]);