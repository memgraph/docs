const baseUrl = "/docs/";

module.exports = {
  title: "Memgraph Docs",
  tagline: "Welcome to the Memgraph Docs site!",
  url: "https://memgraph.com",
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/social-logo-round-corners.png",
  organizationName: "memgraph",
  projectName: "docs",
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:500,600",
    "https://fonts.googleapis.com/css?family=Roboto:400, 500,600",
  ],
  scripts: [
    {
      src: `https://memgraph.com/docs/js/load-analytics.js`,
      // src: `http://localhost:3000/docs/js/load-analytics.js`,
    },
    {
      src: "https://kit.fontawesome.com/3a9f2eb5b9.js",
    },
  ],
  themeConfig: {
    metadata: [
      {
        property: "og:image",
        content:
          "https://public-assets.memgraph.com/github-readme-images/docs.memgraph-browser.png",
      },
    ],
    navbar: {
      title: "Docs",
      logo: {
        alt: "Memgraph Logo",
        src: "img/memgraph-logo-500x380.png",
      },
      items: [
        {
          to: "/memgraph/getting-started",
          label: "Memgraph",
          position: "left",
          activeBaseRegex: `/memgraph/`,
          items: [
            {
              label: "Getting started",
              to: "/memgraph/getting-started",
            },
            {
              label: "Installation",
              to: "/memgraph/installation",
            },
            {
              label: "Connect to Memgraph",
              to: "/memgraph/connect-to-memgraph",
            },
            {
              label: "Import data",
              to: "/memgraph/import-data",
            },
            {
              label: "Reference guide",
              to: "/memgraph/reference-guide",
            },
          ],
        },
        {
          to: "/memgraph-lab/",
          label: "Memgraph Lab",
          position: "left",
          activeBaseRegex: `/lab/`,
        },
        /*
        {
          to: '/memgraph-cloud/',
          label: 'Memgraph Cloud',
          position: 'left',
          activeBaseRegex: `/cloud/`,
        },
        */
        {
          to: "/mage",
          label: "MAGE",
          position: "left",
          activeBaseRegex: `/mage/`,
          items: [
            {
              label: "Overview",
              to: "/mage",
            },
            {
              label: "Installation",
              to: "/mage/installation",
            },
            {
              label: "Using query modules",
              to: "/mage/usage/calling-procedures",
            },
            {
              label: "How-to guides",
              to: "/mage/how-to-guides/create-a-new-module-python",
            },
            {
              label: "Algorithms",
              to: "/mage/algorithms/traditional-graph-analytics/betweenness-centrality-algorithm",
            },
            {
              label: "Use cases",
              to: "/mage/use-cases/bioinformatics",
            },
            {
              label: "Contributing",
              to: "/mage/contributing",
            },
          ],
        },
        {
          to: "/cypher-manual/",
          label: "Cypher manual",
          position: "left",
          activeBaseRegex: `/cypher-manual/`,
          items: [
            {
              label: "Overview",
              to: "/cypher-manual/",
            },
            {
              label: "Functions",
              to: "/cypher-manual/functions",
            },
            {
              label: "Clauses",
              to: "/cypher-manual/clauses",
            },
            {
              label: "Other features",
              to: "/cypher-manual/other-features",
            },
            {
              label: "Differences",
              to: "/cypher-manual/differences",
            },
          ],
        },
        {
          to: "/help-center",
          label: "Help Center",
          position: "left",
          activeBaseRegex: `/help-center/`,
        },
        {
          type: "docsVersionDropdown",
          docsPluginId: "memgraph",
          position: "right",
          dropdownItemsAfter: [
            {
              to: "https://memgraph-docs-archive.netlify.app/",
              label: "Older versions 🗄️",
            },
          ]
        },
        {
          href: "https://github.com/memgraph/memgraph",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Memgraph",
              to: "/memgraph/getting-started",
            },
            {
              label: "Memgraph Lab",
              to: "/memgraph-lab",
            },
            /*
            {
              label: 'Memgraph Cloud',
              to: '/memgraph-cloud',
            },
            */
            {
              label: "Cypher manual",
              to: "/cypher-manual",
            },
            {
              label: "MAGE",
              to: "/mage",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/memgraph",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/memgraphdb",
            },
            {
              label: "Developer Forum",
              href: "https://discourse.memgraph.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/memgraphdb",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/memgraph/memgraph",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCZ3HOJvHGxtQ_JHxOselBYg",
            },
          ],
        },
      ],
      logo: {
        alt: "Memgraph Logo",
        src: "img/Memgraph-logo-white-rgb.png",
        href: "https://memgraph.com",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Memgraph. Built by developers, for developers!`,
    },
    algolia: {
      apiKey: "05acf33bff73974c131732d34307085e",
      indexName: "g-despot",
      contextualSearch: true,
    },
    prism: {
      additionalLanguages: ["cypher", "php", "rust", "csharp", "java", "docker"],
    },
    hideableSidebar: true,
    announcementBar: {
      id: "app-challenge",
      content:
        '🏆 Keep Rockin’ & Start Coding! Register and win $2,000! <a target="_blank" rel="noopener noreferrer" href="https://memgraph.com/memgraph-app-challenge"><b>Join the challenge</b></a> 🏆',
      backgroundColor: "#fafbfc",
      textColor: "#091E42",
      isCloseable: true,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "memgraph",
          path: "docs",
          routeBasePath: "memgraph",
          sidebarPath: require.resolve("./sidebars/sidebarsMemgraph.js"),
          editUrl: "https://github.com/memgraph/docs/tree/master/",
          versions: {
            current: {
              label: `Next version 🚧`,
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "lab",
        path: "lab",
        routeBasePath: "memgraph-lab",
        sidebarPath: require.resolve("./sidebars/sidebarsLab.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cloud",
        path: "cloud",
        routeBasePath: "memgraph-cloud",
        sidebarPath: require.resolve("./sidebars/sidebarsCloud.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cypher-manual",
        path: "cypher-manual",
        routeBasePath: "cypher-manual",
        sidebarPath: require.resolve("./sidebars/sidebarsCypherManual.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "mage",
        path: "mage",
        routeBasePath: "mage",
        sidebarPath: require.resolve("./sidebars/sidebarsMAGE.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "help-center",
        path: "help-center",
        routeBasePath: "help-center",
        sidebarPath: require.resolve("./sidebars/sidebarsHelpCenter.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "errors",
        path: "errors",
        routeBasePath: "errors",
        sidebarPath: require.resolve("./sidebars/sidebarsErrors.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/memgraph/getting-started",
            from: ["/memgraph/introduction"],
          },
          {
            to: "/memgraph/getting-started",
            from: ["/memgraph/overview"],
          },
          {
            to: "/memgraph/getting-started",
            from: ["/memgraph/quick-start"],
          },
          //Tutorial redirects
          {
            to: "/memgraph/tutorials",
            from: ["/memgraph/tutorials-overview"],
          },
          {
            to: "/memgraph/tutorials/analyzing-ted-talks",
            from: ["/memgraph/tutorials-overview/analyzing-ted-talks"],
          },
          {
            to: "/memgraph/tutorials/backpacking-through-europe",
            from: ["/memgraph/tutorials-overview/backpacking-through-europe"],
          },
          {
            to: "/memgraph/tutorials/exploring-the-european-road-network",
            from: [
              "/memgraph/tutorials-overview/exploring-the-european-road-network",
            ],
          },
          {
            to: "/memgraph/tutorials/football-transfers",
            from: ["/memgraph/tutorials-overview/football-transfers"],
          },
          {
            to: "/memgraph/tutorials/graphing-the-premier-league",
            from: ["/memgraph/tutorials-overview/graphing-the-premier-league"],
          },
          {
            to: "/memgraph/tutorials/marvel-universe",
            from: ["/memgraph/tutorials-overview/marvel-universe"],
          },
          {
            to: "/memgraph/tutorials/movie-recommendation",
            from: ["/memgraph/tutorials-overview/movie-recommendation"],
          },
          {
            to: "/memgraph/tutorials/understanding-music-with-modules",
            from: [
              "/memgraph/tutorials-overview/understanding-music-with-modules",
            ],
          },
          {
            to: "/memgraph/tutorials/social-network-analysis",
            from: ["/memgraph/tutorials-overview/social-network-analysis"],
          },
          //How-to guides redirects
          {
            to: "/memgraph/database-functionalities",
            from: ["/memgraph/how-to-guides-overview"],
          },
          {
            to: "/memgraph/database-functionalities/profiling-queries",
            from: ["/memgraph/how-to-guides-overview/explain-profile"],
          },
          {
            to: "/memgraph/import-data",
            from: ["/memgraph/how-to-guides-overview/import-data"],
          },
          {
            to: "/memgraph/connect-to-memgraph/methods/drivers",
            from: [
              "/memgraph/how-to-guides-overview/query-memgraph-programmatically",
            ],
          },
          {
            to: "/memgraph/database-functionalities/constraints/uniqueness-constraint",
            from: ["/memgraph/how-to-guides-overview/enforce-constraints"],
          },
          {
            to: "/memgraph/reference-guide/query-modules/load-call-query-modules",
            from: ["/memgraph/how-to-guides-overview/load-query-modules"],
          },
          {
            to: "/memgraph/reference-guide/query-modules/load-call-query-modules",
            from: [
              "/memgraph/how-to-guides-overview/call-query-module-procedures",
            ],
          },
          {
            to: "/memgraph/database-functionalities/query-modules/implement-query-modules",
            from: ["/memgraph/how-to-guides-overview/implement-query-modules"],
          },
          {
            to: "/memgraph/reference-guide/query-modules/available-query-modules",
            from: [
              "/memgraph/how-to-guides-overview/use-query-modules-provided-by-memgraph",
            ],
          },
          {
            to: "/memgraph/database-functionalities/query-modules/implement-query-modules",
            from: [
              "/memgraph/how-to-guides-overview/use-and-implement-query-modules",
            ],
          },
          {
            to: "/memgraph/database-functionalities/manage-user-privileges",
            from: ["/memgraph/how-to-guides-overview/manage-user-privileges"],
          },
          {
            to: "/memgraph/database-functionalities/manage-users-using-ldap",
            from: ["/memgraph/how-to-guides-overview/manage-users-using-ldap"],
          },
          {
            to: "/memgraph/how-to-work-with-docker",
            from: ["/memgraph/how-to-guides-overview/work-with-docker"],
          },
          {
            to: "/memgraph/reference-guide/backup",
            from: ["/memgraph/database-functionalities/backup"],
          },
          //Reference guide redirects
          {
            to: "/memgraph/reference-guide/configuration",
            from: ["/memgraph/reference-overview/configuration"],
          },
          {
            to: "/cypher-manual/reading-existing-data",
            from: ["/memgraph/reference-overview/reading-existing-data"],
          },
          {
            to: "/cypher-manual/writing-new-data",
            from: ["/memgraph/reference-overview/writing-new-data"],
          },
          {
            to: "/cypher-manual/reading-and-writing",
            from: ["/memgraph/reference-overview/reading-and-writing"],
          },
          {
            to: "/memgraph/reference-guide/indexing",
            from: ["/memgraph/reference-overview/indexing"],
          },
          {
            to: "/memgraph/reference-guide/graph-algorithms",
            from: ["/memgraph/reference-overview/graph-algorithms"],
          },
          {
            to: "/memgraph/reference-guide/query-modules",
            from: ["/memgraph/reference-overview/query-modules"],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: ["/memgraph/reference-overview/query-modules/c-api"],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/python-api",
            from: ["/memgraph/reference-overview/query-modules/python-api"],
          },
          {
            to: "/memgraph/database-functionalities/networkx",
            from: ["/memgraph/reference-overview/networkx"],
          },
          {
            to: "/memgraph/database-functionalities/networkx",
            from: ["/memgraph/reference-overview/networkx/graph-analyzer"],
          },
          {
            to: "/memgraph/database-functionalities/networkx",
            from: ["/memgraph/reference-overview/networkx/wcc"],
          },
          {
            to: "/memgraph/database-functionalities/networkx",
            from: ["/memgraph/reference-overview/networkx/nxalg"],
          },
          {
            to: "/memgraph/reference-guide/security",
            from: ["/memgraph/reference-overview/security"],
          },
          {
            to: "/memgraph/reference-guide/auth-module",
            from: ["/memgraph/reference-overview/auth-module"],
          },
          {
            to: "/memgraph/reference-guide/ldap-security",
            from: ["/memgraph/reference-overview/ldap-security"],
          },
          {
            to: "/memgraph/reference-guide/audit-log",
            from: ["/memgraph/reference-overview/audit-log"],
          },
          {
            to: "/cypher-manual/other-features",
            from: ["/memgraph/reference-overview/other-features"],
          },
          {
            to: "/cypher-manual/differences",
            from: ["/memgraph/reference-overview/differences"],
          },
          //Cypher manual redirects
          {
            to: "/cypher-manual/",
            from: ["/memgraph/open-cypher"],
          },
          {
            to: "/cypher-manual/functions",
            from: ["/memgraph/open-cypher/functions"],
          },
          {
            to: "/cypher-manual/clauses",
            from: ["/memgraph/open-cypher/clauses"],
          },
          {
            to: "/cypher-manual/clauses/create",
            from: ["/memgraph/open-cypher/clauses/create"],
          },
          {
            to: "/cypher-manual/clauses/delete",
            from: ["/memgraph/open-cypher/clauses/delete"],
          },
          {
            to: "/cypher-manual/clauses/match",
            from: ["/memgraph/open-cypher/clauses/match"],
          },
          {
            to: "/cypher-manual/clauses/merge",
            from: ["/memgraph/open-cypher/clauses/merge"],
          },
          {
            to: "/cypher-manual/clauses/optional-match",
            from: ["/memgraph/open-cypher/clauses/optional-match"],
          },
          {
            to: "/cypher-manual/clauses/remove",
            from: ["/memgraph/open-cypher/clauses/remove"],
          },
          {
            to: "/cypher-manual/clauses/return",
            from: ["/memgraph/open-cypher/clauses/return"],
          },
          {
            to: "/cypher-manual/clauses/set",
            from: ["/memgraph/open-cypher/clauses/set"],
          },
          {
            to: "/cypher-manual/clauses/union",
            from: ["/memgraph/open-cypher/clauses/union"],
          },
          {
            to: "/cypher-manual/clauses/unwind",
            from: ["/memgraph/open-cypher/clauses/unwind"],
          },
          {
            to: "/cypher-manual/clauses/where",
            from: ["/memgraph/open-cypher/clauses/where"],
          },
          {
            to: "/cypher-manual/clauses/with",
            from: ["/memgraph/open-cypher/clauses/with"],
          },
          //Concepts redirects
          {
            to: "/memgraph/concepts/indexing",
            from: ["/memgraph/concepts-overview/indexing"],
          },
          {
            to: "/memgraph/concepts/storage",
            from: ["/memgraph/concepts-overview/storage"],
          },
          {
            to: "/memgraph/concepts/graph-algorithms",
            from: ["/memgraph/concepts-overview/graph-algorithms"],
          },
          {
            to: "/memgraph/concepts/replication",
            from: ["/memgraph/concepts-overview/replication"],
          },
          //Machine learning redirects
          {
            to: "/memgraph/database-functionalities/tensorflow-setup",
            from: ["/machine-learning/tensorflow-op"],
          },
          {
            to: "/memgraph/database-functionalities/tensorflow-setup",
            from: ["/machine-learning/tensorflow-op/tensorflow"],
          },
          //Memgraph Lab redirects
          {
            to: "/memgraph-lab/style-script/quick-start",
            from: ["/memgraph-lab/style_script"],
          },
          {
            to: "/memgraph-lab/installation/macos",
            from: ["/memgraph-lab/how_to_install_memgraph_lab_on_macos"],
          },
          //Memgraph installation redirects
          {
            to: "/memgraph/installation",
            from: [
              "/memgraph/getting-started/installation/docker-installation",
            ],
          },
          {
            to: "/memgraph/install-memgraph-on-windows-wsl",
            from: ["/memgraph/getting-started/installation/wsl-installation"],
          },
          {
            to: "/memgraph/install-memgraph-on-debian",
            from: [
              "/memgraph/getting-started/installation/debian-installation",
            ],
          },
          {
            to: "/memgraph/install-memgraph-from-rpm",
            from: ["/memgraph/getting-started/installation/rpm-installation"],
          },
          {
            to: "/memgraph/how-to-work-with-docker",
            from: ["/memgraph/database-functionalities/work-with-docker"],
          },
          //Memgraph getting started redirects
          {
            to: "/memgraph/connect-to-memgraph",
            from: ["/memgraph/getting-started/querying/querying"],
          },
          //New structure update
          {
            to: "/memgraph/installation",
            from: ["/memgraph/getting-started/installation"],
          },
          {
            to: "/memgraph/connect-to-memgraph",
            from: ["/memgraph/getting-started/querying"],
          },
          {
            to: "/memgraph/connect-to-memgraph",
            from: ["/memgraph/connection-methods"],
          },
          {
            to: "/memgraph/connect-to-memgraph/methods/drivers",
            from: ["/memgraph/getting-started/connecting-applications"],
          },
          {
            to: "/memgraph/connect-to-memgraph/methods/building-applications/python",
            from: ["/memgraph/getting-started/connecting-applications/python"],
          },
          {
            to: "/memgraph/connect-to-memgraph/methods/building-applications/rust",
            from: ["/memgraph/getting-started/connecting-applications/rust"],
          },
          {
            to: "/memgraph/connect-to-memgraph/methods/building-applications/c-sharp",
            from: ["/memgraph/getting-started/connecting-applications/c-sharp"],
          },
          {
            to: "/memgraph/connect-to-memgraph/methods/building-applications/java",
            from: ["/memgraph/getting-started/connecting-applications/java"],
          },
          {
            to: "/memgraph/connect-to-memgraph/methods/building-applications/go",
            from: ["/memgraph/getting-started/connecting-applications/go"],
          },
          {
            to: "/memgraph/connect-to-memgraph/methods/building-applications/javascript",
            from: [
              "/memgraph/getting-started/connecting-applications/javascript",
            ],
          },
          {
            to: "/memgraph/connect-to-memgraph/methods/building-applications/php",
            from: ["/memgraph/getting-started/connecting-applications/php"],
          },
          {
            to: "/memgraph/tutorials",
            from: ["/memgraph/tutorials/tutorials"],
          },
          {
            to: "/memgraph/import-data",
            from: ["/memgraph/database-functionalities/import-data"],
          },
          {
            to: "/memgraph/import-data/kafka",
            from: ["/memgraph/import-data/kafka/overview"],
          },
          {
            to: "/memgraph/reference-guide/query-modules/available-query-modules",
            from: [
              "/memgraph/database-functionalities/query-modules/built-in-query-modules",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/load-call-query-modules",
            from: [
              "/memgraph/database-functionalities/query-modules/load-call-query-modules",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: ["/memgraph/reference-guide/query-modules/c-api"],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/python-api",
            from: ["/memgraph/reference-guide/query-modules/python-api"],
          },
          {
            to: "/memgraph/database-functionalities/networkx",
            from: ["/memgraph/reference-guide/networkx"],
          },
          {
            to: "/memgraph/database-functionalities/networkx",
            from: ["/memgraph/reference-guide/networkx/graph-analyzer"],
          },
          {
            to: "/memgraph/database-functionalities/networkx",
            from: ["/memgraph/reference-guide/networkx/nxalg"],
          },
          //Help Center redirects
          {
            to: "/help-center/faq/memgraph",
            from: ["/memgraph/faq"],
          },
          {
            to: "/help-center/",
            from: ["/memgraph/getting-help/getting-help"],
          },
          {
            to: "/help-center/faq/memgraph",
            from: ["/memgraph/getting-help/faq"],
          },
          //Kafka redirects because of introducing other stream sources
          {
            to: "/memgraph/database-functionalities/streams/kafka/kafka-streams",
            from: ["/memgraph/database-functionalities/streams/kafka-streams"],
          },
          {
            to: "/memgraph/database-functionalities/streams/kafka/implement-transformation-module",
            from: ["/memgraph/database-functionalities/streams/implement-transformation-module"],
          },
          //MAGE redirects
          {
            to: "/help-center/",
            from: ["/mage/getting-help"],
          },
          {
            to: "/help-center/faq/mage",
            from: ["/mage/faq"],
          },
          {
            to: "/help-center/faq/memgraph",
            from: ["/help-center/faq"],
          },
          {
            to: "/mage/use-cases/bioinformatics",
            from: ["/mage/applications/bioinformatics-application"],
          },
          {
            to: "/mage/use-cases/computer-security",
            from: ["/mage/applications/computer-security-application"],
          },
          {
            to: "/mage/use-cases/drug-discovery",
            from: ["/mage/applications/drug-discovery-application"],
          },
          {
            to: "/mage/use-cases/finance",
            from: ["/mage/applications/finance-application"],
          },
          {
            to: "/mage/use-cases/knowledge-graph",
            from: ["/mage/applications/knowledge-graph-application"],
          },
          {
            to: "/mage/use-cases/power-grids",
            from: ["/mage/applications/power-grids-application"],
          },
          {
            to: "/mage/use-cases/process-engineering",
            from: ["/mage/applications/process-engineering-application"],
          },
          {
            to: "/mage/use-cases/retail",
            from: ["/mage/applications/retail-application"],
          },
          {
            to: "/mage/use-cases/social-media",
            from: ["/mage/applications/social-media-application"],
          },
          {
            to: "/mage/use-cases/telecommunication",
            from: ["/mage/applications/telecommunication-application"],
          },
          {
            to: "/mage/use-cases/transportation",
            from: ["/mage/applications/transportation-application"],
          },
        ],
      },
    ],
  ],
  clientModules: [require.resolve("./src/components/analyticsCall.js")],
};
