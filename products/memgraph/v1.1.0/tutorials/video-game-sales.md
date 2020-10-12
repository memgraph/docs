## Querying video game sales

All of us who grew up with game consoles know the feeling of fresh plastic under our arms. Over the years, 
the boxes have changed and even moved to the cloud, but the goals of publishers and developers have remained
the same, to sell as many copies of their game as possible. Take your Memgraph and explore how successful were the various consoles and games, and which teams stand behind the most successful titles in history.

We highly recommend checking out the other articles from this series:

  * [Analyzing TED Talks](analyzing-TED-talks.md)
  * [Graphing the Premier League](graphing-the-premier-league.md)
  * [Exploring the European Road Network](exploring-the-european-road-network.md)
  * [Backpacking Through Europe](backpacking-through-europe.md)
  * [Movie Recommendation System](movie-recommendation-system.md)
  * [Marvel Comic Universe Social Network](marvel-universe.md)

### Introduction

The data presented below is taken from the page [VGChartz](https://www.vgchartz.com/) which contains a large amount of information on game sales throughout history (In this example
we use data available from 1980 - 2016). In addition to all the interesting
information that we are going to go through, there are also the unexplored ones that we leave for you to explore.
Using the knowledge of 'openCypher' and Memgraph, discover the curiosities of the world of video games.

### Data Model

This example will use data from the above-mentioned website. The data model will be easy to explain. 
There are five different types of data: `Game`,`Publisher`, `Developer`, `Genre`, and `Console`.
First, let's discuss the model of the first four types.

* `Game` is described with 4 properties that are somehow self-explainable: `name`, `critic_score`, 
`user_score` and `year`.

* `Publisher`, `Developer` and `Genre` are described with only `name` property. Connection `:PublishedBy` is
used for game's publisher. `:DevelopedBy` is edge describing who developed the game and is `NULL` in some cases.
The connection between `Genre` and `Game` is called `:HasGenre`.

* Last and the most complex data type is `Console`. `Game` can store various connections to various consoles, meaning
it has been sold on multiple consoles. In the connection called `:Sold` with properties `NA`, `EU`, `JP`, and `OT` are
described the number of sold copies in different continental regions, North America, Europe, Japan, and other, respectively.

![](./vgsales.png)

### Importing the Snapshot

We have prepared a database snapshot for this example, so the user can easily
import it when starting Memgraph using the `--data-directory` option.

```plaintext
sudo -u memgraph \
  /usr/lib/memgraph/memgraph --data-directory /usr/share/memgraph/examples/VGSales \
    --storage-snapshot-interval-sec=0 --storage-wal-enabled=false \
    --storage-snapshot-on-exit=false --storage-properties-on-edges=true
```
When using Memgraph installed from DEB or RPM package, the currently running
Memgraph server may need to be stopped before importing the example. The user
can do so using the following command:

```plaintext
systemctl stop memgraph
```
When using Docker, the example can be imported with the following command:

```plaintext
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph --data-directory /usr/share/memgraph/examples/VGSales \
  --storage-snapshot-interval-sec=0 --storage-wal-enabled=false \
  --storage-snapshot-on-exit=false --storage-properties-on-edges=true
```

The user should note that any modifications of the database state will persist
only during this run of Memgraph.

### Example Queries

1) List all consoles available in the database, sort them by number of games presented, and display
a top 10 on the screen.

```opencypher
MATCH (g:Game)-[:Sold]->(c:Console)
RETURN c.name as Console, COUNT(g) AS NumGames
ORDER BY NumGames DESC
LIMIT 10;
```

2) Some games are made as franchises. Find a Pokemon franchise, sort them by age and rating if available. 
To find a *Pokémon* franchise, simply compare if 'Pokemon' is presented in the name.

```opencypher
MATCH (g:Game)
WITH g.name AS name, g.year as year, g.critic_score as score
WHERE toupper(name) CONTAINS  'POKEMON'
RETURN name AS GameName, year AS Year, score AS CriticScore
ORDER BY year, score;
```

In this query we used two `String` methods. First is `toupper()` which is used to make all letters in the string
uppercase. The other one is function named `CONTAINS`. It searches occurrence of the first string in the second, returning true if the condition is met.

3) As we are going to use it vastly in the following tutorial, let's add another attribute to the game.
Each game has information about regional console sales. Newly constructed property should have a summation of those 
sales with name Game.TOT. This newly constructed property should be rounded to 2 decimal places.

