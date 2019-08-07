const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const path = require('path');


module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, '../src/index.three.js'),
  devServer: {
    contentBase: './dist',
    port: 3000
  }
});