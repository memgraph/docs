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
      items: ['query-modules/python/collapse',
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