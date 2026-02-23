const autoprefixer = require('autoprefixer');
const postcssPresetMantine = require('postcss-preset-mantine');
const postcssNesting = require('postcss-nesting');
const postcssSimpleVars = require('postcss-simple-vars');

module.exports = {
  plugins: [
    postcssSimpleVars,
    postcssPresetMantine(),
    postcssNesting,
    autoprefixer,
  ],
};
