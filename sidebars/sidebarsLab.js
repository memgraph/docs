module.exports = {
  lab: [
    "getting-started",
    "connect-to-memgraph",
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
    {
      type: "category",
      label: "Style script",
      items: ["style-script/quick-start", "style-script/reference-guide"],
    },
    "changelog",
  ],
};
