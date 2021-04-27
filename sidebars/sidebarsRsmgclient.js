module.exports = {
  rsmgclient: [
    {
      type: 'link',
      label: 'CLI mgconsole',
      href: '/mgconsole',
    },
    {
      type: 'link',
      label: 'Python driver',
      href: '/pymgclient',
    },
    {
      type: 'category',
      label: 'Rust driver',
      items: [
        'introduction',
        {
          type: 'category',
          label: 'API reference',
          items: [
            'api-reference/overview',
            {
              type: 'category',
              label: 'Structs',
              items: ['api-reference/structs/connectparams',
                'api-reference/structs/connection',
                'api-reference/structs/mgerror',
                'api-reference/structs/node',
                'api-reference/structs/path',
                'api-reference/structs/record',
                'api-reference/structs/relationship',
                'api-reference/structs/unboundrelationship',],
            },
            {
              type: 'category',
              label: 'Enums',
              items: ['api-reference/enums/connectionstatus',
                'api-reference/enums/queryparam',
                'api-reference/enums/sslmode',
                'api-reference/enums/value',],
            },
          ],
        },
      ],
    },
    {
      type: 'link',
      label: 'Other drivers',
      href: '/memgraph/getting-started/connecting-applications',
    },
  ],
};