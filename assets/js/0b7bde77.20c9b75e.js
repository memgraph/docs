"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},26921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={id:"pulsar-streams",title:"How to manage Pulsar streams",sidebar_label:"Manage Pulsar streams"},o=void 0,i={unversionedId:"how-to-guides/streams/pulsar/pulsar-streams",id:"version-2.2.0/how-to-guides/streams/pulsar/pulsar-streams",title:"How to manage Pulsar streams",description:"If you are not familiar with Pulsar, then please check out their",source:"@site/memgraph_versioned_docs/version-2.2.0/how-to-guides/streams/pulsar/pulsar-streams.md",sourceDirName:"how-to-guides/streams/pulsar",slug:"/how-to-guides/streams/pulsar/pulsar-streams",permalink:"/docs/memgraph/2.2.0/how-to-guides/streams/pulsar/pulsar-streams",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/how-to-guides/streams/pulsar/pulsar-streams.md",tags:[],version:"2.2.0",frontMatter:{id:"pulsar-streams",title:"How to manage Pulsar streams",sidebar_label:"Manage Pulsar streams"},sidebar:"memgraph",previous:{title:"Implement transformation modules",permalink:"/docs/memgraph/2.2.0/how-to-guides/streams/kafka/implement-transformation-module"},next:{title:"Implement transformation modules",permalink:"/docs/memgraph/2.2.0/how-to-guides/streams/pulsar/implement-transformation-module"}},l={},m=[{value:"Configuring Memgraph",id:"configuring-memgraph",level:2},{value:"Creating the stream",id:"creating-the-stream",level:2},{value:"Check if the stream is working",id:"check-if-the-stream-is-working",level:2},{value:"Start the stream",id:"start-the-stream",level:2},{value:"Acknowledging messages",id:"acknowledging-messages",level:2}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you are not familiar with Pulsar, then please check out their\n",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org"},"site")," to get a better understanding. In the\ndocumentation, we assume that a Pulsar cluster is available on the 6650 port of\nthe local machine (",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:6650"),"). Please adjust your setup accordingly."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For detailed technical information on streaming support, check out the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/reference-guide/streams"},"reference guide"),".")),(0,r.kt)("h2",{id:"configuring-memgraph"},"Configuring Memgraph"),(0,r.kt)("p",null,"You need to provide a service URL so Memgraph can locate the Pulsar cluster. The\nservice URL can be set using the configuration flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--pulsar-service-url"),"."),(0,r.kt)("h2",{id:"creating-the-stream"},"Creating the stream"),(0,r.kt)("p",null,"The very first step is to make sure at least one transformation module is loaded\ninto Memgraph. If you are not sure how to define them, check out the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/how-to-guides/streams/pulsar/implement-transformation-module"},"transformation module\nguide"),".\nWe will use ",(0,r.kt)("inlineCode",{parentName:"p"},"transformation.my_pulsar_transformation")," from that example, but we\nare going to alias it as ",(0,r.kt)("inlineCode",{parentName:"p"},"my.pulsar_transform")," to make the size of result tables\nslimmer. For the topic name, we are going to use ",(0,r.kt)("inlineCode",{parentName:"p"},"topic1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE PULSAR STREAM myStream\nTOPICS topic1\nTRANSFORM my.pulsar_transform;\n")),(0,r.kt)("p",null,"Check the created stream:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,r.kt)("p",null,"The result should be similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-----------------------+-----------------------+----------------------+-----------------------+-----------------------+-----------------------+-----------------------+\n| name                  | type                  | batch_interval       | batch_size            | transformation_name   | owner                 | is running            |\n+-----------------------+-----------------------+----------------------+-----------------------+-----------------------+-----------------------+-----------------------+\n| "myStream"            | "pulsar"              | 100                  | 1000                  | "my.pulsar_transform" | Null                  | false                 |\n+-----------------------+-----------------------+----------------------+-----------------------+-----------------------+-----------------------+-----------------------+\n')),(0,r.kt)("p",null,"The result contains the most important information about the existing streams,\ne.g., its name, topics it is subscribed to, etc."),(0,r.kt)("h2",{id:"check-if-the-stream-is-working"},"Check if the stream is working"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," only works for single non-partitioned topic consumers. The next\nexamples will fail if your Pulsar stream source consumes multiple topics or from\na partitioned topic.")),(0,r.kt)("p",null,"Maybe at first, you don't want to run the stream in the background but see the\nactual result of the transformation. This can be handy when implementing a\ntransformation. To achieve that, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query. This query\nwill consume the message from the last acknowledged message but won't\nacknowledge the next message. That means you are free to play around with it,\nand there won't be any permanent effects. For a freshly created stream, there is\nprobably no acknowledged message, so the ",(0,r.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," query will wait for new\nmessages. By default, the query will wait ",(0,r.kt)("inlineCode",{parentName:"p"},"30000")," milliseconds ( ",(0,r.kt)("inlineCode",{parentName:"p"},"30")," seconds)\nand after that, it will throw a timeout exception. To give us some more time,\nuse a larger timeout, e.g.: ",(0,r.kt)("inlineCode",{parentName:"p"},"60000")," milliseconds ( ",(0,r.kt)("inlineCode",{parentName:"p"},"60")," seconds):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream TIMEOUT 60000;\n")),(0,r.kt)("p",null,"If you started the query, let's send some messages to the topic. You should see\na similar output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'+-----------------------------------------------------------------------------------------------------------------+\n| query                                                         | parameters                                      |\n+-----------------------------------------------------------------------------------------------------------------+\n| "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"       | {payload: "Example message 1", topic: "topic1"} |\n+--------------------------------------------------------------------------------------+---------------------------\n')),(0,r.kt)("p",null,"If you want to consume more batches, you can also increase the batch limit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;\n")),(0,r.kt)("p",null,"As a result, you should see multiple messages (probably 3) in the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'+---------------------------------------------------------------+--------------------------------------------------+\n| query                                                         | parameters                                       |\n+---------------------------------------------------------------+--------------------------------------------------+\n| "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"       | {payload: "Memgraph <3 Pulsar", topic: "topic1"} |\n| "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"       | {payload: "Example message 2", topic: "topic1"}  |\n| "CREATE (n:MESSAGE {payload: $payload, topic: $topic})"       | {payload: "Example message 3", topic: "topic1"}  |\n+---------------------------------------------------------------+--------------------------------------------------+\n')),(0,r.kt)("h2",{id:"start-the-stream"},"Start the stream"),(0,r.kt)("p",null,"As we just demonstrated that the stream is working, we can start to ingest data\ninto the database by starting the stream and sending some messages to the topic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"START STREAM myStream;\n")),(0,r.kt)("p",null,"After sending a few messages to the topic, the created vertices can be checked\nby executing ",(0,r.kt)("inlineCode",{parentName:"p"},"MATCH (n: MESSAGE) RETURN n"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'+----------------------------------------------------------+\n| n                                                        |\n+----------------------------------------------------------+\n| (:MESSAGE {payload: "first message", topic: "topic1"})   |\n| (:MESSAGE {payload: "another message", topic: "topic1"}) |\n| (:MESSAGE {payload: "it is working!", topic: "topic1"})  |\n+----------------------------------------------------------+\n')),(0,r.kt)("h2",{id:"acknowledging-messages"},"Acknowledging messages"),(0,r.kt)("p",null,"After each message is processed, the stream will acknowledge them. If the stream\nis stopped using the ",(0,r.kt)("inlineCode",{parentName:"p"},"STOP STREAM myStream")," query (or by shutting Memgraph\ndown), next time the stream is started, it will continue processing the message\nfrom the last acknowledged message."))}u.isMDXComponent=!0}}]);