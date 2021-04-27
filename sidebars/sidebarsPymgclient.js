module.exports = {
  pymgclient: [
    {
      type: 'link',
      label: 'CLI mgconsole',
      href: '/mgconsole',
    },
    {
      type: 'category',
      label: 'Python driver',
      items: [
        'introduction',
        'usage',
        {
          type: 'category',
          label: 'API reference',
          items: [
            'api-reference/overview',
            'api-reference/module',
            'api-reference/connection',
            'api-reference/cursor',
          ],

        },
      ],
    },
    {
      type: 'link',
      label: 'Rust driver',
      href: '/rsmgclient',
    },
    {
      type: 'link',
      label: 'Other drivers',
      href: '/memgraph/getting-started/connecting-applications',
    },
  ],
};