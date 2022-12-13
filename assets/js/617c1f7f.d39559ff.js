"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,h=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:n,s[1]=m;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={id:"manage-streams",title:"How to manage data streams with queries",sidebar_label:"Manage data streams with queries"},s=void 0,m={unversionedId:"how-to-guides/streams/manage-streams",id:"version-2.4.2/how-to-guides/streams/manage-streams",title:"How to manage data streams with queries",description:"The following page instructs how to manage streams using queries. Streams can",source:"@site/memgraph_versioned_docs/version-2.4.2/how-to-guides/streams/manage-streams.md",sourceDirName:"how-to-guides/streams",slug:"/how-to-guides/streams/manage-streams",permalink:"/docs/memgraph/2.4.2/how-to-guides/streams/manage-streams",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.2/how-to-guides/streams/manage-streams.md",tags:[],version:"2.4.2",frontMatter:{id:"manage-streams",title:"How to manage data streams with queries",sidebar_label:"Manage data streams with queries"}},i={},l=[{value:"How to create and load a transformation module into Memgraph?",id:"how-to-create-and-load-a-transformation-module-into-memgraph",level:2},{value:"How to create a Kafka or Redpanda stream?",id:"how-to-create-a-kafka-or-redpanda-stream",level:2},{value:"How to create a Pulsar stream?",id:"how-to-create-a-pulsar-stream",level:2},{value:"How to get information about a stream?",id:"how-to-get-information-about-a-stream",level:2},{value:"How to check the transformed incoming data?",id:"how-to-check-the-transformed-incoming-data",level:2},{value:"How to start, stop or delete a stream?",id:"how-to-start-stop-or-delete-a-stream",level:2},{value:"How to change Kafka stream offset?",id:"how-to-change-kafka-stream-offset",level:2}],p={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The following page instructs how to manage streams using queries. Streams can\nalso be ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/how-to-guides/streams/manage-streams-lab"},"managed through the ",(0,n.kt)("strong",{parentName:"a"},"Stream")," section in the Memgraph\nLab"),". "),(0,n.kt)("p",null,"If you need a Kafka stream to play around with, we've provided some at ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/"},"Awesome\nData Stream"),"! "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/reference-guide/streams"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/tutorials/graph-stream-processing-with-kafka"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related -\nTutorial"}))),(0,n.kt)("h2",{id:"how-to-create-and-load-a-transformation-module-into-memgraph"},"How to create and load a transformation module into Memgraph?"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/reference-guide/streams/transformation-modules"},"transformation\nmodule")," is a set of\nuser-defined transformation procedures written in\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/reference-guide/streams/transformation-modules/api/c-api"},"C")," or\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/reference-guide/streams/transformation-modules/api/python-api"},"Python")," that\nact on data received from a streaming engine. Transformation procedures instruct\nMemgraph on how to transform the incoming messages to consume them correctly. "),(0,n.kt)("p",null,"To create a transformation module, you need to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/2.4.2/reference-guide/streams/transformation-modules#creating-a-transformation-module"},"Create a Python or a shared library file\n(module).")),(0,n.kt)("li",{parentName:"ol"},"Save the file into the Memgraph's ",(0,n.kt)("inlineCode",{parentName:"li"},"query_modules")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"internal_modules")," directory (default:\n",(0,n.kt)("inlineCode",{parentName:"li"},"/usr/lib/memgraph/query_modules")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/memgraph/internal_modules/"),")."),(0,n.kt)("li",{parentName:"ol"},"Load the file into Memgraph either on startup (automatically) or by running a\n",(0,n.kt)("inlineCode",{parentName:"li"},"CALL mg.load_all();")," query.")),(0,n.kt)("p",null,"If you are using Docker to run Memgraph, check ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},"how to transfer the file into the container"),". "),(0,n.kt)("p",null,"If you are using Memgraph Lab you can ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/reference-guide/streams/transformation-modules#creating-transformation-modules-within-memgraph-lab"},"create transformation module within the\napplication"),". "),(0,n.kt)("h2",{id:"how-to-create-a-kafka-or-redpanda-stream"},"How to create a Kafka or Redpanda stream?"),(0,n.kt)("p",null,"In order to create a stream with a query, first you need to ",(0,n.kt)("a",{parentName:"p",href:"#how-to-create-and-load-a-transformation-module-into-memgraph"},"load the\ntransformation module into\nMemgraph"),". The\nmost basic query for creating a stream is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE KAFKA STREAM streamName\nTOPICS topic1[, <topic2>, ...]\nTRANSFORM transModule.transProcedure\nBOOTSTRAP_SERVERS bootstrapServers;\n")),(0,n.kt)("p",null,"Additional options for creating a stream are explained in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/reference-guide/streams#kafka-and-redpanda"},"reference\nguide"),". "),(0,n.kt)("h2",{id:"how-to-create-a-pulsar-stream"},"How to create a Pulsar stream?"),(0,n.kt)("p",null,"In order to create a stream with a query, first you need to ",(0,n.kt)("a",{parentName:"p",href:"#how-to-create-and-load-a-transformation-module-into-memgraph"},"load the\ntransformation module into\nMemgraph"),". The\nmost basic query for creating a stream is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE PULSAR STREAM streamName\nTOPICS topic1[,topic2, ...]\nTRANSFORM transModule.transProcedure\nSERVICE_URL serviceURL;\n")),(0,n.kt)("p",null,"Additional options for creating a stream are explained in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/reference-guide/streams#pulsar"},"reference\nguide"),"."),(0,n.kt)("h2",{id:"how-to-get-information-about-a-stream"},"How to get information about a stream?"),(0,n.kt)("p",null,"You can get the basic stream information with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,n.kt)("h2",{id:"how-to-check-the-transformed-incoming-data"},"How to check the transformed incoming data?"),(0,n.kt)("p",null,"To see the results of the transformation module use the ",(0,n.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," clause.\nIt will consume the message from the last committed offset but won't commit the\noffsets. There is no committed offset coming from a newly created stream, so by\ndefault, the query will wait ",(0,n.kt)("inlineCode",{parentName:"p"},"30000")," milliseconds (",(0,n.kt)("inlineCode",{parentName:"p"},"30")," seconds) for new\nmessages and after that, it will throw a timeout exception. You can change the\ntimeout by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"TIMEOUT")," sub-clause and adding a custom time to the query. "),(0,n.kt)("p",null,"The following query will transform new messages that come from the stream within\n60 seconds:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream TIMEOUT 60000;\n")),(0,n.kt)("p",null,"To consume more batches, increase the ",(0,n.kt)("inlineCode",{parentName:"p"},"BATCH_LIMIT"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;\n")),(0,n.kt)("h2",{id:"how-to-start-stop-or-delete-a-stream"},"How to start, stop or delete a stream?"),(0,n.kt)("p",null,"To start a specific stream with name ",(0,n.kt)("inlineCode",{parentName:"p"},"<stream name>")," that will consume ",(0,n.kt)("inlineCode",{parentName:"p"},"<count>"),"\nnumber of batches for a maximum duration of ",(0,n.kt)("inlineCode",{parentName:"p"},"<milliseconds>")," milliseconds and\nthen stop:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>];\n")),(0,n.kt)("p",null,"To start a stream that will run for an infinite number of batches without a\ntimeout limit:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM streamName;\n")),(0,n.kt)("p",null,"To stop a stream:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP STREAM streamName;\n")),(0,n.kt)("p",null,"To delete a stream:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP STREAM streamName;\n")),(0,n.kt)("p",null,"For more options, ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/2.4.2/reference-guide/streams#start-a-stream"},"check the reference guide"),"."),(0,n.kt)("h2",{id:"how-to-change-kafka-stream-offset"},"How to change Kafka stream offset?"),(0,n.kt)("p",null,"Use the following query to change Kafka stream offset:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.kafka_set_stream_offset(streamName, offset)\n")),(0,n.kt)("p",null,"An offset of ",(0,n.kt)("inlineCode",{parentName:"p"},"-1")," denotes the beginning offset available for the given\ntopic/partition. "),(0,n.kt)("p",null,"An offset of ",(0,n.kt)("inlineCode",{parentName:"p"},"-2")," denotes the end of the stream and only the\nnext produced message will be consumed."))}c.isMDXComponent=!0}}]);