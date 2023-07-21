"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[15363],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(a),g=r,c=u["".concat(m,".").concat(g)]||u[g]||d[g]||o;return a?n.createElement(c,s(s({ref:t},p),{},{components:a})):n.createElement(c,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={id:"graph-stream-processing-with-kafka",title:"Graph stream processing with Kafka and Memgraph",sidebar_label:"Graph stream processing with Kafka"},s=void 0,i={unversionedId:"tutorials/graph-stream-processing-with-kafka",id:"version-2.8.0/tutorials/graph-stream-processing-with-kafka",title:"Graph stream processing with Kafka and Memgraph",description:"In this tutorial, you will learn how to connect Memgraph to an existing Kafka",source:"@site/memgraph_versioned_docs/version-2.8.0/tutorials/graph-stream-processing-with-kafka.md",sourceDirName:"tutorials",slug:"/tutorials/graph-stream-processing-with-kafka",permalink:"/docs/memgraph/2.8.0/tutorials/graph-stream-processing-with-kafka",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.8.0/tutorials/graph-stream-processing-with-kafka.md",tags:[],version:"2.8.0",frontMatter:{id:"graph-stream-processing-with-kafka",title:"Graph stream processing with Kafka and Memgraph",sidebar_label:"Graph stream processing with Kafka"},sidebar:"memgraph",previous:{title:"Exploring a music social network",permalink:"/docs/memgraph/2.8.0/tutorials/understanding-music-with-modules"},next:{title:"How-to guides overview",permalink:"/docs/memgraph/2.8.0/how-to-guides"}},m={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Data stream",id:"data-stream",level:2},{value:"1. Prepare Memgraph",id:"1-prepare-memgraph",level:2},{value:"2. Create a transformation module",id:"2-create-a-transformation-module",level:2},{value:"Python API",id:"python-api",level:3},{value:"Transformation function",id:"transformation-function",level:3},{value:"3. Create a stream",id:"3-create-a-stream",level:2},{value:"4. Add a transformation module",id:"4-add-a-transformation-module",level:2},{value:"5. Set Kafka configuration parameters",id:"5-set-kafka-configuration-parameters",level:2},{value:"6. Connect Memgraph to the stream and start ingesting the data",id:"6-connect-memgraph-to-the-stream-and-start-ingesting-the-data",level:2},{value:"7. Analyze the streaming data",id:"7-analyze-the-streaming-data",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, you will learn how to connect Memgraph to an existing Kafka\nstream using Memgraph Lab, and transform data into graph database objects to\nanalyze it in real-time."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.8.0/reference-guide/streams"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Reference%20Guide&color=yellow&style=for-the-badge",alt:"Related - Reference Guide"}))),(0,r.kt)("p",null,"If you are still very new to streaming, feel free to first read some of our blog\nposts about the topic to learn ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/introduction-to-stream-processing"},"what stream processing\nis"),", ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/batch-processing-vs-stream-processing"},"how it\ndiffers from batch\nprocessing")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/streaming-databases"},"how streaming databases work"),"."),(0,r.kt)("p",null,"Now that you've covered theory, let's dive into practice!"),(0,r.kt)("p",null,"We will focus on processing real-time movie ratings that are streamed through\nMovieLens Kafka stream from the ",(0,r.kt)("a",{parentName:"p",href:"https://awesomedata.stream/#/movielens"},"Awesome Data\nStream")," using Memgraph Lab and the\nCypher query language."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow this tutorial, you will need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/memgraph/2.8.0/installation"},"Memgraph Platform")," or ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.memgraph.com"},"Memgraph Cloud"))),(0,r.kt)("p",null,"You can use Memgraph Cloud for a 2-week trial period, or you can install\nMemgraph Platform locally. "),(0,r.kt)("h2",{id:"data-stream"},"Data stream"),(0,r.kt)("p",null,"For this tutorial, we will use MovieLens Kafka stream from the ",(0,r.kt)("a",{parentName:"p",href:"https://awesomedata.stream/#/movielens"},"Awesome Data\nStream"),". MovieLens data stream streams\nmovie ratings, and each JSON message represents a new movie rating:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'"userId": "112",\n"movie": {\n  "movieId": "4993",\n  "title": "Lord of the Rings: The Fellowship of the Ring, The (2001)",\n  "genres": ["Adventure", "Fantasy"]\n},\n"rating": "5",\n"timestamp": "1442535783"\n')),(0,r.kt)("h2",{id:"1-prepare-memgraph"},"1. Prepare Memgraph"),(0,r.kt)("p",null,"Let's open Memgraph Lab, where we will write the transformation module and\nconnect to the stream."),(0,r.kt)("p",null,"If you have successfully installed Memgraph Platform, you should be able to open\nMemgraph Lab in a browser at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:3000/")),"."),(0,r.kt)("p",null,"If you are using Memgraph Cloud, open the running instance, and open the\n",(0,r.kt)("strong",{parentName:"p"},"Connect via Client")," tab, then click on ",(0,r.kt)("strong",{parentName:"p"},"Connect in Browser")," to open\nMemgraph Lab in a new browser tab. Enter your project password and ",(0,r.kt)("strong",{parentName:"p"},"Connect Now"),"."),(0,r.kt)("h2",{id:"2-create-a-transformation-module"},"2. Create a transformation module"),(0,r.kt)("p",null,"The prerequisite of connecting Memgraph to a stream is to have a transformation\nmodule with procedures that can produce Cypher queries based on the received\nmessages. Procedures can be written in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.8.0/reference-guide/streams/transformation-modules/api/python-api"},"Python")," or\n",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.8.0/reference-guide/streams/transformation-modules/api/c-api"},"C")," languages. If you\nneed more information about what transformation modules are, please read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.8.0/reference-guide/streams/transformation-modules"},"reference\nguide on transformation modules"),"."),(0,r.kt)("p",null,"Memgraph Lab allows you to develop Python transformation modules in-app:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Query Modules"),". Here you can see all the query modules\navailable in Memgraph, such as utility modules or query modules from the MAGE\nlibrary. Here you will also be able to check out and edit any transformation\nmodules you develop while using Memgraph."),(0,r.kt)("img",{src:a(10283).Z,className:"imgBorder"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"+ New Module")," button, give the new module name ",(0,r.kt)("inlineCode",{parentName:"p"},"movielens"),"\nand create the module.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Memgraph Lab creates sample procedures you can erase, so you have a clean\nslate for writing the ",(0,r.kt)("inlineCode",{parentName:"p"},"movielens")," transformation module."),(0,r.kt)("img",{src:a(48295).Z,className:"imgBorder"}))),(0,r.kt)("h3",{id:"python-api"},"Python API"),(0,r.kt)("p",null,"Python API is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp")," module you can find in the Memgraph\ninstallation directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),". In essence, Python\nAPI is a wrapper around the C API, and at the beginning of each new module, you\nneed to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"mgp"),". As the messages from the streams are coming as JSON\nmessages, you need to ",(0,r.kt)("inlineCode",{parentName:"p"},"import json")," module for Memgraph to read them correctly.\nBelow the imported modules, you need to define the ",(0,r.kt)("inlineCode",{parentName:"p"},"@mgp.transformation"),"\ndecorator, which handles data coming from streams."),(0,r.kt)("p",null,"Python API also defines ",(0,r.kt)("inlineCode",{parentName:"p"},"@mgp.read_proc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@mgp.write_proc")," decorators.\n",(0,r.kt)("inlineCode",{parentName:"p"},"@mgp.read_proc")," decorator handles read-only procedures, the ",(0,r.kt)("inlineCode",{parentName:"p"},"@mgp.write_proc"),"\ndecorator handles procedures that also write to the database and they are used\nin ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.8.0/tutorials/implement-custom-query-module-in-python"},"writing custom query\nmodules"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\nimport json\n\n@mgp.transformation\n")),(0,r.kt)("p",null,"Now you are ready to write the function that will transform JSON messages to\ngraph entities.  "),(0,r.kt)("h3",{id:"transformation-function"},"Transformation function"),(0,r.kt)("p",null,"First, define the function ",(0,r.kt)("inlineCode",{parentName:"p"},"rating")," that will receive a list of messages and return\nqueries that will be executed in Memgraph as any regular query in order to\ncreate nodes and relationships, so the signature of the function looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\nimport json\n\n@mgp.transformation\ndef rating(messages: mgp.Messages\n                ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n")),(0,r.kt)("p",null,"Now you need to iterate through each message within the batch, decode it with\n",(0,r.kt)("inlineCode",{parentName:"p"},"json.loads")," and save the elements of the message in the ",(0,r.kt)("inlineCode",{parentName:"p"},"movie_dict")," variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\nimport json\n\n@mgp.transformation\ndef rating(messages: mgp.Messages\n                ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        movie_dict = json.loads(message.payload().decode('utf8'))\n")),(0,r.kt)("p",null,"Now, you create the queries that will execute in Memgraph. You instruct Memgraph\nto create ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Movie")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Genre")," nodes, then connect the nodes with\nappropriate relationships. In each query, you also define the entity properties.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import mgp\nimport json\n\n@mgp.transformation\ndef rating(messages: mgp.Messages\n                ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        movie_dict = json.loads(message.payload().decode(\'utf8\'))\n        result_queries.append(\n            mgp.Record(\n                query=("MERGE (u:User {id: $userId}) "\n                        "MERGE (m:Movie {id: $movieId, title: $title}) "\n                        "WITH u, m "\n                        "UNWIND $genres as genre "\n                        "MERGE (m)-[:OF_GENRE]->(:Genre {name: genre}) "\n                        "MERGE (u)-[r:RATED {rating: ToFloat($rating), timestamp: $timestamp}]->(m)"),\n\n')),(0,r.kt)("p",null,"Once you set the placeholders, you can fill them out by applying the values\nfrom the messages to the node and relationship properties, and return the\nqueries. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import mgp\nimport json\n\n@mgp.transformation\ndef rating(messages: mgp.Messages\n                ) -> mgp.Record(query=str, parameters=mgp.Nullable[mgp.Map]):\n    result_queries = []\n\n    for i in range(messages.total_messages()):\n        message = messages.message_at(i)\n        movie_dict = json.loads(message.payload().decode(\'utf8\'))\n        result_queries.append(\n            mgp.Record(\n                query=("MERGE (u:User {id: $userId}) "\n                        "MERGE (m:Movie {id: $movieId, title: $title}) "\n                        "WITH u, m "\n                        "UNWIND $genres as genre "\n                        "MERGE (m)-[:OF_GENRE]->(:Genre {name: genre}) "\n                        "MERGE (u)-[r:RATED {rating: ToFloat($rating), timestamp: $timestamp}]->(m)"),\n                parameters={\n                    "userId": movie_dict["userId"],\n                    "movieId": movie_dict["movie"]["movieId"],\n                    "title": movie_dict["movie"]["title"],\n                    "genres": movie_dict["movie"]["genres"],\n                    "rating": movie_dict["rating"],\n                    "timestamp": movie_dict["timestamp"]}))\n\n    return result_queries\n')),(0,r.kt)("p",null,"Congratulations, you just created your first transformation procedure! Save it\nand you should be able to see transformation ",(0,r.kt)("inlineCode",{parentName:"p"},"rating() -> ()")," among the\n",(0,r.kt)("strong",{parentName:"p"},"Detected procedures & transformations"),". "),(0,r.kt)("img",{src:a(29158).Z,className:"imgBorder"}),(0,r.kt)("p",null,"You can now ",(0,r.kt)("strong",{parentName:"p"},"Save and Close")," the module to get an overview of the module that\nlists procedures and their signature."),(0,r.kt)("img",{src:a(56429).Z,className:"imgBorder"}),(0,r.kt)("h2",{id:"3-create-a-stream"},"3. Create a stream"),(0,r.kt)("p",null,"To add a stream in Memgraph Lab: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Switch to ",(0,r.kt)("strong",{parentName:"li"},"Streams")," and ",(0,r.kt)("strong",{parentName:"li"},"Add New Stream"),"."),(0,r.kt)("li",{parentName:"ol"},"Choose Kafka stream type, enter stream name ",(0,r.kt)("inlineCode",{parentName:"li"},"movielens"),", server address\n",(0,r.kt)("inlineCode",{parentName:"li"},"get.awesomedata.stream:9093"),", and topics ",(0,r.kt)("inlineCode",{parentName:"li"},"rating")," as instructed on the ",(0,r.kt)("a",{parentName:"li",href:"https://awesomedata.stream/#/movielens"},"Awesome\nData Stream")),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Next Step"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Edit")," (pencil icon) to modify the ",(0,r.kt)("em",{parentName:"li"},"Consumer Group")," to the one\nwritten on the ",(0,r.kt)("a",{parentName:"li",href:"https://awesomedata.stream/#/movielens"},"Awesome Data Stream"),". As\nthe streams are public, consumer groups need to be unique. ")),(0,r.kt)("p",null,"The stream configuration should look something like this:"),(0,r.kt)("img",{src:a(91445).Z,className:"imgBorder"}),(0,r.kt)("h2",{id:"4-add-a-transformation-module"},"4. Add a transformation module"),(0,r.kt)("p",null,"To add the ",(0,r.kt)("inlineCode",{parentName:"p"},"movielens")," Python transformation module you developed earlier to a stream:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Add Transformation Module"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Choose Transformation Module"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"movielens")," transformation module"),(0,r.kt)("li",{parentName:"ol"},"Check if the necessary transformation procedure ",(0,r.kt)("inlineCode",{parentName:"li"},"rating() -> ()")," is visible under ",(0,r.kt)("strong",{parentName:"li"},"Detected\ntransformation functions")," on the right."),(0,r.kt)("li",{parentName:"ol"},"Select it and ",(0,r.kt)("strong",{parentName:"li"},"Attach to Stream"),".")),(0,r.kt)("img",{src:a(89592).Z,className:"imgBorder"}),(0,r.kt)("h2",{id:"5-set-kafka-configuration-parameters"},"5. Set Kafka configuration parameters"),(0,r.kt)("p",null,"Due to the nature of the public MovieLens Awesome Data Stream, you need to add\nadditional Kafka configuration parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sasl.username"),": public ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sasl.password"),": public ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"security.protocol"),": SASL_PLAINTEXT ",(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sasl.mechanism"),": PLAIN ",(0,r.kt)("br",null))),(0,r.kt)("p",null,"In order to do so:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Kafka Configuration Parameters ",(0,r.kt)("strong",{parentName:"li"},"+ Add parameter field"),"."),(0,r.kt)("li",{parentName:"ol"},"Insert the parameter name and value."),(0,r.kt)("li",{parentName:"ol"},"To add another parameter, ",(0,r.kt)("strong",{parentName:"li"},"Add parameter filed"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Save Configuration")," once you have set all parameters.")),(0,r.kt)("img",{src:a(4551).Z,className:"imgBorder"}),(0,r.kt)("h2",{id:"6-connect-memgraph-to-the-stream-and-start-ingesting-the-data"},"6. Connect Memgraph to the stream and start ingesting the data"),(0,r.kt)("p",null,"Once the stream is configured, you can ",(0,r.kt)("strong",{parentName:"p"},"Connect to Stream"),". "),(0,r.kt)("p",null,"Memgraph will do a series of checks, ensuring that defined topics and\ntransformation procedures are correctly configured. If all checks pass\nsuccessfully, you can ",(0,r.kt)("strong",{parentName:"p"},"Start the stream"),". Once you start the stream, you will\nno longer be able to change configuration settings, just the transformation\nmodule. "),(0,r.kt)("p",null,"The stream status changes to ",(0,r.kt)("strong",{parentName:"p"},"Running"),", and data is ingested into Memgraph.\nYou can see the number of nodes and relationships rising as the data keeps\ncoming in. "),(0,r.kt)("h2",{id:"7-analyze-the-streaming-data"},"7. Analyze the streaming data"),(0,r.kt)("p",null,"Switch to ",(0,r.kt)("strong",{parentName:"p"},"Query Execution")," and run a query to visualize the data coming in: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"MATCH p=(n)-[r]-(m)\nRETURN p LIMIT 100;\n")),(0,r.kt)("img",{src:a(16050).Z,className:"imgBorder"}),(0,r.kt)("p",null,"Congratulations! You have connected Memgraph to a Kafka stream. We've prepared\nqueries that utilize the most powerful graph algorithms to gain every last bit\nof insight that data can provide. ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/how-to-analyze-a-streaming-dataset-of-movie-ratings-using-custom-query-modules"},"Let the querying\nbegin"),"!"),(0,r.kt)("p",null,"If you are new to Cypher, check ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual"},(0,r.kt)("strong",{parentName:"a"},"Cypher query language\nmanual")),". You can also try using various graph algorithms and\nmodules from our open-source repository ",(0,r.kt)("a",{parentName:"p",href:"/mage"},(0,r.kt)("strong",{parentName:"a"},"MAGE"))," to solve graph\nanalytics problems, create awesome customized visual displays of your nodes and\nrelationships with ",(0,r.kt)("a",{parentName:"p",href:"/memgraph-lab/graph-style-script-language"},(0,r.kt)("strong",{parentName:"a"},"Graph Style\nScript")),"."),(0,r.kt)("p",null,"You can also explore other data streams from the ",(0,r.kt)("a",{parentName:"p",href:"https://awesomedata.stream/"},"Awesome Data\nStream")," site! Feel free to play around with the\nPython API some more and let us know what you are working on through our\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/memgraph"},"Discord server"),"."),(0,r.kt)("p",null,"Above all - enjoy your graph database!"))}d.isMDXComponent=!0},4551:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config-parameters-1746ad7eb434a08417d88b868de3419a.png"},91445:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/creating-stream-movielens-dc6ab8d1ca228078b57180d79653dd15.png"},16050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graph-cff528cf71604bb20316ab4440d837a3.png"},48295:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/query-modules-empty-bfcedf582a050a4d2c55d3f4bdf75963.png"},10283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/query-modules-df58be16f43f24f92983dae3bc53997a.png"},56429:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/signature-f6799c0b258461b6504d8ebd181e945d.png"},29158:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transformation-module-from-qm-e6d3294ca999ad2d724229e9cf36eca2.png"},89592:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transformation-module-04401babee3b24f1000002b171a51467.png"}}]);