"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63556],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68762:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"storage",title:"Storage",sidebar_label:"Storage"},p=void 0,s={unversionedId:"under-the-hood/storage",id:"version-2.3.1/under-the-hood/storage",title:"Storage",description:"Durability and data recovery",source:"@site/memgraph_versioned_docs/version-2.3.1/under-the-hood/storage.md",sourceDirName:"under-the-hood",slug:"/under-the-hood/storage",permalink:"/docs/memgraph/under-the-hood/storage",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/under-the-hood/storage.md",tags:[],version:"2.3.1",frontMatter:{id:"storage",title:"Storage",sidebar_label:"Storage"},sidebar:"memgraph",previous:{title:"Under the hood",permalink:"/docs/memgraph/under-the-hood"},next:{title:"Indexing",permalink:"/docs/memgraph/under-the-hood/indexing"}},d={},m=[{value:"Durability and data recovery",id:"durability-and-data-recovery",level:2},{value:"Storable data types",id:"storable-data-types",level:2},{value:"Node labels &amp; relationship types",id:"node-labels--relationship-types",level:3},{value:"Properties",id:"properties",level:3},{value:"Disabling properties on relationships",id:"disabling-properties-on-relationships",level:3},{value:"Storage statistics",id:"storage-statistics",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"durability-and-data-recovery"},"Durability and data recovery"),(0,i.kt)("p",null,"Memgraph uses two mechanisms to ensure the durability of the stored data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"write-ahead logging (WAL)"),(0,i.kt)("li",{parentName:"ul"},"periodic snapshots")),(0,i.kt)("p",null,"In write-ahead logging, all database modifications are recorded in a log file\nbefore being applied to the database. WAL ensures that all operations are done\natomically and provides steps needed to reconstruct the database state."),(0,i.kt)("p",null,"Snapshots are taken periodically during the entire runtime of Memgraph. When\na snapshot is triggered, the whole data storage is written to disk. The\nsnapshot file provides a quicker way to restore the database state."),(0,i.kt)("p",null,"Database recovery is done on startup from the most recent snapshot file. Since\nthe snapshot may be older than the most recent update logged in the WAL file,\nthe recovery process will apply the remaining state changes found in the WAL\nfile."),(0,i.kt)("p",null,"Behavior of these mechanisms can be tweaked in the configuration file,\nusually found in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),"."),(0,i.kt)("p",null,"Check the reference guide on Configuration to see the ",(0,i.kt)("a",{parentName:"p",href:"../reference-guide/configuration#storage"},"possible configuration\nsettings for storage"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Snapshot and WAL files are (currently) not compatible between Memgraph\nversions."))),(0,i.kt)("h2",{id:"storable-data-types"},"Storable data types"),(0,i.kt)("p",null,"Since Memgraph is a graph database management system, data is stored in the form\nof graph elements: nodes and relationships. Each graph element can contain\nvarious types of data. This chapter describes which data types are supported in\nMemgraph."),(0,i.kt)("h3",{id:"node-labels--relationship-types"},"Node labels & relationship types"),(0,i.kt)("p",null,"Nodes can have labels that are used to label or group nodes. A label is a text\nvalue, and each node can have any number of labels, even none. Labels can be\nchanged at any time. "),(0,i.kt)("p",null,"Relationships have a type, also represented as text. Unlike nodes, relationships\nmust have exactly one relationship type and once it is set upon creation, it can\nnever be modified again."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"Nodes and relationships can store various properties. Properties are similar to\nmappings or tables containing property names and their accompanying values.\nProperty names are represented as text, while values can be of different types.\nEach property can store a single value, and it is not possible to have multiple\nproperties with the same name on a single graph element. But, the same property\nnames can be found across multiple graph elements. Also, there are no\nrestrictions on the number of properties that can be stored in a single graph\nelement. The only restriction is that the values must be of the supported types.\nBelow is a table of supported data types."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Null")),(0,i.kt)("td",{parentName:"tr",align:null},"Property has no value, which is the same as if the property does not exist.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"A character string (text).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean value, either ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Integer")),(0,i.kt)("td",{parentName:"tr",align:null},"An integer number.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Float")),(0,i.kt)("td",{parentName:"tr",align:null},"A floating-point number (real number).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"List")),(0,i.kt)("td",{parentName:"tr",align:null},"A list containing any number of property values of any supported type under a single property name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Map")),(0,i.kt)("td",{parentName:"tr",align:null},"A mapping of string keys to values of any supported type.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"A period of time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Date")),(0,i.kt)("td",{parentName:"tr",align:null},"A date with year, month, and day.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LocalTime")),(0,i.kt)("td",{parentName:"tr",align:null},"Time within a day without timezone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"LocalDateTime")),(0,i.kt)("td",{parentName:"tr",align:null},"Date and local time.")))),(0,i.kt)("p",null,"Check the reference guide to ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/data-types"},"read more about temporal\ntypes")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Duration"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalTime")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"LocalDateTime"),". "),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Even though it's possible to store ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," property values, it is\nimpossible to modify them. It is, however, possible to replace them entirely.\nSo, the following queries are valid:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Node {property: [1, 2, 3]});\nCREATE (:Node {property: {key: "value"}});\n')),(0,i.kt)("p",{parentName:"div"},"But these are not:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Node) SET n.property[0] = 0;\nMATCH (n:Node) SET n.property.key = "other value";\n')))),(0,i.kt)("h3",{id:"disabling-properties-on-relationships"},"Disabling properties on relationships"),(0,i.kt)("p",null,"If you have a use-case that doesn't use properties on relationships, you can\nspecify a flag in the Memgraph configuration file to disable them and reduce\nmemory usage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--storage-properties-on-edges=false\n")),(0,i.kt)("p",null,"You can disable properties on relationships with a non-empty database, just make\nsure the relationships are without properties."),(0,i.kt)("h2",{id:"storage-statistics"},"Storage statistics"),(0,i.kt)("p",null,"You can retrieve information and statistics about the storage of a running\nMemgraph instance by using the following query."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STORAGE INFO;\n")),(0,i.kt)("p",null,"Example results:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"storage info"),(0,i.kt)("th",{parentName:"tr",align:null},"value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"average_degree")),(0,i.kt)("td",{parentName:"tr",align:null},"2.872567")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disk_usage")),(0,i.kt)("td",{parentName:"tr",align:null},"38028")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"edge_count")),(0,i.kt)("td",{parentName:"tr",align:null},"90674")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"memory_usage")),(0,i.kt)("td",{parentName:"tr",align:null},"88842240")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"vertex_count")),(0,i.kt)("td",{parentName:"tr",align:null},"63131")))),(0,i.kt)("p",null,"All of the ",(0,i.kt)("inlineCode",{parentName:"p"},"*_usage")," results are expressed in bytes unless explicitly stated\notherwise."))}c.isMDXComponent=!0}}]);