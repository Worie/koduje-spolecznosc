const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./base.js');

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: './src/index.html',
      filename: './index.html'
    }),
  ]
})
