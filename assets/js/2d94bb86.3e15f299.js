"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46517],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,h=u["".concat(m,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85375:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={id:"overview",title:"Streams",sidebar_label:"Streams overview",slug:"/reference-guide/streams"},m=void 0,l={unversionedId:"reference-guide/streams/overview",id:"version-1.6.1/reference-guide/streams/overview",isDocsHomePage:!1,title:"Streams",description:"Memgraph can connect to existing Kafka streams. To use streams, a user must:",source:"@site/memgraph_versioned_docs/version-1.6.1/reference-guide/streams/overview.md",sourceDirName:"reference-guide/streams",slug:"/reference-guide/streams",permalink:"/docs/memgraph/1.6.1/reference-guide/streams",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.6.1/reference-guide/streams/overview.md",tags:[],version:"1.6.1",frontMatter:{id:"overview",title:"Streams",sidebar_label:"Streams overview",slug:"/reference-guide/streams"},sidebar:"version-1.6.1/memgraph",previous:{title:"Replication",permalink:"/docs/memgraph/1.6.1/reference-guide/replication"},next:{title:"Transformation modules overview",permalink:"/docs/memgraph/1.6.1/reference-guide/streams/transformation-modules"}},p=[{value:"Creating a stream",id:"creating-a-stream",children:[],level:2},{value:"Deleting a stream",id:"deleting-a-stream",children:[],level:2},{value:"Start a stream",id:"start-a-stream",children:[],level:2},{value:"Stop a stream",id:"stop-a-stream",children:[],level:2},{value:"Show",id:"show",children:[],level:2},{value:"Check stream",id:"check-stream",children:[],level:2},{value:"At least once semantics",id:"at-least-once-semantics",children:[],level:2}],c={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Memgraph can connect to existing Kafka streams. To use streams, a user must:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.1/reference-guide/streams/transformation-modules"},(0,i.kt)("strong",{parentName:"a"},"Create a transformation\nmodule"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/memgraph/1.6.1/reference-guide/configuration"},"Configure Memgraph")," to connect to, e.g.\nKafka, by providing the appropriate flag\n",(0,i.kt)("inlineCode",{parentName:"li"},"--kafka-bootstrap-servers=localhost:9092")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#creating-a-stream"},"Create the stream")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE STREAM")," query"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#start-a-stream"},"Start the stream")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"START STREAM")," query")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Check out the ",(0,i.kt)("strong",{parentName:"h5"},"example-streaming-app")," on")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/memgraph/example-streaming-app"},"GitHub")," to see a sample\nMemgraph-Kafka application."))),(0,i.kt)("h2",{id:"creating-a-stream"},"Creating a stream"),(0,i.kt)("p",null,"The general syntax for creating a stream is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE STREAM <stream name>\n  TOPICS <topic1> [, <topic2>, ...]\n  TRANSFORM <transform procedure>\n  [CONSUMER_GROUP <consumer group>]\n  [BATCH_INTERVAL <batch interval length>]\n  [BATCH_SIZE <batch size>];\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"option"),(0,i.kt)("th",{parentName:"tr",align:"center"},"description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"example"),(0,i.kt)("th",{parentName:"tr",align:"center"},"default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"stream name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the stream in Memgraph"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_stream"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the topic in Kafka"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_topic"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the transformation file followed by a function name"),(0,i.kt)("td",{parentName:"tr",align:"center"},"function"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_transformation.my_transform"),(0,i.kt)("td",{parentName:"tr",align:"center"},"/")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"consumer group"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Name of the consumer group in Memgraph"),(0,i.kt)("td",{parentName:"tr",align:"center"},"plain text"),(0,i.kt)("td",{parentName:"tr",align:"center"},"my_group"),(0,i.kt)("td",{parentName:"tr",align:"center"},"mg_consumer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch interval duration"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum wait time in milliseconds for consuming messages before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"9999"),(0,i.kt)("td",{parentName:"tr",align:"center"},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"batch size"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Maximum number of messages to wait for before calling the transform procedure"),(0,i.kt)("td",{parentName:"tr",align:"center"},"int"),(0,i.kt)("td",{parentName:"tr",align:"center"},"99"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1000")))),(0,i.kt)("p",null,"The transformation procedure is called if either the ",(0,i.kt)("inlineCode",{parentName:"p"},"BATCH_INTERVAL")," or the\n",(0,i.kt)("inlineCode",{parentName:"p"},"BATCH_SIZE")," is reached, and there is at least one received message."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"BATCH_INTERVAL")," starts when the:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the stream is started"),(0,i.kt)("li",{parentName:"ul"},"the processing of the previous batch is completed"),(0,i.kt)("li",{parentName:"ul"},"the previous batch interval ended without receiving any messages")),(0,i.kt)("p",null,"The user who executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," query is going to be the owner of the stream.\nAuthentication and authorization are not supported in Memgraph Community, thus\nthe owner will always be ",(0,i.kt)("inlineCode",{parentName:"p"},"Null"),", and the privileges are not checked in Memgraph\nCommunity. In Memgraph Enterprise, the privileges of the owner are used when\nexecuting the queries returned from a transformation. In other words, the\nexecution of the queries will fail if  the owner doesn't have the required\nprivileges. More information about how the owner affects the stream can be found\nin the ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/1.6.1/reference-guide/security#owners"},"reference guide"),"."),(0,i.kt)("h2",{id:"deleting-a-stream"},"Deleting a stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP STREAM <stream name>;\n")),(0,i.kt)("p",null,"Drops a stream with name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>"),"."),(0,i.kt)("h2",{id:"start-a-stream"},"Start a stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM <stream name>;\nSTART ALL STREAMS;\n")),(0,i.kt)("p",null,"Starts a stream (or all streams) with name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>"),"."),(0,i.kt)("p",null,"When a stream is started, it should resume from the last committed offset. If\nthere is no committed offset for the consumer group, then the largest offset\nwill be used. Therefore only the new messages will be consumed."),(0,i.kt)("h2",{id:"stop-a-stream"},"Stop a stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP STREAM <stream name>;\nSTOP ALL STREAMS;\n")),(0,i.kt)("p",null,"Stops a stream (or all streams) with name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>"),"."),(0,i.kt)("h2",{id:"show"},"Show"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,i.kt)("p",null,"Shows a list of existing streams with the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stream name"),(0,i.kt)("li",{parentName:"ul"},"list of topics"),(0,i.kt)("li",{parentName:"ul"},"consumer group id"),(0,i.kt)("li",{parentName:"ul"},"batch interval"),(0,i.kt)("li",{parentName:"ul"},"batch size"),(0,i.kt)("li",{parentName:"ul"},"transformation procedure name"),(0,i.kt)("li",{parentName:"ul"},"the owner of the streams"),(0,i.kt)("li",{parentName:"ul"},"whether the stream is running")),(0,i.kt)("h2",{id:"check-stream"},"Check stream"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM <stream name> [BATCH_LIMIT <count>] [TIMEOUT <milliseconds>] ;\n")),(0,i.kt)("p",null,"Does a dry-run on stream with name ",(0,i.kt)("inlineCode",{parentName:"p"},"<stream name>")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," number of\nbatches and returns the result of the transformation: the queries and their\nparameters that would be executed in a normal run. If ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," is unspecified,\nits default value is 1. After ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," batches are processed, the\ntransformation result is returned. If ",(0,i.kt)("inlineCode",{parentName:"p"},"<count>")," number of batches are not\nprocessed within the specified timeout, then an exception is thrown. This might\nbe caused by not receiving enough messages. ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMEOUT")," is measured in\nmilliseconds, and it's defaulted to 30000."),(0,i.kt)("p",null,"Checking a stream won't commit any offsets."),(0,i.kt)("h2",{id:"at-least-once-semantics"},"At least once semantics"),(0,i.kt)("p",null,"In stream processing, it is important to have some guarantees about how failures\nare handled. When connecting an external application such as Memgraph to a Kafka\nstream, there are two possible ways to handle failures during message\nprocessing:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Every message is processed ",(0,i.kt)("strong",{parentName:"li"},"at least once"),": the message offsets are\ncommitted to the Kafka cluster after the processing is done. This means if\nthe committing fails, then the messages can get processed multiple times."),(0,i.kt)("li",{parentName:"ol"},"Every message is processed ",(0,i.kt)("strong",{parentName:"li"},"at most once"),": the message offsets are\ncommitted to the Kafka cluster right after they are received before the\nprocessing is started. This means if the processing fails, then the same\nmessages won't be processed again.")),(0,i.kt)("p",null,"Missing a message can result in missing an edge that would connect two\nindependent components of the graph. Therefore, we think that missing some\ninformation is a bigger problem for graphs than having some information\nduplicated, so we implemented our streams using the ",(0,i.kt)("strong",{parentName:"p"},"at least once")," semantics,\ni.e. for every batch of messages the queries returned by the transformations are\nexecuted and committed to the database before committing the message offset to\nthe Kafka cluster. However, even though we cannot guarantee ",(0,i.kt)("strong",{parentName:"p"},"exactly once"),"\nsemantics, we tried to minimize the possibility of processing messages multiple\ntimes. This means committing the message offsets to the Kafka cluster happens\nright after the transaction is committed to the database."))}u.isMDXComponent=!0}}]);