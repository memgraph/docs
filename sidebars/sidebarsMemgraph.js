module.exports = {
  memgraph: [
    "getting-started",
    {
      type: "category",
      label: "Install Memgraph",
      link: { type: "doc", id: "installation/overview" },
      items: [
        {
          type: "category",
          label: "Windows",
          items: [
            "installation/windows/docker-installation",
            {
              type: "category",
              label: "Install Memgraph DB",
              items: [
                "installation/windows/docker-db-installation",
                "installation/windows/wsl-installation",
              ],
            },
            "installation/windows/windows-installation-troubleshooting",
          ],
        },
        {
          type: "category",
          label: "macOS",
          items: [
            "installation/macos/docker-installation",
            "installation/macos/docker-db-installation",
            "installation/macos/macos-installation-troubleshooting",
          ],
        },
        {
          type: "category",
          label: "Linux",
          items: [
            "installation/linux/docker-installation",
            {
              type: "category",
              label: "Install Memgraph DB",
              items: [
                "installation/linux/docker-db-installation",
                "installation/linux/ubuntu-installation",
                "installation/linux/debian-installation",
                "installation/linux/rpm-installation",
              ],
            },
            "installation/linux/linux-installation-troubleshooting",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Connect to Memgraph",
      link: { type: "doc", id: "connect-to-memgraph/overview" },
      items: [
        {
          type: "link",
          label: "Memgraph Lab",
          href: "https://memgraph.com/docs/memgraph-lab",
        },
        "connect-to-memgraph/mgconsole",
        {
          type: "category",
          label: "Drivers",
          link: { type: "doc", id: "connect-to-memgraph/drivers/overview" },
          items: [
            "connect-to-memgraph/drivers/c-sharp",
            "connect-to-memgraph/drivers/go",
            "connect-to-memgraph/drivers/java",
            "connect-to-memgraph/drivers/javascript",
            "connect-to-memgraph/drivers/nodejs",
            "connect-to-memgraph/drivers/php",
            "connect-to-memgraph/drivers/python",
            "connect-to-memgraph/drivers/rust",
          ],
        },
        "connect-to-memgraph/websocket",
      ],
    },
    {
      type: "category",
      label: "Import data",
      link: { type: "doc", id: "import-data/overview" },
      items: [
        {
          type: "category",
          label: "Import data from files",
          link: { type: "doc", id: "import-data/files/overview" },
          items: [
            "import-data/files/load-csv-clause",
            "import-data/files/load-json",
            "import-data/files/cypherl",
          ],
        },
        {
          type: "category",
          label: "Connect to data streams",
          link: { type: "doc", id: "import-data/data-streams/overview" },
          items: [
            "import-data/data-streams/manage-streams",
            "import-data/data-streams/manage-streams-lab",
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
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: { type: "doc", id: "tutorials/overview" },
      items: [
        "tutorials/first-steps-with-memgraph",
        "tutorials/install-memgraph-windows-10",
        "tutorials/graph-modeling",
        "tutorials/migrate-relational-database",
        {
          type: "category",
          label: "Exploring datasets with graph analytics",
          link: { type: "doc", id: "tutorials/exploring-datasets/overview" },
          items: [
            "tutorials/exploring-datasets/analyzing-ted-talks",
            "tutorials/exploring-datasets/backpacking-through-europe",
            "tutorials/exploring-datasets/exploring-the-european-road-network",
            "tutorials/exploring-datasets/football-transfers",
            "tutorials/exploring-datasets/got-deaths",
            "tutorials/exploring-datasets/graphing-the-premier-league",
            "tutorials/exploring-datasets/marvel-universe",
            "tutorials/exploring-datasets/movie-recommendation",
          ],
        },
        "tutorials/style-your-graphs-in-memgraph-lab",
        "tutorials/implement-custom-query-module-in-python",
        "tutorials/social-network-analysis",
        "tutorials/understanding-music-with-modules",
        "tutorials/graph-stream-processing-with-kafka",
      ],
    },
    {
      type: "category",
      label: "How-to guides",
      link: { type: "doc", id: "how-to-guides/overview" },
      items: [
        "how-to-guides/create-backup",
        "how-to-guides/config-logs",
        {
          type: "category",
          label: "Enforce constraints",
          items: [
            "how-to-guides/constraints/existence-constraint",
            "how-to-guides/constraints/uniqueness-constraint",
          ],
        },
        "how-to-guides/managing-python-environment",
        "how-to-guides/replication",
        "how-to-guides/set-up-triggers",
        "how-to-guides/font-awesome-for-node-images",
        "how-to-guides/query-modules",
        "how-to-guides/encryption",
        "how-to-guides/networkx",
        "how-to-guides/work-with-docker",
        "how-to-guides/indexes",
        {
          type: "category",
          label: "Enterprise features",
          items: [
            "how-to-guides/manage-users-using-ldap",
            "how-to-guides/manage-user-privileges",
            "how-to-guides/manage-label-based-access-control",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Reference guide",
      link: { type: "doc", id: "reference-guide/overview" },
      items: [
        "reference-guide/built-in-graph-algorithms",
        "reference-guide/memory-control",
        "reference-guide/configuration",
        "reference-guide/backup",
        "reference-guide/data-types",
        {
          type: "category",
          label: "Deployment",
          items: [
            "reference-guide/deployment/docker",
            "reference-guide/deployment/kubernetes",
          ],
        },
        "reference-guide/indexing",
        {
          type: "category",
          label: "Inspecting and optimizing queries",
          items: [
            "reference-guide/optimizing-queries/inspecting-queries",
            "reference-guide/optimizing-queries/profiling-queries",
          ],
        },
        "reference-guide/metadata",
        "reference-guide/monitoring-server",
        {
          type: "category",
          label: "Query modules",
          link: { type: "doc", id: "reference-guide/query-modules/overview" },
          items: [
            "reference-guide/query-modules/available-query-modules",
            {
              type: "category",
              label: "Implement custom query modules",
              link: { type: "doc", id: "reference-guide/query-modules/implement-custom-query-modules/overview" },
              items: [
                "reference-guide/query-modules/implement-custom-query-modules/api/python-api",
                "reference-guide/query-modules/implement-custom-query-modules/api/c-api",
                "reference-guide/query-modules/implement-custom-query-modules/api/cpp-api",
                "reference-guide/query-modules/implement-custom-query-modules/custom-query-module-example",
              ],
            },
            "reference-guide/query-modules/load-call-query-modules",
            "reference-guide/query-modules/module-file-utilities",
          ],
        },
        "reference-guide/replication",
        "reference-guide/runtime-settings",
        "reference-guide/server-stats",
        {
          type: "category",
          label: "Streams",
          link: { type: "doc", id: "reference-guide/streams/overview" },
          items: [
            {
              type: "category",
              label: "Transformation modules",
              link: { type: "doc", id: "reference-guide/streams/transformation-modules/overview" },
              items: [
                "reference-guide/streams/transformation-modules/api/c-api",
                "reference-guide/streams/transformation-modules/api/python-api",
              ],
            },
          ],
        },
        "reference-guide/transactions",
        "reference-guide/encryption",
        "reference-guide/triggers",
        "reference-guide/users",
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
        }
      ],
    },
    {
      type: "category",
      label: "Under the hood",
      link: { type: "doc", id: "under-the-hood/overview" },
      items: [
        "under-the-hood/storage",
        "under-the-hood/indexing",
        "under-the-hood/replication",
        "under-the-hood/telemetry",
      ],
    },
    "changelog",
  ],
};
