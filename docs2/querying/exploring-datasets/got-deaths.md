---
id: got-deaths
title: Game of Thrones deaths
sidebar_label: Game of Thrones deaths
---

This article is part of a series intended to show how to use Memgraph on
real-world data to retrieve some interesting and useful information.

We highly recommend checking out the other articles from this series which are
listed in our [tutorial overview section](/tutorials/overview.md), where you
can also find instructions on how to start with the tutorial.

## Introduction

**WARNING** - this tutorial could contain Game of Thrones **_spoilers_**.

Game of Thrones is an American fantasy drama television series created by David
Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire,
George R. R. Martin's series of fantasy novels, the first of which is A Game of
Thrones. The Game of Thrones world is full of interesting characters, locations,
scenarios, unexpected deaths, and plot twists.

Even though the COVID-19 pandemic hit the entire world in 2020 and is now
starting to become one of the worst years in recent history, 2019 was also a
huge disappointment to all Game of Thrones fans. According to user reactions, a
seven-year build-up resulted in a poorly written ending of the last season and
ruined the ending of one of the most popular shows on the planet. Nonetheless,
if you want to know how many characters would have survived if Jon Snow had
stayed dead, which House had the best Kill/Death Ratio, or who was the biggest
traitor in the show, you came to the right place!

## Data model