```opencypher
MATCH (g:Game)-[s:Sold]-(c:Console)
WITH g AS game, ROUND(SUM(s.EU + s.NA +s.JP + s.OT) * 100) / 100 AS soldUnits
SET game.TOT = soldUnits
RETURN game.name AS Name, game.TOT AS SoldUnits
ORDER BY SoldUnits DESC; 
```

Because there can be multiple consoles on which game has been sold we need to make summation around different regional sales. This little complication around function `ROUND` is related to rounding the result to 2 decimals.

4) One of the toughest things in the video gaming industry is producing the games for different consoles. Some
publishers tend to stay with only one. Let's calculate what are best selling publishers that only sold games for
one console only. 

```opencypher
MATCH (c:Console)<-[s:Sold]-(g:Game)-[:PublishedBy]->(p:Publisher)
WHERE p.name IS NOT NULL
WITH p, COLLECT(c.name) AS consoles, SUM(g.TOT) AS total
WHERE SIZE(consoles) = 1
UNWIND consoles AS c
RETURN p.name AS PublisherName, total AS TotalSales, c AS ConsoleName
ORDER BY total DESC
LIMIT 20;
```

5) We are interested in sales across different years. We need to keep the information about the games. For each year in chronological order display games ordered by total sales, 
meaning summation of regional sales.

```opencypher
MATCH (g:Game)
WITH  g, g.TOT AS total
ORDER BY total DESC
WITH g.year AS year, COLLECT(g) AS games, ROUND(SUM(total)* 100) / 100 as yearSale
ORDER BY year
RETURN year AS Year, EXTRACT(game in games | {game: game.name, sale: game.TOT}) as GameSales, yearSale AS TotalYearSale
```

`EXTRACT` function can be used to loop through the list and change its elements. In this case, we are looping through the list of games, extracting only important information, and making an `Object` with properties `game` and `sale`.


6) Being a developer is hard. You sure know that. Being a game developer is even harder. That means having
a large critics score is more prestigious. Order game developers by average critic score. We are interested
in developers that have more than 2 titles presented in the database.

```opencypher
MATCH (g:Game)-[:DevelopedBy]->(d:Developer)
WHERE g.critic_score IS NOT NULL
WITH d.name AS Developer, AVG(g.critic_score) AS Score, COUNT(g) AS GamesCount, COLLECT(g.name) AS DevelopedGames
WHERE GamesCount >= 2
RETURN Developer, Score, DevelopedGames
ORDER BY Score DESC
```

7) Japanese market can be tough to conquer. We would like to state which are the games that are mostly
sold in the Japanese market. To do so, consider looking into the difference between numbers of sold copies in Japan with the rest of the world.

```opencypher
MATCH (g:Game)-[s:Sold]->(:Console)
WITH g AS game, SUM(s.JP) AS jp_sales, SUM(s.NA + s.EU + s.OT) AS other_sales
WITH game, jp_sales - other_sales AS sales_difference, jp_sales, other_sales
WHERE sales_difference > 0
RETURN game.name AS GameName, sales_difference AS SaleDifference ,jp_sales AS JapanSales, other_sales AS OtherSales
ORDER BY sales_difference DESC
```


8) Wish of every engineer is selling more copies each time a new game hits a market. That is exactly what
we are going to search for in the next query. Find developers whose games are sold in increasing order, meaning
each time they developed a game, it has been sold in a larger amount of units. Do this only if they had 3 or more occurrences. 

```opencypher
MATCH (c:Console)<-[s:Sold]-(g:Game)
WITH  g as game, g.TOT AS sale
ORDER BY game.year ASC
MATCH (game)-[:DevelopedBy]->(d:Developer)
WITH d as developer, COLLECT(game.name) AS games, COLLECT(sale) AS sales
WHERE SIZE(games) >= 3
WITH developer, games, sales, EXTRACT(i IN RANGE(1, SIZE(games) - 1) | sales[i] - sales[i-1]) AS difference
WHERE ALL(diff IN difference WHERE diff > 0)
RETURN developer.name AS Developer, games AS Games, sales AS Sales
```

In this complex query, we used a few interesting things. First is `RANGE` which in this case is creating a list of increasing integers. It is used to calculate the difference between subsequent selling games. Furthermore, a novelty here is the usage of a function `ALL` which checks if all of the elements in the list satisfy the condition.