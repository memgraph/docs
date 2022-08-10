const baseUrl = "/docs/";
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: "Memgraph Docs",
  tagline: "Welcome to the Memgraph Docs site!",
  url: "https://memgraph.com",
  baseUrl,
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",
  favicon: "img/social-logo-round-corners.png",
  organizationName: "memgraph",
  projectName: "docs",
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:500,600",
    "https://fonts.googleapis.com/css?family=Roboto:400, 500,600",
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
          to: "/memgraph/",
          label: "Memgraph",
          position: "left",
          activeBaseRegex: `/memgraph/`,
          items: [
            {
              label: "Getting started",
              to: "/memgraph",
            },
            {
              label: "Install Memgraph",
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
              label: "Tutorials",
              to: "/memgraph/tutorials",
            },
            {
              label: "How-to guides",
              to: "memgraph/how-to-guides",
            },
            {
              label: "Reference guide",
              to: "/memgraph/reference-guide",
            },
            {
              label: "Under the hood",
              to: "/memgraph/under-the-hood",
            },
            {
              label: "Changelog",
              to: "/memgraph/changelog",
            },
          ],
        },
        {
          to: "/memgraph-lab/",
          label: "Memgraph Lab",
          position: "left",
          activeBaseRegex: `/lab/`,
          items: [
            {
              label: "Getting started",
              to: "memgraph-lab",
            },
            {
              label: "Install Memgraph Lab",
              to: "/memgraph-lab/installation",
            },
            {
              label: "Connect to Memgraph",
              to: "/memgraph-lab/connect-to-memgraph",
            },
            {
              label: "User manual",
              to: "/memgraph-lab/user-manual",
            },
            {
              label: "Graph Style Script language",
              to: "/memgraph-lab/graph-style-script-language",
            },
            {
              label: "Changelog",
              to: "/memgraph-lab/changelog",
            },
          ],
        },
        {
          to: '/memgraph-cloud/',
          label: 'Memgraph Cloud',
          position: 'left',
          activeBaseRegex: `/cloud/`,
          items: [
            {
              label: "Getting started",
              to: "/memgraph-cloud/",
            },
            {
              label: "Cloud account",
              to: "/memgraph-cloud/cloud-account",
            },
            {
              label: "Cloud projects",
              to: "/memgraph-cloud/cloud-projects",
            },
            {
              label: "Connect to Cloud",
              to: "/memgraph-cloud/cloud-connect",
            },
            {
              label: "Payment",
              to: "/memgraph-cloud/payment",
            },
          ],
        },
        {
          to: "/mage",
          label: "MAGE",
          position: "left",
          activeBaseRegex: `/mage/`,
          items: [
            {
              label: "Getting started",
              to: "/mage",
            },
            {
              label: "Install MAGE",
              to: "/mage/installation",
            },
            {
              label: "Using query modules",
              to: "/mage/usage/calling-procedures",
            },
            {
              label: "Available query modules",
              to: "/mage/query-modules/available-queries",
            },
            {
              label: "How-to guides",
              to: "/mage/how-to-guides/create-a-new-module-python",
            },
            {
              label: "Algorithms",
              to: "/mage/algorithms",
            },
            {
              label: "Use cases",
              to: "/mage/use-cases/bioinformatics",
            },
            {
              label: "Contributing",
              to: "/mage/contributing",
            },
            {
              label: "Changelog",
              to: "/mage/changelog",
            },
          ],
        },
        {
          to: "/gqlalchemy/",
          label: "GQLAlchemy",
          position: "left",
          activeBaseRegex: `/gqlalchemy/`,
          items: [
            {
              label: "Getting started",
              to: "/gqlalchemy/",
            },
            {
              label: "Installation",
              to: "/gqlalchemy/installation",
            },
            {
              label: "How-to guides",
              to: "/gqlalchemy/how-to-guides",
            },
            {
              label: "Reference",
              to: "/gqlalchemy/reference",
            },
            {
              label: "Changelog",
              to: "/gqlalchemy/changelog",
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
              label: "Getting started",
              to: "/cypher-manual/",
            },
            {
              label: "What are graph databases",
              to: "/cypher-manual/what-are-graph-databases",
            },
            {
              label: "Cypher query language",
              to: "/cypher-manual/cypher-query-language",
            },
            {
              label: "Working with Memgraph",
              to: "/cypher-manual/working-with-memgraph",
            },
            {
              label: "Import data",
              to: "/cypher-manual/import-data",
            },
            {
              label: "Connecting nodes",
              to: "/cypher-manual/connecting-nodes",
            },
            {
              label: "Reading existing data",
              to: "/cypher-manual/reading-existing-data",
            },
            {
              label: "Updating nodes and relationships",
              to: "/cypher-manual/updating-nodes-and-relationships",
            },
            {
              label: "Deleting nodes and relationships",
              to: "/cypher-manual/deleting-nodes-and-relationships",
            },
            {
              label: "Clauses",
              to: "/cypher-manual/clauses",
            },
            {
              label: "Extension clauses",
              to: "/cypher-manual/extension-clauses",
            },
            {
              label: "Using functions",
              to: "/cypher-manual/functions",
            },
            {
              label: "Graph algorithms",
              to: "/cypher-manual/graph-algorithms",
            },
            {
              label: "Query modules",
              to: "/cypher-manual/query-modules",
            },
            {
              label: "Other features",
              to: "/cypher-manual/other-features",
            },
          ],
        },
        {
          to: "/help-center",
          label: "Help",
          position: "left",
          activeBaseRegex: `/help-center/`,
          items: [
            {
              label: "Contact us",
              to: "/help-center/",
            },
            {
              label: "Memgraph FAQ",
              to: "/help-center/faq/memgraph",
            },
            {
              label: "Memgraph Cloud FAQ",
              to: "/help-center/faq/cloud",
            },
            {
              label: "Memgraph Lab FAQ",
              to: "/help-center/faq/memgraph-lab",
            },
            {
              label: "MAGE FAQ",
              to: "/help-center/faq/mage",
            },
            {
              label: "Errors overview",
              to: "/errors/",
            },
          ],
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
          ],
        },
        {
          href: "https://github.com/memgraph/memgraph",
          className: 'header-github-link',
          position: "right",
          'aria-label': 'GitHub repository'
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
              to: "/memgraph",
            },
            {
              label: "Memgraph Lab",
              to: "/memgraph-lab",
            },
            {
              label: 'Memgraph Cloud',
              to: '/memgraph-cloud',
            },
            {
              label: "Cypher manual",
              to: "/cypher-manual",
            },
            {
              label: "MAGE",
              to: "/mage",
            },
            {
              label: "GQLAlchemy",
              to: "/gqlalchemy",
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
              label: "Memgraph Cloud",
              href: "https://memgraph.com/cloud"
            },
            {
              label: "Memgraph Playground",
              href: "https://playground.memgraph.com"
            },
            {
              label: "GitHub",
              href: "https://github.com/memgraph/memgraph",
            },
            {
              label: "YouTube",
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
      appId: "R5T3EMHC2U",
      apiKey: "986c523abb1c0bbd68ec83d9ada11124",
      indexName: "g-despot",
      contextualSearch: true,
    },
    prism: {
      additionalLanguages: [
        "cypher",
        "php",
        "rust",
        "csharp",
        "java",
        "docker",
      ],
    },
    hideableSidebar: true,
    announcementBar: {
      id: "graphmodelingemailcourse",
      content:
        'Sign up for the new <a target="_blank" rel="noopener noreferrer" href="https://memgraph.com/learn-graph-modeling"><b>Graph Modeling Email Course</b></a> 📩',
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
      "@docusaurus/plugin-content-docs",
      {
        id: "gqlalchemy",
        path: "gqlalchemy",
        routeBasePath: "gqlalchemy",
        sidebarPath: require.resolve("./sidebars/sidebarsGQLAlchemy.js"),
        editUrl: "https://github.com/memgraph/docs/tree/master/",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/memgraph/",
            from: ["/memgraph/introduction"],
          },
          {
            to: "/memgraph/",
            from: ["/memgraph/overview"],
          },
          {
            to: "/memgraph/",
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
            to: "/memgraph/how-to-guides",
            from: ["/memgraph/how-to-guides-overview"],
          },
          {
            to: "/memgraph/reference-guide/profiling-queries",
            from: ["/memgraph/how-to-guides-overview/explain-profile"],
          },
          {
            to: "/memgraph/import-data",
            from: ["/memgraph/how-to-guides-overview/import-data"],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers",
            from: [
              "/memgraph/how-to-guides-overview/query-memgraph-programmatically",
            ],
          },
          {
            to: "/memgraph/how-to-guides/constraints/uniqueness-constraint",
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
            to: "/memgraph/how-to-guides/query-modules",
            from: ["/memgraph/how-to-guides-overview/implement-query-modules"],
          },
          {
            to: "/memgraph/reference-guide/query-modules/available-query-modules",
            from: [
              "/memgraph/how-to-guides-overview/use-query-modules-provided-by-memgraph",
            ],
          },
          {
            to: "/memgraph/how-to-guides/query-modules",
            from: [
              "/memgraph/how-to-guides-overview/use-and-implement-query-modules",
            ],
          },
          {
            to: "/memgraph/how-to-guides/manage-user-privileges",
            from: ["/memgraph/how-to-guides-overview/manage-user-privileges"],
          },
          {
            to: "/memgraph/how-to-guides/manage-users-using-ldap",
            from: ["/memgraph/how-to-guides-overview/manage-users-using-ldap"],
          },
          {
            to: "/memgraph/how-to-guides/work-with-docker",
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
            to: "/cypher-manual/import-data",
            from: ["/memgraph/reference-overview/writing-new-data"],
          },
          {
            to: "/cypher-manual/import-data",
            from: ["/memgraph/reference-overview/reading-and-writing"],
          },
          {
            to: "/memgraph/reference-guide/indexing",
            from: ["/memgraph/reference-overview/indexing"],
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
            to: "/memgraph/how-to-guides/networkx",
            from: ["/memgraph/reference-overview/networkx"],
          },
          {
            to: "/memgraph/how-to-guides/networkx",
            from: ["/memgraph/reference-overview/networkx/graph-analyzer"],
          },
          {
            to: "/memgraph/how-to-guides/networkx",
            from: ["/memgraph/reference-overview/networkx/wcc"],
          },
          {
            to: "/memgraph/how-to-guides/networkx",
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
            to: "/memgraph/under-the-hood/indexing",
            from: ["/memgraph/concepts-overview/indexing"],
          },
          {
            to: "/memgraph/under-the-hood/storage",
            from: ["/memgraph/concepts-overview/storage"],
          },
          {
            to: "/memgraph/under-the-hood/replication",
            from: ["/memgraph/concepts-overview/replication"],
          },
          //Memgraph Lab redirects
          {
            to: "/memgraph-lab/graph-style-script-language",
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
            to: "/memgraph/how-to-guides/work-with-docker",
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
            to: "/memgraph/connect-to-memgraph/drivers",
            from: ["/memgraph/getting-started/connecting-applications"],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/python",
            from: ["/memgraph/getting-started/connecting-applications/python"],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/rust",
            from: ["/memgraph/getting-started/connecting-applications/rust"],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/c-sharp",
            from: ["/memgraph/getting-started/connecting-applications/c-sharp"],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/java",
            from: ["/memgraph/getting-started/connecting-applications/java"],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/go",
            from: ["/memgraph/getting-started/connecting-applications/go"],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/javascript",
            from: [
              "/memgraph/getting-started/connecting-applications/javascript",
            ],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/php",
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
            to: "/memgraph/how-to-guides/networkx",
            from: ["/memgraph/reference-guide/networkx"],
          },
          {
            to: "/memgraph/how-to-guides/networkx",
            from: ["/memgraph/reference-guide/networkx/graph-analyzer"],
          },
          {
            to: "/memgraph/how-to-guides/networkx",
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
          //Cypher manual redirects because of new structure
          {
            to: "/cypher-manual/import-data",
            from: ["/cypher-manual/writing-new-data"],
          },
          {
            to: "/cypher-manual/import-data",
            from: ["/cypher-manual/reading-and-writing"],
          },
          {
            to: "/cypher-manual/differences",
            from: ["/cypher-manual/differences/patterns-in-expressions"],
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
          //How-to guides redirects
          {
            to: "/memgraph/how-to-guides",
            from: ["/memgraph/database-functionalities"],
          },
          {
            to: "/memgraph/how-to-guides/constraints/existence-constraint",
            from: [
              "/memgraph/database-functionalities/constraints/existence-constraint",
            ],
          },
          {
            to: "/memgraph/how-to-guides/constraints/uniqueness-constraint",
            from: [
              "/memgraph/database-functionalities/constraints/uniqueness-constraint",
            ],
          },
          {
            to: "/memgraph/reference-guide/inspecting-queries",
            from: ["/memgraph/database-functionalities/inspecting-queries"],
          },
          {
            to: "/memgraph/reference-guide/profiling-queries",
            from: ["/memgraph/database-functionalities/profiling-queries"],
          },
          {
            to: "/memgraph/reference-guide/memory-control",
            from: ["/memgraph/database-functionalities/memory-control"],
          },
          {
            to: "/memgraph/how-to-guides/networkx",
            from: ["/memgraph/database-functionalities/networkx"],
          },
          {
            to: "/memgraph/how-to-guides/query-modules",
            from: ["/memgraph/database-functionalities/query-modules"],
          },
          {
            to: "/memgraph/how-to-guides/query-modules",
            from: [
              "/memgraph/database-functionalities/query-modules/implement-query-modules",
            ],
          },
          {
            to: "/memgraph/how-to-guides/replication",
            from: ["/memgraph/database-functionalities/replication"],
          },
          {
            to: "/memgraph/reference-guide/triggers",
            from: ["/memgraph/database-functionalities/triggers"],
          },
          {
            to: "/memgraph/how-to-guides/manage-users-using-ldap",
            from: [
              "/memgraph/database-functionalities/manage-users-using-ldap",
            ],
          },
          {
            to: "/memgraph/how-to-guides/manage-user-privileges",
            from: ["/memgraph/database-functionalities/manage-user-privileges"],
          },
          {
            to: "/memgraph/reference-guide/triggers",
            from: ["/memgraph/how-to-guides/triggers"],
          },
          //Connect to Memgraph redirects
          {
            to: "/memgraph/connect-to-memgraph/mgconsole",
            from: ["/memgraph/connect-to-memgraph/methods/mgconsole"],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers",
            from: ["/memgraph/connect-to-memgraph/methods/drivers"],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/python",
            from: [
              "/memgraph/connect-to-memgraph/methods/building-applications/python",
            ],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/rust",
            from: [
              "/memgraph/connect-to-memgraph/methods/building-applications/rust",
            ],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/c-sharp",
            from: [
              "/memgraph/connect-to-memgraph/methods/building-applications/c-sharp",
            ],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/java",
            from: [
              "/memgraph/connect-to-memgraph/methods/building-applications/java",
            ],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/go",
            from: [
              "/memgraph/connect-to-memgraph/methods/building-applications/go",
            ],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/nodejs",
            from: [
              "/memgraph/connect-to-memgraph/methods/building-applications/nodejs",
            ],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/javascript",
            from: [
              "/memgraph/connect-to-memgraph/methods/building-applications/javascript",
            ],
          },
          {
            to: "/memgraph/connect-to-memgraph/drivers/php",
            from: [
              "/memgraph/connect-to-memgraph/methods/building-applications/php",
            ],
          },
          //Renaming Concepts to Under the hood
          {
            to: "/memgraph/under-the-hood",
            from: ["/memgraph/concepts"],
          },
          {
            to: "/memgraph/under-the-hood/storage",
            from: ["/memgraph/concepts/storage"],
          },
          {
            to: "/memgraph/under-the-hood/indexing",
            from: ["/memgraph/concepts/indexing"],
          },
          {
            to: "/memgraph/under-the-hood/replication",
            from: ["/memgraph/concepts/replication"],
          },
          {
            to: "/memgraph/under-the-hood/telemetry",
            from: ["/memgraph/concepts/telemetry"],
          },
          //Move Inspecting and optimizing queries from How-to guides to Reference guide
          {
            to: "/memgraph/reference-guide/inspecting-queries",
            from: ["/memgraph/how-to-guides/inspecting-queries"],
          },
          {
            to: "/memgraph/reference-guide/profiling-queries",
            from: ["/memgraph/how-to-guides/profiling-queries"],
          },
          //create redirect for Memgraph Getting started page
          {
            to: "/memgraph/",
            from: ["/memgraph/getting-started"],
          },
          {
            to: "/memgraph-lab/installation",
            from: ["/memgraph-lab/installation/overview"],
          },
          //Redirect for memory-control page
          {
            to: "/memgraph/reference-guide/memory-control",
            from: ["/memgraph/how-to-guides/memory-control"],
          },
          //Redirect for graph style script page
          {
            to: "/memgraph-lab/graph-style-script-language",
            from: ["/memgraph-lab/style-script/quick-start"],
          },
          //Redirect for query modules
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: [
              "/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_date_parameters",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: [
              "/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_duration_parameters",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: [
              "/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_edge_id",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: [
              "/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_edge_type",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: [
              "/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_label",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: [
              "/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_local_date_time_parameters",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: [
              "/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_local_time_parameters",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: [
              "/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_property",
            ],
          },
          {
            to: "/memgraph/reference-guide/query-modules/api/c-api",
            from: [
              "/memgraph/reference-guide/query-modules/api/c-api/classes/mgp_vertex_id",
            ],
          },
          // Redirect for temporal types
          {
            to: "/memgraph/reference-guide/data-types",
            from: ["/memgraph/reference-guide/temporal-types"],
          },
          // Redirect for query module how-to guides
          {
            to: "/memgraph/how-to-guides/query-modules",
            from: [
              "/memgraph/how-to-guides/query-modules/implement-query-modules",
            ],
          },
          // Redirect for the Docker how-to guide
          {
            to: "/memgraph/how-to-guides/work-with-docker",
            from: [
              "/memgraph/how-to-work-with-docker",
            ],
          },
          // Redirect for Graph algorithms
          {
            to: "/memgraph/reference-guide/built-in-graph-algorithms",
            from: ["/memgraph/reference-overview/graph-algorithms", "/memgraph/concepts-overview/graph-algorithms", "/memgraph/concepts/graph-algorithms", "/memgraph/under-the-hood/graph-algorithms", "/memgraph/reference-guide/graph-algorithms"],
          },
          // Redirect for CSV import tool
          {
            to: "/memgraph/import-data/load-csv-clause",
            from: ["/memgraph/import-data/csv/csv-import-tool", "/memgraph/import-data/csv-import-tool"],
          },
          // Redirect for the Streams
          {
            to: "/memgraph/import-data/data-streams/overview",
            from: ["/memgraph/database-functionalities/streams/kafka-streams", "/memgraph/how-to-guides/streams/kafka/kafka-streams", "/memgraph/database-functionalities/streams/kafka/kafka-streams", "/memgraph/how-to-guides/streams/pulsar/pulsar-streams", "/memgraph/database-functionalities/streams/pulsar/pulsar-streams", "/memgraph/import-data/kafka", "/memgraph/import-data/kafka/overview"],
          },
          {
            to: "/memgraph/reference-guide/streams/transformation-modules",
            from: ["/memgraph/how-to-guides/streams/kafka/implement-transformation-module", "/memgraph/database-functionalities/streams/kafka/implement-transformation-module", "/memgraph/how-to-guides/streams/pulsar/implement-transformation-module", "/memgraph/database-functionalities/streams/pulsar/implement-transformation-module", "/memgraph/database-functionalities/streams/implement-transformation-module"],
          },
          {
            to: "/memgraph/reference-guide/streams/transformation-modules/api/python-api",
            from: ["/memgraph/import-data/kafka/json", "/memgraph/import-data/kafka/avro", "/memgraph/import-data/kafka/protobuf"],
          },  
          {
            to: "/memgraph/import-data/data-streams/manage-streams-lab",
            from: ["/memgraph/how-to-guides/streams/kafka/connect-to-stream-from-lab"],
          },    
          // Redirect for the Transactions
          {
            to: "/memgraph/reference-guide/transactions",
            from: ["/memgraph/reference-guide/isolation-levels"],
          },
        ],
      },
    ],
  ],
  clientModules: [require.resolve("./src/components/analyticsCall.js")],
};
