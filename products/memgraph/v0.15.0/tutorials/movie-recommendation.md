## Movie Recommendation System

This article is a part of a series intended to show users how to use Memgraph
on real-world data and, by doing so, retrieve some interesting and useful
information.

We highly recommend checking out the other articles from this series:

  * [Analyzing TED Talks](analyzing-TED-talks.md)
  * [Graphing the Premier League](graphing-the-premier-league.md)
  * [Exploring the European Road Network](exploring-the-european-road-network.md)

### Introduction

This example shows how to implement a simple recommendation system
with `openCypher` in Memgraph.
First, we will show how to perform simple operations,
and then we will implement a query for the movie recommendation.

### Data Model

In this example, we will use reduced MovieLens dataset (less than 1000 movies).
There are three different types of data: `Movie`, `User` and `Genre`.
Movies have properties: `id` and `title`
Users have properties: `id`, `name`
Genres have a property: `name`

Each movie can be connected with `:ofGenre` edge to different genres.
A user can rate some movie. Rating is modeled with `:Rating` edge
and this edge has property `score` &mdash; float number between 0 and 5.

![](../data/movie_metagraph.png)

### Importing the Snapshot

We have prepared a database snapshot for this example, so the user can easily
import it when starting Memgraph using the `--durability-directory` option.

```bash
/usr/lib/memgraph/memgraph --durability-directory /usr/share/memgraph/examples/Movie \
  --durability-enabled=false --snapshot-on-exit=false
```
When using Memgraph installed from DEB or RPM package, the currently running
Memgraph server may need to be stopped before importing the example. The user
can do so using the following command:

```bash
systemctl stop memgraph
```
When using Docker, the example can be imported with the following command:

```bash
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph --durability-directory /usr/share/memgraph/examples/Movie \
  --durability-enabled=false --snapshot-on-exit=false
```

The user should note that any modifications of the database state will persist
only during this run of Memgraph.

### Example Queries

1) List first 10 movies sorted by title

```opencypher
MATCH (m :Movie) RETURN m ORDER BY m.title LIMIT 10;
```
2) List last 15 users sorted by name

```opencypher
MATCH (u: User) RETURN u ORDER BY u.name DESC LIMIT 15;
```
3) List 10 movies that have *Comedy* and *Action* genres and sort them by title

```opencypher
MATCH (m :Movie)-[:ofGenre]->(:Genre {name:"Action"}), (m)-[:ofGenre]->(:Genre {name:"Comedy"})
RETURN m.title ORDER BY m.title LIMIT 10;
```
4) Uniqueness constraint for genre:

Let's create new unique constraint:

