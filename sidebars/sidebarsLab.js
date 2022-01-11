module.exports = {
  lab: [
    "getting-started",
    {
      type: "category",
      label: "Installation",
      items: [
        "installation/overview",
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
