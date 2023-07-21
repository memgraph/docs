"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80398],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>u});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),m=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=m(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(t),u=o,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||n;return t?r.createElement(h,p(p({ref:a},s),{},{components:t})):r.createElement(h,p({ref:a},s))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,p=new Array(n);p[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var m=2;m<n;m++)p[m]=t[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},60675:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var r=t(87462),o=(t(67294),t(3905));const n={id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},p=void 0,i={unversionedId:"import-data/overview",id:"version-2.9.0/import-data/overview",title:"Import data",description:"What data do you want to import?",source:"@site/memgraph_versioned_docs/version-2.9.0/import-data/overview.md",sourceDirName:"import-data",slug:"/import-data",permalink:"/docs/memgraph/import-data",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.9.0/import-data/overview.md",tags:[],version:"2.9.0",frontMatter:{id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},sidebar:"memgraph",previous:{title:"WebSocket",permalink:"/docs/memgraph/connect-to-memgraph/websocket"},next:{title:"Import data from various file formats into Memgraph",permalink:"/docs/memgraph/import-data/files/overview"}},l={},m=[{value:"CSV files",id:"csv-files",level:2},{value:"JSON files",id:"json-files",level:2},{value:"CYPHERL files",id:"cypherl-files",level:2},{value:"Data from a stream",id:"data-from-a-stream",level:2},{value:"MySQL, PostgreSQL or Oracle table data",id:"mysql-postgresql-or-oracle-table-data",level:2},{value:"Data from an application or a program",id:"data-from-an-application-or-a-program",level:2},{value:"Parquet, ORC or IPC/Feather/Arrow file",id:"parquet-orc-or-ipcfeatherarrow-file",level:2},{value:"NetworkX, PyG or DGL graph",id:"networkx-pyg-or-dgl-graph",level:2},{value:"Where to next?",id:"where-to-next",level:2}],s={toc:m};function d(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"What data do you want to import?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#csv-files"},"CSV files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#json-files"},"JSON files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cypherl-files"},"CYPHERL files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#data-from-a-stream"},"Data from a stream")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#table-data"},"Table data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#data-from-an-application-or-a-program"},"Data from an application or a program")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#parquet-orc-or-ipcfeatherarrow-file"},"Parquet, ORC or IPC/Feather/Arrow file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#networkx-pyg-or-dgl-graph"},"NetworkX, PyG or DGL graph"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you can choose the format of the data you want to import, the fastest way to\nimport data into Memgraph is from a CSV file using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/load-csv-clause"},"LOAD CSV\nclause"),". ")),(0,o.kt)("h2",{id:"csv-files"},"CSV files"),(0,o.kt)("p",null,"To import data from CSV files into Memgraph, use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/load-csv-clause"},(0,o.kt)("strong",{parentName:"a"},"LOAD CSV\nclause")),", which is used as a standard\nCypher clause, and can be invoked straight from a running Memgraph instance."),(0,o.kt)("h2",{id:"json-files"},"JSON files"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/files/load-json"},"import a ",(0,o.kt)("strong",{parentName:"a"},"JSON")," file into Memgraph"),"\nby using the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"json_util")," query module"),", which has procedures for loading JSON\nfile from a local file and from a remote address."),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"import_util.json")," procedure")," to import data from a\nlocal JSON file, but the file needs to in a specific format defined by the\nprocedure. "),(0,o.kt)("h2",{id:"cypherl-files"},"CYPHERL files"),(0,o.kt)("p",null,"If your data is in the form of Cypher queries (",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MERGE")," clauses)\nwithin a ",(0,o.kt)("strong",{parentName:"p"},"CYPHERL")," file it can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/files/cypherl"},"imported via Memgraph\nLab or mgconsole"),"."),(0,o.kt)("h2",{id:"data-from-a-stream"},"Data from a stream"),(0,o.kt)("p",null,"Memgraph comes with full streaming support, and you can connect directly to a\n",(0,o.kt)("strong",{parentName:"p"},"Kafka"),", ",(0,o.kt)("strong",{parentName:"p"},"Redpanda")," or ",(0,o.kt)("strong",{parentName:"p"},"Pulsar")," stream using ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/data-streams/manage-streams"},"Cypher\nqueries")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/data-streams/manage-streams-lab"},"Memgraph\nLab"),"."),(0,o.kt)("h2",{id:"mysql-postgresql-or-oracle-table-data"},"MySQL, PostgreSQL or Oracle table data"),(0,o.kt)("p",null,"You can migrate data from a ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/migrate/mysql"},(0,o.kt)("strong",{parentName:"a"},"MySQL"))," or\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/migrate/postgresql"},(0,o.kt)("strong",{parentName:"a"},"PostgreSQL"))," database using the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mgmigrate"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"mgmigrate"))," tool"),"."),(0,o.kt)("p",null,"Alternatively, you can use the ",(0,o.kt)("a",{parentName:"p",href:"/mage/query-modules/python/migrate"},(0,o.kt)("inlineCode",{parentName:"a"},"migration"),"\nmodule")," from the ",(0,o.kt)("a",{parentName:"p",href:"/mage"},"MAGE graph\nlibrary")," which allows you to access data from a MySQL database, an SQL\nserver or an Oracle database. "),(0,o.kt)("h2",{id:"data-from-an-application-or-a-program"},"Data from an application or a program"),(0,o.kt)("p",null,"Memgraph offers a ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/connect-to-memgraph/drivers"},(0,o.kt)("strong",{parentName:"a"},"wide range of clients"))," that can be used to connect directly to the platform and import data."),(0,o.kt)("h2",{id:"parquet-orc-or-ipcfeatherarrow-file"},"Parquet, ORC or IPC/Feather/Arrow file"),(0,o.kt)("p",null,"If you are a Python user you can import ",(0,o.kt)("strong",{parentName:"p"},"Parquet"),", ",(0,o.kt)("strong",{parentName:"p"},"ORC")," or ",(0,o.kt)("strong",{parentName:"p"},"IPC/Feather/Arrow")," file\ninto Memgraph ",(0,o.kt)("a",{parentName:"p",href:"/gqlalchemy/how-to-guides/table-to-graph-importer"},"using ",(0,o.kt)("strong",{parentName:"a"},"GQLAlchemy")),"."),(0,o.kt)("h2",{id:"networkx-pyg-or-dgl-graph"},"NetworkX, PyG or DGL graph"),(0,o.kt)("p",null,"If you are a Python user you can import ",(0,o.kt)("strong",{parentName:"p"},"NetworkX"),", ",(0,o.kt)("strong",{parentName:"p"},"PyG")," or ",(0,o.kt)("strong",{parentName:"p"},"DGL graph")," into Memgraph\n",(0,o.kt)("a",{parentName:"p",href:"/gqlalchemy/how-to-guides/import-python-graphs"},"using ",(0,o.kt)("strong",{parentName:"a"},"GQLAlchemy")),"."),(0,o.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,o.kt)("p",null,"You can also connect to streams and import data from CYPHERL files to an\ninstance running in ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-cloud"},"Memgraph Cloud"),". "),(0,o.kt)("p",null,"Memgraph uses two mechanisms to ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/backup"},"ensure the durability of stored\ndata")," and make disaster recovery possible:\nwrite-ahead logging (WAL) and periodic snapshot creation. "),(0,o.kt)("p",null,"To learn more about the Cypher language, check out our ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher\nmanual")," or ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph\nPlayground")," for interactive guides."),(0,o.kt)("p",null,"For real-world examples of how to use Memgraph, we strongly suggest going\nthrough one of the available ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials"},"tutorials"),"."))}d.isMDXComponent=!0}}]);