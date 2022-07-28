"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78803],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return u}});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){s(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var m=t.createContext({}),l=function(e){var a=t.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=l(e.components);return t.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=l(n),u=s,c=g["".concat(m,".").concat(u)]||g[u]||d[u]||r;return n?t.createElement(c,o(o({ref:a},p),{},{components:n})):t.createElement(c,o({ref:a},p))}));function u(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=g;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25923:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var t=n(87462),s=n(63366),r=(n(67294),n(3905)),o=["components"],i={id:"python-api",title:"Transformations Python API",sidebar_label:"Python API"},m=void 0,l={unversionedId:"reference-guide/streams/transformation-modules/api/python-api",id:"reference-guide/streams/transformation-modules/api/python-api",title:"Transformations Python API",description:"This is the additional API documentation for mgp.py  which contains",source:"@site/docs/reference-guide/streams/transformation-modules/api/python-api.md",sourceDirName:"reference-guide/streams/transformation-modules/api",slug:"/reference-guide/streams/transformation-modules/api/python-api",permalink:"/docs/memgraph/next/reference-guide/streams/transformation-modules/api/python-api",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/streams/transformation-modules/api/python-api.md",tags:[],version:"current",frontMatter:{id:"python-api",title:"Transformations Python API",sidebar_label:"Python API"},sidebar:"memgraph",previous:{title:"C API",permalink:"/docs/memgraph/next/reference-guide/streams/transformation-modules/api/c-api"},next:{title:"SSL encryption",permalink:"/docs/memgraph/next/reference-guide/encryption"}},p={},d=[{value:"<code>mgp.transformation(func)</code>",id:"mgptransformationfunc",level:2},{value:"Examples",id:"examples",level:3},{value:"<code>class mgp.Message(message)</code>",id:"class-mgpmessagemessage",level:2},{value:"<code>is_valid()</code>",id:"is_valid",level:3},{value:"<code>payload()</code>",id:"payload",level:3},{value:"<code>topic_name()</code>",id:"topic_name",level:3},{value:"<code>key()</code>",id:"key",level:3},{value:"<code>timestamp()</code>",id:"timestamp",level:3},{value:"<code>class mgp.Messages(messages)</code>",id:"class-mgpmessagesmessages",level:2},{value:"<code>is_valid()</code>",id:"is_valid-1",level:3},{value:"<code>total_messages()</code>",id:"total_messages",level:3},{value:"<code>message_at(id)</code>",id:"message_atid",level:3},{value:"<code>class mgp.TransCtx(graph)</code>",id:"class-mgptransctxgraph",level:2},{value:"<code>graph()</code>",id:"graph",level:3},{value:"<code>is_valid()</code>",id:"is_valid-2",level:3},{value:"Transformation examples of different format messages",id:"transformation-examples-of-different-format-messages",level:2},{value:"JSON",id:"json",level:3},{value:"Avro",id:"avro",level:3},{value:"Protobuf",id:"protobuf",level:3}],g={toc:d};function u(e){var a=e.components,i=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},g,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the additional API documentation for ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.py"),"  which contains\ndefinitions of the public Transformation Python API provided by Memgraph. At the\ncore, this is a wrapper around the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/memgraph/next/reference-guide/streams/transformation-modules/api/c-api"},"C API")),". This source file can\nbe found in the Memgraph installation directory, under ",(0,r.kt)("inlineCode",{parentName:"p"},"python_support"),". On the\nstandard Debian installation, this will be under\n",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"NOTE:")," This part of the documentation is still under development. An updated\nversion will soon be available."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For an example how to implement\xa0transformation modules in Python with Memgraph Lab, check out\nthis ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/tutorials/graph-stream-processing-with-kafka#2-create-a-transformation-module"},"tutorial"),"."),(0,r.kt)("p",{parentName:"div"},"Below, you can find ",(0,r.kt)("a",{parentName:"p",href:"#transformation-examples-of-different-format-messages"},"transformation examples of different format\nmessages")," such as JSON,\nAvro and Protobuf."))),(0,r.kt)("h2",{id:"mgptransformationfunc"},(0,r.kt)("inlineCode",{parentName:"h2"},"mgp.transformation(func)")),(0,r.kt)("p",null,"Transformation modules in Python have to follow certain rules in order to work:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The transformation module is a Python function"),(0,r.kt)("li",{parentName:"ol"},"The function has to be ",(0,r.kt)("em",{parentName:"li"},"decorated")," with a ",(0,r.kt)("strong",{parentName:"li"},"@mgp.transformation")," decorator"),(0,r.kt)("li",{parentName:"ol"},"The function can have 1 or 2 arguments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"one of type ",(0,r.kt)("inlineCode",{parentName:"li"},"mgp.Messages")," (required)"),(0,r.kt)("li",{parentName:"ul"},"one of type ",(0,r.kt)("inlineCode",{parentName:"li"},"mgp.TransCtx")," (optional)")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"The function has to return an ",(0,r.kt)("inlineCode",{parentName:"li"},"mgp.Record")," in the following form:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map])")),(0,r.kt)("li",{parentName:"ul"},"the return type can also be an ",(0,r.kt)("strong",{parentName:"li"},"iterable")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"mgp.Record"),"s, but not a\ngenerator")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n@mgp.transformation\ndef transformation(context: mgp.TransCtx,\n                   messages: mgp.Messages\n                   ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        payload_as_str = message.payload().decode(\"utf-8\")\n        result_queries.append(mgp.Record(\n            query=f\"CREATE (n:MESSAGE {{timestamp: '{message.timestamp()}', payload: '{payload_as_str}', topic: '{message.topic_name()}'}})\",\n            parameters=None))\n\n    return result_queries\n")),(0,r.kt)("p",null,"This transformation extracts the interesting members of each ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.Message")," and\nstores them in query ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),", which wraps a ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," clause with all the\ninteresting members (timestamp, payload, etc.) and an empty parameter list."),(0,r.kt)("p",null,"Any errors can be reported by raising an Exception."),(0,r.kt)("h2",{id:"class-mgpmessagemessage"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Message(message)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Represents a single message. You shouldn't store a ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," globally."),(0,r.kt)("h3",{id:"is_valid"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Returns true if the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message")," object is valid and can be\naccessed."),(0,r.kt)("h3",{id:"payload"},(0,r.kt)("inlineCode",{parentName:"h3"},"payload()")),(0,r.kt)("p",null,"Returns the payload of the message. Raises an ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessageError")," if\n",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h3",{id:"topic_name"},(0,r.kt)("inlineCode",{parentName:"h3"},"topic_name()")),(0,r.kt)("p",null,"Returns the topic name of the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message"),". Raises an\n",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessageError")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h3",{id:"key"},(0,r.kt)("inlineCode",{parentName:"h3"},"key()")),(0,r.kt)("p",null,"Returns the key of the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message")," as bytes. Raises an\n",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessageError")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h3",{id:"timestamp"},(0,r.kt)("inlineCode",{parentName:"h3"},"timestamp()")),(0,r.kt)("p",null,"Returns the timestamp of the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message"),". Raises an\n",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessageError")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h2",{id:"class-mgpmessagesmessages"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.Messages(messages)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Represents a list of messages passed to a transformation. You shouldn't store\n",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," globally ."),(0,r.kt)("h3",{id:"is_valid-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Returns true if the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.messages")," object is valid and can be\naccessed."),(0,r.kt)("h3",{id:"total_messages"},(0,r.kt)("inlineCode",{parentName:"h3"},"total_messages()")),(0,r.kt)("p",null,"Returns the number of ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.messages")," contained. Raises ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessagesError")," if\n",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h3",{id:"message_atid"},(0,r.kt)("inlineCode",{parentName:"h3"},"message_at(id)")),(0,r.kt)("p",null,"Returns the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp.message")," at index ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),". Raises\n",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidMessagesError")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"is_valid()")," is false."),(0,r.kt)("h2",{id:"class-mgptransctxgraph"},(0,r.kt)("inlineCode",{parentName:"h2"},"class mgp.TransCtx(graph)")),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"Context of a transformation being executed."),(0,r.kt)("p",null,"Access to a ",(0,r.kt)("inlineCode",{parentName:"p"},"TransCtx")," is only valid during a single execution of a\ntransformation. You shouldn't store a ",(0,r.kt)("inlineCode",{parentName:"p"},"TransCtx")," globally."),(0,r.kt)("h3",{id:"graph"},(0,r.kt)("inlineCode",{parentName:"h3"},"graph()")),(0,r.kt)("p",null,"Raise ",(0,r.kt)("inlineCode",{parentName:"p"},"InvalidContextError")," if context is invalid."),(0,r.kt)("h3",{id:"is_valid-2"},(0,r.kt)("inlineCode",{parentName:"h3"},"is_valid()")),(0,r.kt)("p",null,"Returns true if the context is valid and can be accessed."),(0,r.kt)("h2",{id:"transformation-examples-of-different-format-messages"},"Transformation examples of different format messages"),(0,r.kt)("p",null,"If you are using Kafka or Redpanda, below are transformation examples of\nmessages in the most common formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#json"},"JSON"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#avro"},"Avro"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#protobuf"},"Protobuf")))),(0,r.kt)("p",null,"Once the transformation procedures have been written, the module needs to be\nloaded into Memgraph."),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," (JavaScript Object Notation) is an\nopen standard file format and data interchange format that uses human-readable\ntext to store and transmit data objects consisting of attribute-value pairs and\narrays (or other serializable values). It is a common data format with a diverse\nrange of functionality in data interchange, including communication of web\napplications with servers."),(0,r.kt)("p",null,"Let's assume we have the following schemas coming out of three topics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'person = {\n        "id" : int,\n        "name": str,\n        "address" : str,\n        "mail": str,\n    }\ncompany = {\n        "id" : int,\n        "name" : str,\n        "address" : str,\n        "mail": str,\n    }\nworks_at = {\n            "person_id"  : int,\n            "company_id" : int,\n            "start_date" : date,\n        }\n')),(0,r.kt)("p",null,"The procedures within the Python transformation module that will transform the incoming\ndata into Cypher query would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import mgp\nimport json\n\n@mgp.transformation\ndef person_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        message_json = json.loads(message.payload())\n        result_queries.append(mgp.Record (\n                query=f\'\'\'MERGE (p:Person {{ id: ToInteger({message_json["id"]}), name: "{message_json["name"]}",\n                address: "{message_json["address"]}", mail: "{message_json["mail"]}" }})\'\'\' ,\n                parameters=None\n            ))\n    return result_queries\n\n@mgp.transformation\ndef company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        message_json = json.loads(message.payload())\n        result_queries.append(mgp.Record (\n                query=f\'\'\'MERGE (c:Company {{ id: ToInteger({message_json["id"]}), name: "{message_json["name"]}",\n                address: "{message_json["address"]}", mail: "{message_json["mail"]}" }})\'\'\' ,\n                parameters=None\n            ))\n    return result_queries\n\n@mgp.transformation\ndef employees_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        message_json = json.loads(message.payload())\n        result_queries.append(mgp.Record (\n                query=f\'\'\'MATCH (p:Person ), (c:Company) \n                WHERE p.id = "{message_json["person_id"]}" AND c.id = "{message_json["company_id"]}" \n                MERGE (p)-[WORKS_AT: {{start_date: date({message_json["start_date"]})}}]->(c)\'\'\'  ,\n                parameters=None\n            ))\n\n    return result_queries\n')),(0,r.kt)("p",null,"Upon creating three separate streams in Memgraph (one for each topic), and\ningesting the data, the graph schema looks like this:"),(0,r.kt)("img",{src:n(34323).Z,height:"300px"}),(0,r.kt)("p",null,"If you need help writing transformation modules, check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/tutorials/graph-stream-processing-with-kafka#2-create-a-transformation-module"},"the tutorial on\nwriting modules in\nPython"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/streams/transformation-modules/api/c-api#transformation-module-example"},"an example of a C transformation\nprocedure"),". "),(0,r.kt)("h3",{id:"avro"},"Avro"),(0,r.kt)("p",null,"If you want to import your data in Memgraph using Apache Avro serialization, you\nneed to know the ",(0,r.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/gettingstartedpython.html#Defining+a+schema"},"Avro\nschema"),"\nof your data. This is necessary for deserializing the data. Each schema contains\na single schema definition, so there should be a separate schema for each data\nrepresentation you want to import into Memgraph."),(0,r.kt)("p",null,"Avro data types will be flexibly mapped to the target schema, that is, Avro and\nopenCypher types do not need to match exactly. Use the table below for data type\nmappings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Avro Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Cypher Casting Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"toBoolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"toFloat")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"toInteger")))),(0,r.kt)("p",null,"Let's assume we have the following schemas coming out of three topics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'profile_schema = """ {\n    "namespace": "example.avro",\n    "name": "Person",\n    "type": "record",\n    "fields": [\n        {"name": "id", "type": "int"},\n        {"name": "name", "type": "string"},\n        {"name": "address", "type": "string"}\n        {"name": "mail", "type": "string"},\n    ]\n}"""\n\ncompany_schema = """{\n    "namespace": "example.avro",\n    "name": "Company",\n    "type": "record",\n    "fields": [\n        {"name": "id", "type": "int"},\n        {"name": "name", "type": "string"},\n        {"name": "address", "type": "string"}\n        {"name": "mail", "type": "string"},\n    ]\n} """\n\nworks_at_schema = """ {\n    "namespace": "example.avro",\n    "name": "Works_At",\n    "type": "record",\n    "fields": [\n        {"name": "person_id", "type": "int"},\n        {"name": "company_id", "type": "int"}\n        {"name": "start_date", "type": "date"}\n    ]\n}\n"""\n')),(0,r.kt)("p",null,"Data received by the Memgraph consumer is a byte array and needs to be\ndeserialized. The following method will deserialize data with the help of\nConfluent Kafka:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from confluent_kafka.schema_registry import SchemaRegistryClient\nfrom confluent_kafka.schema_registry.avro import AvroDeserializer\n\ndef process_record_confluent(record: bytes, src: SchemaRegistryClient, schema: str):\n    deserializer = AvroDeserializer(schema_str=schema, schema_registry_client=src)\n    return deserializer(record, None) # returns dict\n\n")),(0,r.kt)("p",null,"The procedures within the Python transformation module that will transform the incoming\ndata into Cypher query would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import mgp\n\n@mgp.transformation\ndef person_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message_avro = messages.message_at(i)\n        msg_value = message_avro.payload()\n        message = process_record_confluent(msg_value, src= SchemaRegistryClient({\'url\': \'http://localhost:8081\'}), schema=profile_schema)\n        result_queries.append(mgp.Record (\n                query=f\'\'\'MERGE (p:Person {{ id: ToInteger({message["id"]}), name: "{message["name"]}", address: "{message["address"]}", mail: "{message["mail"]}" }})\'\'\' ,\n                parameters=None\n            ))\n\n    return result_queries\n\n@mgp.transformation\ndef company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message_avro = messages.message_at(i)\n        msg_value = message_avro.payload()\n        message = process_record_confluent(msg_value, src= SchemaRegistryClient({\'url\': \'http://localhost:8081\'}), schema=profile_schema)\n        result_queries.append(mgp.Record (\n                query=f\'\'\'MERGE (c:COmpany {{ id: ToInteger({message["id"]}), name: "{message["name"]}", address: "{message["address"]}", mail: "{message["mail"]}" }})\'\'\' ,\n                parameters=None\n            ))\n\n    return result_queries\n\n@mgp.transformation\ndef company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message_avro = messages.message_at(i)\n        msg_value = message_avro.payload()\n        message = process_record_confluent(msg_value, src= SchemaRegistryClient({\'url\': \'http://localhost:8081\'}), schema=profile_schema)\n        result_queries.append(mgp.Record (\n                query=f\'\'\'MATCH (p:Person ), (c:Company) \n                WHERE p.id = "{message["person_id"]}" AND c.id = "{message["company_id"]}" \n                MERGE (p)-[WORKS_AT: {{start_date: date({message["start_date"]})}}]->(c)\'\'\'  ,\n                parameters=None\n            ))\n\n    return result_queries\n\n')),(0,r.kt)("p",null,"Upon creating three separate streams in Memgraph (one for each topic), and ingesting the data, the\ngraph schema looks like this:"),(0,r.kt)("img",{src:n(34323).Z,height:"300px"}),(0,r.kt)("h3",{id:"protobuf"},"Protobuf"),(0,r.kt)("p",null,"Similar to Apache Avro,\n",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protobuf")," is a method of\nserializing structured data. A message format is defined in a ",(0,r.kt)("inlineCode",{parentName:"p"},".proto")," file, and\nfrom it you can generate code in many languages, including Java, Python, C++,\nC#, Go, and Ruby. Unlike Avro, Protobuf does not serialize schema with the\nmessage. In order to deserialize the message, you need the schema in the\nconsumer. A benefit of working with Protobuf is the option to define multiple\nmessages in one ",(0,r.kt)("inlineCode",{parentName:"p"},".proto")," file."),(0,r.kt)("p",null,"Let's assume we have the following schemas coming out of three topics:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\nmessage Person {\n    int64 id = 1;\n    string name = 2;\n    string address = 3;\n    string mail = 4;\n}\n\nmessage Company {\n    int64 id = 1;\n    string name = 2;\n    string address = 3;\n    string mail = 4;\n}\n\nmessage WorksAt {\n    int64 person_id = 1;\n    int64 company_id = 2;\n    string start_date = 3;\n}\n\n')),(0,r.kt)("p",null,"These schemas translate into the ",(0,r.kt)("inlineCode",{parentName:"p"},".proto")," file.\nBefore making your transformation script, it is necessary to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/pythontutorial#compiling-your-protocol-buffers"},"generate\ncode"),"\nfrom the ",(0,r.kt)("inlineCode",{parentName:"p"},".proto")," file."),(0,r.kt)("p",null,"Data received by the Memgraph consumer is a byte array and needs to be\ndeserialized. The following method will help you deserialize your data with the\nhelp of Confluent Kafka:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from confluent_kafka.schema_registry import SchemaRegistryClient\nfrom confluent_kafka.schema_registry.protobuf import ProtobufDeserializer\n\nimport person_pb2 # proto file compiled into Python module\n\ndef process_record_protobuf(record: bytes, message_type: obj) -> dict:\n    deserializer = ProtobufDeserializer(message_type)\n    return deserializer(record, None)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"message_type")," corresponds to the message defined in ",(0,r.kt)("inlineCode",{parentName:"p"},".proto")," file. This method\nshould be added to the transformation module."),(0,r.kt)("p",null,"The procedures within the Python transformation module that will transform the incoming\ndata into Cypher query would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n@mgp.transformation\ndef person_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n    for i in range(messages.total_messages()):\n        message_pb = messages.message_at(i)\n        msg_value = message_pb.payload()\n        message = process_record_protobuf(msg_value, person_pb2.Person)\n        result_queries.append(mgp.Record (\n                query=f'''MERGE (p:Person {{ id: ToInteger({message.id}), name: \"{message.name}\", address: \"{message.address}\", mail: \"{messag.mail}\" }})''' ,\n                parameters=None\n            ))\n\n    return result_queries\n\n@mgp.transformation\ndef company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n    for i in range(messages.total_messages()):\n        message_pb = messages.message_at(i)\n        msg_value = message_pb.payload()\n        message = process_record_protobuf(msg_value, person_pb2.Person)\n        result_queries.append(mgp.Record (\n                query=f'''MERGE (c:Copany {{ id: ToInteger({message.id}), name: \"{message.name}\", address: \"{message.address}\", mail: \"{messag.mail}\" }})''' ,\n                parameters=None\n            ))\n\n    return result_queries\n\n@mgp.transformation\ndef company_transformation(messages: mgp.Messages) -> mgp.Record(query = str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n    for i in range(messages.total_messages()):\n        message_pb = messages.message_at(i)\n        msg_value = message_pb.payload()\n        message = process_record_protobuf(msg_value, person_pb2.Person)\n        result_queries.append(mgp.Record (\n                query=f'''MATCH (p:Person ), (c:Company) \n                WHERE p.id = \"{message.person_id}\" AND c.id = \"{message.company_id}\" \n                MERGE (p)-[WORKS_AT: {{start_date: date({message.start_date})}}]->(c)'''  ,\n                parameters=None\n            ))\n\n    return result_queries\n")),(0,r.kt)("p",null,"Upon creating three separate streams in Memgraph (one for each topic), and ingesting the data, the\ngraph schema looks like this:"),(0,r.kt)("img",{src:n(34323).Z,height:"300px"}))}u.isMDXComponent=!0},34323:function(e,a,n){a.Z=n.p+"assets/images/kafka-graph-e4e8c68495826bbe558fbeadb1abc14d.png"}}]);