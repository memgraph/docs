module.exports = {
  cypher_manual: [
    "overview",
    {
      type: "category",
      label: "Getting started",
      items: [
        "getting-started/reading-existing-data",
        "getting-started/writing-new-data",
        "getting-started/reading-and-writing",
      ],
    },
    "functions",
    {
      type: "category",
      label: "Clauses",
      items: [
        "clauses/clauses",
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
    "other-features",
    {
      type: "category",
      label: "Differences in Cypher implementations",
      items: ["differences/overview", "differences/patterns-in-expressions"],
    },
  ],
};
