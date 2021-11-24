module.exports = {
  mage: [
    "overview",
    "installation",
     {
      type: "category",
      label: "Algorithms",
      items: [
        {
          type: "category",
          label: "Traditional Graph Analytics",
          items: [
            "algorithms/traditional-graph-analytics/betweenness-centrality-algorithm",
            "algorithms/traditional-graph-analytics/biconnected-components",
            "algorithms/traditional-graph-analytics/bridge-algorithm",
            "algorithms/traditional-graph-analytics/cycle-detection-algorithm",
            "algorithms/traditional-graph-analytics/node-similarity-algorithm",
          ],
        },
        {
          type: "category",
          label: "Streaming Graph Analytics",
          items: [
            "algorithms/dynamic-graph-analytics/node2vec-online-algorithm",
            "algorithms/dynamic-graph-analytics/pagerank-online-algorithm",
          ],
        },
        {
          type: "category",
          label: "Machine Learning Graph Algorithms",
          items: [
            "algorithms/machine-learning-graph-analytics/gcn-algorithm"
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Usage",
      items: ["usage/calling-procedures", "usage/loading-modules"],
    },
    {
      type: "category",
      label: "Tutorials",
      items: ["tutorials/create-a-new-module"],
    },
    {
      type: "category",
      label: "Query modules",
      items: [
        "query-modules/cpp/betweenness-centrality",
        "query-modules/cpp/biconnected-components",
        "query-modules/cpp/bipartite-matching",
        "query-modules/cpp/bridges",
        "query-modules/cpp/cycles",
        "query-modules/python/distance-calculator",
        "query-modules/python/graph-analyzer",
        "query-modules/python/graph-coloring",
        "query-modules/python/node2vec",
        "query-modules/python/node2vec-online",
        "query-modules/python/node-similarity",
        "query-modules/python/nxalg",
        "query-modules/python/pagerank",
        "query-modules/python/set-cover",
        "query-modules/python/tsp",
        "query-modules/python/union-find",
        "query-modules/cpp/uuid-generator",
        "query-modules/python/vrp",
        "query-modules/cpp/weakly-connected-components",
      ],
    },
    "contributing",
    {
      type: "category",
      label: "Getting help",
      items: ["getting-help/getting-help", "getting-help/faq"],
    },
  ],
};
