"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38620],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,h=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"understanding-music-with-modules",title:"Exploring a music social network",sidebar_label:"Exploring a music social network"},s=void 0,u={unversionedId:"tutorials/understanding-music-with-modules",id:"tutorials/understanding-music-with-modules",title:"Exploring a music social network",description:"This article is part of a series intended to show users how to use Memgraph on",source:"@site/docs/tutorials/understanding-music-with-modules.md",sourceDirName:"tutorials",slug:"/tutorials/understanding-music-with-modules",permalink:"/docs/memgraph/next/tutorials/understanding-music-with-modules",editUrl:"https://github.com/memgraph/docs/tree/master/docs/tutorials/understanding-music-with-modules.md",tags:[],version:"current",frontMatter:{id:"understanding-music-with-modules",title:"Exploring a music social network",sidebar_label:"Exploring a music social network"},sidebar:"memgraph",previous:{title:"Social network analysis with NetworkX",permalink:"/docs/memgraph/next/tutorials/social-network-analysis"},next:{title:"Graph stream processing with Kafka",permalink:"/docs/memgraph/next/tutorials/graph-stream-processing-with-kafka"}},m={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Data model",id:"data-model",level:2},{value:"Importing the dataset",id:"importing-the-dataset",level:2},{value:"Defining a directory with query modules",id:"defining-a-directory-with-query-modules",level:2},{value:"Example queries and procedures",id:"example-queries-and-procedures",level:2},{value:"Optimized NetworkX integration",id:"optimized-networkx-integration",level:2},{value:"Further reading",id:"further-reading",level:2}],c={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is part of a series intended to show users how to use Memgraph on\nreal-world data and, by doing so, retrieve some interesting and useful\ninformation."),(0,o.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/tutorials"},"tutorial overview section"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Getting useful information from your data is always challenging. With Memgraph,\nyou can manipulate and extract a huge amount of information by writing queries.\nMemgraph even offers a set of built-in graph algorithms. You can use those\nalgorithms in your queries, extending your power over the data. But what if you\nwanted to do more?"),(0,o.kt)("p",null,'At its core, Memgraph "simply" builds a graph from your data. Graphs were always\ninteresting to scientists and engineers because of their interesting properties\nallowing you to represent a specific kind of data in an intuitive way which\nmakes extracting useful information much easier. A field called graph theory\nemerged in mathematics, producing a great number of algorithms, metrics, and\nother functions that are applied to the graphs.'),(0,o.kt)("p",null,"Memgraph allows you to use the underlying graph in your functions by using\n",(0,o.kt)("inlineCode",{parentName:"p"},"Query modules"),", and those functions are called procedures. In this tutorial,\nwe'll see how easy it is to extend the capabilities of Memgraph using Python. It\nwill also show you how to use one of the most popular Python libraries for\ngraphs, called ",(0,o.kt)("a",{parentName:"p",href:"https://networkx.github.io/"},"NetworkX"),", which contains an insane\namount of functions and algorithms for the graphs."),(0,o.kt)("h2",{id:"data-model"},"Data model"),(0,o.kt)("p",null,"Social graphs is a relatively recent term. Simply said, it's a representation of\na social network. Social networks appear in various sites, e.g., Youtube, which\nis primarily a site for watching videos, can be classified as a social network.\nFor this tutorial, we'll use data consisting of users of the music streaming\nplatform called ",(0,o.kt)("a",{parentName:"p",href:"https://www.deezer.com/"},"Deezer"),"."),(0,o.kt)("img",{src:n(22619).Z,className:"imgBorder"}),(0,o.kt)("p",null,"The data consists of around 50k Deezer users from Croatia, but we prepared a\nsubset of the dataset only composed of 2k users. Each user is defined by id and\na list of genres he loved. The edges represent the mutual friendship between the\nusers. You can find a more detailed explanation of the dataset on the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/benedekrozemberczki/datasets#deezer-social-networks"},"GitHub"),"\nalongside many more similar datasets kindly provided by the same authors."),(0,o.kt)("h2",{id:"importing-the-dataset"},"Importing the dataset"),(0,o.kt)("p",null,"To import the dataset, download the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph\nLab")," desktop application and navigate to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"Music genres social network")," and continue with the tutorial."),(0,o.kt)("h2",{id:"defining-a-directory-with-query-modules"},"Defining a directory with query modules"),(0,o.kt)("p",null,"We need to set up the directory from which Memgraph will search for custom query\nmodules by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file(",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or by supplying it as a\ncommand-line parameter using the directory containing our modules as the value.\nFor a more detailed explanation take a look at ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/load-call-query-modules"},"Load and call query\nmodules"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo -u memgraph /usr/lib/memgraph/memgraph --query-modules-directory=/modules\n")),(0,o.kt)("p",null,"When using Memgraph installed from a DEB or RPM package, the currently running\nMemgraph server may need to be stopped. The user can do so using the following\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"systemctl stop memgraph\n")),(0,o.kt)("p",null,"When using Docker, the query module directory can be mounted with the following\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},'docker run -it -p 7687:7687 -p 7444:7444 -p 3000:3000 \\\n  -v $(pwd)/modules:/modules \\\n  -e MEMGRAPH="--query-modules-directory=/modules" \\\n  memgraph/memgraph-platform\n')),(0,o.kt)("h2",{id:"example-queries-and-procedures"},"Example queries and procedures"),(0,o.kt)("p",null,"First, let's create a Python script in our modules directory which will contain\nour procedures. We'll name the script ",(0,o.kt)("inlineCode",{parentName:"p"},"deezer_example.py"),"."),(0,o.kt)("p",null,"After each change to the script, we need to tell Memgraph to reload all the\nmodules. We can do that by calling the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,o.kt)("p",null,"Let's count how many times a specific genre occurs in our network!"),(0,o.kt)("p",null,"We will define a procedure called ",(0,o.kt)("inlineCode",{parentName:"p"},"genre_count"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n\n@mgp.read_proc\ndef genre_count(context: mgp.ProcCtx,\n                genre: str) -> mgp.Record(genre=str, count=int):\n    count = len(\n        [v for v in context.graph.vertices if genre in v.properties['genres']])\n    return mgp.Record(genre=genre, count=count)\n")),(0,o.kt)("p",null,"Let's reload the modules and check the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL deezer_example.genre_count("Pop")\nYIELD *;\n')),(0,o.kt)("p",null,"We can notice multiple things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"import of the ",(0,o.kt)("inlineCode",{parentName:"li"},"mgp")," module which contains helper functions and types for\ndefining custom procedures"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@mgp.read_proc")," decorator which marks the function as a procedure"),(0,o.kt)("li",{parentName:"ul"},"every argument is annotated with a type"),(0,o.kt)("li",{parentName:"ul"},"result is defined as an object of ",(0,o.kt)("inlineCode",{parentName:"li"},"mgp.Record")," which also has annotated types\nof its members")),(0,o.kt)("p",null,"This example is probably not that interesting to you because we can get the same\nresult using the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nWITH n, "Pop" AS genre\nWHERE genre IN n.genres\nRETURN genre, count(n);\n')),(0,o.kt)("p",null,"Let's try something more interesting. The genres are listed in the order the\nusers have added them. If we assume that users picked the genres in order of\npreference, let's write a function that tells us in what percentage each genre\nappears in top n places."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\n\n@mgp.read_proc\ndef in_top_n_percentage(context: mgp.ProcCtx,\n                        n: int) -> mgp.Record(genre=str,\n                                              percentage=float,\n                                              size=int):\n    genre_count = defaultdict(lambda: {'total_count': 0, 'in_top_n_count': 0})\n\n    for v in context.graph.vertices:\n        for index, genre in enumerate(v.properties['genres']):\n            genre_count[genre]['total_count'] += 1\n            genre_count[genre]['in_top_n_count'] += index < n\n\n    def get_record(genre, counts): return mgp.Record(\n        genre=genre,\n        percentage=counts['in_top_n_count'] / counts['total_count'],\n        size=counts['total_count']\n    )\n\n    return [get_record(\n        genre,\n        counts) for genre,\n        counts in genre_count.items()]\n")),(0,o.kt)("p",null,"Let's see what we got:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.in_top_n_percentage(3)\nYIELD *\nWITH genre, percentage, size\nWHERE size > 10\nRETURN genre, percentage, size\nORDER BY percentage DESC;\n")),(0,o.kt)("p",null,"As said in the introduction, we want to use the power of the graphs to extract\nsome useful information from our data which would be otherwise impossible. Most\nof those functions are complex and writing them from scratch would be tedious.\nAs every modern programmer, we'll just use a package that has everything we need\nand more. To be precise, we'll be using ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX")," that has a huge amount of\nutility functions and graph algorithms implemented."),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX")," algorithms we need to transform our graph to a type ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX"),"\nrecognizes. In our case, we need to use an undirected graph ",(0,o.kt)("inlineCode",{parentName:"p"},"networkX.Graph"),". To\nmake our lives easier, let's write a helper function that transforms Memgraph\ngraph to ",(0,o.kt)("inlineCode",{parentName:"p"},"networkX.Graph"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport networkx.algorithms as nxa\nimport itertools\n\n\ndef _create_undirected_graph(context: mgp.ProcCtx) -> nx.Graph:\n    g = nx.Graph()\n\n    for v in context.graph.vertices:\n        context.check_must_abort()\n        g.add_node(v)\n\n    for v in context.graph.vertices:\n        context.check_must_abort()\n        for e in v.out_edges:\n            g.add_edge(e.from_vertex, e.to_vertex)\n\n    return g\n")),(0,o.kt)("p",null,"Now let's get some information about the graph. As our data represents social\nnetwork we would like to know if it has ",(0,o.kt)("a",{parentName:"p",href:"https://tinyurl.com/y3angsdb"},"bridges"),"\nand we would like to calculate the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Clustering_coefficient"},"average\nclustering"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef analyze_graph(\n        context: mgp.ProcCtx) -> mgp.Record(\n        average_clustering=float,\n        has_bridges=bool):\n    g = _create_undirected_graph(context)\n    return mgp.Record(\n        average_clustering=nxa.average_clustering(g),\n        has_bridges=nxa.has_bridges(g))\n")),(0,o.kt)("p",null,"And to get and display the data let's run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.analyze_graph()\nYIELD *;\n")),(0,o.kt)("p",null,"Another interesting property of a node in a graph is its\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Centrality"},"centrality"),". Centrality tells us how\nimportant a node is for a graph. In our case, it would mean higher the\ncentrality, the more popular the user is. Let's find out which user is the most\npopular in our network and take a peek at his/her music taste. We will use the\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Betweenness_centrality"},"betweenness centrality"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef betweenness_centrality(\n        context: mgp.ProcCtx) -> mgp.Record(node=mgp.Vertex,\n                                            centrality=mgp.Number):\n    g = _create_undirected_graph(context)\n    return [mgp.Record(node=node, centrality=centrality)\n            for node,\n            centrality in nxa.centrality.betweenness_centrality(g).items()]\n")),(0,o.kt)("p",null,"Now let's take a look at the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CALL deezer_example.betweenness_centrality()\nYIELD *\nRETURN node.id, node.genres, centrality\nORDER BY centrality DESC\nLIMIT 10;\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("p",null,"Calculating betweenness centrality for each node can take some time to finish.\nThe issue of slower ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX")," implementations is something we at Memgraph would\nlike to address in the future. An example of this can be seen in the next\nsection of this tutorial."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"For our last trick, let's try to locate communities inside our network.\nCommunities are a set of nodes that are densely connected. The goal of the\ncommunity detection algorithms can be nicely described with the next\nvisualization: ",(0,o.kt)("img",{src:n(1496).Z,width:"459",height:"215"})),(0,o.kt)("p",null,"As for centrality, there are multiple algorithms for finding communities in a\ngraph. We will write a function that takes a method for calculating communities,\nuses it to find the communities, and, optionally, calculates some metrics\nspecific to the graph partitioning so we can compare algorithms. To make things\nmore interesting, let's find out which genre is the most popular in the\ncommunity and return the percentage which tells us how many of the users have\nthat genre on their list. In the end, music is something that connects us!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def _get_communities(\n        context: mgp.ProcCtx,\n        community_function,\n        calculate_quality: bool):\n    g = _create_undirected_graph(context)\n\n    communities = list(community_function(g))\n\n    if calculate_quality:\n        quality = {\n            'coverage': nxa.community.quality.coverage(g, communities),\n            'modularity': nxa.community.quality.modularity(g, communities),\n            'performance': nxa.community.quality.performance(g, communities)\n        }\n    else:\n        quality = {}\n\n    communities = [list(community) for community in communities]\n\n    def get_community_info(community):\n        info = {\n            'size': len(community),\n        }\n\n        genre_count = defaultdict(lambda: 0)\n        for genre in itertools.chain(\n                *[user.properties[\"genres\"] for user in community]):\n            genre_count[genre] += 1\n\n        if len(genre_count) != 0:\n            mpg = max(\n                genre_count.items(),\n                key=lambda item: item[1])\n\n            info['most_popular_genre'] = mpg[0]\n            info['most_popular_genre_percentage'] = mpg[1] / info['size']\n\n        return info\n\n    return mgp.Record(communities=[get_community_info(c)\n                                   for c in communities], quality=quality)\n")),(0,o.kt)("p",null,"Now that we have our function in place let's test some algorithms. We will be\nchecking out community detection using ",(0,o.kt)("a",{parentName:"p",href:"https://networkx.github.io/documentation/latest/reference/algorithms/generated/networkx.algorithms.community.modularity_max.greedy_modularity_communities.html#networkx.algorithms.community.modularity_max.greedy_modularity_communities"},"greedy modularity maximization by\nClauset-Newman-Moore"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://networkx.github.io/documentation/latest/reference/algorithms/generated/networkx.algorithms.community.label_propagation.label_propagation_communities.html#networkx.algorithms.community.label_propagation.label_propagation_communities"},"label\npropagation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef greedy_modularity_communities(\n        context: mgp.ProcCtx,\n        calculate_quality: bool = False) -> mgp.Record(\n        communities=list,\n        quality=mgp.Map):\n    return _get_communities(\n        context,\n        nxa.community.greedy_modularity_communities,\n        calculate_quality)\n\n\n@mgp.read_proc\ndef label_propagation_communities(\n        context: mgp.ProcCtx,\n        calculate_quality: bool = False) -> mgp.Record(\n        communities=list,\n        quality=mgp.Map):\n    return _get_communities(\n        context,\n        nxa.community.label_propagation_communities,\n        calculate_quality)\n")),(0,o.kt)("p",null,"In the above snippet, we can notice an optional argument ",(0,o.kt)("inlineCode",{parentName:"p"},"calculate_quality")," and\nusage of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Map")," which is provided by Memgraph."),(0,o.kt)("p",null,"Let's see the results with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.greedy_modularity_communities()\nYIELD communities\nUNWIND communities as community\nWITH community\nWHERE community.size > 10\nRETURN community.most_popular_genre, community.most_popular_genre_percentage, community.size\nORDER BY community.size DESC;\n")),(0,o.kt)("p",null,"and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.label_propagation_communities()\nYIELD communities\nUNWIND communities AS community\nWITH community\nWHERE community.size > 10\nRETURN community.most_popular_genre, community.most_popular_genre_percentage, community.size\nORDER BY community.size DESC;\n")),(0,o.kt)("p",null,"Your results should look something like this:\n",(0,o.kt)("img",{src:n(97036).Z,width:"881",height:"546"})),(0,o.kt)("p",null,"Hmm, ",(0,o.kt)("inlineCode",{parentName:"p"},"Pop")," sure is popular. Let's ignore that genre:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"for genre in itertools.chain(\n        *[user.properties[\"genres\"] for user in community]):\n    if genre != 'Pop':\n        genre_count[genre] += 1\n")),(0,o.kt)("p",null,"and call our procedures again for each algorithm. Well, people always liked to\ndance!"),(0,o.kt)("p",null,"We saw the biggest communities in our network using two different methods. It's\nhard to say which of the methods did better so let's check a couple of metrics\nby calling the same procedure with ",(0,o.kt)("inlineCode",{parentName:"p"},"calculate_quality")," set to true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.greedy_modularity_communities(true)\nYIELD communities, quality\nRETURN quality;\n")),(0,o.kt)("p",null,"and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.label_propagation_communities(true)\nYIELD communities, quality\nRETURN quality;\n")),(0,o.kt)("p",null,"I think it should come as no surprise that an algorithm that maximizes\nmodularity has higher modularity..."),(0,o.kt)("h2",{id:"optimized-networkx-integration"},"Optimized NetworkX integration"),(0,o.kt)("p",null,"As noted before, we at Memgraph are aware of NetworkX's potential but the\nperformance for some functions isn't that good. We decided to tackle this\nproblem by writing a wrapper object for Memgraph's graph and with smarter usage\nof NetworkX algorithms. To make things even more convenient, we decided to\nimplement procedures that call NetworkX functions with our graphs, so you have\nout-of-the-box access to the graph algorithms. NetworkX contains a huge amount\nof functions, and writing procedures for all of them require insane effort, so\ndon't blame us if some of the algorithms aren't available. We are always open to\nany feedback, so if you think that an implementation for an algorithm is needed,\nwe will surely take that into account."),(0,o.kt)("p",null,"To demonstrate performance improvement, we will calculate the betweenness\ncentrality again, this time by using Memgraph's procedure."),(0,o.kt)("p",null,"To get access to the NetworkX procedures, start your Memgraph server without\nmodifying the query modules directory path. That way, the path will be set to\nthe default path, which contains ",(0,o.kt)("inlineCode",{parentName:"p"},"nxalg")," module."),(0,o.kt)("p",null,"Now let's call the procedure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.betweenness_centrality()\nYIELD *\nRETURN node.id, node.genres, betweenness\nORDER BY betweenness DESC\nLIMIT 10;\n")),(0,o.kt)("p",null,"You should get the same results as with our previous procedure for the\nbetweenness centrality but in a much lower time."),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,"We encourage you to take a look at our ",(0,o.kt)("inlineCode",{parentName:"p"},"How to")," for the modules at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/next/reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example"},"How to\nImplement Query\nModules?"),"."),(0,o.kt)("p",null,"This tutorial showed you how with a little effort you can extend your control\nover the data. Using packages like ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX")," you get a huge amount of already\nimplemented graph algorithms while Memgraph allows you complete access to its\ninternal graph."),(0,o.kt)("p",null,"If you are not a big fan of Python, don't worry! We have a C API with the exact\nsame functionalities."))}d.isMDXComponent=!0},22619:function(e,t){t.Z="data:image/png;base64,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"},1496:function(e,t,n){t.Z=n.p+"assets/images/community_detection_visualization-a7bacfdf4a83c423a48a363ad86b4080.png"},97036:function(e,t,n){t.Z=n.p+"assets/images/community_genre_statistics-8206eba0df0c16990e5c2151af0f726e.png"}}]);