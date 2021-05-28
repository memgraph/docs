(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6293],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},995:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={id:"understanding-music-with-modules",title:"Understanding music (with query modules)",sidebar_label:"Understanding music (with query modules)"},s={unversionedId:"tutorials/understanding-music-with-modules",id:"version-1.3.0/tutorials/understanding-music-with-modules",isDocsHomePage:!1,title:"Understanding music (with query modules)",description:"This article is part of a series intended to show users how to use Memgraph on",source:"@site/memgraph_versioned_docs/version-1.3.0/tutorials/understanding-music-with-modules.md",sourceDirName:"tutorials",slug:"/tutorials/understanding-music-with-modules",permalink:"/memgraph/1.3.0/tutorials/understanding-music-with-modules",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.3.0/tutorials/understanding-music-with-modules.md",version:"1.3.0",sidebar_label:"Understanding music (with query modules)",frontMatter:{id:"understanding-music-with-modules",title:"Understanding music (with query modules)",sidebar_label:"Understanding music (with query modules)"},sidebar:"version-1.3.0/memgraph",previous:{title:"Social network analysis with NetworkX",permalink:"/memgraph/1.3.0/tutorials/social-network-analysis"},next:{title:"Database functionalities overview",permalink:"/memgraph/1.3.0/database-functionalities"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Importing the dataset",id:"importing-the-dataset",children:[]},{value:"Defining a directory with query modules",id:"defining-a-directory-with-query-modules",children:[]},{value:"Example queries and procedures",id:"example-queries-and-procedures",children:[]},{value:"Optimized NetworkX integration",id:"optimized-networkx-integration",children:[]},{value:"Further reading",id:"further-reading",children:[]}],u={toc:l};function m(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is part of a series intended to show users how to use Memgraph on\nreal-world data and, by doing so, retrieve some interesting and useful\ninformation."),(0,o.kt)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/tutorials/tutorials"},"tutorial overview section"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Getting useful information from your data is always challenging. With Memgraph,\nyou can manipulate and extract a huge amount of information by writing queries.\nMemgraph even offers a set of built-in graph algorithms. You can use those algorithms\nin your queries, extending your power over the data. But what if you wanted to do more?"),(0,o.kt)("p",null,'At its core, Memgraph "simply" builds a graph from your data. Graphs were always\ninteresting to scientists and engineers because of their interesting properties\nallowing you to represent a specific kind of data in an intuitive way which\nmakes extracting useful information much easier. A field called\ngraph theory emerged in mathematics, producing a great number of algorithms,\nmetrics, and other functions that are applied to the graphs.'),(0,o.kt)("p",null,"Memgraph allows you to use the underlying graph in your functions by using\n",(0,o.kt)("inlineCode",{parentName:"p"},"Query modules"),", and those functions are called procedures. In this tutorial,\nwe'll see how easy it is to extend the capabilities of Memgraph using Python.\nIt will also show you how to use one of the most popular Python libraries for graphs,\ncalled ",(0,o.kt)("a",{parentName:"p",href:"https://networkx.github.io/"},"NetworkX"),", which contains an insane amount\nof functions and algorithms for the graphs."),(0,o.kt)("h2",{id:"data-model"},"Data model"),(0,o.kt)("p",null,"Social graphs is a relatively recent term. Simply said, it's a representation of\na social network. Social networks appear in various sites, e.g., Youtube,\nwhich is primarily a site for watching videos, can be classified as a social\nnetwork. For this tutorial, we'll use data consisting of users of the music\nstreaming platform called ",(0,o.kt)("a",{parentName:"p",href:"https://www.deezer.com/"},"Deezer"),"."),(0,o.kt)("p",null,"The data consists of around 50k Deezer users from Croatia, but we prepared a\nsubset of the dataset only composed of 2k users. Each user is defined by id\nand a list of genres he loved. The edges represent the mutual friendship between\nthe users. You can find a more detailed explanation of the dataset on the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/benedekrozemberczki/datasets#deezer-social-networks"},"GitHub"),"\nalongside many more similar datasets kindly provided by the same authors."),(0,o.kt)("h2",{id:"importing-the-dataset"},"Importing the dataset"),(0,o.kt)("p",null,"To import the dataset, download the ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab"),"\ndesktop application and navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there,\nchoose the dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"Music genres social network")," and continue with the tutorial."),(0,o.kt)("h2",{id:"defining-a-directory-with-query-modules"},"Defining a directory with query modules"),(0,o.kt)("p",null,"We need to set up the directory from which Memgraph will search for\ncustom query modules by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file(",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or by supplying it as a\ncommand-line parameter using the directory containing our modules as the value.\nFor a more detailed explanation take a look at\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/database-functionalities/query-modules/load-call-query-modules"},"Load and call query modules"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo -u memgraph /usr/lib/memgraph/memgraph --query-modules-directory=/modules\n")),(0,o.kt)("p",null,"When using Memgraph installed from a DEB or RPM package, the currently running\nMemgraph server may need to be stopped. The user can do so using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"systemctl stop memgraph\n")),(0,o.kt)("p",null,"When using Docker, the query module directory can be mounted with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"docker run -p 7687:7687 \\\n  -v $(pwd)/modules:/modules \\\n  memgraph --query-modules-directory=/modules\n")),(0,o.kt)("h2",{id:"example-queries-and-procedures"},"Example queries and procedures"),(0,o.kt)("p",null,"First, let's create a Python script in our modules directory which will contain\nour procedures. We'll name the script ",(0,o.kt)("inlineCode",{parentName:"p"},"deezer_example.py"),"."),(0,o.kt)("p",null,"After each change to the script, we need to tell Memgraph to reload all the\nmodules. We can do that by calling the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL mg.load_all();\n")),(0,o.kt)("p",null,"Let's count how many times a specific genre occurs in our network!"),(0,o.kt)("p",null,"We will define a procedure called ",(0,o.kt)("inlineCode",{parentName:"p"},"genre_count"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mgp\n\n\n@mgp.read_proc\ndef genre_count(context: mgp.ProcCtx,\n                genre: str) -> mgp.Record(genre=str, count=int):\n    count = len(\n        [v for v in context.graph.vertices if genre in v.properties['genres']])\n    return mgp.Record(genre=genre, count=count)\n")),(0,o.kt)("p",null,"Let's reload the modules and check the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'CALL deezer_example.genre_count("Pop")\nYIELD *;\n')),(0,o.kt)("p",null,"We can notice multiple things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"import of the ",(0,o.kt)("inlineCode",{parentName:"li"},"mgp")," module which contains helper functions and types for\ndefining custom procedures"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@mgp.read_proc")," decorator which marks the function as a procedure"),(0,o.kt)("li",{parentName:"ul"},"every argument is annotated with a type"),(0,o.kt)("li",{parentName:"ul"},"result is defined as an object of ",(0,o.kt)("inlineCode",{parentName:"li"},"mgp.Record")," which also has annotated types of\nits members")),(0,o.kt)("p",null,"This example is probably not that interesting to you because we can get the same\nresult using the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)\nWITH n, "Pop" as genre\nWHERE genre in n.genres\nRETURN genre, count(n);\n')),(0,o.kt)("p",null,"Let's try something more interesting. The genres are listed in the order the\nusers have added them. If we assume that users picked the genres in order of\npreference, let's write a function that tells us in what percentage each genre\nappears in top n places."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\n\n@mgp.read_proc\ndef in_top_n_percentage(context: mgp.ProcCtx,\n                        n: int) -> mgp.Record(genre=str,\n                                              percentage=float,\n                                              size=int):\n    genre_count = defaultdict(lambda: {'total_count': 0, 'in_top_n_count': 0})\n\n    for v in context.graph.vertices:\n        for index, genre in enumerate(v.properties['genres']):\n            genre_count[genre]['total_count'] += 1\n            genre_count[genre]['in_top_n_count'] += index < n\n\n    def get_record(genre, counts): return mgp.Record(\n        genre=genre,\n        percentage=counts['in_top_n_count'] / counts['total_count'],\n        size=counts['total_count']\n    )\n\n    return [get_record(\n        genre,\n        counts) for genre,\n        counts in genre_count.items()]\n")),(0,o.kt)("p",null,"Let's see what we got:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.in_top_n_percentage(3)\nYIELD *\nWITH genre, percentage, size\nWHERE size > 10\nRETURN genre, percentage, size\nORDER BY percentage DESC;\n")),(0,o.kt)("p",null,"As said in the introduction, we want to use the power of the graphs to extract\nsome useful information from our data which would be otherwise impossible. Most\nof those functions are complex and writing them from scratch would be tedious.\nAs every modern programmer, we'll just use a package that has everything we need\nand more. To be precise, we'll be using ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX")," that has a huge amount of\nutility functions and graph algorithms implemented."),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX")," algorithms we need to transform our graph to a type ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX"),"\nrecognizes. In our case, we need to use an undirected graph ",(0,o.kt)("inlineCode",{parentName:"p"},"networkX.Graph"),". To\nmake our lives easier, let's write a helper function that transforms Memgraph\ngraph to ",(0,o.kt)("inlineCode",{parentName:"p"},"networkX.Graph"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport networkx.algorithms as nxa\nimport itertools\n\n\ndef _create_undirected_graph(context: mgp.ProcCtx) -> nx.Graph:\n    g = nx.Graph()\n\n    for v in context.graph.vertices:\n        context.check_must_abort()\n        g.add_node(v)\n\n    for v in context.graph.vertices:\n        context.check_must_abort()\n        for e in v.out_edges:\n            g.add_edge(e.from_vertex, e.to_vertex)\n\n    return g\n")),(0,o.kt)("p",null,"Now let's get some information about the graph. As our data represents social\nnetwork we would like to know if it has\n",(0,o.kt)("a",{parentName:"p",href:"https://tinyurl.com/y3angsdb"},"bridges")," and we would\nlike to calculate the\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Clustering_coefficient"},"average clustering"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef analyze_graph(\n        context: mgp.ProcCtx) -> mgp.Record(\n        average_clustering=float,\n        has_bridges=bool):\n    g = _create_undirected_graph(context)\n    return mgp.Record(\n        average_clustering=nxa.average_clustering(g),\n        has_bridges=nxa.has_bridges(g))\n")),(0,o.kt)("p",null,"And to get and display the data let's run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.analyze_graph()\nYIELD *;\n")),(0,o.kt)("p",null,"Another interesting property of a node in a graph is its\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Centrality"},"centrality"),". Centrality tells us how\nimportant a node is for a graph. In our case, it would mean higher the\ncentrality, the more popular the user is. Let's find out which user is the most\npopular in our network and take a peek at his/her music taste. We will use the\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Betweenness_centrality"},"betweenness centrality"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef betweenness_centrality(\n        context: mgp.ProcCtx) -> mgp.Record(node=mgp.Vertex,\n                                            centrality=mgp.Number):\n    g = _create_undirected_graph(context)\n    return [mgp.Record(node=node, centrality=centrality)\n            for node,\n            centrality in nxa.centrality.betweenness_centrality(g).items()]\n")),(0,o.kt)("p",null,"Now let's take a look at the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CALL deezer_example.betweenness_centrality()\nYIELD *\nRETURN node.id, node.genres, centrality\nORDER BY centrality DESC\nLIMIT 10;\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")),(0,o.kt)("p",null,"Calculating betweenness centrality for each node can take some time to\nfinish. The issue of slower ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX")," implementations is something we at\nMemgraph would like to address in the future. An example of this can be seen\nin the next section of this tutorial."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"For our last trick, let's try to locate communities inside our network.\nCommunities are a set of nodes that are densely connected.\nThe goal of the community detection algorithms can be nicely described\nwith the next visualization:\n",(0,o.kt)("img",{src:n(48016).Z})),(0,o.kt)("p",null,"As for centrality, there are multiple algorithms for finding communities in a graph.\nWe will write a function that takes a method for calculating communities, uses it\nto find the communities, and, optionally, calculates some metrics specific to\nthe graph partitioning so we can compare algorithms. To make things more\ninteresting, let's find out which genre is the most popular in the community and\nreturn the percentage which tells us how many of the users have that genre on\ntheir list. In the end, music is something that connects us!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def _get_communities(\n        context: mgp.ProcCtx,\n        community_function,\n        calculate_quality: bool):\n    g = _create_undirected_graph(context)\n\n    communities = list(community_function(g))\n\n    if calculate_quality:\n        quality = {\n            'coverage': nxa.community.quality.coverage(g, communities),\n            'modularity': nxa.community.quality.modularity(g, communities),\n            'performance': nxa.community.quality.performance(g, communities)\n        }\n    else:\n        quality = {}\n\n    communities = [list(community) for community in communities]\n\n    def get_community_info(community):\n        info = {\n            'size': len(community),\n        }\n\n        genre_count = defaultdict(lambda: 0)\n        for genre in itertools.chain(\n                *[user.properties[\"genres\"] for user in community]):\n            genre_count[genre] += 1\n\n        if len(genre_count) != 0:\n            mpg = max(\n                genre_count.items(),\n                key=lambda item: item[1])\n\n            info['most_popular_genre'] = mpg[0]\n            info['most_popular_genre_percentage'] = mpg[1] / info['size']\n\n        return info\n\n    return mgp.Record(communities=[get_community_info(c)\n                                   for c in communities], quality=quality)\n")),(0,o.kt)("p",null,"Now that we have our function in place let's test some algorithms. We will be\nchecking out community detection using\n",(0,o.kt)("a",{parentName:"p",href:"https://networkx.github.io/documentation/latest/reference/algorithms/generated/networkx.algorithms.community.modularity_max.greedy_modularity_communities.html#networkx.algorithms.community.modularity_max.greedy_modularity_communities"},"greedy modularity maximization by Clauset-Newman-Moore"),"\nand\n",(0,o.kt)("a",{parentName:"p",href:"https://networkx.github.io/documentation/latest/reference/algorithms/generated/networkx.algorithms.community.label_propagation.label_propagation_communities.html#networkx.algorithms.community.label_propagation.label_propagation_communities"},"label propagation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@mgp.read_proc\ndef greedy_modularity_communities(\n        context: mgp.ProcCtx,\n        calculate_quality: bool = False) -> mgp.Record(\n        communities=list,\n        quality=mgp.Map):\n    return _get_communities(\n        context,\n        nxa.community.greedy_modularity_communities,\n        calculate_quality)\n\n\n@mgp.read_proc\ndef label_propagation_communities(\n        context: mgp.ProcCtx,\n        calculate_quality: bool = False) -> mgp.Record(\n        communities=list,\n        quality=mgp.Map):\n    return _get_communities(\n        context,\n        nxa.community.label_propagation_communities,\n        calculate_quality)\n")),(0,o.kt)("p",null,"In the above snippet, we can notice an optional argument ",(0,o.kt)("inlineCode",{parentName:"p"},"calculate_quality")," and\nusage of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"mgp.Map")," which is provided by Memgraph."),(0,o.kt)("p",null,"Let's see the results with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.greedy_modularity_communities()\nYIELD communities\nUNWIND communities as community\nWITH community\nWHERE community.size > 10\nRETURN community.most_popular_genre, community.most_popular_genre_percentage, community.size\nORDER BY community.size DESC;\n")),(0,o.kt)("p",null,"and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.label_propagation_communities()\nYIELD communities\nUNWIND communities as community\nWITH community\nWHERE community.size > 10\nRETURN community.most_popular_genre, community.most_popular_genre_percentage, community.size\nORDER BY community.size DESC;\n")),(0,o.kt)("p",null,"Your results should look something like this:\n",(0,o.kt)("img",{src:n(75846).Z})),(0,o.kt)("p",null,"Hmm, ",(0,o.kt)("inlineCode",{parentName:"p"},"Pop")," sure is popular. Let's ignore that genre:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"for genre in itertools.chain(\n        *[user.properties[\"genres\"] for user in community]):\n    if genre != 'Pop':\n        genre_count[genre] += 1\n")),(0,o.kt)("p",null,"and call our procedures again for each algorithm. Well, people always liked to\ndance!"),(0,o.kt)("p",null,"We saw the biggest communities in our network using two different methods. It's\nhard to say which of the methods did better so let's check a couple of metrics\nby calling the same procedure with ",(0,o.kt)("inlineCode",{parentName:"p"},"calculate_quality")," set to true:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.greedy_modularity_communities(true)\nYIELD communities, quality\nRETURN quality;\n")),(0,o.kt)("p",null,"and"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL deezer_example.label_propagation_communities(true)\nYIELD communities, quality\nRETURN quality;\n")),(0,o.kt)("p",null,"I think it should come as no surprise that an algorithm that maximizes\nmodularity has higher modularity..."),(0,o.kt)("h2",{id:"optimized-networkx-integration"},"Optimized NetworkX integration"),(0,o.kt)("p",null,"As noted before, we at Memgraph are aware of NetworkX's potential but the\nperformance for some functions isn't that good. We decided to tackle this\nproblem by writing a wrapper object for Memgraph's graph and with smarter usage\nof NetworkX algorithms. To make things even more convenient, we decided to\nimplement procedures that call NetworkX functions with our graphs, so you have\nout-of-the-box access to the graph algorithms. NetworkX contains a huge\namount of functions, and writing procedures for all of them require insane\neffort, so don't blame us if some of the algorithms aren't available. We are\nalways open to any feedback, so if you think that an implementation for\nan algorithm is needed, we will surely take that into account."),(0,o.kt)("p",null,"To demonstrate performance improvement, we will calculate the betweenness\ncentrality again, this time by using Memgraph's procedure."),(0,o.kt)("p",null,"To get access to the NetworkX procedures, start your Memgraph server without\nmodifying the query modules directory path. That way, the path will be set to\nthe default path, which contains ",(0,o.kt)("inlineCode",{parentName:"p"},"nxalg")," module."),(0,o.kt)("p",null,"Now let's call the procedure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"CALL nxalg.betweenness_centrality()\nYIELD *\nRETURN node.id, node.genres, betweenness\nORDER BY betweenness DESC\nLIMIT 10;\n")),(0,o.kt)("p",null,"You should get the same results as with our previous procedure for\nthe betweenness centrality but in a much lower time."),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,"We encourage you to take a look at our ",(0,o.kt)("inlineCode",{parentName:"p"},"How to")," for the modules at the\n",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.3.0/database-functionalities/query-modules/implement-query-modules"},"How to Implement Query Modules?"),"."),(0,o.kt)("p",null,"This tutorial showed you how with a little effort you can extend your control\nover the data. Using packages like ",(0,o.kt)("inlineCode",{parentName:"p"},"NetworkX")," you get a huge amount of already\nimplemented graph algorithms while Memgraph allows you complete access to its\ninternal graph."),(0,o.kt)("p",null,"If you are not a big fan of Python, don't worry! We have a C API with the exact\nsame functionalities."))}m.isMDXComponent=!0},48016:function(e,t,n){"use strict";t.Z=n.p+"assets/images/community_detection_visualization-a7bacfdf4a83c423a48a363ad86b4080.png"},75846:function(e,t,n){"use strict";t.Z=n.p+"assets/images/community_genre_statistics-8206eba0df0c16990e5c2151af0f726e.png"}}]);