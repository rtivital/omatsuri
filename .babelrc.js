module.exports = {
  presets: ['@babel/preset-react', ['@babel/preset-env', { modules: false }]],

  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
  ],
};
