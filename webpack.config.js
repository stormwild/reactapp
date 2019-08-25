const webpack = require('webpack');
const path = require('path');

const SRC = path.resolve(__dirname, 'ClientApp');
const PUBLIC = path.resolve(__dirname, 'public');

const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const config = {
  entry: SRC + '/Client.js',
  output: {
    path: PUBLIC,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PUBLIC,
    port: 9000,
    open: true,
    historyApiFallback: true
  }
};

module.exports = merge(base, config);
