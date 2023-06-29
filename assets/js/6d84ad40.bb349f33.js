"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,y=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(y,p(p({ref:t},s),{},{components:n})):a.createElement(y,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={id:"set",title:"SET clause",sidebar_label:"SET"},p=void 0,o={unversionedId:"clauses/set",id:"clauses/set",title:"SET clause",description:"The SET clause is used to update labels on nodes and properties on nodes and relationships.",source:"@site/cypher-manual/clauses/set.md",sourceDirName:"clauses",slug:"/clauses/set",permalink:"/docs/cypher-manual/clauses/set",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/set.md",tags:[],version:"current",frontMatter:{id:"set",title:"SET clause",sidebar_label:"SET"},sidebar:"cypher_manual",previous:{title:"RETURN",permalink:"/docs/cypher-manual/clauses/return"},next:{title:"UNION",permalink:"/docs/cypher-manual/clauses/union"}},i={},u=[{value:"Dataset",id:"dataset",level:2},{value:"1. Setting a property",id:"1-setting-a-property",level:2},{value:"2. Setting multiple properties",id:"2-setting-multiple-properties",level:2},{value:"3. Setting node labels",id:"3-setting-node-labels",level:2},{value:"4. Update a property",id:"4-update-a-property",level:2},{value:"5. Remove a property",id:"5-remove-a-property",level:2},{value:"6. Copy all properties",id:"6-copy-all-properties",level:2},{value:"7. Replace all properties using map",id:"7-replace-all-properties-using-map",level:2},{value:"8. Update all properties using map",id:"8-update-all-properties-using-map",level:2},{value:"Dataset queries",id:"dataset-queries",level:2}],s={toc:u};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," clause is used to update labels on nodes and properties on nodes and relationships."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-setting-a-property"},"Setting a property")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-setting-multiple-properties"},"Setting multiple properties")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-setting-node-labels"},"Setting node labels")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#4-update-a-property"},"Update a property")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#5-remove-a-property"},"Remove a property")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#6-copy-all-properties"},"Copy all properties")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#7-replace-all-properties-using-map"},"Replace all properties using map")," ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#8-update-all-properties-using-map"},"Update all properties using map"))),(0,r.kt)("h2",{id:"dataset"},"Dataset"),(0,r.kt)("p",null,"The following examples are executed with this dataset. You can create this dataset\nlocally by executing the queries at the end of the page: ",(0,r.kt)("a",{parentName:"p",href:"#data-set-queries"},"Dataset queries"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data set",src:n(65449).Z,width:"3050",height:"1489"})),(0,r.kt)("h2",{id:"1-setting-a-property"},"1. Setting a property"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," clause can be used to set the value of a property on a node or relationship:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country {name: 'Germany'})\nSET c.population = 83000001\nRETURN c.name, c.population;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"+--------------+--------------+\n| c.name       | c.population |\n+--------------+--------------+\n| Germany      | 83000001     |\n+--------------+--------------+\n")),(0,r.kt)("h2",{id:"2-setting-multiple-properties"},"2. Setting multiple properties"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," clause can be used to set the value of multiple properties nodes or relationships by separating them with a comma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country {name: 'Germany'})\nSET c.capital = 'Berlin', c.population = 83000002\nRETURN c.name, c.population, c.capital;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"+--------------+--------------+--------------+\n| c.name       | c.population | c.capital    |\n+--------------+--------------+--------------+\n| Germany      | 83000002     | Berlin       |\n+--------------+--------------+--------------+\n")),(0,r.kt)("h2",{id:"3-setting-node-labels"},"3. Setting node labels"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," clause can be used to set the label on a node. If the node has a label, a new one will be added while the old one is left as is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c {name: 'Germany'})\nSET c:Land\nRETURN labels(c);\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'+---------------------+\n| labels(c)           |\n+---------------------+\n| ["Country", "Land"] |\n+---------------------+\n')),(0,r.kt)("p",null,"Multiple labels can be also set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c {name: 'Germany'})\nSET c:Place:Area\nRETURN labels(c);\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'+--------------------------------------+\n| labels(c)                            |\n+--------------------------------------+\n| ["Country", "Land", "Place", "Area"] |\n+--------------------------------------+\n')),(0,r.kt)("h2",{id:"4-update-a-property"},"4. Update a property"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," clause can be used to update the value or type of a property on a node or relationship:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country {name: 'Germany'})\nSET c.population = 'not available'\nRETURN c.population;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"+---------------+\n| c.population  |\n+---------------+\n| not available |\n+---------------+\n")),(0,r.kt)("h2",{id:"5-remove-a-property"},"5. Remove a property"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," clause can be used to remove the value of a property on a node or relationship by setting it to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country {name: 'Germany'})\nSET c.population = NULL\nRETURN c.population;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"+--------------+\n| c.population |\n+--------------+\n| Null         |\n+--------------+\n")),(0,r.kt)("h2",{id:"6-copy-all-properties"},"6. Copy all properties"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," is used to copy the properties of one node/relationship to another, all the properties of the latter will be removed and replaced with the new ones:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c1:Country {name: 'Germany'}), (c2:Country {name: 'France'})\nSET c2 = c1\nRETURN c2, c1;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'+----------------------------------------------------------------------------+----------------------------------------------------------------------------+\n| c2                                                                         | c1                                                                         |\n+----------------------------------------------------------------------------+----------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany"})      | (:Country:Land {continent: "Europe", language: "German", name: "Germany"}) |\n+----------------------------------------------------------------------------+----------------------------------------------------------------------------+\n')),(0,r.kt)("h2",{id:"7-replace-all-properties-using-map"},"7. Replace all properties using map"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," is used with the property replacement operator ",(0,r.kt)("inlineCode",{parentName:"p"},"="),", all the properties in the map that are on the node or relationship will be updated.\nThe properties that are not on the node or relationship but are in the map will be added. The properties that are not in the map will be removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country {name: 'Germany'})\nSET c = {name: 'Germany', population: '85000000'}\nRETURN c;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'+------------------------------------------------------+\n| c                                                    |\n+------------------------------------------------------+\n| (:Country {name: "Germany", population: "85000000"}) |\n+------------------------------------------------------+\n')),(0,r.kt)("p",null,"If an empty map is used, all the properties of a node or relationship will be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country {name: 'Germany'})\nSET c = {}\nRETURN c;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},"+------------+\n| c          |\n+------------+\n| (:Country) |\n+------------+\n")),(0,r.kt)("h2",{id:"8-update-all-properties-using-map"},"8. Update all properties using map"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"SET")," is used with the property mutation operator ",(0,r.kt)("inlineCode",{parentName:"p"},"+="),", all the properties in the map that are on the node or relationship will be updated.\nThe properties that are not on the node or relationship but are in the map will be added. Properties that are not present in the map will be left as is."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country {name: 'Germany'})\nSET c += {name: 'Germany', population: '85000000'}\nRETURN c;\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-----------------------------------------------------------------------------------------------+\n| c                                                                                             |\n+-----------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: "85000000"}) |\n+-----------------------------------------------------------------------------------------------+\n')),(0,r.kt)("h2",{id:"dataset-queries"},"Dataset queries"),(0,r.kt)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our dataset locally by executing the following query block."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country {name: 'Germany', language: 'German', continent: 'Europe', population: 83000000});\nCREATE (c2:Country {name: 'France', language: 'French', continent: 'Europe', population: 67000000});\nCREATE (c3:Country {name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000});\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'John'})-[:LIVING_IN {date_of_start: 2014}]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN {date_of_start: 2014}]-(p:Person {name: 'Harry'})-[:LIVING_IN {date_of_start: 2013}]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH {date_of_start: 2011}]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH {date_of_start: 2012}]-(:Person {name: 'Anna'})-[:FRIENDS_WITH {date_of_start: 2014}]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN {date_of_start: 2014}]-(p)-[:LIVING_IN {date_of_start: 2014}]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}c.isMDXComponent=!0},65449:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/data_set-c32e22f6291c673781d8ade21ea450fe.png"}}]);