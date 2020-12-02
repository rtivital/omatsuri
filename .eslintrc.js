module.exports = {
  parser: 'babel-eslint',
  extends: ['@rtivital/eslint-config'],
  env: {
    browser: true,
    node: true,
  },

  rules: {
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },

  settings: {
    'import/resolver': {
      node: {},
      webpack: {},
    },
  },
};
