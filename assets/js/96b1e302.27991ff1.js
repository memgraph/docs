"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7232],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},63230:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"json",title:"Import JSON data",sidebar_label:"JSON",pagination_prev:"import-data/kafka/overview"},m=void 0,l={unversionedId:"import-data/kafka/json",id:"import-data/kafka/json",title:"Import JSON data",description:"JSON (JavaScript Object Notation) is an",source:"@site/docs/import-data/kafka/json.md",sourceDirName:"import-data/kafka",slug:"/import-data/kafka/json",permalink:"/docs/memgraph/next/import-data/kafka/json",editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/kafka/json.md",tags:[],version:"current",frontMatter:{id:"json",title:"Import JSON data",sidebar_label:"JSON",pagination_prev:"import-data/kafka/overview"},sidebar:"memgraph",previous:{title:"Kafka streams overview",permalink:"/docs/memgraph/next/import-data/kafka"},next:{title:"Avro",permalink:"/docs/memgraph/next/import-data/kafka/avro"}},p=[{value:"Example",id:"example",children:[{value:"Transformation modules",id:"transformation-modules",children:[],level:3},{value:"Creating the streams",id:"creating-the-streams",children:[],level:3}],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],c={toc:p};function u(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," (JavaScript Object Notation) is an\nopen standard file format and data interchange format that uses human-readable\ntext to store and transmit data objects consisting of attribute-value pairs and\narrays (or other serializable values). It is a common data format with a diverse\nrange of functionality in data interchange, including communication of web\napplications with servers."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's assume we have the following schemas coming out of their respective topics\n",(0,o.kt)("inlineCode",{parentName:"p"},"JsonStreamProfile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonStreamCompany"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonStreamWork"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'profile = {\n        "name": str,\n        "age" : int\n        "mail": str,\n        "address" : str,\n    }\n\ncompany = {\n        "name" : str,\n        "address" : str,\n    }\n\nworks_at = {\n            "person"  : str,\n            "company" : str,\n        }\n')),(0,o.kt)("p",null,"We can use the schemas to build the following graph:"),(0,o.kt)("img",{src:a(34323).Z,height:"300px"}),(0,o.kt)("h3",{id:"transformation-modules"},"Transformation modules"),(0,o.kt)("p",null,"Before consuming data from the stream, we need to implement a transformation\nmodule that will consume JSON messages from Kafka and output Cypher queries. In\norder to create a transformation module, you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Python module"),(0,o.kt)("li",{parentName:"ol"},"Save it into the Memgraph's query modules directory (default:\n",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/memgraph/query_modules"),")"),(0,o.kt)("li",{parentName:"ol"},"Load it into Memgraph either on startup (automatically) or by running the\n",(0,o.kt)("inlineCode",{parentName:"li"},"CALL mg.load_all")," query")),(0,o.kt)("p",null,"Each procedure in the transformation module is responsible for one type of data\nin the stream. The procedure ",(0,o.kt)("inlineCode",{parentName:"p"},"profile_transformation")," can be found below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@mgp.transformation\ndef profile_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        message_json = json.loads(message.payload())\n        result_queries.append(mgp.Record (\n                query=f\'\'\'CREATE (p: Profile {{ id: {message_json["id"]}, name: "{message_json["name"]}", age: ToInteger({message_json["age"]})\n                address: "{message_json["address"]}", mail: "{message_json["mail"]}" }})\'\'\' ,\n                parameters=None\n            ))\n\n    return result_queries\n')),(0,o.kt)("h3",{id:"creating-the-streams"},"Creating the streams"),(0,o.kt)("p",null,"To import data into Memgraph, we need to create a stream for each topic and\napply our transformation module on incoming data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE KAFKA STREAM JsonStreamProfile TOPICS json-stream-profiles  TRANSFORM transformation.profile_transformation;\nCREATE KAFKA STREAM JsonStreamCompany TOPICS json-stream-companies  TRANSFORM transformation.company_transformation;\nCREATE KAFKA STREAM JsonStreamWork TOPICS json-stream-work TRANSFORM transformation.works_at_transformation;\n")),(0,o.kt)("p",null,"To start the streams, execute the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"START ALL STREAMS;\n")),(0,o.kt)("p",null,"Run the following query to check if all the streams were started correctly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,o.kt)("p",null,"You can also check the node counter in ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," (",(0,o.kt)("strong",{parentName:"p"},"Overview tab"),") to\nsee if new nodes and relationships are arriving."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Check out the example-streaming-app on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub")," to see how Memgraph\ncan be connected to a Kafka stream."))}u.isMDXComponent=!0},34323:function(e,t,a){t.Z=a.p+"assets/images/kafka-graph-e4e8c68495826bbe558fbeadb1abc14d.png"}}]);