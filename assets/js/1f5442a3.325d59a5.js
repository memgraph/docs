"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89673],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33563:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"protobuf",title:"Import Protobuf data",sidebar_label:"Protobuf"},l=void 0,p={unversionedId:"import-data/kafka/protobuf",id:"import-data/kafka/protobuf",isDocsHomePage:!1,title:"Import Protobuf data",description:"Similar to Apache Avro,",source:"@site/docs/import-data/kafka/protobuf.md",sourceDirName:"import-data/kafka",slug:"/import-data/kafka/protobuf",permalink:"/docs/memgraph/next/import-data/kafka/protobuf",editUrl:"https://github.com/memgraph/docs/tree/master/docs/import-data/kafka/protobuf.md",tags:[],version:"current",frontMatter:{id:"protobuf",title:"Import Protobuf data",sidebar_label:"Protobuf"},sidebar:"memgraph",previous:{title:"JSON",permalink:"/docs/memgraph/next/import-data/kafka/json"},next:{title:"MySQL",permalink:"/docs/memgraph/next/import-data/migrate/mysql"}},m=[{value:"Example",id:"example",children:[{value:"Deserialization",id:"deserialization",children:[],level:3},{value:"Transformation modules",id:"transformation-modules",children:[],level:3},{value:"Creating the streams",id:"creating-the-streams",children:[],level:3}],level:2},{value:"Next steps",id:"next-steps",children:[],level:2}],u={toc:m};function c(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Similar to Apache Avro,\n",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protobuf")," is a method of\nserializing structured data. A message format is defined in a ",(0,o.kt)("inlineCode",{parentName:"p"},".proto")," file, and\nyou can generate code from it in many languages, including Java, Python, C++,\nC#, Go, and Ruby. Unlike Avro, Protobuf does not serialize schema with the\nmessage. In order to deserialize the message, you need the schema in the\nconsumer. A benefit of working with Protobuf is the option to define multiple\nmessages in one ",(0,o.kt)("inlineCode",{parentName:"p"},".proto")," file."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's assume we have the following schemas coming out of their respective topics\n",(0,o.kt)("inlineCode",{parentName:"p"},"pbStreamProfile"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pbStreamCompany"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"pbStreamWorksAt"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\nmessage Person {\n    string name = 1;\n    int64 age = 2;\n    string email = 3;\n    string address = 4;\n}\n\nmessage Company {\n    string name = 1;\n    string address = 2;\n}\n\nmessage WorksAt {\n    string name = 1;\n    string company = 2;\n}\n\n')),(0,o.kt)("p",null,"These schemas translate into the ",(0,o.kt)("inlineCode",{parentName:"p"},".proto")," file.\nBefore making your transformation script, it is necessary to ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/pythontutorial#compiling-your-protocol-buffers"},"generate\ncode"),"\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},".proto")," file."),(0,o.kt)("p",null,"We can use the schemas to build the following graph:"),(0,o.kt)("img",{src:r(34323).Z}),(0,o.kt)("h3",{id:"deserialization"},"Deserialization"),(0,o.kt)("p",null,"Data received by the Memgraph consumer is a byte array and needs to be\ndeserialized. The following method will help you deserialize your data with the\nhelp of Confluent Kafka:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from confluent_kafka.schema_registry import SchemaRegistryClient\nfrom confluent_kafka.schema_registry.protobuf import ProtobufDeserializer\n\nimport person_pb2 # proto file compiled into Python module\n\ndef process_record_protobuf(record: bytes, message_type: obj) -> dict:\n    deserializer = ProtobufDeserializer(message_type)\n    return deserializer(record, None)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"message_type")," corresponds to the message defined in ",(0,o.kt)("inlineCode",{parentName:"p"},".proto")," file. This method\nshould be added to the transformation module."),(0,o.kt)("h3",{id:"transformation-modules"},"Transformation modules"),(0,o.kt)("p",null,"Before consuming data from a stream, we need to implement transformation modules\nthat will produce queries. In order to create a transformation module, you need\nto:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Python module"),(0,o.kt)("li",{parentName:"ol"},"Save it into the Memgraph's query-modules directory (default:\n",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/lib/memgraph/query_modules"),")"),(0,o.kt)("li",{parentName:"ol"},"Load it into Memgraph either on startup (automatically) or by running the\n",(0,o.kt)("inlineCode",{parentName:"li"},"CALL mg.load_all")," query")),(0,o.kt)("p",null,"Additionally, the compiled file should also be saved in the query modules\ndirectory."),(0,o.kt)("p",null,"Example of the ",(0,o.kt)("inlineCode",{parentName:"p"},"profile_transformation")," module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@mgp.transformation\ndef profile_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n    for i in range(messages.total_messages()):\n        message_pb = messages.message_at(i)\n        msg_value = message_pb.payload()\n        message = process_record_protobuf(msg_value, person_pb2.Person)\n        result_queries.append(mgp.Record (\n                query=f\'CREATE (p: Person {{ name: "{message.name}", age: ToInteger({message.age}), address: "{message.address}", email:"{message.email}" }});\' ,\n                parameters=None\n            ))\n\n    return result_queries\n')),(0,o.kt)("h3",{id:"creating-the-streams"},"Creating the streams"),(0,o.kt)("p",null,"To import data into Memgraph, we need to create a stream for each topic and\napply our transformation module on incoming data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE STREAM pbStreamProfile TOPICS pb-stream-profile TRANSFORM protobuf_transform.profile_transformation;\nCREATE STREAM pbStreamCompany TOPICS pb-stream-company TRANSFORM protobuf_transform.company_transformation;\nCREATE STREAM pbStreamWorksAt TOPICS pb-stream-worksat TRANSFORM protobuf_transform.works_at_transformation;\n")),(0,o.kt)("p",null,"To start the streams, type the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"START ALL STREAMS;\n")),(0,o.kt)("p",null,"Run the following query to check if all the streams were started correctly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,o.kt)("p",null,"You can also check the node counter in ",(0,o.kt)("strong",{parentName:"p"},"Memgraph Lab")," (",(0,o.kt)("strong",{parentName:"p"},"Overview tab"),") to\nsee if new nodes and relationships are arriving."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Check out the example-streaming-app on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub")," to see how Memgraph\ncan be connected to a Kafka stream."))}c.isMDXComponent=!0},34323:function(e,t,r){t.Z=r.p+"assets/images/kafka-graph-e4e8c68495826bbe558fbeadb1abc14d.png"}}]);