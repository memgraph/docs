## Football transfers

This article is a part of a series intended to show how to use Memgraph
on real-world data to retrieve some interesting and useful
information.

### Introduction

Football is a word that could mean one of several sports.In this article,
we are referring to the best-known type of football, association football.
In North America, South Africa, and Australia to avoid confusion with other
types of football, this is called "soccer". It is a team sport played with
a spherical ball between two teams of 11 players.  But more often than not,
there are more than just 11 players in every team. 

There are a few things to consider in this article. First of all,
the transfers. 

In professional football, a transfer is the action taken whenever a player
under contract moves between teams. It refers to the transferring of
a player's registration from one association football club to another.
In general, the players can only be transferred during a transfer window
and according to the rules. The Transfer window is a period during the year
in which a football team can transfer players. There are usually two transfer windows
in the same season, one in winter that lasts through January,
and one in summer that lasts through July and August.

Usually some sort of compensation is paid for the player's rights,
which is known as a transfer fee. When a player moves from one team to another,
their old contract is terminated and they negotiate a new one with the team
they are moving to. In some cases, however, transfers can function similarly
to player trades, as teams can offer another player on their team as part of the fee.

Of course you may presume, there is a lot of money in the game.

According to FIFA, from January to September 2018 there were 15,049 international transfers
of male players with fees totaling US$ 7.1 billion dollars, and 577 international transfers
of female players for US$ 493,235.

Also, one last thing to consider is the season. 

In an organized sports league, a typical season is the part of one year in which regulated games
of the sport are in session. In football, it is generally from August or September to May,
although in some countries - such as Northern Europe or East Asia - the season starts in the spring 
and finishes in autumn, mainly due to weather conditions encountered during the winter.


### Data Model

In this article, we will present a graph model of a large-sized dataset
of football transfers that include the most famous leagues. When we say large-sized dataset,
what we think by that is the dataset that has all transfers from season 1992/1993 to season 2019/2020
in nine leagues that are supported. Those leagues are Eredivisie, English Championship,
English Premier League, French Ligue 1, German Bundesliga, Italian Serie A, Portuguese Liga Nos,
Russian Premier Liga and Spanish Primera Division.


* Each Football transfer has a team which makes a transfer and team to which player is transferred to,
 so that will be our first node &mdash `Team`. Each team has a name so we will add the label `name`. 
Also, most of the teams in our dataset will have the league in which they compete so we will add label `league`.
* Following what we just described, there is also a player that is part of the transfer and that will be our
next node &mdash `Player`. That nods will also have the label `name` and label `position`,
but the label `age` will be added to the new node that we will create, and that is node `Transfer`.
This node will be a connection between nodes `Player` and two nodes of type `Team` that take part
in the transfer.  Node `Transfer` will also have a  label `fee`.
Fee represents millions of euros that were paid as compensation for the player's rights.
* The Last node in our model will be `Season`. It will have labels `season` and `year`.
The label `season` will be in string format and label `year` in number format.

Till this point we only described nodes. Now we need to describe how those nodes are connected.

* An edge of type `: TRANSFERRED_FROM` pointing from `Team` player is being transferred from
to the node `Transfer`. Also, we add an edge of type `: TRANSFERRED_TO` pointing from the `Transfer`
to the `Team` player is being transferred to.
* From node `Player` we add an edge of type `: TRANSFERRED_IN` pointing to `Transfer`. 
* Each transfer is made in a specific season, so we create
edge  `: HAPPENED_IN` pointing from the node
`Transfer` to the node `Season`.


![](../data/FootballTransfers_metagraph.png)

### Importing the Snapshot

We have prepared a database snapshot for this example, so the user can easily
import it when starting Memgraph using the `--data-directory` option.

```plaintext
sudo -u memgraph \
  /usr/lib/memgraph/memgraph --data-directory /usr/share/memgraph/examples/TEDTalk \
    --storage-snapshot-interval-sec=0 --storage-wal-enabled=false \
    --storage-snapshot-on-exit=false --storage-properties-on-edges=true
```

