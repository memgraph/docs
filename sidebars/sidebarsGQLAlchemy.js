module.exports = {
  gqlalchemy: [
    "getting-started",
    "installation",
    {
      type: "category",
      label: "How-to guides",
      link: {
        type: "generated-index",
      },
      items: [
        "how-to-guides/overview",
        "how-to-guides/import-data",
        "how-to-guides/visualize-graphs",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "generated-index",
      },
      items: ["tutorials/overview"],
    },
    "networkx",
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
      },
      items: ["reference/overview"],
    },
    "changelog",
  ],
};
