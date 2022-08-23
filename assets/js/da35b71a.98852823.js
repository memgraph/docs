"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11519],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},A=Object.keys(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(a=0;a<A.length;a++)n=A[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,A=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,c=u["".concat(s,".").concat(d)]||u[d]||m[d]||A;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var A=n.length,o=new Array(A);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<A;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var a=n(87462),r=n(63366),A=(n(67294),n(3905)),o=["components"],i={id:"exploring-the-european-road-network",title:"Exploring the European road network",sidebar_label:"Exploring the European road network",slug:"/tutorials/exploring-the-european-road-network"},s=void 0,l={unversionedId:"tutorials/exploring-datasets/exploring-the-european-road-network",id:"tutorials/exploring-datasets/exploring-the-european-road-network",title:"Exploring the European road network",description:"This article is a part of a series intended to show users how to use Memgraph on",source:"@site/docs/tutorials/exploring-datasets/exploring-the-european-road-network.md",sourceDirName:"tutorials/exploring-datasets",slug:"/tutorials/exploring-the-european-road-network",permalink:"/docs/memgraph/next/tutorials/exploring-the-european-road-network",editUrl:"https://github.com/memgraph/docs/tree/master/docs/tutorials/exploring-datasets/exploring-the-european-road-network.md",tags:[],version:"current",frontMatter:{id:"exploring-the-european-road-network",title:"Exploring the European road network",sidebar_label:"Exploring the European road network",slug:"/tutorials/exploring-the-european-road-network"},sidebar:"memgraph",previous:{title:"Backpacking through Europe",permalink:"/docs/memgraph/next/tutorials/backpacking-through-europe"},next:{title:"Football transfers",permalink:"/docs/memgraph/next/tutorials/football-transfers"}},p={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Data model",id:"data-model",level:2},{value:"Exploring the dataset",id:"exploring-the-dataset",level:2},{value:"Example queries",id:"example-queries",level:2}],u={toc:m};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,A.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"This article is a part of a series intended to show users how to use Memgraph on\nreal-world data and, by doing so, retrieve some interesting and useful\ninformation."),(0,A.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,A.kt)("a",{parentName:"p",href:"/docs/memgraph/next/tutorials"},"tutorial overview section"),", where you\ncan also find instructions on how to start with the tutorial."),(0,A.kt)("h2",{id:"introduction"},"Introduction"),(0,A.kt)("p",null,"This particular article outlines how to use some of Memgraph's built-in graph\nalgorithms. More specifically, the article shows how to use breadth-first search\ngraph traversal algorithm, and Dijkstra's algorithm for finding weighted\nshortest paths between nodes in the graph."),(0,A.kt)("h2",{id:"data-model"},"Data model"),(0,A.kt)("p",null,"One of the most common applications of graph traversal algorithms is driving\nroute computation, so we will use European road network graph as an example. The\ngraph consists of 999 major European cities from 39 countries in total. Each\ncity is connected to the country it belongs to via an edge of type ",(0,A.kt)("inlineCode",{parentName:"p"},":In_"),". There\nare edges of type ",(0,A.kt)("inlineCode",{parentName:"p"},":Road")," connecting cities less than 500 kilometers apart.\nDistance between cities is specified in the ",(0,A.kt)("inlineCode",{parentName:"p"},"length")," property of the edge."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Road network",src:n(23234).Z,width:"818",height:"396"})),(0,A.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,A.kt)("p",null,"You have two options for exploring this dataset. If you just want to take a look\nat the dataset and try out a few queries, open ",(0,A.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/europe-roads"},"Memgraph\nPlayground")," and continue\nwith the tutorial there. Note that you will not be able to execute ",(0,A.kt)("inlineCode",{parentName:"p"},"write"),"\noperations."),(0,A.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,A.kt)("a",{parentName:"p",href:"https://memgraph.com/download#memgraph-platform"},"Memgraph Platform"),". Once you\nhave it up and running, open Memgraph Lab web application within the browser on\n",(0,A.kt)("a",{parentName:"p",href:"http://localhost:3000"},(0,A.kt)("inlineCode",{parentName:"a"},"localhost:3000"))," and navigate to ",(0,A.kt)("inlineCode",{parentName:"p"},"Datasets")," in the\nsidebar. From there, choose the dataset ",(0,A.kt)("inlineCode",{parentName:"p"},"Europe road network")," and continue with\nthe tutorial."),(0,A.kt)("h2",{id:"example-queries"},"Example queries"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"1",".")," Let's list all of the countries in our road network."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country)\nRETURN c.name\nORDER BY c.name;\n")),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"2",".")," Which Croatian cities are in our road network?"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (c:City)-[:In_]->(:Country {name: "Croatia"})\nRETURN c.name\nORDER BY c.name;\n')),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"3",".")," Which cities in our road network are less than 200 km away from Zagreb?"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:City {name: "Zagreb"})-[r:Road]->(c:City)\nWHERE r.length < 200\nRETURN c.name\nORDER BY c.name;\n')),(0,A.kt)("p",null,"Now let's try some queries using Memgraph's graph traversal capabilities."),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"4",".")," Say you want to drive from Zagreb to Paris. You might wonder, what is\nthe least number of cities you have to visit if you don't want to drive more\nthan 500 kilometers between stops. Since the edges in our road network don't\nconnect cities that are more than 500 km apart, this is a great use case for the\nbreadth-first search (BFS) algorithm."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Zagreb"})\n          -[:Road * bfs]->\n          (:City {name: "Paris"})\nRETURN nodes(p);\n')),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"5",".")," What if we want to bike to Paris instead of driving? It is unreasonable\n(and dangerous!) to bike 500 km per day. Let's limit ourselves to biking no more\nthan 200 km in one go."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Zagreb"})\n          -[:Road * bfs (e, v | e.length <= 200)]->\n          (:City {name: "Paris"})\nRETURN nodes(p);\n')),(0,A.kt)("p",null,'"What is this special syntax?", you might wonder.'),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"(e, v | e.length <= 200)")," is called a ",(0,A.kt)("em",{parentName:"p"},"filter lambda"),". It's a function that\ntakes an edge symbol ",(0,A.kt)("inlineCode",{parentName:"p"},"e")," and a vertex symbol ",(0,A.kt)("inlineCode",{parentName:"p"},"v")," and decides whether this edge\nand vertex pair should be considered valid in breadth-first expansion by\nreturning true or false (or Null). In the above example, lambda is returning\ntrue if edge length is not greater than 200, because we don't want to bike more\nthan 200 km in one go."),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"6",".")," Let's say we also don't want to visit Vienna on our way to Paris,\nbecause we have a lot of friends there and visiting all of them would take up a\nlot of our time. We just have to update our filter lambda."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Zagreb"})\n          -[:Road * bfs (e, v | e.length <= 200 AND v.name != "Vienna")]->\n          (:City {name: "Paris"})\nRETURN nodes(p);\n')),(0,A.kt)("p",null,"As you can see, without the additional restriction we could visit 11 cities. If\nwe want to avoid Vienna, we must visit at least 12 cities."),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"7",".")," Instead of counting the cities visited, we might want to find the\nshortest paths in terms of distance travelled. This is a textbook application of\nDijkstra's algorithm. The following query will return the list of cities on the\nshortest path from Zagreb to Paris along with the total length of the path."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Zagreb"})\n          -[:Road * wShortest (e, v | e.length) total_weight]->\n          (:City {name: "Paris"})\nRETURN nodes(p) AS cities, total_weight;\n')),(0,A.kt)("p",null,"As you can see, the syntax is quite similar to breadth-first search syntax.\nInstead of a filter lambda, we need to provide a ",(0,A.kt)("em",{parentName:"p"},"weight lambda")," and the ",(0,A.kt)("em",{parentName:"p"},"total\nweight symbol"),". Given an edge and vertex pair, weight lambda must return the\ncost of expanding to the given vertex using the given edge. The path returned\nwill have the smallest possible sum of costs and it will be stored in the total\nweight symbol. A limitation of Dijkstra's algorithm is that the cost must be\nnon-negative."),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"8",".")," We can also combine weight and filter lambdas in the shortest-path\nquery. Let's say we're interested in the shortest path that doesn't require\ntravelling more that 200 km in one go for our bike route."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Zagreb"})\n      -[:Road * wShortest (e, v | e.length) total_weight (e, v | e.length <= 200)]->\n      (:City {name: "Paris"})\nRETURN nodes(p) AS cities, total_weight;\n')),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"9",".")," Let's try and find 10 cities that are furthest away from Zagreb."),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:City {name: "Zagreb"})\n      -[:Road * wShortest (e, v | e.length) total_weight]->\n      (c:City)\nRETURN c, total_weight\nORDER BY total_weight DESC\nLIMIT 10;\n')),(0,A.kt)("p",null,"It is not surprising to see that they are all in Siberia."),(0,A.kt)("p",null,"To learn more about these algorithms, we suggest you check out their Wikipedia\npages:"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"Breadth-first search")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"},"Dijkstra's algorithm"))))}d.isMDXComponent=!0},23234:function(e,t){t.Z="data:image/png;base64,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"}}]);