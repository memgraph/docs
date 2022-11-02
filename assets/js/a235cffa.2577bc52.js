"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),c=i,h=p["".concat(s,".").concat(c)]||p[c]||u[c]||a;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},o=void 0,l={unversionedId:"tutorials/social-network-analysis",id:"version-2.1.1/tutorials/social-network-analysis",title:"Social network analysis with NetworkX",description:"Introduction",source:"@site/memgraph_versioned_docs/version-2.1.1/tutorials/social-network-analysis.md",sourceDirName:"tutorials",slug:"/tutorials/social-network-analysis",permalink:"/docs/memgraph/2.1.1/tutorials/social-network-analysis",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.1/tutorials/social-network-analysis.md",tags:[],version:"2.1.1",frontMatter:{id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},sidebar:"memgraph",previous:{title:"Graph stream processing with Kafka",permalink:"/docs/memgraph/2.1.1/tutorials/graph-stream-processing-with-kafka"},next:{title:"Style your graphs in Memgraph Lab",permalink:"/docs/memgraph/2.1.1/tutorials/style-your-graphs-in-memgraph-lab"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Data model",id:"data-model",level:2},{value:"Importing the dataset",id:"importing-the-dataset",level:2},{value:"Using existing NetworkX algorithms",id:"using-existing-networkx-algorithms",level:2},{value:"Betweenness centrality",id:"betweenness-centrality",level:3},{value:"Link prediction",id:"link-prediction",level:3},{value:"Adding new NetworkX algorithms as query modules",id:"adding-new-networkx-algorithms-as-query-modules",level:2},{value:"Community detection",id:"community-detection",level:3},{value:"Further reading",id:"further-reading",level:2}],m={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this tutorial, we will show you how to perform simple network analysis with\nthe NetworkX library and data stored in Memgraph. You will also acquire a basic\nunderstanding of ",(0,i.kt)("strong",{parentName:"p"},"Query Modules"),", an easy method for extending the query\nlanguage with user-written procedures."),(0,i.kt)("h2",{id:"data-model"},"Data model"),(0,i.kt)("p",null,"We are going to use the Karate Club graph, a network of friendships between 34\nmembers of a karate club at a US university, as described by Wayne Zachary in\n1977. It is a very popular data set in social network analysis and is very often\nreferenced in such tutorials. The nodes in the graph represent the members while\nthe relationships between them are of type ",(0,i.kt)("inlineCode",{parentName:"p"},"FRIENDS_WITH"),". You can differentiate\nthe nodes by using their unique ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,i.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/karate_club.png",alt:"Karate club",style:{height:400}}),(0,i.kt)("h2",{id:"importing-the-dataset"},"Importing the dataset"),(0,i.kt)("p",null,"To import the dataset, download the ",(0,i.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph\nLab")," desktop application and navigate to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset ",(0,i.kt)("inlineCode",{parentName:"p"},"Karate club\nfriendship network")," and continue with the tutorial."),(0,i.kt)("h2",{id:"using-existing-networkx-algorithms"},"Using existing NetworkX algorithms"),(0,i.kt)("p",null,"There are three ways to execute queries and procedures in Memgraph:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"using the command-line tool ",(0,i.kt)("inlineCode",{parentName:"li"},"mgconsole"),", which comes with Memgraph:\n",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph"},"Querying the database"))),(0,i.kt)("li",{parentName:"ul"},"programmatically, by using the Bolt protocol: ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/memgraph/2.1.1/connect-to-memgraph/drivers"},"Building\napplications"))),(0,i.kt)("li",{parentName:"ul"},"from ",(0,i.kt)("strong",{parentName:"li"},"Memgraph Lab"),", a visual user interface which you can download\n",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://memgraph.com/download"},"here")),".")),(0,i.kt)("p",null,"In this tutorial, we are using results from the command-line tool because of\ntheir text format but, it's alright to use Memgraph Lab instead. You can open\nMemgraph Lab and in the tab ",(0,i.kt)("strong",{parentName:"p"},"Query")," execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s)-[r]-(t)\nRETURN s, r, t;\n")),(0,i.kt)("p",null,"This is going to return all the relationships inside our network. Now we have a\nbetter overview of what we are dealing with, so it\u2019s time to get some useful\ninformation about the network."),(0,i.kt)("p",null,"To analyze the network we will use the built-in procedure ",(0,i.kt)("inlineCode",{parentName:"p"},"analyze()")," from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"graph_analyzer")," query module. This module utilizes the NetworkX library to\nretrieve graph information. Run the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL graph_analyzer.analyze() YIELD *;\n")),(0,i.kt)("p",null,"You will get details about the graph like the number of nodes, edges, bridges...\nand many more."),(0,i.kt)("h3",{id:"betweenness-centrality"},"Betweenness centrality"),(0,i.kt)("p",null,"Now let's try to find the betweenness centrality of a node, i.e. the number of\ntimes a node acts as a bridge along the shortest path between two other nodes.\nRun the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CALL nxalg.betweenness_centrality() YIELD *;\n")),(0,i.kt)("p",null,"The procedure ",(0,i.kt)("inlineCode",{parentName:"p"},"betweenness_centrality()")," is one of over 70 algorithms available\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"nxalg")," module."),(0,i.kt)("p",null,"The result should be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+--------------+--------------+\n| betweenness  | node         |\n+--------------+--------------+\n| 0            | ({id: "0"})  |\n| 0.000473485  | ({id: "1"})  |\n| 0.0083649    | ({id: "2"})  |\n| 0.00189394   | ({id: "3"})  |\n| 0            | ({id: "4"})  |\n| 0.000473485  | ({id: "5"})  |\n| ...          | ...          |\n')),(0,i.kt)("h3",{id:"link-prediction"},"Link prediction"),(0,i.kt)("p",null,"A very common problem in network analysis is link prediction. The algorithm\npredicts which new interactions among the network members are likely to occur in\nthe near future. One way of predicting these links is by measuring the\n\u201cproximity\u201d of nodes in a network. This can be done by using the Jaccard\ncoefficient. Let's try running the algorithm on a node with the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," 13 and\nordering the results descending by the value of the coefficient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.jaccard_coefficient()\nYIELD *\nWITH  u, v, coef\nWHERE u.id = '13'\nRETURN u, v, coef\nORDER BY coef DESC;\n")),(0,i.kt)("p",null,"The results are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+--------------+--------------+--------------+\n| u            | v            | coef         |\n+--------------+--------------+--------------+\n| ({id: "13"}) | ({id: "19"}) | 0.6          |\n| ({id: "13"}) | ({id: "17"}) | 0.4          |\n| ({id: "13"}) | ({id: "21"}) | 0.4          |\n| ({id: "13"}) | ({id: "28"}) | 0.333333     |\n| ({id: "13"}) | ({id: "30"}) | 0.285714     |\n| ({id: "13"}) | ({id: "27"}) | 0.285714     |\n| ({id: "13"}) | ({id: "31"}) | 0.222222     |\n| ({id: "13"}) | ({id: "15"}) | 0.166667     |\n| ({id: "13"}) | ({id: "14"}) | 0.166667     |\n| ({id: "13"}) | ({id: "18"}) | 0.166667     |\n| ({id: "13"}) | ({id: "20"}) | 0.166667     |\n| ({id: "13"}) | ({id: "22"}) | 0.166667     |\n| ({id: "13"}) | ({id: "26"}) | 0.166667     |\n| ({id: "13"}) | ({id: "32"}) | 0.133333     |\n| ({id: "13"}) | ({id: "29"}) | 0.125        |\n| ({id: "13"}) | ({id: "23"}) | 0.111111     |\n| ({id: "13"}) | ({id: "25"}) | 0            |\n| ({id: "13"}) | ({id: "24"}) | 0            |\n| ({id: "13"}) | ({id: "16"}) | 0            |\n+--------------+--------------+--------------+\n')),(0,i.kt)("h2",{id:"adding-new-networkx-algorithms-as-query-modules"},"Adding new NetworkX algorithms as query modules"),(0,i.kt)("p",null,"Memgraph comes with over 70 NetworkX algorithms, but if the algorithm you\nrequire is missing, you can add it yourself as a query module."),(0,i.kt)("p",null,"If you are using Docker to run Memgraph you need to create a volume and mount it\nto access the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),". This can be done by\ncreating an empty directory ",(0,i.kt)("inlineCode",{parentName:"p"},"~modules")," on your host machine and executing the\nfollowing command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker volume create --driver local --opt type=none  --opt device=~modules --opt o=bind modules\n")),(0,i.kt)("p",null,"Now, you can start Memgraph and mount the created volume:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -it --rm -v modules:/usr/lib/memgraph/query_modules -p 7687:7687 memgraph/memgraph-platform\n")),(0,i.kt)("p",null,"Everything from the directory ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be\nvisible/editable in your mounted volume and vice versa."),(0,i.kt)("h3",{id:"community-detection"},"Community detection"),(0,i.kt)("p",null,"Detecting communities in a network is a very common problem. Therefore, we need\ncommunity detection algorithms that can partition the network into multiple\ncommunities. Let's create our own module that accomplishes this task. Create a\nfile called ",(0,i.kt)("inlineCode",{parentName:"p"},"communities.py")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~modules")," directory and copy the following\ncode into it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python="},"import mgp\nimport networkx as nx\nfrom networkx.algorithms import community\nfrom mgp_networkx import MemgraphDiGraph\n\n\n@mgp.read_proc\ndef detect(\n    ctx: mgp.ProcCtx\n    ) -> mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]]):\n\n    networkxGraph = nx.DiGraph(MemgraphDiGraph(ctx=ctx))\n    communities_generator = community.girvan_newman(networkxGraph)\n\n    return mgp.Record(communities=[\n        list(s) for s in next(communities_generator)])\n")),(0,i.kt)("p",null,"We just created a query module with the procedure ",(0,i.kt)("inlineCode",{parentName:"p"},"detect()")," that utilizes the\nGirvan\u2013Newman method to find communities in a graph. Before we can call it, the\nnewly created query module has to be loaded:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,i.kt)("p",null,"And now it can be called:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL communities.detect()\nYIELD communities\nUNWIND communities AS community\nRETURN community\n")),(0,i.kt)("p",null,"The resulting communities are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| community                                                                                                                                                                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [({id: "0"}), ({id: "1"}), ({id: "3"}), ({id: "4"}), ({id: "5"}), ({id: "6"}), ({id: "7"}), ({id: "10"}), ({id: "11"}), ({id: "12"}), ({id: "13"}), ({id: "16"}), ({id: "17"}), ({id: "19"}), ({id: "21"})]                                                             |\n| [({id: "2"}), ({id: "8"}), ({id: "9"}), ({id: "14"}), ({id: "15"}), ({id: "18"}), ({id: "20"}), ({id: "22"}), ({id: "23"}), ({id: "24"}), ({id: "25"}), ({id: "26"}), ({id: "27"}), ({id: "28"}), ({id: "29"}), ({id: "30"}), ({id: "31"}), ({id: "32"}), ({id: "33"})] |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,"If you want to find out more about query modules, take a look at our guide on\nhow to create your own: ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/how-to-guides/query-modules/implement-query-modules"},"Implement custom query\nmodules"),"."),(0,i.kt)("p",null,"You can also visit our ",(0,i.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.1/how-to-guides/networkx"},"NetworkX Reference\nguide")," to find out which NetworkX\nalgorithms are already available in Memgraph."))}u.isMDXComponent=!0}}]);