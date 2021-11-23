"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51847],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(m,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95554:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={id:"overview",title:"Streams",sidebar_label:"Streams overview",slug:"/reference-guide/streams"},m=void 0,l={unversionedId:"reference-guide/streams/overview",id:"reference-guide/streams/overview",isDocsHomePage:!1,title:"Streams",description:"Memgraph can connect to existing stream sources. To use streams, a user must:",source:"@site/docs/reference-guide/streams/overview.md",sourceDirName:"reference-guide/streams",slug:"/reference-guide/streams",permalink:"/docs/memgraph/next/reference-guide/streams",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/streams/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Streams",sidebar_label:"Streams overview",slug:"/reference-guide/streams"},sidebar:"memgraph",previous:{title:"Runtime settings",permalink:"/docs/memgraph/next/reference-guide/runtime-settings"},next:{title:"Transformation modules overview",permalink:"/docs/memgraph/next/reference-guide/streams/transformation-modules"}},p=[{value:"Creating a stream",id:"creating-a-stream",children:[{value:"Kafka",id:"kafka",children:[],level:3},{value:"Pulsar",id:"pulsar",children:[],level:3}],level:2},{value:"Deleting a stream",id:"deleting-a-stream",children:[],level:2},{value:"Start a stream",id:"start-a-stream",children:[],level:2},{value:"Stop a stream",id:"stop-a-stream",children:[],level:2},{value:"Show",id:"show",children:[],level:2},{value:"Check stream",id:"check-stream",children:[],level:2},{value:"Additional details",id:"additional-details",children:[{value:"Kafka and at least once semantics",id:"kafka-and-at-least-once-semantics",children:[],level:3}],level:2},{value:"Configuring stream transactions",id:"configuring-stream-transactions",children:[],level:2},{value:"Setting a stream offset",id:"setting-a-stream-offset",children:[],level:2}],c={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Memgraph can connect to existing stream sources. To use streams, a user must:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/next/reference-guide/streams/transformation-modules"},(0,i.kt)("strong",{parentName:"a"},"Create a transformation\nmodule"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/next/reference-guide/configuration"},"Configure Memgraph")," to connect to, e.g.\nKafka, by providing the appropriate flag\n",(0,i.kt)("inlineCode",{parentName:"li"},"--kafka-bootstrap-servers=localhost:9092")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-stream"},"Create the stream")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE STREAM")," query and optionally\n",(0,i.kt)("a",{parentName:"li",href:"#setting-a-stream-offset"},"set its offset")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"CALL mg.kafka_set_stream_offset(stream_name, offset)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#start-a-stream"},"Start the stream")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"START STREAM")," query")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Check out the ",(0,i.kt)("strong",{parentName:"p"},"example-streaming-app")," on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub")," to see a sample\nMemgraph-Kafka application."))),(0,i.kt)("h2",{id:"creating-a-stream"},"Creating a stream"),(0,i.kt)("p",null,"The syntax for creating a stream depends on the type of the source because each\nspecific type supports a different set of configuration options."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is no strict order for specifying the configuration options."))),(0,i.kt)("h3",{id:"kafka"},"Kafka"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE KAFKA STREAM <stream name>\n  TOPICS <topic1> [, <topic2>, ...]\n  TRANSFORM <transform procedure>\n  [CONSUMER_GROUP <consumer group>]\n  [BATCH_INTERVAL <batch interval length>]\n  [BATCH_SIZE <batch size>]\n  [BOOTSTRAP_SERVERS <bootstrap servers>];\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"option"),(0,i.kt)("th",{parentName:"tr",align:"center"},"description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"example"),(0,i.kt)("th",{parentName:"tr",align:"center"},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"stream name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the stream in Memgraph"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_stream"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the topic in Kafka"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the transformation file followed by a function name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_transformation.my_transform"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"consumer group"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the consumer group in Memgraph"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_group"),(0,i.kt)("td",{parentName:"tr",align:"center"},"mg_consumer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch interval duration"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum wait time in milliseconds for consuming messages before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9999"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch size"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum number of messages to wait for before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"99"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"bootstrap servers"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Comma-separated list of bootstrap servers"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"localhost:9092"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,i.kt)("h3",{id:"pulsar"},"Pulsar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE PULSAR STREAM <stream name>\n  TOPICS <topic1> [, <topic2>, ...]\n  TRANSFORM <transform procedure>\n  [BATCH_INTERVAL <batch interval length>]\n  [BATCH_SIZE <batch size>]\n  [SERVICE_URL <service url>];\n\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"option"),(0,i.kt)("th",{parentName:"tr",align:"center"},"description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"example"),(0,i.kt)("th",{parentName:"tr",align:"center"},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"stream name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the stream in Memgraph"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_stream"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the topic in Pulsar"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the transformation file followed by a function name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_transformation.my_transform"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch interval duration"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum wait time in milliseconds for consuming messages before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9999"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch size"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum number of messages to wait for before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"99"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"service url"),(0,i.kt)("td",{parentName:"tr",align:"center"},"URL to the running Pulsar cluster"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"127.0.0.1:6650"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,i.kt)("p",null,"The transformation procedure is called if either the ",(0,i.kt)("inlineCode",{parentName:"p"},"BATCH_INTERVAL")," or the\n",(0,i.kt)("inlineCode",{parentName:"p"},"BATCH_SIZE")," is reached, and there is at least one received message."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BATCH_INTERVAL")," starts when the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the stream is started"),(0,i.kt)("li",{parentName:"ul"},"the processing of the previous batch is completed"),(0,i.kt)("li",{parentName:"ul"},"the previous batch interval ended without receiving any messages")),(0,i.kt)("p",null,"The user who executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," query is going to be the owner of the stream.\nAuthentication and authorization are not supported in Memgraph Community, thus\nthe owner will always be ",(0,i.kt)("inlineCode",{parentName:"p"},"Null"),", and the privileges are not checked in Memgraph\nCommunity. In Memgraph Enterprise, the privileges of the owner are used when\nexecuting the queries returned from a transformation. In other words, the\nexecution of the queries will fail if  the owner doesn't have the required\nprivileges. More information about how the owner affects the stream can be found\nin the ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/security#owners"},"reference guide"),"."),(0,i.kt)("h2",{id:"deleting-a-stream"},"Deleting a stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP STREAM <stream name>;\n")),(0,i.kt)("p",null,"Drops a stream with name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>"),"."),(0,i.kt)("h2",{id:"start-a-stream"},"Start a stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM <stream name>;\nSTART ALL STREAMS;\n")),(0,i.kt)("p",null,"Starts a stream (or all streams) with name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>"),"."),(0,i.kt)("p",null,"When a stream is started, it should resume from the last committed offset. If\nthere is no committed offset for the consumer group, then the largest offset\nwill be used. Therefore only the new messages will be consumed."),(0,i.kt)("h2",{id:"stop-a-stream"},"Stop a stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP STREAM <stream name>;\nSTOP ALL STREAMS;\n")),(0,i.kt)("p",null,"Stops a stream (or all streams) with name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>"),"."),(0,i.kt)("h2",{id:"show"},"Show"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,i.kt)("p",null,"Shows a list of existing streams with the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stream name"),(0,i.kt)("li",{parentName:"ul"},"stream type"),(0,i.kt)("li",{parentName:"ul"},"batch interval"),(0,i.kt)("li",{parentName:"ul"},"batch size"),(0,i.kt)("li",{parentName:"ul"},"transformation procedure name"),(0,i.kt)("li",{parentName:"ul"},"the owner of the streams"),(0,i.kt)("li",{parentName:"ul"},"whether the stream is running")),(0,i.kt)("h2",{id:"check-stream"},"Check stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>] ;\n")),(0,i.kt)("p",null,"Does a dry-run on stream with name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," number of\nbatches and returns the result of the transformation: the queries and their\nparameters that would be executed in a normal run. If ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," is unspecified,\nits default value is 1. After ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," batches are processed, the\ntransformation result is returned. If ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," number of batches are not\nprocessed within the specified timeout, then an exception is thrown. This might\nbe caused by not receiving enough messages. ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMEOUT")," is measured in\nmilliseconds, and it's defaulted to 30000."),(0,i.kt)("p",null,"Checking a stream won't commit any offsets."),(0,i.kt)("h2",{id:"additional-details"},"Additional details"),(0,i.kt)("h3",{id:"kafka-and-at-least-once-semantics"},"Kafka and at least once semantics"),(0,i.kt)("p",null,"In stream processing, it is important to have some guarantees about how failures\nare handled. When connecting an external application such as Memgraph to a Kafka\nstream, there are two possible ways to handle failures during message\nprocessing:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Every message is processed ",(0,i.kt)("strong",{parentName:"li"},"at least once"),": the message offsets are\ncommitted to the Kafka cluster after the processing is done. This means if\nthe committing fails, then the messages can get processed multiple times."),(0,i.kt)("li",{parentName:"ol"},"Every message is processed ",(0,i.kt)("strong",{parentName:"li"},"at most once"),": the message offsets are\ncommitted to the Kafka cluster right after they are received before the\nprocessing is started. This means if the processing fails, then the same\nmessages won't be processed again.")),(0,i.kt)("p",null,"Missing a message can result in missing an edge that would connect two\nindependent components of the graph. Therefore, we think that missing some\ninformation is a bigger problem for graphs than having some information\nduplicated, so we implemented our streams using the ",(0,i.kt)("strong",{parentName:"p"},"at least once")," semantics,\ni.e. for every batch of messages the queries returned by the transformations are\nexecuted and committed to the database before committing the message offset to\nthe Kafka cluster. However, even though we cannot guarantee ",(0,i.kt)("strong",{parentName:"p"},"exactly once"),"\nsemantics, we tried to minimize the possibility of processing messages multiple\ntimes. This means committing the message offsets to the Kafka cluster happens\nright after the transaction is committed to the database."),(0,i.kt)("h2",{id:"configuring-stream-transactions"},"Configuring stream transactions"),(0,i.kt)("p",null,"A stream can fail for various reasons. One of the failures of interest is when a transaction\n(in which the returned queries of the transformation are executed) fails to commit because of another conflicting\ntransaction. This is a side effect of ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/isolation-levels"},"isolation levels")," and can\nbe configured by the following Memgraph flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--stream-transaction-conflict-retries=TIMES_TO_RETRY\n")),(0,i.kt)("p",null,"By default, Memgraph will always try to execute a transaction once. However, for streams, if Memgraph\nfails because of transaction conflicts it will retry to execute the transaction again for up to ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMES_TO_RETRY")," times\nand its default value is 30."),(0,i.kt)("p",null,"Moreover, the interval of retries is also important and can be configured by"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--stream-transaction-retry-interval=INTERVAL_TIME\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"INTERVAL_TIME")," is measured in ",(0,i.kt)("inlineCode",{parentName:"p"},"milliseconds")," and its default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"500ms"),"."),(0,i.kt)("h2",{id:"setting-a-stream-offset"},"Setting a stream offset"),(0,i.kt)("p",null,"For Kafka streams, users can manually set the offset of the next consumed\nmessage with a call to the query procedure ",(0,i.kt)("inlineCode",{parentName:"p"},"mg.kafka_set_stream_offset")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.kafka_set_stream_offset(stream_name, offset)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"option"),(0,i.kt)("th",{parentName:"tr",align:"center"},"description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"example"),(0,i.kt)("th",{parentName:"tr",align:"center"},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"stream name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the stream to set the offset"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"my_stream"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"offset"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Offset number to set"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An offset of ",(0,i.kt)("inlineCode",{parentName:"li"},"-1")," denotes the start of the stream, i.e., the beginning offset\navailable for the given topic/partition."),(0,i.kt)("li",{parentName:"ul"},"An offset of ",(0,i.kt)("inlineCode",{parentName:"li"},"-2")," denotes the end of the stream, i.e., for each\ntopic/partition, its logical end such that only the next produced message will\nbe consumed.")),(0,i.kt)("p",null,"Note, that a stream can consume from multiple topics each of them having\nmultiple partitions. Therefore, when setting the offsets to an arbitrary number\nthe user must be cautious that setting the offset of a stream internally sets\nall of the associated offsets of that stream (topics/partitions) to that value."))}d.isMDXComponent=!0}}]);