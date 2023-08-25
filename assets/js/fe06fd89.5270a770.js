"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48195],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={id:"overview",title:"Streams",sidebar_label:"Streams overview",slug:"/reference-guide/streams"},o=void 0,s={unversionedId:"reference-guide/streams/overview",id:"version-2.10.1/reference-guide/streams/overview",title:"Streams",description:"Memgraph can connect to existing Kafka, Redpanda, and Pulsar sources to ingest",source:"@site/memgraph_versioned_docs/version-2.10.1/reference-guide/streams/overview.md",sourceDirName:"reference-guide/streams",slug:"/reference-guide/streams",permalink:"/docs/memgraph/reference-guide/streams",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.1/reference-guide/streams/overview.md",tags:[],version:"2.10.1",frontMatter:{id:"overview",title:"Streams",sidebar_label:"Streams overview",slug:"/reference-guide/streams"},sidebar:"memgraph",previous:{title:"Storage modes",permalink:"/docs/memgraph/reference-guide/storage-modes"},next:{title:"Transformation modules overview",permalink:"/docs/memgraph/reference-guide/streams/transformation-modules"}},l={},m=[{value:"Create a stream",id:"create-a-stream",level:2},{value:"Kafka and Redpanda",id:"kafka-and-redpanda",level:3},{value:"Pulsar",id:"pulsar",level:3},{value:"Start a stream",id:"start-a-stream",level:2},{value:"Stop a stream",id:"stop-a-stream",level:2},{value:"Delete a stream",id:"delete-a-stream",level:2},{value:"Show streams",id:"show-streams",level:2},{value:"Check stream",id:"check-stream",level:2},{value:"Get stream information",id:"get-stream-information",level:2},{value:"Kafka producer delivery semantics",id:"kafka-producer-delivery-semantics",level:2},{value:"Configuring stream transactions",id:"configuring-stream-transactions",level:2},{value:"Setting a stream offset",id:"setting-a-stream-offset",level:2}],p={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memgraph can connect to existing Kafka, Redpanda, and Pulsar sources to ingest\nthe data, which you can then query with the power of MAGE algorithms or your own\ncustom procedures."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/graph-stream-processing-with-kafka"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related -\nTutorial"}))," ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/data-streams/overview"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=How-to&color=blue&style=for-the-badge",alt:"Related - How to"}))),(0,r.kt)("p",null,"To use streams, a user must:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/streams/transformation-modules#creating-a-transformation-module"},"Create a transformation\nmodule")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/streams/transformation-modules#loading-modules"},"Load the transformation\nmodule")," into\nMemgraph"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-a-stream"},"Create the stream")," with a ",(0,r.kt)("inlineCode",{parentName:"li"},"CREATE <streaming platform> STREAM")," query and optionally ",(0,r.kt)("a",{parentName:"li",href:"#setting-a-stream-offset"},"set its offset")," with\n",(0,r.kt)("inlineCode",{parentName:"li"},"CALL mg.kafka_set_stream_offset(stream_name, offset)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#start-a-stream"},"Start the stream")," with a ",(0,r.kt)("inlineCode",{parentName:"li"},"START STREAM")," query")),(0,r.kt)("p",null,"You can write Python transformation modules, create and start streams using the\n",(0,r.kt)("strong",{parentName:"p"},"Stream")," section in the Memgraph Lab, ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/data-streams/manage-streams-lab"},"check out\nhow"),". "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out the ",(0,r.kt)("strong",{parentName:"p"},"example-streaming-app")," on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub")," to see a sample\nMemgraph-Kafka application.")),(0,r.kt)("h2",{id:"create-a-stream"},"Create a stream"),(0,r.kt)("p",null,"The syntax for creating a stream depends on the type of the source because each\nspecific type supports a different set of configuration options."),(0,r.kt)("p",null,"There is no strict order for specifying the configuration options."),(0,r.kt)("h3",{id:"kafka-and-redpanda"},"Kafka and Redpanda"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE KAFKA STREAM <stream name>\n  TOPICS <topic1> [, <topic2>, ...]\n  TRANSFORM <transform procedure>\n  [CONSUMER_GROUP <consumer group>]\n  [BATCH_INTERVAL <batch interval duration>]\n  [BATCH_SIZE <batch size>]\n  [BOOTSTRAP_SERVERS <bootstrap servers>]\n  [CONFIGS { <key1>: <value1> [, <key2>: <value2>, ...]}]\n  [CREDENTIALS { <key1>: <value1> [, <key2>: <value2>, ...]}];\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"stream name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the stream in Memgraph"),(0,r.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"my_stream"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the topic in Kafka"),(0,r.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"my_topic"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"transform procedure"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the transformation file followed by a procedure name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"my_transformation.my_procedure"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"consumer group"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the consumer group in Memgraph"),(0,r.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"my_group"),(0,r.kt)("td",{parentName:"tr",align:"center"},"mg_consumer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"batch interval duration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Maximum waiting time in milliseconds for consuming messages before calling the transform procedure"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"9999"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"batch size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Maximum number of messages to wait for before calling the transform procedure"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"99"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"bootstrap servers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Comma-separated list of bootstrap servers"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},'"localhost:9092"'),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"configs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String key-value pairs of configuration options for the Kafka consumer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"map with string key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:"center"},'{"sasl.username": "michael.scott"}'),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"credentials"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String key-value pairs of configuration options for the Kafka consumer, but their value aren't shown in the Kafka specific stream information"),(0,r.kt)("td",{parentName:"tr",align:"center"},"map with string key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:"center"},'{"sasl.password": "password"}'),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The credentials are stored on the disk without any encryption, which means\neverybody who has access to the data directory of Memgraph can get the\ncredentials.")),(0,r.kt)("p",null,"To check the list of possible configuration options and their values, please\ncheck the documentation of\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/v1.7.0/CONFIGURATION.md"},"librdkafka"),"\nlibrary, which is used in Memgraph. At the time of writing this documentation\nMemgraph uses version 1.7.0 of librdkafka."),(0,r.kt)("h3",{id:"pulsar"},"Pulsar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE PULSAR STREAM <stream name>\n  TOPICS <topic1> [, <topic2>, ...]\n  TRANSFORM <transform procedure>\n  [BATCH_INTERVAL <batch interval duration>]\n  [BATCH_SIZE <batch size>]\n  [SERVICE_URL <service url>];\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"stream name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the stream in Memgraph"),(0,r.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"my_stream"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the topic in Pulsar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,r.kt)("td",{parentName:"tr",align:"center"},"my_topic"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"transform procedure"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the transformation file followed by a procedure name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"my_transformation.my_procedure"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"batch interval duration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Maximum waiting time in milliseconds for consuming messages before calling the transform procedure"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"9999"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"batch size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Maximum number of messages to wait for before calling the transform procedure"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"99"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"service url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"URL to the running Pulsar cluster"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},'"pulsar://127.0.0.1:6650"'),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,r.kt)("p",null,"The transformation procedure is called if either the ",(0,r.kt)("inlineCode",{parentName:"p"},"BATCH_INTERVAL")," or the\n",(0,r.kt)("inlineCode",{parentName:"p"},"BATCH_SIZE")," is reached, and at least one message is received."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BATCH_INTERVAL")," starts when the:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the stream is started"),(0,r.kt)("li",{parentName:"ul"},"the processing of the previous batch is completed"),(0,r.kt)("li",{parentName:"ul"},"the previous batch interval ended without receiving any messages")),(0,r.kt)("p",null,"After each message is processed, the stream will acknowledge them. If the stream\nis stopped, the next time it starts, it will continue processing the message from\nthe last acknowledged message."),(0,r.kt)("p",null,"The user who executes the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," query is the owner of the stream."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Memgraph Community")," doesn't support authentication and authorization, so the\nowner is always ",(0,r.kt)("inlineCode",{parentName:"p"},"Null"),", and the privileges are not checked."),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Enterprise"),", owner privileges are checked upon executing the\nqueries returned from the transformation procedures. If the owner doesn't have\nthe required privileges, the execution of the queries will fail. Find more\ninformation about how the owner affects the stream in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/security#owners"},"reference\nguide"),"."),(0,r.kt)("h2",{id:"start-a-stream"},"Start a stream"),(0,r.kt)("p",null,"The following query will start a specific stream with name ",(0,r.kt)("inlineCode",{parentName:"p"},"<stream name>")," to\nconsume ",(0,r.kt)("inlineCode",{parentName:"p"},"<count>")," number of batches for a maximum duration of ",(0,r.kt)("inlineCode",{parentName:"p"},"<milliseconds>"),"\nmilliseconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>];\n")),(0,r.kt)("p",null,"The stream will automatically stop after consuming the given number of batches\nor reaching the timeout. If ",(0,r.kt)("inlineCode",{parentName:"p"},"<count>")," number of batches are not processed within\nthe specified ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMEOUT"),", probably because not enough messages was received, an\nexception is thrown. ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMEOUT")," is measured in milliseconds, and its default\nvalue is 30000. It can only be used in combination with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BATCH_LIMIT"),"\noption."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"BATCH_LIMIT")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMEOUT"),") is not provided, the ",(0,r.kt)("inlineCode",{parentName:"p"},"<stream name>")," stream\nwill run for an infinite number of batches without a timeout limit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM <stream name>;\n")),(0,r.kt)("p",null,"The following query will start all streams for an infinite number of batches and\nwithout a timeout limit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"START ALL STREAMS;\n")),(0,r.kt)("p",null,"When a stream is started, it resumes ingesting data from the last committed\noffset. If no offset is committed for the consumer group, the largest\noffset will be used. Therefore, only the new messages will be consumed."),(0,r.kt)("h2",{id:"stop-a-stream"},"Stop a stream"),(0,r.kt)("p",null,"The following queries stop a specific stream or all streams."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP STREAM <stream name>;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP ALL STREAMS;\n")),(0,r.kt)("h2",{id:"delete-a-stream"},"Delete a stream"),(0,r.kt)("p",null,"The following query drops a stream with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"<stream name>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP STREAM <stream name>;\n")),(0,r.kt)("h2",{id:"show-streams"},"Show streams"),(0,r.kt)("p",null,"To show streams, use the following query: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,r.kt)("p",null,"It shows a list of existing streams with the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"stream name"),(0,r.kt)("li",{parentName:"ul"},"stream type"),(0,r.kt)("li",{parentName:"ul"},"batch interval"),(0,r.kt)("li",{parentName:"ul"},"batch size"),(0,r.kt)("li",{parentName:"ul"},"transformation procedure name"),(0,r.kt)("li",{parentName:"ul"},"the owner of the streams"),(0,r.kt)("li",{parentName:"ul"},"whether the stream is running or not")),(0,r.kt)("h2",{id:"check-stream"},"Check stream"),(0,r.kt)("p",null,"To perform a dry-run on the stream and get the results of the transformation,\nuse the following query: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>];\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," clause will do a dry-run on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<stream name>")," stream with\n",(0,r.kt)("inlineCode",{parentName:"p"},"<count>")," number of batches and return the result of the transformation, that\nis, the queries and parameters that would be executed in a normal run. If\n",(0,r.kt)("inlineCode",{parentName:"p"},"<count>")," number of batches are not processed within the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMEOUT"),",\nprobably because not enough messages were received, an exception is thrown."),(0,r.kt)("p",null,"The default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"<count>")," is 1. ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMEOUT")," is measured in milliseconds, and\nits default value is 30000."),(0,r.kt)("h2",{id:"get-stream-information"},"Get stream information"),(0,r.kt)("p",null,"To get more information about a specific Kafka or Redpanda stream, use the\nfollowing query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.kafka_stream_info("stream_name") YIELD *;\n')),(0,r.kt)("p",null,"This procedure will return information about the bootstrap server, set\nconfiguration, consumer group, credentials, and topics."),(0,r.kt)("p",null,"To get more information about a specific Pulsar stream, use the\nfollowing query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.pulsar_stream_info("stream_name") YIELD *;\n')),(0,r.kt)("p",null,"The procedure will return the service URL and topics."),(0,r.kt)("h2",{id:"kafka-producer-delivery-semantics"},"Kafka producer delivery semantics"),(0,r.kt)("p",null,"In stream processing, it is important to consider how failures are handled. When\nconnecting an external application such as Memgraph to a Kafka stream, there are\ntwo possible ways to handle failures during message processing:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Every message is processed ",(0,r.kt)("strong",{parentName:"li"},"at least once"),": the message offsets are\ncommitted to the Kafka cluster after processing. If the committing fails, the\nmessages can get processed multiple times."),(0,r.kt)("li",{parentName:"ol"},"Every message is processed ",(0,r.kt)("strong",{parentName:"li"},"at most once"),": the message offsets are\ncommitted to the Kafka cluster right after they are received before the\nprocessing is started. If the processing fails, the same messages\nwon't be processed again.")),(0,r.kt)("p",null,"Missing a message can result in missing an edge that would connect two\nindependent components of a graph. Therefore, the general opinion in Memgraph is\nthat missing some information is a bigger problem in graphs databases than\nhaving duplicated information, so Memgraph uses ",(0,r.kt)("strong",{parentName:"p"},"at least once")," semantics,\ni.e., the queries returned by the transformations are first executed and\ncommitted to the database for every batch of messages, and only then is the\nmessage offset committed to the Kafka cluster."),(0,r.kt)("p",null,"However, even though Memgraph cannot guarantee ",(0,r.kt)("strong",{parentName:"p"},"exactly once")," semantics, it\ntries to minimize the possibility of processing messages multiple times. This\nmeans committing the message offsets to the Kafka cluster happens right after\nthe transaction is committed to the database."),(0,r.kt)("h2",{id:"configuring-stream-transactions"},"Configuring stream transactions"),(0,r.kt)("p",null,"A stream can fail for various reasons. One important type of failure is when a\ntransaction (in which the returned queries of the transformation are executed)\nfails to commit because of another conflicting transaction. This is a side\neffect of ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/transactions#isolation-levels"},"isolation levels")," and can be\nremedied by the following Memgraph flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--stream-transaction-conflict-retries=TIMES_TO_RETRY\n")),(0,r.kt)("p",null,"By default, Memgraph will always try to execute a transaction once. However, for\nstreams, if Memgraph fails because of transaction conflicts, it will retry to\nexecute the transaction again for up to ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMES_TO_RETRY")," times (default value is\n30)."),(0,r.kt)("p",null,"Moreover, the interval of retries is also important and can be configured with\nthe following Memgraph flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--stream-transaction-retry-interval=INTERVAL_TIME\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL_TIME")," is measured in ",(0,r.kt)("inlineCode",{parentName:"p"},"milliseconds")," and the default value is\n",(0,r.kt)("inlineCode",{parentName:"p"},"500ms"),"."),(0,r.kt)("h2",{id:"setting-a-stream-offset"},"Setting a stream offset"),(0,r.kt)("p",null,"When using a Kafka stream, you can manually set the offset of the next consumed\nmessage with a call to the query procedure ",(0,r.kt)("inlineCode",{parentName:"p"},"mg.kafka_set_stream_offset"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.kafka_set_stream_offset(stream_name, offset)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"stream_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Name of the stream to set the offset for"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"},'"my_stream"'),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"offset"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Offset number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An offset of ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")," denotes the start of the stream, i.e., the beginning offset\navailable for the given topic/partition."),(0,r.kt)("li",{parentName:"ul"},"An offset of ",(0,r.kt)("inlineCode",{parentName:"li"},"-2")," denotes the end of the stream, i.e., for each\ntopic/partition, its logical end such that only the next produced message will\nbe consumed.")),(0,r.kt)("p",null,"Stream can consume messages from multiple topics with multiple partitions.\nTherefore, when setting the offsets to an arbitrary number be aware that setting\nthe offset of a stream internally sets all of the associated offsets of that\nstream (topics/partitions) to that value."))}c.isMDXComponent=!0}}]);