When using Memgraph installed from a Debian or RPM package, 
the currently running Memgraph server needs to be stopped before 
importing the example, using the following command:

```plaintext
systemctl stop memgraph
```

When using Docker, the example can simply be imported with the following command:

```plaintext
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph --data-directory /usr/share/memgraph/examples/TEDTalk \
  --storage-snapshot-interval-sec=0 --storage-wal-enabled=false \
  --storage-snapshot-on-exit=false --storage-properties-on-edges=true
```

The user should note that any modifications of the database state will persist
only during this run of Memgraph.

### Example Queries using OpenCypher

In the queries below, we are using [OpenCypher](https://www.opencypher.org) 
to query Memgraph via the console.


1) Let's say you want to find 20 most expensive transfers.
As mentioned before fee is represented in millions of euros.

```opencypher
MATCH (t:Transfer)<-[:TRANSFERRED_IN]-(p:Player)
WHERE t.fee is NOT NULL
RETURN  t.fee as transfer_fee ,p.name AS player_name
ORDER BY t.fee DESC LIMIT 20
```

2) What about finding the most expensive transfer per season? 

```opencypher
MATCH path = (s:Season)<-[:HAPPENED_IN]-(t:Transfer)<-[:TRANSFERRED_IN]-(p:Player)
WHERE t.fee is NOT NULL
WITH  s.name as season, MAX(t.fee) as maxFee
RETURN  maxFee,season
ORDER BY maxFee DESC
```


3)How about finding out for which teams has your favorite player played for?
Instead of Sime Vrsaljko, you can instead put the name of your favorite player.

```opencypher
MATCH (p:Player)-[:TRANSFERRED_IN]->(t:Transfer)-[]-(m:Team)
WHERE p.name="Sime Vrsaljko"
WITH DISTINCT m
RETURN m.name AS team_name
```

4)Find players that were transferred to and played for FC Barcelona and
count them by the position they have in the game.

```opencypher
MATCH (m:Team)<-[:TRANSFERRED_TO]-(t:Transfer)<-[:TRANSFERRED_IN]-(p:Player)
WHERE m.name="FC Barcelona"
WITH * ORDER BY p.name
WITH DISTINCT p
RETURN p.position as position, COUNT(p) AS position_count, collect(p.name) as playerNames
ORDER BY position_count DESC
```

5) Football has seen a lot of rivalries develop between clubs during its rich and long history,
some of which can be traced back more than a century. Now one of the most famous ones is between
FC Barcelona and Real Madrid. Let's find out were there any transfers between FC Barcelona and Real Madrid.

```opencypher
MATCH path_teams = (m:Team )-[:TRANSFERRED_FROM]-(t:Transfer)-[:TRANSFERRED_TO]-(n:Team)
WHERE (m.name="FC Barcelona" AND n.name="Real Madrid") OR (m.name="Real Madrid" AND n.name="FC Barcelona")
MATCH path_player = (t)<-[:TRANSFERRED_IN]-(p:Player)RETURN path_teams,path_player
```


6) FC Barcelona is one of the biggest clubs in the world. Players often want to stay there as long as possible.
But what about those players who didn't fit in well? Where do they go?

```opencypher
MATCH (m:Team )-[:TRANSFERRED_FROM]->(t:Transfer)<-[:TRANSFERRED_IN]-(p:Player), (t)-[:TRANSFERRED_TO]->(n:Team)
WHERE m.name="FC Barcelona"
RETURN n.name as team_name, collect(p.name) as names, COUNT(p) AS number_of_players
ORDER BY number_of_players DESC
```


7) What are the teams that most players went to in season 2003/2004? The results may surprise you. 

```opencypher 
MATCH (s:Season {name:"2003/2004"})<-[:HAPPENED_IN]-(t:Transfer)<-[:TRANSFERRED_IN]-(player:Player)
MATCH (t)-[:TRANSFERRED_TO]->(n:Team)
WITH DISTINCT player, n
RETURN n.name as team_name, COUNT(player) AS number_of_players,collect(player) as names
ORDER BY number_of_players DESC, team_name
LIMIT 20;
```

