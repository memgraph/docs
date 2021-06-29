module.exports = {
  mage: [
    'overview',
    'installation',
    {
      type: 'category',
      label: 'Usage',
      items: ['usage/loading-modules',
        'usage/calling-procedures',],
    },
    {
      type: 'category',
      label: 'Query modules',
      items: [
        'query-modules/cpp/betweenness-centrality',
        'query-modules/cpp/biconnected-components',
        'query-modules/cpp/bipartite-matching',
        'query-modules/cpp/bridges',
        'query-modules/cpp/cycles',
        'query-modules/python/distance-calculator',
        'query-modules/python/graph-analyzer',
        'query-modules/python/graph-coloring',
        'query-modules/python/nxalg',
        'query-modules/python/pagerank',
        'query-modules/python/set-cover',
        'query-modules/python/tsp',
        'query-modules/python/vrp',
        'query-modules/cpp/weakly-connected-components'],
    },
    'contributing',
    {
      type: 'category',
      label: 'Getting help',
      items: ['getting-help/getting-help',
        'getting-help/faq',],
    },
  ],
};