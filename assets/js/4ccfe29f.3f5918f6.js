"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61508],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return u}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(t),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return t?n.createElement(h,i(i({ref:a},p),{},{components:t})):n.createElement(h,i({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var m={};for(var s in a)hasOwnProperty.call(a,s)&&(m[s]=a[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},55942:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return d}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],m={id:"manage-streams",title:"Connect to data streams using Cypher queries",sidebar_label:"Connect using Cypher queries"},s=void 0,l={unversionedId:"import-data/data-streams/manage-streams",id:"version-2.4.0/import-data/data-streams/manage-streams",title:"Connect to data streams using Cypher queries",description:"Memgraph can natively ingest streaming data from upstream sources using [Apache",source:"@site/memgraph_versioned_docs/version-2.4.0/import-data/data-streams/manage-streams.md",sourceDirName:"import-data/data-streams",slug:"/import-data/data-streams/manage-streams",permalink:"/docs/memgraph/import-data/data-streams/manage-streams",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.4.0/import-data/data-streams/manage-streams.md",tags:[],version:"2.4.0",frontMatter:{id:"manage-streams",title:"Connect to data streams using Cypher queries",sidebar_label:"Connect using Cypher queries"},sidebar:"memgraph",previous:{title:"Connect to data streams",permalink:"/docs/memgraph/import-data/data-streams/overview"},next:{title:"Connect using Memgraph Lab wizard",permalink:"/docs/memgraph/import-data/data-streams/manage-streams-lab"}},p={},d=[{value:"Create and load a transformation module into Memgraph",id:"create-and-load-a-transformation-module-into-memgraph",level:2},{value:"Load the transformation module",id:"load-the-transformation-module",level:3},{value:"Check the transformation module",id:"check-the-transformation-module",level:3},{value:"Create a stream in Memgraph",id:"create-a-stream-in-memgraph",level:2},{value:"Kafka and Redpanda",id:"kafka-and-redpanda",level:3},{value:"Pulsar",id:"pulsar",level:3},{value:"Get information about a stream",id:"get-information-about-a-stream",level:3},{value:"Check the transformed incoming data",id:"check-the-transformed-incoming-data",level:3},{value:"Start ingesting data from the stream",id:"start-ingesting-data-from-the-stream",level:2},{value:"Stop or delete a connection to a stream",id:"stop-or-delete-a-connection-to-a-stream",level:3},{value:"Change Kafka stream offset",id:"change-kafka-stream-offset",level:2},{value:"Logs",id:"logs",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:d};function u(e){var a=e.components,m=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,m,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Memgraph can natively ingest streaming data from upstream sources using ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache\nKafka"),", ",(0,o.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"Redpanda")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/"},"Pulsar"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,o.kt)("p",null,"The following page instructs how to connect to data streams to ingest the data\nand manage the connection using Cypher queries. The connection to streams can\nalso be ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/data-streams/manage-streams-lab"},"managed through the ",(0,o.kt)("strong",{parentName:"a"},"Stream")," section in the Memgraph\nLab"),". "),(0,o.kt)("p",null,"To import data from streams using Cypher queries:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/installation"},"Start Memgraph")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/connect-to-memgraph"},"connect to the database")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-and-load-a-transformation-module-into-memgraph"},"Create and load a transformation module into Memgraph"),"  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#create-a-stream-in-memgraph"},"Create a stream in Memgraph")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-ingesting-data-from-the-stream"},"Start ingesting data from the stream"))),(0,o.kt)("img",{src:t(75915).Z}),(0,o.kt)("p",null,"If you need a Kafka stream to play around with, we've provided some at ",(0,o.kt)("a",{parentName:"p",href:"https://awesomedata.stream/"},"Awesome\nData Stream"),"! "),(0,o.kt)("h2",{id:"create-and-load-a-transformation-module-into-memgraph"},"Create and load a transformation module into Memgraph"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules"},"transformation\nmodule")," is a set of\nuser-defined transformation procedures written in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules/api/c-api"},"C")," or\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules/api/python-api"},"Python")," that\nact on data received from a streaming engine. Transformation procedures instruct\nMemgraph on how to transform the incoming messages to consume them correctly. "),(0,o.kt)("p",null,"Once you ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules#creating-a-transformation-module"},"created a Python or a shared library file\n(module)"),",\nsave the file into the Memgraph's ",(0,o.kt)("inlineCode",{parentName:"p"},"query_modules")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"internal_modules"),"\ndirectory (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules/"),"). If you are using Docker, you need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},"transfer\nthe transformation module file into the Docker\ncontainer"),"."),(0,o.kt)("p",null,"If you are using Memgraph Lab you can ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules#creating-transformation-modules-within-memgraph-lab"},"create transformation module in Python within the\napplication"),". "),(0,o.kt)("p",null,"The best practice is to have a dedicated topic for each message type to parse the\ndata more efficiently. Each topic requires a separate procedure within a single\ntransformation module to handle the conversion."),(0,o.kt)("h3",{id:"load-the-transformation-module"},"Load the transformation module"),(0,o.kt)("p",null,"When started, Memgraph will automatically attempt to load the transformation\nmodules from all ",(0,o.kt)("inlineCode",{parentName:"p"},"*.so")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*.py")," files it finds in the default\n",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules")," directories."),(0,o.kt)("p",null,"You can point to a different directory by changing or extending the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main configuration file\n(",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),"). If you need help changing the configuration\nfile, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"how-to guide"),". You can also\ndefine the flag within a command-line parameter when using Docker."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please remember that if you are using Memgraph Platform image, you should pass\nconfiguration flags within MEMGRAPH environment variable (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'docker run -p\n7687:7687 -p 3000:3000 -p 7444:7444 -e MEMGRAPH="--log-level=TRACE"\nmemgraph/memgraph-platform'),") and if you are using any other image, you should\npass them as arguments after the image name (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"... memgraph/memgraph-mage\n--log-level=TRACE --query-modules-directory=path/path"),")."))),(0,o.kt)("p",null,"If the transformation module has been added to the directory while the Memgraph\ninstance was already running, you need to load it manually by using the\nfollowing query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load('transformation_name');\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,o.kt)("h3",{id:"check-the-transformation-module"},"Check the transformation module"),(0,o.kt)("p",null,"If you want to check if your module has properly loaded in Memgraph run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,o.kt)("p",null,"You should see an output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'+------------------+------------------------------------+-----------------------------------------------------------------+\n| is_editable      | name                               | path                                                            |\n+------------------+------------------------------------+-----------------------------------------------------------------|\n| `true`           | "transformation_module.procedure"  | `/var/lib/memgraph/internal_modules/transformation_module.py    |\n+------------------+------------------------------------+-----------------------------------------------------------------+\n')),(0,o.kt)("h2",{id:"create-a-stream-in-memgraph"},"Create a stream in Memgraph"),(0,o.kt)("p",null,"To create a stream with a Cypher query, you first need to ",(0,o.kt)("a",{parentName:"p",href:"#create-and-load-a-transformation-module-into-memgraph"},"load the\ntransformation module into\nMemgraph"),", then run a\n",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE .. STREAM")," Cypher query to create a stream. "),(0,o.kt)("p",null,"You need to create one stream for each topic and procedure you have."),(0,o.kt)("p",null,"Below are basic Cypher queries for starting streams. For more options and\ninformation about the ",(0,o.kt)("inlineCode",{parentName:"p"},"CREATE .. STREAM")," query and all the other options\nregarding streams, such as additional Kafka configuration options, check out the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams"},"reference guide"),"."),(0,o.kt)("h3",{id:"kafka-and-redpanda"},"Kafka and Redpanda"),(0,o.kt)("p",null,"The most basic Cypher query for creating a connection to a Kafka or Redpanda stream is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE KAFKA STREAM streamName\nTOPICS topic1[, <topic2>, ...]\nTRANSFORM transModule.transProcedure\nBOOTSTRAP_SERVERS bootstrapServers;\n")),(0,o.kt)("h3",{id:"pulsar"},"Pulsar"),(0,o.kt)("p",null,"The most basic Cypher query for creating a connection to a Pulsar stream is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE PULSAR STREAM streamName\nTOPICS topic1[,topic2, ...]\nTRANSFORM transModule.transProcedure\nSERVICE_URL serviceURL;\n")),(0,o.kt)("h3",{id:"get-information-about-a-stream"},"Get information about a stream"),(0,o.kt)("p",null,"You can get the basic stream information with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,o.kt)("h3",{id:"check-the-transformed-incoming-data"},"Check the transformed incoming data"),(0,o.kt)("p",null,"To see the results of the transformation module, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," clause.\nIt will consume the message from the last committed offset but won't commit the\noffsets. There is no committed offset coming from a newly created stream, so by\ndefault, Memgraph will wait ",(0,o.kt)("inlineCode",{parentName:"p"},"30000")," milliseconds (",(0,o.kt)("inlineCode",{parentName:"p"},"30")," seconds) for new\nmessages, and after that, it will throw a timeout exception. You can change the\ntimeout by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"TIMEOUT")," sub-clause and a custom time to the query. "),(0,o.kt)("p",null,"The following Cypher query will transform new messages that come from the stream\nwithin 60 seconds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream TIMEOUT 60000;\n")),(0,o.kt)("p",null,"To consume more batches, increase the ",(0,o.kt)("inlineCode",{parentName:"p"},"BATCH_LIMIT"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;\n")),(0,o.kt)("h2",{id:"start-ingesting-data-from-the-stream"},"Start ingesting data from the stream"),(0,o.kt)("p",null,"To start ingesting data, execute the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM stream_name;\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"START ALL STREAMS;\n")),(0,o.kt)("p",null,"Your data should be slowly arriving in your Memgraph instance. "),(0,o.kt)("h3",{id:"stop-or-delete-a-connection-to-a-stream"},"Stop or delete a connection to a stream"),(0,o.kt)("p",null,"To stop a stream:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP STREAM streamName;\n")),(0,o.kt)("p",null,"To delete a stream:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP STREAM streamName;\n")),(0,o.kt)("p",null,"For more options, ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams#start-a-stream"},"check the reference guide"),"."),(0,o.kt)("h2",{id:"change-kafka-stream-offset"},"Change Kafka stream offset"),(0,o.kt)("p",null,"First, stop the stream if it's running, then use the following Cypher query to\nchange Kafka stream offset if necessary and start it again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.kafka_set_stream_offset(streamName, offset)\n")),(0,o.kt)("p",null,"An offset of ",(0,o.kt)("inlineCode",{parentName:"p"},"-1")," denotes the beginning offset available for the given\ntopic/partition. "),(0,o.kt)("p",null,"An offset of ",(0,o.kt)("inlineCode",{parentName:"p"},"-2")," denotes the end of the stream in which case only the\nnext produced message will be consumed."),(0,o.kt)("h2",{id:"logs"},"Logs"),(0,o.kt)("p",null,"Errors and notifications regarding streams are contained in Memgraph's log files\nwhich can be found at ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph/memgraph_<date>.log"),". Look for the name\nof your stream in the log file to find the error. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"grep")," command\nto search for the stream in the log file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grep '<stream_name>' /var/log/memgraph/memgraph_<date>.log\n")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Take a look at the tutorial we made to help you ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/graph-stream-processing-with-kafka"},"connect Memgraph and\nKafka"),". Learn more about the\nquery power of ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher language"),", or check out ",(0,o.kt)("a",{parentName:"p",href:"/mage"},"MAGE")," -\nan open-source repository that contains graph algorithms and modules that can\nhelp you tackle the most interesting and challenging graph analytics problems."),(0,o.kt)("p",null,"You might also be interested in the ",(0,o.kt)("a",{parentName:"p",href:"/memgraph-lab/graph-style-script-language"},"Graph Style Script\nlanguage")," that will help you bedazzle\nyour graphs in Memgraph Lab. Above all, enjoy your graph database!"))}u.isMDXComponent=!0},75915:function(e,a,t){a.Z=t.p+"assets/images/kafka-overview-4774e9a423387407d8ba09f2a83ca88a.png"}}]);