const webpack = require('webpack');
const path = require('path');

const SRC = path.resolve(__dirname, 'ClientApp');
const PUBLIC = path.resolve(__dirname, 'public');

const config = {
  entry: SRC + '/Client.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-2',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  },
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

module.exports = config;
