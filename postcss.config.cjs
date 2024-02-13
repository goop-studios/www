const postcssScss = require('postcss-scss');

module.exports = {
  syntax: postcssScss,
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};