8)In great teams, there are usually players who seem to be irreplaceable. When they leave,
the board is often struggling to find a proper replacement for them. That's why there are more
transfers on those positions. Let's find out on which positions in season
2015/2016 FC Barcelona spent money.

```opencypher 
MATCH (n:Team )-[:TRANSFERRED_FROM ]->(t:Transfer)<-[:TRANSFERRED_IN]-(p:Player ),
(s:Season)<-[:HAPPENED_IN]-(t)-[r1:TRANSFERRED_TO]->(m:Team)
WHERE t.fee IS NOT NULL AND (s.name IN ["2015/2016","2016/2017"]) AND m.name="FC Barcelona"
RETURN collect( p.name) AS names, p.position AS position, SUM(t.fee) AS money_spent_per_position
```

9) But what was the most money FC Barcelona spent per position from 1992/1993 season to 2019/2020?

```opencypher 
MATCH (a:Team )-[:TRANSFERRED_FROM ]->(t:Transfer)<-[:TRANSFERRED_IN ]-(p:Player ), (t)-[:TRANSFERRED_TO]->(b:Team)
WHERE t.fee IS NOT NULL AND b.name="FC Barcelona"
WITH max(t.fee) as maxMoneySpent, p.position AS position
RETURN maxMoneySpent, position
```

10) Now, let us find who were the most expensive players per position in our team FC Barcelona. 

```opencypher 
MATCH
    (barca:Team)<-[:TRANSFERRED_TO]-(t:Transfer)<-[:TRANSFERRED_IN]-(p:Player), (t)-[:HAPPENED_IN]->(s:Season)
WHERE 
    t.fee is NOT NULL AND 
    barca.name = "FC Barcelona"
WITH p.position as player_position, max(t.fee) as max_fee

MATCH
    (p:Player)-[:TRANSFERRED_IN]->(t:Transfer)-[:HAPPENED_IN]->(s:Season)
WHERE
    p.position = player_position AND
    t.fee = max_fee 
RETURN
    max_fee, player_position, collect(p.name) as player_names
```


11) If you want to find indirect transfers of players between two clubs you can do that also

```opencypher 
MATCH
    (t:Transfer)<-[e:TRANSFERRED_IN]-(player:Player)-[:TRANSFERRED_IN]->(:Transfer)<-[:TRANSFERRED_FROM]-(team:Team)
WHERE
    team.name = "FC Barcelona"
WITH player, collect(t) as transfers, collect(e) as connections
MATCH
  path_indirect = (a:Team)-[*bfs..10 (e, n | 'Team' IN labels(n) OR ('Transfer' in labels(n) AND n in transfers) )]->(b:Team)
WHERE
  a.name = "FC Barcelona" AND
  b.name = "Sevilla FC"
UNWIND connections as connection
RETURN player, connection, path_indirect
```
Let's say you want to find indirect transfers between "FC Barcelona" and  "Sevilla FC".
Firstly it makes sense to find players that had at some point transfer from FC Barcelona. That way
we don't need to look for all players, just ones that had transfer from FC Barcelona.

Then off to the fun part.

(e, v | condition) is called a filter lambda. It's a function that takes an edge symbol e and a vertex symbol n 
and decides whether this edge and vertex pair should be considered valid in breadth-first expansion by returning
true or false (or Null). In the above example, lambda is returning true if vertex has label "Team" or has label "Transfer"
and it is one of the transfers of players that had transfer from FC Barcelona.

### Where To Next?

We recommend checking out other tutorials from this series:

  * [Exploring the European Road Network](exploring-the-european-road-network.md)
  * [Backpacking Through Europe](backpacking-through-europe.md)
  * [Graphing the Premier League](graphing-the-premier-league.md)
  * [Movie Recommendation System](movie-recommendation.md)
  * [Marvel Comic Universe Social Network](marvel-universe.md)
