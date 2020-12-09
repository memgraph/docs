
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
```opencypher
MATCH (a:Article)-[:CONTAINS]->(t:Term)
WITH a, rand() AS number, t
RETURN DISTINCT a.name as `Random Article`, t.name as `First Term` ORDER BY number LIMIT 5;
```

1. Let's check out most common term in a given article
```opencypher
MATCH (a:Article {name: "Protein"})-[r:CONTAINS]->(t:Term)
RETURN DISTINCT t.name as Term, r.count as Count ORDER BY r.count DESC LIMIT 20;
```


2. Let's check the term which is most frequent
```opencypher
MATCH (a:Article {name: "Protein"})-[r:CONTAINS]->(t:Term)
WITH sum(r.count) AS total_terms
MATCH (a:Article {name: "Protein"})-[r:CONTAINS]->(t:Term)
WITH r, t, total_terms
RETURN DISTINCT t.name as Term, toFloat(r.count) / total_terms as term_frequency, r.count as term_count, total_terms
ORDER BY term_frequency
DESC LIMIT 20;
```



TEMP




MATCH (:Article)
WITH count(*) AS number_of_articles

MATCH (a:Article {name: "Protein"})-[r:CONTAINS]->(t:Term {name: "body"})<-[r2:CONTAINS]-(total_articles:Article)
WHERE a.name != total_articles.name
WITH distinct total_articles, sum(r.count) AS terms_in_protein, number_of_articles
ORDER BY total_articles.names
RETURN total_articles;

1. Let's see which gives most information

```opencypher
MATCH (:Article)
WITH count(*) AS number_of_articles

MATCH (a:Article {name: "Protein"})-[r:CONTAINS]->(t:Term)
WITH sum(r.count) AS terms_in_protein, number_of_articles

MATCH (a:Article {name: "Protein"})-[r:CONTAINS]->(t:Term)<-[r2:CONTAINS]-(total_articles:Article)
WHERE a.name != total_articles.name
WITH DISTINCT total_articles, t, toFloat(r.count) as term_in_protein, terms_in_protein, number_of_articles

RETURN DISTINCT
t.name as Term,
term_in_protein,
terms_in_protein,
term_in_protein / terms_in_protein as a,
count(total_articles) as b,
number_of_articles as c,
((term_in_protein / terms_in_protein) * (-log(toFloat(count(total_articles)+1)/number_of_articles))) as tfidf

ORDER BY tfidf DESC
LIMIT 50;
```

4. Find shortest path between two Articles (e.g. "Bone" and "Fire")
             A -> B means that A has hyperlink to B
             Bone -> Skeleton -> Human -> Human History -> Fire

MATCH p = (:Article {name: "Protein"})
          -[:Road * bfs]->
          (:Article {name: "Paris"})
RETURN nodes(p);

5. get articles with term "Croatia" exclduing the term "War"
```opencypher
MATCH (a:Article {name: "Protein"})-[r:CONTAINS]->(t:Term)
RETURN DISTINCT t.name as Term, r.count as Count ORDER BY r.count DESC LIMIT 20;
```

6. Shortest article in the dataset 

7. Find the category which coverst most amount of articles

8. Find the most popular term in given category

9.  find if there are any categoreis with the same name as articles

10.  find article in category "History?" with terms "abc", "brlj", "phyislohy"