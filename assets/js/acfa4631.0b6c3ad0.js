"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27255],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=a.createContext({}),c=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(r),p=o,d=g["".concat(m,".").concat(p)]||g[p]||u[p]||n;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19461:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(67294),o={connectButton:"connectButton_zPJx",connectButton__imgActive:"connectButton__imgActive_OIgu",connectButton__img:"connectButton__img_HQEE"},n=r(89750),i=r(44996);function l(e){var t=e.title,r=e.url,l=e.img,m=e.imgActive,c=e.imgDark,s=e.imgDarkActive;return a.createElement("a",{href:r,className:o.connectButton,style:o},a.createElement(n.Z,{alt:t,className:o.connectButton__img,sources:{light:(0,i.Z)(l),dark:(0,i.Z)(c)}}),a.createElement(n.Z,{alt:t,className:o.connectButton__imgActive,sources:{light:(0,i.Z)(m),dark:(0,i.Z)(s)}}))}},72819:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(67294),o="mgContainer_LAj7",n="mgContainer__small_Mz9H";function i(e){var t=e.size,r=void 0===t?"default":t,i=e.children,l=null;return"small"===r&&(l=n),a.createElement("div",{className:o+" "+l},i)}},31417:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=r(72819),l=r(78350),m=r(44996),c=r(19461),s=["components"],u={id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},g=void 0,p={unversionedId:"import-data/overview",id:"version-2.3.1/import-data/overview",title:"Import data",description:"",source:"@site/memgraph_versioned_docs/version-2.3.1/import-data/overview.mdx",sourceDirName:"import-data",slug:"/import-data",permalink:"/docs/memgraph/import-data",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/import-data/overview.mdx",tags:[],version:"2.3.1",frontMatter:{id:"overview",title:"Import data",sidebar_label:"Import data overview",slug:"/import-data"},sidebar:"memgraph",previous:{title:"WebSocket",permalink:"/docs/memgraph/connect-to-memgraph/websocket"},next:{title:"Import data from CSV files",permalink:"/docs/memgraph/import-data/csv/overview"}},d={},h=[],k={toc:h},f=function(){var e="img/import-data/",t={title:"LOADCSVClause#",img:(0,m.Z)(e+"loadcsvclause-unselected.svg"),imgActive:(0,m.Z)(e+"loadcsvclause-selected.svg"),imgDark:(0,m.Z)(e+"dark/loadcsvclause-unselected-dm.svg"),imgDarkActive:(0,m.Z)(e+"dark/loadcsvclause-selected-dm.svg"),url:(0,m.Z)("memgraph/import-data/load-csv-clause")},r={title:"LoadJSON",img:(0,m.Z)(e+"json-unselected.svg"),imgActive:(0,m.Z)(e+"json-selected.svg"),imgDark:(0,m.Z)(e+"dark/json-unselected-dm.svg"),imgDarkActive:(0,m.Z)(e+"dark/json-selected-dm.svg"),url:(0,m.Z)("memgraph/import-data/json/load-json")},a=[{title:"MySQL",img:(0,m.Z)(e+"mysql-unselected.svg"),imgActive:(0,m.Z)(e+"mysql-selected.svg"),imgDark:(0,m.Z)(e+"dark/mysql-unselected-dm.svg"),imgDarkActive:(0,m.Z)(e+"dark/mysql-selected-dm.svg"),url:(0,m.Z)("memgraph/import-data/migrate/mysql")},{title:"PostgreSQL",img:(0,m.Z)(e+"postgresql-unselected.svg"),imgActive:(0,m.Z)(e+"postgresql-selected.svg"),imgDark:(0,m.Z)(e+"dark/postgresql-unselected-dm.svg"),imgDarkActive:(0,m.Z)(e+"dark/postgresql-selected-dm.svg"),url:(0,m.Z)("memgraph/import-data/migrate/postgresql")}],o={title:"cypherl",img:(0,m.Z)(e+"cypherqueries-unselected.svg"),imgActive:(0,m.Z)(e+"cypherqueries-selected.svg"),imgDark:(0,m.Z)(e+"dark/cypherqueries-unselected-dm.svg"),imgDarkActive:(0,m.Z)(e+"dark/cypherqueries-selected-dm.svg"),url:(0,m.Z)("memgraph/import-data/cypherl")};return(0,n.kt)(i.Z,{size:"small"},(0,n.kt)("div",{className:l.Z.connectToMemgraph},(0,n.kt)("section",null,(0,n.kt)("p",null,"There are a few methods for importing data into Memgraph and they cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#csv"},"How to import CSV files into Memgraph?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#json"},"How to import JSON files into Memgraph?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#kafka"},"How to import streaming data from Kafka into Memgraph?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#migrate"},"How to migrate data from a relational database?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#queries"},"How to import data in the form of Cypher queries?"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:"#application"},"How to import data directly from an application/program?"))))),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"csv"},"How to import CSV files into Memgraph?"),(0,n.kt)("p",null,"The easiest way to import data into Memgraph is to use the"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/load-csv-clause")},"LOAD CSV clause")),", which is used as a standard Cypher clause, and can be invoked straight from a running Memgraph instance."),(0,n.kt)(c.Z,{title:t.title,url:t.url,img:t.img,imgActive:t.imgActive,imgDark:t.imgDark,imgDarkActive:t.imgDarkActive})),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"json"},"How to import JSON files into Memgraph?"),(0,n.kt)("p",null,"You can import the JSON file into Memgraph by using the"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/json/load-json")},"JSON query module"))," ",", which has procedures for loading JSON file from local file or remote address."),(0,n.kt)(c.Z,{title:r.title,url:r.url,img:r.img,imgActive:r.imgActive,imgDark:r.imgDark,imgDarkActive:r.imgDarkActive})),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"kafka"},"How to import streaming data from Kafka into Memgraph?"),(0,n.kt)("p",null,"Memgraph comes with full streaming support, and you can connect Memgraph directly to a Kafka stream. Check out"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/kafka")},"this guide")," ","to find out how to connect to a Kafka stream and take a look at the examples with different serialization mechanisms:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/kafka/json")},"JSON"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/kafka/avro")},"Avro"))),(0,n.kt)("li",null,(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/kafka/protobuf")},"Protobuf"))))),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"migrate"},"How to migrate data from a relational database?"),(0,n.kt)("p",null,"You can migrate data from a"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/migrate/mysql")},"MySQL")," ","or"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/migrate/postgresql")},"PostgreSQL")," ","database using the"," ",(0,n.kt)("a",{href:"https://github.com/memgraph/mgmigrate"},"mgmigrate")," tool."),(0,n.kt)("div",{className:l.Z.connectToMemgraph__grid},a.map((function(e,t){return(0,n.kt)(c.Z,{key:t,url:e.url,title:e.title,img:e.img,imgActive:e.imgActive,imgDark:e.imgDark,imgDarkActive:e.imgDarkActive})})))),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"queries"},"How to import data from Cypher queries?"),(0,n.kt)("p",null,"If your data is in the form of Cypher queries (",(0,n.kt)("code",null,"CREATE")," ","and ",(0,n.kt)("code",null,"MERGE")," clauses) you can import it by using the"," ",(0,n.kt)("b",null,"mgconsole")," tool or ",(0,n.kt)("b",null,"Memgraph Lab"),". We refer to this format as ",(0,n.kt)("code",null,".cypherl")," and you can find an example of how to import such data"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/import-data/cypherl")},"here"),"."),(0,n.kt)(c.Z,{title:o.title,url:o.url,img:o.img,imgActive:o.imgActive,imgDark:o.imgDark,imgDarkActive:o.imgDarkActive})),(0,n.kt)("section",null,(0,n.kt)("h2",{id:"application"},"How to import data directly from an application/program?"),(0,n.kt)("p",null,"Memgraph offers a wide range of drivers that can be used to connect directly to the platform. You can find a list of all the supported connection methods"," ",(0,n.kt)("a",{href:(0,m.Z)("/memgraph/connect-to-memgraph")},"here"),".")),(0,n.kt)("section",null,(0,n.kt)("h2",null,"Where to next?"),(0,n.kt)("p",null,"To learn more about the ",(0,n.kt)("b",null,"Cypher")," language, visit the"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("cypher-manual")},"Cypher manual"))," ","or"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:"https://playground.memgraph.com/"},"Memgraph Playground"))," ","for interactive guides. For real-world examples of how to use Memgraph, we strongly suggest going through one of the available"," ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("memgraph/tutorials")},"Tutorials")),". Details on what can be stored in Memgraph can be found in the article about ",(0,n.kt)("b",null,(0,n.kt)("a",{href:(0,m.Z)("memgraph/concepts/storage")},"Data storage")),"."))))};function v(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.kt)(f,(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}))}v.isMDXComponent=!0},78350:function(e,t){t.Z={connectToMemgraph:"connectToMemgraph__SkV",connectToMemgraph__grid:"connectToMemgraph__grid_HW66"}}}]);