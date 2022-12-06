"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49892],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=h(a),d=r,g=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var h=2;h<o;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var n=a(87462),r=(a(67294),a(3905));const o={id:"run-a-subgraph-module",title:"How to run a MAGE module on subgraphs",sidebar_label:"Run modules on subgraphs"},s=void 0,i={unversionedId:"how-to-guides/run-a-subgraph-module",id:"how-to-guides/run-a-subgraph-module",title:"How to run a MAGE module on subgraphs",description:"The following how-to guide will demonstrate how to run graph analytics on sub-graphs. A portion of the graph is projected from the whole network persisted in Memgraph, and algorithms are run on that portion of the graph.",source:"@site/mage/how-to-guides/run-mage-modules-on-subgraphs.md",sourceDirName:"how-to-guides",slug:"/how-to-guides/run-a-subgraph-module",permalink:"/docs/mage/how-to-guides/run-a-subgraph-module",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/mage/how-to-guides/run-mage-modules-on-subgraphs.md",tags:[],version:"current",frontMatter:{id:"run-a-subgraph-module",title:"How to run a MAGE module on subgraphs",sidebar_label:"Run modules on subgraphs"},sidebar:"mage",previous:{title:"Run a query module",permalink:"/docs/mage/how-to-guides/run-a-query-module"},next:{title:"Graph algorithms",permalink:"/docs/mage/algorithms"}},l={},h=[{value:"When not to run algorithms across the entire network and use the projection feature?",id:"when-not-to-run-algorithms-across-the-entire-network-and-use-the-projection-feature",level:3},{value:"Available graph projections",id:"available-graph-projections",level:3},{value:"Calling query modules on graph projections",id:"calling-query-modules-on-graph-projections",level:3},{value:"Practical example with Twitter influencers",id:"practical-example-with-twitter-influencers",level:2},{value:"Running PageRank on the whole network",id:"running-pagerank-on-the-whole-network",level:3},{value:"Running PageRank on a subgraph",id:"running-pagerank-on-a-subgraph",level:3},{value:"Final remarks",id:"final-remarks",level:3}],u={toc:h};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following how-to guide will demonstrate how to run graph analytics on sub-graphs. A portion of the graph is projected from the whole network persisted in Memgraph, and algorithms are run on that portion of the graph."),(0,r.kt)("p",null,"If you need help with running MAGE modules and graph algorithms, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/mage/how-to-guides/run-a-query-module"},"how-to guide on that topic"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/blog/how-we-designed-and-implemented-graph-projection-feature"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=Related&message=Blog%20post&color=9C59DB&style=for-the-badge",alt:"Related - Blog\nPost"}))),(0,r.kt)("h3",{id:"when-not-to-run-algorithms-across-the-entire-network-and-use-the-projection-feature"},"When not to run algorithms across the entire network and use the projection feature?"),(0,r.kt)("p",null,"Executing any MAGE query module, the algorithm is executed on the whole network.\nThis is impractical in the following use cases: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if the graph is heterogeneous, and you want to run the module only on specific labels"),(0,r.kt)("li",{parentName:"ul"},"if the graph is too large, and you only want to use the analytics to update only a portion of it "),(0,r.kt)("li",{parentName:"ul"},"the network contains multiple diverse data models and graphs, and running analytics on mixed graphs at once might yield unexpected results")),(0,r.kt)("p",null,"That is why Memgraph enables module execution on subgraphs and graph\nprojections. The insights yielded by graph algorithms can then affect only the necessary nodes in your graph,\nmaking the data more consistent and up to its specifications. "),(0,r.kt)("h3",{id:"available-graph-projections"},"Available graph projections"),(0,r.kt)("p",null,"Graph projection function in Memgraph is called ",(0,r.kt)("a",{parentName:"p",href:"/cypher-manual/functions#graph-projection-functions"},"project()"),",\nand it is used in the following way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH p=(n)-[r]->(m)\nWITH project(p) AS subgraph\nRETURN subgraph;\n")),(0,r.kt)("p",null,"The path is specified first which denotes source and target nodes as well as relationships connecting them.\nThe function ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," then constructs a subgraph out of all the generated paths."),(0,r.kt)("p",null,"Because the matched pattern actually includes all the nodes and the relationships in the graph, the result of this query is a projection of the whole graph.\nTo isolate a certain part of the graph, constraints need to be added to either labels, edge types, or properties, like in the query below: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH p=(n:SpecificLabel)-[r:REL_TYPE]->(m:SpecificLabel)\nWITH project(p) AS subgraph\nRETURN subgraph;\n")),(0,r.kt)("p",null,"The query above will return a subgraph of ",(0,r.kt)("inlineCode",{parentName:"p"},"SpecificLabel")," nodes connected with the relationships of type ",(0,r.kt)("inlineCode",{parentName:"p"},"REL_TYPE"),"."),(0,r.kt)("h3",{id:"calling-query-modules-on-graph-projections"},"Calling query modules on graph projections"),(0,r.kt)("p",null,"If you want to run query modules on subgraphs, specify the projected graph as the first argument of the query module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure([optional graph parameter], argument1, argument2, ...) YIELD * RETURN *;\n")),(0,r.kt)("p",null,"If the optional graph projection parameter is not included as the first argument,\nthe query module will be executed on the whole graph."),(0,r.kt)("h2",{id:"practical-example-with-twitter-influencers"},"Practical example with Twitter influencers"),(0,r.kt)("p",null,"In this practical example, PageRank algorithm will be executed on a fictional Twitter dataset.\nPageRank execution is grouped by the Twitter hashtag, and each Tweet can have a different number of retweets."),(0,r.kt)("img",{src:a(98362).Z}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'CREATE (n:Tweet {id: 1, hashtag: "#WorldCup", text: "Cool world cup! #WorldCup"});\nCREATE (n:Tweet {id: 2, hashtag: "#WorldCup", text: "The ball is round #WorldCup!"});\n\nCREATE (n:Tweet {id: 3, hashtag: "#christmas", text: "The town is so shiny during #christmas!"});\nCREATE (n:Tweet {id: 4, hashtag: "#christmas", text: "Why didn\'t I get any presents for #christmas?"});\n\nMATCH (n:Tweet {id: 1}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "Croatia first this year!"});\nMATCH (n:Tweet {id: 1}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "Farewall Dani Alves!"});\nMATCH (n:Tweet {id: 2}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "This is the best WC ever!"});\nMATCH (n:Tweet {id: 2}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "It\'s not so hot this time of the year in Qatar."});\nMATCH (n:Tweet {id: 2}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#WorldCup", text: "What are your predictions?"});\nMATCH (n:Tweet {id: 3}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "Don\'t be a Grinch!"});\nMATCH (n:Tweet {id: 4}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "I\'ll give you a present!"});\nMATCH (n:Tweet {id: 4}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "Santa Claus will visit you tonight!"});\nMATCH (n:Tweet {id: 4}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "This year save me from tears"});\nMATCH (n:Tweet {id: 4}) MERGE (n)<-[:RETWEETED]-(:Tweet {hashtag: "#christmas", text: "All I want for Christmas is youuuu"});\n')),(0,r.kt)("h3",{id:"running-pagerank-on-the-whole-network"},"Running PageRank on the whole network"),(0,r.kt)("p",null,"To run the PageRank algorithms available in the MAGE library, use the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL pagerank.get() YIELD node, rank\nSET node.rank = rank;\n")),(0,r.kt)("p",null,"The PageRank algorithm will take into account all the nodes in the graph.\nIt doesn't really make sense to correlate tweets about World Cup with tweets about Christmas,\nas they are thematically quite different and should be analyzed separately."),(0,r.kt)("h3",{id:"running-pagerank-on-a-subgraph"},"Running PageRank on a subgraph"),(0,r.kt)("p",null,"To run the PageRank on a subset of Christmas tweets only, that portion of the graph is\nsaved as a projection and used as the first argument of the query module: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p=(n:Tweet {hashtag: "#christmas"})-[r]->(m)\nWITH project(p) AS christmas_graph\nCALL pagerank.get(christmas_graph) YIELD node, rank\nSET node.rank = rank\nRETURN node.hashtag, node.text, rank\nORDER BY rank DESC;\n')),(0,r.kt)("img",{src:a(29200).Z}),(0,r.kt)("p",null,"The above query successfully updated the rank of the Christmas tweets only! Let's do the same\non the World Cup tweets by changing the value of the hashtag property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p=(n:Tweet {hashtag: "#WorldCup"})-[r]->(m)\nWITH project(p) AS christmas_graph\nCALL pagerank.get(christmas_graph) YIELD node, rank\nSET node.rank = rank\nRETURN node.hashtag, node.text, rank\nORDER BY rank DESC;\n')),(0,r.kt)("img",{src:a(24266).Z}),(0,r.kt)("h3",{id:"final-remarks"},"Final remarks"),(0,r.kt)("p",null,"This how-to guide showed how to run algorithms on subgraphs. If you want to try out other\nMAGE algorithms and run them on subgraphs, check the ",(0,r.kt)("a",{parentName:"p",href:"/mage/query-modules/available-queries"},"list of available query modules"),"!"))}p.isMDXComponent=!0},29200:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/christmas-subgraph-fb3def30d778db6800c38232037a76d7.png"},98362:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/whole-graph-1fb306305c8a3a5c71f9b2bfdc870c8e.png"},24266:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/world-cup-subgraph-587f2ed48f9a46a297826329e8d1f68d.png"}}]);