```opencypher
CREATE UNIQUE INDEX ON :Genre(name);
```
And now we can try to create new `Genre` node with existing `name': "Comedy":

```opencypher
CREATE (:Genre {name: "Comedy"});
```
This query returns an error because genre "Comedy" already exists.

5) Average score for *Star Wars* movie:

```opencypher
MATCH (u :User)-[r :Rating]->(m :Movie {title:"Star Wars"}) RETURN AVG(r.score);
```
6) Average scores for first 10 movies:

```opencypher
MATCH (u :User)-[r :Rating]->(m:Movie) RETURN m.title, AVG(r.score) AS score ORDER BY score DESC LIMIT 10;
```
7) Create a new user and rate some movies:

```opencypher
CREATE (:User {id:1000, name:"Aladin"});
```
Check if new user is created:

```opencypher
MATCH (u:User{name:"Aladin"}) RETURN u;
```
Rate some movies:

```opencypher
MATCH (u:User{id:1000}), (m:Movie{title:"Trois couleurs : Rouge"})
MERGE (u)-[:Rating{score:3.0}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"20,000 Leagues Under the Sea"})
MERGE (u)-[:Rating{score:1.0}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Star Trek: Generations"})
MERGE (u)-[:Rating{score:0.5}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Rebecca"})
MERGE (u)-[:Rating{score:3.0}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"The 39 Steps"})
MERGE (u)-[:Rating{score:4.5}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Faster, Pussycat! Kill! Kill!"})
MERGE (u)-[:Rating{score:3.5}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Once Were Warriors"})
MERGE (u)-[:Rating{score:3.5}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Sleepless in Seattle"})
MERGE (u)-[:Rating{score:4.0}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Don Juan DeMarco"})
MERGE (u)-[:Rating{score:4.0}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Jack & Sarah"})
MERGE (u)-[:Rating{score:1.5}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Mr. Holland's Opus"})
MERGE (u)-[:Rating{score:2.0}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"The Getaway"})
MERGE (u)-[:Rating{score:3.0}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Color of Night"})
MERGE (u)-[:Rating{score:4.0}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Reality Bites"})
MERGE (u)-[:Rating{score:2.5}]-(m);
MATCH (u:User{id:1000}), (m:Movie{title:"Notorious"})
MERGE (u)-[:Rating{score:3.5}]-(m);
```
8) Recommandation sytstem:

The idea is to implement simple [memory based collaborative filtering](https://en.wikipedia.org/wiki/Collaborative_filtering).

Let's recommend some movies for user Aladin:

```opencypher
MATCH (u:User{id:1000})-[r:Rating]-(m:Movie)-[other_r:Rating]-(other:User)
WITH other.id AS other_id,
AVG(ABS(r.score-other_r.score)) AS similarity, COUNT(*) AS similar_user_count
WHERE similar_user_count > 2
WITH other_id ORDER BY similarity LIMIT 10
WITH COLLECT(other_id) AS similar_user_set
MATCH (some_movie: Movie)-[fellow_rate:Rating]-(fellow_user:User)
WHERE fellow_user.id in similar_user_set
WITH some_movie, AVG(fellow_rate.score) AS prediction_score
RETURN some_movie.title AS Title, prediction_score ORDER BY prediction_score DESC;
```
How does this query work?

This query has two parts:

* Finding similar users
* Predicting the score for some movie (recommendation)

In the first part, we are looking for similar users.
First, we need to define similar users:
Two users are considered similar if they tend to give
similar scores to the same movies.
For the target user (Aladin) and some other user we are searching
for the same movies:

```opencypher
MATCH (u:User{id:1000})-[r:Rating]-(m:Movie)-[other_r:Rating]-(other:User);
```
But this is not enough for finding similar users. We need to choose users
with the same movies and similar scores:

```opencypher
WITH other.id AS other_id,
AVG(ABS(r.score-other_r.score)) AS similarity, COUNT(*) AS similar_user_count
WHERE similar_user_count > 2
WITH other_id ORDER BY similarity LIMIT 10;
```
Here we calculate similarities as the average distance between
target user score and some other user score on the same set of movies.
There are two parameters: similarUserCount limit (2)
and similar user set size limit (10).
Similar user count limit is used for filtering users who have
at least 2 movies in common with the target user.
Similar user set size is used to peek top 10 similar users (10 or less).

Now we have similar user set. We will use those users to
calculate the average score for all movies in the database.

```opencypher
MATCH (some_movie: Movie)-[fellow_rate:Rating]-(fellow_user:User)
WHERE fellow_user.id in similar_user_set
WITH some_movie, AVG(fellow_rate.score) AS prediction_score
RETURN some_movie.title AS Title, prediction_score ORDER BY prediction_score DESC;
```
We encourage you to play with some parameters, like similar user count limit
and similar user set size limit.
You can also try to use different similarity functions,
for example [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance):

```opencypher
SQRT(REDUCE(a=0, x in COLLECT((r.score - other_r.score) * (r.score - other_r.score)) | a + x))
AS similarity;
```
Here we use `REDUCE` function. Reduce function accumulate list elements
into a single result by applying an expression.
In our query, this function starts with 0 and sums up squared differences.
`COLLECT` function is used for putting squared differences into the list.

