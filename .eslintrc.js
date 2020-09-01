module.exports = {
  parser: 'babel-eslint',
  extends: ['@rtivital/eslint-config'],
  env: {
    browser: true,
    node: true,
  },

  settings: {
    'import/resolver': {
      node: {},
      webpack: {},
    },
  },
};
