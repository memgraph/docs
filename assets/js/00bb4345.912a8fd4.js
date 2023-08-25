"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>h});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),l=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},p=function(e){var a=l(e.components);return r.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(t),h=n,u=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return t?r.createElement(u,m(m({ref:a},p),{},{components:t})):r.createElement(u,m({ref:a},p))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,m=new Array(o);m[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,m[1]=i;for(var l=2;l<o;l++)m[l]=t[l];return r.createElement.apply(null,m)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},77169:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>m,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),n=(t(67294),t(3905));const o={id:"manage-streams",title:"Connect to data streams using Cypher queries",sidebar_label:"Connect using Cypher queries"},m=void 0,i={unversionedId:"import-data/data-streams/manage-streams",id:"version-2.10.1/import-data/data-streams/manage-streams",title:"Connect to data streams using Cypher queries",description:"Memgraph can natively ingest streaming data from upstream sources using [Apache",source:"@site/memgraph_versioned_docs/version-2.10.1/import-data/data-streams/manage-streams.md",sourceDirName:"import-data/data-streams",slug:"/import-data/data-streams/manage-streams",permalink:"/docs/memgraph/import-data/data-streams/manage-streams",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.1/import-data/data-streams/manage-streams.md",tags:[],version:"2.10.1",frontMatter:{id:"manage-streams",title:"Connect to data streams using Cypher queries",sidebar_label:"Connect using Cypher queries"},sidebar:"memgraph",previous:{title:"Connect to data streams",permalink:"/docs/memgraph/import-data/data-streams/overview"},next:{title:"Connect using Memgraph Lab wizard",permalink:"/docs/memgraph/import-data/data-streams/manage-streams-lab"}},s={},l=[{value:"Create and load a transformation module into Memgraph",id:"create-and-load-a-transformation-module-into-memgraph",level:2},{value:"Load the transformation module",id:"load-the-transformation-module",level:3},{value:"Check the transformation module",id:"check-the-transformation-module",level:3},{value:"Create a stream in Memgraph",id:"create-a-stream-in-memgraph",level:2},{value:"Kafka and Redpanda",id:"kafka-and-redpanda",level:3},{value:"Pulsar",id:"pulsar",level:3},{value:"Get information about a stream",id:"get-information-about-a-stream",level:3},{value:"Check the transformed incoming data",id:"check-the-transformed-incoming-data",level:3},{value:"Start ingesting data from the stream",id:"start-ingesting-data-from-the-stream",level:2},{value:"Stop or delete a connection to a stream",id:"stop-or-delete-a-connection-to-a-stream",level:3},{value:"Change Kafka stream offset",id:"change-kafka-stream-offset",level:2},{value:"Logs",id:"logs",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:l};function d(e){let{components:a,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Memgraph can natively ingest streaming data from upstream sources using ",(0,n.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache\nKafka"),", ",(0,n.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"Redpanda")," and\n",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/"},"Pulsar"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,n.kt)("p",null,"The following page instructs how to connect to data streams to ingest the data\nand manage the connection using Cypher queries. The connection to streams can\nalso be ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/data-streams/manage-streams-lab"},"managed through the ",(0,n.kt)("strong",{parentName:"a"},"Stream")," section in the Memgraph\nLab"),". "),(0,n.kt)("p",null,"To import data from streams using Cypher queries:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/installation"},"Start Memgraph")," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/connect-to-memgraph"},"connect to the database")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#create-and-load-a-transformation-module-into-memgraph"},"Create and load a transformation module into Memgraph"),"  "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#create-a-stream-in-memgraph"},"Create a stream in Memgraph")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#start-ingesting-data-from-the-stream"},"Start ingesting data from the stream"))),(0,n.kt)("img",{src:t(46870).Z}),(0,n.kt)("p",null,"If you need a Kafka stream to play around with, we've provided some at ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/"},"Awesome\nData Stream"),"! "),(0,n.kt)("h2",{id:"create-and-load-a-transformation-module-into-memgraph"},"Create and load a transformation module into Memgraph"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules"},"transformation\nmodule")," is a set of\nuser-defined transformation procedures written in\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules/api/c-api"},"C")," or\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules/api/python-api"},"Python")," that\nact on data received from a streaming engine. Transformation procedures instruct\nMemgraph on how to transform the incoming messages to consume them correctly. "),(0,n.kt)("p",null,"Once you ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules#creating-a-transformation-module"},"created a Python or a shared library file\n(module)"),",\nsave the file into the Memgraph's ",(0,n.kt)("inlineCode",{parentName:"p"},"query_modules")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"internal_modules"),"\ndirectory (default: ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules/"),"). If you are using Docker, you need to ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/work-with-docker#how-to-copy-files-from-and-to-a-docker-container"},"transfer\nthe transformation module file into the Docker\ncontainer"),"."),(0,n.kt)("p",null,"If you are using Memgraph Lab you can ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules#creating-transformation-modules-within-memgraph-lab"},"create transformation module in Python within the\napplication"),". "),(0,n.kt)("p",null,"The best practice is to have a dedicated topic for each message type to parse the\ndata more efficiently. Each topic requires a separate procedure within a single\ntransformation module to handle the conversion."),(0,n.kt)("h3",{id:"load-the-transformation-module"},"Load the transformation module"),(0,n.kt)("p",null,"When started, Memgraph will automatically attempt to load the transformation\nmodules from all ",(0,n.kt)("inlineCode",{parentName:"p"},"*.so")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"*.py")," files it finds in the default\n",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/memgraph/internal_modules")," directories."),(0,n.kt)("p",null,"You can point to a different directory by changing or extending the\n",(0,n.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main configuration file\n(",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),"). If you need help changing the configuration\nfile, check out the ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/config-logs"},"how-to guide"),". You can also\ndefine the flag within a command-line parameter when using Docker."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please remember that if you are using Memgraph Platform image, you should pass\nconfiguration flags within MEMGRAPH environment variable (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},'docker run -p\n7687:7687 -p 3000:3000 -p 7444:7444 -e MEMGRAPH="--log-level=TRACE"\nmemgraph/memgraph-platform'),") and if you are using any other image, you should\npass them as arguments after the image name (e.g., ",(0,n.kt)("inlineCode",{parentName:"p"},"... memgraph/memgraph-mage\n--log-level=TRACE --query-modules-directory=path/path"),").")),(0,n.kt)("p",null,"If the transformation module has been added to the directory while the Memgraph\ninstance was already running, you need to load it manually by using the\nfollowing query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load('transformation_name');\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,n.kt)("h3",{id:"check-the-transformation-module"},"Check the transformation module"),(0,n.kt)("p",null,"If you want to check if your module has properly loaded in Memgraph run:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.transformations() YIELD *;\n")),(0,n.kt)("p",null,"You should see an output similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},'+------------------+------------------------------------+-----------------------------------------------------------------+\n| is_editable      | name                               | path                                                            |\n+------------------+------------------------------------+-----------------------------------------------------------------|\n| `true`           | "transformation_module.procedure"  | `/var/lib/memgraph/internal_modules/transformation_module.py    |\n+------------------+------------------------------------+-----------------------------------------------------------------+\n')),(0,n.kt)("h2",{id:"create-a-stream-in-memgraph"},"Create a stream in Memgraph"),(0,n.kt)("p",null,"To create a stream with a Cypher query, you first need to ",(0,n.kt)("a",{parentName:"p",href:"#create-and-load-a-transformation-module-into-memgraph"},"load the\ntransformation module into\nMemgraph"),", then run a\n",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE .. STREAM")," Cypher query to create a stream. "),(0,n.kt)("p",null,"You need to create one stream for each topic and procedure you have."),(0,n.kt)("p",null,"Below are basic Cypher queries for starting streams. For more options and\ninformation about the ",(0,n.kt)("inlineCode",{parentName:"p"},"CREATE .. STREAM")," query and all the other options\nregarding streams, such as additional Kafka configuration options, check out the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams"},"reference guide"),"."),(0,n.kt)("h3",{id:"kafka-and-redpanda"},"Kafka and Redpanda"),(0,n.kt)("p",null,"The most basic Cypher query for creating a connection to a Kafka or Redpanda stream is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE KAFKA STREAM streamName\nTOPICS topic1[, <topic2>, ...]\nTRANSFORM transModule.transProcedure\nBOOTSTRAP_SERVERS bootstrapServers;\n")),(0,n.kt)("h3",{id:"pulsar"},"Pulsar"),(0,n.kt)("p",null,"The most basic Cypher query for creating a connection to a Pulsar stream is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CREATE PULSAR STREAM streamName\nTOPICS topic1[,topic2, ...]\nTRANSFORM transModule.transProcedure\nSERVICE_URL serviceURL;\n")),(0,n.kt)("h3",{id:"get-information-about-a-stream"},"Get information about a stream"),(0,n.kt)("p",null,"You can get the basic stream information with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"SHOW STREAMS;\n")),(0,n.kt)("h3",{id:"check-the-transformed-incoming-data"},"Check the transformed incoming data"),(0,n.kt)("p",null,"To see the results of the transformation module, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"CHECK STREAM")," clause.\nIt will consume the message from the last committed offset but won't commit the\noffsets. There is no committed offset coming from a newly created stream, so by\ndefault, Memgraph will wait ",(0,n.kt)("inlineCode",{parentName:"p"},"30000")," milliseconds (",(0,n.kt)("inlineCode",{parentName:"p"},"30")," seconds) for new\nmessages, and after that, it will throw a timeout exception. You can change the\ntimeout by adding the ",(0,n.kt)("inlineCode",{parentName:"p"},"TIMEOUT")," sub-clause and a custom time to the query. "),(0,n.kt)("p",null,"The following Cypher query will transform new messages that come from the stream\nwithin 60 seconds:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream TIMEOUT 60000;\n")),(0,n.kt)("p",null,"To consume more batches, increase the ",(0,n.kt)("inlineCode",{parentName:"p"},"BATCH_LIMIT"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CHECK STREAM myStream BATCH_LIMIT 3 TIMEOUT 60000;\n")),(0,n.kt)("h2",{id:"start-ingesting-data-from-the-stream"},"Start ingesting data from the stream"),(0,n.kt)("p",null,"To start ingesting data, execute the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"START STREAM stream_name;\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"START ALL STREAMS;\n")),(0,n.kt)("p",null,"Your data should be slowly arriving in your Memgraph instance. "),(0,n.kt)("h3",{id:"stop-or-delete-a-connection-to-a-stream"},"Stop or delete a connection to a stream"),(0,n.kt)("p",null,"To stop a stream:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"STOP STREAM streamName;\n")),(0,n.kt)("p",null,"To delete a stream:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"DROP STREAM streamName;\n")),(0,n.kt)("p",null,"For more options, ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams#start-a-stream"},"check the reference guide"),"."),(0,n.kt)("h2",{id:"change-kafka-stream-offset"},"Change Kafka stream offset"),(0,n.kt)("p",null,"First, stop the stream if it's running, then use the following Cypher query to\nchange Kafka stream offset if necessary and start it again:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.kafka_set_stream_offset(streamName, offset)\n")),(0,n.kt)("p",null,"An offset of ",(0,n.kt)("inlineCode",{parentName:"p"},"-1")," denotes the beginning offset available for the given\ntopic/partition. "),(0,n.kt)("p",null,"An offset of ",(0,n.kt)("inlineCode",{parentName:"p"},"-2")," denotes the end of the stream in which case only the\nnext produced message will be consumed."),(0,n.kt)("h2",{id:"logs"},"Logs"),(0,n.kt)("p",null,"Errors and notifications regarding streams are contained in Memgraph's log files\nwhich can be found at ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph/memgraph_<date>.log"),". Look for the name\nof your stream in the log file to find the error. You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"grep")," command\nto search for the stream in the log file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"grep '<stream_name>' /var/log/memgraph/memgraph_<date>.log\n")),(0,n.kt)("h2",{id:"whats-next"},"What's next?"),(0,n.kt)("p",null,"Take a look at the tutorial we made to help you ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/graph-stream-processing-with-kafka"},"connect Memgraph and\nKafka"),". Learn more about the\nquery power of ",(0,n.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher language"),", or check out ",(0,n.kt)("a",{parentName:"p",href:"/mage"},"MAGE")," -\nan open-source repository that contains graph algorithms and modules that can\nhelp you tackle the most interesting and challenging graph analytics problems."),(0,n.kt)("p",null,"You might also be interested in the ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-lab/graph-style-script-language"},"Graph Style Script\nlanguage")," that will help you bedazzle\nyour graphs in Memgraph Lab. Above all, enjoy your graph database!"))}d.isMDXComponent=!0},46870:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/kafka-overview-4774e9a423387407d8ba09f2a83ca88a.png"}}]);