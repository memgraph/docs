"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47316],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},90835:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"storage",title:"Storage",sidebar_label:"Storage"},s=void 0,p={unversionedId:"concepts/storage",id:"version-1.5.0/concepts/storage",isDocsHomePage:!1,title:"Storage",description:"Durability and Data Recovery",source:"@site/memgraph_versioned_docs/version-1.5.0/concepts/storage.md",sourceDirName:"concepts",slug:"/concepts/storage",permalink:"/memgraph/1.5.0/concepts/storage",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.5.0/concepts/storage.md",version:"1.5.0",frontMatter:{id:"storage",title:"Storage",sidebar_label:"Storage"},sidebar:"version-1.5.0/memgraph",previous:{title:"Concepts overview",permalink:"/memgraph/1.5.0/concepts"},next:{title:"Graph algorithms",permalink:"/memgraph/1.5.0/concepts/graph-algorithms"}},d=[{value:"Durability and Data Recovery",id:"durability-and-data-recovery",children:[]},{value:"Storable Data Types",id:"storable-data-types",children:[{value:"Node Labels &amp; Edge Types",id:"node-labels--edge-types",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Properties on edges",id:"properties-on-edges",children:[]},{value:"Storage Statistics",id:"storage-statistics",children:[]}]}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"durability-and-data-recovery"},"Durability and Data Recovery"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Memgraph")," uses two mechanisms to ensure the durability of the stored data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"write-ahead logging (WAL) and"),(0,o.kt)("li",{parentName:"ul"},"taking periodic snapshots.")),(0,o.kt)("p",null,"Write-ahead logging works by logging all database modifications to a file.\nThis ensures that all operations are done atomically and provides a trace of\nsteps needed to reconstruct the database state."),(0,o.kt)("p",null,"Snapshots are taken periodically during the entire runtime of ",(0,o.kt)("em",{parentName:"p"},"Memgraph"),". When\na snapshot is triggered, the whole data storage is written to disk. The\nsnapshot file provides a quicker way to restore the database state."),(0,o.kt)("p",null,"Database recovery is done on startup from the most recently found snapshot\nfile. Since the snapshot may be older than the most recent update logged in\nthe WAL file, the recovery process will apply the remaining state changes\nfound in the said WAL file."),(0,o.kt)("p",null,"NOTE: Snapshot and WAL files are not (currently) compatible between ",(0,o.kt)("em",{parentName:"p"},"Memgraph"),"\nversions."),(0,o.kt)("p",null,"Behaviour of the above mechanisms can be tweaked in the configuration file,\nusually found in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),"."),(0,o.kt)("p",null,"In addition to the above mentioned data durability and recovery, a snapshot\nfile may be generated using ",(0,o.kt)("em",{parentName:"p"},"Memgraph's")," import tools. For more information,\ntake a look at the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.5.0/database-functionalities/import-data"},"Import data"),"\nguide."),(0,o.kt)("h2",{id:"storable-data-types"},"Storable Data Types"),(0,o.kt)("p",null,"Since ",(0,o.kt)("em",{parentName:"p"},"Memgraph")," is a ",(0,o.kt)("em",{parentName:"p"},"graph")," database management system, data is stored in\nthe form of graph elements: nodes and edges. Each graph element can also\ncontain various types of data. This chapter describes which data types are\nsupported in ",(0,o.kt)("em",{parentName:"p"},"Memgraph"),"."),(0,o.kt)("h3",{id:"node-labels--edge-types"},"Node Labels & Edge Types"),(0,o.kt)("p",null,"Each node can have any number of labels. A label is a text value, which can be\nused to ",(0,o.kt)("em",{parentName:"p"},"label")," or group nodes according to users' desires. A user can change\nlabels at any time. Similarly to labels, each edge can have a type,\nrepresented as text. Unlike nodes, which can have multiple labels or none at\nall, edges ",(0,o.kt)("em",{parentName:"p"},"must")," have exactly one edge type. Another difference to labels, is\nthat the edge types are set upon creation and never modified again."),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("p",null,"Nodes and edges can store various properties. These are like mappings or\ntables containing property names and their accompanying values. Property names\nare represented as text, while values can be of different types. Each property\nname can store a single value, it is not possible to have multiple properties\nwith the same name on a single graph element. Naturally, the same property\nnames can be found across multiple graph elements. Also, there are no\nrestrictions on the number of properties that can be stored in a single graph\nelement. The only restriction is that the values must be of the supported\ntypes. Following is a table of supported data types."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Null")),(0,o.kt)("td",{parentName:"tr",align:null},"Denotes that the property has no value. This is the same as if the property does not exist.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"String")),(0,o.kt)("td",{parentName:"tr",align:null},"A character string, i.e. text.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"A boolean value, either ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Integer")),(0,o.kt)("td",{parentName:"tr",align:null},"An integer number.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Float")),(0,o.kt)("td",{parentName:"tr",align:null},"A floating-point number, i.e. a real number.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"List")),(0,o.kt)("td",{parentName:"tr",align:null},"A list containing any number of property values of any supported type. It can be used to store multiple values under a single property name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Map")),(0,o.kt)("td",{parentName:"tr",align:null},"A mapping of string keys to values of any supported type.")))),(0,o.kt)("p",null," Note that even though it's possible to store ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," property values, it is not possible to modify them. It is however possible to replace them completely. So, the following queries are legal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Node {property: [1, 2, 3]});\nCREATE (:Node {property: {key: "value"}});\n')),(0,o.kt)("p",null,"However, these queries are not:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Node) SET n.property[0] = 0;\nMATCH (n:Node) SET n.property.key = "other value";\n')),(0,o.kt)("h3",{id:"properties-on-edges"},"Properties on edges"),(0,o.kt)("p",null,"Although openCypher supports properties on edges, they are often not used. If\nyou have a use-case that doesn't use properties on edges you can specify a flag\nin the Memgraph configuration file which will disable the usage of properties\non edges."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--storage-properties-on-edges=false\n")),(0,o.kt)("p",null,"The benefit of supplying this flag to Memgraph is reduced memory usage."),(0,o.kt)("p",null,"The durability system is designed to handle a mixed usage of properties on\nedges. If, for example, you start Memgraph with properties on edges enabled\n(the default setting), add some data to the database and then shut it down, you\nwill be able to recover your data in Memgraph with properties on edges\ndisabled. The data will be recovered under one condition, though, and that is\nthat you can't have any properties on edges in your data that will be used\nfor recovery."),(0,o.kt)("h3",{id:"storage-statistics"},"Storage Statistics"),(0,o.kt)("p",null,"A user can retrieve information and statistics from the storage of a running\nMemgraph instance. This is done with the following query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STORAGE INFO;\n")),(0,o.kt)("p",null,"For example, the results are:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"storage info"),(0,o.kt)("th",{parentName:"tr",align:null},"value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"average_degree")),(0,o.kt)("td",{parentName:"tr",align:null},"2.872567")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"disk_usage")),(0,o.kt)("td",{parentName:"tr",align:null},"38028")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"edge_count")),(0,o.kt)("td",{parentName:"tr",align:null},"90674")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"memory_usage")),(0,o.kt)("td",{parentName:"tr",align:null},"88842240")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"vertex_count")),(0,o.kt)("td",{parentName:"tr",align:null},"63131")))),(0,o.kt)("p",null,"All of the ",(0,o.kt)("inlineCode",{parentName:"p"},"*_usage")," results are expressing in bytes, unless explicitly stated\notherwise."))}m.isMDXComponent=!0}}]);