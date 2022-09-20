"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33465],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return g}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=m(a),g=n,d=u["".concat(p,".").concat(g)]||u[g]||h[g]||o;return a?r.createElement(d,i(i({ref:e},s),{},{components:a})):r.createElement(d,i({ref:e},s))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93442:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return h}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"overview",title:"Tutorials",sidebar_label:"Tutorials overview",slug:"/tutorials"},p=void 0,m={unversionedId:"tutorials/overview",id:"version-2.3.1/tutorials/overview",title:"Tutorials",description:"Tutorials are guides on how to use Memgraph in real-world examples to help you",source:"@site/memgraph_versioned_docs/version-2.3.1/tutorials/overview.md",sourceDirName:"tutorials",slug:"/tutorials",permalink:"/docs/memgraph/2.3.1/tutorials",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.3.1/tutorials/overview.md",tags:[],version:"2.3.1",frontMatter:{id:"overview",title:"Tutorials",sidebar_label:"Tutorials overview",slug:"/tutorials"},sidebar:"memgraph",previous:{title:"PostgreSQL",permalink:"/docs/memgraph/2.3.1/import-data/migrate/postgresql"},next:{title:"First steps with Memgraph",permalink:"/docs/memgraph/2.3.1/tutorials/first-steps-with-memgraph"}},s={},h=[{value:"Basic tutorials",id:"basic-tutorials",level:2},{value:"Tutorials with available GitHub repositories",id:"tutorials-with-available-github-repositories",level:2},{value:"Various other blog tutorials",id:"various-other-blog-tutorials",level:2}],u={toc:h};function g(t){var e=t.components,a=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Tutorials are guides on how to use Memgraph in real-world examples to help you\nkick off your own Memgraph graph database adventures."),(0,o.kt)("h2",{id:"basic-tutorials"},"Basic tutorials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/first-steps-with-memgraph"},(0,o.kt)("strong",{parentName:"a"},"First steps with Memgraph"))," - learn\nhow to install Memgraph Platform, connect to it using Memgraph Lab, run your\nfirst query and style your graph"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/install-memgraph-windows-10"},(0,o.kt)("strong",{parentName:"a"},"Install MemgraphDB and Memgraph Lab on Windows\n10"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/graph-modeling"},(0,o.kt)("strong",{parentName:"a"},"Graph modeling"))," - learn basic terminology and\npractices related to graph databases and graph modeling"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/migrate-relational-database"},(0,o.kt)("strong",{parentName:"a"},"Migrate from RDBMS to Memgraph"))," - learn\nhow to migrate your data from a relational database to Memgraph"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/exploring-datasets"},(0,o.kt)("strong",{parentName:"a"},"Exploring datasets"))," - learn\nthe Cypher query language used to interact with the Memgraph graph database"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/style-your-graphs-in-memgraph-lab"},(0,o.kt)("strong",{parentName:"a"},"Style your graphs in Memgraph Lab"))," - learn Style script to add style to your graphs in Memgraph Lab"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/implement-custom-query-module-in-python"},(0,o.kt)("strong",{parentName:"a"},"Implement a custom query module in\nPython"))," - learn how to develop a\ncustom query module in Python with Memgraph Lab and use it on a dataset"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/social-network-analysis"},(0,o.kt)("strong",{parentName:"a"},"Social network analysis with NetworkX"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/understanding-music-with-modules"},(0,o.kt)("strong",{parentName:"a"},"Exploring a music social network"))," - learn how to extend the\nCypher query language by implementing query modules"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/memgraph/2.3.1/tutorials/graph-stream-processing-with-kafka"},(0,o.kt)("strong",{parentName:"a"},"Graph stream processing with\nKafka"))," - learn how to connect\nMemgraph to an existing Kafka stream in order to ingest and analyze data in\nreal-time")),(0,o.kt)("h2",{id:"tutorials-with-available-github-repositories"},"Tutorials with available GitHub repositories"),(0,o.kt)("p",null,"Our developers, the best graph masters and coders, have prepared some high\nquality blog posts to demonstrate how to build real-world applications that use\ngraph analytics and how to perform complex network analysis with Memgraph."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Article"),(0,o.kt)("th",{parentName:"tr",align:null},"GitHub code"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Streaming data"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/slack-influence-bot"},"Analyzing Interactions in a Slack Communication Network")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/slack-influence-bot/"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2611\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/spotify-song-recommender"},"How to build a Spotify Recommendation Engine using Kafka and Memgraph")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/spotify-song-recommender"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2611\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/reddit-network-explorer"},"Visualizing and Analyzing Reddit In Real-Time with Kafka and Memgraph")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/reddit-network-explorer/"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2611\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/visualize-the-bitclout-network-using-d3js"},"Building a BitClout Social Network Visualization App With Memgraph and D3.js")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/bitclout-visualizing-hodlers/tree/main/bitclout-demo"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/how-to-build-a-flight-network-analysis-graph-asp-net-application-with-memgraph-c-sharp-and-d3-js"},"How to Build a Flight Network Analysis Graph-Based ASP.NET Application with Memgraph, C#, and D3.js")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/MemFlights"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/how-to-develop-a-credit-card-fraud-detection-application-using-memgraph-flask-and-d3js"},"How to Develop a Credit Card Fraud Detection Application using Memgraph, Flask, and D3.js")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/card-fraud"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/how-to-visualize-a-social-network-in-python-with-a-graph-database"},"How to Visualize a Social Network in Python with a Graph Database: Flask + Docker + D3.js")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/sng-demo"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://memgraph.com/blog/identifying-essential-proteins"},"Identifying Essential Proteins using Betweenness Centrality & Memgraph MAGE")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/memgraph/protein-explorer"},"Repository")),(0,o.kt)("td",{parentName:"tr",align:"center"})))),(0,o.kt)("h2",{id:"various-other-blog-tutorials"},"Various other blog tutorials"),(0,o.kt)("p",null,"Blog tutorials written by the Memgraph developers to help you see how graphs can\nchange the way we think about the world."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/air-traffic-routing-with-memgraph"},"Air Traffic Routing with\nMemgraph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/building-a-recommendation-system-using-memgraph"},"Building a Recommendation System using\nMemgraph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/exploring-the-hebrew-bible-person-relationships"},"Exploring Interpersonal Relationships in the\nBible")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/how-to-implement-custom-json-utility-procedures-with-memgraph-mage-and-python"},"How to Implement Custom JSON Utility Procedures With Memgraph MAGE and\nPython")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/how-to-write-custom-cypher-procedures-with-networkx-and-memgraph"},"How to Write Custom Cypher Procedures with NetworkX and\nMemgraph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/influencers-among-computer-scientists"},"Influencers among computer\nscientists")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/modeling_visualizing_navigating_a_transportation_network_with_memgraph"},"Modeling, Visualizing, and Navigating a Transportation Network with\nMemgraph")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/optimizing_telco_networks_with_graph_coloring_and_memgraph_mage"},"Optimizing Telco Networks With Graph Coloring & Memgraph\nMAGE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://memgraph.com/blog/community-detection-with-memgraph-and-python-networkx"},"Running Community Detection with Memgraph and Python\nNetworkX"))))}g.isMDXComponent=!0}}]);