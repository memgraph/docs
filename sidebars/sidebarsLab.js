module.exports = {
  lab: [
    "getting-started",
    {
      type: "category",
      label: "Install Memgraph Lab",
      link: {type: 'doc', id: 'installation/overview'},
      items: [
        "installation/windows",
        "installation/macos",
        "installation/linux",
      ],
    },
    "connect-to-memgraph",
    "user-manual",
    {
      type: "category",
      label: "Graph Style Script language",
      link: { type: "doc", id: "style-script/graph-style-script-language" },
      items: [
        {
          type: "category",
          label: "GSS reference guide",
          link: { type: "doc", id: "style-script/reference-guide" },
          items: [
            "style-script/gss-colors",
            "style-script/gss-functions",
            "style-script/gss-variables",
            "style-script/gss-viewstyle-directive",
            "style-script/gss-viewstyle-map-directive",
            "style-script/gss-edgestyle-directive",
            "style-script/gss-nodestyle-directive",
          ]
        }
      ],
    },
    "changelog",
  ],
};
