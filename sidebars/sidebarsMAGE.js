module.exports = {
  mage: [
    "overview",
    {
      type: "category",
      label: "Install MAGE",
      items: [
        "installation/overview",
        "installation/docker-hub",
        "installation/docker-build",
        "installation/source",
      ],
    },
    {
      type: "category",
      label: "Using query modules",
      items: ["usage/loading-modules", "usage/calling-procedures"],
    }, 
    {
      type: "category",
      label: "Available query modules",
      items: [
        "query-modules/cpp/betweenness-centrality",
        "query-modules/cpp/biconnected-components",
        "query-modules/cpp/bipartite-matching",
        "query-modules/cpp/bridges",
        "query-modules/cpp/community-detection-online",
        "query-modules/cpp/cycles",
        "query-modules/python/distance-calculator",
        "query-modules/python/graph-analyzer",
        "query-modules/python/graph-coloring",
        "query-modules/python/json-util",
        "query-modules/python/node2vec",
        "query-modules/python/node2vec-online",
        "query-modules/python/node-similarity",
        "query-modules/python/nxalg",
        "query-modules/cpp/pagerank",
        "query-modules/cpp/pagerank-online",
        "query-modules/python/set-cover",
        "query-modules/python/tsp",
        "query-modules/python/union-find",
        "query-modules/cpp/uuid-generator",
        "query-modules/python/vrp",
        "query-modules/cpp/weakly-connected-components",
      ],
    },
    {
      type: "category",
      label: "How-to guides",
      items: [
        "how-to-guides/create-a-new-module-python",
        "how-to-guides/create-a-new-module-cpp",
        "how-to-guides/run-a-query-module",
      ],
    },
    {
      type: "category",
      label: "Algorithms",
      items: [
        {
          type: "category",
          label: "Traditional Graph Analytics",
          items: [
            "algorithms/traditional-graph-analytics/betweenness-centrality-algorithm",
            "algorithms/traditional-graph-analytics/biconnected-components-algorithm",
            "algorithms/traditional-graph-analytics/bipartite-matching-algorithm",
            "algorithms/traditional-graph-analytics/bridges-algorithm",
            "algorithms/traditional-graph-analytics/community-detection-algorithm",
            "algorithms/traditional-graph-analytics/cycle-detection-algorithm",
            "algorithms/traditional-graph-analytics/graph-coloring-algorithm",
            "algorithms/traditional-graph-analytics/node-similarity-algorithm",
            "algorithms/traditional-graph-analytics/pagerank-algorithm",
            "algorithms/traditional-graph-analytics/union-find-algorithm",
          ],
        },
        {
          type: "category",
          label: "Streaming Graph Analytics",
          items: [
            "algorithms/dynamic-graph-analytics/node2vec-online-algorithm",
            "algorithms/dynamic-graph-analytics/pagerank-online-algorithm",
            "algorithms/dynamic-graph-analytics/community-detection-online-algorithm",
          ],
        },
        {
          type: "category",
          label: "Machine Learning Graph Algorithms",
          items: [
            "algorithms/machine-learning-graph-analytics/gnn-algorithm",
            "algorithms/machine-learning-graph-analytics/graph-classification-algorithm",
            "algorithms/machine-learning-graph-analytics/link-prediction-algorithm",
            "algorithms/machine-learning-graph-analytics/node-classification-algorithm",
            "algorithms/machine-learning-graph-analytics/node2vec-algorithm",
            "algorithms/machine-learning-graph-analytics/graph-clustering-algorithm",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Use cases",
      items: [
        "use-cases/bioinformatics",
        "use-cases/computer-security",
        "use-cases/drug-discovery",
        "use-cases/finance",
        "use-cases/knowledge-graph",
        "use-cases/power-grids",
        "use-cases/process-engineering",
        "use-cases/retail",
        "use-cases/social-media",
        "use-cases/telecommunication",
        "use-cases/transportation",
      ],
    },
    "contributing",
  ],
};
