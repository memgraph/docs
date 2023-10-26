---
id: movie-recommendation
title: Movie recommendation system
sidebar_label: Movie recommendation system
---

This article is a part of a series intended to show users how to use Memgraph on
real-world data and, by doing so, retrieve some interesting and useful
information.

We highly recommend checking out the other articles from this series which are
listed in our [tutorial overview section](/tutorials/overview.md), where you
can also find instructions on how to start with the tutorial.

## Introduction

This example shows how to implement a simple recommendation system with
`openCypher` in Memgraph. First, we will show how to perform simple operations,
and then we will implement a query for the movie recommendation.

## Data model

In this example, we will use MovieLens dataset, which consists of 9742 movies across 20 genres. 
There are three types of nodes: `Movie`, `User` and `Genre`. Movie nodes
have properties: `id` and `title`. Users have an `id` property, while genres nodes
have a property: `name`

Each movie can be connected with `:OF_GENRE` relationship to different genres. A user can
rate some movies. Rating is modeled with `:RATED` relationship and this relationship has
a property `rating` &mdash; float number between 0 and 5.

![Movies](../../data/movielens_model.png)

## Exploring the dataset

To follow this tutorial, download the [Memgraph
Platform](https://memgraph.com/download#memgraph-platform). Once you have it up
and running, open Memgraph Lab web application within the browser on
[`localhost:3000`](http://localhost:3000) and navigate to `Datasets` in the
sidebar. From there, choose the dataset `MovieLens: Movies, genres and users`
and continue with the tutorial. 

## Example queries

**1\.** List first 10 movies sorted by title:

```cypher
MATCH (movie:Movie)
RETURN movie
ORDER BY movie.title
LIMIT 10;
```

**2\.** List 15 users from the dataset:

```cypher
MATCH (user:User)
RETURN user
LIMIT 15;
```

**3\.** List 10 movies that have _Comedy_ and _Action_ genres and sort them by
title: 

```cypher
MATCH (movie:Movie)-[:OF_GENRE]->(:Genre {name:'Action'})
MATCH (movie)-[:OF_GENRE]->(:Genre {name:'Comedy'})
RETURN movie.title
ORDER BY movie.title
LIMIT 10;
```

**4\.** Average score for _Star Wars: Episode IV - A New Hope (1977)_ movie:

```cypher
MATCH (:User)-[r:RATED]->(:Movie {title:"Star Wars: Episode IV - A New Hope (1977)"})
RETURN avg(r.rating)
```

**5\.** Return the first 10 movies that are ordered by rating:

```cypher
MATCH (:User)-[r:RATED]->(movie:Movie)
RETURN movie.title, avg(r.rating) AS rating
ORDER BY rating DESC
LIMIT 10;
```

**6\.** Create a new user and rate some movies:

```cypher
CREATE (:User {id:1000});
```

**7\.** Check if new user is created:

```cypher
MATCH (user:User{id:1000})
RETURN user;
```

**8\.** Create some ratings for the user:

```cypher
MATCH (u:User {id:1000}), (m:Movie {title:"2 Guns (2013)"})
MERGE (u)-[:RATED {rating:3.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"21 Jump Street (2012)"})
MERGE (u)-[:RATED {rating:3.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Toy Story (1995)"})
MERGE (u)-[:RATED {rating:3.5}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Lion King, The (1994)"})
MERGE (u)-[:RATED {rating:4.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Dark Knight, The (2008)"})
MERGE (u)-[:RATED {rating:4.5}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Star Wars: Episode VI - Return of the Jedi (1983)"})
MERGE (u)-[:RATED {rating:4.5}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Godfather, The (1972)"})
MERGE (u)-[:RATED {rating:5.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Lord of the Rings: The Return of the King, The (2003)"})
MERGE (u)-[:RATED {rating:4.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Aladdin (1992)"})
MERGE (u)-[:RATED {rating:4.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Pirates of the Caribbean: The Curse of the Black Pearl (2003)"})
MERGE (u)-[:RATED {rating:4.5}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Departed, The (2006)"})
MERGE (u)-[:RATED {rating:4.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Texas Rangers (2001)"})
MERGE (u)-[:RATED {rating:2.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Eve of Destruction (1991)"})
MERGE (u)-[:RATED {rating:1.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Sharkwater (2006)"})
MERGE (u)-[:RATED {rating:2.0}]->(m);
MATCH (u:User {id:1000}), (m:Movie {title:"Extreme Days (2001)"})
MERGE (u)-[:RATED {rating:1.5}]->(m);
```

**9\.**Check all the movies user with `id = 1000` has rated: 

```
MATCH (user:User {id:1000})-[rating:RATED]->(movie:Movie)
RETURN user, movie, rating
```

**10\.** Recommendation system:

The idea is to implement simple [memory based collaborative
filtering](https://en.wikipedia.org/wiki/Collaborative_filtering).

Let's recommend some movies for user with `id = 1000`:

```cypher
MATCH (u:User {id:1000})-[r:RATED]-(m:Movie)
      -[other_r:RATED]-(other:User)
WITH other.id AS other_id,
     avg(abs(r.rating-other_r.rating)) AS similarity,
     count(*) AS same_movies_rated
WHERE same_movies_rated > 2
WITH other_id
ORDER BY similarity
LIMIT 10
WITH collect(other_id) AS similar_user_set
MATCH (some_movie:Movie)-[fellow_rate:RATED]-(fellow_user:User)
WHERE fellow_user.id IN similar_user_set
WITH some_movie, avg(fellow_rate.rating) AS prediction_rating
RETURN some_movie.title AS Title, prediction_rating
ORDER BY prediction_rating DESC;
```

How does this query work?

This query has two parts:

- Finding similar users
- Predicting the score for some movie (recommendation)

In the first part, we are looking for similar users. First, we need to define
similar users: Two users are considered similar if they tend to give similar
ratings to the same movies. For the target user and some other user we
are searching for the same movies:

```cypher
MATCH (u:User {id:1000})-[r:RATED]-(m:Movie)-[other_r:RATED]-(other:User)
RETURN *;
```
If you try to execute the query above with added `RETURN` statement, you will get all
potential similar users and movies they rated. 
But this is not enough for finding similar users. We need to choose users with
the same movies and similar ratings:

```cypher
WITH other.id AS other_id,
     avg(abs(r.rating-other_r.rating)) AS similarity,
     count(*) AS same_movies_rated
WHERE same_movies_rated > 2
WITH other_id
ORDER BY similarity
LIMIT 10;
WITH collect(other_id) AS similar_user_set
```

Here we calculate similarities as the average distance between the target user rating
and some other user rating on the same set of movies. There are two parameters:
`same_movies_rated` defines the number of same movies (more than 3) that the target user and other users need to rate, and `similar_user_set` represents the users that gave a similar rating to the movies that the target user has rated. These parameters enable extracting the best users for movie recommendations.

Now we have a similar user set. We will use those users to calculate the average
rating value for all movies they rated in the database as `prediction_rating` variable, and return the best-rated movies order by `prediction_rating` variable.

```cypher
MATCH (some_movie: Movie)-[fellow_rate:RATED]-(fellow_user:User)
WHERE fellow_user.id IN similar_user_set
WITH some_movie, avg(fellow_rate.rating) AS prediction_rating
RETURN some_movie.title AS title, prediction_rating
ORDER BY prediction_rating DESC;
```

We encourage you to play with some parameters, like `same_movies_rated` limit and
`similar_user_set` size limit. You can also try to use different similarity
functions, for example [Euclidean
distance](https://en.wikipedia.org/wiki/Euclidean_distance):

```cypher
sqrt(reduce(a=0, x IN collect((r.rating - other_r.rating) * (r.rating - other_r.rating)) | a + x)) AS similarity;
```

Here we use `reduce` function. Reduce function accumulate list elements into a
single result by applying an expression. In our query, this function starts with
0 and sums up squared differences. `collect` function is used for putting
squared differences into the list.
