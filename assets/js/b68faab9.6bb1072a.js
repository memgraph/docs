"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7886],{3905:function(e,a,n){n.d(a,{Zo:function(){return m},kt:function(){return f}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=p(n),f=r,c=h["".concat(s,".").concat(f)]||h[f]||d[f]||o;return n?t.createElement(c,l(l({ref:a},m),{},{components:n})):t.createElement(c,l({ref:a},m))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47674:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return h}});var t=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"football-transfers",title:"Football transfers",sidebar_label:"Football transfers"},s=void 0,p={unversionedId:"tutorials/football-transfers",id:"version-2.1.0/tutorials/football-transfers",isDocsHomePage:!1,title:"Football transfers",description:"This article is a part of a series intended to show how to use Memgraph on",source:"@site/memgraph_versioned_docs/version-2.1.0/tutorials/football-transfers.md",sourceDirName:"tutorials",slug:"/tutorials/football-transfers",permalink:"/docs/memgraph/tutorials/football-transfers",editUrl:"https://github.com/memgraph/docs/tree/master/memgraph_versioned_docs/version-2.1.0/tutorials/football-transfers.md",tags:[],version:"2.1.0",frontMatter:{id:"football-transfers",title:"Football transfers",sidebar_label:"Football transfers"},sidebar:"version-2.1.0/memgraph",previous:{title:"Exploring the European road network",permalink:"/docs/memgraph/tutorials/exploring-the-european-road-network"},next:{title:"Game of Thrones deaths",permalink:"/docs/memgraph/tutorials/got-deaths"}},m=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Data model",id:"data-model",children:[],level:2},{value:"Exploring the dataset",id:"exploring-the-dataset",children:[],level:2},{value:"Example queries using Cypher",id:"example-queries-using-cypher",children:[],level:2}],d={toc:m};function h(e){var a=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article is a part of a series intended to show how to use Memgraph on\nreal-world data to retrieve some interesting and useful information."),(0,o.kt)("p",null,"We highly recommend checking out the other articles from this series which are\nlisted in our ",(0,o.kt)("a",{parentName:"p",href:"/docs/memgraph/tutorials"},"tutorial overview section"),"."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,'Football is a word that could mean one of several sports. In this article, we\nare referring to the best-known type of football, association football. In North\nAmerica, South Africa, and Australia, to avoid confusion with other types of\nfootball, it is called "soccer".'),(0,o.kt)("p",null,"In professional football, a transfer is the action taken whenever a player under\ncontract moves between teams. It refers to the transferring of a player's\nregistration from one association football club to another. In general, the\nplayers can only be transferred during a transfer window and according to the\nrules. The transfer window is a period during the year in which a football team\ncan transfer players. There are two transfer windows per season: winter and\nsummer windows. Winter transfer windows are throughout January while the summer\nwindows are from July till August."),(0,o.kt)("p",null,"Usually some sort of compensation is paid for the player's rights, which is\nknown as a transfer fee. When a player moves from one team to another, their old\ncontract is terminated and they negotiate a new one with the team they are\nmoving to. In some cases, however, transfers can function similarly to player\ntrades, as teams can offer another player on their team as part of the fee."),(0,o.kt)("p",null,"As you may presume, there is a lot of money involved in the game of transfers.\nAccording to FIFA, in 2018, from January till September, there were 15,626\ninternational transfers with fees totaling US$ 7.5 billion dollars."),(0,o.kt)("p",null,"Football season is that part of the year during which football matches are held.\nA typical football season is generally from August/September to May, although in\nsome countries, such as Northern Europe or East Asia, the season starts in the\nspring and finishes in autumn due to weather conditions encountered during the\nwinter."),(0,o.kt)("h2",{id:"data-model"},"Data model"),(0,o.kt)("p",null,"In this article, we will present a graph model of football transfers from season\n1992/1993 to season 2019/2020 in following five leagues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"English Premier League"),(0,o.kt)("li",{parentName:"ul"},"French Ligue 1"),(0,o.kt)("li",{parentName:"ul"},"German Bundesliga"),(0,o.kt)("li",{parentName:"ul"},"Italian Serie A"),(0,o.kt)("li",{parentName:"ul"},"Spanish Primera Division")),(0,o.kt)("p",null,"The model consists of the following nodes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Team")," - a football team with a property ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'"FC Barcelona"'),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Player")," - a professional football player, contains properties ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," (e.g.\n",(0,o.kt)("inlineCode",{parentName:"li"},'"Luka Modric"'),") and ",(0,o.kt)("inlineCode",{parentName:"li"},"position")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'"Central Midfield"'),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"League")," - a football league where multiple teams play in, contains one\nproperty ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'"Premier League"'),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Transfer")," - represents football transfer that connects a ",(0,o.kt)("inlineCode",{parentName:"li"},"Player")," that is\ntransferred from one ",(0,o.kt)("inlineCode",{parentName:"li"},"Team")," to another ",(0,o.kt)("inlineCode",{parentName:"li"},"Team")," within a ",(0,o.kt)("inlineCode",{parentName:"li"},"Season"),". Transfer\ncontains one optional property ",(0,o.kt)("inlineCode",{parentName:"li"},"fee")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"80.50"),") that represents a transfer\nfee in millions of euros and one regular property ",(0,o.kt)("inlineCode",{parentName:"li"},"year")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"1995"),") that\nrepresents how old was a player when the transfer occurred."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Season")," - a football season with two properties ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},'"2019/2020"'),")\nand ",(0,o.kt)("inlineCode",{parentName:"li"},"year")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"2019"),").")),(0,o.kt)("p",null,"Nodes are connected with the following edges:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":TRANSFERRED_FROM")," - connects team node ",(0,o.kt)("inlineCode",{parentName:"li"},"Team")," to node ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer"),"\nrepresenting a team where the player is being transferred from."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":TRANSFERRED_TO")," - connects node ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer")," to team node ",(0,o.kt)("inlineCode",{parentName:"li"},"Team")," where player\nis being transferred to."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":TRANSFERRED_IN")," - connects player node ",(0,o.kt)("inlineCode",{parentName:"li"},"Player")," to node ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer"),"\nrepresenting a player that was transferred in the connected transfer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":HAPPENED_IN")," - connects node ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer")," to the node ",(0,o.kt)("inlineCode",{parentName:"li"},"Season")," in which\ntransfer has happened."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},":PLAYS_IN")," - connects node ",(0,o.kt)("inlineCode",{parentName:"li"},"Team")," that plays in league node ",(0,o.kt)("inlineCode",{parentName:"li"},"League"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Football transfers",src:n(81822).Z})),(0,o.kt)("h2",{id:"exploring-the-dataset"},"Exploring the dataset"),(0,o.kt)("p",null,"You have two options for exploring this dataset. If you just want to take a look\nat the dataset and try out a few queries, open ",(0,o.kt)("a",{parentName:"p",href:"https://playground.memgraph.com/sandbox/football-transfers"},"Memgraph\nPlayground")," and\ncontinue with the tutorial there. Note that you will not be able to execute\n",(0,o.kt)("inlineCode",{parentName:"p"},"write")," operations."),(0,o.kt)("p",null,"On the other hand, if you would like to add changes to the dataset, download the\n",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," desktop application and\nnavigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Datasets")," tab in the sidebar. From there, choose the dataset\n",(0,o.kt)("inlineCode",{parentName:"p"},"Football player's transfers")," and continue with the tutorial."),(0,o.kt)("h2",{id:"example-queries-using-cypher"},"Example queries using Cypher"),(0,o.kt)("p",null,"In the queries below, we are using ",(0,o.kt)("a",{parentName:"p",href:"/cypher-manual"},"Cypher")," to query Memgraph\nvia the console."),(0,o.kt)("p",null,"Now when we have a dataset of football transfers from season 1992/1993 to season\n2019/2020 loaded in Memgraph, we are ready to gain some information out of it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1",".")," Let's say you want to find 20 most expensive transfers. As mentioned\nbefore, transfers fees are represented in millions of euros."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (t:Transfer)<-[:TRANSFERRED_IN]-(p:Player)\nWHERE t.fee IS NOT NULL\nRETURN round(t.fee) + 'M \u20ac' AS transfer_fee, p.name AS player_name\nORDER BY t.fee DESC\nLIMIT 20;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2",".")," What about finding the most expensive transfer per season?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (s:Season)<-[:HAPPENED_IN]-(t:Transfer)<-[:TRANSFERRED_IN]-(:Player)\nWHERE t.fee IS NOT NULL\nWITH s.name AS season_name, max(t.fee) AS max_fee\nRETURN round(max_fee) + 'M \u20ac' AS max_transfer_fee, season_name\nORDER BY max_fee DESC;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3","."),' How about finding out which teams your favorite player has played for?\nIf you wish to check the teams for another player, replace "Sime Vrsaljko" with\nthe name of your favorite player.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (player:Player)-[:TRANSFERRED_IN]->(t:Transfer)-[]-(team:Team)\nWHERE player.name = "Sime Vrsaljko"\nWITH DISTINCT team\nRETURN team.name AS team_name;\n')),(0,o.kt)("p",null,"You might wonder why we haven't specified a direction in our Cypher traversal\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"(:Transfer)-[]-(:Team)"),". As we want to find the teams that player was\ntransferred from (",(0,o.kt)("inlineCode",{parentName:"p"},"(:Transfer)<-[]-(:Team)"),") and transferred to\n(",(0,o.kt)("inlineCode",{parentName:"p"},"(:Transfer)-[]->(:Team)"),"), we want to collect both inbound and outbound\nconnections. In order to do so, we omit the arrow (",(0,o.kt)("inlineCode",{parentName:"p"},">"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<"),") in our Cypher\ncommand."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4",".")," Find players that were transferred to and played for FC Barcelona and\ncount them by the player game position."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (team:Team)<-[:TRANSFERRED_TO]-(t:Transfer)<-[:TRANSFERRED_IN]-(player:Player)\nWHERE team.name = "FC Barcelona"\nWITH DISTINCT player\nRETURN player.position AS player_position, count(player) AS position_count, collect(player.name) AS player_names\nORDER BY position_count DESC;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5",".")," Football has seen a lot of rivalries develop between clubs during its\nrich and long history. One of the most famous ones is between fierce rivals FC\nBarcelona and Real Madrid. There is a term, El Clasico, for a match between\nthose two teams. Let's find all the transfers between FC Barcelona and Real\nMadrid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (m:Team)-[:TRANSFERRED_FROM]-(t:Transfer)-[:TRANSFERRED_TO]-(n:Team),\n      (t)<-[:TRANSFERRED_IN]-(p:Player)\nWHERE\n    (m.name = "FC Barcelona" AND n.name = "Real Madrid") OR\n    (m.name = "Real Madrid" AND n.name = "FC Barcelona")\nRETURN m.name AS transferred_from_team, p.name AS player_name, n.name AS transfered_to_team;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6",".")," FC Barcelona is one of the most valuable football clubs in the world.\nPlayers often want to play there as long as possible. But what about those\nplayers who didn't fit in well? Where do they go?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (m:Team)-[:TRANSFERRED_FROM]->(t:Transfer)<-[:TRANSFERRED_IN]-(p:Player),\n      (t)-[:TRANSFERRED_TO]->(n:Team)\nWHERE m.name = "FC Barcelona"\nRETURN n.name AS team_name, collect(p.name) AS player_names, count(p) AS number_of_players\nORDER BY number_of_players DESC;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7",".")," What are the teams that most players went to in season 2003/2004? The\nresults may surprise you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (season:Season)<-[:HAPPENED_IN]-(t:Transfer)<-[:TRANSFERRED_IN]-(player:Player),\n      (t)-[:TRANSFERRED_TO]->(team:Team)\nWHERE season.name = "2003/2004"\nWITH DISTINCT player, team\nRETURN team.name AS team_name, count(player) AS number_of_players, collect(player.name) AS player_names\nORDER BY number_of_players DESC, team_name\nLIMIT 20;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8","."),' In great teams, there are players who seem to be irreplaceable. When\nthey leave, the club board is often struggling to find a proper replacement for\nthem. Let\'s find out which positions club "FC Barcelona" spent money on in\nseason 2015/2016.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (:Team)-[:TRANSFERRED_FROM]->(t:Transfer)<-[:TRANSFERRED_IN]-(player:Player),\n      (s:Season)<-[:HAPPENED_IN]-(t)-[:TRANSFERRED_TO]->(m:Team)\nWHERE t.fee IS NOT NULL AND\n      s.name = "2015/2016" AND\n      m.name = "FC Barcelona"\nRETURN collect(player.name) AS player_names, player.position AS player_position, round(sum(t.fee)) + \'M \u20ac\' AS money_spent_per_position\nORDER BY money_spent_per_position DESC;\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"9",".")," But what was the highest transfer amount per position FC Barcelona spent\non in seasons from 1992/1993 till 2019/2020?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Team)-[:TRANSFERRED_FROM]->(t:Transfer)<-[:TRANSFERRED_IN]-(player:Player),\n      (t)-[:TRANSFERRED_TO]->(team:Team)\nWHERE t.fee IS NOT NULL AND\n      team.name = \"FC Barcelona\"\nRETURN max(t.fee) + 'M \u20ac' AS max_money_spent, player.position AS player_position\nORDER BY max_money_spent DESC;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"10",".")," Now, let's find who were the most expensive players per position in\nteam FC Barcelona."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (team:Team)<-[:TRANSFERRED_TO]-(t:Transfer)<-[:TRANSFERRED_IN]-(p:Player),\n      (t)-[:HAPPENED_IN]->(s:Season)\nWHERE t.fee IS NOT NULL AND\n      team.name = "FC Barcelona"\nWITH p.position AS player_position, max(t.fee) AS max_fee\nMATCH (p:Player)-[:TRANSFERRED_IN]->(t:Transfer)-[:TRANSFERRED_TO]->(team:Team)\nWHERE p.position = player_position AND\n      t.fee = max_fee AND\n      team.name = "FC Barcelona"\nRETURN max_fee, player_position, collect(p.name) AS player_names\nORDER BY max_fee DESC;\n')),(0,o.kt)("p",null,"If we needed to get the maximum transfer fee per position we would only need\nfirst ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH")," in the above query, making it way shorter. In order to match\nplayers with maximum transfer fees per position our query is split into two\nparts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First ",(0,o.kt)("inlineCode",{parentName:"li"},"MATCH")," in the query finds the maximum transfer fee per position."),(0,o.kt)("li",{parentName:"ul"},"Second ",(0,o.kt)("inlineCode",{parentName:"li"},"MATCH"),' in the query is finding all players transferred to "FC\nBarcelona" with the same position and transfer fee equal to the maximum one\nfrom the previous query.')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"11",".")," If you want to find all player transfers between two clubs you can do\nthat also."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},"MATCH (t:Transfer)<-[:TRANSFERRED_IN]-\n      (player:Player)-[:TRANSFERRED_IN]->\n      (:Transfer)<-[:TRANSFERRED_FROM]-(team:Team)\nWHERE team.name = \"FC Barcelona\"\nWITH player, collect(t) AS transfers\nMATCH player_path = (a:Team)\n      -[*bfs..10 (e, n | 'Team' IN labels(n) OR ('Transfer' IN labels(n) AND n IN transfers) )]->(b:Team)\nWHERE a.name = \"FC Barcelona\" AND\n      b.name = \"Sevilla FC\"\nUNWIND nodes(player_path) AS player_path_node\nWITH player_path_node, player\nWHERE 'Team' IN labels(player_path_node)\nWITH collect(player_path_node.name) AS team_names, player\nRETURN player.name AS player_name, team_names;\n")),(0,o.kt)("p",null,'In the above query, we will find all players that transferred from "FC\nBarcelona" to "Sevilla FC". It will include direct transfers (from "FC\nBarcelona" to "Sevilla FC") and indirect transfers (from "FC Barcelona" to one\nor multiple other clubs and lastly "Sevilla FC"). That is the reason why we\nstarted first ',(0,o.kt)("inlineCode",{parentName:"p"},"MATCH"),' with searching for all players and transfers that were\ntransferred from "FC Barcelona". Next up is the player transfer traversal\nthrough transfers and teams all the way to the "Sevilla FC".'),(0,o.kt)("p",null,"For this part, we used the breadth-first search (BFS) algorithm with lambda\nfilter ",(0,o.kt)("inlineCode",{parentName:"p"},"(e, v | condition)"),". It's a function that takes an edge symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," and a\nvertex symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"v")," and decides whether this edge and vertex pair should be\nconsidered valid in breadth-first expansion by returning true or false (or\nNull). In the above example, lambda is returning true if a vertex has a label\n",(0,o.kt)("inlineCode",{parentName:"p"},"Team")," or a label ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer"),". If a vertex is ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer"),' there is an additional\ncheck where we need to make sure the transfer is one of the transfers of players\ntransferred from "FC Barcelona". It needs to be either ',(0,o.kt)("inlineCode",{parentName:"p"},"Team")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer"),"\nbecause to get from a team that made the transfer to the team where the player\nis being transferred to, we need to go through the node ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer"),' that connects\nthose two teams. So the traversal from "FC Barcelona" to "Sevilla FC" will go\nthrough the following nodes: Transfer, Team, Transfer, Team, Transfer, etc.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"12",".")," In the previous query, we found all transfers between two clubs. Let's\nfilter out direct ones now. We need to add a small change in the query to only\nget indirect transfers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (player:Player)-[:TRANSFERRED_IN]->(t:Transfer)<-[:TRANSFERRED_FROM]-(barca:Team),\n      (t)-[:TRANSFERRED_TO]->(sevilla:Team)\nWHERE barca.name = "FC Barcelona" AND\n      sevilla.name = "Sevilla FC"\nWITH collect(player) AS players_direct_to_sevilla\nMATCH (t:Transfer)<-[e:TRANSFERRED_IN]-\n      (player:Player)-[:TRANSFERRED_IN]->\n      (:Transfer)<-[:TRANSFERRED_FROM]-(barca:Team)\nWHERE barca.name = "FC Barcelona" AND\n      NOT player IN players_direct_to_sevilla\nWITH player, collect(t) AS transfers\nMATCH path_indirect = (a:Team)\n      -[*bfs..10 (e, n | \'Team\' IN labels(n) OR (\'Transfer\' IN labels(n) AND n IN transfers) )]->(b:Team)\nWHERE a.name = "FC Barcelona" AND\n      b.name = "Sevilla FC"\nUNWIND nodes(path_indirect) AS player_path_node\nWITH player_path_node, player\nWHERE \'Team\' IN labels(player_path_node)\nWITH collect(player_path_node.name) AS team_names, player\nRETURN player.name AS player_name, team_names;\n')),(0,o.kt)("p",null,"In this query, the only difference is that we need to find players who had a\ndirect transfer to Sevilla first. In the next ",(0,o.kt)("inlineCode",{parentName:"p"},"MATCH")," we use that information to\ncheck whether players that were transferred from FC Barcelona, didn't have\ndirect transfer to Sevilla FC."),(0,o.kt)("p",null,"If you are running this in ",(0,o.kt)("a",{parentName:"p",href:"https://memgraph.com/product/lab"},"Memgraph Lab")," you\ncan change the query a bit in order to get all nodes and edges required for a\nvisual graph representation of players transferring through teams."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cypher"},'MATCH (player:Player)-[:TRANSFERRED_IN]->\n      (t:Transfer)<-[:TRANSFERRED_FROM]-(barca:Team)\nMATCH (t)-[:TRANSFERRED_TO]->(sevilla:Team)\nWHERE barca.name="FC Barcelona" AND\n      sevilla.name="Sevilla FC"\nWITH collect(player) AS players_direct_to_sevilla\nMATCH (t:Transfer)<-[e:TRANSFERRED_IN]-\n      (player:Player)-[:TRANSFERRED_IN]->\n      (tr:Transfer)<-[:TRANSFERRED_FROM]-(barca:Team)\nWHERE barca.name = "FC Barcelona" AND\n      NOT player IN players_direct_to_sevilla\nWITH player, collect(t) AS transfers, collect(e) AS player_to_transfers\nMATCH path_indirect = (a:Team)\n      -[*bfs..10 (e, n | \'Team\' IN labels(n) OR (\'Transfer\' IN labels(n) AND n IN transfers) )]->(b:Team)\nWHERE a.name = "FC Barcelona" AND\n      b.name = "Sevilla FC"\nUNWIND player_to_transfers AS player_to_transfer\nRETURN player, player_to_transfer, path_indirect;\n')),(0,o.kt)("p",null,"MemgraphLab graph visual representation draws nodes and edges from query\nresults. If you only have nodes in the results then only nodes will be drawn on\nthe canvas. If you have both nodes and edges present in the results, MemgraphLab\nis able to draw nodes and connections between them because it has all the\ninformation relevant for drawing."),(0,o.kt)("p",null,'In order to change the query to accommodate that, we need to change the types of\nresults that are returned and collect any missing edge or node information\nthroughout the query. The first part of the query where we check whether the\nplayer was transferred from "FC Barcelona" to "Sevilla FC" stays the same. In\norder to draw all connections from players to transfers, we need to collect\nedges connecting them. That is the reason why we are collecting edges ',(0,o.kt)("inlineCode",{parentName:"p"},"e"),"\nthrough variable ",(0,o.kt)("inlineCode",{parentName:"p"},"player_to_transfers")," because it contains information on which\nplayer is connected to which transfer. With that in mind, our results contain\nall the information for the graph visual:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A path that contains ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Team")," nodes, and all the edges collected\non the ",(0,o.kt)("inlineCode",{parentName:"li"},"Team")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Team")," traversal"),(0,o.kt)("li",{parentName:"ul"},"A list of ",(0,o.kt)("inlineCode",{parentName:"li"},"Player")," nodes"),(0,o.kt)("li",{parentName:"ul"},"A list of ",(0,o.kt)("inlineCode",{parentName:"li"},"Player - Transfer")," edges")),(0,o.kt)("p",null,"Here is a picture of how it will look if you run the query in MemgraphLab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"football_transfers_MemgraphLab_visual",src:n(77045).Z})))}h.isMDXComponent=!0},77045:function(e,a,n){a.Z=n.p+"assets/images/football_transfers_MemgraphLab_visual-401b4e11da9efdd4068f80ac8b614ef1.png"},81822:function(e,a,n){a.Z=n.p+"assets/images/football_transfers_metagraph-806b7a2d1ce3bb5b54d8d1dcc925f45f.png"}}]);