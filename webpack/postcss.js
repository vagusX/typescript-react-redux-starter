
const webpack = require('webpack');

const postcssBasePlugins = [
  require('postcss-modules-local-by-default'),
  require('postcss-import')({
    addDependencyTo: webpack,
  }),
  require('postcss-cssnext')({
    browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8'],
  }),
];
const postcssDevPlugins = [];
const postcssProdPlugins = [
  require('cssnano')({
    safe: true,
    sourcemap: true,
    autoprefixer: false,
  }),
];

const postcssPlugins = postcssBasePlugins
  .concat(process.env.NODE_ENV === 'production' ? postcssProdPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? postcssDevPlugins : []);

module.exports = () => {
  return postcssPlugins;
};