module.exports = {
  gqlalchemy: [
    "getting-started",
    "installation",
    {
      type: "category",
      label: "How-to guides",
      link: { type: "doc", id: "how-to-guides/overview" },
      items: [
        {
          type: "doc",
          label: "Use object graph mapper",
          id: "how-to-guides/ogm",
        },
        {
          type: "category",
          label: "Use query builder",
          items: [
            "how-to-guides/query-builder/create-nodes-relationships",
            "how-to-guides/query-builder/return-results",
            "how-to-guides/query-builder/filter-data",
            "how-to-guides/query-builder/call-procedures",
            "how-to-guides/query-builder/delete-remove-objects",
            "how-to-guides/query-builder/set-or-update-objects",
          ],
        },
        {
          type: "category",
          label: "Manage streams",
          items: [
            "how-to-guides/streams/kafka-streams",
            "how-to-guides/streams/pulsar-streams",
          ],
        },
        {
          type: "category",
          label: "Import data from different sources",
          items: [
            "how-to-guides/loaders/table-to-graph-importer",
            "how-to-guides/loaders/custom-file-system-importer",
          ],
        },
        {
          type: "category",
          label: "Manage instances",
          items: [
            "how-to-guides/instance-runner/memgraph-docker-instance",
            "how-to-guides/instance-runner/memgraph-binary-instance",
          ],
        },
        "how-to-guides/triggers/triggers",
        "how-to-guides/on-disk-storage/on-disk-storage",
        "how-to-guides/networkx"
      ],
    },
    /*
    {
      type: "category",
      label: "Tutorials",
      items: ["tutorials/overview"],
    },
    "networkx",
    */
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
        title: "Reference",
        description: "The reference documentation for GQLAlchemy.",
        slug: "/reference",
      },
      items: [
        "reference/disk_storage",
        "reference/instance_runner",
        "reference/loaders",
        "reference/models",
        "reference/transformations",
        "reference/utilities",
        {
          type: "category",
          label: "graph_algorithms",
          items: [
            "reference/graph_algorithms/integrated_algorithms",
            "reference/graph_algorithms/query_builder",
            "reference/graph_algorithms/query_modules",
          ],
        },
        {
          type: "category",
          label: "query_builders",
          items: [
            "reference/query_builders/declarative_base",
            "reference/query_builders/memgraph_query_builder",
          ],
        },
        {
          type: "category",
          label: "vendors",
          items: [
            "reference/vendors/database_client",
            "reference/vendors/memgraph",
            "reference/vendors/neo4j",
          ],
        },
      ],
    },
    "changelog",
  ],
};
