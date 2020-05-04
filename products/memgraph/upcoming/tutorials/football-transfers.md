## Football transfers

This article is a part of a series intended to show how to use Memgraph
on real-world data to retrieve some interesting and useful
information.

### Introduction

[FOOTBALL](https://simple.wikipedia.org/wiki/Football) Football is a word which
could mean one of several sports. In this article we are refering to the best-known
type of football, association football. This is called "soccer" in North America,
South Africa, and Australia to avoid confusion with other types of football.

The name football comes from the two words 'foot' and 'ball'. It is named football
because the players of the game walk and run (on their feet) while playing.
Football is played using a ball, also called a 'football', that is shaped like
a sphere or an ellipsoid. The ball is kicked wih the foot.

The game is played on a rectangular field called a pitch with a goal at each end.
The object of the game is to score by moving the ball beyond the goal line into
the opposing goal.

The two teams each compete to get the ball into the other team's goal
(between the posts and under the bar), thereby scoring a goal. The team that
has scored more goals at the end of the game is the winner; if both teams have
scored an equal number of goals then the game is a draw.

In this article, we will present a graph model of a large sized dataset
of football transfers that include most popular leagues.


### Data Model

* Each Football transfer has a team which makes transfere of player and 
team to which player is transfered to, so we identify three types of nodes &mdash;
`Team`, `Transfer` and `Player`  . 
* We add an edge of type `:MakesTransfer` pointing from `Team` player is being
transfered from to a `Transfer`. Also, we add an edge of type `:ToTeam` pointing
from the `Transfer` to the `Team` player is being transfered to.
From node `Transfer` we add edge of type `:OfPlayer` pointing to `Player` 
* Each team has a name so we can add property `name` to `Team` node.
* We'll add properties `name` and `position` to node `Player`. 
* And to node `Transfer` we wil add properties `age` and `fee` with
property `age` representing age at which player was transfered to
and fee for which player was transfered to. 
* Each transfer is made in specific year, so we can
create node `Year` with property `year` and relationship `:InYear` between
transfer and year.


![](../data/FootballTransfers_metagraph.png)

### Importing the Snapshot

TO DO...

### Example Queries using OpenCypher

In the queries below, we are using [OpenCypher](https://www.opencypher.org) 
to query Memgraph via the console.


1) Find 20 most expensive transfers

```opencypher
MATCH (t:Transfer)-[:ofPlayer]->(p:Player)
WHERE t.fee is NOT NULL
RETURN  DISTINCT t.fee ,p.name 
ORDER BY t.fee DESC LIMIT 20
```

2) Find all clubs for which player has played

```opencypher
MATCH (p:Player {name:"Neymar"})<-[:ofPlayer]-(t:Transfer)<-[:makesTransfer]-(m:Team) 
RETURN DISTINCT m.name as name
UNION 
MATCH (p:Player {name:"Neymar"})<-[:ofPlayer]-(t:Transfer)-[:toClub]->(n:Team) 
RETURN DISTINCT n.name as name
```

3)Find players related by club and count them by position

```opencypher
MATCH (m:Team {name: "FC Barcelona"})
      <-[:toClub]-(t:Transfer)-[:ofPlayer]->(p:Player)
WITH * ORDER BY p.name
RETURN p.position, COUNT(t) AS number
```

4) Transfers of players directly from on club to another

```opencypher
MATCH (m:Team {name:"FC Barcelona"})-[r1:makesTransfer]->(t:Transfer)
MATCH (t)-[r3:ofPlayer]->(p:Player)
MATCH (t)-[r4:inYear]->(y:Year)
MATCH (t)-[r2:toClub]->(n:Team {name:"Real Madrid"})
RETURN m,r1,t,r2,n,p,r3,r4,y
```

5) Get all clubs involved and transfers of player in graph style

```opencypher
MATCH p= (a:Team )
          -[:makesTransfer ]->(t:Transfer)-[:ofPlayer ]->
          (:Player {name: "Zlatan Ibrahimovic"})
MATCH (t)-[r1:toClub]->(b:Team) 
return p,b,r1
```

6) Find teams that  most players went to from their club 

```opencypher
MATCH (m:Team {name: "FC Barcelona"})-[:makesTransfer]->(t:Transfer)-[:ofPlayer]->(p:Player)
MATCH (t)-[:toClub]->(n:Team)
RETURN n.name, collect(p.name), COUNT(p) AS numberOfPlayers
ORDER BY numberOfPlayers DESC
```


7) Find most popular clubs in certain year

```opencypher 
MATCH (y:Year {year:2004})<-[:inYear]-(t:Transfer)-[:ofPlayer]->(player:Player)
MATCH (t)-[:toClub]->(n:Team)
RETURN n.name as ClubName, COUNT(t) AS NumberOfPlayers
ORDER BY NumberOfPlayers DESC, ClubName
LIMIT 20;
```

8) Most money spend on player per position

```opencypher 
MATCH (a:Team )-[:makesTransfer ]->(t:Transfer)-[:ofPlayer ]-> (p:Player )MATCH (t)-[r1:toClub]->(b:Team {name:"FC Barcelona"})
WHERE t.fee IS NOT NULL 
WITH max(t.fee) as maxMoneySpent, p.position AS position
RETURN maxMoneySpent, position
```

9)Sum of money spent on reinforcing team per position in certain years

```opencypher 
MATCH (n:Team )-[:makesTransfer ]->(t:Transfer)-[:ofPlayer ]-> (p:Player )
MATCH (t)-[r1:toClub]->(m:Team {name:"FC Barcelona"})
MATCH (t)-[:inYear]->(y:Year)
WHERE t.fee IS NOT NULL AND (y.year IN [2018,2019])
RETURN collect( p.name) AS names, p.position AS position, SUM(t.fee) AS moneySpentPerPosition
```opencypher 

### Where To Next?

We recommend checking out other tutorials from this series:

  * [Exploring the European Road Network](exploring-the-european-road-network.md)
  * [Backpacking Through Europe](backpacking-through-europe.md)
  * [Graphing the Premier League](graphing-the-premier-league.md)
  * [Movie Recommendation System](movie-recommendation.md)
  * [Marvel Comic Universe Social Network](marvel-universe.md)
