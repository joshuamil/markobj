const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './'),
  entry: {
    app: './example.js',
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].bundle.js',
    publicPath: ''
  },
  devServer: {
    contentBase: path.resolve(__dirname, './app'),
  },
  stats: {
    colors: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
