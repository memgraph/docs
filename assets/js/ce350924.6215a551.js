"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87351],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(a),u=n,h=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:n,s[1]=m;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},54896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={id:"manage-streams-lab",title:"Connect to data streams using Memgraph Lab wizard",sidebar_label:"Connect using Memgraph Lab wizard"},s=void 0,m={unversionedId:"import-data/data-streams/manage-streams-lab",id:"version-2.10.0/import-data/data-streams/manage-streams-lab",title:"Connect to data streams using Memgraph Lab wizard",description:"Memgraph can natively ingest streaming data from upstream sources using [Apache",source:"@site/memgraph_versioned_docs/version-2.10.0/import-data/data-streams/manage-streams-lab.md",sourceDirName:"import-data/data-streams",slug:"/import-data/data-streams/manage-streams-lab",permalink:"/docs/memgraph/import-data/data-streams/manage-streams-lab",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/import-data/data-streams/manage-streams-lab.md",tags:[],version:"2.10.0",frontMatter:{id:"manage-streams-lab",title:"Connect to data streams using Memgraph Lab wizard",sidebar_label:"Connect using Memgraph Lab wizard"},sidebar:"memgraph",previous:{title:"Connect using Cypher queries",permalink:"/docs/memgraph/import-data/data-streams/manage-streams"},next:{title:"MySQL",permalink:"/docs/memgraph/import-data/migrate/mysql"}},i={},l=[{value:"Create a stream in Memgraph",id:"create-a-stream-in-memgraph",level:2},{value:"Add a transformation module",id:"add-a-transformation-module",level:2},{value:"Set Kafka configuration parameters",id:"set-kafka-configuration-parameters",level:2},{value:"Connect Memgraph to the stream and start ingesting the data",id:"connect-memgraph-to-the-stream-and-start-ingesting-the-data",level:2},{value:"Manage a stream",id:"manage-a-stream",level:2},{value:"Start, stop, or delete a stream",id:"start-stop-or-delete-a-stream",level:3},{value:"Edit a stream",id:"edit-a-stream",level:3},{value:"Change Kafka stream offset",id:"change-kafka-stream-offset",level:2},{value:"Logs",id:"logs",level:2},{value:"Demo video",id:"demo-video",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Memgraph can natively ingest streaming data from upstream sources using ",(0,n.kt)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache\nKafka"),", ",(0,n.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"Redpanda")," and\n",(0,n.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/"},"Pulsar"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/graph-stream-processing-with-kafka"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related -\nTutorial"}))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))," "),(0,n.kt)("p",null,"The following page instructs how to connect to data streams to ingest the data\nand manage the connection using a wizard in the ",(0,n.kt)("strong",{parentName:"p"},"Stream")," section of Memgraph\nLab. If you prefer writing commands, you can also ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/data-streams/manage-streams"},"manage streams with Cypher\nqueries"),". "),(0,n.kt)("p",null,"To import data from streams using Cypher queries:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/installation"},"Start Memgraph")," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/memgraph/connect-to-memgraph"},"connect to the database")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#create-a-stream-in-memgraph"},"Create a stream in Memgraph")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#add-a-transformation-module"},"Add a transformation module"),"  "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#start-ingesting-data-from-the-stream"},"Start ingesting data from the stream"))),(0,n.kt)("p",null,"If you need a Kafka stream to play around with, we've provided some at ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/"},"Awesome\nData Stream"),"! "),(0,n.kt)("h2",{id:"create-a-stream-in-memgraph"},"Create a stream in Memgraph"),(0,n.kt)("p",null,"To add a stream in Memgraph Lab: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Switch to ",(0,n.kt)("strong",{parentName:"li"},"Streams")," and ",(0,n.kt)("strong",{parentName:"li"},"Add New Stream"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose stream type, enter a stream name, server address, and topics you want to subscribe to."),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Next Step"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Edit")," to modify the ",(0,n.kt)("em",{parentName:"li"},"Consumer Group"),", ",(0,n.kt)("em",{parentName:"li"},"Batch Interval")," or ",(0,n.kt)("em",{parentName:"li"},"Batch\nSize"),".")),(0,n.kt)("p",null,"If you are trying to connect to MovieLens Kafka data stream from the ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/#/movielens"},"Awesome Data\nStream"),", the stream configuration should\nlook like this:"),(0,n.kt)("img",{src:a(60574).Z,className:"imgBorder"}),(0,n.kt)("p",null,"Once the basic configuration is finished, you need to define a transformation\nmodule and attach it to the stream. "),(0,n.kt)("h2",{id:"add-a-transformation-module"},"Add a transformation module"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules"},"transformation\nmodule")," is a set of user-defined transformation procedures\nwritten in ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules/api/c-api"},"C")," or\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules/api/python-api"},"Python")," that\nact on data received from a streaming source. Transformation procedures instruct\nMemgraph on how to transform incoming messages to consume them correctly."),(0,n.kt)("p",null,"While you are creating a new stream, you can create and add a new transformation\nmodule in Python from the stream details view:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add Transformation Module"),"."),(0,n.kt)("img",{src:a(36771).Z,className:"imgBorder"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Choose Transformation Module"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select an existing transformation module, or ",(0,n.kt)("strong",{parentName:"p"},"+ Create new transformation"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Review an existing module, or clear the screen and write a new transformation\nprocedure.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save the transformation module.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check if the necessary transformation procedure is visible under ",(0,n.kt)("strong",{parentName:"p"},"Detected\ntransformation functions")," on the right.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select a transformation procedure and ",(0,n.kt)("strong",{parentName:"p"},"Attach to Stream"),"."),(0,n.kt)("img",{src:a(9554).Z,className:"imgBorder"}))),(0,n.kt)("p",null,"You can also develop transformation modules in Python beforehand in the section\n",(0,n.kt)("strong",{parentName:"p"},"Query Modules"),". Click on the ",(0,n.kt)("strong",{parentName:"p"},"New Module"),", and the Lab will automatically\nrecognize transformation procedures once you define them and save the module."),(0,n.kt)("p",null,"If you developed a procedure in C (or Python) as a separate file, you have to\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/import-data/data-streams/manage-streams#create-and-load-a-transformation-module-into-memgraph"},"load it into\nMemgraph"),"\nfirst, and then you will be able to see it in the ",(0,n.kt)("strong",{parentName:"p"},"Query Modules")," section\nand attach it to a stream. "),(0,n.kt)("p",null,"Check the transformation module for MovieLens on ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/#/movielens"},"Awesome Data\nStream"),"."),(0,n.kt)("h2",{id:"set-kafka-configuration-parameters"},"Set Kafka configuration parameters"),(0,n.kt)("p",null,"If necessary, add the Kafka configuration parameters to customize the stream:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Kafka Configuration Parameters ",(0,n.kt)("strong",{parentName:"li"},"+ Add parameter field"),"."),(0,n.kt)("li",{parentName:"ol"},"Insert the parameter name and value."),(0,n.kt)("li",{parentName:"ol"},"To add another parameter, ",(0,n.kt)("strong",{parentName:"li"},"Add parameter filed"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Save Configuration")," once you have set all parameters.")),(0,n.kt)("p",null,"To connect to the ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/"},"Awesome Data Stream")," you need to set\nthe following Kafka configuration parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sasl.username"),": public ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sasl.password"),": public ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"security.protocol"),": SASL_PLAINTEXT ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sasl.mechanism"),": PLAIN ",(0,n.kt)("br",null))),(0,n.kt)("img",{src:a(19103).Z,className:"imgBorder"}),(0,n.kt)("h2",{id:"connect-memgraph-to-the-stream-and-start-ingesting-the-data"},"Connect Memgraph to the stream and start ingesting the data"),(0,n.kt)("p",null,"Once the stream is configured, you can ",(0,n.kt)("strong",{parentName:"p"},"Connect to Stream"),". "),(0,n.kt)("p",null,"Memgraph will do a series of checks, ensuring that defined topics and\ntransformation procedures are correctly configured. If all checks pass\nsuccessfully, you can ",(0,n.kt)("strong",{parentName:"p"},"Start the stream"),". Once you start the stream, you will\nno longer be able to change configuration settings, just the transformation\nmodule. "),(0,n.kt)("p",null,"The stream status changes to ",(0,n.kt)("strong",{parentName:"p"},"Running")," and data is ingested into Memgraph.\nYou can see the number of nodes and relationships rising as the data keeps\ncoming in. If your nodes and relationships numbers stay at zero, check the\ntransformation module, as there might be a flaw in the logic that needs to be\nresolved. "),(0,n.kt)("p",null,"Switch to ",(0,n.kt)("strong",{parentName:"p"},"Query Execution")," and run a query to visualize the data coming in: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"MATCH p=(n)-[r]-(m)\nRETURN p LIMIT 100;\n")),(0,n.kt)("img",{src:a(62027).Z,lassName:"imgBorder"}),(0,n.kt)("h2",{id:"manage-a-stream"},"Manage a stream"),(0,n.kt)("p",null,"To manage a stream in Memgraph Lab, go to ",(0,n.kt)("strong",{parentName:"p"},"Streams")," and click on the stream\nyou want to manage (",(0,n.kt)("strong",{parentName:"p"},"View stream details"),"). "),(0,n.kt)("h3",{id:"start-stop-or-delete-a-stream"},"Start, stop, or delete a stream"),(0,n.kt)("p",null,"Position yourself in the stream details view. "),(0,n.kt)("p",null,"To start a draft steam, click ",(0,n.kt)("strong",{parentName:"p"},"Connect to Stream"),"."),(0,n.kt)("p",null,"To stop or start a stream, click ",(0,n.kt)("strong",{parentName:"p"},"Stop Stream"),"/",(0,n.kt)("strong",{parentName:"p"},"Start Stream"),"."),(0,n.kt)("p",null,"To delete a stream, click ",(0,n.kt)("strong",{parentName:"p"},"Delete Stream"),"."),(0,n.kt)("h3",{id:"edit-a-stream"},"Edit a stream"),(0,n.kt)("p",null,"You cannot edit a started stream. You can only create a new stream with the\nchanges you want to implement."),(0,n.kt)("p",null,"You can only change the transformation module in the stream details view. "),(0,n.kt)("h2",{id:"change-kafka-stream-offset"},"Change Kafka stream offset"),(0,n.kt)("p",null,"Kafka stream offset can be changed only by using a Cypher query. "),(0,n.kt)("p",null,"First stop the stream if it's running, then use the following Cypher query to\nchange Kafka stream offset if necessary and start it again:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.kafka_set_stream_offset(streamName, offset)\n")),(0,n.kt)("p",null,"An offset of ",(0,n.kt)("inlineCode",{parentName:"p"},"-1")," denotes the beginning offset available for the given\ntopic/partition. "),(0,n.kt)("p",null,"An offset of ",(0,n.kt)("inlineCode",{parentName:"p"},"-2")," denotes the end of the stream in which case only the\nnext produced message will be consumed."),(0,n.kt)("h2",{id:"logs"},"Logs"),(0,n.kt)("p",null,"If you are running Memgraph with Docker and want to see logs in Memgraph Lab, be\nsure to expose the 7444 port when running the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker run")," command."),(0,n.kt)("p",null,"Otherwise, Memgraph's log files can be found at\n",(0,n.kt)("inlineCode",{parentName:"p"},"/var/log/memgraph/memgraph_<date>.log"),". Look for the name of your stream in the\nlog file to find the error."),(0,n.kt)("h2",{id:"demo-video"},"Demo video"),(0,n.kt)("p",null,"As a part of the ",(0,n.kt)("a",{parentName:"p",href:"/memgraph-cloud"},"Memgraph Cloud")," release, we've showcased\ndifferent features of Memgraph Lab, for example, how to connect to data streams\nusing Memgraph Lab!"),(0,n.kt)("p",null,"Feel free to check it out:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/Tt5KPKylU8k?t=1585",title:"Connecting to streams from Memgraph Lab"},(0,n.kt)("img",{alt:"memgraph_lab",src:a(66773).Z,style:{width:"30%"}}))),(0,n.kt)("h2",{id:"whats-next"},"What's next?"),(0,n.kt)("p",null,"Take a look at the tutorial we made to help you ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/graph-stream-processing-with-kafka"},"connect Memgraph and\nKafka"),". Learn more about the\nquery power of ",(0,n.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher language"),", or check out ",(0,n.kt)("a",{parentName:"p",href:"/mage"},"MAGE")," -\nan open-source repository that contains graph algorithms and modules that can\nhelp you tackle the most interesting and challenging graph analytics problems."))}d.isMDXComponent=!0},36771:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add-trans-module-3162da8db520fb38d5b6cc1522cf6a82.png"},19103:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/config-parameters-1746ad7eb434a08417d88b868de3419a.png"},60574:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/creating-stream-movielens-dc6ab8d1ca228078b57180d79653dd15.png"},62027:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graph-cff528cf71604bb20316ab4440d837a3.png"},66773:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/stream-video-0e76e24020527f000c7f007a23ea83bd.png"},9554:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/transformation-module-04401babee3b24f1000002b171a51467.png"}}]);