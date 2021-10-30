"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43601],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),p=i,h=c["".concat(d,".").concat(p)]||c[p]||m[p]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},d=void 0,s={unversionedId:"tutorials/social-network-analysis",id:"version-1.3.0/tutorials/social-network-analysis",isDocsHomePage:!1,title:"Social network analysis with NetworkX",description:"Introduction",source:"@site/memgraph_versioned_docs/version-1.3.0/tutorials/social-network-analysis.md",sourceDirName:"tutorials",slug:"/tutorials/social-network-analysis",permalink:"/docs/memgraph/1.3.0/tutorials/social-network-analysis",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/tutorials/social-network-analysis.md",tags:[],version:"1.3.0",frontMatter:{id:"social-network-analysis",title:"Social network analysis with NetworkX",sidebar_label:"Social network analysis with NetworkX"},sidebar:"version-1.3.0/memgraph",previous:{title:"Game of Thrones deaths",permalink:"/docs/memgraph/1.3.0/tutorials/got-deaths"},next:{title:"Understanding music (with query modules)",permalink:"/docs/memgraph/1.3.0/tutorials/understanding-music-with-modules"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Data model",id:"data-model",children:[],level:2},{value:"Importing the dataset",id:"importing-the-dataset",children:[],level:2},{value:"Using existing NetworkX algorithms",id:"using-existing-networkx-algorithms",children:[{value:"Betweenness centrality",id:"betweenness-centrality",children:[],level:3},{value:"Link prediction",id:"link-prediction",children:[],level:3}],level:2},{value:"Adding new NetworkX algorithms as query modules",id:"adding-new-networkx-algorithms-as-query-modules",children:[{value:"Community detection",id:"community-detection",children:[],level:3}],level:2},{value:"Further reading",id:"further-reading",children:[],level:2}],m={toc:u};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this tutorial, we will show you how to perform simple network analysis with the NetworkX library and data stored in Memgraph. You will also acquire a basic understanding of ",(0,a.kt)("strong",{parentName:"p"},"Query Modules"),", an easy method for extending the query language with user-written procedures."),(0,a.kt)("h2",{id:"data-model"},"Data model"),(0,a.kt)("p",null,"We are going to use the Karate Club graph, a network of friendships between 34 members of a karate club at a US university, as described by Wayne Zachary in 1977. It is a very popular data set in social network analysis and is very often referenced in such tutorials.\nThe nodes in the graph represent the members while the relationships between them are of type ",(0,a.kt)("inlineCode",{parentName:"p"},"FRIENDS_WITH"),". You can differentiate the nodes by using their unique ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,a.kt)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/karate_club.png",alt:"Karate club",style:{height:400}}),(0,a.kt)("h2",{id:"importing-the-dataset"},"Importing the dataset"),(0,a.kt)("p",null,"To import the dataset, download the ",(0,a.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab"),"\ndesktop application and navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there,\nchoose the dataset ",(0,a.kt)("inlineCode",{parentName:"p"},"Karate club friendship network")," and continue with the tutorial."),(0,a.kt)("h2",{id:"using-existing-networkx-algorithms"},"Using existing NetworkX algorithms"),(0,a.kt)("p",null,"There are three ways to execute queries and procedures in Memgraph:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using the command-line tool ",(0,a.kt)("inlineCode",{parentName:"li"},"mg_client"),", which comes with Memgraph: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.3.0/getting-started/querying"},"Querying the database"))),(0,a.kt)("li",{parentName:"ul"},"programmatically, by using the Bolt protocol: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/docs/memgraph/1.3.0/getting-started/connecting-applications"},"Building applications"))),(0,a.kt)("li",{parentName:"ul"},"from ",(0,a.kt)("strong",{parentName:"li"},"Memgraph Lab"),", a visual user interface which you can download ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://memgraph.com/download"},"here")),".")),(0,a.kt)("p",null,"In this tutorial, we are using results from the command-line tool because of their text format but, it's alright to use Memgraph Lab instead. You can open Memgraph Lab and in the tab ",(0,a.kt)("strong",{parentName:"p"},"Query")," execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s)-[r]-(t) RETURN s,r,t;\n")),(0,a.kt)("p",null,"This is going to return all the relationships inside our network. Now we have a better overview of what we are dealing with, so it\u2019s time to get some useful information about the network."),(0,a.kt)("p",null,"To analyze the network we will use the built-in procedure ",(0,a.kt)("inlineCode",{parentName:"p"},"analyze()")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"graph_analyzer")," query module. This module utilizes the NetworkX library to retrieve graph information. Run the following query: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL graph_analyzer.analyze() YIELD *;\n")),(0,a.kt)("p",null,"You will get details about the graph like the number of nodes, edges, bridges... and many more. "),(0,a.kt)("h3",{id:"betweenness-centrality"},"Betweenness centrality"),(0,a.kt)("p",null,"Now let's try to find the betweenness centrality of a node, i.e. the number of times a node acts as a bridge along the shortest path between two other nodes. Run the following query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CALL nxalg.betweenness_centrality() YIELD *;\n")),(0,a.kt)("p",null,"The procedure ",(0,a.kt)("inlineCode",{parentName:"p"},"betweenness_centrality()")," is one of over 70 algorithms available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"nxalg")," module."),(0,a.kt)("p",null,"The result should be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'+--------------+--------------+\n| betweenness  | node         |\n+--------------+--------------+\n| 0            | ({id: "0"})  |\n| 0.000473485  | ({id: "1"})  |\n| 0.0083649    | ({id: "2"})  |\n| 0.00189394   | ({id: "3"})  |\n| 0            | ({id: "4"})  |\n| 0.000473485  | ({id: "5"})  |\n| ...          | ...          |\n')),(0,a.kt)("h3",{id:"link-prediction"},"Link prediction"),(0,a.kt)("p",null,"A very common problem in network analysis is link prediction. The algorithm predicts which new interactions among the network members are likely to occur in the near future. One way of predicting these links is by measuring the \u201cproximity\u201d of nodes in a network. This can be done by using the Jaccard coefficient.\nLet's try running the algorithm on a node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," 13 and ordering the results descending by the value of the coefficient:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.jaccard_coefficient()\nYIELD *\nWITH  u, v, coef\nWHERE u.id='13'\nRETURN u, v, coef\nORDER BY coef DESC;\n")),(0,a.kt)("p",null,"The results are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'+--------------+--------------+--------------+\n| u            | v            | coef         |\n+--------------+--------------+--------------+\n| ({id: "13"}) | ({id: "19"}) | 0.6          |\n| ({id: "13"}) | ({id: "17"}) | 0.4          |\n| ({id: "13"}) | ({id: "21"}) | 0.4          |\n| ({id: "13"}) | ({id: "28"}) | 0.333333     |\n| ({id: "13"}) | ({id: "30"}) | 0.285714     |\n| ({id: "13"}) | ({id: "27"}) | 0.285714     |\n| ({id: "13"}) | ({id: "31"}) | 0.222222     |\n| ({id: "13"}) | ({id: "15"}) | 0.166667     |\n| ({id: "13"}) | ({id: "14"}) | 0.166667     |\n| ({id: "13"}) | ({id: "18"}) | 0.166667     |\n| ({id: "13"}) | ({id: "20"}) | 0.166667     |\n| ({id: "13"}) | ({id: "22"}) | 0.166667     |\n| ({id: "13"}) | ({id: "26"}) | 0.166667     |\n| ({id: "13"}) | ({id: "32"}) | 0.133333     |\n| ({id: "13"}) | ({id: "29"}) | 0.125        |\n| ({id: "13"}) | ({id: "23"}) | 0.111111     |\n| ({id: "13"}) | ({id: "25"}) | 0            |\n| ({id: "13"}) | ({id: "24"}) | 0            |\n| ({id: "13"}) | ({id: "16"}) | 0            |\n+--------------+--------------+--------------+\n')),(0,a.kt)("h2",{id:"adding-new-networkx-algorithms-as-query-modules"},"Adding new NetworkX algorithms as query modules"),(0,a.kt)("p",null,"Memgraph comes with over 70 NetworkX algorithms, but if the algorithm you require is missing, you can add it yourself as a Query Module."),(0,a.kt)("p",null,"If you are using Docker to run Memgraph you need to create a volume and mount it to access the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules"),". This can be done by creating an empty directory ",(0,a.kt)("inlineCode",{parentName:"p"},"~modules")," on your host machine and executing the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker volume create --driver local --opt type=none  --opt device=~modules --opt o=bind modules\n")),(0,a.kt)("p",null,"Now, you can start Memgraph and mount the created volume:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it --rm -v modules:/usr/lib/memgraph/query_modules -p 7687:7687 memgraph\n")),(0,a.kt)("p",null,"Everything from the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query_modules")," will be visible/editable in your mounted volume and vice versa."),(0,a.kt)("h3",{id:"community-detection"},"Community detection"),(0,a.kt)("p",null,"Detecting communities in a network is a very common problem. Therefore, we need community detection algorithms that can partition the network into multiple communities. Let's create our own module that accomplishes this task.\nCreate a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"communities.py")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~modules")," directory and copy the following code into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python="},"import mgp\nimport networkx as nx\nfrom networkx.algorithms import community\nfrom mgp_networkx import MemgraphDiGraph\n\n\n@mgp.read_proc\ndef detect(\n    ctx: mgp.ProcCtx\n    ) -> mgp.Record(communities=mgp.List[mgp.List[mgp.Vertex]]):\n\n    networkxGraph = nx.DiGraph(MemgraphDiGraph(ctx=ctx))\n    communities_generator = community.girvan_newman(networkxGraph)\n\n    return mgp.Record(communities=[\n        list(s) for s in next(communities_generator)])\n")),(0,a.kt)("p",null,"We just created a query module with the procedure ",(0,a.kt)("inlineCode",{parentName:"p"},"detect()")," that utilizes the Girvan\u2013Newman method to find communities in a graph.\nBefore we can call it, the newly created query module has to be loaded:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,a.kt)("p",null,"And now it can be called: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL communities.detect() \nYIELD communities\nUNWIND communities as community\nRETURN community\n")),(0,a.kt)("p",null,"The resulting communities are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| community                                                                                                                                                                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [({id: "0"}), ({id: "1"}), ({id: "3"}), ({id: "4"}), ({id: "5"}), ({id: "6"}), ({id: "7"}), ({id: "10"}), ({id: "11"}), ({id: "12"}), ({id: "13"}), ({id: "16"}), ({id: "17"}), ({id: "19"}), ({id: "21"})]                                                             |\n| [({id: "2"}), ({id: "8"}), ({id: "9"}), ({id: "14"}), ({id: "15"}), ({id: "18"}), ({id: "20"}), ({id: "22"}), ({id: "23"}), ({id: "24"}), ({id: "25"}), ({id: "26"}), ({id: "27"}), ({id: "28"}), ({id: "29"}), ({id: "30"}), ({id: "31"}), ({id: "32"}), ({id: "33"})] |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n')),(0,a.kt)("h2",{id:"further-reading"},"Further reading"),(0,a.kt)("p",null,"If you want to find out more about query modules, take a look at our guide on how to create your own: ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/1.3.0/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules"),"."),(0,a.kt)("p",null,"You can also visit our ",(0,a.kt)("a",{parentName:"p",href:"/docs/memgraph/1.3.0/reference-guide/networkx"},"NetworkX Reference guide")," to find out which NetworkX algorithms are already available in Memgraph."))}c.isMDXComponent=!0}}]);