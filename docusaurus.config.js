const baseUrl = "/";
const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "Memgraph Docs",
  tagline: "Welcome to the Memgraph Docs site!",
  url: "https://memgraph-archive-docs.netlify.app",
  baseUrl,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/social-logo-round-corners.png",
  organizationName: "memgraph",
  projectName: "docs",
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Encode+Sans+Condensed:500,600",
    "https://fonts.googleapis.com/css?family=Roboto:400, 500,600",
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  scripts: [
    {
      src: "https://kit.fontawesome.com/3a9f2eb5b9.js",
    },
  ],
  themeConfig: {
    metadata: [
      {
        name: "robots",
        content: "noindex",
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
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
          type: "docsVersionDropdown",
          docsPluginId: "memgraph",
          position: "right",
        },
        {
          type: "html",
          className: "github-stars",
          value:
            '<iframe src="https://ghbtns.com/github-btn.html?user=memgraph&repo=memgraph&type=star&count=true&size=large" frameborder="0" scrolling="0" title="Give Memgraph a Star on GitHub!"></iframe>',
          position: "right",
        },
        {
          href: "https://discord.gg/memgraph",
          className: "header-discord-link",
          position: "right",
          "aria-label": "Memgraph Discord community",
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
              href: "https://memgraph.com/docs/memgraph/",
            },
            {
              label: "Memgraph Lab",
              href: "https://memgraph.com/docs/memgraph-lab/",
            },
            {
              label: "Memgraph Cloud",
              to: "https://memgraph.com/docs/memgraph-cloud/",
            },
            {
              label: "Cypher manual",
              to: "https://memgraph.com/docs/cypher-manual/",
            },
            {
              label: "MAGE",
              to: "https://memgraph.com/docs/mage",
            },
            {
              label: "GQLAlchemy",
              to: "https://memgraph.com/docs/gqlalchemy/",
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
              href: "https://memgraph.com/cloud",
            },
            {
              label: "Memgraph Playground",
              href: "https://playground.memgraph.com",
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
        width: 160,
        height: 74,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Memgraph. Built by developers, for developers!`,
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
    announcementBar: {
      id: "visit-docs-site",
      content:
        'Visit the up-to-date <a target="_blank" rel="noopener noreferrer" href="https://www.memgraph.com/docs"><b>Memgraph documentation!</b></a>',
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
          includeCurrentVersion: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
