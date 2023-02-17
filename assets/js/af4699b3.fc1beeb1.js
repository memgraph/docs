"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,E=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(E,o(o({ref:t},c),{},{components:n})):a.createElement(E,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"delete",title:"DELETE clause",sidebar_label:"DELETE"},o=void 0,i={unversionedId:"clauses/delete",id:"clauses/delete",title:"DELETE clause",description:"The DELETE clause is used to delete nodes and relationships from the database.",source:"@site/cypher-manual/clauses/delete.md",sourceDirName:"clauses",slug:"/clauses/delete",permalink:"/docs/cypher-manual/clauses/delete",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/delete.md",tags:[],version:"current",frontMatter:{id:"delete",title:"DELETE clause",sidebar_label:"DELETE"},sidebar:"cypher_manual",previous:{title:"CREATE",permalink:"/docs/cypher-manual/clauses/create"},next:{title:"EXPLAIN",permalink:"/docs/cypher-manual/clauses/explain"}},s={},p=[{value:"Dataset",id:"dataset",level:2},{value:"1. Deleting a node",id:"1-deleting-a-node",level:2},{value:"2. Deleting a node and its relationships",id:"2-deleting-a-node-and-its-relationships",level:2},{value:"3. Deleting a relationship",id:"3-deleting-a-relationship",level:2},{value:"4. Deleting everything",id:"4-deleting-everything",level:2},{value:"Dataset queries",id:"dataset-queries",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," clause is used to delete nodes and relationships from the database."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-deleting-a-node"},"Deleting a node")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-deleting-a-node-and-its-relationships"},"Deleting a node and its relationships")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-deleting-a-relationship"},"Deleting a relationship")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#4-deleting-everything"},"Deleting everything"))),(0,r.kt)("h2",{id:"dataset"},"Dataset"),(0,r.kt)("p",null,"The following examples are executed with this data et. You can create this dataset\nlocally by executing the queries at the end of the page: ",(0,r.kt)("a",{parentName:"p",href:"#data-set-queries"},"Dataset queries"),"."),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),(0,r.kt)("h2",{id:"1-deleting-a-node"},"1. Deleting a node"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," clause can be used to delete a node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country {name: 'United Kingdom'})\nDELETE c;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"Failed to remove node because of it's existing connections. Consider using DETACH DELETE.\n")),(0,r.kt)("p",null,"On the dataset we are using, this query results in an error because ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),"\ncan only be used on nodes that have no relationships."),(0,r.kt)("h2",{id:"2-deleting-a-node-and-its-relationships"},"2. Deleting a node and its relationships"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," clause can be used to delete a node along with all of its relationships with the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"DETACH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country {name: 'United Kingdom'})\nDETACH DELETE n;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"Empty set (0.001 sec)\n")),(0,r.kt)("h2",{id:"3-deleting-a-relationship"},"3. Deleting a relationship"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," clause can be used to delete a relationship:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country {name: 'Germany'})<-[r:LIVING_IN]-()\nDELETE r;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"Empty set (0.003 sec)\n")),(0,r.kt)("h2",{id:"4-deleting-everything"},"4. Deleting everything"),(0,r.kt)("p",null,"To delete all nodes and relationships in a graph, use the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n)\nDETACH DELETE n;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"Empty set (0.001 sec)\n")),(0,r.kt)("h2",{id:"dataset-queries"},"Dataset queries"),(0,r.kt)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our dataset locally by executing the following query block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country {name: 'Germany', language: 'German', continent: 'Europe', population: 83000000});\nCREATE (c2:Country {name: 'France', language: 'French', continent: 'Europe', population: 67000000});\nCREATE (c3:Country {name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000});\n\nMATCH (c1),(c2)\nWHERE c1.name = 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'John'})-[:LIVING_IN {date_of_start: 2014}]->(c1);\n\nMATCH (c)\nWHERE c.name = 'United Kingdom'\nCREATE (c)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'Harry'})-[:LIVING_IN {date_of_start: 2013}]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH {date_of_start: 2011}]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH {date_of_start: 2012}]-(:Person {name: 'Anna'})-[:FRIENDS_WITH {date_of_start: 2014}]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN {date_of_start: 2014}]-(p)-[:LIVING_IN {date_of_start: 2014}]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}u.isMDXComponent=!0}}]);