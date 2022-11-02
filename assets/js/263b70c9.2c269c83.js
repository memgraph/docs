"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33612],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=m(a),d=r,c=h["".concat(i,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={id:"graphing-the-premier-league",title:"Graphing the Premier League",sidebar_label:"Graphing the Premier League"},l=void 0,s={unversionedId:"tutorials/graphing-the-premier-league",id:"version-2.1.0/tutorials/graphing-the-premier-league",title:"Graphing the Premier League",description:"This article is a part of a series intended to show users how to use Memgraph on",source:"@site/memgraph_versioned_docs/version-2.1.0/tutorials/graphing-the-premier-league.md",sourceDirName:"tutorials",slug:"/tutorials/graphing-the-premier-league",permalink:"/docs/memgraph/2.1.0/tutorials/graphing-the-premier-league",draft:!1,editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/tutorials/graphing-the-premier-league.md",tags:[],version:"2.1.0",frontMatter:{id:"graphing-the-premier-league",title:"Graphing the Premier League",sidebar_label:"Graphing the Premier League"},sidebar:"version-2.1.0/memgraph",previous:{title:"Game of Thrones deaths",permalink:"/docs/memgraph/2.1.0/tutorials/got-deaths"},next:{title:"Marvel Comic Universe social network",permalink:"/docs/memgraph/2.1.0/tutorials/marvel-universe"}},i={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Data model",id:"data-model",level:2},{value:"Exploring the dataset",id:"exploring-the-dataset",level:2},{value:"Example queries",id:"example-queries",level:2}],p={toc:m};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article is a part of a series intended to show users how to use Memgraph on\nreal-world data and, by doing so, retrieve some interesting and useful\ninformation."),(0,r.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,r.kt)("a",{parentName:"p",href:"/docs/memgraph/2.1.0/tutorials"},"tutorial overview section"),"."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Association_football"},"Football")," is a team sport\nplayed between two teams of eleven players with a spherical ball. The game is\nplayed on a rectangular pitch with a goal at each and. The object of the game is\nto score by moving the ball beyond the goal line into the opposing goal. The\ngame is played by more than 250 million players in over 200 countries, making it\nthe world's most popular sport."),(0,r.kt)("p",null,"In this article, we will present a graph model of a reasonably sized dataset of\nfootball matches across world's most popular leagues."),(0,r.kt)("h2",{id:"data-model"},"Data model"),(0,r.kt)("p",null,"In essence, we are trying to model a set of football matches. All information\nabout a single match is going to be contained in three nodes and two edges. Two\nof the nodes will represent the teams that have played the match, while the\nthird node will represent the game itself. Both edges are directed from the team\nnodes to the game node and are labeled as ",(0,r.kt)("inlineCode",{parentName:"p"},":Played"),"."),(0,r.kt)("p",null,"Every bit of information regarding the data model is nicely condensed in the\nfollowing visual representation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Football",src:a(19875).Z,width:"839",height:"570"})),(0,r.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,r.kt)("p",null,"You have two options for exploring this dataset. If you just want to take a look\nat the dataset and try out a few queries, open ",(0,r.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/football-premier-league"},"Memgraph\nPlayground")," and\ncontinue with the tutorial there. Note that you will not be able to execute\n",(0,r.kt)("inlineCode",{parentName:"p"},"write")," operations."),(0,r.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and\nnavigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",(0,r.kt)("inlineCode",{parentName:"p"},"Football Premier league games")," and continue with the tutorial."),(0,r.kt)("h2",{id:"example-queries"},"Example queries"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1",".")," You might wonder, what leagues are supported?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Game)\nRETURN DISTINCT n.league\nORDER BY n.league;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2",".")," We have stored a certain number of seasons for each league. What is the\noldest/newest season we have included?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Game)\nRETURN DISTINCT n.league AS league, min(n.season) AS oldest, max(n.season) AS newest\nORDER BY league;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3",".")," You have already seen one game between Chelsea and Arsenal, let's list\nall of them in chronological order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team {name: "Chelsea"})-[e:Played]->(w:Game)<-[f:Played]-(m:Team {name: "Arsenal"})\nRETURN w.date AS date, e.side AS chelsea, f.side AS arsenal,\n       w.FT_home_score AS home_score, w.FT_away_score AS away_score\nORDER BY date;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4",".")," How about filtering games in which Chelsea won?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team {name: "Chelsea"})-[e:Played {outcome: "won"}]->\n      (w:Game)<-[f:Played]-(m:Team {name: "Arsenal"})\nRETURN w.date AS date, e.side AS chelsea, f.side AS arsenal,\n       w.FT_home_score AS home_score, w.FT_away_score AS away_score\nORDER BY date;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5",".")," Home field advantage is a thing in football. Let's list the number of\nhome defeats for each Premier League team in the 2016/2017 season."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team)-[:Played {side: "home", outcome: "lost"}]->\n      (w:Game {league: "ENG-Premier League", season: 2016})\nRETURN n.name AS team, count(w) AS home_defeats\nORDER BY home_defeats, team;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6",".")," At the end of the season the team with the most points wins the league.\nFor each victory, a team is awarded 3 points and for each draw it is awarded 1\npoint. Let's find out how many points did reigning champions (Chelsea) have at\nthe end of 2016/2017 season."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n:Team {name: "Chelsea"})-[:Played {outcome: "drew"}]->(w:Game {season: 2016})\nWITH n, count(w) AS draw_points\nMATCH (n)-[:Played {outcome: "won"}]->(w:Game {season: 2016})\nRETURN draw_points + 3 * count(w) AS total_points;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7",".")," In fact, why not retrieve the whole table?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (n)-[:Played {outcome: "drew"}]->(w:Game {league: "ENG-Premier League", season: 2016})\nWITH n, count(w) AS draw_points\nMATCH (n)-[:Played {outcome: "won"}]->(w:Game {league: "ENG-Premier League", season: 2016})\nRETURN n.name AS team, draw_points + 3 * count(w) AS total_points\nORDER BY total_points DESC;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8",".")," People have always debated which of the major leagues is the most\nexciting. One basic metric is the average number of goals per game. Let's see\nthe results at the end of the 2016/2017 season. WARNING: This might shock you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (w:Game {season: 2016})\nRETURN w.league, avg(w.FT_home_score) + avg(w.FT_away_score) AS avg_goals_per_game\nORDER BY avg_goals_per_game DESC;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9",".")," Another metric might be the number of comebacks","\u2014","games where one\nside was winning at half time but were overthrown by the other side by the end\nof the match. Let's count such occurrences during all supported seasons across\nall supported leagues."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (g:Game)\nWHERE (g.HT_result = "H" AND g.FT_result = "A") OR\n      (g.HT_result = "A" AND g.FT_result = "H")\nRETURN g.league AS league, count(g) AS comebacks\nORDER BY comebacks DESC;\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"10",".")," Exciting leagues also tend to be very unpredictable. On that note,\nlet's list all triplets of teams where, during the course of one season, team A\nwon against team B, team B won against team C and team C won against team A."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (a)-[:Played {outcome: "won"}]->(p:Game {league: "ENG-Premier League", season: 2016})<--\n      (b)-[:Played {outcome: "won"}]->(q:Game {league: "ENG-Premier League", season: 2016})<--\n      (c)-[:Played {outcome: "won"}]->(r:Game {league: "ENG-Premier League", season: 2016})<--(a)\nWHERE p.date < q.date AND q.date < r.date\nRETURN a.name AS team1, b.name AS team2, c.name AS team3;\n')))}u.isMDXComponent=!0},19875:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/football_metagraph-4c1e550b4c9166c480e469573395ea3a.png"}}]);