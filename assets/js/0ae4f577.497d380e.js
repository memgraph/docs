"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97962],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,g=d["".concat(m,".").concat(u)]||d[u]||c[u]||i;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74891:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=["components"],o={id:"overview",title:"Streams",sidebar_label:"Streams overview",slug:"/reference-guide/streams"},m=void 0,l={unversionedId:"reference-guide/streams/overview",id:"version-2.3.0/reference-guide/streams/overview",title:"Streams",description:"Memgraph can connect to existing stream sources. To use streams, a user must:",source:"@site/memgraph_versioned_docs/version-2.3.0/reference-guide/streams/overview.md",sourceDirName:"reference-guide/streams",slug:"/reference-guide/streams",permalink:"/docs/memgraph/reference-guide/streams",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.0/reference-guide/streams/overview.md",tags:[],version:"2.3.0",frontMatter:{id:"overview",title:"Streams",sidebar_label:"Streams overview",slug:"/reference-guide/streams"},sidebar:"memgraph",previous:{title:"Server stats",permalink:"/docs/memgraph/reference-guide/server-stats"},next:{title:"Transformation modules overview",permalink:"/docs/memgraph/reference-guide/streams/transformation-modules"}},p={},c=[{value:"Create a stream",id:"create-a-stream",level:2},{value:"Kafka",id:"kafka",level:3},{value:"Pulsar",id:"pulsar",level:3},{value:"Delete a stream",id:"delete-a-stream",level:2},{value:"Start a stream",id:"start-a-stream",level:2},{value:"Stop a stream",id:"stop-a-stream",level:2},{value:"Show streams",id:"show-streams",level:2},{value:"Check stream",id:"check-stream",level:2},{value:"Get stream information",id:"get-stream-information",level:2},{value:"Kafka producer delivery semantics",id:"kafka-producer-delivery-semantics",level:2},{value:"Configuring stream transactions",id:"configuring-stream-transactions",level:2},{value:"Setting a stream offset",id:"setting-a-stream-offset",level:2}],d={toc:c};function u(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Memgraph can connect to existing stream sources. To use streams, a user must:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/streams/transformation-modules"},"Create a transformation\nmodule")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/reference-guide/query-modules/load-call-query-modules"},"Load the transformation\nmodule")," into\nMemgraph"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-stream"},"Create the stream")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE <streaming platform> STREAM")," query and optionally ",(0,i.kt)("a",{parentName:"li",href:"#setting-a-stream-offset"},"set its offset")," with\n",(0,i.kt)("inlineCode",{parentName:"li"},"CALL mg.kafka_set_stream_offset(stream_name, offset)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#start-a-stream"},"Start the stream")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"START STREAM")," query")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check out the ",(0,i.kt)("strong",{parentName:"p"},"example-streaming-app")," on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub")," to see a sample\nMemgraph-Kafka application."))),(0,i.kt)("h2",{id:"create-a-stream"},"Create a stream"),(0,i.kt)("p",null,"The syntax for creating a stream depends on the type of the source because each\nspecific type supports a different set of configuration options."),(0,i.kt)("p",null,"There is no strict order for specifying the configuration options."),(0,i.kt)("h3",{id:"kafka"},"Kafka"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE KAFKA STREAM <stream name>\n  TOPICS <topic1> [, <topic2>, ...]\n  TRANSFORM <transform procedure>\n  [CONSUMER_GROUP <consumer group>]\n  [BATCH_INTERVAL <batch interval duration>]\n  [BATCH_SIZE <batch size>]\n  [BOOTSTRAP_SERVERS <bootstrap servers>]\n  [CONFIGS { <key1>: <value1> [, <key2>: <value2>, ...]}]\n  [CREDENTIALS { <key1>: <value1> [, <key2>: <value2>, ...]}];\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"stream name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the stream in Memgraph"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_stream"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the topic in Kafka"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the transformation file followed by a procedure name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_transformation.my_procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"consumer group"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the consumer group in Memgraph"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_group"),(0,i.kt)("td",{parentName:"tr",align:"center"},"mg_consumer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch interval duration"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum waiting time in milliseconds for consuming messages before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9999"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch size"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum number of messages to wait for before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"99"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"bootstrap servers"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Comma-separated list of bootstrap servers"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"localhost:9092"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"configs"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String key-value pairs of configuration options for the Kafka consumer"),(0,i.kt)("td",{parentName:"tr",align:"center"},"map with string key-value pairs"),(0,i.kt)("td",{parentName:"tr",align:"center"},'{"sasl.username": "michael.scott"}'),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"credentials"),(0,i.kt)("td",{parentName:"tr",align:"center"},"String key-value pairs of configuration options for the Kafka consumer, but their value aren't shown in the Kafka specific stream information"),(0,i.kt)("td",{parentName:"tr",align:"center"},"map with string key-value pairs"),(0,i.kt)("td",{parentName:"tr",align:"center"},'{"sasl.password": "password"}'),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The credentials are stored on the disk without any encryption, which means\neverybody who has access to the data directory of Memgraph is able to get the\ncredentials."))),(0,i.kt)("p",null,"To check the list of possible configuration options and their values, please\ncheck the documentation of\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/v1.7.0/CONFIGURATION.md"},"librdkafka"),"\nlibrary which is used in Memgraph. At the time of writing this documentation\nMemgraph uses version 1.7.0 of librdkafka."),(0,i.kt)("h3",{id:"pulsar"},"Pulsar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE PULSAR STREAM <stream name>\n  TOPICS <topic1> [, <topic2>, ...]\n  TRANSFORM <transform procedure>\n  [BATCH_INTERVAL <batch interval duration>]\n  [BATCH_SIZE <batch size>]\n  [SERVICE_URL <service url>];\n\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"stream name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the stream in Memgraph"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_stream"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the topic in Pulsar"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the transformation file followed by a procedure name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_transformation.my_procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch interval duration"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum waiting time in milliseconds for consuming messages before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9999"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch size"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum number of messages to wait for before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"99"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"service url"),(0,i.kt)("td",{parentName:"tr",align:"center"},"URL to the running Pulsar cluster"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"127.0.0.1:6650"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,i.kt)("p",null,"The transformation procedure is called if either the ",(0,i.kt)("inlineCode",{parentName:"p"},"BATCH_INTERVAL")," or the\n",(0,i.kt)("inlineCode",{parentName:"p"},"BATCH_SIZE")," is reached, and there is at least one received message."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BATCH_INTERVAL")," starts when the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the stream is started"),(0,i.kt)("li",{parentName:"ul"},"the processing of the previous batch is completed"),(0,i.kt)("li",{parentName:"ul"},"the previous batch interval ended without receiving any messages")),(0,i.kt)("p",null,"The user who executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," query is the owner of the stream."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Memgraph Community")," doesn't support authentication and authorization, so the\nowner is always ",(0,i.kt)("inlineCode",{parentName:"p"},"Null"),", and the privileges are not checked."),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"Memgraph Enterprise"),", owner privileges are checked upon executing the\nqueries returned from the transformation procedures. If the owner doesn't have\nthe required privileges, the execution of the queries will fail. Find more\ninformation about how the owner affects the stream in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/security#owners"},"reference\nguide"),"."),(0,i.kt)("h2",{id:"delete-a-stream"},"Delete a stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP STREAM <stream name>;\n")),(0,i.kt)("p",null,"Drops a stream with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>"),"."),(0,i.kt)("h2",{id:"start-a-stream"},"Start a stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM <stream name>;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"START ALL STREAMS;\n")),(0,i.kt)("p",null,"Starts a specific stream or all streams."),(0,i.kt)("p",null,"When a stream is started, it resumes ingesting data from the last committed\noffset. If there is no committed offset for the consumer group, then the largest\noffset will be used. Therefore, only the new messages will be consumed."),(0,i.kt)("h2",{id:"stop-a-stream"},"Stop a stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP STREAM <stream name>;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP ALL STREAMS;\n")),(0,i.kt)("p",null,"Stops a specific stream or all streams."),(0,i.kt)("h2",{id:"show-streams"},"Show streams"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,i.kt)("p",null,"Shows a list of existing streams with the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stream name"),(0,i.kt)("li",{parentName:"ul"},"stream type"),(0,i.kt)("li",{parentName:"ul"},"batch interval"),(0,i.kt)("li",{parentName:"ul"},"batch size"),(0,i.kt)("li",{parentName:"ul"},"transformation procedure name"),(0,i.kt)("li",{parentName:"ul"},"the owner of the streams"),(0,i.kt)("li",{parentName:"ul"},"whether the stream is running or not")),(0,i.kt)("h2",{id:"check-stream"},"Check stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>];\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," clause does a dry-run on the stream with name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>"),"\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," number of batches and returns the result of the transformation,\nthat is, the queries and parameters that would be executed in a normal run. If\n",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," number of batches are not processed within the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMEOUT"),",\nprobably because not enough messages were received, an exception is thrown."),(0,i.kt)("p",null,"The default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," is 1. ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMEOUT")," is measured in milliseconds, and\nits default value is 30000."),(0,i.kt)("h2",{id:"get-stream-information"},"Get stream information"),(0,i.kt)("p",null,"To get more information about a specific stream, use the following queries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.kafka_stream_info("stream_name") YIELD *;\n')),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL mg.pulsar_stream_info("stream_name") YIELD *;\n')),(0,i.kt)("p",null,"This procedure will return information about the bootstrap server, set\nconfiguration, consumer group, credentials and topics regarding the Kafka\nstream."),(0,i.kt)("p",null,"In the case of a Pulsar stream, it will return service URL and topics."),(0,i.kt)("h2",{id:"kafka-producer-delivery-semantics"},"Kafka producer delivery semantics"),(0,i.kt)("p",null,"In stream processing, it is important to consider how failures are handled. When\nconnecting an external application such as Memgraph to a Kafka stream, there are\ntwo possible ways to handle failures during message processing:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Every message is processed ",(0,i.kt)("strong",{parentName:"li"},"at least once"),": the message offsets are\ncommitted to the Kafka cluster after the processing is done. This means if\nthe committing fails, the messages can get processed multiple times."),(0,i.kt)("li",{parentName:"ol"},"Every message is processed ",(0,i.kt)("strong",{parentName:"li"},"at most once"),": the message offsets are\ncommitted to the Kafka cluster right after they are received before the\nprocessing is started. This means if the processing fails, the same messages\nwon't be processed again.")),(0,i.kt)("p",null,"Missing a message can result in missing an edge that would connect two\nindependent components of a graph. Therefore, we think that missing some\ninformation is a bigger problem in graphs databases than having duplicated\ninformation, so we implemented our streams using the ",(0,i.kt)("strong",{parentName:"p"},"at least once"),"\nsemantics, i.e. the queries returned by the transformations are first executed\nand committed to the database for every batch of messages and only then is the\nmessage offset committed to the Kafka cluster."),(0,i.kt)("p",null,"However, even though we cannot guarantee ",(0,i.kt)("strong",{parentName:"p"},"exactly once")," semantics, we tried to\nminimize the possibility of processing messages multiple times. This means\ncommitting the message offsets to the Kafka cluster happens right after the\ntransaction is committed to the database."),(0,i.kt)("h2",{id:"configuring-stream-transactions"},"Configuring stream transactions"),(0,i.kt)("p",null,"A stream can fail for various reasons. One important type of failure is when a\ntransaction (in which the returned queries of the transformation are executed)\nfails to commit because of another conflicting transaction. This is a side\neffect of ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/isolation-levels"},"isolation levels")," and can be\nremedied by the following Memgraph flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--stream-transaction-conflict-retries=TIMES_TO_RETRY\n")),(0,i.kt)("p",null,"By default, Memgraph will always try to execute a transaction once. However, for\nstreams, if Memgraph fails because of transaction conflicts it will retry to\nexecute the transaction again for up to ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMES_TO_RETRY")," times (default value is\n30)."),(0,i.kt)("p",null,"Moreover, the interval of retries is also important and can be configured with\nthe following Memgraph flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--stream-transaction-retry-interval=INTERVAL_TIME\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"INTERVAL_TIME")," is measured in ",(0,i.kt)("inlineCode",{parentName:"p"},"milliseconds")," and its default value is\n",(0,i.kt)("inlineCode",{parentName:"p"},"500ms"),"."),(0,i.kt)("h2",{id:"setting-a-stream-offset"},"Setting a stream offset"),(0,i.kt)("p",null,"When using a Kafka stream, you can manually set the offset of the next consumed\nmessage with a call to the query procedure ",(0,i.kt)("inlineCode",{parentName:"p"},"mg.kafka_set_stream_offset"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.kafka_set_stream_offset(stream_name, offset)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Option"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"stream_name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the stream to set the offset for"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"my_stream"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"offset"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Offset number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An offset of ",(0,i.kt)("inlineCode",{parentName:"li"},"-1")," denotes the start of the stream, i.e., the beginning offset\navailable for the given topic/partition."),(0,i.kt)("li",{parentName:"ul"},"An offset of ",(0,i.kt)("inlineCode",{parentName:"li"},"-2")," denotes the end of the stream, i.e., for each\ntopic/partition, its logical end such that only the next produced message will\nbe consumed.")),(0,i.kt)("p",null,"Keep in mind that a stream can consume from multiple topics with multiple\npartitions. Therefore, when setting the offsets to an arbitrary number be aware\nthat setting the offset of a stream internally sets all of the associated\noffsets of that stream (topics/partitions) to that value."))}u.isMDXComponent=!0}}]);