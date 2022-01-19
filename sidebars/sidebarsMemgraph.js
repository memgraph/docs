module.exports = {
  memgraph: [
    "getting-started",
    {
      type: "category",
      label: "Installation",
      items: [
        "installation/overview",
        {
          type: "category",
          label: "Windows",
          items: [
            "installation/windows/docker-installation",
            "installation/windows/wsl-installation",
            "installation/windows/windows-installation-troubleshooting",
          ],
        },
        {
          type: "category",
          label: "macOS",
          items: [
            "installation/macos/docker-installation",
            "installation/macos/macos-installation-troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Linux",
          items: [
            "installation/linux/docker-installation",
            "installation/linux/ubuntu-installation",
            "installation/linux/debian-installation",
            "installation/linux/rpm-installation",
            "installation/linux/linux-installation-troubleshooting",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Connect to Memgraph",
      items: [
        "connect-to-memgraph/overview",
        "connect-to-memgraph/mgconsole",
        {
          type: "link",
          label: "Memgraph Lab",
          href: "https://memgraph.com/docs/memgraph-lab",
        },
        {
          type: "category",
          label: "Drivers",
          items: [
            "connect-to-memgraph/drivers/overview",
            "connect-to-memgraph/drivers/python",
            "connect-to-memgraph/drivers/rust",
            "connect-to-memgraph/drivers/c-sharp",
            "connect-to-memgraph/drivers/java",
            "connect-to-memgraph/drivers/go",
            "connect-to-memgraph/drivers/nodejs",
            "connect-to-memgraph/drivers/javascript",
            "connect-to-memgraph/drivers/php",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Import data",
      items: [
        "import-data/overview",
        {
          type: "category",
          label: "CSV",
          items: ["import-data/load-csv-clause", "import-data/csv-import-tool"],
        },
        {
          type: "category",
          label: "Kafka",
          items: [
            "import-data/kafka/overview",
            "import-data/kafka/avro",
            "import-data/kafka/json",
            "import-data/kafka/protobuf",
          ],
        },
        {
          type: "category",
          label: "Migrate SQL",
          items: [
            "import-data/migrate/mysql",
            "import-data/migrate/postgresql",
          ],
        },
        "import-data/cypherl",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        "tutorials/overview",
        "tutorials/analyzing-ted-talks",
        "tutorials/backpacking-through-europe",
        "tutorials/exploring-the-european-road-network",
        "tutorials/football-transfers",
        "tutorials/got-deaths",
        "tutorials/graphing-the-premier-league",
        "tutorials/marvel-universe",
        "tutorials/movie-recommendation",
        "tutorials/social-network-analysis",
        "tutorials/understanding-music-with-modules",
      ],
    },
    {
      type: "category",
      label: "How-to guides",
      items: [
        "how-to-guides/overview",
        "reference-guide/backup",
        {
          type: "category",
          label: "Connect to stream sources",
          items: [
            {
              type: "category",
              label: "Kafka",
              items: [
                "how-to-guides/streams/kafka/kafka-streams",
                "how-to-guides/streams/kafka/implement-transformation-module",
              ],
            },
            {
              type: "category",
              label: "Pulsar",
              items: [
                "how-to-guides/streams/pulsar/pulsar-streams",
                "how-to-guides/streams/pulsar/implement-transformation-module",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Enforce constraints",
          items: [
            "how-to-guides/constraints/existence-constraint",
            "how-to-guides/constraints/uniqueness-constraint",
          ],
        },
        {
          type: "category",
          label: "Inspect and optimize queries",
          items: [
            "how-to-guides/inspecting-queries",
            "how-to-guides/profiling-queries",
          ],
        },
        "how-to-guides/memory-control",
        "how-to-guides/networkx",
        {
          type: "category",
          label: "Use query modules",
          items: [
            "how-to-guides/query-modules/overview",
            "how-to-guides/query-modules/implement-query-modules",
          ],
        },
        "how-to-guides/replication",
        //"how-to-guides/tensorflow-setup",
        "reference-guide/triggers",

        {
          type: "category",
          label: "Enterprise features",
          items: [
            "how-to-guides/manage-users-using-ldap",
            "how-to-guides/manage-user-privileges",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Reference guide",
      items: [
        "reference-guide/overview",
        "reference-guide/backup",
        "reference-guide/configuration",
        "reference-guide/graph-algorithms",
        {
          type: "category",
          label: "Import Data",
          items: [
            "reference-guide/import-data/overview",
            {
              type: "category",
              label: "CSV",
              items: [
                "reference-guide/import-data/csv-import-tool",
                "reference-guide/import-data/load-csv-clause",
              ],
            },
            "reference-guide/import-data/cypherl",
          ],
        },

        "reference-guide/indexing",
        "reference-guide/isolation-levels",
        "reference-guide/metadata",
        {
          type: "category",
          label: "Query modules",
          items: [
            "reference-guide/query-modules/overview",
            "reference-guide/query-modules/available-query-modules",
            "reference-guide/query-modules/load-call-query-modules",
            {
              type: "category",
              label: "API",
              items: [
                {
                  type: "category",
                  label: "C API",
                  items: [
                    "reference-guide/query-modules/api/c-api/overview",
                    {
                      type: "category",
                      label: "Classes",
                      items: [
                        "reference-guide/query-modules/api/c-api/classes/mgp_date_parameters",
                        "reference-guide/query-modules/api/c-api/classes/mgp_duration_parameters",
                        "reference-guide/query-modules/api/c-api/classes/mgp_edge_id",
                        "reference-guide/query-modules/api/c-api/classes/mgp_edge_type",
                        "reference-guide/query-modules/api/c-api/classes/mgp_label",
                        "reference-guide/query-modules/api/c-api/classes/mgp_local_date_time_parameters",
                        "reference-guide/query-modules/api/c-api/classes/mgp_local_time_parameters",
                        "reference-guide/query-modules/api/c-api/classes/mgp_property",
                        "reference-guide/query-modules/api/c-api/classes/mgp_vertex_id",
                      ],
                    },
                  ],
                },
                "reference-guide/query-modules/api/python-api",
              ],
            },
          ],
        },
        "reference-guide/replication",
        "reference-guide/runtime-settings",
        {
          type: "category",
          label: "Streams",
          items: [
            "reference-guide/streams/overview",
            {
              type: "category",
              label: "Transformation Modules",
              items: [
                "reference-guide/streams/transformation-modules/overview",
                {
                  type: "category",
                  label: "API",
                  items: [
                    "reference-guide/streams/transformation-modules/api/c-api",
                    "reference-guide/streams/transformation-modules/api/python-api",
                  ],
                },
              ],
            },
          ],
        },
        "reference-guide/temporal-types",
        //"reference-guide/tensorflow",
        "reference-guide/triggers",
        {
          type: "category",
          label: "Enterprise features",
          items: [
            "reference-guide/enabling-enterprise",
            "reference-guide/audit-log",
            "reference-guide/auth-module",
            "reference-guide/ldap-security",
            "reference-guide/security",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Under the hood",
      link: {type: 'doc', id: 'under-the-hood/overview'},
      items: [
        "under-the-hood/storage",
        "under-the-hood/graph-algorithms",
        "under-the-hood/indexing",
        "under-the-hood/replication",
        "under-the-hood/telemetry",
      ],
    },
    "changelog",
  ],
};
