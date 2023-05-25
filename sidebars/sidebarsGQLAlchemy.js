module.exports = {
  gqlalchemy: [
    "getting-started",
    "installation",
    "import-data",
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
          type: "doc",
          label: "Use query builder",
          id: "how-to-guides/query-builder",
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
        "how-to-guides/query-builder/graph-projection",
        {
          type: "category",
          label: "Translate Python graphs",
          items: [
            "how-to-guides/translators/import-python-graphs",
            "how-to-guides/translators/export-python-graphs"
          ],
        },
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

        {
          items: [
            "reference/graph_algorithms/integrated_algorithms",
            "reference/graph_algorithms/query_builder",
            "reference/graph_algorithms/query_modules"
          ],
          label: "graph_algorithms",
          type: "category"
        },
        {
          items: [
            "reference/query_builders/declarative_base",
            "reference/query_builders/memgraph_query_builder"
          ],
          label: "query_builders",
          type: "category"
        },
        {
          items: [
            {
              items: [
                "reference/transformations/export/graph_transporter",
                "reference/transformations/export/transporter"
              ],
              label: "transformations.export",
              type: "category"
            },
            {
              items: [
                "reference/transformations/importing/graph_importer",
                "reference/transformations/importing/loaders"
              ],
              label: "transformations.importing",
              type: "category"
            },
            {
              items: [
                "reference/transformations/translators/dgl_translator",
                "reference/transformations/translators/nx_translator",
                "reference/transformations/translators/pyg_translator",
                "reference/transformations/translators/translator"
              ],
              label: "transformations.translators",
              type: "category"
            }
          ],
          label: "transformations",
          type: "category"
        },
        {
          items: [
            "reference/vendors/database_client",
            "reference/vendors/memgraph",
            "reference/vendors/neo4j"
          ],
          label: "vendors",
          type: "category"
        },
        "reference/connection",
        "reference/disk_storage",
        "reference/exceptions",
        "reference/instance_runner",
        "reference/models",
        "reference/utilities"
      ],
    },
    {
      type: "category",
      label: "Under the hood",
      link: { type: "doc", id: "under-the-hood/overview" },
      items: [
        {
          type: "doc",
          label: "Python graphs",
          id: "under-the-hood/python-graph-translators",
        },
      ]
    },
    "changelog",
  ],
};
