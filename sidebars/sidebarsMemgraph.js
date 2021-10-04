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
        {
          type: "category",
          label: "Methods",
          items: [
            "connect-to-memgraph/methods/mgconsole",
            {
              type: "link",
              label: "Memgraph Lab",
              href: "https://memgraph.com/docs/memgraph-lab",
            },
            "connect-to-memgraph/methods/drivers",
            {
              type: "category",
              label: "Building applications",
              items: [
                "connect-to-memgraph/methods/building-applications/python",
                "connect-to-memgraph/methods/building-applications/rust",
                "connect-to-memgraph/methods/building-applications/c-sharp",
                "connect-to-memgraph/methods/building-applications/java",
                "connect-to-memgraph/methods/building-applications/go",
                "connect-to-memgraph/methods/building-applications/javascript",
                "connect-to-memgraph/methods/building-applications/php",
              ],
            },
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
            "import-data/migrate/postgresql"
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
      label: "Database functionalities",
      items: [
        "database-functionalities/overview",
        "reference-guide/backup",
        {
          type: "category",
          label: "Connecting to Kafka streams",
          items: [
            "database-functionalities/streams/kafka-streams",
            "database-functionalities/streams/implement-transformation-module",
          ],
        },
        {
          type: "category",
          label: "Enforcing constraints",
          items: [
            "database-functionalities/constraints/existence-constraint",
            "database-functionalities/constraints/uniqueness-constraint",
          ],
        },
        "database-functionalities/inspecting-queries",
        "database-functionalities/memory-control",
        "database-functionalities/networkx",
        "database-functionalities/profiling-queries",
        {
          type: "category",
          label: "Query modules",
          items: [
            "database-functionalities/query-modules/overview",
            "database-functionalities/query-modules/implement-query-modules",
          ],
        },
        "database-functionalities/replication",
        "database-functionalities/tensorflow-setup",
        "database-functionalities/triggers",
        "database-functionalities/manage-users-using-ldap",
        "database-functionalities/manage-user-privileges",
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
                "reference-guide/query-modules/api/c-api",
                "reference-guide/query-modules/api/python-api",
              ],
            },
          ],
        },
        "reference-guide/replication",
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
        {
          type: "category",
          label: "Temporal types",
          items: [ 
            "reference-guide/temporal_types/overview",
          ],
        },
        "reference-guide/tensorflow",
        "database-functionalities/triggers",
        "reference-guide/audit-log",
        "reference-guide/auth-module",
        "reference-guide/ldap-security",
        "reference-guide/security",
      ],
    },
    {
      type: "category",
      label: "Concepts",
      items: [
        "concepts/concepts",
        "concepts/storage",
        "concepts/graph-algorithms",
        "concepts/indexing",
        "concepts/replication",
        "concepts/telemetry",
      ],
    },
    "changelog",
  ],
};
