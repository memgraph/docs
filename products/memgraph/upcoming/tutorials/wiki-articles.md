
# Introduction

Free, multilingual, widely avaliable subset of collected world's knowledge. The first Wikipedia edit happened in 2001 which started the avalanche of written Wikipedia articles. There were more than 6,200,000 English Wikipedia articles in 2020. Wikipedia is a common starting point for general information, backed up by reliable sources outside of the site. Quality of articles is maintained by various editors, which anyone can become.

In this demo, you will explore the contents and contexts of 339 featured Wikipedia articles.

The following datasets (reduced) were used to create this demo:
1. [Wikipedia network of top categories](https://snap.stanford.edu/data/wiki-topcats.html)
2. [Linked WikiText-2](https://rloganiv.github.io/linked-wikitext-2/#/)
# Data model
Wikipedia Articles is a [graph](https://en.wikipedia.org/wiki/Graph_theory#:~:text=In%20mathematics%2C%20graph%20theory%20is,also%20called%20links%20or%20lines) dataset consisting of the [nodes](https://en.wikipedia.org/wiki/Vertex_(graph_theory)) and [edges](https://en.wikipedia.org/wiki/Glossary_of_graph_theory_terms#edge).

**Nodes** can be of the following types:

1. `Article` with a property `name`
2. `Term`  with a property `name`
3. `Category` with a property `name`

examples:
- `node:Article { name: 'Protein' }`
- `node:Term { name: 'protein folding' }`
- `node:Category { name: 'Molecular biology' }` 

**Edges** can be of the following types:

1. `:CONTAINS` with a property `count` - connects `Article` to `Term`
2. `:PARENT_TO` - connects `Category` to `Article

examples:
- `(n:Article { name: 'Protein' })` `-[:CONTAINS { count: 3 }]->` `(n:Term { name: 'protein folding' })`
- `(n:Category { name: 'Molecular biology' })` `-[:PARENT_TO]->` `(n:Article { name: 'Protein' }`


What's an Article made of? Terms!
>Wikipedia `Articles` contain many words and phrases called `Terms`. This relation is represented with an edge `:CONTAINS`. If `Article`'s text contains a `Term` they are connected with an edge `:CONTAINS` (from `Article` to `Term`). Different `Article` nodes can be connected to the same `Term` node. `count` property on an edge `:CONTAINS` is a number of repeating `Term` in an `Article`.

Who are Article's parents? Categories!
>Wikipedia `Category` is a parent of many `Articles`. This relation is represented with an edge `:PARENT_OF`. If `Category` is a parent of an `Article` they are connected with an edge `:PARENT_OF` (from  `Category` to `Article`). An `Article` can have multiple parent `Categories`.



![](pics/wiki-tutorial-graph.png)


0. lets get some articles and random term
```
MATCH (a:Article)-[:CONTAINS]->(t:Term)
WITH a, rand() AS number, t
RETURN DISTINCT a.name as `Random Article`, t.name as `First Term` ORDER BY number LIMIT 5;
```

1. Let's check out most common term in a given article
```opencypher
MATCH (a:Article {name: "Protein"})-[r:CONTAINS]->(t:Term)
RETURN DISTINCT t.name as Term, r.count as Count ORDER BY r.count DESC LIMIT 20;
```
2. Let's check the most unique terms
```opencypher
MATCH (a:Article {name: "Protein"})-[r:CONTAINS]->(t:Term)
RETURN DISTINCT t.name as Term, r.count as Count ORDER BY r.count DESC LIMIT 20;
```

3. Let's see which article overlaps the most (using the most unique term formula)

4. Find shortest path between two Articles (e.g. "Bone" and "Fire")
             A -> B means that A has hyperlink to B
             Bone -> Skeleton -> Human -> Human History -> Fire

MATCH p = (:Article {name: "Protein"})
          -[:Road * bfs]->
          (:Article {name: "Paris"})
RETURN nodes(p);

3. get articles with term "Croatia" exclduing the term "War"

4. Shortest article in the dataset 

5. Find the category which coverst most amount of articles

6. Find the most popular term in given category

7.  find if there are any categoreis with the same name as articles

8.  find article in category "History?" with terms "abc", "brlj", "phyislohy"