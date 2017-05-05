const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
//const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'js', 'Main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      /*{
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      include: path.resolve(__dirname, '/src/js'),
      use: [
        {
          loader: 'eslint-loader',
          options: {
            failOnWarning: true,
            failOnError: true
          }
        }
      ]
    },*/
    {
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, 'src', 'js'),
      use: ['babel-loader', 'eslint-loader']
    },
    {
      test: /\.scss$/,
      include: path.resolve(__dirname, 'src', 'css'),
      exclude: /node_modules/,
      //use: extractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "sass-loader"] }),
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/js/components/')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html',
    }),
    //new extractTextPlugin(path.join(__dirname, 'dist', 'bundle.css')),
  ]
}