# A Guide Through Memgraph’s Technical Documentation

This document outlines the main ideas behind Memgraph’s technical documentation.
This includes the types of articles, their structural organization, purpose and
writing style. The motivation behind these ideas mostly stems from
[this](https://www.divio.com/blog/documentation/) wonderful blog post.
Naturally, none of them are set in stone and further suggestions
are strongly encouraged.

## Types of articles
Memgraph’s technical documentation is structured around four distinct types of
articles. Each of those types tries to serve a different purpose and usually
requires a distinct writing style.

### Tutorials
Tutorials are learning-oriented, they provide a concrete example that showcases
one particular use-case of Memgraph. Ideally, tutorials allow users to learn by
doing something. Therefore, we usually include a complete database snapshot that
can easily be imported by the user. The contents and scale of the snapshot
should be outlined as clearly as possible, ideally with a pretty visualisation
of the graph schema. Tutorials tend to be written in less formal, relaxed,
conversational style which is easy to understand and conveys the most important
messages without depending on highly-technical knowledge.

For instance, our [Exploring the European Road
Network](products/memgraph/v0.14.1/tutorials/exploring-the-european-road-network.md)
tutorial provides a snapshot of, you guessed it, European road networks.  The
example queries are designed to easily introduce Memgraph’s shortest path
finding capabilities to users.

### How-to guides
How-to guides are goal-oriented. In other words, they are meant to provide a
series of steps that successfully solve a specific problem. These articles are
usually shorter and more concise than tutorials, i.e. they go straight to the
point. In that sense, they usually assume that the reader is equipped with the
technical skills to reach their goal and don’t provide more detailed
explanations of the tools used to solve that problem (apart from a reference for
example). When writing how-to guides, one should have in mind that the reader
wants to solve their problem as quickly and as easy as possible.

A typical example of a how-to guide would be an article on [How-to Ingest Data
Using
Kafka](products/memgraph/v0.14.1/how_to_guides/ingest-data-using-kafka.md).
That article should contain all the necessary steps for the user to do so
without going into much detail on what is Kafka or why data streaming might be
important.

### Concepts
Concepts are understanding-oriented, their aim is to provide the users with the
background, context and a detailed explanation of a specific concept. These
articles tend to be written for more advanced users that really care how things
work under the hood. They are usually written in a more formal language and can
introduce more advanced terminology. Apart from satisfying the curiosity of
advanced users, they aim to arm them with the knowledge that will reflect on
their usage of our product. In other words, a deep understanding of concepts
should make them use Memgraph more efficiently and effectively.

An example of a good concept is an article that explains
[Graph Algorithms](products/memgraph/v0.14.1/concepts/graph-algorithms.md)
that are implemented within Memgraph. Advanced users will gain an
understanding of what is happening when they are executing certain queries and
might optimize their queries due to that knowledge.

### Reference guide
The Reference guide is information-oriented, they provide an accurate and
complete list of Memgraph’s commands and features. These types of articles might
be easiest to write from a creative standpoint as they do not provide any deep
explanations or motivations behind their content. The main difficulty arises
from the fact that it is imperative for those articles to be completely accurate
and up-to-date.

An example of a good reference guide is an article which lists all OpenCypher
commands that allow users to
[read or write data](products/memgraph/v0.14.1/reference_guide/reading-and-writing.md).
