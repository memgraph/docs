const baseUrl = '/';

module.exports = {
  title: 'Memgraph Docs',
  tagline: 'Welcome to the Memgraph Docs site!',
  url: 'https://docs.memgraph.com',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/social-logo-round-corners.png',
  organizationName: 'memgraph',
  projectName: 'docs',
  scripts: [
    {
      src: `https://docs.memgraph.com/js/load-analytics.js`,
      //src: `http://localhost:3000/js/load-analytics.js`,
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Memgraph Logo',
        src: 'img/social-logo-round-corners.png',
      },
      items: [
        {
          to: '/memgraph/overview',
          label: 'Memgraph DB',
          position: 'left',
          activeBaseRegex: `/memgraph/`,
          items: [
            {
              label: 'Getting started',
              to: '/memgraph/getting-started',
            },
            {
              label: 'Installation',
              to: '/memgraph/getting-started/installation',
            },
            {
              label: 'Database functionalities',
              to: '/memgraph/database-functionalities',
            },
            {
              label: 'Building applications',
              to: '/memgraph/getting-started/connecting-applications',
            },
            {
              label: 'Reference guide',
              to: '/memgraph/reference-guide',
            },
          ]
        },
        {
          to: '/memgraph-lab/',
          label: 'Memgraph Lab',
          position: 'left',
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
          to: '/cypher-manual/',
          label: 'Cypher manual',
          position: 'left',
          activeBaseRegex: `/cypher-manual/`,
          items: [
            {
              label: 'Overview',
              to: '/cypher-manual/',
            },
            {
              label: 'Functions',
              to: '/cypher-manual/functions',
            },
            {
              label: 'Clauses',
              to: '/cypher-manual/clauses',
            },
            {
              label: 'Other features',
              to: '/cypher-manual/other-features',
            },
            {
              label: 'Differences',
              to: '/cypher-manual/differences',
            },
          ]
        },
        {
          to: '/mage',
          label: 'MAGE',
          position: 'left',
          activeBaseRegex: `/mage/`,
          items: [
            {
              label: 'Overview',
              to: '/mage',
            },
            {
              label: 'Installation',
              to: '/mage/installation',
            },
            {
              label: 'Usage',
              to: '/mage/usage/calling-procedures',
            },
            {
              label: 'Contributing',
              to: '/mage/contributing',
            },
            {
              label: 'Getting help',
              to: '/mage/getting-help',
            },
          ]
        },
        {
          to: '/help-center',
          label: 'Help Center',
          position: 'left',
          activeBaseRegex: `/help-center/`,
        },
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'memgraph',
          position: 'right',
        },
        {
          href: 'https://github.com/memgraph',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Memgraph DB',
              to: '/memgraph/overview',
            },
            {
              label: 'Memgraph Lab',
              to: '/memgraph-lab',
            },
            /*
            {
              label: 'Memgraph Cloud',
              to: '/memgraph-cloud',
            },
            */
            {
              label: 'Cypher manual',
              to: '/cypher-manual',
            },
            {
              label: 'MAGE',
              to: '/mage',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/memgraphdb',
            },
            {
              label: 'Developer Forum',
              href: 'https://discourse.memgraph.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/memgraphdb',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/memgraph',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCZ3HOJvHGxtQ_JHxOselBYg',
            },
          ],
        },
      ],
      logo: {
        alt: 'Memgraph Logo',
        src: 'img/Memgraph-logo-white-rgb.png',
        href: 'https://memgraph.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Memgraph. Built by developers, for developers!`,
    },
    algolia: {
      apiKey: '05acf33bff73974c131732d34307085e',
      indexName: 'g-despot',
    },
    prism: {
      additionalLanguages: ['cypher', 'php'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'memgraph',
          path: 'docs',
          routeBasePath: 'memgraph',
          sidebarPath: require.resolve('./sidebarsMemgraph.js'),
          editUrl:
            'https://github.com/memgraph/docs/tree/master/',
          versions: {
            current: {
              label: `Unreleased 🚧`,
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'lab',
        path: 'lab',
        routeBasePath: 'memgraph-lab',
        sidebarPath: require.resolve('./sidebarsLab.js'),
        editUrl:
          'https://github.com/memgraph/docs/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cloud',
        path: 'cloud',
        routeBasePath: 'memgraph-cloud',
        sidebarPath: require.resolve('./sidebarsCloud.js'),
        editUrl:
          'https://github.com/memgraph/docs/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cypher-manual',
        path: 'cypher-manual',
        routeBasePath: 'cypher-manual',
        sidebarPath: require.resolve('./sidebarsCypherManual.js'),
        editUrl:
          'https://github.com/memgraph/docs/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mage',
        path: 'mage',
        routeBasePath: 'mage',
        sidebarPath: require.resolve('./sidebarsMAGE.js'),
        editUrl:
          'https://github.com/memgraph/docs/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'help-center',
        path: 'help-center',
        routeBasePath: 'help-center',
        sidebarPath: require.resolve('./sidebarsHelpCenter.js'),
        editUrl:
          'https://github.com/memgraph/docs/tree/master/',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/memgraph/overview',
            from: ['/memgraph/introduction',],
          },
          {
            to: '/memgraph/getting-started',
            from: ['/memgraph/quick-start',],
          },
          //Tutorial redirects
          {
            to: '/memgraph/tutorials/tutorials',
            from: ['/memgraph/tutorials-overview',],
          },
          {
            to: '/memgraph/tutorials/analyzing-ted-talks',
            from: ['/memgraph/tutorials-overview/analyzing-ted-talks',],
          },
          {
            to: '/memgraph/tutorials/backpacking-through-europe',
            from: ['/memgraph/tutorials-overview/backpacking-through-europe',],
          },
          {
            to: '/memgraph/tutorials/exploring-the-european-road-network',
            from: ['/memgraph/tutorials-overview/exploring-the-european-road-network',],
          },
          {
            to: '/memgraph/tutorials/football-transfers',
            from: ['/memgraph/tutorials-overview/football-transfers',],
          },
          {
            to: '/memgraph/tutorials/graphing-the-premier-league',
            from: ['/memgraph/tutorials-overview/graphing-the-premier-league',],
          },
          {
            to: '/memgraph/tutorials/marvel-universe',
            from: ['/memgraph/tutorials-overview/marvel-universe',],
          },
          {
            to: '/memgraph/tutorials/movie-recommendation',
            from: ['/memgraph/tutorials-overview/movie-recommendation',],
          },
          {
            to: '/memgraph/tutorials/understanding-music-with-modules',
            from: ['/memgraph/tutorials-overview/understanding-music-with-modules',],
          },
          {
            to: '/memgraph/tutorials/social-network-analysis',
            from: ['/memgraph/tutorials-overview/social-network-analysis',],
          },
          //How-to guides redirects
          {
            to: '/memgraph/database-functionalities',
            from: ['/memgraph/how-to-guides-overview',],
          },
          {
            to: '/memgraph/database-functionalities/profiling-queries',
            from: ['/memgraph/how-to-guides-overview/explain-profile',],
          },
          {
            to: '/memgraph/database-functionalities/import-data',
            from: ['/memgraph/how-to-guides-overview/import-data',],
          },
          {
            to: '/memgraph/getting-started/connecting-applications',
            from: ['/memgraph/how-to-guides-overview/query-memgraph-programmatically',],
          },
          {
            to: '/memgraph/database-functionalities/constraints/uniqueness-constraint',
            from: ['/memgraph/how-to-guides-overview/enforce-constraints',],
          },
          {
            to: '/memgraph/database-functionalities/query-modules/load-call-query-modules',
            from: ['/memgraph/how-to-guides-overview/load-query-modules',],
          },
          {
            to: '/memgraph/database-functionalities/query-modules/load-call-query-modules',
            from: ['/memgraph/how-to-guides-overview/call-query-module-procedures',],
          },
          {
            to: '/memgraph/database-functionalities/query-modules/implement-query-modules',
            from: ['/memgraph/how-to-guides-overview/implement-query-modules',],
          },
          {
            to: '/memgraph/database-functionalities/query-modules/built-in-query-modules',
            from: ['/memgraph/how-to-guides-overview/use-query-modules-provided-by-memgraph',],
          },
          {
            to: '/memgraph/database-functionalities/query-modules/implement-query-modules',
            from: ['/memgraph/how-to-guides-overview/use-and-implement-query-modules',],
          },
          {
            to: '/memgraph/database-functionalities/manage-user-privileges',
            from: ['/memgraph/how-to-guides-overview/manage-user-privileges',],
          },
          {
            to: '/memgraph/database-functionalities/manage-users-using-ldap',
            from: ['/memgraph/how-to-guides-overview/manage-users-using-ldap',],
          },
          {
            to: '/memgraph/how-to-work-with-docker',
            from: ['/memgraph/how-to-guides-overview/work-with-docker',],
          },
          {
            to: '/memgraph/reference-guide/backup',
            from: ['/memgraph/database-functionalities/backup',],
          },
          //Reference guide redirects
          {
            to: '/memgraph/reference-guide/configuration',
            from: ['/memgraph/reference-overview/configuration',],
          },
          {
            to: '/cypher-manual/reading-existing-data',
            from: ['/memgraph/reference-overview/reading-existing-data',],
          },
          {
            to: '/cypher-manual/writing-new-data',
            from: ['/memgraph/reference-overview/writing-new-data',],
          },
          {
            to: '/cypher-manual/reading-and-writing',
            from: ['/memgraph/reference-overview/reading-and-writing',],
          },
          {
            to: '/memgraph/reference-guide/indexing',
            from: ['/memgraph/reference-overview/indexing',],
          },
          {
            to: '/memgraph/reference-guide/graph-algorithms',
            from: ['/memgraph/reference-overview/graph-algorithms',],
          },
          {
            to: '/memgraph/reference-guide/query-modules',
            from: ['/memgraph/reference-overview/query-modules',],
          },
          {
            to: '/memgraph/reference-guide/query-modules/c-api',
            from: ['/memgraph/reference-overview/query-modules/c-api',],
          },
          {
            to: '/memgraph/reference-guide/query-modules/python-api',
            from: ['/memgraph/reference-overview/query-modules/python-api',],
          },
          {
            to: '/memgraph/reference-guide/networkx',
            from: ['/memgraph/reference-overview/networkx',],
          },
          {
            to: '/memgraph/reference-guide/networkx/graph-analyzer',
            from: ['/memgraph/reference-overview/networkx/graph-analyzer',],
          },
          {
            to: '/memgraph/reference-guide/networkx/wcc',
            from: ['/memgraph/reference-overview/networkx/wcc',],
          },
          {
            to: '/memgraph/reference-guide/networkx/nxalg',
            from: ['/memgraph/reference-overview/networkx/nxalg',],
          },
          {
            to: '/memgraph/reference-guide/security',
            from: ['/memgraph/reference-overview/security',],
          },
          {
            to: '/memgraph/reference-guide/auth-module',
            from: ['/memgraph/reference-overview/auth-module',],
          },
          {
            to: '/memgraph/reference-guide/ldap-security',
            from: ['/memgraph/reference-overview/ldap-security',],
          },
          {
            to: '/memgraph/reference-guide/audit-log',
            from: ['/memgraph/reference-overview/audit-log',],
          },
          {
            to: '/cypher-manual/other-features',
            from: ['/memgraph/reference-overview/other-features',],
          },
          {
            to: '/cypher-manual/differences',
            from: ['/memgraph/reference-overview/differences',],
          },
          //Cypher manual redirects
          {
            to: '/cypher-manual/',
            from: ['/memgraph/open-cypher',],
          },
          {
            to: '/cypher-manual/functions',
            from: ['/memgraph/open-cypher/functions',],
          },
          {
            to: '/cypher-manual/clauses',
            from: ['/memgraph/open-cypher/clauses',],
          },
          {
            to: '/cypher-manual/clauses/create',
            from: ['/memgraph/open-cypher/clauses/create',],
          },
          {
            to: '/cypher-manual/clauses/delete',
            from: ['/memgraph/open-cypher/clauses/delete',],
          },
          {
            to: '/cypher-manual/clauses/match',
            from: ['/memgraph/open-cypher/clauses/match',],
          },
          {
            to: '/cypher-manual/clauses/merge',
            from: ['/memgraph/open-cypher/clauses/merge',],
          },
          {
            to: '/cypher-manual/clauses/optional-match',
            from: ['/memgraph/open-cypher/clauses/optional-match',],
          },
          {
            to: '/cypher-manual/clauses/remove',
            from: ['/memgraph/open-cypher/clauses/remove',],
          },
          {
            to: '/cypher-manual/clauses/return',
            from: ['/memgraph/open-cypher/clauses/return',],
          },
          {
            to: '/cypher-manual/clauses/set',
            from: ['/memgraph/open-cypher/clauses/set',],
          },
          {
            to: '/cypher-manual/clauses/union',
            from: ['/memgraph/open-cypher/clauses/union',],
          },
          {
            to: '/cypher-manual/clauses/unwind',
            from: ['/memgraph/open-cypher/clauses/unwind',],
          },
          {
            to: '/cypher-manual/clauses/where',
            from: ['/memgraph/open-cypher/clauses/where',],
          },
          {
            to: '/cypher-manual/clauses/with',
            from: ['/memgraph/open-cypher/clauses/with',],
          },
          //Concepts redirects
          {
            to: '/memgraph/concepts/indexing',
            from: ['/memgraph/concepts-overview/indexing',],
          },
          {
            to: '/memgraph/concepts/storage',
            from: ['/memgraph/concepts-overview/storage',],
          },
          {
            to: '/memgraph/concepts/graph-algorithms',
            from: ['/memgraph/concepts-overview/graph-algorithms',],
          },
          {
            to: '/memgraph/concepts/replication',
            from: ['/memgraph/concepts-overview/replication',],
          },
          //Machine learning redirects
          {
            to: '/memgraph/database-functionalities/tensorflow-setup',
            from: ['/machine-learning/tensorflow-op',],
          },
          {
            to: '/memgraph/database-functionalities/tensorflow-setup',
            from: ['/machine-learning/tensorflow-op/tensorflow',],
          },
          //FAQ redirects
          {
            to: '/memgraph/getting-help/faq',
            from: ['/memgraph/faq',],
          },
          //Memgraph Lab redirects
          {
            to: '/memgraph-lab/style-script/quick-start',
            from: ['/memgraph-lab/style_script',],
          },
          {
            to: '/memgraph-lab/installation/osx-installation',
            from: ['/memgraph-lab/how_to_install_memgraph_lab_on_macos',],
          },
          //Memgraph installation redirects
          {
            to: '/memgraph/getting-started/installation',
            from: ['/memgraph/getting-started/installation/docker-installation',],
          },
          {
            to: '/memgraph/install-memgraph-on-windows-wsl',
            from: ['/memgraph/getting-started/installation/wsl-installation',],
          },
          {
            to: '/memgraph/install-memgraph-on-debian',
            from: ['/memgraph/getting-started/installation/debian-installation',],
          },
          {
            to: '/memgraph/install-memgraph-from-rpm',
            from: ['/memgraph/getting-started/installation/rpm-installation',],
          },
          {
            to: '/memgraph/how-to-work-with-docker',
            from: ['/memgraph/database-functionalities/work-with-docker',],
          },
          //Memgraph getting started redirects
          {
            to: '/memgraph/getting-started/querying',
            from: ['/memgraph/getting-started/querying/querying',],
          },
        ],
      },
    ],
  ],
  clientModules: [
    require.resolve('./src/components/analyticsCall.js'),
  ],
};
