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
          type: "category",
          label: "Use object graph mapper",
          items: [
            "how-to-guides/ogm/map-nodes-and-relationships",
            "how-to-guides/ogm/save-nodes-and-relationships",
            "how-to-guides/ogm/load-nodes-and-relationships",
            "how-to-guides/ogm/index-labels-and-properties",
          ],
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
        "how-to-guides/on-disk-storage/on-disk-storage"
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
        "reference/memgraph",
        "reference/models",
        "reference/query_builder",
        "reference/transformations",
        "reference/utilities",
      ],
    },
    "changelog",
  ],
};
