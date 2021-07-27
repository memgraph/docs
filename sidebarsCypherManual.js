module.exports = {
  cypher_manual: [
    'overview',
    {
      type: 'category',
      label: 'Clauses',
      items: ['getting-started/reading-existing-data',
        'getting-started/writing-new-data',
        'getting-started/reading-and-writing',
      ],
    },
    'functions',
    {
      type: 'category',
      label: 'Clauses',
      items: ['clauses/clauses',
        'clauses/create',
        'clauses/delete',
        'clauses/match',
        'clauses/merge',
        'clauses/optional-match',
        'clauses/remove',
        'clauses/return',
        'clauses/set',
        'clauses/union',
        'clauses/unwind',
        'clauses/where',
        'clauses/with',
        'clauses/load-csv'],
    },
    'other-features',
    'differences',
  ],
};