---
id: graph-schema
title: Designing a graph database schema
sidebar_label: Graph database schema
---

When designing a graph database, the first and most important step is defining
what will it be used for. Different requirements will lead to different
information structures, relationships, designs, and in the end, implementations.
When starting with the design process, it is always a good practice to write
down the requirements the database needs to cover.

## Step 1. Defining the requirements
In this example, we will use the following requirements as a base for our
design:

> The Language School is a language training school. It offers language classes
> for client companies, which can be either held at the offices of the clients
> or at the School itself. The School employs teachers who may teach multiple
> courses. The School has clients who may offer multiple courses via the school.
> Clients offer courses to their employees, who have the option to participate.
> Each course is offered by one client. Each course has one teacher at any given
> time. Participants in the course are employees of the clients. Each
> participant can be employed by one company at a time. Participants may be
> enrolled in more than one course.

When given the requirements document, it is important to read it carefully and
to make notes of the things which might become entities, i.e. **nodes**, in our
database and what would be the possible **relationships** between them. The very
first step we are going to take is designing a base graph schema. A graph schema
is a diagram that maps the relationship between nodes that are part of our
database. Creating a graph schema is very helpful because we have everything
planned in advance and it can decrease errors while implementing the database
design.


## Step 2. Identifying the nodes
As we have previously stated in the [graph modeling](/) article, nodes will most
often be represented as nouns in the sentence. Reading through the requirements,
we can identify some possible candidates for nodes: `school`, `language`,
`clients`, `offices`, `teachers`, `courses`, `employees`, `participants`… Not
every noun written in the requirements has to become a specific node as seen in
the following example: `employees` and `participants` refers to the same subject
so we can use one label and node model for the participant of the course. For
the sake of simplicity, we will assume that courses take place at the client’s
office and each client has exactly one office. With that in mind, we can easily
identify four node types/labels - `Teacher`, `Course`, `Client`, `Participant`.


## Step 3. Mapping the relationships
Relationships are noted in the requirements as well. Most often, they are
represented as verbs. It is stated that each teacher instructs one course. From
this statement, we can infer our first relationship in the graph model:
`teaches`. We can model our first relationship:
`[:Teacher]-[:TEACHES]->[:Course]` . Reading further, we can identify other
relationships between the nodes: `[:Client]-[:OFFERS]->[:Course]`,
`[:Participant]-[:TAKES]-[:Course]`, `[:Participant]-[:WORKS_FOR]-[:Client]`.
Now that we know all of the relationships and node types, we can draw our graph
schema.

![Graphschema](https://hackmd.io/_uploads/BkvbCqzW_.jpg)



## Step 4. Properties to store
At this moment, our graph schema is just an empty shell. But, now that we have
our basic model, we can populate it with data. Before we actually import the
data itself, we need to define which properties we want to store. This can be
specified in our requirements document or it may be left to our discretion.
Sometimes, logical or natural data won’t be mentioned but it will be implied.
For example, a teacher is a person and each person has a name and a surname.
Naturally, this doesn’t have to be mentioned, but data like which language the
teacher knows should be specified. So, our `Teacher` node should store some kind
of ID, the teacher’s name and surname, an e-mail address, the date of birth, and
languages they can teach. In a similar manner, we decide the data for the rest
of the nodes. In the end, our graph should look like this:

![Graph schema final](https://hackmd.io/_uploads/SJRWJizbd.jpg)


## Where to next?
All that's left to do is to implement this graph schema in the database and
populate it with data. You can take a look at our [Cypher
manual](https://docs.memgraph.com/cypher-manual/) to learn more about
interacting with the database.
