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
        'query-modules/python/biconnected-components',
        'query-modules/python/bipartite-matching',
        'query-modules/python/bridges',
        'query-modules/python/cycles',
        'query-modules/python/weakly-connected-components',
        'query-modules/python/distance-calculator',
        'query-modules/python/graph-analyzer',
        'query-modules/python/graph-coloring',
        'query-modules/python/nxalg',
        'query-modules/python/set-cover',
        'query-modules/python/tsp',],
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