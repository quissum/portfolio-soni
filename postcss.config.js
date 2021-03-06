const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    cssnano(),
    postcssPresetEnv(),
    autoprefixer(),
    require('postcss-sorting'),
  ],
}
