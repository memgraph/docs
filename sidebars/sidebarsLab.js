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
    {
      type: "category",
      label: "Style script language",
      items: ["style-script/quick-start", "style-script/reference-guide"],
    },
    "changelog",
  ],
};
