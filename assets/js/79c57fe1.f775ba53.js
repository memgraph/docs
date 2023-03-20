"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54862],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},52664:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>m,assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),l=r(85162),i=r(83523);const s={id:"export-util",title:"export_util",sidebar_label:"export_util"},u=void 0,p={unversionedId:"query-modules/python/export-util",id:"query-modules/python/export-util",title:"export_util",description:"Module for exporting a graph database or query results in different formats. Currently, this",source:"@site/mage/query-modules/python/export-util.md",sourceDirName:"query-modules/python",slug:"/query-modules/python/export-util",permalink:"/docs/mage/query-modules/python/export-util",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/query-modules/python/export-util.md",tags:[],version:"current",frontMatter:{id:"export-util",title:"export_util",sidebar_label:"export_util"},sidebar:"mage",previous:{title:"elasticsearch_synchronization",permalink:"/docs/mage/query-modules/python/elasticsearch-synchronization"},next:{title:"graph_analyzer",permalink:"/docs/mage/query-modules/python/graph-analyzer"}},d={},c=[{value:"Procedures",id:"procedures",level:2},{value:"<code>json(path)</code>",id:"jsonpath",level:3},{value:"Input:",id:"input",level:4},{value:"Usage:",id:"usage",level:4},{value:"<code>csv_query(query, file_path, stream)</code>",id:"csv_queryquery-file_path-stream",level:3},{value:"Input:",id:"input-1",level:4},{value:"Output:",id:"output",level:4},{value:"Usage:",id:"usage-1",level:4},{value:"Example - Exporting database to a JSON file",id:"example---exporting-database-to-a-json-file",level:2},{value:"Example - Exporting query results to a CSV file",id:"example---exporting-query-results-to-a-csv-file",level:2}],m=e=>{let{children:t,color:r}=e;return(0,n.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},h={toc:c,Highlight:m};function g(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Module for exporting a graph database or query results in different formats. Currently, this\nmodule supports ",(0,n.kt)("a",{parentName:"p",href:"#jsonpath"},(0,n.kt)("strong",{parentName:"a"},"exporting database to a JSON file format"))," and ",(0,n.kt)("a",{parentName:"p",href:"#csv_queryquery-file_path-stream"},(0,n.kt)("strong",{parentName:"a"},"exporting query results in a CSV file format")),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage/blob/main/python/export_util.py"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/source-export_util-FB6E00?logo=github&style=for-the-badge",alt:"docs-source"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Trait"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Module type")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"util")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Implementation")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"Python")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Parallelism")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(m,{color:"#FB6E00",mdxType:"Highlight"},(0,n.kt)("strong",{parentName:"td"},"sequential")))))),(0,n.kt)("h2",{id:"procedures"},"Procedures"),(0,n.kt)(i.ZP,{mdxType:"RunOnSubgraph"}),(0,n.kt)("h3",{id:"jsonpath"},(0,n.kt)("inlineCode",{parentName:"h3"},"json(path)")),(0,n.kt)("h4",{id:"input"},"Input:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path: string")," \u27a1 Path to the JSON file containing the exported graph database.")),(0,n.kt)("h4",{id:"usage"},"Usage:"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," you have to provide as procedure argument depends on how you started\nMemgraph."),(0,n.kt)(o.Z,{groupId:"export_to_json_usage",defaultValue:"docker",values:[{label:"Docker",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,n.kt)("p",null,"If you ran Memgraph with Docker, database will be exported to a JSON file inside\nthe Docker container. We recommend exporting the database to the JSON file\ninside the ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory."),(0,n.kt)("p",null,"You can call the procedure by running the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL export_util.json(path);\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," is the path to the JSON file inside the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory in the running Docker container (e.g.,\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules/export.json"),")."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can ",(0,n.kt)("a",{parentName:"p",href:"/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},(0,n.kt)("strong",{parentName:"a"},"copy the exported CSV file to your local file system"))," using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/cp/"},(0,n.kt)("inlineCode",{parentName:"a"},"docker cp"))," command."))),(0,n.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,n.kt)("p",null,"To export database to a local JSON file create a new directory (for example,\n",(0,n.kt)("inlineCode",{parentName:"p"},"export_folder"),") and run the following command to give the user ",(0,n.kt)("inlineCode",{parentName:"p"},"memgraph")," the\nnecessary permissions:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo chown memgraph export_folder\n")),(0,n.kt)("p",null,"Then, call the procedure by running the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL export_util.json(path);\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," is the path to a local JSON file that will be created inside the\n",(0,n.kt)("inlineCode",{parentName:"p"},"export_folder")," (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"/users/my_user/export_folder/export.json"),")."))),(0,n.kt)("h3",{id:"csv_queryquery-file_path-stream"},(0,n.kt)("inlineCode",{parentName:"h3"},"csv_query(query, file_path, stream)")),(0,n.kt)("h4",{id:"input-1"},"Input:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"query: string")," \u27a1 A query from which the results will be saved to a CSV file."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'file_path: string (default="")')," \u27a1 A path to the CSV file where the query results will be exported. Defaults to an empty string."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stream: bool (default=False)")," \u27a1 A value which determines whether a stream of query results in a CSV format will be returned.")),(0,n.kt)("h4",{id:"output"},"Output:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"file_path: string")," \u27a1 A path to the CSV file where the query results are exported. If ",(0,n.kt)("inlineCode",{parentName:"li"},"file_path")," is not provided, the output will be an empty string."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"data: string")," \u27a1 A stream of query results in a CSV format.")),(0,n.kt)("h4",{id:"usage-1"},"Usage:"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"file_path")," you have to provide as procedure argument depends on how you started\nMemgraph."),(0,n.kt)(o.Z,{groupId:"export_to_csv_usage",defaultValue:"docker",values:[{label:"Docker",value:"docker"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,n.kt)("p",null,"If you ran Memgraph with Docker, query results will be exported to a CSV file inside\nthe Docker container. We recommend exporting the database to the CSV file\ninside the ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory."),(0,n.kt)("p",null,"You can call the procedure by running the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL export_util.csv_query(path);\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," is the path to a CSV file inside the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory in the running Docker container (e.g.,\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules/export.csv"),")."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can ",(0,n.kt)("a",{parentName:"p",href:"/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},(0,n.kt)("strong",{parentName:"a"},"copy the exported CSV file to your local file system"))," using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/cp/"},(0,n.kt)("inlineCode",{parentName:"a"},"docker cp"))," command."))),(0,n.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,n.kt)("p",null,"To export query results to a local CSV file create a new directory (for example,\n",(0,n.kt)("inlineCode",{parentName:"p"},"export_folder"),") and run the following command to give the user ",(0,n.kt)("inlineCode",{parentName:"p"},"memgraph")," the\nnecessary permissions:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo chown memgraph export_folder\n")),(0,n.kt)("p",null,"Then, call the procedure by running the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL export_util.csv_query(path);\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," is the path to a local CSV file that will be created inside the\n",(0,n.kt)("inlineCode",{parentName:"p"},"export_folder")," (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"/users/my_user/export_folder/export.csv"),")."))),(0,n.kt)("h2",{id:"example---exporting-database-to-a-json-file"},"Example - Exporting database to a JSON file"),(0,n.kt)(o.Z,{groupId:"export_to_json_example",defaultValue:"input",values:[{label:"Step 1: Cypher load commands",value:"load"},{label:"Step 2: Input graph",value:"input"},{label:"Step 3: Running command",value:"run"},{label:"Step 4: Results",value:"result"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"load",mdxType:"TabItem"},(0,n.kt)("p",null,"You can create a simple graph database by running the following queries:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (n:Person {name:"Anna"}), (m:Person {name:"John"}), (k:Person {name:"Kim"})\nCREATE (n)-[:IS_FRIENDS_WITH]->(m), (n)-[:IS_FRIENDS_WITH]->(k), (m)-[:IS_MARRIED_TO]->(k);\n'))),(0,n.kt)(l.Z,{value:"input",mdxType:"TabItem"},(0,n.kt)("p",null,"The image below shows the above data as a graph:"),(0,n.kt)("img",{src:r(14193).Z})),(0,n.kt)(l.Z,{value:"run",mdxType:"TabItem"},(0,n.kt)("p",null,"If you're using ",(0,n.kt)("strong",{parentName:"p"},"Memgraph with Docker"),", the following Cypher query will\nexport the database to the ",(0,n.kt)("inlineCode",{parentName:"p"},"export.json")," file in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory inside the running Docker container."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL export_util.json("/usr/lib/memgraph/query_modules/export.json");\n')),(0,n.kt)("p",null,"If you're using ",(0,n.kt)("strong",{parentName:"p"},"Memgraph on Ubuntu, Debian, RPM package or WSL"),", the\nfollowing Cypher query will export the database to the ",(0,n.kt)("inlineCode",{parentName:"p"},"export.json")," file in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/users/my_user/export_folder"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL export_util.json("/users/my_user/export_folder/export.json");\n'))),(0,n.kt)(l.Z,{value:"result",mdxType:"TabItem"},(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"export.json")," file should be similar to the one below, except for the\n",(0,n.kt)("inlineCode",{parentName:"p"},"id")," values that depend on the internal database ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," values:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 6114,\n        "labels": [\n            "Person"\n        ],\n        "properties": {\n            "name": "Anna"\n        },\n        "type": "node"\n    },\n    {\n        "id": 6115,\n        "labels": [\n            "Person"\n        ],\n        "properties": {\n            "name": "John"\n        },\n        "type": "node"\n    },\n    {\n        "id": 6116,\n        "labels": [\n            "Person"\n        ],\n        "properties": {\n            "name": "Kim"\n        },\n        "type": "node"\n    },\n    {\n        "end": 6115,\n        "id": 21120,\n        "label": "IS_FRIENDS_WITH",\n        "properties": {},\n        "start": 6114,\n        "type": "relationship"\n    },\n    {\n        "end": 6116,\n        "id": 21121,\n        "label": "IS_FRIENDS_WITH",\n        "properties": {},\n        "start": 6114,\n        "type": "relationship"\n    },\n    {\n        "end": 6116,\n        "id": 21122,\n        "label": "IS_MARRIED_TO",\n        "properties": {},\n        "start": 6115,\n        "type": "relationship"\n    }\n]\n')))),(0,n.kt)("h2",{id:"example---exporting-query-results-to-a-csv-file"},"Example - Exporting query results to a CSV file"),(0,n.kt)(o.Z,{groupId:"export_to_csv_example",defaultValue:"input_csv",values:[{label:"Step 1: Cypher load commands",value:"load_csv"},{label:"Step 2: Input graph",value:"input_csv"},{label:"Step 3: Running command",value:"run_csv"},{label:"Step 4: Results",value:"result_csv"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"load_csv",mdxType:"TabItem"},(0,n.kt)("p",null,"You can create a simple graph database by running the following queries:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE (StrangerThings:TVShow {title:'Stranger Things', released:2016, program_creators:['Matt Duffer', 'Ross Duffer']})\nCREATE (Eleven:Character {name:'Eleven', portrayed_by:'Millie Bobby Brown'})\nCREATE (JoyceByers:Character {name:'Joyce Byers', portrayed_by:'Millie Bobby Brown'})\nCREATE (JimHopper:Character {name:'Jim Hopper', portrayed_by:'Millie Bobby Brown'})\nCREATE (MikeWheeler:Character {name:'Mike Wheeler', portrayed_by:'Finn Wolfhard'})\nCREATE (DustinHenderson:Character {name:'Dustin Henderson', portrayed_by:'Gaten Matarazzo'})\nCREATE (LucasSinclair:Character {name:'Lucas Sinclair', portrayed_by:'Caleb McLaughlin'})\nCREATE (NancyWheeler:Character {name:'Nancy Wheeler', portrayed_by:'Natalia Dyer'})\nCREATE (JonathanByers:Character {name:'Jonathan Byers', portrayed_by:'Charlie Heaton'})\nCREATE (WillByers:Character {name:'Will Byers', portrayed_by:'Noah Schnapp'})\nCREATE (SteveHarrington:Character {name:'Steve Harrington', portrayed_by:'Joe Keery'})\nCREATE (MaxMayfield:Character {name:'Max Mayfield', portrayed_by:'Sadie Sink'})\nCREATE (RobinBuckley:Character {name:'Robin Buckley', portrayed_by:'Maya Hawke'})\nCREATE (EricaSinclair:Character {name:'Erica Sinclair', portrayed_by:'Priah Ferguson'})\nCREATE\n(Eleven)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(JoyceByers)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(JimHopper)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(MikeWheeler)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(DustinHenderson)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(LucasSinclair)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(NancyWheeler)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(JonathanByers)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(WillByers)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(SteveHarrington)-[:ACTED_IN {seasons:[1, 2, 3, 4]}]->(StrangerThings),\n(MaxMayfield)-[:ACTED_IN {seasons:[2, 3, 4]}]->(StrangerThings),\n(RobinBuckley)-[:ACTED_IN {seasons:[3, 4]}]->(StrangerThings),\n(EricaSinclair)-[:ACTED_IN {seasons:[2, 3, 4]}]->(StrangerThings);\n"))),(0,n.kt)(l.Z,{value:"input_csv",mdxType:"TabItem"},(0,n.kt)("p",null,"The image below shows the above data as a graph:"),(0,n.kt)("img",{src:r(96022).Z})),(0,n.kt)(l.Z,{value:"run_csv",mdxType:"TabItem"},(0,n.kt)("p",null,"If you're using ",(0,n.kt)("strong",{parentName:"p"},"Memgraph with Docker"),", the following Cypher query will\nexport the database to the ",(0,n.kt)("inlineCode",{parentName:"p"},"export.csv")," file in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," directory inside the running Docker container."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'WITH "MATCH path = (c:Character)-[:ACTED_IN]->(tvshow) RETURN c.name AS name, c.portrayed_by AS portrayed_by, tvshow.title AS title, tvshow.released AS released, tvshow.program_creators AS program_creators" AS query\nCALL export_util.csv_query(query, "/usr/lib/memgraph/query_modules/export.csv", True)\nYIELD file_path, data\nRETURN file_path, data;\n')),(0,n.kt)("p",null,"If you're using ",(0,n.kt)("strong",{parentName:"p"},"Memgraph on Ubuntu, Debian, RPM package or WSL"),", then the\nfollowing Cypher query will export the database to the ",(0,n.kt)("inlineCode",{parentName:"p"},"export.csv")," file in the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/users/my_user/export_folder"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'WITH "MATCH path = (c:Character)-[:ACTED_IN]->(tvshow) RETURN c.name AS name, c.portrayed_by AS portrayed_by, tvshow.title AS title, tvshow.released AS released, tvshow.program_creators AS program_creators" AS query\nCALL export_util.csv_query(query, "/users/my_user/export_folder/export.csv", True)\nYIELD file_path, data\nRETURN file_path, data;\n'))),(0,n.kt)(l.Z,{value:"result_csv",mdxType:"TabItem"},(0,n.kt)("p",null,"The output in the ",(0,n.kt)("inlineCode",{parentName:"p"},"export.csv")," file looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv"},"name,portrayed_by,title,released,program_creators\nEleven,Millie Bobby Brown,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nJoyce Byers,Millie Bobby Brown,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nJim Hopper,Millie Bobby Brown,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nMike Wheeler,Finn Wolfhard,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nDustin Henderson,Gaten Matarazzo,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nLucas Sinclair,Caleb McLaughlin,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nNancy Wheeler,Natalia Dyer,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nJonathan Byers,Charlie Heaton,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nWill Byers,Noah Schnapp,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nSteve Harrington,Joe Keery,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nMax Mayfield,Sadie Sink,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nRobin Buckley,Maya Hawke,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\nErica Sinclair,Priah Ferguson,Stranger Things,2016,\"['Matt Duffer', 'Ross Duffer']\"\n")))))}g.isMDXComponent=!0},83523:(e,t,r)=>{r.d(t,{ZP:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={toc:[]};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you want to execute this algorithm on graph projections, subgraphs or portions\nof the graph, be sure to check out the guide on\n",(0,n.kt)("a",{parentName:"p",href:"/mage/how-to-guides/run-a-subgraph-module"},"How to run a MAGE module on subgraphs"),".")))}l.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),s=r(91980),u=r(67392),p=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function c(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=c(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:r,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var y=r(72389);const f="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==i&&(d(t),s(a))},m=e=>{var t;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;r=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;r=p[t]??p[p.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function _(e){const t=(0,y.Z)();return n.createElement(N,(0,a.Z)({key:String(t)},e))}},14193:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/export-util-1-6f272764c2ffb63fae58905c1dded702.png"},96022:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/export-util-csv-1-646f4448fb990e22930d13021ec327a1.png"}}]);