Although the Game of Thrones TV show is based on a series of books, our graph
database contains only characters from the previously mentioned TV shows as the
books are still not finished. This tutorial would not be possible without data
analyst David Murphy who shared his [collection of on-screen
deaths](https://data.world/datasaurusrex/game-of-thones-deaths). For more
information, you can visit his
[blogpost](https://datasaurus-rex.com/gallery/gotviz-mkiii) with interactive
analysis on the show deaths. We won't be working with kills and deaths that
happened off-screen or were tied to the undead (wraiths). The dataset we used
was slightly modified, in which columns "Episode Name" and "IMDb Rating" were
added.

The model consists of the following nodes:

- a `Character` node has a `name` attribute corresponding to the character's
  name (e.g. `"Jon Snow"`)
- an `Allegiance` node has a `name` attribute corresponding to the house name
  the character is loyal to (e.g. `"House Stark"`)
- a `Death` node has an `order` attribute corresponding to the order in which
  the death happened in the show (e.g. `602`)
- an `Episode` node has a `number` attribute corresponding to the number of
  episodes (e.g. `10`), `name` attribute corresponding to the name of the
  episode (e.g. `"Mothers Mercy"`) and `imdb_rating` episode corresponding to
  the IMDB rating of the episode (e.g. "9.1")
- a `Season` node has a `number` attribute corresponding to the number of the
  season (e.g. `10`)
- a `Location` node has a `name` attribute corresponding to the location's name
  (e.g. `"Castle Black"`)

Nodes are connected with the following edges:

- `:KILLED` - connect two Character nodes and they have 2 attributes, `method`
  which says how was the character killed (e.g. `"Knife"`) and `count` attribute
  representing a number of how many of these characters were killed (e.g. if
  `"Jon Snow"` killed `10` `"Lannister soldiers"` then on this edge `count`
  would be `10`)
- `:LOYAL_TO` - connects `Character` node with `Allegiance` node representing an
  allegiance the character is loyal to
- `:VICTIM_IN` and `:KILLER_IN` - connects `Character` node with `Death` node in
  which death happened
- `:HAPPENED_IN` - connects node `Death` with `Episode`, `Season` and `Location`
  nodes representing details of the death
- `:PART_OF` connects node `Episode` with `Season` node which episode is part of

![GOT deaths](../../data/got-deaths.png)

## Exploring the dataset

You have two options for exploring this dataset. If you just want to take a look
at the dataset and try out a few queries, open [Memgraph
Playground](https://playground.memgraph.com/sandbox/game-of-thrones-deaths) and
continue with the tutorial there. Note that you will not be able to execute
`write` operations.

On the other hand, if you would like to add changes to the dataset, download the
[Memgraph Platform](https://memgraph.com/download#memgraph-platform). Once you
have it up and running, open Memgraph Lab web application within the browser on
[`localhost:3000`](http://localhost:3000) and navigate to `Datasets` in the
sidebar. From there, choose the dataset `Game of Thrones deaths` and continue
with the tutorial.

## Example queries using Cypher

In the queries below, we are using [Cypher](/cypher-manual) to query Memgraph
via the console.

Here are some queries you might find interesting:

**MINI-GAME** - If you have watched the TV Show, try to guess each result before
executing the query!

**1\.** Let's start with a couple of simple queries. List the locations where
most deaths occurred. Can you guess which one is it?

```cypher
MATCH (l:Location)<-[:HAPPENED_IN]-(d:Death)
RETURN l.name AS location_name, count(d) AS death_count
ORDER BY death_count DESC;
```

**2\.** Now that we have the location with the most deaths, let's list the
episodes with the most deaths as well.

```cypher
MATCH (d:Death)-[:HAPPENED_IN]->(e:Episode)
RETURN e.name AS episode_name, count(d) AS kill_count
ORDER BY kill_count DESC;
```

**3\.** List the number of kills per season. If you have watched the show, you
should be able to guess this one.

```cypher
MATCH (d:Death)-[:HAPPENED_IN]->(s:Season)
RETURN s.number AS season_number, count(d) AS death_count
ORDER BY season_number ASC;
```

**4\.** The most poorly rated season by far was the last one, but can you guess
the best one? Let's list the seasons by IMDB ratings. The problem we get with
using the `avg()` function is that it gives us too many decimals, therefore a
useful solution is given in this example using `round()`.

```cypher
MATCH (e:Episode)-[:PART_OF]->(s:Season)
RETURN s.number AS season_name, round(100 * avg(e.imdb_rating))/100 AS rating
ORDER BY rating DESC;
```

**5\.** There are many methods by which characters were killed such as sword or
Dragonfire, but let's list victims of unique methods.

```cypher
MATCH (:Character)-[k:KILLED]->(:Character)
WITH k.method AS kill_method, count(k.method) AS method_count
WHERE method_count < 2
MATCH (killer:Character)-[k:KILLED]->(victim:Character)
WHERE k.method = kill_method
RETURN kill_method, victim.name AS victim;
```

**6\.** Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of
the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of
Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains
or shortened to "Daenerys Targaryen" in our database is the biggest killer on
the show. Let's list all the episodes she killed in as well as characters she
killed.

```cypher
MATCH (daenerys:Character {name: 'Daenerys Targaryen'})-[:KILLED]->(victim:Character)
MATCH (daenerys)-[:KILLER_IN]->(d:Death)<-[:VICTIM_IN]-(victim)
MATCH (d)-[:HAPPENED_IN]-(e:Episode)
RETURN DISTINCT victim.name AS victim, count(d) AS kill_count, e.name AS episode_name
ORDER BY kill_count DESC;
```

**7\.** Houses or allegiances are one of the main aspects of Westeros. Some
houses killed more characters than others, but that doesn't matter in the end,
what matters is efficiency. Let's list the allegiances with the best Kill/Death
Ratios or KDR for short. Here we came across one additional problem. If an
allegiance had more deaths than kills, the KDR would be 0. This can easily be
fixed with the `toFloat()` function.

```cypher
MATCH (:Character)-[death:KILLED]->(:Character)-[:LOYAL_TO]->(a:Allegiance)
WITH a, sum(death.count) AS deaths
MATCH (:Character)<-[kill:KILLED]-(:Character)-[:LOYAL_TO]->(a)
RETURN a.name AS allegiance_name,
       sum(kill.count) AS kills,
       deaths,
       round(100 *(tofloat(sum(kill.count))/deaths))/100 AS KDR
ORDER BY KDR DESC;
```

**8\.** One of the best-rated episodes, Battle of the Bastards, showed us a
fight between two houses: Stark and Bolton. Let's see which one had more
casualties.

```cypher
MATCH (c:Character)-[:LOYAL_TO]->(a:Allegiance)
MATCH (c)-[:VICTIM_IN]-(d:Death)-[:HAPPENED_IN]-(:Episode {name: 'Battle of the Bastards'})
RETURN a.name AS house_name, count(d) AS death_count
ORDER BY death_count DESC
LIMIT 2;
```

**9\.** One of the biggest features of Memgraph is drawing the graphs of queries
we execute. Let's visualize all the Loyalties with Characters. Execute the
following query and head out to the `GRAPH` tab.

```cypher
MATCH (character:Character)-[loyal_to:LOYAL_TO]-(allegiance)
RETURN character, loyal_to, allegiance;
```

**10\.** Remember that shocking last episode of the fifth season when they
killed Jon Snow and we totally thought he was gonna stay dead? Well, let's list
all the characters that would survive if he actually stayed dead.

```cypher
MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)
MATCH (jon)-[:VICTIM_IN]->(jon_death:Death)
MATCH (jon)-[:KILLER_IN]->(victim_death:Death)<-[:VICTIM_IN]-(victim)
WHERE victim_death.order > jon_death.order
RETURN DISTINCT victim.name AS victim, count(victim_death) AS kill_count
ORDER BY kill_count DESC;
```

**11\.** If we want to see the above example in graph form, we have to add some
modifications to the query, such as saving paths to variables that could be then
written in `RETURN`.

```cypher
MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)
MATCH (jon)-[:VICTIM_IN]->(jon_death:Death)
MATCH (jon)-[killed:KILLER_IN]->(victim_death:Death)<-[died:VICTIM_IN]-(victim)
WHERE victim_death.order > jon_death.order
RETURN jon, killed, victim_death, died, victim;
```

**12\.** Let's see how it looks like if we want to visualize all of Jon Snow
kills with their locations.

```cypher
MATCH (jon:Character {name: 'Jon Snow'})-[:KILLED]->(victim:Character)
MATCH (jon)-[:KILLER_IN]->(death:Death)<-[victim_to_death:VICTIM_IN]-(victim)
MATCH (death)-[death_to_location:HAPPENED_IN]->(location:Location)
RETURN victim, victim_to_death, death, death_to_location, location
```

**13\.** Who do you think was the biggest traitor in terms of killing in its own
allegiance? Well, let's check it out!

```cypher
MATCH (killer:Character)-[:KILLED]->(victim:Character)
MATCH (killer)-[:LOYAL_TO]->(a:Allegiance)<-[:LOYAL_TO]-(victim)
RETURN killer.name AS traitor, count(victim) AS kill_count
ORDER BY kill_count DESC;
```

**14\.** To visualize the last example, we have to add paths between nodes in
the result.

```cypher
MATCH (killer:Character)-[killed:KILLED]->(victim:Character)
MATCH (killer)-[:LOYAL_TO]->(allegiance:Allegiance)<-[loyal_to:LOYAL_TO]-(victim)
RETURN killer, killed, victim, loyal_to, allegiance;
```

**15\.** Memgraph supports graph algorithms as well. Let's use Dijkstra's
shortest path algorithm to show the most gruesome path of kills. An example kill
path is: `Jon Snow` killed `5` `Lannister Soldiers` and they killed `10` `Stark
soldiers` with total `kill_count` of `15`.

```cypher
MATCH p = (:Character)-[:KILLED * wShortest (e,v | e.count) kill_count]->(:Character)
RETURN nodes(p) AS kill_list, kill_count
ORDER BY kill_count DESC
LIMIT 1;
```

To learn more about these algorithms, we suggest you check out their Wikipedia
pages:

- [Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
