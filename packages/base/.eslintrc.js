module.exports = {
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'wrap-iife': ['error', 'inside'],
    'no-iterator': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'nonblock-statement-body-position': 'off',
    curly: ['error', 'all'],
    'import/no-named-default': 'off',
  },
};
