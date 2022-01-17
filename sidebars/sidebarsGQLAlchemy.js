module.exports = {
  gqlalchemy: [
    "getting-started",
    "installation",
    {
      type: "category",
      label: "How-to guides",
      items: [
        "how-to-guides/overview",
        {
          type: "category",
          label: "Use object graph mapper",
          items: [
            "how-to-guides/ogm/map-nodes-and-relationships",
            "how-to-guides/ogm/save-nodes-and-relationships",
            "how-to-guides/ogm/load-nodes-and-relationships",
          ],
        },
        {
          type: "category",
          label: "Use query builder",
          items: [
            "how-to-guides/query-builder/create-query",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: ["tutorials/overview"],
    },
    "networkx",
    {
      type: "category",
      label: "Reference",
      items: ["reference/overview"],
    },
    "changelog",
  ],
};
