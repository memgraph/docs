"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6009],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=l(a),u=n,h=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return a?r.createElement(h,s(s({ref:t},p),{},{components:a})):r.createElement(h,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:n,s[1]=m;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={id:"manage-streams-lab",title:"How to manage data streams from Memgraph Lab",sidebar_label:"Manage data streams from Memgraph Lab"},s=void 0,m={unversionedId:"how-to-guides/streams/manage-streams-lab",id:"version-2.10.0/how-to-guides/streams/manage-streams-lab",title:"How to manage data streams from Memgraph Lab",description:"If you prefer to use GUI, you can connect to data streams by using a wizard in",source:"@site/memgraph_versioned_docs/version-2.10.0/how-to-guides/streams/manage-streams-lab.md",sourceDirName:"how-to-guides/streams",slug:"/how-to-guides/streams/manage-streams-lab",permalink:"/docs/memgraph/how-to-guides/streams/manage-streams-lab",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.10.0/how-to-guides/streams/manage-streams-lab.md",tags:[],version:"2.10.0",frontMatter:{id:"manage-streams-lab",title:"How to manage data streams from Memgraph Lab",sidebar_label:"Manage data streams from Memgraph Lab"}},i={},l=[{value:"How to add a stream?",id:"how-to-add-a-stream",level:2},{value:"How to add a transformation module?",id:"how-to-add-a-transformation-module",level:2},{value:"How to set Kafka configuration parameters?",id:"how-to-set-kafka-configuration-parameters",level:2},{value:"How to connect Memgraph to the stream and start ingesting the data?",id:"how-to-connect-memgraph-to-the-stream-and-start-ingesting-the-data",level:2},{value:"How to manage a stream?",id:"how-to-manage-a-stream",level:2},{value:"How to start, stop or delete a stream?",id:"how-to-start-stop-or-delete-a-stream",level:3},{value:"How to edit a stream?",id:"how-to-edit-a-stream",level:3},{value:"How to change Kafka stream offset?",id:"how-to-change-kafka-stream-offset",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you prefer to use GUI, you can connect to data streams by using a wizard in\nthe ",(0,n.kt)("strong",{parentName:"p"},"Stream")," section of Memgraph Lab. If you prefere writing commands, you can\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/streams/manage-streams"},"manage streams with queries"),". "),(0,n.kt)("p",null,"If you need a Kafka stream to play around with, we've provided some at ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/"},"Awesome\nData Stream"),"! "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))," ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/graph-stream-processing-with-kafka"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Tutorial&color=008a00&style=for-the-badge",alt:"Related -\nTutorial"}))),(0,n.kt)("h2",{id:"how-to-add-a-stream"},"How to add a stream?"),(0,n.kt)("p",null,"To add a stream in Memgraph Lab: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Switch to ",(0,n.kt)("strong",{parentName:"li"},"Streams")," and ",(0,n.kt)("strong",{parentName:"li"},"Add New Stream"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose stream type, enter a stream name, server address, and topics you want to subscribe to."),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Next Step"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Edit")," (pencil icon) to modify the ",(0,n.kt)("em",{parentName:"li"},"Consumer Group"),", ",(0,n.kt)("em",{parentName:"li"},"Batch\nInterval")," or ",(0,n.kt)("em",{parentName:"li"},"Batch Size"),".")),(0,n.kt)("p",null,"If you are trying to connect to MovieLens Kafka data stream from the ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/#/movielens"},"Awesome Data\nStream"),", the stream configuration should\nlook like this:"),(0,n.kt)("img",{src:a(60574).Z,className:"imgBorder"}),(0,n.kt)("p",null,"Once the basic configuration is finished, you need to define a transformation\nmodule and attach it to the stream. "),(0,n.kt)("h2",{id:"how-to-add-a-transformation-module"},"How to add a transformation module?"),(0,n.kt)("p",null,"A transformation module is a set of user-defined transformation procedures\nwritten in ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules/api/c-api"},"C")," or\n",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/reference-guide/streams/transformation-modules/api/python-api"},"Python")," that\nact on data received from a streaming source. Transformation procedures instruct\nMemgraph on how to transform the incoming messages to consume them correctly."),(0,n.kt)("p",null,"At the moment, you can only develop Python transformation modules directly from\nMemgraph Lab. "),(0,n.kt)("p",null,"To add a Python transformation module to a stream:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Transformation Module"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Choose Transformation Module"),"."),(0,n.kt)("li",{parentName:"ol"},"Select an existing transformation module or ",(0,n.kt)("strong",{parentName:"li"},"+ Create new transformation"),"."),(0,n.kt)("li",{parentName:"ol"},"Review an existing module or clear the screen and write a new transformation\nprocedure."),(0,n.kt)("li",{parentName:"ol"},"Save the transformation module."),(0,n.kt)("li",{parentName:"ol"},"Check if the necessary transformation procedure is visible under ",(0,n.kt)("strong",{parentName:"li"},"Detected\ntransformation functions")," on the right."),(0,n.kt)("li",{parentName:"ol"},"Select a transformation procedure and ",(0,n.kt)("strong",{parentName:"li"},"Attach to Stream"),".")),(0,n.kt)("p",null,"You can also develop transformation modules in Python beforehand, in the section\n",(0,n.kt)("strong",{parentName:"p"},"Query Modules"),". Click on the ",(0,n.kt)("strong",{parentName:"p"},"New Module"),", and the Lab will automatically\nrecognize transformation procedures once you define them."),(0,n.kt)("p",null,"If you developed a procedure in C, you have to ",(0,n.kt)("a",{parentName:"p",href:"/docs/memgraph/how-to-guides/streams/manage-streams#how-to-create-and-load-a-transformation-module-into-memgraph"},"load it into\nMemgraph"),"\nfirst, and then you will be able to see it in the ",(0,n.kt)("strong",{parentName:"p"},"Query Modules")," section and\nattach it to a stream. "),(0,n.kt)("p",null,"Check the transformation module for MovieLens on ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/#/movielens"},"Awesome Data\nStream"),"."),(0,n.kt)("img",{src:a(9554).Z,className:"imgBorder"}),(0,n.kt)("h2",{id:"how-to-set-kafka-configuration-parameters"},"How to set Kafka configuration parameters?"),(0,n.kt)("p",null,"If necessary, add the Kafka configuration parameters to customize the stream further:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Kafka Configuration Parameters ",(0,n.kt)("strong",{parentName:"li"},"+ Add parameter field"),"."),(0,n.kt)("li",{parentName:"ol"},"Insert the parameter name and value."),(0,n.kt)("li",{parentName:"ol"},"To add another parameter, ",(0,n.kt)("strong",{parentName:"li"},"Add parameter filed"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Save Configuration")," once you have set all parameters.")),(0,n.kt)("p",null,"To connect to the ",(0,n.kt)("a",{parentName:"p",href:"https://awesomedata.stream/"},"Awesome Data Stream")," you need to set\nthe following Kafka configuration parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sasl.username")," ","|"," public ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sasl.password")," ","|"," public ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"security.protocol")," ","|"," SASL_PLAINTEXT ",(0,n.kt)("br",null)),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sasl.mechanism")," ","|"," PLAIN ",(0,n.kt)("br",null))),(0,n.kt)("img",{src:a(19103).Z,className:"imgBorder"}),(0,n.kt)("h2",{id:"how-to-connect-memgraph-to-the-stream-and-start-ingesting-the-data"},"How to connect Memgraph to the stream and start ingesting the data?"),(0,n.kt)("p",null,"Once the stream is configured, you can ",(0,n.kt)("strong",{parentName:"p"},"Connect to Stream"),". "),(0,n.kt)("p",null,"Memgraph will do a series of checks, ensuring that defined topics and\ntransformation procedures are correctly configured. If all checks pass\nsuccessfully, you can ",(0,n.kt)("strong",{parentName:"p"},"Start the stream"),". Once you start the stream, you will\nno longer be able to change any of the configuration settings, just the\ntransformation module. "),(0,n.kt)("p",null,"The stream status changes to ",(0,n.kt)("strong",{parentName:"p"},"Running"),", and data is ingested into Memgraph.\nYou can see the number of nodes and relationships rising as the data keeps\ncoming in. If your nodes and relationships numbers stay at zero, check the\ntransformation module, as there might be a flaw in the logic that needs to be\nresolved. "),(0,n.kt)("p",null,"Switch to ",(0,n.kt)("strong",{parentName:"p"},"Query Execution")," and run a query to visualize the data coming in: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"MATCH p=(n)-[r]-(m)\nRETURN p LIMIT 100;\n")),(0,n.kt)("img",{src:a(62027).Z,lassName:"imgBorder"}),(0,n.kt)("h2",{id:"how-to-manage-a-stream"},"How to manage a stream?"),(0,n.kt)("p",null,"To manage a stream in Memgraph Lab, go to ",(0,n.kt)("strong",{parentName:"p"},"Streams")," and click on the stream\nyou want to manage. "),(0,n.kt)("h3",{id:"how-to-start-stop-or-delete-a-stream"},"How to start, stop or delete a stream?"),(0,n.kt)("p",null,"To start a draft steam, click on ",(0,n.kt)("strong",{parentName:"p"},"Connect to Stream"),"."),(0,n.kt)("p",null,"To stop or start a stream, click on ",(0,n.kt)("strong",{parentName:"p"},"Stop Stream"),"/",(0,n.kt)("strong",{parentName:"p"},"Start Stream"),"."),(0,n.kt)("p",null,"To delete a stream, click on ",(0,n.kt)("strong",{parentName:"p"},"Delete Stream"),"."),(0,n.kt)("h3",{id:"how-to-edit-a-stream"},"How to edit a stream?"),(0,n.kt)("p",null,"You cannot edit a started stream. You can only create a new stream with the\nchanges you want to implement."),(0,n.kt)("p",null,"You can only change the transformation module and the stream\noffset.."),(0,n.kt)("h2",{id:"how-to-change-kafka-stream-offset"},"How to change Kafka stream offset?"),(0,n.kt)("p",null,"Kafka stream offset can be changed using a query only:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.kafka_set_stream_offset(streamName, offset)\n")),(0,n.kt)("p",null,"An offset of ",(0,n.kt)("inlineCode",{parentName:"p"},"-1")," denotes the beginning offset available for the given\ntopic/partition. "),(0,n.kt)("p",null,"An offset of ",(0,n.kt)("inlineCode",{parentName:"p"},"-2")," denotes the end of the stream and only the\nnext produced message will be consumed."))}d.isMDXComponent=!0},19103:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/config-parameters-1746ad7eb434a08417d88b868de3419a.png"},60574:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/creating-stream-movielens-dc6ab8d1ca228078b57180d79653dd15.png"},62027:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/graph-cff528cf71604bb20316ab4440d837a3.png"},9554:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/transformation-module-04401babee3b24f1000002b171a51467.png"}}]);