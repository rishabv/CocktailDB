const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv(),
    require('autoprefixer'),
    require("tailwindcss")
  ]
};
