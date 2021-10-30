"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25314],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86285:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"backpacking-through-europe",title:"Backpacking through Europe",sidebar_label:"Backpacking through Europe"},p=void 0,l={unversionedId:"tutorials/backpacking-through-europe",id:"version-2.0.1/tutorials/backpacking-through-europe",isDocsHomePage:!1,title:"Backpacking through Europe",description:"This article is a part of a series intended to show users how to use Memgraph on",source:"@site/memgraph_versioned_docs/version-2.0.1/tutorials/backpacking-through-europe.md",sourceDirName:"tutorials",slug:"/tutorials/backpacking-through-europe",permalink:"/docs/memgraph/tutorials/backpacking-through-europe",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.0.1/tutorials/backpacking-through-europe.md",tags:[],version:"2.0.1",frontMatter:{id:"backpacking-through-europe",title:"Backpacking through Europe",sidebar_label:"Backpacking through Europe"},sidebar:"version-2.0.1/memgraph",previous:{title:"Analyzing TED Talks",permalink:"/docs/memgraph/tutorials/analyzing-ted-talks"},next:{title:"Exploring the European road network",permalink:"/docs/memgraph/tutorials/exploring-the-european-road-network"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Data model",id:"data-model",children:[],level:2},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[],level:2},{value:"Example queries",id:"example-queries",children:[],level:2}],h={toc:c};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is a part of a series intended to show users how to use Memgraph on\nreal-world data and, by doing so, retrieve some interesting and useful\ninformation."),(0,o.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials"},"tutorial overview section"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Backpacking is a form of low-cost independent travel. It includes the use of\npublic transportation, inexpensive hostels and is often longer in duration than\nconventional vacations. This article explores the European Backpackers Index\nfrom 2018. The dataset contains tourist prices and other data for 56 of the most\npopular European cities. Here we showcase how Memgraph's graph traversal\nalgorithms can be used to make a real-time travelling recommendation system."),(0,o.kt)("h2",{id:"data-model"},"Data model"),(0,o.kt)("p",null,"The European Backpacker Index (2018) contains information for 56 cities from 36\nEuropean countries. Two cities are connected via the ",(0,o.kt)("inlineCode",{parentName:"p"},":CloseTo")," edge if they are\nfrom the same or from the neighboring countries. Every edge has an ",(0,o.kt)("inlineCode",{parentName:"p"},"eu_border"),"\nproperty to indicate whether the EU border needs to be crossed to reach the\nother city. The index lists the cheapest and most attractive hostel from each\ncity. The hostel name can be accessed via the ",(0,o.kt)("inlineCode",{parentName:"p"},"cheapest_hostel")," parameter, and\nits website is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"hostel_url"),". The city nodes also contain parameters\nfor tourist information such as ",(0,o.kt)("inlineCode",{parentName:"p"},"local_currency"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"local_currency_code"),", and\n",(0,o.kt)("inlineCode",{parentName:"p"},"total_USD"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"total_USD")," is the sum of the most common tourist expenses, such as\n",(0,o.kt)("inlineCode",{parentName:"p"},"cost_per_night_USD"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"attractions_USD"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"drinks_USD"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"meals_USD"),", and\n",(0,o.kt)("inlineCode",{parentName:"p"},"transportation_USD"),". The country nodes are connected with the ",(0,o.kt)("inlineCode",{parentName:"p"},":Borders")," edge\nif they are neighboring countries. This edge also has the ",(0,o.kt)("inlineCode",{parentName:"p"},"eu_border")," property.\nEvery city node is connected to its parent country node via the ",(0,o.kt)("inlineCode",{parentName:"p"},":Inside")," edge."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Backpacking",src:n(49353).Z})),(0,o.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,o.kt)("p",null,"You have two options for exploring this dataset. If you just want to take a look\nat the dataset and try out a few queries, open ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/europe-backpacking"},"Memgraph\nPlayground")," and\ncontinue with the tutorial there. Note that you will not be able to execute\n",(0,o.kt)("inlineCode",{parentName:"p"},"write")," operations."),(0,o.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and\nnavigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",(0,o.kt)("inlineCode",{parentName:"p"},"Backpacking through Europe")," and continue with the tutorial."),(0,o.kt)("h2",{id:"example-queries"},"Example queries"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1",".")," Let's list the top 10 cities with the cheapest hostels by cost per night\nfrom the European Backpacker Index."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:City)\nRETURN n.name, n.cheapest_hostel, n.cost_per_night_USD, n.hostel_url\nORDER BY n.cost_per_night_USD LIMIT 10;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2",".")," Say we want to visit Croatia. Which cities does Backpackers Index\nrecommend? Let's sort them by total costs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (c:City)-[:Inside]->(:Country {name: "Croatia"})\nRETURN c.name, c.cheapest_hostel, c.total_USD\nORDER BY c.total_USD;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3",".")," What if we want to visit multiple cities in a single country and want to\nknow which country has the most cities in the index?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country)<-[:Inside]-(m:City)\nRETURN n.name AS CountryName, COUNT(m) AS HostelCount\nORDER BY HostelCount DESC, CountryName LIMIT 10;\n")),(0,o.kt)("p",null,"Now, let's start backpacking. This is where Memgraph's graph traversal\ncapabilities come into play."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4",".")," We're on a trip from Spain to Russia and want to cross the least amount\nof borders. This is a great job for the breadth-first search (BFS) algorithm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (n:Country {name: "Spain"})\n          -[r:Borders * bfs]-\n          (m:Country {name: "Russia"})\nUNWIND (nodes(p)) AS rows\nRETURN rows.name;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5",".")," What if we're interested in going from Bratislava to Madrid with the\nleast amount of stops? Also, we can't be bothered to switch currencies and want\nto pay with Euro everywhere along the trip."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Bratislava"})\n          -[:CloseTo * bfs (e, v | v.local_currency = "Euro")]-\n          (:City {name: "Madrid"})\nUNWIND (nodes(p)) AS rows\nRETURN rows.name;\n')),(0,o.kt)("p",null,"Here we can see how to use the ",(0,o.kt)("em",{parentName:"p"},"filter lambda")," to filter paths where the local\ncurrency in the city vertex ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," is the Euro. ",(0,o.kt)("inlineCode",{parentName:"p"},"nodes(p)")," returns the path as a\nlist, and ",(0,o.kt)("inlineCode",{parentName:"p"},"UNWIND")," unpacks the list into individual rows."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6",".")," This time we're going from Brussels to Athens on a budget. We're\ninterested in the route with the cheapest stays. But there's a problem, we've\nlost our passport! Luckily, we're a European Union citizen and can travel freely\nwithin the EU. Let's find the cheapest route from Brussels to Athens with no EU\nborder crossings. This is a good use case for the Dijkstra's shortest path\nalgorithm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Brussels"})\n          -[:CloseTo * wShortest(e, v | v.cost_per_night_USD) total_cost (e, v | e.eu_border=FALSE)]-\n          (:City {name: "Athens"})\nWITH extract(city in nodes(p) | city.name) AS trip, total_cost\nRETURN trip, total_cost;\n')),(0,o.kt)("p",null,"Here we used the ",(0,o.kt)("em",{parentName:"p"},"weight lambda")," to specify the cost of expanding to the\nspecified vertex using the given edge (",(0,o.kt)("inlineCode",{parentName:"p"},"v.cost_per_night_USD"),"), and the ",(0,o.kt)("em",{parentName:"p"},"total\ncost")," symbol to calculate the cost of the trip. This can be done using an edge\nproperty like in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials/exploring-the-european-road-network"},"Exploring the European Road\nNetwork")," tutorial. Here we use\n",(0,o.kt)("inlineCode",{parentName:"p"},"cost_per_night")," property of the city vertex ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," as our weight. Finally, we use\nthe ",(0,o.kt)("em",{parentName:"p"},"filter lambda")," to only consider paths with no EU border crossings. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"extract")," function is used to only show the city names. To get the full city\ninformation, we would simply return ",(0,o.kt)("inlineCode",{parentName:"p"},"nodes(p)"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7",".")," We're on a trip with our friends from Madrid to Belgrade, but want to\nvisit Vienna along the way. We want to party it up on the first part of our trip\nand are only interested in the cost of staying and drinks. After that, we plan\non sightseeing and are interested in the cost of attractions from Vienna to\nBelgrade. What is our cheapest option?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH p = (:City {name: "Madrid"})\n          -[:CloseTo * wShortest(e, v | v.cost_per_night_USD + v.drinks_USD) cost1]-\n          (:City {name: "Vienna"})\n          -[:CloseTo * wShortest(e, v | v.cost_per_night_USD + v.attractions_USD) cost2]-\n          (:City {name: "Belgrade"})\nWITH extract(city in nodes(p) | city.name) AS trip, cost1, cost2\nRETURN trip, cost1 + cost2 AS total_cost;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8",".")," We're on a trip from Paris to Zagreb and want to visit at least 3\ncities, but no more than 5 (excluding the starting location ","\u2014"," Paris).\nLet's list our top 10 options sorted by the total trip cost and number of cities\nin the path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH path = (n:City {name: "Paris"})-[:CloseTo *3..5]-(m:City {name: "Zagreb"})\nWITH nodes(path) AS trip\nWITH extract(city in trip | [city, trip]) AS lst\nUNWIND lst AS rows\nWITH rows[0] AS city, extract(city in rows[1] | city.name) AS trip\nRETURN trip,\n       toInteger(sum(city.total_USD)) AS trip_cost_USD,\n       count(trip) AS city_count\nORDER BY trip_cost_USD, city_count DESC LIMIT 10;\n')),(0,o.kt)("p",null,"Here we can see the usage of the variable length paths. By using the ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),"\n",(0,o.kt)("em",{parentName:"p"},"(asterisk)")," symbol, we can traverse from one node to another by following any\nnumber of connections. We then use the extract function to get a list of (city,\ntrip) tuples. The city is used to calculate the total cost of the trip using the\nsum function. Finally, we sort our results by price first, and then by city\ncount."),(0,o.kt)("p",null,"To learn more about these algorithms, we suggest you check out their Wikipedia\npages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Breadth-first_search"},"Breadth-first search")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"},"Dijkstra's algorithm"))))}u.isMDXComponent=!0},49353:function(e,t,n){t.Z=n.p+"assets/images/backpacking_metagraph-50976049aa85a582ed0afc3e921187f2.png"}}]);