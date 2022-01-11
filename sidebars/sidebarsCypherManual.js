module.exports = {
  cypher_manual: [
    "overview",
    "what-are-graph-databases",
    "what-is-cypher-query-language",
    "working-with-memgraph",
    "import-data",
    "connecting-nodes",
    "finding-and-returning-nodes",
    "updating-nodes-and-relationships",
    "deleting-nodes-and-relationships",
    {
      type: "category",
      label: "Clauses",
      link: {type: 'doc', id: 'clauses/clauses'},
      items: [
        "clauses/create",
        "clauses/delete",
        "clauses/load-csv",
        "clauses/match",
        "clauses/merge",
        "clauses/optional-match",
        "clauses/remove",
        "clauses/return",
        "clauses/set",
        "clauses/union",
        "clauses/unwind",
        "clauses/where",
        "clauses/with",
      ],
    },
    "functions",

  ],
};
