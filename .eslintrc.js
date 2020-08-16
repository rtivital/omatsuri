module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
  },

  rules: {
    // some props require dangle
    'no-underscore-dangle': 'off',

    // sometimes it is better
    'no-nested-ternary': 'off',

    // controlled with prettier
    'arrow-parens': 'off',
    'function-paren-newline': 'off',

    // disabled for condition && someFunc()
    'no-unused-expressions': 'off',

    // backend developers like _, no need to transform data all the time
    camelcase: 'off',

    // just the formatting issues, prettier does all the job
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'spaced-comment': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    // increase max line length to 100
    'max-len': [
      'error',
      100,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // these rules are just bullshit
    'import/prefer-default-export': 'off',
    'react/no-danger': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/sort-comp': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'jsx-a11y/control-has-associated-label': 'off',

    // sometimes there is no alternative
    'react/no-array-index-key': 'off',

    // disable dev dependencies for storybook
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '**/*.story.jsx',
          '**/*.test.jsx',
          '**/storybook/*.js',
          '**/webpack.config.js',
          '**/*.webpack.config.js',
        ],
      },
    ],

    // rules are broken and provide falsy mistakes
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-typos': 'off', // https://github.com/yannickcr/eslint-plugin-react/issues/1389

    // it does not spoil anything if used wisely
    'jsx-a11y/no-autofocus': 'off',
  },

  settings: {
    'import/resolver': {
      node: {},
      webpack: {},
    },
  },
};
