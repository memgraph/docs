"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99897],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=m(a),h=r,d=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93050:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return u},default:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"graphing-the-premier-league",title:"Graphing the Premier League",sidebar_label:"Graphing the Premier League"},s=void 0,m={unversionedId:"tutorials/graphing-the-premier-league",id:"version-1.4.0/tutorials/graphing-the-premier-league",isDocsHomePage:!1,title:"Graphing the Premier League",description:"This article is a part of a series intended to show users how to use Memgraph",source:"@site/memgraph_versioned_docs/version-1.4.0/tutorials/graphing-the-premier-league.md",sourceDirName:"tutorials",slug:"/tutorials/graphing-the-premier-league",permalink:"/memgraph/1.4.0/tutorials/graphing-the-premier-league",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-1.4.0/tutorials/graphing-the-premier-league.md",version:"1.4.0",frontMatter:{id:"graphing-the-premier-league",title:"Graphing the Premier League",sidebar_label:"Graphing the Premier League"},sidebar:"version-1.4.0/memgraph",previous:{title:"Football transfers",permalink:"/memgraph/1.4.0/tutorials/football-transfers"},next:{title:"Marvel Comic Universe social network",permalink:"/memgraph/1.4.0/tutorials/marvel-universe"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[]},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[]},{value:"Example queries",id:"example-queries",children:[]}],p={toc:u};function c(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is a part of a series intended to show users how to use Memgraph\non real-world data and, by doing so, retrieve some interesting and useful\ninformation."),(0,o.kt)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",(0,o.kt)("a",{parentName:"p",href:"/memgraph/1.4.0/tutorials/tutorials"},"tutorial overview section"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Association_football"},"Football"),"\nis a team sport played between two teams of eleven\nplayers with a spherical ball. The game is played on a rectangular pitch with\na goal at each and. The object of the game is to score by moving the ball\nbeyond the goal line into the opposing goal. The game is played by more than\n250 million players in over 200 countries, making it the world's most\npopular sport."),(0,o.kt)("p",null,"In this article, we will present a graph model of a reasonably sized dataset\nof football matches across world's most popular leagues."),(0,o.kt)("h2",{id:"data-model"},"Data model"),(0,o.kt)("p",null,"In essence, we are trying to model a set of football matches. All information\nabout a single match is going to be contained in three nodes and two edges.\nTwo of the nodes will represent the teams that have played the match, while the\nthird node will represent the game itself. Both edges are directed from the\nteam nodes to the game node and are labeled as ",(0,o.kt)("inlineCode",{parentName:"p"},":Played"),"."),(0,o.kt)("p",null,"Every bit of information regarding the data model is nicely condensed in\nthe following visual representation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Football",src:a(9634).Z})),(0,o.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,o.kt)("p",null,"You have two options for exploring this dataset.\nIf you just want to take a look at the dataset and try out a few queries, open\n",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/"},"Memgraph Playground")," and continue with\nthe tutorial there. Note that you will not be able to execute ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," operations."),(0,o.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and navigate\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",(0,o.kt)("inlineCode",{parentName:"p"},"Football Premier league games")," and continue with the tutorial."),(0,o.kt)("h2",{id:"example-queries"},"Example queries"),(0,o.kt)("p",null,"1) You might wonder, what leagues are supported?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Game)\nRETURN DISTINCT n.league\nORDER BY n.league;\n")),(0,o.kt)("p",null,"2) We have stored a certain number of seasons for each league. What is the\noldest/newest season we have included?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Game)\nRETURN DISTINCT n.league AS league, min(n.season) AS oldest, max(n.season) AS newest\nORDER BY league;\n")),(0,o.kt)("p",null,"3) You have already seen one game between Chelsea and Arsenal, let's list all of\nthem in chronological order."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team {name: "Chelsea"})-[e:Played]->(w:Game)<-[f:Played]-(m:Team {name: "Arsenal"})\nRETURN w.date AS date, e.side AS chelsea, f.side AS arsenal,\n       w.FT_home_score AS home_score, w.FT_away_score AS away_score\nORDER BY date;\n')),(0,o.kt)("p",null,"4) How about filtering games in which Chelsea won?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team {name: "Chelsea"})-[e:Played {outcome: "won"}]->\n      (w:Game)<-[f:Played]-(m:Team {name: "Arsenal"})\nRETURN w.date AS date, e.side AS chelsea, f.side AS arsenal,\n       w.FT_home_score AS home_score, w.FT_away_score AS away_score\nORDER BY date;\n')),(0,o.kt)("p",null,"5) Home field advantage is a thing in football. Let's list the number of home\ndefeats for each Premier League team in the 2016/2017 season."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team)-[:Played {side: "home", outcome: "lost"}]->\n      (w:Game {league: "ENG-Premier League", season: 2016})\nRETURN n.name AS team, count(w) AS home_defeats\nORDER BY home_defeats, team;\n')),(0,o.kt)("p",null,"6) At the end of the season the team with the most points wins the league. For\neach victory, a team is awarded 3 points and for each draw it is awarded\n1 point. Let's find out how many points did reigning champions (Chelsea) have\nat the end of 2016/2017 season."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team {name: "Chelsea"})-[:Played {outcome: "drew"}]->(w:Game {season: 2016})\nWITH n, count(w) AS draw_points\nMATCH (n)-[:Played {outcome: "won"}]->(w:Game {season: 2016})\nRETURN draw_points + 3 * count(w) AS total_points;\n')),(0,o.kt)("p",null,"7) In fact, why not retrieve the whole table?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)-[:Played {outcome: "drew"}]->(w:Game {league: "ENG-Premier League", season: 2016})\nWITH n, count(w) AS draw_points\nMATCH (n)-[:Played {outcome: "won"}]->(w:Game {league: "ENG-Premier League", season: 2016})\nRETURN n.name AS team, draw_points + 3 * count(w) AS total_points\nORDER BY total_points DESC;\n')),(0,o.kt)("p",null,"8) People have always debated which of the major leagues is the most exciting.\nOne basic metric is the average number of goals per game. Let's see the results\nat the end of the 2016/2017 season. WARNING: This might shock you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (w:Game {season: 2016})\nRETURN w.league, avg(w.FT_home_score) + avg(w.FT_away_score) AS avg_goals_per_game\nORDER BY avg_goals_per_game DESC;\n")),(0,o.kt)("p",null,"9) Another metric might be the number of comebacks","\u2014","games where one side\nwas winning at half time but were overthrown by the other side by the end\nof the match. Let's count such occurrences during all supported seasons across\nall supported leagues."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (g:Game)\nWHERE (g.HT_result = "H" AND g.FT_result = "A") OR\n      (g.HT_result = "A" AND g.FT_result = "H")\nRETURN g.league AS league, count(g) AS comebacks\nORDER BY comebacks DESC;\n')),(0,o.kt)("p",null,"10) Exciting leagues also tend to be very unpredictable. On that note, let's\nlist all triplets of teams where, during the course of one season, team A won\nagainst team B, team B won against team C and team C won against team A."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (a)-[:Played {outcome: "won"}]->(p:Game {league: "ENG-Premier League", season: 2016})<--\n      (b)-[:Played {outcome: "won"}]->(q:Game {league: "ENG-Premier League", season: 2016})<--\n      (c)-[:Played {outcome: "won"}]->(r:Game {league: "ENG-Premier League", season: 2016})<--(a)\nWHERE p.date < q.date AND q.date < r.date\nRETURN a.name AS team1, b.name AS team2, c.name AS team3;\n')))}c.isMDXComponent=!0},9634:function(e,t,a){t.Z=a.p+"assets/images/football_metagraph-4c1e550b4c9166c480e469573395ea3a.png"}}]);