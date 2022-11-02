"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},o=void 0,l={unversionedId:"tutorials/social-network-analysis",id:"version-2.2.0/tutorials/social-network-analysis",title:"Social network analysis with NetworkX",description:"Introduction",source:"@site/memgraph_versioned_docs/version-2.2.0/tutorials/social-network-analysis.md",sourceDirName:"tutorials",slug:"/tutorials/social-network-analysis",permalink:"/docs/memgraph/2.2.0/tutorials/social-network-analysis",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.2.0/tutorials/social-network-analysis.md",tags:[],version:"2.2.0",frontMatter:{id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},sidebar:"memgraph",previous:{title:"Graph stream processing with Kafka",permalink:"/docs/memgraph/2.2.0/tutorials/graph-stream-processing-with-kafka"},next:{title:"Style your graphs in Memgraph Lab",permalink:"/docs/memgraph/2.2.0/tutorials/style-your-graphs-in-memgraph-lab"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Data model",id:"data-model",level:2},{value:"Import the dataset",id:"import-the-dataset",level:2},{value:"Use existing NetworkX algorithms",id:"use-existing-networkx-algorithms",level:2},{value:"Betweenness centrality",id:"betweenness-centrality",level:3},{value:"Link prediction",id:"link-prediction",level:3},{value:"Add new NetworkX algorithms as query modules",id:"add-new-networkx-algorithms-as-query-modules",level:2},{value:"Community detection algorithm",id:"community-detection-algorithm",level:3},{value:"Copy the module into Docker",id:"copy-the-module-into-docker",level:3},{value:"Load a new query module into Docker",id:"load-a-new-query-module-into-docker",level:3},{value:"Call a query module",id:"call-a-query-module",level:3},{value:"Further reading",id:"further-reading",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, we will show you how to perform a simple network analysis with\nthe NetworkX library and data stored in Memgraph. You will also acquire a basic\nunderstanding of ",(0,r.kt)("strong",{parentName:"p"},"query modules"),", an easy method for extending the query\nlanguage with user-written procedures."),(0,r.kt)("p",null,"To get started, please install Memgraph using the ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," image by\nfollowing the ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/installation"},"installment instructions")," for your OS."),(0,r.kt)("p",null,"Once Memgraph is up and running, there are three ways to execute queries and\nprocedures in Memgraph:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using ",(0,r.kt)("strong",{parentName:"li"},"Memgraph Lab"),", a visual user interface that you can use from your\nbrowser at ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," or ",(0,r.kt)("a",{parentName:"li",href:"https://memgraph.com/product/lab"},"download as an\napplication")),(0,r.kt)("li",{parentName:"ul"},"using the command-line tool ",(0,r.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.0/connect-to-memgraph/mgconsole"},(0,r.kt)("inlineCode",{parentName:"a"},"mgconsole"))),(0,r.kt)("li",{parentName:"ul"},"using ",(0,r.kt)("a",{parentName:"li",href:"/docs/memgraph/2.2.0/connect-to-memgraph/drivers"},"drivers")," and the Bolt\nprotocol")),(0,r.kt)("p",null,"For this tutorial, you are going to need ",(0,r.kt)("strong",{parentName:"p"},"Memgraph Lab")," to import the dataset\nand then you can query it either with Memgraph Lab or with mgconsole. We used\nthe results from the command-line tool mgconsole because of the format."),(0,r.kt)("h2",{id:"data-model"},"Data model"),(0,r.kt)("p",null,"We are going to use the Karate Club graph, a network of friendships between 34\nmembers of a karate club at a US university, as described by Wayne Zachary in\n1977. It is a very popular data set in social network analysis and is very often\nreferenced in such tutorials. The nodes in the graph represent the members while\nthe relationships between them are of type ",(0,r.kt)("inlineCode",{parentName:"p"},"FRIENDS_WITH"),". You can differentiate\nthe nodes by using their unique ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/karate_club.png",alt:"Karate club",style:{height:400}}),(0,r.kt)("h2",{id:"import-the-dataset"},"Import the dataset"),(0,r.kt)("p",null,"To import the dataset, open Memgraph Lab and navigate to the ",(0,r.kt)("em",{parentName:"p"},"Datasets")," tab in\nthe sidebar. From there, load the ",(0,r.kt)("inlineCode",{parentName:"p"},"Karate club friendship network")," dataset, wait\nfor the import to finish, move to the ",(0,r.kt)("em",{parentName:"p"},"Query")," tab or mgconsole and continue with\nthe tutorial."),(0,r.kt)("h2",{id:"use-existing-networkx-algorithms"},"Use existing NetworkX algorithms"),(0,r.kt)("p",null,"Execute the following command to get all the relationships inside our network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s)-[r]-(t)\nRETURN s, r, t;\n")),(0,r.kt)("p",null,"Now we have a better overview of what we are dealing with, so it\u2019s time to get\nsome useful information about the network."),(0,r.kt)("p",null,"To analyze the network we will use the built-in procedure ",(0,r.kt)("inlineCode",{parentName:"p"},"analyze()")," from the\n",(0,r.kt)("inlineCode",{parentName:"p"},"graph_analyzer")," query module. This module utilizes the NetworkX library to\nretrieve graph information. Run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL graph_analyzer.analyze() YIELD *;\n")),(0,r.kt)("p",null,"You will get details about the graph, such as the number of nodes, edges,\nbridges and many more."),(0,r.kt)("h3",{id:"betweenness-centrality"},"Betweenness centrality"),(0,r.kt)("p",null,"Now let's try to find the betweenness centrality of a node, i.e. the number of\ntimes a node acts as a bridge along the shortest path between two other nodes.\nRun the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.betweenness_centrality() YIELD *;\n")),(0,r.kt)("p",null,"The procedure ",(0,r.kt)("inlineCode",{parentName:"p"},"betweenness_centrality()")," is one of over 70 algorithms available\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"nxalg")," module."),(0,r.kt)("p",null,"The result should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'+--------------+--------------+\n| betweenness  | node         |\n+--------------+--------------+\n| 0            | ({id: "0"})  |\n| 0.000473485  | ({id: "1"})  |\n| 0.0083649    | ({id: "2"})  |\n| 0.00189394   | ({id: "3"})  |\n| 0            | ({id: "4"})  |\n| 0.000473485  | ({id: "5"})  |\n| ...          | ...          |\n')),(0,r.kt)("h3",{id:"link-prediction"},"Link prediction"),(0,r.kt)("p",null,"A very common problem in network analysis is link prediction. The algorithm\npredicts which new interactions among the network members are likely to occur in\nthe near future. One way of predicting these links is by measuring the\n\u201cproximity\u201d of nodes in a network. This can be done by using the Jaccard\ncoefficient. Let's try running the algorithm on a node with the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," 13 and\nordering the results descending by the value of the coefficient:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.jaccard_coefficient()\nYIELD *\nWITH  u, v, coef\nWHERE u.id = '13'\nRETURN u, v, coef\nORDER BY coef DESC;\n")),(0,r.kt)("p",null,"The results are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'+--------------+--------------+--------------+\n| u            | v            | coef         |\n+--------------+--------------+--------------+\n| ({id: "13"}) | ({id: "19"}) | 0.6          |\n| ({id: "13"}) | ({id: "17"}) | 0.4          |\n| ({id: "13"}) | ({id: "21"}) | 0.4          |\n| ({id: "13"}) | ({id: "28"}) | 0.333333     |\n| ({id: "13"}) | ({id: "30"}) | 0.285714     |\n| ({id: "13"}) | ({id: "27"}) | 0.285714     |\n| ({id: "13"}) | ({id: "31"}) | 0.222222     |\n| ({id: "13"}) | ({id: "15"}) | 0.166667     |\n| ({id: "13"}) | ({id: "14"}) | 0.166667     |\n| ({id: "13"}) | ({id: "18"}) | 0.166667     |\n| ({id: "13"}) | ({id: "20"}) | 0.166667     |\n| ({id: "13"}) | ({id: "22"}) | 0.166667     |\n| ({id: "13"}) | ({id: "26"}) | 0.166667     |\n| ({id: "13"}) | ({id: "32"}) | 0.133333     |\n| ({id: "13"}) | ({id: "29"}) | 0.125        |\n| ({id: "13"}) | ({id: "23"}) | 0.111111     |\n| ({id: "13"}) | ({id: "25"}) | 0            |\n| ({id: "13"}) | ({id: "24"}) | 0            |\n| ({id: "13"}) | ({id: "16"}) | 0            |\n+--------------+--------------+--------------+\n')),(0,r.kt)("h2",{id:"add-new-networkx-algorithms-as-query-modules"},"Add new NetworkX algorithms as query modules"),(0,r.kt)("p",null,"Memgraph comes with over 70 NetworkX algorithms, but if the algorithm you\nrequire is missing, you can add it yourself as a ",(0,r.kt)("strong",{parentName:"p"},"query module"),"."),(0,r.kt)("p",null,"Let's create a custom module, add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),"\ndirectory within Docker then load it into Memgraph to query the data."),(0,r.kt)("h3",{id:"community-detection-algorithm"},"Community detection algorithm"),(0,r.kt)("p",null,"Detecting communities in a network is a very common problem. Therefore, we need\ncommunity detection algorithms that can partition the network into multiple\ncommunities. Let's create our own module that accomplishes this task. Create a\nfile called ",(0,r.kt)("inlineCode",{parentName:"p"},"communities.py")," on your computer and copy the following code into\nit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\nimport networkx as nx\nfrom networkx.algorithms import community\nfrom mgp_networkx import MemgraphDiGraph\n\n\n@mgp.read_proc\ndef detect(\n    ctx: mgp.ProcCtx\n    ) -> mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]]):\n\n    networkxGraph = nx.DiGraph(MemgraphDiGraph(ctx=ctx))\n    communities_generator = community.girvan_newman(networkxGraph)\n\n    return mgp.Record(communities=[\n        list(s) for s in next(communities_generator)])\n")),(0,r.kt)("p",null,"We just created a query module with the procedure ",(0,r.kt)("inlineCode",{parentName:"p"},"detect()")," that utilizes the\nGirvan\u2013Newman method to find communities in a graph."),(0,r.kt)("h3",{id:"copy-the-module-into-docker"},"Copy the module into Docker"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a new terminal and find out the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER ID")," of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," container by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker ps\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Position yourself in the directory where ",(0,r.kt)("inlineCode",{parentName:"p"},"communities.py")," is located and copy\nthe file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"memgraph-platform")," container by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker cp communities.py CONTAINER_ID:/usr/lib/memgraph/query_modules/movielens2.py\n")),(0,r.kt)("p",{parentName:"li"},"Be sure to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTAINER_ID"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check if you copied the file correctly! Enter the container:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"docker exec -it CONTAINER_ID bash\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List all the files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," folder and check\nif the ",(0,r.kt)("inlineCode",{parentName:"p"},"communities.py")," file is there:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-terminal"},"ls /usr/lib/memgraph/query_modules\n")))),(0,r.kt)("h3",{id:"load-a-new-query-module-into-docker"},"Load a new query module into Docker"),(0,r.kt)("p",null,"Once your query module is safe in Docker, you can load it into\nMemgraph."),(0,r.kt)("p",null,"All modules are automatically loaded into Memgraph when it starts, but if the\nmodule was copied into Docker while Memgraph was already running, like it\nwas now, it needs to be loaded by using a Cypher procedure."),(0,r.kt)("p",null,"You can either use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL mg.load_all()")," procedure to reload all existing\nmodules and load any newly added ones, ",(0,r.kt)("br",null),"or ",(0,r.kt)("inlineCode",{parentName:"p"},'CALL mg.load("module_name")')," to\n(re)load a specific module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,r.kt)("h3",{id:"call-a-query-module"},"Call a query module"),(0,r.kt)("p",null,"Let's call the custom query module with Cypher:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL communities.detect()\nYIELD communities\nUNWIND communities AS community\nRETURN community;\n")),(0,r.kt)("p",null,"The resulting communities are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nocopy"},'+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| community                                                                                                                                                                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [({id: "0"}), ({id: "1"}), ({id: "3"}), ({id: "4"}), ({id: "5"}), ({id: "6"}), ({id: "7"}), ({id: "10"}), ({id: "11"}), ({id: "12"}), ({id: "13"}), ({id: "16"}), ({id: "17"}), ({id: "19"}), ({id: "21"})]                                                             |\n| [({id: "2"}), ({id: "8"}), ({id: "9"}), ({id: "14"}), ({id: "15"}), ({id: "18"}), ({id: "20"}), ({id: "22"}), ({id: "23"}), ({id: "24"}), ({id: "25"}), ({id: "26"}), ({id: "27"}), ({id: "28"}), ({id: "29"}), ({id: "30"}), ({id: "31"}), ({id: "32"}), ({id: "33"})] |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("p",null,"If you want to find out more about query modules, take a look at our guide on\nhow to create your own: ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/how-to-guides/query-modules/implement-query-modules"},"Implement custom query\nmodules"),"."),(0,r.kt)("p",null,"You can also visit our ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.2.0/how-to-guides/networkx"},"NetworkX Reference guide")," to\nfind out which NetworkX algorithms are already available in Memgraph."))}p.isMDXComponent=!0}}]);